import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type subscriptionModel = runtime.Types.Result.DefaultSelection<Prisma.$subscriptionPayload>;
export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null;
    _avg: SubscriptionAvgAggregateOutputType | null;
    _sum: SubscriptionSumAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
};
export type SubscriptionAvgAggregateOutputType = {
    frequency_days: number | null;
    payment_retry_count: number | null;
};
export type SubscriptionSumAggregateOutputType = {
    frequency_days: number | null;
    payment_retry_count: number | null;
};
export type SubscriptionMinAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    status: string | null;
    frequency_days: number | null;
    next_delivery_date: Date | null;
    payment_method_token: string | null;
    payment_retry_count: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SubscriptionMaxAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    status: string | null;
    frequency_days: number | null;
    next_delivery_date: Date | null;
    payment_method_token: string | null;
    payment_retry_count: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SubscriptionCountAggregateOutputType = {
    id: number;
    customer_id: number;
    status: number;
    frequency_days: number;
    next_delivery_date: number;
    payment_method_token: number;
    payment_retry_count: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type SubscriptionAvgAggregateInputType = {
    frequency_days?: true;
    payment_retry_count?: true;
};
export type SubscriptionSumAggregateInputType = {
    frequency_days?: true;
    payment_retry_count?: true;
};
export type SubscriptionMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    status?: true;
    frequency_days?: true;
    next_delivery_date?: true;
    payment_method_token?: true;
    payment_retry_count?: true;
    created_at?: true;
    updated_at?: true;
};
export type SubscriptionMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    status?: true;
    frequency_days?: true;
    next_delivery_date?: true;
    payment_method_token?: true;
    payment_retry_count?: true;
    created_at?: true;
    updated_at?: true;
};
export type SubscriptionCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    status?: true;
    frequency_days?: true;
    next_delivery_date?: true;
    payment_method_token?: true;
    payment_retry_count?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type SubscriptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscriptionWhereInput;
    orderBy?: Prisma.subscriptionOrderByWithRelationInput | Prisma.subscriptionOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SubscriptionCountAggregateInputType;
    _avg?: SubscriptionAvgAggregateInputType;
    _sum?: SubscriptionSumAggregateInputType;
    _min?: SubscriptionMinAggregateInputType;
    _max?: SubscriptionMaxAggregateInputType;
};
export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubscription[P]> : Prisma.GetScalarType<T[P], AggregateSubscription[P]>;
};
export type subscriptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscriptionWhereInput;
    orderBy?: Prisma.subscriptionOrderByWithAggregationInput | Prisma.subscriptionOrderByWithAggregationInput[];
    by: Prisma.SubscriptionScalarFieldEnum[] | Prisma.SubscriptionScalarFieldEnum;
    having?: Prisma.subscriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionCountAggregateInputType | true;
    _avg?: SubscriptionAvgAggregateInputType;
    _sum?: SubscriptionSumAggregateInputType;
    _min?: SubscriptionMinAggregateInputType;
    _max?: SubscriptionMaxAggregateInputType;
};
export type SubscriptionGroupByOutputType = {
    id: string;
    customer_id: string;
    status: string;
    frequency_days: number;
    next_delivery_date: Date | null;
    payment_method_token: string | null;
    payment_retry_count: number;
    created_at: Date;
    updated_at: Date;
    _count: SubscriptionCountAggregateOutputType | null;
    _avg: SubscriptionAvgAggregateOutputType | null;
    _sum: SubscriptionSumAggregateOutputType | null;
    _min: SubscriptionMinAggregateOutputType | null;
    _max: SubscriptionMaxAggregateOutputType | null;
};
export type GetSubscriptionGroupByPayload<T extends subscriptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubscriptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubscriptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubscriptionGroupByOutputType[P]>;
}>>;
export type subscriptionWhereInput = {
    AND?: Prisma.subscriptionWhereInput | Prisma.subscriptionWhereInput[];
    OR?: Prisma.subscriptionWhereInput[];
    NOT?: Prisma.subscriptionWhereInput | Prisma.subscriptionWhereInput[];
    id?: Prisma.UuidFilter<"subscription"> | string;
    customer_id?: Prisma.UuidFilter<"subscription"> | string;
    status?: Prisma.StringFilter<"subscription"> | string;
    frequency_days?: Prisma.IntFilter<"subscription"> | number;
    next_delivery_date?: Prisma.DateTimeNullableFilter<"subscription"> | Date | string | null;
    payment_method_token?: Prisma.StringNullableFilter<"subscription"> | string | null;
    payment_retry_count?: Prisma.IntFilter<"subscription"> | number;
    created_at?: Prisma.DateTimeFilter<"subscription"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"subscription"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    subscription_delivery?: Prisma.Subscription_deliveryListRelationFilter;
    subscription_item?: Prisma.Subscription_itemListRelationFilter;
};
export type subscriptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    frequency_days?: Prisma.SortOrder;
    next_delivery_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    payment_method_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    payment_retry_count?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    subscription_delivery?: Prisma.subscription_deliveryOrderByRelationAggregateInput;
    subscription_item?: Prisma.subscription_itemOrderByRelationAggregateInput;
};
export type subscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.subscriptionWhereInput | Prisma.subscriptionWhereInput[];
    OR?: Prisma.subscriptionWhereInput[];
    NOT?: Prisma.subscriptionWhereInput | Prisma.subscriptionWhereInput[];
    customer_id?: Prisma.UuidFilter<"subscription"> | string;
    status?: Prisma.StringFilter<"subscription"> | string;
    frequency_days?: Prisma.IntFilter<"subscription"> | number;
    next_delivery_date?: Prisma.DateTimeNullableFilter<"subscription"> | Date | string | null;
    payment_method_token?: Prisma.StringNullableFilter<"subscription"> | string | null;
    payment_retry_count?: Prisma.IntFilter<"subscription"> | number;
    created_at?: Prisma.DateTimeFilter<"subscription"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"subscription"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    subscription_delivery?: Prisma.Subscription_deliveryListRelationFilter;
    subscription_item?: Prisma.Subscription_itemListRelationFilter;
}, "id">;
export type subscriptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    frequency_days?: Prisma.SortOrder;
    next_delivery_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    payment_method_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    payment_retry_count?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.subscriptionCountOrderByAggregateInput;
    _avg?: Prisma.subscriptionAvgOrderByAggregateInput;
    _max?: Prisma.subscriptionMaxOrderByAggregateInput;
    _min?: Prisma.subscriptionMinOrderByAggregateInput;
    _sum?: Prisma.subscriptionSumOrderByAggregateInput;
};
export type subscriptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.subscriptionScalarWhereWithAggregatesInput | Prisma.subscriptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.subscriptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.subscriptionScalarWhereWithAggregatesInput | Prisma.subscriptionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"subscription"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"subscription"> | string;
    status?: Prisma.StringWithAggregatesFilter<"subscription"> | string;
    frequency_days?: Prisma.IntWithAggregatesFilter<"subscription"> | number;
    next_delivery_date?: Prisma.DateTimeNullableWithAggregatesFilter<"subscription"> | Date | string | null;
    payment_method_token?: Prisma.StringNullableWithAggregatesFilter<"subscription"> | string | null;
    payment_retry_count?: Prisma.IntWithAggregatesFilter<"subscription"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"subscription"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"subscription"> | Date | string;
};
export type subscriptionCreateInput = {
    id?: string;
    status?: string;
    frequency_days: number;
    next_delivery_date?: Date | string | null;
    payment_method_token?: string | null;
    payment_retry_count?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutSubscriptionInput;
    subscription_delivery?: Prisma.subscription_deliveryCreateNestedManyWithoutSubscriptionInput;
    subscription_item?: Prisma.subscription_itemCreateNestedManyWithoutSubscriptionInput;
};
export type subscriptionUncheckedCreateInput = {
    id?: string;
    customer_id: string;
    status?: string;
    frequency_days: number;
    next_delivery_date?: Date | string | null;
    payment_method_token?: string | null;
    payment_retry_count?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    subscription_delivery?: Prisma.subscription_deliveryUncheckedCreateNestedManyWithoutSubscriptionInput;
    subscription_item?: Prisma.subscription_itemUncheckedCreateNestedManyWithoutSubscriptionInput;
};
export type subscriptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency_days?: Prisma.IntFieldUpdateOperationsInput | number;
    next_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_retry_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutSubscriptionNestedInput;
    subscription_delivery?: Prisma.subscription_deliveryUpdateManyWithoutSubscriptionNestedInput;
    subscription_item?: Prisma.subscription_itemUpdateManyWithoutSubscriptionNestedInput;
};
export type subscriptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency_days?: Prisma.IntFieldUpdateOperationsInput | number;
    next_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_retry_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription_delivery?: Prisma.subscription_deliveryUncheckedUpdateManyWithoutSubscriptionNestedInput;
    subscription_item?: Prisma.subscription_itemUncheckedUpdateManyWithoutSubscriptionNestedInput;
};
export type subscriptionCreateManyInput = {
    id?: string;
    customer_id: string;
    status?: string;
    frequency_days: number;
    next_delivery_date?: Date | string | null;
    payment_method_token?: string | null;
    payment_retry_count?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type subscriptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency_days?: Prisma.IntFieldUpdateOperationsInput | number;
    next_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_retry_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscriptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency_days?: Prisma.IntFieldUpdateOperationsInput | number;
    next_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_retry_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionListRelationFilter = {
    every?: Prisma.subscriptionWhereInput;
    some?: Prisma.subscriptionWhereInput;
    none?: Prisma.subscriptionWhereInput;
};
export type subscriptionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type subscriptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    frequency_days?: Prisma.SortOrder;
    next_delivery_date?: Prisma.SortOrder;
    payment_method_token?: Prisma.SortOrder;
    payment_retry_count?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type subscriptionAvgOrderByAggregateInput = {
    frequency_days?: Prisma.SortOrder;
    payment_retry_count?: Prisma.SortOrder;
};
export type subscriptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    frequency_days?: Prisma.SortOrder;
    next_delivery_date?: Prisma.SortOrder;
    payment_method_token?: Prisma.SortOrder;
    payment_retry_count?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type subscriptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    frequency_days?: Prisma.SortOrder;
    next_delivery_date?: Prisma.SortOrder;
    payment_method_token?: Prisma.SortOrder;
    payment_retry_count?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type subscriptionSumOrderByAggregateInput = {
    frequency_days?: Prisma.SortOrder;
    payment_retry_count?: Prisma.SortOrder;
};
export type SubscriptionScalarRelationFilter = {
    is?: Prisma.subscriptionWhereInput;
    isNot?: Prisma.subscriptionWhereInput;
};
export type subscriptionCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.subscriptionCreateWithoutCustomerInput, Prisma.subscriptionUncheckedCreateWithoutCustomerInput> | Prisma.subscriptionCreateWithoutCustomerInput[] | Prisma.subscriptionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.subscriptionCreateOrConnectWithoutCustomerInput | Prisma.subscriptionCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.subscriptionCreateManyCustomerInputEnvelope;
    connect?: Prisma.subscriptionWhereUniqueInput | Prisma.subscriptionWhereUniqueInput[];
};
export type subscriptionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.subscriptionCreateWithoutCustomerInput, Prisma.subscriptionUncheckedCreateWithoutCustomerInput> | Prisma.subscriptionCreateWithoutCustomerInput[] | Prisma.subscriptionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.subscriptionCreateOrConnectWithoutCustomerInput | Prisma.subscriptionCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.subscriptionCreateManyCustomerInputEnvelope;
    connect?: Prisma.subscriptionWhereUniqueInput | Prisma.subscriptionWhereUniqueInput[];
};
export type subscriptionUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.subscriptionCreateWithoutCustomerInput, Prisma.subscriptionUncheckedCreateWithoutCustomerInput> | Prisma.subscriptionCreateWithoutCustomerInput[] | Prisma.subscriptionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.subscriptionCreateOrConnectWithoutCustomerInput | Prisma.subscriptionCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.subscriptionUpsertWithWhereUniqueWithoutCustomerInput | Prisma.subscriptionUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.subscriptionCreateManyCustomerInputEnvelope;
    set?: Prisma.subscriptionWhereUniqueInput | Prisma.subscriptionWhereUniqueInput[];
    disconnect?: Prisma.subscriptionWhereUniqueInput | Prisma.subscriptionWhereUniqueInput[];
    delete?: Prisma.subscriptionWhereUniqueInput | Prisma.subscriptionWhereUniqueInput[];
    connect?: Prisma.subscriptionWhereUniqueInput | Prisma.subscriptionWhereUniqueInput[];
    update?: Prisma.subscriptionUpdateWithWhereUniqueWithoutCustomerInput | Prisma.subscriptionUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.subscriptionUpdateManyWithWhereWithoutCustomerInput | Prisma.subscriptionUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.subscriptionScalarWhereInput | Prisma.subscriptionScalarWhereInput[];
};
export type subscriptionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.subscriptionCreateWithoutCustomerInput, Prisma.subscriptionUncheckedCreateWithoutCustomerInput> | Prisma.subscriptionCreateWithoutCustomerInput[] | Prisma.subscriptionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.subscriptionCreateOrConnectWithoutCustomerInput | Prisma.subscriptionCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.subscriptionUpsertWithWhereUniqueWithoutCustomerInput | Prisma.subscriptionUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.subscriptionCreateManyCustomerInputEnvelope;
    set?: Prisma.subscriptionWhereUniqueInput | Prisma.subscriptionWhereUniqueInput[];
    disconnect?: Prisma.subscriptionWhereUniqueInput | Prisma.subscriptionWhereUniqueInput[];
    delete?: Prisma.subscriptionWhereUniqueInput | Prisma.subscriptionWhereUniqueInput[];
    connect?: Prisma.subscriptionWhereUniqueInput | Prisma.subscriptionWhereUniqueInput[];
    update?: Prisma.subscriptionUpdateWithWhereUniqueWithoutCustomerInput | Prisma.subscriptionUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.subscriptionUpdateManyWithWhereWithoutCustomerInput | Prisma.subscriptionUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.subscriptionScalarWhereInput | Prisma.subscriptionScalarWhereInput[];
};
export type subscriptionCreateNestedOneWithoutSubscription_deliveryInput = {
    create?: Prisma.XOR<Prisma.subscriptionCreateWithoutSubscription_deliveryInput, Prisma.subscriptionUncheckedCreateWithoutSubscription_deliveryInput>;
    connectOrCreate?: Prisma.subscriptionCreateOrConnectWithoutSubscription_deliveryInput;
    connect?: Prisma.subscriptionWhereUniqueInput;
};
export type subscriptionUpdateOneRequiredWithoutSubscription_deliveryNestedInput = {
    create?: Prisma.XOR<Prisma.subscriptionCreateWithoutSubscription_deliveryInput, Prisma.subscriptionUncheckedCreateWithoutSubscription_deliveryInput>;
    connectOrCreate?: Prisma.subscriptionCreateOrConnectWithoutSubscription_deliveryInput;
    upsert?: Prisma.subscriptionUpsertWithoutSubscription_deliveryInput;
    connect?: Prisma.subscriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.subscriptionUpdateToOneWithWhereWithoutSubscription_deliveryInput, Prisma.subscriptionUpdateWithoutSubscription_deliveryInput>, Prisma.subscriptionUncheckedUpdateWithoutSubscription_deliveryInput>;
};
export type subscriptionCreateNestedOneWithoutSubscription_itemInput = {
    create?: Prisma.XOR<Prisma.subscriptionCreateWithoutSubscription_itemInput, Prisma.subscriptionUncheckedCreateWithoutSubscription_itemInput>;
    connectOrCreate?: Prisma.subscriptionCreateOrConnectWithoutSubscription_itemInput;
    connect?: Prisma.subscriptionWhereUniqueInput;
};
export type subscriptionUpdateOneRequiredWithoutSubscription_itemNestedInput = {
    create?: Prisma.XOR<Prisma.subscriptionCreateWithoutSubscription_itemInput, Prisma.subscriptionUncheckedCreateWithoutSubscription_itemInput>;
    connectOrCreate?: Prisma.subscriptionCreateOrConnectWithoutSubscription_itemInput;
    upsert?: Prisma.subscriptionUpsertWithoutSubscription_itemInput;
    connect?: Prisma.subscriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.subscriptionUpdateToOneWithWhereWithoutSubscription_itemInput, Prisma.subscriptionUpdateWithoutSubscription_itemInput>, Prisma.subscriptionUncheckedUpdateWithoutSubscription_itemInput>;
};
export type subscriptionCreateWithoutCustomerInput = {
    id?: string;
    status?: string;
    frequency_days: number;
    next_delivery_date?: Date | string | null;
    payment_method_token?: string | null;
    payment_retry_count?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    subscription_delivery?: Prisma.subscription_deliveryCreateNestedManyWithoutSubscriptionInput;
    subscription_item?: Prisma.subscription_itemCreateNestedManyWithoutSubscriptionInput;
};
export type subscriptionUncheckedCreateWithoutCustomerInput = {
    id?: string;
    status?: string;
    frequency_days: number;
    next_delivery_date?: Date | string | null;
    payment_method_token?: string | null;
    payment_retry_count?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    subscription_delivery?: Prisma.subscription_deliveryUncheckedCreateNestedManyWithoutSubscriptionInput;
    subscription_item?: Prisma.subscription_itemUncheckedCreateNestedManyWithoutSubscriptionInput;
};
export type subscriptionCreateOrConnectWithoutCustomerInput = {
    where: Prisma.subscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscriptionCreateWithoutCustomerInput, Prisma.subscriptionUncheckedCreateWithoutCustomerInput>;
};
export type subscriptionCreateManyCustomerInputEnvelope = {
    data: Prisma.subscriptionCreateManyCustomerInput | Prisma.subscriptionCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type subscriptionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.subscriptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.subscriptionUpdateWithoutCustomerInput, Prisma.subscriptionUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.subscriptionCreateWithoutCustomerInput, Prisma.subscriptionUncheckedCreateWithoutCustomerInput>;
};
export type subscriptionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.subscriptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.subscriptionUpdateWithoutCustomerInput, Prisma.subscriptionUncheckedUpdateWithoutCustomerInput>;
};
export type subscriptionUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.subscriptionScalarWhereInput;
    data: Prisma.XOR<Prisma.subscriptionUpdateManyMutationInput, Prisma.subscriptionUncheckedUpdateManyWithoutCustomerInput>;
};
export type subscriptionScalarWhereInput = {
    AND?: Prisma.subscriptionScalarWhereInput | Prisma.subscriptionScalarWhereInput[];
    OR?: Prisma.subscriptionScalarWhereInput[];
    NOT?: Prisma.subscriptionScalarWhereInput | Prisma.subscriptionScalarWhereInput[];
    id?: Prisma.UuidFilter<"subscription"> | string;
    customer_id?: Prisma.UuidFilter<"subscription"> | string;
    status?: Prisma.StringFilter<"subscription"> | string;
    frequency_days?: Prisma.IntFilter<"subscription"> | number;
    next_delivery_date?: Prisma.DateTimeNullableFilter<"subscription"> | Date | string | null;
    payment_method_token?: Prisma.StringNullableFilter<"subscription"> | string | null;
    payment_retry_count?: Prisma.IntFilter<"subscription"> | number;
    created_at?: Prisma.DateTimeFilter<"subscription"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"subscription"> | Date | string;
};
export type subscriptionCreateWithoutSubscription_deliveryInput = {
    id?: string;
    status?: string;
    frequency_days: number;
    next_delivery_date?: Date | string | null;
    payment_method_token?: string | null;
    payment_retry_count?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutSubscriptionInput;
    subscription_item?: Prisma.subscription_itemCreateNestedManyWithoutSubscriptionInput;
};
export type subscriptionUncheckedCreateWithoutSubscription_deliveryInput = {
    id?: string;
    customer_id: string;
    status?: string;
    frequency_days: number;
    next_delivery_date?: Date | string | null;
    payment_method_token?: string | null;
    payment_retry_count?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    subscription_item?: Prisma.subscription_itemUncheckedCreateNestedManyWithoutSubscriptionInput;
};
export type subscriptionCreateOrConnectWithoutSubscription_deliveryInput = {
    where: Prisma.subscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscriptionCreateWithoutSubscription_deliveryInput, Prisma.subscriptionUncheckedCreateWithoutSubscription_deliveryInput>;
};
export type subscriptionUpsertWithoutSubscription_deliveryInput = {
    update: Prisma.XOR<Prisma.subscriptionUpdateWithoutSubscription_deliveryInput, Prisma.subscriptionUncheckedUpdateWithoutSubscription_deliveryInput>;
    create: Prisma.XOR<Prisma.subscriptionCreateWithoutSubscription_deliveryInput, Prisma.subscriptionUncheckedCreateWithoutSubscription_deliveryInput>;
    where?: Prisma.subscriptionWhereInput;
};
export type subscriptionUpdateToOneWithWhereWithoutSubscription_deliveryInput = {
    where?: Prisma.subscriptionWhereInput;
    data: Prisma.XOR<Prisma.subscriptionUpdateWithoutSubscription_deliveryInput, Prisma.subscriptionUncheckedUpdateWithoutSubscription_deliveryInput>;
};
export type subscriptionUpdateWithoutSubscription_deliveryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency_days?: Prisma.IntFieldUpdateOperationsInput | number;
    next_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_retry_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutSubscriptionNestedInput;
    subscription_item?: Prisma.subscription_itemUpdateManyWithoutSubscriptionNestedInput;
};
export type subscriptionUncheckedUpdateWithoutSubscription_deliveryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency_days?: Prisma.IntFieldUpdateOperationsInput | number;
    next_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_retry_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription_item?: Prisma.subscription_itemUncheckedUpdateManyWithoutSubscriptionNestedInput;
};
export type subscriptionCreateWithoutSubscription_itemInput = {
    id?: string;
    status?: string;
    frequency_days: number;
    next_delivery_date?: Date | string | null;
    payment_method_token?: string | null;
    payment_retry_count?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutSubscriptionInput;
    subscription_delivery?: Prisma.subscription_deliveryCreateNestedManyWithoutSubscriptionInput;
};
export type subscriptionUncheckedCreateWithoutSubscription_itemInput = {
    id?: string;
    customer_id: string;
    status?: string;
    frequency_days: number;
    next_delivery_date?: Date | string | null;
    payment_method_token?: string | null;
    payment_retry_count?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    subscription_delivery?: Prisma.subscription_deliveryUncheckedCreateNestedManyWithoutSubscriptionInput;
};
export type subscriptionCreateOrConnectWithoutSubscription_itemInput = {
    where: Prisma.subscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscriptionCreateWithoutSubscription_itemInput, Prisma.subscriptionUncheckedCreateWithoutSubscription_itemInput>;
};
export type subscriptionUpsertWithoutSubscription_itemInput = {
    update: Prisma.XOR<Prisma.subscriptionUpdateWithoutSubscription_itemInput, Prisma.subscriptionUncheckedUpdateWithoutSubscription_itemInput>;
    create: Prisma.XOR<Prisma.subscriptionCreateWithoutSubscription_itemInput, Prisma.subscriptionUncheckedCreateWithoutSubscription_itemInput>;
    where?: Prisma.subscriptionWhereInput;
};
export type subscriptionUpdateToOneWithWhereWithoutSubscription_itemInput = {
    where?: Prisma.subscriptionWhereInput;
    data: Prisma.XOR<Prisma.subscriptionUpdateWithoutSubscription_itemInput, Prisma.subscriptionUncheckedUpdateWithoutSubscription_itemInput>;
};
export type subscriptionUpdateWithoutSubscription_itemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency_days?: Prisma.IntFieldUpdateOperationsInput | number;
    next_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_retry_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutSubscriptionNestedInput;
    subscription_delivery?: Prisma.subscription_deliveryUpdateManyWithoutSubscriptionNestedInput;
};
export type subscriptionUncheckedUpdateWithoutSubscription_itemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency_days?: Prisma.IntFieldUpdateOperationsInput | number;
    next_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_retry_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription_delivery?: Prisma.subscription_deliveryUncheckedUpdateManyWithoutSubscriptionNestedInput;
};
export type subscriptionCreateManyCustomerInput = {
    id?: string;
    status?: string;
    frequency_days: number;
    next_delivery_date?: Date | string | null;
    payment_method_token?: string | null;
    payment_retry_count?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type subscriptionUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency_days?: Prisma.IntFieldUpdateOperationsInput | number;
    next_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_retry_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription_delivery?: Prisma.subscription_deliveryUpdateManyWithoutSubscriptionNestedInput;
    subscription_item?: Prisma.subscription_itemUpdateManyWithoutSubscriptionNestedInput;
};
export type subscriptionUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency_days?: Prisma.IntFieldUpdateOperationsInput | number;
    next_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_retry_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription_delivery?: Prisma.subscription_deliveryUncheckedUpdateManyWithoutSubscriptionNestedInput;
    subscription_item?: Prisma.subscription_itemUncheckedUpdateManyWithoutSubscriptionNestedInput;
};
export type subscriptionUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    frequency_days?: Prisma.IntFieldUpdateOperationsInput | number;
    next_delivery_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_method_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payment_retry_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionCountOutputType = {
    subscription_delivery: number;
    subscription_item: number;
};
export type SubscriptionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subscription_delivery?: boolean | SubscriptionCountOutputTypeCountSubscription_deliveryArgs;
    subscription_item?: boolean | SubscriptionCountOutputTypeCountSubscription_itemArgs;
};
export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SubscriptionCountOutputTypeSelect<ExtArgs> | null;
};
export type SubscriptionCountOutputTypeCountSubscription_deliveryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscription_deliveryWhereInput;
};
export type SubscriptionCountOutputTypeCountSubscription_itemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscription_itemWhereInput;
};
export type subscriptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    status?: boolean;
    frequency_days?: boolean;
    next_delivery_date?: boolean;
    payment_method_token?: boolean;
    payment_retry_count?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    subscription_delivery?: boolean | Prisma.subscription$subscription_deliveryArgs<ExtArgs>;
    subscription_item?: boolean | Prisma.subscription$subscription_itemArgs<ExtArgs>;
    _count?: boolean | Prisma.SubscriptionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription"]>;
