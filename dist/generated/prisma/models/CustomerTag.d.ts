import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomerTagModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomerTagPayload>;
export type AggregateCustomerTag = {
    _count: CustomerTagCountAggregateOutputType | null;
    _min: CustomerTagMinAggregateOutputType | null;
    _max: CustomerTagMaxAggregateOutputType | null;
};
export type CustomerTagMinAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    tag: string | null;
    source: string | null;
    createdAt: Date | null;
};
export type CustomerTagMaxAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    tag: string | null;
    source: string | null;
    createdAt: Date | null;
};
export type CustomerTagCountAggregateOutputType = {
    id: number;
    customerId: number;
    tag: number;
    source: number;
    createdAt: number;
    _all: number;
};
export type CustomerTagMinAggregateInputType = {
    id?: true;
    customerId?: true;
    tag?: true;
    source?: true;
    createdAt?: true;
};
export type CustomerTagMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    tag?: true;
    source?: true;
    createdAt?: true;
};
export type CustomerTagCountAggregateInputType = {
    id?: true;
    customerId?: true;
    tag?: true;
    source?: true;
    createdAt?: true;
    _all?: true;
};
export type CustomerTagAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerTagWhereInput;
    orderBy?: Prisma.CustomerTagOrderByWithRelationInput | Prisma.CustomerTagOrderByWithRelationInput[];
    cursor?: Prisma.CustomerTagWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerTagCountAggregateInputType;
    _min?: CustomerTagMinAggregateInputType;
    _max?: CustomerTagMaxAggregateInputType;
};
export type GetCustomerTagAggregateType<T extends CustomerTagAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomerTag]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomerTag[P]> : Prisma.GetScalarType<T[P], AggregateCustomerTag[P]>;
};
export type CustomerTagGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerTagWhereInput;
    orderBy?: Prisma.CustomerTagOrderByWithAggregationInput | Prisma.CustomerTagOrderByWithAggregationInput[];
    by: Prisma.CustomerTagScalarFieldEnum[] | Prisma.CustomerTagScalarFieldEnum;
    having?: Prisma.CustomerTagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerTagCountAggregateInputType | true;
    _min?: CustomerTagMinAggregateInputType;
    _max?: CustomerTagMaxAggregateInputType;
};
export type CustomerTagGroupByOutputType = {
    id: string;
    customerId: string;
    tag: string;
    source: string | null;
    createdAt: Date;
    _count: CustomerTagCountAggregateOutputType | null;
    _min: CustomerTagMinAggregateOutputType | null;
    _max: CustomerTagMaxAggregateOutputType | null;
};
export type GetCustomerTagGroupByPayload<T extends CustomerTagGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerTagGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerTagGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerTagGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerTagGroupByOutputType[P]>;
}>>;
export type CustomerTagWhereInput = {
    AND?: Prisma.CustomerTagWhereInput | Prisma.CustomerTagWhereInput[];
    OR?: Prisma.CustomerTagWhereInput[];
    NOT?: Prisma.CustomerTagWhereInput | Prisma.CustomerTagWhereInput[];
    id?: Prisma.UuidFilter<"CustomerTag"> | string;
    customerId?: Prisma.UuidFilter<"CustomerTag"> | string;
    tag?: Prisma.StringFilter<"CustomerTag"> | string;
    source?: Prisma.StringNullableFilter<"CustomerTag"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CustomerTag"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
};
export type CustomerTagOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tag?: Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type CustomerTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    customerId_tag?: Prisma.CustomerTagCustomerIdTagCompoundUniqueInput;
    AND?: Prisma.CustomerTagWhereInput | Prisma.CustomerTagWhereInput[];
    OR?: Prisma.CustomerTagWhereInput[];
    NOT?: Prisma.CustomerTagWhereInput | Prisma.CustomerTagWhereInput[];
    customerId?: Prisma.UuidFilter<"CustomerTag"> | string;
    tag?: Prisma.StringFilter<"CustomerTag"> | string;
    source?: Prisma.StringNullableFilter<"CustomerTag"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CustomerTag"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
}, "id" | "customerId_tag">;
export type CustomerTagOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tag?: Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CustomerTagCountOrderByAggregateInput;
    _max?: Prisma.CustomerTagMaxOrderByAggregateInput;
    _min?: Prisma.CustomerTagMinOrderByAggregateInput;
};
export type CustomerTagScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomerTagScalarWhereWithAggregatesInput | Prisma.CustomerTagScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomerTagScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomerTagScalarWhereWithAggregatesInput | Prisma.CustomerTagScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CustomerTag"> | string;
    customerId?: Prisma.UuidWithAggregatesFilter<"CustomerTag"> | string;
    tag?: Prisma.StringWithAggregatesFilter<"CustomerTag"> | string;
    source?: Prisma.StringNullableWithAggregatesFilter<"CustomerTag"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CustomerTag"> | Date | string;
};
export type CustomerTagCreateInput = {
    id?: string;
    tag: string;
    source?: string | null;
    createdAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutTagsInput;
};
export type CustomerTagUncheckedCreateInput = {
    id?: string;
    customerId: string;
    tag: string;
    source?: string | null;
    createdAt?: Date | string;
};
export type CustomerTagUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tag?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutTagsNestedInput;
};
export type CustomerTagUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    tag?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerTagCreateManyInput = {
    id?: string;
    customerId: string;
    tag: string;
    source?: string | null;
    createdAt?: Date | string;
};
export type CustomerTagUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tag?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerTagUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    tag?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerTagListRelationFilter = {
    every?: Prisma.CustomerTagWhereInput;
    some?: Prisma.CustomerTagWhereInput;
    none?: Prisma.CustomerTagWhereInput;
};
export type CustomerTagOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CustomerTagCustomerIdTagCompoundUniqueInput = {
    customerId: string;
    tag: string;
};
export type CustomerTagCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tag?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerTagMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tag?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerTagMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tag?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerTagCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CustomerTagCreateWithoutCustomerInput, Prisma.CustomerTagUncheckedCreateWithoutCustomerInput> | Prisma.CustomerTagCreateWithoutCustomerInput[] | Prisma.CustomerTagUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerTagCreateOrConnectWithoutCustomerInput | Prisma.CustomerTagCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CustomerTagCreateManyCustomerInputEnvelope;
    connect?: Prisma.CustomerTagWhereUniqueInput | Prisma.CustomerTagWhereUniqueInput[];
};
export type CustomerTagUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CustomerTagCreateWithoutCustomerInput, Prisma.CustomerTagUncheckedCreateWithoutCustomerInput> | Prisma.CustomerTagCreateWithoutCustomerInput[] | Prisma.CustomerTagUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerTagCreateOrConnectWithoutCustomerInput | Prisma.CustomerTagCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CustomerTagCreateManyCustomerInputEnvelope;
    connect?: Prisma.CustomerTagWhereUniqueInput | Prisma.CustomerTagWhereUniqueInput[];
};
export type CustomerTagUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerTagCreateWithoutCustomerInput, Prisma.CustomerTagUncheckedCreateWithoutCustomerInput> | Prisma.CustomerTagCreateWithoutCustomerInput[] | Prisma.CustomerTagUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerTagCreateOrConnectWithoutCustomerInput | Prisma.CustomerTagCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CustomerTagUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CustomerTagUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CustomerTagCreateManyCustomerInputEnvelope;
    set?: Prisma.CustomerTagWhereUniqueInput | Prisma.CustomerTagWhereUniqueInput[];
    disconnect?: Prisma.CustomerTagWhereUniqueInput | Prisma.CustomerTagWhereUniqueInput[];
    delete?: Prisma.CustomerTagWhereUniqueInput | Prisma.CustomerTagWhereUniqueInput[];
    connect?: Prisma.CustomerTagWhereUniqueInput | Prisma.CustomerTagWhereUniqueInput[];
    update?: Prisma.CustomerTagUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CustomerTagUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CustomerTagUpdateManyWithWhereWithoutCustomerInput | Prisma.CustomerTagUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CustomerTagScalarWhereInput | Prisma.CustomerTagScalarWhereInput[];
};
export type CustomerTagUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerTagCreateWithoutCustomerInput, Prisma.CustomerTagUncheckedCreateWithoutCustomerInput> | Prisma.CustomerTagCreateWithoutCustomerInput[] | Prisma.CustomerTagUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerTagCreateOrConnectWithoutCustomerInput | Prisma.CustomerTagCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CustomerTagUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CustomerTagUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CustomerTagCreateManyCustomerInputEnvelope;
    set?: Prisma.CustomerTagWhereUniqueInput | Prisma.CustomerTagWhereUniqueInput[];
    disconnect?: Prisma.CustomerTagWhereUniqueInput | Prisma.CustomerTagWhereUniqueInput[];
    delete?: Prisma.CustomerTagWhereUniqueInput | Prisma.CustomerTagWhereUniqueInput[];
    connect?: Prisma.CustomerTagWhereUniqueInput | Prisma.CustomerTagWhereUniqueInput[];
    update?: Prisma.CustomerTagUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CustomerTagUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CustomerTagUpdateManyWithWhereWithoutCustomerInput | Prisma.CustomerTagUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CustomerTagScalarWhereInput | Prisma.CustomerTagScalarWhereInput[];
};
export type CustomerTagCreateWithoutCustomerInput = {
    id?: string;
    tag: string;
    source?: string | null;
    createdAt?: Date | string;
};
export type CustomerTagUncheckedCreateWithoutCustomerInput = {
    id?: string;
    tag: string;
    source?: string | null;
    createdAt?: Date | string;
};
export type CustomerTagCreateOrConnectWithoutCustomerInput = {
    where: Prisma.CustomerTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerTagCreateWithoutCustomerInput, Prisma.CustomerTagUncheckedCreateWithoutCustomerInput>;
};
export type CustomerTagCreateManyCustomerInputEnvelope = {
    data: Prisma.CustomerTagCreateManyCustomerInput | Prisma.CustomerTagCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type CustomerTagUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CustomerTagWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustomerTagUpdateWithoutCustomerInput, Prisma.CustomerTagUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.CustomerTagCreateWithoutCustomerInput, Prisma.CustomerTagUncheckedCreateWithoutCustomerInput>;
};
export type CustomerTagUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CustomerTagWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustomerTagUpdateWithoutCustomerInput, Prisma.CustomerTagUncheckedUpdateWithoutCustomerInput>;
};
export type CustomerTagUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.CustomerTagScalarWhereInput;
    data: Prisma.XOR<Prisma.CustomerTagUpdateManyMutationInput, Prisma.CustomerTagUncheckedUpdateManyWithoutCustomerInput>;
};
export type CustomerTagScalarWhereInput = {
    AND?: Prisma.CustomerTagScalarWhereInput | Prisma.CustomerTagScalarWhereInput[];
    OR?: Prisma.CustomerTagScalarWhereInput[];
    NOT?: Prisma.CustomerTagScalarWhereInput | Prisma.CustomerTagScalarWhereInput[];
    id?: Prisma.UuidFilter<"CustomerTag"> | string;
    customerId?: Prisma.UuidFilter<"CustomerTag"> | string;
    tag?: Prisma.StringFilter<"CustomerTag"> | string;
    source?: Prisma.StringNullableFilter<"CustomerTag"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CustomerTag"> | Date | string;
};
export type CustomerTagCreateManyCustomerInput = {
    id?: string;
    tag: string;
    source?: string | null;
    createdAt?: Date | string;
};
export type CustomerTagUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tag?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerTagUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tag?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerTagUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tag?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerTagSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    tag?: boolean;
    source?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerTag"]>;
