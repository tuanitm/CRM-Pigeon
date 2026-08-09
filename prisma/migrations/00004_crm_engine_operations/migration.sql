-- ============================================
-- CRM ENGINE (9)
-- ============================================

CREATE TABLE "segment" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "code" VARCHAR(50) UNIQUE NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "rules" JSONB NOT NULL DEFAULT '{}',
  "refresh_mode" VARCHAR(20) NOT NULL DEFAULT 'scheduled',
  "is_system" BOOLEAN NOT NULL DEFAULT false,
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "member_count" INT NOT NULL DEFAULT 0,
  "last_evaluated_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "segment_membership" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "segment_id" UUID NOT NULL REFERENCES "segment"("id"),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "entered_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "exited_at" TIMESTAMPTZ,
  UNIQUE("segment_id", "customer_id")
);

CREATE TABLE "journey" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "code" VARCHAR(50) UNIQUE NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "graph" JSONB NOT NULL DEFAULT '{}',
  "trigger_event" VARCHAR(100),
  "trigger_segment_id" UUID REFERENCES "segment"("id"),
  "entry_conditions" JSONB DEFAULT '{}',
  "exit_conditions" JSONB DEFAULT '{}',
  "version" INT NOT NULL DEFAULT 1,
  "status" VARCHAR(20) NOT NULL DEFAULT 'draft',
  "has_control_group" BOOLEAN NOT NULL DEFAULT false,
  "control_group_pct" DECIMAL(5,2) DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "journey_run" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "journey_id" UUID NOT NULL REFERENCES "journey"("id"),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "current_node_id" VARCHAR(100),
  "status" VARCHAR(20) NOT NULL DEFAULT 'active',
  "entered_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "exited_at" TIMESTAMPTZ,
  "exit_reason" VARCHAR(100),
  "journey_version" INT NOT NULL DEFAULT 1,
  "context" JSONB DEFAULT '{}'
);

CREATE TABLE "journey_step_log" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "journey_run_id" UUID NOT NULL REFERENCES "journey_run"("id"),
  "node_id" VARCHAR(100) NOT NULL,
  "node_type" VARCHAR(30) NOT NULL,
  "action" VARCHAR(100),
  "result" JSONB DEFAULT '{}',
  "executed_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "message_template" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "code" VARCHAR(50) UNIQUE NOT NULL,
  "channel" VARCHAR(30) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "subject" VARCHAR(255),
  "body" TEXT NOT NULL,
  "variables" JSONB DEFAULT '[]',
  "provider_template_id" VARCHAR(100),
  "approval_status" VARCHAR(20) NOT NULL DEFAULT 'draft',
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "message_log" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "template_id" UUID REFERENCES "message_template"("id"),
  "channel" VARCHAR(30) NOT NULL,
  "status" VARCHAR(20) NOT NULL,
  "suppression_reason" VARCHAR(100),
  "provider_message_id" VARCHAR(255),
  "cost" DECIMAL(10,4),
  "cost_currency" VARCHAR(3) DEFAULT 'VND',
  "journey_run_id" UUID REFERENCES "journey_run"("id"),
  "sent_at" TIMESTAMPTZ,
  "delivered_at" TIMESTAMPTZ,
  "opened_at" TIMESTAMPTZ,
  "clicked_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "frequency_counter" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "channel" VARCHAR(30) NOT NULL,
  "window_start" TIMESTAMPTZ NOT NULL,
  "window_end" TIMESTAMPTZ NOT NULL,
  "count" INT NOT NULL DEFAULT 0,
  UNIQUE("customer_id", "channel", "window_start")
);

CREATE TABLE "campaign_control_group" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "journey_id" UUID REFERENCES "journey"("id"),
  "group" VARCHAR(20) NOT NULL DEFAULT 'control',
  "assigned_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE("customer_id", "journey_id")
);

-- ============================================
-- DATA QUALITY (3)
-- ============================================

