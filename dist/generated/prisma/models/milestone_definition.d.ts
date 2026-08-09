import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type milestone_definitionModel = runtime.Types.Result.DefaultSelection<Prisma.$milestone_definitionPayload>;
export type AggregateMilestone_definition = {
    _count: Milestone_definitionCountAggregateOutputType | null;
    _avg: Milestone_definitionAvgAggregateOutputType | null;
    _sum: Milestone_definitionSumAggregateOutputType | null;
    _min: Milestone_definitionMinAggregateOutputType | null;
    _max: Milestone_definitionMaxAggregateOutputType | null;
};
export type Milestone_definitionAvgAggregateOutputType = {
    milestone_order: number | null;
    points_reward: number | null;
};
export type Milestone_definitionSumAggregateOutputType = {
    milestone_order: number | null;
    points_reward: number | null;
};
export type Milestone_definitionMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    title: string | null;
    description: string | null;
    milestone_order: number | null;
    points_reward: number | null;
    badge_image_url: string | null;
    celebration_image_url: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Milestone_definitionMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    title: string | null;
    description: string | null;
    milestone_order: number | null;
    points_reward: number | null;
    badge_image_url: string | null;
    celebration_image_url: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Milestone_definitionCountAggregateOutputType = {
    id: number;
    code: number;
    title: number;
    description: number;
    milestone_order: number;
    criteria: number;
    points_reward: number;
    badge_image_url: number;
    celebration_image_url: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type Milestone_definitionAvgAggregateInputType = {
    milestone_order?: true;
    points_reward?: true;
};
export type Milestone_definitionSumAggregateInputType = {
    milestone_order?: true;
    points_reward?: true;
};
export type Milestone_definitionMinAggregateInputType = {
    id?: true;
    code?: true;
    title?: true;
    description?: true;
    milestone_order?: true;
    points_reward?: true;
    badge_image_url?: true;
    celebration_image_url?: true;
    is_active?: true;
    created_at?: true;
};
export type Milestone_definitionMaxAggregateInputType = {
    id?: true;
    code?: true;
    title?: true;
    description?: true;
    milestone_order?: true;
    points_reward?: true;
    badge_image_url?: true;
    celebration_image_url?: true;
    is_active?: true;
    created_at?: true;
};
export type Milestone_definitionCountAggregateInputType = {
    id?: true;
    code?: true;
    title?: true;
    description?: true;
    milestone_order?: true;
    criteria?: true;
    points_reward?: true;
    badge_image_url?: true;
    celebration_image_url?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type Milestone_definitionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.milestone_definitionWhereInput;
    orderBy?: Prisma.milestone_definitionOrderByWithRelationInput | Prisma.milestone_definitionOrderByWithRelationInput[];
    cursor?: Prisma.milestone_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Milestone_definitionCountAggregateInputType;
    _avg?: Milestone_definitionAvgAggregateInputType;
    _sum?: Milestone_definitionSumAggregateInputType;
    _min?: Milestone_definitionMinAggregateInputType;
    _max?: Milestone_definitionMaxAggregateInputType;
};
export type GetMilestone_definitionAggregateType<T extends Milestone_definitionAggregateArgs> = {
    [P in keyof T & keyof AggregateMilestone_definition]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMilestone_definition[P]> : Prisma.GetScalarType<T[P], AggregateMilestone_definition[P]>;
};
export type milestone_definitionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.milestone_definitionWhereInput;
    orderBy?: Prisma.milestone_definitionOrderByWithAggregationInput | Prisma.milestone_definitionOrderByWithAggregationInput[];
    by: Prisma.Milestone_definitionScalarFieldEnum[] | Prisma.Milestone_definitionScalarFieldEnum;
    having?: Prisma.milestone_definitionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Milestone_definitionCountAggregateInputType | true;
    _avg?: Milestone_definitionAvgAggregateInputType;
    _sum?: Milestone_definitionSumAggregateInputType;
    _min?: Milestone_definitionMinAggregateInputType;
    _max?: Milestone_definitionMaxAggregateInputType;
};
export type Milestone_definitionGroupByOutputType = {
    id: string;
    code: string;
    title: string;
    description: string | null;
    milestone_order: number;
    criteria: runtime.JsonValue;
    points_reward: number;
    badge_image_url: string | null;
    celebration_image_url: string | null;
    is_active: boolean;
    created_at: Date;
    _count: Milestone_definitionCountAggregateOutputType | null;
    _avg: Milestone_definitionAvgAggregateOutputType | null;
    _sum: Milestone_definitionSumAggregateOutputType | null;
    _min: Milestone_definitionMinAggregateOutputType | null;
    _max: Milestone_definitionMaxAggregateOutputType | null;
};
export type GetMilestone_definitionGroupByPayload<T extends milestone_definitionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Milestone_definitionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Milestone_definitionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Milestone_definitionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Milestone_definitionGroupByOutputType[P]>;
}>>;
export type milestone_definitionWhereInput = {
    AND?: Prisma.milestone_definitionWhereInput | Prisma.milestone_definitionWhereInput[];
    OR?: Prisma.milestone_definitionWhereInput[];
    NOT?: Prisma.milestone_definitionWhereInput | Prisma.milestone_definitionWhereInput[];
    id?: Prisma.UuidFilter<"milestone_definition"> | string;
    code?: Prisma.StringFilter<"milestone_definition"> | string;
    title?: Prisma.StringFilter<"milestone_definition"> | string;
    description?: Prisma.StringNullableFilter<"milestone_definition"> | string | null;
    milestone_order?: Prisma.IntFilter<"milestone_definition"> | number;
    criteria?: Prisma.JsonFilter<"milestone_definition">;
    points_reward?: Prisma.IntFilter<"milestone_definition"> | number;
    badge_image_url?: Prisma.StringNullableFilter<"milestone_definition"> | string | null;
    celebration_image_url?: Prisma.StringNullableFilter<"milestone_definition"> | string | null;
    is_active?: Prisma.BoolFilter<"milestone_definition"> | boolean;
    created_at?: Prisma.DateTimeFilter<"milestone_definition"> | Date | string;
    milestone_progress?: Prisma.Milestone_progressListRelationFilter;
};
export type milestone_definitionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    milestone_order?: Prisma.SortOrder;
    criteria?: Prisma.SortOrder;
    points_reward?: Prisma.SortOrder;
    badge_image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    celebration_image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    milestone_progress?: Prisma.milestone_progressOrderByRelationAggregateInput;
};
export type milestone_definitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.milestone_definitionWhereInput | Prisma.milestone_definitionWhereInput[];
    OR?: Prisma.milestone_definitionWhereInput[];
    NOT?: Prisma.milestone_definitionWhereInput | Prisma.milestone_definitionWhereInput[];
    title?: Prisma.StringFilter<"milestone_definition"> | string;
    description?: Prisma.StringNullableFilter<"milestone_definition"> | string | null;
    milestone_order?: Prisma.IntFilter<"milestone_definition"> | number;
    criteria?: Prisma.JsonFilter<"milestone_definition">;
    points_reward?: Prisma.IntFilter<"milestone_definition"> | number;
    badge_image_url?: Prisma.StringNullableFilter<"milestone_definition"> | string | null;
    celebration_image_url?: Prisma.StringNullableFilter<"milestone_definition"> | string | null;
    is_active?: Prisma.BoolFilter<"milestone_definition"> | boolean;
    created_at?: Prisma.DateTimeFilter<"milestone_definition"> | Date | string;
    milestone_progress?: Prisma.Milestone_progressListRelationFilter;
}, "id" | "code">;
export type milestone_definitionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    milestone_order?: Prisma.SortOrder;
    criteria?: Prisma.SortOrder;
    points_reward?: Prisma.SortOrder;
    badge_image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    celebration_image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.milestone_definitionCountOrderByAggregateInput;
    _avg?: Prisma.milestone_definitionAvgOrderByAggregateInput;
    _max?: Prisma.milestone_definitionMaxOrderByAggregateInput;
    _min?: Prisma.milestone_definitionMinOrderByAggregateInput;
    _sum?: Prisma.milestone_definitionSumOrderByAggregateInput;
};
export type milestone_definitionScalarWhereWithAggregatesInput = {
    AND?: Prisma.milestone_definitionScalarWhereWithAggregatesInput | Prisma.milestone_definitionScalarWhereWithAggregatesInput[];
    OR?: Prisma.milestone_definitionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.milestone_definitionScalarWhereWithAggregatesInput | Prisma.milestone_definitionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"milestone_definition"> | string;
    code?: Prisma.StringWithAggregatesFilter<"milestone_definition"> | string;
    title?: Prisma.StringWithAggregatesFilter<"milestone_definition"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"milestone_definition"> | string | null;
    milestone_order?: Prisma.IntWithAggregatesFilter<"milestone_definition"> | number;
    criteria?: Prisma.JsonWithAggregatesFilter<"milestone_definition">;
    points_reward?: Prisma.IntWithAggregatesFilter<"milestone_definition"> | number;
    badge_image_url?: Prisma.StringNullableWithAggregatesFilter<"milestone_definition"> | string | null;
    celebration_image_url?: Prisma.StringNullableWithAggregatesFilter<"milestone_definition"> | string | null;
    is_active?: Prisma.BoolWithAggregatesFilter<"milestone_definition"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"milestone_definition"> | Date | string;
};
export type milestone_definitionCreateInput = {
    id?: string;
    code: string;
    title: string;
    description?: string | null;
    milestone_order: number;
    criteria: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: number;
    badge_image_url?: string | null;
    celebration_image_url?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    milestone_progress?: Prisma.milestone_progressCreateNestedManyWithoutMilestone_definitionInput;
};
export type milestone_definitionUncheckedCreateInput = {
    id?: string;
    code: string;
    title: string;
    description?: string | null;
    milestone_order: number;
    criteria: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: number;
    badge_image_url?: string | null;
    celebration_image_url?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    milestone_progress?: Prisma.milestone_progressUncheckedCreateNestedManyWithoutMilestone_definitionInput;
};
export type milestone_definitionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    milestone_order?: Prisma.IntFieldUpdateOperationsInput | number;
    criteria?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: Prisma.IntFieldUpdateOperationsInput | number;
    badge_image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celebration_image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    milestone_progress?: Prisma.milestone_progressUpdateManyWithoutMilestone_definitionNestedInput;
};
export type milestone_definitionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    milestone_order?: Prisma.IntFieldUpdateOperationsInput | number;
    criteria?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: Prisma.IntFieldUpdateOperationsInput | number;
    badge_image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celebration_image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    milestone_progress?: Prisma.milestone_progressUncheckedUpdateManyWithoutMilestone_definitionNestedInput;
};
export type milestone_definitionCreateManyInput = {
    id?: string;
    code: string;
    title: string;
    description?: string | null;
    milestone_order: number;
    criteria: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: number;
    badge_image_url?: string | null;
    celebration_image_url?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
};
export type milestone_definitionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    milestone_order?: Prisma.IntFieldUpdateOperationsInput | number;
    criteria?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: Prisma.IntFieldUpdateOperationsInput | number;
    badge_image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celebration_image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type milestone_definitionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    milestone_order?: Prisma.IntFieldUpdateOperationsInput | number;
    criteria?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: Prisma.IntFieldUpdateOperationsInput | number;
    badge_image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celebration_image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type milestone_definitionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    milestone_order?: Prisma.SortOrder;
    criteria?: Prisma.SortOrder;
    points_reward?: Prisma.SortOrder;
    badge_image_url?: Prisma.SortOrder;
    celebration_image_url?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type milestone_definitionAvgOrderByAggregateInput = {
    milestone_order?: Prisma.SortOrder;
    points_reward?: Prisma.SortOrder;
};
export type milestone_definitionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    milestone_order?: Prisma.SortOrder;
    points_reward?: Prisma.SortOrder;
    badge_image_url?: Prisma.SortOrder;
    celebration_image_url?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type milestone_definitionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    milestone_order?: Prisma.SortOrder;
    points_reward?: Prisma.SortOrder;
    badge_image_url?: Prisma.SortOrder;
    celebration_image_url?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type milestone_definitionSumOrderByAggregateInput = {
    milestone_order?: Prisma.SortOrder;
    points_reward?: Prisma.SortOrder;
};
export type Milestone_definitionScalarRelationFilter = {
    is?: Prisma.milestone_definitionWhereInput;
    isNot?: Prisma.milestone_definitionWhereInput;
};
export type milestone_definitionCreateNestedOneWithoutMilestone_progressInput = {
    create?: Prisma.XOR<Prisma.milestone_definitionCreateWithoutMilestone_progressInput, Prisma.milestone_definitionUncheckedCreateWithoutMilestone_progressInput>;
    connectOrCreate?: Prisma.milestone_definitionCreateOrConnectWithoutMilestone_progressInput;
    connect?: Prisma.milestone_definitionWhereUniqueInput;
};
export type milestone_definitionUpdateOneRequiredWithoutMilestone_progressNestedInput = {
    create?: Prisma.XOR<Prisma.milestone_definitionCreateWithoutMilestone_progressInput, Prisma.milestone_definitionUncheckedCreateWithoutMilestone_progressInput>;
    connectOrCreate?: Prisma.milestone_definitionCreateOrConnectWithoutMilestone_progressInput;
    upsert?: Prisma.milestone_definitionUpsertWithoutMilestone_progressInput;
    connect?: Prisma.milestone_definitionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.milestone_definitionUpdateToOneWithWhereWithoutMilestone_progressInput, Prisma.milestone_definitionUpdateWithoutMilestone_progressInput>, Prisma.milestone_definitionUncheckedUpdateWithoutMilestone_progressInput>;
};
export type milestone_definitionCreateWithoutMilestone_progressInput = {
    id?: string;
    code: string;
    title: string;
    description?: string | null;
    milestone_order: number;
    criteria: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: number;
    badge_image_url?: string | null;
    celebration_image_url?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
};
export type milestone_definitionUncheckedCreateWithoutMilestone_progressInput = {
    id?: string;
    code: string;
    title: string;
    description?: string | null;
    milestone_order: number;
    criteria: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: number;
    badge_image_url?: string | null;
    celebration_image_url?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
};
export type milestone_definitionCreateOrConnectWithoutMilestone_progressInput = {
    where: Prisma.milestone_definitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.milestone_definitionCreateWithoutMilestone_progressInput, Prisma.milestone_definitionUncheckedCreateWithoutMilestone_progressInput>;
};
export type milestone_definitionUpsertWithoutMilestone_progressInput = {
    update: Prisma.XOR<Prisma.milestone_definitionUpdateWithoutMilestone_progressInput, Prisma.milestone_definitionUncheckedUpdateWithoutMilestone_progressInput>;
    create: Prisma.XOR<Prisma.milestone_definitionCreateWithoutMilestone_progressInput, Prisma.milestone_definitionUncheckedCreateWithoutMilestone_progressInput>;
    where?: Prisma.milestone_definitionWhereInput;
};
export type milestone_definitionUpdateToOneWithWhereWithoutMilestone_progressInput = {
    where?: Prisma.milestone_definitionWhereInput;
    data: Prisma.XOR<Prisma.milestone_definitionUpdateWithoutMilestone_progressInput, Prisma.milestone_definitionUncheckedUpdateWithoutMilestone_progressInput>;
};
export type milestone_definitionUpdateWithoutMilestone_progressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    milestone_order?: Prisma.IntFieldUpdateOperationsInput | number;
    criteria?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: Prisma.IntFieldUpdateOperationsInput | number;
    badge_image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celebration_image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type milestone_definitionUncheckedUpdateWithoutMilestone_progressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    milestone_order?: Prisma.IntFieldUpdateOperationsInput | number;
    criteria?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    points_reward?: Prisma.IntFieldUpdateOperationsInput | number;
    badge_image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    celebration_image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Milestone_definitionCountOutputType = {
    milestone_progress: number;
};
export type Milestone_definitionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    milestone_progress?: boolean | Milestone_definitionCountOutputTypeCountMilestone_progressArgs;
};
export type Milestone_definitionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Milestone_definitionCountOutputTypeSelect<ExtArgs> | null;
};
export type Milestone_definitionCountOutputTypeCountMilestone_progressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.milestone_progressWhereInput;
};
export type milestone_definitionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    title?: boolean;
    description?: boolean;
    milestone_order?: boolean;
    criteria?: boolean;
    points_reward?: boolean;
    badge_image_url?: boolean;
    celebration_image_url?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    milestone_progress?: boolean | Prisma.milestone_definition$milestone_progressArgs<ExtArgs>;
    _count?: boolean | Prisma.Milestone_definitionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["milestone_definition"]>;
