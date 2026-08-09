import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type journey_runModel = runtime.Types.Result.DefaultSelection<Prisma.$journey_runPayload>;
export type AggregateJourney_run = {
    _count: Journey_runCountAggregateOutputType | null;
    _avg: Journey_runAvgAggregateOutputType | null;
    _sum: Journey_runSumAggregateOutputType | null;
    _min: Journey_runMinAggregateOutputType | null;
    _max: Journey_runMaxAggregateOutputType | null;
};
export type Journey_runAvgAggregateOutputType = {
    journey_version: number | null;
};
export type Journey_runSumAggregateOutputType = {
    journey_version: number | null;
};
export type Journey_runMinAggregateOutputType = {
    id: string | null;
    journey_id: string | null;
    customer_id: string | null;
    current_node_id: string | null;
    status: string | null;
    entered_at: Date | null;
    exited_at: Date | null;
    exit_reason: string | null;
    journey_version: number | null;
};
export type Journey_runMaxAggregateOutputType = {
    id: string | null;
    journey_id: string | null;
    customer_id: string | null;
    current_node_id: string | null;
    status: string | null;
    entered_at: Date | null;
    exited_at: Date | null;
    exit_reason: string | null;
    journey_version: number | null;
};
export type Journey_runCountAggregateOutputType = {
    id: number;
    journey_id: number;
    customer_id: number;
    current_node_id: number;
    status: number;
    entered_at: number;
    exited_at: number;
    exit_reason: number;
    journey_version: number;
    context: number;
    _all: number;
};
export type Journey_runAvgAggregateInputType = {
    journey_version?: true;
};
export type Journey_runSumAggregateInputType = {
    journey_version?: true;
};
export type Journey_runMinAggregateInputType = {
    id?: true;
    journey_id?: true;
    customer_id?: true;
    current_node_id?: true;
    status?: true;
    entered_at?: true;
    exited_at?: true;
    exit_reason?: true;
    journey_version?: true;
};
export type Journey_runMaxAggregateInputType = {
    id?: true;
    journey_id?: true;
    customer_id?: true;
    current_node_id?: true;
    status?: true;
    entered_at?: true;
    exited_at?: true;
    exit_reason?: true;
    journey_version?: true;
};
export type Journey_runCountAggregateInputType = {
    id?: true;
    journey_id?: true;
    customer_id?: true;
    current_node_id?: true;
    status?: true;
    entered_at?: true;
    exited_at?: true;
    exit_reason?: true;
    journey_version?: true;
    context?: true;
    _all?: true;
};
export type Journey_runAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.journey_runWhereInput;
    orderBy?: Prisma.journey_runOrderByWithRelationInput | Prisma.journey_runOrderByWithRelationInput[];
    cursor?: Prisma.journey_runWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Journey_runCountAggregateInputType;
    _avg?: Journey_runAvgAggregateInputType;
    _sum?: Journey_runSumAggregateInputType;
    _min?: Journey_runMinAggregateInputType;
    _max?: Journey_runMaxAggregateInputType;
};
export type GetJourney_runAggregateType<T extends Journey_runAggregateArgs> = {
    [P in keyof T & keyof AggregateJourney_run]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJourney_run[P]> : Prisma.GetScalarType<T[P], AggregateJourney_run[P]>;
};
export type journey_runGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.journey_runWhereInput;
    orderBy?: Prisma.journey_runOrderByWithAggregationInput | Prisma.journey_runOrderByWithAggregationInput[];
    by: Prisma.Journey_runScalarFieldEnum[] | Prisma.Journey_runScalarFieldEnum;
    having?: Prisma.journey_runScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Journey_runCountAggregateInputType | true;
    _avg?: Journey_runAvgAggregateInputType;
    _sum?: Journey_runSumAggregateInputType;
    _min?: Journey_runMinAggregateInputType;
    _max?: Journey_runMaxAggregateInputType;
};
export type Journey_runGroupByOutputType = {
    id: string;
    journey_id: string;
    customer_id: string;
    current_node_id: string | null;
    status: string;
    entered_at: Date;
    exited_at: Date | null;
    exit_reason: string | null;
    journey_version: number;
    context: runtime.JsonValue | null;
    _count: Journey_runCountAggregateOutputType | null;
    _avg: Journey_runAvgAggregateOutputType | null;
    _sum: Journey_runSumAggregateOutputType | null;
    _min: Journey_runMinAggregateOutputType | null;
    _max: Journey_runMaxAggregateOutputType | null;
};
export type GetJourney_runGroupByPayload<T extends journey_runGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Journey_runGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Journey_runGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Journey_runGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Journey_runGroupByOutputType[P]>;
}>>;
export type journey_runWhereInput = {
    AND?: Prisma.journey_runWhereInput | Prisma.journey_runWhereInput[];
    OR?: Prisma.journey_runWhereInput[];
    NOT?: Prisma.journey_runWhereInput | Prisma.journey_runWhereInput[];
    id?: Prisma.UuidFilter<"journey_run"> | string;
    journey_id?: Prisma.UuidFilter<"journey_run"> | string;
    customer_id?: Prisma.UuidFilter<"journey_run"> | string;
    current_node_id?: Prisma.StringNullableFilter<"journey_run"> | string | null;
    status?: Prisma.StringFilter<"journey_run"> | string;
    entered_at?: Prisma.DateTimeFilter<"journey_run"> | Date | string;
    exited_at?: Prisma.DateTimeNullableFilter<"journey_run"> | Date | string | null;
    exit_reason?: Prisma.StringNullableFilter<"journey_run"> | string | null;
    journey_version?: Prisma.IntFilter<"journey_run"> | number;
    context?: Prisma.JsonNullableFilter<"journey_run">;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    journey?: Prisma.XOR<Prisma.JourneyScalarRelationFilter, Prisma.JourneyWhereInput>;
    journey_step_log?: Prisma.Journey_step_logListRelationFilter;
    message_log?: Prisma.Message_logListRelationFilter;
};
export type journey_runOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    journey_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    current_node_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    entered_at?: Prisma.SortOrder;
    exited_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    exit_reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    journey_version?: Prisma.SortOrder;
    context?: Prisma.SortOrderInput | Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    journey?: Prisma.JourneyOrderByWithRelationInput;
    journey_step_log?: Prisma.journey_step_logOrderByRelationAggregateInput;
    message_log?: Prisma.message_logOrderByRelationAggregateInput;
};
export type journey_runWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.journey_runWhereInput | Prisma.journey_runWhereInput[];
    OR?: Prisma.journey_runWhereInput[];
    NOT?: Prisma.journey_runWhereInput | Prisma.journey_runWhereInput[];
    journey_id?: Prisma.UuidFilter<"journey_run"> | string;
    customer_id?: Prisma.UuidFilter<"journey_run"> | string;
    current_node_id?: Prisma.StringNullableFilter<"journey_run"> | string | null;
    status?: Prisma.StringFilter<"journey_run"> | string;
    entered_at?: Prisma.DateTimeFilter<"journey_run"> | Date | string;
    exited_at?: Prisma.DateTimeNullableFilter<"journey_run"> | Date | string | null;
    exit_reason?: Prisma.StringNullableFilter<"journey_run"> | string | null;
    journey_version?: Prisma.IntFilter<"journey_run"> | number;
    context?: Prisma.JsonNullableFilter<"journey_run">;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    journey?: Prisma.XOR<Prisma.JourneyScalarRelationFilter, Prisma.JourneyWhereInput>;
    journey_step_log?: Prisma.Journey_step_logListRelationFilter;
    message_log?: Prisma.Message_logListRelationFilter;
}, "id">;
export type journey_runOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    journey_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    current_node_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    entered_at?: Prisma.SortOrder;
    exited_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    exit_reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    journey_version?: Prisma.SortOrder;
    context?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.journey_runCountOrderByAggregateInput;
    _avg?: Prisma.journey_runAvgOrderByAggregateInput;
    _max?: Prisma.journey_runMaxOrderByAggregateInput;
    _min?: Prisma.journey_runMinOrderByAggregateInput;
    _sum?: Prisma.journey_runSumOrderByAggregateInput;
};
export type journey_runScalarWhereWithAggregatesInput = {
    AND?: Prisma.journey_runScalarWhereWithAggregatesInput | Prisma.journey_runScalarWhereWithAggregatesInput[];
    OR?: Prisma.journey_runScalarWhereWithAggregatesInput[];
    NOT?: Prisma.journey_runScalarWhereWithAggregatesInput | Prisma.journey_runScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"journey_run"> | string;
    journey_id?: Prisma.UuidWithAggregatesFilter<"journey_run"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"journey_run"> | string;
    current_node_id?: Prisma.StringNullableWithAggregatesFilter<"journey_run"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"journey_run"> | string;
    entered_at?: Prisma.DateTimeWithAggregatesFilter<"journey_run"> | Date | string;
    exited_at?: Prisma.DateTimeNullableWithAggregatesFilter<"journey_run"> | Date | string | null;
    exit_reason?: Prisma.StringNullableWithAggregatesFilter<"journey_run"> | string | null;
    journey_version?: Prisma.IntWithAggregatesFilter<"journey_run"> | number;
    context?: Prisma.JsonNullableWithAggregatesFilter<"journey_run">;
};
export type journey_runCreateInput = {
    id?: string;
    current_node_id?: string | null;
    status?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    exit_reason?: string | null;
    journey_version?: number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    customer: Prisma.CustomerCreateNestedOneWithoutJourney_runInput;
    journey: Prisma.JourneyCreateNestedOneWithoutJourney_runInput;
    journey_step_log?: Prisma.journey_step_logCreateNestedManyWithoutJourney_runInput;
    message_log?: Prisma.message_logCreateNestedManyWithoutJourney_runInput;
};
export type journey_runUncheckedCreateInput = {
    id?: string;
    journey_id: string;
    customer_id: string;
    current_node_id?: string | null;
    status?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    exit_reason?: string | null;
    journey_version?: number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    journey_step_log?: Prisma.journey_step_logUncheckedCreateNestedManyWithoutJourney_runInput;
    message_log?: Prisma.message_logUncheckedCreateNestedManyWithoutJourney_runInput;
};
export type journey_runUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    current_node_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exit_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_version?: Prisma.IntFieldUpdateOperationsInput | number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutJourney_runNestedInput;
    journey?: Prisma.JourneyUpdateOneRequiredWithoutJourney_runNestedInput;
    journey_step_log?: Prisma.journey_step_logUpdateManyWithoutJourney_runNestedInput;
    message_log?: Prisma.message_logUpdateManyWithoutJourney_runNestedInput;
};
export type journey_runUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journey_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    current_node_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exit_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_version?: Prisma.IntFieldUpdateOperationsInput | number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    journey_step_log?: Prisma.journey_step_logUncheckedUpdateManyWithoutJourney_runNestedInput;
    message_log?: Prisma.message_logUncheckedUpdateManyWithoutJourney_runNestedInput;
};
export type journey_runCreateManyInput = {
    id?: string;
    journey_id: string;
    customer_id: string;
    current_node_id?: string | null;
    status?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    exit_reason?: string | null;
    journey_version?: number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type journey_runUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    current_node_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exit_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_version?: Prisma.IntFieldUpdateOperationsInput | number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type journey_runUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journey_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    current_node_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exit_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_version?: Prisma.IntFieldUpdateOperationsInput | number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type Journey_runListRelationFilter = {
    every?: Prisma.journey_runWhereInput;
    some?: Prisma.journey_runWhereInput;
    none?: Prisma.journey_runWhereInput;
};
export type journey_runOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type journey_runCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    journey_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    current_node_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    entered_at?: Prisma.SortOrder;
    exited_at?: Prisma.SortOrder;
    exit_reason?: Prisma.SortOrder;
    journey_version?: Prisma.SortOrder;
    context?: Prisma.SortOrder;
};
export type journey_runAvgOrderByAggregateInput = {
    journey_version?: Prisma.SortOrder;
};
export type journey_runMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    journey_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    current_node_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    entered_at?: Prisma.SortOrder;
    exited_at?: Prisma.SortOrder;
    exit_reason?: Prisma.SortOrder;
    journey_version?: Prisma.SortOrder;
};
export type journey_runMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    journey_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    current_node_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    entered_at?: Prisma.SortOrder;
    exited_at?: Prisma.SortOrder;
    exit_reason?: Prisma.SortOrder;
    journey_version?: Prisma.SortOrder;
};
export type journey_runSumOrderByAggregateInput = {
    journey_version?: Prisma.SortOrder;
};
export type Journey_runScalarRelationFilter = {
    is?: Prisma.journey_runWhereInput;
    isNot?: Prisma.journey_runWhereInput;
};
export type Journey_runNullableScalarRelationFilter = {
    is?: Prisma.journey_runWhereInput | null;
    isNot?: Prisma.journey_runWhereInput | null;
};
export type journey_runCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.journey_runCreateWithoutCustomerInput, Prisma.journey_runUncheckedCreateWithoutCustomerInput> | Prisma.journey_runCreateWithoutCustomerInput[] | Prisma.journey_runUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.journey_runCreateOrConnectWithoutCustomerInput | Prisma.journey_runCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.journey_runCreateManyCustomerInputEnvelope;
    connect?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
};
export type journey_runUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.journey_runCreateWithoutCustomerInput, Prisma.journey_runUncheckedCreateWithoutCustomerInput> | Prisma.journey_runCreateWithoutCustomerInput[] | Prisma.journey_runUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.journey_runCreateOrConnectWithoutCustomerInput | Prisma.journey_runCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.journey_runCreateManyCustomerInputEnvelope;
    connect?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
};
export type journey_runUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.journey_runCreateWithoutCustomerInput, Prisma.journey_runUncheckedCreateWithoutCustomerInput> | Prisma.journey_runCreateWithoutCustomerInput[] | Prisma.journey_runUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.journey_runCreateOrConnectWithoutCustomerInput | Prisma.journey_runCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.journey_runUpsertWithWhereUniqueWithoutCustomerInput | Prisma.journey_runUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.journey_runCreateManyCustomerInputEnvelope;
    set?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    disconnect?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    delete?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    connect?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    update?: Prisma.journey_runUpdateWithWhereUniqueWithoutCustomerInput | Prisma.journey_runUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.journey_runUpdateManyWithWhereWithoutCustomerInput | Prisma.journey_runUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.journey_runScalarWhereInput | Prisma.journey_runScalarWhereInput[];
};
export type journey_runUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.journey_runCreateWithoutCustomerInput, Prisma.journey_runUncheckedCreateWithoutCustomerInput> | Prisma.journey_runCreateWithoutCustomerInput[] | Prisma.journey_runUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.journey_runCreateOrConnectWithoutCustomerInput | Prisma.journey_runCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.journey_runUpsertWithWhereUniqueWithoutCustomerInput | Prisma.journey_runUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.journey_runCreateManyCustomerInputEnvelope;
    set?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    disconnect?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    delete?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    connect?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    update?: Prisma.journey_runUpdateWithWhereUniqueWithoutCustomerInput | Prisma.journey_runUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.journey_runUpdateManyWithWhereWithoutCustomerInput | Prisma.journey_runUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.journey_runScalarWhereInput | Prisma.journey_runScalarWhereInput[];
};
export type journey_runCreateNestedManyWithoutJourneyInput = {
    create?: Prisma.XOR<Prisma.journey_runCreateWithoutJourneyInput, Prisma.journey_runUncheckedCreateWithoutJourneyInput> | Prisma.journey_runCreateWithoutJourneyInput[] | Prisma.journey_runUncheckedCreateWithoutJourneyInput[];
    connectOrCreate?: Prisma.journey_runCreateOrConnectWithoutJourneyInput | Prisma.journey_runCreateOrConnectWithoutJourneyInput[];
    createMany?: Prisma.journey_runCreateManyJourneyInputEnvelope;
    connect?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
};
export type journey_runUncheckedCreateNestedManyWithoutJourneyInput = {
    create?: Prisma.XOR<Prisma.journey_runCreateWithoutJourneyInput, Prisma.journey_runUncheckedCreateWithoutJourneyInput> | Prisma.journey_runCreateWithoutJourneyInput[] | Prisma.journey_runUncheckedCreateWithoutJourneyInput[];
    connectOrCreate?: Prisma.journey_runCreateOrConnectWithoutJourneyInput | Prisma.journey_runCreateOrConnectWithoutJourneyInput[];
    createMany?: Prisma.journey_runCreateManyJourneyInputEnvelope;
    connect?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
};
export type journey_runUpdateManyWithoutJourneyNestedInput = {
    create?: Prisma.XOR<Prisma.journey_runCreateWithoutJourneyInput, Prisma.journey_runUncheckedCreateWithoutJourneyInput> | Prisma.journey_runCreateWithoutJourneyInput[] | Prisma.journey_runUncheckedCreateWithoutJourneyInput[];
    connectOrCreate?: Prisma.journey_runCreateOrConnectWithoutJourneyInput | Prisma.journey_runCreateOrConnectWithoutJourneyInput[];
    upsert?: Prisma.journey_runUpsertWithWhereUniqueWithoutJourneyInput | Prisma.journey_runUpsertWithWhereUniqueWithoutJourneyInput[];
    createMany?: Prisma.journey_runCreateManyJourneyInputEnvelope;
    set?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    disconnect?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    delete?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    connect?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    update?: Prisma.journey_runUpdateWithWhereUniqueWithoutJourneyInput | Prisma.journey_runUpdateWithWhereUniqueWithoutJourneyInput[];
    updateMany?: Prisma.journey_runUpdateManyWithWhereWithoutJourneyInput | Prisma.journey_runUpdateManyWithWhereWithoutJourneyInput[];
    deleteMany?: Prisma.journey_runScalarWhereInput | Prisma.journey_runScalarWhereInput[];
};
export type journey_runUncheckedUpdateManyWithoutJourneyNestedInput = {
    create?: Prisma.XOR<Prisma.journey_runCreateWithoutJourneyInput, Prisma.journey_runUncheckedCreateWithoutJourneyInput> | Prisma.journey_runCreateWithoutJourneyInput[] | Prisma.journey_runUncheckedCreateWithoutJourneyInput[];
    connectOrCreate?: Prisma.journey_runCreateOrConnectWithoutJourneyInput | Prisma.journey_runCreateOrConnectWithoutJourneyInput[];
    upsert?: Prisma.journey_runUpsertWithWhereUniqueWithoutJourneyInput | Prisma.journey_runUpsertWithWhereUniqueWithoutJourneyInput[];
    createMany?: Prisma.journey_runCreateManyJourneyInputEnvelope;
    set?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    disconnect?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    delete?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    connect?: Prisma.journey_runWhereUniqueInput | Prisma.journey_runWhereUniqueInput[];
    update?: Prisma.journey_runUpdateWithWhereUniqueWithoutJourneyInput | Prisma.journey_runUpdateWithWhereUniqueWithoutJourneyInput[];
    updateMany?: Prisma.journey_runUpdateManyWithWhereWithoutJourneyInput | Prisma.journey_runUpdateManyWithWhereWithoutJourneyInput[];
    deleteMany?: Prisma.journey_runScalarWhereInput | Prisma.journey_runScalarWhereInput[];
};
export type journey_runCreateNestedOneWithoutJourney_step_logInput = {
    create?: Prisma.XOR<Prisma.journey_runCreateWithoutJourney_step_logInput, Prisma.journey_runUncheckedCreateWithoutJourney_step_logInput>;
    connectOrCreate?: Prisma.journey_runCreateOrConnectWithoutJourney_step_logInput;
    connect?: Prisma.journey_runWhereUniqueInput;
};
export type journey_runUpdateOneRequiredWithoutJourney_step_logNestedInput = {
    create?: Prisma.XOR<Prisma.journey_runCreateWithoutJourney_step_logInput, Prisma.journey_runUncheckedCreateWithoutJourney_step_logInput>;
    connectOrCreate?: Prisma.journey_runCreateOrConnectWithoutJourney_step_logInput;
    upsert?: Prisma.journey_runUpsertWithoutJourney_step_logInput;
    connect?: Prisma.journey_runWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.journey_runUpdateToOneWithWhereWithoutJourney_step_logInput, Prisma.journey_runUpdateWithoutJourney_step_logInput>, Prisma.journey_runUncheckedUpdateWithoutJourney_step_logInput>;
};
export type journey_runCreateNestedOneWithoutMessage_logInput = {
    create?: Prisma.XOR<Prisma.journey_runCreateWithoutMessage_logInput, Prisma.journey_runUncheckedCreateWithoutMessage_logInput>;
    connectOrCreate?: Prisma.journey_runCreateOrConnectWithoutMessage_logInput;
    connect?: Prisma.journey_runWhereUniqueInput;
};
export type journey_runUpdateOneWithoutMessage_logNestedInput = {
    create?: Prisma.XOR<Prisma.journey_runCreateWithoutMessage_logInput, Prisma.journey_runUncheckedCreateWithoutMessage_logInput>;
    connectOrCreate?: Prisma.journey_runCreateOrConnectWithoutMessage_logInput;
    upsert?: Prisma.journey_runUpsertWithoutMessage_logInput;
    disconnect?: Prisma.journey_runWhereInput | boolean;
    delete?: Prisma.journey_runWhereInput | boolean;
    connect?: Prisma.journey_runWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.journey_runUpdateToOneWithWhereWithoutMessage_logInput, Prisma.journey_runUpdateWithoutMessage_logInput>, Prisma.journey_runUncheckedUpdateWithoutMessage_logInput>;
};
export type journey_runCreateWithoutCustomerInput = {
    id?: string;
    current_node_id?: string | null;
    status?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    exit_reason?: string | null;
    journey_version?: number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    journey: Prisma.JourneyCreateNestedOneWithoutJourney_runInput;
    journey_step_log?: Prisma.journey_step_logCreateNestedManyWithoutJourney_runInput;
    message_log?: Prisma.message_logCreateNestedManyWithoutJourney_runInput;
};
export type journey_runUncheckedCreateWithoutCustomerInput = {
    id?: string;
    journey_id: string;
    current_node_id?: string | null;
    status?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    exit_reason?: string | null;
    journey_version?: number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    journey_step_log?: Prisma.journey_step_logUncheckedCreateNestedManyWithoutJourney_runInput;
    message_log?: Prisma.message_logUncheckedCreateNestedManyWithoutJourney_runInput;
};
export type journey_runCreateOrConnectWithoutCustomerInput = {
    where: Prisma.journey_runWhereUniqueInput;
    create: Prisma.XOR<Prisma.journey_runCreateWithoutCustomerInput, Prisma.journey_runUncheckedCreateWithoutCustomerInput>;
};
export type journey_runCreateManyCustomerInputEnvelope = {
    data: Prisma.journey_runCreateManyCustomerInput | Prisma.journey_runCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type journey_runUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.journey_runWhereUniqueInput;
    update: Prisma.XOR<Prisma.journey_runUpdateWithoutCustomerInput, Prisma.journey_runUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.journey_runCreateWithoutCustomerInput, Prisma.journey_runUncheckedCreateWithoutCustomerInput>;
};
export type journey_runUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.journey_runWhereUniqueInput;
    data: Prisma.XOR<Prisma.journey_runUpdateWithoutCustomerInput, Prisma.journey_runUncheckedUpdateWithoutCustomerInput>;
};
export type journey_runUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.journey_runScalarWhereInput;
    data: Prisma.XOR<Prisma.journey_runUpdateManyMutationInput, Prisma.journey_runUncheckedUpdateManyWithoutCustomerInput>;
};
export type journey_runScalarWhereInput = {
    AND?: Prisma.journey_runScalarWhereInput | Prisma.journey_runScalarWhereInput[];
    OR?: Prisma.journey_runScalarWhereInput[];
    NOT?: Prisma.journey_runScalarWhereInput | Prisma.journey_runScalarWhereInput[];
    id?: Prisma.UuidFilter<"journey_run"> | string;
    journey_id?: Prisma.UuidFilter<"journey_run"> | string;
    customer_id?: Prisma.UuidFilter<"journey_run"> | string;
    current_node_id?: Prisma.StringNullableFilter<"journey_run"> | string | null;
    status?: Prisma.StringFilter<"journey_run"> | string;
    entered_at?: Prisma.DateTimeFilter<"journey_run"> | Date | string;
    exited_at?: Prisma.DateTimeNullableFilter<"journey_run"> | Date | string | null;
    exit_reason?: Prisma.StringNullableFilter<"journey_run"> | string | null;
    journey_version?: Prisma.IntFilter<"journey_run"> | number;
    context?: Prisma.JsonNullableFilter<"journey_run">;
};
export type journey_runCreateWithoutJourneyInput = {
    id?: string;
    current_node_id?: string | null;
    status?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    exit_reason?: string | null;
    journey_version?: number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    customer: Prisma.CustomerCreateNestedOneWithoutJourney_runInput;
    journey_step_log?: Prisma.journey_step_logCreateNestedManyWithoutJourney_runInput;
    message_log?: Prisma.message_logCreateNestedManyWithoutJourney_runInput;
};
export type journey_runUncheckedCreateWithoutJourneyInput = {
    id?: string;
    customer_id: string;
    current_node_id?: string | null;
    status?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    exit_reason?: string | null;
    journey_version?: number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    journey_step_log?: Prisma.journey_step_logUncheckedCreateNestedManyWithoutJourney_runInput;
    message_log?: Prisma.message_logUncheckedCreateNestedManyWithoutJourney_runInput;
};
export type journey_runCreateOrConnectWithoutJourneyInput = {
    where: Prisma.journey_runWhereUniqueInput;
    create: Prisma.XOR<Prisma.journey_runCreateWithoutJourneyInput, Prisma.journey_runUncheckedCreateWithoutJourneyInput>;
};
export type journey_runCreateManyJourneyInputEnvelope = {
    data: Prisma.journey_runCreateManyJourneyInput | Prisma.journey_runCreateManyJourneyInput[];
    skipDuplicates?: boolean;
};
export type journey_runUpsertWithWhereUniqueWithoutJourneyInput = {
    where: Prisma.journey_runWhereUniqueInput;
    update: Prisma.XOR<Prisma.journey_runUpdateWithoutJourneyInput, Prisma.journey_runUncheckedUpdateWithoutJourneyInput>;
    create: Prisma.XOR<Prisma.journey_runCreateWithoutJourneyInput, Prisma.journey_runUncheckedCreateWithoutJourneyInput>;
};
export type journey_runUpdateWithWhereUniqueWithoutJourneyInput = {
    where: Prisma.journey_runWhereUniqueInput;
    data: Prisma.XOR<Prisma.journey_runUpdateWithoutJourneyInput, Prisma.journey_runUncheckedUpdateWithoutJourneyInput>;
};
export type journey_runUpdateManyWithWhereWithoutJourneyInput = {
    where: Prisma.journey_runScalarWhereInput;
    data: Prisma.XOR<Prisma.journey_runUpdateManyMutationInput, Prisma.journey_runUncheckedUpdateManyWithoutJourneyInput>;
};
export type journey_runCreateWithoutJourney_step_logInput = {
    id?: string;
    current_node_id?: string | null;
    status?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    exit_reason?: string | null;
    journey_version?: number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    customer: Prisma.CustomerCreateNestedOneWithoutJourney_runInput;
    journey: Prisma.JourneyCreateNestedOneWithoutJourney_runInput;
    message_log?: Prisma.message_logCreateNestedManyWithoutJourney_runInput;
};
export type journey_runUncheckedCreateWithoutJourney_step_logInput = {
    id?: string;
    journey_id: string;
    customer_id: string;
    current_node_id?: string | null;
    status?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    exit_reason?: string | null;
    journey_version?: number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    message_log?: Prisma.message_logUncheckedCreateNestedManyWithoutJourney_runInput;
};
export type journey_runCreateOrConnectWithoutJourney_step_logInput = {
    where: Prisma.journey_runWhereUniqueInput;
    create: Prisma.XOR<Prisma.journey_runCreateWithoutJourney_step_logInput, Prisma.journey_runUncheckedCreateWithoutJourney_step_logInput>;
};
export type journey_runUpsertWithoutJourney_step_logInput = {
    update: Prisma.XOR<Prisma.journey_runUpdateWithoutJourney_step_logInput, Prisma.journey_runUncheckedUpdateWithoutJourney_step_logInput>;
    create: Prisma.XOR<Prisma.journey_runCreateWithoutJourney_step_logInput, Prisma.journey_runUncheckedCreateWithoutJourney_step_logInput>;
    where?: Prisma.journey_runWhereInput;
};
export type journey_runUpdateToOneWithWhereWithoutJourney_step_logInput = {
    where?: Prisma.journey_runWhereInput;
    data: Prisma.XOR<Prisma.journey_runUpdateWithoutJourney_step_logInput, Prisma.journey_runUncheckedUpdateWithoutJourney_step_logInput>;
};
export type journey_runUpdateWithoutJourney_step_logInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    current_node_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exit_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_version?: Prisma.IntFieldUpdateOperationsInput | number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutJourney_runNestedInput;
    journey?: Prisma.JourneyUpdateOneRequiredWithoutJourney_runNestedInput;
    message_log?: Prisma.message_logUpdateManyWithoutJourney_runNestedInput;
};
export type journey_runUncheckedUpdateWithoutJourney_step_logInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journey_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    current_node_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exit_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_version?: Prisma.IntFieldUpdateOperationsInput | number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    message_log?: Prisma.message_logUncheckedUpdateManyWithoutJourney_runNestedInput;
};
export type journey_runCreateWithoutMessage_logInput = {
    id?: string;
    current_node_id?: string | null;
    status?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    exit_reason?: string | null;
    journey_version?: number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    customer: Prisma.CustomerCreateNestedOneWithoutJourney_runInput;
    journey: Prisma.JourneyCreateNestedOneWithoutJourney_runInput;
    journey_step_log?: Prisma.journey_step_logCreateNestedManyWithoutJourney_runInput;
};
export type journey_runUncheckedCreateWithoutMessage_logInput = {
    id?: string;
    journey_id: string;
    customer_id: string;
    current_node_id?: string | null;
    status?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    exit_reason?: string | null;
    journey_version?: number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    journey_step_log?: Prisma.journey_step_logUncheckedCreateNestedManyWithoutJourney_runInput;
};
export type journey_runCreateOrConnectWithoutMessage_logInput = {
    where: Prisma.journey_runWhereUniqueInput;
    create: Prisma.XOR<Prisma.journey_runCreateWithoutMessage_logInput, Prisma.journey_runUncheckedCreateWithoutMessage_logInput>;
};
export type journey_runUpsertWithoutMessage_logInput = {
    update: Prisma.XOR<Prisma.journey_runUpdateWithoutMessage_logInput, Prisma.journey_runUncheckedUpdateWithoutMessage_logInput>;
    create: Prisma.XOR<Prisma.journey_runCreateWithoutMessage_logInput, Prisma.journey_runUncheckedCreateWithoutMessage_logInput>;
    where?: Prisma.journey_runWhereInput;
};
export type journey_runUpdateToOneWithWhereWithoutMessage_logInput = {
    where?: Prisma.journey_runWhereInput;
    data: Prisma.XOR<Prisma.journey_runUpdateWithoutMessage_logInput, Prisma.journey_runUncheckedUpdateWithoutMessage_logInput>;
};
export type journey_runUpdateWithoutMessage_logInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    current_node_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exit_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_version?: Prisma.IntFieldUpdateOperationsInput | number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutJourney_runNestedInput;
    journey?: Prisma.JourneyUpdateOneRequiredWithoutJourney_runNestedInput;
    journey_step_log?: Prisma.journey_step_logUpdateManyWithoutJourney_runNestedInput;
};
export type journey_runUncheckedUpdateWithoutMessage_logInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journey_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    current_node_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exit_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_version?: Prisma.IntFieldUpdateOperationsInput | number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    journey_step_log?: Prisma.journey_step_logUncheckedUpdateManyWithoutJourney_runNestedInput;
};
export type journey_runCreateManyCustomerInput = {
    id?: string;
    journey_id: string;
    current_node_id?: string | null;
    status?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    exit_reason?: string | null;
    journey_version?: number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type journey_runUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    current_node_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exit_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_version?: Prisma.IntFieldUpdateOperationsInput | number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    journey?: Prisma.JourneyUpdateOneRequiredWithoutJourney_runNestedInput;
    journey_step_log?: Prisma.journey_step_logUpdateManyWithoutJourney_runNestedInput;
    message_log?: Prisma.message_logUpdateManyWithoutJourney_runNestedInput;
};
export type journey_runUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journey_id?: Prisma.StringFieldUpdateOperationsInput | string;
    current_node_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exit_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_version?: Prisma.IntFieldUpdateOperationsInput | number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    journey_step_log?: Prisma.journey_step_logUncheckedUpdateManyWithoutJourney_runNestedInput;
    message_log?: Prisma.message_logUncheckedUpdateManyWithoutJourney_runNestedInput;
};
export type journey_runUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journey_id?: Prisma.StringFieldUpdateOperationsInput | string;
    current_node_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exit_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_version?: Prisma.IntFieldUpdateOperationsInput | number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type journey_runCreateManyJourneyInput = {
    id?: string;
    customer_id: string;
    current_node_id?: string | null;
    status?: string;
    entered_at?: Date | string;
    exited_at?: Date | string | null;
    exit_reason?: string | null;
    journey_version?: number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type journey_runUpdateWithoutJourneyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    current_node_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exit_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_version?: Prisma.IntFieldUpdateOperationsInput | number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutJourney_runNestedInput;
    journey_step_log?: Prisma.journey_step_logUpdateManyWithoutJourney_runNestedInput;
    message_log?: Prisma.message_logUpdateManyWithoutJourney_runNestedInput;
};
export type journey_runUncheckedUpdateWithoutJourneyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    current_node_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exit_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_version?: Prisma.IntFieldUpdateOperationsInput | number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    journey_step_log?: Prisma.journey_step_logUncheckedUpdateManyWithoutJourney_runNestedInput;
    message_log?: Prisma.message_logUncheckedUpdateManyWithoutJourney_runNestedInput;
};
export type journey_runUncheckedUpdateManyWithoutJourneyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    current_node_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    entered_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    exit_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_version?: Prisma.IntFieldUpdateOperationsInput | number;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type Journey_runCountOutputType = {
    journey_step_log: number;
    message_log: number;
};
export type Journey_runCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    journey_step_log?: boolean | Journey_runCountOutputTypeCountJourney_step_logArgs;
    message_log?: boolean | Journey_runCountOutputTypeCountMessage_logArgs;
};
export type Journey_runCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Journey_runCountOutputTypeSelect<ExtArgs> | null;
};
export type Journey_runCountOutputTypeCountJourney_step_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.journey_step_logWhereInput;
};
export type Journey_runCountOutputTypeCountMessage_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.message_logWhereInput;
};
export type journey_runSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    journey_id?: boolean;
    customer_id?: boolean;
    current_node_id?: boolean;
    status?: boolean;
    entered_at?: boolean;
    exited_at?: boolean;
    exit_reason?: boolean;
    journey_version?: boolean;
    context?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey?: boolean | Prisma.JourneyDefaultArgs<ExtArgs>;
    journey_step_log?: boolean | Prisma.journey_run$journey_step_logArgs<ExtArgs>;
    message_log?: boolean | Prisma.journey_run$message_logArgs<ExtArgs>;
    _count?: boolean | Prisma.Journey_runCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journey_run"]>;
