import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type subscription_deliveryModel = runtime.Types.Result.DefaultSelection<Prisma.$subscription_deliveryPayload>;
export type AggregateSubscription_delivery = {
    _count: Subscription_deliveryCountAggregateOutputType | null;
    _min: Subscription_deliveryMinAggregateOutputType | null;
    _max: Subscription_deliveryMaxAggregateOutputType | null;
};
export type Subscription_deliveryMinAggregateOutputType = {
    id: string | null;
    subscription_id: string | null;
    order_id: string | null;
    scheduled_date: Date | null;
    status: string | null;
    delivered_at: Date | null;
    created_at: Date | null;
};
export type Subscription_deliveryMaxAggregateOutputType = {
    id: string | null;
    subscription_id: string | null;
    order_id: string | null;
    scheduled_date: Date | null;
    status: string | null;
    delivered_at: Date | null;
    created_at: Date | null;
};
export type Subscription_deliveryCountAggregateOutputType = {
    id: number;
    subscription_id: number;
    order_id: number;
    scheduled_date: number;
    status: number;
    delivered_at: number;
    created_at: number;
    _all: number;
};
export type Subscription_deliveryMinAggregateInputType = {
    id?: true;
    subscription_id?: true;
    order_id?: true;
    scheduled_date?: true;
    status?: true;
    delivered_at?: true;
    created_at?: true;
};
export type Subscription_deliveryMaxAggregateInputType = {
    id?: true;
    subscription_id?: true;
    order_id?: true;
    scheduled_date?: true;
    status?: true;
    delivered_at?: true;
    created_at?: true;
};
export type Subscription_deliveryCountAggregateInputType = {
    id?: true;
    subscription_id?: true;
    order_id?: true;
    scheduled_date?: true;
    status?: true;
    delivered_at?: true;
    created_at?: true;
    _all?: true;
};
export type Subscription_deliveryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscription_deliveryWhereInput;
    orderBy?: Prisma.subscription_deliveryOrderByWithRelationInput | Prisma.subscription_deliveryOrderByWithRelationInput[];
    cursor?: Prisma.subscription_deliveryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Subscription_deliveryCountAggregateInputType;
    _min?: Subscription_deliveryMinAggregateInputType;
    _max?: Subscription_deliveryMaxAggregateInputType;
};
export type GetSubscription_deliveryAggregateType<T extends Subscription_deliveryAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscription_delivery]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubscription_delivery[P]> : Prisma.GetScalarType<T[P], AggregateSubscription_delivery[P]>;
};
export type subscription_deliveryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscription_deliveryWhereInput;
    orderBy?: Prisma.subscription_deliveryOrderByWithAggregationInput | Prisma.subscription_deliveryOrderByWithAggregationInput[];
    by: Prisma.Subscription_deliveryScalarFieldEnum[] | Prisma.Subscription_deliveryScalarFieldEnum;
    having?: Prisma.subscription_deliveryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Subscription_deliveryCountAggregateInputType | true;
    _min?: Subscription_deliveryMinAggregateInputType;
    _max?: Subscription_deliveryMaxAggregateInputType;
};
export type Subscription_deliveryGroupByOutputType = {
    id: string;
    subscription_id: string;
    order_id: string | null;
    scheduled_date: Date;
    status: string;
    delivered_at: Date | null;
    created_at: Date;
    _count: Subscription_deliveryCountAggregateOutputType | null;
    _min: Subscription_deliveryMinAggregateOutputType | null;
    _max: Subscription_deliveryMaxAggregateOutputType | null;
};
export type GetSubscription_deliveryGroupByPayload<T extends subscription_deliveryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Subscription_deliveryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Subscription_deliveryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Subscription_deliveryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Subscription_deliveryGroupByOutputType[P]>;
}>>;
export type subscription_deliveryWhereInput = {
    AND?: Prisma.subscription_deliveryWhereInput | Prisma.subscription_deliveryWhereInput[];
    OR?: Prisma.subscription_deliveryWhereInput[];
    NOT?: Prisma.subscription_deliveryWhereInput | Prisma.subscription_deliveryWhereInput[];
    id?: Prisma.UuidFilter<"subscription_delivery"> | string;
    subscription_id?: Prisma.UuidFilter<"subscription_delivery"> | string;
    order_id?: Prisma.UuidNullableFilter<"subscription_delivery"> | string | null;
    scheduled_date?: Prisma.DateTimeFilter<"subscription_delivery"> | Date | string;
    status?: Prisma.StringFilter<"subscription_delivery"> | string;
    delivered_at?: Prisma.DateTimeNullableFilter<"subscription_delivery"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"subscription_delivery"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderNullableScalarRelationFilter, Prisma.OrderWhereInput> | null;
    subscription?: Prisma.XOR<Prisma.SubscriptionScalarRelationFilter, Prisma.subscriptionWhereInput>;
};
export type subscription_deliveryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    scheduled_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    subscription?: Prisma.subscriptionOrderByWithRelationInput;
};
export type subscription_deliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.subscription_deliveryWhereInput | Prisma.subscription_deliveryWhereInput[];
    OR?: Prisma.subscription_deliveryWhereInput[];
    NOT?: Prisma.subscription_deliveryWhereInput | Prisma.subscription_deliveryWhereInput[];
    subscription_id?: Prisma.UuidFilter<"subscription_delivery"> | string;
    order_id?: Prisma.UuidNullableFilter<"subscription_delivery"> | string | null;
    scheduled_date?: Prisma.DateTimeFilter<"subscription_delivery"> | Date | string;
    status?: Prisma.StringFilter<"subscription_delivery"> | string;
    delivered_at?: Prisma.DateTimeNullableFilter<"subscription_delivery"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"subscription_delivery"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderNullableScalarRelationFilter, Prisma.OrderWhereInput> | null;
    subscription?: Prisma.XOR<Prisma.SubscriptionScalarRelationFilter, Prisma.subscriptionWhereInput>;
}, "id">;
export type subscription_deliveryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    scheduled_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.subscription_deliveryCountOrderByAggregateInput;
    _max?: Prisma.subscription_deliveryMaxOrderByAggregateInput;
    _min?: Prisma.subscription_deliveryMinOrderByAggregateInput;
};
export type subscription_deliveryScalarWhereWithAggregatesInput = {
    AND?: Prisma.subscription_deliveryScalarWhereWithAggregatesInput | Prisma.subscription_deliveryScalarWhereWithAggregatesInput[];
    OR?: Prisma.subscription_deliveryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.subscription_deliveryScalarWhereWithAggregatesInput | Prisma.subscription_deliveryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"subscription_delivery"> | string;
    subscription_id?: Prisma.UuidWithAggregatesFilter<"subscription_delivery"> | string;
    order_id?: Prisma.UuidNullableWithAggregatesFilter<"subscription_delivery"> | string | null;
    scheduled_date?: Prisma.DateTimeWithAggregatesFilter<"subscription_delivery"> | Date | string;
    status?: Prisma.StringWithAggregatesFilter<"subscription_delivery"> | string;
    delivered_at?: Prisma.DateTimeNullableWithAggregatesFilter<"subscription_delivery"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"subscription_delivery"> | Date | string;
};
export type subscription_deliveryCreateInput = {
    id?: string;
    scheduled_date: Date | string;
    status?: string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    order?: Prisma.OrderCreateNestedOneWithoutSubscription_deliveryInput;
    subscription: Prisma.subscriptionCreateNestedOneWithoutSubscription_deliveryInput;
};
export type subscription_deliveryUncheckedCreateInput = {
    id?: string;
    subscription_id: string;
    order_id?: string | null;
    scheduled_date: Date | string;
    status?: string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
};
export type subscription_deliveryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduled_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneWithoutSubscription_deliveryNestedInput;
    subscription?: Prisma.subscriptionUpdateOneRequiredWithoutSubscription_deliveryNestedInput;
};
export type subscription_deliveryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subscription_id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduled_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscription_deliveryCreateManyInput = {
    id?: string;
    subscription_id: string;
    order_id?: string | null;
    scheduled_date: Date | string;
    status?: string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
};
export type subscription_deliveryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduled_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscription_deliveryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subscription_id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduled_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Subscription_deliveryListRelationFilter = {
    every?: Prisma.subscription_deliveryWhereInput;
    some?: Prisma.subscription_deliveryWhereInput;
    none?: Prisma.subscription_deliveryWhereInput;
};
export type subscription_deliveryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type subscription_deliveryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    scheduled_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type subscription_deliveryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    scheduled_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type subscription_deliveryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    subscription_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    scheduled_date?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type subscription_deliveryCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.subscription_deliveryCreateWithoutOrderInput, Prisma.subscription_deliveryUncheckedCreateWithoutOrderInput> | Prisma.subscription_deliveryCreateWithoutOrderInput[] | Prisma.subscription_deliveryUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.subscription_deliveryCreateOrConnectWithoutOrderInput | Prisma.subscription_deliveryCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.subscription_deliveryCreateManyOrderInputEnvelope;
    connect?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
};
export type subscription_deliveryUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.subscription_deliveryCreateWithoutOrderInput, Prisma.subscription_deliveryUncheckedCreateWithoutOrderInput> | Prisma.subscription_deliveryCreateWithoutOrderInput[] | Prisma.subscription_deliveryUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.subscription_deliveryCreateOrConnectWithoutOrderInput | Prisma.subscription_deliveryCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.subscription_deliveryCreateManyOrderInputEnvelope;
    connect?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
};
export type subscription_deliveryUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.subscription_deliveryCreateWithoutOrderInput, Prisma.subscription_deliveryUncheckedCreateWithoutOrderInput> | Prisma.subscription_deliveryCreateWithoutOrderInput[] | Prisma.subscription_deliveryUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.subscription_deliveryCreateOrConnectWithoutOrderInput | Prisma.subscription_deliveryCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.subscription_deliveryUpsertWithWhereUniqueWithoutOrderInput | Prisma.subscription_deliveryUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.subscription_deliveryCreateManyOrderInputEnvelope;
    set?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    disconnect?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    delete?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    connect?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    update?: Prisma.subscription_deliveryUpdateWithWhereUniqueWithoutOrderInput | Prisma.subscription_deliveryUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.subscription_deliveryUpdateManyWithWhereWithoutOrderInput | Prisma.subscription_deliveryUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.subscription_deliveryScalarWhereInput | Prisma.subscription_deliveryScalarWhereInput[];
};
export type subscription_deliveryUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.subscription_deliveryCreateWithoutOrderInput, Prisma.subscription_deliveryUncheckedCreateWithoutOrderInput> | Prisma.subscription_deliveryCreateWithoutOrderInput[] | Prisma.subscription_deliveryUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.subscription_deliveryCreateOrConnectWithoutOrderInput | Prisma.subscription_deliveryCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.subscription_deliveryUpsertWithWhereUniqueWithoutOrderInput | Prisma.subscription_deliveryUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.subscription_deliveryCreateManyOrderInputEnvelope;
    set?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    disconnect?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    delete?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    connect?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    update?: Prisma.subscription_deliveryUpdateWithWhereUniqueWithoutOrderInput | Prisma.subscription_deliveryUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.subscription_deliveryUpdateManyWithWhereWithoutOrderInput | Prisma.subscription_deliveryUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.subscription_deliveryScalarWhereInput | Prisma.subscription_deliveryScalarWhereInput[];
};
export type subscription_deliveryCreateNestedManyWithoutSubscriptionInput = {
    create?: Prisma.XOR<Prisma.subscription_deliveryCreateWithoutSubscriptionInput, Prisma.subscription_deliveryUncheckedCreateWithoutSubscriptionInput> | Prisma.subscription_deliveryCreateWithoutSubscriptionInput[] | Prisma.subscription_deliveryUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?: Prisma.subscription_deliveryCreateOrConnectWithoutSubscriptionInput | Prisma.subscription_deliveryCreateOrConnectWithoutSubscriptionInput[];
    createMany?: Prisma.subscription_deliveryCreateManySubscriptionInputEnvelope;
    connect?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
};
export type subscription_deliveryUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: Prisma.XOR<Prisma.subscription_deliveryCreateWithoutSubscriptionInput, Prisma.subscription_deliveryUncheckedCreateWithoutSubscriptionInput> | Prisma.subscription_deliveryCreateWithoutSubscriptionInput[] | Prisma.subscription_deliveryUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?: Prisma.subscription_deliveryCreateOrConnectWithoutSubscriptionInput | Prisma.subscription_deliveryCreateOrConnectWithoutSubscriptionInput[];
    createMany?: Prisma.subscription_deliveryCreateManySubscriptionInputEnvelope;
    connect?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
};
export type subscription_deliveryUpdateManyWithoutSubscriptionNestedInput = {
    create?: Prisma.XOR<Prisma.subscription_deliveryCreateWithoutSubscriptionInput, Prisma.subscription_deliveryUncheckedCreateWithoutSubscriptionInput> | Prisma.subscription_deliveryCreateWithoutSubscriptionInput[] | Prisma.subscription_deliveryUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?: Prisma.subscription_deliveryCreateOrConnectWithoutSubscriptionInput | Prisma.subscription_deliveryCreateOrConnectWithoutSubscriptionInput[];
    upsert?: Prisma.subscription_deliveryUpsertWithWhereUniqueWithoutSubscriptionInput | Prisma.subscription_deliveryUpsertWithWhereUniqueWithoutSubscriptionInput[];
    createMany?: Prisma.subscription_deliveryCreateManySubscriptionInputEnvelope;
    set?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    disconnect?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    delete?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    connect?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    update?: Prisma.subscription_deliveryUpdateWithWhereUniqueWithoutSubscriptionInput | Prisma.subscription_deliveryUpdateWithWhereUniqueWithoutSubscriptionInput[];
    updateMany?: Prisma.subscription_deliveryUpdateManyWithWhereWithoutSubscriptionInput | Prisma.subscription_deliveryUpdateManyWithWhereWithoutSubscriptionInput[];
    deleteMany?: Prisma.subscription_deliveryScalarWhereInput | Prisma.subscription_deliveryScalarWhereInput[];
};
export type subscription_deliveryUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: Prisma.XOR<Prisma.subscription_deliveryCreateWithoutSubscriptionInput, Prisma.subscription_deliveryUncheckedCreateWithoutSubscriptionInput> | Prisma.subscription_deliveryCreateWithoutSubscriptionInput[] | Prisma.subscription_deliveryUncheckedCreateWithoutSubscriptionInput[];
    connectOrCreate?: Prisma.subscription_deliveryCreateOrConnectWithoutSubscriptionInput | Prisma.subscription_deliveryCreateOrConnectWithoutSubscriptionInput[];
    upsert?: Prisma.subscription_deliveryUpsertWithWhereUniqueWithoutSubscriptionInput | Prisma.subscription_deliveryUpsertWithWhereUniqueWithoutSubscriptionInput[];
    createMany?: Prisma.subscription_deliveryCreateManySubscriptionInputEnvelope;
    set?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    disconnect?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    delete?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    connect?: Prisma.subscription_deliveryWhereUniqueInput | Prisma.subscription_deliveryWhereUniqueInput[];
    update?: Prisma.subscription_deliveryUpdateWithWhereUniqueWithoutSubscriptionInput | Prisma.subscription_deliveryUpdateWithWhereUniqueWithoutSubscriptionInput[];
    updateMany?: Prisma.subscription_deliveryUpdateManyWithWhereWithoutSubscriptionInput | Prisma.subscription_deliveryUpdateManyWithWhereWithoutSubscriptionInput[];
    deleteMany?: Prisma.subscription_deliveryScalarWhereInput | Prisma.subscription_deliveryScalarWhereInput[];
};
export type subscription_deliveryCreateWithoutOrderInput = {
    id?: string;
    scheduled_date: Date | string;
    status?: string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    subscription: Prisma.subscriptionCreateNestedOneWithoutSubscription_deliveryInput;
};
export type subscription_deliveryUncheckedCreateWithoutOrderInput = {
    id?: string;
    subscription_id: string;
    scheduled_date: Date | string;
    status?: string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
};
export type subscription_deliveryCreateOrConnectWithoutOrderInput = {
    where: Prisma.subscription_deliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscription_deliveryCreateWithoutOrderInput, Prisma.subscription_deliveryUncheckedCreateWithoutOrderInput>;
};
export type subscription_deliveryCreateManyOrderInputEnvelope = {
    data: Prisma.subscription_deliveryCreateManyOrderInput | Prisma.subscription_deliveryCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type subscription_deliveryUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.subscription_deliveryWhereUniqueInput;
    update: Prisma.XOR<Prisma.subscription_deliveryUpdateWithoutOrderInput, Prisma.subscription_deliveryUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.subscription_deliveryCreateWithoutOrderInput, Prisma.subscription_deliveryUncheckedCreateWithoutOrderInput>;
};
export type subscription_deliveryUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.subscription_deliveryWhereUniqueInput;
    data: Prisma.XOR<Prisma.subscription_deliveryUpdateWithoutOrderInput, Prisma.subscription_deliveryUncheckedUpdateWithoutOrderInput>;
};
export type subscription_deliveryUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.subscription_deliveryScalarWhereInput;
    data: Prisma.XOR<Prisma.subscription_deliveryUpdateManyMutationInput, Prisma.subscription_deliveryUncheckedUpdateManyWithoutOrderInput>;
};
export type subscription_deliveryScalarWhereInput = {
    AND?: Prisma.subscription_deliveryScalarWhereInput | Prisma.subscription_deliveryScalarWhereInput[];
    OR?: Prisma.subscription_deliveryScalarWhereInput[];
    NOT?: Prisma.subscription_deliveryScalarWhereInput | Prisma.subscription_deliveryScalarWhereInput[];
    id?: Prisma.UuidFilter<"subscription_delivery"> | string;
    subscription_id?: Prisma.UuidFilter<"subscription_delivery"> | string;
    order_id?: Prisma.UuidNullableFilter<"subscription_delivery"> | string | null;
    scheduled_date?: Prisma.DateTimeFilter<"subscription_delivery"> | Date | string;
    status?: Prisma.StringFilter<"subscription_delivery"> | string;
    delivered_at?: Prisma.DateTimeNullableFilter<"subscription_delivery"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"subscription_delivery"> | Date | string;
};
export type subscription_deliveryCreateWithoutSubscriptionInput = {
    id?: string;
    scheduled_date: Date | string;
    status?: string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
    order?: Prisma.OrderCreateNestedOneWithoutSubscription_deliveryInput;
};
export type subscription_deliveryUncheckedCreateWithoutSubscriptionInput = {
    id?: string;
    order_id?: string | null;
    scheduled_date: Date | string;
    status?: string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
};
export type subscription_deliveryCreateOrConnectWithoutSubscriptionInput = {
    where: Prisma.subscription_deliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscription_deliveryCreateWithoutSubscriptionInput, Prisma.subscription_deliveryUncheckedCreateWithoutSubscriptionInput>;
};
export type subscription_deliveryCreateManySubscriptionInputEnvelope = {
    data: Prisma.subscription_deliveryCreateManySubscriptionInput | Prisma.subscription_deliveryCreateManySubscriptionInput[];
    skipDuplicates?: boolean;
};
export type subscription_deliveryUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: Prisma.subscription_deliveryWhereUniqueInput;
    update: Prisma.XOR<Prisma.subscription_deliveryUpdateWithoutSubscriptionInput, Prisma.subscription_deliveryUncheckedUpdateWithoutSubscriptionInput>;
    create: Prisma.XOR<Prisma.subscription_deliveryCreateWithoutSubscriptionInput, Prisma.subscription_deliveryUncheckedCreateWithoutSubscriptionInput>;
};
export type subscription_deliveryUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: Prisma.subscription_deliveryWhereUniqueInput;
    data: Prisma.XOR<Prisma.subscription_deliveryUpdateWithoutSubscriptionInput, Prisma.subscription_deliveryUncheckedUpdateWithoutSubscriptionInput>;
};
export type subscription_deliveryUpdateManyWithWhereWithoutSubscriptionInput = {
    where: Prisma.subscription_deliveryScalarWhereInput;
    data: Prisma.XOR<Prisma.subscription_deliveryUpdateManyMutationInput, Prisma.subscription_deliveryUncheckedUpdateManyWithoutSubscriptionInput>;
};
export type subscription_deliveryCreateManyOrderInput = {
    id?: string;
    subscription_id: string;
    scheduled_date: Date | string;
    status?: string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
};
export type subscription_deliveryUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduled_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subscription?: Prisma.subscriptionUpdateOneRequiredWithoutSubscription_deliveryNestedInput;
};
export type subscription_deliveryUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subscription_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduled_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscription_deliveryUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subscription_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduled_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscription_deliveryCreateManySubscriptionInput = {
    id?: string;
    order_id?: string | null;
    scheduled_date: Date | string;
    status?: string;
    delivered_at?: Date | string | null;
    created_at?: Date | string;
};
export type subscription_deliveryUpdateWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduled_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneWithoutSubscription_deliveryNestedInput;
};
export type subscription_deliveryUncheckedUpdateWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduled_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscription_deliveryUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scheduled_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscription_deliverySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subscription_id?: boolean;
    order_id?: boolean;
    scheduled_date?: boolean;
    status?: boolean;
    delivered_at?: boolean;
    created_at?: boolean;
    order?: boolean | Prisma.subscription_delivery$orderArgs<ExtArgs>;
    subscription?: boolean | Prisma.subscriptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription_delivery"]>;
