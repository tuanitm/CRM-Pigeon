import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type segment_membershipModel = runtime.Types.Result.DefaultSelection<Prisma.$segment_membershipPayload>;
export type AggregateSegment_membership = {
    _count: Segment_membershipCountAggregateOutputType | null;
    _min: Segment_membershipMinAggregateOutputType | null;
    _max: Segment_membershipMaxAggregateOutputType | null;
};
export type Segment_membershipMinAggregateOutputType = {
    id: string | null;
    segment_id: string | null;
    customer_id: string | null;
    entered_at: Date | null;
    exited_at: Date | null;
};
export type Segment_membershipMaxAggregateOutputType = {
    id: string | null;
    segment_id: string | null;
    customer_id: string | null;
    entered_at: Date | null;
    exited_at: Date | null;
};
export type Segment_membershipCountAggregateOutputType = {
    id: number;
    segment_id: number;
    customer_id: number;
    entered_at: number;
    exited_at: number;
    _all: number;
};
export type Segment_membershipMinAggregateInputType = {
    id?: true;
    segment_id?: true;
    customer_id?: true;
    entered_at?: true;
    exited_at?: true;
};
export type Segment_membershipMaxAggregateInputType = {
    id?: true;
    segment_id?: true;
    customer_id?: true;
    entered_at?: true;
    exited_at?: true;
};
export type Segment_membershipCountAggregateInputType = {
    id?: true;
    segment_id?: true;
    customer_id?: true;
    entered_at?: true;
    exited_at?: true;
    _all?: true;
};
export type Segment_membershipAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.segment_membershipWhereInput;
    orderBy?: Prisma.segment_membershipOrderByWithRelationInput | Prisma.segment_membershipOrderByWithRelationInput[];
    cursor?: Prisma.segment_membershipWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Segment_membershipCountAggregateInputType;
    _min?: Segment_membershipMinAggregateInputType;
    _max?: Segment_membershipMaxAggregateInputType;
};
export type GetSegment_membershipAggregateType<T extends Segment_membershipAggregateArgs> = {
    [P in keyof T & keyof AggregateSegment_membership]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSegment_membership[P]> : Prisma.GetScalarType<T[P], AggregateSegment_membership[P]>;
};
export type segment_membershipGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.segment_membershipWhereInput;
    orderBy?: Prisma.segment_membershipOrderByWithAggregationInput | Prisma.segment_membershipOrderByWithAggregationInput[];
    by: Prisma.Segment_membershipScalarFieldEnum[] | Prisma.Segment_membershipScalarFieldEnum;
    having?: Prisma.segment_membershipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Segment_membershipCountAggregateInputType | true;
    _min?: Segment_membershipMinAggregateInputType;
    _max?: Segment_membershipMaxAggregateInputType;
};
export type Segment_membershipGroupByOutputType = {
    id: string;
    segment_id: string;
    customer_id: string;
    entered_at: Date;
    exited_at: Date | null;
    _count: Segment_membershipCountAggregateOutputType | null;
    _min: Segment_membershipMinAggregateOutputType | null;
    _max: Segment_membershipMaxAggregateOutputType | null;
};
export type GetSegment_membershipGroupByPayload<T extends segment_membershipGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Segment_membershipGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Segment_membershipGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Segment_membershipGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Segment_membershipGroupByOutputType[P]>;
}>>;
export type segment_membershipWhereInput = {
    AND?: Prisma.segment_membershipWhereInput | Prisma.segment_membershipWhereInput[];
    OR?: Prisma.segment_membershipWhereInput[];
    NOT?: Prisma.segment_membershipWhereInput | Prisma.segment_membershipWhereInput[];
    id?: Prisma.UuidFilter<"segment_membership"> | string;
    segment_id?: Prisma.UuidFilter<"segment_membership"> | string;
    customer_id?: Prisma.UuidFilter<"segment_membership"> | string;
    entered_at?: Prisma.DateTimeFilter<"segment_membership"> | Date | string;
    exited_at?: Prisma.DateTimeNullableFilter<"segment_membership"> | Date | string | null;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    segment?: Prisma.XOR<Prisma.SegmentScalarRelationFilter, Prisma.SegmentWhereInput>;
};
export type segment_membershipOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    segment_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    entered_at?: Prisma.SortOrder;
    exited_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    segment?: Prisma.SegmentOrderByWithRelationInput;
};
export type segment_membershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    segment_id_customer_id?: Prisma.segment_membershipSegment_idCustomer_idCompoundUniqueInput;
    AND?: Prisma.segment_membershipWhereInput | Prisma.segment_membershipWhereInput[];
    OR?: Prisma.segment_membershipWhereInput[];
    NOT?: Prisma.segment_membershipWhereInput | Prisma.segment_membershipWhereInput[];
    segment_id?: Prisma.UuidFilter<"segment_membership"> | string;
    customer_id?: Prisma.UuidFilter<"segment_membership"> | string;
    entered_at?: Prisma.DateTimeFilter<"segment_membership"> | Date | string;
    exited_at?: Prisma.DateTimeNullableFilter<"segment_membership"> | Date | string | null;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    segment?: Prisma.XOR<Prisma.SegmentScalarRelationFilter, Prisma.SegmentWhereInput>;
}, "id" | "segment_id_customer_id">;
export type segment_membershipOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    segment_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    entered_at?: Prisma.SortOrder;
    exited_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.segment_membershipCountOrderByAggregateInput;
    _max?: Prisma.segment_membershipMaxOrderByAggregateInput;
    _min?: Prisma.segment_membershipMinOrderByAggregateInput;
};
export type segment_membershipScalarWhereWithAggregatesInput = {
    AND?: Prisma.segment_membershipScalarWhereWithAggregatesInput | Prisma.segment_membershipScalarWhereWithAggregatesInput[];
    OR?: Prisma.segment_membershipScalarWhereWithAggregatesInput[];
    NOT?: Prisma.segment_membershipScalarWhereWithAggregatesInput | Prisma.segment_membershipScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"segment_membership"> | string;
    segment_id?: Prisma.UuidWithAggregatesFilter<"segment_membership"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"segment_membership"> | string;
    entered_at?: Prisma.DateTimeWithAggregatesFilter<"segment_membership"> | Date | string;
    exited_at?: Prisma.DateTimeNullableWithAggregatesFilter<"segment_membership"> | Date | string | null;
};
export type segment_membershipCreateInput = {
    id?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    customer: Prisma.CustomerCreateNestedOneWithoutSegment_membershipInput;
    segment: Prisma.SegmentCreateNestedOneWithoutSegment_membershipInput;
};
export type segment_membershipUncheckedCreateInput = {
    id?: string;
    segment_id: string;
    customer_id: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
};
export type segment_membershipUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutSegment_membershipNestedInput;
    segment?: Prisma.SegmentUpdateOneRequiredWithoutSegment_membershipNestedInput;
};
export type segment_membershipUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    segment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type segment_membershipCreateManyInput = {
    id?: string;
    segment_id: string;
    customer_id: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
};
export type segment_membershipUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type segment_membershipUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    segment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Segment_membershipListRelationFilter = {
    every?: Prisma.segment_membershipWhereInput;
    some?: Prisma.segment_membershipWhereInput;
    none?: Prisma.segment_membershipWhereInput;
};
export type segment_membershipOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type segment_membershipSegment_idCustomer_idCompoundUniqueInput = {
    segment_id: string;
    customer_id: string;
};
export type segment_membershipCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    segment_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    entered_at?: Prisma.SortOrder;
    exited_at?: Prisma.SortOrder;
};
export type segment_membershipMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    segment_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    entered_at?: Prisma.SortOrder;
    exited_at?: Prisma.SortOrder;
};
export type segment_membershipMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    segment_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    entered_at?: Prisma.SortOrder;
    exited_at?: Prisma.SortOrder;
};
export type segment_membershipCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.segment_membershipCreateWithoutCustomerInput, Prisma.segment_membershipUncheckedCreateWithoutCustomerInput> | Prisma.segment_membershipCreateWithoutCustomerInput[] | Prisma.segment_membershipUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.segment_membershipCreateOrConnectWithoutCustomerInput | Prisma.segment_membershipCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.segment_membershipCreateManyCustomerInputEnvelope;
    connect?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
};
export type segment_membershipUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.segment_membershipCreateWithoutCustomerInput, Prisma.segment_membershipUncheckedCreateWithoutCustomerInput> | Prisma.segment_membershipCreateWithoutCustomerInput[] | Prisma.segment_membershipUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.segment_membershipCreateOrConnectWithoutCustomerInput | Prisma.segment_membershipCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.segment_membershipCreateManyCustomerInputEnvelope;
    connect?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
};
export type segment_membershipUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.segment_membershipCreateWithoutCustomerInput, Prisma.segment_membershipUncheckedCreateWithoutCustomerInput> | Prisma.segment_membershipCreateWithoutCustomerInput[] | Prisma.segment_membershipUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.segment_membershipCreateOrConnectWithoutCustomerInput | Prisma.segment_membershipCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.segment_membershipUpsertWithWhereUniqueWithoutCustomerInput | Prisma.segment_membershipUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.segment_membershipCreateManyCustomerInputEnvelope;
    set?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    disconnect?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    delete?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    connect?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    update?: Prisma.segment_membershipUpdateWithWhereUniqueWithoutCustomerInput | Prisma.segment_membershipUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.segment_membershipUpdateManyWithWhereWithoutCustomerInput | Prisma.segment_membershipUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.segment_membershipScalarWhereInput | Prisma.segment_membershipScalarWhereInput[];
};
export type segment_membershipUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.segment_membershipCreateWithoutCustomerInput, Prisma.segment_membershipUncheckedCreateWithoutCustomerInput> | Prisma.segment_membershipCreateWithoutCustomerInput[] | Prisma.segment_membershipUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.segment_membershipCreateOrConnectWithoutCustomerInput | Prisma.segment_membershipCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.segment_membershipUpsertWithWhereUniqueWithoutCustomerInput | Prisma.segment_membershipUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.segment_membershipCreateManyCustomerInputEnvelope;
    set?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    disconnect?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    delete?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    connect?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    update?: Prisma.segment_membershipUpdateWithWhereUniqueWithoutCustomerInput | Prisma.segment_membershipUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.segment_membershipUpdateManyWithWhereWithoutCustomerInput | Prisma.segment_membershipUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.segment_membershipScalarWhereInput | Prisma.segment_membershipScalarWhereInput[];
};
export type segment_membershipCreateNestedManyWithoutSegmentInput = {
    create?: Prisma.XOR<Prisma.segment_membershipCreateWithoutSegmentInput, Prisma.segment_membershipUncheckedCreateWithoutSegmentInput> | Prisma.segment_membershipCreateWithoutSegmentInput[] | Prisma.segment_membershipUncheckedCreateWithoutSegmentInput[];
    connectOrCreate?: Prisma.segment_membershipCreateOrConnectWithoutSegmentInput | Prisma.segment_membershipCreateOrConnectWithoutSegmentInput[];
    createMany?: Prisma.segment_membershipCreateManySegmentInputEnvelope;
    connect?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
};
export type segment_membershipUncheckedCreateNestedManyWithoutSegmentInput = {
    create?: Prisma.XOR<Prisma.segment_membershipCreateWithoutSegmentInput, Prisma.segment_membershipUncheckedCreateWithoutSegmentInput> | Prisma.segment_membershipCreateWithoutSegmentInput[] | Prisma.segment_membershipUncheckedCreateWithoutSegmentInput[];
    connectOrCreate?: Prisma.segment_membershipCreateOrConnectWithoutSegmentInput | Prisma.segment_membershipCreateOrConnectWithoutSegmentInput[];
    createMany?: Prisma.segment_membershipCreateManySegmentInputEnvelope;
    connect?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
};
export type segment_membershipUpdateManyWithoutSegmentNestedInput = {
    create?: Prisma.XOR<Prisma.segment_membershipCreateWithoutSegmentInput, Prisma.segment_membershipUncheckedCreateWithoutSegmentInput> | Prisma.segment_membershipCreateWithoutSegmentInput[] | Prisma.segment_membershipUncheckedCreateWithoutSegmentInput[];
    connectOrCreate?: Prisma.segment_membershipCreateOrConnectWithoutSegmentInput | Prisma.segment_membershipCreateOrConnectWithoutSegmentInput[];
    upsert?: Prisma.segment_membershipUpsertWithWhereUniqueWithoutSegmentInput | Prisma.segment_membershipUpsertWithWhereUniqueWithoutSegmentInput[];
    createMany?: Prisma.segment_membershipCreateManySegmentInputEnvelope;
    set?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    disconnect?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    delete?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    connect?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    update?: Prisma.segment_membershipUpdateWithWhereUniqueWithoutSegmentInput | Prisma.segment_membershipUpdateWithWhereUniqueWithoutSegmentInput[];
    updateMany?: Prisma.segment_membershipUpdateManyWithWhereWithoutSegmentInput | Prisma.segment_membershipUpdateManyWithWhereWithoutSegmentInput[];
    deleteMany?: Prisma.segment_membershipScalarWhereInput | Prisma.segment_membershipScalarWhereInput[];
};
export type segment_membershipUncheckedUpdateManyWithoutSegmentNestedInput = {
    create?: Prisma.XOR<Prisma.segment_membershipCreateWithoutSegmentInput, Prisma.segment_membershipUncheckedCreateWithoutSegmentInput> | Prisma.segment_membershipCreateWithoutSegmentInput[] | Prisma.segment_membershipUncheckedCreateWithoutSegmentInput[];
    connectOrCreate?: Prisma.segment_membershipCreateOrConnectWithoutSegmentInput | Prisma.segment_membershipCreateOrConnectWithoutSegmentInput[];
    upsert?: Prisma.segment_membershipUpsertWithWhereUniqueWithoutSegmentInput | Prisma.segment_membershipUpsertWithWhereUniqueWithoutSegmentInput[];
    createMany?: Prisma.segment_membershipCreateManySegmentInputEnvelope;
    set?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    disconnect?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    delete?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    connect?: Prisma.segment_membershipWhereUniqueInput | Prisma.segment_membershipWhereUniqueInput[];
    update?: Prisma.segment_membershipUpdateWithWhereUniqueWithoutSegmentInput | Prisma.segment_membershipUpdateWithWhereUniqueWithoutSegmentInput[];
    updateMany?: Prisma.segment_membershipUpdateManyWithWhereWithoutSegmentInput | Prisma.segment_membershipUpdateManyWithWhereWithoutSegmentInput[];
    deleteMany?: Prisma.segment_membershipScalarWhereInput | Prisma.segment_membershipScalarWhereInput[];
};
export type segment_membershipCreateWithoutCustomerInput = {
    id?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    segment: Prisma.SegmentCreateNestedOneWithoutSegment_membershipInput;
};
export type segment_membershipUncheckedCreateWithoutCustomerInput = {
    id?: string;
    segment_id: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
};
export type segment_membershipCreateOrConnectWithoutCustomerInput = {
    where: Prisma.segment_membershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.segment_membershipCreateWithoutCustomerInput, Prisma.segment_membershipUncheckedCreateWithoutCustomerInput>;
};
export type segment_membershipCreateManyCustomerInputEnvelope = {
    data: Prisma.segment_membershipCreateManyCustomerInput | Prisma.segment_membershipCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type segment_membershipUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.segment_membershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.segment_membershipUpdateWithoutCustomerInput, Prisma.segment_membershipUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.segment_membershipCreateWithoutCustomerInput, Prisma.segment_membershipUncheckedCreateWithoutCustomerInput>;
};
export type segment_membershipUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.segment_membershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.segment_membershipUpdateWithoutCustomerInput, Prisma.segment_membershipUncheckedUpdateWithoutCustomerInput>;
};
export type segment_membershipUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.segment_membershipScalarWhereInput;
    data: Prisma.XOR<Prisma.segment_membershipUpdateManyMutationInput, Prisma.segment_membershipUncheckedUpdateManyWithoutCustomerInput>;
};
export type segment_membershipScalarWhereInput = {
    AND?: Prisma.segment_membershipScalarWhereInput | Prisma.segment_membershipScalarWhereInput[];
    OR?: Prisma.segment_membershipScalarWhereInput[];
    NOT?: Prisma.segment_membershipScalarWhereInput | Prisma.segment_membershipScalarWhereInput[];
    id?: Prisma.UuidFilter<"segment_membership"> | string;
    segment_id?: Prisma.UuidFilter<"segment_membership"> | string;
    customer_id?: Prisma.UuidFilter<"segment_membership"> | string;
    entered_at?: Prisma.DateTimeFilter<"segment_membership"> | Date | string;
    exited_at?: Prisma.DateTimeNullableFilter<"segment_membership"> | Date | string | null;
};
export type segment_membershipCreateWithoutSegmentInput = {
    id?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    customer: Prisma.CustomerCreateNestedOneWithoutSegment_membershipInput;
};
export type segment_membershipUncheckedCreateWithoutSegmentInput = {
    id?: string;
    customer_id: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
};
export type segment_membershipCreateOrConnectWithoutSegmentInput = {
    where: Prisma.segment_membershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.segment_membershipCreateWithoutSegmentInput, Prisma.segment_membershipUncheckedCreateWithoutSegmentInput>;
};
export type segment_membershipCreateManySegmentInputEnvelope = {
    data: Prisma.segment_membershipCreateManySegmentInput | Prisma.segment_membershipCreateManySegmentInput[];
    skipDuplicates?: boolean;
};
export type segment_membershipUpsertWithWhereUniqueWithoutSegmentInput = {
    where: Prisma.segment_membershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.segment_membershipUpdateWithoutSegmentInput, Prisma.segment_membershipUncheckedUpdateWithoutSegmentInput>;
    create: Prisma.XOR<Prisma.segment_membershipCreateWithoutSegmentInput, Prisma.segment_membershipUncheckedCreateWithoutSegmentInput>;
};
export type segment_membershipUpdateWithWhereUniqueWithoutSegmentInput = {
    where: Prisma.segment_membershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.segment_membershipUpdateWithoutSegmentInput, Prisma.segment_membershipUncheckedUpdateWithoutSegmentInput>;
};
export type segment_membershipUpdateManyWithWhereWithoutSegmentInput = {
    where: Prisma.segment_membershipScalarWhereInput;
    data: Prisma.XOR<Prisma.segment_membershipUpdateManyMutationInput, Prisma.segment_membershipUncheckedUpdateManyWithoutSegmentInput>;
};
export type segment_membershipCreateManyCustomerInput = {
    id?: string;
    segment_id: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
};
export type segment_membershipUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    segment?: Prisma.SegmentUpdateOneRequiredWithoutSegment_membershipNestedInput;
};
export type segment_membershipUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    segment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type segment_membershipUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    segment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type segment_membershipCreateManySegmentInput = {
    id?: string;
    customer_id: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
};
export type segment_membershipUpdateWithoutSegmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutSegment_membershipNestedInput;
};
export type segment_membershipUncheckedUpdateWithoutSegmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type segment_membershipUncheckedUpdateManyWithoutSegmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type segment_membershipSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    segment_id?: boolean;
    customer_id?: boolean;
    entered_at?: boolean;
    exited_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    segment?: boolean | Prisma.SegmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["segment_membership"]>;
