import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ConsentModel = runtime.Types.Result.DefaultSelection<Prisma.$ConsentPayload>;
export type AggregateConsent = {
    _count: ConsentCountAggregateOutputType | null;
    _min: ConsentMinAggregateOutputType | null;
    _max: ConsentMaxAggregateOutputType | null;
};
export type ConsentMinAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    channel: string | null;
    status: string | null;
    documentVersionId: string | null;
    grantedAt: Date | null;
    revokedAt: Date | null;
    ipAddress: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ConsentMaxAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    channel: string | null;
    status: string | null;
    documentVersionId: string | null;
    grantedAt: Date | null;
    revokedAt: Date | null;
    ipAddress: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ConsentCountAggregateOutputType = {
    id: number;
    customerId: number;
    channel: number;
    status: number;
    documentVersionId: number;
    grantedAt: number;
    revokedAt: number;
    ipAddress: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ConsentMinAggregateInputType = {
    id?: true;
    customerId?: true;
    channel?: true;
    status?: true;
    documentVersionId?: true;
    grantedAt?: true;
    revokedAt?: true;
    ipAddress?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ConsentMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    channel?: true;
    status?: true;
    documentVersionId?: true;
    grantedAt?: true;
    revokedAt?: true;
    ipAddress?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ConsentCountAggregateInputType = {
    id?: true;
    customerId?: true;
    channel?: true;
    status?: true;
    documentVersionId?: true;
    grantedAt?: true;
    revokedAt?: true;
    ipAddress?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ConsentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsentWhereInput;
    orderBy?: Prisma.ConsentOrderByWithRelationInput | Prisma.ConsentOrderByWithRelationInput[];
    cursor?: Prisma.ConsentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConsentCountAggregateInputType;
    _min?: ConsentMinAggregateInputType;
    _max?: ConsentMaxAggregateInputType;
};
export type GetConsentAggregateType<T extends ConsentAggregateArgs> = {
    [P in keyof T & keyof AggregateConsent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConsent[P]> : Prisma.GetScalarType<T[P], AggregateConsent[P]>;
};
export type ConsentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsentWhereInput;
    orderBy?: Prisma.ConsentOrderByWithAggregationInput | Prisma.ConsentOrderByWithAggregationInput[];
    by: Prisma.ConsentScalarFieldEnum[] | Prisma.ConsentScalarFieldEnum;
    having?: Prisma.ConsentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConsentCountAggregateInputType | true;
    _min?: ConsentMinAggregateInputType;
    _max?: ConsentMaxAggregateInputType;
};
export type ConsentGroupByOutputType = {
    id: string;
    customerId: string;
    channel: string;
    status: string;
    documentVersionId: string | null;
    grantedAt: Date | null;
    revokedAt: Date | null;
    ipAddress: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ConsentCountAggregateOutputType | null;
    _min: ConsentMinAggregateOutputType | null;
    _max: ConsentMaxAggregateOutputType | null;
};
export type GetConsentGroupByPayload<T extends ConsentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConsentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConsentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConsentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConsentGroupByOutputType[P]>;
}>>;
export type ConsentWhereInput = {
    AND?: Prisma.ConsentWhereInput | Prisma.ConsentWhereInput[];
    OR?: Prisma.ConsentWhereInput[];
    NOT?: Prisma.ConsentWhereInput | Prisma.ConsentWhereInput[];
    id?: Prisma.UuidFilter<"Consent"> | string;
    customerId?: Prisma.UuidFilter<"Consent"> | string;
    channel?: Prisma.StringFilter<"Consent"> | string;
    status?: Prisma.StringFilter<"Consent"> | string;
    documentVersionId?: Prisma.UuidNullableFilter<"Consent"> | string | null;
    grantedAt?: Prisma.DateTimeNullableFilter<"Consent"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"Consent"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"Consent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Consent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Consent"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    documentVersion?: Prisma.XOR<Prisma.ConsentDocumentVersionNullableScalarRelationFilter, Prisma.ConsentDocumentVersionWhereInput> | null;
};
export type ConsentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    grantedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    documentVersion?: Prisma.ConsentDocumentVersionOrderByWithRelationInput;
};
export type ConsentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ConsentWhereInput | Prisma.ConsentWhereInput[];
    OR?: Prisma.ConsentWhereInput[];
    NOT?: Prisma.ConsentWhereInput | Prisma.ConsentWhereInput[];
    customerId?: Prisma.UuidFilter<"Consent"> | string;
    channel?: Prisma.StringFilter<"Consent"> | string;
    status?: Prisma.StringFilter<"Consent"> | string;
    documentVersionId?: Prisma.UuidNullableFilter<"Consent"> | string | null;
    grantedAt?: Prisma.DateTimeNullableFilter<"Consent"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"Consent"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"Consent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Consent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Consent"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    documentVersion?: Prisma.XOR<Prisma.ConsentDocumentVersionNullableScalarRelationFilter, Prisma.ConsentDocumentVersionWhereInput> | null;
}, "id">;
export type ConsentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    grantedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    ipAddress?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ConsentCountOrderByAggregateInput;
    _max?: Prisma.ConsentMaxOrderByAggregateInput;
    _min?: Prisma.ConsentMinOrderByAggregateInput;
};
export type ConsentScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConsentScalarWhereWithAggregatesInput | Prisma.ConsentScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConsentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConsentScalarWhereWithAggregatesInput | Prisma.ConsentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Consent"> | string;
    customerId?: Prisma.UuidWithAggregatesFilter<"Consent"> | string;
    channel?: Prisma.StringWithAggregatesFilter<"Consent"> | string;
    status?: Prisma.StringWithAggregatesFilter<"Consent"> | string;
    documentVersionId?: Prisma.UuidNullableWithAggregatesFilter<"Consent"> | string | null;
    grantedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Consent"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Consent"> | Date | string | null;
    ipAddress?: Prisma.StringNullableWithAggregatesFilter<"Consent"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Consent"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Consent"> | Date | string;
};
export type ConsentCreateInput = {
    id?: string;
    channel: string;
    status?: string;
    grantedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutConsentsInput;
    documentVersion?: Prisma.ConsentDocumentVersionCreateNestedOneWithoutConsentsInput;
};
export type ConsentUncheckedCreateInput = {
    id?: string;
    customerId: string;
    channel: string;
    status?: string;
    documentVersionId?: string | null;
    grantedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutConsentsNestedInput;
    documentVersion?: Prisma.ConsentDocumentVersionUpdateOneWithoutConsentsNestedInput;
};
export type ConsentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsentCreateManyInput = {
    id?: string;
    customerId: string;
    channel: string;
    status?: string;
    documentVersionId?: string | null;
    grantedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsentListRelationFilter = {
    every?: Prisma.ConsentWhereInput;
    some?: Prisma.ConsentWhereInput;
    none?: Prisma.ConsentWhereInput;
};
export type ConsentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ConsentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentVersionId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConsentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentVersionId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConsentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    documentVersionId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    ipAddress?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ConsentCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ConsentCreateWithoutCustomerInput, Prisma.ConsentUncheckedCreateWithoutCustomerInput> | Prisma.ConsentCreateWithoutCustomerInput[] | Prisma.ConsentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ConsentCreateOrConnectWithoutCustomerInput | Prisma.ConsentCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ConsentCreateManyCustomerInputEnvelope;
    connect?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
};
export type ConsentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ConsentCreateWithoutCustomerInput, Prisma.ConsentUncheckedCreateWithoutCustomerInput> | Prisma.ConsentCreateWithoutCustomerInput[] | Prisma.ConsentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ConsentCreateOrConnectWithoutCustomerInput | Prisma.ConsentCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ConsentCreateManyCustomerInputEnvelope;
    connect?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
};
export type ConsentUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ConsentCreateWithoutCustomerInput, Prisma.ConsentUncheckedCreateWithoutCustomerInput> | Prisma.ConsentCreateWithoutCustomerInput[] | Prisma.ConsentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ConsentCreateOrConnectWithoutCustomerInput | Prisma.ConsentCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ConsentUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ConsentUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ConsentCreateManyCustomerInputEnvelope;
    set?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    disconnect?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    delete?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    connect?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    update?: Prisma.ConsentUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ConsentUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ConsentUpdateManyWithWhereWithoutCustomerInput | Prisma.ConsentUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ConsentScalarWhereInput | Prisma.ConsentScalarWhereInput[];
};
export type ConsentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ConsentCreateWithoutCustomerInput, Prisma.ConsentUncheckedCreateWithoutCustomerInput> | Prisma.ConsentCreateWithoutCustomerInput[] | Prisma.ConsentUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ConsentCreateOrConnectWithoutCustomerInput | Prisma.ConsentCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ConsentUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ConsentUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ConsentCreateManyCustomerInputEnvelope;
    set?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    disconnect?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    delete?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    connect?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    update?: Prisma.ConsentUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ConsentUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ConsentUpdateManyWithWhereWithoutCustomerInput | Prisma.ConsentUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ConsentScalarWhereInput | Prisma.ConsentScalarWhereInput[];
};
export type ConsentCreateNestedManyWithoutDocumentVersionInput = {
    create?: Prisma.XOR<Prisma.ConsentCreateWithoutDocumentVersionInput, Prisma.ConsentUncheckedCreateWithoutDocumentVersionInput> | Prisma.ConsentCreateWithoutDocumentVersionInput[] | Prisma.ConsentUncheckedCreateWithoutDocumentVersionInput[];
    connectOrCreate?: Prisma.ConsentCreateOrConnectWithoutDocumentVersionInput | Prisma.ConsentCreateOrConnectWithoutDocumentVersionInput[];
    createMany?: Prisma.ConsentCreateManyDocumentVersionInputEnvelope;
    connect?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
};
export type ConsentUncheckedCreateNestedManyWithoutDocumentVersionInput = {
    create?: Prisma.XOR<Prisma.ConsentCreateWithoutDocumentVersionInput, Prisma.ConsentUncheckedCreateWithoutDocumentVersionInput> | Prisma.ConsentCreateWithoutDocumentVersionInput[] | Prisma.ConsentUncheckedCreateWithoutDocumentVersionInput[];
    connectOrCreate?: Prisma.ConsentCreateOrConnectWithoutDocumentVersionInput | Prisma.ConsentCreateOrConnectWithoutDocumentVersionInput[];
    createMany?: Prisma.ConsentCreateManyDocumentVersionInputEnvelope;
    connect?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
};
export type ConsentUpdateManyWithoutDocumentVersionNestedInput = {
    create?: Prisma.XOR<Prisma.ConsentCreateWithoutDocumentVersionInput, Prisma.ConsentUncheckedCreateWithoutDocumentVersionInput> | Prisma.ConsentCreateWithoutDocumentVersionInput[] | Prisma.ConsentUncheckedCreateWithoutDocumentVersionInput[];
    connectOrCreate?: Prisma.ConsentCreateOrConnectWithoutDocumentVersionInput | Prisma.ConsentCreateOrConnectWithoutDocumentVersionInput[];
    upsert?: Prisma.ConsentUpsertWithWhereUniqueWithoutDocumentVersionInput | Prisma.ConsentUpsertWithWhereUniqueWithoutDocumentVersionInput[];
    createMany?: Prisma.ConsentCreateManyDocumentVersionInputEnvelope;
    set?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    disconnect?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    delete?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    connect?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    update?: Prisma.ConsentUpdateWithWhereUniqueWithoutDocumentVersionInput | Prisma.ConsentUpdateWithWhereUniqueWithoutDocumentVersionInput[];
    updateMany?: Prisma.ConsentUpdateManyWithWhereWithoutDocumentVersionInput | Prisma.ConsentUpdateManyWithWhereWithoutDocumentVersionInput[];
    deleteMany?: Prisma.ConsentScalarWhereInput | Prisma.ConsentScalarWhereInput[];
};
export type ConsentUncheckedUpdateManyWithoutDocumentVersionNestedInput = {
    create?: Prisma.XOR<Prisma.ConsentCreateWithoutDocumentVersionInput, Prisma.ConsentUncheckedCreateWithoutDocumentVersionInput> | Prisma.ConsentCreateWithoutDocumentVersionInput[] | Prisma.ConsentUncheckedCreateWithoutDocumentVersionInput[];
    connectOrCreate?: Prisma.ConsentCreateOrConnectWithoutDocumentVersionInput | Prisma.ConsentCreateOrConnectWithoutDocumentVersionInput[];
    upsert?: Prisma.ConsentUpsertWithWhereUniqueWithoutDocumentVersionInput | Prisma.ConsentUpsertWithWhereUniqueWithoutDocumentVersionInput[];
    createMany?: Prisma.ConsentCreateManyDocumentVersionInputEnvelope;
    set?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    disconnect?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    delete?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    connect?: Prisma.ConsentWhereUniqueInput | Prisma.ConsentWhereUniqueInput[];
    update?: Prisma.ConsentUpdateWithWhereUniqueWithoutDocumentVersionInput | Prisma.ConsentUpdateWithWhereUniqueWithoutDocumentVersionInput[];
    updateMany?: Prisma.ConsentUpdateManyWithWhereWithoutDocumentVersionInput | Prisma.ConsentUpdateManyWithWhereWithoutDocumentVersionInput[];
    deleteMany?: Prisma.ConsentScalarWhereInput | Prisma.ConsentScalarWhereInput[];
};
export type ConsentCreateWithoutCustomerInput = {
    id?: string;
    channel: string;
    status?: string;
    grantedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    documentVersion?: Prisma.ConsentDocumentVersionCreateNestedOneWithoutConsentsInput;
};
export type ConsentUncheckedCreateWithoutCustomerInput = {
    id?: string;
    channel: string;
    status?: string;
    documentVersionId?: string | null;
    grantedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsentCreateOrConnectWithoutCustomerInput = {
    where: Prisma.ConsentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsentCreateWithoutCustomerInput, Prisma.ConsentUncheckedCreateWithoutCustomerInput>;
};
export type ConsentCreateManyCustomerInputEnvelope = {
    data: Prisma.ConsentCreateManyCustomerInput | Prisma.ConsentCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type ConsentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ConsentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsentUpdateWithoutCustomerInput, Prisma.ConsentUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.ConsentCreateWithoutCustomerInput, Prisma.ConsentUncheckedCreateWithoutCustomerInput>;
};
export type ConsentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ConsentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsentUpdateWithoutCustomerInput, Prisma.ConsentUncheckedUpdateWithoutCustomerInput>;
};
export type ConsentUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.ConsentScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsentUpdateManyMutationInput, Prisma.ConsentUncheckedUpdateManyWithoutCustomerInput>;
};
export type ConsentScalarWhereInput = {
    AND?: Prisma.ConsentScalarWhereInput | Prisma.ConsentScalarWhereInput[];
    OR?: Prisma.ConsentScalarWhereInput[];
    NOT?: Prisma.ConsentScalarWhereInput | Prisma.ConsentScalarWhereInput[];
    id?: Prisma.UuidFilter<"Consent"> | string;
    customerId?: Prisma.UuidFilter<"Consent"> | string;
    channel?: Prisma.StringFilter<"Consent"> | string;
    status?: Prisma.StringFilter<"Consent"> | string;
    documentVersionId?: Prisma.UuidNullableFilter<"Consent"> | string | null;
    grantedAt?: Prisma.DateTimeNullableFilter<"Consent"> | Date | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"Consent"> | Date | string | null;
    ipAddress?: Prisma.StringNullableFilter<"Consent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Consent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Consent"> | Date | string;
};
export type ConsentCreateWithoutDocumentVersionInput = {
    id?: string;
    channel: string;
    status?: string;
    grantedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutConsentsInput;
};
export type ConsentUncheckedCreateWithoutDocumentVersionInput = {
    id?: string;
    customerId: string;
    channel: string;
    status?: string;
    grantedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsentCreateOrConnectWithoutDocumentVersionInput = {
    where: Prisma.ConsentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsentCreateWithoutDocumentVersionInput, Prisma.ConsentUncheckedCreateWithoutDocumentVersionInput>;
};
export type ConsentCreateManyDocumentVersionInputEnvelope = {
    data: Prisma.ConsentCreateManyDocumentVersionInput | Prisma.ConsentCreateManyDocumentVersionInput[];
    skipDuplicates?: boolean;
};
export type ConsentUpsertWithWhereUniqueWithoutDocumentVersionInput = {
    where: Prisma.ConsentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConsentUpdateWithoutDocumentVersionInput, Prisma.ConsentUncheckedUpdateWithoutDocumentVersionInput>;
    create: Prisma.XOR<Prisma.ConsentCreateWithoutDocumentVersionInput, Prisma.ConsentUncheckedCreateWithoutDocumentVersionInput>;
};
export type ConsentUpdateWithWhereUniqueWithoutDocumentVersionInput = {
    where: Prisma.ConsentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConsentUpdateWithoutDocumentVersionInput, Prisma.ConsentUncheckedUpdateWithoutDocumentVersionInput>;
};
export type ConsentUpdateManyWithWhereWithoutDocumentVersionInput = {
    where: Prisma.ConsentScalarWhereInput;
    data: Prisma.XOR<Prisma.ConsentUpdateManyMutationInput, Prisma.ConsentUncheckedUpdateManyWithoutDocumentVersionInput>;
};
export type ConsentCreateManyCustomerInput = {
    id?: string;
    channel: string;
    status?: string;
    documentVersionId?: string | null;
    grantedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsentUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    documentVersion?: Prisma.ConsentDocumentVersionUpdateOneWithoutConsentsNestedInput;
};
export type ConsentUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsentUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    documentVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grantedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsentCreateManyDocumentVersionInput = {
    id?: string;
    customerId: string;
    channel: string;
    status?: string;
    grantedAt?: Date | string | null;
    revokedAt?: Date | string | null;
    ipAddress?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ConsentUpdateWithoutDocumentVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutConsentsNestedInput;
};
export type ConsentUncheckedUpdateWithoutDocumentVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsentUncheckedUpdateManyWithoutDocumentVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ipAddress?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    channel?: boolean;
    status?: boolean;
    documentVersionId?: boolean;
    grantedAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    documentVersion?: boolean | Prisma.Consent$documentVersionArgs<ExtArgs>;
}, ExtArgs["result"]["consent"]>;
export type ConsentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    channel?: boolean;
    status?: boolean;
    documentVersionId?: boolean;
    grantedAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    documentVersion?: boolean | Prisma.Consent$documentVersionArgs<ExtArgs>;
}, ExtArgs["result"]["consent"]>;
export type ConsentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    channel?: boolean;
    status?: boolean;
    documentVersionId?: boolean;
    grantedAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    documentVersion?: boolean | Prisma.Consent$documentVersionArgs<ExtArgs>;
}, ExtArgs["result"]["consent"]>;
export type ConsentSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    channel?: boolean;
    status?: boolean;
    documentVersionId?: boolean;
    grantedAt?: boolean;
    revokedAt?: boolean;
    ipAddress?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ConsentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "channel" | "status" | "documentVersionId" | "grantedAt" | "revokedAt" | "ipAddress" | "createdAt" | "updatedAt", ExtArgs["result"]["consent"]>;
