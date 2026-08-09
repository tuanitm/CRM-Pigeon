import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ConsentDocumentVersionModel = runtime.Types.Result.DefaultSelection<Prisma.$ConsentDocumentVersionPayload>;
export type AggregateConsentDocumentVersion = {
    _count: ConsentDocumentVersionCountAggregateOutputType | null;
    _min: ConsentDocumentVersionMinAggregateOutputType | null;
    _max: ConsentDocumentVersionMaxAggregateOutputType | null;
};
export type ConsentDocumentVersionMinAggregateOutputType = {
    id: string | null;
    documentType: string | null;
    version: string | null;
    contentUrl: string | null;
    effectiveFrom: Date | null;
    createdAt: Date | null;
};
export type ConsentDocumentVersionMaxAggregateOutputType = {
    id: string | null;
    documentType: string | null;
    version: string | null;
    contentUrl: string | null;
    effectiveFrom: Date | null;
    createdAt: Date | null;
};
export type ConsentDocumentVersionCountAggregateOutputType = {
    id: number;
    documentType: number;
    version: number;
    contentUrl: number;
    effectiveFrom: number;
    createdAt: number;
    _all: number;
};
export type ConsentDocumentVersionMinAggregateInputType = {
    id?: true;
    documentType?: true;
    version?: true;
    contentUrl?: true;
    effectiveFrom?: true;
    createdAt?: true;
};
export type ConsentDocumentVersionMaxAggregateInputType = {
    id?: true;
    documentType?: true;
    version?: true;
    contentUrl?: true;
    effectiveFrom?: true;
    createdAt?: true;
};
export type ConsentDocumentVersionCountAggregateInputType = {
    id?: true;
    documentType?: true;
    version?: true;
    contentUrl?: true;
    effectiveFrom?: true;
    createdAt?: true;
    _all?: true;
};
export type ConsentDocumentVersionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsentDocumentVersionWhereInput;
    orderBy?: Prisma.ConsentDocumentVersionOrderByWithRelationInput | Prisma.ConsentDocumentVersionOrderByWithRelationInput[];
    cursor?: Prisma.ConsentDocumentVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConsentDocumentVersionCountAggregateInputType;
    _min?: ConsentDocumentVersionMinAggregateInputType;
    _max?: ConsentDocumentVersionMaxAggregateInputType;
};
export type GetConsentDocumentVersionAggregateType<T extends ConsentDocumentVersionAggregateArgs> = {
    [P in keyof T & keyof AggregateConsentDocumentVersion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConsentDocumentVersion[P]> : Prisma.GetScalarType<T[P], AggregateConsentDocumentVersion[P]>;
};
export type ConsentDocumentVersionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsentDocumentVersionWhereInput;
    orderBy?: Prisma.ConsentDocumentVersionOrderByWithAggregationInput | Prisma.ConsentDocumentVersionOrderByWithAggregationInput[];
    by: Prisma.ConsentDocumentVersionScalarFieldEnum[] | Prisma.ConsentDocumentVersionScalarFieldEnum;
    having?: Prisma.ConsentDocumentVersionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConsentDocumentVersionCountAggregateInputType | true;
    _min?: ConsentDocumentVersionMinAggregateInputType;
    _max?: ConsentDocumentVersionMaxAggregateInputType;
};
export type ConsentDocumentVersionGroupByOutputType = {
    id: string;
    documentType: string;
    version: string;
    contentUrl: string | null;
    effectiveFrom: Date;
    createdAt: Date;
    _count: ConsentDocumentVersionCountAggregateOutputType | null;
    _min: ConsentDocumentVersionMinAggregateOutputType | null;
    _max: ConsentDocumentVersionMaxAggregateOutputType | null;
};
export type GetConsentDocumentVersionGroupByPayload<T extends ConsentDocumentVersionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConsentDocumentVersionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConsentDocumentVersionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConsentDocumentVersionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConsentDocumentVersionGroupByOutputType[P]>;
}>>;
export type ConsentDocumentVersionWhereInput = {
    AND?: Prisma.ConsentDocumentVersionWhereInput | Prisma.ConsentDocumentVersionWhereInput[];
    OR?: Prisma.ConsentDocumentVersionWhereInput[];
    NOT?: Prisma.ConsentDocumentVersionWhereInput | Prisma.ConsentDocumentVersionWhereInput[];
    id?: Prisma.UuidFilter<"ConsentDocumentVersion"> | string;
    documentType?: Prisma.StringFilter<"ConsentDocumentVersion"> | string;
    version?: Prisma.StringFilter<"ConsentDocumentVersion"> | string;
    contentUrl?: Prisma.StringNullableFilter<"ConsentDocumentVersion"> | string | null;
    effectiveFrom?: Prisma.DateTimeFilter<"ConsentDocumentVersion"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"ConsentDocumentVersion"> | Date | string;
    consents?: Prisma.ConsentListRelationFilter;
};
export type ConsentDocumentVersionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    contentUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    consents?: Prisma.ConsentOrderByRelationAggregateInput;
};
export type ConsentDocumentVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    documentType_version?: Prisma.ConsentDocumentVersionDocumentTypeVersionCompoundUniqueInput;
    AND?: Prisma.ConsentDocumentVersionWhereInput | Prisma.ConsentDocumentVersionWhereInput[];
    OR?: Prisma.ConsentDocumentVersionWhereInput[];
    NOT?: Prisma.ConsentDocumentVersionWhereInput | Prisma.ConsentDocumentVersionWhereInput[];
    documentType?: Prisma.StringFilter<"ConsentDocumentVersion"> | string;
    version?: Prisma.StringFilter<"ConsentDocumentVersion"> | string;
    contentUrl?: Prisma.StringNullableFilter<"ConsentDocumentVersion"> | string | null;
    effectiveFrom?: Prisma.DateTimeFilter<"ConsentDocumentVersion"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"ConsentDocumentVersion"> | Date | string;
    consents?: Prisma.ConsentListRelationFilter;
}, "id" | "documentType_version">;
export type ConsentDocumentVersionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    contentUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ConsentDocumentVersionCountOrderByAggregateInput;
    _max?: Prisma.ConsentDocumentVersionMaxOrderByAggregateInput;
    _min?: Prisma.ConsentDocumentVersionMinOrderByAggregateInput;
};
export type ConsentDocumentVersionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConsentDocumentVersionScalarWhereWithAggregatesInput | Prisma.ConsentDocumentVersionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConsentDocumentVersionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConsentDocumentVersionScalarWhereWithAggregatesInput | Prisma.ConsentDocumentVersionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ConsentDocumentVersion"> | string;
    documentType?: Prisma.StringWithAggregatesFilter<"ConsentDocumentVersion"> | string;
    version?: Prisma.StringWithAggregatesFilter<"ConsentDocumentVersion"> | string;
    contentUrl?: Prisma.StringNullableWithAggregatesFilter<"ConsentDocumentVersion"> | string | null;
    effectiveFrom?: Prisma.DateTimeWithAggregatesFilter<"ConsentDocumentVersion"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ConsentDocumentVersion"> | Date | string;
};
export type ConsentDocumentVersionCreateInput = {
    id?: string;
    documentType: string;
    version: string;
    contentUrl?: string | null;
    effectiveFrom: Date | string;
    createdAt?: Date | string;
    consents?: Prisma.ConsentCreateNestedManyWithoutDocumentVersionInput;
};
export type ConsentDocumentVersionUncheckedCreateInput = {
    id?: string;
    documentType: string;
    version: string;
    contentUrl?: string | null;
    effectiveFrom: Date | string;
    createdAt?: Date | string;
    consents?: Prisma.ConsentUncheckedCreateNestedManyWithoutDocumentVersionInput;
};
export type ConsentDocumentVersionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consents?: Prisma.ConsentUpdateManyWithoutDocumentVersionNestedInput;
};
export type ConsentDocumentVersionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    consents?: Prisma.ConsentUncheckedUpdateManyWithoutDocumentVersionNestedInput;
};
export type ConsentDocumentVersionCreateManyInput = {
    id?: string;
    documentType: string;
    version: string;
    contentUrl?: string | null;
    effectiveFrom: Date | string;
    createdAt?: Date | string;
};
export type ConsentDocumentVersionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsentDocumentVersionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsentDocumentVersionDocumentTypeVersionCompoundUniqueInput = {
    documentType: string;
    version: string;
};
export type ConsentDocumentVersionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    contentUrl?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConsentDocumentVersionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    contentUrl?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConsentDocumentVersionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    documentType?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    contentUrl?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConsentDocumentVersionNullableScalarRelationFilter = {
    is?: Prisma.ConsentDocumentVersionWhereInput | null;
    isNot?: Prisma.ConsentDocumentVersionWhereInput | null;
};
export type ConsentDocumentVersionCreateNestedOneWithoutConsentsInput = {
    create?: Prisma.XOR<Prisma.ConsentDocumentVersionCreateWithoutConsentsInput, Prisma.ConsentDocumentVersionUncheckedCreateWithoutConsentsInput>;
    connectOrCreate?: Prisma.ConsentDocumentVersionCreateOrConnectWithoutConsentsInput;
    connect?: Prisma.ConsentDocumentVersionWhereUniqueInput;
};
export type ConsentDocumentVersionUpdateOneWithoutConsentsNestedInput = {
    create?: Prisma.XOR<Prisma.ConsentDocumentVersionCreateWithoutConsentsInput, Prisma.ConsentDocumentVersionUncheckedCreateWithoutConsentsInput>;
    connectOrCreate?: Prisma.ConsentDocumentVersionCreateOrConnectWithoutConsentsInput;
    upsert?: Prisma.ConsentDocumentVersionUpsertWithoutConsentsInput;
    disconnect?: Prisma.ConsentDocumentVersionWhereInput | boolean;
    delete?: Prisma.ConsentDocumentVersionWhereInput | boolean;
    connect?: Prisma.ConsentDocumentVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConsentDocumentVersionUpdateToOneWithWhereWithoutConsentsInput, Prisma.ConsentDocumentVersionUpdateWithoutConsentsInput>, Prisma.ConsentDocumentVersionUncheckedUpdateWithoutConsentsInput>;
};
export type ConsentDocumentVersionCreateWithoutConsentsInput = {
    id?: string;
    documentType: string;
    version: string;
    contentUrl?: string | null;
    effectiveFrom: Date | string;
    createdAt?: Date | string;
};
export type ConsentDocumentVersionUncheckedCreateWithoutConsentsInput = {
    id?: string;
    documentType: string;
    version: string;
    contentUrl?: string | null;
    effectiveFrom: Date | string;
    createdAt?: Date | string;
};
export type ConsentDocumentVersionCreateOrConnectWithoutConsentsInput = {
    where: Prisma.ConsentDocumentVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsentDocumentVersionCreateWithoutConsentsInput, Prisma.ConsentDocumentVersionUncheckedCreateWithoutConsentsInput>;
};
export type ConsentDocumentVersionUpsertWithoutConsentsInput = {
    update: Prisma.XOR<Prisma.ConsentDocumentVersionUpdateWithoutConsentsInput, Prisma.ConsentDocumentVersionUncheckedUpdateWithoutConsentsInput>;
    create: Prisma.XOR<Prisma.ConsentDocumentVersionCreateWithoutConsentsInput, Prisma.ConsentDocumentVersionUncheckedCreateWithoutConsentsInput>;
    where?: Prisma.ConsentDocumentVersionWhereInput;
};
export type ConsentDocumentVersionUpdateToOneWithWhereWithoutConsentsInput = {
    where?: Prisma.ConsentDocumentVersionWhereInput;
    data: Prisma.XOR<Prisma.ConsentDocumentVersionUpdateWithoutConsentsInput, Prisma.ConsentDocumentVersionUncheckedUpdateWithoutConsentsInput>;
};
export type ConsentDocumentVersionUpdateWithoutConsentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsentDocumentVersionUncheckedUpdateWithoutConsentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    documentType?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.StringFieldUpdateOperationsInput | string;
    contentUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConsentDocumentVersionCountOutputType = {
    consents: number;
};
export type ConsentDocumentVersionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    consents?: boolean | ConsentDocumentVersionCountOutputTypeCountConsentsArgs;
};
export type ConsentDocumentVersionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentDocumentVersionCountOutputTypeSelect<ExtArgs> | null;
};
export type ConsentDocumentVersionCountOutputTypeCountConsentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsentWhereInput;
};
export type ConsentDocumentVersionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentType?: boolean;
    version?: boolean;
    contentUrl?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
    consents?: boolean | Prisma.ConsentDocumentVersion$consentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ConsentDocumentVersionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["consentDocumentVersion"]>;