export type segment_membershipSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    segment_id?: boolean;
    customer_id?: boolean;
    entered_at?: boolean;
    exited_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    segment?: boolean | Prisma.SegmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["segment_membership"]>;
export type segment_membershipSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    segment_id?: boolean;
    customer_id?: boolean;
    entered_at?: boolean;
    exited_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    segment?: boolean | Prisma.SegmentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["segment_membership"]>;
export type segment_membershipSelectScalar = {
    id?: boolean;
    segment_id?: boolean;
    customer_id?: boolean;
    entered_at?: boolean;
    exited_at?: boolean;
};
export type segment_membershipOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "segment_id" | "customer_id" | "entered_at" | "exited_at", ExtArgs["result"]["segment_membership"]>;
export type segment_membershipInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    segment?: boolean | Prisma.SegmentDefaultArgs<ExtArgs>;
};
export type segment_membershipIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    segment?: boolean | Prisma.SegmentDefaultArgs<ExtArgs>;
};
export type segment_membershipIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    segment?: boolean | Prisma.SegmentDefaultArgs<ExtArgs>;
};
export type $segment_membershipPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "segment_membership";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        segment: Prisma.$SegmentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        segment_id: string;
        customer_id: string;
        entered_at: Date;
        exited_at: Date | null;
    }, ExtArgs["result"]["segment_membership"]>;
    composites: {};
};
export type segment_membershipGetPayload<S extends boolean | null | undefined | segment_membershipDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$segment_membershipPayload, S>;
export type segment_membershipCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<segment_membershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Segment_membershipCountAggregateInputType | true;
};
export interface segment_membershipDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['segment_membership'];
        meta: {
            name: 'segment_membership';
        };
    };
    findUnique<T extends segment_membershipFindUniqueArgs>(args: Prisma.SelectSubset<T, segment_membershipFindUniqueArgs<ExtArgs>>): Prisma.Prisma__segment_membershipClient<runtime.Types.Result.GetResult<Prisma.$segment_membershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends segment_membershipFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, segment_membershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__segment_membershipClient<runtime.Types.Result.GetResult<Prisma.$segment_membershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends segment_membershipFindFirstArgs>(args?: Prisma.SelectSubset<T, segment_membershipFindFirstArgs<ExtArgs>>): Prisma.Prisma__segment_membershipClient<runtime.Types.Result.GetResult<Prisma.$segment_membershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends segment_membershipFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, segment_membershipFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__segment_membershipClient<runtime.Types.Result.GetResult<Prisma.$segment_membershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends segment_membershipFindManyArgs>(args?: Prisma.SelectSubset<T, segment_membershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$segment_membershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends segment_membershipCreateArgs>(args: Prisma.SelectSubset<T, segment_membershipCreateArgs<ExtArgs>>): Prisma.Prisma__segment_membershipClient<runtime.Types.Result.GetResult<Prisma.$segment_membershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends segment_membershipCreateManyArgs>(args?: Prisma.SelectSubset<T, segment_membershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends segment_membershipCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, segment_membershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$segment_membershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends segment_membershipDeleteArgs>(args: Prisma.SelectSubset<T, segment_membershipDeleteArgs<ExtArgs>>): Prisma.Prisma__segment_membershipClient<runtime.Types.Result.GetResult<Prisma.$segment_membershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends segment_membershipUpdateArgs>(args: Prisma.SelectSubset<T, segment_membershipUpdateArgs<ExtArgs>>): Prisma.Prisma__segment_membershipClient<runtime.Types.Result.GetResult<Prisma.$segment_membershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends segment_membershipDeleteManyArgs>(args?: Prisma.SelectSubset<T, segment_membershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends segment_membershipUpdateManyArgs>(args: Prisma.SelectSubset<T, segment_membershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends segment_membershipUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, segment_membershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$segment_membershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends segment_membershipUpsertArgs>(args: Prisma.SelectSubset<T, segment_membershipUpsertArgs<ExtArgs>>): Prisma.Prisma__segment_membershipClient<runtime.Types.Result.GetResult<Prisma.$segment_membershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends segment_membershipCountArgs>(args?: Prisma.Subset<T, segment_membershipCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Segment_membershipCountAggregateOutputType> : number>;
    aggregate<T extends Segment_membershipAggregateArgs>(args: Prisma.Subset<T, Segment_membershipAggregateArgs>): Prisma.PrismaPromise<GetSegment_membershipAggregateType<T>>;
    groupBy<T extends segment_membershipGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: segment_membershipGroupByArgs['orderBy'];
    } : {
        orderBy?: segment_membershipGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, segment_membershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSegment_membershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: segment_membershipFieldRefs;
}
export interface Prisma__segment_membershipClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    segment<T extends Prisma.SegmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SegmentDefaultArgs<ExtArgs>>): Prisma.Prisma__SegmentClient<runtime.Types.Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface segment_membershipFieldRefs {
    readonly id: Prisma.FieldRef<"segment_membership", 'String'>;
    readonly segment_id: Prisma.FieldRef<"segment_membership", 'String'>;
    readonly customer_id: Prisma.FieldRef<"segment_membership", 'String'>;
    readonly entered_at: Prisma.FieldRef<"segment_membership", 'DateTime'>;
    readonly exited_at: Prisma.FieldRef<"segment_membership", 'DateTime'>;
}
export type segment_membershipFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.segment_membershipSelect<ExtArgs> | null;
    omit?: Prisma.segment_membershipOmit<ExtArgs> | null;
    include?: Prisma.segment_membershipInclude<ExtArgs> | null;
    where: Prisma.segment_membershipWhereUniqueInput;
};
export type segment_membershipFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.segment_membershipSelect<ExtArgs> | null;
    omit?: Prisma.segment_membershipOmit<ExtArgs> | null;
    include?: Prisma.segment_membershipInclude<ExtArgs> | null;
    where: Prisma.segment_membershipWhereUniqueInput;
};
export type segment_membershipFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.segment_membershipSelect<ExtArgs> | null;
    omit?: Prisma.segment_membershipOmit<ExtArgs> | null;
    include?: Prisma.segment_membershipInclude<ExtArgs> | null;
    where?: Prisma.segment_membershipWhereInput;
    orderBy?: Prisma.segment_membershipOrderByWithRelationInput | Prisma.segment_membershipOrderByWithRelationInput[];
    cursor?: Prisma.segment_membershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Segment_membershipScalarFieldEnum | Prisma.Segment_membershipScalarFieldEnum[];
};
export type segment_membershipFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.segment_membershipSelect<ExtArgs> | null;
    omit?: Prisma.segment_membershipOmit<ExtArgs> | null;
    include?: Prisma.segment_membershipInclude<ExtArgs> | null;
    where?: Prisma.segment_membershipWhereInput;
    orderBy?: Prisma.segment_membershipOrderByWithRelationInput | Prisma.segment_membershipOrderByWithRelationInput[];
    cursor?: Prisma.segment_membershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Segment_membershipScalarFieldEnum | Prisma.Segment_membershipScalarFieldEnum[];
};
export type segment_membershipFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.segment_membershipSelect<ExtArgs> | null;
    omit?: Prisma.segment_membershipOmit<ExtArgs> | null;
    include?: Prisma.segment_membershipInclude<ExtArgs> | null;
    where?: Prisma.segment_membershipWhereInput;
    orderBy?: Prisma.segment_membershipOrderByWithRelationInput | Prisma.segment_membershipOrderByWithRelationInput[];
    cursor?: Prisma.segment_membershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Segment_membershipScalarFieldEnum | Prisma.Segment_membershipScalarFieldEnum[];
};
export type segment_membershipCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.segment_membershipSelect<ExtArgs> | null;
    omit?: Prisma.segment_membershipOmit<ExtArgs> | null;
    include?: Prisma.segment_membershipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.segment_membershipCreateInput, Prisma.segment_membershipUncheckedCreateInput>;
};
export type segment_membershipCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.segment_membershipCreateManyInput | Prisma.segment_membershipCreateManyInput[];
    skipDuplicates?: boolean;
};
export type segment_membershipCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.segment_membershipSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.segment_membershipOmit<ExtArgs> | null;
    data: Prisma.segment_membershipCreateManyInput | Prisma.segment_membershipCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.segment_membershipIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type segment_membershipUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.segment_membershipSelect<ExtArgs> | null;
    omit?: Prisma.segment_membershipOmit<ExtArgs> | null;
    include?: Prisma.segment_membershipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.segment_membershipUpdateInput, Prisma.segment_membershipUncheckedUpdateInput>;
    where: Prisma.segment_membershipWhereUniqueInput;
};
export type segment_membershipUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.segment_membershipUpdateManyMutationInput, Prisma.segment_membershipUncheckedUpdateManyInput>;
    where?: Prisma.segment_membershipWhereInput;
    limit?: number;
};
export type segment_membershipUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.segment_membershipSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.segment_membershipOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.segment_membershipUpdateManyMutationInput, Prisma.segment_membershipUncheckedUpdateManyInput>;
    where?: Prisma.segment_membershipWhereInput;
    limit?: number;
    include?: Prisma.segment_membershipIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type segment_membershipUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.segment_membershipSelect<ExtArgs> | null;
    omit?: Prisma.segment_membershipOmit<ExtArgs> | null;
    include?: Prisma.segment_membershipInclude<ExtArgs> | null;
    where: Prisma.segment_membershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.segment_membershipCreateInput, Prisma.segment_membershipUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.segment_membershipUpdateInput, Prisma.segment_membershipUncheckedUpdateInput>;
};
export type segment_membershipDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.segment_membershipSelect<ExtArgs> | null;
    omit?: Prisma.segment_membershipOmit<ExtArgs> | null;
    include?: Prisma.segment_membershipInclude<ExtArgs> | null;
    where: Prisma.segment_membershipWhereUniqueInput;
};
export type segment_membershipDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.segment_membershipWhereInput;
    limit?: number;
};
export type segment_membershipDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.segment_membershipSelect<ExtArgs> | null;
    omit?: Prisma.segment_membershipOmit<ExtArgs> | null;
    include?: Prisma.segment_membershipInclude<ExtArgs> | null;
};
