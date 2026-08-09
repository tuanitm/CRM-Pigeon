import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RewardCatalogModel = runtime.Types.Result.DefaultSelection<Prisma.$RewardCatalogPayload>;
export type AggregateRewardCatalog = {
    _count: RewardCatalogCountAggregateOutputType | null;
    _avg: RewardCatalogAvgAggregateOutputType | null;
    _sum: RewardCatalogSumAggregateOutputType | null;
    _min: RewardCatalogMinAggregateOutputType | null;
    _max: RewardCatalogMaxAggregateOutputType | null;
};
export type RewardCatalogAvgAggregateOutputType = {
    pointsCost: number | null;
    stock: number | null;
};
export type RewardCatalogSumAggregateOutputType = {
    pointsCost: number | null;
    stock: number | null;
};
export type RewardCatalogMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    description: string | null;
    category: string | null;
    pointsCost: number | null;
    stock: number | null;
    imageUrl: string | null;
    isActive: boolean | null;
    validFrom: Date | null;
    validUntil: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RewardCatalogMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    description: string | null;
    category: string | null;
    pointsCost: number | null;
    stock: number | null;
    imageUrl: string | null;
    isActive: boolean | null;
    validFrom: Date | null;
    validUntil: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RewardCatalogCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    description: number;
    category: number;
    pointsCost: number;
    stock: number;
    imageUrl: number;
    isActive: number;
    validFrom: number;
    validUntil: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RewardCatalogAvgAggregateInputType = {
    pointsCost?: true;
    stock?: true;
};
export type RewardCatalogSumAggregateInputType = {
    pointsCost?: true;
    stock?: true;
};
export type RewardCatalogMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    category?: true;
    pointsCost?: true;
    stock?: true;
    imageUrl?: true;
    isActive?: true;
    validFrom?: true;
    validUntil?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RewardCatalogMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    category?: true;
    pointsCost?: true;
    stock?: true;
    imageUrl?: true;
    isActive?: true;
    validFrom?: true;
    validUntil?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RewardCatalogCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    category?: true;
    pointsCost?: true;
    stock?: true;
    imageUrl?: true;
    isActive?: true;
    validFrom?: true;
    validUntil?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RewardCatalogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardCatalogWhereInput;
    orderBy?: Prisma.RewardCatalogOrderByWithRelationInput | Prisma.RewardCatalogOrderByWithRelationInput[];
    cursor?: Prisma.RewardCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RewardCatalogCountAggregateInputType;
    _avg?: RewardCatalogAvgAggregateInputType;
    _sum?: RewardCatalogSumAggregateInputType;
    _min?: RewardCatalogMinAggregateInputType;
    _max?: RewardCatalogMaxAggregateInputType;
};
export type GetRewardCatalogAggregateType<T extends RewardCatalogAggregateArgs> = {
    [P in keyof T & keyof AggregateRewardCatalog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRewardCatalog[P]> : Prisma.GetScalarType<T[P], AggregateRewardCatalog[P]>;
};
export type RewardCatalogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardCatalogWhereInput;
    orderBy?: Prisma.RewardCatalogOrderByWithAggregationInput | Prisma.RewardCatalogOrderByWithAggregationInput[];
    by: Prisma.RewardCatalogScalarFieldEnum[] | Prisma.RewardCatalogScalarFieldEnum;
    having?: Prisma.RewardCatalogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RewardCatalogCountAggregateInputType | true;
    _avg?: RewardCatalogAvgAggregateInputType;
    _sum?: RewardCatalogSumAggregateInputType;
    _min?: RewardCatalogMinAggregateInputType;
    _max?: RewardCatalogMaxAggregateInputType;
};
export type RewardCatalogGroupByOutputType = {
    id: string;
    code: string;
    name: string;
    description: string | null;
    category: string | null;
    pointsCost: number;
    stock: number | null;
    imageUrl: string | null;
    isActive: boolean;
    validFrom: Date | null;
    validUntil: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RewardCatalogCountAggregateOutputType | null;
    _avg: RewardCatalogAvgAggregateOutputType | null;
    _sum: RewardCatalogSumAggregateOutputType | null;
    _min: RewardCatalogMinAggregateOutputType | null;
    _max: RewardCatalogMaxAggregateOutputType | null;
};
export type GetRewardCatalogGroupByPayload<T extends RewardCatalogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RewardCatalogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RewardCatalogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RewardCatalogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RewardCatalogGroupByOutputType[P]>;
}>>;
export type RewardCatalogWhereInput = {
    AND?: Prisma.RewardCatalogWhereInput | Prisma.RewardCatalogWhereInput[];
    OR?: Prisma.RewardCatalogWhereInput[];
    NOT?: Prisma.RewardCatalogWhereInput | Prisma.RewardCatalogWhereInput[];
    id?: Prisma.UuidFilter<"RewardCatalog"> | string;
    code?: Prisma.StringFilter<"RewardCatalog"> | string;
    name?: Prisma.StringFilter<"RewardCatalog"> | string;
    description?: Prisma.StringNullableFilter<"RewardCatalog"> | string | null;
    category?: Prisma.StringNullableFilter<"RewardCatalog"> | string | null;
    pointsCost?: Prisma.IntFilter<"RewardCatalog"> | number;
    stock?: Prisma.IntNullableFilter<"RewardCatalog"> | number | null;
    imageUrl?: Prisma.StringNullableFilter<"RewardCatalog"> | string | null;
    isActive?: Prisma.BoolFilter<"RewardCatalog"> | boolean;
    validFrom?: Prisma.DateTimeNullableFilter<"RewardCatalog"> | Date | string | null;
    validUntil?: Prisma.DateTimeNullableFilter<"RewardCatalog"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RewardCatalog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RewardCatalog"> | Date | string;
    reward_redemption?: Prisma.RewardRedemptionListRelationFilter;
};
export type RewardCatalogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    pointsCost?: Prisma.SortOrder;
    stock?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    validUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    reward_redemption?: Prisma.RewardRedemptionOrderByRelationAggregateInput;
};
export type RewardCatalogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.RewardCatalogWhereInput | Prisma.RewardCatalogWhereInput[];
    OR?: Prisma.RewardCatalogWhereInput[];
    NOT?: Prisma.RewardCatalogWhereInput | Prisma.RewardCatalogWhereInput[];
    name?: Prisma.StringFilter<"RewardCatalog"> | string;
    description?: Prisma.StringNullableFilter<"RewardCatalog"> | string | null;
    category?: Prisma.StringNullableFilter<"RewardCatalog"> | string | null;
    pointsCost?: Prisma.IntFilter<"RewardCatalog"> | number;
    stock?: Prisma.IntNullableFilter<"RewardCatalog"> | number | null;
    imageUrl?: Prisma.StringNullableFilter<"RewardCatalog"> | string | null;
    isActive?: Prisma.BoolFilter<"RewardCatalog"> | boolean;
    validFrom?: Prisma.DateTimeNullableFilter<"RewardCatalog"> | Date | string | null;
    validUntil?: Prisma.DateTimeNullableFilter<"RewardCatalog"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RewardCatalog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RewardCatalog"> | Date | string;
    reward_redemption?: Prisma.RewardRedemptionListRelationFilter;
}, "id" | "code">;
export type RewardCatalogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    pointsCost?: Prisma.SortOrder;
    stock?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    validUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RewardCatalogCountOrderByAggregateInput;
    _avg?: Prisma.RewardCatalogAvgOrderByAggregateInput;
    _max?: Prisma.RewardCatalogMaxOrderByAggregateInput;
    _min?: Prisma.RewardCatalogMinOrderByAggregateInput;
    _sum?: Prisma.RewardCatalogSumOrderByAggregateInput;
};
export type RewardCatalogScalarWhereWithAggregatesInput = {
    AND?: Prisma.RewardCatalogScalarWhereWithAggregatesInput | Prisma.RewardCatalogScalarWhereWithAggregatesInput[];
    OR?: Prisma.RewardCatalogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RewardCatalogScalarWhereWithAggregatesInput | Prisma.RewardCatalogScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RewardCatalog"> | string;
    code?: Prisma.StringWithAggregatesFilter<"RewardCatalog"> | string;
    name?: Prisma.StringWithAggregatesFilter<"RewardCatalog"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"RewardCatalog"> | string | null;
    category?: Prisma.StringNullableWithAggregatesFilter<"RewardCatalog"> | string | null;
    pointsCost?: Prisma.IntWithAggregatesFilter<"RewardCatalog"> | number;
    stock?: Prisma.IntNullableWithAggregatesFilter<"RewardCatalog"> | number | null;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"RewardCatalog"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"RewardCatalog"> | boolean;
    validFrom?: Prisma.DateTimeNullableWithAggregatesFilter<"RewardCatalog"> | Date | string | null;
    validUntil?: Prisma.DateTimeNullableWithAggregatesFilter<"RewardCatalog"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RewardCatalog"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RewardCatalog"> | Date | string;
};
export type RewardCatalogCreateInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category?: string | null;
    pointsCost: number;
    stock?: number | null;
    imageUrl?: string | null;
    isActive?: boolean;
    validFrom?: Date | string | null;
    validUntil?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reward_redemption?: Prisma.RewardRedemptionCreateNestedManyWithoutReward_catalogInput;
};
export type RewardCatalogUncheckedCreateInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category?: string | null;
    pointsCost: number;
    stock?: number | null;
    imageUrl?: string | null;
    isActive?: boolean;
    validFrom?: Date | string | null;
    validUntil?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reward_redemption?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutReward_catalogInput;
};
export type RewardCatalogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsCost?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reward_redemption?: Prisma.RewardRedemptionUpdateManyWithoutReward_catalogNestedInput;
};
export type RewardCatalogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsCost?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reward_redemption?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutReward_catalogNestedInput;
};
export type RewardCatalogCreateManyInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category?: string | null;
    pointsCost: number;
    stock?: number | null;
    imageUrl?: string | null;
    isActive?: boolean;
    validFrom?: Date | string | null;
    validUntil?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RewardCatalogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsCost?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardCatalogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsCost?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardCatalogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    pointsCost?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validUntil?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RewardCatalogAvgOrderByAggregateInput = {
    pointsCost?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type RewardCatalogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    pointsCost?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validUntil?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RewardCatalogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    pointsCost?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validUntil?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RewardCatalogSumOrderByAggregateInput = {
    pointsCost?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type RewardCatalogScalarRelationFilter = {
    is?: Prisma.RewardCatalogWhereInput;
    isNot?: Prisma.RewardCatalogWhereInput;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type RewardCatalogCreateNestedOneWithoutReward_redemptionInput = {
    create?: Prisma.XOR<Prisma.RewardCatalogCreateWithoutReward_redemptionInput, Prisma.RewardCatalogUncheckedCreateWithoutReward_redemptionInput>;
    connectOrCreate?: Prisma.RewardCatalogCreateOrConnectWithoutReward_redemptionInput;
    connect?: Prisma.RewardCatalogWhereUniqueInput;
};
export type RewardCatalogUpdateOneRequiredWithoutReward_redemptionNestedInput = {
    create?: Prisma.XOR<Prisma.RewardCatalogCreateWithoutReward_redemptionInput, Prisma.RewardCatalogUncheckedCreateWithoutReward_redemptionInput>;
    connectOrCreate?: Prisma.RewardCatalogCreateOrConnectWithoutReward_redemptionInput;
    upsert?: Prisma.RewardCatalogUpsertWithoutReward_redemptionInput;
    connect?: Prisma.RewardCatalogWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RewardCatalogUpdateToOneWithWhereWithoutReward_redemptionInput, Prisma.RewardCatalogUpdateWithoutReward_redemptionInput>, Prisma.RewardCatalogUncheckedUpdateWithoutReward_redemptionInput>;
};
export type RewardCatalogCreateWithoutReward_redemptionInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category?: string | null;
    pointsCost: number;
    stock?: number | null;
    imageUrl?: string | null;
    isActive?: boolean;
    validFrom?: Date | string | null;
    validUntil?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RewardCatalogUncheckedCreateWithoutReward_redemptionInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    category?: string | null;
    pointsCost: number;
    stock?: number | null;
    imageUrl?: string | null;
    isActive?: boolean;
    validFrom?: Date | string | null;
    validUntil?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RewardCatalogCreateOrConnectWithoutReward_redemptionInput = {
    where: Prisma.RewardCatalogWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewardCatalogCreateWithoutReward_redemptionInput, Prisma.RewardCatalogUncheckedCreateWithoutReward_redemptionInput>;
};
export type RewardCatalogUpsertWithoutReward_redemptionInput = {
    update: Prisma.XOR<Prisma.RewardCatalogUpdateWithoutReward_redemptionInput, Prisma.RewardCatalogUncheckedUpdateWithoutReward_redemptionInput>;
    create: Prisma.XOR<Prisma.RewardCatalogCreateWithoutReward_redemptionInput, Prisma.RewardCatalogUncheckedCreateWithoutReward_redemptionInput>;
    where?: Prisma.RewardCatalogWhereInput;
};
export type RewardCatalogUpdateToOneWithWhereWithoutReward_redemptionInput = {
    where?: Prisma.RewardCatalogWhereInput;
    data: Prisma.XOR<Prisma.RewardCatalogUpdateWithoutReward_redemptionInput, Prisma.RewardCatalogUncheckedUpdateWithoutReward_redemptionInput>;
};
export type RewardCatalogUpdateWithoutReward_redemptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsCost?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardCatalogUncheckedUpdateWithoutReward_redemptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsCost?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RewardCatalogCountOutputType = {
    reward_redemption: number;
};
export type RewardCatalogCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reward_redemption?: boolean | RewardCatalogCountOutputTypeCountReward_redemptionArgs;
};
export type RewardCatalogCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogCountOutputTypeSelect<ExtArgs> | null;
};
export type RewardCatalogCountOutputTypeCountReward_redemptionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardRedemptionWhereInput;
};
export type RewardCatalogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    pointsCost?: boolean;
    stock?: boolean;
    imageUrl?: boolean;
    isActive?: boolean;
    validFrom?: boolean;
    validUntil?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    reward_redemption?: boolean | Prisma.RewardCatalog$reward_redemptionArgs<ExtArgs>;
    _count?: boolean | Prisma.RewardCatalogCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rewardCatalog"]>;
