import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type integration_jobModel = runtime.Types.Result.DefaultSelection<Prisma.$integration_jobPayload>;
export type AggregateIntegration_job = {
    _count: Integration_jobCountAggregateOutputType | null;
    _min: Integration_jobMinAggregateOutputType | null;
    _max: Integration_jobMaxAggregateOutputType | null;
};
export type Integration_jobMinAggregateOutputType = {
    id: string | null;
    job_type: string | null;
    status: string | null;
    error: string | null;
    started_at: Date | null;
    completed_at: Date | null;
    created_at: Date | null;
};
export type Integration_jobMaxAggregateOutputType = {
    id: string | null;
    job_type: string | null;
    status: string | null;
    error: string | null;
    started_at: Date | null;
    completed_at: Date | null;
    created_at: Date | null;
};
export type Integration_jobCountAggregateOutputType = {
    id: number;
    job_type: number;
    status: number;
    input: number;
    output: number;
    error: number;
    started_at: number;
    completed_at: number;
    created_at: number;
    _all: number;
};
export type Integration_jobMinAggregateInputType = {
    id?: true;
    job_type?: true;
    status?: true;
    error?: true;
    started_at?: true;
    completed_at?: true;
    created_at?: true;
};
export type Integration_jobMaxAggregateInputType = {
    id?: true;
    job_type?: true;
    status?: true;
    error?: true;
    started_at?: true;
    completed_at?: true;
    created_at?: true;
};
export type Integration_jobCountAggregateInputType = {
    id?: true;
    job_type?: true;
    status?: true;
    input?: true;
    output?: true;
    error?: true;
    started_at?: true;
    completed_at?: true;
    created_at?: true;
    _all?: true;
};
export type Integration_jobAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.integration_jobWhereInput;
    orderBy?: Prisma.integration_jobOrderByWithRelationInput | Prisma.integration_jobOrderByWithRelationInput[];
    cursor?: Prisma.integration_jobWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Integration_jobCountAggregateInputType;
    _min?: Integration_jobMinAggregateInputType;
    _max?: Integration_jobMaxAggregateInputType;
};
export type GetIntegration_jobAggregateType<T extends Integration_jobAggregateArgs> = {
    [P in keyof T & keyof AggregateIntegration_job]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIntegration_job[P]> : Prisma.GetScalarType<T[P], AggregateIntegration_job[P]>;
};
export type integration_jobGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.integration_jobWhereInput;
    orderBy?: Prisma.integration_jobOrderByWithAggregationInput | Prisma.integration_jobOrderByWithAggregationInput[];
    by: Prisma.Integration_jobScalarFieldEnum[] | Prisma.Integration_jobScalarFieldEnum;
    having?: Prisma.integration_jobScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Integration_jobCountAggregateInputType | true;
    _min?: Integration_jobMinAggregateInputType;
    _max?: Integration_jobMaxAggregateInputType;
};
export type Integration_jobGroupByOutputType = {
    id: string;
    job_type: string;
    status: string;
    input: runtime.JsonValue | null;
    output: runtime.JsonValue | null;
    error: string | null;
    started_at: Date | null;
    completed_at: Date | null;
    created_at: Date;
    _count: Integration_jobCountAggregateOutputType | null;
    _min: Integration_jobMinAggregateOutputType | null;
    _max: Integration_jobMaxAggregateOutputType | null;
};
export type GetIntegration_jobGroupByPayload<T extends integration_jobGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Integration_jobGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Integration_jobGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Integration_jobGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Integration_jobGroupByOutputType[P]>;
}>>;
export type integration_jobWhereInput = {
    AND?: Prisma.integration_jobWhereInput | Prisma.integration_jobWhereInput[];
    OR?: Prisma.integration_jobWhereInput[];
    NOT?: Prisma.integration_jobWhereInput | Prisma.integration_jobWhereInput[];
    id?: Prisma.UuidFilter<"integration_job"> | string;
    job_type?: Prisma.StringFilter<"integration_job"> | string;
    status?: Prisma.StringFilter<"integration_job"> | string;
    input?: Prisma.JsonNullableFilter<"integration_job">;
    output?: Prisma.JsonNullableFilter<"integration_job">;
    error?: Prisma.StringNullableFilter<"integration_job"> | string | null;
    started_at?: Prisma.DateTimeNullableFilter<"integration_job"> | Date | string | null;
    completed_at?: Prisma.DateTimeNullableFilter<"integration_job"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"integration_job"> | Date | string;
};
export type integration_jobOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    job_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    input?: Prisma.SortOrderInput | Prisma.SortOrder;
    output?: Prisma.SortOrderInput | Prisma.SortOrder;
    error?: Prisma.SortOrderInput | Prisma.SortOrder;
    started_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type integration_jobWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.integration_jobWhereInput | Prisma.integration_jobWhereInput[];
    OR?: Prisma.integration_jobWhereInput[];
    NOT?: Prisma.integration_jobWhereInput | Prisma.integration_jobWhereInput[];
    job_type?: Prisma.StringFilter<"integration_job"> | string;
    status?: Prisma.StringFilter<"integration_job"> | string;
    input?: Prisma.JsonNullableFilter<"integration_job">;
    output?: Prisma.JsonNullableFilter<"integration_job">;
    error?: Prisma.StringNullableFilter<"integration_job"> | string | null;
    started_at?: Prisma.DateTimeNullableFilter<"integration_job"> | Date | string | null;
    completed_at?: Prisma.DateTimeNullableFilter<"integration_job"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"integration_job"> | Date | string;
}, "id">;
export type integration_jobOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    job_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    input?: Prisma.SortOrderInput | Prisma.SortOrder;
    output?: Prisma.SortOrderInput | Prisma.SortOrder;
    error?: Prisma.SortOrderInput | Prisma.SortOrder;
    started_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.integration_jobCountOrderByAggregateInput;
    _max?: Prisma.integration_jobMaxOrderByAggregateInput;
    _min?: Prisma.integration_jobMinOrderByAggregateInput;
};
export type integration_jobScalarWhereWithAggregatesInput = {
    AND?: Prisma.integration_jobScalarWhereWithAggregatesInput | Prisma.integration_jobScalarWhereWithAggregatesInput[];
    OR?: Prisma.integration_jobScalarWhereWithAggregatesInput[];
    NOT?: Prisma.integration_jobScalarWhereWithAggregatesInput | Prisma.integration_jobScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"integration_job"> | string;
    job_type?: Prisma.StringWithAggregatesFilter<"integration_job"> | string;
    status?: Prisma.StringWithAggregatesFilter<"integration_job"> | string;
    input?: Prisma.JsonNullableWithAggregatesFilter<"integration_job">;
    output?: Prisma.JsonNullableWithAggregatesFilter<"integration_job">;
    error?: Prisma.StringNullableWithAggregatesFilter<"integration_job"> | string | null;
    started_at?: Prisma.DateTimeNullableWithAggregatesFilter<"integration_job"> | Date | string | null;
    completed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"integration_job"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"integration_job"> | Date | string;
};
export type integration_jobCreateInput = {
    id?: string;
    job_type: string;
    status?: string;
    input?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    output?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: string | null;
    started_at?: Date | string | null;
    completed_at?: Date | string | null;
    created_at?: Date | string;
};
export type integration_jobUncheckedCreateInput = {
    id?: string;
    job_type: string;
    status?: string;
    input?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    output?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: string | null;
    started_at?: Date | string | null;
    completed_at?: Date | string | null;
    created_at?: Date | string;
};
export type integration_jobUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    job_type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    input?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    output?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    started_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type integration_jobUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    job_type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    input?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    output?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    started_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type integration_jobCreateManyInput = {
    id?: string;
    job_type: string;
    status?: string;
    input?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    output?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: string | null;
    started_at?: Date | string | null;
    completed_at?: Date | string | null;
    created_at?: Date | string;
};
export type integration_jobUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    job_type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    input?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    output?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    started_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type integration_jobUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    job_type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    input?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    output?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    started_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type integration_jobCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    job_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    input?: Prisma.SortOrder;
    output?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type integration_jobMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    job_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type integration_jobMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    job_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type integration_jobSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    job_type?: boolean;
    status?: boolean;
    input?: boolean;
    output?: boolean;
    error?: boolean;
    started_at?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["integration_job"]>;
