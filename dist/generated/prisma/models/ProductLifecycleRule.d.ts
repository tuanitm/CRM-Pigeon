import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductLifecycleRuleModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductLifecycleRulePayload>;
export type AggregateProductLifecycleRule = {
    _count: ProductLifecycleRuleCountAggregateOutputType | null;
    _avg: ProductLifecycleRuleAvgAggregateOutputType | null;
    _sum: ProductLifecycleRuleSumAggregateOutputType | null;
    _min: ProductLifecycleRuleMinAggregateOutputType | null;
    _max: ProductLifecycleRuleMaxAggregateOutputType | null;
};
export type ProductLifecycleRuleAvgAggregateOutputType = {
    replaceDays: number | null;
    usageQuantity: runtime.Decimal | null;
};
export type ProductLifecycleRuleSumAggregateOutputType = {
    replaceDays: number | null;
    usageQuantity: runtime.Decimal | null;
};
export type ProductLifecycleRuleMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    stageCode: string | null;
    replaceDays: number | null;
    usageUnit: string | null;
    usageQuantity: runtime.Decimal | null;
    createdAt: Date | null;
};
export type ProductLifecycleRuleMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    stageCode: string | null;
    replaceDays: number | null;
    usageUnit: string | null;
    usageQuantity: runtime.Decimal | null;
    createdAt: Date | null;
};
export type ProductLifecycleRuleCountAggregateOutputType = {
    id: number;
    productId: number;
    stageCode: number;
    replaceDays: number;
    usageUnit: number;
    usageQuantity: number;
    createdAt: number;
    _all: number;
};
export type ProductLifecycleRuleAvgAggregateInputType = {
    replaceDays?: true;
    usageQuantity?: true;
};
export type ProductLifecycleRuleSumAggregateInputType = {
    replaceDays?: true;
    usageQuantity?: true;
};
export type ProductLifecycleRuleMinAggregateInputType = {
    id?: true;
    productId?: true;
    stageCode?: true;
    replaceDays?: true;
    usageUnit?: true;
    usageQuantity?: true;
    createdAt?: true;
};
export type ProductLifecycleRuleMaxAggregateInputType = {
    id?: true;
    productId?: true;
    stageCode?: true;
    replaceDays?: true;
    usageUnit?: true;
    usageQuantity?: true;
    createdAt?: true;
};
export type ProductLifecycleRuleCountAggregateInputType = {
    id?: true;
    productId?: true;
    stageCode?: true;
    replaceDays?: true;
    usageUnit?: true;
    usageQuantity?: true;
    createdAt?: true;
    _all?: true;
};
export type ProductLifecycleRuleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductLifecycleRuleWhereInput;
    orderBy?: Prisma.ProductLifecycleRuleOrderByWithRelationInput | Prisma.ProductLifecycleRuleOrderByWithRelationInput[];
    cursor?: Prisma.ProductLifecycleRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductLifecycleRuleCountAggregateInputType;
    _avg?: ProductLifecycleRuleAvgAggregateInputType;
    _sum?: ProductLifecycleRuleSumAggregateInputType;
    _min?: ProductLifecycleRuleMinAggregateInputType;
    _max?: ProductLifecycleRuleMaxAggregateInputType;
};
export type GetProductLifecycleRuleAggregateType<T extends ProductLifecycleRuleAggregateArgs> = {
    [P in keyof T & keyof AggregateProductLifecycleRule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductLifecycleRule[P]> : Prisma.GetScalarType<T[P], AggregateProductLifecycleRule[P]>;
};
export type ProductLifecycleRuleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductLifecycleRuleWhereInput;
    orderBy?: Prisma.ProductLifecycleRuleOrderByWithAggregationInput | Prisma.ProductLifecycleRuleOrderByWithAggregationInput[];
    by: Prisma.ProductLifecycleRuleScalarFieldEnum[] | Prisma.ProductLifecycleRuleScalarFieldEnum;
    having?: Prisma.ProductLifecycleRuleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductLifecycleRuleCountAggregateInputType | true;
    _avg?: ProductLifecycleRuleAvgAggregateInputType;
    _sum?: ProductLifecycleRuleSumAggregateInputType;
    _min?: ProductLifecycleRuleMinAggregateInputType;
    _max?: ProductLifecycleRuleMaxAggregateInputType;
};
export type ProductLifecycleRuleGroupByOutputType = {
    id: string;
    productId: string;
    stageCode: string | null;
    replaceDays: number;
    usageUnit: string | null;
    usageQuantity: runtime.Decimal | null;
    createdAt: Date;
    _count: ProductLifecycleRuleCountAggregateOutputType | null;
    _avg: ProductLifecycleRuleAvgAggregateOutputType | null;
    _sum: ProductLifecycleRuleSumAggregateOutputType | null;
    _min: ProductLifecycleRuleMinAggregateOutputType | null;
    _max: ProductLifecycleRuleMaxAggregateOutputType | null;
};
export type GetProductLifecycleRuleGroupByPayload<T extends ProductLifecycleRuleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductLifecycleRuleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductLifecycleRuleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductLifecycleRuleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductLifecycleRuleGroupByOutputType[P]>;
}>>;
export type ProductLifecycleRuleWhereInput = {
    AND?: Prisma.ProductLifecycleRuleWhereInput | Prisma.ProductLifecycleRuleWhereInput[];
    OR?: Prisma.ProductLifecycleRuleWhereInput[];
    NOT?: Prisma.ProductLifecycleRuleWhereInput | Prisma.ProductLifecycleRuleWhereInput[];
    id?: Prisma.UuidFilter<"ProductLifecycleRule"> | string;
    productId?: Prisma.UuidFilter<"ProductLifecycleRule"> | string;
    stageCode?: Prisma.StringNullableFilter<"ProductLifecycleRule"> | string | null;
    replaceDays?: Prisma.IntFilter<"ProductLifecycleRule"> | number;
    usageUnit?: Prisma.StringNullableFilter<"ProductLifecycleRule"> | string | null;
    usageQuantity?: Prisma.DecimalNullableFilter<"ProductLifecycleRule"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProductLifecycleRule"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type ProductLifecycleRuleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    replaceDays?: Prisma.SortOrder;
    usageUnit?: Prisma.SortOrderInput | Prisma.SortOrder;
    usageQuantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type ProductLifecycleRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProductLifecycleRuleWhereInput | Prisma.ProductLifecycleRuleWhereInput[];
    OR?: Prisma.ProductLifecycleRuleWhereInput[];
    NOT?: Prisma.ProductLifecycleRuleWhereInput | Prisma.ProductLifecycleRuleWhereInput[];
    productId?: Prisma.UuidFilter<"ProductLifecycleRule"> | string;
    stageCode?: Prisma.StringNullableFilter<"ProductLifecycleRule"> | string | null;
    replaceDays?: Prisma.IntFilter<"ProductLifecycleRule"> | number;
    usageUnit?: Prisma.StringNullableFilter<"ProductLifecycleRule"> | string | null;
    usageQuantity?: Prisma.DecimalNullableFilter<"ProductLifecycleRule"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProductLifecycleRule"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id">;
export type ProductLifecycleRuleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    replaceDays?: Prisma.SortOrder;
    usageUnit?: Prisma.SortOrderInput | Prisma.SortOrder;
    usageQuantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ProductLifecycleRuleCountOrderByAggregateInput;
    _avg?: Prisma.ProductLifecycleRuleAvgOrderByAggregateInput;
    _max?: Prisma.ProductLifecycleRuleMaxOrderByAggregateInput;
    _min?: Prisma.ProductLifecycleRuleMinOrderByAggregateInput;
    _sum?: Prisma.ProductLifecycleRuleSumOrderByAggregateInput;
};
export type ProductLifecycleRuleScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductLifecycleRuleScalarWhereWithAggregatesInput | Prisma.ProductLifecycleRuleScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductLifecycleRuleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductLifecycleRuleScalarWhereWithAggregatesInput | Prisma.ProductLifecycleRuleScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ProductLifecycleRule"> | string;
    productId?: Prisma.UuidWithAggregatesFilter<"ProductLifecycleRule"> | string;
    stageCode?: Prisma.StringNullableWithAggregatesFilter<"ProductLifecycleRule"> | string | null;
    replaceDays?: Prisma.IntWithAggregatesFilter<"ProductLifecycleRule"> | number;
    usageUnit?: Prisma.StringNullableWithAggregatesFilter<"ProductLifecycleRule"> | string | null;
    usageQuantity?: Prisma.DecimalNullableWithAggregatesFilter<"ProductLifecycleRule"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProductLifecycleRule"> | Date | string;
};
export type ProductLifecycleRuleCreateInput = {
    id?: string;
    stageCode?: string | null;
    replaceDays: number;
    usageUnit?: string | null;
    usageQuantity?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutLifecycleRulesInput;
};
export type ProductLifecycleRuleUncheckedCreateInput = {
    id?: string;
    productId: string;
    stageCode?: string | null;
    replaceDays: number;
    usageUnit?: string | null;
    usageQuantity?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
};
export type ProductLifecycleRuleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    replaceDays?: Prisma.IntFieldUpdateOperationsInput | number;
    usageUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usageQuantity?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutLifecycleRulesNestedInput;
};
export type ProductLifecycleRuleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    replaceDays?: Prisma.IntFieldUpdateOperationsInput | number;
    usageUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usageQuantity?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductLifecycleRuleCreateManyInput = {
    id?: string;
    productId: string;
    stageCode?: string | null;
    replaceDays: number;
    usageUnit?: string | null;
    usageQuantity?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
};
export type ProductLifecycleRuleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    replaceDays?: Prisma.IntFieldUpdateOperationsInput | number;
    usageUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usageQuantity?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductLifecycleRuleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    replaceDays?: Prisma.IntFieldUpdateOperationsInput | number;
    usageUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usageQuantity?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductLifecycleRuleListRelationFilter = {
    every?: Prisma.ProductLifecycleRuleWhereInput;
    some?: Prisma.ProductLifecycleRuleWhereInput;
    none?: Prisma.ProductLifecycleRuleWhereInput;
};
export type ProductLifecycleRuleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductLifecycleRuleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrder;
    replaceDays?: Prisma.SortOrder;
    usageUnit?: Prisma.SortOrder;
    usageQuantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProductLifecycleRuleAvgOrderByAggregateInput = {
    replaceDays?: Prisma.SortOrder;
    usageQuantity?: Prisma.SortOrder;
};
export type ProductLifecycleRuleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrder;
    replaceDays?: Prisma.SortOrder;
    usageUnit?: Prisma.SortOrder;
    usageQuantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProductLifecycleRuleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrder;
    replaceDays?: Prisma.SortOrder;
    usageUnit?: Prisma.SortOrder;
    usageQuantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ProductLifecycleRuleSumOrderByAggregateInput = {
    replaceDays?: Prisma.SortOrder;
    usageQuantity?: Prisma.SortOrder;
};
export type ProductLifecycleRuleCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductLifecycleRuleCreateWithoutProductInput, Prisma.ProductLifecycleRuleUncheckedCreateWithoutProductInput> | Prisma.ProductLifecycleRuleCreateWithoutProductInput[] | Prisma.ProductLifecycleRuleUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductLifecycleRuleCreateOrConnectWithoutProductInput | Prisma.ProductLifecycleRuleCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductLifecycleRuleCreateManyProductInputEnvelope;
    connect?: Prisma.ProductLifecycleRuleWhereUniqueInput | Prisma.ProductLifecycleRuleWhereUniqueInput[];
};
export type ProductLifecycleRuleUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductLifecycleRuleCreateWithoutProductInput, Prisma.ProductLifecycleRuleUncheckedCreateWithoutProductInput> | Prisma.ProductLifecycleRuleCreateWithoutProductInput[] | Prisma.ProductLifecycleRuleUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductLifecycleRuleCreateOrConnectWithoutProductInput | Prisma.ProductLifecycleRuleCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductLifecycleRuleCreateManyProductInputEnvelope;
    connect?: Prisma.ProductLifecycleRuleWhereUniqueInput | Prisma.ProductLifecycleRuleWhereUniqueInput[];
};
export type ProductLifecycleRuleUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductLifecycleRuleCreateWithoutProductInput, Prisma.ProductLifecycleRuleUncheckedCreateWithoutProductInput> | Prisma.ProductLifecycleRuleCreateWithoutProductInput[] | Prisma.ProductLifecycleRuleUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductLifecycleRuleCreateOrConnectWithoutProductInput | Prisma.ProductLifecycleRuleCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductLifecycleRuleUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductLifecycleRuleUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductLifecycleRuleCreateManyProductInputEnvelope;
    set?: Prisma.ProductLifecycleRuleWhereUniqueInput | Prisma.ProductLifecycleRuleWhereUniqueInput[];
    disconnect?: Prisma.ProductLifecycleRuleWhereUniqueInput | Prisma.ProductLifecycleRuleWhereUniqueInput[];
    delete?: Prisma.ProductLifecycleRuleWhereUniqueInput | Prisma.ProductLifecycleRuleWhereUniqueInput[];
    connect?: Prisma.ProductLifecycleRuleWhereUniqueInput | Prisma.ProductLifecycleRuleWhereUniqueInput[];
    update?: Prisma.ProductLifecycleRuleUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductLifecycleRuleUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductLifecycleRuleUpdateManyWithWhereWithoutProductInput | Prisma.ProductLifecycleRuleUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductLifecycleRuleScalarWhereInput | Prisma.ProductLifecycleRuleScalarWhereInput[];
};
export type ProductLifecycleRuleUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductLifecycleRuleCreateWithoutProductInput, Prisma.ProductLifecycleRuleUncheckedCreateWithoutProductInput> | Prisma.ProductLifecycleRuleCreateWithoutProductInput[] | Prisma.ProductLifecycleRuleUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductLifecycleRuleCreateOrConnectWithoutProductInput | Prisma.ProductLifecycleRuleCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductLifecycleRuleUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductLifecycleRuleUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductLifecycleRuleCreateManyProductInputEnvelope;
    set?: Prisma.ProductLifecycleRuleWhereUniqueInput | Prisma.ProductLifecycleRuleWhereUniqueInput[];
    disconnect?: Prisma.ProductLifecycleRuleWhereUniqueInput | Prisma.ProductLifecycleRuleWhereUniqueInput[];
    delete?: Prisma.ProductLifecycleRuleWhereUniqueInput | Prisma.ProductLifecycleRuleWhereUniqueInput[];
    connect?: Prisma.ProductLifecycleRuleWhereUniqueInput | Prisma.ProductLifecycleRuleWhereUniqueInput[];
    update?: Prisma.ProductLifecycleRuleUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductLifecycleRuleUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductLifecycleRuleUpdateManyWithWhereWithoutProductInput | Prisma.ProductLifecycleRuleUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductLifecycleRuleScalarWhereInput | Prisma.ProductLifecycleRuleScalarWhereInput[];
};
export type ProductLifecycleRuleCreateWithoutProductInput = {
    id?: string;
    stageCode?: string | null;
    replaceDays: number;
    usageUnit?: string | null;
    usageQuantity?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
};
export type ProductLifecycleRuleUncheckedCreateWithoutProductInput = {
    id?: string;
    stageCode?: string | null;
    replaceDays: number;
    usageUnit?: string | null;
    usageQuantity?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
};
export type ProductLifecycleRuleCreateOrConnectWithoutProductInput = {
    where: Prisma.ProductLifecycleRuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductLifecycleRuleCreateWithoutProductInput, Prisma.ProductLifecycleRuleUncheckedCreateWithoutProductInput>;
};
export type ProductLifecycleRuleCreateManyProductInputEnvelope = {
    data: Prisma.ProductLifecycleRuleCreateManyProductInput | Prisma.ProductLifecycleRuleCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ProductLifecycleRuleUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductLifecycleRuleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductLifecycleRuleUpdateWithoutProductInput, Prisma.ProductLifecycleRuleUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ProductLifecycleRuleCreateWithoutProductInput, Prisma.ProductLifecycleRuleUncheckedCreateWithoutProductInput>;
};
export type ProductLifecycleRuleUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductLifecycleRuleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductLifecycleRuleUpdateWithoutProductInput, Prisma.ProductLifecycleRuleUncheckedUpdateWithoutProductInput>;
};
export type ProductLifecycleRuleUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ProductLifecycleRuleScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductLifecycleRuleUpdateManyMutationInput, Prisma.ProductLifecycleRuleUncheckedUpdateManyWithoutProductInput>;
};
export type ProductLifecycleRuleScalarWhereInput = {
    AND?: Prisma.ProductLifecycleRuleScalarWhereInput | Prisma.ProductLifecycleRuleScalarWhereInput[];
    OR?: Prisma.ProductLifecycleRuleScalarWhereInput[];
    NOT?: Prisma.ProductLifecycleRuleScalarWhereInput | Prisma.ProductLifecycleRuleScalarWhereInput[];
    id?: Prisma.UuidFilter<"ProductLifecycleRule"> | string;
    productId?: Prisma.UuidFilter<"ProductLifecycleRule"> | string;
    stageCode?: Prisma.StringNullableFilter<"ProductLifecycleRule"> | string | null;
    replaceDays?: Prisma.IntFilter<"ProductLifecycleRule"> | number;
    usageUnit?: Prisma.StringNullableFilter<"ProductLifecycleRule"> | string | null;
    usageQuantity?: Prisma.DecimalNullableFilter<"ProductLifecycleRule"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"ProductLifecycleRule"> | Date | string;
};
export type ProductLifecycleRuleCreateManyProductInput = {
    id?: string;
    stageCode?: string | null;
    replaceDays: number;
    usageUnit?: string | null;
    usageQuantity?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
};
export type ProductLifecycleRuleUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    replaceDays?: Prisma.IntFieldUpdateOperationsInput | number;
    usageUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usageQuantity?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductLifecycleRuleUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    replaceDays?: Prisma.IntFieldUpdateOperationsInput | number;
    usageUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usageQuantity?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductLifecycleRuleUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    replaceDays?: Prisma.IntFieldUpdateOperationsInput | number;
    usageUnit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usageQuantity?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductLifecycleRuleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    stageCode?: boolean;
    replaceDays?: boolean;
    usageUnit?: boolean;
    usageQuantity?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productLifecycleRule"]>;
