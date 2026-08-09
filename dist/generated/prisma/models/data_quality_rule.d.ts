import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type data_quality_ruleModel = runtime.Types.Result.DefaultSelection<Prisma.$data_quality_rulePayload>;
export type AggregateData_quality_rule = {
    _count: Data_quality_ruleCountAggregateOutputType | null;
    _min: Data_quality_ruleMinAggregateOutputType | null;
    _max: Data_quality_ruleMaxAggregateOutputType | null;
};
export type Data_quality_ruleMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    rule_type: string | null;
    severity: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Data_quality_ruleMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    rule_type: string | null;
    severity: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Data_quality_ruleCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    rule_type: number;
    conditions: number;
    severity: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type Data_quality_ruleMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    rule_type?: true;
    severity?: true;
    is_active?: true;
    created_at?: true;
};
export type Data_quality_ruleMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    rule_type?: true;
    severity?: true;
    is_active?: true;
    created_at?: true;
};
export type Data_quality_ruleCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    rule_type?: true;
    conditions?: true;
    severity?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type Data_quality_ruleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.data_quality_ruleWhereInput;
    orderBy?: Prisma.data_quality_ruleOrderByWithRelationInput | Prisma.data_quality_ruleOrderByWithRelationInput[];
    cursor?: Prisma.data_quality_ruleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Data_quality_ruleCountAggregateInputType;
    _min?: Data_quality_ruleMinAggregateInputType;
    _max?: Data_quality_ruleMaxAggregateInputType;
};
export type GetData_quality_ruleAggregateType<T extends Data_quality_ruleAggregateArgs> = {
    [P in keyof T & keyof AggregateData_quality_rule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateData_quality_rule[P]> : Prisma.GetScalarType<T[P], AggregateData_quality_rule[P]>;
};
export type data_quality_ruleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.data_quality_ruleWhereInput;
    orderBy?: Prisma.data_quality_ruleOrderByWithAggregationInput | Prisma.data_quality_ruleOrderByWithAggregationInput[];
    by: Prisma.Data_quality_ruleScalarFieldEnum[] | Prisma.Data_quality_ruleScalarFieldEnum;
    having?: Prisma.data_quality_ruleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Data_quality_ruleCountAggregateInputType | true;
    _min?: Data_quality_ruleMinAggregateInputType;
    _max?: Data_quality_ruleMaxAggregateInputType;
};
export type Data_quality_ruleGroupByOutputType = {
    id: string;
    code: string;
    name: string;
    rule_type: string;
    conditions: runtime.JsonValue;
    severity: string;
    is_active: boolean;
    created_at: Date;
    _count: Data_quality_ruleCountAggregateOutputType | null;
    _min: Data_quality_ruleMinAggregateOutputType | null;
    _max: Data_quality_ruleMaxAggregateOutputType | null;
};
export type GetData_quality_ruleGroupByPayload<T extends data_quality_ruleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Data_quality_ruleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Data_quality_ruleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Data_quality_ruleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Data_quality_ruleGroupByOutputType[P]>;
}>>;
export type data_quality_ruleWhereInput = {
    AND?: Prisma.data_quality_ruleWhereInput | Prisma.data_quality_ruleWhereInput[];
    OR?: Prisma.data_quality_ruleWhereInput[];
    NOT?: Prisma.data_quality_ruleWhereInput | Prisma.data_quality_ruleWhereInput[];
    id?: Prisma.UuidFilter<"data_quality_rule"> | string;
    code?: Prisma.StringFilter<"data_quality_rule"> | string;
    name?: Prisma.StringFilter<"data_quality_rule"> | string;
    rule_type?: Prisma.StringFilter<"data_quality_rule"> | string;
    conditions?: Prisma.JsonFilter<"data_quality_rule">;
    severity?: Prisma.StringFilter<"data_quality_rule"> | string;
    is_active?: Prisma.BoolFilter<"data_quality_rule"> | boolean;
    created_at?: Prisma.DateTimeFilter<"data_quality_rule"> | Date | string;
    data_quality_flag_log?: Prisma.Data_quality_flag_logListRelationFilter;
};
export type data_quality_ruleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    rule_type?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    data_quality_flag_log?: Prisma.data_quality_flag_logOrderByRelationAggregateInput;
};
export type data_quality_ruleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.data_quality_ruleWhereInput | Prisma.data_quality_ruleWhereInput[];
    OR?: Prisma.data_quality_ruleWhereInput[];
    NOT?: Prisma.data_quality_ruleWhereInput | Prisma.data_quality_ruleWhereInput[];
    name?: Prisma.StringFilter<"data_quality_rule"> | string;
    rule_type?: Prisma.StringFilter<"data_quality_rule"> | string;
    conditions?: Prisma.JsonFilter<"data_quality_rule">;
    severity?: Prisma.StringFilter<"data_quality_rule"> | string;
    is_active?: Prisma.BoolFilter<"data_quality_rule"> | boolean;
    created_at?: Prisma.DateTimeFilter<"data_quality_rule"> | Date | string;
    data_quality_flag_log?: Prisma.Data_quality_flag_logListRelationFilter;
}, "id" | "code">;
export type data_quality_ruleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    rule_type?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.data_quality_ruleCountOrderByAggregateInput;
    _max?: Prisma.data_quality_ruleMaxOrderByAggregateInput;
    _min?: Prisma.data_quality_ruleMinOrderByAggregateInput;
};
export type data_quality_ruleScalarWhereWithAggregatesInput = {
    AND?: Prisma.data_quality_ruleScalarWhereWithAggregatesInput | Prisma.data_quality_ruleScalarWhereWithAggregatesInput[];
    OR?: Prisma.data_quality_ruleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.data_quality_ruleScalarWhereWithAggregatesInput | Prisma.data_quality_ruleScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"data_quality_rule"> | string;
    code?: Prisma.StringWithAggregatesFilter<"data_quality_rule"> | string;
    name?: Prisma.StringWithAggregatesFilter<"data_quality_rule"> | string;
    rule_type?: Prisma.StringWithAggregatesFilter<"data_quality_rule"> | string;
    conditions?: Prisma.JsonWithAggregatesFilter<"data_quality_rule">;
    severity?: Prisma.StringWithAggregatesFilter<"data_quality_rule"> | string;
    is_active?: Prisma.BoolWithAggregatesFilter<"data_quality_rule"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"data_quality_rule"> | Date | string;
};
export type data_quality_ruleCreateInput = {
    id?: string;
    code: string;
    name: string;
    rule_type: string;
    conditions: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    severity?: string;
    is_active?: boolean;
    created_at?: Date | string;
    data_quality_flag_log?: Prisma.data_quality_flag_logCreateNestedManyWithoutData_quality_ruleInput;
};
export type data_quality_ruleUncheckedCreateInput = {
    id?: string;
    code: string;
    name: string;
    rule_type: string;
    conditions: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    severity?: string;
    is_active?: boolean;
    created_at?: Date | string;
    data_quality_flag_log?: Prisma.data_quality_flag_logUncheckedCreateNestedManyWithoutData_quality_ruleInput;
};
export type data_quality_ruleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    rule_type?: Prisma.StringFieldUpdateOperationsInput | string;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_quality_flag_log?: Prisma.data_quality_flag_logUpdateManyWithoutData_quality_ruleNestedInput;
};
export type data_quality_ruleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    rule_type?: Prisma.StringFieldUpdateOperationsInput | string;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_quality_flag_log?: Prisma.data_quality_flag_logUncheckedUpdateManyWithoutData_quality_ruleNestedInput;
};
export type data_quality_ruleCreateManyInput = {
    id?: string;
    code: string;
    name: string;
    rule_type: string;
    conditions: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    severity?: string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type data_quality_ruleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    rule_type?: Prisma.StringFieldUpdateOperationsInput | string;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type data_quality_ruleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    rule_type?: Prisma.StringFieldUpdateOperationsInput | string;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Data_quality_ruleScalarRelationFilter = {
    is?: Prisma.data_quality_ruleWhereInput;
    isNot?: Prisma.data_quality_ruleWhereInput;
};
export type data_quality_ruleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    rule_type?: Prisma.SortOrder;
    conditions?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type data_quality_ruleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    rule_type?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type data_quality_ruleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    rule_type?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type data_quality_ruleCreateNestedOneWithoutData_quality_flag_logInput = {
    create?: Prisma.XOR<Prisma.data_quality_ruleCreateWithoutData_quality_flag_logInput, Prisma.data_quality_ruleUncheckedCreateWithoutData_quality_flag_logInput>;
    connectOrCreate?: Prisma.data_quality_ruleCreateOrConnectWithoutData_quality_flag_logInput;
    connect?: Prisma.data_quality_ruleWhereUniqueInput;
};
export type data_quality_ruleUpdateOneRequiredWithoutData_quality_flag_logNestedInput = {
    create?: Prisma.XOR<Prisma.data_quality_ruleCreateWithoutData_quality_flag_logInput, Prisma.data_quality_ruleUncheckedCreateWithoutData_quality_flag_logInput>;
    connectOrCreate?: Prisma.data_quality_ruleCreateOrConnectWithoutData_quality_flag_logInput;
    upsert?: Prisma.data_quality_ruleUpsertWithoutData_quality_flag_logInput;
    connect?: Prisma.data_quality_ruleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.data_quality_ruleUpdateToOneWithWhereWithoutData_quality_flag_logInput, Prisma.data_quality_ruleUpdateWithoutData_quality_flag_logInput>, Prisma.data_quality_ruleUncheckedUpdateWithoutData_quality_flag_logInput>;
};
export type data_quality_ruleCreateWithoutData_quality_flag_logInput = {
    id?: string;
    code: string;
    name: string;
    rule_type: string;
    conditions: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    severity?: string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type data_quality_ruleUncheckedCreateWithoutData_quality_flag_logInput = {
    id?: string;
    code: string;
    name: string;
    rule_type: string;
    conditions: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    severity?: string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type data_quality_ruleCreateOrConnectWithoutData_quality_flag_logInput = {
    where: Prisma.data_quality_ruleWhereUniqueInput;
    create: Prisma.XOR<Prisma.data_quality_ruleCreateWithoutData_quality_flag_logInput, Prisma.data_quality_ruleUncheckedCreateWithoutData_quality_flag_logInput>;
};
export type data_quality_ruleUpsertWithoutData_quality_flag_logInput = {
    update: Prisma.XOR<Prisma.data_quality_ruleUpdateWithoutData_quality_flag_logInput, Prisma.data_quality_ruleUncheckedUpdateWithoutData_quality_flag_logInput>;
    create: Prisma.XOR<Prisma.data_quality_ruleCreateWithoutData_quality_flag_logInput, Prisma.data_quality_ruleUncheckedCreateWithoutData_quality_flag_logInput>;
    where?: Prisma.data_quality_ruleWhereInput;
};
export type data_quality_ruleUpdateToOneWithWhereWithoutData_quality_flag_logInput = {
    where?: Prisma.data_quality_ruleWhereInput;
    data: Prisma.XOR<Prisma.data_quality_ruleUpdateWithoutData_quality_flag_logInput, Prisma.data_quality_ruleUncheckedUpdateWithoutData_quality_flag_logInput>;
};
export type data_quality_ruleUpdateWithoutData_quality_flag_logInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    rule_type?: Prisma.StringFieldUpdateOperationsInput | string;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type data_quality_ruleUncheckedUpdateWithoutData_quality_flag_logInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    rule_type?: Prisma.StringFieldUpdateOperationsInput | string;
    conditions?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Data_quality_ruleCountOutputType = {
    data_quality_flag_log: number;
};
export type Data_quality_ruleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data_quality_flag_log?: boolean | Data_quality_ruleCountOutputTypeCountData_quality_flag_logArgs;
};
export type Data_quality_ruleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Data_quality_ruleCountOutputTypeSelect<ExtArgs> | null;
};
export type Data_quality_ruleCountOutputTypeCountData_quality_flag_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.data_quality_flag_logWhereInput;
};
export type data_quality_ruleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    rule_type?: boolean;
    conditions?: boolean;
    severity?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    data_quality_flag_log?: boolean | Prisma.data_quality_rule$data_quality_flag_logArgs<ExtArgs>;
    _count?: boolean | Prisma.Data_quality_ruleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["data_quality_rule"]>;
