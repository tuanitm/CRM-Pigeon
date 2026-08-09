import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductExchangeModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductExchangePayload>;
export type AggregateProductExchange = {
    _count: ProductExchangeCountAggregateOutputType | null;
    _min: ProductExchangeMinAggregateOutputType | null;
    _max: ProductExchangeMaxAggregateOutputType | null;
};
export type ProductExchangeMinAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    originalOrderId: string | null;
    originalProductId: string | null;
    newProductId: string | null;
    reason: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductExchangeMaxAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    originalOrderId: string | null;
    originalProductId: string | null;
    newProductId: string | null;
    reason: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductExchangeCountAggregateOutputType = {
    id: number;
    customerId: number;
    originalOrderId: number;
    originalProductId: number;
    newProductId: number;
    reason: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductExchangeMinAggregateInputType = {
    id?: true;
    customerId?: true;
    originalOrderId?: true;
    originalProductId?: true;
    newProductId?: true;
    reason?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductExchangeMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    originalOrderId?: true;
    originalProductId?: true;
    newProductId?: true;
    reason?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductExchangeCountAggregateInputType = {
    id?: true;
    customerId?: true;
    originalOrderId?: true;
    originalProductId?: true;
    newProductId?: true;
    reason?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductExchangeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductExchangeWhereInput;
    orderBy?: Prisma.ProductExchangeOrderByWithRelationInput | Prisma.ProductExchangeOrderByWithRelationInput[];
    cursor?: Prisma.ProductExchangeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductExchangeCountAggregateInputType;
    _min?: ProductExchangeMinAggregateInputType;
    _max?: ProductExchangeMaxAggregateInputType;
};
export type GetProductExchangeAggregateType<T extends ProductExchangeAggregateArgs> = {
    [P in keyof T & keyof AggregateProductExchange]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductExchange[P]> : Prisma.GetScalarType<T[P], AggregateProductExchange[P]>;
};
export type ProductExchangeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductExchangeWhereInput;
    orderBy?: Prisma.ProductExchangeOrderByWithAggregationInput | Prisma.ProductExchangeOrderByWithAggregationInput[];
    by: Prisma.ProductExchangeScalarFieldEnum[] | Prisma.ProductExchangeScalarFieldEnum;
    having?: Prisma.ProductExchangeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductExchangeCountAggregateInputType | true;
    _min?: ProductExchangeMinAggregateInputType;
    _max?: ProductExchangeMaxAggregateInputType;
};
export type ProductExchangeGroupByOutputType = {
    id: string;
    customerId: string;
    originalOrderId: string | null;
    originalProductId: string | null;
    newProductId: string | null;
    reason: string | null;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductExchangeCountAggregateOutputType | null;
    _min: ProductExchangeMinAggregateOutputType | null;
    _max: ProductExchangeMaxAggregateOutputType | null;
};
export type GetProductExchangeGroupByPayload<T extends ProductExchangeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductExchangeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductExchangeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductExchangeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductExchangeGroupByOutputType[P]>;
}>>;
export type ProductExchangeWhereInput = {
    AND?: Prisma.ProductExchangeWhereInput | Prisma.ProductExchangeWhereInput[];
    OR?: Prisma.ProductExchangeWhereInput[];
    NOT?: Prisma.ProductExchangeWhereInput | Prisma.ProductExchangeWhereInput[];
    id?: Prisma.UuidFilter<"ProductExchange"> | string;
    customerId?: Prisma.UuidFilter<"ProductExchange"> | string;
    originalOrderId?: Prisma.UuidNullableFilter<"ProductExchange"> | string | null;
    originalProductId?: Prisma.UuidNullableFilter<"ProductExchange"> | string | null;
    newProductId?: Prisma.UuidNullableFilter<"ProductExchange"> | string | null;
    reason?: Prisma.StringNullableFilter<"ProductExchange"> | string | null;
    status?: Prisma.StringFilter<"ProductExchange"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProductExchange"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductExchange"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    product_product_exchange_new_product_idToproduct?: Prisma.XOR<Prisma.ProductNullableScalarRelationFilter, Prisma.ProductWhereInput> | null;
    order?: Prisma.XOR<Prisma.OrderNullableScalarRelationFilter, Prisma.OrderWhereInput> | null;
    product_product_exchange_original_product_idToproduct?: Prisma.XOR<Prisma.ProductNullableScalarRelationFilter, Prisma.ProductWhereInput> | null;
};
export type ProductExchangeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    originalOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalProductId?: Prisma.SortOrderInput | Prisma.SortOrder;
    newProductId?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    product_product_exchange_new_product_idToproduct?: Prisma.ProductOrderByWithRelationInput;
    order?: Prisma.OrderOrderByWithRelationInput;
    product_product_exchange_original_product_idToproduct?: Prisma.ProductOrderByWithRelationInput;
};
export type ProductExchangeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ProductExchangeWhereInput | Prisma.ProductExchangeWhereInput[];
    OR?: Prisma.ProductExchangeWhereInput[];
    NOT?: Prisma.ProductExchangeWhereInput | Prisma.ProductExchangeWhereInput[];
    customerId?: Prisma.UuidFilter<"ProductExchange"> | string;
    originalOrderId?: Prisma.UuidNullableFilter<"ProductExchange"> | string | null;
    originalProductId?: Prisma.UuidNullableFilter<"ProductExchange"> | string | null;
    newProductId?: Prisma.UuidNullableFilter<"ProductExchange"> | string | null;
    reason?: Prisma.StringNullableFilter<"ProductExchange"> | string | null;
    status?: Prisma.StringFilter<"ProductExchange"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProductExchange"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductExchange"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    product_product_exchange_new_product_idToproduct?: Prisma.XOR<Prisma.ProductNullableScalarRelationFilter, Prisma.ProductWhereInput> | null;
    order?: Prisma.XOR<Prisma.OrderNullableScalarRelationFilter, Prisma.OrderWhereInput> | null;
    product_product_exchange_original_product_idToproduct?: Prisma.XOR<Prisma.ProductNullableScalarRelationFilter, Prisma.ProductWhereInput> | null;
}, "id">;
export type ProductExchangeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    originalOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    originalProductId?: Prisma.SortOrderInput | Prisma.SortOrder;
    newProductId?: Prisma.SortOrderInput | Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductExchangeCountOrderByAggregateInput;
    _max?: Prisma.ProductExchangeMaxOrderByAggregateInput;
    _min?: Prisma.ProductExchangeMinOrderByAggregateInput;
};
export type ProductExchangeScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductExchangeScalarWhereWithAggregatesInput | Prisma.ProductExchangeScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductExchangeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductExchangeScalarWhereWithAggregatesInput | Prisma.ProductExchangeScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ProductExchange"> | string;
    customerId?: Prisma.UuidWithAggregatesFilter<"ProductExchange"> | string;
    originalOrderId?: Prisma.UuidNullableWithAggregatesFilter<"ProductExchange"> | string | null;
    originalProductId?: Prisma.UuidNullableWithAggregatesFilter<"ProductExchange"> | string | null;
    newProductId?: Prisma.UuidNullableWithAggregatesFilter<"ProductExchange"> | string | null;
    reason?: Prisma.StringNullableWithAggregatesFilter<"ProductExchange"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"ProductExchange"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProductExchange"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProductExchange"> | Date | string;
};
export type ProductExchangeCreateInput = {
    id?: string;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutProduct_exchangeInput;
    product_product_exchange_new_product_idToproduct?: Prisma.ProductCreateNestedOneWithoutProduct_exchange_product_exchange_new_product_idToproductInput;
    order?: Prisma.OrderCreateNestedOneWithoutProduct_exchangeInput;
    product_product_exchange_original_product_idToproduct?: Prisma.ProductCreateNestedOneWithoutProduct_exchange_product_exchange_original_product_idToproductInput;
};
export type ProductExchangeUncheckedCreateInput = {
    id?: string;
    customerId: string;
    originalOrderId?: string | null;
    originalProductId?: string | null;
    newProductId?: string | null;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductExchangeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutProduct_exchangeNestedInput;
    product_product_exchange_new_product_idToproduct?: Prisma.ProductUpdateOneWithoutProduct_exchange_product_exchange_new_product_idToproductNestedInput;
    order?: Prisma.OrderUpdateOneWithoutProduct_exchangeNestedInput;
    product_product_exchange_original_product_idToproduct?: Prisma.ProductUpdateOneWithoutProduct_exchange_product_exchange_original_product_idToproductNestedInput;
};
export type ProductExchangeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    originalOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductExchangeCreateManyInput = {
    id?: string;
    customerId: string;
    originalOrderId?: string | null;
    originalProductId?: string | null;
    newProductId?: string | null;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductExchangeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductExchangeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    originalOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductExchangeListRelationFilter = {
    every?: Prisma.ProductExchangeWhereInput;
    some?: Prisma.ProductExchangeWhereInput;
    none?: Prisma.ProductExchangeWhereInput;
};
export type ProductExchangeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductExchangeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    originalOrderId?: Prisma.SortOrder;
    originalProductId?: Prisma.SortOrder;
    newProductId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductExchangeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    originalOrderId?: Prisma.SortOrder;
    originalProductId?: Prisma.SortOrder;
    newProductId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductExchangeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    originalOrderId?: Prisma.SortOrder;
    originalProductId?: Prisma.SortOrder;
    newProductId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductExchangeCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutCustomerInput, Prisma.ProductExchangeUncheckedCreateWithoutCustomerInput> | Prisma.ProductExchangeCreateWithoutCustomerInput[] | Prisma.ProductExchangeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutCustomerInput | Prisma.ProductExchangeCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ProductExchangeCreateManyCustomerInputEnvelope;
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
};
export type ProductExchangeUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutCustomerInput, Prisma.ProductExchangeUncheckedCreateWithoutCustomerInput> | Prisma.ProductExchangeCreateWithoutCustomerInput[] | Prisma.ProductExchangeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutCustomerInput | Prisma.ProductExchangeCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ProductExchangeCreateManyCustomerInputEnvelope;
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
};
export type ProductExchangeUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutCustomerInput, Prisma.ProductExchangeUncheckedCreateWithoutCustomerInput> | Prisma.ProductExchangeCreateWithoutCustomerInput[] | Prisma.ProductExchangeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutCustomerInput | Prisma.ProductExchangeCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ProductExchangeUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ProductExchangeUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ProductExchangeCreateManyCustomerInputEnvelope;
    set?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    disconnect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    delete?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    update?: Prisma.ProductExchangeUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ProductExchangeUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ProductExchangeUpdateManyWithWhereWithoutCustomerInput | Prisma.ProductExchangeUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ProductExchangeScalarWhereInput | Prisma.ProductExchangeScalarWhereInput[];
};
export type ProductExchangeUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutCustomerInput, Prisma.ProductExchangeUncheckedCreateWithoutCustomerInput> | Prisma.ProductExchangeCreateWithoutCustomerInput[] | Prisma.ProductExchangeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutCustomerInput | Prisma.ProductExchangeCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ProductExchangeUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ProductExchangeUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ProductExchangeCreateManyCustomerInputEnvelope;
    set?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    disconnect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    delete?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    update?: Prisma.ProductExchangeUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ProductExchangeUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ProductExchangeUpdateManyWithWhereWithoutCustomerInput | Prisma.ProductExchangeUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ProductExchangeScalarWhereInput | Prisma.ProductExchangeScalarWhereInput[];
};
export type ProductExchangeCreateNestedManyWithoutProduct_product_exchange_new_product_idToproductInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutProduct_product_exchange_new_product_idToproductInput, Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_new_product_idToproductInput> | Prisma.ProductExchangeCreateWithoutProduct_product_exchange_new_product_idToproductInput[] | Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_new_product_idToproductInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_new_product_idToproductInput | Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_new_product_idToproductInput[];
    createMany?: Prisma.ProductExchangeCreateManyProduct_product_exchange_new_product_idToproductInputEnvelope;
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
};
export type ProductExchangeCreateNestedManyWithoutProduct_product_exchange_original_product_idToproductInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutProduct_product_exchange_original_product_idToproductInput, Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_original_product_idToproductInput> | Prisma.ProductExchangeCreateWithoutProduct_product_exchange_original_product_idToproductInput[] | Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_original_product_idToproductInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_original_product_idToproductInput | Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_original_product_idToproductInput[];
    createMany?: Prisma.ProductExchangeCreateManyProduct_product_exchange_original_product_idToproductInputEnvelope;
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
};
export type ProductExchangeUncheckedCreateNestedManyWithoutProduct_product_exchange_new_product_idToproductInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutProduct_product_exchange_new_product_idToproductInput, Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_new_product_idToproductInput> | Prisma.ProductExchangeCreateWithoutProduct_product_exchange_new_product_idToproductInput[] | Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_new_product_idToproductInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_new_product_idToproductInput | Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_new_product_idToproductInput[];
    createMany?: Prisma.ProductExchangeCreateManyProduct_product_exchange_new_product_idToproductInputEnvelope;
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
};
export type ProductExchangeUncheckedCreateNestedManyWithoutProduct_product_exchange_original_product_idToproductInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutProduct_product_exchange_original_product_idToproductInput, Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_original_product_idToproductInput> | Prisma.ProductExchangeCreateWithoutProduct_product_exchange_original_product_idToproductInput[] | Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_original_product_idToproductInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_original_product_idToproductInput | Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_original_product_idToproductInput[];
    createMany?: Prisma.ProductExchangeCreateManyProduct_product_exchange_original_product_idToproductInputEnvelope;
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
};
export type ProductExchangeUpdateManyWithoutProduct_product_exchange_new_product_idToproductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutProduct_product_exchange_new_product_idToproductInput, Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_new_product_idToproductInput> | Prisma.ProductExchangeCreateWithoutProduct_product_exchange_new_product_idToproductInput[] | Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_new_product_idToproductInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_new_product_idToproductInput | Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_new_product_idToproductInput[];
    upsert?: Prisma.ProductExchangeUpsertWithWhereUniqueWithoutProduct_product_exchange_new_product_idToproductInput | Prisma.ProductExchangeUpsertWithWhereUniqueWithoutProduct_product_exchange_new_product_idToproductInput[];
    createMany?: Prisma.ProductExchangeCreateManyProduct_product_exchange_new_product_idToproductInputEnvelope;
    set?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    disconnect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    delete?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    update?: Prisma.ProductExchangeUpdateWithWhereUniqueWithoutProduct_product_exchange_new_product_idToproductInput | Prisma.ProductExchangeUpdateWithWhereUniqueWithoutProduct_product_exchange_new_product_idToproductInput[];
    updateMany?: Prisma.ProductExchangeUpdateManyWithWhereWithoutProduct_product_exchange_new_product_idToproductInput | Prisma.ProductExchangeUpdateManyWithWhereWithoutProduct_product_exchange_new_product_idToproductInput[];
    deleteMany?: Prisma.ProductExchangeScalarWhereInput | Prisma.ProductExchangeScalarWhereInput[];
};
export type ProductExchangeUpdateManyWithoutProduct_product_exchange_original_product_idToproductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutProduct_product_exchange_original_product_idToproductInput, Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_original_product_idToproductInput> | Prisma.ProductExchangeCreateWithoutProduct_product_exchange_original_product_idToproductInput[] | Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_original_product_idToproductInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_original_product_idToproductInput | Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_original_product_idToproductInput[];
    upsert?: Prisma.ProductExchangeUpsertWithWhereUniqueWithoutProduct_product_exchange_original_product_idToproductInput | Prisma.ProductExchangeUpsertWithWhereUniqueWithoutProduct_product_exchange_original_product_idToproductInput[];
    createMany?: Prisma.ProductExchangeCreateManyProduct_product_exchange_original_product_idToproductInputEnvelope;
    set?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    disconnect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    delete?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    update?: Prisma.ProductExchangeUpdateWithWhereUniqueWithoutProduct_product_exchange_original_product_idToproductInput | Prisma.ProductExchangeUpdateWithWhereUniqueWithoutProduct_product_exchange_original_product_idToproductInput[];
    updateMany?: Prisma.ProductExchangeUpdateManyWithWhereWithoutProduct_product_exchange_original_product_idToproductInput | Prisma.ProductExchangeUpdateManyWithWhereWithoutProduct_product_exchange_original_product_idToproductInput[];
    deleteMany?: Prisma.ProductExchangeScalarWhereInput | Prisma.ProductExchangeScalarWhereInput[];
};
export type ProductExchangeUncheckedUpdateManyWithoutProduct_product_exchange_new_product_idToproductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutProduct_product_exchange_new_product_idToproductInput, Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_new_product_idToproductInput> | Prisma.ProductExchangeCreateWithoutProduct_product_exchange_new_product_idToproductInput[] | Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_new_product_idToproductInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_new_product_idToproductInput | Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_new_product_idToproductInput[];
    upsert?: Prisma.ProductExchangeUpsertWithWhereUniqueWithoutProduct_product_exchange_new_product_idToproductInput | Prisma.ProductExchangeUpsertWithWhereUniqueWithoutProduct_product_exchange_new_product_idToproductInput[];
    createMany?: Prisma.ProductExchangeCreateManyProduct_product_exchange_new_product_idToproductInputEnvelope;
    set?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    disconnect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    delete?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    update?: Prisma.ProductExchangeUpdateWithWhereUniqueWithoutProduct_product_exchange_new_product_idToproductInput | Prisma.ProductExchangeUpdateWithWhereUniqueWithoutProduct_product_exchange_new_product_idToproductInput[];
    updateMany?: Prisma.ProductExchangeUpdateManyWithWhereWithoutProduct_product_exchange_new_product_idToproductInput | Prisma.ProductExchangeUpdateManyWithWhereWithoutProduct_product_exchange_new_product_idToproductInput[];
    deleteMany?: Prisma.ProductExchangeScalarWhereInput | Prisma.ProductExchangeScalarWhereInput[];
};
export type ProductExchangeUncheckedUpdateManyWithoutProduct_product_exchange_original_product_idToproductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutProduct_product_exchange_original_product_idToproductInput, Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_original_product_idToproductInput> | Prisma.ProductExchangeCreateWithoutProduct_product_exchange_original_product_idToproductInput[] | Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_original_product_idToproductInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_original_product_idToproductInput | Prisma.ProductExchangeCreateOrConnectWithoutProduct_product_exchange_original_product_idToproductInput[];
    upsert?: Prisma.ProductExchangeUpsertWithWhereUniqueWithoutProduct_product_exchange_original_product_idToproductInput | Prisma.ProductExchangeUpsertWithWhereUniqueWithoutProduct_product_exchange_original_product_idToproductInput[];
    createMany?: Prisma.ProductExchangeCreateManyProduct_product_exchange_original_product_idToproductInputEnvelope;
    set?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    disconnect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    delete?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    update?: Prisma.ProductExchangeUpdateWithWhereUniqueWithoutProduct_product_exchange_original_product_idToproductInput | Prisma.ProductExchangeUpdateWithWhereUniqueWithoutProduct_product_exchange_original_product_idToproductInput[];
    updateMany?: Prisma.ProductExchangeUpdateManyWithWhereWithoutProduct_product_exchange_original_product_idToproductInput | Prisma.ProductExchangeUpdateManyWithWhereWithoutProduct_product_exchange_original_product_idToproductInput[];
    deleteMany?: Prisma.ProductExchangeScalarWhereInput | Prisma.ProductExchangeScalarWhereInput[];
};
export type ProductExchangeCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutOrderInput, Prisma.ProductExchangeUncheckedCreateWithoutOrderInput> | Prisma.ProductExchangeCreateWithoutOrderInput[] | Prisma.ProductExchangeUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutOrderInput | Prisma.ProductExchangeCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.ProductExchangeCreateManyOrderInputEnvelope;
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
};
export type ProductExchangeUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutOrderInput, Prisma.ProductExchangeUncheckedCreateWithoutOrderInput> | Prisma.ProductExchangeCreateWithoutOrderInput[] | Prisma.ProductExchangeUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutOrderInput | Prisma.ProductExchangeCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.ProductExchangeCreateManyOrderInputEnvelope;
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
};
export type ProductExchangeUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutOrderInput, Prisma.ProductExchangeUncheckedCreateWithoutOrderInput> | Prisma.ProductExchangeCreateWithoutOrderInput[] | Prisma.ProductExchangeUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutOrderInput | Prisma.ProductExchangeCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.ProductExchangeUpsertWithWhereUniqueWithoutOrderInput | Prisma.ProductExchangeUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.ProductExchangeCreateManyOrderInputEnvelope;
    set?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    disconnect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    delete?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    update?: Prisma.ProductExchangeUpdateWithWhereUniqueWithoutOrderInput | Prisma.ProductExchangeUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.ProductExchangeUpdateManyWithWhereWithoutOrderInput | Prisma.ProductExchangeUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.ProductExchangeScalarWhereInput | Prisma.ProductExchangeScalarWhereInput[];
};
export type ProductExchangeUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ProductExchangeCreateWithoutOrderInput, Prisma.ProductExchangeUncheckedCreateWithoutOrderInput> | Prisma.ProductExchangeCreateWithoutOrderInput[] | Prisma.ProductExchangeUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ProductExchangeCreateOrConnectWithoutOrderInput | Prisma.ProductExchangeCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.ProductExchangeUpsertWithWhereUniqueWithoutOrderInput | Prisma.ProductExchangeUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.ProductExchangeCreateManyOrderInputEnvelope;
    set?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    disconnect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    delete?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    connect?: Prisma.ProductExchangeWhereUniqueInput | Prisma.ProductExchangeWhereUniqueInput[];
    update?: Prisma.ProductExchangeUpdateWithWhereUniqueWithoutOrderInput | Prisma.ProductExchangeUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.ProductExchangeUpdateManyWithWhereWithoutOrderInput | Prisma.ProductExchangeUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.ProductExchangeScalarWhereInput | Prisma.ProductExchangeScalarWhereInput[];
};
export type ProductExchangeCreateWithoutCustomerInput = {
    id?: string;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product_product_exchange_new_product_idToproduct?: Prisma.ProductCreateNestedOneWithoutProduct_exchange_product_exchange_new_product_idToproductInput;
    order?: Prisma.OrderCreateNestedOneWithoutProduct_exchangeInput;
    product_product_exchange_original_product_idToproduct?: Prisma.ProductCreateNestedOneWithoutProduct_exchange_product_exchange_original_product_idToproductInput;
};
export type ProductExchangeUncheckedCreateWithoutCustomerInput = {
    id?: string;
    originalOrderId?: string | null;
    originalProductId?: string | null;
    newProductId?: string | null;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductExchangeCreateOrConnectWithoutCustomerInput = {
    where: Prisma.ProductExchangeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductExchangeCreateWithoutCustomerInput, Prisma.ProductExchangeUncheckedCreateWithoutCustomerInput>;
};
export type ProductExchangeCreateManyCustomerInputEnvelope = {
    data: Prisma.ProductExchangeCreateManyCustomerInput | Prisma.ProductExchangeCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type ProductExchangeUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ProductExchangeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductExchangeUpdateWithoutCustomerInput, Prisma.ProductExchangeUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.ProductExchangeCreateWithoutCustomerInput, Prisma.ProductExchangeUncheckedCreateWithoutCustomerInput>;
};
export type ProductExchangeUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ProductExchangeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductExchangeUpdateWithoutCustomerInput, Prisma.ProductExchangeUncheckedUpdateWithoutCustomerInput>;
};
export type ProductExchangeUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.ProductExchangeScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductExchangeUpdateManyMutationInput, Prisma.ProductExchangeUncheckedUpdateManyWithoutCustomerInput>;
};
export type ProductExchangeScalarWhereInput = {
    AND?: Prisma.ProductExchangeScalarWhereInput | Prisma.ProductExchangeScalarWhereInput[];
    OR?: Prisma.ProductExchangeScalarWhereInput[];
    NOT?: Prisma.ProductExchangeScalarWhereInput | Prisma.ProductExchangeScalarWhereInput[];
    id?: Prisma.UuidFilter<"ProductExchange"> | string;
    customerId?: Prisma.UuidFilter<"ProductExchange"> | string;
    originalOrderId?: Prisma.UuidNullableFilter<"ProductExchange"> | string | null;
    originalProductId?: Prisma.UuidNullableFilter<"ProductExchange"> | string | null;
    newProductId?: Prisma.UuidNullableFilter<"ProductExchange"> | string | null;
    reason?: Prisma.StringNullableFilter<"ProductExchange"> | string | null;
    status?: Prisma.StringFilter<"ProductExchange"> | string;
    createdAt?: Prisma.DateTimeFilter<"ProductExchange"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductExchange"> | Date | string;
};
export type ProductExchangeCreateWithoutProduct_product_exchange_new_product_idToproductInput = {
    id?: string;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutProduct_exchangeInput;
    order?: Prisma.OrderCreateNestedOneWithoutProduct_exchangeInput;
    product_product_exchange_original_product_idToproduct?: Prisma.ProductCreateNestedOneWithoutProduct_exchange_product_exchange_original_product_idToproductInput;
};
export type ProductExchangeUncheckedCreateWithoutProduct_product_exchange_new_product_idToproductInput = {
    id?: string;
    customerId: string;
    originalOrderId?: string | null;
    originalProductId?: string | null;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductExchangeCreateOrConnectWithoutProduct_product_exchange_new_product_idToproductInput = {
    where: Prisma.ProductExchangeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductExchangeCreateWithoutProduct_product_exchange_new_product_idToproductInput, Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_new_product_idToproductInput>;
};
export type ProductExchangeCreateManyProduct_product_exchange_new_product_idToproductInputEnvelope = {
    data: Prisma.ProductExchangeCreateManyProduct_product_exchange_new_product_idToproductInput | Prisma.ProductExchangeCreateManyProduct_product_exchange_new_product_idToproductInput[];
    skipDuplicates?: boolean;
};
export type ProductExchangeCreateWithoutProduct_product_exchange_original_product_idToproductInput = {
    id?: string;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutProduct_exchangeInput;
    product_product_exchange_new_product_idToproduct?: Prisma.ProductCreateNestedOneWithoutProduct_exchange_product_exchange_new_product_idToproductInput;
    order?: Prisma.OrderCreateNestedOneWithoutProduct_exchangeInput;
};
export type ProductExchangeUncheckedCreateWithoutProduct_product_exchange_original_product_idToproductInput = {
    id?: string;
    customerId: string;
    originalOrderId?: string | null;
    newProductId?: string | null;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductExchangeCreateOrConnectWithoutProduct_product_exchange_original_product_idToproductInput = {
    where: Prisma.ProductExchangeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductExchangeCreateWithoutProduct_product_exchange_original_product_idToproductInput, Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_original_product_idToproductInput>;
};
export type ProductExchangeCreateManyProduct_product_exchange_original_product_idToproductInputEnvelope = {
    data: Prisma.ProductExchangeCreateManyProduct_product_exchange_original_product_idToproductInput | Prisma.ProductExchangeCreateManyProduct_product_exchange_original_product_idToproductInput[];
    skipDuplicates?: boolean;
};
export type ProductExchangeUpsertWithWhereUniqueWithoutProduct_product_exchange_new_product_idToproductInput = {
    where: Prisma.ProductExchangeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductExchangeUpdateWithoutProduct_product_exchange_new_product_idToproductInput, Prisma.ProductExchangeUncheckedUpdateWithoutProduct_product_exchange_new_product_idToproductInput>;
    create: Prisma.XOR<Prisma.ProductExchangeCreateWithoutProduct_product_exchange_new_product_idToproductInput, Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_new_product_idToproductInput>;
};
export type ProductExchangeUpdateWithWhereUniqueWithoutProduct_product_exchange_new_product_idToproductInput = {
    where: Prisma.ProductExchangeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductExchangeUpdateWithoutProduct_product_exchange_new_product_idToproductInput, Prisma.ProductExchangeUncheckedUpdateWithoutProduct_product_exchange_new_product_idToproductInput>;
};
export type ProductExchangeUpdateManyWithWhereWithoutProduct_product_exchange_new_product_idToproductInput = {
    where: Prisma.ProductExchangeScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductExchangeUpdateManyMutationInput, Prisma.ProductExchangeUncheckedUpdateManyWithoutProduct_product_exchange_new_product_idToproductInput>;
};
export type ProductExchangeUpsertWithWhereUniqueWithoutProduct_product_exchange_original_product_idToproductInput = {
    where: Prisma.ProductExchangeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductExchangeUpdateWithoutProduct_product_exchange_original_product_idToproductInput, Prisma.ProductExchangeUncheckedUpdateWithoutProduct_product_exchange_original_product_idToproductInput>;
    create: Prisma.XOR<Prisma.ProductExchangeCreateWithoutProduct_product_exchange_original_product_idToproductInput, Prisma.ProductExchangeUncheckedCreateWithoutProduct_product_exchange_original_product_idToproductInput>;
};
export type ProductExchangeUpdateWithWhereUniqueWithoutProduct_product_exchange_original_product_idToproductInput = {
    where: Prisma.ProductExchangeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductExchangeUpdateWithoutProduct_product_exchange_original_product_idToproductInput, Prisma.ProductExchangeUncheckedUpdateWithoutProduct_product_exchange_original_product_idToproductInput>;
};
export type ProductExchangeUpdateManyWithWhereWithoutProduct_product_exchange_original_product_idToproductInput = {
    where: Prisma.ProductExchangeScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductExchangeUpdateManyMutationInput, Prisma.ProductExchangeUncheckedUpdateManyWithoutProduct_product_exchange_original_product_idToproductInput>;
};
export type ProductExchangeCreateWithoutOrderInput = {
    id?: string;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutProduct_exchangeInput;
    product_product_exchange_new_product_idToproduct?: Prisma.ProductCreateNestedOneWithoutProduct_exchange_product_exchange_new_product_idToproductInput;
    product_product_exchange_original_product_idToproduct?: Prisma.ProductCreateNestedOneWithoutProduct_exchange_product_exchange_original_product_idToproductInput;
};
export type ProductExchangeUncheckedCreateWithoutOrderInput = {
    id?: string;
    customerId: string;
    originalProductId?: string | null;
    newProductId?: string | null;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductExchangeCreateOrConnectWithoutOrderInput = {
    where: Prisma.ProductExchangeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductExchangeCreateWithoutOrderInput, Prisma.ProductExchangeUncheckedCreateWithoutOrderInput>;
};
export type ProductExchangeCreateManyOrderInputEnvelope = {
    data: Prisma.ProductExchangeCreateManyOrderInput | Prisma.ProductExchangeCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type ProductExchangeUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.ProductExchangeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductExchangeUpdateWithoutOrderInput, Prisma.ProductExchangeUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.ProductExchangeCreateWithoutOrderInput, Prisma.ProductExchangeUncheckedCreateWithoutOrderInput>;
};
export type ProductExchangeUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.ProductExchangeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductExchangeUpdateWithoutOrderInput, Prisma.ProductExchangeUncheckedUpdateWithoutOrderInput>;
};
export type ProductExchangeUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.ProductExchangeScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductExchangeUpdateManyMutationInput, Prisma.ProductExchangeUncheckedUpdateManyWithoutOrderInput>;
};
export type ProductExchangeCreateManyCustomerInput = {
    id?: string;
    originalOrderId?: string | null;
    originalProductId?: string | null;
    newProductId?: string | null;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductExchangeUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_product_exchange_new_product_idToproduct?: Prisma.ProductUpdateOneWithoutProduct_exchange_product_exchange_new_product_idToproductNestedInput;
    order?: Prisma.OrderUpdateOneWithoutProduct_exchangeNestedInput;
    product_product_exchange_original_product_idToproduct?: Prisma.ProductUpdateOneWithoutProduct_exchange_product_exchange_original_product_idToproductNestedInput;
};
export type ProductExchangeUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductExchangeUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    originalOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductExchangeCreateManyProduct_product_exchange_new_product_idToproductInput = {
    id?: string;
    customerId: string;
    originalOrderId?: string | null;
    originalProductId?: string | null;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductExchangeCreateManyProduct_product_exchange_original_product_idToproductInput = {
    id?: string;
    customerId: string;
    originalOrderId?: string | null;
    newProductId?: string | null;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductExchangeUpdateWithoutProduct_product_exchange_new_product_idToproductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutProduct_exchangeNestedInput;
    order?: Prisma.OrderUpdateOneWithoutProduct_exchangeNestedInput;
    product_product_exchange_original_product_idToproduct?: Prisma.ProductUpdateOneWithoutProduct_exchange_product_exchange_original_product_idToproductNestedInput;
};
export type ProductExchangeUncheckedUpdateWithoutProduct_product_exchange_new_product_idToproductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    originalOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductExchangeUncheckedUpdateManyWithoutProduct_product_exchange_new_product_idToproductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    originalOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    originalProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductExchangeUpdateWithoutProduct_product_exchange_original_product_idToproductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutProduct_exchangeNestedInput;
    product_product_exchange_new_product_idToproduct?: Prisma.ProductUpdateOneWithoutProduct_exchange_product_exchange_new_product_idToproductNestedInput;
    order?: Prisma.OrderUpdateOneWithoutProduct_exchangeNestedInput;
};
export type ProductExchangeUncheckedUpdateWithoutProduct_product_exchange_original_product_idToproductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    originalOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductExchangeUncheckedUpdateManyWithoutProduct_product_exchange_original_product_idToproductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    originalOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductExchangeCreateManyOrderInput = {
    id?: string;
    customerId: string;
    originalProductId?: string | null;
    newProductId?: string | null;
    reason?: string | null;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductExchangeUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutProduct_exchangeNestedInput;
    product_product_exchange_new_product_idToproduct?: Prisma.ProductUpdateOneWithoutProduct_exchange_product_exchange_new_product_idToproductNestedInput;
    product_product_exchange_original_product_idToproduct?: Prisma.ProductUpdateOneWithoutProduct_exchange_product_exchange_original_product_idToproductNestedInput;
};
export type ProductExchangeUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    originalProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductExchangeUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    originalProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newProductId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductExchangeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    originalOrderId?: boolean;
    originalProductId?: boolean;
    newProductId?: boolean;
    reason?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product_product_exchange_new_product_idToproduct?: boolean | Prisma.ProductExchange$product_product_exchange_new_product_idToproductArgs<ExtArgs>;
    order?: boolean | Prisma.ProductExchange$orderArgs<ExtArgs>;
    product_product_exchange_original_product_idToproduct?: boolean | Prisma.ProductExchange$product_product_exchange_original_product_idToproductArgs<ExtArgs>;
}, ExtArgs["result"]["productExchange"]>;
export type ProductExchangeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    originalOrderId?: boolean;
    originalProductId?: boolean;
    newProductId?: boolean;
    reason?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product_product_exchange_new_product_idToproduct?: boolean | Prisma.ProductExchange$product_product_exchange_new_product_idToproductArgs<ExtArgs>;
    order?: boolean | Prisma.ProductExchange$orderArgs<ExtArgs>;
    product_product_exchange_original_product_idToproduct?: boolean | Prisma.ProductExchange$product_product_exchange_original_product_idToproductArgs<ExtArgs>;
}, ExtArgs["result"]["productExchange"]>;
export type ProductExchangeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    originalOrderId?: boolean;
    originalProductId?: boolean;
    newProductId?: boolean;
    reason?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product_product_exchange_new_product_idToproduct?: boolean | Prisma.ProductExchange$product_product_exchange_new_product_idToproductArgs<ExtArgs>;
    order?: boolean | Prisma.ProductExchange$orderArgs<ExtArgs>;
    product_product_exchange_original_product_idToproduct?: boolean | Prisma.ProductExchange$product_product_exchange_original_product_idToproductArgs<ExtArgs>;
}, ExtArgs["result"]["productExchange"]>;
export type ProductExchangeSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    originalOrderId?: boolean;
    originalProductId?: boolean;
    newProductId?: boolean;
    reason?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProductExchangeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "originalOrderId" | "originalProductId" | "newProductId" | "reason" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["productExchange"]>;
