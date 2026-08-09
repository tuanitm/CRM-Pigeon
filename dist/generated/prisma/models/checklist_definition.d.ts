import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type checklist_definitionModel = runtime.Types.Result.DefaultSelection<Prisma.$checklist_definitionPayload>;
export type AggregateChecklist_definition = {
    _count: Checklist_definitionCountAggregateOutputType | null;
    _avg: Checklist_definitionAvgAggregateOutputType | null;
    _sum: Checklist_definitionSumAggregateOutputType | null;
    _min: Checklist_definitionMinAggregateOutputType | null;
    _max: Checklist_definitionMaxAggregateOutputType | null;
};
export type Checklist_definitionAvgAggregateOutputType = {
    points_reward: number | null;
};
export type Checklist_definitionSumAggregateOutputType = {
    points_reward: number | null;
};
export type Checklist_definitionMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    title: string | null;
    stage_code: string | null;
    points_reward: number | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Checklist_definitionMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    title: string | null;
    stage_code: string | null;
    points_reward: number | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Checklist_definitionCountAggregateOutputType = {
    id: number;
    code: number;
    title: number;
    stage_code: number;
    items: number;
    points_reward: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type Checklist_definitionAvgAggregateInputType = {
    points_reward?: true;
};
export type Checklist_definitionSumAggregateInputType = {
    points_reward?: true;
};
export type Checklist_definitionMinAggregateInputType = {
    id?: true;
    code?: true;
    title?: true;
    stage_code?: true;
    points_reward?: true;
    is_active?: true;
    created_at?: true;
};
export type Checklist_definitionMaxAggregateInputType = {
    id?: true;
    code?: true;
    title?: true;
    stage_code?: true;
    points_reward?: true;
    is_active?: true;
    created_at?: true;
};
export type Checklist_definitionCountAggregateInputType = {
    id?: true;
    code?: true;
    title?: true;
    stage_code?: true;
    items?: true;
    points_reward?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type Checklist_definitionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.checklist_definitionWhereInput;
    orderBy?: Prisma.checklist_definitionOrderByWithRelationInput | Prisma.checklist_definitionOrderByWithRelationInput[];
    cursor?: Prisma.checklist_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Checklist_definitionCountAggregateInputType;
    _avg?: Checklist_definitionAvgAggregateInputType;
    _sum?: Checklist_definitionSumAggregateInputType;
    _min?: Checklist_definitionMinAggregateInputType;
    _max?: Checklist_definitionMaxAggregateInputType;
};
export type GetChecklist_definitionAggregateType<T extends Checklist_definitionAggregateArgs> = {
    [P in keyof T & keyof AggregateChecklist_definition]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChecklist_definition[P]> : Prisma.GetScalarType<T[P], AggregateChecklist_definition[P]>;
};
export type checklist_definitionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.checklist_definitionWhereInput;
    orderBy?: Prisma.checklist_definitionOrderByWithAggregationInput | Prisma.checklist_definitionOrderByWithAggregationInput[];
    by: Prisma.Checklist_definitionScalarFieldEnum[] | Prisma.Checklist_definitionScalarFieldEnum;
    having?: Prisma.checklist_definitionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Checklist_definitionCountAggregateInputType | true;
    _avg?: Checklist_definitionAvgAggregateInputType;
    _sum?: Checklist_definitionSumAggregateInputType;
    _min?: Checklist_definitionMinAggregateInputType;
    _max?: Checklist_definitionMaxAggregateInputType;
};
export type Checklist_definitionGroupByOutputType = {
    id: string;
    code: string;
    title: string;
    stage_code: string | null;
    items: runtime.JsonValue;
    points_reward: number;
    is_active: boolean;
    created_at: Date;
    _count: Checklist_definitionCountAggregateOutputType | null;
    _avg: Checklist_definitionAvgAggregateOutputType | null;
    _sum: Checklist_definitionSumAggregateOutputType | null;
    _min: Checklist_definitionMinAggregateOutputType | null;
    _max: Checklist_definitionMaxAggregateOutputType | null;
};
export type GetChecklist_definitionGroupByPayload<T extends checklist_definitionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Checklist_definitionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Checklist_definitionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Checklist_definitionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Checklist_definitionGroupByOutputType[P]>;
}>>;
export type checklist_definitionWhereInput = {
    AND?: Prisma.checklist_definitionWhereInput | Prisma.checklist_definitionWhereInput[];
    OR?: Prisma.checklist_definitionWhereInput[];
    NOT?: Prisma.checklist_definitionWhereInput | Prisma.checklist_definitionWhereInput[];
    id?: Prisma.UuidFilter<"checklist_definition"> | string;
    code?: Prisma.StringFilter<"checklist_definition"> | string;
    title?: Prisma.StringFilter<"checklist_definition"> | string;
    stage_code?: Prisma.StringNullableFilter<"checklist_definition"> | string | null;
    items?: Prisma.JsonFilter<"checklist_definition">;
    points_reward?: Prisma.IntFilter<"checklist_definition"> | number;
    is_active?: Prisma.BoolFilter<"checklist_definition"> | boolean;
    created_at?: Prisma.DateTimeFilter<"checklist_definition"> | Date | string;
    checklist_progress?: Prisma.Checklist_progressListRelationFilter;
};
export type checklist_definitionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    stage_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    items?: Prisma.SortOrder;
    points_reward?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    checklist_progress?: Prisma.checklist_progressOrderByRelationAggregateInput;
};
export type checklist_definitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.checklist_definitionWhereInput | Prisma.checklist_definitionWhereInput[];
    OR?: Prisma.checklist_definitionWhereInput[];
    NOT?: Prisma.checklist_definitionWhereInput | Prisma.checklist_definitionWhereInput[];
    title?: Prisma.StringFilter<"checklist_definition"> | string;
    stage_code?: Prisma.StringNullableFilter<"checklist_definition"> | string | null;
    items?: Prisma.JsonFilter<"checklist_definition">;
    points_reward?: Prisma.IntFilter<"checklist_definition"> | number;
    is_active?: Prisma.BoolFilter<"checklist_definition"> | boolean;
    created_at?: Prisma.DateTimeFilter<"checklist_definition"> | Date | string;
    checklist_progress?: Prisma.Checklist_progressListRelationFilter;
}, "id" | "code">;
export type checklist_definitionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    stage_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    items?: Prisma.SortOrder;
    points_reward?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.checklist_definitionCountOrderByAggregateInput;
    _avg?: Prisma.checklist_definitionAvgOrderByAggregateInput;
    _max?: Prisma.checklist_definitionMaxOrderByAggregateInput;
    _min?: Prisma.checklist_definitionMinOrderByAggregateInput;
    _sum?: Prisma.checklist_definitionSumOrderByAggregateInput;
};
export type checklist_definitionScalarWhereWithAggregatesInput = {
    AND?: Prisma.checklist_definitionScalarWhereWithAggregatesInput | Prisma.checklist_definitionScalarWhereWithAggregatesInput[];
    OR?: Prisma.checklist_definitionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.checklist_definitionScalarWhereWithAggregatesInput | Prisma.checklist_definitionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"checklist_definition"> | string;
    code?: Prisma.StringWithAggregatesFilter<"checklist_definition"> | string;
    title?: Prisma.StringWithAggregatesFilter<"checklist_definition"> | string;
    stage_code?: Prisma.StringNullableWithAggregatesFilter<"checklist_definition"> | string | null;
    items?: Prisma.JsonWithAggregatesFilter<"checklist_definition">;
    points_reward?: Prisma.IntWithAggregatesFilter<"checklist_definition"> | number;
    is_active?: Prisma.BoolWithAggregatesFilter<"checklist_definition"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"checklist_definition"> | Date | string;
};
export type checklist_definitionCreateInput = {
    id?: string;
    code: string;
    title: string;
    stage_code?: string | null;
    items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: number;
    is_active?: boolean;
    created_at?: Date | string;
    checklist_progress?: Prisma.checklist_progressCreateNestedManyWithoutChecklist_definitionInput;
};
export type checklist_definitionUncheckedCreateInput = {
    id?: string;
    code: string;
    title: string;
    stage_code?: string | null;
    items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: number;
    is_active?: boolean;
    created_at?: Date | string;
    checklist_progress?: Prisma.checklist_progressUncheckedCreateNestedManyWithoutChecklist_definitionInput;
};
export type checklist_definitionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    stage_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checklist_progress?: Prisma.checklist_progressUpdateManyWithoutChecklist_definitionNestedInput;
};
export type checklist_definitionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    stage_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checklist_progress?: Prisma.checklist_progressUncheckedUpdateManyWithoutChecklist_definitionNestedInput;
};
export type checklist_definitionCreateManyInput = {
    id?: string;
    code: string;
    title: string;
    stage_code?: string | null;
    items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: number;
    is_active?: boolean;
    created_at?: Date | string;
};
export type checklist_definitionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    stage_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type checklist_definitionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    stage_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type checklist_definitionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    stage_code?: Prisma.SortOrder;
    items?: Prisma.SortOrder;
    points_reward?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type checklist_definitionAvgOrderByAggregateInput = {
    points_reward?: Prisma.SortOrder;
};
export type checklist_definitionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    stage_code?: Prisma.SortOrder;
    points_reward?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type checklist_definitionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    stage_code?: Prisma.SortOrder;
    points_reward?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type checklist_definitionSumOrderByAggregateInput = {
    points_reward?: Prisma.SortOrder;
};
export type Checklist_definitionScalarRelationFilter = {
    is?: Prisma.checklist_definitionWhereInput;
    isNot?: Prisma.checklist_definitionWhereInput;
};
export type checklist_definitionCreateNestedOneWithoutChecklist_progressInput = {
    create?: Prisma.XOR<Prisma.checklist_definitionCreateWithoutChecklist_progressInput, Prisma.checklist_definitionUncheckedCreateWithoutChecklist_progressInput>;
    connectOrCreate?: Prisma.checklist_definitionCreateOrConnectWithoutChecklist_progressInput;
    connect?: Prisma.checklist_definitionWhereUniqueInput;
};
export type checklist_definitionUpdateOneRequiredWithoutChecklist_progressNestedInput = {
    create?: Prisma.XOR<Prisma.checklist_definitionCreateWithoutChecklist_progressInput, Prisma.checklist_definitionUncheckedCreateWithoutChecklist_progressInput>;
    connectOrCreate?: Prisma.checklist_definitionCreateOrConnectWithoutChecklist_progressInput;
    upsert?: Prisma.checklist_definitionUpsertWithoutChecklist_progressInput;
    connect?: Prisma.checklist_definitionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.checklist_definitionUpdateToOneWithWhereWithoutChecklist_progressInput, Prisma.checklist_definitionUpdateWithoutChecklist_progressInput>, Prisma.checklist_definitionUncheckedUpdateWithoutChecklist_progressInput>;
};
export type checklist_definitionCreateWithoutChecklist_progressInput = {
    id?: string;
    code: string;
    title: string;
    stage_code?: string | null;
    items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: number;
    is_active?: boolean;
    created_at?: Date | string;
};
export type checklist_definitionUncheckedCreateWithoutChecklist_progressInput = {
    id?: string;
    code: string;
    title: string;
    stage_code?: string | null;
    items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: number;
    is_active?: boolean;
    created_at?: Date | string;
};
export type checklist_definitionCreateOrConnectWithoutChecklist_progressInput = {
    where: Prisma.checklist_definitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.checklist_definitionCreateWithoutChecklist_progressInput, Prisma.checklist_definitionUncheckedCreateWithoutChecklist_progressInput>;
};
export type checklist_definitionUpsertWithoutChecklist_progressInput = {
    update: Prisma.XOR<Prisma.checklist_definitionUpdateWithoutChecklist_progressInput, Prisma.checklist_definitionUncheckedUpdateWithoutChecklist_progressInput>;
    create: Prisma.XOR<Prisma.checklist_definitionCreateWithoutChecklist_progressInput, Prisma.checklist_definitionUncheckedCreateWithoutChecklist_progressInput>;
    where?: Prisma.checklist_definitionWhereInput;
};
export type checklist_definitionUpdateToOneWithWhereWithoutChecklist_progressInput = {
    where?: Prisma.checklist_definitionWhereInput;
    data: Prisma.XOR<Prisma.checklist_definitionUpdateWithoutChecklist_progressInput, Prisma.checklist_definitionUncheckedUpdateWithoutChecklist_progressInput>;
};
export type checklist_definitionUpdateWithoutChecklist_progressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    stage_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type checklist_definitionUncheckedUpdateWithoutChecklist_progressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    stage_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Checklist_definitionCountOutputType = {
    checklist_progress: number;
};
export type Checklist_definitionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    checklist_progress?: boolean | Checklist_definitionCountOutputTypeCountChecklist_progressArgs;
};
export type Checklist_definitionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Checklist_definitionCountOutputTypeSelect<ExtArgs> | null;
};
export type Checklist_definitionCountOutputTypeCountChecklist_progressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.checklist_progressWhereInput;
};
export type checklist_definitionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    title?: boolean;
    stage_code?: boolean;
    items?: boolean;
    points_reward?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    checklist_progress?: boolean | Prisma.checklist_definition$checklist_progressArgs<ExtArgs>;
    _count?: boolean | Prisma.Checklist_definitionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["checklist_definition"]>;
