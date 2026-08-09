-- ============================================
-- EVENT STORE (partitioned!) + BEHAVIOR TABLES (9)
-- ============================================

CREATE TABLE "event" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
  "customer_id" UUID REFERENCES "customer"("id"),
  "anonymous_id" VARCHAR(255),
  "event_type" VARCHAR(100) NOT NULL,
  "properties" JSONB NOT NULL DEFAULT '{}',
  "context" JSONB DEFAULT '{}',
  "idempotency_key" VARCHAR(255),
  "source" VARCHAR(50),
  "occurred_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "received_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY ("id", "occurred_at")
) PARTITION BY RANGE ("occurred_at");

-- Create partitions for 2026-2027
CREATE TABLE event_2026_07 PARTITION OF "event" FOR VALUES FROM ('2026-07-01') TO ('2026-08-01');
CREATE TABLE event_2026_08 PARTITION OF "event" FOR VALUES FROM ('2026-08-01') TO ('2026-09-01');
CREATE TABLE event_2026_09 PARTITION OF "event" FOR VALUES FROM ('2026-09-01') TO ('2026-10-01');
CREATE TABLE event_2026_10 PARTITION OF "event" FOR VALUES FROM ('2026-10-01') TO ('2026-11-01');
CREATE TABLE event_2026_11 PARTITION OF "event" FOR VALUES FROM ('2026-11-01') TO ('2026-12-01');
CREATE TABLE event_2026_12 PARTITION OF "event" FOR VALUES FROM ('2026-12-01') TO ('2027-01-01');
CREATE TABLE event_2027_q1 PARTITION OF "event" FOR VALUES FROM ('2027-01-01') TO ('2027-04-01');
CREATE TABLE event_2027_q2 PARTITION OF "event" FOR VALUES FROM ('2027-04-01') TO ('2027-07-01');

CREATE INDEX "idx_event_customer" ON "event"("customer_id", "occurred_at");
CREATE INDEX "idx_event_type" ON "event"("event_type", "occurred_at");
CREATE INDEX "idx_event_idempotency" ON "event"("idempotency_key");
CREATE INDEX "idx_event_properties" ON "event" USING GIN ("properties");

CREATE TABLE "session" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID REFERENCES "customer"("id"),
  "anonymous_id" VARCHAR(255),
  "started_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "ended_at" TIMESTAMPTZ,
  "page_views" INT NOT NULL DEFAULT 0,
  "utm_source" VARCHAR(100),
  "utm_medium" VARCHAR(100),
  "utm_campaign" VARCHAR(100),
  "device_type" VARCHAR(20),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "quiz_definition" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "code" VARCHAR(50) UNIQUE NOT NULL,
  "title" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "questions" JSONB NOT NULL DEFAULT '[]',
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "quiz_response" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "quiz_id" UUID NOT NULL REFERENCES "quiz_definition"("id"),
  "customer_id" UUID REFERENCES "customer"("id"),
  "anonymous_id" VARCHAR(255),
  "answers" JSONB NOT NULL DEFAULT '{}',
  "result" JSONB,
  "completed_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "checklist_definition" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "code" VARCHAR(50) UNIQUE NOT NULL,
  "title" VARCHAR(255) NOT NULL,
  "stage_code" VARCHAR(30),
  "items" JSONB NOT NULL DEFAULT '[]',
  "points_reward" INT NOT NULL DEFAULT 0,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "checklist_progress" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "checklist_id" UUID NOT NULL REFERENCES "checklist_definition"("id"),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "baby_id" UUID REFERENCES "baby"("id"),
  "completed_items" JSONB NOT NULL DEFAULT '[]',
  "is_completed" BOOLEAN NOT NULL DEFAULT false,
  "completed_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "expert_topic" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "title" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "expert_name" VARCHAR(255),
  "stage_codes" JSONB DEFAULT '[]',
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "expert_slot" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "topic_id" UUID NOT NULL REFERENCES "expert_topic"("id"),
  "slot_date" DATE NOT NULL,
  "start_time" TIME NOT NULL,
  "end_time" TIME NOT NULL,
  "max_bookings" INT NOT NULL DEFAULT 1,
  "current_bookings" INT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "expert_booking" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "slot_id" UUID NOT NULL REFERENCES "expert_slot"("id"),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "baby_id" UUID REFERENCES "baby"("id"),
  "status" VARCHAR(20) NOT NULL DEFAULT 'confirmed',
  "notes" TEXT,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- TRANSACTION TABLES (6)
-- ============================================

CREATE TABLE "product" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "sku" VARCHAR(100) UNIQUE NOT NULL,
  "woo_product_id" BIGINT UNIQUE,
  "name" VARCHAR(255) NOT NULL,
  "category" VARCHAR(100),
  "subcategory" VARCHAR(100),
  "brand" VARCHAR(100) DEFAULT 'PIGEON',
  "stage_codes" JSONB DEFAULT '[]',
  "price" DECIMAL(12,2),
  "is_gwp" BOOLEAN NOT NULL DEFAULT false,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "product_lifecycle_rule" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "product_id" UUID NOT NULL REFERENCES "product"("id"),
  "stage_code" VARCHAR(30),
  "replace_days" INT NOT NULL,
  "usage_unit" VARCHAR(20),
  "usage_quantity" DECIMAL(8,2),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "order" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "woo_order_id" BIGINT UNIQUE,
  "order_number" VARCHAR(50),
  "status" VARCHAR(30) NOT NULL,
  "total_amount" DECIMAL(12,2) NOT NULL DEFAULT 0,
  "discount_amount" DECIMAL(12,2) NOT NULL DEFAULT 0,
  "net_amount" DECIMAL(12,2) NOT NULL DEFAULT 0,
  "currency" VARCHAR(3) NOT NULL DEFAULT 'VND',
  "channel" VARCHAR(30),
  "is_gwp" BOOLEAN NOT NULL DEFAULT false,
  "is_internal" BOOLEAN NOT NULL DEFAULT false,
  "ordered_at" TIMESTAMPTZ NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "order_item" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "order_id" UUID NOT NULL REFERENCES "order"("id"),
  "product_id" UUID REFERENCES "product"("id"),
  "sku" VARCHAR(100),
  "quantity" INT NOT NULL DEFAULT 1,
  "unit_price" DECIMAL(12,2) NOT NULL,
  "total_price" DECIMAL(12,2) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "product_exchange" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "original_order_id" UUID REFERENCES "order"("id"),
  "original_product_id" UUID REFERENCES "product"("id"),
  "new_product_id" UUID REFERENCES "product"("id"),
  "reason" TEXT,
  "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "review" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "product_id" UUID NOT NULL REFERENCES "product"("id"),
  "order_id" UUID REFERENCES "order"("id"),
  "rating" INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  "content" TEXT,
  "is_verified_purchase" BOOLEAN NOT NULL DEFAULT false,
  "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX "idx_order_customer" ON "order"("customer_id");
CREATE INDEX "idx_order_status" ON "order"("status");
CREATE INDEX "idx_order_item_order" ON "order_item"("order_id");
CREATE INDEX "idx_product_sku" ON "product"("sku");
CREATE INDEX "idx_product_stage" ON "product" USING GIN("stage_codes");