export type subscription_deliverySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subscription_id?: boolean;
    order_id?: boolean;
    scheduled_date?: boolean;
    status?: boolean;
    delivered_at?: boolean;
    created_at?: boolean;
    order?: boolean | Prisma.subscription_delivery$orderArgs<ExtArgs>;
    subscription?: boolean | Prisma.subscriptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription_delivery"]>;
export type subscription_deliverySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    subscription_id?: boolean;
    order_id?: boolean;
    scheduled_date?: boolean;
    status?: boolean;
    delivered_at?: boolean;
    created_at?: boolean;
    order?: boolean | Prisma.subscription_delivery$orderArgs<ExtArgs>;
    subscription?: boolean | Prisma.subscriptionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscription_delivery"]>;
export type subscription_deliverySelectScalar = {
    id?: boolean;
    subscription_id?: boolean;
    order_id?: boolean;
    scheduled_date?: boolean;
    status?: boolean;
    delivered_at?: boolean;
    created_at?: boolean;
};
export type subscription_deliveryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "subscription_id" | "order_id" | "scheduled_date" | "status" | "delivered_at" | "created_at", ExtArgs["result"]["subscription_delivery"]>;
export type subscription_deliveryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.subscription_delivery$orderArgs<ExtArgs>;
    subscription?: boolean | Prisma.subscriptionDefaultArgs<ExtArgs>;
};
export type subscription_deliveryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.subscription_delivery$orderArgs<ExtArgs>;
    subscription?: boolean | Prisma.subscriptionDefaultArgs<ExtArgs>;
};
export type subscription_deliveryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.subscription_delivery$orderArgs<ExtArgs>;
    subscription?: boolean | Prisma.subscriptionDefaultArgs<ExtArgs>;
};
export type $subscription_deliveryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "subscription_delivery";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs> | null;
        subscription: Prisma.$subscriptionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        subscription_id: string;
        order_id: string | null;
        scheduled_date: Date;
        status: string;
        delivered_at: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["subscription_delivery"]>;
    composites: {};
};
export type subscription_deliveryGetPayload<S extends boolean | null | undefined | subscription_deliveryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$subscription_deliveryPayload, S>;
export type subscription_deliveryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<subscription_deliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Subscription_deliveryCountAggregateInputType | true;
};
export interface subscription_deliveryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['subscription_delivery'];
        meta: {
            name: 'subscription_delivery';
        };
    };
    findUnique<T extends subscription_deliveryFindUniqueArgs>(args: Prisma.SelectSubset<T, subscription_deliveryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__subscription_deliveryClient<runtime.Types.Result.GetResult<Prisma.$subscription_deliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends subscription_deliveryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, subscription_deliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__subscription_deliveryClient<runtime.Types.Result.GetResult<Prisma.$subscription_deliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends subscription_deliveryFindFirstArgs>(args?: Prisma.SelectSubset<T, subscription_deliveryFindFirstArgs<ExtArgs>>): Prisma.Prisma__subscription_deliveryClient<runtime.Types.Result.GetResult<Prisma.$subscription_deliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends subscription_deliveryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, subscription_deliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__subscription_deliveryClient<runtime.Types.Result.GetResult<Prisma.$subscription_deliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends subscription_deliveryFindManyArgs>(args?: Prisma.SelectSubset<T, subscription_deliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscription_deliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends subscription_deliveryCreateArgs>(args: Prisma.SelectSubset<T, subscription_deliveryCreateArgs<ExtArgs>>): Prisma.Prisma__subscription_deliveryClient<runtime.Types.Result.GetResult<Prisma.$subscription_deliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends subscription_deliveryCreateManyArgs>(args?: Prisma.SelectSubset<T, subscription_deliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends subscription_deliveryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, subscription_deliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscription_deliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends subscription_deliveryDeleteArgs>(args: Prisma.SelectSubset<T, subscription_deliveryDeleteArgs<ExtArgs>>): Prisma.Prisma__subscription_deliveryClient<runtime.Types.Result.GetResult<Prisma.$subscription_deliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends subscription_deliveryUpdateArgs>(args: Prisma.SelectSubset<T, subscription_deliveryUpdateArgs<ExtArgs>>): Prisma.Prisma__subscription_deliveryClient<runtime.Types.Result.GetResult<Prisma.$subscription_deliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends subscription_deliveryDeleteManyArgs>(args?: Prisma.SelectSubset<T, subscription_deliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends subscription_deliveryUpdateManyArgs>(args: Prisma.SelectSubset<T, subscription_deliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends subscription_deliveryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, subscription_deliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscription_deliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends subscription_deliveryUpsertArgs>(args: Prisma.SelectSubset<T, subscription_deliveryUpsertArgs<ExtArgs>>): Prisma.Prisma__subscription_deliveryClient<runtime.Types.Result.GetResult<Prisma.$subscription_deliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends subscription_deliveryCountArgs>(args?: Prisma.Subset<T, subscription_deliveryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Subscription_deliveryCountAggregateOutputType> : number>;
    aggregate<T extends Subscription_deliveryAggregateArgs>(args: Prisma.Subset<T, Subscription_deliveryAggregateArgs>): Prisma.PrismaPromise<GetSubscription_deliveryAggregateType<T>>;
    groupBy<T extends subscription_deliveryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: subscription_deliveryGroupByArgs['orderBy'];
    } : {
        orderBy?: subscription_deliveryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, subscription_deliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscription_deliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: subscription_deliveryFieldRefs;
}
export interface Prisma__subscription_deliveryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.subscription_delivery$orderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.subscription_delivery$orderArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    subscription<T extends Prisma.subscriptionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.subscriptionDefaultArgs<ExtArgs>>): Prisma.Prisma__subscriptionClient<runtime.Types.Result.GetResult<Prisma.$subscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface subscription_deliveryFieldRefs {
    readonly id: Prisma.FieldRef<"subscription_delivery", 'String'>;
    readonly subscription_id: Prisma.FieldRef<"subscription_delivery", 'String'>;
    readonly order_id: Prisma.FieldRef<"subscription_delivery", 'String'>;
    readonly scheduled_date: Prisma.FieldRef<"subscription_delivery", 'DateTime'>;
    readonly status: Prisma.FieldRef<"subscription_delivery", 'String'>;
    readonly delivered_at: Prisma.FieldRef<"subscription_delivery", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"subscription_delivery", 'DateTime'>;
}
export type subscription_deliveryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_deliverySelect<ExtArgs> | null;
    omit?: Prisma.subscription_deliveryOmit<ExtArgs> | null;
    include?: Prisma.subscription_deliveryInclude<ExtArgs> | null;
    where: Prisma.subscription_deliveryWhereUniqueInput;
};
export type subscription_deliveryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_deliverySelect<ExtArgs> | null;
    omit?: Prisma.subscription_deliveryOmit<ExtArgs> | null;
    include?: Prisma.subscription_deliveryInclude<ExtArgs> | null;
    where: Prisma.subscription_deliveryWhereUniqueInput;
};
export type subscription_deliveryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type subscription_deliveryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type subscription_deliveryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type subscription_deliveryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_deliverySelect<ExtArgs> | null;
    omit?: Prisma.subscription_deliveryOmit<ExtArgs> | null;
    include?: Prisma.subscription_deliveryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscription_deliveryCreateInput, Prisma.subscription_deliveryUncheckedCreateInput>;
};
export type subscription_deliveryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.subscription_deliveryCreateManyInput | Prisma.subscription_deliveryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type subscription_deliveryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_deliverySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.subscription_deliveryOmit<ExtArgs> | null;
    data: Prisma.subscription_deliveryCreateManyInput | Prisma.subscription_deliveryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.subscription_deliveryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type subscription_deliveryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_deliverySelect<ExtArgs> | null;
    omit?: Prisma.subscription_deliveryOmit<ExtArgs> | null;
    include?: Prisma.subscription_deliveryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscription_deliveryUpdateInput, Prisma.subscription_deliveryUncheckedUpdateInput>;
    where: Prisma.subscription_deliveryWhereUniqueInput;
};
export type subscription_deliveryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.subscription_deliveryUpdateManyMutationInput, Prisma.subscription_deliveryUncheckedUpdateManyInput>;
    where?: Prisma.subscription_deliveryWhereInput;
    limit?: number;
};
export type subscription_deliveryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_deliverySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.subscription_deliveryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscription_deliveryUpdateManyMutationInput, Prisma.subscription_deliveryUncheckedUpdateManyInput>;
    where?: Prisma.subscription_deliveryWhereInput;
    limit?: number;
    include?: Prisma.subscription_deliveryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type subscription_deliveryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_deliverySelect<ExtArgs> | null;
    omit?: Prisma.subscription_deliveryOmit<ExtArgs> | null;
    include?: Prisma.subscription_deliveryInclude<ExtArgs> | null;
    where: Prisma.subscription_deliveryWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscription_deliveryCreateInput, Prisma.subscription_deliveryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.subscription_deliveryUpdateInput, Prisma.subscription_deliveryUncheckedUpdateInput>;
};
export type subscription_deliveryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_deliverySelect<ExtArgs> | null;
    omit?: Prisma.subscription_deliveryOmit<ExtArgs> | null;
    include?: Prisma.subscription_deliveryInclude<ExtArgs> | null;
    where: Prisma.subscription_deliveryWhereUniqueInput;
};
export type subscription_deliveryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscription_deliveryWhereInput;
    limit?: number;
};
export type subscription_delivery$orderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
};
export type subscription_deliveryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_deliverySelect<ExtArgs> | null;
    omit?: Prisma.subscription_deliveryOmit<ExtArgs> | null;
    include?: Prisma.subscription_deliveryInclude<ExtArgs> | null;
};
