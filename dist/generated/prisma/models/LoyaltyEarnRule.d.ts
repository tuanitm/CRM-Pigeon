import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LoyaltyEarnRuleModel = runtime.Types.Result.DefaultSelection<Prisma.$LoyaltyEarnRulePayload>;
export type AggregateLoyaltyEarnRule = {
    _count: LoyaltyEarnRuleCountAggregateOutputType | null;
    _min: LoyaltyEarnRuleMinAggregateOutputType | null;
    _max: LoyaltyEarnRuleMaxAggregateOutputType | null;
};
export type LoyaltyEarnRuleMinAggregateOutputType = {
    id: string | null;
    source: string | null;
    ruleName: string | null;
    tierMultiplierApplies: boolean | null;
    isActive: boolean | null;
    validFrom: Date | null;
    validUntil: Date | null;
    createdAt: Date | null;
};
export type LoyaltyEarnRuleMaxAggregateOutputType = {
    id: string | null;
    source: string | null;
    ruleName: string | null;
    tierMultiplierApplies: boolean | null;
    isActive: boolean | null;
    validFrom: Date | null;
    validUntil: Date | null;
    createdAt: Date | null;
};
export type LoyaltyEarnRuleCountAggregateOutputType = {
    id: number;
    source: number;
    ruleName: number;
    pointsFormula: number;
    conditions: number;
    tierMultiplierApplies: number;
    isActive: number;
    validFrom: number;
    validUntil: number;
    createdAt: number;
    _all: number;
};
export type LoyaltyEarnRuleMinAggregateInputType = {
    id?: true;
    source?: true;
    ruleName?: true;
    tierMultiplierApplies?: true;
    isActive?: true;
    validFrom?: true;
    validUntil?: true;
    createdAt?: true;
};
export type LoyaltyEarnRuleMaxAggregateInputType = {
    id?: true;
    source?: true;
    ruleName?: true;
    tierMultiplierApplies?: true;
    isActive?: true;
    validFrom?: true;
    validUntil?: true;
    createdAt?: true;
};
export type LoyaltyEarnRuleCountAggregateInputType = {
    id?: true;
    source?: true;
    ruleName?: true;
    pointsFormula?: true;
    conditions?: true;
    tierMultiplierApplies?: true;
    isActive?: true;
    validFrom?: true;
    validUntil?: true;
    createdAt?: true;
    _all?: true;
};
export type LoyaltyEarnRuleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyEarnRuleWhereInput;
    orderBy?: Prisma.LoyaltyEarnRuleOrderByWithRelationInput | Prisma.LoyaltyEarnRuleOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyEarnRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LoyaltyEarnRuleCountAggregateInputType;
    _min?: LoyaltyEarnRuleMinAggregateInputType;
    _max?: LoyaltyEarnRuleMaxAggregateInputType;
};
export type GetLoyaltyEarnRuleAggregateType<T extends LoyaltyEarnRuleAggregateArgs> = {
    [P in keyof T & keyof AggregateLoyaltyEarnRule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLoyaltyEarnRule[P]> : Prisma.GetScalarType<T[P], AggregateLoyaltyEarnRule[P]>;
};
export type LoyaltyEarnRuleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyEarnRuleWhereInput;
    orderBy?: Prisma.LoyaltyEarnRuleOrderByWithAggregationInput | Prisma.LoyaltyEarnRuleOrderByWithAggregationInput[];
    by: Prisma.LoyaltyEarnRuleScalarFieldEnum[] | Prisma.LoyaltyEarnRuleScalarFieldEnum;
    having?: Prisma.LoyaltyEarnRuleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoyaltyEarnRuleCountAggregateInputType | true;
    _min?: LoyaltyEarnRuleMinAggregateInputType;
    _max?: LoyaltyEarnRuleMaxAggregateInputType;
};
export type LoyaltyEarnRuleGroupByOutputType = {
    id: string;
    source: string;
    ruleName: string;
    pointsFormula: runtime.JsonValue;
    conditions: runtime.JsonValue | null;
    tierMultiplierApplies: boolean;
    isActive: boolean;
    validFrom: Date | null;
    validUntil: Date | null;
    createdAt: Date;
    _count: LoyaltyEarnRuleCountAggregateOutputType | null;
    _min: LoyaltyEarnRuleMinAggregateOutputType | null;
    _max: LoyaltyEarnRuleMaxAggregateOutputType | null;
};
export type GetLoyaltyEarnRuleGroupByPayload<T extends LoyaltyEarnRuleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LoyaltyEarnRuleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LoyaltyEarnRuleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LoyaltyEarnRuleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LoyaltyEarnRuleGroupByOutputType[P]>;
}>>;
export type LoyaltyEarnRuleWhereInput = {
    AND?: Prisma.LoyaltyEarnRuleWhereInput | Prisma.LoyaltyEarnRuleWhereInput[];
    OR?: Prisma.LoyaltyEarnRuleWhereInput[];
    NOT?: Prisma.LoyaltyEarnRuleWhereInput | Prisma.LoyaltyEarnRuleWhereInput[];
    id?: Prisma.UuidFilter<"LoyaltyEarnRule"> | string;
    source?: Prisma.StringFilter<"LoyaltyEarnRule"> | string;
    ruleName?: Prisma.StringFilter<"LoyaltyEarnRule"> | string;
    pointsFormula?: Prisma.JsonFilter<"LoyaltyEarnRule">;
    conditions?: Prisma.JsonNullableFilter<"LoyaltyEarnRule">;
    tierMultiplierApplies?: Prisma.BoolFilter<"LoyaltyEarnRule"> | boolean;
    isActive?: Prisma.BoolFilter<"LoyaltyEarnRule"> | boolean;
    validFrom?: Prisma.DateTimeNullableFilter<"LoyaltyEarnRule"> | Date | string | null;
    validUntil?: Prisma.DateTimeNullableFilter<"LoyaltyEarnRule"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyEarnRule"> | Date | string;
};
export type LoyaltyEarnRuleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    ruleName?: Prisma.SortOrder;
    pointsFormula?: Prisma.SortOrder;
    conditions?: Prisma.SortOrderInput | Prisma.SortOrder;
    tierMultiplierApplies?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    validUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LoyaltyEarnRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LoyaltyEarnRuleWhereInput | Prisma.LoyaltyEarnRuleWhereInput[];
    OR?: Prisma.LoyaltyEarnRuleWhereInput[];
    NOT?: Prisma.LoyaltyEarnRuleWhereInput | Prisma.LoyaltyEarnRuleWhereInput[];
    source?: Prisma.StringFilter<"LoyaltyEarnRule"> | string;
    ruleName?: Prisma.StringFilter<"LoyaltyEarnRule"> | string;
    pointsFormula?: Prisma.JsonFilter<"LoyaltyEarnRule">;
    conditions?: Prisma.JsonNullableFilter<"LoyaltyEarnRule">;
    tierMultiplierApplies?: Prisma.BoolFilter<"LoyaltyEarnRule"> | boolean;
    isActive?: Prisma.BoolFilter<"LoyaltyEarnRule"> | boolean;
    validFrom?: Prisma.DateTimeNullableFilter<"LoyaltyEarnRule"> | Date | string | null;
    validUntil?: Prisma.DateTimeNullableFilter<"LoyaltyEarnRule"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyEarnRule"> | Date | string;
}, "id">;
export type LoyaltyEarnRuleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    ruleName?: Prisma.SortOrder;
    pointsFormula?: Prisma.SortOrder;
    conditions?: Prisma.SortOrderInput | Prisma.SortOrder;
    tierMultiplierApplies?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    validUntil?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LoyaltyEarnRuleCountOrderByAggregateInput;
    _max?: Prisma.LoyaltyEarnRuleMaxOrderByAggregateInput;
    _min?: Prisma.LoyaltyEarnRuleMinOrderByAggregateInput;
};
export type LoyaltyEarnRuleScalarWhereWithAggregatesInput = {
    AND?: Prisma.LoyaltyEarnRuleScalarWhereWithAggregatesInput | Prisma.LoyaltyEarnRuleScalarWhereWithAggregatesInput[];
    OR?: Prisma.LoyaltyEarnRuleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LoyaltyEarnRuleScalarWhereWithAggregatesInput | Prisma.LoyaltyEarnRuleScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"LoyaltyEarnRule"> | string;
    source?: Prisma.StringWithAggregatesFilter<"LoyaltyEarnRule"> | string;
    ruleName?: Prisma.StringWithAggregatesFilter<"LoyaltyEarnRule"> | string;
    pointsFormula?: Prisma.JsonWithAggregatesFilter<"LoyaltyEarnRule">;
    conditions?: Prisma.JsonNullableWithAggregatesFilter<"LoyaltyEarnRule">;
    tierMultiplierApplies?: Prisma.BoolWithAggregatesFilter<"LoyaltyEarnRule"> | boolean;
    isActive?: Prisma.BoolWithAggregatesFilter<"LoyaltyEarnRule"> | boolean;
    validFrom?: Prisma.DateTimeNullableWithAggregatesFilter<"LoyaltyEarnRule"> | Date | string | null;
    validUntil?: Prisma.DateTimeNullableWithAggregatesFilter<"LoyaltyEarnRule"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyEarnRule"> | Date | string;
};
export type LoyaltyEarnRuleCreateInput = {
    id?: string;
    source: string;
    ruleName: string;
    pointsFormula: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    conditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    tierMultiplierApplies?: boolean;
    isActive?: boolean;
    validFrom?: Date | string | null;
    validUntil?: Date | string | null;
    createdAt?: Date | string;
};
export type LoyaltyEarnRuleUncheckedCreateInput = {
    id?: string;
    source: string;
    ruleName: string;
    pointsFormula: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    conditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    tierMultiplierApplies?: boolean;
    isActive?: boolean;
    validFrom?: Date | string | null;
    validUntil?: Date | string | null;
    createdAt?: Date | string;
};
export type LoyaltyEarnRuleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    ruleName?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsFormula?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    conditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    tierMultiplierApplies?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyEarnRuleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    ruleName?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsFormula?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    conditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    tierMultiplierApplies?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyEarnRuleCreateManyInput = {
    id?: string;
    source: string;
    ruleName: string;
    pointsFormula: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    conditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    tierMultiplierApplies?: boolean;
    isActive?: boolean;
    validFrom?: Date | string | null;
    validUntil?: Date | string | null;
    createdAt?: Date | string;
};
export type LoyaltyEarnRuleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    ruleName?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsFormula?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    conditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    tierMultiplierApplies?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyEarnRuleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    ruleName?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsFormula?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    conditions?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    tierMultiplierApplies?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    validFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validUntil?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyEarnRuleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    ruleName?: Prisma.SortOrder;
    pointsFormula?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    tierMultiplierApplies?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validUntil?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LoyaltyEarnRuleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    ruleName?: Prisma.SortOrder;
    tierMultiplierApplies?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validUntil?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LoyaltyEarnRuleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    ruleName?: Prisma.SortOrder;
    tierMultiplierApplies?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validUntil?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LoyaltyEarnRuleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    source?: boolean;
    ruleName?: boolean;
    pointsFormula?: boolean;
    conditions?: boolean;
    tierMultiplierApplies?: boolean;
    isActive?: boolean;
    validFrom?: boolean;
    validUntil?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["loyaltyEarnRule"]>;
