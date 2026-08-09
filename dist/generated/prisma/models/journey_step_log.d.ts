import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type journey_step_logModel = runtime.Types.Result.DefaultSelection<Prisma.$journey_step_logPayload>;
export type AggregateJourney_step_log = {
    _count: Journey_step_logCountAggregateOutputType | null;
    _min: Journey_step_logMinAggregateOutputType | null;
    _max: Journey_step_logMaxAggregateOutputType | null;
};
export type Journey_step_logMinAggregateOutputType = {
    id: string | null;
    journey_run_id: string | null;
    node_id: string | null;
    node_type: string | null;
    action: string | null;
    executed_at: Date | null;
};
export type Journey_step_logMaxAggregateOutputType = {
    id: string | null;
    journey_run_id: string | null;
    node_id: string | null;
    node_type: string | null;
    action: string | null;
    executed_at: Date | null;
};
export type Journey_step_logCountAggregateOutputType = {
    id: number;
    journey_run_id: number;
    node_id: number;
    node_type: number;
    action: number;
    result: number;
    executed_at: number;
    _all: number;
};
export type Journey_step_logMinAggregateInputType = {
    id?: true;
    journey_run_id?: true;
    node_id?: true;
    node_type?: true;
    action?: true;
    executed_at?: true;
};
export type Journey_step_logMaxAggregateInputType = {
    id?: true;
    journey_run_id?: true;
    node_id?: true;
    node_type?: true;
    action?: true;
    executed_at?: true;
};
export type Journey_step_logCountAggregateInputType = {
    id?: true;
    journey_run_id?: true;
    node_id?: true;
    node_type?: true;
    action?: true;
    result?: true;
    executed_at?: true;
    _all?: true;
};
export type Journey_step_logAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.journey_step_logWhereInput;
    orderBy?: Prisma.journey_step_logOrderByWithRelationInput | Prisma.journey_step_logOrderByWithRelationInput[];
    cursor?: Prisma.journey_step_logWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Journey_step_logCountAggregateInputType;
    _min?: Journey_step_logMinAggregateInputType;
    _max?: Journey_step_logMaxAggregateInputType;
};
export type GetJourney_step_logAggregateType<T extends Journey_step_logAggregateArgs> = {
    [P in keyof T & keyof AggregateJourney_step_log]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJourney_step_log[P]> : Prisma.GetScalarType<T[P], AggregateJourney_step_log[P]>;
};
export type journey_step_logGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.journey_step_logWhereInput;
    orderBy?: Prisma.journey_step_logOrderByWithAggregationInput | Prisma.journey_step_logOrderByWithAggregationInput[];
    by: Prisma.Journey_step_logScalarFieldEnum[] | Prisma.Journey_step_logScalarFieldEnum;
    having?: Prisma.journey_step_logScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Journey_step_logCountAggregateInputType | true;
    _min?: Journey_step_logMinAggregateInputType;
    _max?: Journey_step_logMaxAggregateInputType;
};
export type Journey_step_logGroupByOutputType = {
    id: string;
    journey_run_id: string;
    node_id: string;
    node_type: string;
    action: string | null;
    result: runtime.JsonValue | null;
    executed_at: Date;
    _count: Journey_step_logCountAggregateOutputType | null;
    _min: Journey_step_logMinAggregateOutputType | null;
    _max: Journey_step_logMaxAggregateOutputType | null;
};
export type GetJourney_step_logGroupByPayload<T extends journey_step_logGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Journey_step_logGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Journey_step_logGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Journey_step_logGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Journey_step_logGroupByOutputType[P]>;
}>>;
export type journey_step_logWhereInput = {
    AND?: Prisma.journey_step_logWhereInput | Prisma.journey_step_logWhereInput[];
    OR?: Prisma.journey_step_logWhereInput[];
    NOT?: Prisma.journey_step_logWhereInput | Prisma.journey_step_logWhereInput[];
    id?: Prisma.UuidFilter<"journey_step_log"> | string;
    journey_run_id?: Prisma.UuidFilter<"journey_step_log"> | string;
    node_id?: Prisma.StringFilter<"journey_step_log"> | string;
    node_type?: Prisma.StringFilter<"journey_step_log"> | string;
    action?: Prisma.StringNullableFilter<"journey_step_log"> | string | null;
    result?: Prisma.JsonNullableFilter<"journey_step_log">;
    executed_at?: Prisma.DateTimeFilter<"journey_step_log"> | Date | string;
    journey_run?: Prisma.XOR<Prisma.Journey_runScalarRelationFilter, Prisma.journey_runWhereInput>;
};
export type journey_step_logOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    journey_run_id?: Prisma.SortOrder;
    node_id?: Prisma.SortOrder;
    node_type?: Prisma.SortOrder;
    action?: Prisma.SortOrderInput | Prisma.SortOrder;
    result?: Prisma.SortOrderInput | Prisma.SortOrder;
    executed_at?: Prisma.SortOrder;
    journey_run?: Prisma.journey_runOrderByWithRelationInput;
};
export type journey_step_logWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.journey_step_logWhereInput | Prisma.journey_step_logWhereInput[];
    OR?: Prisma.journey_step_logWhereInput[];
    NOT?: Prisma.journey_step_logWhereInput | Prisma.journey_step_logWhereInput[];
    journey_run_id?: Prisma.UuidFilter<"journey_step_log"> | string;
    node_id?: Prisma.StringFilter<"journey_step_log"> | string;
    node_type?: Prisma.StringFilter<"journey_step_log"> | string;
    action?: Prisma.StringNullableFilter<"journey_step_log"> | string | null;
    result?: Prisma.JsonNullableFilter<"journey_step_log">;
    executed_at?: Prisma.DateTimeFilter<"journey_step_log"> | Date | string;
    journey_run?: Prisma.XOR<Prisma.Journey_runScalarRelationFilter, Prisma.journey_runWhereInput>;
}, "id">;
export type journey_step_logOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    journey_run_id?: Prisma.SortOrder;
    node_id?: Prisma.SortOrder;
    node_type?: Prisma.SortOrder;
    action?: Prisma.SortOrderInput | Prisma.SortOrder;
    result?: Prisma.SortOrderInput | Prisma.SortOrder;
    executed_at?: Prisma.SortOrder;
    _count?: Prisma.journey_step_logCountOrderByAggregateInput;
    _max?: Prisma.journey_step_logMaxOrderByAggregateInput;
    _min?: Prisma.journey_step_logMinOrderByAggregateInput;
};
export type journey_step_logScalarWhereWithAggregatesInput = {
    AND?: Prisma.journey_step_logScalarWhereWithAggregatesInput | Prisma.journey_step_logScalarWhereWithAggregatesInput[];
    OR?: Prisma.journey_step_logScalarWhereWithAggregatesInput[];
    NOT?: Prisma.journey_step_logScalarWhereWithAggregatesInput | Prisma.journey_step_logScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"journey_step_log"> | string;
    journey_run_id?: Prisma.UuidWithAggregatesFilter<"journey_step_log"> | string;
    node_id?: Prisma.StringWithAggregatesFilter<"journey_step_log"> | string;
    node_type?: Prisma.StringWithAggregatesFilter<"journey_step_log"> | string;
    action?: Prisma.StringNullableWithAggregatesFilter<"journey_step_log"> | string | null;
    result?: Prisma.JsonNullableWithAggregatesFilter<"journey_step_log">;
    executed_at?: Prisma.DateTimeWithAggregatesFilter<"journey_step_log"> | Date | string;
};
export type journey_step_logCreateInput = {
    id?: string;
    node_id: string;
    node_type: string;
    action?: string | null;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    executed_at?: Date | string;
    journey_run: Prisma.journey_runCreateNestedOneWithoutJourney_step_logInput;
};
export type journey_step_logUncheckedCreateInput = {
    id?: string;
    journey_run_id: string;
    node_id: string;
    node_type: string;
    action?: string | null;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    executed_at?: Date | string;
};
export type journey_step_logUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    node_id?: Prisma.StringFieldUpdateOperationsInput | string;
    node_type?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    executed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    journey_run?: Prisma.journey_runUpdateOneRequiredWithoutJourney_step_logNestedInput;
};
export type journey_step_logUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journey_run_id?: Prisma.StringFieldUpdateOperationsInput | string;
    node_id?: Prisma.StringFieldUpdateOperationsInput | string;
    node_type?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    executed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type journey_step_logCreateManyInput = {
    id?: string;
    journey_run_id: string;
    node_id: string;
    node_type: string;
    action?: string | null;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    executed_at?: Date | string;
};
export type journey_step_logUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    node_id?: Prisma.StringFieldUpdateOperationsInput | string;
    node_type?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    executed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type journey_step_logUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journey_run_id?: Prisma.StringFieldUpdateOperationsInput | string;
    node_id?: Prisma.StringFieldUpdateOperationsInput | string;
    node_type?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    executed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Journey_step_logListRelationFilter = {
    every?: Prisma.journey_step_logWhereInput;
    some?: Prisma.journey_step_logWhereInput;
    none?: Prisma.journey_step_logWhereInput;
};
export type journey_step_logOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type journey_step_logCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    journey_run_id?: Prisma.SortOrder;
    node_id?: Prisma.SortOrder;
    node_type?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    executed_at?: Prisma.SortOrder;
};
export type journey_step_logMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    journey_run_id?: Prisma.SortOrder;
    node_id?: Prisma.SortOrder;
    node_type?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    executed_at?: Prisma.SortOrder;
};
export type journey_step_logMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    journey_run_id?: Prisma.SortOrder;
    node_id?: Prisma.SortOrder;
    node_type?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    executed_at?: Prisma.SortOrder;
};
export type journey_step_logCreateNestedManyWithoutJourney_runInput = {
    create?: Prisma.XOR<Prisma.journey_step_logCreateWithoutJourney_runInput, Prisma.journey_step_logUncheckedCreateWithoutJourney_runInput> | Prisma.journey_step_logCreateWithoutJourney_runInput[] | Prisma.journey_step_logUncheckedCreateWithoutJourney_runInput[];
    connectOrCreate?: Prisma.journey_step_logCreateOrConnectWithoutJourney_runInput | Prisma.journey_step_logCreateOrConnectWithoutJourney_runInput[];
    createMany?: Prisma.journey_step_logCreateManyJourney_runInputEnvelope;
    connect?: Prisma.journey_step_logWhereUniqueInput | Prisma.journey_step_logWhereUniqueInput[];
};
export type journey_step_logUncheckedCreateNestedManyWithoutJourney_runInput = {
    create?: Prisma.XOR<Prisma.journey_step_logCreateWithoutJourney_runInput, Prisma.journey_step_logUncheckedCreateWithoutJourney_runInput> | Prisma.journey_step_logCreateWithoutJourney_runInput[] | Prisma.journey_step_logUncheckedCreateWithoutJourney_runInput[];
    connectOrCreate?: Prisma.journey_step_logCreateOrConnectWithoutJourney_runInput | Prisma.journey_step_logCreateOrConnectWithoutJourney_runInput[];
    createMany?: Prisma.journey_step_logCreateManyJourney_runInputEnvelope;
    connect?: Prisma.journey_step_logWhereUniqueInput | Prisma.journey_step_logWhereUniqueInput[];
};
export type journey_step_logUpdateManyWithoutJourney_runNestedInput = {
    create?: Prisma.XOR<Prisma.journey_step_logCreateWithoutJourney_runInput, Prisma.journey_step_logUncheckedCreateWithoutJourney_runInput> | Prisma.journey_step_logCreateWithoutJourney_runInput[] | Prisma.journey_step_logUncheckedCreateWithoutJourney_runInput[];
    connectOrCreate?: Prisma.journey_step_logCreateOrConnectWithoutJourney_runInput | Prisma.journey_step_logCreateOrConnectWithoutJourney_runInput[];
    upsert?: Prisma.journey_step_logUpsertWithWhereUniqueWithoutJourney_runInput | Prisma.journey_step_logUpsertWithWhereUniqueWithoutJourney_runInput[];
    createMany?: Prisma.journey_step_logCreateManyJourney_runInputEnvelope;
    set?: Prisma.journey_step_logWhereUniqueInput | Prisma.journey_step_logWhereUniqueInput[];
    disconnect?: Prisma.journey_step_logWhereUniqueInput | Prisma.journey_step_logWhereUniqueInput[];
    delete?: Prisma.journey_step_logWhereUniqueInput | Prisma.journey_step_logWhereUniqueInput[];
    connect?: Prisma.journey_step_logWhereUniqueInput | Prisma.journey_step_logWhereUniqueInput[];
    update?: Prisma.journey_step_logUpdateWithWhereUniqueWithoutJourney_runInput | Prisma.journey_step_logUpdateWithWhereUniqueWithoutJourney_runInput[];
    updateMany?: Prisma.journey_step_logUpdateManyWithWhereWithoutJourney_runInput | Prisma.journey_step_logUpdateManyWithWhereWithoutJourney_runInput[];
    deleteMany?: Prisma.journey_step_logScalarWhereInput | Prisma.journey_step_logScalarWhereInput[];
};
export type journey_step_logUncheckedUpdateManyWithoutJourney_runNestedInput = {
    create?: Prisma.XOR<Prisma.journey_step_logCreateWithoutJourney_runInput, Prisma.journey_step_logUncheckedCreateWithoutJourney_runInput> | Prisma.journey_step_logCreateWithoutJourney_runInput[] | Prisma.journey_step_logUncheckedCreateWithoutJourney_runInput[];
    connectOrCreate?: Prisma.journey_step_logCreateOrConnectWithoutJourney_runInput | Prisma.journey_step_logCreateOrConnectWithoutJourney_runInput[];
    upsert?: Prisma.journey_step_logUpsertWithWhereUniqueWithoutJourney_runInput | Prisma.journey_step_logUpsertWithWhereUniqueWithoutJourney_runInput[];
    createMany?: Prisma.journey_step_logCreateManyJourney_runInputEnvelope;
    set?: Prisma.journey_step_logWhereUniqueInput | Prisma.journey_step_logWhereUniqueInput[];
    disconnect?: Prisma.journey_step_logWhereUniqueInput | Prisma.journey_step_logWhereUniqueInput[];
    delete?: Prisma.journey_step_logWhereUniqueInput | Prisma.journey_step_logWhereUniqueInput[];
    connect?: Prisma.journey_step_logWhereUniqueInput | Prisma.journey_step_logWhereUniqueInput[];
    update?: Prisma.journey_step_logUpdateWithWhereUniqueWithoutJourney_runInput | Prisma.journey_step_logUpdateWithWhereUniqueWithoutJourney_runInput[];
    updateMany?: Prisma.journey_step_logUpdateManyWithWhereWithoutJourney_runInput | Prisma.journey_step_logUpdateManyWithWhereWithoutJourney_runInput[];
    deleteMany?: Prisma.journey_step_logScalarWhereInput | Prisma.journey_step_logScalarWhereInput[];
};
export type journey_step_logCreateWithoutJourney_runInput = {
    id?: string;
    node_id: string;
    node_type: string;
    action?: string | null;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    executed_at?: Date | string;
};
export type journey_step_logUncheckedCreateWithoutJourney_runInput = {
    id?: string;
    node_id: string;
    node_type: string;
    action?: string | null;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    executed_at?: Date | string;
};
export type journey_step_logCreateOrConnectWithoutJourney_runInput = {
    where: Prisma.journey_step_logWhereUniqueInput;
    create: Prisma.XOR<Prisma.journey_step_logCreateWithoutJourney_runInput, Prisma.journey_step_logUncheckedCreateWithoutJourney_runInput>;
};
export type journey_step_logCreateManyJourney_runInputEnvelope = {
    data: Prisma.journey_step_logCreateManyJourney_runInput | Prisma.journey_step_logCreateManyJourney_runInput[];
    skipDuplicates?: boolean;
};
export type journey_step_logUpsertWithWhereUniqueWithoutJourney_runInput = {
    where: Prisma.journey_step_logWhereUniqueInput;
    update: Prisma.XOR<Prisma.journey_step_logUpdateWithoutJourney_runInput, Prisma.journey_step_logUncheckedUpdateWithoutJourney_runInput>;
    create: Prisma.XOR<Prisma.journey_step_logCreateWithoutJourney_runInput, Prisma.journey_step_logUncheckedCreateWithoutJourney_runInput>;
};
export type journey_step_logUpdateWithWhereUniqueWithoutJourney_runInput = {
    where: Prisma.journey_step_logWhereUniqueInput;
    data: Prisma.XOR<Prisma.journey_step_logUpdateWithoutJourney_runInput, Prisma.journey_step_logUncheckedUpdateWithoutJourney_runInput>;
};
export type journey_step_logUpdateManyWithWhereWithoutJourney_runInput = {
    where: Prisma.journey_step_logScalarWhereInput;
    data: Prisma.XOR<Prisma.journey_step_logUpdateManyMutationInput, Prisma.journey_step_logUncheckedUpdateManyWithoutJourney_runInput>;
};
export type journey_step_logScalarWhereInput = {
    AND?: Prisma.journey_step_logScalarWhereInput | Prisma.journey_step_logScalarWhereInput[];
    OR?: Prisma.journey_step_logScalarWhereInput[];
    NOT?: Prisma.journey_step_logScalarWhereInput | Prisma.journey_step_logScalarWhereInput[];
    id?: Prisma.UuidFilter<"journey_step_log"> | string;
    journey_run_id?: Prisma.UuidFilter<"journey_step_log"> | string;
    node_id?: Prisma.StringFilter<"journey_step_log"> | string;
    node_type?: Prisma.StringFilter<"journey_step_log"> | string;
    action?: Prisma.StringNullableFilter<"journey_step_log"> | string | null;
    result?: Prisma.JsonNullableFilter<"journey_step_log">;
    executed_at?: Prisma.DateTimeFilter<"journey_step_log"> | Date | string;
};
export type journey_step_logCreateManyJourney_runInput = {
    id?: string;
    node_id: string;
    node_type: string;
    action?: string | null;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    executed_at?: Date | string;
};
export type journey_step_logUpdateWithoutJourney_runInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    node_id?: Prisma.StringFieldUpdateOperationsInput | string;
    node_type?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    executed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type journey_step_logUncheckedUpdateWithoutJourney_runInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    node_id?: Prisma.StringFieldUpdateOperationsInput | string;
    node_type?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    executed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type journey_step_logUncheckedUpdateManyWithoutJourney_runInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    node_id?: Prisma.StringFieldUpdateOperationsInput | string;
    node_type?: Prisma.StringFieldUpdateOperationsInput | string;
    action?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    executed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type journey_step_logSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    journey_run_id?: boolean;
    node_id?: boolean;
    node_type?: boolean;
    action?: boolean;
    result?: boolean;
    executed_at?: boolean;
    journey_run?: boolean | Prisma.journey_runDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journey_step_log"]>;