export type subscriptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    status?: boolean;
    frequency_days?: boolean;
    next_delivery_date?: boolean;
    payment_method_token?: boolean;
    payment_retry_count?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription"]>;
export type subscriptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    status?: boolean;
    frequency_days?: boolean;
    next_delivery_date?: boolean;
    payment_method_token?: boolean;
    payment_retry_count?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription"]>;
export type subscriptionSelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    status?: boolean;
    frequency_days?: boolean;
    next_delivery_date?: boolean;
    payment_method_token?: boolean;
    payment_retry_count?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type subscriptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "status" | "frequency_days" | "next_delivery_date" | "payment_method_token" | "payment_retry_count" | "created_at" | "updated_at", ExtArgs["result"]["subscription"]>;
export type subscriptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    subscription_delivery?: boolean | Prisma.subscription$subscription_deliveryArgs<ExtArgs>;
    subscription_item?: boolean | Prisma.subscription$subscription_itemArgs<ExtArgs>;
    _count?: boolean | Prisma.SubscriptionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type subscriptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type subscriptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $subscriptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "subscription";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        subscription_delivery: Prisma.$subscription_deliveryPayload<ExtArgs>[];
        subscription_item: Prisma.$subscription_itemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customer_id: string;
        status: string;
        frequency_days: number;
        next_delivery_date: Date | null;
        payment_method_token: string | null;
        payment_retry_count: number;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["subscription"]>;
    composites: {};
};
export type subscriptionGetPayload<S extends boolean | null | undefined | subscriptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$subscriptionPayload, S>;
export type subscriptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<subscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubscriptionCountAggregateInputType | true;
};
export interface subscriptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['subscription'];
        meta: {
            name: 'subscription';
        };
    };
    findUnique<T extends subscriptionFindUniqueArgs>(args: Prisma.SelectSubset<T, subscriptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__subscriptionClient<runtime.Types.Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends subscriptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, subscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__subscriptionClient<runtime.Types.Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends subscriptionFindFirstArgs>(args?: Prisma.SelectSubset<T, subscriptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__subscriptionClient<runtime.Types.Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends subscriptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, subscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__subscriptionClient<runtime.Types.Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends subscriptionFindManyArgs>(args?: Prisma.SelectSubset<T, subscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends subscriptionCreateArgs>(args: Prisma.SelectSubset<T, subscriptionCreateArgs<ExtArgs>>): Prisma.Prisma__subscriptionClient<runtime.Types.Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends subscriptionCreateManyArgs>(args?: Prisma.SelectSubset<T, subscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends subscriptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, subscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends subscriptionDeleteArgs>(args: Prisma.SelectSubset<T, subscriptionDeleteArgs<ExtArgs>>): Prisma.Prisma__subscriptionClient<runtime.Types.Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends subscriptionUpdateArgs>(args: Prisma.SelectSubset<T, subscriptionUpdateArgs<ExtArgs>>): Prisma.Prisma__subscriptionClient<runtime.Types.Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends subscriptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, subscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends subscriptionUpdateManyArgs>(args: Prisma.SelectSubset<T, subscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends subscriptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, subscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends subscriptionUpsertArgs>(args: Prisma.SelectSubset<T, subscriptionUpsertArgs<ExtArgs>>): Prisma.Prisma__subscriptionClient<runtime.Types.Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends subscriptionCountArgs>(args?: Prisma.Subset<T, subscriptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubscriptionCountAggregateOutputType> : number>;
    aggregate<T extends SubscriptionAggregateArgs>(args: Prisma.Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>;
    groupBy<T extends subscriptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: subscriptionGroupByArgs['orderBy'];
    } : {
        orderBy?: subscriptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, subscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: subscriptionFieldRefs;
}
export interface Prisma__subscriptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    subscription_delivery<T extends Prisma.subscription$subscription_deliveryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.subscription$subscription_deliveryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscription_deliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    subscription_item<T extends Prisma.subscription$subscription_itemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.subscription$subscription_itemArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscription_itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface subscriptionFieldRefs {
    readonly id: Prisma.FieldRef<"subscription", 'String'>;
    readonly customer_id: Prisma.FieldRef<"subscription", 'String'>;
    readonly status: Prisma.FieldRef<"subscription", 'String'>;
    readonly frequency_days: Prisma.FieldRef<"subscription", 'Int'>;
    readonly next_delivery_date: Prisma.FieldRef<"subscription", 'DateTime'>;
    readonly payment_method_token: Prisma.FieldRef<"subscription", 'String'>;
    readonly payment_retry_count: Prisma.FieldRef<"subscription", 'Int'>;
    readonly created_at: Prisma.FieldRef<"subscription", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"subscription", 'DateTime'>;
}
export type subscriptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionOmit<ExtArgs> | null;
    include?: Prisma.subscriptionInclude<ExtArgs> | null;
    where: Prisma.subscriptionWhereUniqueInput;
};
export type subscriptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionOmit<ExtArgs> | null;
    include?: Prisma.subscriptionInclude<ExtArgs> | null;
    where: Prisma.subscriptionWhereUniqueInput;
};
export type subscriptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionOmit<ExtArgs> | null;
    include?: Prisma.subscriptionInclude<ExtArgs> | null;
    where?: Prisma.subscriptionWhereInput;
    orderBy?: Prisma.subscriptionOrderByWithRelationInput | Prisma.subscriptionOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
};
export type subscriptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionOmit<ExtArgs> | null;
    include?: Prisma.subscriptionInclude<ExtArgs> | null;
    where?: Prisma.subscriptionWhereInput;
    orderBy?: Prisma.subscriptionOrderByWithRelationInput | Prisma.subscriptionOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
};
export type subscriptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionOmit<ExtArgs> | null;
    include?: Prisma.subscriptionInclude<ExtArgs> | null;
    where?: Prisma.subscriptionWhereInput;
    orderBy?: Prisma.subscriptionOrderByWithRelationInput | Prisma.subscriptionOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionScalarFieldEnum | Prisma.SubscriptionScalarFieldEnum[];
};
export type subscriptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionOmit<ExtArgs> | null;
    include?: Prisma.subscriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscriptionCreateInput, Prisma.subscriptionUncheckedCreateInput>;
};
export type subscriptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.subscriptionCreateManyInput | Prisma.subscriptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type subscriptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.subscriptionOmit<ExtArgs> | null;
    data: Prisma.subscriptionCreateManyInput | Prisma.subscriptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.subscriptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type subscriptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionOmit<ExtArgs> | null;
    include?: Prisma.subscriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscriptionUpdateInput, Prisma.subscriptionUncheckedUpdateInput>;
    where: Prisma.subscriptionWhereUniqueInput;
};
export type subscriptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.subscriptionUpdateManyMutationInput, Prisma.subscriptionUncheckedUpdateManyInput>;
    where?: Prisma.subscriptionWhereInput;
    limit?: number;
};
export type subscriptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.subscriptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscriptionUpdateManyMutationInput, Prisma.subscriptionUncheckedUpdateManyInput>;
    where?: Prisma.subscriptionWhereInput;
    limit?: number;
    include?: Prisma.subscriptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type subscriptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionOmit<ExtArgs> | null;
    include?: Prisma.subscriptionInclude<ExtArgs> | null;
    where: Prisma.subscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscriptionCreateInput, Prisma.subscriptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.subscriptionUpdateInput, Prisma.subscriptionUncheckedUpdateInput>;
};
export type subscriptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionOmit<ExtArgs> | null;
    include?: Prisma.subscriptionInclude<ExtArgs> | null;
    where: Prisma.subscriptionWhereUniqueInput;
};
export type subscriptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscriptionWhereInput;
    limit?: number;
};
export type subscription$subscription_deliveryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_deliverySelect<ExtArgs> | null;
    omit?: Prisma.subscription_deliveryOmit<ExtArgs> | null;
    include?: Prisma.subscription_deliveryInclude<ExtArgs> | null;
    where?: Prisma.subscription_deliveryWhereInput;
    orderBy?: Prisma.subscription_deliveryOrderByWithRelationInput | Prisma.subscription_deliveryOrderByWithRelationInput[];
    cursor?: Prisma.subscription_deliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Subscription_deliveryScalarFieldEnum | Prisma.Subscription_deliveryScalarFieldEnum[];
};
export type subscription$subscription_itemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type subscriptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionOmit<ExtArgs> | null;
    include?: Prisma.subscriptionInclude<ExtArgs> | null;
};
