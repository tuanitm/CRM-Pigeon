import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type data_layer_definitionModel = runtime.Types.Result.DefaultSelection<Prisma.$data_layer_definitionPayload>;
export type AggregateData_layer_definition = {
    _count: Data_layer_definitionCountAggregateOutputType | null;
    _min: Data_layer_definitionMinAggregateOutputType | null;
    _max: Data_layer_definitionMaxAggregateOutputType | null;
};
export type Data_layer_definitionMinAggregateOutputType = {
    id: string | null;
    layer_name: string | null;
    description: string | null;
    created_at: Date | null;
};
export type Data_layer_definitionMaxAggregateOutputType = {
    id: string | null;
    layer_name: string | null;
    description: string | null;
    created_at: Date | null;
};
export type Data_layer_definitionCountAggregateOutputType = {
    id: number;
    layer_name: number;
    description: number;
    filter_rules: number;
    created_at: number;
    _all: number;
};
export type Data_layer_definitionMinAggregateInputType = {
    id?: true;
    layer_name?: true;
    description?: true;
    created_at?: true;
};
export type Data_layer_definitionMaxAggregateInputType = {
    id?: true;
    layer_name?: true;
    description?: true;
    created_at?: true;
};
export type Data_layer_definitionCountAggregateInputType = {
    id?: true;
    layer_name?: true;
    description?: true;
    filter_rules?: true;
    created_at?: true;
    _all?: true;
};
export type Data_layer_definitionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.data_layer_definitionWhereInput;
    orderBy?: Prisma.data_layer_definitionOrderByWithRelationInput | Prisma.data_layer_definitionOrderByWithRelationInput[];
    cursor?: Prisma.data_layer_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Data_layer_definitionCountAggregateInputType;
    _min?: Data_layer_definitionMinAggregateInputType;
    _max?: Data_layer_definitionMaxAggregateInputType;
};
export type GetData_layer_definitionAggregateType<T extends Data_layer_definitionAggregateArgs> = {
    [P in keyof T & keyof AggregateData_layer_definition]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateData_layer_definition[P]> : Prisma.GetScalarType<T[P], AggregateData_layer_definition[P]>;
};
export type data_layer_definitionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.data_layer_definitionWhereInput;
    orderBy?: Prisma.data_layer_definitionOrderByWithAggregationInput | Prisma.data_layer_definitionOrderByWithAggregationInput[];
    by: Prisma.Data_layer_definitionScalarFieldEnum[] | Prisma.Data_layer_definitionScalarFieldEnum;
    having?: Prisma.data_layer_definitionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Data_layer_definitionCountAggregateInputType | true;
    _min?: Data_layer_definitionMinAggregateInputType;
    _max?: Data_layer_definitionMaxAggregateInputType;
};
export type Data_layer_definitionGroupByOutputType = {
    id: string;
    layer_name: string;
    description: string | null;
    filter_rules: runtime.JsonValue;
    created_at: Date;
    _count: Data_layer_definitionCountAggregateOutputType | null;
    _min: Data_layer_definitionMinAggregateOutputType | null;
    _max: Data_layer_definitionMaxAggregateOutputType | null;
};
export type GetData_layer_definitionGroupByPayload<T extends data_layer_definitionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Data_layer_definitionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Data_layer_definitionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Data_layer_definitionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Data_layer_definitionGroupByOutputType[P]>;
}>>;
export type data_layer_definitionWhereInput = {
    AND?: Prisma.data_layer_definitionWhereInput | Prisma.data_layer_definitionWhereInput[];
    OR?: Prisma.data_layer_definitionWhereInput[];
    NOT?: Prisma.data_layer_definitionWhereInput | Prisma.data_layer_definitionWhereInput[];
    id?: Prisma.UuidFilter<"data_layer_definition"> | string;
    layer_name?: Prisma.StringFilter<"data_layer_definition"> | string;
    description?: Prisma.StringNullableFilter<"data_layer_definition"> | string | null;
    filter_rules?: Prisma.JsonFilter<"data_layer_definition">;
    created_at?: Prisma.DateTimeFilter<"data_layer_definition"> | Date | string;
};
export type data_layer_definitionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    layer_name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    filter_rules?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type data_layer_definitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    layer_name?: string;
    AND?: Prisma.data_layer_definitionWhereInput | Prisma.data_layer_definitionWhereInput[];
    OR?: Prisma.data_layer_definitionWhereInput[];
    NOT?: Prisma.data_layer_definitionWhereInput | Prisma.data_layer_definitionWhereInput[];
    description?: Prisma.StringNullableFilter<"data_layer_definition"> | string | null;
    filter_rules?: Prisma.JsonFilter<"data_layer_definition">;
    created_at?: Prisma.DateTimeFilter<"data_layer_definition"> | Date | string;
}, "id" | "layer_name">;
export type data_layer_definitionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    layer_name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    filter_rules?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.data_layer_definitionCountOrderByAggregateInput;
    _max?: Prisma.data_layer_definitionMaxOrderByAggregateInput;
    _min?: Prisma.data_layer_definitionMinOrderByAggregateInput;
};
export type data_layer_definitionScalarWhereWithAggregatesInput = {
    AND?: Prisma.data_layer_definitionScalarWhereWithAggregatesInput | Prisma.data_layer_definitionScalarWhereWithAggregatesInput[];
    OR?: Prisma.data_layer_definitionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.data_layer_definitionScalarWhereWithAggregatesInput | Prisma.data_layer_definitionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"data_layer_definition"> | string;
    layer_name?: Prisma.StringWithAggregatesFilter<"data_layer_definition"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"data_layer_definition"> | string | null;
    filter_rules?: Prisma.JsonWithAggregatesFilter<"data_layer_definition">;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"data_layer_definition"> | Date | string;
};
export type data_layer_definitionCreateInput = {
    id?: string;
    layer_name: string;
    description?: string | null;
    filter_rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type data_layer_definitionUncheckedCreateInput = {
    id?: string;
    layer_name: string;
    description?: string | null;
    filter_rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type data_layer_definitionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    layer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filter_rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type data_layer_definitionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    layer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filter_rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type data_layer_definitionCreateManyInput = {
    id?: string;
    layer_name: string;
    description?: string | null;
    filter_rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type data_layer_definitionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    layer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filter_rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type data_layer_definitionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    layer_name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    filter_rules?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type data_layer_definitionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    layer_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    filter_rules?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type data_layer_definitionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    layer_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type data_layer_definitionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    layer_name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type data_layer_definitionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    layer_name?: boolean;
    description?: boolean;
    filter_rules?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["data_layer_definition"]>;
export type data_layer_definitionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    layer_name?: boolean;
    description?: boolean;
    filter_rules?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["data_layer_definition"]>;
export type data_layer_definitionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    layer_name?: boolean;
    description?: boolean;
    filter_rules?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["data_layer_definition"]>;
export type data_layer_definitionSelectScalar = {
    id?: boolean;
    layer_name?: boolean;
    description?: boolean;
    filter_rules?: boolean;
    created_at?: boolean;
};
export type data_layer_definitionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "layer_name" | "description" | "filter_rules" | "created_at", ExtArgs["result"]["data_layer_definition"]>;
export type $data_layer_definitionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "data_layer_definition";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        layer_name: string;
        description: string | null;
        filter_rules: runtime.JsonValue;
        created_at: Date;
    }, ExtArgs["result"]["data_layer_definition"]>;
    composites: {};
};
export type data_layer_definitionGetPayload<S extends boolean | null | undefined | data_layer_definitionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$data_layer_definitionPayload, S>;
export type data_layer_definitionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<data_layer_definitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Data_layer_definitionCountAggregateInputType | true;
};
export interface data_layer_definitionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['data_layer_definition'];
        meta: {
            name: 'data_layer_definition';
        };
    };
    findUnique<T extends data_layer_definitionFindUniqueArgs>(args: Prisma.SelectSubset<T, data_layer_definitionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__data_layer_definitionClient<runtime.Types.Result.GetResult<Prisma.$data_layer_definitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends data_layer_definitionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, data_layer_definitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__data_layer_definitionClient<runtime.Types.Result.GetResult<Prisma.$data_layer_definitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends data_layer_definitionFindFirstArgs>(args?: Prisma.SelectSubset<T, data_layer_definitionFindFirstArgs<ExtArgs>>): Prisma.Prisma__data_layer_definitionClient<runtime.Types.Result.GetResult<Prisma.$data_layer_definitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends data_layer_definitionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, data_layer_definitionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__data_layer_definitionClient<runtime.Types.Result.GetResult<Prisma.$data_layer_definitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends data_layer_definitionFindManyArgs>(args?: Prisma.SelectSubset<T, data_layer_definitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$data_layer_definitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends data_layer_definitionCreateArgs>(args: Prisma.SelectSubset<T, data_layer_definitionCreateArgs<ExtArgs>>): Prisma.Prisma__data_layer_definitionClient<runtime.Types.Result.GetResult<Prisma.$data_layer_definitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends data_layer_definitionCreateManyArgs>(args?: Prisma.SelectSubset<T, data_layer_definitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends data_layer_definitionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, data_layer_definitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$data_layer_definitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends data_layer_definitionDeleteArgs>(args: Prisma.SelectSubset<T, data_layer_definitionDeleteArgs<ExtArgs>>): Prisma.Prisma__data_layer_definitionClient<runtime.Types.Result.GetResult<Prisma.$data_layer_definitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends data_layer_definitionUpdateArgs>(args: Prisma.SelectSubset<T, data_layer_definitionUpdateArgs<ExtArgs>>): Prisma.Prisma__data_layer_definitionClient<runtime.Types.Result.GetResult<Prisma.$data_layer_definitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends data_layer_definitionDeleteManyArgs>(args?: Prisma.SelectSubset<T, data_layer_definitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends data_layer_definitionUpdateManyArgs>(args: Prisma.SelectSubset<T, data_layer_definitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends data_layer_definitionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, data_layer_definitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$data_layer_definitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends data_layer_definitionUpsertArgs>(args: Prisma.SelectSubset<T, data_layer_definitionUpsertArgs<ExtArgs>>): Prisma.Prisma__data_layer_definitionClient<runtime.Types.Result.GetResult<Prisma.$data_layer_definitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends data_layer_definitionCountArgs>(args?: Prisma.Subset<T, data_layer_definitionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Data_layer_definitionCountAggregateOutputType> : number>;
    aggregate<T extends Data_layer_definitionAggregateArgs>(args: Prisma.Subset<T, Data_layer_definitionAggregateArgs>): Prisma.PrismaPromise<GetData_layer_definitionAggregateType<T>>;
    groupBy<T extends data_layer_definitionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: data_layer_definitionGroupByArgs['orderBy'];
    } : {
        orderBy?: data_layer_definitionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, data_layer_definitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetData_layer_definitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: data_layer_definitionFieldRefs;
}
export interface Prisma__data_layer_definitionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface data_layer_definitionFieldRefs {
    readonly id: Prisma.FieldRef<"data_layer_definition", 'String'>;
    readonly layer_name: Prisma.FieldRef<"data_layer_definition", 'String'>;
    readonly description: Prisma.FieldRef<"data_layer_definition", 'String'>;
    readonly filter_rules: Prisma.FieldRef<"data_layer_definition", 'Json'>;
    readonly created_at: Prisma.FieldRef<"data_layer_definition", 'DateTime'>;
}
export type data_layer_definitionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_layer_definitionSelect<ExtArgs> | null;
    omit?: Prisma.data_layer_definitionOmit<ExtArgs> | null;
    where: Prisma.data_layer_definitionWhereUniqueInput;
};
export type data_layer_definitionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_layer_definitionSelect<ExtArgs> | null;
    omit?: Prisma.data_layer_definitionOmit<ExtArgs> | null;
    where: Prisma.data_layer_definitionWhereUniqueInput;
};
export type data_layer_definitionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_layer_definitionSelect<ExtArgs> | null;
    omit?: Prisma.data_layer_definitionOmit<ExtArgs> | null;
    where?: Prisma.data_layer_definitionWhereInput;
    orderBy?: Prisma.data_layer_definitionOrderByWithRelationInput | Prisma.data_layer_definitionOrderByWithRelationInput[];
    cursor?: Prisma.data_layer_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Data_layer_definitionScalarFieldEnum | Prisma.Data_layer_definitionScalarFieldEnum[];
};
export type data_layer_definitionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_layer_definitionSelect<ExtArgs> | null;
    omit?: Prisma.data_layer_definitionOmit<ExtArgs> | null;
    where?: Prisma.data_layer_definitionWhereInput;
    orderBy?: Prisma.data_layer_definitionOrderByWithRelationInput | Prisma.data_layer_definitionOrderByWithRelationInput[];
    cursor?: Prisma.data_layer_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Data_layer_definitionScalarFieldEnum | Prisma.Data_layer_definitionScalarFieldEnum[];
};
export type data_layer_definitionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_layer_definitionSelect<ExtArgs> | null;
    omit?: Prisma.data_layer_definitionOmit<ExtArgs> | null;
    where?: Prisma.data_layer_definitionWhereInput;
    orderBy?: Prisma.data_layer_definitionOrderByWithRelationInput | Prisma.data_layer_definitionOrderByWithRelationInput[];
    cursor?: Prisma.data_layer_definitionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Data_layer_definitionScalarFieldEnum | Prisma.Data_layer_definitionScalarFieldEnum[];
};
export type data_layer_definitionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_layer_definitionSelect<ExtArgs> | null;
    omit?: Prisma.data_layer_definitionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.data_layer_definitionCreateInput, Prisma.data_layer_definitionUncheckedCreateInput>;
};
export type data_layer_definitionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.data_layer_definitionCreateManyInput | Prisma.data_layer_definitionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type data_layer_definitionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_layer_definitionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.data_layer_definitionOmit<ExtArgs> | null;
    data: Prisma.data_layer_definitionCreateManyInput | Prisma.data_layer_definitionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type data_layer_definitionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_layer_definitionSelect<ExtArgs> | null;
    omit?: Prisma.data_layer_definitionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.data_layer_definitionUpdateInput, Prisma.data_layer_definitionUncheckedUpdateInput>;
    where: Prisma.data_layer_definitionWhereUniqueInput;
};
export type data_layer_definitionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.data_layer_definitionUpdateManyMutationInput, Prisma.data_layer_definitionUncheckedUpdateManyInput>;
    where?: Prisma.data_layer_definitionWhereInput;
    limit?: number;
};
export type data_layer_definitionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_layer_definitionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.data_layer_definitionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.data_layer_definitionUpdateManyMutationInput, Prisma.data_layer_definitionUncheckedUpdateManyInput>;
    where?: Prisma.data_layer_definitionWhereInput;
    limit?: number;
};
export type data_layer_definitionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_layer_definitionSelect<ExtArgs> | null;
    omit?: Prisma.data_layer_definitionOmit<ExtArgs> | null;
    where: Prisma.data_layer_definitionWhereUniqueInput;
    create: Prisma.XOR<Prisma.data_layer_definitionCreateInput, Prisma.data_layer_definitionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.data_layer_definitionUpdateInput, Prisma.data_layer_definitionUncheckedUpdateInput>;
};
export type data_layer_definitionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_layer_definitionSelect<ExtArgs> | null;
    omit?: Prisma.data_layer_definitionOmit<ExtArgs> | null;
    where: Prisma.data_layer_definitionWhereUniqueInput;
};
export type data_layer_definitionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.data_layer_definitionWhereInput;
    limit?: number;
};
export type data_layer_definitionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_layer_definitionSelect<ExtArgs> | null;
    omit?: Prisma.data_layer_definitionOmit<ExtArgs> | null;
};
