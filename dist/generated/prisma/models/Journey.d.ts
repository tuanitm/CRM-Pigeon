import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type JourneyModel = runtime.Types.Result.DefaultSelection<Prisma.$JourneyPayload>;
export type AggregateJourney = {
    _count: JourneyCountAggregateOutputType | null;
    _avg: JourneyAvgAggregateOutputType | null;
    _sum: JourneySumAggregateOutputType | null;
    _min: JourneyMinAggregateOutputType | null;
    _max: JourneyMaxAggregateOutputType | null;
};
export type JourneyAvgAggregateOutputType = {
    version: number | null;
    controlGroupPct: runtime.Decimal | null;
};
export type JourneySumAggregateOutputType = {
    version: number | null;
    controlGroupPct: runtime.Decimal | null;
};
export type JourneyMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    description: string | null;
    triggerEvent: string | null;
    triggerSegmentId: string | null;
    version: number | null;
    status: string | null;
    hasControlGroup: boolean | null;
    controlGroupPct: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type JourneyMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    description: string | null;
    triggerEvent: string | null;
    triggerSegmentId: string | null;
    version: number | null;
    status: string | null;
    hasControlGroup: boolean | null;
    controlGroupPct: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type JourneyCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    description: number;
    graph: number;
    triggerEvent: number;
    triggerSegmentId: number;
    entryConditions: number;
    exitConditions: number;
    version: number;
    status: number;
    hasControlGroup: number;
    controlGroupPct: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type JourneyAvgAggregateInputType = {
    version?: true;
    controlGroupPct?: true;
};
export type JourneySumAggregateInputType = {
    version?: true;
    controlGroupPct?: true;
};
export type JourneyMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    triggerEvent?: true;
    triggerSegmentId?: true;
    version?: true;
    status?: true;
    hasControlGroup?: true;
    controlGroupPct?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type JourneyMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    triggerEvent?: true;
    triggerSegmentId?: true;
    version?: true;
    status?: true;
    hasControlGroup?: true;
    controlGroupPct?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type JourneyCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    description?: true;
    graph?: true;
    triggerEvent?: true;
    triggerSegmentId?: true;
    entryConditions?: true;
    exitConditions?: true;
    version?: true;
    status?: true;
    hasControlGroup?: true;
    controlGroupPct?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type JourneyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JourneyWhereInput;
    orderBy?: Prisma.JourneyOrderByWithRelationInput | Prisma.JourneyOrderByWithRelationInput[];
    cursor?: Prisma.JourneyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | JourneyCountAggregateInputType;
    _avg?: JourneyAvgAggregateInputType;
    _sum?: JourneySumAggregateInputType;
    _min?: JourneyMinAggregateInputType;
    _max?: JourneyMaxAggregateInputType;
};
export type GetJourneyAggregateType<T extends JourneyAggregateArgs> = {
    [P in keyof T & keyof AggregateJourney]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJourney[P]> : Prisma.GetScalarType<T[P], AggregateJourney[P]>;
};
export type JourneyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JourneyWhereInput;
    orderBy?: Prisma.JourneyOrderByWithAggregationInput | Prisma.JourneyOrderByWithAggregationInput[];
    by: Prisma.JourneyScalarFieldEnum[] | Prisma.JourneyScalarFieldEnum;
    having?: Prisma.JourneyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JourneyCountAggregateInputType | true;
    _avg?: JourneyAvgAggregateInputType;
    _sum?: JourneySumAggregateInputType;
    _min?: JourneyMinAggregateInputType;
    _max?: JourneyMaxAggregateInputType;
};
export type JourneyGroupByOutputType = {
    id: string;
    code: string;
    name: string;
    description: string | null;
    graph: runtime.JsonValue;
    triggerEvent: string | null;
    triggerSegmentId: string | null;
    entryConditions: runtime.JsonValue | null;
    exitConditions: runtime.JsonValue | null;
    version: number;
    status: string;
    hasControlGroup: boolean;
    controlGroupPct: runtime.Decimal | null;
    createdAt: Date;
    updatedAt: Date;
    _count: JourneyCountAggregateOutputType | null;
    _avg: JourneyAvgAggregateOutputType | null;
    _sum: JourneySumAggregateOutputType | null;
    _min: JourneyMinAggregateOutputType | null;
    _max: JourneyMaxAggregateOutputType | null;
};
export type GetJourneyGroupByPayload<T extends JourneyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JourneyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JourneyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JourneyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JourneyGroupByOutputType[P]>;
}>>;
export type JourneyWhereInput = {
    AND?: Prisma.JourneyWhereInput | Prisma.JourneyWhereInput[];
    OR?: Prisma.JourneyWhereInput[];
    NOT?: Prisma.JourneyWhereInput | Prisma.JourneyWhereInput[];
    id?: Prisma.UuidFilter<"Journey"> | string;
    code?: Prisma.StringFilter<"Journey"> | string;
    name?: Prisma.StringFilter<"Journey"> | string;
    description?: Prisma.StringNullableFilter<"Journey"> | string | null;
    graph?: Prisma.JsonFilter<"Journey">;
    triggerEvent?: Prisma.StringNullableFilter<"Journey"> | string | null;
    triggerSegmentId?: Prisma.UuidNullableFilter<"Journey"> | string | null;
    entryConditions?: Prisma.JsonNullableFilter<"Journey">;
    exitConditions?: Prisma.JsonNullableFilter<"Journey">;
    version?: Prisma.IntFilter<"Journey"> | number;
    status?: Prisma.StringFilter<"Journey"> | string;
    hasControlGroup?: Prisma.BoolFilter<"Journey"> | boolean;
    controlGroupPct?: Prisma.DecimalNullableFilter<"Journey"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"Journey"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Journey"> | Date | string;
    campaign_control_group?: Prisma.Campaign_control_groupListRelationFilter;
    segment?: Prisma.XOR<Prisma.SegmentNullableScalarRelationFilter, Prisma.SegmentWhereInput> | null;
    journey_run?: Prisma.Journey_runListRelationFilter;
};
export type JourneyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    graph?: Prisma.SortOrder;
    triggerEvent?: Prisma.SortOrderInput | Prisma.SortOrder;
    triggerSegmentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    entryConditions?: Prisma.SortOrderInput | Prisma.SortOrder;
    exitConditions?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    hasControlGroup?: Prisma.SortOrder;
    controlGroupPct?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    campaign_control_group?: Prisma.campaign_control_groupOrderByRelationAggregateInput;
    segment?: Prisma.SegmentOrderByWithRelationInput;
    journey_run?: Prisma.journey_runOrderByRelationAggregateInput;
};
export type JourneyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.JourneyWhereInput | Prisma.JourneyWhereInput[];
    OR?: Prisma.JourneyWhereInput[];
    NOT?: Prisma.JourneyWhereInput | Prisma.JourneyWhereInput[];
    name?: Prisma.StringFilter<"Journey"> | string;
    description?: Prisma.StringNullableFilter<"Journey"> | string | null;
    graph?: Prisma.JsonFilter<"Journey">;
    triggerEvent?: Prisma.StringNullableFilter<"Journey"> | string | null;
    triggerSegmentId?: Prisma.UuidNullableFilter<"Journey"> | string | null;
    entryConditions?: Prisma.JsonNullableFilter<"Journey">;
    exitConditions?: Prisma.JsonNullableFilter<"Journey">;
    version?: Prisma.IntFilter<"Journey"> | number;
    status?: Prisma.StringFilter<"Journey"> | string;
    hasControlGroup?: Prisma.BoolFilter<"Journey"> | boolean;
    controlGroupPct?: Prisma.DecimalNullableFilter<"Journey"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"Journey"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Journey"> | Date | string;
    campaign_control_group?: Prisma.Campaign_control_groupListRelationFilter;
    segment?: Prisma.XOR<Prisma.SegmentNullableScalarRelationFilter, Prisma.SegmentWhereInput> | null;
    journey_run?: Prisma.Journey_runListRelationFilter;
}, "id" | "code">;
export type JourneyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    graph?: Prisma.SortOrder;
    triggerEvent?: Prisma.SortOrderInput | Prisma.SortOrder;
    triggerSegmentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    entryConditions?: Prisma.SortOrderInput | Prisma.SortOrder;
    exitConditions?: Prisma.SortOrderInput | Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    hasControlGroup?: Prisma.SortOrder;
    controlGroupPct?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.JourneyCountOrderByAggregateInput;
    _avg?: Prisma.JourneyAvgOrderByAggregateInput;
    _max?: Prisma.JourneyMaxOrderByAggregateInput;
    _min?: Prisma.JourneyMinOrderByAggregateInput;
    _sum?: Prisma.JourneySumOrderByAggregateInput;
};
export type JourneyScalarWhereWithAggregatesInput = {
    AND?: Prisma.JourneyScalarWhereWithAggregatesInput | Prisma.JourneyScalarWhereWithAggregatesInput[];
    OR?: Prisma.JourneyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JourneyScalarWhereWithAggregatesInput | Prisma.JourneyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Journey"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Journey"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Journey"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Journey"> | string | null;
    graph?: Prisma.JsonWithAggregatesFilter<"Journey">;
    triggerEvent?: Prisma.StringNullableWithAggregatesFilter<"Journey"> | string | null;
    triggerSegmentId?: Prisma.UuidNullableWithAggregatesFilter<"Journey"> | string | null;
    entryConditions?: Prisma.JsonNullableWithAggregatesFilter<"Journey">;
    exitConditions?: Prisma.JsonNullableWithAggregatesFilter<"Journey">;
    version?: Prisma.IntWithAggregatesFilter<"Journey"> | number;
    status?: Prisma.StringWithAggregatesFilter<"Journey"> | string;
    hasControlGroup?: Prisma.BoolWithAggregatesFilter<"Journey"> | boolean;
    controlGroupPct?: Prisma.DecimalNullableWithAggregatesFilter<"Journey"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Journey"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Journey"> | Date | string;
};
export type JourneyCreateInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    hasControlGroup?: boolean;
    controlGroupPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    campaign_control_group?: Prisma.campaign_control_groupCreateNestedManyWithoutJourneyInput;
    segment?: Prisma.SegmentCreateNestedOneWithoutJourneyInput;
    journey_run?: Prisma.journey_runCreateNestedManyWithoutJourneyInput;
};
export type JourneyUncheckedCreateInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: string | null;
    triggerSegmentId?: string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    hasControlGroup?: boolean;
    controlGroupPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    campaign_control_group?: Prisma.campaign_control_groupUncheckedCreateNestedManyWithoutJourneyInput;
    journey_run?: Prisma.journey_runUncheckedCreateNestedManyWithoutJourneyInput;
};
export type JourneyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    hasControlGroup?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    controlGroupPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaign_control_group?: Prisma.campaign_control_groupUpdateManyWithoutJourneyNestedInput;
    segment?: Prisma.SegmentUpdateOneWithoutJourneyNestedInput;
    journey_run?: Prisma.journey_runUpdateManyWithoutJourneyNestedInput;
};
export type JourneyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    triggerSegmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    hasControlGroup?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    controlGroupPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaign_control_group?: Prisma.campaign_control_groupUncheckedUpdateManyWithoutJourneyNestedInput;
    journey_run?: Prisma.journey_runUncheckedUpdateManyWithoutJourneyNestedInput;
};
export type JourneyCreateManyInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: string | null;
    triggerSegmentId?: string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    hasControlGroup?: boolean;
    controlGroupPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type JourneyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    hasControlGroup?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    controlGroupPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JourneyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    triggerSegmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    hasControlGroup?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    controlGroupPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JourneyListRelationFilter = {
    every?: Prisma.JourneyWhereInput;
    some?: Prisma.JourneyWhereInput;
    none?: Prisma.JourneyWhereInput;
};
export type JourneyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type JourneyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    graph?: Prisma.SortOrder;
    triggerEvent?: Prisma.SortOrder;
    triggerSegmentId?: Prisma.SortOrder;
    entryConditions?: Prisma.SortOrder;
    exitConditions?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    hasControlGroup?: Prisma.SortOrder;
    controlGroupPct?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type JourneyAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    controlGroupPct?: Prisma.SortOrder;
};
export type JourneyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    triggerEvent?: Prisma.SortOrder;
    triggerSegmentId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    hasControlGroup?: Prisma.SortOrder;
    controlGroupPct?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type JourneyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    triggerEvent?: Prisma.SortOrder;
    triggerSegmentId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    hasControlGroup?: Prisma.SortOrder;
    controlGroupPct?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type JourneySumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
    controlGroupPct?: Prisma.SortOrder;
};
export type JourneyNullableScalarRelationFilter = {
    is?: Prisma.JourneyWhereInput | null;
    isNot?: Prisma.JourneyWhereInput | null;
};
export type JourneyScalarRelationFilter = {
    is?: Prisma.JourneyWhereInput;
    isNot?: Prisma.JourneyWhereInput;
};
export type JourneyCreateNestedManyWithoutSegmentInput = {
    create?: Prisma.XOR<Prisma.JourneyCreateWithoutSegmentInput, Prisma.JourneyUncheckedCreateWithoutSegmentInput> | Prisma.JourneyCreateWithoutSegmentInput[] | Prisma.JourneyUncheckedCreateWithoutSegmentInput[];
    connectOrCreate?: Prisma.JourneyCreateOrConnectWithoutSegmentInput | Prisma.JourneyCreateOrConnectWithoutSegmentInput[];
    createMany?: Prisma.JourneyCreateManySegmentInputEnvelope;
    connect?: Prisma.JourneyWhereUniqueInput | Prisma.JourneyWhereUniqueInput[];
};
export type JourneyUncheckedCreateNestedManyWithoutSegmentInput = {
    create?: Prisma.XOR<Prisma.JourneyCreateWithoutSegmentInput, Prisma.JourneyUncheckedCreateWithoutSegmentInput> | Prisma.JourneyCreateWithoutSegmentInput[] | Prisma.JourneyUncheckedCreateWithoutSegmentInput[];
    connectOrCreate?: Prisma.JourneyCreateOrConnectWithoutSegmentInput | Prisma.JourneyCreateOrConnectWithoutSegmentInput[];
    createMany?: Prisma.JourneyCreateManySegmentInputEnvelope;
    connect?: Prisma.JourneyWhereUniqueInput | Prisma.JourneyWhereUniqueInput[];
};
export type JourneyUpdateManyWithoutSegmentNestedInput = {
    create?: Prisma.XOR<Prisma.JourneyCreateWithoutSegmentInput, Prisma.JourneyUncheckedCreateWithoutSegmentInput> | Prisma.JourneyCreateWithoutSegmentInput[] | Prisma.JourneyUncheckedCreateWithoutSegmentInput[];
    connectOrCreate?: Prisma.JourneyCreateOrConnectWithoutSegmentInput | Prisma.JourneyCreateOrConnectWithoutSegmentInput[];
    upsert?: Prisma.JourneyUpsertWithWhereUniqueWithoutSegmentInput | Prisma.JourneyUpsertWithWhereUniqueWithoutSegmentInput[];
    createMany?: Prisma.JourneyCreateManySegmentInputEnvelope;
    set?: Prisma.JourneyWhereUniqueInput | Prisma.JourneyWhereUniqueInput[];
    disconnect?: Prisma.JourneyWhereUniqueInput | Prisma.JourneyWhereUniqueInput[];
    delete?: Prisma.JourneyWhereUniqueInput | Prisma.JourneyWhereUniqueInput[];
    connect?: Prisma.JourneyWhereUniqueInput | Prisma.JourneyWhereUniqueInput[];
    update?: Prisma.JourneyUpdateWithWhereUniqueWithoutSegmentInput | Prisma.JourneyUpdateWithWhereUniqueWithoutSegmentInput[];
    updateMany?: Prisma.JourneyUpdateManyWithWhereWithoutSegmentInput | Prisma.JourneyUpdateManyWithWhereWithoutSegmentInput[];
    deleteMany?: Prisma.JourneyScalarWhereInput | Prisma.JourneyScalarWhereInput[];
};
export type JourneyUncheckedUpdateManyWithoutSegmentNestedInput = {
    create?: Prisma.XOR<Prisma.JourneyCreateWithoutSegmentInput, Prisma.JourneyUncheckedCreateWithoutSegmentInput> | Prisma.JourneyCreateWithoutSegmentInput[] | Prisma.JourneyUncheckedCreateWithoutSegmentInput[];
    connectOrCreate?: Prisma.JourneyCreateOrConnectWithoutSegmentInput | Prisma.JourneyCreateOrConnectWithoutSegmentInput[];
    upsert?: Prisma.JourneyUpsertWithWhereUniqueWithoutSegmentInput | Prisma.JourneyUpsertWithWhereUniqueWithoutSegmentInput[];
    createMany?: Prisma.JourneyCreateManySegmentInputEnvelope;
    set?: Prisma.JourneyWhereUniqueInput | Prisma.JourneyWhereUniqueInput[];
    disconnect?: Prisma.JourneyWhereUniqueInput | Prisma.JourneyWhereUniqueInput[];
    delete?: Prisma.JourneyWhereUniqueInput | Prisma.JourneyWhereUniqueInput[];
    connect?: Prisma.JourneyWhereUniqueInput | Prisma.JourneyWhereUniqueInput[];
    update?: Prisma.JourneyUpdateWithWhereUniqueWithoutSegmentInput | Prisma.JourneyUpdateWithWhereUniqueWithoutSegmentInput[];
    updateMany?: Prisma.JourneyUpdateManyWithWhereWithoutSegmentInput | Prisma.JourneyUpdateManyWithWhereWithoutSegmentInput[];
    deleteMany?: Prisma.JourneyScalarWhereInput | Prisma.JourneyScalarWhereInput[];
};
export type JourneyCreateNestedOneWithoutCampaign_control_groupInput = {
    create?: Prisma.XOR<Prisma.JourneyCreateWithoutCampaign_control_groupInput, Prisma.JourneyUncheckedCreateWithoutCampaign_control_groupInput>;
    connectOrCreate?: Prisma.JourneyCreateOrConnectWithoutCampaign_control_groupInput;
    connect?: Prisma.JourneyWhereUniqueInput;
};
export type JourneyUpdateOneWithoutCampaign_control_groupNestedInput = {
    create?: Prisma.XOR<Prisma.JourneyCreateWithoutCampaign_control_groupInput, Prisma.JourneyUncheckedCreateWithoutCampaign_control_groupInput>;
    connectOrCreate?: Prisma.JourneyCreateOrConnectWithoutCampaign_control_groupInput;
    upsert?: Prisma.JourneyUpsertWithoutCampaign_control_groupInput;
    disconnect?: Prisma.JourneyWhereInput | boolean;
    delete?: Prisma.JourneyWhereInput | boolean;
    connect?: Prisma.JourneyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JourneyUpdateToOneWithWhereWithoutCampaign_control_groupInput, Prisma.JourneyUpdateWithoutCampaign_control_groupInput>, Prisma.JourneyUncheckedUpdateWithoutCampaign_control_groupInput>;
};
export type JourneyCreateNestedOneWithoutJourney_runInput = {
    create?: Prisma.XOR<Prisma.JourneyCreateWithoutJourney_runInput, Prisma.JourneyUncheckedCreateWithoutJourney_runInput>;
    connectOrCreate?: Prisma.JourneyCreateOrConnectWithoutJourney_runInput;
    connect?: Prisma.JourneyWhereUniqueInput;
};
export type JourneyUpdateOneRequiredWithoutJourney_runNestedInput = {
    create?: Prisma.XOR<Prisma.JourneyCreateWithoutJourney_runInput, Prisma.JourneyUncheckedCreateWithoutJourney_runInput>;
    connectOrCreate?: Prisma.JourneyCreateOrConnectWithoutJourney_runInput;
    upsert?: Prisma.JourneyUpsertWithoutJourney_runInput;
    connect?: Prisma.JourneyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.JourneyUpdateToOneWithWhereWithoutJourney_runInput, Prisma.JourneyUpdateWithoutJourney_runInput>, Prisma.JourneyUncheckedUpdateWithoutJourney_runInput>;
};
export type JourneyCreateWithoutSegmentInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    hasControlGroup?: boolean;
    controlGroupPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    campaign_control_group?: Prisma.campaign_control_groupCreateNestedManyWithoutJourneyInput;
    journey_run?: Prisma.journey_runCreateNestedManyWithoutJourneyInput;
};
export type JourneyUncheckedCreateWithoutSegmentInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    hasControlGroup?: boolean;
    controlGroupPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    campaign_control_group?: Prisma.campaign_control_groupUncheckedCreateNestedManyWithoutJourneyInput;
    journey_run?: Prisma.journey_runUncheckedCreateNestedManyWithoutJourneyInput;
};
export type JourneyCreateOrConnectWithoutSegmentInput = {
    where: Prisma.JourneyWhereUniqueInput;
    create: Prisma.XOR<Prisma.JourneyCreateWithoutSegmentInput, Prisma.JourneyUncheckedCreateWithoutSegmentInput>;
};
export type JourneyCreateManySegmentInputEnvelope = {
    data: Prisma.JourneyCreateManySegmentInput | Prisma.JourneyCreateManySegmentInput[];
    skipDuplicates?: boolean;
};
export type JourneyUpsertWithWhereUniqueWithoutSegmentInput = {
    where: Prisma.JourneyWhereUniqueInput;
    update: Prisma.XOR<Prisma.JourneyUpdateWithoutSegmentInput, Prisma.JourneyUncheckedUpdateWithoutSegmentInput>;
    create: Prisma.XOR<Prisma.JourneyCreateWithoutSegmentInput, Prisma.JourneyUncheckedCreateWithoutSegmentInput>;
};
export type JourneyUpdateWithWhereUniqueWithoutSegmentInput = {
    where: Prisma.JourneyWhereUniqueInput;
    data: Prisma.XOR<Prisma.JourneyUpdateWithoutSegmentInput, Prisma.JourneyUncheckedUpdateWithoutSegmentInput>;
};
export type JourneyUpdateManyWithWhereWithoutSegmentInput = {
    where: Prisma.JourneyScalarWhereInput;
    data: Prisma.XOR<Prisma.JourneyUpdateManyMutationInput, Prisma.JourneyUncheckedUpdateManyWithoutSegmentInput>;
};
export type JourneyScalarWhereInput = {
    AND?: Prisma.JourneyScalarWhereInput | Prisma.JourneyScalarWhereInput[];
    OR?: Prisma.JourneyScalarWhereInput[];
    NOT?: Prisma.JourneyScalarWhereInput | Prisma.JourneyScalarWhereInput[];
    id?: Prisma.UuidFilter<"Journey"> | string;
    code?: Prisma.StringFilter<"Journey"> | string;
    name?: Prisma.StringFilter<"Journey"> | string;
    description?: Prisma.StringNullableFilter<"Journey"> | string | null;
    graph?: Prisma.JsonFilter<"Journey">;
    triggerEvent?: Prisma.StringNullableFilter<"Journey"> | string | null;
    triggerSegmentId?: Prisma.UuidNullableFilter<"Journey"> | string | null;
    entryConditions?: Prisma.JsonNullableFilter<"Journey">;
    exitConditions?: Prisma.JsonNullableFilter<"Journey">;
    version?: Prisma.IntFilter<"Journey"> | number;
    status?: Prisma.StringFilter<"Journey"> | string;
    hasControlGroup?: Prisma.BoolFilter<"Journey"> | boolean;
    controlGroupPct?: Prisma.DecimalNullableFilter<"Journey"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFilter<"Journey"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Journey"> | Date | string;
};
export type JourneyCreateWithoutCampaign_control_groupInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    hasControlGroup?: boolean;
    controlGroupPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    segment?: Prisma.SegmentCreateNestedOneWithoutJourneyInput;
    journey_run?: Prisma.journey_runCreateNestedManyWithoutJourneyInput;
};
export type JourneyUncheckedCreateWithoutCampaign_control_groupInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: string | null;
    triggerSegmentId?: string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    hasControlGroup?: boolean;
    controlGroupPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    journey_run?: Prisma.journey_runUncheckedCreateNestedManyWithoutJourneyInput;
};
export type JourneyCreateOrConnectWithoutCampaign_control_groupInput = {
    where: Prisma.JourneyWhereUniqueInput;
    create: Prisma.XOR<Prisma.JourneyCreateWithoutCampaign_control_groupInput, Prisma.JourneyUncheckedCreateWithoutCampaign_control_groupInput>;
};
export type JourneyUpsertWithoutCampaign_control_groupInput = {
    update: Prisma.XOR<Prisma.JourneyUpdateWithoutCampaign_control_groupInput, Prisma.JourneyUncheckedUpdateWithoutCampaign_control_groupInput>;
    create: Prisma.XOR<Prisma.JourneyCreateWithoutCampaign_control_groupInput, Prisma.JourneyUncheckedCreateWithoutCampaign_control_groupInput>;
    where?: Prisma.JourneyWhereInput;
};
export type JourneyUpdateToOneWithWhereWithoutCampaign_control_groupInput = {
    where?: Prisma.JourneyWhereInput;
    data: Prisma.XOR<Prisma.JourneyUpdateWithoutCampaign_control_groupInput, Prisma.JourneyUncheckedUpdateWithoutCampaign_control_groupInput>;
};
export type JourneyUpdateWithoutCampaign_control_groupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    hasControlGroup?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    controlGroupPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    segment?: Prisma.SegmentUpdateOneWithoutJourneyNestedInput;
    journey_run?: Prisma.journey_runUpdateManyWithoutJourneyNestedInput;
};
export type JourneyUncheckedUpdateWithoutCampaign_control_groupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    triggerSegmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    hasControlGroup?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    controlGroupPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    journey_run?: Prisma.journey_runUncheckedUpdateManyWithoutJourneyNestedInput;
};
export type JourneyCreateWithoutJourney_runInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    hasControlGroup?: boolean;
    controlGroupPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    campaign_control_group?: Prisma.campaign_control_groupCreateNestedManyWithoutJourneyInput;
    segment?: Prisma.SegmentCreateNestedOneWithoutJourneyInput;
};
export type JourneyUncheckedCreateWithoutJourney_runInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: string | null;
    triggerSegmentId?: string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    hasControlGroup?: boolean;
    controlGroupPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    campaign_control_group?: Prisma.campaign_control_groupUncheckedCreateNestedManyWithoutJourneyInput;
};
export type JourneyCreateOrConnectWithoutJourney_runInput = {
    where: Prisma.JourneyWhereUniqueInput;
    create: Prisma.XOR<Prisma.JourneyCreateWithoutJourney_runInput, Prisma.JourneyUncheckedCreateWithoutJourney_runInput>;
};
export type JourneyUpsertWithoutJourney_runInput = {
    update: Prisma.XOR<Prisma.JourneyUpdateWithoutJourney_runInput, Prisma.JourneyUncheckedUpdateWithoutJourney_runInput>;
    create: Prisma.XOR<Prisma.JourneyCreateWithoutJourney_runInput, Prisma.JourneyUncheckedCreateWithoutJourney_runInput>;
    where?: Prisma.JourneyWhereInput;
};
export type JourneyUpdateToOneWithWhereWithoutJourney_runInput = {
    where?: Prisma.JourneyWhereInput;
    data: Prisma.XOR<Prisma.JourneyUpdateWithoutJourney_runInput, Prisma.JourneyUncheckedUpdateWithoutJourney_runInput>;
};
export type JourneyUpdateWithoutJourney_runInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    hasControlGroup?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    controlGroupPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaign_control_group?: Prisma.campaign_control_groupUpdateManyWithoutJourneyNestedInput;
    segment?: Prisma.SegmentUpdateOneWithoutJourneyNestedInput;
};
export type JourneyUncheckedUpdateWithoutJourney_runInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    triggerSegmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    hasControlGroup?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    controlGroupPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaign_control_group?: Prisma.campaign_control_groupUncheckedUpdateManyWithoutJourneyNestedInput;
};
export type JourneyCreateManySegmentInput = {
    id?: string;
    code: string;
    name: string;
    description?: string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: number;
    status?: string;
    hasControlGroup?: boolean;
    controlGroupPct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type JourneyUpdateWithoutSegmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    hasControlGroup?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    controlGroupPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaign_control_group?: Prisma.campaign_control_groupUpdateManyWithoutJourneyNestedInput;
    journey_run?: Prisma.journey_runUpdateManyWithoutJourneyNestedInput;
};
export type JourneyUncheckedUpdateWithoutSegmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    hasControlGroup?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    controlGroupPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaign_control_group?: Prisma.campaign_control_groupUncheckedUpdateManyWithoutJourneyNestedInput;
    journey_run?: Prisma.journey_runUncheckedUpdateManyWithoutJourneyNestedInput;
};
export type JourneyUncheckedUpdateManyWithoutSegmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    graph?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    triggerEvent?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entryConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    exitConditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    hasControlGroup?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    controlGroupPct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JourneyCountOutputType = {
    campaign_control_group: number;
    journey_run: number;
};
export type JourneyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaign_control_group?: boolean | JourneyCountOutputTypeCountCampaign_control_groupArgs;
    journey_run?: boolean | JourneyCountOutputTypeCountJourney_runArgs;
};
export type JourneyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JourneyCountOutputTypeSelect<ExtArgs> | null;
};
export type JourneyCountOutputTypeCountCampaign_control_groupArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.campaign_control_groupWhereInput;
};
export type JourneyCountOutputTypeCountJourney_runArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.journey_runWhereInput;
};
export type JourneySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    graph?: boolean;
    triggerEvent?: boolean;
    triggerSegmentId?: boolean;
    entryConditions?: boolean;
    exitConditions?: boolean;
    version?: boolean;
    status?: boolean;
    hasControlGroup?: boolean;
    controlGroupPct?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    campaign_control_group?: boolean | Prisma.Journey$campaign_control_groupArgs<ExtArgs>;
    segment?: boolean | Prisma.Journey$segmentArgs<ExtArgs>;
    journey_run?: boolean | Prisma.Journey$journey_runArgs<ExtArgs>;
    _count?: boolean | Prisma.JourneyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journey"]>;
