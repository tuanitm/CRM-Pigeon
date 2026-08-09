import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type subscription_itemModel = runtime.Types.Result.DefaultSelection<Prisma.$subscription_itemPayload>;
export type AggregateSubscription_item = {
    _count: Subscription_itemCountAggregateOutputType | null;
    _avg: Subscription_itemAvgAggregateOutputType | null;
    _sum: Subscription_itemSumAggregateOutputType | null;
    _min: Subscription_itemMinAggregateOutputType | null;
    _max: Subscription_itemMaxAggregateOutputType | null;
};
export type Subscription_itemAvgAggregateOutputType = {
    quantity: number | null;
    unit_price: runtime.Decimal | null;
};
export type Subscription_itemSumAggregateOutputType = {
    quantity: number | null;
    unit_price: runtime.Decimal | null;
};
export type Subscription_itemMinAggregateOutputType = {
    id: string | null;
    subscription_id: string | null;
    product_id: string | null;
    quantity: number | null;
    unit_price: runtime.Decimal | null;
    created_at: Date | null;
};
export type Subscription_itemMaxAggregateOutputType = {
    id: string | null;
    subscription_id: string | null;
    product_id: string | null;
    quantity: number | null;
    unit_price: runtime.Decimal | null;
    created_at: Date | null;
};
export type Subscription_itemCountAggregateOutputType = {
    id: number;
    subscription_id: number;
    product_id: number;
    quantity: number;
    unit_price: number;
    created_at: number;
    _all: number;
};
export type Subscription_itemAvgAggregateInputType = {
    quantity?: true;
    unit_price?: true;
};
export type Subscription_itemSumAggregateInputType = {
    quantity?: true;
    unit_price?: true;
};
export type Subscription_itemMinAggregateInputType = {
    id?: true;
    subscription_id?: true;
    product_id?: true;
    quantity?: true;
    unit_price?: true;
    created_at?: true;
};
export type Subscription_itemMaxAggregateInputType = {
    id?: true;
    subscription_id?: true;
    product_id?: true;
    quantity?: true;
    unit_price?: true;
    created_at?: true;
};
export type Subscription_itemCountAggregateInputType = {
    id?: true;
    subscription_id?: true;
    product_id?: true;
    quantity?: true;
    unit_price?: true;
    created_at?: true;
    _all?: true;
};
export type Subscription_itemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscription_itemWhereInput;
    orderBy?: Prisma.subscription_itemOrderByWithRelationInput | Prisma.subscription_itemOrderByWithRelationInput[];
    cursor?: Prisma.subscription_itemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Subscription_itemCountAggregateInputType;
    _avg?: Subscription_itemAvgAggregateInputType;
    _sum?: Subscription_itemSumAggregateInputType;
    _min?: Subscription_itemMinAggregateInputType;
    _max?: Subscription_itemMaxAggregateInputType;
};
export type GetSubscription_itemAggregateType<T extends Subscription_itemAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscription_item]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubscription_item[P]> : Prisma.GetScalarType<T[P], AggregateSubscription_item[P]>;
};
export type subscription_itemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscription_itemWhereInput;
    orderBy?: Prisma.subscription_itemOrderByWithAggregationInput | Prisma.subscription_itemOrderByWithAggregationInput[];
    by: Prisma.Subscription_itemScalarFieldEnum[] | Prisma.Subscription_itemScalarFieldEnum;
    having?: Prisma.subscription_itemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Subscription_itemCountAggregateInputType | true;
    _avg?: Subscription_itemAvgAggregateInputType;
    _sum?: Subscription_itemSumAggregateInputType;
    _min?: Subscription_itemMinAggregateInputType;
    _max?: Subscription_itemMaxAggregateInputType;
};
export type Subscription_itemGroupByOutputType = {
    id: string;
    subscription_id: string;
    product_id: string;
    quantity: number;
    unit_price: runtime.Decimal;
    created_at: Date;
    _count: Subscription_itemCountAggregateOutputType | null;
    _avg: Subscription_itemAvgAggregateOutputType | null;
    _sum: Subscription_itemSumAggregateOutputType | null;
    _min: Subscription_itemMinAggregateOutputType | null;
    _max: Subscription_itemMaxAggregateOutputType | null;
};
export type GetSubscription_itemGroupByPayload<T extends subscription_itemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Subscription_itemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Subscription_itemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Subscription_itemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Subscription_itemGroupByOutputType[P]>;
}>>;
export type subscription_itemWhereInput = {
    AND?: Prisma.subscription_itemWhereInput | Prisma.subscription_itemWhereInput[];
    OR?: Prisma.subscription_itemWhereInput[];
    NOT?: Prisma.subscription_itemWhereInput | Prisma.subscription_itemWhereInput[];
    id?: Prisma.UuidFilter<"subscription_item"> | string;
    subscription_id?: Prisma.UuidFilter<"subscription_item"> | string;
    product_id?: Prisma.UuidFilter<"subscription_item"> | string;
    quantity?: Prisma.IntFilter<"subscription_item"> | number;
    unit_price?: Prisma.DecimalFilter<"subscription_item"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"subscription_item"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    subscription?: Prisma.XOR<Prisma.SubscriptionScalarRelationFilter, Prisma.subscriptionWhereInput>;
};
export type subscription_itemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
    subscription?: Prisma.subscriptionOrderByWithRelationInput;
};
export type subscription_itemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.subscription_itemWhereInput | Prisma.subscription_itemWhereInput[];
    OR?: Prisma.subscription_itemWhereInput[];
    NOT?: Prisma.subscription_itemWhereInput | Prisma.subscription_itemWhereInput[];
    subscription_id?: Prisma.UuidFilter<"subscription_item"> | string;
    product_id?: Prisma.UuidFilter<"subscription_item"> | string;
    quantity?: Prisma.IntFilter<"subscription_item"> | number;
    unit_price?: Prisma.DecimalFilter<"subscription_item"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"subscription_item"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    subscription?: Prisma.XOR<Prisma.SubscriptionScalarRelationFilter, Prisma.subscriptionWhereInput>;
}, "id">;
export type subscription_itemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.subscription_itemCountOrderByAggregateInput;
    _avg?: Prisma.subscription_itemAvgOrderByAggregateInput;
    _max?: Prisma.subscription_itemMaxOrderByAggregateInput;
    _min?: Prisma.subscription_itemMinOrderByAggregateInput;
    _sum?: Prisma.subscription_itemSumOrderByAggregateInput;
};
export type subscription_itemScalarWhereWithAggregatesInput = {
    AND?: Prisma.subscription_itemScalarWhereWithAggregatesInput | Prisma.subscription_itemScalarWhereWithAggregatesInput[];
    OR?: Prisma.subscription_itemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.subscription_itemScalarWhereWithAggregatesInput | Prisma.subscription_itemScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"subscription_item"> | string;
    subscription_id?: Prisma.UuidWithAggregatesFilter<"subscription_item"> | string;
    product_id?: Prisma.UuidWithAggregatesFilter<"subscription_item"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"subscription_item"> | number;
    unit_price?: Prisma.DecimalWithAggregatesFilter<"subscription_item"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"subscription_item"> | Date | string;
};
export type subscription_itemCreateInput = {
    id?: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutSubscription_itemInput;
    subscription: Prisma.subscriptionCreateNestedOneWithoutSubscription_itemInput;
};
export type subscription_itemUncheckedCreateInput = {
    id?: string;
    subscription_id: string;
    product_id: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type subscription_itemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutSubscription_itemNestedInput;
    subscription?: Prisma.subscriptionUpdateOneRequiredWithoutSubscription_itemNestedInput;
};
export type subscription_itemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subscription_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscription_itemCreateManyInput = {
    id?: string;
    subscription_id: string;
    product_id: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type subscription_itemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscription_itemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subscription_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Subscription_itemListRelationFilter = {
    every?: Prisma.subscription_itemWhereInput;
    some?: Prisma.subscription_itemWhereInput;
    none?: Prisma.subscription_itemWhereInput;
};
export type subscription_itemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type subscription_itemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type subscription_itemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
};
export type subscription_itemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type subscription_itemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type subscription_itemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
};
export type subscription_itemCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.subscription_itemCreateWithoutProductInput, Prisma.subscription_itemUncheckedCreateWithoutProductInput> | Prisma.subscription_itemCreateWithoutProductInput[] | Prisma.subscription_itemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.subscription_itemCreateOrConnectWithoutProductInput | Prisma.subscription_itemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.subscription_itemCreateManyProductInputEnvelope;
    connect?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
};
export type subscription_itemUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.subscription_itemCreateWithoutProductInput, Prisma.subscription_itemUncheckedCreateWithoutProductInput> | Prisma.subscription_itemCreateWithoutProductInput[] | Prisma.subscription_itemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.subscription_itemCreateOrConnectWithoutProductInput | Prisma.subscription_itemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.subscription_itemCreateManyProductInputEnvelope;
    connect?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
};
export type subscription_itemUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.subscription_itemCreateWithoutProductInput, Prisma.subscription_itemUncheckedCreateWithoutProductInput> | Prisma.subscription_itemCreateWithoutProductInput[] | Prisma.subscription_itemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.subscription_itemCreateOrConnectWithoutProductInput | Prisma.subscription_itemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.subscription_itemUpsertWithWhereUniqueWithoutProductInput | Prisma.subscription_itemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.subscription_itemCreateManyProductInputEnvelope;
    set?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    disconnect?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    delete?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    connect?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    update?: Prisma.subscription_itemUpdateWithWhereUniqueWithoutProductInput | Prisma.subscription_itemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.subscription_itemUpdateManyWithWhereWithoutProductInput | Prisma.subscription_itemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.subscription_itemScalarWhereInput | Prisma.subscription_itemScalarWhereInput[];
};
export type subscription_itemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.subscription_itemCreateWithoutProductInput, Prisma.subscription_itemUncheckedCreateWithoutProductInput> | Prisma.subscription_itemCreateWithoutProductInput[] | Prisma.subscription_itemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.subscription_itemCreateOrConnectWithoutProductInput | Prisma.subscription_itemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.subscription_itemUpsertWithWhereUniqueWithoutProductInput | Prisma.subscription_itemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.subscription_itemCreateManyProductInputEnvelope;
    set?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    disconnect?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    delete?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    connect?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    update?: Prisma.subscription_itemUpdateWithWhereUniqueWithoutProductInput | Prisma.subscription_itemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.subscription_itemUpdateManyWithWhereWithoutProductInput | Prisma.subscription_itemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.subscription_itemScalarWhereInput | Prisma.subscription_itemScalarWhereInput[];
};
export type subscription_itemCreateNestedManyWithoutSubscriptionInput = {
    create?: Prisma.XOR<Prisma.subscription_itemCreateWithoutSubscriptionInput, Prisma.subscription_itemUncheckedCreateWithoutSubscriptionInput> | Prisma.subscription_itemCreateWithoutSubscriptionInput[] | Prisma.subscription_itemUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?: Prisma.subscription_itemCreateOrConnectWithoutSubscriptionInput | Prisma.subscription_itemCreateOrConnectWithoutSubscriptionInput[];
    createMany?: Prisma.subscription_itemCreateManySubscriptionInputEnvelope;
    connect?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
};
export type subscription_itemUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: Prisma.XOR<Prisma.subscription_itemCreateWithoutSubscriptionInput, Prisma.subscription_itemUncheckedCreateWithoutSubscriptionInput> | Prisma.subscription_itemCreateWithoutSubscriptionInput[] | Prisma.subscription_itemUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?: Prisma.subscription_itemCreateOrConnectWithoutSubscriptionInput | Prisma.subscription_itemCreateOrConnectWithoutSubscriptionInput[];
    createMany?: Prisma.subscription_itemCreateManySubscriptionInputEnvelope;
    connect?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
};
export type subscription_itemUpdateManyWithoutSubscriptionNestedInput = {
    create?: Prisma.XOR<Prisma.subscription_itemCreateWithoutSubscriptionInput, Prisma.subscription_itemUncheckedCreateWithoutSubscriptionInput> | Prisma.subscription_itemCreateWithoutSubscriptionInput[] | Prisma.subscription_itemUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?: Prisma.subscription_itemCreateOrConnectWithoutSubscriptionInput | Prisma.subscription_itemCreateOrConnectWithoutSubscriptionInput[];
    upsert?: Prisma.subscription_itemUpsertWithWhereUniqueWithoutSubscriptionInput | Prisma.subscription_itemUpsertWithWhereUniqueWithoutSubscriptionInput[];
    createMany?: Prisma.subscription_itemCreateManySubscriptionInputEnvelope;
    set?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    disconnect?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    delete?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    connect?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    update?: Prisma.subscription_itemUpdateWithWhereUniqueWithoutSubscriptionInput | Prisma.subscription_itemUpdateWithWhereUniqueWithoutSubscriptionInput[];
    updateMany?: Prisma.subscription_itemUpdateManyWithWhereWithoutSubscriptionInput | Prisma.subscription_itemUpdateManyWithWhereWithoutSubscriptionInput[];
    deleteMany?: Prisma.subscription_itemScalarWhereInput | Prisma.subscription_itemScalarWhereInput[];
};
export type subscription_itemUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: Prisma.XOR<Prisma.subscription_itemCreateWithoutSubscriptionInput, Prisma.subscription_itemUncheckedCreateWithoutSubscriptionInput> | Prisma.subscription_itemCreateWithoutSubscriptionInput[] | Prisma.subscription_itemUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?: Prisma.subscription_itemCreateOrConnectWithoutSubscriptionInput | Prisma.subscription_itemCreateOrConnectWithoutSubscriptionInput[];
    upsert?: Prisma.subscription_itemUpsertWithWhereUniqueWithoutSubscriptionInput | Prisma.subscription_itemUpsertWithWhereUniqueWithoutSubscriptionInput[];
    createMany?: Prisma.subscription_itemCreateManySubscriptionInputEnvelope;
    set?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    disconnect?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    delete?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    connect?: Prisma.subscription_itemWhereUniqueInput | Prisma.subscription_itemWhereUniqueInput[];
    update?: Prisma.subscription_itemUpdateWithWhereUniqueWithoutSubscriptionInput | Prisma.subscription_itemUpdateWithWhereUniqueWithoutSubscriptionInput[];
    updateMany?: Prisma.subscription_itemUpdateManyWithWhereWithoutSubscriptionInput | Prisma.subscription_itemUpdateManyWithWhereWithoutSubscriptionInput[];
    deleteMany?: Prisma.subscription_itemScalarWhereInput | Prisma.subscription_itemScalarWhereInput[];
};
export type subscription_itemCreateWithoutProductInput = {
    id?: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    subscription: Prisma.subscriptionCreateNestedOneWithoutSubscription_itemInput;
};
export type subscription_itemUncheckedCreateWithoutProductInput = {
    id?: string;
    subscription_id: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type subscription_itemCreateOrConnectWithoutProductInput = {
    where: Prisma.subscription_itemWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscription_itemCreateWithoutProductInput, Prisma.subscription_itemUncheckedCreateWithoutProductInput>;
};
export type subscription_itemCreateManyProductInputEnvelope = {
    data: Prisma.subscription_itemCreateManyProductInput | Prisma.subscription_itemCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type subscription_itemUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.subscription_itemWhereUniqueInput;
    update: Prisma.XOR<Prisma.subscription_itemUpdateWithoutProductInput, Prisma.subscription_itemUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.subscription_itemCreateWithoutProductInput, Prisma.subscription_itemUncheckedCreateWithoutProductInput>;
};
export type subscription_itemUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.subscription_itemWhereUniqueInput;
    data: Prisma.XOR<Prisma.subscription_itemUpdateWithoutProductInput, Prisma.subscription_itemUncheckedUpdateWithoutProductInput>;
};
export type subscription_itemUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.subscription_itemScalarWhereInput;
    data: Prisma.XOR<Prisma.subscription_itemUpdateManyMutationInput, Prisma.subscription_itemUncheckedUpdateManyWithoutProductInput>;
};
export type subscription_itemScalarWhereInput = {
    AND?: Prisma.subscription_itemScalarWhereInput | Prisma.subscription_itemScalarWhereInput[];
    OR?: Prisma.subscription_itemScalarWhereInput[];
    NOT?: Prisma.subscription_itemScalarWhereInput | Prisma.subscription_itemScalarWhereInput[];
    id?: Prisma.UuidFilter<"subscription_item"> | string;
    subscription_id?: Prisma.UuidFilter<"subscription_item"> | string;
    product_id?: Prisma.UuidFilter<"subscription_item"> | string;
    quantity?: Prisma.IntFilter<"subscription_item"> | number;
    unit_price?: Prisma.DecimalFilter<"subscription_item"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"subscription_item"> | Date | string;
};
export type subscription_itemCreateWithoutSubscriptionInput = {
    id?: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutSubscription_itemInput;
};
export type subscription_itemUncheckedCreateWithoutSubscriptionInput = {
    id?: string;
    product_id: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type subscription_itemCreateOrConnectWithoutSubscriptionInput = {
    where: Prisma.subscription_itemWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscription_itemCreateWithoutSubscriptionInput, Prisma.subscription_itemUncheckedCreateWithoutSubscriptionInput>;
};
export type subscription_itemCreateManySubscriptionInputEnvelope = {
    data: Prisma.subscription_itemCreateManySubscriptionInput | Prisma.subscription_itemCreateManySubscriptionInput[];
    skipDuplicates?: boolean;
};
export type subscription_itemUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: Prisma.subscription_itemWhereUniqueInput;
    update: Prisma.XOR<Prisma.subscription_itemUpdateWithoutSubscriptionInput, Prisma.subscription_itemUncheckedUpdateWithoutSubscriptionInput>;
    create: Prisma.XOR<Prisma.subscription_itemCreateWithoutSubscriptionInput, Prisma.subscription_itemUncheckedCreateWithoutSubscriptionInput>;
};
export type subscription_itemUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: Prisma.subscription_itemWhereUniqueInput;
    data: Prisma.XOR<Prisma.subscription_itemUpdateWithoutSubscriptionInput, Prisma.subscription_itemUncheckedUpdateWithoutSubscriptionInput>;
};
export type subscription_itemUpdateManyWithWhereWithoutSubscriptionInput = {
    where: Prisma.subscription_itemScalarWhereInput;
    data: Prisma.XOR<Prisma.subscription_itemUpdateManyMutationInput, Prisma.subscription_itemUncheckedUpdateManyWithoutSubscriptionInput>;
};
export type subscription_itemCreateManyProductInput = {
    id?: string;
    subscription_id: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type subscription_itemUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.subscriptionUpdateOneRequiredWithoutSubscription_itemNestedInput;
};
export type subscription_itemUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subscription_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscription_itemUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subscription_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscription_itemCreateManySubscriptionInput = {
    id?: string;
    product_id: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type subscription_itemUpdateWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutSubscription_itemNestedInput;
};
export type subscription_itemUncheckedUpdateWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscription_itemUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscription_itemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subscription_id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    unit_price?: boolean;
    created_at?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    subscription?: boolean | Prisma.subscriptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription_item"]>;