export type journey_runSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    journey_id?: boolean;
    customer_id?: boolean;
    current_node_id?: boolean;
    status?: boolean;
    entered_at?: boolean;
    exited_at?: boolean;
    exit_reason?: boolean;
    journey_version?: boolean;
    context?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey?: boolean | Prisma.JourneyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journey_run"]>;
export type journey_runSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    journey_id?: boolean;
    customer_id?: boolean;
    current_node_id?: boolean;
    status?: boolean;
    entered_at?: boolean;
    exited_at?: boolean;
    exit_reason?: boolean;
    journey_version?: boolean;
    context?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey?: boolean | Prisma.JourneyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journey_run"]>;
export type journey_runSelectScalar = {
    id?: boolean;
    journey_id?: boolean;
    customer_id?: boolean;
    current_node_id?: boolean;
    status?: boolean;
    entered_at?: boolean;
    exited_at?: boolean;
    exit_reason?: boolean;
    journey_version?: boolean;
    context?: boolean;
};
export type journey_runOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "journey_id" | "customer_id" | "current_node_id" | "status" | "entered_at" | "exited_at" | "exit_reason" | "journey_version" | "context", ExtArgs["result"]["journey_run"]>;
export type journey_runInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey?: boolean | Prisma.JourneyDefaultArgs<ExtArgs>;
    journey_step_log?: boolean | Prisma.journey_run$journey_step_logArgs<ExtArgs>;
    message_log?: boolean | Prisma.journey_run$message_logArgs<ExtArgs>;
    _count?: boolean | Prisma.Journey_runCountOutputTypeDefaultArgs<ExtArgs>;
};
export type journey_runIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey?: boolean | Prisma.JourneyDefaultArgs<ExtArgs>;
};
export type journey_runIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey?: boolean | Prisma.JourneyDefaultArgs<ExtArgs>;
};
export type $journey_runPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "journey_run";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        journey: Prisma.$JourneyPayload<ExtArgs>;
        journey_step_log: Prisma.$journey_step_logPayload<ExtArgs>[];
        message_log: Prisma.$message_logPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        journey_id: string;
        customer_id: string;
        current_node_id: string | null;
        status: string;
        entered_at: Date;
        exited_at: Date | null;
        exit_reason: string | null;
        journey_version: number;
        context: runtime.JsonValue | null;
    }, ExtArgs["result"]["journey_run"]>;
    composites: {};
};
export type journey_runGetPayload<S extends boolean | null | undefined | journey_runDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$journey_runPayload, S>;
export type journey_runCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<journey_runFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Journey_runCountAggregateInputType | true;
};
export interface journey_runDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['journey_run'];
        meta: {
            name: 'journey_run';
        };
    };
    findUnique<T extends journey_runFindUniqueArgs>(args: Prisma.SelectSubset<T, journey_runFindUniqueArgs<ExtArgs>>): Prisma.Prisma__journey_runClient<runtime.Types.Result.GetResult<Prisma.$journey_runPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends journey_runFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, journey_runFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__journey_runClient<runtime.Types.Result.GetResult<Prisma.$journey_runPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends journey_runFindFirstArgs>(args?: Prisma.SelectSubset<T, journey_runFindFirstArgs<ExtArgs>>): Prisma.Prisma__journey_runClient<runtime.Types.Result.GetResult<Prisma.$journey_runPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends journey_runFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, journey_runFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__journey_runClient<runtime.Types.Result.GetResult<Prisma.$journey_runPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends journey_runFindManyArgs>(args?: Prisma.SelectSubset<T, journey_runFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$journey_runPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends journey_runCreateArgs>(args: Prisma.SelectSubset<T, journey_runCreateArgs<ExtArgs>>): Prisma.Prisma__journey_runClient<runtime.Types.Result.GetResult<Prisma.$journey_runPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends journey_runCreateManyArgs>(args?: Prisma.SelectSubset<T, journey_runCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends journey_runCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, journey_runCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$journey_runPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends journey_runDeleteArgs>(args: Prisma.SelectSubset<T, journey_runDeleteArgs<ExtArgs>>): Prisma.Prisma__journey_runClient<runtime.Types.Result.GetResult<Prisma.$journey_runPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends journey_runUpdateArgs>(args: Prisma.SelectSubset<T, journey_runUpdateArgs<ExtArgs>>): Prisma.Prisma__journey_runClient<runtime.Types.Result.GetResult<Prisma.$journey_runPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends journey_runDeleteManyArgs>(args?: Prisma.SelectSubset<T, journey_runDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends journey_runUpdateManyArgs>(args: Prisma.SelectSubset<T, journey_runUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends journey_runUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, journey_runUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$journey_runPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends journey_runUpsertArgs>(args: Prisma.SelectSubset<T, journey_runUpsertArgs<ExtArgs>>): Prisma.Prisma__journey_runClient<runtime.Types.Result.GetResult<Prisma.$journey_runPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends journey_runCountArgs>(args?: Prisma.Subset<T, journey_runCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Journey_runCountAggregateOutputType> : number>;
    aggregate<T extends Journey_runAggregateArgs>(args: Prisma.Subset<T, Journey_runAggregateArgs>): Prisma.PrismaPromise<GetJourney_runAggregateType<T>>;
    groupBy<T extends journey_runGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: journey_runGroupByArgs['orderBy'];
    } : {
        orderBy?: journey_runGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, journey_runGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJourney_runGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: journey_runFieldRefs;
}
export interface Prisma__journey_runClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    journey<T extends Prisma.JourneyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.JourneyDefaultArgs<ExtArgs>>): Prisma.Prisma__JourneyClient<runtime.Types.Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    journey_step_log<T extends Prisma.journey_run$journey_step_logArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.journey_run$journey_step_logArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$journey_step_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    message_log<T extends Prisma.journey_run$message_logArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.journey_run$message_logArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$message_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface journey_runFieldRefs {
    readonly id: Prisma.FieldRef<"journey_run", 'String'>;
    readonly journey_id: Prisma.FieldRef<"journey_run", 'String'>;
    readonly customer_id: Prisma.FieldRef<"journey_run", 'String'>;
    readonly current_node_id: Prisma.FieldRef<"journey_run", 'String'>;
    readonly status: Prisma.FieldRef<"journey_run", 'String'>;
    readonly entered_at: Prisma.FieldRef<"journey_run", 'DateTime'>;
    readonly exited_at: Prisma.FieldRef<"journey_run", 'DateTime'>;
    readonly exit_reason: Prisma.FieldRef<"journey_run", 'String'>;
    readonly journey_version: Prisma.FieldRef<"journey_run", 'Int'>;
    readonly context: Prisma.FieldRef<"journey_run", 'Json'>;
}
export type journey_runFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_runSelect<ExtArgs> | null;
    omit?: Prisma.journey_runOmit<ExtArgs> | null;
    include?: Prisma.journey_runInclude<ExtArgs> | null;
    where: Prisma.journey_runWhereUniqueInput;
};
export type journey_runFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_runSelect<ExtArgs> | null;
    omit?: Prisma.journey_runOmit<ExtArgs> | null;
    include?: Prisma.journey_runInclude<ExtArgs> | null;
    where: Prisma.journey_runWhereUniqueInput;
};
export type journey_runFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type journey_runFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type journey_runFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type journey_runCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_runSelect<ExtArgs> | null;
    omit?: Prisma.journey_runOmit<ExtArgs> | null;
    include?: Prisma.journey_runInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.journey_runCreateInput, Prisma.journey_runUncheckedCreateInput>;
};
export type journey_runCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.journey_runCreateManyInput | Prisma.journey_runCreateManyInput[];
    skipDuplicates?: boolean;
};
export type journey_runCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_runSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.journey_runOmit<ExtArgs> | null;
    data: Prisma.journey_runCreateManyInput | Prisma.journey_runCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.journey_runIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type journey_runUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_runSelect<ExtArgs> | null;
    omit?: Prisma.journey_runOmit<ExtArgs> | null;
    include?: Prisma.journey_runInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.journey_runUpdateInput, Prisma.journey_runUncheckedUpdateInput>;
    where: Prisma.journey_runWhereUniqueInput;
};
export type journey_runUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.journey_runUpdateManyMutationInput, Prisma.journey_runUncheckedUpdateManyInput>;
    where?: Prisma.journey_runWhereInput;
    limit?: number;
};
export type journey_runUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_runSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.journey_runOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.journey_runUpdateManyMutationInput, Prisma.journey_runUncheckedUpdateManyInput>;
    where?: Prisma.journey_runWhereInput;
    limit?: number;
    include?: Prisma.journey_runIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type journey_runUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_runSelect<ExtArgs> | null;
    omit?: Prisma.journey_runOmit<ExtArgs> | null;
    include?: Prisma.journey_runInclude<ExtArgs> | null;
    where: Prisma.journey_runWhereUniqueInput;
    create: Prisma.XOR<Prisma.journey_runCreateInput, Prisma.journey_runUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.journey_runUpdateInput, Prisma.journey_runUncheckedUpdateInput>;
};
export type journey_runDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_runSelect<ExtArgs> | null;
    omit?: Prisma.journey_runOmit<ExtArgs> | null;
    include?: Prisma.journey_runInclude<ExtArgs> | null;
    where: Prisma.journey_runWhereUniqueInput;
};
export type journey_runDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.journey_runWhereInput;
    limit?: number;
};
export type journey_run$journey_step_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_step_logSelect<ExtArgs> | null;
    omit?: Prisma.journey_step_logOmit<ExtArgs> | null;
    include?: Prisma.journey_step_logInclude<ExtArgs> | null;
    where?: Prisma.journey_step_logWhereInput;
    orderBy?: Prisma.journey_step_logOrderByWithRelationInput | Prisma.journey_step_logOrderByWithRelationInput[];
    cursor?: Prisma.journey_step_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Journey_step_logScalarFieldEnum | Prisma.Journey_step_logScalarFieldEnum[];
};
export type journey_run$message_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.message_logSelect<ExtArgs> | null;
    omit?: Prisma.message_logOmit<ExtArgs> | null;
    include?: Prisma.message_logInclude<ExtArgs> | null;
    where?: Prisma.message_logWhereInput;
    orderBy?: Prisma.message_logOrderByWithRelationInput | Prisma.message_logOrderByWithRelationInput[];
    cursor?: Prisma.message_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Message_logScalarFieldEnum | Prisma.Message_logScalarFieldEnum[];
};
export type journey_runDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_runSelect<ExtArgs> | null;
    omit?: Prisma.journey_runOmit<ExtArgs> | null;
    include?: Prisma.journey_runInclude<ExtArgs> | null;
};