export type JourneySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    graph?: boolean;
    triggerEvent?: boolean;
    triggerSegmentId?: boolean;
    entryConditions?: boolean;
    exitConditions?: boolean;
    version?: boolean;
    status?: boolean;
    hasControlGroup?: boolean;
    controlGroupPct?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    segment?: boolean | Prisma.Journey$segmentArgs<ExtArgs>;
}, ExtArgs["result"]["journey"]>;
export type JourneySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    graph?: boolean;
    triggerEvent?: boolean;
    triggerSegmentId?: boolean;
    entryConditions?: boolean;
    exitConditions?: boolean;
    version?: boolean;
    status?: boolean;
    hasControlGroup?: boolean;
    controlGroupPct?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    segment?: boolean | Prisma.Journey$segmentArgs<ExtArgs>;
}, ExtArgs["result"]["journey"]>;
export type JourneySelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    description?: boolean;
    graph?: boolean;
    triggerEvent?: boolean;
    triggerSegmentId?: boolean;
    entryConditions?: boolean;
    exitConditions?: boolean;
    version?: boolean;
    status?: boolean;
    hasControlGroup?: boolean;
    controlGroupPct?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type JourneyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "description" | "graph" | "triggerEvent" | "triggerSegmentId" | "entryConditions" | "exitConditions" | "version" | "status" | "hasControlGroup" | "controlGroupPct" | "createdAt" | "updatedAt", ExtArgs["result"]["journey"]>;