export type journey_step_logSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    journey_run_id?: boolean;
    node_id?: boolean;
    node_type?: boolean;
    action?: boolean;
    result?: boolean;
    executed_at?: boolean;
    journey_run?: boolean | Prisma.journey_runDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journey_step_log"]>;
export type journey_step_logSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    journey_run_id?: boolean;
    node_id?: boolean;
    node_type?: boolean;
    action?: boolean;
    result?: boolean;
    executed_at?: boolean;
    journey_run?: boolean | Prisma.journey_runDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["journey_step_log"]>;
export type journey_step_logSelectScalar = {
    id?: boolean;
    journey_run_id?: boolean;
    node_id?: boolean;
    node_type?: boolean;
    action?: boolean;
    result?: boolean;
    executed_at?: boolean;
};
export type journey_step_logOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "journey_run_id" | "node_id" | "node_type" | "action" | "result" | "executed_at", ExtArgs["result"]["journey_step_log"]>;
export type journey_step_logInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    journey_run?: boolean | Prisma.journey_runDefaultArgs<ExtArgs>;
};
export type journey_step_logIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    journey_run?: boolean | Prisma.journey_runDefaultArgs<ExtArgs>;
};
export type journey_step_logIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    journey_run?: boolean | Prisma.journey_runDefaultArgs<ExtArgs>;
};
export type $journey_step_logPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "journey_step_log";
    objects: {
        journey_run: Prisma.$journey_runPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        journey_run_id: string;
        node_id: string;
        node_type: string;
        action: string | null;
        result: runtime.JsonValue | null;
        executed_at: Date;
    }, ExtArgs["result"]["journey_step_log"]>;
    composites: {};
};
export type journey_step_logGetPayload<S extends boolean | null | undefined | journey_step_logDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$journey_step_logPayload, S>;
export type journey_step_logCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<journey_step_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Journey_step_logCountAggregateInputType | true;
};
export interface journey_step_logDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['journey_step_log'];
        meta: {
            name: 'journey_step_log';
        };
    };
    findUnique<T extends journey_step_logFindUniqueArgs>(args: Prisma.SelectSubset<T, journey_step_logFindUniqueArgs<ExtArgs>>): Prisma.Prisma__journey_step_logClient<runtime.Types.Result.GetResult<Prisma.$journey_step_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends journey_step_logFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, journey_step_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__journey_step_logClient<runtime.Types.Result.GetResult<Prisma.$journey_step_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends journey_step_logFindFirstArgs>(args?: Prisma.SelectSubset<T, journey_step_logFindFirstArgs<ExtArgs>>): Prisma.Prisma__journey_step_logClient<runtime.Types.Result.GetResult<Prisma.$journey_step_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends journey_step_logFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, journey_step_logFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__journey_step_logClient<runtime.Types.Result.GetResult<Prisma.$journey_step_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends journey_step_logFindManyArgs>(args?: Prisma.SelectSubset<T, journey_step_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$journey_step_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends journey_step_logCreateArgs>(args: Prisma.SelectSubset<T, journey_step_logCreateArgs<ExtArgs>>): Prisma.Prisma__journey_step_logClient<runtime.Types.Result.GetResult<Prisma.$journey_step_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends journey_step_logCreateManyArgs>(args?: Prisma.SelectSubset<T, journey_step_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends journey_step_logCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, journey_step_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$journey_step_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends journey_step_logDeleteArgs>(args: Prisma.SelectSubset<T, journey_step_logDeleteArgs<ExtArgs>>): Prisma.Prisma__journey_step_logClient<runtime.Types.Result.GetResult<Prisma.$journey_step_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends journey_step_logUpdateArgs>(args: Prisma.SelectSubset<T, journey_step_logUpdateArgs<ExtArgs>>): Prisma.Prisma__journey_step_logClient<runtime.Types.Result.GetResult<Prisma.$journey_step_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends journey_step_logDeleteManyArgs>(args?: Prisma.SelectSubset<T, journey_step_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends journey_step_logUpdateManyArgs>(args: Prisma.SelectSubset<T, journey_step_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends journey_step_logUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, journey_step_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$journey_step_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends journey_step_logUpsertArgs>(args: Prisma.SelectSubset<T, journey_step_logUpsertArgs<ExtArgs>>): Prisma.Prisma__journey_step_logClient<runtime.Types.Result.GetResult<Prisma.$journey_step_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends journey_step_logCountArgs>(args?: Prisma.Subset<T, journey_step_logCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Journey_step_logCountAggregateOutputType> : number>;
    aggregate<T extends Journey_step_logAggregateArgs>(args: Prisma.Subset<T, Journey_step_logAggregateArgs>): Prisma.PrismaPromise<GetJourney_step_logAggregateType<T>>;
    groupBy<T extends journey_step_logGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: journey_step_logGroupByArgs['orderBy'];
    } : {
        orderBy?: journey_step_logGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, journey_step_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJourney_step_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: journey_step_logFieldRefs;
}
export interface Prisma__journey_step_logClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    journey_run<T extends Prisma.journey_runDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.journey_runDefaultArgs<ExtArgs>>): Prisma.Prisma__journey_runClient<runtime.Types.Result.GetResult<Prisma.$journey_runPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface journey_step_logFieldRefs {
    readonly id: Prisma.FieldRef<"journey_step_log", 'String'>;
    readonly journey_run_id: Prisma.FieldRef<"journey_step_log", 'String'>;
    readonly node_id: Prisma.FieldRef<"journey_step_log", 'String'>;
    readonly node_type: Prisma.FieldRef<"journey_step_log", 'String'>;
    readonly action: Prisma.FieldRef<"journey_step_log", 'String'>;
    readonly result: Prisma.FieldRef<"journey_step_log", 'Json'>;
    readonly executed_at: Prisma.FieldRef<"journey_step_log", 'DateTime'>;
}
export type journey_step_logFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_step_logSelect<ExtArgs> | null;
    omit?: Prisma.journey_step_logOmit<ExtArgs> | null;
    include?: Prisma.journey_step_logInclude<ExtArgs> | null;
    where: Prisma.journey_step_logWhereUniqueInput;
};
export type journey_step_logFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_step_logSelect<ExtArgs> | null;
    omit?: Prisma.journey_step_logOmit<ExtArgs> | null;
    include?: Prisma.journey_step_logInclude<ExtArgs> | null;
    where: Prisma.journey_step_logWhereUniqueInput;
};
export type journey_step_logFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type journey_step_logFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type journey_step_logFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type journey_step_logCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_step_logSelect<ExtArgs> | null;
    omit?: Prisma.journey_step_logOmit<ExtArgs> | null;
    include?: Prisma.journey_step_logInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.journey_step_logCreateInput, Prisma.journey_step_logUncheckedCreateInput>;
};
export type journey_step_logCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.journey_step_logCreateManyInput | Prisma.journey_step_logCreateManyInput[];
    skipDuplicates?: boolean;
};
export type journey_step_logCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_step_logSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.journey_step_logOmit<ExtArgs> | null;
    data: Prisma.journey_step_logCreateManyInput | Prisma.journey_step_logCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.journey_step_logIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type journey_step_logUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_step_logSelect<ExtArgs> | null;
    omit?: Prisma.journey_step_logOmit<ExtArgs> | null;
    include?: Prisma.journey_step_logInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.journey_step_logUpdateInput, Prisma.journey_step_logUncheckedUpdateInput>;
    where: Prisma.journey_step_logWhereUniqueInput;
};
export type journey_step_logUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.journey_step_logUpdateManyMutationInput, Prisma.journey_step_logUncheckedUpdateManyInput>;
    where?: Prisma.journey_step_logWhereInput;
    limit?: number;
};
export type journey_step_logUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_step_logSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.journey_step_logOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.journey_step_logUpdateManyMutationInput, Prisma.journey_step_logUncheckedUpdateManyInput>;
    where?: Prisma.journey_step_logWhereInput;
    limit?: number;
    include?: Prisma.journey_step_logIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type journey_step_logUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_step_logSelect<ExtArgs> | null;
    omit?: Prisma.journey_step_logOmit<ExtArgs> | null;
    include?: Prisma.journey_step_logInclude<ExtArgs> | null;
    where: Prisma.journey_step_logWhereUniqueInput;
    create: Prisma.XOR<Prisma.journey_step_logCreateInput, Prisma.journey_step_logUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.journey_step_logUpdateInput, Prisma.journey_step_logUncheckedUpdateInput>;
};
export type journey_step_logDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_step_logSelect<ExtArgs> | null;
    omit?: Prisma.journey_step_logOmit<ExtArgs> | null;
    include?: Prisma.journey_step_logInclude<ExtArgs> | null;
    where: Prisma.journey_step_logWhereUniqueInput;
};
export type journey_step_logDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.journey_step_logWhereInput;
    limit?: number;
};
export type journey_step_logDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_step_logSelect<ExtArgs> | null;
    omit?: Prisma.journey_step_logOmit<ExtArgs> | null;
    include?: Prisma.journey_step_logInclude<ExtArgs> | null;
};