export type RewardCatalogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    pointsCost?: boolean;
    stock?: boolean;
    imageUrl?: boolean;
    isActive?: boolean;
    validFrom?: boolean;
    validUntil?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["rewardCatalog"]>;
export type RewardCatalogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    pointsCost?: boolean;
    stock?: boolean;
    imageUrl?: boolean;
    isActive?: boolean;
    validFrom?: boolean;
    validUntil?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["rewardCatalog"]>;
export type RewardCatalogSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean;
    pointsCost?: boolean;
    stock?: boolean;
    imageUrl?: boolean;
    isActive?: boolean;
    validFrom?: boolean;
    validUntil?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RewardCatalogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "description" | "category" | "pointsCost" | "stock" | "imageUrl" | "isActive" | "validFrom" | "validUntil" | "createdAt" | "updatedAt", ExtArgs["result"]["rewardCatalog"]>;
export type RewardCatalogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reward_redemption?: boolean | Prisma.RewardCatalog$reward_redemptionArgs<ExtArgs>;
    _count?: boolean | Prisma.RewardCatalogCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RewardCatalogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RewardCatalogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RewardCatalogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RewardCatalog";
    objects: {
        reward_redemption: Prisma.$RewardRedemptionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        name: string;
        description: string | null;
        category: string | null;
        pointsCost: number;
        stock: number | null;
        imageUrl: string | null;
        isActive: boolean;
        validFrom: Date | null;
        validUntil: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["rewardCatalog"]>;
    composites: {};
};
export type RewardCatalogGetPayload<S extends boolean | null | undefined | RewardCatalogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload, S>;
export type RewardCatalogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RewardCatalogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RewardCatalogCountAggregateInputType | true;
};
export interface RewardCatalogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RewardCatalog'];
        meta: {
            name: 'RewardCatalog';
        };
    };
    findUnique<T extends RewardCatalogFindUniqueArgs>(args: Prisma.SelectSubset<T, RewardCatalogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RewardCatalogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RewardCatalogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RewardCatalogFindFirstArgs>(args?: Prisma.SelectSubset<T, RewardCatalogFindFirstArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RewardCatalogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RewardCatalogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RewardCatalogFindManyArgs>(args?: Prisma.SelectSubset<T, RewardCatalogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RewardCatalogCreateArgs>(args: Prisma.SelectSubset<T, RewardCatalogCreateArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RewardCatalogCreateManyArgs>(args?: Prisma.SelectSubset<T, RewardCatalogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RewardCatalogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RewardCatalogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RewardCatalogDeleteArgs>(args: Prisma.SelectSubset<T, RewardCatalogDeleteArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RewardCatalogUpdateArgs>(args: Prisma.SelectSubset<T, RewardCatalogUpdateArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RewardCatalogDeleteManyArgs>(args?: Prisma.SelectSubset<T, RewardCatalogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RewardCatalogUpdateManyArgs>(args: Prisma.SelectSubset<T, RewardCatalogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RewardCatalogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RewardCatalogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RewardCatalogUpsertArgs>(args: Prisma.SelectSubset<T, RewardCatalogUpsertArgs<ExtArgs>>): Prisma.Prisma__RewardCatalogClient<runtime.Types.Result.GetResult<Prisma.$RewardCatalogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RewardCatalogCountArgs>(args?: Prisma.Subset<T, RewardCatalogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RewardCatalogCountAggregateOutputType> : number>;
    aggregate<T extends RewardCatalogAggregateArgs>(args: Prisma.Subset<T, RewardCatalogAggregateArgs>): Prisma.PrismaPromise<GetRewardCatalogAggregateType<T>>;
    groupBy<T extends RewardCatalogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RewardCatalogGroupByArgs['orderBy'];
    } : {
        orderBy?: RewardCatalogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RewardCatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardCatalogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RewardCatalogFieldRefs;
}
export interface Prisma__RewardCatalogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reward_redemption<T extends Prisma.RewardCatalog$reward_redemptionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RewardCatalog$reward_redemptionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RewardCatalogFieldRefs {
    readonly id: Prisma.FieldRef<"RewardCatalog", 'String'>;
    readonly code: Prisma.FieldRef<"RewardCatalog", 'String'>;
    readonly name: Prisma.FieldRef<"RewardCatalog", 'String'>;
    readonly description: Prisma.FieldRef<"RewardCatalog", 'String'>;
    readonly category: Prisma.FieldRef<"RewardCatalog", 'String'>;
    readonly pointsCost: Prisma.FieldRef<"RewardCatalog", 'Int'>;
    readonly stock: Prisma.FieldRef<"RewardCatalog", 'Int'>;
    readonly imageUrl: Prisma.FieldRef<"RewardCatalog", 'String'>;
    readonly isActive: Prisma.FieldRef<"RewardCatalog", 'Boolean'>;
    readonly validFrom: Prisma.FieldRef<"RewardCatalog", 'DateTime'>;
    readonly validUntil: Prisma.FieldRef<"RewardCatalog", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"RewardCatalog", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RewardCatalog", 'DateTime'>;
}
export type RewardCatalogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    where: Prisma.RewardCatalogWhereUniqueInput;
};
export type RewardCatalogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    where: Prisma.RewardCatalogWhereUniqueInput;
};
export type RewardCatalogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    where?: Prisma.RewardCatalogWhereInput;
    orderBy?: Prisma.RewardCatalogOrderByWithRelationInput | Prisma.RewardCatalogOrderByWithRelationInput[];
    cursor?: Prisma.RewardCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewardCatalogScalarFieldEnum | Prisma.RewardCatalogScalarFieldEnum[];
};
export type RewardCatalogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    where?: Prisma.RewardCatalogWhereInput;
    orderBy?: Prisma.RewardCatalogOrderByWithRelationInput | Prisma.RewardCatalogOrderByWithRelationInput[];
    cursor?: Prisma.RewardCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewardCatalogScalarFieldEnum | Prisma.RewardCatalogScalarFieldEnum[];
};
export type RewardCatalogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    where?: Prisma.RewardCatalogWhereInput;
    orderBy?: Prisma.RewardCatalogOrderByWithRelationInput | Prisma.RewardCatalogOrderByWithRelationInput[];
    cursor?: Prisma.RewardCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewardCatalogScalarFieldEnum | Prisma.RewardCatalogScalarFieldEnum[];
};
export type RewardCatalogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardCatalogCreateInput, Prisma.RewardCatalogUncheckedCreateInput>;
};
export type RewardCatalogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RewardCatalogCreateManyInput | Prisma.RewardCatalogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RewardCatalogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    data: Prisma.RewardCatalogCreateManyInput | Prisma.RewardCatalogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RewardCatalogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardCatalogUpdateInput, Prisma.RewardCatalogUncheckedUpdateInput>;
    where: Prisma.RewardCatalogWhereUniqueInput;
};
export type RewardCatalogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RewardCatalogUpdateManyMutationInput, Prisma.RewardCatalogUncheckedUpdateManyInput>;
    where?: Prisma.RewardCatalogWhereInput;
    limit?: number;
};
export type RewardCatalogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RewardCatalogUpdateManyMutationInput, Prisma.RewardCatalogUncheckedUpdateManyInput>;
    where?: Prisma.RewardCatalogWhereInput;
    limit?: number;
};
export type RewardCatalogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    where: Prisma.RewardCatalogWhereUniqueInput;
    create: Prisma.XOR<Prisma.RewardCatalogCreateInput, Prisma.RewardCatalogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RewardCatalogUpdateInput, Prisma.RewardCatalogUncheckedUpdateInput>;
};
export type RewardCatalogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
    where: Prisma.RewardCatalogWhereUniqueInput;
};
export type RewardCatalogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardCatalogWhereInput;
    limit?: number;
};
export type RewardCatalog$reward_redemptionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RewardCatalogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardCatalogSelect<ExtArgs> | null;
    omit?: Prisma.RewardCatalogOmit<ExtArgs> | null;
    include?: Prisma.RewardCatalogInclude<ExtArgs> | null;
};
