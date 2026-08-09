import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type serial_scanModel = runtime.Types.Result.DefaultSelection<Prisma.$serial_scanPayload>;
export type AggregateSerial_scan = {
    _count: Serial_scanCountAggregateOutputType | null;
    _min: Serial_scanMinAggregateOutputType | null;
    _max: Serial_scanMaxAggregateOutputType | null;
};
export type Serial_scanMinAggregateOutputType = {
    id: string | null;
    serial_id: string | null;
    customer_id: string | null;
    scan_result: string | null;
    ip_address: string | null;
    user_agent: string | null;
    scanned_at: Date | null;
};
export type Serial_scanMaxAggregateOutputType = {
    id: string | null;
    serial_id: string | null;
    customer_id: string | null;
    scan_result: string | null;
    ip_address: string | null;
    user_agent: string | null;
    scanned_at: Date | null;
};
export type Serial_scanCountAggregateOutputType = {
    id: number;
    serial_id: number;
    customer_id: number;
    scan_result: number;
    ip_address: number;
    user_agent: number;
    scanned_at: number;
    _all: number;
};
export type Serial_scanMinAggregateInputType = {
    id?: true;
    serial_id?: true;
    customer_id?: true;
    scan_result?: true;
    ip_address?: true;
    user_agent?: true;
    scanned_at?: true;
};
export type Serial_scanMaxAggregateInputType = {
    id?: true;
    serial_id?: true;
    customer_id?: true;
    scan_result?: true;
    ip_address?: true;
    user_agent?: true;
    scanned_at?: true;
};
export type Serial_scanCountAggregateInputType = {
    id?: true;
    serial_id?: true;
    customer_id?: true;
    scan_result?: true;
    ip_address?: true;
    user_agent?: true;
    scanned_at?: true;
    _all?: true;
};
export type Serial_scanAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.serial_scanWhereInput;
    orderBy?: Prisma.serial_scanOrderByWithRelationInput | Prisma.serial_scanOrderByWithRelationInput[];
    cursor?: Prisma.serial_scanWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Serial_scanCountAggregateInputType;
    _min?: Serial_scanMinAggregateInputType;
    _max?: Serial_scanMaxAggregateInputType;
};
export type GetSerial_scanAggregateType<T extends Serial_scanAggregateArgs> = {
    [P in keyof T & keyof AggregateSerial_scan]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSerial_scan[P]> : Prisma.GetScalarType<T[P], AggregateSerial_scan[P]>;
};
export type serial_scanGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.serial_scanWhereInput;
    orderBy?: Prisma.serial_scanOrderByWithAggregationInput | Prisma.serial_scanOrderByWithAggregationInput[];
    by: Prisma.Serial_scanScalarFieldEnum[] | Prisma.Serial_scanScalarFieldEnum;
    having?: Prisma.serial_scanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Serial_scanCountAggregateInputType | true;
    _min?: Serial_scanMinAggregateInputType;
    _max?: Serial_scanMaxAggregateInputType;
};
export type Serial_scanGroupByOutputType = {
    id: string;
    serial_id: string;
    customer_id: string | null;
    scan_result: string;
    ip_address: string | null;
    user_agent: string | null;
    scanned_at: Date;
    _count: Serial_scanCountAggregateOutputType | null;
    _min: Serial_scanMinAggregateOutputType | null;
    _max: Serial_scanMaxAggregateOutputType | null;
};
export type GetSerial_scanGroupByPayload<T extends serial_scanGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Serial_scanGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Serial_scanGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Serial_scanGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Serial_scanGroupByOutputType[P]>;
}>>;
export type serial_scanWhereInput = {
    AND?: Prisma.serial_scanWhereInput | Prisma.serial_scanWhereInput[];
    OR?: Prisma.serial_scanWhereInput[];
    NOT?: Prisma.serial_scanWhereInput | Prisma.serial_scanWhereInput[];
    id?: Prisma.UuidFilter<"serial_scan"> | string;
    serial_id?: Prisma.UuidFilter<"serial_scan"> | string;
    customer_id?: Prisma.UuidNullableFilter<"serial_scan"> | string | null;
    scan_result?: Prisma.StringFilter<"serial_scan"> | string;
    ip_address?: Prisma.StringNullableFilter<"serial_scan"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"serial_scan"> | string | null;
    scanned_at?: Prisma.DateTimeFilter<"serial_scan"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    product_serial?: Prisma.XOR<Prisma.Product_serialScalarRelationFilter, Prisma.product_serialWhereInput>;
};
export type serial_scanOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    serial_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    scan_result?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_agent?: Prisma.SortOrderInput | Prisma.SortOrder;
    scanned_at?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    product_serial?: Prisma.product_serialOrderByWithRelationInput;
};
export type serial_scanWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.serial_scanWhereInput | Prisma.serial_scanWhereInput[];
    OR?: Prisma.serial_scanWhereInput[];
    NOT?: Prisma.serial_scanWhereInput | Prisma.serial_scanWhereInput[];
    serial_id?: Prisma.UuidFilter<"serial_scan"> | string;
    customer_id?: Prisma.UuidNullableFilter<"serial_scan"> | string | null;
    scan_result?: Prisma.StringFilter<"serial_scan"> | string;
    ip_address?: Prisma.StringNullableFilter<"serial_scan"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"serial_scan"> | string | null;
    scanned_at?: Prisma.DateTimeFilter<"serial_scan"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    product_serial?: Prisma.XOR<Prisma.Product_serialScalarRelationFilter, Prisma.product_serialWhereInput>;
}, "id">;
export type serial_scanOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    serial_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    scan_result?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_agent?: Prisma.SortOrderInput | Prisma.SortOrder;
    scanned_at?: Prisma.SortOrder;
    _count?: Prisma.serial_scanCountOrderByAggregateInput;
    _max?: Prisma.serial_scanMaxOrderByAggregateInput;
    _min?: Prisma.serial_scanMinOrderByAggregateInput;
};
export type serial_scanScalarWhereWithAggregatesInput = {
    AND?: Prisma.serial_scanScalarWhereWithAggregatesInput | Prisma.serial_scanScalarWhereWithAggregatesInput[];
    OR?: Prisma.serial_scanScalarWhereWithAggregatesInput[];
    NOT?: Prisma.serial_scanScalarWhereWithAggregatesInput | Prisma.serial_scanScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"serial_scan"> | string;
    serial_id?: Prisma.UuidWithAggregatesFilter<"serial_scan"> | string;
    customer_id?: Prisma.UuidNullableWithAggregatesFilter<"serial_scan"> | string | null;
    scan_result?: Prisma.StringWithAggregatesFilter<"serial_scan"> | string;
    ip_address?: Prisma.StringNullableWithAggregatesFilter<"serial_scan"> | string | null;
    user_agent?: Prisma.StringNullableWithAggregatesFilter<"serial_scan"> | string | null;
    scanned_at?: Prisma.DateTimeWithAggregatesFilter<"serial_scan"> | Date | string;
};
export type serial_scanCreateInput = {
    id?: string;
    scan_result: string;
    ip_address?: string | null;
    user_agent?: string | null;
    scanned_at?: Date | string;
    customer?: Prisma.CustomerCreateNestedOneWithoutSerial_scanInput;
    product_serial: Prisma.product_serialCreateNestedOneWithoutSerial_scanInput;
};
export type serial_scanUncheckedCreateInput = {
    id?: string;
    serial_id: string;
    customer_id?: string | null;
    scan_result: string;
    ip_address?: string | null;
    user_agent?: string | null;
    scanned_at?: Date | string;
};
export type serial_scanUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scan_result?: Prisma.StringFieldUpdateOperationsInput | string;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneWithoutSerial_scanNestedInput;
    product_serial?: Prisma.product_serialUpdateOneRequiredWithoutSerial_scanNestedInput;
};
export type serial_scanUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scan_result?: Prisma.StringFieldUpdateOperationsInput | string;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type serial_scanCreateManyInput = {
    id?: string;
    serial_id: string;
    customer_id?: string | null;
    scan_result: string;
    ip_address?: string | null;
    user_agent?: string | null;
    scanned_at?: Date | string;
};
export type serial_scanUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scan_result?: Prisma.StringFieldUpdateOperationsInput | string;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type serial_scanUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scan_result?: Prisma.StringFieldUpdateOperationsInput | string;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Serial_scanListRelationFilter = {
    every?: Prisma.serial_scanWhereInput;
    some?: Prisma.serial_scanWhereInput;
    none?: Prisma.serial_scanWhereInput;
};
export type serial_scanOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type serial_scanCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serial_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    scan_result?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    scanned_at?: Prisma.SortOrder;
};
export type serial_scanMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serial_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    scan_result?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    scanned_at?: Prisma.SortOrder;
};
export type serial_scanMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serial_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    scan_result?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    user_agent?: Prisma.SortOrder;
    scanned_at?: Prisma.SortOrder;
};
export type serial_scanCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.serial_scanCreateWithoutCustomerInput, Prisma.serial_scanUncheckedCreateWithoutCustomerInput> | Prisma.serial_scanCreateWithoutCustomerInput[] | Prisma.serial_scanUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.serial_scanCreateOrConnectWithoutCustomerInput | Prisma.serial_scanCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.serial_scanCreateManyCustomerInputEnvelope;
    connect?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
};
export type serial_scanUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.serial_scanCreateWithoutCustomerInput, Prisma.serial_scanUncheckedCreateWithoutCustomerInput> | Prisma.serial_scanCreateWithoutCustomerInput[] | Prisma.serial_scanUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.serial_scanCreateOrConnectWithoutCustomerInput | Prisma.serial_scanCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.serial_scanCreateManyCustomerInputEnvelope;
    connect?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
};
export type serial_scanUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.serial_scanCreateWithoutCustomerInput, Prisma.serial_scanUncheckedCreateWithoutCustomerInput> | Prisma.serial_scanCreateWithoutCustomerInput[] | Prisma.serial_scanUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.serial_scanCreateOrConnectWithoutCustomerInput | Prisma.serial_scanCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.serial_scanUpsertWithWhereUniqueWithoutCustomerInput | Prisma.serial_scanUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.serial_scanCreateManyCustomerInputEnvelope;
    set?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    disconnect?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    delete?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    connect?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    update?: Prisma.serial_scanUpdateWithWhereUniqueWithoutCustomerInput | Prisma.serial_scanUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.serial_scanUpdateManyWithWhereWithoutCustomerInput | Prisma.serial_scanUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.serial_scanScalarWhereInput | Prisma.serial_scanScalarWhereInput[];
};
export type serial_scanUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.serial_scanCreateWithoutCustomerInput, Prisma.serial_scanUncheckedCreateWithoutCustomerInput> | Prisma.serial_scanCreateWithoutCustomerInput[] | Prisma.serial_scanUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.serial_scanCreateOrConnectWithoutCustomerInput | Prisma.serial_scanCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.serial_scanUpsertWithWhereUniqueWithoutCustomerInput | Prisma.serial_scanUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.serial_scanCreateManyCustomerInputEnvelope;
    set?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    disconnect?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    delete?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    connect?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    update?: Prisma.serial_scanUpdateWithWhereUniqueWithoutCustomerInput | Prisma.serial_scanUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.serial_scanUpdateManyWithWhereWithoutCustomerInput | Prisma.serial_scanUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.serial_scanScalarWhereInput | Prisma.serial_scanScalarWhereInput[];
};
export type serial_scanCreateNestedManyWithoutProduct_serialInput = {
    create?: Prisma.XOR<Prisma.serial_scanCreateWithoutProduct_serialInput, Prisma.serial_scanUncheckedCreateWithoutProduct_serialInput> | Prisma.serial_scanCreateWithoutProduct_serialInput[] | Prisma.serial_scanUncheckedCreateWithoutProduct_serialInput[];
    connectOrCreate?: Prisma.serial_scanCreateOrConnectWithoutProduct_serialInput | Prisma.serial_scanCreateOrConnectWithoutProduct_serialInput[];
    createMany?: Prisma.serial_scanCreateManyProduct_serialInputEnvelope;
    connect?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
};
export type serial_scanUncheckedCreateNestedManyWithoutProduct_serialInput = {
    create?: Prisma.XOR<Prisma.serial_scanCreateWithoutProduct_serialInput, Prisma.serial_scanUncheckedCreateWithoutProduct_serialInput> | Prisma.serial_scanCreateWithoutProduct_serialInput[] | Prisma.serial_scanUncheckedCreateWithoutProduct_serialInput[];
    connectOrCreate?: Prisma.serial_scanCreateOrConnectWithoutProduct_serialInput | Prisma.serial_scanCreateOrConnectWithoutProduct_serialInput[];
    createMany?: Prisma.serial_scanCreateManyProduct_serialInputEnvelope;
    connect?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
};
export type serial_scanUpdateManyWithoutProduct_serialNestedInput = {
    create?: Prisma.XOR<Prisma.serial_scanCreateWithoutProduct_serialInput, Prisma.serial_scanUncheckedCreateWithoutProduct_serialInput> | Prisma.serial_scanCreateWithoutProduct_serialInput[] | Prisma.serial_scanUncheckedCreateWithoutProduct_serialInput[];
    connectOrCreate?: Prisma.serial_scanCreateOrConnectWithoutProduct_serialInput | Prisma.serial_scanCreateOrConnectWithoutProduct_serialInput[];
    upsert?: Prisma.serial_scanUpsertWithWhereUniqueWithoutProduct_serialInput | Prisma.serial_scanUpsertWithWhereUniqueWithoutProduct_serialInput[];
    createMany?: Prisma.serial_scanCreateManyProduct_serialInputEnvelope;
    set?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    disconnect?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    delete?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    connect?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    update?: Prisma.serial_scanUpdateWithWhereUniqueWithoutProduct_serialInput | Prisma.serial_scanUpdateWithWhereUniqueWithoutProduct_serialInput[];
    updateMany?: Prisma.serial_scanUpdateManyWithWhereWithoutProduct_serialInput | Prisma.serial_scanUpdateManyWithWhereWithoutProduct_serialInput[];
    deleteMany?: Prisma.serial_scanScalarWhereInput | Prisma.serial_scanScalarWhereInput[];
};
export type serial_scanUncheckedUpdateManyWithoutProduct_serialNestedInput = {
    create?: Prisma.XOR<Prisma.serial_scanCreateWithoutProduct_serialInput, Prisma.serial_scanUncheckedCreateWithoutProduct_serialInput> | Prisma.serial_scanCreateWithoutProduct_serialInput[] | Prisma.serial_scanUncheckedCreateWithoutProduct_serialInput[];
    connectOrCreate?: Prisma.serial_scanCreateOrConnectWithoutProduct_serialInput | Prisma.serial_scanCreateOrConnectWithoutProduct_serialInput[];
    upsert?: Prisma.serial_scanUpsertWithWhereUniqueWithoutProduct_serialInput | Prisma.serial_scanUpsertWithWhereUniqueWithoutProduct_serialInput[];
    createMany?: Prisma.serial_scanCreateManyProduct_serialInputEnvelope;
    set?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    disconnect?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    delete?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    connect?: Prisma.serial_scanWhereUniqueInput | Prisma.serial_scanWhereUniqueInput[];
    update?: Prisma.serial_scanUpdateWithWhereUniqueWithoutProduct_serialInput | Prisma.serial_scanUpdateWithWhereUniqueWithoutProduct_serialInput[];
    updateMany?: Prisma.serial_scanUpdateManyWithWhereWithoutProduct_serialInput | Prisma.serial_scanUpdateManyWithWhereWithoutProduct_serialInput[];
    deleteMany?: Prisma.serial_scanScalarWhereInput | Prisma.serial_scanScalarWhereInput[];
};
export type serial_scanCreateWithoutCustomerInput = {
    id?: string;
    scan_result: string;
    ip_address?: string | null;
    user_agent?: string | null;
    scanned_at?: Date | string;
    product_serial: Prisma.product_serialCreateNestedOneWithoutSerial_scanInput;
};
export type serial_scanUncheckedCreateWithoutCustomerInput = {
    id?: string;
    serial_id: string;
    scan_result: string;
    ip_address?: string | null;
    user_agent?: string | null;
    scanned_at?: Date | string;
};
export type serial_scanCreateOrConnectWithoutCustomerInput = {
    where: Prisma.serial_scanWhereUniqueInput;
    create: Prisma.XOR<Prisma.serial_scanCreateWithoutCustomerInput, Prisma.serial_scanUncheckedCreateWithoutCustomerInput>;
};
export type serial_scanCreateManyCustomerInputEnvelope = {
    data: Prisma.serial_scanCreateManyCustomerInput | Prisma.serial_scanCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type serial_scanUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.serial_scanWhereUniqueInput;
    update: Prisma.XOR<Prisma.serial_scanUpdateWithoutCustomerInput, Prisma.serial_scanUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.serial_scanCreateWithoutCustomerInput, Prisma.serial_scanUncheckedCreateWithoutCustomerInput>;
};
export type serial_scanUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.serial_scanWhereUniqueInput;
    data: Prisma.XOR<Prisma.serial_scanUpdateWithoutCustomerInput, Prisma.serial_scanUncheckedUpdateWithoutCustomerInput>;
};
export type serial_scanUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.serial_scanScalarWhereInput;
    data: Prisma.XOR<Prisma.serial_scanUpdateManyMutationInput, Prisma.serial_scanUncheckedUpdateManyWithoutCustomerInput>;
};
export type serial_scanScalarWhereInput = {
    AND?: Prisma.serial_scanScalarWhereInput | Prisma.serial_scanScalarWhereInput[];
    OR?: Prisma.serial_scanScalarWhereInput[];
    NOT?: Prisma.serial_scanScalarWhereInput | Prisma.serial_scanScalarWhereInput[];
    id?: Prisma.UuidFilter<"serial_scan"> | string;
    serial_id?: Prisma.UuidFilter<"serial_scan"> | string;
    customer_id?: Prisma.UuidNullableFilter<"serial_scan"> | string | null;
    scan_result?: Prisma.StringFilter<"serial_scan"> | string;
    ip_address?: Prisma.StringNullableFilter<"serial_scan"> | string | null;
    user_agent?: Prisma.StringNullableFilter<"serial_scan"> | string | null;
    scanned_at?: Prisma.DateTimeFilter<"serial_scan"> | Date | string;
};
export type serial_scanCreateWithoutProduct_serialInput = {
    id?: string;
    scan_result: string;
    ip_address?: string | null;
    user_agent?: string | null;
    scanned_at?: Date | string;
    customer?: Prisma.CustomerCreateNestedOneWithoutSerial_scanInput;
};
export type serial_scanUncheckedCreateWithoutProduct_serialInput = {
    id?: string;
    customer_id?: string | null;
    scan_result: string;
    ip_address?: string | null;
    user_agent?: string | null;
    scanned_at?: Date | string;
};
export type serial_scanCreateOrConnectWithoutProduct_serialInput = {
    where: Prisma.serial_scanWhereUniqueInput;
    create: Prisma.XOR<Prisma.serial_scanCreateWithoutProduct_serialInput, Prisma.serial_scanUncheckedCreateWithoutProduct_serialInput>;
};
export type serial_scanCreateManyProduct_serialInputEnvelope = {
    data: Prisma.serial_scanCreateManyProduct_serialInput | Prisma.serial_scanCreateManyProduct_serialInput[];
    skipDuplicates?: boolean;
};
export type serial_scanUpsertWithWhereUniqueWithoutProduct_serialInput = {
    where: Prisma.serial_scanWhereUniqueInput;
    update: Prisma.XOR<Prisma.serial_scanUpdateWithoutProduct_serialInput, Prisma.serial_scanUncheckedUpdateWithoutProduct_serialInput>;
    create: Prisma.XOR<Prisma.serial_scanCreateWithoutProduct_serialInput, Prisma.serial_scanUncheckedCreateWithoutProduct_serialInput>;
};
export type serial_scanUpdateWithWhereUniqueWithoutProduct_serialInput = {
    where: Prisma.serial_scanWhereUniqueInput;
    data: Prisma.XOR<Prisma.serial_scanUpdateWithoutProduct_serialInput, Prisma.serial_scanUncheckedUpdateWithoutProduct_serialInput>;
};
export type serial_scanUpdateManyWithWhereWithoutProduct_serialInput = {
    where: Prisma.serial_scanScalarWhereInput;
    data: Prisma.XOR<Prisma.serial_scanUpdateManyMutationInput, Prisma.serial_scanUncheckedUpdateManyWithoutProduct_serialInput>;
};
export type serial_scanCreateManyCustomerInput = {
    id?: string;
    serial_id: string;
    scan_result: string;
    ip_address?: string | null;
    user_agent?: string | null;
    scanned_at?: Date | string;
};
export type serial_scanUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scan_result?: Prisma.StringFieldUpdateOperationsInput | string;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_serial?: Prisma.product_serialUpdateOneRequiredWithoutSerial_scanNestedInput;
};
export type serial_scanUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scan_result?: Prisma.StringFieldUpdateOperationsInput | string;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type serial_scanUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_id?: Prisma.StringFieldUpdateOperationsInput | string;
    scan_result?: Prisma.StringFieldUpdateOperationsInput | string;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type serial_scanCreateManyProduct_serialInput = {
    id?: string;
    customer_id?: string | null;
    scan_result: string;
    ip_address?: string | null;
    user_agent?: string | null;
    scanned_at?: Date | string;
};
export type serial_scanUpdateWithoutProduct_serialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scan_result?: Prisma.StringFieldUpdateOperationsInput | string;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneWithoutSerial_scanNestedInput;
};
export type serial_scanUncheckedUpdateWithoutProduct_serialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scan_result?: Prisma.StringFieldUpdateOperationsInput | string;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type serial_scanUncheckedUpdateManyWithoutProduct_serialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scan_result?: Prisma.StringFieldUpdateOperationsInput | string;
    ip_address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_agent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scanned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type serial_scanSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serial_id?: boolean;
    customer_id?: boolean;
    scan_result?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    scanned_at?: boolean;
    customer?: boolean | Prisma.serial_scan$customerArgs<ExtArgs>;
    product_serial?: boolean | Prisma.product_serialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serial_scan"]>;
