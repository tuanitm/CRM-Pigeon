-- ============================================
-- WARRANTY & AUTHENTICATION (4)
-- ============================================

CREATE TABLE "serial_batch" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "batch_code" VARCHAR(50) UNIQUE NOT NULL,
  "product_id" UUID NOT NULL REFERENCES "product"("id"),
  "quantity" INT NOT NULL,
  "manufactured_at" DATE,
  "expires_at" DATE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "product_serial" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "serial_code" VARCHAR(100) UNIQUE NOT NULL,
  "batch_id" UUID NOT NULL REFERENCES "serial_batch"("id"),
  "product_id" UUID NOT NULL REFERENCES "product"("id"),
  "status" VARCHAR(20) NOT NULL DEFAULT 'active',
  "claimed_by" UUID REFERENCES "customer"("id"),
  "claimed_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "serial_scan" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "serial_id" UUID NOT NULL REFERENCES "product_serial"("id"),
  "customer_id" UUID REFERENCES "customer"("id"),
  "scan_result" VARCHAR(20) NOT NULL,
  "ip_address" VARCHAR(45),
  "user_agent" TEXT,
  "scanned_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "warranty_registration" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "product_id" UUID NOT NULL REFERENCES "product"("id"),
  "serial_id" UUID REFERENCES "product_serial"("id"),
  "purchase_date" DATE,
  "warranty_start" DATE NOT NULL,
  "warranty_end" DATE NOT NULL,
  "status" VARCHAR(20) NOT NULL DEFAULT 'active',
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- LOYALTY (6)
-- ============================================

CREATE TABLE "loyalty_tier_config" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "tier_code" VARCHAR(30) UNIQUE NOT NULL,
  "tier_name" VARCHAR(100) NOT NULL,
  "tier_order" INT NOT NULL,
  "min_net_spend" DECIMAL(12,2) NOT NULL DEFAULT 0,
  "min_distinct_months" INT NOT NULL DEFAULT 0,
  "points_multiplier" DECIMAL(4,2) NOT NULL DEFAULT 1.0,
  "benefits" JSONB DEFAULT '{}',
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "loyalty_account" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID UNIQUE NOT NULL REFERENCES "customer"("id"),
  "tier_id" UUID REFERENCES "loyalty_tier_config"("id"),
  "points_balance" INT NOT NULL DEFAULT 0,
  "points_lifetime" INT NOT NULL DEFAULT 0,
  "points_redeemed" INT NOT NULL DEFAULT 0,
  "points_expired" INT NOT NULL DEFAULT 0,
  "net_spend" DECIMAL(12,2) NOT NULL DEFAULT 0,
  "distinct_order_months" INT NOT NULL DEFAULT 0,
  "tier_evaluated_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "loyalty_transaction" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "loyalty_account_id" UUID NOT NULL REFERENCES "loyalty_account"("id"),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "type" VARCHAR(20) NOT NULL,
  "source" VARCHAR(50) NOT NULL,
  "points" INT NOT NULL,
  "balance_after" INT NOT NULL,
  "reference_type" VARCHAR(50),
  "reference_id" UUID,
  "description" TEXT,
  "expires_at" TIMESTAMPTZ,
  "idempotency_key" VARCHAR(255) UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "loyalty_earn_rule" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "source" VARCHAR(50) NOT NULL,
  "rule_name" VARCHAR(255) NOT NULL,
  "points_formula" JSONB NOT NULL,
  "conditions" JSONB DEFAULT '{}',
  "tier_multiplier_applies" BOOLEAN NOT NULL DEFAULT true,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "valid_from" TIMESTAMPTZ,
  "valid_until" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "reward_catalog" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "code" VARCHAR(50) UNIQUE NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "category" VARCHAR(50),
  "points_cost" INT NOT NULL,
  "stock" INT,
  "image_url" TEXT,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "valid_from" TIMESTAMPTZ,
  "valid_until" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "reward_redemption" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "loyalty_account_id" UUID NOT NULL REFERENCES "loyalty_account"("id"),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "reward_id" UUID NOT NULL REFERENCES "reward_catalog"("id"),
  "points_spent" INT NOT NULL,
  "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
  "fulfilled_at" TIMESTAMPTZ,
  "idempotency_key" VARCHAR(255) UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- GAMIFICATION & REFERRAL (4)
-- ============================================

CREATE TABLE "milestone_definition" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "code" VARCHAR(50) UNIQUE NOT NULL,
  "title" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "milestone_order" INT NOT NULL,
  "criteria" JSONB NOT NULL,
  "points_reward" INT NOT NULL DEFAULT 0,
  "badge_image_url" TEXT,
  "celebration_image_url" TEXT,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "milestone_progress" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "milestone_id" UUID NOT NULL REFERENCES "milestone_definition"("id"),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "baby_id" UUID REFERENCES "baby"("id"),
  "progress_value" DECIMAL(10,2) NOT NULL DEFAULT 0,
  "is_completed" BOOLEAN NOT NULL DEFAULT false,
  "completed_at" TIMESTAMPTZ,
  "points_awarded" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE("milestone_id", "customer_id", "baby_id")
);

CREATE TABLE "referral_code" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "code" VARCHAR(20) UNIQUE NOT NULL,
  "max_uses" INT,
  "current_uses" INT NOT NULL DEFAULT 0,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "referral_conversion" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "referral_code_id" UUID NOT NULL REFERENCES "referral_code"("id"),
  "referrer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "referred_id" UUID NOT NULL REFERENCES "customer"("id"),
  "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
  "referrer_points" INT NOT NULL DEFAULT 0,
  "referred_points" INT NOT NULL DEFAULT 0,
  "converted_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE("referral_code_id", "referred_id")
);

-- ============================================
-- SUBSCRIPTIONS (4)
-- ============================================

CREATE TABLE "subscription" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "status" VARCHAR(20) NOT NULL DEFAULT 'active',
  "frequency_days" INT NOT NULL,
  "next_delivery_date" DATE,
  "payment_method_token" VARCHAR(255),
  "payment_retry_count" INT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "subscription_item" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "subscription_id" UUID NOT NULL REFERENCES "subscription"("id"),
  "product_id" UUID NOT NULL REFERENCES "product"("id"),
  "quantity" INT NOT NULL DEFAULT 1,
  "unit_price" DECIMAL(12,2) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "subscription_delivery" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "subscription_id" UUID NOT NULL REFERENCES "subscription"("id"),
  "order_id" UUID REFERENCES "order"("id"),
  "scheduled_date" DATE NOT NULL,
  "status" VARCHAR(20) NOT NULL DEFAULT 'scheduled',
  "delivered_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "replenishment_schedule" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "product_id" UUID NOT NULL REFERENCES "product"("id"),
  "cycle_days" INT NOT NULL,
  "cycle_source" VARCHAR(30) NOT NULL,
  "last_purchase_at" TIMESTAMPTZ,
  "next_reminder_at" TIMESTAMPTZ,
  "reminder_count" INT NOT NULL DEFAULT 0,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE("customer_id", "product_id")
);

-- Indexes
CREATE INDEX "idx_loyalty_account_customer" ON "loyalty_account"("customer_id");
CREATE INDEX "idx_loyalty_txn_account" ON "loyalty_transaction"("loyalty_account_id");
CREATE INDEX "idx_loyalty_txn_expires" ON "loyalty_transaction"("expires_at") WHERE "expires_at" IS NOT NULL;
CREATE INDEX "idx_serial_code" ON "product_serial"("serial_code");
CREATE INDEX "idx_replenish_next" ON "replenishment_schedule"("next_reminder_at") WHERE "is_active" = true;