export type ConsentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    documentVersion?: boolean | Prisma.Consent$documentVersionArgs<ExtArgs>;
};
export type ConsentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    documentVersion?: boolean | Prisma.Consent$documentVersionArgs<ExtArgs>;
};
export type ConsentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    documentVersion?: boolean | Prisma.Consent$documentVersionArgs<ExtArgs>;
};
export type $ConsentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Consent";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        documentVersion: Prisma.$ConsentDocumentVersionPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customerId: string;
        channel: string;
        status: string;
        documentVersionId: string | null;
        grantedAt: Date | null;
        revokedAt: Date | null;
        ipAddress: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["consent"]>;
    composites: {};
};
export type ConsentGetPayload<S extends boolean | null | undefined | ConsentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConsentPayload, S>;
export type ConsentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConsentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConsentCountAggregateInputType | true;
};
export interface ConsentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Consent'];
        meta: {
            name: 'Consent';
        };
    };
    findUnique<T extends ConsentFindUniqueArgs>(args: Prisma.SelectSubset<T, ConsentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConsentClient<runtime.Types.Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConsentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConsentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsentClient<runtime.Types.Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConsentFindFirstArgs>(args?: Prisma.SelectSubset<T, ConsentFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConsentClient<runtime.Types.Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConsentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConsentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsentClient<runtime.Types.Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConsentFindManyArgs>(args?: Prisma.SelectSubset<T, ConsentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConsentCreateArgs>(args: Prisma.SelectSubset<T, ConsentCreateArgs<ExtArgs>>): Prisma.Prisma__ConsentClient<runtime.Types.Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConsentCreateManyArgs>(args?: Prisma.SelectSubset<T, ConsentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConsentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConsentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConsentDeleteArgs>(args: Prisma.SelectSubset<T, ConsentDeleteArgs<ExtArgs>>): Prisma.Prisma__ConsentClient<runtime.Types.Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConsentUpdateArgs>(args: Prisma.SelectSubset<T, ConsentUpdateArgs<ExtArgs>>): Prisma.Prisma__ConsentClient<runtime.Types.Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConsentDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConsentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConsentUpdateManyArgs>(args: Prisma.SelectSubset<T, ConsentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConsentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConsentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConsentUpsertArgs>(args: Prisma.SelectSubset<T, ConsentUpsertArgs<ExtArgs>>): Prisma.Prisma__ConsentClient<runtime.Types.Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConsentCountArgs>(args?: Prisma.Subset<T, ConsentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConsentCountAggregateOutputType> : number>;
    aggregate<T extends ConsentAggregateArgs>(args: Prisma.Subset<T, ConsentAggregateArgs>): Prisma.PrismaPromise<GetConsentAggregateType<T>>;
    groupBy<T extends ConsentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConsentGroupByArgs['orderBy'];
    } : {
        orderBy?: ConsentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConsentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConsentFieldRefs;
}
export interface Prisma__ConsentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    documentVersion<T extends Prisma.Consent$documentVersionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Consent$documentVersionArgs<ExtArgs>>): Prisma.Prisma__ConsentDocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$ConsentDocumentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConsentFieldRefs {
    readonly id: Prisma.FieldRef<"Consent", 'String'>;
    readonly customerId: Prisma.FieldRef<"Consent", 'String'>;
    readonly channel: Prisma.FieldRef<"Consent", 'String'>;
    readonly status: Prisma.FieldRef<"Consent", 'String'>;
    readonly documentVersionId: Prisma.FieldRef<"Consent", 'String'>;
    readonly grantedAt: Prisma.FieldRef<"Consent", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"Consent", 'DateTime'>;
    readonly ipAddress: Prisma.FieldRef<"Consent", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Consent", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Consent", 'DateTime'>;
}
export type ConsentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentSelect<ExtArgs> | null;
    omit?: Prisma.ConsentOmit<ExtArgs> | null;
    include?: Prisma.ConsentInclude<ExtArgs> | null;
    where: Prisma.ConsentWhereUniqueInput;
};
export type ConsentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentSelect<ExtArgs> | null;
    omit?: Prisma.ConsentOmit<ExtArgs> | null;
    include?: Prisma.ConsentInclude<ExtArgs> | null;
    where: Prisma.ConsentWhereUniqueInput;
};
export type ConsentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentSelect<ExtArgs> | null;
    omit?: Prisma.ConsentOmit<ExtArgs> | null;
    include?: Prisma.ConsentInclude<ExtArgs> | null;
    where?: Prisma.ConsentWhereInput;
    orderBy?: Prisma.ConsentOrderByWithRelationInput | Prisma.ConsentOrderByWithRelationInput[];
    cursor?: Prisma.ConsentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsentScalarFieldEnum | Prisma.ConsentScalarFieldEnum[];
};
export type ConsentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentSelect<ExtArgs> | null;
    omit?: Prisma.ConsentOmit<ExtArgs> | null;
    include?: Prisma.ConsentInclude<ExtArgs> | null;
    where?: Prisma.ConsentWhereInput;
    orderBy?: Prisma.ConsentOrderByWithRelationInput | Prisma.ConsentOrderByWithRelationInput[];
    cursor?: Prisma.ConsentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsentScalarFieldEnum | Prisma.ConsentScalarFieldEnum[];
};
export type ConsentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentSelect<ExtArgs> | null;
    omit?: Prisma.ConsentOmit<ExtArgs> | null;
    include?: Prisma.ConsentInclude<ExtArgs> | null;
    where?: Prisma.ConsentWhereInput;
    orderBy?: Prisma.ConsentOrderByWithRelationInput | Prisma.ConsentOrderByWithRelationInput[];
    cursor?: Prisma.ConsentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsentScalarFieldEnum | Prisma.ConsentScalarFieldEnum[];
};
export type ConsentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentSelect<ExtArgs> | null;
    omit?: Prisma.ConsentOmit<ExtArgs> | null;
    include?: Prisma.ConsentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsentCreateInput, Prisma.ConsentUncheckedCreateInput>;
};
export type ConsentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConsentCreateManyInput | Prisma.ConsentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConsentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConsentOmit<ExtArgs> | null;
    data: Prisma.ConsentCreateManyInput | Prisma.ConsentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ConsentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ConsentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentSelect<ExtArgs> | null;
    omit?: Prisma.ConsentOmit<ExtArgs> | null;
    include?: Prisma.ConsentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsentUpdateInput, Prisma.ConsentUncheckedUpdateInput>;
    where: Prisma.ConsentWhereUniqueInput;
};
export type ConsentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConsentUpdateManyMutationInput, Prisma.ConsentUncheckedUpdateManyInput>;
    where?: Prisma.ConsentWhereInput;
    limit?: number;
};
export type ConsentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConsentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsentUpdateManyMutationInput, Prisma.ConsentUncheckedUpdateManyInput>;
    where?: Prisma.ConsentWhereInput;
    limit?: number;
    include?: Prisma.ConsentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ConsentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentSelect<ExtArgs> | null;
    omit?: Prisma.ConsentOmit<ExtArgs> | null;
    include?: Prisma.ConsentInclude<ExtArgs> | null;
    where: Prisma.ConsentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsentCreateInput, Prisma.ConsentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConsentUpdateInput, Prisma.ConsentUncheckedUpdateInput>;
};
export type ConsentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentSelect<ExtArgs> | null;
    omit?: Prisma.ConsentOmit<ExtArgs> | null;
    include?: Prisma.ConsentInclude<ExtArgs> | null;
    where: Prisma.ConsentWhereUniqueInput;
};
export type ConsentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsentWhereInput;
    limit?: number;
};
export type Consent$documentVersionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentDocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ConsentDocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.ConsentDocumentVersionInclude<ExtArgs> | null;
    where?: Prisma.ConsentDocumentVersionWhereInput;
};
export type ConsentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentSelect<ExtArgs> | null;
    omit?: Prisma.ConsentOmit<ExtArgs> | null;
    include?: Prisma.ConsentInclude<ExtArgs> | null;
};