export type serial_scanSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serial_id?: boolean;
    customer_id?: boolean;
    scan_result?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    scanned_at?: boolean;
    customer?: boolean | Prisma.serial_scan$customerArgs<ExtArgs>;
    product_serial?: boolean | Prisma.product_serialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serial_scan"]>;
export type serial_scanSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serial_id?: boolean;
    customer_id?: boolean;
    scan_result?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    scanned_at?: boolean;
    customer?: boolean | Prisma.serial_scan$customerArgs<ExtArgs>;
    product_serial?: boolean | Prisma.product_serialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serial_scan"]>;
export type serial_scanSelectScalar = {
    id?: boolean;
    serial_id?: boolean;
    customer_id?: boolean;
    scan_result?: boolean;
    ip_address?: boolean;
    user_agent?: boolean;
    scanned_at?: boolean;
};
export type serial_scanOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "serial_id" | "customer_id" | "scan_result" | "ip_address" | "user_agent" | "scanned_at", ExtArgs["result"]["serial_scan"]>;
export type serial_scanInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.serial_scan$customerArgs<ExtArgs>;
    product_serial?: boolean | Prisma.product_serialDefaultArgs<ExtArgs>;
};
export type serial_scanIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.serial_scan$customerArgs<ExtArgs>;
    product_serial?: boolean | Prisma.product_serialDefaultArgs<ExtArgs>;
};
export type serial_scanIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.serial_scan$customerArgs<ExtArgs>;
    product_serial?: boolean | Prisma.product_serialDefaultArgs<ExtArgs>;
};
export type $serial_scanPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "serial_scan";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs> | null;
        product_serial: Prisma.$product_serialPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        serial_id: string;
        customer_id: string | null;
        scan_result: string;
        ip_address: string | null;
        user_agent: string | null;
        scanned_at: Date;
    }, ExtArgs["result"]["serial_scan"]>;
    composites: {};
};
export type serial_scanGetPayload<S extends boolean | null | undefined | serial_scanDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$serial_scanPayload, S>;
export type serial_scanCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<serial_scanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Serial_scanCountAggregateInputType | true;
};
export interface serial_scanDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['serial_scan'];
        meta: {
            name: 'serial_scan';
        };
    };
    findUnique<T extends serial_scanFindUniqueArgs>(args: Prisma.SelectSubset<T, serial_scanFindUniqueArgs<ExtArgs>>): Prisma.Prisma__serial_scanClient<runtime.Types.Result.GetResult<Prisma.$serial_scanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends serial_scanFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, serial_scanFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__serial_scanClient<runtime.Types.Result.GetResult<Prisma.$serial_scanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends serial_scanFindFirstArgs>(args?: Prisma.SelectSubset<T, serial_scanFindFirstArgs<ExtArgs>>): Prisma.Prisma__serial_scanClient<runtime.Types.Result.GetResult<Prisma.$serial_scanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends serial_scanFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, serial_scanFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__serial_scanClient<runtime.Types.Result.GetResult<Prisma.$serial_scanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends serial_scanFindManyArgs>(args?: Prisma.SelectSubset<T, serial_scanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$serial_scanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends serial_scanCreateArgs>(args: Prisma.SelectSubset<T, serial_scanCreateArgs<ExtArgs>>): Prisma.Prisma__serial_scanClient<runtime.Types.Result.GetResult<Prisma.$serial_scanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends serial_scanCreateManyArgs>(args?: Prisma.SelectSubset<T, serial_scanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends serial_scanCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, serial_scanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$serial_scanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends serial_scanDeleteArgs>(args: Prisma.SelectSubset<T, serial_scanDeleteArgs<ExtArgs>>): Prisma.Prisma__serial_scanClient<runtime.Types.Result.GetResult<Prisma.$serial_scanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends serial_scanUpdateArgs>(args: Prisma.SelectSubset<T, serial_scanUpdateArgs<ExtArgs>>): Prisma.Prisma__serial_scanClient<runtime.Types.Result.GetResult<Prisma.$serial_scanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends serial_scanDeleteManyArgs>(args?: Prisma.SelectSubset<T, serial_scanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends serial_scanUpdateManyArgs>(args: Prisma.SelectSubset<T, serial_scanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends serial_scanUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, serial_scanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$serial_scanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends serial_scanUpsertArgs>(args: Prisma.SelectSubset<T, serial_scanUpsertArgs<ExtArgs>>): Prisma.Prisma__serial_scanClient<runtime.Types.Result.GetResult<Prisma.$serial_scanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends serial_scanCountArgs>(args?: Prisma.Subset<T, serial_scanCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Serial_scanCountAggregateOutputType> : number>;
    aggregate<T extends Serial_scanAggregateArgs>(args: Prisma.Subset<T, Serial_scanAggregateArgs>): Prisma.PrismaPromise<GetSerial_scanAggregateType<T>>;
    groupBy<T extends serial_scanGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: serial_scanGroupByArgs['orderBy'];
    } : {
        orderBy?: serial_scanGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, serial_scanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSerial_scanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: serial_scanFieldRefs;
}
export interface Prisma__serial_scanClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.serial_scan$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.serial_scan$customerArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    product_serial<T extends Prisma.product_serialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.product_serialDefaultArgs<ExtArgs>>): Prisma.Prisma__product_serialClient<runtime.Types.Result.GetResult<Prisma.$product_serialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface serial_scanFieldRefs {
    readonly id: Prisma.FieldRef<"serial_scan", 'String'>;
    readonly serial_id: Prisma.FieldRef<"serial_scan", 'String'>;
    readonly customer_id: Prisma.FieldRef<"serial_scan", 'String'>;
    readonly scan_result: Prisma.FieldRef<"serial_scan", 'String'>;
    readonly ip_address: Prisma.FieldRef<"serial_scan", 'String'>;
    readonly user_agent: Prisma.FieldRef<"serial_scan", 'String'>;
    readonly scanned_at: Prisma.FieldRef<"serial_scan", 'DateTime'>;
}
export type serial_scanFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_scanSelect<ExtArgs> | null;
    omit?: Prisma.serial_scanOmit<ExtArgs> | null;
    include?: Prisma.serial_scanInclude<ExtArgs> | null;
    where: Prisma.serial_scanWhereUniqueInput;
};
export type serial_scanFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_scanSelect<ExtArgs> | null;
    omit?: Prisma.serial_scanOmit<ExtArgs> | null;
    include?: Prisma.serial_scanInclude<ExtArgs> | null;
    where: Prisma.serial_scanWhereUniqueInput;
};
export type serial_scanFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type serial_scanFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type serial_scanFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type serial_scanCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_scanSelect<ExtArgs> | null;
    omit?: Prisma.serial_scanOmit<ExtArgs> | null;
    include?: Prisma.serial_scanInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.serial_scanCreateInput, Prisma.serial_scanUncheckedCreateInput>;
};
export type serial_scanCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.serial_scanCreateManyInput | Prisma.serial_scanCreateManyInput[];
    skipDuplicates?: boolean;
};
export type serial_scanCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_scanSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.serial_scanOmit<ExtArgs> | null;
    data: Prisma.serial_scanCreateManyInput | Prisma.serial_scanCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.serial_scanIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type serial_scanUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_scanSelect<ExtArgs> | null;
    omit?: Prisma.serial_scanOmit<ExtArgs> | null;
    include?: Prisma.serial_scanInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.serial_scanUpdateInput, Prisma.serial_scanUncheckedUpdateInput>;
    where: Prisma.serial_scanWhereUniqueInput;
};
export type serial_scanUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.serial_scanUpdateManyMutationInput, Prisma.serial_scanUncheckedUpdateManyInput>;
    where?: Prisma.serial_scanWhereInput;
    limit?: number;
};
export type serial_scanUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_scanSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.serial_scanOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.serial_scanUpdateManyMutationInput, Prisma.serial_scanUncheckedUpdateManyInput>;
    where?: Prisma.serial_scanWhereInput;
    limit?: number;
    include?: Prisma.serial_scanIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type serial_scanUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_scanSelect<ExtArgs> | null;
    omit?: Prisma.serial_scanOmit<ExtArgs> | null;
    include?: Prisma.serial_scanInclude<ExtArgs> | null;
    where: Prisma.serial_scanWhereUniqueInput;
    create: Prisma.XOR<Prisma.serial_scanCreateInput, Prisma.serial_scanUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.serial_scanUpdateInput, Prisma.serial_scanUncheckedUpdateInput>;
};
export type serial_scanDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_scanSelect<ExtArgs> | null;
    omit?: Prisma.serial_scanOmit<ExtArgs> | null;
    include?: Prisma.serial_scanInclude<ExtArgs> | null;
    where: Prisma.serial_scanWhereUniqueInput;
};
export type serial_scanDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.serial_scanWhereInput;
    limit?: number;
};
export type serial_scan$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
};
export type serial_scanDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_scanSelect<ExtArgs> | null;
    omit?: Prisma.serial_scanOmit<ExtArgs> | null;
    include?: Prisma.serial_scanInclude<ExtArgs> | null;
};
