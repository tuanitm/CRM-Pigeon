import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type message_logModel = runtime.Types.Result.DefaultSelection<Prisma.$message_logPayload>;
export type AggregateMessage_log = {
    _count: Message_logCountAggregateOutputType | null;
    _avg: Message_logAvgAggregateOutputType | null;
    _sum: Message_logSumAggregateOutputType | null;
    _min: Message_logMinAggregateOutputType | null;
    _max: Message_logMaxAggregateOutputType | null;
};
export type Message_logAvgAggregateOutputType = {
    cost: runtime.Decimal | null;
};
export type Message_logSumAggregateOutputType = {
    cost: runtime.Decimal | null;
};
export type Message_logMinAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    template_id: string | null;
    channel: string | null;
    status: string | null;
    suppression_reason: string | null;
    provider_message_id: string | null;
    cost: runtime.Decimal | null;
    cost_currency: string | null;
    journey_run_id: string | null;
    sent_at: Date | null;
    delivered_at: Date | null;
    opened_at: Date | null;
    clicked_at: Date | null;
    created_at: Date | null;
};
export type Message_logMaxAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    template_id: string | null;
    channel: string | null;
    status: string | null;
    suppression_reason: string | null;
    provider_message_id: string | null;
    cost: runtime.Decimal | null;
    cost_currency: string | null;
    journey_run_id: string | null;
    sent_at: Date | null;
    delivered_at: Date | null;
    opened_at: Date | null;
    clicked_at: Date | null;
    created_at: Date | null;
};
export type Message_logCountAggregateOutputType = {
    id: number;
    customer_id: number;
    template_id: number;
    channel: number;
    status: number;
    suppression_reason: number;
    provider_message_id: number;
    cost: number;
    cost_currency: number;
    journey_run_id: number;
    sent_at: number;
    delivered_at: number;
    opened_at: number;
    clicked_at: number;
    created_at: number;
    _all: number;
};
export type Message_logAvgAggregateInputType = {
    cost?: true;
};
export type Message_logSumAggregateInputType = {
    cost?: true;
};
export type Message_logMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    template_id?: true;
    channel?: true;
    status?: true;
    suppression_reason?: true;
    provider_message_id?: true;
    cost?: true;
    cost_currency?: true;
    journey_run_id?: true;
    sent_at?: true;
    delivered_at?: true;
    opened_at?: true;
    clicked_at?: true;
    created_at?: true;
};
export type Message_logMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    template_id?: true;
    channel?: true;
    status?: true;
    suppression_reason?: true;
    provider_message_id?: true;
    cost?: true;
    cost_currency?: true;
    journey_run_id?: true;
    sent_at?: true;
    delivered_at?: true;
    opened_at?: true;
    clicked_at?: true;
    created_at?: true;
};
export type Message_logCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    template_id?: true;
    channel?: true;
    status?: true;
    suppression_reason?: true;
    provider_message_id?: true;
    cost?: true;
    cost_currency?: true;
    journey_run_id?: true;
    sent_at?: true;
    delivered_at?: true;
    opened_at?: true;
    clicked_at?: true;
    created_at?: true;
    _all?: true;
};
export type Message_logAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.message_logWhereInput;
    orderBy?: Prisma.message_logOrderByWithRelationInput | Prisma.message_logOrderByWithRelationInput[];
    cursor?: Prisma.message_logWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Message_logCountAggregateInputType;
    _avg?: Message_logAvgAggregateInputType;
    _sum?: Message_logSumAggregateInputType;
    _min?: Message_logMinAggregateInputType;
    _max?: Message_logMaxAggregateInputType;
};
export type GetMessage_logAggregateType<T extends Message_logAggregateArgs> = {
    [P in keyof T & keyof AggregateMessage_log]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMessage_log[P]> : Prisma.GetScalarType<T[P], AggregateMessage_log[P]>;
};
export type message_logGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.message_logWhereInput;
    orderBy?: Prisma.message_logOrderByWithAggregationInput | Prisma.message_logOrderByWithAggregationInput[];
    by: Prisma.Message_logScalarFieldEnum[] | Prisma.Message_logScalarFieldEnum;
    having?: Prisma.message_logScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Message_logCountAggregateInputType | true;
    _avg?: Message_logAvgAggregateInputType;
    _sum?: Message_logSumAggregateInputType;
    _min?: Message_logMinAggregateInputType;
    _max?: Message_logMaxAggregateInputType;
};
export type Message_logGroupByOutputType = {
    id: string;
    customer_id: string;
    template_id: string | null;
    channel: string;
    status: string;
    suppression_reason: string | null;
    provider_message_id: string | null;
    cost: runtime.Decimal | null;
    cost_currency: string | null;
    journey_run_id: string | null;
    sent_at: Date | null;
    delivered_at: Date | null;
    opened_at: Date | null;
    clicked_at: Date | null;
    created_at: Date;
    _count: Message_logCountAggregateOutputType | null;
    _avg: Message_logAvgAggregateOutputType | null;
    _sum: Message_logSumAggregateOutputType | null;
    _min: Message_logMinAggregateOutputType | null;
    _max: Message_logMaxAggregateOutputType | null;
};
export type GetMessage_logGroupByPayload<T extends message_logGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Message_logGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Message_logGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Message_logGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Message_logGroupByOutputType[P]>;
}>>;
export type message_logWhereInput = {
    AND?: Prisma.message_logWhereInput | Prisma.message_logWhereInput[];
    OR?: Prisma.message_logWhereInput[];
    NOT?: Prisma.message_logWhereInput | Prisma.message_logWhereInput[];
    id?: Prisma.UuidFilter<"message_log"> | string;
    customer_id?: Prisma.UuidFilter<"message_log"> | string;
    template_id?: Prisma.UuidNullableFilter<"message_log"> | string | null;
    channel?: Prisma.StringFilter<"message_log"> | string;
    status?: Prisma.StringFilter<"message_log"> | string;
    suppression_reason?: Prisma.StringNullableFilter<"message_log"> | string | null;
    provider_message_id?: Prisma.StringNullableFilter<"message_log"> | string | null;
    cost?: Prisma.DecimalNullableFilter<"message_log"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.StringNullableFilter<"message_log"> | string | null;
    journey_run_id?: Prisma.UuidNullableFilter<"message_log"> | string | null;
    sent_at?: Prisma.DateTimeNullableFilter<"message_log"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableFilter<"message_log"> | Date | string | null;
    opened_at?: Prisma.DateTimeNullableFilter<"message_log"> | Date | string | null;
    clicked_at?: Prisma.DateTimeNullableFilter<"message_log"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"message_log"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    journey_run?: Prisma.XOR<Prisma.Journey_runNullableScalarRelationFilter, Prisma.journey_runWhereInput> | null;
    message_template?: Prisma.XOR<Prisma.MessageTemplateNullableScalarRelationFilter, Prisma.MessageTemplateWhereInput> | null;
};
export type message_logOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    template_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    suppression_reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider_message_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    cost?: Prisma.SortOrderInput | Prisma.SortOrder;
    cost_currency?: Prisma.SortOrderInput | Prisma.SortOrder;
    journey_run_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    sent_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    delivered_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    opened_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    clicked_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    journey_run?: Prisma.journey_runOrderByWithRelationInput;
    message_template?: Prisma.MessageTemplateOrderByWithRelationInput;
};
export type message_logWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.message_logWhereInput | Prisma.message_logWhereInput[];
    OR?: Prisma.message_logWhereInput[];
    NOT?: Prisma.message_logWhereInput | Prisma.message_logWhereInput[];
    customer_id?: Prisma.UuidFilter<"message_log"> | string;
    template_id?: Prisma.UuidNullableFilter<"message_log"> | string | null;
    channel?: Prisma.StringFilter<"message_log"> | string;
    status?: Prisma.StringFilter<"message_log"> | string;
    suppression_reason?: Prisma.StringNullableFilter<"message_log"> | string | null;
    provider_message_id?: Prisma.StringNullableFilter<"message_log"> | string | null;
    cost?: Prisma.DecimalNullableFilter<"message_log"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.StringNullableFilter<"message_log"> | string | null;
    journey_run_id?: Prisma.UuidNullableFilter<"message_log"> | string | null;
    sent_at?: Prisma.DateTimeNullableFilter<"message_log"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableFilter<"message_log"> | Date | string | null;
    opened_at?: Prisma.DateTimeNullableFilter<"message_log"> | Date | string | null;
    clicked_at?: Prisma.DateTimeNullableFilter<"message_log"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"message_log"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    journey_run?: Prisma.XOR<Prisma.Journey_runNullableScalarRelationFilter, Prisma.journey_runWhereInput> | null;
    message_template?: Prisma.XOR<Prisma.MessageTemplateNullableScalarRelationFilter, Prisma.MessageTemplateWhereInput> | null;
}, "id">;
export type message_logOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    template_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    suppression_reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    provider_message_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    cost?: Prisma.SortOrderInput | Prisma.SortOrder;
    cost_currency?: Prisma.SortOrderInput | Prisma.SortOrder;
    journey_run_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    sent_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    delivered_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    opened_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    clicked_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.message_logCountOrderByAggregateInput;
    _avg?: Prisma.message_logAvgOrderByAggregateInput;
    _max?: Prisma.message_logMaxOrderByAggregateInput;
    _min?: Prisma.message_logMinOrderByAggregateInput;
    _sum?: Prisma.message_logSumOrderByAggregateInput;
};
export type message_logScalarWhereWithAggregatesInput = {
    AND?: Prisma.message_logScalarWhereWithAggregatesInput | Prisma.message_logScalarWhereWithAggregatesInput[];
    OR?: Prisma.message_logScalarWhereWithAggregatesInput[];
    NOT?: Prisma.message_logScalarWhereWithAggregatesInput | Prisma.message_logScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"message_log"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"message_log"> | string;
    template_id?: Prisma.UuidNullableWithAggregatesFilter<"message_log"> | string | null;
    channel?: Prisma.StringWithAggregatesFilter<"message_log"> | string;
    status?: Prisma.StringWithAggregatesFilter<"message_log"> | string;
    suppression_reason?: Prisma.StringNullableWithAggregatesFilter<"message_log"> | string | null;
    provider_message_id?: Prisma.StringNullableWithAggregatesFilter<"message_log"> | string | null;
    cost?: Prisma.DecimalNullableWithAggregatesFilter<"message_log"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.StringNullableWithAggregatesFilter<"message_log"> | string | null;
    journey_run_id?: Prisma.UuidNullableWithAggregatesFilter<"message_log"> | string | null;
    sent_at?: Prisma.DateTimeNullableWithAggregatesFilter<"message_log"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableWithAggregatesFilter<"message_log"> | Date | string | null;
    opened_at?: Prisma.DateTimeNullableWithAggregatesFilter<"message_log"> | Date | string | null;
    clicked_at?: Prisma.DateTimeNullableWithAggregatesFilter<"message_log"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"message_log"> | Date | string;
};
export type message_logCreateInput = {
    id?: string;
    channel: string;
    status: string;
    suppression_reason?: string | null;
    provider_message_id?: string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: string | null;
    sent_at?: Date | string | null;
    delivered_at?: Date | string | null;
    opened_at?: Date | string | null;
    clicked_at?: Date | string | null;
    created_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutMessage_logInput;
    journey_run?: Prisma.journey_runCreateNestedOneWithoutMessage_logInput;
    message_template?: Prisma.MessageTemplateCreateNestedOneWithoutMessage_logInput;
};
export type message_logUncheckedCreateInput = {
    id?: string;
    customer_id: string;
    template_id?: string | null;
    channel: string;
    status: string;
    suppression_reason?: string | null;
    provider_message_id?: string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: string | null;
    journey_run_id?: string | null;
    sent_at?: Date | string | null;
    delivered_at?: Date | string | null;
    opened_at?: Date | string | null;
    clicked_at?: Date | string | null;
    created_at?: Date | string;
};
export type message_logUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    suppression_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    opened_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clicked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutMessage_logNestedInput;
    journey_run?: Prisma.journey_runUpdateOneWithoutMessage_logNestedInput;
    message_template?: Prisma.MessageTemplateUpdateOneWithoutMessage_logNestedInput;
};
export type message_logUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    template_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    suppression_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_run_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    opened_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clicked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type message_logCreateManyInput = {
    id?: string;
    customer_id: string;
    template_id?: string | null;
    channel: string;
    status: string;
    suppression_reason?: string | null;
    provider_message_id?: string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: string | null;
    journey_run_id?: string | null;
    sent_at?: Date | string | null;
    delivered_at?: Date | string | null;
    opened_at?: Date | string | null;
    clicked_at?: Date | string | null;
    created_at?: Date | string;
};
export type message_logUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    suppression_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    opened_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clicked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type message_logUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    template_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    suppression_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_run_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    opened_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clicked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Message_logListRelationFilter = {
    every?: Prisma.message_logWhereInput;
    some?: Prisma.message_logWhereInput;
    none?: Prisma.message_logWhereInput;
};
export type message_logOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type message_logCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    template_id?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    suppression_reason?: Prisma.SortOrder;
    provider_message_id?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    cost_currency?: Prisma.SortOrder;
    journey_run_id?: Prisma.SortOrder;
    sent_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
    opened_at?: Prisma.SortOrder;
    clicked_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type message_logAvgOrderByAggregateInput = {
    cost?: Prisma.SortOrder;
};
export type message_logMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    template_id?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    suppression_reason?: Prisma.SortOrder;
    provider_message_id?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    cost_currency?: Prisma.SortOrder;
    journey_run_id?: Prisma.SortOrder;
    sent_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
    opened_at?: Prisma.SortOrder;
    clicked_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type message_logMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    template_id?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    suppression_reason?: Prisma.SortOrder;
    provider_message_id?: Prisma.SortOrder;
    cost?: Prisma.SortOrder;
    cost_currency?: Prisma.SortOrder;
    journey_run_id?: Prisma.SortOrder;
    sent_at?: Prisma.SortOrder;
    delivered_at?: Prisma.SortOrder;
    opened_at?: Prisma.SortOrder;
    clicked_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type message_logSumOrderByAggregateInput = {
    cost?: Prisma.SortOrder;
};
export type message_logCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.message_logCreateWithoutCustomerInput, Prisma.message_logUncheckedCreateWithoutCustomerInput> | Prisma.message_logCreateWithoutCustomerInput[] | Prisma.message_logUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.message_logCreateOrConnectWithoutCustomerInput | Prisma.message_logCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.message_logCreateManyCustomerInputEnvelope;
    connect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
};
export type message_logUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.message_logCreateWithoutCustomerInput, Prisma.message_logUncheckedCreateWithoutCustomerInput> | Prisma.message_logCreateWithoutCustomerInput[] | Prisma.message_logUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.message_logCreateOrConnectWithoutCustomerInput | Prisma.message_logCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.message_logCreateManyCustomerInputEnvelope;
    connect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
};
export type message_logUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.message_logCreateWithoutCustomerInput, Prisma.message_logUncheckedCreateWithoutCustomerInput> | Prisma.message_logCreateWithoutCustomerInput[] | Prisma.message_logUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.message_logCreateOrConnectWithoutCustomerInput | Prisma.message_logCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.message_logUpsertWithWhereUniqueWithoutCustomerInput | Prisma.message_logUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.message_logCreateManyCustomerInputEnvelope;
    set?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    disconnect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    delete?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    connect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    update?: Prisma.message_logUpdateWithWhereUniqueWithoutCustomerInput | Prisma.message_logUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.message_logUpdateManyWithWhereWithoutCustomerInput | Prisma.message_logUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.message_logScalarWhereInput | Prisma.message_logScalarWhereInput[];
};
export type message_logUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.message_logCreateWithoutCustomerInput, Prisma.message_logUncheckedCreateWithoutCustomerInput> | Prisma.message_logCreateWithoutCustomerInput[] | Prisma.message_logUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.message_logCreateOrConnectWithoutCustomerInput | Prisma.message_logCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.message_logUpsertWithWhereUniqueWithoutCustomerInput | Prisma.message_logUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.message_logCreateManyCustomerInputEnvelope;
    set?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    disconnect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    delete?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    connect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    update?: Prisma.message_logUpdateWithWhereUniqueWithoutCustomerInput | Prisma.message_logUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.message_logUpdateManyWithWhereWithoutCustomerInput | Prisma.message_logUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.message_logScalarWhereInput | Prisma.message_logScalarWhereInput[];
};
export type message_logCreateNestedManyWithoutMessage_templateInput = {
    create?: Prisma.XOR<Prisma.message_logCreateWithoutMessage_templateInput, Prisma.message_logUncheckedCreateWithoutMessage_templateInput> | Prisma.message_logCreateWithoutMessage_templateInput[] | Prisma.message_logUncheckedCreateWithoutMessage_templateInput[];
    connectOrCreate?: Prisma.message_logCreateOrConnectWithoutMessage_templateInput | Prisma.message_logCreateOrConnectWithoutMessage_templateInput[];
    createMany?: Prisma.message_logCreateManyMessage_templateInputEnvelope;
    connect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
};
export type message_logUncheckedCreateNestedManyWithoutMessage_templateInput = {
    create?: Prisma.XOR<Prisma.message_logCreateWithoutMessage_templateInput, Prisma.message_logUncheckedCreateWithoutMessage_templateInput> | Prisma.message_logCreateWithoutMessage_templateInput[] | Prisma.message_logUncheckedCreateWithoutMessage_templateInput[];
    connectOrCreate?: Prisma.message_logCreateOrConnectWithoutMessage_templateInput | Prisma.message_logCreateOrConnectWithoutMessage_templateInput[];
    createMany?: Prisma.message_logCreateManyMessage_templateInputEnvelope;
    connect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
};
export type message_logUpdateManyWithoutMessage_templateNestedInput = {
    create?: Prisma.XOR<Prisma.message_logCreateWithoutMessage_templateInput, Prisma.message_logUncheckedCreateWithoutMessage_templateInput> | Prisma.message_logCreateWithoutMessage_templateInput[] | Prisma.message_logUncheckedCreateWithoutMessage_templateInput[];
    connectOrCreate?: Prisma.message_logCreateOrConnectWithoutMessage_templateInput | Prisma.message_logCreateOrConnectWithoutMessage_templateInput[];
    upsert?: Prisma.message_logUpsertWithWhereUniqueWithoutMessage_templateInput | Prisma.message_logUpsertWithWhereUniqueWithoutMessage_templateInput[];
    createMany?: Prisma.message_logCreateManyMessage_templateInputEnvelope;
    set?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    disconnect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    delete?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    connect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    update?: Prisma.message_logUpdateWithWhereUniqueWithoutMessage_templateInput | Prisma.message_logUpdateWithWhereUniqueWithoutMessage_templateInput[];
    updateMany?: Prisma.message_logUpdateManyWithWhereWithoutMessage_templateInput | Prisma.message_logUpdateManyWithWhereWithoutMessage_templateInput[];
    deleteMany?: Prisma.message_logScalarWhereInput | Prisma.message_logScalarWhereInput[];
};
export type message_logUncheckedUpdateManyWithoutMessage_templateNestedInput = {
    create?: Prisma.XOR<Prisma.message_logCreateWithoutMessage_templateInput, Prisma.message_logUncheckedCreateWithoutMessage_templateInput> | Prisma.message_logCreateWithoutMessage_templateInput[] | Prisma.message_logUncheckedCreateWithoutMessage_templateInput[];
    connectOrCreate?: Prisma.message_logCreateOrConnectWithoutMessage_templateInput | Prisma.message_logCreateOrConnectWithoutMessage_templateInput[];
    upsert?: Prisma.message_logUpsertWithWhereUniqueWithoutMessage_templateInput | Prisma.message_logUpsertWithWhereUniqueWithoutMessage_templateInput[];
    createMany?: Prisma.message_logCreateManyMessage_templateInputEnvelope;
    set?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    disconnect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    delete?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    connect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    update?: Prisma.message_logUpdateWithWhereUniqueWithoutMessage_templateInput | Prisma.message_logUpdateWithWhereUniqueWithoutMessage_templateInput[];
    updateMany?: Prisma.message_logUpdateManyWithWhereWithoutMessage_templateInput | Prisma.message_logUpdateManyWithWhereWithoutMessage_templateInput[];
    deleteMany?: Prisma.message_logScalarWhereInput | Prisma.message_logScalarWhereInput[];
};
export type message_logCreateNestedManyWithoutJourney_runInput = {
    create?: Prisma.XOR<Prisma.message_logCreateWithoutJourney_runInput, Prisma.message_logUncheckedCreateWithoutJourney_runInput> | Prisma.message_logCreateWithoutJourney_runInput[] | Prisma.message_logUncheckedCreateWithoutJourney_runInput[];
    connectOrCreate?: Prisma.message_logCreateOrConnectWithoutJourney_runInput | Prisma.message_logCreateOrConnectWithoutJourney_runInput[];
    createMany?: Prisma.message_logCreateManyJourney_runInputEnvelope;
    connect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
};
export type message_logUncheckedCreateNestedManyWithoutJourney_runInput = {
    create?: Prisma.XOR<Prisma.message_logCreateWithoutJourney_runInput, Prisma.message_logUncheckedCreateWithoutJourney_runInput> | Prisma.message_logCreateWithoutJourney_runInput[] | Prisma.message_logUncheckedCreateWithoutJourney_runInput[];
    connectOrCreate?: Prisma.message_logCreateOrConnectWithoutJourney_runInput | Prisma.message_logCreateOrConnectWithoutJourney_runInput[];
    createMany?: Prisma.message_logCreateManyJourney_runInputEnvelope;
    connect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
};
export type message_logUpdateManyWithoutJourney_runNestedInput = {
    create?: Prisma.XOR<Prisma.message_logCreateWithoutJourney_runInput, Prisma.message_logUncheckedCreateWithoutJourney_runInput> | Prisma.message_logCreateWithoutJourney_runInput[] | Prisma.message_logUncheckedCreateWithoutJourney_runInput[];
    connectOrCreate?: Prisma.message_logCreateOrConnectWithoutJourney_runInput | Prisma.message_logCreateOrConnectWithoutJourney_runInput[];
    upsert?: Prisma.message_logUpsertWithWhereUniqueWithoutJourney_runInput | Prisma.message_logUpsertWithWhereUniqueWithoutJourney_runInput[];
    createMany?: Prisma.message_logCreateManyJourney_runInputEnvelope;
    set?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    disconnect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    delete?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    connect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    update?: Prisma.message_logUpdateWithWhereUniqueWithoutJourney_runInput | Prisma.message_logUpdateWithWhereUniqueWithoutJourney_runInput[];
    updateMany?: Prisma.message_logUpdateManyWithWhereWithoutJourney_runInput | Prisma.message_logUpdateManyWithWhereWithoutJourney_runInput[];
    deleteMany?: Prisma.message_logScalarWhereInput | Prisma.message_logScalarWhereInput[];
};
export type message_logUncheckedUpdateManyWithoutJourney_runNestedInput = {
    create?: Prisma.XOR<Prisma.message_logCreateWithoutJourney_runInput, Prisma.message_logUncheckedCreateWithoutJourney_runInput> | Prisma.message_logCreateWithoutJourney_runInput[] | Prisma.message_logUncheckedCreateWithoutJourney_runInput[];
    connectOrCreate?: Prisma.message_logCreateOrConnectWithoutJourney_runInput | Prisma.message_logCreateOrConnectWithoutJourney_runInput[];
    upsert?: Prisma.message_logUpsertWithWhereUniqueWithoutJourney_runInput | Prisma.message_logUpsertWithWhereUniqueWithoutJourney_runInput[];
    createMany?: Prisma.message_logCreateManyJourney_runInputEnvelope;
    set?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    disconnect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    delete?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    connect?: Prisma.message_logWhereUniqueInput | Prisma.message_logWhereUniqueInput[];
    update?: Prisma.message_logUpdateWithWhereUniqueWithoutJourney_runInput | Prisma.message_logUpdateWithWhereUniqueWithoutJourney_runInput[];
    updateMany?: Prisma.message_logUpdateManyWithWhereWithoutJourney_runInput | Prisma.message_logUpdateManyWithWhereWithoutJourney_runInput[];
    deleteMany?: Prisma.message_logScalarWhereInput | Prisma.message_logScalarWhereInput[];
};
export type message_logCreateWithoutCustomerInput = {
    id?: string;
    channel: string;
    status: string;
    suppression_reason?: string | null;
    provider_message_id?: string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: string | null;
    sent_at?: Date | string | null;
    delivered_at?: Date | string | null;
    opened_at?: Date | string | null;
    clicked_at?: Date | string | null;
    created_at?: Date | string;
    journey_run?: Prisma.journey_runCreateNestedOneWithoutMessage_logInput;
    message_template?: Prisma.MessageTemplateCreateNestedOneWithoutMessage_logInput;
};
export type message_logUncheckedCreateWithoutCustomerInput = {
    id?: string;
    template_id?: string | null;
    channel: string;
    status: string;
    suppression_reason?: string | null;
    provider_message_id?: string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: string | null;
    journey_run_id?: string | null;
    sent_at?: Date | string | null;
    delivered_at?: Date | string | null;
    opened_at?: Date | string | null;
    clicked_at?: Date | string | null;
    created_at?: Date | string;
};
export type message_logCreateOrConnectWithoutCustomerInput = {
    where: Prisma.message_logWhereUniqueInput;
    create: Prisma.XOR<Prisma.message_logCreateWithoutCustomerInput, Prisma.message_logUncheckedCreateWithoutCustomerInput>;
};
export type message_logCreateManyCustomerInputEnvelope = {
    data: Prisma.message_logCreateManyCustomerInput | Prisma.message_logCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type message_logUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.message_logWhereUniqueInput;
    update: Prisma.XOR<Prisma.message_logUpdateWithoutCustomerInput, Prisma.message_logUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.message_logCreateWithoutCustomerInput, Prisma.message_logUncheckedCreateWithoutCustomerInput>;
};
export type message_logUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.message_logWhereUniqueInput;
    data: Prisma.XOR<Prisma.message_logUpdateWithoutCustomerInput, Prisma.message_logUncheckedUpdateWithoutCustomerInput>;
};
export type message_logUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.message_logScalarWhereInput;
    data: Prisma.XOR<Prisma.message_logUpdateManyMutationInput, Prisma.message_logUncheckedUpdateManyWithoutCustomerInput>;
};
export type message_logScalarWhereInput = {
    AND?: Prisma.message_logScalarWhereInput | Prisma.message_logScalarWhereInput[];
    OR?: Prisma.message_logScalarWhereInput[];
    NOT?: Prisma.message_logScalarWhereInput | Prisma.message_logScalarWhereInput[];
    id?: Prisma.UuidFilter<"message_log"> | string;
    customer_id?: Prisma.UuidFilter<"message_log"> | string;
    template_id?: Prisma.UuidNullableFilter<"message_log"> | string | null;
    channel?: Prisma.StringFilter<"message_log"> | string;
    status?: Prisma.StringFilter<"message_log"> | string;
    suppression_reason?: Prisma.StringNullableFilter<"message_log"> | string | null;
    provider_message_id?: Prisma.StringNullableFilter<"message_log"> | string | null;
    cost?: Prisma.DecimalNullableFilter<"message_log"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.StringNullableFilter<"message_log"> | string | null;
    journey_run_id?: Prisma.UuidNullableFilter<"message_log"> | string | null;
    sent_at?: Prisma.DateTimeNullableFilter<"message_log"> | Date | string | null;
    delivered_at?: Prisma.DateTimeNullableFilter<"message_log"> | Date | string | null;
    opened_at?: Prisma.DateTimeNullableFilter<"message_log"> | Date | string | null;
    clicked_at?: Prisma.DateTimeNullableFilter<"message_log"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"message_log"> | Date | string;
};
export type message_logCreateWithoutMessage_templateInput = {
    id?: string;
    channel: string;
    status: string;
    suppression_reason?: string | null;
    provider_message_id?: string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: string | null;
    sent_at?: Date | string | null;
    delivered_at?: Date | string | null;
    opened_at?: Date | string | null;
    clicked_at?: Date | string | null;
    created_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutMessage_logInput;
    journey_run?: Prisma.journey_runCreateNestedOneWithoutMessage_logInput;
};
export type message_logUncheckedCreateWithoutMessage_templateInput = {
    id?: string;
    customer_id: string;
    channel: string;
    status: string;
    suppression_reason?: string | null;
    provider_message_id?: string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: string | null;
    journey_run_id?: string | null;
    sent_at?: Date | string | null;
    delivered_at?: Date | string | null;
    opened_at?: Date | string | null;
    clicked_at?: Date | string | null;
    created_at?: Date | string;
};
export type message_logCreateOrConnectWithoutMessage_templateInput = {
    where: Prisma.message_logWhereUniqueInput;
    create: Prisma.XOR<Prisma.message_logCreateWithoutMessage_templateInput, Prisma.message_logUncheckedCreateWithoutMessage_templateInput>;
};
export type message_logCreateManyMessage_templateInputEnvelope = {
    data: Prisma.message_logCreateManyMessage_templateInput | Prisma.message_logCreateManyMessage_templateInput[];
    skipDuplicates?: boolean;
};
export type message_logUpsertWithWhereUniqueWithoutMessage_templateInput = {
    where: Prisma.message_logWhereUniqueInput;
    update: Prisma.XOR<Prisma.message_logUpdateWithoutMessage_templateInput, Prisma.message_logUncheckedUpdateWithoutMessage_templateInput>;
    create: Prisma.XOR<Prisma.message_logCreateWithoutMessage_templateInput, Prisma.message_logUncheckedCreateWithoutMessage_templateInput>;
};
export type message_logUpdateWithWhereUniqueWithoutMessage_templateInput = {
    where: Prisma.message_logWhereUniqueInput;
    data: Prisma.XOR<Prisma.message_logUpdateWithoutMessage_templateInput, Prisma.message_logUncheckedUpdateWithoutMessage_templateInput>;
};
export type message_logUpdateManyWithWhereWithoutMessage_templateInput = {
    where: Prisma.message_logScalarWhereInput;
    data: Prisma.XOR<Prisma.message_logUpdateManyMutationInput, Prisma.message_logUncheckedUpdateManyWithoutMessage_templateInput>;
};
export type message_logCreateWithoutJourney_runInput = {
    id?: string;
    channel: string;
    status: string;
    suppression_reason?: string | null;
    provider_message_id?: string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: string | null;
    sent_at?: Date | string | null;
    delivered_at?: Date | string | null;
    opened_at?: Date | string | null;
    clicked_at?: Date | string | null;
    created_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutMessage_logInput;
    message_template?: Prisma.MessageTemplateCreateNestedOneWithoutMessage_logInput;
};
export type message_logUncheckedCreateWithoutJourney_runInput = {
    id?: string;
    customer_id: string;
    template_id?: string | null;
    channel: string;
    status: string;
    suppression_reason?: string | null;
    provider_message_id?: string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: string | null;
    sent_at?: Date | string | null;
    delivered_at?: Date | string | null;
    opened_at?: Date | string | null;
    clicked_at?: Date | string | null;
    created_at?: Date | string;
};
export type message_logCreateOrConnectWithoutJourney_runInput = {
    where: Prisma.message_logWhereUniqueInput;
    create: Prisma.XOR<Prisma.message_logCreateWithoutJourney_runInput, Prisma.message_logUncheckedCreateWithoutJourney_runInput>;
};
export type message_logCreateManyJourney_runInputEnvelope = {
    data: Prisma.message_logCreateManyJourney_runInput | Prisma.message_logCreateManyJourney_runInput[];
    skipDuplicates?: boolean;
};
export type message_logUpsertWithWhereUniqueWithoutJourney_runInput = {
    where: Prisma.message_logWhereUniqueInput;
    update: Prisma.XOR<Prisma.message_logUpdateWithoutJourney_runInput, Prisma.message_logUncheckedUpdateWithoutJourney_runInput>;
    create: Prisma.XOR<Prisma.message_logCreateWithoutJourney_runInput, Prisma.message_logUncheckedCreateWithoutJourney_runInput>;
};
export type message_logUpdateWithWhereUniqueWithoutJourney_runInput = {
    where: Prisma.message_logWhereUniqueInput;
    data: Prisma.XOR<Prisma.message_logUpdateWithoutJourney_runInput, Prisma.message_logUncheckedUpdateWithoutJourney_runInput>;
};
export type message_logUpdateManyWithWhereWithoutJourney_runInput = {
    where: Prisma.message_logScalarWhereInput;
    data: Prisma.XOR<Prisma.message_logUpdateManyMutationInput, Prisma.message_logUncheckedUpdateManyWithoutJourney_runInput>;
};
export type message_logCreateManyCustomerInput = {
    id?: string;
    template_id?: string | null;
    channel: string;
    status: string;
    suppression_reason?: string | null;
    provider_message_id?: string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: string | null;
    journey_run_id?: string | null;
    sent_at?: Date | string | null;
    delivered_at?: Date | string | null;
    opened_at?: Date | string | null;
    clicked_at?: Date | string | null;
    created_at?: Date | string;
};
export type message_logUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    suppression_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    opened_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clicked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    journey_run?: Prisma.journey_runUpdateOneWithoutMessage_logNestedInput;
    message_template?: Prisma.MessageTemplateUpdateOneWithoutMessage_logNestedInput;
};
export type message_logUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    template_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    suppression_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_run_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    opened_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clicked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type message_logUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    template_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    suppression_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_run_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    opened_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clicked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type message_logCreateManyMessage_templateInput = {
    id?: string;
    customer_id: string;
    channel: string;
    status: string;
    suppression_reason?: string | null;
    provider_message_id?: string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: string | null;
    journey_run_id?: string | null;
    sent_at?: Date | string | null;
    delivered_at?: Date | string | null;
    opened_at?: Date | string | null;
    clicked_at?: Date | string | null;
    created_at?: Date | string;
};
export type message_logUpdateWithoutMessage_templateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    suppression_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    opened_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clicked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutMessage_logNestedInput;
    journey_run?: Prisma.journey_runUpdateOneWithoutMessage_logNestedInput;
};
export type message_logUncheckedUpdateWithoutMessage_templateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    suppression_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_run_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    opened_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clicked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type message_logUncheckedUpdateManyWithoutMessage_templateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    suppression_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    journey_run_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    opened_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clicked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type message_logCreateManyJourney_runInput = {
    id?: string;
    customer_id: string;
    template_id?: string | null;
    channel: string;
    status: string;
    suppression_reason?: string | null;
    provider_message_id?: string | null;
    cost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: string | null;
    sent_at?: Date | string | null;
    delivered_at?: Date | string | null;
    opened_at?: Date | string | null;
    clicked_at?: Date | string | null;
    created_at?: Date | string;
};
export type message_logUpdateWithoutJourney_runInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    suppression_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    opened_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clicked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutMessage_logNestedInput;
    message_template?: Prisma.MessageTemplateUpdateOneWithoutMessage_logNestedInput;
};
export type message_logUncheckedUpdateWithoutJourney_runInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    template_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    suppression_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    opened_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clicked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type message_logUncheckedUpdateManyWithoutJourney_runInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    template_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    suppression_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provider_message_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    cost_currency?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    delivered_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    opened_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    clicked_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type message_logSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    template_id?: boolean;
    channel?: boolean;
    status?: boolean;
    suppression_reason?: boolean;
    provider_message_id?: boolean;
    cost?: boolean;
    cost_currency?: boolean;
    journey_run_id?: boolean;
    sent_at?: boolean;
    delivered_at?: boolean;
    opened_at?: boolean;
    clicked_at?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey_run?: boolean | Prisma.message_log$journey_runArgs<ExtArgs>;
    message_template?: boolean | Prisma.message_log$message_templateArgs<ExtArgs>;
}, ExtArgs["result"]["message_log"]>;
export type message_logSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    template_id?: boolean;
    channel?: boolean;
    status?: boolean;
    suppression_reason?: boolean;
    provider_message_id?: boolean;
    cost?: boolean;
    cost_currency?: boolean;
    journey_run_id?: boolean;
    sent_at?: boolean;
    delivered_at?: boolean;
    opened_at?: boolean;
    clicked_at?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey_run?: boolean | Prisma.message_log$journey_runArgs<ExtArgs>;
    message_template?: boolean | Prisma.message_log$message_templateArgs<ExtArgs>;
}, ExtArgs["result"]["message_log"]>;
export type message_logSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    template_id?: boolean;
    channel?: boolean;
    status?: boolean;
    suppression_reason?: boolean;
    provider_message_id?: boolean;
    cost?: boolean;
    cost_currency?: boolean;
    journey_run_id?: boolean;
    sent_at?: boolean;
    delivered_at?: boolean;
    opened_at?: boolean;
    clicked_at?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey_run?: boolean | Prisma.message_log$journey_runArgs<ExtArgs>;
    message_template?: boolean | Prisma.message_log$message_templateArgs<ExtArgs>;
}, ExtArgs["result"]["message_log"]>;
export type message_logSelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    template_id?: boolean;
    channel?: boolean;
    status?: boolean;
    suppression_reason?: boolean;
    provider_message_id?: boolean;
    cost?: boolean;
    cost_currency?: boolean;
    journey_run_id?: boolean;
    sent_at?: boolean;
    delivered_at?: boolean;
    opened_at?: boolean;
    clicked_at?: boolean;
    created_at?: boolean;
};
export type message_logOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "template_id" | "channel" | "status" | "suppression_reason" | "provider_message_id" | "cost" | "cost_currency" | "journey_run_id" | "sent_at" | "delivered_at" | "opened_at" | "clicked_at" | "created_at", ExtArgs["result"]["message_log"]>;
export type message_logInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey_run?: boolean | Prisma.message_log$journey_runArgs<ExtArgs>;
    message_template?: boolean | Prisma.message_log$message_templateArgs<ExtArgs>;
};
export type message_logIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey_run?: boolean | Prisma.message_log$journey_runArgs<ExtArgs>;
    message_template?: boolean | Prisma.message_log$message_templateArgs<ExtArgs>;
};
export type message_logIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey_run?: boolean | Prisma.message_log$journey_runArgs<ExtArgs>;
    message_template?: boolean | Prisma.message_log$message_templateArgs<ExtArgs>;
};
export type $message_logPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "message_log";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        journey_run: Prisma.$journey_runPayload<ExtArgs> | null;
        message_template: Prisma.$MessageTemplatePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customer_id: string;
        template_id: string | null;
        channel: string;
        status: string;
        suppression_reason: string | null;
        provider_message_id: string | null;
        cost: runtime.Decimal | null;
        cost_currency: string | null;
        journey_run_id: string | null;
        sent_at: Date | null;
        delivered_at: Date | null;
        opened_at: Date | null;
        clicked_at: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["message_log"]>;
    composites: {};
};
export type message_logGetPayload<S extends boolean | null | undefined | message_logDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$message_logPayload, S>;
export type message_logCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<message_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Message_logCountAggregateInputType | true;
};
export interface message_logDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['message_log'];
        meta: {
            name: 'message_log';
        };
    };
    findUnique<T extends message_logFindUniqueArgs>(args: Prisma.SelectSubset<T, message_logFindUniqueArgs<ExtArgs>>): Prisma.Prisma__message_logClient<runtime.Types.Result.GetResult<Prisma.$message_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends message_logFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, message_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__message_logClient<runtime.Types.Result.GetResult<Prisma.$message_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends message_logFindFirstArgs>(args?: Prisma.SelectSubset<T, message_logFindFirstArgs<ExtArgs>>): Prisma.Prisma__message_logClient<runtime.Types.Result.GetResult<Prisma.$message_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends message_logFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, message_logFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__message_logClient<runtime.Types.Result.GetResult<Prisma.$message_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends message_logFindManyArgs>(args?: Prisma.SelectSubset<T, message_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$message_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends message_logCreateArgs>(args: Prisma.SelectSubset<T, message_logCreateArgs<ExtArgs>>): Prisma.Prisma__message_logClient<runtime.Types.Result.GetResult<Prisma.$message_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends message_logCreateManyArgs>(args?: Prisma.SelectSubset<T, message_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends message_logCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, message_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$message_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends message_logDeleteArgs>(args: Prisma.SelectSubset<T, message_logDeleteArgs<ExtArgs>>): Prisma.Prisma__message_logClient<runtime.Types.Result.GetResult<Prisma.$message_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends message_logUpdateArgs>(args: Prisma.SelectSubset<T, message_logUpdateArgs<ExtArgs>>): Prisma.Prisma__message_logClient<runtime.Types.Result.GetResult<Prisma.$message_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends message_logDeleteManyArgs>(args?: Prisma.SelectSubset<T, message_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends message_logUpdateManyArgs>(args: Prisma.SelectSubset<T, message_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends message_logUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, message_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$message_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends message_logUpsertArgs>(args: Prisma.SelectSubset<T, message_logUpsertArgs<ExtArgs>>): Prisma.Prisma__message_logClient<runtime.Types.Result.GetResult<Prisma.$message_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends message_logCountArgs>(args?: Prisma.Subset<T, message_logCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Message_logCountAggregateOutputType> : number>;
    aggregate<T extends Message_logAggregateArgs>(args: Prisma.Subset<T, Message_logAggregateArgs>): Prisma.PrismaPromise<GetMessage_logAggregateType<T>>;
    groupBy<T extends message_logGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: message_logGroupByArgs['orderBy'];
    } : {
        orderBy?: message_logGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, message_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessage_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: message_logFieldRefs;
}
export interface Prisma__message_logClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    journey_run<T extends Prisma.message_log$journey_runArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.message_log$journey_runArgs<ExtArgs>>): Prisma.Prisma__journey_runClient<runtime.Types.Result.GetResult<Prisma.$journey_runPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    message_template<T extends Prisma.message_log$message_templateArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.message_log$message_templateArgs<ExtArgs>>): Prisma.Prisma__MessageTemplateClient<runtime.Types.Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface message_logFieldRefs {
    readonly id: Prisma.FieldRef<"message_log", 'String'>;
    readonly customer_id: Prisma.FieldRef<"message_log", 'String'>;
    readonly template_id: Prisma.FieldRef<"message_log", 'String'>;
    readonly channel: Prisma.FieldRef<"message_log", 'String'>;
    readonly status: Prisma.FieldRef<"message_log", 'String'>;
    readonly suppression_reason: Prisma.FieldRef<"message_log", 'String'>;
    readonly provider_message_id: Prisma.FieldRef<"message_log", 'String'>;
    readonly cost: Prisma.FieldRef<"message_log", 'Decimal'>;
    readonly cost_currency: Prisma.FieldRef<"message_log", 'String'>;
    readonly journey_run_id: Prisma.FieldRef<"message_log", 'String'>;
    readonly sent_at: Prisma.FieldRef<"message_log", 'DateTime'>;
    readonly delivered_at: Prisma.FieldRef<"message_log", 'DateTime'>;
    readonly opened_at: Prisma.FieldRef<"message_log", 'DateTime'>;
    readonly clicked_at: Prisma.FieldRef<"message_log", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"message_log", 'DateTime'>;
}
export type message_logFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.message_logSelect<ExtArgs> | null;
    omit?: Prisma.message_logOmit<ExtArgs> | null;
    include?: Prisma.message_logInclude<ExtArgs> | null;
    where: Prisma.message_logWhereUniqueInput;
};
export type message_logFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.message_logSelect<ExtArgs> | null;
    omit?: Prisma.message_logOmit<ExtArgs> | null;
    include?: Prisma.message_logInclude<ExtArgs> | null;
    where: Prisma.message_logWhereUniqueInput;
};
export type message_logFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.message_logSelect<ExtArgs> | null;
    omit?: Prisma.message_logOmit<ExtArgs> | null;
    include?: Prisma.message_logInclude<ExtArgs> | null;
    where?: Prisma.message_logWhereInput;
    orderBy?: Prisma.message_logOrderByWithRelationInput | Prisma.message_logOrderByWithRelationInput[];
    cursor?: Prisma.message_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Message_logScalarFieldEnum | Prisma.Message_logScalarFieldEnum[];
};
export type message_logFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.message_logSelect<ExtArgs> | null;
    omit?: Prisma.message_logOmit<ExtArgs> | null;
    include?: Prisma.message_logInclude<ExtArgs> | null;
    where?: Prisma.message_logWhereInput;
    orderBy?: Prisma.message_logOrderByWithRelationInput | Prisma.message_logOrderByWithRelationInput[];
    cursor?: Prisma.message_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Message_logScalarFieldEnum | Prisma.Message_logScalarFieldEnum[];
};
export type message_logFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.message_logSelect<ExtArgs> | null;
    omit?: Prisma.message_logOmit<ExtArgs> | null;
    include?: Prisma.message_logInclude<ExtArgs> | null;
    where?: Prisma.message_logWhereInput;
    orderBy?: Prisma.message_logOrderByWithRelationInput | Prisma.message_logOrderByWithRelationInput[];
    cursor?: Prisma.message_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Message_logScalarFieldEnum | Prisma.Message_logScalarFieldEnum[];
};
export type message_logCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.message_logSelect<ExtArgs> | null;
    omit?: Prisma.message_logOmit<ExtArgs> | null;
    include?: Prisma.message_logInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.message_logCreateInput, Prisma.message_logUncheckedCreateInput>;
};
export type message_logCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.message_logCreateManyInput | Prisma.message_logCreateManyInput[];
    skipDuplicates?: boolean;
};
export type message_logCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.message_logSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.message_logOmit<ExtArgs> | null;
    data: Prisma.message_logCreateManyInput | Prisma.message_logCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.message_logIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type message_logUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.message_logSelect<ExtArgs> | null;
    omit?: Prisma.message_logOmit<ExtArgs> | null;
    include?: Prisma.message_logInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.message_logUpdateInput, Prisma.message_logUncheckedUpdateInput>;
    where: Prisma.message_logWhereUniqueInput;
};
export type message_logUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.message_logUpdateManyMutationInput, Prisma.message_logUncheckedUpdateManyInput>;
    where?: Prisma.message_logWhereInput;
    limit?: number;
};
export type message_logUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.message_logSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.message_logOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.message_logUpdateManyMutationInput, Prisma.message_logUncheckedUpdateManyInput>;
    where?: Prisma.message_logWhereInput;
    limit?: number;
    include?: Prisma.message_logIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type message_logUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.message_logSelect<ExtArgs> | null;
    omit?: Prisma.message_logOmit<ExtArgs> | null;
    include?: Prisma.message_logInclude<ExtArgs> | null;
    where: Prisma.message_logWhereUniqueInput;
    create: Prisma.XOR<Prisma.message_logCreateInput, Prisma.message_logUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.message_logUpdateInput, Prisma.message_logUncheckedUpdateInput>;
};
export type message_logDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.message_logSelect<ExtArgs> | null;
    omit?: Prisma.message_logOmit<ExtArgs> | null;
    include?: Prisma.message_logInclude<ExtArgs> | null;
    where: Prisma.message_logWhereUniqueInput;
};
export type message_logDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.message_logWhereInput;
    limit?: number;
};
export type message_log$journey_runArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.journey_runSelect<ExtArgs> | null;
    omit?: Prisma.journey_runOmit<ExtArgs> | null;
    include?: Prisma.journey_runInclude<ExtArgs> | null;
    where?: Prisma.journey_runWhereInput;
};
export type message_log$message_templateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageTemplateSelect<ExtArgs> | null;
    omit?: Prisma.MessageTemplateOmit<ExtArgs> | null;
    include?: Prisma.MessageTemplateInclude<ExtArgs> | null;
    where?: Prisma.MessageTemplateWhereInput;
};
export type message_logDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.message_logSelect<ExtArgs> | null;
    omit?: Prisma.message_logOmit<ExtArgs> | null;
    include?: Prisma.message_logInclude<ExtArgs> | null;
};