CREATE TABLE "data_quality_rule" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "code" VARCHAR(50) UNIQUE NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "rule_type" VARCHAR(30) NOT NULL,
  "conditions" JSONB NOT NULL,
  "severity" VARCHAR(20) NOT NULL DEFAULT 'warning',
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "data_quality_flag_log" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "rule_id" UUID NOT NULL REFERENCES "data_quality_rule"("id"),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "flag_reason" TEXT,
  "resolved" BOOLEAN NOT NULL DEFAULT false,
  "resolved_by" UUID,
  "resolved_at" TIMESTAMPTZ,
  "flagged_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "data_layer_definition" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "layer_name" VARCHAR(30) UNIQUE NOT NULL,
  "description" TEXT,
  "filter_rules" JSONB NOT NULL DEFAULT '{}',
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- AGGREGATES (6)
-- ============================================

CREATE TABLE "customer_metrics_daily" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "date" DATE NOT NULL,
  "total_orders" INT NOT NULL DEFAULT 0,
  "total_revenue" DECIMAL(12,2) NOT NULL DEFAULT 0,
  "total_items" INT NOT NULL DEFAULT 0,
  "page_views" INT NOT NULL DEFAULT 0,
  "sessions" INT NOT NULL DEFAULT 0,
  "points_earned" INT NOT NULL DEFAULT 0,
  "points_spent" INT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE("customer_id", "date")
);

CREATE TABLE "product_purchase_cycle" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "product_id" UUID NOT NULL REFERENCES "product"("id"),
  "stage_code" VARCHAR(30),
  "median_days" INT,
  "sample_count" INT NOT NULL DEFAULT 0,
  "calculated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE("product_id", "stage_code")
);

CREATE TABLE "kpi_daily_snapshot" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "date" DATE UNIQUE NOT NULL,
  "total_customers" INT NOT NULL DEFAULT 0,
  "new_customers" INT NOT NULL DEFAULT 0,
  "active_customers" INT NOT NULL DEFAULT 0,
  "total_orders" INT NOT NULL DEFAULT 0,
  "total_revenue" DECIMAL(14,2) NOT NULL DEFAULT 0,
  "avg_order_value" DECIMAL(12,2) NOT NULL DEFAULT 0,
  "messages_sent" INT NOT NULL DEFAULT 0,
  "messages_delivered" INT NOT NULL DEFAULT 0,
  "points_issued" INT NOT NULL DEFAULT 0,
  "points_redeemed" INT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "rfm_snapshot" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "period" VARCHAR(10) NOT NULL,
  "recency_score" INT NOT NULL,
  "frequency_score" INT NOT NULL,
  "monetary_score" INT NOT NULL,
  "rfm_segment" VARCHAR(50) NOT NULL,
  "is_discount_hunter" BOOLEAN NOT NULL DEFAULT false,
  "calculated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE("customer_id", "period")
);

CREATE TABLE "points_liability_snapshot" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "snapshot_date" DATE UNIQUE NOT NULL,
  "total_outstanding_points" BIGINT NOT NULL DEFAULT 0,
  "estimated_liability_vnd" DECIMAL(14,2) NOT NULL DEFAULT 0,
  "points_expiring_30d" INT NOT NULL DEFAULT 0,
  "points_expiring_90d" INT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- OPERATIONS & COMPLIANCE (7)
-- ============================================