export type integration_jobSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    job_type?: boolean;
    status?: boolean;
    input?: boolean;
    output?: boolean;
    error?: boolean;
    started_at?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["integration_job"]>;
export type integration_jobSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    job_type?: boolean;
    status?: boolean;
    input?: boolean;
    output?: boolean;
    error?: boolean;
    started_at?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["integration_job"]>;
export type integration_jobSelectScalar = {
    id?: boolean;
    job_type?: boolean;
    status?: boolean;
    input?: boolean;
    output?: boolean;
    error?: boolean;
    started_at?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
};
export type integration_jobOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "job_type" | "status" | "input" | "output" | "error" | "started_at" | "completed_at" | "created_at", ExtArgs["result"]["integration_job"]>;
export type $integration_jobPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "integration_job";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        job_type: string;
        status: string;
        input: runtime.JsonValue | null;
        output: runtime.JsonValue | null;
        error: string | null;
        started_at: Date | null;
        completed_at: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["integration_job"]>;
    composites: {};
};
export type integration_jobGetPayload<S extends boolean | null | undefined | integration_jobDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$integration_jobPayload, S>;
export type integration_jobCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<integration_jobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Integration_jobCountAggregateInputType | true;
};
export interface integration_jobDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['integration_job'];
        meta: {
            name: 'integration_job';
        };
    };
    findUnique<T extends integration_jobFindUniqueArgs>(args: Prisma.SelectSubset<T, integration_jobFindUniqueArgs<ExtArgs>>): Prisma.Prisma__integration_jobClient<runtime.Types.Result.GetResult<Prisma.$integration_jobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends integration_jobFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, integration_jobFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__integration_jobClient<runtime.Types.Result.GetResult<Prisma.$integration_jobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends integration_jobFindFirstArgs>(args?: Prisma.SelectSubset<T, integration_jobFindFirstArgs<ExtArgs>>): Prisma.Prisma__integration_jobClient<runtime.Types.Result.GetResult<Prisma.$integration_jobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends integration_jobFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, integration_jobFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__integration_jobClient<runtime.Types.Result.GetResult<Prisma.$integration_jobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends integration_jobFindManyArgs>(args?: Prisma.SelectSubset<T, integration_jobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$integration_jobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends integration_jobCreateArgs>(args: Prisma.SelectSubset<T, integration_jobCreateArgs<ExtArgs>>): Prisma.Prisma__integration_jobClient<runtime.Types.Result.GetResult<Prisma.$integration_jobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends integration_jobCreateManyArgs>(args?: Prisma.SelectSubset<T, integration_jobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends integration_jobCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, integration_jobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$integration_jobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends integration_jobDeleteArgs>(args: Prisma.SelectSubset<T, integration_jobDeleteArgs<ExtArgs>>): Prisma.Prisma__integration_jobClient<runtime.Types.Result.GetResult<Prisma.$integration_jobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends integration_jobUpdateArgs>(args: Prisma.SelectSubset<T, integration_jobUpdateArgs<ExtArgs>>): Prisma.Prisma__integration_jobClient<runtime.Types.Result.GetResult<Prisma.$integration_jobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends integration_jobDeleteManyArgs>(args?: Prisma.SelectSubset<T, integration_jobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends integration_jobUpdateManyArgs>(args: Prisma.SelectSubset<T, integration_jobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends integration_jobUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, integration_jobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$integration_jobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends integration_jobUpsertArgs>(args: Prisma.SelectSubset<T, integration_jobUpsertArgs<ExtArgs>>): Prisma.Prisma__integration_jobClient<runtime.Types.Result.GetResult<Prisma.$integration_jobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends integration_jobCountArgs>(args?: Prisma.Subset<T, integration_jobCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Integration_jobCountAggregateOutputType> : number>;
    aggregate<T extends Integration_jobAggregateArgs>(args: Prisma.Subset<T, Integration_jobAggregateArgs>): Prisma.PrismaPromise<GetIntegration_jobAggregateType<T>>;
    groupBy<T extends integration_jobGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: integration_jobGroupByArgs['orderBy'];
    } : {
        orderBy?: integration_jobGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, integration_jobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegration_jobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: integration_jobFieldRefs;
}
export interface Prisma__integration_jobClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface integration_jobFieldRefs {
    readonly id: Prisma.FieldRef<"integration_job", 'String'>;
    readonly job_type: Prisma.FieldRef<"integration_job", 'String'>;
    readonly status: Prisma.FieldRef<"integration_job", 'String'>;
    readonly input: Prisma.FieldRef<"integration_job", 'Json'>;
    readonly output: Prisma.FieldRef<"integration_job", 'Json'>;
    readonly error: Prisma.FieldRef<"integration_job", 'String'>;
    readonly started_at: Prisma.FieldRef<"integration_job", 'DateTime'>;
    readonly completed_at: Prisma.FieldRef<"integration_job", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"integration_job", 'DateTime'>;
}
export type integration_jobFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.integration_jobSelect<ExtArgs> | null;
    omit?: Prisma.integration_jobOmit<ExtArgs> | null;
    where: Prisma.integration_jobWhereUniqueInput;
};
export type integration_jobFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.integration_jobSelect<ExtArgs> | null;
    omit?: Prisma.integration_jobOmit<ExtArgs> | null;
    where: Prisma.integration_jobWhereUniqueInput;
};
export type integration_jobFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.integration_jobSelect<ExtArgs> | null;
    omit?: Prisma.integration_jobOmit<ExtArgs> | null;
    where?: Prisma.integration_jobWhereInput;
    orderBy?: Prisma.integration_jobOrderByWithRelationInput | Prisma.integration_jobOrderByWithRelationInput[];
    cursor?: Prisma.integration_jobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Integration_jobScalarFieldEnum | Prisma.Integration_jobScalarFieldEnum[];
};
export type integration_jobFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.integration_jobSelect<ExtArgs> | null;
    omit?: Prisma.integration_jobOmit<ExtArgs> | null;
    where?: Prisma.integration_jobWhereInput;
    orderBy?: Prisma.integration_jobOrderByWithRelationInput | Prisma.integration_jobOrderByWithRelationInput[];
    cursor?: Prisma.integration_jobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Integration_jobScalarFieldEnum | Prisma.Integration_jobScalarFieldEnum[];
};
export type integration_jobFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.integration_jobSelect<ExtArgs> | null;
    omit?: Prisma.integration_jobOmit<ExtArgs> | null;
    where?: Prisma.integration_jobWhereInput;
    orderBy?: Prisma.integration_jobOrderByWithRelationInput | Prisma.integration_jobOrderByWithRelationInput[];
    cursor?: Prisma.integration_jobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Integration_jobScalarFieldEnum | Prisma.Integration_jobScalarFieldEnum[];
};
export type integration_jobCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.integration_jobSelect<ExtArgs> | null;
    omit?: Prisma.integration_jobOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.integration_jobCreateInput, Prisma.integration_jobUncheckedCreateInput>;
};
export type integration_jobCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.integration_jobCreateManyInput | Prisma.integration_jobCreateManyInput[];
    skipDuplicates?: boolean;
};
export type integration_jobCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.integration_jobSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.integration_jobOmit<ExtArgs> | null;
    data: Prisma.integration_jobCreateManyInput | Prisma.integration_jobCreateManyInput[];
    skipDuplicates?: boolean;
};
export type integration_jobUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.integration_jobSelect<ExtArgs> | null;
    omit?: Prisma.integration_jobOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.integration_jobUpdateInput, Prisma.integration_jobUncheckedUpdateInput>;
    where: Prisma.integration_jobWhereUniqueInput;
};
export type integration_jobUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.integration_jobUpdateManyMutationInput, Prisma.integration_jobUncheckedUpdateManyInput>;
    where?: Prisma.integration_jobWhereInput;
    limit?: number;
};
export type integration_jobUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.integration_jobSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.integration_jobOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.integration_jobUpdateManyMutationInput, Prisma.integration_jobUncheckedUpdateManyInput>;
    where?: Prisma.integration_jobWhereInput;
    limit?: number;
};
export type integration_jobUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.integration_jobSelect<ExtArgs> | null;
    omit?: Prisma.integration_jobOmit<ExtArgs> | null;
    where: Prisma.integration_jobWhereUniqueInput;
    create: Prisma.XOR<Prisma.integration_jobCreateInput, Prisma.integration_jobUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.integration_jobUpdateInput, Prisma.integration_jobUncheckedUpdateInput>;
};
export type integration_jobDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.integration_jobSelect<ExtArgs> | null;
    omit?: Prisma.integration_jobOmit<ExtArgs> | null;
    where: Prisma.integration_jobWhereUniqueInput;
};
export type integration_jobDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.integration_jobWhereInput;
    limit?: number;
};
export type integration_jobDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.integration_jobSelect<ExtArgs> | null;
    omit?: Prisma.integration_jobOmit<ExtArgs> | null;
};
