# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Required for Prisma Client on Alpine Linux
RUN apk add --no-cache openssl

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies (including devDependencies needed for build)
RUN npm ci

# Copy application source code
COPY . .

# Generate Prisma Client and build the NestJS application
RUN npx prisma generate
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /app

# Required for Prisma Client on Alpine Linux
RUN apk add --no-cache openssl

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install only production dependencies
RUN npm ci --omit=dev

# Copy generated Prisma Client and built application from the builder stage
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/dist ./dist

# Expose the application port
EXPOSE 5170

# Run Prisma migrations and then start the application
CMD ["sh", "-c", "npx --yes prisma migrate deploy && npm run start:prod"]
