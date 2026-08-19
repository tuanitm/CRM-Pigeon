export declare class IdentifyDto {
    phone?: string;
    email?: string;
    anonymousId?: string;
    fullName?: string;
    traits?: Record<string, any>;
    idempotencyKey?: string;
    babies?: Array<{
        name: string;
        dateOfBirth: string;
        gender: string;
        stageCode?: string;
    }>;
    userAgent?: string;
    source?: string;
    pinCode?: string;
}