export type ConsentDocumentVersionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentType?: boolean;
    version?: boolean;
    contentUrl?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["consentDocumentVersion"]>;
export type ConsentDocumentVersionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    documentType?: boolean;
    version?: boolean;
    contentUrl?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["consentDocumentVersion"]>;
export type ConsentDocumentVersionSelectScalar = {
    id?: boolean;
    documentType?: boolean;
    version?: boolean;
    contentUrl?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
};
export type ConsentDocumentVersionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "documentType" | "version" | "contentUrl" | "effectiveFrom" | "createdAt", ExtArgs["result"]["consentDocumentVersion"]>;
export type ConsentDocumentVersionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    consents?: boolean | Prisma.ConsentDocumentVersion$consentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ConsentDocumentVersionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ConsentDocumentVersionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ConsentDocumentVersionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ConsentDocumentVersionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ConsentDocumentVersion";
    objects: {
        consents: Prisma.$ConsentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        documentType: string;
        version: string;
        contentUrl: string | null;
        effectiveFrom: Date;
        createdAt: Date;
    }, ExtArgs["result"]["consentDocumentVersion"]>;
    composites: {};
};
export type ConsentDocumentVersionGetPayload<S extends boolean | null | undefined | ConsentDocumentVersionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConsentDocumentVersionPayload, S>;
export type ConsentDocumentVersionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConsentDocumentVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConsentDocumentVersionCountAggregateInputType | true;
};
export interface ConsentDocumentVersionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ConsentDocumentVersion'];
        meta: {
            name: 'ConsentDocumentVersion';
        };
    };
    findUnique<T extends ConsentDocumentVersionFindUniqueArgs>(args: Prisma.SelectSubset<T, ConsentDocumentVersionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConsentDocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$ConsentDocumentVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConsentDocumentVersionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConsentDocumentVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsentDocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$ConsentDocumentVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConsentDocumentVersionFindFirstArgs>(args?: Prisma.SelectSubset<T, ConsentDocumentVersionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConsentDocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$ConsentDocumentVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConsentDocumentVersionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConsentDocumentVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConsentDocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$ConsentDocumentVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConsentDocumentVersionFindManyArgs>(args?: Prisma.SelectSubset<T, ConsentDocumentVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsentDocumentVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConsentDocumentVersionCreateArgs>(args: Prisma.SelectSubset<T, ConsentDocumentVersionCreateArgs<ExtArgs>>): Prisma.Prisma__ConsentDocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$ConsentDocumentVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConsentDocumentVersionCreateManyArgs>(args?: Prisma.SelectSubset<T, ConsentDocumentVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConsentDocumentVersionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConsentDocumentVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsentDocumentVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConsentDocumentVersionDeleteArgs>(args: Prisma.SelectSubset<T, ConsentDocumentVersionDeleteArgs<ExtArgs>>): Prisma.Prisma__ConsentDocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$ConsentDocumentVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConsentDocumentVersionUpdateArgs>(args: Prisma.SelectSubset<T, ConsentDocumentVersionUpdateArgs<ExtArgs>>): Prisma.Prisma__ConsentDocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$ConsentDocumentVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConsentDocumentVersionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConsentDocumentVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConsentDocumentVersionUpdateManyArgs>(args: Prisma.SelectSubset<T, ConsentDocumentVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConsentDocumentVersionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConsentDocumentVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsentDocumentVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConsentDocumentVersionUpsertArgs>(args: Prisma.SelectSubset<T, ConsentDocumentVersionUpsertArgs<ExtArgs>>): Prisma.Prisma__ConsentDocumentVersionClient<runtime.Types.Result.GetResult<Prisma.$ConsentDocumentVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConsentDocumentVersionCountArgs>(args?: Prisma.Subset<T, ConsentDocumentVersionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConsentDocumentVersionCountAggregateOutputType> : number>;
    aggregate<T extends ConsentDocumentVersionAggregateArgs>(args: Prisma.Subset<T, ConsentDocumentVersionAggregateArgs>): Prisma.PrismaPromise<GetConsentDocumentVersionAggregateType<T>>;
    groupBy<T extends ConsentDocumentVersionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConsentDocumentVersionGroupByArgs['orderBy'];
    } : {
        orderBy?: ConsentDocumentVersionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConsentDocumentVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsentDocumentVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConsentDocumentVersionFieldRefs;
}
export interface Prisma__ConsentDocumentVersionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    consents<T extends Prisma.ConsentDocumentVersion$consentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ConsentDocumentVersion$consentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConsentDocumentVersionFieldRefs {
    readonly id: Prisma.FieldRef<"ConsentDocumentVersion", 'String'>;
    readonly documentType: Prisma.FieldRef<"ConsentDocumentVersion", 'String'>;
    readonly version: Prisma.FieldRef<"ConsentDocumentVersion", 'String'>;
    readonly contentUrl: Prisma.FieldRef<"ConsentDocumentVersion", 'String'>;
    readonly effectiveFrom: Prisma.FieldRef<"ConsentDocumentVersion", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ConsentDocumentVersion", 'DateTime'>;
}
export type ConsentDocumentVersionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentDocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ConsentDocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.ConsentDocumentVersionInclude<ExtArgs> | null;
    where: Prisma.ConsentDocumentVersionWhereUniqueInput;
};
export type ConsentDocumentVersionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentDocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ConsentDocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.ConsentDocumentVersionInclude<ExtArgs> | null;
    where: Prisma.ConsentDocumentVersionWhereUniqueInput;
};
export type ConsentDocumentVersionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentDocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ConsentDocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.ConsentDocumentVersionInclude<ExtArgs> | null;
    where?: Prisma.ConsentDocumentVersionWhereInput;
    orderBy?: Prisma.ConsentDocumentVersionOrderByWithRelationInput | Prisma.ConsentDocumentVersionOrderByWithRelationInput[];
    cursor?: Prisma.ConsentDocumentVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsentDocumentVersionScalarFieldEnum | Prisma.ConsentDocumentVersionScalarFieldEnum[];
};
export type ConsentDocumentVersionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentDocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ConsentDocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.ConsentDocumentVersionInclude<ExtArgs> | null;
    where?: Prisma.ConsentDocumentVersionWhereInput;
    orderBy?: Prisma.ConsentDocumentVersionOrderByWithRelationInput | Prisma.ConsentDocumentVersionOrderByWithRelationInput[];
    cursor?: Prisma.ConsentDocumentVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsentDocumentVersionScalarFieldEnum | Prisma.ConsentDocumentVersionScalarFieldEnum[];
};
export type ConsentDocumentVersionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentDocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ConsentDocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.ConsentDocumentVersionInclude<ExtArgs> | null;
    where?: Prisma.ConsentDocumentVersionWhereInput;
    orderBy?: Prisma.ConsentDocumentVersionOrderByWithRelationInput | Prisma.ConsentDocumentVersionOrderByWithRelationInput[];
    cursor?: Prisma.ConsentDocumentVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsentDocumentVersionScalarFieldEnum | Prisma.ConsentDocumentVersionScalarFieldEnum[];
};
export type ConsentDocumentVersionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentDocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ConsentDocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.ConsentDocumentVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsentDocumentVersionCreateInput, Prisma.ConsentDocumentVersionUncheckedCreateInput>;
};
export type ConsentDocumentVersionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConsentDocumentVersionCreateManyInput | Prisma.ConsentDocumentVersionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConsentDocumentVersionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentDocumentVersionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConsentDocumentVersionOmit<ExtArgs> | null;
    data: Prisma.ConsentDocumentVersionCreateManyInput | Prisma.ConsentDocumentVersionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConsentDocumentVersionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentDocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ConsentDocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.ConsentDocumentVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsentDocumentVersionUpdateInput, Prisma.ConsentDocumentVersionUncheckedUpdateInput>;
    where: Prisma.ConsentDocumentVersionWhereUniqueInput;
};
export type ConsentDocumentVersionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConsentDocumentVersionUpdateManyMutationInput, Prisma.ConsentDocumentVersionUncheckedUpdateManyInput>;
    where?: Prisma.ConsentDocumentVersionWhereInput;
    limit?: number;
};
export type ConsentDocumentVersionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentDocumentVersionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConsentDocumentVersionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConsentDocumentVersionUpdateManyMutationInput, Prisma.ConsentDocumentVersionUncheckedUpdateManyInput>;
    where?: Prisma.ConsentDocumentVersionWhereInput;
    limit?: number;
};
export type ConsentDocumentVersionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentDocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ConsentDocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.ConsentDocumentVersionInclude<ExtArgs> | null;
    where: Prisma.ConsentDocumentVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConsentDocumentVersionCreateInput, Prisma.ConsentDocumentVersionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConsentDocumentVersionUpdateInput, Prisma.ConsentDocumentVersionUncheckedUpdateInput>;
};
export type ConsentDocumentVersionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentDocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ConsentDocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.ConsentDocumentVersionInclude<ExtArgs> | null;
    where: Prisma.ConsentDocumentVersionWhereUniqueInput;
};
export type ConsentDocumentVersionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConsentDocumentVersionWhereInput;
    limit?: number;
};
export type ConsentDocumentVersion$consentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentSelect<ExtArgs> | null;
    omit?: Prisma.ConsentOmit<ExtArgs> | null;
    include?: Prisma.ConsentInclude<ExtArgs> | null;
    where?: Prisma.ConsentWhereInput;
    orderBy?: Prisma.ConsentOrderByWithRelationInput | Prisma.ConsentOrderByWithRelationInput[];
    cursor?: Prisma.ConsentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConsentScalarFieldEnum | Prisma.ConsentScalarFieldEnum[];
};
export type ConsentDocumentVersionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConsentDocumentVersionSelect<ExtArgs> | null;
    omit?: Prisma.ConsentDocumentVersionOmit<ExtArgs> | null;
    include?: Prisma.ConsentDocumentVersionInclude<ExtArgs> | null;
};
