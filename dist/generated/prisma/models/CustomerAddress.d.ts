import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomerAddressModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomerAddressPayload>;
export type AggregateCustomerAddress = {
    _count: CustomerAddressCountAggregateOutputType | null;
    _min: CustomerAddressMinAggregateOutputType | null;
    _max: CustomerAddressMaxAggregateOutputType | null;
};
export type CustomerAddressMinAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    label: string | null;
    addressLine1: string | null;
    addressLine2: string | null;
    ward: string | null;
    district: string | null;
    province: string | null;
    country: string | null;
    isDefault: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CustomerAddressMaxAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    label: string | null;
    addressLine1: string | null;
    addressLine2: string | null;
    ward: string | null;
    district: string | null;
    province: string | null;
    country: string | null;
    isDefault: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CustomerAddressCountAggregateOutputType = {
    id: number;
    customerId: number;
    label: number;
    addressLine1: number;
    addressLine2: number;
    ward: number;
    district: number;
    province: number;
    country: number;
    isDefault: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CustomerAddressMinAggregateInputType = {
    id?: true;
    customerId?: true;
    label?: true;
    addressLine1?: true;
    addressLine2?: true;
    ward?: true;
    district?: true;
    province?: true;
    country?: true;
    isDefault?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CustomerAddressMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    label?: true;
    addressLine1?: true;
    addressLine2?: true;
    ward?: true;
    district?: true;
    province?: true;
    country?: true;
    isDefault?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CustomerAddressCountAggregateInputType = {
    id?: true;
    customerId?: true;
    label?: true;
    addressLine1?: true;
    addressLine2?: true;
    ward?: true;
    district?: true;
    province?: true;
    country?: true;
    isDefault?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CustomerAddressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerAddressWhereInput;
    orderBy?: Prisma.CustomerAddressOrderByWithRelationInput | Prisma.CustomerAddressOrderByWithRelationInput[];
    cursor?: Prisma.CustomerAddressWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerAddressCountAggregateInputType;
    _min?: CustomerAddressMinAggregateInputType;
    _max?: CustomerAddressMaxAggregateInputType;
};
export type GetCustomerAddressAggregateType<T extends CustomerAddressAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomerAddress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomerAddress[P]> : Prisma.GetScalarType<T[P], AggregateCustomerAddress[P]>;
};
export type CustomerAddressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerAddressWhereInput;
    orderBy?: Prisma.CustomerAddressOrderByWithAggregationInput | Prisma.CustomerAddressOrderByWithAggregationInput[];
    by: Prisma.CustomerAddressScalarFieldEnum[] | Prisma.CustomerAddressScalarFieldEnum;
    having?: Prisma.CustomerAddressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerAddressCountAggregateInputType | true;
    _min?: CustomerAddressMinAggregateInputType;
    _max?: CustomerAddressMaxAggregateInputType;
};
export type CustomerAddressGroupByOutputType = {
    id: string;
    customerId: string;
    label: string | null;
    addressLine1: string | null;
    addressLine2: string | null;
    ward: string | null;
    district: string | null;
    province: string | null;
    country: string;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: CustomerAddressCountAggregateOutputType | null;
    _min: CustomerAddressMinAggregateOutputType | null;
    _max: CustomerAddressMaxAggregateOutputType | null;
};
export type GetCustomerAddressGroupByPayload<T extends CustomerAddressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerAddressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerAddressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerAddressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerAddressGroupByOutputType[P]>;
}>>;
export type CustomerAddressWhereInput = {
    AND?: Prisma.CustomerAddressWhereInput | Prisma.CustomerAddressWhereInput[];
    OR?: Prisma.CustomerAddressWhereInput[];
    NOT?: Prisma.CustomerAddressWhereInput | Prisma.CustomerAddressWhereInput[];
    id?: Prisma.UuidFilter<"CustomerAddress"> | string;
    customerId?: Prisma.UuidFilter<"CustomerAddress"> | string;
    label?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    addressLine1?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    addressLine2?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    ward?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    district?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    province?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    country?: Prisma.StringFilter<"CustomerAddress"> | string;
    isDefault?: Prisma.BoolFilter<"CustomerAddress"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"CustomerAddress"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CustomerAddress"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
};
export type CustomerAddressOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    label?: Prisma.SortOrderInput | Prisma.SortOrder;
    addressLine1?: Prisma.SortOrderInput | Prisma.SortOrder;
    addressLine2?: Prisma.SortOrderInput | Prisma.SortOrder;
    ward?: Prisma.SortOrderInput | Prisma.SortOrder;
    district?: Prisma.SortOrderInput | Prisma.SortOrder;
    province?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type CustomerAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CustomerAddressWhereInput | Prisma.CustomerAddressWhereInput[];
    OR?: Prisma.CustomerAddressWhereInput[];
    NOT?: Prisma.CustomerAddressWhereInput | Prisma.CustomerAddressWhereInput[];
    customerId?: Prisma.UuidFilter<"CustomerAddress"> | string;
    label?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    addressLine1?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    addressLine2?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    ward?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    district?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    province?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    country?: Prisma.StringFilter<"CustomerAddress"> | string;
    isDefault?: Prisma.BoolFilter<"CustomerAddress"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"CustomerAddress"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CustomerAddress"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
}, "id">;
export type CustomerAddressOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    label?: Prisma.SortOrderInput | Prisma.SortOrder;
    addressLine1?: Prisma.SortOrderInput | Prisma.SortOrder;
    addressLine2?: Prisma.SortOrderInput | Prisma.SortOrder;
    ward?: Prisma.SortOrderInput | Prisma.SortOrder;
    district?: Prisma.SortOrderInput | Prisma.SortOrder;
    province?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CustomerAddressCountOrderByAggregateInput;
    _max?: Prisma.CustomerAddressMaxOrderByAggregateInput;
    _min?: Prisma.CustomerAddressMinOrderByAggregateInput;
};
export type CustomerAddressScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomerAddressScalarWhereWithAggregatesInput | Prisma.CustomerAddressScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomerAddressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomerAddressScalarWhereWithAggregatesInput | Prisma.CustomerAddressScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CustomerAddress"> | string;
    customerId?: Prisma.UuidWithAggregatesFilter<"CustomerAddress"> | string;
    label?: Prisma.StringNullableWithAggregatesFilter<"CustomerAddress"> | string | null;
    addressLine1?: Prisma.StringNullableWithAggregatesFilter<"CustomerAddress"> | string | null;
    addressLine2?: Prisma.StringNullableWithAggregatesFilter<"CustomerAddress"> | string | null;
    ward?: Prisma.StringNullableWithAggregatesFilter<"CustomerAddress"> | string | null;
    district?: Prisma.StringNullableWithAggregatesFilter<"CustomerAddress"> | string | null;
    province?: Prisma.StringNullableWithAggregatesFilter<"CustomerAddress"> | string | null;
    country?: Prisma.StringWithAggregatesFilter<"CustomerAddress"> | string;
    isDefault?: Prisma.BoolWithAggregatesFilter<"CustomerAddress"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CustomerAddress"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CustomerAddress"> | Date | string;
};
export type CustomerAddressCreateInput = {
    id?: string;
    label?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    ward?: string | null;
    district?: string | null;
    province?: string | null;
    country?: string;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutAddressesInput;
};
export type CustomerAddressUncheckedCreateInput = {
    id?: string;
    customerId: string;
    label?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    ward?: string | null;
    district?: string | null;
    province?: string | null;
    country?: string;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomerAddressUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ward?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    province?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutAddressesNestedInput;
};
export type CustomerAddressUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ward?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    province?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerAddressCreateManyInput = {
    id?: string;
    customerId: string;
    label?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    ward?: string | null;
    district?: string | null;
    province?: string | null;
    country?: string;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomerAddressUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ward?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    province?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerAddressUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ward?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    province?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerAddressListRelationFilter = {
    every?: Prisma.CustomerAddressWhereInput;
    some?: Prisma.CustomerAddressWhereInput;
    none?: Prisma.CustomerAddressWhereInput;
};
export type CustomerAddressOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CustomerAddressCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    addressLine1?: Prisma.SortOrder;
    addressLine2?: Prisma.SortOrder;
    ward?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    province?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomerAddressMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    addressLine1?: Prisma.SortOrder;
    addressLine2?: Prisma.SortOrder;
    ward?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    province?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomerAddressMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    addressLine1?: Prisma.SortOrder;
    addressLine2?: Prisma.SortOrder;
    ward?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    province?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CustomerAddressCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CustomerAddressCreateWithoutCustomerInput, Prisma.CustomerAddressUncheckedCreateWithoutCustomerInput> | Prisma.CustomerAddressCreateWithoutCustomerInput[] | Prisma.CustomerAddressUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerAddressCreateOrConnectWithoutCustomerInput | Prisma.CustomerAddressCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CustomerAddressCreateManyCustomerInputEnvelope;
    connect?: Prisma.CustomerAddressWhereUniqueInput | Prisma.CustomerAddressWhereUniqueInput[];
};
export type CustomerAddressUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CustomerAddressCreateWithoutCustomerInput, Prisma.CustomerAddressUncheckedCreateWithoutCustomerInput> | Prisma.CustomerAddressCreateWithoutCustomerInput[] | Prisma.CustomerAddressUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerAddressCreateOrConnectWithoutCustomerInput | Prisma.CustomerAddressCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CustomerAddressCreateManyCustomerInputEnvelope;
    connect?: Prisma.CustomerAddressWhereUniqueInput | Prisma.CustomerAddressWhereUniqueInput[];
};
export type CustomerAddressUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerAddressCreateWithoutCustomerInput, Prisma.CustomerAddressUncheckedCreateWithoutCustomerInput> | Prisma.CustomerAddressCreateWithoutCustomerInput[] | Prisma.CustomerAddressUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerAddressCreateOrConnectWithoutCustomerInput | Prisma.CustomerAddressCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CustomerAddressCreateManyCustomerInputEnvelope;
    set?: Prisma.CustomerAddressWhereUniqueInput | Prisma.CustomerAddressWhereUniqueInput[];
    disconnect?: Prisma.CustomerAddressWhereUniqueInput | Prisma.CustomerAddressWhereUniqueInput[];
    delete?: Prisma.CustomerAddressWhereUniqueInput | Prisma.CustomerAddressWhereUniqueInput[];
    connect?: Prisma.CustomerAddressWhereUniqueInput | Prisma.CustomerAddressWhereUniqueInput[];
    update?: Prisma.CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CustomerAddressUpdateManyWithWhereWithoutCustomerInput | Prisma.CustomerAddressUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CustomerAddressScalarWhereInput | Prisma.CustomerAddressScalarWhereInput[];
};
export type CustomerAddressUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerAddressCreateWithoutCustomerInput, Prisma.CustomerAddressUncheckedCreateWithoutCustomerInput> | Prisma.CustomerAddressCreateWithoutCustomerInput[] | Prisma.CustomerAddressUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerAddressCreateOrConnectWithoutCustomerInput | Prisma.CustomerAddressCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CustomerAddressCreateManyCustomerInputEnvelope;
    set?: Prisma.CustomerAddressWhereUniqueInput | Prisma.CustomerAddressWhereUniqueInput[];
    disconnect?: Prisma.CustomerAddressWhereUniqueInput | Prisma.CustomerAddressWhereUniqueInput[];
    delete?: Prisma.CustomerAddressWhereUniqueInput | Prisma.CustomerAddressWhereUniqueInput[];
    connect?: Prisma.CustomerAddressWhereUniqueInput | Prisma.CustomerAddressWhereUniqueInput[];
    update?: Prisma.CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CustomerAddressUpdateManyWithWhereWithoutCustomerInput | Prisma.CustomerAddressUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CustomerAddressScalarWhereInput | Prisma.CustomerAddressScalarWhereInput[];
};
export type CustomerAddressCreateWithoutCustomerInput = {
    id?: string;
    label?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    ward?: string | null;
    district?: string | null;
    province?: string | null;
    country?: string;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomerAddressUncheckedCreateWithoutCustomerInput = {
    id?: string;
    label?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    ward?: string | null;
    district?: string | null;
    province?: string | null;
    country?: string;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomerAddressCreateOrConnectWithoutCustomerInput = {
    where: Prisma.CustomerAddressWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerAddressCreateWithoutCustomerInput, Prisma.CustomerAddressUncheckedCreateWithoutCustomerInput>;
};
export type CustomerAddressCreateManyCustomerInputEnvelope = {
    data: Prisma.CustomerAddressCreateManyCustomerInput | Prisma.CustomerAddressCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CustomerAddressWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustomerAddressUpdateWithoutCustomerInput, Prisma.CustomerAddressUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.CustomerAddressCreateWithoutCustomerInput, Prisma.CustomerAddressUncheckedCreateWithoutCustomerInput>;
};
export type CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CustomerAddressWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustomerAddressUpdateWithoutCustomerInput, Prisma.CustomerAddressUncheckedUpdateWithoutCustomerInput>;
};
export type CustomerAddressUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.CustomerAddressScalarWhereInput;
    data: Prisma.XOR<Prisma.CustomerAddressUpdateManyMutationInput, Prisma.CustomerAddressUncheckedUpdateManyWithoutCustomerInput>;
};
export type CustomerAddressScalarWhereInput = {
    AND?: Prisma.CustomerAddressScalarWhereInput | Prisma.CustomerAddressScalarWhereInput[];
    OR?: Prisma.CustomerAddressScalarWhereInput[];
    NOT?: Prisma.CustomerAddressScalarWhereInput | Prisma.CustomerAddressScalarWhereInput[];
    id?: Prisma.UuidFilter<"CustomerAddress"> | string;
    customerId?: Prisma.UuidFilter<"CustomerAddress"> | string;
    label?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    addressLine1?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    addressLine2?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    ward?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    district?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    province?: Prisma.StringNullableFilter<"CustomerAddress"> | string | null;
    country?: Prisma.StringFilter<"CustomerAddress"> | string;
    isDefault?: Prisma.BoolFilter<"CustomerAddress"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"CustomerAddress"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CustomerAddress"> | Date | string;
};
export type CustomerAddressCreateManyCustomerInput = {
    id?: string;
    label?: string | null;
    addressLine1?: string | null;
    addressLine2?: string | null;
    ward?: string | null;
    district?: string | null;
    province?: string | null;
    country?: string;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CustomerAddressUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ward?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    province?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerAddressUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ward?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    province?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerAddressUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    addressLine2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ward?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    province?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerAddressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    label?: boolean;
    addressLine1?: boolean;
    addressLine2?: boolean;
    ward?: boolean;
    district?: boolean;
    province?: boolean;
    country?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerAddress"]>;
export type CustomerAddressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    label?: boolean;
    addressLine1?: boolean;
    addressLine2?: boolean;
    ward?: boolean;
    district?: boolean;
    province?: boolean;
    country?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerAddress"]>;
export type CustomerAddressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    label?: boolean;
    addressLine1?: boolean;
    addressLine2?: boolean;
    ward?: boolean;
    district?: boolean;
    province?: boolean;
    country?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerAddress"]>;
export type CustomerAddressSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    label?: boolean;
    addressLine1?: boolean;
    addressLine2?: boolean;
    ward?: boolean;
    district?: boolean;
    province?: boolean;
    country?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CustomerAddressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "label" | "addressLine1" | "addressLine2" | "ward" | "district" | "province" | "country" | "isDefault" | "createdAt" | "updatedAt", ExtArgs["result"]["customerAddress"]>;
export type CustomerAddressInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type CustomerAddressIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type CustomerAddressIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $CustomerAddressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CustomerAddress";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customerId: string;
        label: string | null;
        addressLine1: string | null;
        addressLine2: string | null;
        ward: string | null;
        district: string | null;
        province: string | null;
        country: string;
        isDefault: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["customerAddress"]>;
    composites: {};
};
export type CustomerAddressGetPayload<S extends boolean | null | undefined | CustomerAddressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload, S>;
export type CustomerAddressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomerAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerAddressCountAggregateInputType | true;
};
export interface CustomerAddressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CustomerAddress'];
        meta: {
            name: 'CustomerAddress';
        };
    };
    findUnique<T extends CustomerAddressFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomerAddressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomerAddressClient<runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomerAddressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomerAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerAddressClient<runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomerAddressFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomerAddressFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomerAddressClient<runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomerAddressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomerAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerAddressClient<runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomerAddressFindManyArgs>(args?: Prisma.SelectSubset<T, CustomerAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomerAddressCreateArgs>(args: Prisma.SelectSubset<T, CustomerAddressCreateArgs<ExtArgs>>): Prisma.Prisma__CustomerAddressClient<runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomerAddressCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomerAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomerAddressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomerAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomerAddressDeleteArgs>(args: Prisma.SelectSubset<T, CustomerAddressDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomerAddressClient<runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomerAddressUpdateArgs>(args: Prisma.SelectSubset<T, CustomerAddressUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomerAddressClient<runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomerAddressDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomerAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomerAddressUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomerAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomerAddressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomerAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomerAddressUpsertArgs>(args: Prisma.SelectSubset<T, CustomerAddressUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomerAddressClient<runtime.Types.Result.GetResult<Prisma.$CustomerAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomerAddressCountArgs>(args?: Prisma.Subset<T, CustomerAddressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerAddressCountAggregateOutputType> : number>;
    aggregate<T extends CustomerAddressAggregateArgs>(args: Prisma.Subset<T, CustomerAddressAggregateArgs>): Prisma.PrismaPromise<GetCustomerAddressAggregateType<T>>;
    groupBy<T extends CustomerAddressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomerAddressGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomerAddressGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomerAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomerAddressFieldRefs;
}
export interface Prisma__CustomerAddressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomerAddressFieldRefs {
    readonly id: Prisma.FieldRef<"CustomerAddress", 'String'>;
    readonly customerId: Prisma.FieldRef<"CustomerAddress", 'String'>;
    readonly label: Prisma.FieldRef<"CustomerAddress", 'String'>;
    readonly addressLine1: Prisma.FieldRef<"CustomerAddress", 'String'>;
    readonly addressLine2: Prisma.FieldRef<"CustomerAddress", 'String'>;
    readonly ward: Prisma.FieldRef<"CustomerAddress", 'String'>;
    readonly district: Prisma.FieldRef<"CustomerAddress", 'String'>;
    readonly province: Prisma.FieldRef<"CustomerAddress", 'String'>;
    readonly country: Prisma.FieldRef<"CustomerAddress", 'String'>;
    readonly isDefault: Prisma.FieldRef<"CustomerAddress", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"CustomerAddress", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CustomerAddress", 'DateTime'>;
}
export type CustomerAddressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerAddressSelect<ExtArgs> | null;
    omit?: Prisma.CustomerAddressOmit<ExtArgs> | null;
    include?: Prisma.CustomerAddressInclude<ExtArgs> | null;
    where: Prisma.CustomerAddressWhereUniqueInput;
};
export type CustomerAddressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerAddressSelect<ExtArgs> | null;
    omit?: Prisma.CustomerAddressOmit<ExtArgs> | null;
    include?: Prisma.CustomerAddressInclude<ExtArgs> | null;
    where: Prisma.CustomerAddressWhereUniqueInput;
};
export type CustomerAddressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerAddressSelect<ExtArgs> | null;
    omit?: Prisma.CustomerAddressOmit<ExtArgs> | null;
    include?: Prisma.CustomerAddressInclude<ExtArgs> | null;
    where?: Prisma.CustomerAddressWhereInput;
    orderBy?: Prisma.CustomerAddressOrderByWithRelationInput | Prisma.CustomerAddressOrderByWithRelationInput[];
    cursor?: Prisma.CustomerAddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerAddressScalarFieldEnum | Prisma.CustomerAddressScalarFieldEnum[];
};
export type CustomerAddressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerAddressSelect<ExtArgs> | null;
    omit?: Prisma.CustomerAddressOmit<ExtArgs> | null;
    include?: Prisma.CustomerAddressInclude<ExtArgs> | null;
    where?: Prisma.CustomerAddressWhereInput;
    orderBy?: Prisma.CustomerAddressOrderByWithRelationInput | Prisma.CustomerAddressOrderByWithRelationInput[];
    cursor?: Prisma.CustomerAddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerAddressScalarFieldEnum | Prisma.CustomerAddressScalarFieldEnum[];
};
export type CustomerAddressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerAddressSelect<ExtArgs> | null;
    omit?: Prisma.CustomerAddressOmit<ExtArgs> | null;
    include?: Prisma.CustomerAddressInclude<ExtArgs> | null;
    where?: Prisma.CustomerAddressWhereInput;
    orderBy?: Prisma.CustomerAddressOrderByWithRelationInput | Prisma.CustomerAddressOrderByWithRelationInput[];
    cursor?: Prisma.CustomerAddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerAddressScalarFieldEnum | Prisma.CustomerAddressScalarFieldEnum[];
};
export type CustomerAddressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerAddressSelect<ExtArgs> | null;
    omit?: Prisma.CustomerAddressOmit<ExtArgs> | null;
    include?: Prisma.CustomerAddressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerAddressCreateInput, Prisma.CustomerAddressUncheckedCreateInput>;
};
export type CustomerAddressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomerAddressCreateManyInput | Prisma.CustomerAddressCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomerAddressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerAddressSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerAddressOmit<ExtArgs> | null;
    data: Prisma.CustomerAddressCreateManyInput | Prisma.CustomerAddressCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CustomerAddressIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CustomerAddressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerAddressSelect<ExtArgs> | null;
    omit?: Prisma.CustomerAddressOmit<ExtArgs> | null;
    include?: Prisma.CustomerAddressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerAddressUpdateInput, Prisma.CustomerAddressUncheckedUpdateInput>;
    where: Prisma.CustomerAddressWhereUniqueInput;
};
export type CustomerAddressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomerAddressUpdateManyMutationInput, Prisma.CustomerAddressUncheckedUpdateManyInput>;
    where?: Prisma.CustomerAddressWhereInput;
    limit?: number;
};
export type CustomerAddressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerAddressSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerAddressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerAddressUpdateManyMutationInput, Prisma.CustomerAddressUncheckedUpdateManyInput>;
    where?: Prisma.CustomerAddressWhereInput;
    limit?: number;
    include?: Prisma.CustomerAddressIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CustomerAddressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerAddressSelect<ExtArgs> | null;
    omit?: Prisma.CustomerAddressOmit<ExtArgs> | null;
    include?: Prisma.CustomerAddressInclude<ExtArgs> | null;
    where: Prisma.CustomerAddressWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerAddressCreateInput, Prisma.CustomerAddressUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomerAddressUpdateInput, Prisma.CustomerAddressUncheckedUpdateInput>;
};
export type CustomerAddressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerAddressSelect<ExtArgs> | null;
    omit?: Prisma.CustomerAddressOmit<ExtArgs> | null;
    include?: Prisma.CustomerAddressInclude<ExtArgs> | null;
    where: Prisma.CustomerAddressWhereUniqueInput;
};
export type CustomerAddressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerAddressWhereInput;
    limit?: number;
};
export type CustomerAddressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerAddressSelect<ExtArgs> | null;
    omit?: Prisma.CustomerAddressOmit<ExtArgs> | null;
    include?: Prisma.CustomerAddressInclude<ExtArgs> | null;
};
