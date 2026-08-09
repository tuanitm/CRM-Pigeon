-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- IDENTITY TABLES (5)
-- ============================================

CREATE TABLE "customer" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "phone" VARCHAR(20) UNIQUE,
  "email" VARCHAR(255),
  "full_name" VARCHAR(255),
  "gender" VARCHAR(10),
  "date_of_birth" DATE,
  "avatar_url" TEXT,
  "registration_source" VARCHAR(50),
  "data_quality_flag" VARCHAR(50),
  "is_merged" BOOLEAN NOT NULL DEFAULT false,
  "merged_into_id" UUID REFERENCES "customer"("id"),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "customer_identity" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "identity_type" VARCHAR(30) NOT NULL,
  "identity_value" VARCHAR(255) NOT NULL,
  "priority" INT NOT NULL DEFAULT 0,
  "verified" BOOLEAN NOT NULL DEFAULT false,
  "verified_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE("identity_type", "identity_value")
);

CREATE TABLE "merge_candidate" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id_a" UUID NOT NULL REFERENCES "customer"("id"),
  "customer_id_b" UUID NOT NULL REFERENCES "customer"("id"),
  "match_reason" VARCHAR(100),
  "confidence_score" DECIMAL(5,2),
  "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
  "reviewed_by" UUID,
  "reviewed_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "customer_address" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "label" VARCHAR(50),
  "address_line1" VARCHAR(255),
  "address_line2" VARCHAR(255),
  "ward" VARCHAR(100),
  "district" VARCHAR(100),
  "province" VARCHAR(100),
  "country" VARCHAR(10) NOT NULL DEFAULT 'VN',
  "is_default" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "customer_tag" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "tag" VARCHAR(100) NOT NULL,
  "source" VARCHAR(50),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE("customer_id", "tag")
);

-- ============================================
-- BABY PROFILE TABLES (3)
-- ============================================

CREATE TABLE "baby" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "name" VARCHAR(255),
  "gender" VARCHAR(10),
  "date_of_birth" DATE,
  "due_date" DATE,
  "is_born" BOOLEAN NOT NULL DEFAULT false,
  "stage_code" VARCHAR(30),
  "feeding_type" VARCHAR(20),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "baby_growth_log" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "baby_id" UUID NOT NULL REFERENCES "baby"("id"),
  "recorded_at" DATE NOT NULL,
  "weight_kg" DECIMAL(5,2),
  "height_cm" DECIMAL(5,1),
  "head_circumference_cm" DECIMAL(5,1),
  "notes" TEXT,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE "baby_stage_history" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "baby_id" UUID NOT NULL REFERENCES "baby"("id"),
  "stage_code" VARCHAR(30) NOT NULL,
  "started_at" TIMESTAMPTZ NOT NULL,
  "ended_at" TIMESTAMPTZ,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- CONSENT TABLES (2)
-- ============================================

CREATE TABLE "consent_document_version" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "document_type" VARCHAR(50) NOT NULL,
  "version" VARCHAR(20) NOT NULL,
  "content_url" TEXT,
  "effective_from" TIMESTAMPTZ NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE("document_type", "version")
);

CREATE TABLE "consent" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "customer_id" UUID NOT NULL REFERENCES "customer"("id"),
  "channel" VARCHAR(30) NOT NULL,
  "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
  "document_version_id" UUID REFERENCES "consent_document_version"("id"),
  "granted_at" TIMESTAMPTZ,
  "revoked_at" TIMESTAMPTZ,
  "ip_address" VARCHAR(45),
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX "idx_customer_phone" ON "customer"("phone");
CREATE INDEX "idx_customer_email" ON "customer"("email");
CREATE INDEX "idx_customer_identity_customer" ON "customer_identity"("customer_id");
CREATE INDEX "idx_customer_identity_lookup" ON "customer_identity"("identity_type", "identity_value");
CREATE INDEX "idx_baby_customer" ON "baby"("customer_id");
CREATE INDEX "idx_baby_stage" ON "baby"("stage_code");
CREATE INDEX "idx_consent_customer_channel" ON "consent"("customer_id", "channel");
