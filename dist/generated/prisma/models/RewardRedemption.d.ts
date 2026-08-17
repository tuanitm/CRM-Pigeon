import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RewardRedemptionModel = runtime.Types.Result.DefaultSelection<Prisma.$RewardRedemptionPayload>;
export type AggregateRewardRedemption = {
    _count: RewardRedemptionCountAggregateOutputType | null;
    _avg: RewardRedemptionAvgAggregateOutputType | null;
    _sum: RewardRedemptionSumAggregateOutputType | null;
    _min: RewardRedemptionMinAggregateOutputType | null;
    _max: RewardRedemptionMaxAggregateOutputType | null;
};
export type RewardRedemptionAvgAggregateOutputType = {
    pointsSpent: number | null;
};
export type RewardRedemptionSumAggregateOutputType = {
    pointsSpent: number | null;
};
export type RewardRedemptionMinAggregateOutputType = {
    id: string | null;
    loyaltyAccountId: string | null;
    customerId: string | null;
    rewardId: string | null;
    pointsSpent: number | null;
    status: string | null;
    shipmentNo: string | null;
    trackingLink: string | null;
    fulfilledAt: Date | null;
    idempotencyKey: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RewardRedemptionMaxAggregateOutputType = {
    id: string | null;
    loyaltyAccountId: string | null;
    customerId: string | null;
    rewardId: string | null;
    pointsSpent: number | null;
    status: string | null;
    shipmentNo: string | null;
    trackingLink: string | null;
    fulfilledAt: Date | null;
    idempotencyKey: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RewardRedemptionCountAggregateOutputType = {
    id: number;
    loyaltyAccountId: number;
    customerId: number;
    rewardId: number;
    pointsSpent: number;
    status: number;
    shipmentNo: number;
    trackingLink: number;
    fulfilledAt: number;
    idempotencyKey: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RewardRedemptionAvgAggregateInputType = {
    pointsSpent?: true;
};
export type RewardRedemptionSumAggregateInputType = {
    pointsSpent?: true;
};
export type RewardRedemptionMinAggregateInputType = {
    id?: true;
    loyaltyAccountId?: true;
    customerId?: true;
    rewardId?: true;
    pointsSpent?: true;
    status?: true;
    shipmentNo?: true;
    trackingLink?: true;
    fulfilledAt?: true;
    idempotencyKey?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RewardRedemptionMaxAggregateInputType = {
    id?: true;
    loyaltyAccountId?: true;
    customerId?: true;
    rewardId?: true;
    pointsSpent?: true;
    status?: true;
    shipmentNo?: true;
    trackingLink?: true;
    fulfilledAt?: true;
    idempotencyKey?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RewardRedemptionCountAggregateInputType = {
    id?: true;
    loyaltyAccountId?: true;
    customerId?: true;
    rewardId?: true;
    pointsSpent?: true;
    status?: true;
    shipmentNo?: true;
    trackingLink?: true;
    fulfilledAt?: true;
    idempotencyKey?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RewardRedemptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardRedemptionWhereInput;
    orderBy?: Prisma.RewardRedemptionOrderByWithRelationInput | Prisma.RewardRedemptionOrderByWithRelationInput[];
    cursor?: Prisma.RewardRedemptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RewardRedemptionCountAggregateInputType;
    _avg?: RewardRedemptionAvgAggregateInputType;
    _sum?: RewardRedemptionSumAggregateInputType;
    _min?: RewardRedemptionMinAggregateInputType;
    _max?: RewardRedemptionMaxAggregateInputType;
};
export type GetRewardRedemptionAggregateType<T extends RewardRedemptionAggregateArgs> = {
    [P in keyof T & keyof AggregateRewardRedemption]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRewardRedemption[P]> : Prisma.GetScalarType<T[P], AggregateRewardRedemption[P]>;
};
export type RewardRedemptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardRedemptionWhereInput;
    orderBy?: Prisma.RewardRedemptionOrderByWithAggregationInput | Prisma.RewardRedemptionOrderByWithAggregationInput[];
    by: Prisma.RewardRedemptionScalarFieldEnum[] | Prisma.RewardRedemptionScalarFieldEnum;
    having?: Prisma.RewardRedemptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RewardRedemptionCountAggregateInputType | true;
    _avg?: RewardRedemptionAvgAggregateInputType;
    _sum?: RewardRedemptionSumAggregateInputType;
    _min?: RewardRedemptionMinAggregateInputType;
    _max?: RewardRedemptionMaxAggregateInputType;
};
export type RewardRedemptionGroupByOutputType = {
    id: string;
    loyaltyAccountId: string;
    customerId: string;
    rewardId: string;
    pointsSpent: number;
    status: string;
    shipmentNo: string | null;
    trackingLink: string | null;
    fulfilledAt: Date | null;
    idempotencyKey: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RewardRedemptionCountAggregateOutputType | null;
    _avg: RewardRedemptionAvgAggregateOutputType | null;
    _sum: RewardRedemptionSumAggregateOutputType | null;
    _min: RewardRedemptionMinAggregateOutputType | null;
    _max: RewardRedemptionMaxAggregateOutputType | null;
};
export type GetRewardRedemptionGroupByPayload<T extends RewardRedemptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RewardRedemptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RewardRedemptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RewardRedemptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RewardRedemptionGroupByOutputType[P]>;
}>>;
export type RewardRedemptionWhereInput = {
    AND?: Prisma.RewardRedemptionWhereInput | Prisma.RewardRedemptionWhereInput[];
    OR?: Prisma.RewardRedemptionWhereInput[];
    NOT?: Prisma.RewardRedemptionWhereInput | Prisma.RewardRedemptionWhereInput[];
    id?: Prisma.UuidFilter<"RewardRedemption"> | string;
    loyaltyAccountId?: Prisma.UuidFilter<"RewardRedemption"> | string;
    customerId?: Prisma.UuidFilter<"RewardRedemption"> | string;
    rewardId?: Prisma.UuidFilter<"RewardRedemption"> | string;
    pointsSpent?: Prisma.IntFilter<"RewardRedemption"> | number;
    status?: Prisma.StringFilter<"RewardRedemption"> | string;
    shipmentNo?: Prisma.StringNullableFilter<"RewardRedemption"> | string | null;
    trackingLink?: Prisma.StringNullableFilter<"RewardRedemption"> | string | null;
    fulfilledAt?: Prisma.DateTimeNullableFilter<"RewardRedemption"> | Date | string | null;
    idempotencyKey?: Prisma.StringNullableFilter<"RewardRedemption"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RewardRedemption"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RewardRedemption"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    loyalty_account?: Prisma.XOR<Prisma.LoyaltyAccountScalarRelationFilter, Prisma.LoyaltyAccountWhereInput>;
    reward_catalog?: Prisma.XOR<Prisma.RewardCatalogScalarRelationFilter, Prisma.RewardCatalogWhereInput>;
};
export type RewardRedemptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    loyaltyAccountId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    rewardId?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    shipmentNo?: Prisma.SortOrderInput | Prisma.SortOrder;
    trackingLink?: Prisma.SortOrderInput | Prisma.SortOrder;
    fulfilledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    loyalty_account?: Prisma.LoyaltyAccountOrderByWithRelationInput;
    reward_catalog?: Prisma.RewardCatalogOrderByWithRelationInput;
};
export type RewardRedemptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    idempotencyKey?: string;
    AND?: Prisma.RewardRedemptionWhereInput | Prisma.RewardRedemptionWhereInput[];
    OR?: Prisma.RewardRedemptionWhereInput[];
    NOT?: Prisma.RewardRedemptionWhereInput | Prisma.RewardRedemptionWhereInput[];
    loyaltyAccountId?: Prisma.UuidFilter<"RewardRedemption"> | string;
    customerId?: Prisma.UuidFilter<"RewardRedemption"> | string;
    rewardId?: Prisma.UuidFilter<"RewardRedemption"> | string;
    pointsSpent?: Prisma.IntFilter<"RewardRedemption"> | number;
    status?: Prisma.StringFilter<"RewardRedemption"> | string;
    shipmentNo?: Prisma.StringNullableFilter<"RewardRedemption"> | string | null;
    trackingLink?: Prisma.StringNullableFilter<"RewardRedemption"> | string | null;
    fulfilledAt?: Prisma.DateTimeNullableFilter<"RewardRedemption"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RewardRedemption"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RewardRedemption"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    loyalty_account?: Prisma.XOR<Prisma.LoyaltyAccountScalarRelationFilter, Prisma.LoyaltyAccountWhereInput>;
    reward_catalog?: Prisma.XOR<Prisma.RewardCatalogScalarRelationFilter, Prisma.RewardCatalogWhereInput>;
}, "id" | "idempotencyKey">;
export type RewardRedemptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    loyaltyAccountId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    rewardId?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    shipmentNo?: Prisma.SortOrderInput | Prisma.SortOrder;
    trackingLink?: Prisma.SortOrderInput | Prisma.SortOrder;
    fulfilledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RewardRedemptionCountOrderByAggregateInput;
    _avg?: Prisma.RewardRedemptionAvgOrderByAggregateInput;
    _max?: Prisma.RewardRedemptionMaxOrderByAggregateInput;
    _min?: Prisma.RewardRedemptionMinOrderByAggregateInput;
    _sum?: Prisma.RewardRedemptionSumOrderByAggregateInput;
};
export type RewardRedemptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.RewardRedemptionScalarWhereWithAggregatesInput | Prisma.RewardRedemptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.RewardRedemptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RewardRedemptionScalarWhereWithAggregatesInput | Prisma.RewardRedemptionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RewardRedemption"> | string;
    loyaltyAccountId?: Prisma.UuidWithAggregatesFilter<"RewardRedemption"> | string;
    customerId?: Prisma.UuidWithAggregatesFilter<"RewardRedemption"> | string;
    rewardId?: Prisma.UuidWithAggregatesFilter<"RewardRedemption"> | string;
    pointsSpent?: Prisma.IntWithAggregatesFilter<"RewardRedemption"> | number;
    status?: Prisma.StringWithAggregatesFilter<"RewardRedemption"> | string;
    shipmentNo?: Prisma.StringNullableWithAggregatesFilter<"RewardRedemption"> | string | null;
    trackingLink?: Prisma.StringNullableWithAggregatesFilter<"RewardRedemption"> | string | null;
    fulfilledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RewardRedemption"> | Date | string | null;
    idempotencyKey?: Prisma.StringNullableWithAggregatesFilter<"RewardRedemption"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RewardRedemption"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RewardRedemption"> | Date | string;
};
export type RewardRedemptionCreateInput = {
    id?: string;
    pointsSpent: number;
    status?: string;
    shipmentNo?: string | null;
    trackingLink?: string | null;
    fulfilledAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutReward_redemptionInput;
    loyalty_account: Prisma.LoyaltyAccountCreateNestedOneWithoutReward_redemptionInput;
    reward_catalog: Prisma.RewardCatalogCreateNestedOneWithoutReward_redemptionInput;
};
export type RewardRedemptionUncheckedCreateInput = {
    id?: string;
    loyaltyAccountId: string;
    customerId: string;
    rewardId: string;
    pointsSpent: number;
    status?: string;
    shipmentNo?: string | null;
    trackingLink?: string | null;
    fulfilledAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RewardRedemptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trackingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fulfilledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReward_redemptionNestedInput;
    loyalty_account?: Prisma.LoyaltyAccountUpdateOneRequiredWithoutReward_redemptionNestedInput;
    reward_catalog?: Prisma.RewardCatalogUpdateOneRequiredWithoutReward_redemptionNestedInput;
};
export type RewardRedemptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    loyaltyAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trackingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fulfilledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionCreateManyInput = {
    id?: string;
    loyaltyAccountId: string;
    customerId: string;
    rewardId: string;
    pointsSpent: number;
    status?: string;
    shipmentNo?: string | null;
    trackingLink?: string | null;
    fulfilledAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RewardRedemptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trackingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fulfilledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    loyaltyAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trackingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fulfilledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionListRelationFilter = {
    every?: Prisma.RewardRedemptionWhereInput;
    some?: Prisma.RewardRedemptionWhereInput;
    none?: Prisma.RewardRedemptionWhereInput;
};
export type RewardRedemptionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RewardRedemptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    loyaltyAccountId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    rewardId?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    shipmentNo?: Prisma.SortOrder;
    trackingLink?: Prisma.SortOrder;
    fulfilledAt?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RewardRedemptionAvgOrderByAggregateInput = {
    pointsSpent?: Prisma.SortOrder;
};
export type RewardRedemptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    loyaltyAccountId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    rewardId?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    shipmentNo?: Prisma.SortOrder;
    trackingLink?: Prisma.SortOrder;
    fulfilledAt?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RewardRedemptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    loyaltyAccountId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    rewardId?: Prisma.SortOrder;
    pointsSpent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    shipmentNo?: Prisma.SortOrder;
    trackingLink?: Prisma.SortOrder;
    fulfilledAt?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RewardRedemptionSumOrderByAggregateInput = {
    pointsSpent?: Prisma.SortOrder;
};
export type RewardRedemptionCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutCustomerInput, Prisma.RewardRedemptionUncheckedCreateWithoutCustomerInput> | Prisma.RewardRedemptionCreateWithoutCustomerInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutCustomerInput | Prisma.RewardRedemptionCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.RewardRedemptionCreateManyCustomerInputEnvelope;
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
};
export type RewardRedemptionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutCustomerInput, Prisma.RewardRedemptionUncheckedCreateWithoutCustomerInput> | Prisma.RewardRedemptionCreateWithoutCustomerInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutCustomerInput | Prisma.RewardRedemptionCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.RewardRedemptionCreateManyCustomerInputEnvelope;
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
};
export type RewardRedemptionUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutCustomerInput, Prisma.RewardRedemptionUncheckedCreateWithoutCustomerInput> | Prisma.RewardRedemptionCreateWithoutCustomerInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutCustomerInput | Prisma.RewardRedemptionCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutCustomerInput | Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.RewardRedemptionCreateManyCustomerInputEnvelope;
    set?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    disconnect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    delete?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    update?: Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutCustomerInput | Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.RewardRedemptionUpdateManyWithWhereWithoutCustomerInput | Prisma.RewardRedemptionUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.RewardRedemptionScalarWhereInput | Prisma.RewardRedemptionScalarWhereInput[];
};
export type RewardRedemptionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutCustomerInput, Prisma.RewardRedemptionUncheckedCreateWithoutCustomerInput> | Prisma.RewardRedemptionCreateWithoutCustomerInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutCustomerInput | Prisma.RewardRedemptionCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutCustomerInput | Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.RewardRedemptionCreateManyCustomerInputEnvelope;
    set?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    disconnect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    delete?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    update?: Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutCustomerInput | Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.RewardRedemptionUpdateManyWithWhereWithoutCustomerInput | Prisma.RewardRedemptionUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.RewardRedemptionScalarWhereInput | Prisma.RewardRedemptionScalarWhereInput[];
};
export type RewardRedemptionCreateNestedManyWithoutLoyalty_accountInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutLoyalty_accountInput, Prisma.RewardRedemptionUncheckedCreateWithoutLoyalty_accountInput> | Prisma.RewardRedemptionCreateWithoutLoyalty_accountInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutLoyalty_accountInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutLoyalty_accountInput | Prisma.RewardRedemptionCreateOrConnectWithoutLoyalty_accountInput[];
    createMany?: Prisma.RewardRedemptionCreateManyLoyalty_accountInputEnvelope;
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
};
export type RewardRedemptionUncheckedCreateNestedManyWithoutLoyalty_accountInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutLoyalty_accountInput, Prisma.RewardRedemptionUncheckedCreateWithoutLoyalty_accountInput> | Prisma.RewardRedemptionCreateWithoutLoyalty_accountInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutLoyalty_accountInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutLoyalty_accountInput | Prisma.RewardRedemptionCreateOrConnectWithoutLoyalty_accountInput[];
    createMany?: Prisma.RewardRedemptionCreateManyLoyalty_accountInputEnvelope;
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
};
export type RewardRedemptionUpdateManyWithoutLoyalty_accountNestedInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutLoyalty_accountInput, Prisma.RewardRedemptionUncheckedCreateWithoutLoyalty_accountInput> | Prisma.RewardRedemptionCreateWithoutLoyalty_accountInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutLoyalty_accountInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutLoyalty_accountInput | Prisma.RewardRedemptionCreateOrConnectWithoutLoyalty_accountInput[];
    upsert?: Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutLoyalty_accountInput | Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutLoyalty_accountInput[];
    createMany?: Prisma.RewardRedemptionCreateManyLoyalty_accountInputEnvelope;
    set?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    disconnect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    delete?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    update?: Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutLoyalty_accountInput | Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutLoyalty_accountInput[];
    updateMany?: Prisma.RewardRedemptionUpdateManyWithWhereWithoutLoyalty_accountInput | Prisma.RewardRedemptionUpdateManyWithWhereWithoutLoyalty_accountInput[];
    deleteMany?: Prisma.RewardRedemptionScalarWhereInput | Prisma.RewardRedemptionScalarWhereInput[];
};
export type RewardRedemptionUncheckedUpdateManyWithoutLoyalty_accountNestedInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutLoyalty_accountInput, Prisma.RewardRedemptionUncheckedCreateWithoutLoyalty_accountInput> | Prisma.RewardRedemptionCreateWithoutLoyalty_accountInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutLoyalty_accountInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutLoyalty_accountInput | Prisma.RewardRedemptionCreateOrConnectWithoutLoyalty_accountInput[];
    upsert?: Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutLoyalty_accountInput | Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutLoyalty_accountInput[];
    createMany?: Prisma.RewardRedemptionCreateManyLoyalty_accountInputEnvelope;
    set?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    disconnect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    delete?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    update?: Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutLoyalty_accountInput | Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutLoyalty_accountInput[];
    updateMany?: Prisma.RewardRedemptionUpdateManyWithWhereWithoutLoyalty_accountInput | Prisma.RewardRedemptionUpdateManyWithWhereWithoutLoyalty_accountInput[];
    deleteMany?: Prisma.RewardRedemptionScalarWhereInput | Prisma.RewardRedemptionScalarWhereInput[];
};
export type RewardRedemptionCreateNestedManyWithoutReward_catalogInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutReward_catalogInput, Prisma.RewardRedemptionUncheckedCreateWithoutReward_catalogInput> | Prisma.RewardRedemptionCreateWithoutReward_catalogInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutReward_catalogInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutReward_catalogInput | Prisma.RewardRedemptionCreateOrConnectWithoutReward_catalogInput[];
    createMany?: Prisma.RewardRedemptionCreateManyReward_catalogInputEnvelope;
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
};
export type RewardRedemptionUncheckedCreateNestedManyWithoutReward_catalogInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutReward_catalogInput, Prisma.RewardRedemptionUncheckedCreateWithoutReward_catalogInput> | Prisma.RewardRedemptionCreateWithoutReward_catalogInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutReward_catalogInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutReward_catalogInput | Prisma.RewardRedemptionCreateOrConnectWithoutReward_catalogInput[];
    createMany?: Prisma.RewardRedemptionCreateManyReward_catalogInputEnvelope;
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
};
export type RewardRedemptionUpdateManyWithoutReward_catalogNestedInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutReward_catalogInput, Prisma.RewardRedemptionUncheckedCreateWithoutReward_catalogInput> | Prisma.RewardRedemptionCreateWithoutReward_catalogInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutReward_catalogInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutReward_catalogInput | Prisma.RewardRedemptionCreateOrConnectWithoutReward_catalogInput[];
    upsert?: Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutReward_catalogInput | Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutReward_catalogInput[];
    createMany?: Prisma.RewardRedemptionCreateManyReward_catalogInputEnvelope;
    set?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    disconnect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    delete?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    update?: Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutReward_catalogInput | Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutReward_catalogInput[];
    updateMany?: Prisma.RewardRedemptionUpdateManyWithWhereWithoutReward_catalogInput | Prisma.RewardRedemptionUpdateManyWithWhereWithoutReward_catalogInput[];
    deleteMany?: Prisma.RewardRedemptionScalarWhereInput | Prisma.RewardRedemptionScalarWhereInput[];
};
export type RewardRedemptionUncheckedUpdateManyWithoutReward_catalogNestedInput = {
    create?: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutReward_catalogInput, Prisma.RewardRedemptionUncheckedCreateWithoutReward_catalogInput> | Prisma.RewardRedemptionCreateWithoutReward_catalogInput[] | Prisma.RewardRedemptionUncheckedCreateWithoutReward_catalogInput[];
    connectOrCreate?: Prisma.RewardRedemptionCreateOrConnectWithoutReward_catalogInput | Prisma.RewardRedemptionCreateOrConnectWithoutReward_catalogInput[];
    upsert?: Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutReward_catalogInput | Prisma.RewardRedemptionUpsertWithWhereUniqueWithoutReward_catalogInput[];
    createMany?: Prisma.RewardRedemptionCreateManyReward_catalogInputEnvelope;
    set?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    disconnect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    delete?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    connect?: Prisma.RewardRedemptionWhereUniqueInput | Prisma.RewardRedemptionWhereUniqueInput[];
    update?: Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutReward_catalogInput | Prisma.RewardRedemptionUpdateWithWhereUniqueWithoutReward_catalogInput[];
    updateMany?: Prisma.RewardRedemptionUpdateManyWithWhereWithoutReward_catalogInput | Prisma.RewardRedemptionUpdateManyWithWhereWithoutReward_catalogInput[];
    deleteMany?: Prisma.RewardRedemptionScalarWhereInput | Prisma.RewardRedemptionScalarWhereInput[];
};
export type RewardRedemptionCreateWithoutCustomerInput = {
    id?: string;
    pointsSpent: number;
    status?: string;
    shipmentNo?: string | null;
    trackingLink?: string | null;
    fulfilledAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loyalty_account: Prisma.LoyaltyAccountCreateNestedOneWithoutReward_redemptionInput;
    reward_catalog: Prisma.RewardCatalogCreateNestedOneWithoutReward_redemptionInput;
};
export type RewardRedemptionUncheckedCreateWithoutCustomerInput = {
    id?: string;
    loyaltyAccountId: string;
    rewardId: string;
    pointsSpent: number;
    status?: string;
    shipmentNo?: string | null;
    trackingLink?: string | null;
    fulfilledAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RewardRedemptionCreateOrConnectWithoutCustomerInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutCustomerInput, Prisma.RewardRedemptionUncheckedCreateWithoutCustomerInput>;
};
export type RewardRedemptionCreateManyCustomerInputEnvelope = {
    data: Prisma.RewardRedemptionCreateManyCustomerInput | Prisma.RewardRedemptionCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type RewardRedemptionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.RewardRedemptionUpdateWithoutCustomerInput, Prisma.RewardRedemptionUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutCustomerInput, Prisma.RewardRedemptionUncheckedCreateWithoutCustomerInput>;
};
export type RewardRedemptionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateWithoutCustomerInput, Prisma.RewardRedemptionUncheckedUpdateWithoutCustomerInput>;
};
export type RewardRedemptionUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.RewardRedemptionScalarWhereInput;
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateManyMutationInput, Prisma.RewardRedemptionUncheckedUpdateManyWithoutCustomerInput>;
};
export type RewardRedemptionScalarWhereInput = {
    AND?: Prisma.RewardRedemptionScalarWhereInput | Prisma.RewardRedemptionScalarWhereInput[];
    OR?: Prisma.RewardRedemptionScalarWhereInput[];
    NOT?: Prisma.RewardRedemptionScalarWhereInput | Prisma.RewardRedemptionScalarWhereInput[];
    id?: Prisma.UuidFilter<"RewardRedemption"> | string;
    loyaltyAccountId?: Prisma.UuidFilter<"RewardRedemption"> | string;
    customerId?: Prisma.UuidFilter<"RewardRedemption"> | string;
    rewardId?: Prisma.UuidFilter<"RewardRedemption"> | string;
    pointsSpent?: Prisma.IntFilter<"RewardRedemption"> | number;
    status?: Prisma.StringFilter<"RewardRedemption"> | string;
    shipmentNo?: Prisma.StringNullableFilter<"RewardRedemption"> | string | null;
    trackingLink?: Prisma.StringNullableFilter<"RewardRedemption"> | string | null;
    fulfilledAt?: Prisma.DateTimeNullableFilter<"RewardRedemption"> | Date | string | null;
    idempotencyKey?: Prisma.StringNullableFilter<"RewardRedemption"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RewardRedemption"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RewardRedemption"> | Date | string;
};
export type RewardRedemptionCreateWithoutLoyalty_accountInput = {
    id?: string;
    pointsSpent: number;
    status?: string;
    shipmentNo?: string | null;
    trackingLink?: string | null;
    fulfilledAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutReward_redemptionInput;
    reward_catalog: Prisma.RewardCatalogCreateNestedOneWithoutReward_redemptionInput;
};
export type RewardRedemptionUncheckedCreateWithoutLoyalty_accountInput = {
    id?: string;
    customerId: string;
    rewardId: string;
    pointsSpent: number;
    status?: string;
    shipmentNo?: string | null;
    trackingLink?: string | null;
    fulfilledAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RewardRedemptionCreateOrConnectWithoutLoyalty_accountInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutLoyalty_accountInput, Prisma.RewardRedemptionUncheckedCreateWithoutLoyalty_accountInput>;
};
export type RewardRedemptionCreateManyLoyalty_accountInputEnvelope = {
    data: Prisma.RewardRedemptionCreateManyLoyalty_accountInput | Prisma.RewardRedemptionCreateManyLoyalty_accountInput[];
    skipDuplicates?: boolean;
};
export type RewardRedemptionUpsertWithWhereUniqueWithoutLoyalty_accountInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.RewardRedemptionUpdateWithoutLoyalty_accountInput, Prisma.RewardRedemptionUncheckedUpdateWithoutLoyalty_accountInput>;
    create: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutLoyalty_accountInput, Prisma.RewardRedemptionUncheckedCreateWithoutLoyalty_accountInput>;
};
export type RewardRedemptionUpdateWithWhereUniqueWithoutLoyalty_accountInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateWithoutLoyalty_accountInput, Prisma.RewardRedemptionUncheckedUpdateWithoutLoyalty_accountInput>;
};
export type RewardRedemptionUpdateManyWithWhereWithoutLoyalty_accountInput = {
    where: Prisma.RewardRedemptionScalarWhereInput;
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateManyMutationInput, Prisma.RewardRedemptionUncheckedUpdateManyWithoutLoyalty_accountInput>;
};
export type RewardRedemptionCreateWithoutReward_catalogInput = {
    id?: string;
    pointsSpent: number;
    status?: string;
    shipmentNo?: string | null;
    trackingLink?: string | null;
    fulfilledAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutReward_redemptionInput;
    loyalty_account: Prisma.LoyaltyAccountCreateNestedOneWithoutReward_redemptionInput;
};
export type RewardRedemptionUncheckedCreateWithoutReward_catalogInput = {
    id?: string;
    loyaltyAccountId: string;
    customerId: string;
    pointsSpent: number;
    status?: string;
    shipmentNo?: string | null;
    trackingLink?: string | null;
    fulfilledAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RewardRedemptionCreateOrConnectWithoutReward_catalogInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutReward_catalogInput, Prisma.RewardRedemptionUncheckedCreateWithoutReward_catalogInput>;
};
export type RewardRedemptionCreateManyReward_catalogInputEnvelope = {
    data: Prisma.RewardRedemptionCreateManyReward_catalogInput | Prisma.RewardRedemptionCreateManyReward_catalogInput[];
    skipDuplicates?: boolean;
};
export type RewardRedemptionUpsertWithWhereUniqueWithoutReward_catalogInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.RewardRedemptionUpdateWithoutReward_catalogInput, Prisma.RewardRedemptionUncheckedUpdateWithoutReward_catalogInput>;
    create: Prisma.XOR<Prisma.RewardRedemptionCreateWithoutReward_catalogInput, Prisma.RewardRedemptionUncheckedCreateWithoutReward_catalogInput>;
};
export type RewardRedemptionUpdateWithWhereUniqueWithoutReward_catalogInput = {
    where: Prisma.RewardRedemptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateWithoutReward_catalogInput, Prisma.RewardRedemptionUncheckedUpdateWithoutReward_catalogInput>;
};
export type RewardRedemptionUpdateManyWithWhereWithoutReward_catalogInput = {
    where: Prisma.RewardRedemptionScalarWhereInput;
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateManyMutationInput, Prisma.RewardRedemptionUncheckedUpdateManyWithoutReward_catalogInput>;
};
export type RewardRedemptionCreateManyCustomerInput = {
    id?: string;
    loyaltyAccountId: string;
    rewardId: string;
    pointsSpent: number;
    status?: string;
    shipmentNo?: string | null;
    trackingLink?: string | null;
    fulfilledAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RewardRedemptionUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trackingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fulfilledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loyalty_account?: Prisma.LoyaltyAccountUpdateOneRequiredWithoutReward_redemptionNestedInput;
    reward_catalog?: Prisma.RewardCatalogUpdateOneRequiredWithoutReward_redemptionNestedInput;
};
export type RewardRedemptionUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    loyaltyAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trackingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fulfilledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    loyaltyAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trackingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fulfilledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionCreateManyLoyalty_accountInput = {
    id?: string;
    customerId: string;
    rewardId: string;
    pointsSpent: number;
    status?: string;
    shipmentNo?: string | null;
    trackingLink?: string | null;
    fulfilledAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RewardRedemptionUpdateWithoutLoyalty_accountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trackingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fulfilledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReward_redemptionNestedInput;
    reward_catalog?: Prisma.RewardCatalogUpdateOneRequiredWithoutReward_redemptionNestedInput;
};
export type RewardRedemptionUncheckedUpdateWithoutLoyalty_accountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trackingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fulfilledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionUncheckedUpdateManyWithoutLoyalty_accountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    rewardId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trackingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fulfilledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionCreateManyReward_catalogInput = {
    id?: string;
    loyaltyAccountId: string;
    customerId: string;
    pointsSpent: number;
    status?: string;
    shipmentNo?: string | null;
    trackingLink?: string | null;
    fulfilledAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RewardRedemptionUpdateWithoutReward_catalogInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trackingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fulfilledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReward_redemptionNestedInput;
    loyalty_account?: Prisma.LoyaltyAccountUpdateOneRequiredWithoutReward_redemptionNestedInput;
};
export type RewardRedemptionUncheckedUpdateWithoutReward_catalogInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    loyaltyAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trackingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fulfilledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionUncheckedUpdateManyWithoutReward_catalogInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    loyaltyAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsSpent?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    shipmentNo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trackingLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fulfilledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardRedemptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    loyaltyAccountId?: boolean;
    customerId?: boolean;
    rewardId?: boolean;
    pointsSpent?: boolean;
    status?: boolean;
    shipmentNo?: boolean;
    trackingLink?: boolean;
    fulfilledAt?: boolean;
    idempotencyKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    loyalty_account?: boolean | Prisma.LoyaltyAccountDefaultArgs<ExtArgs>;
    reward_catalog?: boolean | Prisma.RewardCatalogDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rewardRedemption"]>;
