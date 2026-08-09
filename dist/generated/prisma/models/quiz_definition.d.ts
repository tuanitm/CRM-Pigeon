import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type quiz_definitionModel = runtime.Types.Result.DefaultSelection<Prisma.$quiz_definitionPayload>;
export type AggregateQuiz_definition = {
    _count: Quiz_definitionCountAggregateOutputType | null;
    _min: Quiz_definitionMinAggregateOutputType | null;
    _max: Quiz_definitionMaxAggregateOutputType | null;
};
export type Quiz_definitionMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    title: string | null;
    description: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Quiz_definitionMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    title: string | null;
    description: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Quiz_definitionCountAggregateOutputType = {
    id: number;
    code: number;
    title: number;
    description: number;
    questions: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Quiz_definitionMinAggregateInputType = {
    id?: true;
    code?: true;
    title?: true;
    description?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Quiz_definitionMaxAggregateInputType = {
    id?: true;
    code?: true;
    title?: true;
    description?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Quiz_definitionCountAggregateInputType = {
    id?: true;
    code?: true;
    title?: true;
    description?: true;
    questions?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Quiz_definitionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_definitionWhereInput;
    orderBy?: Prisma.quiz_definitionOrderByWithRelationInput | Prisma.quiz_definitionOrderByWithRelationInput[];
    cursor?: Prisma.quiz_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Quiz_definitionCountAggregateInputType;
    _min?: Quiz_definitionMinAggregateInputType;
    _max?: Quiz_definitionMaxAggregateInputType;
};
export type GetQuiz_definitionAggregateType<T extends Quiz_definitionAggregateArgs> = {
    [P in keyof T & keyof AggregateQuiz_definition]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuiz_definition[P]> : Prisma.GetScalarType<T[P], AggregateQuiz_definition[P]>;
};
export type quiz_definitionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_definitionWhereInput;
    orderBy?: Prisma.quiz_definitionOrderByWithAggregationInput | Prisma.quiz_definitionOrderByWithAggregationInput[];
    by: Prisma.Quiz_definitionScalarFieldEnum[] | Prisma.Quiz_definitionScalarFieldEnum;
    having?: Prisma.quiz_definitionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Quiz_definitionCountAggregateInputType | true;
    _min?: Quiz_definitionMinAggregateInputType;
    _max?: Quiz_definitionMaxAggregateInputType;
};
export type Quiz_definitionGroupByOutputType = {
    id: string;
    code: string;
    title: string;
    description: string | null;
    questions: runtime.JsonValue;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: Quiz_definitionCountAggregateOutputType | null;
    _min: Quiz_definitionMinAggregateOutputType | null;
    _max: Quiz_definitionMaxAggregateOutputType | null;
};
export type GetQuiz_definitionGroupByPayload<T extends quiz_definitionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Quiz_definitionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Quiz_definitionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Quiz_definitionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Quiz_definitionGroupByOutputType[P]>;
}>>;
export type quiz_definitionWhereInput = {
    AND?: Prisma.quiz_definitionWhereInput | Prisma.quiz_definitionWhereInput[];
    OR?: Prisma.quiz_definitionWhereInput[];
    NOT?: Prisma.quiz_definitionWhereInput | Prisma.quiz_definitionWhereInput[];
    id?: Prisma.UuidFilter<"quiz_definition"> | string;
    code?: Prisma.StringFilter<"quiz_definition"> | string;
    title?: Prisma.StringFilter<"quiz_definition"> | string;
    description?: Prisma.StringNullableFilter<"quiz_definition"> | string | null;
    questions?: Prisma.JsonFilter<"quiz_definition">;
    is_active?: Prisma.BoolFilter<"quiz_definition"> | boolean;
    created_at?: Prisma.DateTimeFilter<"quiz_definition"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"quiz_definition"> | Date | string;
    quiz_response?: Prisma.Quiz_responseListRelationFilter;
};
export type quiz_definitionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    questions?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    quiz_response?: Prisma.quiz_responseOrderByRelationAggregateInput;
};
export type quiz_definitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.quiz_definitionWhereInput | Prisma.quiz_definitionWhereInput[];
    OR?: Prisma.quiz_definitionWhereInput[];
    NOT?: Prisma.quiz_definitionWhereInput | Prisma.quiz_definitionWhereInput[];
    title?: Prisma.StringFilter<"quiz_definition"> | string;
    description?: Prisma.StringNullableFilter<"quiz_definition"> | string | null;
    questions?: Prisma.JsonFilter<"quiz_definition">;
    is_active?: Prisma.BoolFilter<"quiz_definition"> | boolean;
    created_at?: Prisma.DateTimeFilter<"quiz_definition"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"quiz_definition"> | Date | string;
    quiz_response?: Prisma.Quiz_responseListRelationFilter;
}, "id" | "code">;
export type quiz_definitionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    questions?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.quiz_definitionCountOrderByAggregateInput;
    _max?: Prisma.quiz_definitionMaxOrderByAggregateInput;
    _min?: Prisma.quiz_definitionMinOrderByAggregateInput;
};
export type quiz_definitionScalarWhereWithAggregatesInput = {
    AND?: Prisma.quiz_definitionScalarWhereWithAggregatesInput | Prisma.quiz_definitionScalarWhereWithAggregatesInput[];
    OR?: Prisma.quiz_definitionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.quiz_definitionScalarWhereWithAggregatesInput | Prisma.quiz_definitionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"quiz_definition"> | string;
    code?: Prisma.StringWithAggregatesFilter<"quiz_definition"> | string;
    title?: Prisma.StringWithAggregatesFilter<"quiz_definition"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"quiz_definition"> | string | null;
    questions?: Prisma.JsonWithAggregatesFilter<"quiz_definition">;
    is_active?: Prisma.BoolWithAggregatesFilter<"quiz_definition"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"quiz_definition"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"quiz_definition"> | Date | string;
};
export type quiz_definitionCreateInput = {
    id?: string;
    code: string;
    title: string;
    description?: string | null;
    questions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    quiz_response?: Prisma.quiz_responseCreateNestedManyWithoutQuiz_definitionInput;
};
export type quiz_definitionUncheckedCreateInput = {
    id?: string;
    code: string;
    title: string;
    description?: string | null;
    questions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    quiz_response?: Prisma.quiz_responseUncheckedCreateNestedManyWithoutQuiz_definitionInput;
};
export type quiz_definitionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    questions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quiz_response?: Prisma.quiz_responseUpdateManyWithoutQuiz_definitionNestedInput;
};
export type quiz_definitionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    questions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quiz_response?: Prisma.quiz_responseUncheckedUpdateManyWithoutQuiz_definitionNestedInput;
};
export type quiz_definitionCreateManyInput = {
    id?: string;
    code: string;
    title: string;
    description?: string | null;
    questions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type quiz_definitionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    questions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type quiz_definitionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    questions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type quiz_definitionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    questions?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type quiz_definitionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type quiz_definitionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Quiz_definitionScalarRelationFilter = {
    is?: Prisma.quiz_definitionWhereInput;
    isNot?: Prisma.quiz_definitionWhereInput;
};
export type quiz_definitionCreateNestedOneWithoutQuiz_responseInput = {
    create?: Prisma.XOR<Prisma.quiz_definitionCreateWithoutQuiz_responseInput, Prisma.quiz_definitionUncheckedCreateWithoutQuiz_responseInput>;
    connectOrCreate?: Prisma.quiz_definitionCreateOrConnectWithoutQuiz_responseInput;
    connect?: Prisma.quiz_definitionWhereUniqueInput;
};
export type quiz_definitionUpdateOneRequiredWithoutQuiz_responseNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_definitionCreateWithoutQuiz_responseInput, Prisma.quiz_definitionUncheckedCreateWithoutQuiz_responseInput>;
    connectOrCreate?: Prisma.quiz_definitionCreateOrConnectWithoutQuiz_responseInput;
    upsert?: Prisma.quiz_definitionUpsertWithoutQuiz_responseInput;
    connect?: Prisma.quiz_definitionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.quiz_definitionUpdateToOneWithWhereWithoutQuiz_responseInput, Prisma.quiz_definitionUpdateWithoutQuiz_responseInput>, Prisma.quiz_definitionUncheckedUpdateWithoutQuiz_responseInput>;
};
export type quiz_definitionCreateWithoutQuiz_responseInput = {
    id?: string;
    code: string;
    title: string;
    description?: string | null;
    questions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type quiz_definitionUncheckedCreateWithoutQuiz_responseInput = {
    id?: string;
    code: string;
    title: string;
    description?: string | null;
    questions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type quiz_definitionCreateOrConnectWithoutQuiz_responseInput = {
    where: Prisma.quiz_definitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_definitionCreateWithoutQuiz_responseInput, Prisma.quiz_definitionUncheckedCreateWithoutQuiz_responseInput>;
};
export type quiz_definitionUpsertWithoutQuiz_responseInput = {
    update: Prisma.XOR<Prisma.quiz_definitionUpdateWithoutQuiz_responseInput, Prisma.quiz_definitionUncheckedUpdateWithoutQuiz_responseInput>;
    create: Prisma.XOR<Prisma.quiz_definitionCreateWithoutQuiz_responseInput, Prisma.quiz_definitionUncheckedCreateWithoutQuiz_responseInput>;
    where?: Prisma.quiz_definitionWhereInput;
};
export type quiz_definitionUpdateToOneWithWhereWithoutQuiz_responseInput = {
    where?: Prisma.quiz_definitionWhereInput;
    data: Prisma.XOR<Prisma.quiz_definitionUpdateWithoutQuiz_responseInput, Prisma.quiz_definitionUncheckedUpdateWithoutQuiz_responseInput>;
};
export type quiz_definitionUpdateWithoutQuiz_responseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    questions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type quiz_definitionUncheckedUpdateWithoutQuiz_responseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    questions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Quiz_definitionCountOutputType = {
    quiz_response: number;
};
export type Quiz_definitionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz_response?: boolean | Quiz_definitionCountOutputTypeCountQuiz_responseArgs;
};
export type Quiz_definitionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Quiz_definitionCountOutputTypeSelect<ExtArgs> | null;
};
export type Quiz_definitionCountOutputTypeCountQuiz_responseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_responseWhereInput;
};
export type quiz_definitionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    title?: boolean;
    description?: boolean;
    questions?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    quiz_response?: boolean | Prisma.quiz_definition$quiz_responseArgs<ExtArgs>;
    _count?: boolean | Prisma.Quiz_definitionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_definition"]>;
