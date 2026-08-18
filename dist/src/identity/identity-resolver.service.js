"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var IdentityResolverService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityResolverService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/prisma/prisma.service");
let IdentityResolverService = IdentityResolverService_1 = class IdentityResolverService {
    prisma;
    logger = new common_1.Logger(IdentityResolverService_1.name);
    PRIORITY_MAP = {
        phone: 1,
        email: 2,
        zalo_id: 3,
        woo_customer_id: 4,
        device_id: 5,
        cookie_id: 6,
        ip_ua: 7,
        anonymous_id: 8,
    };
    constructor(prisma) {
        this.prisma = prisma;
    }
    async resolve(identities) {
        const sorted = identities
            .filter((i) => this.PRIORITY_MAP[i.type] !== undefined)
            .sort((a, b) => (this.PRIORITY_MAP[a.type] || 99) - (this.PRIORITY_MAP[b.type] || 99));
        for (const identity of sorted) {
            if (identity.type === 'phone') {
                const customer = await this.prisma.customer.findUnique({
                    where: { phone: identity.value },
                    select: { id: true },
                });
                if (customer)
                    return customer.id;
            }
            const found = await this.prisma.customerIdentity.findUnique({
                where: {
                    identityType_identityValue: {
                        identityType: identity.type,
                        identityValue: identity.value,
                    },
                },
                select: { customerId: true },
            });
            if (found)
                return found.customerId;
        }
        return null;
    }
    async linkIdentity(customerId, type, value) {
        const existing = await this.prisma.customerIdentity.findUnique({
            where: {
                identityType_identityValue: {
                    identityType: type,
                    identityValue: value,
                },
            },
        });
        if (existing && existing.customerId !== customerId) {
            await this.prisma.mergeCandidate.create({
                data: {
                    customerIdA: customerId,
                    customerIdB: existing.customerId,
                    matchReason: `Shared ${type}: ${value}`,
                    confidenceScore: type === 'phone' ? 95 : 70,
                    status: 'pending',
                },
            });
            this.logger.warn(`Merge candidate queued: ${customerId} <-> ${existing.customerId} via ${type}`);
            return;
        }
        if (!existing) {
            await this.prisma.customerIdentity.create({
                data: {
                    customerId,
                    identityType: type,
                    identityValue: value,
                    priority: this.PRIORITY_MAP[type] || 99,
                },
            });
        }
    }
};
exports.IdentityResolverService = IdentityResolverService;
exports.IdentityResolverService = IdentityResolverService = IdentityResolverService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], IdentityResolverService);
//# sourceMappingURL=identity-resolver.service.js.map