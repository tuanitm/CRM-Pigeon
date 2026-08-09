import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type data_quality_flag_logModel = runtime.Types.Result.DefaultSelection<Prisma.$data_quality_flag_logPayload>;
export type AggregateData_quality_flag_log = {
    _count: Data_quality_flag_logCountAggregateOutputType | null;
    _min: Data_quality_flag_logMinAggregateOutputType | null;
    _max: Data_quality_flag_logMaxAggregateOutputType | null;
};
export type Data_quality_flag_logMinAggregateOutputType = {
    id: string | null;
    rule_id: string | null;
    customer_id: string | null;
    flag_reason: string | null;
    resolved: boolean | null;
    resolved_by: string | null;
    resolved_at: Date | null;
    flagged_at: Date | null;
};
export type Data_quality_flag_logMaxAggregateOutputType = {
    id: string | null;
    rule_id: string | null;
    customer_id: string | null;
    flag_reason: string | null;
    resolved: boolean | null;
    resolved_by: string | null;
    resolved_at: Date | null;
    flagged_at: Date | null;
};
export type Data_quality_flag_logCountAggregateOutputType = {
    id: number;
    rule_id: number;
    customer_id: number;
    flag_reason: number;
    resolved: number;
    resolved_by: number;
    resolved_at: number;
    flagged_at: number;
    _all: number;
};
export type Data_quality_flag_logMinAggregateInputType = {
    id?: true;
    rule_id?: true;
    customer_id?: true;
    flag_reason?: true;
    resolved?: true;
    resolved_by?: true;
    resolved_at?: true;
    flagged_at?: true;
};
export type Data_quality_flag_logMaxAggregateInputType = {
    id?: true;
    rule_id?: true;
    customer_id?: true;
    flag_reason?: true;
    resolved?: true;
    resolved_by?: true;
    resolved_at?: true;
    flagged_at?: true;
};
export type Data_quality_flag_logCountAggregateInputType = {
    id?: true;
    rule_id?: true;
    customer_id?: true;
    flag_reason?: true;
    resolved?: true;
    resolved_by?: true;
    resolved_at?: true;
    flagged_at?: true;
    _all?: true;
};
export type Data_quality_flag_logAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.data_quality_flag_logWhereInput;
    orderBy?: Prisma.data_quality_flag_logOrderByWithRelationInput | Prisma.data_quality_flag_logOrderByWithRelationInput[];
    cursor?: Prisma.data_quality_flag_logWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Data_quality_flag_logCountAggregateInputType;
    _min?: Data_quality_flag_logMinAggregateInputType;
    _max?: Data_quality_flag_logMaxAggregateInputType;
};
export type GetData_quality_flag_logAggregateType<T extends Data_quality_flag_logAggregateArgs> = {
    [P in keyof T & keyof AggregateData_quality_flag_log]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateData_quality_flag_log[P]> : Prisma.GetScalarType<T[P], AggregateData_quality_flag_log[P]>;
};
export type data_quality_flag_logGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.data_quality_flag_logWhereInput;
    orderBy?: Prisma.data_quality_flag_logOrderByWithAggregationInput | Prisma.data_quality_flag_logOrderByWithAggregationInput[];
    by: Prisma.Data_quality_flag_logScalarFieldEnum[] | Prisma.Data_quality_flag_logScalarFieldEnum;
    having?: Prisma.data_quality_flag_logScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Data_quality_flag_logCountAggregateInputType | true;
    _min?: Data_quality_flag_logMinAggregateInputType;
    _max?: Data_quality_flag_logMaxAggregateInputType;
};
export type Data_quality_flag_logGroupByOutputType = {
    id: string;
    rule_id: string;
    customer_id: string;
    flag_reason: string | null;
    resolved: boolean;
    resolved_by: string | null;
    resolved_at: Date | null;
    flagged_at: Date;
    _count: Data_quality_flag_logCountAggregateOutputType | null;
    _min: Data_quality_flag_logMinAggregateOutputType | null;
    _max: Data_quality_flag_logMaxAggregateOutputType | null;
};
export type GetData_quality_flag_logGroupByPayload<T extends data_quality_flag_logGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Data_quality_flag_logGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Data_quality_flag_logGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Data_quality_flag_logGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Data_quality_flag_logGroupByOutputType[P]>;
}>>;
export type data_quality_flag_logWhereInput = {
    AND?: Prisma.data_quality_flag_logWhereInput | Prisma.data_quality_flag_logWhereInput[];
    OR?: Prisma.data_quality_flag_logWhereInput[];
    NOT?: Prisma.data_quality_flag_logWhereInput | Prisma.data_quality_flag_logWhereInput[];
    id?: Prisma.UuidFilter<"data_quality_flag_log"> | string;
    rule_id?: Prisma.UuidFilter<"data_quality_flag_log"> | string;
    customer_id?: Prisma.UuidFilter<"data_quality_flag_log"> | string;
    flag_reason?: Prisma.StringNullableFilter<"data_quality_flag_log"> | string | null;
    resolved?: Prisma.BoolFilter<"data_quality_flag_log"> | boolean;
    resolved_by?: Prisma.UuidNullableFilter<"data_quality_flag_log"> | string | null;
    resolved_at?: Prisma.DateTimeNullableFilter<"data_quality_flag_log"> | Date | string | null;
    flagged_at?: Prisma.DateTimeFilter<"data_quality_flag_log"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    data_quality_rule?: Prisma.XOR<Prisma.Data_quality_ruleScalarRelationFilter, Prisma.data_quality_ruleWhereInput>;
};
export type data_quality_flag_logOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rule_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    flag_reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolved?: Prisma.SortOrder;
    resolved_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolved_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    flagged_at?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    data_quality_rule?: Prisma.data_quality_ruleOrderByWithRelationInput;
};
export type data_quality_flag_logWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.data_quality_flag_logWhereInput | Prisma.data_quality_flag_logWhereInput[];
    OR?: Prisma.data_quality_flag_logWhereInput[];
    NOT?: Prisma.data_quality_flag_logWhereInput | Prisma.data_quality_flag_logWhereInput[];
    rule_id?: Prisma.UuidFilter<"data_quality_flag_log"> | string;
    customer_id?: Prisma.UuidFilter<"data_quality_flag_log"> | string;
    flag_reason?: Prisma.StringNullableFilter<"data_quality_flag_log"> | string | null;
    resolved?: Prisma.BoolFilter<"data_quality_flag_log"> | boolean;
    resolved_by?: Prisma.UuidNullableFilter<"data_quality_flag_log"> | string | null;
    resolved_at?: Prisma.DateTimeNullableFilter<"data_quality_flag_log"> | Date | string | null;
    flagged_at?: Prisma.DateTimeFilter<"data_quality_flag_log"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    data_quality_rule?: Prisma.XOR<Prisma.Data_quality_ruleScalarRelationFilter, Prisma.data_quality_ruleWhereInput>;
}, "id">;
export type data_quality_flag_logOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rule_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    flag_reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolved?: Prisma.SortOrder;
    resolved_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    resolved_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    flagged_at?: Prisma.SortOrder;
    _count?: Prisma.data_quality_flag_logCountOrderByAggregateInput;
    _max?: Prisma.data_quality_flag_logMaxOrderByAggregateInput;
    _min?: Prisma.data_quality_flag_logMinOrderByAggregateInput;
};
export type data_quality_flag_logScalarWhereWithAggregatesInput = {
    AND?: Prisma.data_quality_flag_logScalarWhereWithAggregatesInput | Prisma.data_quality_flag_logScalarWhereWithAggregatesInput[];
    OR?: Prisma.data_quality_flag_logScalarWhereWithAggregatesInput[];
    NOT?: Prisma.data_quality_flag_logScalarWhereWithAggregatesInput | Prisma.data_quality_flag_logScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"data_quality_flag_log"> | string;
    rule_id?: Prisma.UuidWithAggregatesFilter<"data_quality_flag_log"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"data_quality_flag_log"> | string;
    flag_reason?: Prisma.StringNullableWithAggregatesFilter<"data_quality_flag_log"> | string | null;
    resolved?: Prisma.BoolWithAggregatesFilter<"data_quality_flag_log"> | boolean;
    resolved_by?: Prisma.UuidNullableWithAggregatesFilter<"data_quality_flag_log"> | string | null;
    resolved_at?: Prisma.DateTimeNullableWithAggregatesFilter<"data_quality_flag_log"> | Date | string | null;
    flagged_at?: Prisma.DateTimeWithAggregatesFilter<"data_quality_flag_log"> | Date | string;
};
export type data_quality_flag_logCreateInput = {
    id?: string;
    flag_reason?: string | null;
    resolved?: boolean;
    resolved_by?: string | null;
    resolved_at?: Date | string | null;
    flagged_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutData_quality_flag_logInput;
    data_quality_rule: Prisma.data_quality_ruleCreateNestedOneWithoutData_quality_flag_logInput;
};
export type data_quality_flag_logUncheckedCreateInput = {
    id?: string;
    rule_id: string;
    customer_id: string;
    flag_reason?: string | null;
    resolved?: boolean;
    resolved_by?: string | null;
    resolved_at?: Date | string | null;
    flagged_at?: Date | string;
};
export type data_quality_flag_logUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    flag_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resolved_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flagged_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutData_quality_flag_logNestedInput;
    data_quality_rule?: Prisma.data_quality_ruleUpdateOneRequiredWithoutData_quality_flag_logNestedInput;
};
export type data_quality_flag_logUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rule_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    flag_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resolved_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flagged_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type data_quality_flag_logCreateManyInput = {
    id?: string;
    rule_id: string;
    customer_id: string;
    flag_reason?: string | null;
    resolved?: boolean;
    resolved_by?: string | null;
    resolved_at?: Date | string | null;
    flagged_at?: Date | string;
};
export type data_quality_flag_logUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    flag_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resolved_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flagged_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type data_quality_flag_logUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rule_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    flag_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resolved_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flagged_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Data_quality_flag_logListRelationFilter = {
    every?: Prisma.data_quality_flag_logWhereInput;
    some?: Prisma.data_quality_flag_logWhereInput;
    none?: Prisma.data_quality_flag_logWhereInput;
};
export type data_quality_flag_logOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type data_quality_flag_logCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rule_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    flag_reason?: Prisma.SortOrder;
    resolved?: Prisma.SortOrder;
    resolved_by?: Prisma.SortOrder;
    resolved_at?: Prisma.SortOrder;
    flagged_at?: Prisma.SortOrder;
};
export type data_quality_flag_logMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rule_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    flag_reason?: Prisma.SortOrder;
    resolved?: Prisma.SortOrder;
    resolved_by?: Prisma.SortOrder;
    resolved_at?: Prisma.SortOrder;
    flagged_at?: Prisma.SortOrder;
};
export type data_quality_flag_logMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rule_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    flag_reason?: Prisma.SortOrder;
    resolved?: Prisma.SortOrder;
    resolved_by?: Prisma.SortOrder;
    resolved_at?: Prisma.SortOrder;
    flagged_at?: Prisma.SortOrder;
};
export type data_quality_flag_logCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.data_quality_flag_logCreateWithoutCustomerInput, Prisma.data_quality_flag_logUncheckedCreateWithoutCustomerInput> | Prisma.data_quality_flag_logCreateWithoutCustomerInput[] | Prisma.data_quality_flag_logUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.data_quality_flag_logCreateOrConnectWithoutCustomerInput | Prisma.data_quality_flag_logCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.data_quality_flag_logCreateManyCustomerInputEnvelope;
    connect?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
};
export type data_quality_flag_logUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.data_quality_flag_logCreateWithoutCustomerInput, Prisma.data_quality_flag_logUncheckedCreateWithoutCustomerInput> | Prisma.data_quality_flag_logCreateWithoutCustomerInput[] | Prisma.data_quality_flag_logUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.data_quality_flag_logCreateOrConnectWithoutCustomerInput | Prisma.data_quality_flag_logCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.data_quality_flag_logCreateManyCustomerInputEnvelope;
    connect?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
};
export type data_quality_flag_logUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.data_quality_flag_logCreateWithoutCustomerInput, Prisma.data_quality_flag_logUncheckedCreateWithoutCustomerInput> | Prisma.data_quality_flag_logCreateWithoutCustomerInput[] | Prisma.data_quality_flag_logUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.data_quality_flag_logCreateOrConnectWithoutCustomerInput | Prisma.data_quality_flag_logCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.data_quality_flag_logUpsertWithWhereUniqueWithoutCustomerInput | Prisma.data_quality_flag_logUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.data_quality_flag_logCreateManyCustomerInputEnvelope;
    set?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    disconnect?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    delete?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    connect?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    update?: Prisma.data_quality_flag_logUpdateWithWhereUniqueWithoutCustomerInput | Prisma.data_quality_flag_logUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.data_quality_flag_logUpdateManyWithWhereWithoutCustomerInput | Prisma.data_quality_flag_logUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.data_quality_flag_logScalarWhereInput | Prisma.data_quality_flag_logScalarWhereInput[];
};
export type data_quality_flag_logUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.data_quality_flag_logCreateWithoutCustomerInput, Prisma.data_quality_flag_logUncheckedCreateWithoutCustomerInput> | Prisma.data_quality_flag_logCreateWithoutCustomerInput[] | Prisma.data_quality_flag_logUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.data_quality_flag_logCreateOrConnectWithoutCustomerInput | Prisma.data_quality_flag_logCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.data_quality_flag_logUpsertWithWhereUniqueWithoutCustomerInput | Prisma.data_quality_flag_logUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.data_quality_flag_logCreateManyCustomerInputEnvelope;
    set?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    disconnect?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    delete?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    connect?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    update?: Prisma.data_quality_flag_logUpdateWithWhereUniqueWithoutCustomerInput | Prisma.data_quality_flag_logUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.data_quality_flag_logUpdateManyWithWhereWithoutCustomerInput | Prisma.data_quality_flag_logUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.data_quality_flag_logScalarWhereInput | Prisma.data_quality_flag_logScalarWhereInput[];
};
export type data_quality_flag_logCreateNestedManyWithoutData_quality_ruleInput = {
    create?: Prisma.XOR<Prisma.data_quality_flag_logCreateWithoutData_quality_ruleInput, Prisma.data_quality_flag_logUncheckedCreateWithoutData_quality_ruleInput> | Prisma.data_quality_flag_logCreateWithoutData_quality_ruleInput[] | Prisma.data_quality_flag_logUncheckedCreateWithoutData_quality_ruleInput[];
    connectOrCreate?: Prisma.data_quality_flag_logCreateOrConnectWithoutData_quality_ruleInput | Prisma.data_quality_flag_logCreateOrConnectWithoutData_quality_ruleInput[];
    createMany?: Prisma.data_quality_flag_logCreateManyData_quality_ruleInputEnvelope;
    connect?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
};
export type data_quality_flag_logUncheckedCreateNestedManyWithoutData_quality_ruleInput = {
    create?: Prisma.XOR<Prisma.data_quality_flag_logCreateWithoutData_quality_ruleInput, Prisma.data_quality_flag_logUncheckedCreateWithoutData_quality_ruleInput> | Prisma.data_quality_flag_logCreateWithoutData_quality_ruleInput[] | Prisma.data_quality_flag_logUncheckedCreateWithoutData_quality_ruleInput[];
    connectOrCreate?: Prisma.data_quality_flag_logCreateOrConnectWithoutData_quality_ruleInput | Prisma.data_quality_flag_logCreateOrConnectWithoutData_quality_ruleInput[];
    createMany?: Prisma.data_quality_flag_logCreateManyData_quality_ruleInputEnvelope;
    connect?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
};
export type data_quality_flag_logUpdateManyWithoutData_quality_ruleNestedInput = {
    create?: Prisma.XOR<Prisma.data_quality_flag_logCreateWithoutData_quality_ruleInput, Prisma.data_quality_flag_logUncheckedCreateWithoutData_quality_ruleInput> | Prisma.data_quality_flag_logCreateWithoutData_quality_ruleInput[] | Prisma.data_quality_flag_logUncheckedCreateWithoutData_quality_ruleInput[];
    connectOrCreate?: Prisma.data_quality_flag_logCreateOrConnectWithoutData_quality_ruleInput | Prisma.data_quality_flag_logCreateOrConnectWithoutData_quality_ruleInput[];
    upsert?: Prisma.data_quality_flag_logUpsertWithWhereUniqueWithoutData_quality_ruleInput | Prisma.data_quality_flag_logUpsertWithWhereUniqueWithoutData_quality_ruleInput[];
    createMany?: Prisma.data_quality_flag_logCreateManyData_quality_ruleInputEnvelope;
    set?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    disconnect?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    delete?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    connect?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    update?: Prisma.data_quality_flag_logUpdateWithWhereUniqueWithoutData_quality_ruleInput | Prisma.data_quality_flag_logUpdateWithWhereUniqueWithoutData_quality_ruleInput[];
    updateMany?: Prisma.data_quality_flag_logUpdateManyWithWhereWithoutData_quality_ruleInput | Prisma.data_quality_flag_logUpdateManyWithWhereWithoutData_quality_ruleInput[];
    deleteMany?: Prisma.data_quality_flag_logScalarWhereInput | Prisma.data_quality_flag_logScalarWhereInput[];
};
export type data_quality_flag_logUncheckedUpdateManyWithoutData_quality_ruleNestedInput = {
    create?: Prisma.XOR<Prisma.data_quality_flag_logCreateWithoutData_quality_ruleInput, Prisma.data_quality_flag_logUncheckedCreateWithoutData_quality_ruleInput> | Prisma.data_quality_flag_logCreateWithoutData_quality_ruleInput[] | Prisma.data_quality_flag_logUncheckedCreateWithoutData_quality_ruleInput[];
    connectOrCreate?: Prisma.data_quality_flag_logCreateOrConnectWithoutData_quality_ruleInput | Prisma.data_quality_flag_logCreateOrConnectWithoutData_quality_ruleInput[];
    upsert?: Prisma.data_quality_flag_logUpsertWithWhereUniqueWithoutData_quality_ruleInput | Prisma.data_quality_flag_logUpsertWithWhereUniqueWithoutData_quality_ruleInput[];
    createMany?: Prisma.data_quality_flag_logCreateManyData_quality_ruleInputEnvelope;
    set?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    disconnect?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    delete?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    connect?: Prisma.data_quality_flag_logWhereUniqueInput | Prisma.data_quality_flag_logWhereUniqueInput[];
    update?: Prisma.data_quality_flag_logUpdateWithWhereUniqueWithoutData_quality_ruleInput | Prisma.data_quality_flag_logUpdateWithWhereUniqueWithoutData_quality_ruleInput[];
    updateMany?: Prisma.data_quality_flag_logUpdateManyWithWhereWithoutData_quality_ruleInput | Prisma.data_quality_flag_logUpdateManyWithWhereWithoutData_quality_ruleInput[];
    deleteMany?: Prisma.data_quality_flag_logScalarWhereInput | Prisma.data_quality_flag_logScalarWhereInput[];
};
export type data_quality_flag_logCreateWithoutCustomerInput = {
    id?: string;
    flag_reason?: string | null;
    resolved?: boolean;
    resolved_by?: string | null;
    resolved_at?: Date | string | null;
    flagged_at?: Date | string;
    data_quality_rule: Prisma.data_quality_ruleCreateNestedOneWithoutData_quality_flag_logInput;
};
export type data_quality_flag_logUncheckedCreateWithoutCustomerInput = {
    id?: string;
    rule_id: string;
    flag_reason?: string | null;
    resolved?: boolean;
    resolved_by?: string | null;
    resolved_at?: Date | string | null;
    flagged_at?: Date | string;
};
export type data_quality_flag_logCreateOrConnectWithoutCustomerInput = {
    where: Prisma.data_quality_flag_logWhereUniqueInput;
    create: Prisma.XOR<Prisma.data_quality_flag_logCreateWithoutCustomerInput, Prisma.data_quality_flag_logUncheckedCreateWithoutCustomerInput>;
};
export type data_quality_flag_logCreateManyCustomerInputEnvelope = {
    data: Prisma.data_quality_flag_logCreateManyCustomerInput | Prisma.data_quality_flag_logCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type data_quality_flag_logUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.data_quality_flag_logWhereUniqueInput;
    update: Prisma.XOR<Prisma.data_quality_flag_logUpdateWithoutCustomerInput, Prisma.data_quality_flag_logUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.data_quality_flag_logCreateWithoutCustomerInput, Prisma.data_quality_flag_logUncheckedCreateWithoutCustomerInput>;
};
export type data_quality_flag_logUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.data_quality_flag_logWhereUniqueInput;
    data: Prisma.XOR<Prisma.data_quality_flag_logUpdateWithoutCustomerInput, Prisma.data_quality_flag_logUncheckedUpdateWithoutCustomerInput>;
};
export type data_quality_flag_logUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.data_quality_flag_logScalarWhereInput;
    data: Prisma.XOR<Prisma.data_quality_flag_logUpdateManyMutationInput, Prisma.data_quality_flag_logUncheckedUpdateManyWithoutCustomerInput>;
};
export type data_quality_flag_logScalarWhereInput = {
    AND?: Prisma.data_quality_flag_logScalarWhereInput | Prisma.data_quality_flag_logScalarWhereInput[];
    OR?: Prisma.data_quality_flag_logScalarWhereInput[];
    NOT?: Prisma.data_quality_flag_logScalarWhereInput | Prisma.data_quality_flag_logScalarWhereInput[];
    id?: Prisma.UuidFilter<"data_quality_flag_log"> | string;
    rule_id?: Prisma.UuidFilter<"data_quality_flag_log"> | string;
    customer_id?: Prisma.UuidFilter<"data_quality_flag_log"> | string;
    flag_reason?: Prisma.StringNullableFilter<"data_quality_flag_log"> | string | null;
    resolved?: Prisma.BoolFilter<"data_quality_flag_log"> | boolean;
    resolved_by?: Prisma.UuidNullableFilter<"data_quality_flag_log"> | string | null;
    resolved_at?: Prisma.DateTimeNullableFilter<"data_quality_flag_log"> | Date | string | null;
    flagged_at?: Prisma.DateTimeFilter<"data_quality_flag_log"> | Date | string;
};
export type data_quality_flag_logCreateWithoutData_quality_ruleInput = {
    id?: string;
    flag_reason?: string | null;
    resolved?: boolean;
    resolved_by?: string | null;
    resolved_at?: Date | string | null;
    flagged_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutData_quality_flag_logInput;
};
export type data_quality_flag_logUncheckedCreateWithoutData_quality_ruleInput = {
    id?: string;
    customer_id: string;
    flag_reason?: string | null;
    resolved?: boolean;
    resolved_by?: string | null;
    resolved_at?: Date | string | null;
    flagged_at?: Date | string;
};
export type data_quality_flag_logCreateOrConnectWithoutData_quality_ruleInput = {
    where: Prisma.data_quality_flag_logWhereUniqueInput;
    create: Prisma.XOR<Prisma.data_quality_flag_logCreateWithoutData_quality_ruleInput, Prisma.data_quality_flag_logUncheckedCreateWithoutData_quality_ruleInput>;
};
export type data_quality_flag_logCreateManyData_quality_ruleInputEnvelope = {
    data: Prisma.data_quality_flag_logCreateManyData_quality_ruleInput | Prisma.data_quality_flag_logCreateManyData_quality_ruleInput[];
    skipDuplicates?: boolean;
};
export type data_quality_flag_logUpsertWithWhereUniqueWithoutData_quality_ruleInput = {
    where: Prisma.data_quality_flag_logWhereUniqueInput;
    update: Prisma.XOR<Prisma.data_quality_flag_logUpdateWithoutData_quality_ruleInput, Prisma.data_quality_flag_logUncheckedUpdateWithoutData_quality_ruleInput>;
    create: Prisma.XOR<Prisma.data_quality_flag_logCreateWithoutData_quality_ruleInput, Prisma.data_quality_flag_logUncheckedCreateWithoutData_quality_ruleInput>;
};
export type data_quality_flag_logUpdateWithWhereUniqueWithoutData_quality_ruleInput = {
    where: Prisma.data_quality_flag_logWhereUniqueInput;
    data: Prisma.XOR<Prisma.data_quality_flag_logUpdateWithoutData_quality_ruleInput, Prisma.data_quality_flag_logUncheckedUpdateWithoutData_quality_ruleInput>;
};
export type data_quality_flag_logUpdateManyWithWhereWithoutData_quality_ruleInput = {
    where: Prisma.data_quality_flag_logScalarWhereInput;
    data: Prisma.XOR<Prisma.data_quality_flag_logUpdateManyMutationInput, Prisma.data_quality_flag_logUncheckedUpdateManyWithoutData_quality_ruleInput>;
};
export type data_quality_flag_logCreateManyCustomerInput = {
    id?: string;
    rule_id: string;
    flag_reason?: string | null;
    resolved?: boolean;
    resolved_by?: string | null;
    resolved_at?: Date | string | null;
    flagged_at?: Date | string;
};
export type data_quality_flag_logUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    flag_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resolved_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flagged_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    data_quality_rule?: Prisma.data_quality_ruleUpdateOneRequiredWithoutData_quality_flag_logNestedInput;
};
export type data_quality_flag_logUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rule_id?: Prisma.StringFieldUpdateOperationsInput | string;
    flag_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resolved_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flagged_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type data_quality_flag_logUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rule_id?: Prisma.StringFieldUpdateOperationsInput | string;
    flag_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resolved_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flagged_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type data_quality_flag_logCreateManyData_quality_ruleInput = {
    id?: string;
    customer_id: string;
    flag_reason?: string | null;
    resolved?: boolean;
    resolved_by?: string | null;
    resolved_at?: Date | string | null;
    flagged_at?: Date | string;
};
export type data_quality_flag_logUpdateWithoutData_quality_ruleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    flag_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resolved_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flagged_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutData_quality_flag_logNestedInput;
};
export type data_quality_flag_logUncheckedUpdateWithoutData_quality_ruleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    flag_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resolved_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flagged_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type data_quality_flag_logUncheckedUpdateManyWithoutData_quality_ruleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    flag_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    resolved_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resolved_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    flagged_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type data_quality_flag_logSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rule_id?: boolean;
    customer_id?: boolean;
    flag_reason?: boolean;
    resolved?: boolean;
    resolved_by?: boolean;
    resolved_at?: boolean;
    flagged_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    data_quality_rule?: boolean | Prisma.data_quality_ruleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["data_quality_flag_log"]>;
