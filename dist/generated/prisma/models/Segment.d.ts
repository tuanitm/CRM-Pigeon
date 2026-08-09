import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SegmentModel = runtime.Types.Result.DefaultSelection<Prisma.$SegmentPayload>;
export type AggregateSegment = {
    _count: SegmentCountAggregateOutputType | null;
    _avg: SegmentAvgAggregateOutputType | null;
    _sum: SegmentSumAggregateOutputType | null;
    _min: SegmentMinAggregateOutputType | null;
    _max: SegmentMaxAggregateOutputType | null;
};
export type SegmentAvgAggregateOutputType = {
    memberCount: number | null;
};
export type SegmentSumAggregateOutputType = {
    memberCount: number | null;
};
export type SegmentMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    description: string | null;
    refreshMode: string | null;
    isSystem: boolean | null;
    isActive: boolean | null;
    memberCount: number | null;
    lastEvaluatedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SegmentMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    description: string | null;
    refreshMode: string | null;
    isSystem: boolean | null;
    isActive: boolean | null;
    memberCount: number | null;
    lastEvaluatedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SegmentCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    description: number;
    rules: number;
    refreshMode: number;
    isSystem: number;
    isActive: number;
    memberCount: number;
    lastEvaluatedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SegmentAvgAggregateInputType = {
    memberCount?: true;
};
export type SegmentSumAggregateInputType = {
    memberCount?: true;
};
export type SegmentMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    refreshMode?: true;
    isSystem?: true;
    isActive?: true;
    memberCount?: true;
    lastEvaluatedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SegmentMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    refreshMode?: true;
    isSystem?: true;
    isActive?: true;
    memberCount?: true;
    lastEvaluatedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SegmentCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    rules?: true;
    refreshMode?: true;
    isSystem?: true;
    isActive?: true;
    memberCount?: true;
    lastEvaluatedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SegmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SegmentWhereInput;
    orderBy?: Prisma.SegmentOrderByWithRelationInput | Prisma.SegmentOrderByWithRelationInput[];
    cursor?: Prisma.SegmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SegmentCountAggregateInputType;
    _avg?: SegmentAvgAggregateInputType;
    _sum?: SegmentSumAggregateInputType;
    _min?: SegmentMinAggregateInputType;
    _max?: SegmentMaxAggregateInputType;
};
export type GetSegmentAggregateType<T extends SegmentAggregateArgs> = {
    [P in keyof T & keyof AggregateSegment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSegment[P]> : Prisma.GetScalarType<T[P], AggregateSegment[P]>;
};
export type SegmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SegmentWhereInput;
    orderBy?: Prisma.SegmentOrderByWithAggregationInput | Prisma.SegmentOrderByWithAggregationInput[];
    by: Prisma.SegmentScalarFieldEnum[] | Prisma.SegmentScalarFieldEnum;
    having?: Prisma.SegmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SegmentCountAggregateInputType | true;
    _avg?: SegmentAvgAggregateInputType;
    _sum?: SegmentSumAggregateInputType;
    _min?: SegmentMinAggregateInputType;
    _max?: SegmentMaxAggregateInputType;
};
export type SegmentGroupByOutputType = {
    id: string;
    code: string;
    name: string;
    description: string | null;
    rules: runtime.JsonValue;
    refreshMode: string;
    isSystem: boolean;
    isActive: boolean;
    memberCount: number;
    lastEvaluatedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SegmentCountAggregateOutputType | null;
    _avg: SegmentAvgAggregateOutputType | null;
    _sum: SegmentSumAggregateOutputType | null;
    _min: SegmentMinAggregateOutputType | null;
    _max: SegmentMaxAggregateOutputType | null;
};
export type GetSegmentGroupByPayload<T extends SegmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SegmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SegmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SegmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SegmentGroupByOutputType[P]>;
}>>;
export type SegmentWhereInput = {
    AND?: Prisma.SegmentWhereInput | Prisma.SegmentWhereInput[];
    OR?: Prisma.SegmentWhereInput[];
    NOT?: Prisma.SegmentWhereInput | Prisma.SegmentWhereInput[];
    id?: Prisma.UuidFilter<"Segment"> | string;
    code?: Prisma.StringFilter<"Segment"> | string;
    name?: Prisma.StringFilter<"Segment"> | string;
    description?: Prisma.StringNullableFilter<"Segment"> | string | null;
    rules?: Prisma.JsonFilter<"Segment">;
    refreshMode?: Prisma.StringFilter<"Segment"> | string;
    isSystem?: Prisma.BoolFilter<"Segment"> | boolean;
    isActive?: Prisma.BoolFilter<"Segment"> | boolean;
    memberCount?: Prisma.IntFilter<"Segment"> | number;
    lastEvaluatedAt?: Prisma.DateTimeNullableFilter<"Segment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Segment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Segment"> | Date | string;
    journey?: Prisma.JourneyListRelationFilter;
    segment_membership?: Prisma.Segment_membershipListRelationFilter;
};
export type SegmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    rules?: Prisma.SortOrder;
    refreshMode?: Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    memberCount?: Prisma.SortOrder;
    lastEvaluatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    journey?: Prisma.JourneyOrderByRelationAggregateInput;
    segment_membership?: Prisma.segment_membershipOrderByRelationAggregateInput;
};
export type SegmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.SegmentWhereInput | Prisma.SegmentWhereInput[];
    OR?: Prisma.SegmentWhereInput[];
    NOT?: Prisma.SegmentWhereInput | Prisma.SegmentWhereInput[];
    name?: Prisma.StringFilter<"Segment"> | string;
    description?: Prisma.StringNullableFilter<"Segment"> | string | null;
    rules?: Prisma.JsonFilter<"Segment">;
    refreshMode?: Prisma.StringFilter<"Segment"> | string;
    isSystem?: Prisma.BoolFilter<"Segment"> | boolean;
    isActive?: Prisma.BoolFilter<"Segment"> | boolean;
    memberCount?: Prisma.IntFilter<"Segment"> | number;
    lastEvaluatedAt?: Prisma.DateTimeNullableFilter<"Segment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Segment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Segment"> | Date | string;
    journey?: Prisma.JourneyListRelationFilter;
    segment_membership?: Prisma.Segment_membershipListRelationFilter;
}, "id" | "code">;
export type SegmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    rules?: Prisma.SortOrder;
    refreshMode?: Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    memberCount?: Prisma.SortOrder;
    lastEvaluatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SegmentCountOrderByAggregateInput;
    _avg?: Prisma.SegmentAvgOrderByAggregateInput;
    _max?: Prisma.SegmentMaxOrderByAggregateInput;
    _min?: Prisma.SegmentMinOrderByAggregateInput;
    _sum?: Prisma.SegmentSumOrderByAggregateInput;
};
export type SegmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.SegmentScalarWhereWithAggregatesInput | Prisma.SegmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.SegmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SegmentScalarWhereWithAggregatesInput | Prisma.SegmentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Segment"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Segment"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Segment"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Segment"> | string | null;
    rules?: Prisma.JsonWithAggregatesFilter<"Segment">;
    refreshMode?: Prisma.StringWithAggregatesFilter<"Segment"> | string;
    isSystem?: Prisma.BoolWithAggregatesFilter<"Segment"> | boolean;
    isActive?: Prisma.BoolWithAggregatesFilter<"Segment"> | boolean;
    memberCount?: Prisma.IntWithAggregatesFilter<"Segment"> | number;
    lastEvaluatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Segment"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Segment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Segment"> | Date | string;
};
export type SegmentCreateInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: string;
    isSystem?: boolean;
    isActive?: boolean;
    memberCount?: number;
    lastEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    journey?: Prisma.JourneyCreateNestedManyWithoutSegmentInput;
    segment_membership?: Prisma.segment_membershipCreateNestedManyWithoutSegmentInput;
};
export type SegmentUncheckedCreateInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: string;
    isSystem?: boolean;
    isActive?: boolean;
    memberCount?: number;
    lastEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    journey?: Prisma.JourneyUncheckedCreateNestedManyWithoutSegmentInput;
    segment_membership?: Prisma.segment_membershipUncheckedCreateNestedManyWithoutSegmentInput;
};
export type SegmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    memberCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: Prisma.JourneyUpdateManyWithoutSegmentNestedInput;
    segment_membership?: Prisma.segment_membershipUpdateManyWithoutSegmentNestedInput;
};
export type SegmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    memberCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: Prisma.JourneyUncheckedUpdateManyWithoutSegmentNestedInput;
    segment_membership?: Prisma.segment_membershipUncheckedUpdateManyWithoutSegmentNestedInput;
};
export type SegmentCreateManyInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: string;
    isSystem?: boolean;
    isActive?: boolean;
    memberCount?: number;
    lastEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SegmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    memberCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SegmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    memberCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SegmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    rules?: Prisma.SortOrder;
    refreshMode?: Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    memberCount?: Prisma.SortOrder;
    lastEvaluatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SegmentAvgOrderByAggregateInput = {
    memberCount?: Prisma.SortOrder;
};
export type SegmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    refreshMode?: Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    memberCount?: Prisma.SortOrder;
    lastEvaluatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SegmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    refreshMode?: Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    memberCount?: Prisma.SortOrder;
    lastEvaluatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SegmentSumOrderByAggregateInput = {
    memberCount?: Prisma.SortOrder;
};
export type SegmentNullableScalarRelationFilter = {
    is?: Prisma.SegmentWhereInput | null;
    isNot?: Prisma.SegmentWhereInput | null;
};
export type SegmentScalarRelationFilter = {
    is?: Prisma.SegmentWhereInput;
    isNot?: Prisma.SegmentWhereInput;
};
export type SegmentCreateNestedOneWithoutJourneyInput = {
    create?: Prisma.XOR<Prisma.SegmentCreateWithoutJourneyInput, Prisma.SegmentUncheckedCreateWithoutJourneyInput>;
    connectOrCreate?: Prisma.SegmentCreateOrConnectWithoutJourneyInput;
    connect?: Prisma.SegmentWhereUniqueInput;
};
export type SegmentUpdateOneWithoutJourneyNestedInput = {
    create?: Prisma.XOR<Prisma.SegmentCreateWithoutJourneyInput, Prisma.SegmentUncheckedCreateWithoutJourneyInput>;
    connectOrCreate?: Prisma.SegmentCreateOrConnectWithoutJourneyInput;
    upsert?: Prisma.SegmentUpsertWithoutJourneyInput;
    disconnect?: Prisma.SegmentWhereInput | boolean;
    delete?: Prisma.SegmentWhereInput | boolean;
    connect?: Prisma.SegmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SegmentUpdateToOneWithWhereWithoutJourneyInput, Prisma.SegmentUpdateWithoutJourneyInput>, Prisma.SegmentUncheckedUpdateWithoutJourneyInput>;
};
export type SegmentCreateNestedOneWithoutSegment_membershipInput = {
    create?: Prisma.XOR<Prisma.SegmentCreateWithoutSegment_membershipInput, Prisma.SegmentUncheckedCreateWithoutSegment_membershipInput>;
    connectOrCreate?: Prisma.SegmentCreateOrConnectWithoutSegment_membershipInput;
    connect?: Prisma.SegmentWhereUniqueInput;
};
export type SegmentUpdateOneRequiredWithoutSegment_membershipNestedInput = {
    create?: Prisma.XOR<Prisma.SegmentCreateWithoutSegment_membershipInput, Prisma.SegmentUncheckedCreateWithoutSegment_membershipInput>;
    connectOrCreate?: Prisma.SegmentCreateOrConnectWithoutSegment_membershipInput;
    upsert?: Prisma.SegmentUpsertWithoutSegment_membershipInput;
    connect?: Prisma.SegmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SegmentUpdateToOneWithWhereWithoutSegment_membershipInput, Prisma.SegmentUpdateWithoutSegment_membershipInput>, Prisma.SegmentUncheckedUpdateWithoutSegment_membershipInput>;
};
export type SegmentCreateWithoutJourneyInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: string;
    isSystem?: boolean;
    isActive?: boolean;
    memberCount?: number;
    lastEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    segment_membership?: Prisma.segment_membershipCreateNestedManyWithoutSegmentInput;
};
export type SegmentUncheckedCreateWithoutJourneyInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: string;
    isSystem?: boolean;
    isActive?: boolean;
    memberCount?: number;
    lastEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    segment_membership?: Prisma.segment_membershipUncheckedCreateNestedManyWithoutSegmentInput;
};
export type SegmentCreateOrConnectWithoutJourneyInput = {
    where: Prisma.SegmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SegmentCreateWithoutJourneyInput, Prisma.SegmentUncheckedCreateWithoutJourneyInput>;
};
export type SegmentUpsertWithoutJourneyInput = {
    update: Prisma.XOR<Prisma.SegmentUpdateWithoutJourneyInput, Prisma.SegmentUncheckedUpdateWithoutJourneyInput>;
    create: Prisma.XOR<Prisma.SegmentCreateWithoutJourneyInput, Prisma.SegmentUncheckedCreateWithoutJourneyInput>;
    where?: Prisma.SegmentWhereInput;
};
export type SegmentUpdateToOneWithWhereWithoutJourneyInput = {
    where?: Prisma.SegmentWhereInput;
    data: Prisma.XOR<Prisma.SegmentUpdateWithoutJourneyInput, Prisma.SegmentUncheckedUpdateWithoutJourneyInput>;
};
export type SegmentUpdateWithoutJourneyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    memberCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    segment_membership?: Prisma.segment_membershipUpdateManyWithoutSegmentNestedInput;
};
export type SegmentUncheckedUpdateWithoutJourneyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    memberCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    segment_membership?: Prisma.segment_membershipUncheckedUpdateManyWithoutSegmentNestedInput;
};
export type SegmentCreateWithoutSegment_membershipInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: string;
    isSystem?: boolean;
    isActive?: boolean;
    memberCount?: number;
    lastEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    journey?: Prisma.JourneyCreateNestedManyWithoutSegmentInput;
};
export type SegmentUncheckedCreateWithoutSegment_membershipInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: string;
    isSystem?: boolean;
    isActive?: boolean;
    memberCount?: number;
    lastEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    journey?: Prisma.JourneyUncheckedCreateNestedManyWithoutSegmentInput;
};
export type SegmentCreateOrConnectWithoutSegment_membershipInput = {
    where: Prisma.SegmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SegmentCreateWithoutSegment_membershipInput, Prisma.SegmentUncheckedCreateWithoutSegment_membershipInput>;
};
export type SegmentUpsertWithoutSegment_membershipInput = {
    update: Prisma.XOR<Prisma.SegmentUpdateWithoutSegment_membershipInput, Prisma.SegmentUncheckedUpdateWithoutSegment_membershipInput>;
    create: Prisma.XOR<Prisma.SegmentCreateWithoutSegment_membershipInput, Prisma.SegmentUncheckedCreateWithoutSegment_membershipInput>;
    where?: Prisma.SegmentWhereInput;
};
export type SegmentUpdateToOneWithWhereWithoutSegment_membershipInput = {
    where?: Prisma.SegmentWhereInput;
    data: Prisma.XOR<Prisma.SegmentUpdateWithoutSegment_membershipInput, Prisma.SegmentUncheckedUpdateWithoutSegment_membershipInput>;
};
export type SegmentUpdateWithoutSegment_membershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    memberCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: Prisma.JourneyUpdateManyWithoutSegmentNestedInput;
};
export type SegmentUncheckedUpdateWithoutSegment_membershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    refreshMode?: Prisma.StringFieldUpdateOperationsInput | string;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    memberCount?: Prisma.IntFieldUpdateOperationsInput | number;
    lastEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: Prisma.JourneyUncheckedUpdateManyWithoutSegmentNestedInput;
};
export type SegmentCountOutputType = {
    journey: number;
    segment_membership: number;
};
export type SegmentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    journey?: boolean | SegmentCountOutputTypeCountJourneyArgs;
    segment_membership?: boolean | SegmentCountOutputTypeCountSegment_membershipArgs;
};
export type SegmentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SegmentCountOutputTypeSelect<ExtArgs> | null;
};
export type SegmentCountOutputTypeCountJourneyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JourneyWhereInput;
};
export type SegmentCountOutputTypeCountSegment_membershipArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.segment_membershipWhereInput;
};
export type SegmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    rules?: boolean;
    refreshMode?: boolean;
    isSystem?: boolean;
    isActive?: boolean;
    memberCount?: boolean;
    lastEvaluatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    journey?: boolean | Prisma.Segment$journeyArgs<ExtArgs>;
    segment_membership?: boolean | Prisma.Segment$segment_membershipArgs<ExtArgs>;
    _count?: boolean | Prisma.SegmentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["segment"]>;
