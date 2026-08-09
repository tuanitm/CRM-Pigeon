import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type warranty_registrationModel = runtime.Types.Result.DefaultSelection<Prisma.$warranty_registrationPayload>;
export type AggregateWarranty_registration = {
    _count: Warranty_registrationCountAggregateOutputType | null;
    _min: Warranty_registrationMinAggregateOutputType | null;
    _max: Warranty_registrationMaxAggregateOutputType | null;
};
export type Warranty_registrationMinAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    product_id: string | null;
    serial_id: string | null;
    purchase_date: Date | null;
    warranty_start: Date | null;
    warranty_end: Date | null;
    status: string | null;
    created_at: Date | null;
};
export type Warranty_registrationMaxAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    product_id: string | null;
    serial_id: string | null;
    purchase_date: Date | null;
    warranty_start: Date | null;
    warranty_end: Date | null;
    status: string | null;
    created_at: Date | null;
};
export type Warranty_registrationCountAggregateOutputType = {
    id: number;
    customer_id: number;
    product_id: number;
    serial_id: number;
    purchase_date: number;
    warranty_start: number;
    warranty_end: number;
    status: number;
    created_at: number;
    _all: number;
};
export type Warranty_registrationMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    product_id?: true;
    serial_id?: true;
    purchase_date?: true;
    warranty_start?: true;
    warranty_end?: true;
    status?: true;
    created_at?: true;
};
export type Warranty_registrationMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    product_id?: true;
    serial_id?: true;
    purchase_date?: true;
    warranty_start?: true;
    warranty_end?: true;
    status?: true;
    created_at?: true;
};
export type Warranty_registrationCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    product_id?: true;
    serial_id?: true;
    purchase_date?: true;
    warranty_start?: true;
    warranty_end?: true;
    status?: true;
    created_at?: true;
    _all?: true;
};
export type Warranty_registrationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.warranty_registrationWhereInput;
    orderBy?: Prisma.warranty_registrationOrderByWithRelationInput | Prisma.warranty_registrationOrderByWithRelationInput[];
    cursor?: Prisma.warranty_registrationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Warranty_registrationCountAggregateInputType;
    _min?: Warranty_registrationMinAggregateInputType;
    _max?: Warranty_registrationMaxAggregateInputType;
};
export type GetWarranty_registrationAggregateType<T extends Warranty_registrationAggregateArgs> = {
    [P in keyof T & keyof AggregateWarranty_registration]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWarranty_registration[P]> : Prisma.GetScalarType<T[P], AggregateWarranty_registration[P]>;
};
export type warranty_registrationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.warranty_registrationWhereInput;
    orderBy?: Prisma.warranty_registrationOrderByWithAggregationInput | Prisma.warranty_registrationOrderByWithAggregationInput[];
    by: Prisma.Warranty_registrationScalarFieldEnum[] | Prisma.Warranty_registrationScalarFieldEnum;
    having?: Prisma.warranty_registrationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Warranty_registrationCountAggregateInputType | true;
    _min?: Warranty_registrationMinAggregateInputType;
    _max?: Warranty_registrationMaxAggregateInputType;
};
export type Warranty_registrationGroupByOutputType = {
    id: string;
    customer_id: string;
    product_id: string;
    serial_id: string | null;
    purchase_date: Date | null;
    warranty_start: Date;
    warranty_end: Date;
    status: string;
    created_at: Date;
    _count: Warranty_registrationCountAggregateOutputType | null;
    _min: Warranty_registrationMinAggregateOutputType | null;
    _max: Warranty_registrationMaxAggregateOutputType | null;
};
export type GetWarranty_registrationGroupByPayload<T extends warranty_registrationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Warranty_registrationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Warranty_registrationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Warranty_registrationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Warranty_registrationGroupByOutputType[P]>;
}>>;
export type warranty_registrationWhereInput = {
    AND?: Prisma.warranty_registrationWhereInput | Prisma.warranty_registrationWhereInput[];
    OR?: Prisma.warranty_registrationWhereInput[];
    NOT?: Prisma.warranty_registrationWhereInput | Prisma.warranty_registrationWhereInput[];
    id?: Prisma.UuidFilter<"warranty_registration"> | string;
    customer_id?: Prisma.UuidFilter<"warranty_registration"> | string;
    product_id?: Prisma.UuidFilter<"warranty_registration"> | string;
    serial_id?: Prisma.UuidNullableFilter<"warranty_registration"> | string | null;
    purchase_date?: Prisma.DateTimeNullableFilter<"warranty_registration"> | Date | string | null;
    warranty_start?: Prisma.DateTimeFilter<"warranty_registration"> | Date | string;
    warranty_end?: Prisma.DateTimeFilter<"warranty_registration"> | Date | string;
    status?: Prisma.StringFilter<"warranty_registration"> | string;
    created_at?: Prisma.DateTimeFilter<"warranty_registration"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    product_serial?: Prisma.XOR<Prisma.Product_serialNullableScalarRelationFilter, Prisma.product_serialWhereInput> | null;
};
export type warranty_registrationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    serial_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchase_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    warranty_start?: Prisma.SortOrder;
    warranty_end?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
    product_serial?: Prisma.product_serialOrderByWithRelationInput;
};
export type warranty_registrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.warranty_registrationWhereInput | Prisma.warranty_registrationWhereInput[];
    OR?: Prisma.warranty_registrationWhereInput[];
    NOT?: Prisma.warranty_registrationWhereInput | Prisma.warranty_registrationWhereInput[];
    customer_id?: Prisma.UuidFilter<"warranty_registration"> | string;
    product_id?: Prisma.UuidFilter<"warranty_registration"> | string;
    serial_id?: Prisma.UuidNullableFilter<"warranty_registration"> | string | null;
    purchase_date?: Prisma.DateTimeNullableFilter<"warranty_registration"> | Date | string | null;
    warranty_start?: Prisma.DateTimeFilter<"warranty_registration"> | Date | string;
    warranty_end?: Prisma.DateTimeFilter<"warranty_registration"> | Date | string;
    status?: Prisma.StringFilter<"warranty_registration"> | string;
    created_at?: Prisma.DateTimeFilter<"warranty_registration"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    product_serial?: Prisma.XOR<Prisma.Product_serialNullableScalarRelationFilter, Prisma.product_serialWhereInput> | null;
}, "id">;
export type warranty_registrationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    serial_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    purchase_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    warranty_start?: Prisma.SortOrder;
    warranty_end?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.warranty_registrationCountOrderByAggregateInput;
    _max?: Prisma.warranty_registrationMaxOrderByAggregateInput;
    _min?: Prisma.warranty_registrationMinOrderByAggregateInput;
};
export type warranty_registrationScalarWhereWithAggregatesInput = {
    AND?: Prisma.warranty_registrationScalarWhereWithAggregatesInput | Prisma.warranty_registrationScalarWhereWithAggregatesInput[];
    OR?: Prisma.warranty_registrationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.warranty_registrationScalarWhereWithAggregatesInput | Prisma.warranty_registrationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"warranty_registration"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"warranty_registration"> | string;
    product_id?: Prisma.UuidWithAggregatesFilter<"warranty_registration"> | string;
    serial_id?: Prisma.UuidNullableWithAggregatesFilter<"warranty_registration"> | string | null;
    purchase_date?: Prisma.DateTimeNullableWithAggregatesFilter<"warranty_registration"> | Date | string | null;
    warranty_start?: Prisma.DateTimeWithAggregatesFilter<"warranty_registration"> | Date | string;
    warranty_end?: Prisma.DateTimeWithAggregatesFilter<"warranty_registration"> | Date | string;
    status?: Prisma.StringWithAggregatesFilter<"warranty_registration"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"warranty_registration"> | Date | string;
};
export type warranty_registrationCreateInput = {
    id?: string;
    purchase_date?: Date | string | null;
    warranty_start: Date | string;
    warranty_end: Date | string;
    status?: string;
    created_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutWarranty_registrationInput;
    product: Prisma.ProductCreateNestedOneWithoutWarranty_registrationInput;
    product_serial?: Prisma.product_serialCreateNestedOneWithoutWarranty_registrationInput;
};
export type warranty_registrationUncheckedCreateInput = {
    id?: string;
    customer_id: string;
    product_id: string;
    serial_id?: string | null;
    purchase_date?: Date | string | null;
    warranty_start: Date | string;
    warranty_end: Date | string;
    status?: string;
    created_at?: Date | string;
};
export type warranty_registrationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutWarranty_registrationNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutWarranty_registrationNestedInput;
    product_serial?: Prisma.product_serialUpdateOneWithoutWarranty_registrationNestedInput;
};
export type warranty_registrationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchase_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type warranty_registrationCreateManyInput = {
    id?: string;
    customer_id: string;
    product_id: string;
    serial_id?: string | null;
    purchase_date?: Date | string | null;
    warranty_start: Date | string;
    warranty_end: Date | string;
    status?: string;
    created_at?: Date | string;
};
export type warranty_registrationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type warranty_registrationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchase_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Warranty_registrationListRelationFilter = {
    every?: Prisma.warranty_registrationWhereInput;
    some?: Prisma.warranty_registrationWhereInput;
    none?: Prisma.warranty_registrationWhereInput;
};
export type warranty_registrationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type warranty_registrationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    serial_id?: Prisma.SortOrder;
    purchase_date?: Prisma.SortOrder;
    warranty_start?: Prisma.SortOrder;
    warranty_end?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type warranty_registrationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    serial_id?: Prisma.SortOrder;
    purchase_date?: Prisma.SortOrder;
    warranty_start?: Prisma.SortOrder;
    warranty_end?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type warranty_registrationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    serial_id?: Prisma.SortOrder;
    purchase_date?: Prisma.SortOrder;
    warranty_start?: Prisma.SortOrder;
    warranty_end?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type warranty_registrationCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.warranty_registrationCreateWithoutCustomerInput, Prisma.warranty_registrationUncheckedCreateWithoutCustomerInput> | Prisma.warranty_registrationCreateWithoutCustomerInput[] | Prisma.warranty_registrationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.warranty_registrationCreateOrConnectWithoutCustomerInput | Prisma.warranty_registrationCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.warranty_registrationCreateManyCustomerInputEnvelope;
    connect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
};
export type warranty_registrationUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.warranty_registrationCreateWithoutCustomerInput, Prisma.warranty_registrationUncheckedCreateWithoutCustomerInput> | Prisma.warranty_registrationCreateWithoutCustomerInput[] | Prisma.warranty_registrationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.warranty_registrationCreateOrConnectWithoutCustomerInput | Prisma.warranty_registrationCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.warranty_registrationCreateManyCustomerInputEnvelope;
    connect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
};
export type warranty_registrationUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.warranty_registrationCreateWithoutCustomerInput, Prisma.warranty_registrationUncheckedCreateWithoutCustomerInput> | Prisma.warranty_registrationCreateWithoutCustomerInput[] | Prisma.warranty_registrationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.warranty_registrationCreateOrConnectWithoutCustomerInput | Prisma.warranty_registrationCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.warranty_registrationUpsertWithWhereUniqueWithoutCustomerInput | Prisma.warranty_registrationUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.warranty_registrationCreateManyCustomerInputEnvelope;
    set?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    disconnect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    delete?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    connect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    update?: Prisma.warranty_registrationUpdateWithWhereUniqueWithoutCustomerInput | Prisma.warranty_registrationUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.warranty_registrationUpdateManyWithWhereWithoutCustomerInput | Prisma.warranty_registrationUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.warranty_registrationScalarWhereInput | Prisma.warranty_registrationScalarWhereInput[];
};
export type warranty_registrationUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.warranty_registrationCreateWithoutCustomerInput, Prisma.warranty_registrationUncheckedCreateWithoutCustomerInput> | Prisma.warranty_registrationCreateWithoutCustomerInput[] | Prisma.warranty_registrationUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.warranty_registrationCreateOrConnectWithoutCustomerInput | Prisma.warranty_registrationCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.warranty_registrationUpsertWithWhereUniqueWithoutCustomerInput | Prisma.warranty_registrationUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.warranty_registrationCreateManyCustomerInputEnvelope;
    set?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    disconnect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    delete?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    connect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    update?: Prisma.warranty_registrationUpdateWithWhereUniqueWithoutCustomerInput | Prisma.warranty_registrationUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.warranty_registrationUpdateManyWithWhereWithoutCustomerInput | Prisma.warranty_registrationUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.warranty_registrationScalarWhereInput | Prisma.warranty_registrationScalarWhereInput[];
};
export type warranty_registrationCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.warranty_registrationCreateWithoutProductInput, Prisma.warranty_registrationUncheckedCreateWithoutProductInput> | Prisma.warranty_registrationCreateWithoutProductInput[] | Prisma.warranty_registrationUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.warranty_registrationCreateOrConnectWithoutProductInput | Prisma.warranty_registrationCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.warranty_registrationCreateManyProductInputEnvelope;
    connect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
};
export type warranty_registrationUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.warranty_registrationCreateWithoutProductInput, Prisma.warranty_registrationUncheckedCreateWithoutProductInput> | Prisma.warranty_registrationCreateWithoutProductInput[] | Prisma.warranty_registrationUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.warranty_registrationCreateOrConnectWithoutProductInput | Prisma.warranty_registrationCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.warranty_registrationCreateManyProductInputEnvelope;
    connect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
};
export type warranty_registrationUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.warranty_registrationCreateWithoutProductInput, Prisma.warranty_registrationUncheckedCreateWithoutProductInput> | Prisma.warranty_registrationCreateWithoutProductInput[] | Prisma.warranty_registrationUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.warranty_registrationCreateOrConnectWithoutProductInput | Prisma.warranty_registrationCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.warranty_registrationUpsertWithWhereUniqueWithoutProductInput | Prisma.warranty_registrationUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.warranty_registrationCreateManyProductInputEnvelope;
    set?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    disconnect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    delete?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    connect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    update?: Prisma.warranty_registrationUpdateWithWhereUniqueWithoutProductInput | Prisma.warranty_registrationUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.warranty_registrationUpdateManyWithWhereWithoutProductInput | Prisma.warranty_registrationUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.warranty_registrationScalarWhereInput | Prisma.warranty_registrationScalarWhereInput[];
};
export type warranty_registrationUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.warranty_registrationCreateWithoutProductInput, Prisma.warranty_registrationUncheckedCreateWithoutProductInput> | Prisma.warranty_registrationCreateWithoutProductInput[] | Prisma.warranty_registrationUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.warranty_registrationCreateOrConnectWithoutProductInput | Prisma.warranty_registrationCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.warranty_registrationUpsertWithWhereUniqueWithoutProductInput | Prisma.warranty_registrationUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.warranty_registrationCreateManyProductInputEnvelope;
    set?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    disconnect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    delete?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    connect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    update?: Prisma.warranty_registrationUpdateWithWhereUniqueWithoutProductInput | Prisma.warranty_registrationUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.warranty_registrationUpdateManyWithWhereWithoutProductInput | Prisma.warranty_registrationUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.warranty_registrationScalarWhereInput | Prisma.warranty_registrationScalarWhereInput[];
};
export type warranty_registrationCreateNestedManyWithoutProduct_serialInput = {
    create?: Prisma.XOR<Prisma.warranty_registrationCreateWithoutProduct_serialInput, Prisma.warranty_registrationUncheckedCreateWithoutProduct_serialInput> | Prisma.warranty_registrationCreateWithoutProduct_serialInput[] | Prisma.warranty_registrationUncheckedCreateWithoutProduct_serialInput[];
    connectOrCreate?: Prisma.warranty_registrationCreateOrConnectWithoutProduct_serialInput | Prisma.warranty_registrationCreateOrConnectWithoutProduct_serialInput[];
    createMany?: Prisma.warranty_registrationCreateManyProduct_serialInputEnvelope;
    connect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
};
export type warranty_registrationUncheckedCreateNestedManyWithoutProduct_serialInput = {
    create?: Prisma.XOR<Prisma.warranty_registrationCreateWithoutProduct_serialInput, Prisma.warranty_registrationUncheckedCreateWithoutProduct_serialInput> | Prisma.warranty_registrationCreateWithoutProduct_serialInput[] | Prisma.warranty_registrationUncheckedCreateWithoutProduct_serialInput[];
    connectOrCreate?: Prisma.warranty_registrationCreateOrConnectWithoutProduct_serialInput | Prisma.warranty_registrationCreateOrConnectWithoutProduct_serialInput[];
    createMany?: Prisma.warranty_registrationCreateManyProduct_serialInputEnvelope;
    connect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
};
export type warranty_registrationUpdateManyWithoutProduct_serialNestedInput = {
    create?: Prisma.XOR<Prisma.warranty_registrationCreateWithoutProduct_serialInput, Prisma.warranty_registrationUncheckedCreateWithoutProduct_serialInput> | Prisma.warranty_registrationCreateWithoutProduct_serialInput[] | Prisma.warranty_registrationUncheckedCreateWithoutProduct_serialInput[];
    connectOrCreate?: Prisma.warranty_registrationCreateOrConnectWithoutProduct_serialInput | Prisma.warranty_registrationCreateOrConnectWithoutProduct_serialInput[];
    upsert?: Prisma.warranty_registrationUpsertWithWhereUniqueWithoutProduct_serialInput | Prisma.warranty_registrationUpsertWithWhereUniqueWithoutProduct_serialInput[];
    createMany?: Prisma.warranty_registrationCreateManyProduct_serialInputEnvelope;
    set?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    disconnect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    delete?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    connect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    update?: Prisma.warranty_registrationUpdateWithWhereUniqueWithoutProduct_serialInput | Prisma.warranty_registrationUpdateWithWhereUniqueWithoutProduct_serialInput[];
    updateMany?: Prisma.warranty_registrationUpdateManyWithWhereWithoutProduct_serialInput | Prisma.warranty_registrationUpdateManyWithWhereWithoutProduct_serialInput[];
    deleteMany?: Prisma.warranty_registrationScalarWhereInput | Prisma.warranty_registrationScalarWhereInput[];
};
export type warranty_registrationUncheckedUpdateManyWithoutProduct_serialNestedInput = {
    create?: Prisma.XOR<Prisma.warranty_registrationCreateWithoutProduct_serialInput, Prisma.warranty_registrationUncheckedCreateWithoutProduct_serialInput> | Prisma.warranty_registrationCreateWithoutProduct_serialInput[] | Prisma.warranty_registrationUncheckedCreateWithoutProduct_serialInput[];
    connectOrCreate?: Prisma.warranty_registrationCreateOrConnectWithoutProduct_serialInput | Prisma.warranty_registrationCreateOrConnectWithoutProduct_serialInput[];
    upsert?: Prisma.warranty_registrationUpsertWithWhereUniqueWithoutProduct_serialInput | Prisma.warranty_registrationUpsertWithWhereUniqueWithoutProduct_serialInput[];
    createMany?: Prisma.warranty_registrationCreateManyProduct_serialInputEnvelope;
    set?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    disconnect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    delete?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    connect?: Prisma.warranty_registrationWhereUniqueInput | Prisma.warranty_registrationWhereUniqueInput[];
    update?: Prisma.warranty_registrationUpdateWithWhereUniqueWithoutProduct_serialInput | Prisma.warranty_registrationUpdateWithWhereUniqueWithoutProduct_serialInput[];
    updateMany?: Prisma.warranty_registrationUpdateManyWithWhereWithoutProduct_serialInput | Prisma.warranty_registrationUpdateManyWithWhereWithoutProduct_serialInput[];
    deleteMany?: Prisma.warranty_registrationScalarWhereInput | Prisma.warranty_registrationScalarWhereInput[];
};
export type warranty_registrationCreateWithoutCustomerInput = {
    id?: string;
    purchase_date?: Date | string | null;
    warranty_start: Date | string;
    warranty_end: Date | string;
    status?: string;
    created_at?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutWarranty_registrationInput;
    product_serial?: Prisma.product_serialCreateNestedOneWithoutWarranty_registrationInput;
};
export type warranty_registrationUncheckedCreateWithoutCustomerInput = {
    id?: string;
    product_id: string;
    serial_id?: string | null;
    purchase_date?: Date | string | null;
    warranty_start: Date | string;
    warranty_end: Date | string;
    status?: string;
    created_at?: Date | string;
};
export type warranty_registrationCreateOrConnectWithoutCustomerInput = {
    where: Prisma.warranty_registrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.warranty_registrationCreateWithoutCustomerInput, Prisma.warranty_registrationUncheckedCreateWithoutCustomerInput>;
};
export type warranty_registrationCreateManyCustomerInputEnvelope = {
    data: Prisma.warranty_registrationCreateManyCustomerInput | Prisma.warranty_registrationCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type warranty_registrationUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.warranty_registrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.warranty_registrationUpdateWithoutCustomerInput, Prisma.warranty_registrationUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.warranty_registrationCreateWithoutCustomerInput, Prisma.warranty_registrationUncheckedCreateWithoutCustomerInput>;
};
export type warranty_registrationUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.warranty_registrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.warranty_registrationUpdateWithoutCustomerInput, Prisma.warranty_registrationUncheckedUpdateWithoutCustomerInput>;
};
export type warranty_registrationUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.warranty_registrationScalarWhereInput;
    data: Prisma.XOR<Prisma.warranty_registrationUpdateManyMutationInput, Prisma.warranty_registrationUncheckedUpdateManyWithoutCustomerInput>;
};
export type warranty_registrationScalarWhereInput = {
    AND?: Prisma.warranty_registrationScalarWhereInput | Prisma.warranty_registrationScalarWhereInput[];
    OR?: Prisma.warranty_registrationScalarWhereInput[];
    NOT?: Prisma.warranty_registrationScalarWhereInput | Prisma.warranty_registrationScalarWhereInput[];
    id?: Prisma.UuidFilter<"warranty_registration"> | string;
    customer_id?: Prisma.UuidFilter<"warranty_registration"> | string;
    product_id?: Prisma.UuidFilter<"warranty_registration"> | string;
    serial_id?: Prisma.UuidNullableFilter<"warranty_registration"> | string | null;
    purchase_date?: Prisma.DateTimeNullableFilter<"warranty_registration"> | Date | string | null;
    warranty_start?: Prisma.DateTimeFilter<"warranty_registration"> | Date | string;
    warranty_end?: Prisma.DateTimeFilter<"warranty_registration"> | Date | string;
    status?: Prisma.StringFilter<"warranty_registration"> | string;
    created_at?: Prisma.DateTimeFilter<"warranty_registration"> | Date | string;
};
export type warranty_registrationCreateWithoutProductInput = {
    id?: string;
    purchase_date?: Date | string | null;
    warranty_start: Date | string;
    warranty_end: Date | string;
    status?: string;
    created_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutWarranty_registrationInput;
    product_serial?: Prisma.product_serialCreateNestedOneWithoutWarranty_registrationInput;
};
export type warranty_registrationUncheckedCreateWithoutProductInput = {
    id?: string;
    customer_id: string;
    serial_id?: string | null;
    purchase_date?: Date | string | null;
    warranty_start: Date | string;
    warranty_end: Date | string;
    status?: string;
    created_at?: Date | string;
};
export type warranty_registrationCreateOrConnectWithoutProductInput = {
    where: Prisma.warranty_registrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.warranty_registrationCreateWithoutProductInput, Prisma.warranty_registrationUncheckedCreateWithoutProductInput>;
};
export type warranty_registrationCreateManyProductInputEnvelope = {
    data: Prisma.warranty_registrationCreateManyProductInput | Prisma.warranty_registrationCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type warranty_registrationUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.warranty_registrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.warranty_registrationUpdateWithoutProductInput, Prisma.warranty_registrationUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.warranty_registrationCreateWithoutProductInput, Prisma.warranty_registrationUncheckedCreateWithoutProductInput>;
};
export type warranty_registrationUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.warranty_registrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.warranty_registrationUpdateWithoutProductInput, Prisma.warranty_registrationUncheckedUpdateWithoutProductInput>;
};
export type warranty_registrationUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.warranty_registrationScalarWhereInput;
    data: Prisma.XOR<Prisma.warranty_registrationUpdateManyMutationInput, Prisma.warranty_registrationUncheckedUpdateManyWithoutProductInput>;
};
export type warranty_registrationCreateWithoutProduct_serialInput = {
    id?: string;
    purchase_date?: Date | string | null;
    warranty_start: Date | string;
    warranty_end: Date | string;
    status?: string;
    created_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutWarranty_registrationInput;
    product: Prisma.ProductCreateNestedOneWithoutWarranty_registrationInput;
};
export type warranty_registrationUncheckedCreateWithoutProduct_serialInput = {
    id?: string;
    customer_id: string;
    product_id: string;
    purchase_date?: Date | string | null;
    warranty_start: Date | string;
    warranty_end: Date | string;
    status?: string;
    created_at?: Date | string;
};
export type warranty_registrationCreateOrConnectWithoutProduct_serialInput = {
    where: Prisma.warranty_registrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.warranty_registrationCreateWithoutProduct_serialInput, Prisma.warranty_registrationUncheckedCreateWithoutProduct_serialInput>;
};
export type warranty_registrationCreateManyProduct_serialInputEnvelope = {
    data: Prisma.warranty_registrationCreateManyProduct_serialInput | Prisma.warranty_registrationCreateManyProduct_serialInput[];
    skipDuplicates?: boolean;
};
export type warranty_registrationUpsertWithWhereUniqueWithoutProduct_serialInput = {
    where: Prisma.warranty_registrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.warranty_registrationUpdateWithoutProduct_serialInput, Prisma.warranty_registrationUncheckedUpdateWithoutProduct_serialInput>;
    create: Prisma.XOR<Prisma.warranty_registrationCreateWithoutProduct_serialInput, Prisma.warranty_registrationUncheckedCreateWithoutProduct_serialInput>;
};
export type warranty_registrationUpdateWithWhereUniqueWithoutProduct_serialInput = {
    where: Prisma.warranty_registrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.warranty_registrationUpdateWithoutProduct_serialInput, Prisma.warranty_registrationUncheckedUpdateWithoutProduct_serialInput>;
};
export type warranty_registrationUpdateManyWithWhereWithoutProduct_serialInput = {
    where: Prisma.warranty_registrationScalarWhereInput;
    data: Prisma.XOR<Prisma.warranty_registrationUpdateManyMutationInput, Prisma.warranty_registrationUncheckedUpdateManyWithoutProduct_serialInput>;
};
export type warranty_registrationCreateManyCustomerInput = {
    id?: string;
    product_id: string;
    serial_id?: string | null;
    purchase_date?: Date | string | null;
    warranty_start: Date | string;
    warranty_end: Date | string;
    status?: string;
    created_at?: Date | string;
};
export type warranty_registrationUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutWarranty_registrationNestedInput;
    product_serial?: Prisma.product_serialUpdateOneWithoutWarranty_registrationNestedInput;
};
export type warranty_registrationUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchase_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type warranty_registrationUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchase_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type warranty_registrationCreateManyProductInput = {
    id?: string;
    customer_id: string;
    serial_id?: string | null;
    purchase_date?: Date | string | null;
    warranty_start: Date | string;
    warranty_end: Date | string;
    status?: string;
    created_at?: Date | string;
};
export type warranty_registrationUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutWarranty_registrationNestedInput;
    product_serial?: Prisma.product_serialUpdateOneWithoutWarranty_registrationNestedInput;
};
export type warranty_registrationUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchase_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type warranty_registrationUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    serial_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    purchase_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type warranty_registrationCreateManyProduct_serialInput = {
    id?: string;
    customer_id: string;
    product_id: string;
    purchase_date?: Date | string | null;
    warranty_start: Date | string;
    warranty_end: Date | string;
    status?: string;
    created_at?: Date | string;
};
export type warranty_registrationUpdateWithoutProduct_serialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutWarranty_registrationNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutWarranty_registrationNestedInput;
};
export type warranty_registrationUncheckedUpdateWithoutProduct_serialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type warranty_registrationUncheckedUpdateManyWithoutProduct_serialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchase_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warranty_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type warranty_registrationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    product_id?: boolean;
    serial_id?: boolean;
    purchase_date?: boolean;
    warranty_start?: boolean;
    warranty_end?: boolean;
    status?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    product_serial?: boolean | Prisma.warranty_registration$product_serialArgs<ExtArgs>;
}, ExtArgs["result"]["warranty_registration"]>;
export type warranty_registrationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    product_id?: boolean;
    serial_id?: boolean;
    purchase_date?: boolean;
    warranty_start?: boolean;
    warranty_end?: boolean;
    status?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    product_serial?: boolean | Prisma.warranty_registration$product_serialArgs<ExtArgs>;
}, ExtArgs["result"]["warranty_registration"]>;
export type warranty_registrationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    product_id?: boolean;
    serial_id?: boolean;
    purchase_date?: boolean;
    warranty_start?: boolean;
    warranty_end?: boolean;
    status?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    product_serial?: boolean | Prisma.warranty_registration$product_serialArgs<ExtArgs>;
}, ExtArgs["result"]["warranty_registration"]>;
export type warranty_registrationSelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    product_id?: boolean;
    serial_id?: boolean;
    purchase_date?: boolean;
    warranty_start?: boolean;
    warranty_end?: boolean;
    status?: boolean;
    created_at?: boolean;
};
export type warranty_registrationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "product_id" | "serial_id" | "purchase_date" | "warranty_start" | "warranty_end" | "status" | "created_at", ExtArgs["result"]["warranty_registration"]>;
export type warranty_registrationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    product_serial?: boolean | Prisma.warranty_registration$product_serialArgs<ExtArgs>;
};
export type warranty_registrationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    product_serial?: boolean | Prisma.warranty_registration$product_serialArgs<ExtArgs>;
};
export type warranty_registrationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    product_serial?: boolean | Prisma.warranty_registration$product_serialArgs<ExtArgs>;
};
export type $warranty_registrationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "warranty_registration";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
        product_serial: Prisma.$product_serialPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customer_id: string;
        product_id: string;
        serial_id: string | null;
        purchase_date: Date | null;
        warranty_start: Date;
        warranty_end: Date;
        status: string;
        created_at: Date;
    }, ExtArgs["result"]["warranty_registration"]>;
    composites: {};
};
export type warranty_registrationGetPayload<S extends boolean | null | undefined | warranty_registrationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$warranty_registrationPayload, S>;
export type warranty_registrationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<warranty_registrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Warranty_registrationCountAggregateInputType | true;
};
export interface warranty_registrationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['warranty_registration'];
        meta: {
            name: 'warranty_registration';
        };
    };
    findUnique<T extends warranty_registrationFindUniqueArgs>(args: Prisma.SelectSubset<T, warranty_registrationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__warranty_registrationClient<runtime.Types.Result.GetResult<Prisma.$warranty_registrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends warranty_registrationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, warranty_registrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__warranty_registrationClient<runtime.Types.Result.GetResult<Prisma.$warranty_registrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends warranty_registrationFindFirstArgs>(args?: Prisma.SelectSubset<T, warranty_registrationFindFirstArgs<ExtArgs>>): Prisma.Prisma__warranty_registrationClient<runtime.Types.Result.GetResult<Prisma.$warranty_registrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends warranty_registrationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, warranty_registrationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__warranty_registrationClient<runtime.Types.Result.GetResult<Prisma.$warranty_registrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends warranty_registrationFindManyArgs>(args?: Prisma.SelectSubset<T, warranty_registrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$warranty_registrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends warranty_registrationCreateArgs>(args: Prisma.SelectSubset<T, warranty_registrationCreateArgs<ExtArgs>>): Prisma.Prisma__warranty_registrationClient<runtime.Types.Result.GetResult<Prisma.$warranty_registrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends warranty_registrationCreateManyArgs>(args?: Prisma.SelectSubset<T, warranty_registrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends warranty_registrationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, warranty_registrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$warranty_registrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends warranty_registrationDeleteArgs>(args: Prisma.SelectSubset<T, warranty_registrationDeleteArgs<ExtArgs>>): Prisma.Prisma__warranty_registrationClient<runtime.Types.Result.GetResult<Prisma.$warranty_registrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends warranty_registrationUpdateArgs>(args: Prisma.SelectSubset<T, warranty_registrationUpdateArgs<ExtArgs>>): Prisma.Prisma__warranty_registrationClient<runtime.Types.Result.GetResult<Prisma.$warranty_registrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends warranty_registrationDeleteManyArgs>(args?: Prisma.SelectSubset<T, warranty_registrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends warranty_registrationUpdateManyArgs>(args: Prisma.SelectSubset<T, warranty_registrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends warranty_registrationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, warranty_registrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$warranty_registrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends warranty_registrationUpsertArgs>(args: Prisma.SelectSubset<T, warranty_registrationUpsertArgs<ExtArgs>>): Prisma.Prisma__warranty_registrationClient<runtime.Types.Result.GetResult<Prisma.$warranty_registrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends warranty_registrationCountArgs>(args?: Prisma.Subset<T, warranty_registrationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Warranty_registrationCountAggregateOutputType> : number>;
    aggregate<T extends Warranty_registrationAggregateArgs>(args: Prisma.Subset<T, Warranty_registrationAggregateArgs>): Prisma.PrismaPromise<GetWarranty_registrationAggregateType<T>>;
    groupBy<T extends warranty_registrationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: warranty_registrationGroupByArgs['orderBy'];
    } : {
        orderBy?: warranty_registrationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, warranty_registrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarranty_registrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: warranty_registrationFieldRefs;
}
export interface Prisma__warranty_registrationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product_serial<T extends Prisma.warranty_registration$product_serialArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.warranty_registration$product_serialArgs<ExtArgs>>): Prisma.Prisma__product_serialClient<runtime.Types.Result.GetResult<Prisma.$product_serialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface warranty_registrationFieldRefs {
    readonly id: Prisma.FieldRef<"warranty_registration", 'String'>;
    readonly customer_id: Prisma.FieldRef<"warranty_registration", 'String'>;
    readonly product_id: Prisma.FieldRef<"warranty_registration", 'String'>;
    readonly serial_id: Prisma.FieldRef<"warranty_registration", 'String'>;
    readonly purchase_date: Prisma.FieldRef<"warranty_registration", 'DateTime'>;
    readonly warranty_start: Prisma.FieldRef<"warranty_registration", 'DateTime'>;
    readonly warranty_end: Prisma.FieldRef<"warranty_registration", 'DateTime'>;
    readonly status: Prisma.FieldRef<"warranty_registration", 'String'>;
    readonly created_at: Prisma.FieldRef<"warranty_registration", 'DateTime'>;
}
export type warranty_registrationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warranty_registrationSelect<ExtArgs> | null;
    omit?: Prisma.warranty_registrationOmit<ExtArgs> | null;
    include?: Prisma.warranty_registrationInclude<ExtArgs> | null;
    where: Prisma.warranty_registrationWhereUniqueInput;
};
export type warranty_registrationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warranty_registrationSelect<ExtArgs> | null;
    omit?: Prisma.warranty_registrationOmit<ExtArgs> | null;
    include?: Prisma.warranty_registrationInclude<ExtArgs> | null;
    where: Prisma.warranty_registrationWhereUniqueInput;
};
export type warranty_registrationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type warranty_registrationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type warranty_registrationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type warranty_registrationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warranty_registrationSelect<ExtArgs> | null;
    omit?: Prisma.warranty_registrationOmit<ExtArgs> | null;
    include?: Prisma.warranty_registrationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.warranty_registrationCreateInput, Prisma.warranty_registrationUncheckedCreateInput>;
};
export type warranty_registrationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.warranty_registrationCreateManyInput | Prisma.warranty_registrationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type warranty_registrationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warranty_registrationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.warranty_registrationOmit<ExtArgs> | null;
    data: Prisma.warranty_registrationCreateManyInput | Prisma.warranty_registrationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.warranty_registrationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type warranty_registrationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warranty_registrationSelect<ExtArgs> | null;
    omit?: Prisma.warranty_registrationOmit<ExtArgs> | null;
    include?: Prisma.warranty_registrationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.warranty_registrationUpdateInput, Prisma.warranty_registrationUncheckedUpdateInput>;
    where: Prisma.warranty_registrationWhereUniqueInput;
};
export type warranty_registrationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.warranty_registrationUpdateManyMutationInput, Prisma.warranty_registrationUncheckedUpdateManyInput>;
    where?: Prisma.warranty_registrationWhereInput;
    limit?: number;
};
export type warranty_registrationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warranty_registrationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.warranty_registrationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.warranty_registrationUpdateManyMutationInput, Prisma.warranty_registrationUncheckedUpdateManyInput>;
    where?: Prisma.warranty_registrationWhereInput;
    limit?: number;
    include?: Prisma.warranty_registrationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type warranty_registrationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warranty_registrationSelect<ExtArgs> | null;
    omit?: Prisma.warranty_registrationOmit<ExtArgs> | null;
    include?: Prisma.warranty_registrationInclude<ExtArgs> | null;
    where: Prisma.warranty_registrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.warranty_registrationCreateInput, Prisma.warranty_registrationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.warranty_registrationUpdateInput, Prisma.warranty_registrationUncheckedUpdateInput>;
};
export type warranty_registrationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warranty_registrationSelect<ExtArgs> | null;
    omit?: Prisma.warranty_registrationOmit<ExtArgs> | null;
    include?: Prisma.warranty_registrationInclude<ExtArgs> | null;
    where: Prisma.warranty_registrationWhereUniqueInput;
};
export type warranty_registrationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.warranty_registrationWhereInput;
    limit?: number;
};
export type warranty_registration$product_serialArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_serialSelect<ExtArgs> | null;
    omit?: Prisma.product_serialOmit<ExtArgs> | null;
    include?: Prisma.product_serialInclude<ExtArgs> | null;
    where?: Prisma.product_serialWhereInput;
};
export type warranty_registrationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.warranty_registrationSelect<ExtArgs> | null;
    omit?: Prisma.warranty_registrationOmit<ExtArgs> | null;
    include?: Prisma.warranty_registrationInclude<ExtArgs> | null;
};