export type data_quality_ruleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    rule_type?: boolean;
    conditions?: boolean;
    severity?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["data_quality_rule"]>;
export type data_quality_ruleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    rule_type?: boolean;
    conditions?: boolean;
    severity?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["data_quality_rule"]>;
export type data_quality_ruleSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    rule_type?: boolean;
    conditions?: boolean;
    severity?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type data_quality_ruleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "rule_type" | "conditions" | "severity" | "is_active" | "created_at", ExtArgs["result"]["data_quality_rule"]>;
export type data_quality_ruleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data_quality_flag_log?: boolean | Prisma.data_quality_rule$data_quality_flag_logArgs<ExtArgs>;
    _count?: boolean | Prisma.Data_quality_ruleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type data_quality_ruleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type data_quality_ruleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $data_quality_rulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "data_quality_rule";
    objects: {
        data_quality_flag_log: Prisma.$data_quality_flag_logPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        name: string;
        rule_type: string;
        conditions: runtime.JsonValue;
        severity: string;
        is_active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["data_quality_rule"]>;
    composites: {};
};
export type data_quality_ruleGetPayload<S extends boolean | null | undefined | data_quality_ruleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$data_quality_rulePayload, S>;
export type data_quality_ruleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<data_quality_ruleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Data_quality_ruleCountAggregateInputType | true;
};
export interface data_quality_ruleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['data_quality_rule'];
        meta: {
            name: 'data_quality_rule';
        };
    };
    findUnique<T extends data_quality_ruleFindUniqueArgs>(args: Prisma.SelectSubset<T, data_quality_ruleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__data_quality_ruleClient<runtime.Types.Result.GetResult<Prisma.$data_quality_rulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends data_quality_ruleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, data_quality_ruleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__data_quality_ruleClient<runtime.Types.Result.GetResult<Prisma.$data_quality_rulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends data_quality_ruleFindFirstArgs>(args?: Prisma.SelectSubset<T, data_quality_ruleFindFirstArgs<ExtArgs>>): Prisma.Prisma__data_quality_ruleClient<runtime.Types.Result.GetResult<Prisma.$data_quality_rulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends data_quality_ruleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, data_quality_ruleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__data_quality_ruleClient<runtime.Types.Result.GetResult<Prisma.$data_quality_rulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends data_quality_ruleFindManyArgs>(args?: Prisma.SelectSubset<T, data_quality_ruleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$data_quality_rulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends data_quality_ruleCreateArgs>(args: Prisma.SelectSubset<T, data_quality_ruleCreateArgs<ExtArgs>>): Prisma.Prisma__data_quality_ruleClient<runtime.Types.Result.GetResult<Prisma.$data_quality_rulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends data_quality_ruleCreateManyArgs>(args?: Prisma.SelectSubset<T, data_quality_ruleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends data_quality_ruleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, data_quality_ruleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$data_quality_rulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends data_quality_ruleDeleteArgs>(args: Prisma.SelectSubset<T, data_quality_ruleDeleteArgs<ExtArgs>>): Prisma.Prisma__data_quality_ruleClient<runtime.Types.Result.GetResult<Prisma.$data_quality_rulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends data_quality_ruleUpdateArgs>(args: Prisma.SelectSubset<T, data_quality_ruleUpdateArgs<ExtArgs>>): Prisma.Prisma__data_quality_ruleClient<runtime.Types.Result.GetResult<Prisma.$data_quality_rulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends data_quality_ruleDeleteManyArgs>(args?: Prisma.SelectSubset<T, data_quality_ruleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends data_quality_ruleUpdateManyArgs>(args: Prisma.SelectSubset<T, data_quality_ruleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends data_quality_ruleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, data_quality_ruleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$data_quality_rulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends data_quality_ruleUpsertArgs>(args: Prisma.SelectSubset<T, data_quality_ruleUpsertArgs<ExtArgs>>): Prisma.Prisma__data_quality_ruleClient<runtime.Types.Result.GetResult<Prisma.$data_quality_rulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends data_quality_ruleCountArgs>(args?: Prisma.Subset<T, data_quality_ruleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Data_quality_ruleCountAggregateOutputType> : number>;
    aggregate<T extends Data_quality_ruleAggregateArgs>(args: Prisma.Subset<T, Data_quality_ruleAggregateArgs>): Prisma.PrismaPromise<GetData_quality_ruleAggregateType<T>>;
    groupBy<T extends data_quality_ruleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: data_quality_ruleGroupByArgs['orderBy'];
    } : {
        orderBy?: data_quality_ruleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, data_quality_ruleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetData_quality_ruleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: data_quality_ruleFieldRefs;
}
export interface Prisma__data_quality_ruleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    data_quality_flag_log<T extends Prisma.data_quality_rule$data_quality_flag_logArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.data_quality_rule$data_quality_flag_logArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$data_quality_flag_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface data_quality_ruleFieldRefs {
    readonly id: Prisma.FieldRef<"data_quality_rule", 'String'>;
    readonly code: Prisma.FieldRef<"data_quality_rule", 'String'>;
    readonly name: Prisma.FieldRef<"data_quality_rule", 'String'>;
    readonly rule_type: Prisma.FieldRef<"data_quality_rule", 'String'>;
    readonly conditions: Prisma.FieldRef<"data_quality_rule", 'Json'>;
    readonly severity: Prisma.FieldRef<"data_quality_rule", 'String'>;
    readonly is_active: Prisma.FieldRef<"data_quality_rule", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"data_quality_rule", 'DateTime'>;
}
export type data_quality_ruleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_ruleSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_ruleOmit<ExtArgs> | null;
    include?: Prisma.data_quality_ruleInclude<ExtArgs> | null;
    where: Prisma.data_quality_ruleWhereUniqueInput;
};
export type data_quality_ruleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_ruleSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_ruleOmit<ExtArgs> | null;
    include?: Prisma.data_quality_ruleInclude<ExtArgs> | null;
    where: Prisma.data_quality_ruleWhereUniqueInput;
};
export type data_quality_ruleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_ruleSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_ruleOmit<ExtArgs> | null;
    include?: Prisma.data_quality_ruleInclude<ExtArgs> | null;
    where?: Prisma.data_quality_ruleWhereInput;
    orderBy?: Prisma.data_quality_ruleOrderByWithRelationInput | Prisma.data_quality_ruleOrderByWithRelationInput[];
    cursor?: Prisma.data_quality_ruleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Data_quality_ruleScalarFieldEnum | Prisma.Data_quality_ruleScalarFieldEnum[];
};
export type data_quality_ruleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_ruleSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_ruleOmit<ExtArgs> | null;
    include?: Prisma.data_quality_ruleInclude<ExtArgs> | null;
    where?: Prisma.data_quality_ruleWhereInput;
    orderBy?: Prisma.data_quality_ruleOrderByWithRelationInput | Prisma.data_quality_ruleOrderByWithRelationInput[];
    cursor?: Prisma.data_quality_ruleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Data_quality_ruleScalarFieldEnum | Prisma.Data_quality_ruleScalarFieldEnum[];
};
export type data_quality_ruleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_ruleSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_ruleOmit<ExtArgs> | null;
    include?: Prisma.data_quality_ruleInclude<ExtArgs> | null;
    where?: Prisma.data_quality_ruleWhereInput;
    orderBy?: Prisma.data_quality_ruleOrderByWithRelationInput | Prisma.data_quality_ruleOrderByWithRelationInput[];
    cursor?: Prisma.data_quality_ruleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Data_quality_ruleScalarFieldEnum | Prisma.Data_quality_ruleScalarFieldEnum[];
};
export type data_quality_ruleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_ruleSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_ruleOmit<ExtArgs> | null;
    include?: Prisma.data_quality_ruleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.data_quality_ruleCreateInput, Prisma.data_quality_ruleUncheckedCreateInput>;
};
export type data_quality_ruleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.data_quality_ruleCreateManyInput | Prisma.data_quality_ruleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type data_quality_ruleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_ruleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.data_quality_ruleOmit<ExtArgs> | null;
    data: Prisma.data_quality_ruleCreateManyInput | Prisma.data_quality_ruleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type data_quality_ruleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_ruleSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_ruleOmit<ExtArgs> | null;
    include?: Prisma.data_quality_ruleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.data_quality_ruleUpdateInput, Prisma.data_quality_ruleUncheckedUpdateInput>;
    where: Prisma.data_quality_ruleWhereUniqueInput;
};
export type data_quality_ruleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.data_quality_ruleUpdateManyMutationInput, Prisma.data_quality_ruleUncheckedUpdateManyInput>;
    where?: Prisma.data_quality_ruleWhereInput;
    limit?: number;
};
export type data_quality_ruleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_ruleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.data_quality_ruleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.data_quality_ruleUpdateManyMutationInput, Prisma.data_quality_ruleUncheckedUpdateManyInput>;
    where?: Prisma.data_quality_ruleWhereInput;
    limit?: number;
};
export type data_quality_ruleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_ruleSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_ruleOmit<ExtArgs> | null;
    include?: Prisma.data_quality_ruleInclude<ExtArgs> | null;
    where: Prisma.data_quality_ruleWhereUniqueInput;
    create: Prisma.XOR<Prisma.data_quality_ruleCreateInput, Prisma.data_quality_ruleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.data_quality_ruleUpdateInput, Prisma.data_quality_ruleUncheckedUpdateInput>;
};
export type data_quality_ruleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_ruleSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_ruleOmit<ExtArgs> | null;
    include?: Prisma.data_quality_ruleInclude<ExtArgs> | null;
    where: Prisma.data_quality_ruleWhereUniqueInput;
};
export type data_quality_ruleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.data_quality_ruleWhereInput;
    limit?: number;
};
export type data_quality_rule$data_quality_flag_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_flag_logSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_flag_logOmit<ExtArgs> | null;
    include?: Prisma.data_quality_flag_logInclude<ExtArgs> | null;
    where?: Prisma.data_quality_flag_logWhereInput;
    orderBy?: Prisma.data_quality_flag_logOrderByWithRelationInput | Prisma.data_quality_flag_logOrderByWithRelationInput[];
    cursor?: Prisma.data_quality_flag_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Data_quality_flag_logScalarFieldEnum | Prisma.Data_quality_flag_logScalarFieldEnum[];
};
export type data_quality_ruleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_ruleSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_ruleOmit<ExtArgs> | null;
    include?: Prisma.data_quality_ruleInclude<ExtArgs> | null;
};