export type CustomerTagSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    tag?: boolean;
    source?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerTag"]>;
export type CustomerTagSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    tag?: boolean;
    source?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerTag"]>;
export type CustomerTagSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    tag?: boolean;
    source?: boolean;
    createdAt?: boolean;
};
export type CustomerTagOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "tag" | "source" | "createdAt", ExtArgs["result"]["customerTag"]>;
export type CustomerTagInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type CustomerTagIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type CustomerTagIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $CustomerTagPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CustomerTag";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customerId: string;
        tag: string;
        source: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["customerTag"]>;
    composites: {};
};
export type CustomerTagGetPayload<S extends boolean | null | undefined | CustomerTagDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomerTagPayload, S>;
export type CustomerTagCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomerTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerTagCountAggregateInputType | true;
};
export interface CustomerTagDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CustomerTag'];
        meta: {
            name: 'CustomerTag';
        };
    };
    findUnique<T extends CustomerTagFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomerTagFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomerTagClient<runtime.Types.Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomerTagFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomerTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerTagClient<runtime.Types.Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomerTagFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomerTagFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomerTagClient<runtime.Types.Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomerTagFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomerTagFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerTagClient<runtime.Types.Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomerTagFindManyArgs>(args?: Prisma.SelectSubset<T, CustomerTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomerTagCreateArgs>(args: Prisma.SelectSubset<T, CustomerTagCreateArgs<ExtArgs>>): Prisma.Prisma__CustomerTagClient<runtime.Types.Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomerTagCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomerTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomerTagCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomerTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomerTagDeleteArgs>(args: Prisma.SelectSubset<T, CustomerTagDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomerTagClient<runtime.Types.Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomerTagUpdateArgs>(args: Prisma.SelectSubset<T, CustomerTagUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomerTagClient<runtime.Types.Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomerTagDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomerTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomerTagUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomerTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomerTagUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomerTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomerTagUpsertArgs>(args: Prisma.SelectSubset<T, CustomerTagUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomerTagClient<runtime.Types.Result.GetResult<Prisma.$CustomerTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomerTagCountArgs>(args?: Prisma.Subset<T, CustomerTagCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerTagCountAggregateOutputType> : number>;
    aggregate<T extends CustomerTagAggregateArgs>(args: Prisma.Subset<T, CustomerTagAggregateArgs>): Prisma.PrismaPromise<GetCustomerTagAggregateType<T>>;
    groupBy<T extends CustomerTagGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomerTagGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomerTagGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomerTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomerTagFieldRefs;
}
export interface Prisma__CustomerTagClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomerTagFieldRefs {
    readonly id: Prisma.FieldRef<"CustomerTag", 'String'>;
    readonly customerId: Prisma.FieldRef<"CustomerTag", 'String'>;
    readonly tag: Prisma.FieldRef<"CustomerTag", 'String'>;
    readonly source: Prisma.FieldRef<"CustomerTag", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CustomerTag", 'DateTime'>;
}
export type CustomerTagFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTagSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTagOmit<ExtArgs> | null;
    include?: Prisma.CustomerTagInclude<ExtArgs> | null;
    where: Prisma.CustomerTagWhereUniqueInput;
};
export type CustomerTagFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTagSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTagOmit<ExtArgs> | null;
    include?: Prisma.CustomerTagInclude<ExtArgs> | null;
    where: Prisma.CustomerTagWhereUniqueInput;
};
export type CustomerTagFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTagSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTagOmit<ExtArgs> | null;
    include?: Prisma.CustomerTagInclude<ExtArgs> | null;
    where?: Prisma.CustomerTagWhereInput;
    orderBy?: Prisma.CustomerTagOrderByWithRelationInput | Prisma.CustomerTagOrderByWithRelationInput[];
    cursor?: Prisma.CustomerTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerTagScalarFieldEnum | Prisma.CustomerTagScalarFieldEnum[];
};
export type CustomerTagFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTagSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTagOmit<ExtArgs> | null;
    include?: Prisma.CustomerTagInclude<ExtArgs> | null;
    where?: Prisma.CustomerTagWhereInput;
    orderBy?: Prisma.CustomerTagOrderByWithRelationInput | Prisma.CustomerTagOrderByWithRelationInput[];
    cursor?: Prisma.CustomerTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerTagScalarFieldEnum | Prisma.CustomerTagScalarFieldEnum[];
};
export type CustomerTagFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTagSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTagOmit<ExtArgs> | null;
    include?: Prisma.CustomerTagInclude<ExtArgs> | null;
    where?: Prisma.CustomerTagWhereInput;
    orderBy?: Prisma.CustomerTagOrderByWithRelationInput | Prisma.CustomerTagOrderByWithRelationInput[];
    cursor?: Prisma.CustomerTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerTagScalarFieldEnum | Prisma.CustomerTagScalarFieldEnum[];
};
export type CustomerTagCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTagSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTagOmit<ExtArgs> | null;
    include?: Prisma.CustomerTagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerTagCreateInput, Prisma.CustomerTagUncheckedCreateInput>;
};
export type CustomerTagCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomerTagCreateManyInput | Prisma.CustomerTagCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomerTagCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTagSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerTagOmit<ExtArgs> | null;
    data: Prisma.CustomerTagCreateManyInput | Prisma.CustomerTagCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CustomerTagIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CustomerTagUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTagSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTagOmit<ExtArgs> | null;
    include?: Prisma.CustomerTagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerTagUpdateInput, Prisma.CustomerTagUncheckedUpdateInput>;
    where: Prisma.CustomerTagWhereUniqueInput;
};
export type CustomerTagUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomerTagUpdateManyMutationInput, Prisma.CustomerTagUncheckedUpdateManyInput>;
    where?: Prisma.CustomerTagWhereInput;
    limit?: number;
};
export type CustomerTagUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTagSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerTagOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerTagUpdateManyMutationInput, Prisma.CustomerTagUncheckedUpdateManyInput>;
    where?: Prisma.CustomerTagWhereInput;
    limit?: number;
    include?: Prisma.CustomerTagIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CustomerTagUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTagSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTagOmit<ExtArgs> | null;
    include?: Prisma.CustomerTagInclude<ExtArgs> | null;
    where: Prisma.CustomerTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerTagCreateInput, Prisma.CustomerTagUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomerTagUpdateInput, Prisma.CustomerTagUncheckedUpdateInput>;
};
export type CustomerTagDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTagSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTagOmit<ExtArgs> | null;
    include?: Prisma.CustomerTagInclude<ExtArgs> | null;
    where: Prisma.CustomerTagWhereUniqueInput;
};
export type CustomerTagDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerTagWhereInput;
    limit?: number;
};
export type CustomerTagDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerTagSelect<ExtArgs> | null;
    omit?: Prisma.CustomerTagOmit<ExtArgs> | null;
    include?: Prisma.CustomerTagInclude<ExtArgs> | null;
};