export type milestone_definitionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    title?: boolean;
    description?: boolean;
    milestone_order?: boolean;
    criteria?: boolean;
    points_reward?: boolean;
    badge_image_url?: boolean;
    celebration_image_url?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["milestone_definition"]>;
export type milestone_definitionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    title?: boolean;
    description?: boolean;
    milestone_order?: boolean;
    criteria?: boolean;
    points_reward?: boolean;
    badge_image_url?: boolean;
    celebration_image_url?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["milestone_definition"]>;
export type milestone_definitionSelectScalar = {
    id?: boolean;
    code?: boolean;
    title?: boolean;
    description?: boolean;
    milestone_order?: boolean;
    criteria?: boolean;
    points_reward?: boolean;
    badge_image_url?: boolean;
    celebration_image_url?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type milestone_definitionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "title" | "description" | "milestone_order" | "criteria" | "points_reward" | "badge_image_url" | "celebration_image_url" | "is_active" | "created_at", ExtArgs["result"]["milestone_definition"]>;
export type milestone_definitionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    milestone_progress?: boolean | Prisma.milestone_definition$milestone_progressArgs<ExtArgs>;
    _count?: boolean | Prisma.Milestone_definitionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type milestone_definitionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type milestone_definitionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $milestone_definitionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "milestone_definition";
    objects: {
        milestone_progress: Prisma.$milestone_progressPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        title: string;
        description: string | null;
        milestone_order: number;
        criteria: runtime.JsonValue;
        points_reward: number;
        badge_image_url: string | null;
        celebration_image_url: string | null;
        is_active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["milestone_definition"]>;
    composites: {};
};
export type milestone_definitionGetPayload<S extends boolean | null | undefined | milestone_definitionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$milestone_definitionPayload, S>;
export type milestone_definitionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<milestone_definitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Milestone_definitionCountAggregateInputType | true;
};
export interface milestone_definitionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['milestone_definition'];
        meta: {
            name: 'milestone_definition';
        };
    };
    findUnique<T extends milestone_definitionFindUniqueArgs>(args: Prisma.SelectSubset<T, milestone_definitionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__milestone_definitionClient<runtime.Types.Result.GetResult<Prisma.$milestone_definitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends milestone_definitionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, milestone_definitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__milestone_definitionClient<runtime.Types.Result.GetResult<Prisma.$milestone_definitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends milestone_definitionFindFirstArgs>(args?: Prisma.SelectSubset<T, milestone_definitionFindFirstArgs<ExtArgs>>): Prisma.Prisma__milestone_definitionClient<runtime.Types.Result.GetResult<Prisma.$milestone_definitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends milestone_definitionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, milestone_definitionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__milestone_definitionClient<runtime.Types.Result.GetResult<Prisma.$milestone_definitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends milestone_definitionFindManyArgs>(args?: Prisma.SelectSubset<T, milestone_definitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$milestone_definitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends milestone_definitionCreateArgs>(args: Prisma.SelectSubset<T, milestone_definitionCreateArgs<ExtArgs>>): Prisma.Prisma__milestone_definitionClient<runtime.Types.Result.GetResult<Prisma.$milestone_definitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends milestone_definitionCreateManyArgs>(args?: Prisma.SelectSubset<T, milestone_definitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends milestone_definitionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, milestone_definitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$milestone_definitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends milestone_definitionDeleteArgs>(args: Prisma.SelectSubset<T, milestone_definitionDeleteArgs<ExtArgs>>): Prisma.Prisma__milestone_definitionClient<runtime.Types.Result.GetResult<Prisma.$milestone_definitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends milestone_definitionUpdateArgs>(args: Prisma.SelectSubset<T, milestone_definitionUpdateArgs<ExtArgs>>): Prisma.Prisma__milestone_definitionClient<runtime.Types.Result.GetResult<Prisma.$milestone_definitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends milestone_definitionDeleteManyArgs>(args?: Prisma.SelectSubset<T, milestone_definitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends milestone_definitionUpdateManyArgs>(args: Prisma.SelectSubset<T, milestone_definitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends milestone_definitionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, milestone_definitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$milestone_definitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends milestone_definitionUpsertArgs>(args: Prisma.SelectSubset<T, milestone_definitionUpsertArgs<ExtArgs>>): Prisma.Prisma__milestone_definitionClient<runtime.Types.Result.GetResult<Prisma.$milestone_definitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends milestone_definitionCountArgs>(args?: Prisma.Subset<T, milestone_definitionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Milestone_definitionCountAggregateOutputType> : number>;
    aggregate<T extends Milestone_definitionAggregateArgs>(args: Prisma.Subset<T, Milestone_definitionAggregateArgs>): Prisma.PrismaPromise<GetMilestone_definitionAggregateType<T>>;
    groupBy<T extends milestone_definitionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: milestone_definitionGroupByArgs['orderBy'];
    } : {
        orderBy?: milestone_definitionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, milestone_definitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestone_definitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: milestone_definitionFieldRefs;
}
export interface Prisma__milestone_definitionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    milestone_progress<T extends Prisma.milestone_definition$milestone_progressArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.milestone_definition$milestone_progressArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$milestone_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface milestone_definitionFieldRefs {
    readonly id: Prisma.FieldRef<"milestone_definition", 'String'>;
    readonly code: Prisma.FieldRef<"milestone_definition", 'String'>;
    readonly title: Prisma.FieldRef<"milestone_definition", 'String'>;
    readonly description: Prisma.FieldRef<"milestone_definition", 'String'>;
    readonly milestone_order: Prisma.FieldRef<"milestone_definition", 'Int'>;
    readonly criteria: Prisma.FieldRef<"milestone_definition", 'Json'>;
    readonly points_reward: Prisma.FieldRef<"milestone_definition", 'Int'>;
    readonly badge_image_url: Prisma.FieldRef<"milestone_definition", 'String'>;
    readonly celebration_image_url: Prisma.FieldRef<"milestone_definition", 'String'>;
    readonly is_active: Prisma.FieldRef<"milestone_definition", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"milestone_definition", 'DateTime'>;
}
export type milestone_definitionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_definitionSelect<ExtArgs> | null;
    omit?: Prisma.milestone_definitionOmit<ExtArgs> | null;
    include?: Prisma.milestone_definitionInclude<ExtArgs> | null;
    where: Prisma.milestone_definitionWhereUniqueInput;
};
export type milestone_definitionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_definitionSelect<ExtArgs> | null;
    omit?: Prisma.milestone_definitionOmit<ExtArgs> | null;
    include?: Prisma.milestone_definitionInclude<ExtArgs> | null;
    where: Prisma.milestone_definitionWhereUniqueInput;
};
export type milestone_definitionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_definitionSelect<ExtArgs> | null;
    omit?: Prisma.milestone_definitionOmit<ExtArgs> | null;
    include?: Prisma.milestone_definitionInclude<ExtArgs> | null;
    where?: Prisma.milestone_definitionWhereInput;
    orderBy?: Prisma.milestone_definitionOrderByWithRelationInput | Prisma.milestone_definitionOrderByWithRelationInput[];
    cursor?: Prisma.milestone_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Milestone_definitionScalarFieldEnum | Prisma.Milestone_definitionScalarFieldEnum[];
};
export type milestone_definitionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_definitionSelect<ExtArgs> | null;
    omit?: Prisma.milestone_definitionOmit<ExtArgs> | null;
    include?: Prisma.milestone_definitionInclude<ExtArgs> | null;
    where?: Prisma.milestone_definitionWhereInput;
    orderBy?: Prisma.milestone_definitionOrderByWithRelationInput | Prisma.milestone_definitionOrderByWithRelationInput[];
    cursor?: Prisma.milestone_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Milestone_definitionScalarFieldEnum | Prisma.Milestone_definitionScalarFieldEnum[];
};
export type milestone_definitionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_definitionSelect<ExtArgs> | null;
    omit?: Prisma.milestone_definitionOmit<ExtArgs> | null;
    include?: Prisma.milestone_definitionInclude<ExtArgs> | null;
    where?: Prisma.milestone_definitionWhereInput;
    orderBy?: Prisma.milestone_definitionOrderByWithRelationInput | Prisma.milestone_definitionOrderByWithRelationInput[];
    cursor?: Prisma.milestone_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Milestone_definitionScalarFieldEnum | Prisma.Milestone_definitionScalarFieldEnum[];
};
export type milestone_definitionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_definitionSelect<ExtArgs> | null;
    omit?: Prisma.milestone_definitionOmit<ExtArgs> | null;
    include?: Prisma.milestone_definitionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.milestone_definitionCreateInput, Prisma.milestone_definitionUncheckedCreateInput>;
};
export type milestone_definitionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.milestone_definitionCreateManyInput | Prisma.milestone_definitionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type milestone_definitionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_definitionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.milestone_definitionOmit<ExtArgs> | null;
    data: Prisma.milestone_definitionCreateManyInput | Prisma.milestone_definitionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type milestone_definitionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_definitionSelect<ExtArgs> | null;
    omit?: Prisma.milestone_definitionOmit<ExtArgs> | null;
    include?: Prisma.milestone_definitionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.milestone_definitionUpdateInput, Prisma.milestone_definitionUncheckedUpdateInput>;
    where: Prisma.milestone_definitionWhereUniqueInput;
};
export type milestone_definitionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.milestone_definitionUpdateManyMutationInput, Prisma.milestone_definitionUncheckedUpdateManyInput>;
    where?: Prisma.milestone_definitionWhereInput;
    limit?: number;
};
export type milestone_definitionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_definitionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.milestone_definitionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.milestone_definitionUpdateManyMutationInput, Prisma.milestone_definitionUncheckedUpdateManyInput>;
    where?: Prisma.milestone_definitionWhereInput;
    limit?: number;
};
export type milestone_definitionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_definitionSelect<ExtArgs> | null;
    omit?: Prisma.milestone_definitionOmit<ExtArgs> | null;
    include?: Prisma.milestone_definitionInclude<ExtArgs> | null;
    where: Prisma.milestone_definitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.milestone_definitionCreateInput, Prisma.milestone_definitionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.milestone_definitionUpdateInput, Prisma.milestone_definitionUncheckedUpdateInput>;
};
export type milestone_definitionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_definitionSelect<ExtArgs> | null;
    omit?: Prisma.milestone_definitionOmit<ExtArgs> | null;
    include?: Prisma.milestone_definitionInclude<ExtArgs> | null;
    where: Prisma.milestone_definitionWhereUniqueInput;
};
export type milestone_definitionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.milestone_definitionWhereInput;
    limit?: number;
};
export type milestone_definition$milestone_progressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_progressSelect<ExtArgs> | null;
    omit?: Prisma.milestone_progressOmit<ExtArgs> | null;
    include?: Prisma.milestone_progressInclude<ExtArgs> | null;
    where?: Prisma.milestone_progressWhereInput;
    orderBy?: Prisma.milestone_progressOrderByWithRelationInput | Prisma.milestone_progressOrderByWithRelationInput[];
    cursor?: Prisma.milestone_progressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Milestone_progressScalarFieldEnum | Prisma.Milestone_progressScalarFieldEnum[];
};
export type milestone_definitionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_definitionSelect<ExtArgs> | null;
    omit?: Prisma.milestone_definitionOmit<ExtArgs> | null;
    include?: Prisma.milestone_definitionInclude<ExtArgs> | null;
};