CREATE TABLE "role" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "name" VARCHAR(50) UNIQUE NOT NULL,
  "description" TEXT,
  "permissions" JSONB NOT NULL DEFAULT '[]',
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "admin_user" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "email" VARCHAR(255) UNIQUE NOT NULL,
  "password_hash" VARCHAR(255) NOT NULL,
  "full_name" VARCHAR(255) NOT NULL,
  "role_id" UUID NOT NULL REFERENCES "role"("id"),
  "is_active" BOOLEAN NOT NULL DEFAULT true,
  "last_login_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "audit_log" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "admin_user_id" UUID REFERENCES "admin_user"("id"),
  "action" VARCHAR(100) NOT NULL,
  "entity_type" VARCHAR(50),
  "entity_id" UUID,
  "old_values" JSONB,
  "new_values" JSONB,
  "ip_address" VARCHAR(45),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "webhook_inbox" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "source" VARCHAR(50) NOT NULL,
  "event_type" VARCHAR(100),
  "payload" JSONB NOT NULL,
  "headers" JSONB,
  "signature_valid" BOOLEAN,
  "processed" BOOLEAN NOT NULL DEFAULT false,
  "processed_at" TIMESTAMPTZ,
  "error" TEXT,
  "received_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "integration_job" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "job_type" VARCHAR(50) NOT NULL,
  "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
  "input" JSONB DEFAULT '{}',
  "output" JSONB DEFAULT '{}',
  "error" TEXT,
  "started_at" TIMESTAMPTZ,
  "completed_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "dsr_request" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "request_type" VARCHAR(30) NOT NULL,
  "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
  "requested_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "completed_at" TIMESTAMPTZ,
  "export_url" TEXT,
  "handled_by" UUID REFERENCES "admin_user"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- THREE MANDATORY DATA LAYER VIEWS
-- ============================================

CREATE VIEW v_orders_reported AS
  SELECT * FROM "order";

CREATE VIEW v_orders_cleaned AS
  SELECT o.* FROM "order" o
  JOIN customer c ON c.id = o.customer_id
  WHERE o.status NOT IN ('cancelled', 'refunded')
    AND o.is_gwp = false
    AND o.is_internal = false
    AND c.data_quality_flag IS NULL;

CREATE VIEW v_orders_operational AS
  SELECT vc.* FROM v_orders_cleaned vc
  JOIN customer c ON c.id = vc.customer_id
  WHERE EXISTS (
    SELECT 1 FROM consent
    WHERE customer_id = c.id AND status = 'granted'
  )
  AND NOT EXISTS (
    SELECT 1 FROM campaign_control_group
    WHERE customer_id = c.id AND "group" = 'control'
  );

-- Indexes
CREATE INDEX "idx_segment_membership_customer" ON "segment_membership"("customer_id");
CREATE INDEX "idx_segment_membership_segment" ON "segment_membership"("segment_id");
CREATE INDEX "idx_journey_run_customer" ON "journey_run"("customer_id");
CREATE INDEX "idx_journey_run_journey" ON "journey_run"("journey_id");
CREATE INDEX "idx_message_log_customer" ON "message_log"("customer_id");
CREATE INDEX "idx_message_log_sent" ON "message_log"("sent_at");
CREATE INDEX "idx_rfm_snapshot_period" ON "rfm_snapshot"("period");
CREATE INDEX "idx_audit_log_entity" ON "audit_log"("entity_type", "entity_id");
CREATE INDEX "idx_webhook_inbox_unprocessed" ON "webhook_inbox"("processed") WHERE "processed" = false;

-- Insert default data layers
INSERT INTO "data_layer_definition" ("layer_name", "description", "filter_rules") VALUES
  ('reported', 'Raw data — for reconciliation and auditing only', '{}'),
  ('cleaned', 'Excludes cancelled, refunded, GWP, internal, flagged profiles — for RFM, CLV', '{"exclude_status": ["cancelled","refunded"], "exclude_gwp": true, "exclude_internal": true, "exclude_flagged": true}'),
  ('operational', 'Cleaned + consent granted + not in control group — for sending messages', '{"requires_consent": true, "exclude_control_group": true}');

-- Insert default loyalty tiers
INSERT INTO "loyalty_tier_config" ("tier_code", "tier_name", "tier_order", "min_net_spend", "min_distinct_months", "points_multiplier", "benefits") VALUES
  ('MEMBER', 'Member', 1, 0, 0, 1.0, '{"welcome_points": 100}'),
  ('SILVER', 'Silver', 2, 2000000, 3, 1.2, '{"birthday_bonus": true, "exclusive_offers": true}'),
  ('GOLD', 'Gold', 3, 5000000, 6, 1.5, '{"birthday_bonus": true, "exclusive_offers": true, "priority_support": true, "free_shipping": true}');