export type RewardRedemptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    loyaltyAccountId?: boolean;
    customerId?: boolean;
    rewardId?: boolean;
    pointsSpent?: boolean;
    status?: boolean;
    shipmentNo?: boolean;
    trackingLink?: boolean;
    fulfilledAt?: boolean;
    idempotencyKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    loyalty_account?: boolean | Prisma.LoyaltyAccountDefaultArgs<ExtArgs>;
    reward_catalog?: boolean | Prisma.RewardCatalogDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rewardRedemption"]>;
export type RewardRedemptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    loyaltyAccountId?: boolean;
    customerId?: boolean;
    rewardId?: boolean;
    pointsSpent?: boolean;
    status?: boolean;
    shipmentNo?: boolean;
    trackingLink?: boolean;
    fulfilledAt?: boolean;
    idempotencyKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    loyalty_account?: boolean | Prisma.LoyaltyAccountDefaultArgs<ExtArgs>;
    reward_catalog?: boolean | Prisma.RewardCatalogDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rewardRedemption"]>;
export type RewardRedemptionSelectScalar = {
    id?: boolean;
    loyaltyAccountId?: boolean;
    customerId?: boolean;
    rewardId?: boolean;
    pointsSpent?: boolean;
    status?: boolean;
    shipmentNo?: boolean;
    trackingLink?: boolean;
    fulfilledAt?: boolean;
    idempotencyKey?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RewardRedemptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "loyaltyAccountId" | "customerId" | "rewardId" | "pointsSpent" | "status" | "shipmentNo" | "trackingLink" | "fulfilledAt" | "idempotencyKey" | "createdAt" | "updatedAt", ExtArgs["result"]["rewardRedemption"]>;
export type RewardRedemptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    loyalty_account?: boolean | Prisma.LoyaltyAccountDefaultArgs<ExtArgs>;
    reward_catalog?: boolean | Prisma.RewardCatalogDefaultArgs<ExtArgs>;
};
export type RewardRedemptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    loyalty_account?: boolean | Prisma.LoyaltyAccountDefaultArgs<ExtArgs>;
    reward_catalog?: boolean | Prisma.RewardCatalogDefaultArgs<ExtArgs>;
};
export type RewardRedemptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    loyalty_account?: boolean | Prisma.LoyaltyAccountDefaultArgs<ExtArgs>;
    reward_catalog?: boolean | Prisma.RewardCatalogDefaultArgs<ExtArgs>;
};
export type $RewardRedemptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RewardRedemption";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        loyalty_account: Prisma.$LoyaltyAccountPayload<ExtArgs>;
        reward_catalog: Prisma.$RewardCatalogPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        loyaltyAccountId: string;
        customerId: string;
        rewardId: string;
        pointsSpent: number;
        status: string;
        shipmentNo: string | null;
        trackingLink: string | null;
        fulfilledAt: Date | null;
        idempotencyKey: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["rewardRedemption"]>;
    composites: {};
};
export type RewardRedemptionGetPayload<S extends boolean | null | undefined | RewardRedemptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload, S>;
export type RewardRedemptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RewardRedemptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RewardRedemptionCountAggregateInputType | true;
};
export interface RewardRedemptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RewardRedemption'];
        meta: {
            name: 'RewardRedemption';
        };
    };
    findUnique<T extends RewardRedemptionFindUniqueArgs>(args: Prisma.SelectSubset<T, RewardRedemptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RewardRedemptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RewardRedemptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RewardRedemptionFindFirstArgs>(args?: Prisma.SelectSubset<T, RewardRedemptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RewardRedemptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RewardRedemptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RewardRedemptionFindManyArgs>(args?: Prisma.SelectSubset<T, RewardRedemptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RewardRedemptionCreateArgs>(args: Prisma.SelectSubset<T, RewardRedemptionCreateArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RewardRedemptionCreateManyArgs>(args?: Prisma.SelectSubset<T, RewardRedemptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RewardRedemptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RewardRedemptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RewardRedemptionDeleteArgs>(args: Prisma.SelectSubset<T, RewardRedemptionDeleteArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RewardRedemptionUpdateArgs>(args: Prisma.SelectSubset<T, RewardRedemptionUpdateArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RewardRedemptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, RewardRedemptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RewardRedemptionUpdateManyArgs>(args: Prisma.SelectSubset<T, RewardRedemptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RewardRedemptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RewardRedemptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RewardRedemptionUpsertArgs>(args: Prisma.SelectSubset<T, RewardRedemptionUpsertArgs<ExtArgs>>): Prisma.Prisma__RewardRedemptionClient<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RewardRedemptionCountArgs>(args?: Prisma.Subset<T, RewardRedemptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RewardRedemptionCountAggregateOutputType> : number>;
    aggregate<T extends RewardRedemptionAggregateArgs>(args: Prisma.Subset<T, RewardRedemptionAggregateArgs>): Prisma.PrismaPromise<GetRewardRedemptionAggregateType<T>>;
    groupBy<T extends RewardRedemptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RewardRedemptionGroupByArgs['orderBy'];
    } : {
        orderBy?: RewardRedemptionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RewardRedemptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardRedemptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RewardRedemptionFieldRefs;
}
export interface Prisma__RewardRedemptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    loyalty_account<T extends Prisma.LoyaltyAccountDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LoyaltyAccountDefaultArgs<ExtArgs>>): Prisma.Prisma__LoyaltyAccountClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reward_catalog<T extends Prisma.RewardCatalogDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RewardCatalogDefaultArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RewardRedemptionFieldRefs {
    readonly id: Prisma.FieldRef<"RewardRedemption", 'String'>;
    readonly loyaltyAccountId: Prisma.FieldRef<"RewardRedemption", 'String'>;
    readonly customerId: Prisma.FieldRef<"RewardRedemption", 'String'>;
    readonly rewardId: Prisma.FieldRef<"RewardRedemption", 'String'>;
    readonly pointsSpent: Prisma.FieldRef<"RewardRedemption", 'Int'>;
    readonly status: Prisma.FieldRef<"RewardRedemption", 'String'>;
    readonly shipmentNo: Prisma.FieldRef<"RewardRedemption", 'String'>;
    readonly trackingLink: Prisma.FieldRef<"RewardRedemption", 'String'>;
    readonly fulfilledAt: Prisma.FieldRef<"RewardRedemption", 'DateTime'>;
    readonly idempotencyKey: Prisma.FieldRef<"RewardRedemption", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RewardRedemption", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RewardRedemption", 'DateTime'>;
}
export type RewardRedemptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    where: Prisma.RewardRedemptionWhereUniqueInput;
};
export type RewardRedemptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    where: Prisma.RewardRedemptionWhereUniqueInput;
};
export type RewardRedemptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    where?: Prisma.RewardRedemptionWhereInput;
    orderBy?: Prisma.RewardRedemptionOrderByWithRelationInput | Prisma.RewardRedemptionOrderByWithRelationInput[];
    cursor?: Prisma.RewardRedemptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewardRedemptionScalarFieldEnum | Prisma.RewardRedemptionScalarFieldEnum[];
};
export type RewardRedemptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    where?: Prisma.RewardRedemptionWhereInput;
    orderBy?: Prisma.RewardRedemptionOrderByWithRelationInput | Prisma.RewardRedemptionOrderByWithRelationInput[];
    cursor?: Prisma.RewardRedemptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewardRedemptionScalarFieldEnum | Prisma.RewardRedemptionScalarFieldEnum[];
};
export type RewardRedemptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    where?: Prisma.RewardRedemptionWhereInput;
    orderBy?: Prisma.RewardRedemptionOrderByWithRelationInput | Prisma.RewardRedemptionOrderByWithRelationInput[];
    cursor?: Prisma.RewardRedemptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewardRedemptionScalarFieldEnum | Prisma.RewardRedemptionScalarFieldEnum[];
};
export type RewardRedemptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardRedemptionCreateInput, Prisma.RewardRedemptionUncheckedCreateInput>;
};
export type RewardRedemptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RewardRedemptionCreateManyInput | Prisma.RewardRedemptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RewardRedemptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    data: Prisma.RewardRedemptionCreateManyInput | Prisma.RewardRedemptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RewardRedemptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RewardRedemptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateInput, Prisma.RewardRedemptionUncheckedUpdateInput>;
    where: Prisma.RewardRedemptionWhereUniqueInput;
};
export type RewardRedemptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateManyMutationInput, Prisma.RewardRedemptionUncheckedUpdateManyInput>;
    where?: Prisma.RewardRedemptionWhereInput;
    limit?: number;
};
export type RewardRedemptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardRedemptionUpdateManyMutationInput, Prisma.RewardRedemptionUncheckedUpdateManyInput>;
    where?: Prisma.RewardRedemptionWhereInput;
    limit?: number;
    include?: Prisma.RewardRedemptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RewardRedemptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    where: Prisma.RewardRedemptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewardRedemptionCreateInput, Prisma.RewardRedemptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RewardRedemptionUpdateInput, Prisma.RewardRedemptionUncheckedUpdateInput>;
};
export type RewardRedemptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    where: Prisma.RewardRedemptionWhereUniqueInput;
};
export type RewardRedemptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardRedemptionWhereInput;
    limit?: number;
};
export type RewardRedemptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
};
