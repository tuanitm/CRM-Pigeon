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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerialController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_service_1 = require("../shared/prisma/prisma.service");
const points_service_1 = require("../engines/loyalty/points.service");
const uuid_1 = require("uuid");
let SerialController = class SerialController {
    prisma;
    pointsService;
    constructor(prisma, pointsService) {
        this.prisma = prisma;
        this.pointsService = pointsService;
    }
    async verifySerial(data) {
        const serial = await this.prisma.$queryRaw `
      SELECT ps.*, p.name as product_name, p.category, sb.batch_code
      FROM product_serial ps
      JOIN product p ON p.id = ps.product_id
      JOIN serial_batch sb ON sb.id = ps.batch_id
      WHERE ps.serial_code = ${data.serialCode}
    `;
        if (!serial.length) {
            return { valid: false, message: 'Serial code not found. This product may not be authentic.' };
        }
        const s = serial[0];
        const scanResult = s.status === 'active' ? 'authentic' : 'already_claimed';
        await this.prisma.$executeRaw `
      INSERT INTO serial_scan (id, serial_id, scan_result, ip_address, scanned_at)
      VALUES (uuid_generate_v4(), ${s.id}::uuid, ${scanResult}, ${data.ipAddress}, NOW())
    `;
        return {
            valid: true,
            scanResult,
            product: { name: s.product_name, category: s.category },
            canClaim: s.status === 'active',
        };
    }
    async claimSerial(data) {
        const serials = await this.prisma.product_serial.findMany({
            where: { serial_code: data.serialCode },
            include: { product: true }
        });
        if (!serials.length) {
            return { status: 'error', message: 'Serial code not found.' };
        }
        const serial = serials[0];
        if (serial.status !== 'active') {
            return { status: 'error', message: 'This serial code has already been claimed.' };
        }
        await this.prisma.product_serial.update({
            where: { id: serial.id },
            data: {
                status: 'claimed',
                claimed_by: data.customerId,
                claimed_at: new Date(),
            }
        });
        await this.prisma.serial_scan.create({
            data: {
                serial_id: serial.id,
                customer_id: data.customerId,
                scan_result: 'claimed',
            }
        });
        const result = await this.pointsService.earnPoints({
            customerId: data.customerId,
            source: 'qr_scan',
            points: 100,
            referenceType: 'product_serial',
            referenceId: serial.id,
            description: `Claimed QR code for ${serial.product.name}`,
            idempotencyKey: (0, uuid_1.v4)()
        });
        if (result.success) {
            return { status: 'claimed', message: 'Points awarded successfully', newBalance: result.newBalance };
        }
        else {
            return { status: 'error', message: result.error };
        }
    }
};
exports.SerialController = SerialController;
__decorate([
    (0, common_1.Post)('verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Verify product serial (public — no auth required)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SerialController.prototype, "verifySerial", null);
__decorate([
    (0, common_1.Post)('claim'),
    (0, swagger_1.ApiOperation)({ summary: 'Claim serial for points (requires auth)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SerialController.prototype, "claimSerial", null);
exports.SerialController = SerialController = __decorate([
    (0, swagger_1.ApiTags)('QR Verification'),
    (0, common_1.Controller)('serials'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        points_service_1.PointsService])
], SerialController);
//# sourceMappingURL=serial.controller.js.map