export type data_quality_flag_logSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rule_id?: boolean;
    customer_id?: boolean;
    flag_reason?: boolean;
    resolved?: boolean;
    resolved_by?: boolean;
    resolved_at?: boolean;
    flagged_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    data_quality_rule?: boolean | Prisma.data_quality_ruleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["data_quality_flag_log"]>;
export type data_quality_flag_logSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rule_id?: boolean;
    customer_id?: boolean;
    flag_reason?: boolean;
    resolved?: boolean;
    resolved_by?: boolean;
    resolved_at?: boolean;
    flagged_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    data_quality_rule?: boolean | Prisma.data_quality_ruleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["data_quality_flag_log"]>;
export type data_quality_flag_logSelectScalar = {
    id?: boolean;
    rule_id?: boolean;
    customer_id?: boolean;
    flag_reason?: boolean;
    resolved?: boolean;
    resolved_by?: boolean;
    resolved_at?: boolean;
    flagged_at?: boolean;
};
export type data_quality_flag_logOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rule_id" | "customer_id" | "flag_reason" | "resolved" | "resolved_by" | "resolved_at" | "flagged_at", ExtArgs["result"]["data_quality_flag_log"]>;
export type data_quality_flag_logInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    data_quality_rule?: boolean | Prisma.data_quality_ruleDefaultArgs<ExtArgs>;
};
export type data_quality_flag_logIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    data_quality_rule?: boolean | Prisma.data_quality_ruleDefaultArgs<ExtArgs>;
};
export type data_quality_flag_logIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    data_quality_rule?: boolean | Prisma.data_quality_ruleDefaultArgs<ExtArgs>;
};
export type $data_quality_flag_logPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "data_quality_flag_log";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        data_quality_rule: Prisma.$data_quality_rulePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        rule_id: string;
        customer_id: string;
        flag_reason: string | null;
        resolved: boolean;
        resolved_by: string | null;
        resolved_at: Date | null;
        flagged_at: Date;
    }, ExtArgs["result"]["data_quality_flag_log"]>;
    composites: {};
};
export type data_quality_flag_logGetPayload<S extends boolean | null | undefined | data_quality_flag_logDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$data_quality_flag_logPayload, S>;
export type data_quality_flag_logCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<data_quality_flag_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Data_quality_flag_logCountAggregateInputType | true;
};
export interface data_quality_flag_logDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['data_quality_flag_log'];
        meta: {
            name: 'data_quality_flag_log';
        };
    };
    findUnique<T extends data_quality_flag_logFindUniqueArgs>(args: Prisma.SelectSubset<T, data_quality_flag_logFindUniqueArgs<ExtArgs>>): Prisma.Prisma__data_quality_flag_logClient<runtime.Types.Result.GetResult<Prisma.$data_quality_flag_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends data_quality_flag_logFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, data_quality_flag_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__data_quality_flag_logClient<runtime.Types.Result.GetResult<Prisma.$data_quality_flag_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends data_quality_flag_logFindFirstArgs>(args?: Prisma.SelectSubset<T, data_quality_flag_logFindFirstArgs<ExtArgs>>): Prisma.Prisma__data_quality_flag_logClient<runtime.Types.Result.GetResult<Prisma.$data_quality_flag_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends data_quality_flag_logFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, data_quality_flag_logFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__data_quality_flag_logClient<runtime.Types.Result.GetResult<Prisma.$data_quality_flag_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends data_quality_flag_logFindManyArgs>(args?: Prisma.SelectSubset<T, data_quality_flag_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$data_quality_flag_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends data_quality_flag_logCreateArgs>(args: Prisma.SelectSubset<T, data_quality_flag_logCreateArgs<ExtArgs>>): Prisma.Prisma__data_quality_flag_logClient<runtime.Types.Result.GetResult<Prisma.$data_quality_flag_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends data_quality_flag_logCreateManyArgs>(args?: Prisma.SelectSubset<T, data_quality_flag_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends data_quality_flag_logCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, data_quality_flag_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$data_quality_flag_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends data_quality_flag_logDeleteArgs>(args: Prisma.SelectSubset<T, data_quality_flag_logDeleteArgs<ExtArgs>>): Prisma.Prisma__data_quality_flag_logClient<runtime.Types.Result.GetResult<Prisma.$data_quality_flag_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends data_quality_flag_logUpdateArgs>(args: Prisma.SelectSubset<T, data_quality_flag_logUpdateArgs<ExtArgs>>): Prisma.Prisma__data_quality_flag_logClient<runtime.Types.Result.GetResult<Prisma.$data_quality_flag_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends data_quality_flag_logDeleteManyArgs>(args?: Prisma.SelectSubset<T, data_quality_flag_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends data_quality_flag_logUpdateManyArgs>(args: Prisma.SelectSubset<T, data_quality_flag_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends data_quality_flag_logUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, data_quality_flag_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$data_quality_flag_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends data_quality_flag_logUpsertArgs>(args: Prisma.SelectSubset<T, data_quality_flag_logUpsertArgs<ExtArgs>>): Prisma.Prisma__data_quality_flag_logClient<runtime.Types.Result.GetResult<Prisma.$data_quality_flag_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends data_quality_flag_logCountArgs>(args?: Prisma.Subset<T, data_quality_flag_logCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Data_quality_flag_logCountAggregateOutputType> : number>;
    aggregate<T extends Data_quality_flag_logAggregateArgs>(args: Prisma.Subset<T, Data_quality_flag_logAggregateArgs>): Prisma.PrismaPromise<GetData_quality_flag_logAggregateType<T>>;
    groupBy<T extends data_quality_flag_logGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: data_quality_flag_logGroupByArgs['orderBy'];
    } : {
        orderBy?: data_quality_flag_logGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, data_quality_flag_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetData_quality_flag_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: data_quality_flag_logFieldRefs;
}
export interface Prisma__data_quality_flag_logClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    data_quality_rule<T extends Prisma.data_quality_ruleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.data_quality_ruleDefaultArgs<ExtArgs>>): Prisma.Prisma__data_quality_ruleClient<runtime.Types.Result.GetResult<Prisma.$data_quality_rulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface data_quality_flag_logFieldRefs {
    readonly id: Prisma.FieldRef<"data_quality_flag_log", 'String'>;
    readonly rule_id: Prisma.FieldRef<"data_quality_flag_log", 'String'>;
    readonly customer_id: Prisma.FieldRef<"data_quality_flag_log", 'String'>;
    readonly flag_reason: Prisma.FieldRef<"data_quality_flag_log", 'String'>;
    readonly resolved: Prisma.FieldRef<"data_quality_flag_log", 'Boolean'>;
    readonly resolved_by: Prisma.FieldRef<"data_quality_flag_log", 'String'>;
    readonly resolved_at: Prisma.FieldRef<"data_quality_flag_log", 'DateTime'>;
    readonly flagged_at: Prisma.FieldRef<"data_quality_flag_log", 'DateTime'>;
}
export type data_quality_flag_logFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_flag_logSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_flag_logOmit<ExtArgs> | null;
    include?: Prisma.data_quality_flag_logInclude<ExtArgs> | null;
    where: Prisma.data_quality_flag_logWhereUniqueInput;
};
export type data_quality_flag_logFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_flag_logSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_flag_logOmit<ExtArgs> | null;
    include?: Prisma.data_quality_flag_logInclude<ExtArgs> | null;
    where: Prisma.data_quality_flag_logWhereUniqueInput;
};
export type data_quality_flag_logFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type data_quality_flag_logFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type data_quality_flag_logFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type data_quality_flag_logCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_flag_logSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_flag_logOmit<ExtArgs> | null;
    include?: Prisma.data_quality_flag_logInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.data_quality_flag_logCreateInput, Prisma.data_quality_flag_logUncheckedCreateInput>;
};
export type data_quality_flag_logCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.data_quality_flag_logCreateManyInput | Prisma.data_quality_flag_logCreateManyInput[];
    skipDuplicates?: boolean;
};
export type data_quality_flag_logCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_flag_logSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.data_quality_flag_logOmit<ExtArgs> | null;
    data: Prisma.data_quality_flag_logCreateManyInput | Prisma.data_quality_flag_logCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.data_quality_flag_logIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type data_quality_flag_logUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_flag_logSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_flag_logOmit<ExtArgs> | null;
    include?: Prisma.data_quality_flag_logInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.data_quality_flag_logUpdateInput, Prisma.data_quality_flag_logUncheckedUpdateInput>;
    where: Prisma.data_quality_flag_logWhereUniqueInput;
};
export type data_quality_flag_logUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.data_quality_flag_logUpdateManyMutationInput, Prisma.data_quality_flag_logUncheckedUpdateManyInput>;
    where?: Prisma.data_quality_flag_logWhereInput;
    limit?: number;
};
export type data_quality_flag_logUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_flag_logSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.data_quality_flag_logOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.data_quality_flag_logUpdateManyMutationInput, Prisma.data_quality_flag_logUncheckedUpdateManyInput>;
    where?: Prisma.data_quality_flag_logWhereInput;
    limit?: number;
    include?: Prisma.data_quality_flag_logIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type data_quality_flag_logUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_flag_logSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_flag_logOmit<ExtArgs> | null;
    include?: Prisma.data_quality_flag_logInclude<ExtArgs> | null;
    where: Prisma.data_quality_flag_logWhereUniqueInput;
    create: Prisma.XOR<Prisma.data_quality_flag_logCreateInput, Prisma.data_quality_flag_logUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.data_quality_flag_logUpdateInput, Prisma.data_quality_flag_logUncheckedUpdateInput>;
};
export type data_quality_flag_logDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_flag_logSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_flag_logOmit<ExtArgs> | null;
    include?: Prisma.data_quality_flag_logInclude<ExtArgs> | null;
    where: Prisma.data_quality_flag_logWhereUniqueInput;
};
export type data_quality_flag_logDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.data_quality_flag_logWhereInput;
    limit?: number;
};
export type data_quality_flag_logDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.data_quality_flag_logSelect<ExtArgs> | null;
    omit?: Prisma.data_quality_flag_logOmit<ExtArgs> | null;
    include?: Prisma.data_quality_flag_logInclude<ExtArgs> | null;
};
