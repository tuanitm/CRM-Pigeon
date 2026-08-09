import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MessageTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$MessageTemplatePayload>;
export type AggregateMessageTemplate = {
    _count: MessageTemplateCountAggregateOutputType | null;
    _min: MessageTemplateMinAggregateOutputType | null;
    _max: MessageTemplateMaxAggregateOutputType | null;
};
export type MessageTemplateMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    channel: string | null;
    name: string | null;
    subject: string | null;
    body: string | null;
    providerTemplateId: string | null;
    approvalStatus: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MessageTemplateMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    channel: string | null;
    name: string | null;
    subject: string | null;
    body: string | null;
    providerTemplateId: string | null;
    approvalStatus: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MessageTemplateCountAggregateOutputType = {
    id: number;
    code: number;
    channel: number;
    name: number;
    subject: number;
    body: number;
    variables: number;
    providerTemplateId: number;
    approvalStatus: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MessageTemplateMinAggregateInputType = {
    id?: true;
    code?: true;
    channel?: true;
    name?: true;
    subject?: true;
    body?: true;
    providerTemplateId?: true;
    approvalStatus?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MessageTemplateMaxAggregateInputType = {
    id?: true;
    code?: true;
    channel?: true;
    name?: true;
    subject?: true;
    body?: true;
    providerTemplateId?: true;
    approvalStatus?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MessageTemplateCountAggregateInputType = {
    id?: true;
    code?: true;
    channel?: true;
    name?: true;
    subject?: true;
    body?: true;
    variables?: true;
    providerTemplateId?: true;
    approvalStatus?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MessageTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageTemplateWhereInput;
    orderBy?: Prisma.MessageTemplateOrderByWithRelationInput | Prisma.MessageTemplateOrderByWithRelationInput[];
    cursor?: Prisma.MessageTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MessageTemplateCountAggregateInputType;
    _min?: MessageTemplateMinAggregateInputType;
    _max?: MessageTemplateMaxAggregateInputType;
};
export type GetMessageTemplateAggregateType<T extends MessageTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateMessageTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMessageTemplate[P]> : Prisma.GetScalarType<T[P], AggregateMessageTemplate[P]>;
};
export type MessageTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageTemplateWhereInput;
    orderBy?: Prisma.MessageTemplateOrderByWithAggregationInput | Prisma.MessageTemplateOrderByWithAggregationInput[];
    by: Prisma.MessageTemplateScalarFieldEnum[] | Prisma.MessageTemplateScalarFieldEnum;
    having?: Prisma.MessageTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageTemplateCountAggregateInputType | true;
    _min?: MessageTemplateMinAggregateInputType;
    _max?: MessageTemplateMaxAggregateInputType;
};
export type MessageTemplateGroupByOutputType = {
    id: string;
    code: string;
    channel: string;
    name: string;
    subject: string | null;
    body: string;
    variables: runtime.JsonValue | null;
    providerTemplateId: string | null;
    approvalStatus: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: MessageTemplateCountAggregateOutputType | null;
    _min: MessageTemplateMinAggregateOutputType | null;
    _max: MessageTemplateMaxAggregateOutputType | null;
};
export type GetMessageTemplateGroupByPayload<T extends MessageTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MessageTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MessageTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MessageTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MessageTemplateGroupByOutputType[P]>;
}>>;
export type MessageTemplateWhereInput = {
    AND?: Prisma.MessageTemplateWhereInput | Prisma.MessageTemplateWhereInput[];
    OR?: Prisma.MessageTemplateWhereInput[];
    NOT?: Prisma.MessageTemplateWhereInput | Prisma.MessageTemplateWhereInput[];
    id?: Prisma.UuidFilter<"MessageTemplate"> | string;
    code?: Prisma.StringFilter<"MessageTemplate"> | string;
    channel?: Prisma.StringFilter<"MessageTemplate"> | string;
    name?: Prisma.StringFilter<"MessageTemplate"> | string;
    subject?: Prisma.StringNullableFilter<"MessageTemplate"> | string | null;
    body?: Prisma.StringFilter<"MessageTemplate"> | string;
    variables?: Prisma.JsonNullableFilter<"MessageTemplate">;
    providerTemplateId?: Prisma.StringNullableFilter<"MessageTemplate"> | string | null;
    approvalStatus?: Prisma.StringFilter<"MessageTemplate"> | string;
    isActive?: Prisma.BoolFilter<"MessageTemplate"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MessageTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MessageTemplate"> | Date | string;
    message_log?: Prisma.Message_logListRelationFilter;
};
export type MessageTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    subject?: Prisma.SortOrderInput | Prisma.SortOrder;
    body?: Prisma.SortOrder;
    variables?: Prisma.SortOrderInput | Prisma.SortOrder;
    providerTemplateId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvalStatus?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    message_log?: Prisma.message_logOrderByRelationAggregateInput;
};
export type MessageTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.MessageTemplateWhereInput | Prisma.MessageTemplateWhereInput[];
    OR?: Prisma.MessageTemplateWhereInput[];
    NOT?: Prisma.MessageTemplateWhereInput | Prisma.MessageTemplateWhereInput[];
    channel?: Prisma.StringFilter<"MessageTemplate"> | string;
    name?: Prisma.StringFilter<"MessageTemplate"> | string;
    subject?: Prisma.StringNullableFilter<"MessageTemplate"> | string | null;
    body?: Prisma.StringFilter<"MessageTemplate"> | string;
    variables?: Prisma.JsonNullableFilter<"MessageTemplate">;
    providerTemplateId?: Prisma.StringNullableFilter<"MessageTemplate"> | string | null;
    approvalStatus?: Prisma.StringFilter<"MessageTemplate"> | string;
    isActive?: Prisma.BoolFilter<"MessageTemplate"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MessageTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"MessageTemplate"> | Date | string;
    message_log?: Prisma.Message_logListRelationFilter;
}, "id" | "code">;
export type MessageTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    subject?: Prisma.SortOrderInput | Prisma.SortOrder;
    body?: Prisma.SortOrder;
    variables?: Prisma.SortOrderInput | Prisma.SortOrder;
    providerTemplateId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvalStatus?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MessageTemplateCountOrderByAggregateInput;
    _max?: Prisma.MessageTemplateMaxOrderByAggregateInput;
    _min?: Prisma.MessageTemplateMinOrderByAggregateInput;
};
export type MessageTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.MessageTemplateScalarWhereWithAggregatesInput | Prisma.MessageTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.MessageTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MessageTemplateScalarWhereWithAggregatesInput | Prisma.MessageTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MessageTemplate"> | string;
    code?: Prisma.StringWithAggregatesFilter<"MessageTemplate"> | string;
    channel?: Prisma.StringWithAggregatesFilter<"MessageTemplate"> | string;
    name?: Prisma.StringWithAggregatesFilter<"MessageTemplate"> | string;
    subject?: Prisma.StringNullableWithAggregatesFilter<"MessageTemplate"> | string | null;
    body?: Prisma.StringWithAggregatesFilter<"MessageTemplate"> | string;
    variables?: Prisma.JsonNullableWithAggregatesFilter<"MessageTemplate">;
    providerTemplateId?: Prisma.StringNullableWithAggregatesFilter<"MessageTemplate"> | string | null;
    approvalStatus?: Prisma.StringWithAggregatesFilter<"MessageTemplate"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"MessageTemplate"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MessageTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MessageTemplate"> | Date | string;
};
export type MessageTemplateCreateInput = {
    id?: string;
    code: string;
    channel: string;
    name: string;
    subject?: string | null;
    body: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    providerTemplateId?: string | null;
    approvalStatus?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    message_log?: Prisma.message_logCreateNestedManyWithoutMessage_templateInput;
};
export type MessageTemplateUncheckedCreateInput = {
    id?: string;
    code: string;
    channel: string;
    name: string;
    subject?: string | null;
    body: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    providerTemplateId?: string | null;
    approvalStatus?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    message_log?: Prisma.message_logUncheckedCreateNestedManyWithoutMessage_templateInput;
};
export type MessageTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    providerTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    message_log?: Prisma.message_logUpdateManyWithoutMessage_templateNestedInput;
};
export type MessageTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    providerTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    message_log?: Prisma.message_logUncheckedUpdateManyWithoutMessage_templateNestedInput;
};
export type MessageTemplateCreateManyInput = {
    id?: string;
    code: string;
    channel: string;
    name: string;
    subject?: string | null;
    body: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    providerTemplateId?: string | null;
    approvalStatus?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MessageTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    providerTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    providerTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    variables?: Prisma.SortOrder;
    providerTemplateId?: Prisma.SortOrder;
    approvalStatus?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MessageTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    providerTemplateId?: Prisma.SortOrder;
    approvalStatus?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MessageTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    providerTemplateId?: Prisma.SortOrder;
    approvalStatus?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MessageTemplateNullableScalarRelationFilter = {
    is?: Prisma.MessageTemplateWhereInput | null;
    isNot?: Prisma.MessageTemplateWhereInput | null;
};
export type MessageTemplateCreateNestedOneWithoutMessage_logInput = {
    create?: Prisma.XOR<Prisma.MessageTemplateCreateWithoutMessage_logInput, Prisma.MessageTemplateUncheckedCreateWithoutMessage_logInput>;
    connectOrCreate?: Prisma.MessageTemplateCreateOrConnectWithoutMessage_logInput;
    connect?: Prisma.MessageTemplateWhereUniqueInput;
};
export type MessageTemplateUpdateOneWithoutMessage_logNestedInput = {
    create?: Prisma.XOR<Prisma.MessageTemplateCreateWithoutMessage_logInput, Prisma.MessageTemplateUncheckedCreateWithoutMessage_logInput>;
    connectOrCreate?: Prisma.MessageTemplateCreateOrConnectWithoutMessage_logInput;
    upsert?: Prisma.MessageTemplateUpsertWithoutMessage_logInput;
    disconnect?: Prisma.MessageTemplateWhereInput | boolean;
    delete?: Prisma.MessageTemplateWhereInput | boolean;
    connect?: Prisma.MessageTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MessageTemplateUpdateToOneWithWhereWithoutMessage_logInput, Prisma.MessageTemplateUpdateWithoutMessage_logInput>, Prisma.MessageTemplateUncheckedUpdateWithoutMessage_logInput>;
};
export type MessageTemplateCreateWithoutMessage_logInput = {
    id?: string;
    code: string;
    channel: string;
    name: string;
    subject?: string | null;
    body: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    providerTemplateId?: string | null;
    approvalStatus?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MessageTemplateUncheckedCreateWithoutMessage_logInput = {
    id?: string;
    code: string;
    channel: string;
    name: string;
    subject?: string | null;
    body: string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    providerTemplateId?: string | null;
    approvalStatus?: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MessageTemplateCreateOrConnectWithoutMessage_logInput = {
    where: Prisma.MessageTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageTemplateCreateWithoutMessage_logInput, Prisma.MessageTemplateUncheckedCreateWithoutMessage_logInput>;
};
export type MessageTemplateUpsertWithoutMessage_logInput = {
    update: Prisma.XOR<Prisma.MessageTemplateUpdateWithoutMessage_logInput, Prisma.MessageTemplateUncheckedUpdateWithoutMessage_logInput>;
    create: Prisma.XOR<Prisma.MessageTemplateCreateWithoutMessage_logInput, Prisma.MessageTemplateUncheckedCreateWithoutMessage_logInput>;
    where?: Prisma.MessageTemplateWhereInput;
};
export type MessageTemplateUpdateToOneWithWhereWithoutMessage_logInput = {
    where?: Prisma.MessageTemplateWhereInput;
    data: Prisma.XOR<Prisma.MessageTemplateUpdateWithoutMessage_logInput, Prisma.MessageTemplateUncheckedUpdateWithoutMessage_logInput>;
};
export type MessageTemplateUpdateWithoutMessage_logInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    providerTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageTemplateUncheckedUpdateWithoutMessage_logInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    variables?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    providerTemplateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MessageTemplateCountOutputType = {
    message_log: number;
};
export type MessageTemplateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message_log?: boolean | MessageTemplateCountOutputTypeCountMessage_logArgs;
};
export type MessageTemplateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageTemplateCountOutputTypeSelect<ExtArgs> | null;
};
export type MessageTemplateCountOutputTypeCountMessage_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.message_logWhereInput;
};
export type MessageTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    channel?: boolean;
    name?: boolean;
    subject?: boolean;
    body?: boolean;
    variables?: boolean;
    providerTemplateId?: boolean;
    approvalStatus?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    message_log?: boolean | Prisma.MessageTemplate$message_logArgs<ExtArgs>;
    _count?: boolean | Prisma.MessageTemplateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messageTemplate"]>;
