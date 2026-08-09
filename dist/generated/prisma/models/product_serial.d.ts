import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type product_serialModel = runtime.Types.Result.DefaultSelection<Prisma.$product_serialPayload>;
export type AggregateProduct_serial = {
    _count: Product_serialCountAggregateOutputType | null;
    _min: Product_serialMinAggregateOutputType | null;
    _max: Product_serialMaxAggregateOutputType | null;
};
export type Product_serialMinAggregateOutputType = {
    id: string | null;
    serial_code: string | null;
    batch_id: string | null;
    product_id: string | null;
    status: string | null;
    claimed_by: string | null;
    claimed_at: Date | null;
    created_at: Date | null;
};
export type Product_serialMaxAggregateOutputType = {
    id: string | null;
    serial_code: string | null;
    batch_id: string | null;
    product_id: string | null;
    status: string | null;
    claimed_by: string | null;
    claimed_at: Date | null;
    created_at: Date | null;
};
export type Product_serialCountAggregateOutputType = {
    id: number;
    serial_code: number;
    batch_id: number;
    product_id: number;
    status: number;
    claimed_by: number;
    claimed_at: number;
    created_at: number;
    _all: number;
};
export type Product_serialMinAggregateInputType = {
    id?: true;
    serial_code?: true;
    batch_id?: true;
    product_id?: true;
    status?: true;
    claimed_by?: true;
    claimed_at?: true;
    created_at?: true;
};
export type Product_serialMaxAggregateInputType = {
    id?: true;
    serial_code?: true;
    batch_id?: true;
    product_id?: true;
    status?: true;
    claimed_by?: true;
    claimed_at?: true;
    created_at?: true;
};
export type Product_serialCountAggregateInputType = {
    id?: true;
    serial_code?: true;
    batch_id?: true;
    product_id?: true;
    status?: true;
    claimed_by?: true;
    claimed_at?: true;
    created_at?: true;
    _all?: true;
};
export type Product_serialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_serialWhereInput;
    orderBy?: Prisma.product_serialOrderByWithRelationInput | Prisma.product_serialOrderByWithRelationInput[];
    cursor?: Prisma.product_serialWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Product_serialCountAggregateInputType;
    _min?: Product_serialMinAggregateInputType;
    _max?: Product_serialMaxAggregateInputType;
};
export type GetProduct_serialAggregateType<T extends Product_serialAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct_serial]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct_serial[P]> : Prisma.GetScalarType<T[P], AggregateProduct_serial[P]>;
};
export type product_serialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_serialWhereInput;
    orderBy?: Prisma.product_serialOrderByWithAggregationInput | Prisma.product_serialOrderByWithAggregationInput[];
    by: Prisma.Product_serialScalarFieldEnum[] | Prisma.Product_serialScalarFieldEnum;
    having?: Prisma.product_serialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Product_serialCountAggregateInputType | true;
    _min?: Product_serialMinAggregateInputType;
    _max?: Product_serialMaxAggregateInputType;
};
export type Product_serialGroupByOutputType = {
    id: string;
    serial_code: string;
    batch_id: string;
    product_id: string;
    status: string;
    claimed_by: string | null;
    claimed_at: Date | null;
    created_at: Date;
    _count: Product_serialCountAggregateOutputType | null;
    _min: Product_serialMinAggregateOutputType | null;
    _max: Product_serialMaxAggregateOutputType | null;
};
export type GetProduct_serialGroupByPayload<T extends product_serialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Product_serialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Product_serialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Product_serialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Product_serialGroupByOutputType[P]>;
}>>;
export type product_serialWhereInput = {
    AND?: Prisma.product_serialWhereInput | Prisma.product_serialWhereInput[];
    OR?: Prisma.product_serialWhereInput[];
    NOT?: Prisma.product_serialWhereInput | Prisma.product_serialWhereInput[];
    id?: Prisma.UuidFilter<"product_serial"> | string;
    serial_code?: Prisma.StringFilter<"product_serial"> | string;
    batch_id?: Prisma.UuidFilter<"product_serial"> | string;
    product_id?: Prisma.UuidFilter<"product_serial"> | string;
    status?: Prisma.StringFilter<"product_serial"> | string;
    claimed_by?: Prisma.UuidNullableFilter<"product_serial"> | string | null;
    claimed_at?: Prisma.DateTimeNullableFilter<"product_serial"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"product_serial"> | Date | string;
    serial_batch?: Prisma.XOR<Prisma.Serial_batchScalarRelationFilter, Prisma.serial_batchWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    serial_scan?: Prisma.Serial_scanListRelationFilter;
    warranty_registration?: Prisma.Warranty_registrationListRelationFilter;
};
export type product_serialOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    serial_code?: Prisma.SortOrder;
    batch_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimed_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    claimed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    serial_batch?: Prisma.serial_batchOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
    serial_scan?: Prisma.serial_scanOrderByRelationAggregateInput;
    warranty_registration?: Prisma.warranty_registrationOrderByRelationAggregateInput;
};
export type product_serialWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    serial_code?: string;
    AND?: Prisma.product_serialWhereInput | Prisma.product_serialWhereInput[];
    OR?: Prisma.product_serialWhereInput[];
    NOT?: Prisma.product_serialWhereInput | Prisma.product_serialWhereInput[];
    batch_id?: Prisma.UuidFilter<"product_serial"> | string;
    product_id?: Prisma.UuidFilter<"product_serial"> | string;
    status?: Prisma.StringFilter<"product_serial"> | string;
    claimed_by?: Prisma.UuidNullableFilter<"product_serial"> | string | null;
    claimed_at?: Prisma.DateTimeNullableFilter<"product_serial"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"product_serial"> | Date | string;
    serial_batch?: Prisma.XOR<Prisma.Serial_batchScalarRelationFilter, Prisma.serial_batchWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    serial_scan?: Prisma.Serial_scanListRelationFilter;
    warranty_registration?: Prisma.Warranty_registrationListRelationFilter;
}, "id" | "serial_code">;
export type product_serialOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    serial_code?: Prisma.SortOrder;
    batch_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimed_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    claimed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.product_serialCountOrderByAggregateInput;
    _max?: Prisma.product_serialMaxOrderByAggregateInput;
    _min?: Prisma.product_serialMinOrderByAggregateInput;
};
export type product_serialScalarWhereWithAggregatesInput = {
    AND?: Prisma.product_serialScalarWhereWithAggregatesInput | Prisma.product_serialScalarWhereWithAggregatesInput[];
    OR?: Prisma.product_serialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.product_serialScalarWhereWithAggregatesInput | Prisma.product_serialScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"product_serial"> | string;
    serial_code?: Prisma.StringWithAggregatesFilter<"product_serial"> | string;
    batch_id?: Prisma.UuidWithAggregatesFilter<"product_serial"> | string;
    product_id?: Prisma.UuidWithAggregatesFilter<"product_serial"> | string;
    status?: Prisma.StringWithAggregatesFilter<"product_serial"> | string;
    claimed_by?: Prisma.UuidNullableWithAggregatesFilter<"product_serial"> | string | null;
    claimed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"product_serial"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"product_serial"> | Date | string;
};
export type product_serialCreateInput = {
    id?: string;
    serial_code: string;
    status?: string;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
    serial_batch: Prisma.serial_batchCreateNestedOneWithoutProduct_serialInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutProduct_serialInput;
    product: Prisma.ProductCreateNestedOneWithoutProduct_serialInput;
    serial_scan?: Prisma.serial_scanCreateNestedManyWithoutProduct_serialInput;
    warranty_registration?: Prisma.warranty_registrationCreateNestedManyWithoutProduct_serialInput;
};
export type product_serialUncheckedCreateInput = {
    id?: string;
    serial_code: string;
    batch_id: string;
    product_id: string;
    status?: string;
    claimed_by?: string | null;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
    serial_scan?: Prisma.serial_scanUncheckedCreateNestedManyWithoutProduct_serialInput;
    warranty_registration?: Prisma.warranty_registrationUncheckedCreateNestedManyWithoutProduct_serialInput;
};
export type product_serialUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    serial_batch?: Prisma.serial_batchUpdateOneRequiredWithoutProduct_serialNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutProduct_serialNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutProduct_serialNestedInput;
    serial_scan?: Prisma.serial_scanUpdateManyWithoutProduct_serialNestedInput;
    warranty_registration?: Prisma.warranty_registrationUpdateManyWithoutProduct_serialNestedInput;
};
export type product_serialUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    serial_scan?: Prisma.serial_scanUncheckedUpdateManyWithoutProduct_serialNestedInput;
    warranty_registration?: Prisma.warranty_registrationUncheckedUpdateManyWithoutProduct_serialNestedInput;
};
export type product_serialCreateManyInput = {
    id?: string;
    serial_code: string;
    batch_id: string;
    product_id: string;
    status?: string;
    claimed_by?: string | null;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
};
export type product_serialUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type product_serialUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Product_serialListRelationFilter = {
    every?: Prisma.product_serialWhereInput;
    some?: Prisma.product_serialWhereInput;
    none?: Prisma.product_serialWhereInput;
};
export type product_serialOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type product_serialCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serial_code?: Prisma.SortOrder;
    batch_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimed_by?: Prisma.SortOrder;
    claimed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type product_serialMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serial_code?: Prisma.SortOrder;
    batch_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimed_by?: Prisma.SortOrder;
    claimed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type product_serialMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serial_code?: Prisma.SortOrder;
    batch_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    claimed_by?: Prisma.SortOrder;
    claimed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type Product_serialScalarRelationFilter = {
    is?: Prisma.product_serialWhereInput;
    isNot?: Prisma.product_serialWhereInput;
};
export type Product_serialNullableScalarRelationFilter = {
    is?: Prisma.product_serialWhereInput | null;
    isNot?: Prisma.product_serialWhereInput | null;
};
export type product_serialCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutCustomerInput, Prisma.product_serialUncheckedCreateWithoutCustomerInput> | Prisma.product_serialCreateWithoutCustomerInput[] | Prisma.product_serialUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutCustomerInput | Prisma.product_serialCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.product_serialCreateManyCustomerInputEnvelope;
    connect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
};
export type product_serialUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutCustomerInput, Prisma.product_serialUncheckedCreateWithoutCustomerInput> | Prisma.product_serialCreateWithoutCustomerInput[] | Prisma.product_serialUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutCustomerInput | Prisma.product_serialCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.product_serialCreateManyCustomerInputEnvelope;
    connect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
};
export type product_serialUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutCustomerInput, Prisma.product_serialUncheckedCreateWithoutCustomerInput> | Prisma.product_serialCreateWithoutCustomerInput[] | Prisma.product_serialUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutCustomerInput | Prisma.product_serialCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.product_serialUpsertWithWhereUniqueWithoutCustomerInput | Prisma.product_serialUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.product_serialCreateManyCustomerInputEnvelope;
    set?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    disconnect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    delete?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    connect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    update?: Prisma.product_serialUpdateWithWhereUniqueWithoutCustomerInput | Prisma.product_serialUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.product_serialUpdateManyWithWhereWithoutCustomerInput | Prisma.product_serialUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.product_serialScalarWhereInput | Prisma.product_serialScalarWhereInput[];
};
export type product_serialUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutCustomerInput, Prisma.product_serialUncheckedCreateWithoutCustomerInput> | Prisma.product_serialCreateWithoutCustomerInput[] | Prisma.product_serialUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutCustomerInput | Prisma.product_serialCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.product_serialUpsertWithWhereUniqueWithoutCustomerInput | Prisma.product_serialUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.product_serialCreateManyCustomerInputEnvelope;
    set?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    disconnect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    delete?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    connect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    update?: Prisma.product_serialUpdateWithWhereUniqueWithoutCustomerInput | Prisma.product_serialUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.product_serialUpdateManyWithWhereWithoutCustomerInput | Prisma.product_serialUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.product_serialScalarWhereInput | Prisma.product_serialScalarWhereInput[];
};
export type product_serialCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutProductInput, Prisma.product_serialUncheckedCreateWithoutProductInput> | Prisma.product_serialCreateWithoutProductInput[] | Prisma.product_serialUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutProductInput | Prisma.product_serialCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.product_serialCreateManyProductInputEnvelope;
    connect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
};
export type product_serialUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutProductInput, Prisma.product_serialUncheckedCreateWithoutProductInput> | Prisma.product_serialCreateWithoutProductInput[] | Prisma.product_serialUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutProductInput | Prisma.product_serialCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.product_serialCreateManyProductInputEnvelope;
    connect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
};
export type product_serialUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutProductInput, Prisma.product_serialUncheckedCreateWithoutProductInput> | Prisma.product_serialCreateWithoutProductInput[] | Prisma.product_serialUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutProductInput | Prisma.product_serialCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.product_serialUpsertWithWhereUniqueWithoutProductInput | Prisma.product_serialUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.product_serialCreateManyProductInputEnvelope;
    set?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    disconnect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    delete?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    connect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    update?: Prisma.product_serialUpdateWithWhereUniqueWithoutProductInput | Prisma.product_serialUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.product_serialUpdateManyWithWhereWithoutProductInput | Prisma.product_serialUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.product_serialScalarWhereInput | Prisma.product_serialScalarWhereInput[];
};
export type product_serialUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutProductInput, Prisma.product_serialUncheckedCreateWithoutProductInput> | Prisma.product_serialCreateWithoutProductInput[] | Prisma.product_serialUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutProductInput | Prisma.product_serialCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.product_serialUpsertWithWhereUniqueWithoutProductInput | Prisma.product_serialUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.product_serialCreateManyProductInputEnvelope;
    set?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    disconnect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    delete?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    connect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    update?: Prisma.product_serialUpdateWithWhereUniqueWithoutProductInput | Prisma.product_serialUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.product_serialUpdateManyWithWhereWithoutProductInput | Prisma.product_serialUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.product_serialScalarWhereInput | Prisma.product_serialScalarWhereInput[];
};
export type product_serialCreateNestedManyWithoutSerial_batchInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutSerial_batchInput, Prisma.product_serialUncheckedCreateWithoutSerial_batchInput> | Prisma.product_serialCreateWithoutSerial_batchInput[] | Prisma.product_serialUncheckedCreateWithoutSerial_batchInput[];
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutSerial_batchInput | Prisma.product_serialCreateOrConnectWithoutSerial_batchInput[];
    createMany?: Prisma.product_serialCreateManySerial_batchInputEnvelope;
    connect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
};
export type product_serialUncheckedCreateNestedManyWithoutSerial_batchInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutSerial_batchInput, Prisma.product_serialUncheckedCreateWithoutSerial_batchInput> | Prisma.product_serialCreateWithoutSerial_batchInput[] | Prisma.product_serialUncheckedCreateWithoutSerial_batchInput[];
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutSerial_batchInput | Prisma.product_serialCreateOrConnectWithoutSerial_batchInput[];
    createMany?: Prisma.product_serialCreateManySerial_batchInputEnvelope;
    connect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
};
export type product_serialUpdateManyWithoutSerial_batchNestedInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutSerial_batchInput, Prisma.product_serialUncheckedCreateWithoutSerial_batchInput> | Prisma.product_serialCreateWithoutSerial_batchInput[] | Prisma.product_serialUncheckedCreateWithoutSerial_batchInput[];
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutSerial_batchInput | Prisma.product_serialCreateOrConnectWithoutSerial_batchInput[];
    upsert?: Prisma.product_serialUpsertWithWhereUniqueWithoutSerial_batchInput | Prisma.product_serialUpsertWithWhereUniqueWithoutSerial_batchInput[];
    createMany?: Prisma.product_serialCreateManySerial_batchInputEnvelope;
    set?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    disconnect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    delete?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    connect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    update?: Prisma.product_serialUpdateWithWhereUniqueWithoutSerial_batchInput | Prisma.product_serialUpdateWithWhereUniqueWithoutSerial_batchInput[];
    updateMany?: Prisma.product_serialUpdateManyWithWhereWithoutSerial_batchInput | Prisma.product_serialUpdateManyWithWhereWithoutSerial_batchInput[];
    deleteMany?: Prisma.product_serialScalarWhereInput | Prisma.product_serialScalarWhereInput[];
};
export type product_serialUncheckedUpdateManyWithoutSerial_batchNestedInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutSerial_batchInput, Prisma.product_serialUncheckedCreateWithoutSerial_batchInput> | Prisma.product_serialCreateWithoutSerial_batchInput[] | Prisma.product_serialUncheckedCreateWithoutSerial_batchInput[];
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutSerial_batchInput | Prisma.product_serialCreateOrConnectWithoutSerial_batchInput[];
    upsert?: Prisma.product_serialUpsertWithWhereUniqueWithoutSerial_batchInput | Prisma.product_serialUpsertWithWhereUniqueWithoutSerial_batchInput[];
    createMany?: Prisma.product_serialCreateManySerial_batchInputEnvelope;
    set?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    disconnect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    delete?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    connect?: Prisma.product_serialWhereUniqueInput | Prisma.product_serialWhereUniqueInput[];
    update?: Prisma.product_serialUpdateWithWhereUniqueWithoutSerial_batchInput | Prisma.product_serialUpdateWithWhereUniqueWithoutSerial_batchInput[];
    updateMany?: Prisma.product_serialUpdateManyWithWhereWithoutSerial_batchInput | Prisma.product_serialUpdateManyWithWhereWithoutSerial_batchInput[];
    deleteMany?: Prisma.product_serialScalarWhereInput | Prisma.product_serialScalarWhereInput[];
};
export type product_serialCreateNestedOneWithoutSerial_scanInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutSerial_scanInput, Prisma.product_serialUncheckedCreateWithoutSerial_scanInput>;
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutSerial_scanInput;
    connect?: Prisma.product_serialWhereUniqueInput;
};
export type product_serialUpdateOneRequiredWithoutSerial_scanNestedInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutSerial_scanInput, Prisma.product_serialUncheckedCreateWithoutSerial_scanInput>;
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutSerial_scanInput;
    upsert?: Prisma.product_serialUpsertWithoutSerial_scanInput;
    connect?: Prisma.product_serialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.product_serialUpdateToOneWithWhereWithoutSerial_scanInput, Prisma.product_serialUpdateWithoutSerial_scanInput>, Prisma.product_serialUncheckedUpdateWithoutSerial_scanInput>;
};
export type product_serialCreateNestedOneWithoutWarranty_registrationInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutWarranty_registrationInput, Prisma.product_serialUncheckedCreateWithoutWarranty_registrationInput>;
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutWarranty_registrationInput;
    connect?: Prisma.product_serialWhereUniqueInput;
};
export type product_serialUpdateOneWithoutWarranty_registrationNestedInput = {
    create?: Prisma.XOR<Prisma.product_serialCreateWithoutWarranty_registrationInput, Prisma.product_serialUncheckedCreateWithoutWarranty_registrationInput>;
    connectOrCreate?: Prisma.product_serialCreateOrConnectWithoutWarranty_registrationInput;
    upsert?: Prisma.product_serialUpsertWithoutWarranty_registrationInput;
    disconnect?: Prisma.product_serialWhereInput | boolean;
    delete?: Prisma.product_serialWhereInput | boolean;
    connect?: Prisma.product_serialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.product_serialUpdateToOneWithWhereWithoutWarranty_registrationInput, Prisma.product_serialUpdateWithoutWarranty_registrationInput>, Prisma.product_serialUncheckedUpdateWithoutWarranty_registrationInput>;
};
export type product_serialCreateWithoutCustomerInput = {
    id?: string;
    serial_code: string;
    status?: string;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
    serial_batch: Prisma.serial_batchCreateNestedOneWithoutProduct_serialInput;
    product: Prisma.ProductCreateNestedOneWithoutProduct_serialInput;
    serial_scan?: Prisma.serial_scanCreateNestedManyWithoutProduct_serialInput;
    warranty_registration?: Prisma.warranty_registrationCreateNestedManyWithoutProduct_serialInput;
};
export type product_serialUncheckedCreateWithoutCustomerInput = {
    id?: string;
    serial_code: string;
    batch_id: string;
    product_id: string;
    status?: string;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
    serial_scan?: Prisma.serial_scanUncheckedCreateNestedManyWithoutProduct_serialInput;
    warranty_registration?: Prisma.warranty_registrationUncheckedCreateNestedManyWithoutProduct_serialInput;
};
export type product_serialCreateOrConnectWithoutCustomerInput = {
    where: Prisma.product_serialWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_serialCreateWithoutCustomerInput, Prisma.product_serialUncheckedCreateWithoutCustomerInput>;
};
export type product_serialCreateManyCustomerInputEnvelope = {
    data: Prisma.product_serialCreateManyCustomerInput | Prisma.product_serialCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type product_serialUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.product_serialWhereUniqueInput;
    update: Prisma.XOR<Prisma.product_serialUpdateWithoutCustomerInput, Prisma.product_serialUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.product_serialCreateWithoutCustomerInput, Prisma.product_serialUncheckedCreateWithoutCustomerInput>;
};
export type product_serialUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.product_serialWhereUniqueInput;
    data: Prisma.XOR<Prisma.product_serialUpdateWithoutCustomerInput, Prisma.product_serialUncheckedUpdateWithoutCustomerInput>;
};
export type product_serialUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.product_serialScalarWhereInput;
    data: Prisma.XOR<Prisma.product_serialUpdateManyMutationInput, Prisma.product_serialUncheckedUpdateManyWithoutCustomerInput>;
};
export type product_serialScalarWhereInput = {
    AND?: Prisma.product_serialScalarWhereInput | Prisma.product_serialScalarWhereInput[];
    OR?: Prisma.product_serialScalarWhereInput[];
    NOT?: Prisma.product_serialScalarWhereInput | Prisma.product_serialScalarWhereInput[];
    id?: Prisma.UuidFilter<"product_serial"> | string;
    serial_code?: Prisma.StringFilter<"product_serial"> | string;
    batch_id?: Prisma.UuidFilter<"product_serial"> | string;
    product_id?: Prisma.UuidFilter<"product_serial"> | string;
    status?: Prisma.StringFilter<"product_serial"> | string;
    claimed_by?: Prisma.UuidNullableFilter<"product_serial"> | string | null;
    claimed_at?: Prisma.DateTimeNullableFilter<"product_serial"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"product_serial"> | Date | string;
};
export type product_serialCreateWithoutProductInput = {
    id?: string;
    serial_code: string;
    status?: string;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
    serial_batch: Prisma.serial_batchCreateNestedOneWithoutProduct_serialInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutProduct_serialInput;
    serial_scan?: Prisma.serial_scanCreateNestedManyWithoutProduct_serialInput;
    warranty_registration?: Prisma.warranty_registrationCreateNestedManyWithoutProduct_serialInput;
};
export type product_serialUncheckedCreateWithoutProductInput = {
    id?: string;
    serial_code: string;
    batch_id: string;
    status?: string;
    claimed_by?: string | null;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
    serial_scan?: Prisma.serial_scanUncheckedCreateNestedManyWithoutProduct_serialInput;
    warranty_registration?: Prisma.warranty_registrationUncheckedCreateNestedManyWithoutProduct_serialInput;
};
export type product_serialCreateOrConnectWithoutProductInput = {
    where: Prisma.product_serialWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_serialCreateWithoutProductInput, Prisma.product_serialUncheckedCreateWithoutProductInput>;
};
export type product_serialCreateManyProductInputEnvelope = {
    data: Prisma.product_serialCreateManyProductInput | Prisma.product_serialCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type product_serialUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.product_serialWhereUniqueInput;
    update: Prisma.XOR<Prisma.product_serialUpdateWithoutProductInput, Prisma.product_serialUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.product_serialCreateWithoutProductInput, Prisma.product_serialUncheckedCreateWithoutProductInput>;
};
export type product_serialUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.product_serialWhereUniqueInput;
    data: Prisma.XOR<Prisma.product_serialUpdateWithoutProductInput, Prisma.product_serialUncheckedUpdateWithoutProductInput>;
};
export type product_serialUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.product_serialScalarWhereInput;
    data: Prisma.XOR<Prisma.product_serialUpdateManyMutationInput, Prisma.product_serialUncheckedUpdateManyWithoutProductInput>;
};
export type product_serialCreateWithoutSerial_batchInput = {
    id?: string;
    serial_code: string;
    status?: string;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
    customer?: Prisma.CustomerCreateNestedOneWithoutProduct_serialInput;
    product: Prisma.ProductCreateNestedOneWithoutProduct_serialInput;
    serial_scan?: Prisma.serial_scanCreateNestedManyWithoutProduct_serialInput;
    warranty_registration?: Prisma.warranty_registrationCreateNestedManyWithoutProduct_serialInput;
};
export type product_serialUncheckedCreateWithoutSerial_batchInput = {
    id?: string;
    serial_code: string;
    product_id: string;
    status?: string;
    claimed_by?: string | null;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
    serial_scan?: Prisma.serial_scanUncheckedCreateNestedManyWithoutProduct_serialInput;
    warranty_registration?: Prisma.warranty_registrationUncheckedCreateNestedManyWithoutProduct_serialInput;
};
export type product_serialCreateOrConnectWithoutSerial_batchInput = {
    where: Prisma.product_serialWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_serialCreateWithoutSerial_batchInput, Prisma.product_serialUncheckedCreateWithoutSerial_batchInput>;
};
export type product_serialCreateManySerial_batchInputEnvelope = {
    data: Prisma.product_serialCreateManySerial_batchInput | Prisma.product_serialCreateManySerial_batchInput[];
    skipDuplicates?: boolean;
};
export type product_serialUpsertWithWhereUniqueWithoutSerial_batchInput = {
    where: Prisma.product_serialWhereUniqueInput;
    update: Prisma.XOR<Prisma.product_serialUpdateWithoutSerial_batchInput, Prisma.product_serialUncheckedUpdateWithoutSerial_batchInput>;
    create: Prisma.XOR<Prisma.product_serialCreateWithoutSerial_batchInput, Prisma.product_serialUncheckedCreateWithoutSerial_batchInput>;
};
export type product_serialUpdateWithWhereUniqueWithoutSerial_batchInput = {
    where: Prisma.product_serialWhereUniqueInput;
    data: Prisma.XOR<Prisma.product_serialUpdateWithoutSerial_batchInput, Prisma.product_serialUncheckedUpdateWithoutSerial_batchInput>;
};
export type product_serialUpdateManyWithWhereWithoutSerial_batchInput = {
    where: Prisma.product_serialScalarWhereInput;
    data: Prisma.XOR<Prisma.product_serialUpdateManyMutationInput, Prisma.product_serialUncheckedUpdateManyWithoutSerial_batchInput>;
};
export type product_serialCreateWithoutSerial_scanInput = {
    id?: string;
    serial_code: string;
    status?: string;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
    serial_batch: Prisma.serial_batchCreateNestedOneWithoutProduct_serialInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutProduct_serialInput;
    product: Prisma.ProductCreateNestedOneWithoutProduct_serialInput;
    warranty_registration?: Prisma.warranty_registrationCreateNestedManyWithoutProduct_serialInput;
};
export type product_serialUncheckedCreateWithoutSerial_scanInput = {
    id?: string;
    serial_code: string;
    batch_id: string;
    product_id: string;
    status?: string;
    claimed_by?: string | null;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
    warranty_registration?: Prisma.warranty_registrationUncheckedCreateNestedManyWithoutProduct_serialInput;
};
export type product_serialCreateOrConnectWithoutSerial_scanInput = {
    where: Prisma.product_serialWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_serialCreateWithoutSerial_scanInput, Prisma.product_serialUncheckedCreateWithoutSerial_scanInput>;
};
export type product_serialUpsertWithoutSerial_scanInput = {
    update: Prisma.XOR<Prisma.product_serialUpdateWithoutSerial_scanInput, Prisma.product_serialUncheckedUpdateWithoutSerial_scanInput>;
    create: Prisma.XOR<Prisma.product_serialCreateWithoutSerial_scanInput, Prisma.product_serialUncheckedCreateWithoutSerial_scanInput>;
    where?: Prisma.product_serialWhereInput;
};
export type product_serialUpdateToOneWithWhereWithoutSerial_scanInput = {
    where?: Prisma.product_serialWhereInput;
    data: Prisma.XOR<Prisma.product_serialUpdateWithoutSerial_scanInput, Prisma.product_serialUncheckedUpdateWithoutSerial_scanInput>;
};
export type product_serialUpdateWithoutSerial_scanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    serial_batch?: Prisma.serial_batchUpdateOneRequiredWithoutProduct_serialNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutProduct_serialNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutProduct_serialNestedInput;
    warranty_registration?: Prisma.warranty_registrationUpdateManyWithoutProduct_serialNestedInput;
};
export type product_serialUncheckedUpdateWithoutSerial_scanInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_registration?: Prisma.warranty_registrationUncheckedUpdateManyWithoutProduct_serialNestedInput;
};
export type product_serialCreateWithoutWarranty_registrationInput = {
    id?: string;
    serial_code: string;
    status?: string;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
    serial_batch: Prisma.serial_batchCreateNestedOneWithoutProduct_serialInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutProduct_serialInput;
    product: Prisma.ProductCreateNestedOneWithoutProduct_serialInput;
    serial_scan?: Prisma.serial_scanCreateNestedManyWithoutProduct_serialInput;
};
export type product_serialUncheckedCreateWithoutWarranty_registrationInput = {
    id?: string;
    serial_code: string;
    batch_id: string;
    product_id: string;
    status?: string;
    claimed_by?: string | null;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
    serial_scan?: Prisma.serial_scanUncheckedCreateNestedManyWithoutProduct_serialInput;
};
export type product_serialCreateOrConnectWithoutWarranty_registrationInput = {
    where: Prisma.product_serialWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_serialCreateWithoutWarranty_registrationInput, Prisma.product_serialUncheckedCreateWithoutWarranty_registrationInput>;
};
export type product_serialUpsertWithoutWarranty_registrationInput = {
    update: Prisma.XOR<Prisma.product_serialUpdateWithoutWarranty_registrationInput, Prisma.product_serialUncheckedUpdateWithoutWarranty_registrationInput>;
    create: Prisma.XOR<Prisma.product_serialCreateWithoutWarranty_registrationInput, Prisma.product_serialUncheckedCreateWithoutWarranty_registrationInput>;
    where?: Prisma.product_serialWhereInput;
};
export type product_serialUpdateToOneWithWhereWithoutWarranty_registrationInput = {
    where?: Prisma.product_serialWhereInput;
    data: Prisma.XOR<Prisma.product_serialUpdateWithoutWarranty_registrationInput, Prisma.product_serialUncheckedUpdateWithoutWarranty_registrationInput>;
};
export type product_serialUpdateWithoutWarranty_registrationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    serial_batch?: Prisma.serial_batchUpdateOneRequiredWithoutProduct_serialNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutProduct_serialNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutProduct_serialNestedInput;
    serial_scan?: Prisma.serial_scanUpdateManyWithoutProduct_serialNestedInput;
};
export type product_serialUncheckedUpdateWithoutWarranty_registrationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    serial_scan?: Prisma.serial_scanUncheckedUpdateManyWithoutProduct_serialNestedInput;
};
export type product_serialCreateManyCustomerInput = {
    id?: string;
    serial_code: string;
    batch_id: string;
    product_id: string;
    status?: string;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
};
export type product_serialUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    serial_batch?: Prisma.serial_batchUpdateOneRequiredWithoutProduct_serialNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutProduct_serialNestedInput;
    serial_scan?: Prisma.serial_scanUpdateManyWithoutProduct_serialNestedInput;
    warranty_registration?: Prisma.warranty_registrationUpdateManyWithoutProduct_serialNestedInput;
};
export type product_serialUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    serial_scan?: Prisma.serial_scanUncheckedUpdateManyWithoutProduct_serialNestedInput;
    warranty_registration?: Prisma.warranty_registrationUncheckedUpdateManyWithoutProduct_serialNestedInput;
};
export type product_serialUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type product_serialCreateManyProductInput = {
    id?: string;
    serial_code: string;
    batch_id: string;
    status?: string;
    claimed_by?: string | null;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
};
export type product_serialUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    serial_batch?: Prisma.serial_batchUpdateOneRequiredWithoutProduct_serialNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutProduct_serialNestedInput;
    serial_scan?: Prisma.serial_scanUpdateManyWithoutProduct_serialNestedInput;
    warranty_registration?: Prisma.warranty_registrationUpdateManyWithoutProduct_serialNestedInput;
};
export type product_serialUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    serial_scan?: Prisma.serial_scanUncheckedUpdateManyWithoutProduct_serialNestedInput;
    warranty_registration?: Prisma.warranty_registrationUncheckedUpdateManyWithoutProduct_serialNestedInput;
};
export type product_serialUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type product_serialCreateManySerial_batchInput = {
    id?: string;
    serial_code: string;
    product_id: string;
    status?: string;
    claimed_by?: string | null;
    claimed_at?: Date | string | null;
    created_at?: Date | string;
};
export type product_serialUpdateWithoutSerial_batchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneWithoutProduct_serialNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutProduct_serialNestedInput;
    serial_scan?: Prisma.serial_scanUpdateManyWithoutProduct_serialNestedInput;
    warranty_registration?: Prisma.warranty_registrationUpdateManyWithoutProduct_serialNestedInput;
};
export type product_serialUncheckedUpdateWithoutSerial_batchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    serial_scan?: Prisma.serial_scanUncheckedUpdateManyWithoutProduct_serialNestedInput;
    warranty_registration?: Prisma.warranty_registrationUncheckedUpdateManyWithoutProduct_serialNestedInput;
};
export type product_serialUncheckedUpdateManyWithoutSerial_batchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_code?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    claimed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    claimed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Product_serialCountOutputType = {
    serial_scan: number;
    warranty_registration: number;
};
export type Product_serialCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    serial_scan?: boolean | Product_serialCountOutputTypeCountSerial_scanArgs;
    warranty_registration?: boolean | Product_serialCountOutputTypeCountWarranty_registrationArgs;
};
export type Product_serialCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Product_serialCountOutputTypeSelect<ExtArgs> | null;
};
export type Product_serialCountOutputTypeCountSerial_scanArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.serial_scanWhereInput;
};
export type Product_serialCountOutputTypeCountWarranty_registrationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.warranty_registrationWhereInput;
};
export type product_serialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serial_code?: boolean;
    batch_id?: boolean;
    product_id?: boolean;
    status?: boolean;
    claimed_by?: boolean;
    claimed_at?: boolean;
    created_at?: boolean;
    serial_batch?: boolean | Prisma.serial_batchDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.product_serial$customerArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    serial_scan?: boolean | Prisma.product_serial$serial_scanArgs<ExtArgs>;
    warranty_registration?: boolean | Prisma.product_serial$warranty_registrationArgs<ExtArgs>;
    _count?: boolean | Prisma.Product_serialCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_serial"]>;