export type checklist_definitionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    title?: boolean;
    stage_code?: boolean;
    items?: boolean;
    points_reward?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["checklist_definition"]>;
export type checklist_definitionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    title?: boolean;
    stage_code?: boolean;
    items?: boolean;
    points_reward?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["checklist_definition"]>;
export type checklist_definitionSelectScalar = {
    id?: boolean;
    code?: boolean;
    title?: boolean;
    stage_code?: boolean;
    items?: boolean;
    points_reward?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type checklist_definitionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "title" | "stage_code" | "items" | "points_reward" | "is_active" | "created_at", ExtArgs["result"]["checklist_definition"]>;
export type checklist_definitionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    checklist_progress?: boolean | Prisma.checklist_definition$checklist_progressArgs<ExtArgs>;
    _count?: boolean | Prisma.Checklist_definitionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type checklist_definitionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type checklist_definitionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $checklist_definitionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "checklist_definition";
    objects: {
        checklist_progress: Prisma.$checklist_progressPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        title: string;
        stage_code: string | null;
        items: runtime.JsonValue;
        points_reward: number;
        is_active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["checklist_definition"]>;
    composites: {};
};
export type checklist_definitionGetPayload<S extends boolean | null | undefined | checklist_definitionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$checklist_definitionPayload, S>;
export type checklist_definitionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<checklist_definitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Checklist_definitionCountAggregateInputType | true;
};
export interface checklist_definitionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['checklist_definition'];
        meta: {
            name: 'checklist_definition';
        };
    };
    findUnique<T extends checklist_definitionFindUniqueArgs>(args: Prisma.SelectSubset<T, checklist_definitionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__checklist_definitionClient<runtime.Types.Result.GetResult<Prisma.$checklist_definitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends checklist_definitionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, checklist_definitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__checklist_definitionClient<runtime.Types.Result.GetResult<Prisma.$checklist_definitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends checklist_definitionFindFirstArgs>(args?: Prisma.SelectSubset<T, checklist_definitionFindFirstArgs<ExtArgs>>): Prisma.Prisma__checklist_definitionClient<runtime.Types.Result.GetResult<Prisma.$checklist_definitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends checklist_definitionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, checklist_definitionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__checklist_definitionClient<runtime.Types.Result.GetResult<Prisma.$checklist_definitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends checklist_definitionFindManyArgs>(args?: Prisma.SelectSubset<T, checklist_definitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$checklist_definitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends checklist_definitionCreateArgs>(args: Prisma.SelectSubset<T, checklist_definitionCreateArgs<ExtArgs>>): Prisma.Prisma__checklist_definitionClient<runtime.Types.Result.GetResult<Prisma.$checklist_definitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends checklist_definitionCreateManyArgs>(args?: Prisma.SelectSubset<T, checklist_definitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends checklist_definitionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, checklist_definitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$checklist_definitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends checklist_definitionDeleteArgs>(args: Prisma.SelectSubset<T, checklist_definitionDeleteArgs<ExtArgs>>): Prisma.Prisma__checklist_definitionClient<runtime.Types.Result.GetResult<Prisma.$checklist_definitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends checklist_definitionUpdateArgs>(args: Prisma.SelectSubset<T, checklist_definitionUpdateArgs<ExtArgs>>): Prisma.Prisma__checklist_definitionClient<runtime.Types.Result.GetResult<Prisma.$checklist_definitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends checklist_definitionDeleteManyArgs>(args?: Prisma.SelectSubset<T, checklist_definitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends checklist_definitionUpdateManyArgs>(args: Prisma.SelectSubset<T, checklist_definitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends checklist_definitionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, checklist_definitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$checklist_definitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends checklist_definitionUpsertArgs>(args: Prisma.SelectSubset<T, checklist_definitionUpsertArgs<ExtArgs>>): Prisma.Prisma__checklist_definitionClient<runtime.Types.Result.GetResult<Prisma.$checklist_definitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends checklist_definitionCountArgs>(args?: Prisma.Subset<T, checklist_definitionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Checklist_definitionCountAggregateOutputType> : number>;
    aggregate<T extends Checklist_definitionAggregateArgs>(args: Prisma.Subset<T, Checklist_definitionAggregateArgs>): Prisma.PrismaPromise<GetChecklist_definitionAggregateType<T>>;
    groupBy<T extends checklist_definitionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: checklist_definitionGroupByArgs['orderBy'];
    } : {
        orderBy?: checklist_definitionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, checklist_definitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklist_definitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: checklist_definitionFieldRefs;
}
export interface Prisma__checklist_definitionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    checklist_progress<T extends Prisma.checklist_definition$checklist_progressArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.checklist_definition$checklist_progressArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$checklist_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface checklist_definitionFieldRefs {
    readonly id: Prisma.FieldRef<"checklist_definition", 'String'>;
    readonly code: Prisma.FieldRef<"checklist_definition", 'String'>;
    readonly title: Prisma.FieldRef<"checklist_definition", 'String'>;
    readonly stage_code: Prisma.FieldRef<"checklist_definition", 'String'>;
    readonly items: Prisma.FieldRef<"checklist_definition", 'Json'>;
    readonly points_reward: Prisma.FieldRef<"checklist_definition", 'Int'>;
    readonly is_active: Prisma.FieldRef<"checklist_definition", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"checklist_definition", 'DateTime'>;
}
export type checklist_definitionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_definitionSelect<ExtArgs> | null;
    omit?: Prisma.checklist_definitionOmit<ExtArgs> | null;
    include?: Prisma.checklist_definitionInclude<ExtArgs> | null;
    where: Prisma.checklist_definitionWhereUniqueInput;
};
export type checklist_definitionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_definitionSelect<ExtArgs> | null;
    omit?: Prisma.checklist_definitionOmit<ExtArgs> | null;
    include?: Prisma.checklist_definitionInclude<ExtArgs> | null;
    where: Prisma.checklist_definitionWhereUniqueInput;
};
export type checklist_definitionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_definitionSelect<ExtArgs> | null;
    omit?: Prisma.checklist_definitionOmit<ExtArgs> | null;
    include?: Prisma.checklist_definitionInclude<ExtArgs> | null;
    where?: Prisma.checklist_definitionWhereInput;
    orderBy?: Prisma.checklist_definitionOrderByWithRelationInput | Prisma.checklist_definitionOrderByWithRelationInput[];
    cursor?: Prisma.checklist_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Checklist_definitionScalarFieldEnum | Prisma.Checklist_definitionScalarFieldEnum[];
};
export type checklist_definitionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_definitionSelect<ExtArgs> | null;
    omit?: Prisma.checklist_definitionOmit<ExtArgs> | null;
    include?: Prisma.checklist_definitionInclude<ExtArgs> | null;
    where?: Prisma.checklist_definitionWhereInput;
    orderBy?: Prisma.checklist_definitionOrderByWithRelationInput | Prisma.checklist_definitionOrderByWithRelationInput[];
    cursor?: Prisma.checklist_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Checklist_definitionScalarFieldEnum | Prisma.Checklist_definitionScalarFieldEnum[];
};
export type checklist_definitionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_definitionSelect<ExtArgs> | null;
    omit?: Prisma.checklist_definitionOmit<ExtArgs> | null;
    include?: Prisma.checklist_definitionInclude<ExtArgs> | null;
    where?: Prisma.checklist_definitionWhereInput;
    orderBy?: Prisma.checklist_definitionOrderByWithRelationInput | Prisma.checklist_definitionOrderByWithRelationInput[];
    cursor?: Prisma.checklist_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Checklist_definitionScalarFieldEnum | Prisma.Checklist_definitionScalarFieldEnum[];
};
export type checklist_definitionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_definitionSelect<ExtArgs> | null;
    omit?: Prisma.checklist_definitionOmit<ExtArgs> | null;
    include?: Prisma.checklist_definitionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.checklist_definitionCreateInput, Prisma.checklist_definitionUncheckedCreateInput>;
};
export type checklist_definitionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.checklist_definitionCreateManyInput | Prisma.checklist_definitionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type checklist_definitionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_definitionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.checklist_definitionOmit<ExtArgs> | null;
    data: Prisma.checklist_definitionCreateManyInput | Prisma.checklist_definitionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type checklist_definitionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_definitionSelect<ExtArgs> | null;
    omit?: Prisma.checklist_definitionOmit<ExtArgs> | null;
    include?: Prisma.checklist_definitionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.checklist_definitionUpdateInput, Prisma.checklist_definitionUncheckedUpdateInput>;
    where: Prisma.checklist_definitionWhereUniqueInput;
};
export type checklist_definitionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.checklist_definitionUpdateManyMutationInput, Prisma.checklist_definitionUncheckedUpdateManyInput>;
    where?: Prisma.checklist_definitionWhereInput;
    limit?: number;
};
export type checklist_definitionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_definitionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.checklist_definitionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.checklist_definitionUpdateManyMutationInput, Prisma.checklist_definitionUncheckedUpdateManyInput>;
    where?: Prisma.checklist_definitionWhereInput;
    limit?: number;
};
export type checklist_definitionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_definitionSelect<ExtArgs> | null;
    omit?: Prisma.checklist_definitionOmit<ExtArgs> | null;
    include?: Prisma.checklist_definitionInclude<ExtArgs> | null;
    where: Prisma.checklist_definitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.checklist_definitionCreateInput, Prisma.checklist_definitionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.checklist_definitionUpdateInput, Prisma.checklist_definitionUncheckedUpdateInput>;
};
export type checklist_definitionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_definitionSelect<ExtArgs> | null;
    omit?: Prisma.checklist_definitionOmit<ExtArgs> | null;
    include?: Prisma.checklist_definitionInclude<ExtArgs> | null;
    where: Prisma.checklist_definitionWhereUniqueInput;
};
export type checklist_definitionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.checklist_definitionWhereInput;
    limit?: number;
};
export type checklist_definition$checklist_progressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_progressSelect<ExtArgs> | null;
    omit?: Prisma.checklist_progressOmit<ExtArgs> | null;
    include?: Prisma.checklist_progressInclude<ExtArgs> | null;
    where?: Prisma.checklist_progressWhereInput;
    orderBy?: Prisma.checklist_progressOrderByWithRelationInput | Prisma.checklist_progressOrderByWithRelationInput[];
    cursor?: Prisma.checklist_progressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Checklist_progressScalarFieldEnum | Prisma.Checklist_progressScalarFieldEnum[];
};
export type checklist_definitionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_definitionSelect<ExtArgs> | null;
    omit?: Prisma.checklist_definitionOmit<ExtArgs> | null;
    include?: Prisma.checklist_definitionInclude<ExtArgs> | null;
};
