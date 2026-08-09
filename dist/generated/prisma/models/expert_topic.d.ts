import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type expert_topicModel = runtime.Types.Result.DefaultSelection<Prisma.$expert_topicPayload>;
export type AggregateExpert_topic = {
    _count: Expert_topicCountAggregateOutputType | null;
    _min: Expert_topicMinAggregateOutputType | null;
    _max: Expert_topicMaxAggregateOutputType | null;
};
export type Expert_topicMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    expert_name: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Expert_topicMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    expert_name: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Expert_topicCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    expert_name: number;
    stage_codes: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type Expert_topicMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    expert_name?: true;
    is_active?: true;
    created_at?: true;
};
export type Expert_topicMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    expert_name?: true;
    is_active?: true;
    created_at?: true;
};
export type Expert_topicCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    expert_name?: true;
    stage_codes?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type Expert_topicAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.expert_topicWhereInput;
    orderBy?: Prisma.expert_topicOrderByWithRelationInput | Prisma.expert_topicOrderByWithRelationInput[];
    cursor?: Prisma.expert_topicWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Expert_topicCountAggregateInputType;
    _min?: Expert_topicMinAggregateInputType;
    _max?: Expert_topicMaxAggregateInputType;
};
export type GetExpert_topicAggregateType<T extends Expert_topicAggregateArgs> = {
    [P in keyof T & keyof AggregateExpert_topic]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExpert_topic[P]> : Prisma.GetScalarType<T[P], AggregateExpert_topic[P]>;
};
export type expert_topicGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.expert_topicWhereInput;
    orderBy?: Prisma.expert_topicOrderByWithAggregationInput | Prisma.expert_topicOrderByWithAggregationInput[];
    by: Prisma.Expert_topicScalarFieldEnum[] | Prisma.Expert_topicScalarFieldEnum;
    having?: Prisma.expert_topicScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Expert_topicCountAggregateInputType | true;
    _min?: Expert_topicMinAggregateInputType;
    _max?: Expert_topicMaxAggregateInputType;
};
export type Expert_topicGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    expert_name: string | null;
    stage_codes: runtime.JsonValue | null;
    is_active: boolean;
    created_at: Date;
    _count: Expert_topicCountAggregateOutputType | null;
    _min: Expert_topicMinAggregateOutputType | null;
    _max: Expert_topicMaxAggregateOutputType | null;
};
export type GetExpert_topicGroupByPayload<T extends expert_topicGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Expert_topicGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Expert_topicGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Expert_topicGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Expert_topicGroupByOutputType[P]>;
}>>;
export type expert_topicWhereInput = {
    AND?: Prisma.expert_topicWhereInput | Prisma.expert_topicWhereInput[];
    OR?: Prisma.expert_topicWhereInput[];
    NOT?: Prisma.expert_topicWhereInput | Prisma.expert_topicWhereInput[];
    id?: Prisma.UuidFilter<"expert_topic"> | string;
    title?: Prisma.StringFilter<"expert_topic"> | string;
    description?: Prisma.StringNullableFilter<"expert_topic"> | string | null;
    expert_name?: Prisma.StringNullableFilter<"expert_topic"> | string | null;
    stage_codes?: Prisma.JsonNullableFilter<"expert_topic">;
    is_active?: Prisma.BoolFilter<"expert_topic"> | boolean;
    created_at?: Prisma.DateTimeFilter<"expert_topic"> | Date | string;
    expert_slot?: Prisma.Expert_slotListRelationFilter;
};
export type expert_topicOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    expert_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    stage_codes?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    expert_slot?: Prisma.expert_slotOrderByRelationAggregateInput;
};
export type expert_topicWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.expert_topicWhereInput | Prisma.expert_topicWhereInput[];
    OR?: Prisma.expert_topicWhereInput[];
    NOT?: Prisma.expert_topicWhereInput | Prisma.expert_topicWhereInput[];
    title?: Prisma.StringFilter<"expert_topic"> | string;
    description?: Prisma.StringNullableFilter<"expert_topic"> | string | null;
    expert_name?: Prisma.StringNullableFilter<"expert_topic"> | string | null;
    stage_codes?: Prisma.JsonNullableFilter<"expert_topic">;
    is_active?: Prisma.BoolFilter<"expert_topic"> | boolean;
    created_at?: Prisma.DateTimeFilter<"expert_topic"> | Date | string;
    expert_slot?: Prisma.Expert_slotListRelationFilter;
}, "id">;
export type expert_topicOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    expert_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    stage_codes?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.expert_topicCountOrderByAggregateInput;
    _max?: Prisma.expert_topicMaxOrderByAggregateInput;
    _min?: Prisma.expert_topicMinOrderByAggregateInput;
};
export type expert_topicScalarWhereWithAggregatesInput = {
    AND?: Prisma.expert_topicScalarWhereWithAggregatesInput | Prisma.expert_topicScalarWhereWithAggregatesInput[];
    OR?: Prisma.expert_topicScalarWhereWithAggregatesInput[];
    NOT?: Prisma.expert_topicScalarWhereWithAggregatesInput | Prisma.expert_topicScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"expert_topic"> | string;
    title?: Prisma.StringWithAggregatesFilter<"expert_topic"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"expert_topic"> | string | null;
    expert_name?: Prisma.StringNullableWithAggregatesFilter<"expert_topic"> | string | null;
    stage_codes?: Prisma.JsonNullableWithAggregatesFilter<"expert_topic">;
    is_active?: Prisma.BoolWithAggregatesFilter<"expert_topic"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"expert_topic"> | Date | string;
};
export type expert_topicCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    expert_name?: string | null;
    stage_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
    expert_slot?: Prisma.expert_slotCreateNestedManyWithoutExpert_topicInput;
};
export type expert_topicUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    expert_name?: string | null;
    stage_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
    expert_slot?: Prisma.expert_slotUncheckedCreateNestedManyWithoutExpert_topicInput;
};
export type expert_topicUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expert_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stage_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expert_slot?: Prisma.expert_slotUpdateManyWithoutExpert_topicNestedInput;
};
export type expert_topicUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expert_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stage_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expert_slot?: Prisma.expert_slotUncheckedUpdateManyWithoutExpert_topicNestedInput;
};
export type expert_topicCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    expert_name?: string | null;
    stage_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
};
export type expert_topicUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expert_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stage_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type expert_topicUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expert_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stage_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Expert_topicScalarRelationFilter = {
    is?: Prisma.expert_topicWhereInput;
    isNot?: Prisma.expert_topicWhereInput;
};
export type expert_topicCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    expert_name?: Prisma.SortOrder;
    stage_codes?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type expert_topicMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    expert_name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type expert_topicMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    expert_name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type expert_topicCreateNestedOneWithoutExpert_slotInput = {
    create?: Prisma.XOR<Prisma.expert_topicCreateWithoutExpert_slotInput, Prisma.expert_topicUncheckedCreateWithoutExpert_slotInput>;
    connectOrCreate?: Prisma.expert_topicCreateOrConnectWithoutExpert_slotInput;
    connect?: Prisma.expert_topicWhereUniqueInput;
};
export type expert_topicUpdateOneRequiredWithoutExpert_slotNestedInput = {
    create?: Prisma.XOR<Prisma.expert_topicCreateWithoutExpert_slotInput, Prisma.expert_topicUncheckedCreateWithoutExpert_slotInput>;
    connectOrCreate?: Prisma.expert_topicCreateOrConnectWithoutExpert_slotInput;
    upsert?: Prisma.expert_topicUpsertWithoutExpert_slotInput;
    connect?: Prisma.expert_topicWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.expert_topicUpdateToOneWithWhereWithoutExpert_slotInput, Prisma.expert_topicUpdateWithoutExpert_slotInput>, Prisma.expert_topicUncheckedUpdateWithoutExpert_slotInput>;
};
export type expert_topicCreateWithoutExpert_slotInput = {
    id?: string;
    title: string;
    description?: string | null;
    expert_name?: string | null;
    stage_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
};
export type expert_topicUncheckedCreateWithoutExpert_slotInput = {
    id?: string;
    title: string;
    description?: string | null;
    expert_name?: string | null;
    stage_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
};
export type expert_topicCreateOrConnectWithoutExpert_slotInput = {
    where: Prisma.expert_topicWhereUniqueInput;
    create: Prisma.XOR<Prisma.expert_topicCreateWithoutExpert_slotInput, Prisma.expert_topicUncheckedCreateWithoutExpert_slotInput>;
};
export type expert_topicUpsertWithoutExpert_slotInput = {
    update: Prisma.XOR<Prisma.expert_topicUpdateWithoutExpert_slotInput, Prisma.expert_topicUncheckedUpdateWithoutExpert_slotInput>;
    create: Prisma.XOR<Prisma.expert_topicCreateWithoutExpert_slotInput, Prisma.expert_topicUncheckedCreateWithoutExpert_slotInput>;
    where?: Prisma.expert_topicWhereInput;
};
export type expert_topicUpdateToOneWithWhereWithoutExpert_slotInput = {
    where?: Prisma.expert_topicWhereInput;
    data: Prisma.XOR<Prisma.expert_topicUpdateWithoutExpert_slotInput, Prisma.expert_topicUncheckedUpdateWithoutExpert_slotInput>;
};
export type expert_topicUpdateWithoutExpert_slotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expert_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stage_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type expert_topicUncheckedUpdateWithoutExpert_slotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expert_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stage_codes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Expert_topicCountOutputType = {
    expert_slot: number;
};
export type Expert_topicCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    expert_slot?: boolean | Expert_topicCountOutputTypeCountExpert_slotArgs;
};
export type Expert_topicCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Expert_topicCountOutputTypeSelect<ExtArgs> | null;
};
export type Expert_topicCountOutputTypeCountExpert_slotArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.expert_slotWhereInput;
};
export type expert_topicSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    expert_name?: boolean;
    stage_codes?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    expert_slot?: boolean | Prisma.expert_topic$expert_slotArgs<ExtArgs>;
    _count?: boolean | Prisma.Expert_topicCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expert_topic"]>;