export type ProductExchangeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product_product_exchange_new_product_idToproduct?: boolean | Prisma.ProductExchange$product_product_exchange_new_product_idToproductArgs<ExtArgs>;
    order?: boolean | Prisma.ProductExchange$orderArgs<ExtArgs>;
    product_product_exchange_original_product_idToproduct?: boolean | Prisma.ProductExchange$product_product_exchange_original_product_idToproductArgs<ExtArgs>;
};
export type ProductExchangeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product_product_exchange_new_product_idToproduct?: boolean | Prisma.ProductExchange$product_product_exchange_new_product_idToproductArgs<ExtArgs>;
    order?: boolean | Prisma.ProductExchange$orderArgs<ExtArgs>;
    product_product_exchange_original_product_idToproduct?: boolean | Prisma.ProductExchange$product_product_exchange_original_product_idToproductArgs<ExtArgs>;
};
export type ProductExchangeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product_product_exchange_new_product_idToproduct?: boolean | Prisma.ProductExchange$product_product_exchange_new_product_idToproductArgs<ExtArgs>;
    order?: boolean | Prisma.ProductExchange$orderArgs<ExtArgs>;
    product_product_exchange_original_product_idToproduct?: boolean | Prisma.ProductExchange$product_product_exchange_original_product_idToproductArgs<ExtArgs>;
};
export type $ProductExchangePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductExchange";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        product_product_exchange_new_product_idToproduct: Prisma.$ProductPayload<ExtArgs> | null;
        order: Prisma.$OrderPayload<ExtArgs> | null;
        product_product_exchange_original_product_idToproduct: Prisma.$ProductPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customerId: string;
        originalOrderId: string | null;
        originalProductId: string | null;
        newProductId: string | null;
        reason: string | null;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["productExchange"]>;
    composites: {};
};
export type ProductExchangeGetPayload<S extends boolean | null | undefined | ProductExchangeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductExchangePayload, S>;
export type ProductExchangeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductExchangeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductExchangeCountAggregateInputType | true;
};
export interface ProductExchangeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductExchange'];
        meta: {
            name: 'ProductExchange';
        };
    };
    findUnique<T extends ProductExchangeFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductExchangeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductExchangeClient<runtime.Types.Result.GetResult<Prisma.$ProductExchangePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductExchangeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductExchangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductExchangeClient<runtime.Types.Result.GetResult<Prisma.$ProductExchangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductExchangeFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductExchangeFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductExchangeClient<runtime.Types.Result.GetResult<Prisma.$ProductExchangePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductExchangeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductExchangeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductExchangeClient<runtime.Types.Result.GetResult<Prisma.$ProductExchangePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductExchangeFindManyArgs>(args?: Prisma.SelectSubset<T, ProductExchangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductExchangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductExchangeCreateArgs>(args: Prisma.SelectSubset<T, ProductExchangeCreateArgs<ExtArgs>>): Prisma.Prisma__ProductExchangeClient<runtime.Types.Result.GetResult<Prisma.$ProductExchangePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductExchangeCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductExchangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductExchangeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductExchangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductExchangePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductExchangeDeleteArgs>(args: Prisma.SelectSubset<T, ProductExchangeDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductExchangeClient<runtime.Types.Result.GetResult<Prisma.$ProductExchangePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductExchangeUpdateArgs>(args: Prisma.SelectSubset<T, ProductExchangeUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductExchangeClient<runtime.Types.Result.GetResult<Prisma.$ProductExchangePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductExchangeDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductExchangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductExchangeUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductExchangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductExchangeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductExchangeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductExchangePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductExchangeUpsertArgs>(args: Prisma.SelectSubset<T, ProductExchangeUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductExchangeClient<runtime.Types.Result.GetResult<Prisma.$ProductExchangePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductExchangeCountArgs>(args?: Prisma.Subset<T, ProductExchangeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductExchangeCountAggregateOutputType> : number>;
    aggregate<T extends ProductExchangeAggregateArgs>(args: Prisma.Subset<T, ProductExchangeAggregateArgs>): Prisma.PrismaPromise<GetProductExchangeAggregateType<T>>;
    groupBy<T extends ProductExchangeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductExchangeGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductExchangeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductExchangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductExchangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductExchangeFieldRefs;
}
export interface Prisma__ProductExchangeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product_product_exchange_new_product_idToproduct<T extends Prisma.ProductExchange$product_product_exchange_new_product_idToproductArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductExchange$product_product_exchange_new_product_idToproductArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    order<T extends Prisma.ProductExchange$orderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductExchange$orderArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    product_product_exchange_original_product_idToproduct<T extends Prisma.ProductExchange$product_product_exchange_original_product_idToproductArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductExchange$product_product_exchange_original_product_idToproductArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductExchangeFieldRefs {
    readonly id: Prisma.FieldRef<"ProductExchange", 'String'>;
    readonly customerId: Prisma.FieldRef<"ProductExchange", 'String'>;
    readonly originalOrderId: Prisma.FieldRef<"ProductExchange", 'String'>;
    readonly originalProductId: Prisma.FieldRef<"ProductExchange", 'String'>;
    readonly newProductId: Prisma.FieldRef<"ProductExchange", 'String'>;
    readonly reason: Prisma.FieldRef<"ProductExchange", 'String'>;
    readonly status: Prisma.FieldRef<"ProductExchange", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ProductExchange", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ProductExchange", 'DateTime'>;
}
export type ProductExchangeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductExchangeSelect<ExtArgs> | null;
    omit?: Prisma.ProductExchangeOmit<ExtArgs> | null;
    include?: Prisma.ProductExchangeInclude<ExtArgs> | null;
    where: Prisma.ProductExchangeWhereUniqueInput;
};
export type ProductExchangeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductExchangeSelect<ExtArgs> | null;
    omit?: Prisma.ProductExchangeOmit<ExtArgs> | null;
    include?: Prisma.ProductExchangeInclude<ExtArgs> | null;
    where: Prisma.ProductExchangeWhereUniqueInput;
};
export type ProductExchangeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductExchangeSelect<ExtArgs> | null;
    omit?: Prisma.ProductExchangeOmit<ExtArgs> | null;
    include?: Prisma.ProductExchangeInclude<ExtArgs> | null;
    where?: Prisma.ProductExchangeWhereInput;
    orderBy?: Prisma.ProductExchangeOrderByWithRelationInput | Prisma.ProductExchangeOrderByWithRelationInput[];
    cursor?: Prisma.ProductExchangeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductExchangeScalarFieldEnum | Prisma.ProductExchangeScalarFieldEnum[];
};
export type ProductExchangeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductExchangeSelect<ExtArgs> | null;
    omit?: Prisma.ProductExchangeOmit<ExtArgs> | null;
    include?: Prisma.ProductExchangeInclude<ExtArgs> | null;
    where?: Prisma.ProductExchangeWhereInput;
    orderBy?: Prisma.ProductExchangeOrderByWithRelationInput | Prisma.ProductExchangeOrderByWithRelationInput[];
    cursor?: Prisma.ProductExchangeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductExchangeScalarFieldEnum | Prisma.ProductExchangeScalarFieldEnum[];
};
export type ProductExchangeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductExchangeSelect<ExtArgs> | null;
    omit?: Prisma.ProductExchangeOmit<ExtArgs> | null;
    include?: Prisma.ProductExchangeInclude<ExtArgs> | null;
    where?: Prisma.ProductExchangeWhereInput;
    orderBy?: Prisma.ProductExchangeOrderByWithRelationInput | Prisma.ProductExchangeOrderByWithRelationInput[];
    cursor?: Prisma.ProductExchangeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductExchangeScalarFieldEnum | Prisma.ProductExchangeScalarFieldEnum[];
};
export type ProductExchangeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductExchangeSelect<ExtArgs> | null;
    omit?: Prisma.ProductExchangeOmit<ExtArgs> | null;
    include?: Prisma.ProductExchangeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductExchangeCreateInput, Prisma.ProductExchangeUncheckedCreateInput>;
};
export type ProductExchangeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductExchangeCreateManyInput | Prisma.ProductExchangeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductExchangeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductExchangeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductExchangeOmit<ExtArgs> | null;
    data: Prisma.ProductExchangeCreateManyInput | Prisma.ProductExchangeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductExchangeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductExchangeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductExchangeSelect<ExtArgs> | null;
    omit?: Prisma.ProductExchangeOmit<ExtArgs> | null;
    include?: Prisma.ProductExchangeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductExchangeUpdateInput, Prisma.ProductExchangeUncheckedUpdateInput>;
    where: Prisma.ProductExchangeWhereUniqueInput;
};
export type ProductExchangeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductExchangeUpdateManyMutationInput, Prisma.ProductExchangeUncheckedUpdateManyInput>;
    where?: Prisma.ProductExchangeWhereInput;
    limit?: number;
};
export type ProductExchangeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductExchangeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductExchangeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductExchangeUpdateManyMutationInput, Prisma.ProductExchangeUncheckedUpdateManyInput>;
    where?: Prisma.ProductExchangeWhereInput;
    limit?: number;
    include?: Prisma.ProductExchangeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductExchangeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductExchangeSelect<ExtArgs> | null;
    omit?: Prisma.ProductExchangeOmit<ExtArgs> | null;
    include?: Prisma.ProductExchangeInclude<ExtArgs> | null;
    where: Prisma.ProductExchangeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductExchangeCreateInput, Prisma.ProductExchangeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductExchangeUpdateInput, Prisma.ProductExchangeUncheckedUpdateInput>;
};
export type ProductExchangeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductExchangeSelect<ExtArgs> | null;
    omit?: Prisma.ProductExchangeOmit<ExtArgs> | null;
    include?: Prisma.ProductExchangeInclude<ExtArgs> | null;
    where: Prisma.ProductExchangeWhereUniqueInput;
};
export type ProductExchangeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductExchangeWhereInput;
    limit?: number;
};
export type ProductExchange$product_product_exchange_new_product_idToproductArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
};
export type ProductExchange$orderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
};
export type ProductExchange$product_product_exchange_original_product_idToproductArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
};
export type ProductExchangeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductExchangeSelect<ExtArgs> | null;
    omit?: Prisma.ProductExchangeOmit<ExtArgs> | null;
    include?: Prisma.ProductExchangeInclude<ExtArgs> | null;
};