export type LoyaltyEarnRuleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    source?: boolean;
    ruleName?: boolean;
    pointsFormula?: boolean;
    conditions?: boolean;
    tierMultiplierApplies?: boolean;
    isActive?: boolean;
    validFrom?: boolean;
    validUntil?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["loyaltyEarnRule"]>;
export type LoyaltyEarnRuleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    source?: boolean;
    ruleName?: boolean;
    pointsFormula?: boolean;
    conditions?: boolean;
    tierMultiplierApplies?: boolean;
    isActive?: boolean;
    validFrom?: boolean;
    validUntil?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["loyaltyEarnRule"]>;
export type LoyaltyEarnRuleSelectScalar = {
    id?: boolean;
    source?: boolean;
    ruleName?: boolean;
    pointsFormula?: boolean;
    conditions?: boolean;
    tierMultiplierApplies?: boolean;
    isActive?: boolean;
    validFrom?: boolean;
    validUntil?: boolean;
    createdAt?: boolean;
};
export type LoyaltyEarnRuleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "source" | "ruleName" | "pointsFormula" | "conditions" | "tierMultiplierApplies" | "isActive" | "validFrom" | "validUntil" | "createdAt", ExtArgs["result"]["loyaltyEarnRule"]>;
export type $LoyaltyEarnRulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LoyaltyEarnRule";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        source: string;
        ruleName: string;
        pointsFormula: runtime.JsonValue;
        conditions: runtime.JsonValue | null;
        tierMultiplierApplies: boolean;
        isActive: boolean;
        validFrom: Date | null;
        validUntil: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["loyaltyEarnRule"]>;
    composites: {};
};
export type LoyaltyEarnRuleGetPayload<S extends boolean | null | undefined | LoyaltyEarnRuleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LoyaltyEarnRulePayload, S>;
export type LoyaltyEarnRuleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LoyaltyEarnRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LoyaltyEarnRuleCountAggregateInputType | true;
};
export interface LoyaltyEarnRuleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LoyaltyEarnRule'];
        meta: {
            name: 'LoyaltyEarnRule';
        };
    };
    findUnique<T extends LoyaltyEarnRuleFindUniqueArgs>(args: Prisma.SelectSubset<T, LoyaltyEarnRuleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LoyaltyEarnRuleClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyEarnRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LoyaltyEarnRuleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LoyaltyEarnRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyEarnRuleClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyEarnRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LoyaltyEarnRuleFindFirstArgs>(args?: Prisma.SelectSubset<T, LoyaltyEarnRuleFindFirstArgs<ExtArgs>>): Prisma.Prisma__LoyaltyEarnRuleClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyEarnRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LoyaltyEarnRuleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LoyaltyEarnRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyEarnRuleClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyEarnRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LoyaltyEarnRuleFindManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyEarnRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyEarnRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LoyaltyEarnRuleCreateArgs>(args: Prisma.SelectSubset<T, LoyaltyEarnRuleCreateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyEarnRuleClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyEarnRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LoyaltyEarnRuleCreateManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyEarnRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LoyaltyEarnRuleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LoyaltyEarnRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyEarnRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LoyaltyEarnRuleDeleteArgs>(args: Prisma.SelectSubset<T, LoyaltyEarnRuleDeleteArgs<ExtArgs>>): Prisma.Prisma__LoyaltyEarnRuleClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyEarnRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LoyaltyEarnRuleUpdateArgs>(args: Prisma.SelectSubset<T, LoyaltyEarnRuleUpdateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyEarnRuleClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyEarnRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LoyaltyEarnRuleDeleteManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyEarnRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LoyaltyEarnRuleUpdateManyArgs>(args: Prisma.SelectSubset<T, LoyaltyEarnRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LoyaltyEarnRuleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LoyaltyEarnRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyEarnRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LoyaltyEarnRuleUpsertArgs>(args: Prisma.SelectSubset<T, LoyaltyEarnRuleUpsertArgs<ExtArgs>>): Prisma.Prisma__LoyaltyEarnRuleClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyEarnRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LoyaltyEarnRuleCountArgs>(args?: Prisma.Subset<T, LoyaltyEarnRuleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LoyaltyEarnRuleCountAggregateOutputType> : number>;
    aggregate<T extends LoyaltyEarnRuleAggregateArgs>(args: Prisma.Subset<T, LoyaltyEarnRuleAggregateArgs>): Prisma.PrismaPromise<GetLoyaltyEarnRuleAggregateType<T>>;
    groupBy<T extends LoyaltyEarnRuleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LoyaltyEarnRuleGroupByArgs['orderBy'];
    } : {
        orderBy?: LoyaltyEarnRuleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LoyaltyEarnRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoyaltyEarnRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LoyaltyEarnRuleFieldRefs;
}
export interface Prisma__LoyaltyEarnRuleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LoyaltyEarnRuleFieldRefs {
    readonly id: Prisma.FieldRef<"LoyaltyEarnRule", 'String'>;
    readonly source: Prisma.FieldRef<"LoyaltyEarnRule", 'String'>;
    readonly ruleName: Prisma.FieldRef<"LoyaltyEarnRule", 'String'>;
    readonly pointsFormula: Prisma.FieldRef<"LoyaltyEarnRule", 'Json'>;
    readonly conditions: Prisma.FieldRef<"LoyaltyEarnRule", 'Json'>;
    readonly tierMultiplierApplies: Prisma.FieldRef<"LoyaltyEarnRule", 'Boolean'>;
    readonly isActive: Prisma.FieldRef<"LoyaltyEarnRule", 'Boolean'>;
    readonly validFrom: Prisma.FieldRef<"LoyaltyEarnRule", 'DateTime'>;
    readonly validUntil: Prisma.FieldRef<"LoyaltyEarnRule", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"LoyaltyEarnRule", 'DateTime'>;
}
export type LoyaltyEarnRuleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyEarnRuleSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyEarnRuleOmit<ExtArgs> | null;
    where: Prisma.LoyaltyEarnRuleWhereUniqueInput;
};
export type LoyaltyEarnRuleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyEarnRuleSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyEarnRuleOmit<ExtArgs> | null;
    where: Prisma.LoyaltyEarnRuleWhereUniqueInput;
};
export type LoyaltyEarnRuleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyEarnRuleSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyEarnRuleOmit<ExtArgs> | null;
    where?: Prisma.LoyaltyEarnRuleWhereInput;
    orderBy?: Prisma.LoyaltyEarnRuleOrderByWithRelationInput | Prisma.LoyaltyEarnRuleOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyEarnRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoyaltyEarnRuleScalarFieldEnum | Prisma.LoyaltyEarnRuleScalarFieldEnum[];
};
export type LoyaltyEarnRuleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyEarnRuleSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyEarnRuleOmit<ExtArgs> | null;
    where?: Prisma.LoyaltyEarnRuleWhereInput;
    orderBy?: Prisma.LoyaltyEarnRuleOrderByWithRelationInput | Prisma.LoyaltyEarnRuleOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyEarnRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoyaltyEarnRuleScalarFieldEnum | Prisma.LoyaltyEarnRuleScalarFieldEnum[];
};
export type LoyaltyEarnRuleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyEarnRuleSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyEarnRuleOmit<ExtArgs> | null;
    where?: Prisma.LoyaltyEarnRuleWhereInput;
    orderBy?: Prisma.LoyaltyEarnRuleOrderByWithRelationInput | Prisma.LoyaltyEarnRuleOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyEarnRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoyaltyEarnRuleScalarFieldEnum | Prisma.LoyaltyEarnRuleScalarFieldEnum[];
};
export type LoyaltyEarnRuleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyEarnRuleSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyEarnRuleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyEarnRuleCreateInput, Prisma.LoyaltyEarnRuleUncheckedCreateInput>;
};
export type LoyaltyEarnRuleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LoyaltyEarnRuleCreateManyInput | Prisma.LoyaltyEarnRuleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LoyaltyEarnRuleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyEarnRuleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LoyaltyEarnRuleOmit<ExtArgs> | null;
    data: Prisma.LoyaltyEarnRuleCreateManyInput | Prisma.LoyaltyEarnRuleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LoyaltyEarnRuleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyEarnRuleSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyEarnRuleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyEarnRuleUpdateInput, Prisma.LoyaltyEarnRuleUncheckedUpdateInput>;
    where: Prisma.LoyaltyEarnRuleWhereUniqueInput;
};
export type LoyaltyEarnRuleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LoyaltyEarnRuleUpdateManyMutationInput, Prisma.LoyaltyEarnRuleUncheckedUpdateManyInput>;
    where?: Prisma.LoyaltyEarnRuleWhereInput;
    limit?: number;
};
export type LoyaltyEarnRuleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyEarnRuleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LoyaltyEarnRuleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyEarnRuleUpdateManyMutationInput, Prisma.LoyaltyEarnRuleUncheckedUpdateManyInput>;
    where?: Prisma.LoyaltyEarnRuleWhereInput;
    limit?: number;
};
export type LoyaltyEarnRuleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyEarnRuleSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyEarnRuleOmit<ExtArgs> | null;
    where: Prisma.LoyaltyEarnRuleWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyEarnRuleCreateInput, Prisma.LoyaltyEarnRuleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LoyaltyEarnRuleUpdateInput, Prisma.LoyaltyEarnRuleUncheckedUpdateInput>;
};
export type LoyaltyEarnRuleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyEarnRuleSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyEarnRuleOmit<ExtArgs> | null;
    where: Prisma.LoyaltyEarnRuleWhereUniqueInput;
};
export type LoyaltyEarnRuleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyEarnRuleWhereInput;
    limit?: number;
};
export type LoyaltyEarnRuleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyEarnRuleSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyEarnRuleOmit<ExtArgs> | null;
};