export type product_serialSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serial_code?: boolean;
    batch_id?: boolean;
    product_id?: boolean;
    status?: boolean;
    claimed_by?: boolean;
    claimed_at?: boolean;
    created_at?: boolean;
    serial_batch?: boolean | Prisma.serial_batchDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.product_serial$customerArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_serial"]>;
export type product_serialSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serial_code?: boolean;
    batch_id?: boolean;
    product_id?: boolean;
    status?: boolean;
    claimed_by?: boolean;
    claimed_at?: boolean;
    created_at?: boolean;
    serial_batch?: boolean | Prisma.serial_batchDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.product_serial$customerArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_serial"]>;
export type product_serialSelectScalar = {
    id?: boolean;
    serial_code?: boolean;
    batch_id?: boolean;
    product_id?: boolean;
    status?: boolean;
    claimed_by?: boolean;
    claimed_at?: boolean;
    created_at?: boolean;
};
export type product_serialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "serial_code" | "batch_id" | "product_id" | "status" | "claimed_by" | "claimed_at" | "created_at", ExtArgs["result"]["product_serial"]>;
export type product_serialInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    serial_batch?: boolean | Prisma.serial_batchDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.product_serial$customerArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    serial_scan?: boolean | Prisma.product_serial$serial_scanArgs<ExtArgs>;
    warranty_registration?: boolean | Prisma.product_serial$warranty_registrationArgs<ExtArgs>;
    _count?: boolean | Prisma.Product_serialCountOutputTypeDefaultArgs<ExtArgs>;
};
export type product_serialIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    serial_batch?: boolean | Prisma.serial_batchDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.product_serial$customerArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type product_serialIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    serial_batch?: boolean | Prisma.serial_batchDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.product_serial$customerArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $product_serialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "product_serial";
    objects: {
        serial_batch: Prisma.$serial_batchPayload<ExtArgs>;
        customer: Prisma.$CustomerPayload<ExtArgs> | null;
        product: Prisma.$ProductPayload<ExtArgs>;
        serial_scan: Prisma.$serial_scanPayload<ExtArgs>[];
        warranty_registration: Prisma.$warranty_registrationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        serial_code: string;
        batch_id: string;
        product_id: string;
        status: string;
        claimed_by: string | null;
        claimed_at: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["product_serial"]>;
    composites: {};
};
export type product_serialGetPayload<S extends boolean | null | undefined | product_serialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$product_serialPayload, S>;
export type product_serialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<product_serialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Product_serialCountAggregateInputType | true;
};
export interface product_serialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['product_serial'];
        meta: {
            name: 'product_serial';
        };
    };
    findUnique<T extends product_serialFindUniqueArgs>(args: Prisma.SelectSubset<T, product_serialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__product_serialClient<runtime.Types.Result.GetResult<Prisma.$product_serialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends product_serialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, product_serialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_serialClient<runtime.Types.Result.GetResult<Prisma.$product_serialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends product_serialFindFirstArgs>(args?: Prisma.SelectSubset<T, product_serialFindFirstArgs<ExtArgs>>): Prisma.Prisma__product_serialClient<runtime.Types.Result.GetResult<Prisma.$product_serialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends product_serialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, product_serialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_serialClient<runtime.Types.Result.GetResult<Prisma.$product_serialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends product_serialFindManyArgs>(args?: Prisma.SelectSubset<T, product_serialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_serialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends product_serialCreateArgs>(args: Prisma.SelectSubset<T, product_serialCreateArgs<ExtArgs>>): Prisma.Prisma__product_serialClient<runtime.Types.Result.GetResult<Prisma.$product_serialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends product_serialCreateManyArgs>(args?: Prisma.SelectSubset<T, product_serialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends product_serialCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, product_serialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_serialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends product_serialDeleteArgs>(args: Prisma.SelectSubset<T, product_serialDeleteArgs<ExtArgs>>): Prisma.Prisma__product_serialClient<runtime.Types.Result.GetResult<Prisma.$product_serialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends product_serialUpdateArgs>(args: Prisma.SelectSubset<T, product_serialUpdateArgs<ExtArgs>>): Prisma.Prisma__product_serialClient<runtime.Types.Result.GetResult<Prisma.$product_serialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends product_serialDeleteManyArgs>(args?: Prisma.SelectSubset<T, product_serialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends product_serialUpdateManyArgs>(args: Prisma.SelectSubset<T, product_serialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends product_serialUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, product_serialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_serialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends product_serialUpsertArgs>(args: Prisma.SelectSubset<T, product_serialUpsertArgs<ExtArgs>>): Prisma.Prisma__product_serialClient<runtime.Types.Result.GetResult<Prisma.$product_serialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends product_serialCountArgs>(args?: Prisma.Subset<T, product_serialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Product_serialCountAggregateOutputType> : number>;
    aggregate<T extends Product_serialAggregateArgs>(args: Prisma.Subset<T, Product_serialAggregateArgs>): Prisma.PrismaPromise<GetProduct_serialAggregateType<T>>;
    groupBy<T extends product_serialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: product_serialGroupByArgs['orderBy'];
    } : {
        orderBy?: product_serialGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, product_serialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_serialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: product_serialFieldRefs;
}
export interface Prisma__product_serialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    serial_batch<T extends Prisma.serial_batchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.serial_batchDefaultArgs<ExtArgs>>): Prisma.Prisma__serial_batchClient<runtime.Types.Result.GetResult<Prisma.$serial_batchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.product_serial$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_serial$customerArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    serial_scan<T extends Prisma.product_serial$serial_scanArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_serial$serial_scanArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$serial_scanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    warranty_registration<T extends Prisma.product_serial$warranty_registrationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_serial$warranty_registrationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$warranty_registrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface product_serialFieldRefs {
    readonly id: Prisma.FieldRef<"product_serial", 'String'>;
    readonly serial_code: Prisma.FieldRef<"product_serial", 'String'>;
    readonly batch_id: Prisma.FieldRef<"product_serial", 'String'>;
    readonly product_id: Prisma.FieldRef<"product_serial", 'String'>;
    readonly status: Prisma.FieldRef<"product_serial", 'String'>;
    readonly claimed_by: Prisma.FieldRef<"product_serial", 'String'>;
    readonly claimed_at: Prisma.FieldRef<"product_serial", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"product_serial", 'DateTime'>;
}
export type product_serialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_serialSelect<ExtArgs> | null;
    omit?: Prisma.product_serialOmit<ExtArgs> | null;
    include?: Prisma.product_serialInclude<ExtArgs> | null;
    where: Prisma.product_serialWhereUniqueInput;
};
export type product_serialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_serialSelect<ExtArgs> | null;
    omit?: Prisma.product_serialOmit<ExtArgs> | null;
    include?: Prisma.product_serialInclude<ExtArgs> | null;
    where: Prisma.product_serialWhereUniqueInput;
};
export type product_serialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_serialSelect<ExtArgs> | null;
    omit?: Prisma.product_serialOmit<ExtArgs> | null;
    include?: Prisma.product_serialInclude<ExtArgs> | null;
    where?: Prisma.product_serialWhereInput;
    orderBy?: Prisma.product_serialOrderByWithRelationInput | Prisma.product_serialOrderByWithRelationInput[];
    cursor?: Prisma.product_serialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_serialScalarFieldEnum | Prisma.Product_serialScalarFieldEnum[];
};
export type product_serialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_serialSelect<ExtArgs> | null;
    omit?: Prisma.product_serialOmit<ExtArgs> | null;
    include?: Prisma.product_serialInclude<ExtArgs> | null;
    where?: Prisma.product_serialWhereInput;
    orderBy?: Prisma.product_serialOrderByWithRelationInput | Prisma.product_serialOrderByWithRelationInput[];
    cursor?: Prisma.product_serialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_serialScalarFieldEnum | Prisma.Product_serialScalarFieldEnum[];
};
export type product_serialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_serialSelect<ExtArgs> | null;
    omit?: Prisma.product_serialOmit<ExtArgs> | null;
    include?: Prisma.product_serialInclude<ExtArgs> | null;
    where?: Prisma.product_serialWhereInput;
    orderBy?: Prisma.product_serialOrderByWithRelationInput | Prisma.product_serialOrderByWithRelationInput[];
    cursor?: Prisma.product_serialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_serialScalarFieldEnum | Prisma.Product_serialScalarFieldEnum[];
};
export type product_serialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_serialSelect<ExtArgs> | null;
    omit?: Prisma.product_serialOmit<ExtArgs> | null;
    include?: Prisma.product_serialInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_serialCreateInput, Prisma.product_serialUncheckedCreateInput>;
};
export type product_serialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.product_serialCreateManyInput | Prisma.product_serialCreateManyInput[];
    skipDuplicates?: boolean;
};
export type product_serialCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_serialSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.product_serialOmit<ExtArgs> | null;
    data: Prisma.product_serialCreateManyInput | Prisma.product_serialCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.product_serialIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type product_serialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_serialSelect<ExtArgs> | null;
    omit?: Prisma.product_serialOmit<ExtArgs> | null;
    include?: Prisma.product_serialInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_serialUpdateInput, Prisma.product_serialUncheckedUpdateInput>;
    where: Prisma.product_serialWhereUniqueInput;
};
export type product_serialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.product_serialUpdateManyMutationInput, Prisma.product_serialUncheckedUpdateManyInput>;
    where?: Prisma.product_serialWhereInput;
    limit?: number;
};
export type product_serialUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_serialSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.product_serialOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_serialUpdateManyMutationInput, Prisma.product_serialUncheckedUpdateManyInput>;
    where?: Prisma.product_serialWhereInput;
    limit?: number;
    include?: Prisma.product_serialIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type product_serialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_serialSelect<ExtArgs> | null;
    omit?: Prisma.product_serialOmit<ExtArgs> | null;
    include?: Prisma.product_serialInclude<ExtArgs> | null;
    where: Prisma.product_serialWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_serialCreateInput, Prisma.product_serialUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.product_serialUpdateInput, Prisma.product_serialUncheckedUpdateInput>;
};
export type product_serialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_serialSelect<ExtArgs> | null;
    omit?: Prisma.product_serialOmit<ExtArgs> | null;
    include?: Prisma.product_serialInclude<ExtArgs> | null;
    where: Prisma.product_serialWhereUniqueInput;
};
export type product_serialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_serialWhereInput;
    limit?: number;
};
export type product_serial$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
};
export type product_serial$serial_scanArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_scanSelect<ExtArgs> | null;
    omit?: Prisma.serial_scanOmit<ExtArgs> | null;
    include?: Prisma.serial_scanInclude<ExtArgs> | null;
    where?: Prisma.serial_scanWhereInput;
    orderBy?: Prisma.serial_scanOrderByWithRelationInput | Prisma.serial_scanOrderByWithRelationInput[];
    cursor?: Prisma.serial_scanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Serial_scanScalarFieldEnum | Prisma.Serial_scanScalarFieldEnum[];
};
export type product_serial$warranty_registrationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warranty_registrationSelect<ExtArgs> | null;
    omit?: Prisma.warranty_registrationOmit<ExtArgs> | null;
    include?: Prisma.warranty_registrationInclude<ExtArgs> | null;
    where?: Prisma.warranty_registrationWhereInput;
    orderBy?: Prisma.warranty_registrationOrderByWithRelationInput | Prisma.warranty_registrationOrderByWithRelationInput[];
    cursor?: Prisma.warranty_registrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Warranty_registrationScalarFieldEnum | Prisma.Warranty_registrationScalarFieldEnum[];
};
export type product_serialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_serialSelect<ExtArgs> | null;
    omit?: Prisma.product_serialOmit<ExtArgs> | null;
    include?: Prisma.product_serialInclude<ExtArgs> | null;
};
