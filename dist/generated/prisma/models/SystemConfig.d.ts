import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SystemConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$SystemConfigPayload>;
export type AggregateSystemConfig = {
    _count: SystemConfigCountAggregateOutputType | null;
    _min: SystemConfigMinAggregateOutputType | null;
    _max: SystemConfigMaxAggregateOutputType | null;
};
export type SystemConfigMinAggregateOutputType = {
    id: string | null;
    key: string | null;
    value: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SystemConfigMaxAggregateOutputType = {
    id: string | null;
    key: string | null;
    value: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SystemConfigCountAggregateOutputType = {
    id: number;
    key: number;
    value: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SystemConfigMinAggregateInputType = {
    id?: true;
    key?: true;
    value?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SystemConfigMaxAggregateInputType = {
    id?: true;
    key?: true;
    value?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SystemConfigCountAggregateInputType = {
    id?: true;
    key?: true;
    value?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SystemConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SystemConfigWhereInput;
    orderBy?: Prisma.SystemConfigOrderByWithRelationInput | Prisma.SystemConfigOrderByWithRelationInput[];
    cursor?: Prisma.SystemConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SystemConfigCountAggregateInputType;
    _min?: SystemConfigMinAggregateInputType;
    _max?: SystemConfigMaxAggregateInputType;
};
export type GetSystemConfigAggregateType<T extends SystemConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateSystemConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSystemConfig[P]> : Prisma.GetScalarType<T[P], AggregateSystemConfig[P]>;
};
export type SystemConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SystemConfigWhereInput;
    orderBy?: Prisma.SystemConfigOrderByWithAggregationInput | Prisma.SystemConfigOrderByWithAggregationInput[];
    by: Prisma.SystemConfigScalarFieldEnum[] | Prisma.SystemConfigScalarFieldEnum;
    having?: Prisma.SystemConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SystemConfigCountAggregateInputType | true;
    _min?: SystemConfigMinAggregateInputType;
    _max?: SystemConfigMaxAggregateInputType;
};
export type SystemConfigGroupByOutputType = {
    id: string;
    key: string;
    value: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SystemConfigCountAggregateOutputType | null;
    _min: SystemConfigMinAggregateOutputType | null;
    _max: SystemConfigMaxAggregateOutputType | null;
};
export type GetSystemConfigGroupByPayload<T extends SystemConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SystemConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SystemConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SystemConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SystemConfigGroupByOutputType[P]>;
}>>;
export type SystemConfigWhereInput = {
    AND?: Prisma.SystemConfigWhereInput | Prisma.SystemConfigWhereInput[];
    OR?: Prisma.SystemConfigWhereInput[];
    NOT?: Prisma.SystemConfigWhereInput | Prisma.SystemConfigWhereInput[];
    id?: Prisma.UuidFilter<"SystemConfig"> | string;
    key?: Prisma.StringFilter<"SystemConfig"> | string;
    value?: Prisma.StringFilter<"SystemConfig"> | string;
    description?: Prisma.StringNullableFilter<"SystemConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SystemConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SystemConfig"> | Date | string;
};
export type SystemConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SystemConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    key?: string;
    AND?: Prisma.SystemConfigWhereInput | Prisma.SystemConfigWhereInput[];
    OR?: Prisma.SystemConfigWhereInput[];
    NOT?: Prisma.SystemConfigWhereInput | Prisma.SystemConfigWhereInput[];
    value?: Prisma.StringFilter<"SystemConfig"> | string;
    description?: Prisma.StringNullableFilter<"SystemConfig"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SystemConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SystemConfig"> | Date | string;
}, "id" | "key">;
export type SystemConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SystemConfigCountOrderByAggregateInput;
    _max?: Prisma.SystemConfigMaxOrderByAggregateInput;
    _min?: Prisma.SystemConfigMinOrderByAggregateInput;
};
export type SystemConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.SystemConfigScalarWhereWithAggregatesInput | Prisma.SystemConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.SystemConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SystemConfigScalarWhereWithAggregatesInput | Prisma.SystemConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"SystemConfig"> | string;
    key?: Prisma.StringWithAggregatesFilter<"SystemConfig"> | string;
    value?: Prisma.StringWithAggregatesFilter<"SystemConfig"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"SystemConfig"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string;
};
export type SystemConfigCreateInput = {
    id?: string;
    key: string;
    value: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SystemConfigUncheckedCreateInput = {
    id?: string;
    key: string;
    value: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SystemConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SystemConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SystemConfigCreateManyInput = {
    id?: string;
    key: string;
    value: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SystemConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SystemConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SystemConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SystemConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SystemConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SystemConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    value?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["systemConfig"]>;
export type SystemConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    value?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["systemConfig"]>;
export type SystemConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    value?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["systemConfig"]>;
export type SystemConfigSelectScalar = {
    id?: boolean;
    key?: boolean;
    value?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SystemConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "key" | "value" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["systemConfig"]>;
export type $SystemConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SystemConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        key: string;
        value: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["systemConfig"]>;
    composites: {};
};
export type SystemConfigGetPayload<S extends boolean | null | undefined | SystemConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SystemConfigPayload, S>;
export type SystemConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SystemConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SystemConfigCountAggregateInputType | true;
};
export interface SystemConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SystemConfig'];
        meta: {
            name: 'SystemConfig';
        };
    };
    findUnique<T extends SystemConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, SystemConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SystemConfigClient<runtime.Types.Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SystemConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SystemConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SystemConfigClient<runtime.Types.Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SystemConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, SystemConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__SystemConfigClient<runtime.Types.Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SystemConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SystemConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SystemConfigClient<runtime.Types.Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SystemConfigFindManyArgs>(args?: Prisma.SelectSubset<T, SystemConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SystemConfigCreateArgs>(args: Prisma.SelectSubset<T, SystemConfigCreateArgs<ExtArgs>>): Prisma.Prisma__SystemConfigClient<runtime.Types.Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SystemConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, SystemConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SystemConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SystemConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SystemConfigDeleteArgs>(args: Prisma.SelectSubset<T, SystemConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__SystemConfigClient<runtime.Types.Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SystemConfigUpdateArgs>(args: Prisma.SelectSubset<T, SystemConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__SystemConfigClient<runtime.Types.Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SystemConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, SystemConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SystemConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, SystemConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SystemConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SystemConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SystemConfigUpsertArgs>(args: Prisma.SelectSubset<T, SystemConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__SystemConfigClient<runtime.Types.Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SystemConfigCountArgs>(args?: Prisma.Subset<T, SystemConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SystemConfigCountAggregateOutputType> : number>;
    aggregate<T extends SystemConfigAggregateArgs>(args: Prisma.Subset<T, SystemConfigAggregateArgs>): Prisma.PrismaPromise<GetSystemConfigAggregateType<T>>;
    groupBy<T extends SystemConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SystemConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: SystemConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SystemConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SystemConfigFieldRefs;
}
export interface Prisma__SystemConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SystemConfigFieldRefs {
    readonly id: Prisma.FieldRef<"SystemConfig", 'String'>;
    readonly key: Prisma.FieldRef<"SystemConfig", 'String'>;
    readonly value: Prisma.FieldRef<"SystemConfig", 'String'>;
    readonly description: Prisma.FieldRef<"SystemConfig", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SystemConfig", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SystemConfig", 'DateTime'>;
}
export type SystemConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemConfigSelect<ExtArgs> | null;
    omit?: Prisma.SystemConfigOmit<ExtArgs> | null;
    where: Prisma.SystemConfigWhereUniqueInput;
};
export type SystemConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemConfigSelect<ExtArgs> | null;
    omit?: Prisma.SystemConfigOmit<ExtArgs> | null;
    where: Prisma.SystemConfigWhereUniqueInput;
};
export type SystemConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemConfigSelect<ExtArgs> | null;
    omit?: Prisma.SystemConfigOmit<ExtArgs> | null;
    where?: Prisma.SystemConfigWhereInput;
    orderBy?: Prisma.SystemConfigOrderByWithRelationInput | Prisma.SystemConfigOrderByWithRelationInput[];
    cursor?: Prisma.SystemConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SystemConfigScalarFieldEnum | Prisma.SystemConfigScalarFieldEnum[];
};
export type SystemConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemConfigSelect<ExtArgs> | null;
    omit?: Prisma.SystemConfigOmit<ExtArgs> | null;
    where?: Prisma.SystemConfigWhereInput;
    orderBy?: Prisma.SystemConfigOrderByWithRelationInput | Prisma.SystemConfigOrderByWithRelationInput[];
    cursor?: Prisma.SystemConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SystemConfigScalarFieldEnum | Prisma.SystemConfigScalarFieldEnum[];
};
export type SystemConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemConfigSelect<ExtArgs> | null;
    omit?: Prisma.SystemConfigOmit<ExtArgs> | null;
    where?: Prisma.SystemConfigWhereInput;
    orderBy?: Prisma.SystemConfigOrderByWithRelationInput | Prisma.SystemConfigOrderByWithRelationInput[];
    cursor?: Prisma.SystemConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SystemConfigScalarFieldEnum | Prisma.SystemConfigScalarFieldEnum[];
};
export type SystemConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemConfigSelect<ExtArgs> | null;
    omit?: Prisma.SystemConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SystemConfigCreateInput, Prisma.SystemConfigUncheckedCreateInput>;
};
export type SystemConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SystemConfigCreateManyInput | Prisma.SystemConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SystemConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SystemConfigOmit<ExtArgs> | null;
    data: Prisma.SystemConfigCreateManyInput | Prisma.SystemConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SystemConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemConfigSelect<ExtArgs> | null;
    omit?: Prisma.SystemConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SystemConfigUpdateInput, Prisma.SystemConfigUncheckedUpdateInput>;
    where: Prisma.SystemConfigWhereUniqueInput;
};
export type SystemConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SystemConfigUpdateManyMutationInput, Prisma.SystemConfigUncheckedUpdateManyInput>;
    where?: Prisma.SystemConfigWhereInput;
    limit?: number;
};
export type SystemConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SystemConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SystemConfigUpdateManyMutationInput, Prisma.SystemConfigUncheckedUpdateManyInput>;
    where?: Prisma.SystemConfigWhereInput;
    limit?: number;
};
export type SystemConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemConfigSelect<ExtArgs> | null;
    omit?: Prisma.SystemConfigOmit<ExtArgs> | null;
    where: Prisma.SystemConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.SystemConfigCreateInput, Prisma.SystemConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SystemConfigUpdateInput, Prisma.SystemConfigUncheckedUpdateInput>;
};
export type SystemConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemConfigSelect<ExtArgs> | null;
    omit?: Prisma.SystemConfigOmit<ExtArgs> | null;
    where: Prisma.SystemConfigWhereUniqueInput;
};
export type SystemConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SystemConfigWhereInput;
    limit?: number;
};
export type SystemConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SystemConfigSelect<ExtArgs> | null;
    omit?: Prisma.SystemConfigOmit<ExtArgs> | null;
};