export type subscription_itemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subscription_id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    unit_price?: boolean;
    created_at?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    subscription?: boolean | Prisma.subscriptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription_item"]>;
export type subscription_itemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subscription_id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    unit_price?: boolean;
    created_at?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    subscription?: boolean | Prisma.subscriptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription_item"]>;
export type subscription_itemSelectScalar = {
    id?: boolean;
    subscription_id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    unit_price?: boolean;
    created_at?: boolean;
};
export type subscription_itemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "subscription_id" | "product_id" | "quantity" | "unit_price" | "created_at", ExtArgs["result"]["subscription_item"]>;
export type subscription_itemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    subscription?: boolean | Prisma.subscriptionDefaultArgs<ExtArgs>;
};
export type subscription_itemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    subscription?: boolean | Prisma.subscriptionDefaultArgs<ExtArgs>;
};
export type subscription_itemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    subscription?: boolean | Prisma.subscriptionDefaultArgs<ExtArgs>;
};
export type $subscription_itemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "subscription_item";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
        subscription: Prisma.$subscriptionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        subscription_id: string;
        product_id: string;
        quantity: number;
        unit_price: runtime.Decimal;
        created_at: Date;
    }, ExtArgs["result"]["subscription_item"]>;
    composites: {};
};
export type subscription_itemGetPayload<S extends boolean | null | undefined | subscription_itemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$subscription_itemPayload, S>;
export type subscription_itemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<subscription_itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Subscription_itemCountAggregateInputType | true;
};
export interface subscription_itemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['subscription_item'];
        meta: {
            name: 'subscription_item';
        };
    };
    findUnique<T extends subscription_itemFindUniqueArgs>(args: Prisma.SelectSubset<T, subscription_itemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__subscription_itemClient<runtime.Types.Result.GetResult<Prisma.$subscription_itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends subscription_itemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, subscription_itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__subscription_itemClient<runtime.Types.Result.GetResult<Prisma.$subscription_itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends subscription_itemFindFirstArgs>(args?: Prisma.SelectSubset<T, subscription_itemFindFirstArgs<ExtArgs>>): Prisma.Prisma__subscription_itemClient<runtime.Types.Result.GetResult<Prisma.$subscription_itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends subscription_itemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, subscription_itemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__subscription_itemClient<runtime.Types.Result.GetResult<Prisma.$subscription_itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends subscription_itemFindManyArgs>(args?: Prisma.SelectSubset<T, subscription_itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscription_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends subscription_itemCreateArgs>(args: Prisma.SelectSubset<T, subscription_itemCreateArgs<ExtArgs>>): Prisma.Prisma__subscription_itemClient<runtime.Types.Result.GetResult<Prisma.$subscription_itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends subscription_itemCreateManyArgs>(args?: Prisma.SelectSubset<T, subscription_itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends subscription_itemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, subscription_itemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscription_itemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends subscription_itemDeleteArgs>(args: Prisma.SelectSubset<T, subscription_itemDeleteArgs<ExtArgs>>): Prisma.Prisma__subscription_itemClient<runtime.Types.Result.GetResult<Prisma.$subscription_itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends subscription_itemUpdateArgs>(args: Prisma.SelectSubset<T, subscription_itemUpdateArgs<ExtArgs>>): Prisma.Prisma__subscription_itemClient<runtime.Types.Result.GetResult<Prisma.$subscription_itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends subscription_itemDeleteManyArgs>(args?: Prisma.SelectSubset<T, subscription_itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends subscription_itemUpdateManyArgs>(args: Prisma.SelectSubset<T, subscription_itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends subscription_itemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, subscription_itemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscription_itemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends subscription_itemUpsertArgs>(args: Prisma.SelectSubset<T, subscription_itemUpsertArgs<ExtArgs>>): Prisma.Prisma__subscription_itemClient<runtime.Types.Result.GetResult<Prisma.$subscription_itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends subscription_itemCountArgs>(args?: Prisma.Subset<T, subscription_itemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Subscription_itemCountAggregateOutputType> : number>;
    aggregate<T extends Subscription_itemAggregateArgs>(args: Prisma.Subset<T, Subscription_itemAggregateArgs>): Prisma.PrismaPromise<GetSubscription_itemAggregateType<T>>;
    groupBy<T extends subscription_itemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: subscription_itemGroupByArgs['orderBy'];
    } : {
        orderBy?: subscription_itemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, subscription_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscription_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: subscription_itemFieldRefs;
}
export interface Prisma__subscription_itemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    subscription<T extends Prisma.subscriptionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.subscriptionDefaultArgs<ExtArgs>>): Prisma.Prisma__subscriptionClient<runtime.Types.Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface subscription_itemFieldRefs {
    readonly id: Prisma.FieldRef<"subscription_item", 'String'>;
    readonly subscription_id: Prisma.FieldRef<"subscription_item", 'String'>;
    readonly product_id: Prisma.FieldRef<"subscription_item", 'String'>;
    readonly quantity: Prisma.FieldRef<"subscription_item", 'Int'>;
    readonly unit_price: Prisma.FieldRef<"subscription_item", 'Decimal'>;
    readonly created_at: Prisma.FieldRef<"subscription_item", 'DateTime'>;
}
export type subscription_itemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_itemSelect<ExtArgs> | null;
    omit?: Prisma.subscription_itemOmit<ExtArgs> | null;
    include?: Prisma.subscription_itemInclude<ExtArgs> | null;
    where: Prisma.subscription_itemWhereUniqueInput;
};
export type subscription_itemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_itemSelect<ExtArgs> | null;
    omit?: Prisma.subscription_itemOmit<ExtArgs> | null;
    include?: Prisma.subscription_itemInclude<ExtArgs> | null;
    where: Prisma.subscription_itemWhereUniqueInput;
};
export type subscription_itemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_itemSelect<ExtArgs> | null;
    omit?: Prisma.subscription_itemOmit<ExtArgs> | null;
    include?: Prisma.subscription_itemInclude<ExtArgs> | null;
    where?: Prisma.subscription_itemWhereInput;
    orderBy?: Prisma.subscription_itemOrderByWithRelationInput | Prisma.subscription_itemOrderByWithRelationInput[];
    cursor?: Prisma.subscription_itemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Subscription_itemScalarFieldEnum | Prisma.Subscription_itemScalarFieldEnum[];
};
export type subscription_itemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_itemSelect<ExtArgs> | null;
    omit?: Prisma.subscription_itemOmit<ExtArgs> | null;
    include?: Prisma.subscription_itemInclude<ExtArgs> | null;
    where?: Prisma.subscription_itemWhereInput;
    orderBy?: Prisma.subscription_itemOrderByWithRelationInput | Prisma.subscription_itemOrderByWithRelationInput[];
    cursor?: Prisma.subscription_itemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Subscription_itemScalarFieldEnum | Prisma.Subscription_itemScalarFieldEnum[];
};
export type subscription_itemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_itemSelect<ExtArgs> | null;
    omit?: Prisma.subscription_itemOmit<ExtArgs> | null;
    include?: Prisma.subscription_itemInclude<ExtArgs> | null;
    where?: Prisma.subscription_itemWhereInput;
    orderBy?: Prisma.subscription_itemOrderByWithRelationInput | Prisma.subscription_itemOrderByWithRelationInput[];
    cursor?: Prisma.subscription_itemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Subscription_itemScalarFieldEnum | Prisma.Subscription_itemScalarFieldEnum[];
};
export type subscription_itemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_itemSelect<ExtArgs> | null;
    omit?: Prisma.subscription_itemOmit<ExtArgs> | null;
    include?: Prisma.subscription_itemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscription_itemCreateInput, Prisma.subscription_itemUncheckedCreateInput>;
};
export type subscription_itemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.subscription_itemCreateManyInput | Prisma.subscription_itemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type subscription_itemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_itemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.subscription_itemOmit<ExtArgs> | null;
    data: Prisma.subscription_itemCreateManyInput | Prisma.subscription_itemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.subscription_itemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type subscription_itemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_itemSelect<ExtArgs> | null;
    omit?: Prisma.subscription_itemOmit<ExtArgs> | null;
    include?: Prisma.subscription_itemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscription_itemUpdateInput, Prisma.subscription_itemUncheckedUpdateInput>;
    where: Prisma.subscription_itemWhereUniqueInput;
};
export type subscription_itemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.subscription_itemUpdateManyMutationInput, Prisma.subscription_itemUncheckedUpdateManyInput>;
    where?: Prisma.subscription_itemWhereInput;
    limit?: number;
};
export type subscription_itemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_itemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.subscription_itemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscription_itemUpdateManyMutationInput, Prisma.subscription_itemUncheckedUpdateManyInput>;
    where?: Prisma.subscription_itemWhereInput;
    limit?: number;
    include?: Prisma.subscription_itemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type subscription_itemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_itemSelect<ExtArgs> | null;
    omit?: Prisma.subscription_itemOmit<ExtArgs> | null;
    include?: Prisma.subscription_itemInclude<ExtArgs> | null;
    where: Prisma.subscription_itemWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscription_itemCreateInput, Prisma.subscription_itemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.subscription_itemUpdateInput, Prisma.subscription_itemUncheckedUpdateInput>;
};
export type subscription_itemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_itemSelect<ExtArgs> | null;
    omit?: Prisma.subscription_itemOmit<ExtArgs> | null;
    include?: Prisma.subscription_itemInclude<ExtArgs> | null;
    where: Prisma.subscription_itemWhereUniqueInput;
};
export type subscription_itemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscription_itemWhereInput;
    limit?: number;
};
export type subscription_itemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_itemSelect<ExtArgs> | null;
    omit?: Prisma.subscription_itemOmit<ExtArgs> | null;
    include?: Prisma.subscription_itemInclude<ExtArgs> | null;
};