export type SegmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    rules?: boolean;
    refreshMode?: boolean;
    isSystem?: boolean;
    isActive?: boolean;
    memberCount?: boolean;
    lastEvaluatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["segment"]>;
export type SegmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    rules?: boolean;
    refreshMode?: boolean;
    isSystem?: boolean;
    isActive?: boolean;
    memberCount?: boolean;
    lastEvaluatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["segment"]>;
export type SegmentSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    rules?: boolean;
    refreshMode?: boolean;
    isSystem?: boolean;
    isActive?: boolean;
    memberCount?: boolean;
    lastEvaluatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SegmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "description" | "rules" | "refreshMode" | "isSystem" | "isActive" | "memberCount" | "lastEvaluatedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["segment"]>;
export type SegmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    journey?: boolean | Prisma.Segment$journeyArgs<ExtArgs>;
    segment_membership?: boolean | Prisma.Segment$segment_membershipArgs<ExtArgs>;
    _count?: boolean | Prisma.SegmentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SegmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SegmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SegmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Segment";
    objects: {
        journey: Prisma.$JourneyPayload<ExtArgs>[];
        segment_membership: Prisma.$segment_membershipPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        name: string;
        description: string | null;
        rules: runtime.JsonValue;
        refreshMode: string;
        isSystem: boolean;
        isActive: boolean;
        memberCount: number;
        lastEvaluatedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["segment"]>;
    composites: {};
};
export type SegmentGetPayload<S extends boolean | null | undefined | SegmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SegmentPayload, S>;
export type SegmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SegmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SegmentCountAggregateInputType | true;
};
export interface SegmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Segment'];
        meta: {
            name: 'Segment';
        };
    };
    findUnique<T extends SegmentFindUniqueArgs>(args: Prisma.SelectSubset<T, SegmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SegmentClient<runtime.Types.Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SegmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SegmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SegmentClient<runtime.Types.Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SegmentFindFirstArgs>(args?: Prisma.SelectSubset<T, SegmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__SegmentClient<runtime.Types.Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SegmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SegmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SegmentClient<runtime.Types.Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SegmentFindManyArgs>(args?: Prisma.SelectSubset<T, SegmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SegmentCreateArgs>(args: Prisma.SelectSubset<T, SegmentCreateArgs<ExtArgs>>): Prisma.Prisma__SegmentClient<runtime.Types.Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SegmentCreateManyArgs>(args?: Prisma.SelectSubset<T, SegmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SegmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SegmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SegmentDeleteArgs>(args: Prisma.SelectSubset<T, SegmentDeleteArgs<ExtArgs>>): Prisma.Prisma__SegmentClient<runtime.Types.Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SegmentUpdateArgs>(args: Prisma.SelectSubset<T, SegmentUpdateArgs<ExtArgs>>): Prisma.Prisma__SegmentClient<runtime.Types.Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SegmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, SegmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SegmentUpdateManyArgs>(args: Prisma.SelectSubset<T, SegmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SegmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SegmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SegmentUpsertArgs>(args: Prisma.SelectSubset<T, SegmentUpsertArgs<ExtArgs>>): Prisma.Prisma__SegmentClient<runtime.Types.Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SegmentCountArgs>(args?: Prisma.Subset<T, SegmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SegmentCountAggregateOutputType> : number>;
    aggregate<T extends SegmentAggregateArgs>(args: Prisma.Subset<T, SegmentAggregateArgs>): Prisma.PrismaPromise<GetSegmentAggregateType<T>>;
    groupBy<T extends SegmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SegmentGroupByArgs['orderBy'];
    } : {
        orderBy?: SegmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SegmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSegmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SegmentFieldRefs;
}
export interface Prisma__SegmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    journey<T extends Prisma.Segment$journeyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Segment$journeyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    segment_membership<T extends Prisma.Segment$segment_membershipArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Segment$segment_membershipArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$segment_membershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SegmentFieldRefs {
    readonly id: Prisma.FieldRef<"Segment", 'String'>;
    readonly code: Prisma.FieldRef<"Segment", 'String'>;
    readonly name: Prisma.FieldRef<"Segment", 'String'>;
    readonly description: Prisma.FieldRef<"Segment", 'String'>;
    readonly rules: Prisma.FieldRef<"Segment", 'Json'>;
    readonly refreshMode: Prisma.FieldRef<"Segment", 'String'>;
    readonly isSystem: Prisma.FieldRef<"Segment", 'Boolean'>;
    readonly isActive: Prisma.FieldRef<"Segment", 'Boolean'>;
    readonly memberCount: Prisma.FieldRef<"Segment", 'Int'>;
    readonly lastEvaluatedAt: Prisma.FieldRef<"Segment", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Segment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Segment", 'DateTime'>;
}
export type SegmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SegmentSelect<ExtArgs> | null;
    omit?: Prisma.SegmentOmit<ExtArgs> | null;
    include?: Prisma.SegmentInclude<ExtArgs> | null;
    where: Prisma.SegmentWhereUniqueInput;
};
export type SegmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SegmentSelect<ExtArgs> | null;
    omit?: Prisma.SegmentOmit<ExtArgs> | null;
    include?: Prisma.SegmentInclude<ExtArgs> | null;
    where: Prisma.SegmentWhereUniqueInput;
};
export type SegmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SegmentSelect<ExtArgs> | null;
    omit?: Prisma.SegmentOmit<ExtArgs> | null;
    include?: Prisma.SegmentInclude<ExtArgs> | null;
    where?: Prisma.SegmentWhereInput;
    orderBy?: Prisma.SegmentOrderByWithRelationInput | Prisma.SegmentOrderByWithRelationInput[];
    cursor?: Prisma.SegmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SegmentScalarFieldEnum | Prisma.SegmentScalarFieldEnum[];
};
export type SegmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SegmentSelect<ExtArgs> | null;
    omit?: Prisma.SegmentOmit<ExtArgs> | null;
    include?: Prisma.SegmentInclude<ExtArgs> | null;
    where?: Prisma.SegmentWhereInput;
    orderBy?: Prisma.SegmentOrderByWithRelationInput | Prisma.SegmentOrderByWithRelationInput[];
    cursor?: Prisma.SegmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SegmentScalarFieldEnum | Prisma.SegmentScalarFieldEnum[];
};
export type SegmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SegmentSelect<ExtArgs> | null;
    omit?: Prisma.SegmentOmit<ExtArgs> | null;
    include?: Prisma.SegmentInclude<ExtArgs> | null;
    where?: Prisma.SegmentWhereInput;
    orderBy?: Prisma.SegmentOrderByWithRelationInput | Prisma.SegmentOrderByWithRelationInput[];
    cursor?: Prisma.SegmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SegmentScalarFieldEnum | Prisma.SegmentScalarFieldEnum[];
};
export type SegmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SegmentSelect<ExtArgs> | null;
    omit?: Prisma.SegmentOmit<ExtArgs> | null;
    include?: Prisma.SegmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SegmentCreateInput, Prisma.SegmentUncheckedCreateInput>;
};
export type SegmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SegmentCreateManyInput | Prisma.SegmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SegmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SegmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SegmentOmit<ExtArgs> | null;
    data: Prisma.SegmentCreateManyInput | Prisma.SegmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SegmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SegmentSelect<ExtArgs> | null;
    omit?: Prisma.SegmentOmit<ExtArgs> | null;
    include?: Prisma.SegmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SegmentUpdateInput, Prisma.SegmentUncheckedUpdateInput>;
    where: Prisma.SegmentWhereUniqueInput;
};
export type SegmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SegmentUpdateManyMutationInput, Prisma.SegmentUncheckedUpdateManyInput>;
    where?: Prisma.SegmentWhereInput;
    limit?: number;
};
export type SegmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SegmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SegmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SegmentUpdateManyMutationInput, Prisma.SegmentUncheckedUpdateManyInput>;
    where?: Prisma.SegmentWhereInput;
    limit?: number;
};
export type SegmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SegmentSelect<ExtArgs> | null;
    omit?: Prisma.SegmentOmit<ExtArgs> | null;
    include?: Prisma.SegmentInclude<ExtArgs> | null;
    where: Prisma.SegmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SegmentCreateInput, Prisma.SegmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SegmentUpdateInput, Prisma.SegmentUncheckedUpdateInput>;
};
export type SegmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SegmentSelect<ExtArgs> | null;
    omit?: Prisma.SegmentOmit<ExtArgs> | null;
    include?: Prisma.SegmentInclude<ExtArgs> | null;
    where: Prisma.SegmentWhereUniqueInput;
};
export type SegmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SegmentWhereInput;
    limit?: number;
};
export type Segment$journeyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JourneySelect<ExtArgs> | null;
    omit?: Prisma.JourneyOmit<ExtArgs> | null;
    include?: Prisma.JourneyInclude<ExtArgs> | null;
    where?: Prisma.JourneyWhereInput;
    orderBy?: Prisma.JourneyOrderByWithRelationInput | Prisma.JourneyOrderByWithRelationInput[];
    cursor?: Prisma.JourneyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JourneyScalarFieldEnum | Prisma.JourneyScalarFieldEnum[];
};
export type Segment$segment_membershipArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SegmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SegmentSelect<ExtArgs> | null;
    omit?: Prisma.SegmentOmit<ExtArgs> | null;
    include?: Prisma.SegmentInclude<ExtArgs> | null;
};