export type quiz_definitionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    title?: boolean;
    description?: boolean;
    questions?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["quiz_definition"]>;
export type quiz_definitionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    title?: boolean;
    description?: boolean;
    questions?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["quiz_definition"]>;
export type quiz_definitionSelectScalar = {
    id?: boolean;
    code?: boolean;
    title?: boolean;
    description?: boolean;
    questions?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type quiz_definitionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "title" | "description" | "questions" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["quiz_definition"]>;
export type quiz_definitionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    quiz_response?: boolean | Prisma.quiz_definition$quiz_responseArgs<ExtArgs>;
    _count?: boolean | Prisma.Quiz_definitionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type quiz_definitionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type quiz_definitionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $quiz_definitionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "quiz_definition";
    objects: {
        quiz_response: Prisma.$quiz_responsePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        title: string;
        description: string | null;
        questions: runtime.JsonValue;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["quiz_definition"]>;
    composites: {};
};
export type quiz_definitionGetPayload<S extends boolean | null | undefined | quiz_definitionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$quiz_definitionPayload, S>;
export type quiz_definitionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<quiz_definitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Quiz_definitionCountAggregateInputType | true;
};
export interface quiz_definitionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['quiz_definition'];
        meta: {
            name: 'quiz_definition';
        };
    };
    findUnique<T extends quiz_definitionFindUniqueArgs>(args: Prisma.SelectSubset<T, quiz_definitionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__quiz_definitionClient<runtime.Types.Result.GetResult<Prisma.$quiz_definitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends quiz_definitionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, quiz_definitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_definitionClient<runtime.Types.Result.GetResult<Prisma.$quiz_definitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends quiz_definitionFindFirstArgs>(args?: Prisma.SelectSubset<T, quiz_definitionFindFirstArgs<ExtArgs>>): Prisma.Prisma__quiz_definitionClient<runtime.Types.Result.GetResult<Prisma.$quiz_definitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends quiz_definitionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, quiz_definitionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_definitionClient<runtime.Types.Result.GetResult<Prisma.$quiz_definitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends quiz_definitionFindManyArgs>(args?: Prisma.SelectSubset<T, quiz_definitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_definitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends quiz_definitionCreateArgs>(args: Prisma.SelectSubset<T, quiz_definitionCreateArgs<ExtArgs>>): Prisma.Prisma__quiz_definitionClient<runtime.Types.Result.GetResult<Prisma.$quiz_definitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends quiz_definitionCreateManyArgs>(args?: Prisma.SelectSubset<T, quiz_definitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends quiz_definitionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, quiz_definitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_definitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends quiz_definitionDeleteArgs>(args: Prisma.SelectSubset<T, quiz_definitionDeleteArgs<ExtArgs>>): Prisma.Prisma__quiz_definitionClient<runtime.Types.Result.GetResult<Prisma.$quiz_definitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends quiz_definitionUpdateArgs>(args: Prisma.SelectSubset<T, quiz_definitionUpdateArgs<ExtArgs>>): Prisma.Prisma__quiz_definitionClient<runtime.Types.Result.GetResult<Prisma.$quiz_definitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends quiz_definitionDeleteManyArgs>(args?: Prisma.SelectSubset<T, quiz_definitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends quiz_definitionUpdateManyArgs>(args: Prisma.SelectSubset<T, quiz_definitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends quiz_definitionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, quiz_definitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_definitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends quiz_definitionUpsertArgs>(args: Prisma.SelectSubset<T, quiz_definitionUpsertArgs<ExtArgs>>): Prisma.Prisma__quiz_definitionClient<runtime.Types.Result.GetResult<Prisma.$quiz_definitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends quiz_definitionCountArgs>(args?: Prisma.Subset<T, quiz_definitionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Quiz_definitionCountAggregateOutputType> : number>;
    aggregate<T extends Quiz_definitionAggregateArgs>(args: Prisma.Subset<T, Quiz_definitionAggregateArgs>): Prisma.PrismaPromise<GetQuiz_definitionAggregateType<T>>;
    groupBy<T extends quiz_definitionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: quiz_definitionGroupByArgs['orderBy'];
    } : {
        orderBy?: quiz_definitionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, quiz_definitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuiz_definitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: quiz_definitionFieldRefs;
}
export interface Prisma__quiz_definitionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    quiz_response<T extends Prisma.quiz_definition$quiz_responseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quiz_definition$quiz_responseArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_responsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface quiz_definitionFieldRefs {
    readonly id: Prisma.FieldRef<"quiz_definition", 'String'>;
    readonly code: Prisma.FieldRef<"quiz_definition", 'String'>;
    readonly title: Prisma.FieldRef<"quiz_definition", 'String'>;
    readonly description: Prisma.FieldRef<"quiz_definition", 'String'>;
    readonly questions: Prisma.FieldRef<"quiz_definition", 'Json'>;
    readonly is_active: Prisma.FieldRef<"quiz_definition", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"quiz_definition", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"quiz_definition", 'DateTime'>;
}
export type quiz_definitionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_definitionSelect<ExtArgs> | null;
    omit?: Prisma.quiz_definitionOmit<ExtArgs> | null;
    include?: Prisma.quiz_definitionInclude<ExtArgs> | null;
    where: Prisma.quiz_definitionWhereUniqueInput;
};
export type quiz_definitionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_definitionSelect<ExtArgs> | null;
    omit?: Prisma.quiz_definitionOmit<ExtArgs> | null;
    include?: Prisma.quiz_definitionInclude<ExtArgs> | null;
    where: Prisma.quiz_definitionWhereUniqueInput;
};
export type quiz_definitionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_definitionSelect<ExtArgs> | null;
    omit?: Prisma.quiz_definitionOmit<ExtArgs> | null;
    include?: Prisma.quiz_definitionInclude<ExtArgs> | null;
    where?: Prisma.quiz_definitionWhereInput;
    orderBy?: Prisma.quiz_definitionOrderByWithRelationInput | Prisma.quiz_definitionOrderByWithRelationInput[];
    cursor?: Prisma.quiz_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_definitionScalarFieldEnum | Prisma.Quiz_definitionScalarFieldEnum[];
};
export type quiz_definitionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_definitionSelect<ExtArgs> | null;
    omit?: Prisma.quiz_definitionOmit<ExtArgs> | null;
    include?: Prisma.quiz_definitionInclude<ExtArgs> | null;
    where?: Prisma.quiz_definitionWhereInput;
    orderBy?: Prisma.quiz_definitionOrderByWithRelationInput | Prisma.quiz_definitionOrderByWithRelationInput[];
    cursor?: Prisma.quiz_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_definitionScalarFieldEnum | Prisma.Quiz_definitionScalarFieldEnum[];
};
export type quiz_definitionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_definitionSelect<ExtArgs> | null;
    omit?: Prisma.quiz_definitionOmit<ExtArgs> | null;
    include?: Prisma.quiz_definitionInclude<ExtArgs> | null;
    where?: Prisma.quiz_definitionWhereInput;
    orderBy?: Prisma.quiz_definitionOrderByWithRelationInput | Prisma.quiz_definitionOrderByWithRelationInput[];
    cursor?: Prisma.quiz_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_definitionScalarFieldEnum | Prisma.Quiz_definitionScalarFieldEnum[];
};
export type quiz_definitionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_definitionSelect<ExtArgs> | null;
    omit?: Prisma.quiz_definitionOmit<ExtArgs> | null;
    include?: Prisma.quiz_definitionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_definitionCreateInput, Prisma.quiz_definitionUncheckedCreateInput>;
};
export type quiz_definitionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.quiz_definitionCreateManyInput | Prisma.quiz_definitionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type quiz_definitionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_definitionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quiz_definitionOmit<ExtArgs> | null;
    data: Prisma.quiz_definitionCreateManyInput | Prisma.quiz_definitionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type quiz_definitionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_definitionSelect<ExtArgs> | null;
    omit?: Prisma.quiz_definitionOmit<ExtArgs> | null;
    include?: Prisma.quiz_definitionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_definitionUpdateInput, Prisma.quiz_definitionUncheckedUpdateInput>;
    where: Prisma.quiz_definitionWhereUniqueInput;
};
export type quiz_definitionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.quiz_definitionUpdateManyMutationInput, Prisma.quiz_definitionUncheckedUpdateManyInput>;
    where?: Prisma.quiz_definitionWhereInput;
    limit?: number;
};
export type quiz_definitionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_definitionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quiz_definitionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_definitionUpdateManyMutationInput, Prisma.quiz_definitionUncheckedUpdateManyInput>;
    where?: Prisma.quiz_definitionWhereInput;
    limit?: number;
};
export type quiz_definitionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_definitionSelect<ExtArgs> | null;
    omit?: Prisma.quiz_definitionOmit<ExtArgs> | null;
    include?: Prisma.quiz_definitionInclude<ExtArgs> | null;
    where: Prisma.quiz_definitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_definitionCreateInput, Prisma.quiz_definitionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.quiz_definitionUpdateInput, Prisma.quiz_definitionUncheckedUpdateInput>;
};
export type quiz_definitionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_definitionSelect<ExtArgs> | null;
    omit?: Prisma.quiz_definitionOmit<ExtArgs> | null;
    include?: Prisma.quiz_definitionInclude<ExtArgs> | null;
    where: Prisma.quiz_definitionWhereUniqueInput;
};
export type quiz_definitionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_definitionWhereInput;
    limit?: number;
};
export type quiz_definition$quiz_responseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_responseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_responseOmit<ExtArgs> | null;
    include?: Prisma.quiz_responseInclude<ExtArgs> | null;
    where?: Prisma.quiz_responseWhereInput;
    orderBy?: Prisma.quiz_responseOrderByWithRelationInput | Prisma.quiz_responseOrderByWithRelationInput[];
    cursor?: Prisma.quiz_responseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_responseScalarFieldEnum | Prisma.Quiz_responseScalarFieldEnum[];
};
export type quiz_definitionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_definitionSelect<ExtArgs> | null;
    omit?: Prisma.quiz_definitionOmit<ExtArgs> | null;
    include?: Prisma.quiz_definitionInclude<ExtArgs> | null;
};