export type MessageTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    channel?: boolean;
    name?: boolean;
    subject?: boolean;
    body?: boolean;
    variables?: boolean;
    providerTemplateId?: boolean;
    approvalStatus?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["messageTemplate"]>;
export type MessageTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    channel?: boolean;
    name?: boolean;
    subject?: boolean;
    body?: boolean;
    variables?: boolean;
    providerTemplateId?: boolean;
    approvalStatus?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["messageTemplate"]>;
export type MessageTemplateSelectScalar = {
    id?: boolean;
    code?: boolean;
    channel?: boolean;
    name?: boolean;
    subject?: boolean;
    body?: boolean;
    variables?: boolean;
    providerTemplateId?: boolean;
    approvalStatus?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MessageTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "channel" | "name" | "subject" | "body" | "variables" | "providerTemplateId" | "approvalStatus" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["messageTemplate"]>;
export type MessageTemplateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    message_log?: boolean | Prisma.MessageTemplate$message_logArgs<ExtArgs>;
    _count?: boolean | Prisma.MessageTemplateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MessageTemplateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MessageTemplateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MessageTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MessageTemplate";
    objects: {
        message_log: Prisma.$message_logPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        channel: string;
        name: string;
        subject: string | null;
        body: string;
        variables: runtime.JsonValue | null;
        providerTemplateId: string | null;
        approvalStatus: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["messageTemplate"]>;
    composites: {};
};
export type MessageTemplateGetPayload<S extends boolean | null | undefined | MessageTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessageTemplatePayload, S>;
export type MessageTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MessageTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessageTemplateCountAggregateInputType | true;
};
export interface MessageTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MessageTemplate'];
        meta: {
            name: 'MessageTemplate';
        };
    };
    findUnique<T extends MessageTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, MessageTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MessageTemplateClient<runtime.Types.Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MessageTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MessageTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageTemplateClient<runtime.Types.Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MessageTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, MessageTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__MessageTemplateClient<runtime.Types.Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MessageTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MessageTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageTemplateClient<runtime.Types.Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MessageTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, MessageTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MessageTemplateCreateArgs>(args: Prisma.SelectSubset<T, MessageTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__MessageTemplateClient<runtime.Types.Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MessageTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, MessageTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MessageTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MessageTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MessageTemplateDeleteArgs>(args: Prisma.SelectSubset<T, MessageTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__MessageTemplateClient<runtime.Types.Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MessageTemplateUpdateArgs>(args: Prisma.SelectSubset<T, MessageTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__MessageTemplateClient<runtime.Types.Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MessageTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, MessageTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MessageTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, MessageTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MessageTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MessageTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MessageTemplateUpsertArgs>(args: Prisma.SelectSubset<T, MessageTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__MessageTemplateClient<runtime.Types.Result.GetResult<Prisma.$MessageTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MessageTemplateCountArgs>(args?: Prisma.Subset<T, MessageTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MessageTemplateCountAggregateOutputType> : number>;
    aggregate<T extends MessageTemplateAggregateArgs>(args: Prisma.Subset<T, MessageTemplateAggregateArgs>): Prisma.PrismaPromise<GetMessageTemplateAggregateType<T>>;
    groupBy<T extends MessageTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MessageTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: MessageTemplateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MessageTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MessageTemplateFieldRefs;
}
export interface Prisma__MessageTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    message_log<T extends Prisma.MessageTemplate$message_logArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MessageTemplate$message_logArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$message_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MessageTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"MessageTemplate", 'String'>;
    readonly code: Prisma.FieldRef<"MessageTemplate", 'String'>;
    readonly channel: Prisma.FieldRef<"MessageTemplate", 'String'>;
    readonly name: Prisma.FieldRef<"MessageTemplate", 'String'>;
    readonly subject: Prisma.FieldRef<"MessageTemplate", 'String'>;
    readonly body: Prisma.FieldRef<"MessageTemplate", 'String'>;
    readonly variables: Prisma.FieldRef<"MessageTemplate", 'Json'>;
    readonly providerTemplateId: Prisma.FieldRef<"MessageTemplate", 'String'>;
    readonly approvalStatus: Prisma.FieldRef<"MessageTemplate", 'String'>;
    readonly isActive: Prisma.FieldRef<"MessageTemplate", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"MessageTemplate", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"MessageTemplate", 'DateTime'>;
}
export type MessageTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageTemplateSelect<ExtArgs> | null;
    omit?: Prisma.MessageTemplateOmit<ExtArgs> | null;
    include?: Prisma.MessageTemplateInclude<ExtArgs> | null;
    where: Prisma.MessageTemplateWhereUniqueInput;
};
export type MessageTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageTemplateSelect<ExtArgs> | null;
    omit?: Prisma.MessageTemplateOmit<ExtArgs> | null;
    include?: Prisma.MessageTemplateInclude<ExtArgs> | null;
    where: Prisma.MessageTemplateWhereUniqueInput;
};
export type MessageTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageTemplateSelect<ExtArgs> | null;
    omit?: Prisma.MessageTemplateOmit<ExtArgs> | null;
    include?: Prisma.MessageTemplateInclude<ExtArgs> | null;
    where?: Prisma.MessageTemplateWhereInput;
    orderBy?: Prisma.MessageTemplateOrderByWithRelationInput | Prisma.MessageTemplateOrderByWithRelationInput[];
    cursor?: Prisma.MessageTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageTemplateScalarFieldEnum | Prisma.MessageTemplateScalarFieldEnum[];
};
export type MessageTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageTemplateSelect<ExtArgs> | null;
    omit?: Prisma.MessageTemplateOmit<ExtArgs> | null;
    include?: Prisma.MessageTemplateInclude<ExtArgs> | null;
    where?: Prisma.MessageTemplateWhereInput;
    orderBy?: Prisma.MessageTemplateOrderByWithRelationInput | Prisma.MessageTemplateOrderByWithRelationInput[];
    cursor?: Prisma.MessageTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageTemplateScalarFieldEnum | Prisma.MessageTemplateScalarFieldEnum[];
};
export type MessageTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageTemplateSelect<ExtArgs> | null;
    omit?: Prisma.MessageTemplateOmit<ExtArgs> | null;
    include?: Prisma.MessageTemplateInclude<ExtArgs> | null;
    where?: Prisma.MessageTemplateWhereInput;
    orderBy?: Prisma.MessageTemplateOrderByWithRelationInput | Prisma.MessageTemplateOrderByWithRelationInput[];
    cursor?: Prisma.MessageTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageTemplateScalarFieldEnum | Prisma.MessageTemplateScalarFieldEnum[];
};
export type MessageTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageTemplateSelect<ExtArgs> | null;
    omit?: Prisma.MessageTemplateOmit<ExtArgs> | null;
    include?: Prisma.MessageTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageTemplateCreateInput, Prisma.MessageTemplateUncheckedCreateInput>;
};
export type MessageTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MessageTemplateCreateManyInput | Prisma.MessageTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MessageTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MessageTemplateOmit<ExtArgs> | null;
    data: Prisma.MessageTemplateCreateManyInput | Prisma.MessageTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MessageTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageTemplateSelect<ExtArgs> | null;
    omit?: Prisma.MessageTemplateOmit<ExtArgs> | null;
    include?: Prisma.MessageTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageTemplateUpdateInput, Prisma.MessageTemplateUncheckedUpdateInput>;
    where: Prisma.MessageTemplateWhereUniqueInput;
};
export type MessageTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MessageTemplateUpdateManyMutationInput, Prisma.MessageTemplateUncheckedUpdateManyInput>;
    where?: Prisma.MessageTemplateWhereInput;
    limit?: number;
};
export type MessageTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MessageTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageTemplateUpdateManyMutationInput, Prisma.MessageTemplateUncheckedUpdateManyInput>;
    where?: Prisma.MessageTemplateWhereInput;
    limit?: number;
};
export type MessageTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageTemplateSelect<ExtArgs> | null;
    omit?: Prisma.MessageTemplateOmit<ExtArgs> | null;
    include?: Prisma.MessageTemplateInclude<ExtArgs> | null;
    where: Prisma.MessageTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageTemplateCreateInput, Prisma.MessageTemplateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MessageTemplateUpdateInput, Prisma.MessageTemplateUncheckedUpdateInput>;
};
export type MessageTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageTemplateSelect<ExtArgs> | null;
    omit?: Prisma.MessageTemplateOmit<ExtArgs> | null;
    include?: Prisma.MessageTemplateInclude<ExtArgs> | null;
    where: Prisma.MessageTemplateWhereUniqueInput;
};
export type MessageTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageTemplateWhereInput;
    limit?: number;
};
export type MessageTemplate$message_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MessageTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageTemplateSelect<ExtArgs> | null;
    omit?: Prisma.MessageTemplateOmit<ExtArgs> | null;
    include?: Prisma.MessageTemplateInclude<ExtArgs> | null;
};
