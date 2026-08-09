import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MergeCandidateModel = runtime.Types.Result.DefaultSelection<Prisma.$MergeCandidatePayload>;
export type AggregateMergeCandidate = {
    _count: MergeCandidateCountAggregateOutputType | null;
    _avg: MergeCandidateAvgAggregateOutputType | null;
    _sum: MergeCandidateSumAggregateOutputType | null;
    _min: MergeCandidateMinAggregateOutputType | null;
    _max: MergeCandidateMaxAggregateOutputType | null;
};
export type MergeCandidateAvgAggregateOutputType = {
    confidenceScore: runtime.Decimal | null;
};
export type MergeCandidateSumAggregateOutputType = {
    confidenceScore: runtime.Decimal | null;
};
export type MergeCandidateMinAggregateOutputType = {
    id: string | null;
    customerIdA: string | null;
    customerIdB: string | null;
    matchReason: string | null;
    confidenceScore: runtime.Decimal | null;
    status: string | null;
    reviewedBy: string | null;
    reviewedAt: Date | null;
    createdAt: Date | null;
};
export type MergeCandidateMaxAggregateOutputType = {
    id: string | null;
    customerIdA: string | null;
    customerIdB: string | null;
    matchReason: string | null;
    confidenceScore: runtime.Decimal | null;
    status: string | null;
    reviewedBy: string | null;
    reviewedAt: Date | null;
    createdAt: Date | null;
};
export type MergeCandidateCountAggregateOutputType = {
    id: number;
    customerIdA: number;
    customerIdB: number;
    matchReason: number;
    confidenceScore: number;
    status: number;
    reviewedBy: number;
    reviewedAt: number;
    createdAt: number;
    _all: number;
};
export type MergeCandidateAvgAggregateInputType = {
    confidenceScore?: true;
};
export type MergeCandidateSumAggregateInputType = {
    confidenceScore?: true;
};
export type MergeCandidateMinAggregateInputType = {
    id?: true;
    customerIdA?: true;
    customerIdB?: true;
    matchReason?: true;
    confidenceScore?: true;
    status?: true;
    reviewedBy?: true;
    reviewedAt?: true;
    createdAt?: true;
};
export type MergeCandidateMaxAggregateInputType = {
    id?: true;
    customerIdA?: true;
    customerIdB?: true;
    matchReason?: true;
    confidenceScore?: true;
    status?: true;
    reviewedBy?: true;
    reviewedAt?: true;
    createdAt?: true;
};
export type MergeCandidateCountAggregateInputType = {
    id?: true;
    customerIdA?: true;
    customerIdB?: true;
    matchReason?: true;
    confidenceScore?: true;
    status?: true;
    reviewedBy?: true;
    reviewedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type MergeCandidateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MergeCandidateWhereInput;
    orderBy?: Prisma.MergeCandidateOrderByWithRelationInput | Prisma.MergeCandidateOrderByWithRelationInput[];
    cursor?: Prisma.MergeCandidateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MergeCandidateCountAggregateInputType;
    _avg?: MergeCandidateAvgAggregateInputType;
    _sum?: MergeCandidateSumAggregateInputType;
    _min?: MergeCandidateMinAggregateInputType;
    _max?: MergeCandidateMaxAggregateInputType;
};
export type GetMergeCandidateAggregateType<T extends MergeCandidateAggregateArgs> = {
    [P in keyof T & keyof AggregateMergeCandidate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMergeCandidate[P]> : Prisma.GetScalarType<T[P], AggregateMergeCandidate[P]>;
};
export type MergeCandidateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MergeCandidateWhereInput;
    orderBy?: Prisma.MergeCandidateOrderByWithAggregationInput | Prisma.MergeCandidateOrderByWithAggregationInput[];
    by: Prisma.MergeCandidateScalarFieldEnum[] | Prisma.MergeCandidateScalarFieldEnum;
    having?: Prisma.MergeCandidateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MergeCandidateCountAggregateInputType | true;
    _avg?: MergeCandidateAvgAggregateInputType;
    _sum?: MergeCandidateSumAggregateInputType;
    _min?: MergeCandidateMinAggregateInputType;
    _max?: MergeCandidateMaxAggregateInputType;
};
export type MergeCandidateGroupByOutputType = {
    id: string;
    customerIdA: string;
    customerIdB: string;
    matchReason: string | null;
    confidenceScore: runtime.Decimal | null;
    status: string;
    reviewedBy: string | null;
    reviewedAt: Date | null;
    createdAt: Date;
    _count: MergeCandidateCountAggregateOutputType | null;
    _avg: MergeCandidateAvgAggregateOutputType | null;
    _sum: MergeCandidateSumAggregateOutputType | null;
    _min: MergeCandidateMinAggregateOutputType | null;
    _max: MergeCandidateMaxAggregateOutputType | null;
};
export type GetMergeCandidateGroupByPayload<T extends MergeCandidateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MergeCandidateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MergeCandidateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MergeCandidateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MergeCandidateGroupByOutputType[P]>;
}>>;
export type MergeCandidateWhereInput = {
    AND?: Prisma.MergeCandidateWhereInput | Prisma.MergeCandidateWhereInput[];
    OR?: Prisma.MergeCandidateWhereInput[];
    NOT?: Prisma.MergeCandidateWhereInput | Prisma.MergeCandidateWhereInput[];
    id?: Prisma.UuidFilter<"MergeCandidate"> | string;
    customerIdA?: Prisma.UuidFilter<"MergeCandidate"> | string;
    customerIdB?: Prisma.UuidFilter<"MergeCandidate"> | string;
    matchReason?: Prisma.StringNullableFilter<"MergeCandidate"> | string | null;
    confidenceScore?: Prisma.DecimalNullableFilter<"MergeCandidate"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFilter<"MergeCandidate"> | string;
    reviewedBy?: Prisma.UuidNullableFilter<"MergeCandidate"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"MergeCandidate"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MergeCandidate"> | Date | string;
    customer_merge_candidate_customer_id_aTocustomer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    customer_merge_candidate_customer_id_bTocustomer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
};
export type MergeCandidateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerIdA?: Prisma.SortOrder;
    customerIdB?: Prisma.SortOrder;
    matchReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    customer_merge_candidate_customer_id_aTocustomer?: Prisma.CustomerOrderByWithRelationInput;
    customer_merge_candidate_customer_id_bTocustomer?: Prisma.CustomerOrderByWithRelationInput;
};
export type MergeCandidateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MergeCandidateWhereInput | Prisma.MergeCandidateWhereInput[];
    OR?: Prisma.MergeCandidateWhereInput[];
    NOT?: Prisma.MergeCandidateWhereInput | Prisma.MergeCandidateWhereInput[];
    customerIdA?: Prisma.UuidFilter<"MergeCandidate"> | string;
    customerIdB?: Prisma.UuidFilter<"MergeCandidate"> | string;
    matchReason?: Prisma.StringNullableFilter<"MergeCandidate"> | string | null;
    confidenceScore?: Prisma.DecimalNullableFilter<"MergeCandidate"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFilter<"MergeCandidate"> | string;
    reviewedBy?: Prisma.UuidNullableFilter<"MergeCandidate"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"MergeCandidate"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MergeCandidate"> | Date | string;
    customer_merge_candidate_customer_id_aTocustomer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    customer_merge_candidate_customer_id_bTocustomer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
}, "id">;
export type MergeCandidateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerIdA?: Prisma.SortOrder;
    customerIdB?: Prisma.SortOrder;
    matchReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MergeCandidateCountOrderByAggregateInput;
    _avg?: Prisma.MergeCandidateAvgOrderByAggregateInput;
    _max?: Prisma.MergeCandidateMaxOrderByAggregateInput;
    _min?: Prisma.MergeCandidateMinOrderByAggregateInput;
    _sum?: Prisma.MergeCandidateSumOrderByAggregateInput;
};
export type MergeCandidateScalarWhereWithAggregatesInput = {
    AND?: Prisma.MergeCandidateScalarWhereWithAggregatesInput | Prisma.MergeCandidateScalarWhereWithAggregatesInput[];
    OR?: Prisma.MergeCandidateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MergeCandidateScalarWhereWithAggregatesInput | Prisma.MergeCandidateScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MergeCandidate"> | string;
    customerIdA?: Prisma.UuidWithAggregatesFilter<"MergeCandidate"> | string;
    customerIdB?: Prisma.UuidWithAggregatesFilter<"MergeCandidate"> | string;
    matchReason?: Prisma.StringNullableWithAggregatesFilter<"MergeCandidate"> | string | null;
    confidenceScore?: Prisma.DecimalNullableWithAggregatesFilter<"MergeCandidate"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringWithAggregatesFilter<"MergeCandidate"> | string;
    reviewedBy?: Prisma.UuidNullableWithAggregatesFilter<"MergeCandidate"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MergeCandidate"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MergeCandidate"> | Date | string;
};
export type MergeCandidateCreateInput = {
    id?: string;
    matchReason?: string | null;
    confidenceScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    customer_merge_candidate_customer_id_aTocustomer: Prisma.CustomerCreateNestedOneWithoutMerge_candidate_merge_candidate_customer_id_aTocustomerInput;
    customer_merge_candidate_customer_id_bTocustomer: Prisma.CustomerCreateNestedOneWithoutMerge_candidate_merge_candidate_customer_id_bTocustomerInput;
};
export type MergeCandidateUncheckedCreateInput = {
    id?: string;
    customerIdA: string;
    customerIdB: string;
    matchReason?: string | null;
    confidenceScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MergeCandidateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matchReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer_merge_candidate_customer_id_aTocustomer?: Prisma.CustomerUpdateOneRequiredWithoutMerge_candidate_merge_candidate_customer_id_aTocustomerNestedInput;
    customer_merge_candidate_customer_id_bTocustomer?: Prisma.CustomerUpdateOneRequiredWithoutMerge_candidate_merge_candidate_customer_id_bTocustomerNestedInput;
};
export type MergeCandidateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerIdA?: Prisma.StringFieldUpdateOperationsInput | string;
    customerIdB?: Prisma.StringFieldUpdateOperationsInput | string;
    matchReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MergeCandidateCreateManyInput = {
    id?: string;
    customerIdA: string;
    customerIdB: string;
    matchReason?: string | null;
    confidenceScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MergeCandidateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matchReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MergeCandidateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerIdA?: Prisma.StringFieldUpdateOperationsInput | string;
    customerIdB?: Prisma.StringFieldUpdateOperationsInput | string;
    matchReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MergeCandidateListRelationFilter = {
    every?: Prisma.MergeCandidateWhereInput;
    some?: Prisma.MergeCandidateWhereInput;
    none?: Prisma.MergeCandidateWhereInput;
};
export type MergeCandidateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MergeCandidateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerIdA?: Prisma.SortOrder;
    customerIdB?: Prisma.SortOrder;
    matchReason?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MergeCandidateAvgOrderByAggregateInput = {
    confidenceScore?: Prisma.SortOrder;
};
export type MergeCandidateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerIdA?: Prisma.SortOrder;
    customerIdB?: Prisma.SortOrder;
    matchReason?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MergeCandidateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerIdA?: Prisma.SortOrder;
    customerIdB?: Prisma.SortOrder;
    matchReason?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MergeCandidateSumOrderByAggregateInput = {
    confidenceScore?: Prisma.SortOrder;
};
export type MergeCandidateCreateNestedManyWithoutCustomer_merge_candidate_customer_id_aTocustomerInput = {
    create?: Prisma.XOR<Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput, Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput> | Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[] | Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[];
    connectOrCreate?: Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_aTocustomerInput | Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[];
    createMany?: Prisma.MergeCandidateCreateManyCustomer_merge_candidate_customer_id_aTocustomerInputEnvelope;
    connect?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
};
export type MergeCandidateCreateNestedManyWithoutCustomer_merge_candidate_customer_id_bTocustomerInput = {
    create?: Prisma.XOR<Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput, Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput> | Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[] | Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[];
    connectOrCreate?: Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_bTocustomerInput | Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[];
    createMany?: Prisma.MergeCandidateCreateManyCustomer_merge_candidate_customer_id_bTocustomerInputEnvelope;
    connect?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
};
export type MergeCandidateUncheckedCreateNestedManyWithoutCustomer_merge_candidate_customer_id_aTocustomerInput = {
    create?: Prisma.XOR<Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput, Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput> | Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[] | Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[];
    connectOrCreate?: Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_aTocustomerInput | Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[];
    createMany?: Prisma.MergeCandidateCreateManyCustomer_merge_candidate_customer_id_aTocustomerInputEnvelope;
    connect?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
};
export type MergeCandidateUncheckedCreateNestedManyWithoutCustomer_merge_candidate_customer_id_bTocustomerInput = {
    create?: Prisma.XOR<Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput, Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput> | Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[] | Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[];
    connectOrCreate?: Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_bTocustomerInput | Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[];
    createMany?: Prisma.MergeCandidateCreateManyCustomer_merge_candidate_customer_id_bTocustomerInputEnvelope;
    connect?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
};
export type MergeCandidateUpdateManyWithoutCustomer_merge_candidate_customer_id_aTocustomerNestedInput = {
    create?: Prisma.XOR<Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput, Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput> | Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[] | Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[];
    connectOrCreate?: Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_aTocustomerInput | Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[];
    upsert?: Prisma.MergeCandidateUpsertWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_aTocustomerInput | Prisma.MergeCandidateUpsertWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[];
    createMany?: Prisma.MergeCandidateCreateManyCustomer_merge_candidate_customer_id_aTocustomerInputEnvelope;
    set?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    disconnect?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    delete?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    connect?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    update?: Prisma.MergeCandidateUpdateWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_aTocustomerInput | Prisma.MergeCandidateUpdateWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[];
    updateMany?: Prisma.MergeCandidateUpdateManyWithWhereWithoutCustomer_merge_candidate_customer_id_aTocustomerInput | Prisma.MergeCandidateUpdateManyWithWhereWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[];
    deleteMany?: Prisma.MergeCandidateScalarWhereInput | Prisma.MergeCandidateScalarWhereInput[];
};
export type MergeCandidateUpdateManyWithoutCustomer_merge_candidate_customer_id_bTocustomerNestedInput = {
    create?: Prisma.XOR<Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput, Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput> | Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[] | Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[];
    connectOrCreate?: Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_bTocustomerInput | Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[];
    upsert?: Prisma.MergeCandidateUpsertWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_bTocustomerInput | Prisma.MergeCandidateUpsertWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[];
    createMany?: Prisma.MergeCandidateCreateManyCustomer_merge_candidate_customer_id_bTocustomerInputEnvelope;
    set?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    disconnect?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    delete?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    connect?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    update?: Prisma.MergeCandidateUpdateWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_bTocustomerInput | Prisma.MergeCandidateUpdateWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[];
    updateMany?: Prisma.MergeCandidateUpdateManyWithWhereWithoutCustomer_merge_candidate_customer_id_bTocustomerInput | Prisma.MergeCandidateUpdateManyWithWhereWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[];
    deleteMany?: Prisma.MergeCandidateScalarWhereInput | Prisma.MergeCandidateScalarWhereInput[];
};
export type MergeCandidateUncheckedUpdateManyWithoutCustomer_merge_candidate_customer_id_aTocustomerNestedInput = {
    create?: Prisma.XOR<Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput, Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput> | Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[] | Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[];
    connectOrCreate?: Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_aTocustomerInput | Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[];
    upsert?: Prisma.MergeCandidateUpsertWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_aTocustomerInput | Prisma.MergeCandidateUpsertWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[];
    createMany?: Prisma.MergeCandidateCreateManyCustomer_merge_candidate_customer_id_aTocustomerInputEnvelope;
    set?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    disconnect?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    delete?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    connect?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    update?: Prisma.MergeCandidateUpdateWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_aTocustomerInput | Prisma.MergeCandidateUpdateWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[];
    updateMany?: Prisma.MergeCandidateUpdateManyWithWhereWithoutCustomer_merge_candidate_customer_id_aTocustomerInput | Prisma.MergeCandidateUpdateManyWithWhereWithoutCustomer_merge_candidate_customer_id_aTocustomerInput[];
    deleteMany?: Prisma.MergeCandidateScalarWhereInput | Prisma.MergeCandidateScalarWhereInput[];
};
export type MergeCandidateUncheckedUpdateManyWithoutCustomer_merge_candidate_customer_id_bTocustomerNestedInput = {
    create?: Prisma.XOR<Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput, Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput> | Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[] | Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[];
    connectOrCreate?: Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_bTocustomerInput | Prisma.MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[];
    upsert?: Prisma.MergeCandidateUpsertWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_bTocustomerInput | Prisma.MergeCandidateUpsertWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[];
    createMany?: Prisma.MergeCandidateCreateManyCustomer_merge_candidate_customer_id_bTocustomerInputEnvelope;
    set?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    disconnect?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    delete?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    connect?: Prisma.MergeCandidateWhereUniqueInput | Prisma.MergeCandidateWhereUniqueInput[];
    update?: Prisma.MergeCandidateUpdateWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_bTocustomerInput | Prisma.MergeCandidateUpdateWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[];
    updateMany?: Prisma.MergeCandidateUpdateManyWithWhereWithoutCustomer_merge_candidate_customer_id_bTocustomerInput | Prisma.MergeCandidateUpdateManyWithWhereWithoutCustomer_merge_candidate_customer_id_bTocustomerInput[];
    deleteMany?: Prisma.MergeCandidateScalarWhereInput | Prisma.MergeCandidateScalarWhereInput[];
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput = {
    id?: string;
    matchReason?: string | null;
    confidenceScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    customer_merge_candidate_customer_id_bTocustomer: Prisma.CustomerCreateNestedOneWithoutMerge_candidate_merge_candidate_customer_id_bTocustomerInput;
};
export type MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput = {
    id?: string;
    customerIdB: string;
    matchReason?: string | null;
    confidenceScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_aTocustomerInput = {
    where: Prisma.MergeCandidateWhereUniqueInput;
    create: Prisma.XOR<Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput, Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput>;
};
export type MergeCandidateCreateManyCustomer_merge_candidate_customer_id_aTocustomerInputEnvelope = {
    data: Prisma.MergeCandidateCreateManyCustomer_merge_candidate_customer_id_aTocustomerInput | Prisma.MergeCandidateCreateManyCustomer_merge_candidate_customer_id_aTocustomerInput[];
    skipDuplicates?: boolean;
};
export type MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput = {
    id?: string;
    matchReason?: string | null;
    confidenceScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
    customer_merge_candidate_customer_id_aTocustomer: Prisma.CustomerCreateNestedOneWithoutMerge_candidate_merge_candidate_customer_id_aTocustomerInput;
};
export type MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput = {
    id?: string;
    customerIdA: string;
    matchReason?: string | null;
    confidenceScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MergeCandidateCreateOrConnectWithoutCustomer_merge_candidate_customer_id_bTocustomerInput = {
    where: Prisma.MergeCandidateWhereUniqueInput;
    create: Prisma.XOR<Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput, Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput>;
};
export type MergeCandidateCreateManyCustomer_merge_candidate_customer_id_bTocustomerInputEnvelope = {
    data: Prisma.MergeCandidateCreateManyCustomer_merge_candidate_customer_id_bTocustomerInput | Prisma.MergeCandidateCreateManyCustomer_merge_candidate_customer_id_bTocustomerInput[];
    skipDuplicates?: boolean;
};
export type MergeCandidateUpsertWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_aTocustomerInput = {
    where: Prisma.MergeCandidateWhereUniqueInput;
    update: Prisma.XOR<Prisma.MergeCandidateUpdateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput, Prisma.MergeCandidateUncheckedUpdateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput>;
    create: Prisma.XOR<Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput, Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput>;
};
export type MergeCandidateUpdateWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_aTocustomerInput = {
    where: Prisma.MergeCandidateWhereUniqueInput;
    data: Prisma.XOR<Prisma.MergeCandidateUpdateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput, Prisma.MergeCandidateUncheckedUpdateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput>;
};
export type MergeCandidateUpdateManyWithWhereWithoutCustomer_merge_candidate_customer_id_aTocustomerInput = {
    where: Prisma.MergeCandidateScalarWhereInput;
    data: Prisma.XOR<Prisma.MergeCandidateUpdateManyMutationInput, Prisma.MergeCandidateUncheckedUpdateManyWithoutCustomer_merge_candidate_customer_id_aTocustomerInput>;
};
export type MergeCandidateScalarWhereInput = {
    AND?: Prisma.MergeCandidateScalarWhereInput | Prisma.MergeCandidateScalarWhereInput[];
    OR?: Prisma.MergeCandidateScalarWhereInput[];
    NOT?: Prisma.MergeCandidateScalarWhereInput | Prisma.MergeCandidateScalarWhereInput[];
    id?: Prisma.UuidFilter<"MergeCandidate"> | string;
    customerIdA?: Prisma.UuidFilter<"MergeCandidate"> | string;
    customerIdB?: Prisma.UuidFilter<"MergeCandidate"> | string;
    matchReason?: Prisma.StringNullableFilter<"MergeCandidate"> | string | null;
    confidenceScore?: Prisma.DecimalNullableFilter<"MergeCandidate"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFilter<"MergeCandidate"> | string;
    reviewedBy?: Prisma.UuidNullableFilter<"MergeCandidate"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"MergeCandidate"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"MergeCandidate"> | Date | string;
};
export type MergeCandidateUpsertWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_bTocustomerInput = {
    where: Prisma.MergeCandidateWhereUniqueInput;
    update: Prisma.XOR<Prisma.MergeCandidateUpdateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput, Prisma.MergeCandidateUncheckedUpdateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput>;
    create: Prisma.XOR<Prisma.MergeCandidateCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput, Prisma.MergeCandidateUncheckedCreateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput>;
};
export type MergeCandidateUpdateWithWhereUniqueWithoutCustomer_merge_candidate_customer_id_bTocustomerInput = {
    where: Prisma.MergeCandidateWhereUniqueInput;
    data: Prisma.XOR<Prisma.MergeCandidateUpdateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput, Prisma.MergeCandidateUncheckedUpdateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput>;
};
export type MergeCandidateUpdateManyWithWhereWithoutCustomer_merge_candidate_customer_id_bTocustomerInput = {
    where: Prisma.MergeCandidateScalarWhereInput;
    data: Prisma.XOR<Prisma.MergeCandidateUpdateManyMutationInput, Prisma.MergeCandidateUncheckedUpdateManyWithoutCustomer_merge_candidate_customer_id_bTocustomerInput>;
};
export type MergeCandidateCreateManyCustomer_merge_candidate_customer_id_aTocustomerInput = {
    id?: string;
    customerIdB: string;
    matchReason?: string | null;
    confidenceScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MergeCandidateCreateManyCustomer_merge_candidate_customer_id_bTocustomerInput = {
    id?: string;
    customerIdA: string;
    matchReason?: string | null;
    confidenceScore?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type MergeCandidateUpdateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matchReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer_merge_candidate_customer_id_bTocustomer?: Prisma.CustomerUpdateOneRequiredWithoutMerge_candidate_merge_candidate_customer_id_bTocustomerNestedInput;
};
export type MergeCandidateUncheckedUpdateWithoutCustomer_merge_candidate_customer_id_aTocustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerIdB?: Prisma.StringFieldUpdateOperationsInput | string;
    matchReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MergeCandidateUncheckedUpdateManyWithoutCustomer_merge_candidate_customer_id_aTocustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerIdB?: Prisma.StringFieldUpdateOperationsInput | string;
    matchReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MergeCandidateUpdateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    matchReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer_merge_candidate_customer_id_aTocustomer?: Prisma.CustomerUpdateOneRequiredWithoutMerge_candidate_merge_candidate_customer_id_aTocustomerNestedInput;
};
export type MergeCandidateUncheckedUpdateWithoutCustomer_merge_candidate_customer_id_bTocustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerIdA?: Prisma.StringFieldUpdateOperationsInput | string;
    matchReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MergeCandidateUncheckedUpdateManyWithoutCustomer_merge_candidate_customer_id_bTocustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerIdA?: Prisma.StringFieldUpdateOperationsInput | string;
    matchReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MergeCandidateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerIdA?: boolean;
    customerIdB?: boolean;
    matchReason?: boolean;
    confidenceScore?: boolean;
    status?: boolean;
    reviewedBy?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    customer_merge_candidate_customer_id_aTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    customer_merge_candidate_customer_id_bTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mergeCandidate"]>;
export type MergeCandidateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerIdA?: boolean;
    customerIdB?: boolean;
    matchReason?: boolean;
    confidenceScore?: boolean;
    status?: boolean;
    reviewedBy?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    customer_merge_candidate_customer_id_aTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    customer_merge_candidate_customer_id_bTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mergeCandidate"]>;
export type MergeCandidateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerIdA?: boolean;
    customerIdB?: boolean;
    matchReason?: boolean;
    confidenceScore?: boolean;
    status?: boolean;
    reviewedBy?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
    customer_merge_candidate_customer_id_aTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    customer_merge_candidate_customer_id_bTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mergeCandidate"]>;
export type MergeCandidateSelectScalar = {
    id?: boolean;
    customerIdA?: boolean;
    customerIdB?: boolean;
    matchReason?: boolean;
    confidenceScore?: boolean;
    status?: boolean;
    reviewedBy?: boolean;
    reviewedAt?: boolean;
    createdAt?: boolean;
};
export type MergeCandidateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerIdA" | "customerIdB" | "matchReason" | "confidenceScore" | "status" | "reviewedBy" | "reviewedAt" | "createdAt", ExtArgs["result"]["mergeCandidate"]>;
export type MergeCandidateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer_merge_candidate_customer_id_aTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    customer_merge_candidate_customer_id_bTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type MergeCandidateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer_merge_candidate_customer_id_aTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    customer_merge_candidate_customer_id_bTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type MergeCandidateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer_merge_candidate_customer_id_aTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    customer_merge_candidate_customer_id_bTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $MergeCandidatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MergeCandidate";
    objects: {
        customer_merge_candidate_customer_id_aTocustomer: Prisma.$CustomerPayload<ExtArgs>;
        customer_merge_candidate_customer_id_bTocustomer: Prisma.$CustomerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customerIdA: string;
        customerIdB: string;
        matchReason: string | null;
        confidenceScore: runtime.Decimal | null;
        status: string;
        reviewedBy: string | null;
        reviewedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["mergeCandidate"]>;
    composites: {};
};
export type MergeCandidateGetPayload<S extends boolean | null | undefined | MergeCandidateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MergeCandidatePayload, S>;
export type MergeCandidateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MergeCandidateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MergeCandidateCountAggregateInputType | true;
};
export interface MergeCandidateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MergeCandidate'];
        meta: {
            name: 'MergeCandidate';
        };
    };
    findUnique<T extends MergeCandidateFindUniqueArgs>(args: Prisma.SelectSubset<T, MergeCandidateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MergeCandidateClient<runtime.Types.Result.GetResult<Prisma.$MergeCandidatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MergeCandidateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MergeCandidateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MergeCandidateClient<runtime.Types.Result.GetResult<Prisma.$MergeCandidatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MergeCandidateFindFirstArgs>(args?: Prisma.SelectSubset<T, MergeCandidateFindFirstArgs<ExtArgs>>): Prisma.Prisma__MergeCandidateClient<runtime.Types.Result.GetResult<Prisma.$MergeCandidatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MergeCandidateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MergeCandidateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MergeCandidateClient<runtime.Types.Result.GetResult<Prisma.$MergeCandidatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MergeCandidateFindManyArgs>(args?: Prisma.SelectSubset<T, MergeCandidateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MergeCandidatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MergeCandidateCreateArgs>(args: Prisma.SelectSubset<T, MergeCandidateCreateArgs<ExtArgs>>): Prisma.Prisma__MergeCandidateClient<runtime.Types.Result.GetResult<Prisma.$MergeCandidatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MergeCandidateCreateManyArgs>(args?: Prisma.SelectSubset<T, MergeCandidateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MergeCandidateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MergeCandidateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MergeCandidatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MergeCandidateDeleteArgs>(args: Prisma.SelectSubset<T, MergeCandidateDeleteArgs<ExtArgs>>): Prisma.Prisma__MergeCandidateClient<runtime.Types.Result.GetResult<Prisma.$MergeCandidatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MergeCandidateUpdateArgs>(args: Prisma.SelectSubset<T, MergeCandidateUpdateArgs<ExtArgs>>): Prisma.Prisma__MergeCandidateClient<runtime.Types.Result.GetResult<Prisma.$MergeCandidatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MergeCandidateDeleteManyArgs>(args?: Prisma.SelectSubset<T, MergeCandidateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MergeCandidateUpdateManyArgs>(args: Prisma.SelectSubset<T, MergeCandidateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MergeCandidateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MergeCandidateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MergeCandidatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MergeCandidateUpsertArgs>(args: Prisma.SelectSubset<T, MergeCandidateUpsertArgs<ExtArgs>>): Prisma.Prisma__MergeCandidateClient<runtime.Types.Result.GetResult<Prisma.$MergeCandidatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MergeCandidateCountArgs>(args?: Prisma.Subset<T, MergeCandidateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MergeCandidateCountAggregateOutputType> : number>;
    aggregate<T extends MergeCandidateAggregateArgs>(args: Prisma.Subset<T, MergeCandidateAggregateArgs>): Prisma.PrismaPromise<GetMergeCandidateAggregateType<T>>;
    groupBy<T extends MergeCandidateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MergeCandidateGroupByArgs['orderBy'];
    } : {
        orderBy?: MergeCandidateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MergeCandidateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMergeCandidateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MergeCandidateFieldRefs;
}
export interface Prisma__MergeCandidateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer_merge_candidate_customer_id_aTocustomer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer_merge_candidate_customer_id_bTocustomer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MergeCandidateFieldRefs {
    readonly id: Prisma.FieldRef<"MergeCandidate", 'String'>;
    readonly customerIdA: Prisma.FieldRef<"MergeCandidate", 'String'>;
    readonly customerIdB: Prisma.FieldRef<"MergeCandidate", 'String'>;
    readonly matchReason: Prisma.FieldRef<"MergeCandidate", 'String'>;
    readonly confidenceScore: Prisma.FieldRef<"MergeCandidate", 'Decimal'>;
    readonly status: Prisma.FieldRef<"MergeCandidate", 'String'>;
    readonly reviewedBy: Prisma.FieldRef<"MergeCandidate", 'String'>;
    readonly reviewedAt: Prisma.FieldRef<"MergeCandidate", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"MergeCandidate", 'DateTime'>;
}
export type MergeCandidateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MergeCandidateSelect<ExtArgs> | null;
    omit?: Prisma.MergeCandidateOmit<ExtArgs> | null;
    include?: Prisma.MergeCandidateInclude<ExtArgs> | null;
    where: Prisma.MergeCandidateWhereUniqueInput;
};
export type MergeCandidateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MergeCandidateSelect<ExtArgs> | null;
    omit?: Prisma.MergeCandidateOmit<ExtArgs> | null;
    include?: Prisma.MergeCandidateInclude<ExtArgs> | null;
    where: Prisma.MergeCandidateWhereUniqueInput;
};
export type MergeCandidateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MergeCandidateSelect<ExtArgs> | null;
    omit?: Prisma.MergeCandidateOmit<ExtArgs> | null;
    include?: Prisma.MergeCandidateInclude<ExtArgs> | null;
    where?: Prisma.MergeCandidateWhereInput;
    orderBy?: Prisma.MergeCandidateOrderByWithRelationInput | Prisma.MergeCandidateOrderByWithRelationInput[];
    cursor?: Prisma.MergeCandidateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MergeCandidateScalarFieldEnum | Prisma.MergeCandidateScalarFieldEnum[];
};
export type MergeCandidateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MergeCandidateSelect<ExtArgs> | null;
    omit?: Prisma.MergeCandidateOmit<ExtArgs> | null;
    include?: Prisma.MergeCandidateInclude<ExtArgs> | null;
    where?: Prisma.MergeCandidateWhereInput;
    orderBy?: Prisma.MergeCandidateOrderByWithRelationInput | Prisma.MergeCandidateOrderByWithRelationInput[];
    cursor?: Prisma.MergeCandidateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MergeCandidateScalarFieldEnum | Prisma.MergeCandidateScalarFieldEnum[];
};
export type MergeCandidateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MergeCandidateSelect<ExtArgs> | null;
    omit?: Prisma.MergeCandidateOmit<ExtArgs> | null;
    include?: Prisma.MergeCandidateInclude<ExtArgs> | null;
    where?: Prisma.MergeCandidateWhereInput;
    orderBy?: Prisma.MergeCandidateOrderByWithRelationInput | Prisma.MergeCandidateOrderByWithRelationInput[];
    cursor?: Prisma.MergeCandidateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MergeCandidateScalarFieldEnum | Prisma.MergeCandidateScalarFieldEnum[];
};
export type MergeCandidateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MergeCandidateSelect<ExtArgs> | null;
    omit?: Prisma.MergeCandidateOmit<ExtArgs> | null;
    include?: Prisma.MergeCandidateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MergeCandidateCreateInput, Prisma.MergeCandidateUncheckedCreateInput>;
};
export type MergeCandidateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MergeCandidateCreateManyInput | Prisma.MergeCandidateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MergeCandidateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MergeCandidateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MergeCandidateOmit<ExtArgs> | null;
    data: Prisma.MergeCandidateCreateManyInput | Prisma.MergeCandidateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MergeCandidateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MergeCandidateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MergeCandidateSelect<ExtArgs> | null;
    omit?: Prisma.MergeCandidateOmit<ExtArgs> | null;
    include?: Prisma.MergeCandidateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MergeCandidateUpdateInput, Prisma.MergeCandidateUncheckedUpdateInput>;
    where: Prisma.MergeCandidateWhereUniqueInput;
};
export type MergeCandidateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MergeCandidateUpdateManyMutationInput, Prisma.MergeCandidateUncheckedUpdateManyInput>;
    where?: Prisma.MergeCandidateWhereInput;
    limit?: number;
};
export type MergeCandidateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MergeCandidateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MergeCandidateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MergeCandidateUpdateManyMutationInput, Prisma.MergeCandidateUncheckedUpdateManyInput>;
    where?: Prisma.MergeCandidateWhereInput;
    limit?: number;
    include?: Prisma.MergeCandidateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MergeCandidateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MergeCandidateSelect<ExtArgs> | null;
    omit?: Prisma.MergeCandidateOmit<ExtArgs> | null;
    include?: Prisma.MergeCandidateInclude<ExtArgs> | null;
    where: Prisma.MergeCandidateWhereUniqueInput;
    create: Prisma.XOR<Prisma.MergeCandidateCreateInput, Prisma.MergeCandidateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MergeCandidateUpdateInput, Prisma.MergeCandidateUncheckedUpdateInput>;
};
export type MergeCandidateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MergeCandidateSelect<ExtArgs> | null;
    omit?: Prisma.MergeCandidateOmit<ExtArgs> | null;
    include?: Prisma.MergeCandidateInclude<ExtArgs> | null;
    where: Prisma.MergeCandidateWhereUniqueInput;
};
export type MergeCandidateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MergeCandidateWhereInput;
    limit?: number;
};
export type MergeCandidateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MergeCandidateSelect<ExtArgs> | null;
    omit?: Prisma.MergeCandidateOmit<ExtArgs> | null;
    include?: Prisma.MergeCandidateInclude<ExtArgs> | null;
};