export type expert_topicSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    expert_name?: boolean;
    stage_codes?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["expert_topic"]>;
export type expert_topicSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    expert_name?: boolean;
    stage_codes?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["expert_topic"]>;
export type expert_topicSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    expert_name?: boolean;
    stage_codes?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type expert_topicOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "expert_name" | "stage_codes" | "is_active" | "created_at", ExtArgs["result"]["expert_topic"]>;
export type expert_topicInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    expert_slot?: boolean | Prisma.expert_topic$expert_slotArgs<ExtArgs>;
    _count?: boolean | Prisma.Expert_topicCountOutputTypeDefaultArgs<ExtArgs>;
};
export type expert_topicIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type expert_topicIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $expert_topicPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "expert_topic";
    objects: {
        expert_slot: Prisma.$expert_slotPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        expert_name: string | null;
        stage_codes: runtime.JsonValue | null;
        is_active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["expert_topic"]>;
    composites: {};
};
export type expert_topicGetPayload<S extends boolean | null | undefined | expert_topicDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$expert_topicPayload, S>;
export type expert_topicCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<expert_topicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Expert_topicCountAggregateInputType | true;
};
export interface expert_topicDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['expert_topic'];
        meta: {
            name: 'expert_topic';
        };
    };
    findUnique<T extends expert_topicFindUniqueArgs>(args: Prisma.SelectSubset<T, expert_topicFindUniqueArgs<ExtArgs>>): Prisma.Prisma__expert_topicClient<runtime.Types.Result.GetResult<Prisma.$expert_topicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends expert_topicFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, expert_topicFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__expert_topicClient<runtime.Types.Result.GetResult<Prisma.$expert_topicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends expert_topicFindFirstArgs>(args?: Prisma.SelectSubset<T, expert_topicFindFirstArgs<ExtArgs>>): Prisma.Prisma__expert_topicClient<runtime.Types.Result.GetResult<Prisma.$expert_topicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends expert_topicFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, expert_topicFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__expert_topicClient<runtime.Types.Result.GetResult<Prisma.$expert_topicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends expert_topicFindManyArgs>(args?: Prisma.SelectSubset<T, expert_topicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$expert_topicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends expert_topicCreateArgs>(args: Prisma.SelectSubset<T, expert_topicCreateArgs<ExtArgs>>): Prisma.Prisma__expert_topicClient<runtime.Types.Result.GetResult<Prisma.$expert_topicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends expert_topicCreateManyArgs>(args?: Prisma.SelectSubset<T, expert_topicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends expert_topicCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, expert_topicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$expert_topicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends expert_topicDeleteArgs>(args: Prisma.SelectSubset<T, expert_topicDeleteArgs<ExtArgs>>): Prisma.Prisma__expert_topicClient<runtime.Types.Result.GetResult<Prisma.$expert_topicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends expert_topicUpdateArgs>(args: Prisma.SelectSubset<T, expert_topicUpdateArgs<ExtArgs>>): Prisma.Prisma__expert_topicClient<runtime.Types.Result.GetResult<Prisma.$expert_topicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends expert_topicDeleteManyArgs>(args?: Prisma.SelectSubset<T, expert_topicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends expert_topicUpdateManyArgs>(args: Prisma.SelectSubset<T, expert_topicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends expert_topicUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, expert_topicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$expert_topicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends expert_topicUpsertArgs>(args: Prisma.SelectSubset<T, expert_topicUpsertArgs<ExtArgs>>): Prisma.Prisma__expert_topicClient<runtime.Types.Result.GetResult<Prisma.$expert_topicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends expert_topicCountArgs>(args?: Prisma.Subset<T, expert_topicCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Expert_topicCountAggregateOutputType> : number>;
    aggregate<T extends Expert_topicAggregateArgs>(args: Prisma.Subset<T, Expert_topicAggregateArgs>): Prisma.PrismaPromise<GetExpert_topicAggregateType<T>>;
    groupBy<T extends expert_topicGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: expert_topicGroupByArgs['orderBy'];
    } : {
        orderBy?: expert_topicGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, expert_topicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpert_topicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: expert_topicFieldRefs;
}
export interface Prisma__expert_topicClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    expert_slot<T extends Prisma.expert_topic$expert_slotArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.expert_topic$expert_slotArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$expert_slotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface expert_topicFieldRefs {
    readonly id: Prisma.FieldRef<"expert_topic", 'String'>;
    readonly title: Prisma.FieldRef<"expert_topic", 'String'>;
    readonly description: Prisma.FieldRef<"expert_topic", 'String'>;
    readonly expert_name: Prisma.FieldRef<"expert_topic", 'String'>;
    readonly stage_codes: Prisma.FieldRef<"expert_topic", 'Json'>;
    readonly is_active: Prisma.FieldRef<"expert_topic", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"expert_topic", 'DateTime'>;
}
export type expert_topicFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_topicSelect<ExtArgs> | null;
    omit?: Prisma.expert_topicOmit<ExtArgs> | null;
    include?: Prisma.expert_topicInclude<ExtArgs> | null;
    where: Prisma.expert_topicWhereUniqueInput;
};
export type expert_topicFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_topicSelect<ExtArgs> | null;
    omit?: Prisma.expert_topicOmit<ExtArgs> | null;
    include?: Prisma.expert_topicInclude<ExtArgs> | null;
    where: Prisma.expert_topicWhereUniqueInput;
};
export type expert_topicFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_topicSelect<ExtArgs> | null;
    omit?: Prisma.expert_topicOmit<ExtArgs> | null;
    include?: Prisma.expert_topicInclude<ExtArgs> | null;
    where?: Prisma.expert_topicWhereInput;
    orderBy?: Prisma.expert_topicOrderByWithRelationInput | Prisma.expert_topicOrderByWithRelationInput[];
    cursor?: Prisma.expert_topicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Expert_topicScalarFieldEnum | Prisma.Expert_topicScalarFieldEnum[];
};
export type expert_topicFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_topicSelect<ExtArgs> | null;
    omit?: Prisma.expert_topicOmit<ExtArgs> | null;
    include?: Prisma.expert_topicInclude<ExtArgs> | null;
    where?: Prisma.expert_topicWhereInput;
    orderBy?: Prisma.expert_topicOrderByWithRelationInput | Prisma.expert_topicOrderByWithRelationInput[];
    cursor?: Prisma.expert_topicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Expert_topicScalarFieldEnum | Prisma.Expert_topicScalarFieldEnum[];
};
export type expert_topicFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_topicSelect<ExtArgs> | null;
    omit?: Prisma.expert_topicOmit<ExtArgs> | null;
    include?: Prisma.expert_topicInclude<ExtArgs> | null;
    where?: Prisma.expert_topicWhereInput;
    orderBy?: Prisma.expert_topicOrderByWithRelationInput | Prisma.expert_topicOrderByWithRelationInput[];
    cursor?: Prisma.expert_topicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Expert_topicScalarFieldEnum | Prisma.Expert_topicScalarFieldEnum[];
};
export type expert_topicCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_topicSelect<ExtArgs> | null;
    omit?: Prisma.expert_topicOmit<ExtArgs> | null;
    include?: Prisma.expert_topicInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.expert_topicCreateInput, Prisma.expert_topicUncheckedCreateInput>;
};
export type expert_topicCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.expert_topicCreateManyInput | Prisma.expert_topicCreateManyInput[];
    skipDuplicates?: boolean;
};
export type expert_topicCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_topicSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.expert_topicOmit<ExtArgs> | null;
    data: Prisma.expert_topicCreateManyInput | Prisma.expert_topicCreateManyInput[];
    skipDuplicates?: boolean;
};
export type expert_topicUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_topicSelect<ExtArgs> | null;
    omit?: Prisma.expert_topicOmit<ExtArgs> | null;
    include?: Prisma.expert_topicInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.expert_topicUpdateInput, Prisma.expert_topicUncheckedUpdateInput>;
    where: Prisma.expert_topicWhereUniqueInput;
};
export type expert_topicUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.expert_topicUpdateManyMutationInput, Prisma.expert_topicUncheckedUpdateManyInput>;
    where?: Prisma.expert_topicWhereInput;
    limit?: number;
};
export type expert_topicUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_topicSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.expert_topicOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.expert_topicUpdateManyMutationInput, Prisma.expert_topicUncheckedUpdateManyInput>;
    where?: Prisma.expert_topicWhereInput;
    limit?: number;
};
export type expert_topicUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_topicSelect<ExtArgs> | null;
    omit?: Prisma.expert_topicOmit<ExtArgs> | null;
    include?: Prisma.expert_topicInclude<ExtArgs> | null;
    where: Prisma.expert_topicWhereUniqueInput;
    create: Prisma.XOR<Prisma.expert_topicCreateInput, Prisma.expert_topicUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.expert_topicUpdateInput, Prisma.expert_topicUncheckedUpdateInput>;
};
export type expert_topicDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_topicSelect<ExtArgs> | null;
    omit?: Prisma.expert_topicOmit<ExtArgs> | null;
    include?: Prisma.expert_topicInclude<ExtArgs> | null;
    where: Prisma.expert_topicWhereUniqueInput;
};
export type expert_topicDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.expert_topicWhereInput;
    limit?: number;
};
export type expert_topic$expert_slotArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_slotSelect<ExtArgs> | null;
    omit?: Prisma.expert_slotOmit<ExtArgs> | null;
    include?: Prisma.expert_slotInclude<ExtArgs> | null;
    where?: Prisma.expert_slotWhereInput;
    orderBy?: Prisma.expert_slotOrderByWithRelationInput | Prisma.expert_slotOrderByWithRelationInput[];
    cursor?: Prisma.expert_slotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Expert_slotScalarFieldEnum | Prisma.Expert_slotScalarFieldEnum[];
};
export type expert_topicDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_topicSelect<ExtArgs> | null;
    omit?: Prisma.expert_topicOmit<ExtArgs> | null;
    include?: Prisma.expert_topicInclude<ExtArgs> | null;
};
