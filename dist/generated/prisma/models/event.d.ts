import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type eventModel = runtime.Types.Result.DefaultSelection<Prisma.$eventPayload>;
export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
};
export type EventMinAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    anonymous_id: string | null;
    event_type: string | null;
    idempotency_key: string | null;
    source: string | null;
    occurred_at: Date | null;
    received_at: Date | null;
};
export type EventMaxAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    anonymous_id: string | null;
    event_type: string | null;
    idempotency_key: string | null;
    source: string | null;
    occurred_at: Date | null;
    received_at: Date | null;
};
export type EventCountAggregateOutputType = {
    id: number;
    customer_id: number;
    anonymous_id: number;
    event_type: number;
    properties: number;
    context: number;
    idempotency_key: number;
    source: number;
    occurred_at: number;
    received_at: number;
    _all: number;
};
export type EventMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    anonymous_id?: true;
    event_type?: true;
    idempotency_key?: true;
    source?: true;
    occurred_at?: true;
    received_at?: true;
};
export type EventMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    anonymous_id?: true;
    event_type?: true;
    idempotency_key?: true;
    source?: true;
    occurred_at?: true;
    received_at?: true;
};
export type EventCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    anonymous_id?: true;
    event_type?: true;
    properties?: true;
    context?: true;
    idempotency_key?: true;
    source?: true;
    occurred_at?: true;
    received_at?: true;
    _all?: true;
};
export type EventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.eventWhereInput;
    orderBy?: Prisma.eventOrderByWithRelationInput | Prisma.eventOrderByWithRelationInput[];
    cursor?: Prisma.eventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EventCountAggregateInputType;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
};
export type GetEventAggregateType<T extends EventAggregateArgs> = {
    [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvent[P]> : Prisma.GetScalarType<T[P], AggregateEvent[P]>;
};
export type eventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.eventWhereInput;
    orderBy?: Prisma.eventOrderByWithAggregationInput | Prisma.eventOrderByWithAggregationInput[];
    by: Prisma.EventScalarFieldEnum[] | Prisma.EventScalarFieldEnum;
    having?: Prisma.eventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventCountAggregateInputType | true;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
};
export type EventGroupByOutputType = {
    id: string;
    customer_id: string | null;
    anonymous_id: string | null;
    event_type: string;
    properties: runtime.JsonValue;
    context: runtime.JsonValue | null;
    idempotency_key: string | null;
    source: string | null;
    occurred_at: Date;
    received_at: Date;
    _count: EventCountAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
};
export type GetEventGroupByPayload<T extends eventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventGroupByOutputType[P]>;
}>>;
export type eventWhereInput = {
    AND?: Prisma.eventWhereInput | Prisma.eventWhereInput[];
    OR?: Prisma.eventWhereInput[];
    NOT?: Prisma.eventWhereInput | Prisma.eventWhereInput[];
    id?: Prisma.UuidFilter<"event"> | string;
    customer_id?: Prisma.UuidNullableFilter<"event"> | string | null;
    anonymous_id?: Prisma.StringNullableFilter<"event"> | string | null;
    event_type?: Prisma.StringFilter<"event"> | string;
    properties?: Prisma.JsonFilter<"event">;
    context?: Prisma.JsonNullableFilter<"event">;
    idempotency_key?: Prisma.StringNullableFilter<"event"> | string | null;
    source?: Prisma.StringNullableFilter<"event"> | string | null;
    occurred_at?: Prisma.DateTimeFilter<"event"> | Date | string;
    received_at?: Prisma.DateTimeFilter<"event"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
};
export type eventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    properties?: Prisma.SortOrder;
    context?: Prisma.SortOrderInput | Prisma.SortOrder;
    idempotency_key?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    occurred_at?: Prisma.SortOrder;
    received_at?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type eventWhereUniqueInput = Prisma.AtLeast<{
    id_occurred_at?: Prisma.eventIdOccurred_atCompoundUniqueInput;
    AND?: Prisma.eventWhereInput | Prisma.eventWhereInput[];
    OR?: Prisma.eventWhereInput[];
    NOT?: Prisma.eventWhereInput | Prisma.eventWhereInput[];
    id?: Prisma.UuidFilter<"event"> | string;
    customer_id?: Prisma.UuidNullableFilter<"event"> | string | null;
    anonymous_id?: Prisma.StringNullableFilter<"event"> | string | null;
    event_type?: Prisma.StringFilter<"event"> | string;
    properties?: Prisma.JsonFilter<"event">;
    context?: Prisma.JsonNullableFilter<"event">;
    idempotency_key?: Prisma.StringNullableFilter<"event"> | string | null;
    source?: Prisma.StringNullableFilter<"event"> | string | null;
    occurred_at?: Prisma.DateTimeFilter<"event"> | Date | string;
    received_at?: Prisma.DateTimeFilter<"event"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
}, "id_occurred_at">;
export type eventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    properties?: Prisma.SortOrder;
    context?: Prisma.SortOrderInput | Prisma.SortOrder;
    idempotency_key?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrderInput | Prisma.SortOrder;
    occurred_at?: Prisma.SortOrder;
    received_at?: Prisma.SortOrder;
    _count?: Prisma.eventCountOrderByAggregateInput;
    _max?: Prisma.eventMaxOrderByAggregateInput;
    _min?: Prisma.eventMinOrderByAggregateInput;
};
export type eventScalarWhereWithAggregatesInput = {
    AND?: Prisma.eventScalarWhereWithAggregatesInput | Prisma.eventScalarWhereWithAggregatesInput[];
    OR?: Prisma.eventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.eventScalarWhereWithAggregatesInput | Prisma.eventScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"event"> | string;
    customer_id?: Prisma.UuidNullableWithAggregatesFilter<"event"> | string | null;
    anonymous_id?: Prisma.StringNullableWithAggregatesFilter<"event"> | string | null;
    event_type?: Prisma.StringWithAggregatesFilter<"event"> | string;
    properties?: Prisma.JsonWithAggregatesFilter<"event">;
    context?: Prisma.JsonNullableWithAggregatesFilter<"event">;
    idempotency_key?: Prisma.StringNullableWithAggregatesFilter<"event"> | string | null;
    source?: Prisma.StringNullableWithAggregatesFilter<"event"> | string | null;
    occurred_at?: Prisma.DateTimeWithAggregatesFilter<"event"> | Date | string;
    received_at?: Prisma.DateTimeWithAggregatesFilter<"event"> | Date | string;
};
export type eventCreateInput = {
    id?: string;
    anonymous_id?: string | null;
    event_type: string;
    properties?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    idempotency_key?: string | null;
    source?: string | null;
    occurred_at?: Date | string;
    received_at?: Date | string;
    customer?: Prisma.CustomerCreateNestedOneWithoutEventInput;
};
export type eventUncheckedCreateInput = {
    id?: string;
    customer_id?: string | null;
    anonymous_id?: string | null;
    event_type: string;
    properties?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    idempotency_key?: string | null;
    source?: string | null;
    occurred_at?: Date | string;
    received_at?: Date | string;
};
export type eventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_type?: Prisma.StringFieldUpdateOperationsInput | string;
    properties?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    idempotency_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurred_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    received_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneWithoutEventNestedInput;
};
export type eventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_type?: Prisma.StringFieldUpdateOperationsInput | string;
    properties?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    idempotency_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurred_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    received_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type eventCreateManyInput = {
    id?: string;
    customer_id?: string | null;
    anonymous_id?: string | null;
    event_type: string;
    properties?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    idempotency_key?: string | null;
    source?: string | null;
    occurred_at?: Date | string;
    received_at?: Date | string;
};
export type eventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_type?: Prisma.StringFieldUpdateOperationsInput | string;
    properties?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    idempotency_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurred_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    received_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type eventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_type?: Prisma.StringFieldUpdateOperationsInput | string;
    properties?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    idempotency_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurred_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    received_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventListRelationFilter = {
    every?: Prisma.eventWhereInput;
    some?: Prisma.eventWhereInput;
    none?: Prisma.eventWhereInput;
};
export type eventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type eventIdOccurred_atCompoundUniqueInput = {
    id: string;
    occurred_at: Date | string;
};
export type eventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    properties?: Prisma.SortOrder;
    context?: Prisma.SortOrder;
    idempotency_key?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    occurred_at?: Prisma.SortOrder;
    received_at?: Prisma.SortOrder;
};
export type eventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    idempotency_key?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    occurred_at?: Prisma.SortOrder;
    received_at?: Prisma.SortOrder;
};
export type eventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    idempotency_key?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    occurred_at?: Prisma.SortOrder;
    received_at?: Prisma.SortOrder;
};
export type eventCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.eventCreateWithoutCustomerInput, Prisma.eventUncheckedCreateWithoutCustomerInput> | Prisma.eventCreateWithoutCustomerInput[] | Prisma.eventUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.eventCreateOrConnectWithoutCustomerInput | Prisma.eventCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.eventCreateManyCustomerInputEnvelope;
    connect?: Prisma.eventWhereUniqueInput | Prisma.eventWhereUniqueInput[];
};
export type eventUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.eventCreateWithoutCustomerInput, Prisma.eventUncheckedCreateWithoutCustomerInput> | Prisma.eventCreateWithoutCustomerInput[] | Prisma.eventUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.eventCreateOrConnectWithoutCustomerInput | Prisma.eventCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.eventCreateManyCustomerInputEnvelope;
    connect?: Prisma.eventWhereUniqueInput | Prisma.eventWhereUniqueInput[];
};
export type eventUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.eventCreateWithoutCustomerInput, Prisma.eventUncheckedCreateWithoutCustomerInput> | Prisma.eventCreateWithoutCustomerInput[] | Prisma.eventUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.eventCreateOrConnectWithoutCustomerInput | Prisma.eventCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.eventUpsertWithWhereUniqueWithoutCustomerInput | Prisma.eventUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.eventCreateManyCustomerInputEnvelope;
    set?: Prisma.eventWhereUniqueInput | Prisma.eventWhereUniqueInput[];
    disconnect?: Prisma.eventWhereUniqueInput | Prisma.eventWhereUniqueInput[];
    delete?: Prisma.eventWhereUniqueInput | Prisma.eventWhereUniqueInput[];
    connect?: Prisma.eventWhereUniqueInput | Prisma.eventWhereUniqueInput[];
    update?: Prisma.eventUpdateWithWhereUniqueWithoutCustomerInput | Prisma.eventUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.eventUpdateManyWithWhereWithoutCustomerInput | Prisma.eventUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.eventScalarWhereInput | Prisma.eventScalarWhereInput[];
};
export type eventUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.eventCreateWithoutCustomerInput, Prisma.eventUncheckedCreateWithoutCustomerInput> | Prisma.eventCreateWithoutCustomerInput[] | Prisma.eventUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.eventCreateOrConnectWithoutCustomerInput | Prisma.eventCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.eventUpsertWithWhereUniqueWithoutCustomerInput | Prisma.eventUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.eventCreateManyCustomerInputEnvelope;
    set?: Prisma.eventWhereUniqueInput | Prisma.eventWhereUniqueInput[];
    disconnect?: Prisma.eventWhereUniqueInput | Prisma.eventWhereUniqueInput[];
    delete?: Prisma.eventWhereUniqueInput | Prisma.eventWhereUniqueInput[];
    connect?: Prisma.eventWhereUniqueInput | Prisma.eventWhereUniqueInput[];
    update?: Prisma.eventUpdateWithWhereUniqueWithoutCustomerInput | Prisma.eventUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.eventUpdateManyWithWhereWithoutCustomerInput | Prisma.eventUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.eventScalarWhereInput | Prisma.eventScalarWhereInput[];
};
export type eventCreateWithoutCustomerInput = {
    id?: string;
    anonymous_id?: string | null;
    event_type: string;
    properties?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    idempotency_key?: string | null;
    source?: string | null;
    occurred_at?: Date | string;
    received_at?: Date | string;
};
export type eventUncheckedCreateWithoutCustomerInput = {
    id?: string;
    anonymous_id?: string | null;
    event_type: string;
    properties?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    idempotency_key?: string | null;
    source?: string | null;
    occurred_at?: Date | string;
    received_at?: Date | string;
};
export type eventCreateOrConnectWithoutCustomerInput = {
    where: Prisma.eventWhereUniqueInput;
    create: Prisma.XOR<Prisma.eventCreateWithoutCustomerInput, Prisma.eventUncheckedCreateWithoutCustomerInput>;
};
export type eventCreateManyCustomerInputEnvelope = {
    data: Prisma.eventCreateManyCustomerInput | Prisma.eventCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type eventUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.eventWhereUniqueInput;
    update: Prisma.XOR<Prisma.eventUpdateWithoutCustomerInput, Prisma.eventUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.eventCreateWithoutCustomerInput, Prisma.eventUncheckedCreateWithoutCustomerInput>;
};
export type eventUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.eventWhereUniqueInput;
    data: Prisma.XOR<Prisma.eventUpdateWithoutCustomerInput, Prisma.eventUncheckedUpdateWithoutCustomerInput>;
};
export type eventUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.eventScalarWhereInput;
    data: Prisma.XOR<Prisma.eventUpdateManyMutationInput, Prisma.eventUncheckedUpdateManyWithoutCustomerInput>;
};
export type eventScalarWhereInput = {
    AND?: Prisma.eventScalarWhereInput | Prisma.eventScalarWhereInput[];
    OR?: Prisma.eventScalarWhereInput[];
    NOT?: Prisma.eventScalarWhereInput | Prisma.eventScalarWhereInput[];
    id?: Prisma.UuidFilter<"event"> | string;
    customer_id?: Prisma.UuidNullableFilter<"event"> | string | null;
    anonymous_id?: Prisma.StringNullableFilter<"event"> | string | null;
    event_type?: Prisma.StringFilter<"event"> | string;
    properties?: Prisma.JsonFilter<"event">;
    context?: Prisma.JsonNullableFilter<"event">;
    idempotency_key?: Prisma.StringNullableFilter<"event"> | string | null;
    source?: Prisma.StringNullableFilter<"event"> | string | null;
    occurred_at?: Prisma.DateTimeFilter<"event"> | Date | string;
    received_at?: Prisma.DateTimeFilter<"event"> | Date | string;
};
export type eventCreateManyCustomerInput = {
    id?: string;
    anonymous_id?: string | null;
    event_type: string;
    properties?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    idempotency_key?: string | null;
    source?: string | null;
    occurred_at?: Date | string;
    received_at?: Date | string;
};
export type eventUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_type?: Prisma.StringFieldUpdateOperationsInput | string;
    properties?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    idempotency_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurred_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    received_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type eventUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_type?: Prisma.StringFieldUpdateOperationsInput | string;
    properties?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    idempotency_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurred_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    received_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type eventUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_type?: Prisma.StringFieldUpdateOperationsInput | string;
    properties?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    context?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    idempotency_key?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occurred_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    received_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type eventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    anonymous_id?: boolean;
    event_type?: boolean;
    properties?: boolean;
    context?: boolean;
    idempotency_key?: boolean;
    source?: boolean;
    occurred_at?: boolean;
    received_at?: boolean;
    customer?: boolean | Prisma.event$customerArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type eventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    anonymous_id?: boolean;
    event_type?: boolean;
    properties?: boolean;
    context?: boolean;
    idempotency_key?: boolean;
    source?: boolean;
    occurred_at?: boolean;
    received_at?: boolean;
    customer?: boolean | Prisma.event$customerArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type eventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    anonymous_id?: boolean;
    event_type?: boolean;
    properties?: boolean;
    context?: boolean;
    idempotency_key?: boolean;
    source?: boolean;
    occurred_at?: boolean;
    received_at?: boolean;
    customer?: boolean | Prisma.event$customerArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type eventSelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    anonymous_id?: boolean;
    event_type?: boolean;
    properties?: boolean;
    context?: boolean;
    idempotency_key?: boolean;
    source?: boolean;
    occurred_at?: boolean;
    received_at?: boolean;
};
export type eventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "anonymous_id" | "event_type" | "properties" | "context" | "idempotency_key" | "source" | "occurred_at" | "received_at", ExtArgs["result"]["event"]>;
export type eventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.event$customerArgs<ExtArgs>;
};
export type eventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.event$customerArgs<ExtArgs>;
};
export type eventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.event$customerArgs<ExtArgs>;
};
export type $eventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "event";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customer_id: string | null;
        anonymous_id: string | null;
        event_type: string;
        properties: runtime.JsonValue;
        context: runtime.JsonValue | null;
        idempotency_key: string | null;
        source: string | null;
        occurred_at: Date;
        received_at: Date;
    }, ExtArgs["result"]["event"]>;
    composites: {};
};
export type eventGetPayload<S extends boolean | null | undefined | eventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$eventPayload, S>;
export type eventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<eventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventCountAggregateInputType | true;
};
export interface eventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['event'];
        meta: {
            name: 'event';
        };
    };
    findUnique<T extends eventFindUniqueArgs>(args: Prisma.SelectSubset<T, eventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__eventClient<runtime.Types.Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends eventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, eventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__eventClient<runtime.Types.Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends eventFindFirstArgs>(args?: Prisma.SelectSubset<T, eventFindFirstArgs<ExtArgs>>): Prisma.Prisma__eventClient<runtime.Types.Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends eventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, eventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__eventClient<runtime.Types.Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends eventFindManyArgs>(args?: Prisma.SelectSubset<T, eventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends eventCreateArgs>(args: Prisma.SelectSubset<T, eventCreateArgs<ExtArgs>>): Prisma.Prisma__eventClient<runtime.Types.Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends eventCreateManyArgs>(args?: Prisma.SelectSubset<T, eventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends eventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, eventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends eventDeleteArgs>(args: Prisma.SelectSubset<T, eventDeleteArgs<ExtArgs>>): Prisma.Prisma__eventClient<runtime.Types.Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends eventUpdateArgs>(args: Prisma.SelectSubset<T, eventUpdateArgs<ExtArgs>>): Prisma.Prisma__eventClient<runtime.Types.Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends eventDeleteManyArgs>(args?: Prisma.SelectSubset<T, eventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends eventUpdateManyArgs>(args: Prisma.SelectSubset<T, eventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends eventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, eventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends eventUpsertArgs>(args: Prisma.SelectSubset<T, eventUpsertArgs<ExtArgs>>): Prisma.Prisma__eventClient<runtime.Types.Result.GetResult<Prisma.$eventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends eventCountArgs>(args?: Prisma.Subset<T, eventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventCountAggregateOutputType> : number>;
    aggregate<T extends EventAggregateArgs>(args: Prisma.Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>;
    groupBy<T extends eventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: eventGroupByArgs['orderBy'];
    } : {
        orderBy?: eventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, eventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: eventFieldRefs;
}
export interface Prisma__eventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.event$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.event$customerArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface eventFieldRefs {
    readonly id: Prisma.FieldRef<"event", 'String'>;
    readonly customer_id: Prisma.FieldRef<"event", 'String'>;
    readonly anonymous_id: Prisma.FieldRef<"event", 'String'>;
    readonly event_type: Prisma.FieldRef<"event", 'String'>;
    readonly properties: Prisma.FieldRef<"event", 'Json'>;
    readonly context: Prisma.FieldRef<"event", 'Json'>;
    readonly idempotency_key: Prisma.FieldRef<"event", 'String'>;
    readonly source: Prisma.FieldRef<"event", 'String'>;
    readonly occurred_at: Prisma.FieldRef<"event", 'DateTime'>;
    readonly received_at: Prisma.FieldRef<"event", 'DateTime'>;
}
export type eventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventSelect<ExtArgs> | null;
    omit?: Prisma.eventOmit<ExtArgs> | null;
    include?: Prisma.eventInclude<ExtArgs> | null;
    where: Prisma.eventWhereUniqueInput;
};
export type eventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventSelect<ExtArgs> | null;
    omit?: Prisma.eventOmit<ExtArgs> | null;
    include?: Prisma.eventInclude<ExtArgs> | null;
    where: Prisma.eventWhereUniqueInput;
};
export type eventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventSelect<ExtArgs> | null;
    omit?: Prisma.eventOmit<ExtArgs> | null;
    include?: Prisma.eventInclude<ExtArgs> | null;
    where?: Prisma.eventWhereInput;
    orderBy?: Prisma.eventOrderByWithRelationInput | Prisma.eventOrderByWithRelationInput[];
    cursor?: Prisma.eventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
export type eventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventSelect<ExtArgs> | null;
    omit?: Prisma.eventOmit<ExtArgs> | null;
    include?: Prisma.eventInclude<ExtArgs> | null;
    where?: Prisma.eventWhereInput;
    orderBy?: Prisma.eventOrderByWithRelationInput | Prisma.eventOrderByWithRelationInput[];
    cursor?: Prisma.eventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
export type eventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventSelect<ExtArgs> | null;
    omit?: Prisma.eventOmit<ExtArgs> | null;
    include?: Prisma.eventInclude<ExtArgs> | null;
    where?: Prisma.eventWhereInput;
    orderBy?: Prisma.eventOrderByWithRelationInput | Prisma.eventOrderByWithRelationInput[];
    cursor?: Prisma.eventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
export type eventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventSelect<ExtArgs> | null;
    omit?: Prisma.eventOmit<ExtArgs> | null;
    include?: Prisma.eventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.eventCreateInput, Prisma.eventUncheckedCreateInput>;
};
export type eventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.eventCreateManyInput | Prisma.eventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type eventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.eventOmit<ExtArgs> | null;
    data: Prisma.eventCreateManyInput | Prisma.eventCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.eventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type eventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventSelect<ExtArgs> | null;
    omit?: Prisma.eventOmit<ExtArgs> | null;
    include?: Prisma.eventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.eventUpdateInput, Prisma.eventUncheckedUpdateInput>;
    where: Prisma.eventWhereUniqueInput;
};
export type eventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.eventUpdateManyMutationInput, Prisma.eventUncheckedUpdateManyInput>;
    where?: Prisma.eventWhereInput;
    limit?: number;
};
export type eventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.eventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.eventUpdateManyMutationInput, Prisma.eventUncheckedUpdateManyInput>;
    where?: Prisma.eventWhereInput;
    limit?: number;
    include?: Prisma.eventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type eventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventSelect<ExtArgs> | null;
    omit?: Prisma.eventOmit<ExtArgs> | null;
    include?: Prisma.eventInclude<ExtArgs> | null;
    where: Prisma.eventWhereUniqueInput;
    create: Prisma.XOR<Prisma.eventCreateInput, Prisma.eventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.eventUpdateInput, Prisma.eventUncheckedUpdateInput>;
};
export type eventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventSelect<ExtArgs> | null;
    omit?: Prisma.eventOmit<ExtArgs> | null;
    include?: Prisma.eventInclude<ExtArgs> | null;
    where: Prisma.eventWhereUniqueInput;
};
export type eventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.eventWhereInput;
    limit?: number;
};
export type event$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
};
export type eventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventSelect<ExtArgs> | null;
    omit?: Prisma.eventOmit<ExtArgs> | null;
    include?: Prisma.eventInclude<ExtArgs> | null;
};