export type ProductLifecycleRuleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    stageCode?: boolean;
    replaceDays?: boolean;
    usageUnit?: boolean;
    usageQuantity?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productLifecycleRule"]>;
export type ProductLifecycleRuleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    stageCode?: boolean;
    replaceDays?: boolean;
    usageUnit?: boolean;
    usageQuantity?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productLifecycleRule"]>;
export type ProductLifecycleRuleSelectScalar = {
    id?: boolean;
    productId?: boolean;
    stageCode?: boolean;
    replaceDays?: boolean;
    usageUnit?: boolean;
    usageQuantity?: boolean;
    createdAt?: boolean;
};
export type ProductLifecycleRuleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "stageCode" | "replaceDays" | "usageUnit" | "usageQuantity" | "createdAt", ExtArgs["result"]["productLifecycleRule"]>;
export type ProductLifecycleRuleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductLifecycleRuleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductLifecycleRuleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $ProductLifecycleRulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductLifecycleRule";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        stageCode: string | null;
        replaceDays: number;
        usageUnit: string | null;
        usageQuantity: runtime.Decimal | null;
        createdAt: Date;
    }, ExtArgs["result"]["productLifecycleRule"]>;
    composites: {};
};
export type ProductLifecycleRuleGetPayload<S extends boolean | null | undefined | ProductLifecycleRuleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductLifecycleRulePayload, S>;
export type ProductLifecycleRuleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductLifecycleRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductLifecycleRuleCountAggregateInputType | true;
};
export interface ProductLifecycleRuleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductLifecycleRule'];
        meta: {
            name: 'ProductLifecycleRule';
        };
    };
    findUnique<T extends ProductLifecycleRuleFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductLifecycleRuleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductLifecycleRuleClient<runtime.Types.Result.GetResult<Prisma.$ProductLifecycleRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductLifecycleRuleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductLifecycleRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductLifecycleRuleClient<runtime.Types.Result.GetResult<Prisma.$ProductLifecycleRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductLifecycleRuleFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductLifecycleRuleFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductLifecycleRuleClient<runtime.Types.Result.GetResult<Prisma.$ProductLifecycleRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductLifecycleRuleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductLifecycleRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductLifecycleRuleClient<runtime.Types.Result.GetResult<Prisma.$ProductLifecycleRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductLifecycleRuleFindManyArgs>(args?: Prisma.SelectSubset<T, ProductLifecycleRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductLifecycleRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductLifecycleRuleCreateArgs>(args: Prisma.SelectSubset<T, ProductLifecycleRuleCreateArgs<ExtArgs>>): Prisma.Prisma__ProductLifecycleRuleClient<runtime.Types.Result.GetResult<Prisma.$ProductLifecycleRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductLifecycleRuleCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductLifecycleRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductLifecycleRuleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductLifecycleRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductLifecycleRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductLifecycleRuleDeleteArgs>(args: Prisma.SelectSubset<T, ProductLifecycleRuleDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductLifecycleRuleClient<runtime.Types.Result.GetResult<Prisma.$ProductLifecycleRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductLifecycleRuleUpdateArgs>(args: Prisma.SelectSubset<T, ProductLifecycleRuleUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductLifecycleRuleClient<runtime.Types.Result.GetResult<Prisma.$ProductLifecycleRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductLifecycleRuleDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductLifecycleRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductLifecycleRuleUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductLifecycleRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductLifecycleRuleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductLifecycleRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductLifecycleRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductLifecycleRuleUpsertArgs>(args: Prisma.SelectSubset<T, ProductLifecycleRuleUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductLifecycleRuleClient<runtime.Types.Result.GetResult<Prisma.$ProductLifecycleRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductLifecycleRuleCountArgs>(args?: Prisma.Subset<T, ProductLifecycleRuleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductLifecycleRuleCountAggregateOutputType> : number>;
    aggregate<T extends ProductLifecycleRuleAggregateArgs>(args: Prisma.Subset<T, ProductLifecycleRuleAggregateArgs>): Prisma.PrismaPromise<GetProductLifecycleRuleAggregateType<T>>;
    groupBy<T extends ProductLifecycleRuleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductLifecycleRuleGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductLifecycleRuleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductLifecycleRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductLifecycleRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductLifecycleRuleFieldRefs;
}
export interface Prisma__ProductLifecycleRuleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductLifecycleRuleFieldRefs {
    readonly id: Prisma.FieldRef<"ProductLifecycleRule", 'String'>;
    readonly productId: Prisma.FieldRef<"ProductLifecycleRule", 'String'>;
    readonly stageCode: Prisma.FieldRef<"ProductLifecycleRule", 'String'>;
    readonly replaceDays: Prisma.FieldRef<"ProductLifecycleRule", 'Int'>;
    readonly usageUnit: Prisma.FieldRef<"ProductLifecycleRule", 'String'>;
    readonly usageQuantity: Prisma.FieldRef<"ProductLifecycleRule", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"ProductLifecycleRule", 'DateTime'>;
}
export type ProductLifecycleRuleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductLifecycleRuleSelect<ExtArgs> | null;
    omit?: Prisma.ProductLifecycleRuleOmit<ExtArgs> | null;
    include?: Prisma.ProductLifecycleRuleInclude<ExtArgs> | null;
    where: Prisma.ProductLifecycleRuleWhereUniqueInput;
};
export type ProductLifecycleRuleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductLifecycleRuleSelect<ExtArgs> | null;
    omit?: Prisma.ProductLifecycleRuleOmit<ExtArgs> | null;
    include?: Prisma.ProductLifecycleRuleInclude<ExtArgs> | null;
    where: Prisma.ProductLifecycleRuleWhereUniqueInput;
};
export type ProductLifecycleRuleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductLifecycleRuleSelect<ExtArgs> | null;
    omit?: Prisma.ProductLifecycleRuleOmit<ExtArgs> | null;
    include?: Prisma.ProductLifecycleRuleInclude<ExtArgs> | null;
    where?: Prisma.ProductLifecycleRuleWhereInput;
    orderBy?: Prisma.ProductLifecycleRuleOrderByWithRelationInput | Prisma.ProductLifecycleRuleOrderByWithRelationInput[];
    cursor?: Prisma.ProductLifecycleRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductLifecycleRuleScalarFieldEnum | Prisma.ProductLifecycleRuleScalarFieldEnum[];
};
export type ProductLifecycleRuleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductLifecycleRuleSelect<ExtArgs> | null;
    omit?: Prisma.ProductLifecycleRuleOmit<ExtArgs> | null;
    include?: Prisma.ProductLifecycleRuleInclude<ExtArgs> | null;
    where?: Prisma.ProductLifecycleRuleWhereInput;
    orderBy?: Prisma.ProductLifecycleRuleOrderByWithRelationInput | Prisma.ProductLifecycleRuleOrderByWithRelationInput[];
    cursor?: Prisma.ProductLifecycleRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductLifecycleRuleScalarFieldEnum | Prisma.ProductLifecycleRuleScalarFieldEnum[];
};
export type ProductLifecycleRuleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductLifecycleRuleSelect<ExtArgs> | null;
    omit?: Prisma.ProductLifecycleRuleOmit<ExtArgs> | null;
    include?: Prisma.ProductLifecycleRuleInclude<ExtArgs> | null;
    where?: Prisma.ProductLifecycleRuleWhereInput;
    orderBy?: Prisma.ProductLifecycleRuleOrderByWithRelationInput | Prisma.ProductLifecycleRuleOrderByWithRelationInput[];
    cursor?: Prisma.ProductLifecycleRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductLifecycleRuleScalarFieldEnum | Prisma.ProductLifecycleRuleScalarFieldEnum[];
};
export type ProductLifecycleRuleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductLifecycleRuleSelect<ExtArgs> | null;
    omit?: Prisma.ProductLifecycleRuleOmit<ExtArgs> | null;
    include?: Prisma.ProductLifecycleRuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductLifecycleRuleCreateInput, Prisma.ProductLifecycleRuleUncheckedCreateInput>;
};
export type ProductLifecycleRuleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductLifecycleRuleCreateManyInput | Prisma.ProductLifecycleRuleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductLifecycleRuleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductLifecycleRuleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductLifecycleRuleOmit<ExtArgs> | null;
    data: Prisma.ProductLifecycleRuleCreateManyInput | Prisma.ProductLifecycleRuleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductLifecycleRuleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductLifecycleRuleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductLifecycleRuleSelect<ExtArgs> | null;
    omit?: Prisma.ProductLifecycleRuleOmit<ExtArgs> | null;
    include?: Prisma.ProductLifecycleRuleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductLifecycleRuleUpdateInput, Prisma.ProductLifecycleRuleUncheckedUpdateInput>;
    where: Prisma.ProductLifecycleRuleWhereUniqueInput;
};
export type ProductLifecycleRuleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductLifecycleRuleUpdateManyMutationInput, Prisma.ProductLifecycleRuleUncheckedUpdateManyInput>;
    where?: Prisma.ProductLifecycleRuleWhereInput;
    limit?: number;
};
export type ProductLifecycleRuleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductLifecycleRuleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductLifecycleRuleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductLifecycleRuleUpdateManyMutationInput, Prisma.ProductLifecycleRuleUncheckedUpdateManyInput>;
    where?: Prisma.ProductLifecycleRuleWhereInput;
    limit?: number;
    include?: Prisma.ProductLifecycleRuleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductLifecycleRuleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductLifecycleRuleSelect<ExtArgs> | null;
    omit?: Prisma.ProductLifecycleRuleOmit<ExtArgs> | null;
    include?: Prisma.ProductLifecycleRuleInclude<ExtArgs> | null;
    where: Prisma.ProductLifecycleRuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductLifecycleRuleCreateInput, Prisma.ProductLifecycleRuleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductLifecycleRuleUpdateInput, Prisma.ProductLifecycleRuleUncheckedUpdateInput>;
};
export type ProductLifecycleRuleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductLifecycleRuleSelect<ExtArgs> | null;
    omit?: Prisma.ProductLifecycleRuleOmit<ExtArgs> | null;
    include?: Prisma.ProductLifecycleRuleInclude<ExtArgs> | null;
    where: Prisma.ProductLifecycleRuleWhereUniqueInput;
};
export type ProductLifecycleRuleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductLifecycleRuleWhereInput;
    limit?: number;
};
export type ProductLifecycleRuleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductLifecycleRuleSelect<ExtArgs> | null;
    omit?: Prisma.ProductLifecycleRuleOmit<ExtArgs> | null;
    include?: Prisma.ProductLifecycleRuleInclude<ExtArgs> | null;
};