export type JourneyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaign_control_group?: boolean | Prisma.Journey$campaign_control_groupArgs<ExtArgs>;
    segment?: boolean | Prisma.Journey$segmentArgs<ExtArgs>;
    journey_run?: boolean | Prisma.Journey$journey_runArgs<ExtArgs>;
    _count?: boolean | Prisma.JourneyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type JourneyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    segment?: boolean | Prisma.Journey$segmentArgs<ExtArgs>;
};
export type JourneyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    segment?: boolean | Prisma.Journey$segmentArgs<ExtArgs>;
};
export type $JourneyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Journey";
    objects: {
        campaign_control_group: Prisma.$campaign_control_groupPayload<ExtArgs>[];
        segment: Prisma.$SegmentPayload<ExtArgs> | null;
        journey_run: Prisma.$journey_runPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        name: string;
        description: string | null;
        graph: runtime.JsonValue;
        triggerEvent: string | null;
        triggerSegmentId: string | null;
        entryConditions: runtime.JsonValue | null;
        exitConditions: runtime.JsonValue | null;
        version: number;
        status: string;
        hasControlGroup: boolean;
        controlGroupPct: runtime.Decimal | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["journey"]>;
    composites: {};
};
export type JourneyGetPayload<S extends boolean | null | undefined | JourneyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JourneyPayload, S>;
export type JourneyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JourneyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JourneyCountAggregateInputType | true;
};
export interface JourneyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Journey'];
        meta: {
            name: 'Journey';
        };
    };
    findUnique<T extends JourneyFindUniqueArgs>(args: Prisma.SelectSubset<T, JourneyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JourneyClient<runtime.Types.Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends JourneyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JourneyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JourneyClient<runtime.Types.Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends JourneyFindFirstArgs>(args?: Prisma.SelectSubset<T, JourneyFindFirstArgs<ExtArgs>>): Prisma.Prisma__JourneyClient<runtime.Types.Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends JourneyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JourneyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JourneyClient<runtime.Types.Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends JourneyFindManyArgs>(args?: Prisma.SelectSubset<T, JourneyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends JourneyCreateArgs>(args: Prisma.SelectSubset<T, JourneyCreateArgs<ExtArgs>>): Prisma.Prisma__JourneyClient<runtime.Types.Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends JourneyCreateManyArgs>(args?: Prisma.SelectSubset<T, JourneyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends JourneyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JourneyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends JourneyDeleteArgs>(args: Prisma.SelectSubset<T, JourneyDeleteArgs<ExtArgs>>): Prisma.Prisma__JourneyClient<runtime.Types.Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends JourneyUpdateArgs>(args: Prisma.SelectSubset<T, JourneyUpdateArgs<ExtArgs>>): Prisma.Prisma__JourneyClient<runtime.Types.Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends JourneyDeleteManyArgs>(args?: Prisma.SelectSubset<T, JourneyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends JourneyUpdateManyArgs>(args: Prisma.SelectSubset<T, JourneyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends JourneyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JourneyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends JourneyUpsertArgs>(args: Prisma.SelectSubset<T, JourneyUpsertArgs<ExtArgs>>): Prisma.Prisma__JourneyClient<runtime.Types.Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends JourneyCountArgs>(args?: Prisma.Subset<T, JourneyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JourneyCountAggregateOutputType> : number>;
    aggregate<T extends JourneyAggregateArgs>(args: Prisma.Subset<T, JourneyAggregateArgs>): Prisma.PrismaPromise<GetJourneyAggregateType<T>>;
    groupBy<T extends JourneyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JourneyGroupByArgs['orderBy'];
    } : {
        orderBy?: JourneyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JourneyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJourneyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: JourneyFieldRefs;
}
export interface Prisma__JourneyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    campaign_control_group<T extends Prisma.Journey$campaign_control_groupArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Journey$campaign_control_groupArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$campaign_control_groupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    segment<T extends Prisma.Journey$segmentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Journey$segmentArgs<ExtArgs>>): Prisma.Prisma__SegmentClient<runtime.Types.Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    journey_run<T extends Prisma.Journey$journey_runArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Journey$journey_runArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$journey_runPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface JourneyFieldRefs {
    readonly id: Prisma.FieldRef<"Journey", 'String'>;
    readonly code: Prisma.FieldRef<"Journey", 'String'>;
    readonly name: Prisma.FieldRef<"Journey", 'String'>;
    readonly description: Prisma.FieldRef<"Journey", 'String'>;
    readonly graph: Prisma.FieldRef<"Journey", 'Json'>;
    readonly triggerEvent: Prisma.FieldRef<"Journey", 'String'>;
    readonly triggerSegmentId: Prisma.FieldRef<"Journey", 'String'>;
    readonly entryConditions: Prisma.FieldRef<"Journey", 'Json'>;
    readonly exitConditions: Prisma.FieldRef<"Journey", 'Json'>;
    readonly version: Prisma.FieldRef<"Journey", 'Int'>;
    readonly status: Prisma.FieldRef<"Journey", 'String'>;
    readonly hasControlGroup: Prisma.FieldRef<"Journey", 'Boolean'>;
    readonly controlGroupPct: Prisma.FieldRef<"Journey", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"Journey", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Journey", 'DateTime'>;
}
export type JourneyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JourneySelect<ExtArgs> | null;
    omit?: Prisma.JourneyOmit<ExtArgs> | null;
    include?: Prisma.JourneyInclude<ExtArgs> | null;
    where: Prisma.JourneyWhereUniqueInput;
};
export type JourneyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JourneySelect<ExtArgs> | null;
    omit?: Prisma.JourneyOmit<ExtArgs> | null;
    include?: Prisma.JourneyInclude<ExtArgs> | null;
    where: Prisma.JourneyWhereUniqueInput;
};
export type JourneyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type JourneyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type JourneyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type JourneyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JourneySelect<ExtArgs> | null;
    omit?: Prisma.JourneyOmit<ExtArgs> | null;
    include?: Prisma.JourneyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JourneyCreateInput, Prisma.JourneyUncheckedCreateInput>;
};
export type JourneyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.JourneyCreateManyInput | Prisma.JourneyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type JourneyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JourneySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JourneyOmit<ExtArgs> | null;
    data: Prisma.JourneyCreateManyInput | Prisma.JourneyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.JourneyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type JourneyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JourneySelect<ExtArgs> | null;
    omit?: Prisma.JourneyOmit<ExtArgs> | null;
    include?: Prisma.JourneyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JourneyUpdateInput, Prisma.JourneyUncheckedUpdateInput>;
    where: Prisma.JourneyWhereUniqueInput;
};
export type JourneyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.JourneyUpdateManyMutationInput, Prisma.JourneyUncheckedUpdateManyInput>;
    where?: Prisma.JourneyWhereInput;
    limit?: number;
};
export type JourneyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JourneySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.JourneyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.JourneyUpdateManyMutationInput, Prisma.JourneyUncheckedUpdateManyInput>;
    where?: Prisma.JourneyWhereInput;
    limit?: number;
    include?: Prisma.JourneyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type JourneyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JourneySelect<ExtArgs> | null;
    omit?: Prisma.JourneyOmit<ExtArgs> | null;
    include?: Prisma.JourneyInclude<ExtArgs> | null;
    where: Prisma.JourneyWhereUniqueInput;
    create: Prisma.XOR<Prisma.JourneyCreateInput, Prisma.JourneyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.JourneyUpdateInput, Prisma.JourneyUncheckedUpdateInput>;
};
export type JourneyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JourneySelect<ExtArgs> | null;
    omit?: Prisma.JourneyOmit<ExtArgs> | null;
    include?: Prisma.JourneyInclude<ExtArgs> | null;
    where: Prisma.JourneyWhereUniqueInput;
};
export type JourneyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JourneyWhereInput;
    limit?: number;
};
export type Journey$campaign_control_groupArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaign_control_groupSelect<ExtArgs> | null;
    omit?: Prisma.campaign_control_groupOmit<ExtArgs> | null;
    include?: Prisma.campaign_control_groupInclude<ExtArgs> | null;
    where?: Prisma.campaign_control_groupWhereInput;
    orderBy?: Prisma.campaign_control_groupOrderByWithRelationInput | Prisma.campaign_control_groupOrderByWithRelationInput[];
    cursor?: Prisma.campaign_control_groupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Campaign_control_groupScalarFieldEnum | Prisma.Campaign_control_groupScalarFieldEnum[];
};
export type Journey$segmentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SegmentSelect<ExtArgs> | null;
    omit?: Prisma.SegmentOmit<ExtArgs> | null;
    include?: Prisma.SegmentInclude<ExtArgs> | null;
    where?: Prisma.SegmentWhereInput;
};
export type Journey$journey_runArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_runSelect<ExtArgs> | null;
    omit?: Prisma.journey_runOmit<ExtArgs> | null;
    include?: Prisma.journey_runInclude<ExtArgs> | null;
    where?: Prisma.journey_runWhereInput;
    orderBy?: Prisma.journey_runOrderByWithRelationInput | Prisma.journey_runOrderByWithRelationInput[];
    cursor?: Prisma.journey_runWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Journey_runScalarFieldEnum | Prisma.Journey_runScalarFieldEnum[];
};
export type JourneyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JourneySelect<ExtArgs> | null;
    omit?: Prisma.JourneyOmit<ExtArgs> | null;
    include?: Prisma.JourneyInclude<ExtArgs> | null;
};
