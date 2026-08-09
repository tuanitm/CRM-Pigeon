import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type sessionModel = runtime.Types.Result.DefaultSelection<Prisma.$sessionPayload>;
export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null;
    _avg: SessionAvgAggregateOutputType | null;
    _sum: SessionSumAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
};
export type SessionAvgAggregateOutputType = {
    page_views: number | null;
};
export type SessionSumAggregateOutputType = {
    page_views: number | null;
};
export type SessionMinAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    anonymous_id: string | null;
    started_at: Date | null;
    ended_at: Date | null;
    page_views: number | null;
    utm_source: string | null;
    utm_medium: string | null;
    utm_campaign: string | null;
    device_type: string | null;
    created_at: Date | null;
};
export type SessionMaxAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    anonymous_id: string | null;
    started_at: Date | null;
    ended_at: Date | null;
    page_views: number | null;
    utm_source: string | null;
    utm_medium: string | null;
    utm_campaign: string | null;
    device_type: string | null;
    created_at: Date | null;
};
export type SessionCountAggregateOutputType = {
    id: number;
    customer_id: number;
    anonymous_id: number;
    started_at: number;
    ended_at: number;
    page_views: number;
    utm_source: number;
    utm_medium: number;
    utm_campaign: number;
    device_type: number;
    created_at: number;
    _all: number;
};
export type SessionAvgAggregateInputType = {
    page_views?: true;
};
export type SessionSumAggregateInputType = {
    page_views?: true;
};
export type SessionMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    anonymous_id?: true;
    started_at?: true;
    ended_at?: true;
    page_views?: true;
    utm_source?: true;
    utm_medium?: true;
    utm_campaign?: true;
    device_type?: true;
    created_at?: true;
};
export type SessionMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    anonymous_id?: true;
    started_at?: true;
    ended_at?: true;
    page_views?: true;
    utm_source?: true;
    utm_medium?: true;
    utm_campaign?: true;
    device_type?: true;
    created_at?: true;
};
export type SessionCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    anonymous_id?: true;
    started_at?: true;
    ended_at?: true;
    page_views?: true;
    utm_source?: true;
    utm_medium?: true;
    utm_campaign?: true;
    device_type?: true;
    created_at?: true;
    _all?: true;
};
export type SessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.sessionWhereInput;
    orderBy?: Prisma.sessionOrderByWithRelationInput | Prisma.sessionOrderByWithRelationInput[];
    cursor?: Prisma.sessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SessionCountAggregateInputType;
    _avg?: SessionAvgAggregateInputType;
    _sum?: SessionSumAggregateInputType;
    _min?: SessionMinAggregateInputType;
    _max?: SessionMaxAggregateInputType;
};
export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
    [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSession[P]> : Prisma.GetScalarType<T[P], AggregateSession[P]>;
};
export type sessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.sessionWhereInput;
    orderBy?: Prisma.sessionOrderByWithAggregationInput | Prisma.sessionOrderByWithAggregationInput[];
    by: Prisma.SessionScalarFieldEnum[] | Prisma.SessionScalarFieldEnum;
    having?: Prisma.sessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SessionCountAggregateInputType | true;
    _avg?: SessionAvgAggregateInputType;
    _sum?: SessionSumAggregateInputType;
    _min?: SessionMinAggregateInputType;
    _max?: SessionMaxAggregateInputType;
};
export type SessionGroupByOutputType = {
    id: string;
    customer_id: string | null;
    anonymous_id: string | null;
    started_at: Date;
    ended_at: Date | null;
    page_views: number;
    utm_source: string | null;
    utm_medium: string | null;
    utm_campaign: string | null;
    device_type: string | null;
    created_at: Date;
    _count: SessionCountAggregateOutputType | null;
    _avg: SessionAvgAggregateOutputType | null;
    _sum: SessionSumAggregateOutputType | null;
    _min: SessionMinAggregateOutputType | null;
    _max: SessionMaxAggregateOutputType | null;
};
export type GetSessionGroupByPayload<T extends sessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SessionGroupByOutputType[P]>;
}>>;
export type sessionWhereInput = {
    AND?: Prisma.sessionWhereInput | Prisma.sessionWhereInput[];
    OR?: Prisma.sessionWhereInput[];
    NOT?: Prisma.sessionWhereInput | Prisma.sessionWhereInput[];
    id?: Prisma.UuidFilter<"session"> | string;
    customer_id?: Prisma.UuidNullableFilter<"session"> | string | null;
    anonymous_id?: Prisma.StringNullableFilter<"session"> | string | null;
    started_at?: Prisma.DateTimeFilter<"session"> | Date | string;
    ended_at?: Prisma.DateTimeNullableFilter<"session"> | Date | string | null;
    page_views?: Prisma.IntFilter<"session"> | number;
    utm_source?: Prisma.StringNullableFilter<"session"> | string | null;
    utm_medium?: Prisma.StringNullableFilter<"session"> | string | null;
    utm_campaign?: Prisma.StringNullableFilter<"session"> | string | null;
    device_type?: Prisma.StringNullableFilter<"session"> | string | null;
    created_at?: Prisma.DateTimeFilter<"session"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
};
export type sessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    ended_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    page_views?: Prisma.SortOrder;
    utm_source?: Prisma.SortOrderInput | Prisma.SortOrder;
    utm_medium?: Prisma.SortOrderInput | Prisma.SortOrder;
    utm_campaign?: Prisma.SortOrderInput | Prisma.SortOrder;
    device_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type sessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.sessionWhereInput | Prisma.sessionWhereInput[];
    OR?: Prisma.sessionWhereInput[];
    NOT?: Prisma.sessionWhereInput | Prisma.sessionWhereInput[];
    customer_id?: Prisma.UuidNullableFilter<"session"> | string | null;
    anonymous_id?: Prisma.StringNullableFilter<"session"> | string | null;
    started_at?: Prisma.DateTimeFilter<"session"> | Date | string;
    ended_at?: Prisma.DateTimeNullableFilter<"session"> | Date | string | null;
    page_views?: Prisma.IntFilter<"session"> | number;
    utm_source?: Prisma.StringNullableFilter<"session"> | string | null;
    utm_medium?: Prisma.StringNullableFilter<"session"> | string | null;
    utm_campaign?: Prisma.StringNullableFilter<"session"> | string | null;
    device_type?: Prisma.StringNullableFilter<"session"> | string | null;
    created_at?: Prisma.DateTimeFilter<"session"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
}, "id">;
export type sessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    ended_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    page_views?: Prisma.SortOrder;
    utm_source?: Prisma.SortOrderInput | Prisma.SortOrder;
    utm_medium?: Prisma.SortOrderInput | Prisma.SortOrder;
    utm_campaign?: Prisma.SortOrderInput | Prisma.SortOrder;
    device_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.sessionCountOrderByAggregateInput;
    _avg?: Prisma.sessionAvgOrderByAggregateInput;
    _max?: Prisma.sessionMaxOrderByAggregateInput;
    _min?: Prisma.sessionMinOrderByAggregateInput;
    _sum?: Prisma.sessionSumOrderByAggregateInput;
};
export type sessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.sessionScalarWhereWithAggregatesInput | Prisma.sessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.sessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.sessionScalarWhereWithAggregatesInput | Prisma.sessionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"session"> | string;
    customer_id?: Prisma.UuidNullableWithAggregatesFilter<"session"> | string | null;
    anonymous_id?: Prisma.StringNullableWithAggregatesFilter<"session"> | string | null;
    started_at?: Prisma.DateTimeWithAggregatesFilter<"session"> | Date | string;
    ended_at?: Prisma.DateTimeNullableWithAggregatesFilter<"session"> | Date | string | null;
    page_views?: Prisma.IntWithAggregatesFilter<"session"> | number;
    utm_source?: Prisma.StringNullableWithAggregatesFilter<"session"> | string | null;
    utm_medium?: Prisma.StringNullableWithAggregatesFilter<"session"> | string | null;
    utm_campaign?: Prisma.StringNullableWithAggregatesFilter<"session"> | string | null;
    device_type?: Prisma.StringNullableWithAggregatesFilter<"session"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"session"> | Date | string;
};
export type sessionCreateInput = {
    id?: string;
    anonymous_id?: string | null;
    started_at?: Date | string;
    ended_at?: Date | string | null;
    page_views?: number;
    utm_source?: string | null;
    utm_medium?: string | null;
    utm_campaign?: string | null;
    device_type?: string | null;
    created_at?: Date | string;
    customer?: Prisma.CustomerCreateNestedOneWithoutSessionInput;
};
export type sessionUncheckedCreateInput = {
    id?: string;
    customer_id?: string | null;
    anonymous_id?: string | null;
    started_at?: Date | string;
    ended_at?: Date | string | null;
    page_views?: number;
    utm_source?: string | null;
    utm_medium?: string | null;
    utm_campaign?: string | null;
    device_type?: string | null;
    created_at?: Date | string;
};
export type sessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ended_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    page_views?: Prisma.IntFieldUpdateOperationsInput | number;
    utm_source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utm_medium?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utm_campaign?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneWithoutSessionNestedInput;
};
export type sessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ended_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    page_views?: Prisma.IntFieldUpdateOperationsInput | number;
    utm_source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utm_medium?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utm_campaign?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type sessionCreateManyInput = {
    id?: string;
    customer_id?: string | null;
    anonymous_id?: string | null;
    started_at?: Date | string;
    ended_at?: Date | string | null;
    page_views?: number;
    utm_source?: string | null;
    utm_medium?: string | null;
    utm_campaign?: string | null;
    device_type?: string | null;
    created_at?: Date | string;
};
export type sessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ended_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    page_views?: Prisma.IntFieldUpdateOperationsInput | number;
    utm_source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utm_medium?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utm_campaign?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type sessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ended_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    page_views?: Prisma.IntFieldUpdateOperationsInput | number;
    utm_source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utm_medium?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utm_campaign?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SessionListRelationFilter = {
    every?: Prisma.sessionWhereInput;
    some?: Prisma.sessionWhereInput;
    none?: Prisma.sessionWhereInput;
};
export type sessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type sessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    ended_at?: Prisma.SortOrder;
    page_views?: Prisma.SortOrder;
    utm_source?: Prisma.SortOrder;
    utm_medium?: Prisma.SortOrder;
    utm_campaign?: Prisma.SortOrder;
    device_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type sessionAvgOrderByAggregateInput = {
    page_views?: Prisma.SortOrder;
};
export type sessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    ended_at?: Prisma.SortOrder;
    page_views?: Prisma.SortOrder;
    utm_source?: Prisma.SortOrder;
    utm_medium?: Prisma.SortOrder;
    utm_campaign?: Prisma.SortOrder;
    device_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type sessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    ended_at?: Prisma.SortOrder;
    page_views?: Prisma.SortOrder;
    utm_source?: Prisma.SortOrder;
    utm_medium?: Prisma.SortOrder;
    utm_campaign?: Prisma.SortOrder;
    device_type?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type sessionSumOrderByAggregateInput = {
    page_views?: Prisma.SortOrder;
};
export type sessionCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.sessionCreateWithoutCustomerInput, Prisma.sessionUncheckedCreateWithoutCustomerInput> | Prisma.sessionCreateWithoutCustomerInput[] | Prisma.sessionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.sessionCreateOrConnectWithoutCustomerInput | Prisma.sessionCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.sessionCreateManyCustomerInputEnvelope;
    connect?: Prisma.sessionWhereUniqueInput | Prisma.sessionWhereUniqueInput[];
};
export type sessionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.sessionCreateWithoutCustomerInput, Prisma.sessionUncheckedCreateWithoutCustomerInput> | Prisma.sessionCreateWithoutCustomerInput[] | Prisma.sessionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.sessionCreateOrConnectWithoutCustomerInput | Prisma.sessionCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.sessionCreateManyCustomerInputEnvelope;
    connect?: Prisma.sessionWhereUniqueInput | Prisma.sessionWhereUniqueInput[];
};
export type sessionUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.sessionCreateWithoutCustomerInput, Prisma.sessionUncheckedCreateWithoutCustomerInput> | Prisma.sessionCreateWithoutCustomerInput[] | Prisma.sessionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.sessionCreateOrConnectWithoutCustomerInput | Prisma.sessionCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.sessionUpsertWithWhereUniqueWithoutCustomerInput | Prisma.sessionUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.sessionCreateManyCustomerInputEnvelope;
    set?: Prisma.sessionWhereUniqueInput | Prisma.sessionWhereUniqueInput[];
    disconnect?: Prisma.sessionWhereUniqueInput | Prisma.sessionWhereUniqueInput[];
    delete?: Prisma.sessionWhereUniqueInput | Prisma.sessionWhereUniqueInput[];
    connect?: Prisma.sessionWhereUniqueInput | Prisma.sessionWhereUniqueInput[];
    update?: Prisma.sessionUpdateWithWhereUniqueWithoutCustomerInput | Prisma.sessionUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.sessionUpdateManyWithWhereWithoutCustomerInput | Prisma.sessionUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.sessionScalarWhereInput | Prisma.sessionScalarWhereInput[];
};
export type sessionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.sessionCreateWithoutCustomerInput, Prisma.sessionUncheckedCreateWithoutCustomerInput> | Prisma.sessionCreateWithoutCustomerInput[] | Prisma.sessionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.sessionCreateOrConnectWithoutCustomerInput | Prisma.sessionCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.sessionUpsertWithWhereUniqueWithoutCustomerInput | Prisma.sessionUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.sessionCreateManyCustomerInputEnvelope;
    set?: Prisma.sessionWhereUniqueInput | Prisma.sessionWhereUniqueInput[];
    disconnect?: Prisma.sessionWhereUniqueInput | Prisma.sessionWhereUniqueInput[];
    delete?: Prisma.sessionWhereUniqueInput | Prisma.sessionWhereUniqueInput[];
    connect?: Prisma.sessionWhereUniqueInput | Prisma.sessionWhereUniqueInput[];
    update?: Prisma.sessionUpdateWithWhereUniqueWithoutCustomerInput | Prisma.sessionUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.sessionUpdateManyWithWhereWithoutCustomerInput | Prisma.sessionUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.sessionScalarWhereInput | Prisma.sessionScalarWhereInput[];
};
export type sessionCreateWithoutCustomerInput = {
    id?: string;
    anonymous_id?: string | null;
    started_at?: Date | string;
    ended_at?: Date | string | null;
    page_views?: number;
    utm_source?: string | null;
    utm_medium?: string | null;
    utm_campaign?: string | null;
    device_type?: string | null;
    created_at?: Date | string;
};
export type sessionUncheckedCreateWithoutCustomerInput = {
    id?: string;
    anonymous_id?: string | null;
    started_at?: Date | string;
    ended_at?: Date | string | null;
    page_views?: number;
    utm_source?: string | null;
    utm_medium?: string | null;
    utm_campaign?: string | null;
    device_type?: string | null;
    created_at?: Date | string;
};
export type sessionCreateOrConnectWithoutCustomerInput = {
    where: Prisma.sessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.sessionCreateWithoutCustomerInput, Prisma.sessionUncheckedCreateWithoutCustomerInput>;
};
export type sessionCreateManyCustomerInputEnvelope = {
    data: Prisma.sessionCreateManyCustomerInput | Prisma.sessionCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type sessionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.sessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.sessionUpdateWithoutCustomerInput, Prisma.sessionUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.sessionCreateWithoutCustomerInput, Prisma.sessionUncheckedCreateWithoutCustomerInput>;
};
export type sessionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.sessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.sessionUpdateWithoutCustomerInput, Prisma.sessionUncheckedUpdateWithoutCustomerInput>;
};
export type sessionUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.sessionScalarWhereInput;
    data: Prisma.XOR<Prisma.sessionUpdateManyMutationInput, Prisma.sessionUncheckedUpdateManyWithoutCustomerInput>;
};
export type sessionScalarWhereInput = {
    AND?: Prisma.sessionScalarWhereInput | Prisma.sessionScalarWhereInput[];
    OR?: Prisma.sessionScalarWhereInput[];
    NOT?: Prisma.sessionScalarWhereInput | Prisma.sessionScalarWhereInput[];
    id?: Prisma.UuidFilter<"session"> | string;
    customer_id?: Prisma.UuidNullableFilter<"session"> | string | null;
    anonymous_id?: Prisma.StringNullableFilter<"session"> | string | null;
    started_at?: Prisma.DateTimeFilter<"session"> | Date | string;
    ended_at?: Prisma.DateTimeNullableFilter<"session"> | Date | string | null;
    page_views?: Prisma.IntFilter<"session"> | number;
    utm_source?: Prisma.StringNullableFilter<"session"> | string | null;
    utm_medium?: Prisma.StringNullableFilter<"session"> | string | null;
    utm_campaign?: Prisma.StringNullableFilter<"session"> | string | null;
    device_type?: Prisma.StringNullableFilter<"session"> | string | null;
    created_at?: Prisma.DateTimeFilter<"session"> | Date | string;
};
export type sessionCreateManyCustomerInput = {
    id?: string;
    anonymous_id?: string | null;
    started_at?: Date | string;
    ended_at?: Date | string | null;
    page_views?: number;
    utm_source?: string | null;
    utm_medium?: string | null;
    utm_campaign?: string | null;
    device_type?: string | null;
    created_at?: Date | string;
};
export type sessionUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ended_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    page_views?: Prisma.IntFieldUpdateOperationsInput | number;
    utm_source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utm_medium?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utm_campaign?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type sessionUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ended_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    page_views?: Prisma.IntFieldUpdateOperationsInput | number;
    utm_source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utm_medium?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utm_campaign?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type sessionUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    started_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ended_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    page_views?: Prisma.IntFieldUpdateOperationsInput | number;
    utm_source?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utm_medium?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    utm_campaign?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    device_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type sessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    anonymous_id?: boolean;
    started_at?: boolean;
    ended_at?: boolean;
    page_views?: boolean;
    utm_source?: boolean;
    utm_medium?: boolean;
    utm_campaign?: boolean;
    device_type?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.session$customerArgs<ExtArgs>;
}, ExtArgs["result"]["session"]>;
export type sessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    anonymous_id?: boolean;
    started_at?: boolean;
    ended_at?: boolean;
    page_views?: boolean;
    utm_source?: boolean;
    utm_medium?: boolean;
    utm_campaign?: boolean;
    device_type?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.session$customerArgs<ExtArgs>;
}, ExtArgs["result"]["session"]>;
export type sessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    anonymous_id?: boolean;
    started_at?: boolean;
    ended_at?: boolean;
    page_views?: boolean;
    utm_source?: boolean;
    utm_medium?: boolean;
    utm_campaign?: boolean;
    device_type?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.session$customerArgs<ExtArgs>;
}, ExtArgs["result"]["session"]>;
export type sessionSelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    anonymous_id?: boolean;
    started_at?: boolean;
    ended_at?: boolean;
    page_views?: boolean;
    utm_source?: boolean;
    utm_medium?: boolean;
    utm_campaign?: boolean;
    device_type?: boolean;
    created_at?: boolean;
};
export type sessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "anonymous_id" | "started_at" | "ended_at" | "page_views" | "utm_source" | "utm_medium" | "utm_campaign" | "device_type" | "created_at", ExtArgs["result"]["session"]>;
export type sessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.session$customerArgs<ExtArgs>;
};
export type sessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.session$customerArgs<ExtArgs>;
};
export type sessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.session$customerArgs<ExtArgs>;
};
export type $sessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "session";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customer_id: string | null;
        anonymous_id: string | null;
        started_at: Date;
        ended_at: Date | null;
        page_views: number;
        utm_source: string | null;
        utm_medium: string | null;
        utm_campaign: string | null;
        device_type: string | null;
        created_at: Date;
    }, ExtArgs["result"]["session"]>;
    composites: {};
};
export type sessionGetPayload<S extends boolean | null | undefined | sessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$sessionPayload, S>;
export type sessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<sessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SessionCountAggregateInputType | true;
};
export interface sessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['session'];
        meta: {
            name: 'session';
        };
    };
    findUnique<T extends sessionFindUniqueArgs>(args: Prisma.SelectSubset<T, sessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__sessionClient<runtime.Types.Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends sessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, sessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__sessionClient<runtime.Types.Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends sessionFindFirstArgs>(args?: Prisma.SelectSubset<T, sessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__sessionClient<runtime.Types.Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends sessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, sessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__sessionClient<runtime.Types.Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends sessionFindManyArgs>(args?: Prisma.SelectSubset<T, sessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends sessionCreateArgs>(args: Prisma.SelectSubset<T, sessionCreateArgs<ExtArgs>>): Prisma.Prisma__sessionClient<runtime.Types.Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends sessionCreateManyArgs>(args?: Prisma.SelectSubset<T, sessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends sessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, sessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends sessionDeleteArgs>(args: Prisma.SelectSubset<T, sessionDeleteArgs<ExtArgs>>): Prisma.Prisma__sessionClient<runtime.Types.Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends sessionUpdateArgs>(args: Prisma.SelectSubset<T, sessionUpdateArgs<ExtArgs>>): Prisma.Prisma__sessionClient<runtime.Types.Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends sessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, sessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends sessionUpdateManyArgs>(args: Prisma.SelectSubset<T, sessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends sessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, sessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends sessionUpsertArgs>(args: Prisma.SelectSubset<T, sessionUpsertArgs<ExtArgs>>): Prisma.Prisma__sessionClient<runtime.Types.Result.GetResult<Prisma.$sessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends sessionCountArgs>(args?: Prisma.Subset<T, sessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SessionCountAggregateOutputType> : number>;
    aggregate<T extends SessionAggregateArgs>(args: Prisma.Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>;
    groupBy<T extends sessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: sessionGroupByArgs['orderBy'];
    } : {
        orderBy?: sessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, sessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: sessionFieldRefs;
}
export interface Prisma__sessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.session$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.session$customerArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface sessionFieldRefs {
    readonly id: Prisma.FieldRef<"session", 'String'>;
    readonly customer_id: Prisma.FieldRef<"session", 'String'>;
    readonly anonymous_id: Prisma.FieldRef<"session", 'String'>;
    readonly started_at: Prisma.FieldRef<"session", 'DateTime'>;
    readonly ended_at: Prisma.FieldRef<"session", 'DateTime'>;
    readonly page_views: Prisma.FieldRef<"session", 'Int'>;
    readonly utm_source: Prisma.FieldRef<"session", 'String'>;
    readonly utm_medium: Prisma.FieldRef<"session", 'String'>;
    readonly utm_campaign: Prisma.FieldRef<"session", 'String'>;
    readonly device_type: Prisma.FieldRef<"session", 'String'>;
    readonly created_at: Prisma.FieldRef<"session", 'DateTime'>;
}
export type sessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sessionSelect<ExtArgs> | null;
    omit?: Prisma.sessionOmit<ExtArgs> | null;
    include?: Prisma.sessionInclude<ExtArgs> | null;
    where: Prisma.sessionWhereUniqueInput;
};
export type sessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sessionSelect<ExtArgs> | null;
    omit?: Prisma.sessionOmit<ExtArgs> | null;
    include?: Prisma.sessionInclude<ExtArgs> | null;
    where: Prisma.sessionWhereUniqueInput;
};
export type sessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sessionSelect<ExtArgs> | null;
    omit?: Prisma.sessionOmit<ExtArgs> | null;
    include?: Prisma.sessionInclude<ExtArgs> | null;
    where?: Prisma.sessionWhereInput;
    orderBy?: Prisma.sessionOrderByWithRelationInput | Prisma.sessionOrderByWithRelationInput[];
    cursor?: Prisma.sessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type sessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sessionSelect<ExtArgs> | null;
    omit?: Prisma.sessionOmit<ExtArgs> | null;
    include?: Prisma.sessionInclude<ExtArgs> | null;
    where?: Prisma.sessionWhereInput;
    orderBy?: Prisma.sessionOrderByWithRelationInput | Prisma.sessionOrderByWithRelationInput[];
    cursor?: Prisma.sessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type sessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sessionSelect<ExtArgs> | null;
    omit?: Prisma.sessionOmit<ExtArgs> | null;
    include?: Prisma.sessionInclude<ExtArgs> | null;
    where?: Prisma.sessionWhereInput;
    orderBy?: Prisma.sessionOrderByWithRelationInput | Prisma.sessionOrderByWithRelationInput[];
    cursor?: Prisma.sessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type sessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sessionSelect<ExtArgs> | null;
    omit?: Prisma.sessionOmit<ExtArgs> | null;
    include?: Prisma.sessionInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.sessionCreateInput, Prisma.sessionUncheckedCreateInput>;
};
export type sessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.sessionCreateManyInput | Prisma.sessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type sessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.sessionOmit<ExtArgs> | null;
    data: Prisma.sessionCreateManyInput | Prisma.sessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.sessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type sessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sessionSelect<ExtArgs> | null;
    omit?: Prisma.sessionOmit<ExtArgs> | null;
    include?: Prisma.sessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.sessionUpdateInput, Prisma.sessionUncheckedUpdateInput>;
    where: Prisma.sessionWhereUniqueInput;
};
export type sessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.sessionUpdateManyMutationInput, Prisma.sessionUncheckedUpdateManyInput>;
    where?: Prisma.sessionWhereInput;
    limit?: number;
};
export type sessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.sessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.sessionUpdateManyMutationInput, Prisma.sessionUncheckedUpdateManyInput>;
    where?: Prisma.sessionWhereInput;
    limit?: number;
    include?: Prisma.sessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type sessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sessionSelect<ExtArgs> | null;
    omit?: Prisma.sessionOmit<ExtArgs> | null;
    include?: Prisma.sessionInclude<ExtArgs> | null;
    where: Prisma.sessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.sessionCreateInput, Prisma.sessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.sessionUpdateInput, Prisma.sessionUncheckedUpdateInput>;
};
export type sessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sessionSelect<ExtArgs> | null;
    omit?: Prisma.sessionOmit<ExtArgs> | null;
    include?: Prisma.sessionInclude<ExtArgs> | null;
    where: Prisma.sessionWhereUniqueInput;
};
export type sessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.sessionWhereInput;
    limit?: number;
};
export type session$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
};
export type sessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sessionSelect<ExtArgs> | null;
    omit?: Prisma.sessionOmit<ExtArgs> | null;
    include?: Prisma.sessionInclude<ExtArgs> | null;
};
