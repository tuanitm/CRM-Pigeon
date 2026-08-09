import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type campaign_control_groupModel = runtime.Types.Result.DefaultSelection<Prisma.$campaign_control_groupPayload>;
export type AggregateCampaign_control_group = {
    _count: Campaign_control_groupCountAggregateOutputType | null;
    _min: Campaign_control_groupMinAggregateOutputType | null;
    _max: Campaign_control_groupMaxAggregateOutputType | null;
};
export type Campaign_control_groupMinAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    journey_id: string | null;
    group: string | null;
    assigned_at: Date | null;
};
export type Campaign_control_groupMaxAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    journey_id: string | null;
    group: string | null;
    assigned_at: Date | null;
};
export type Campaign_control_groupCountAggregateOutputType = {
    id: number;
    customer_id: number;
    journey_id: number;
    group: number;
    assigned_at: number;
    _all: number;
};
export type Campaign_control_groupMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    journey_id?: true;
    group?: true;
    assigned_at?: true;
};
export type Campaign_control_groupMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    journey_id?: true;
    group?: true;
    assigned_at?: true;
};
export type Campaign_control_groupCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    journey_id?: true;
    group?: true;
    assigned_at?: true;
    _all?: true;
};
export type Campaign_control_groupAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.campaign_control_groupWhereInput;
    orderBy?: Prisma.campaign_control_groupOrderByWithRelationInput | Prisma.campaign_control_groupOrderByWithRelationInput[];
    cursor?: Prisma.campaign_control_groupWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Campaign_control_groupCountAggregateInputType;
    _min?: Campaign_control_groupMinAggregateInputType;
    _max?: Campaign_control_groupMaxAggregateInputType;
};
export type GetCampaign_control_groupAggregateType<T extends Campaign_control_groupAggregateArgs> = {
    [P in keyof T & keyof AggregateCampaign_control_group]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCampaign_control_group[P]> : Prisma.GetScalarType<T[P], AggregateCampaign_control_group[P]>;
};
export type campaign_control_groupGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.campaign_control_groupWhereInput;
    orderBy?: Prisma.campaign_control_groupOrderByWithAggregationInput | Prisma.campaign_control_groupOrderByWithAggregationInput[];
    by: Prisma.Campaign_control_groupScalarFieldEnum[] | Prisma.Campaign_control_groupScalarFieldEnum;
    having?: Prisma.campaign_control_groupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Campaign_control_groupCountAggregateInputType | true;
    _min?: Campaign_control_groupMinAggregateInputType;
    _max?: Campaign_control_groupMaxAggregateInputType;
};
export type Campaign_control_groupGroupByOutputType = {
    id: string;
    customer_id: string;
    journey_id: string | null;
    group: string;
    assigned_at: Date;
    _count: Campaign_control_groupCountAggregateOutputType | null;
    _min: Campaign_control_groupMinAggregateOutputType | null;
    _max: Campaign_control_groupMaxAggregateOutputType | null;
};
export type GetCampaign_control_groupGroupByPayload<T extends campaign_control_groupGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Campaign_control_groupGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Campaign_control_groupGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Campaign_control_groupGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Campaign_control_groupGroupByOutputType[P]>;
}>>;
export type campaign_control_groupWhereInput = {
    AND?: Prisma.campaign_control_groupWhereInput | Prisma.campaign_control_groupWhereInput[];
    OR?: Prisma.campaign_control_groupWhereInput[];
    NOT?: Prisma.campaign_control_groupWhereInput | Prisma.campaign_control_groupWhereInput[];
    id?: Prisma.UuidFilter<"campaign_control_group"> | string;
    customer_id?: Prisma.UuidFilter<"campaign_control_group"> | string;
    journey_id?: Prisma.UuidNullableFilter<"campaign_control_group"> | string | null;
    group?: Prisma.StringFilter<"campaign_control_group"> | string;
    assigned_at?: Prisma.DateTimeFilter<"campaign_control_group"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    journey?: Prisma.XOR<Prisma.JourneyNullableScalarRelationFilter, Prisma.JourneyWhereInput> | null;
};
export type campaign_control_groupOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    journey_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    group?: Prisma.SortOrder;
    assigned_at?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    journey?: Prisma.JourneyOrderByWithRelationInput;
};
export type campaign_control_groupWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    customer_id_journey_id?: Prisma.campaign_control_groupCustomer_idJourney_idCompoundUniqueInput;
    AND?: Prisma.campaign_control_groupWhereInput | Prisma.campaign_control_groupWhereInput[];
    OR?: Prisma.campaign_control_groupWhereInput[];
    NOT?: Prisma.campaign_control_groupWhereInput | Prisma.campaign_control_groupWhereInput[];
    customer_id?: Prisma.UuidFilter<"campaign_control_group"> | string;
    journey_id?: Prisma.UuidNullableFilter<"campaign_control_group"> | string | null;
    group?: Prisma.StringFilter<"campaign_control_group"> | string;
    assigned_at?: Prisma.DateTimeFilter<"campaign_control_group"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    journey?: Prisma.XOR<Prisma.JourneyNullableScalarRelationFilter, Prisma.JourneyWhereInput> | null;
}, "id" | "customer_id_journey_id">;
export type campaign_control_groupOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    journey_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    group?: Prisma.SortOrder;
    assigned_at?: Prisma.SortOrder;
    _count?: Prisma.campaign_control_groupCountOrderByAggregateInput;
    _max?: Prisma.campaign_control_groupMaxOrderByAggregateInput;
    _min?: Prisma.campaign_control_groupMinOrderByAggregateInput;
};
export type campaign_control_groupScalarWhereWithAggregatesInput = {
    AND?: Prisma.campaign_control_groupScalarWhereWithAggregatesInput | Prisma.campaign_control_groupScalarWhereWithAggregatesInput[];
    OR?: Prisma.campaign_control_groupScalarWhereWithAggregatesInput[];
    NOT?: Prisma.campaign_control_groupScalarWhereWithAggregatesInput | Prisma.campaign_control_groupScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"campaign_control_group"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"campaign_control_group"> | string;
    journey_id?: Prisma.UuidNullableWithAggregatesFilter<"campaign_control_group"> | string | null;
    group?: Prisma.StringWithAggregatesFilter<"campaign_control_group"> | string;
    assigned_at?: Prisma.DateTimeWithAggregatesFilter<"campaign_control_group"> | Date | string;
};
export type campaign_control_groupCreateInput = {
    id?: string;
    group?: string;
    assigned_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutCampaign_control_groupInput;
    journey?: Prisma.JourneyCreateNestedOneWithoutCampaign_control_groupInput;
};
export type campaign_control_groupUncheckedCreateInput = {
    id?: string;
    customer_id: string;
    journey_id?: string | null;
    group?: string;
    assigned_at?: Date | string;
};
export type campaign_control_groupUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    assigned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutCampaign_control_groupNestedInput;
    journey?: Prisma.JourneyUpdateOneWithoutCampaign_control_groupNestedInput;
};
export type campaign_control_groupUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    journey_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    assigned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type campaign_control_groupCreateManyInput = {
    id?: string;
    customer_id: string;
    journey_id?: string | null;
    group?: string;
    assigned_at?: Date | string;
};
export type campaign_control_groupUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    assigned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type campaign_control_groupUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    journey_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    assigned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Campaign_control_groupListRelationFilter = {
    every?: Prisma.campaign_control_groupWhereInput;
    some?: Prisma.campaign_control_groupWhereInput;
    none?: Prisma.campaign_control_groupWhereInput;
};
export type campaign_control_groupOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type campaign_control_groupCustomer_idJourney_idCompoundUniqueInput = {
    customer_id: string;
    journey_id: string;
};
export type campaign_control_groupCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    journey_id?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    assigned_at?: Prisma.SortOrder;
};
export type campaign_control_groupMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    journey_id?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    assigned_at?: Prisma.SortOrder;
};
export type campaign_control_groupMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    journey_id?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    assigned_at?: Prisma.SortOrder;
};
export type campaign_control_groupCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.campaign_control_groupCreateWithoutCustomerInput, Prisma.campaign_control_groupUncheckedCreateWithoutCustomerInput> | Prisma.campaign_control_groupCreateWithoutCustomerInput[] | Prisma.campaign_control_groupUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.campaign_control_groupCreateOrConnectWithoutCustomerInput | Prisma.campaign_control_groupCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.campaign_control_groupCreateManyCustomerInputEnvelope;
    connect?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
};
export type campaign_control_groupUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.campaign_control_groupCreateWithoutCustomerInput, Prisma.campaign_control_groupUncheckedCreateWithoutCustomerInput> | Prisma.campaign_control_groupCreateWithoutCustomerInput[] | Prisma.campaign_control_groupUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.campaign_control_groupCreateOrConnectWithoutCustomerInput | Prisma.campaign_control_groupCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.campaign_control_groupCreateManyCustomerInputEnvelope;
    connect?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
};
export type campaign_control_groupUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.campaign_control_groupCreateWithoutCustomerInput, Prisma.campaign_control_groupUncheckedCreateWithoutCustomerInput> | Prisma.campaign_control_groupCreateWithoutCustomerInput[] | Prisma.campaign_control_groupUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.campaign_control_groupCreateOrConnectWithoutCustomerInput | Prisma.campaign_control_groupCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.campaign_control_groupUpsertWithWhereUniqueWithoutCustomerInput | Prisma.campaign_control_groupUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.campaign_control_groupCreateManyCustomerInputEnvelope;
    set?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    disconnect?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    delete?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    connect?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    update?: Prisma.campaign_control_groupUpdateWithWhereUniqueWithoutCustomerInput | Prisma.campaign_control_groupUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.campaign_control_groupUpdateManyWithWhereWithoutCustomerInput | Prisma.campaign_control_groupUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.campaign_control_groupScalarWhereInput | Prisma.campaign_control_groupScalarWhereInput[];
};
export type campaign_control_groupUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.campaign_control_groupCreateWithoutCustomerInput, Prisma.campaign_control_groupUncheckedCreateWithoutCustomerInput> | Prisma.campaign_control_groupCreateWithoutCustomerInput[] | Prisma.campaign_control_groupUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.campaign_control_groupCreateOrConnectWithoutCustomerInput | Prisma.campaign_control_groupCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.campaign_control_groupUpsertWithWhereUniqueWithoutCustomerInput | Prisma.campaign_control_groupUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.campaign_control_groupCreateManyCustomerInputEnvelope;
    set?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    disconnect?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    delete?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    connect?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    update?: Prisma.campaign_control_groupUpdateWithWhereUniqueWithoutCustomerInput | Prisma.campaign_control_groupUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.campaign_control_groupUpdateManyWithWhereWithoutCustomerInput | Prisma.campaign_control_groupUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.campaign_control_groupScalarWhereInput | Prisma.campaign_control_groupScalarWhereInput[];
};
export type campaign_control_groupCreateNestedManyWithoutJourneyInput = {
    create?: Prisma.XOR<Prisma.campaign_control_groupCreateWithoutJourneyInput, Prisma.campaign_control_groupUncheckedCreateWithoutJourneyInput> | Prisma.campaign_control_groupCreateWithoutJourneyInput[] | Prisma.campaign_control_groupUncheckedCreateWithoutJourneyInput[];
    connectOrCreate?: Prisma.campaign_control_groupCreateOrConnectWithoutJourneyInput | Prisma.campaign_control_groupCreateOrConnectWithoutJourneyInput[];
    createMany?: Prisma.campaign_control_groupCreateManyJourneyInputEnvelope;
    connect?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
};
export type campaign_control_groupUncheckedCreateNestedManyWithoutJourneyInput = {
    create?: Prisma.XOR<Prisma.campaign_control_groupCreateWithoutJourneyInput, Prisma.campaign_control_groupUncheckedCreateWithoutJourneyInput> | Prisma.campaign_control_groupCreateWithoutJourneyInput[] | Prisma.campaign_control_groupUncheckedCreateWithoutJourneyInput[];
    connectOrCreate?: Prisma.campaign_control_groupCreateOrConnectWithoutJourneyInput | Prisma.campaign_control_groupCreateOrConnectWithoutJourneyInput[];
    createMany?: Prisma.campaign_control_groupCreateManyJourneyInputEnvelope;
    connect?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
};
export type campaign_control_groupUpdateManyWithoutJourneyNestedInput = {
    create?: Prisma.XOR<Prisma.campaign_control_groupCreateWithoutJourneyInput, Prisma.campaign_control_groupUncheckedCreateWithoutJourneyInput> | Prisma.campaign_control_groupCreateWithoutJourneyInput[] | Prisma.campaign_control_groupUncheckedCreateWithoutJourneyInput[];
    connectOrCreate?: Prisma.campaign_control_groupCreateOrConnectWithoutJourneyInput | Prisma.campaign_control_groupCreateOrConnectWithoutJourneyInput[];
    upsert?: Prisma.campaign_control_groupUpsertWithWhereUniqueWithoutJourneyInput | Prisma.campaign_control_groupUpsertWithWhereUniqueWithoutJourneyInput[];
    createMany?: Prisma.campaign_control_groupCreateManyJourneyInputEnvelope;
    set?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    disconnect?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    delete?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    connect?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    update?: Prisma.campaign_control_groupUpdateWithWhereUniqueWithoutJourneyInput | Prisma.campaign_control_groupUpdateWithWhereUniqueWithoutJourneyInput[];
    updateMany?: Prisma.campaign_control_groupUpdateManyWithWhereWithoutJourneyInput | Prisma.campaign_control_groupUpdateManyWithWhereWithoutJourneyInput[];
    deleteMany?: Prisma.campaign_control_groupScalarWhereInput | Prisma.campaign_control_groupScalarWhereInput[];
};
export type campaign_control_groupUncheckedUpdateManyWithoutJourneyNestedInput = {
    create?: Prisma.XOR<Prisma.campaign_control_groupCreateWithoutJourneyInput, Prisma.campaign_control_groupUncheckedCreateWithoutJourneyInput> | Prisma.campaign_control_groupCreateWithoutJourneyInput[] | Prisma.campaign_control_groupUncheckedCreateWithoutJourneyInput[];
    connectOrCreate?: Prisma.campaign_control_groupCreateOrConnectWithoutJourneyInput | Prisma.campaign_control_groupCreateOrConnectWithoutJourneyInput[];
    upsert?: Prisma.campaign_control_groupUpsertWithWhereUniqueWithoutJourneyInput | Prisma.campaign_control_groupUpsertWithWhereUniqueWithoutJourneyInput[];
    createMany?: Prisma.campaign_control_groupCreateManyJourneyInputEnvelope;
    set?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    disconnect?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    delete?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    connect?: Prisma.campaign_control_groupWhereUniqueInput | Prisma.campaign_control_groupWhereUniqueInput[];
    update?: Prisma.campaign_control_groupUpdateWithWhereUniqueWithoutJourneyInput | Prisma.campaign_control_groupUpdateWithWhereUniqueWithoutJourneyInput[];
    updateMany?: Prisma.campaign_control_groupUpdateManyWithWhereWithoutJourneyInput | Prisma.campaign_control_groupUpdateManyWithWhereWithoutJourneyInput[];
    deleteMany?: Prisma.campaign_control_groupScalarWhereInput | Prisma.campaign_control_groupScalarWhereInput[];
};
export type campaign_control_groupCreateWithoutCustomerInput = {
    id?: string;
    group?: string;
    assigned_at?: Date | string;
    journey?: Prisma.JourneyCreateNestedOneWithoutCampaign_control_groupInput;
};
export type campaign_control_groupUncheckedCreateWithoutCustomerInput = {
    id?: string;
    journey_id?: string | null;
    group?: string;
    assigned_at?: Date | string;
};
export type campaign_control_groupCreateOrConnectWithoutCustomerInput = {
    where: Prisma.campaign_control_groupWhereUniqueInput;
    create: Prisma.XOR<Prisma.campaign_control_groupCreateWithoutCustomerInput, Prisma.campaign_control_groupUncheckedCreateWithoutCustomerInput>;
};
export type campaign_control_groupCreateManyCustomerInputEnvelope = {
    data: Prisma.campaign_control_groupCreateManyCustomerInput | Prisma.campaign_control_groupCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type campaign_control_groupUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.campaign_control_groupWhereUniqueInput;
    update: Prisma.XOR<Prisma.campaign_control_groupUpdateWithoutCustomerInput, Prisma.campaign_control_groupUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.campaign_control_groupCreateWithoutCustomerInput, Prisma.campaign_control_groupUncheckedCreateWithoutCustomerInput>;
};
export type campaign_control_groupUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.campaign_control_groupWhereUniqueInput;
    data: Prisma.XOR<Prisma.campaign_control_groupUpdateWithoutCustomerInput, Prisma.campaign_control_groupUncheckedUpdateWithoutCustomerInput>;
};
export type campaign_control_groupUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.campaign_control_groupScalarWhereInput;
    data: Prisma.XOR<Prisma.campaign_control_groupUpdateManyMutationInput, Prisma.campaign_control_groupUncheckedUpdateManyWithoutCustomerInput>;
};
export type campaign_control_groupScalarWhereInput = {
    AND?: Prisma.campaign_control_groupScalarWhereInput | Prisma.campaign_control_groupScalarWhereInput[];
    OR?: Prisma.campaign_control_groupScalarWhereInput[];
    NOT?: Prisma.campaign_control_groupScalarWhereInput | Prisma.campaign_control_groupScalarWhereInput[];
    id?: Prisma.UuidFilter<"campaign_control_group"> | string;
    customer_id?: Prisma.UuidFilter<"campaign_control_group"> | string;
    journey_id?: Prisma.UuidNullableFilter<"campaign_control_group"> | string | null;
    group?: Prisma.StringFilter<"campaign_control_group"> | string;
    assigned_at?: Prisma.DateTimeFilter<"campaign_control_group"> | Date | string;
};
export type campaign_control_groupCreateWithoutJourneyInput = {
    id?: string;
    group?: string;
    assigned_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutCampaign_control_groupInput;
};
export type campaign_control_groupUncheckedCreateWithoutJourneyInput = {
    id?: string;
    customer_id: string;
    group?: string;
    assigned_at?: Date | string;
};
export type campaign_control_groupCreateOrConnectWithoutJourneyInput = {
    where: Prisma.campaign_control_groupWhereUniqueInput;
    create: Prisma.XOR<Prisma.campaign_control_groupCreateWithoutJourneyInput, Prisma.campaign_control_groupUncheckedCreateWithoutJourneyInput>;
};
export type campaign_control_groupCreateManyJourneyInputEnvelope = {
    data: Prisma.campaign_control_groupCreateManyJourneyInput | Prisma.campaign_control_groupCreateManyJourneyInput[];
    skipDuplicates?: boolean;
};
export type campaign_control_groupUpsertWithWhereUniqueWithoutJourneyInput = {
    where: Prisma.campaign_control_groupWhereUniqueInput;
    update: Prisma.XOR<Prisma.campaign_control_groupUpdateWithoutJourneyInput, Prisma.campaign_control_groupUncheckedUpdateWithoutJourneyInput>;
    create: Prisma.XOR<Prisma.campaign_control_groupCreateWithoutJourneyInput, Prisma.campaign_control_groupUncheckedCreateWithoutJourneyInput>;
};
export type campaign_control_groupUpdateWithWhereUniqueWithoutJourneyInput = {
    where: Prisma.campaign_control_groupWhereUniqueInput;
    data: Prisma.XOR<Prisma.campaign_control_groupUpdateWithoutJourneyInput, Prisma.campaign_control_groupUncheckedUpdateWithoutJourneyInput>;
};
export type campaign_control_groupUpdateManyWithWhereWithoutJourneyInput = {
    where: Prisma.campaign_control_groupScalarWhereInput;
    data: Prisma.XOR<Prisma.campaign_control_groupUpdateManyMutationInput, Prisma.campaign_control_groupUncheckedUpdateManyWithoutJourneyInput>;
};
export type campaign_control_groupCreateManyCustomerInput = {
    id?: string;
    journey_id?: string | null;
    group?: string;
    assigned_at?: Date | string;
};
export type campaign_control_groupUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    assigned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    journey?: Prisma.JourneyUpdateOneWithoutCampaign_control_groupNestedInput;
};
export type campaign_control_groupUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journey_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    assigned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type campaign_control_groupUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    journey_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    assigned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type campaign_control_groupCreateManyJourneyInput = {
    id?: string;
    customer_id: string;
    group?: string;
    assigned_at?: Date | string;
};
export type campaign_control_groupUpdateWithoutJourneyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    assigned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutCampaign_control_groupNestedInput;
};
export type campaign_control_groupUncheckedUpdateWithoutJourneyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    assigned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type campaign_control_groupUncheckedUpdateManyWithoutJourneyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    assigned_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type campaign_control_groupSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    journey_id?: boolean;
    group?: boolean;
    assigned_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey?: boolean | Prisma.campaign_control_group$journeyArgs<ExtArgs>;
}, ExtArgs["result"]["campaign_control_group"]>;
export type campaign_control_groupSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    journey_id?: boolean;
    group?: boolean;
    assigned_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey?: boolean | Prisma.campaign_control_group$journeyArgs<ExtArgs>;
}, ExtArgs["result"]["campaign_control_group"]>;
export type campaign_control_groupSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    journey_id?: boolean;
    group?: boolean;
    assigned_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey?: boolean | Prisma.campaign_control_group$journeyArgs<ExtArgs>;
}, ExtArgs["result"]["campaign_control_group"]>;
export type campaign_control_groupSelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    journey_id?: boolean;
    group?: boolean;
    assigned_at?: boolean;
};
export type campaign_control_groupOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "journey_id" | "group" | "assigned_at", ExtArgs["result"]["campaign_control_group"]>;
export type campaign_control_groupInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey?: boolean | Prisma.campaign_control_group$journeyArgs<ExtArgs>;
};
export type campaign_control_groupIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey?: boolean | Prisma.campaign_control_group$journeyArgs<ExtArgs>;
};
export type campaign_control_groupIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    journey?: boolean | Prisma.campaign_control_group$journeyArgs<ExtArgs>;
};
export type $campaign_control_groupPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "campaign_control_group";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        journey: Prisma.$JourneyPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customer_id: string;
        journey_id: string | null;
        group: string;
        assigned_at: Date;
    }, ExtArgs["result"]["campaign_control_group"]>;
    composites: {};
};
export type campaign_control_groupGetPayload<S extends boolean | null | undefined | campaign_control_groupDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$campaign_control_groupPayload, S>;
export type campaign_control_groupCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<campaign_control_groupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Campaign_control_groupCountAggregateInputType | true;
};
export interface campaign_control_groupDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['campaign_control_group'];
        meta: {
            name: 'campaign_control_group';
        };
    };
    findUnique<T extends campaign_control_groupFindUniqueArgs>(args: Prisma.SelectSubset<T, campaign_control_groupFindUniqueArgs<ExtArgs>>): Prisma.Prisma__campaign_control_groupClient<runtime.Types.Result.GetResult<Prisma.$campaign_control_groupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends campaign_control_groupFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, campaign_control_groupFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__campaign_control_groupClient<runtime.Types.Result.GetResult<Prisma.$campaign_control_groupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends campaign_control_groupFindFirstArgs>(args?: Prisma.SelectSubset<T, campaign_control_groupFindFirstArgs<ExtArgs>>): Prisma.Prisma__campaign_control_groupClient<runtime.Types.Result.GetResult<Prisma.$campaign_control_groupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends campaign_control_groupFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, campaign_control_groupFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__campaign_control_groupClient<runtime.Types.Result.GetResult<Prisma.$campaign_control_groupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends campaign_control_groupFindManyArgs>(args?: Prisma.SelectSubset<T, campaign_control_groupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$campaign_control_groupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends campaign_control_groupCreateArgs>(args: Prisma.SelectSubset<T, campaign_control_groupCreateArgs<ExtArgs>>): Prisma.Prisma__campaign_control_groupClient<runtime.Types.Result.GetResult<Prisma.$campaign_control_groupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends campaign_control_groupCreateManyArgs>(args?: Prisma.SelectSubset<T, campaign_control_groupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends campaign_control_groupCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, campaign_control_groupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$campaign_control_groupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends campaign_control_groupDeleteArgs>(args: Prisma.SelectSubset<T, campaign_control_groupDeleteArgs<ExtArgs>>): Prisma.Prisma__campaign_control_groupClient<runtime.Types.Result.GetResult<Prisma.$campaign_control_groupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends campaign_control_groupUpdateArgs>(args: Prisma.SelectSubset<T, campaign_control_groupUpdateArgs<ExtArgs>>): Prisma.Prisma__campaign_control_groupClient<runtime.Types.Result.GetResult<Prisma.$campaign_control_groupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends campaign_control_groupDeleteManyArgs>(args?: Prisma.SelectSubset<T, campaign_control_groupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends campaign_control_groupUpdateManyArgs>(args: Prisma.SelectSubset<T, campaign_control_groupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends campaign_control_groupUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, campaign_control_groupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$campaign_control_groupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends campaign_control_groupUpsertArgs>(args: Prisma.SelectSubset<T, campaign_control_groupUpsertArgs<ExtArgs>>): Prisma.Prisma__campaign_control_groupClient<runtime.Types.Result.GetResult<Prisma.$campaign_control_groupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends campaign_control_groupCountArgs>(args?: Prisma.Subset<T, campaign_control_groupCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Campaign_control_groupCountAggregateOutputType> : number>;
    aggregate<T extends Campaign_control_groupAggregateArgs>(args: Prisma.Subset<T, Campaign_control_groupAggregateArgs>): Prisma.PrismaPromise<GetCampaign_control_groupAggregateType<T>>;
    groupBy<T extends campaign_control_groupGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: campaign_control_groupGroupByArgs['orderBy'];
    } : {
        orderBy?: campaign_control_groupGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, campaign_control_groupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaign_control_groupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: campaign_control_groupFieldRefs;
}
export interface Prisma__campaign_control_groupClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    journey<T extends Prisma.campaign_control_group$journeyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.campaign_control_group$journeyArgs<ExtArgs>>): Prisma.Prisma__JourneyClient<runtime.Types.Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface campaign_control_groupFieldRefs {
    readonly id: Prisma.FieldRef<"campaign_control_group", 'String'>;
    readonly customer_id: Prisma.FieldRef<"campaign_control_group", 'String'>;
    readonly journey_id: Prisma.FieldRef<"campaign_control_group", 'String'>;
    readonly group: Prisma.FieldRef<"campaign_control_group", 'String'>;
    readonly assigned_at: Prisma.FieldRef<"campaign_control_group", 'DateTime'>;
}
export type campaign_control_groupFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaign_control_groupSelect<ExtArgs> | null;
    omit?: Prisma.campaign_control_groupOmit<ExtArgs> | null;
    include?: Prisma.campaign_control_groupInclude<ExtArgs> | null;
    where: Prisma.campaign_control_groupWhereUniqueInput;
};
export type campaign_control_groupFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaign_control_groupSelect<ExtArgs> | null;
    omit?: Prisma.campaign_control_groupOmit<ExtArgs> | null;
    include?: Prisma.campaign_control_groupInclude<ExtArgs> | null;
    where: Prisma.campaign_control_groupWhereUniqueInput;
};
export type campaign_control_groupFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaign_control_groupSelect<ExtArgs> | null;
    omit?: Prisma.campaign_control_groupOmit<ExtArgs> | null;
    include?: Prisma.campaign_control_groupInclude<ExtArgs> | null;
    where?: Prisma.campaign_control_groupWhereInput;
    orderBy?: Prisma.campaign_control_groupOrderByWithRelationInput | Prisma.campaign_control_groupOrderByWithRelationInput[];
    cursor?: Prisma.campaign_control_groupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Campaign_control_groupScalarFieldEnum | Prisma.Campaign_control_groupScalarFieldEnum[];
};
export type campaign_control_groupFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaign_control_groupSelect<ExtArgs> | null;
    omit?: Prisma.campaign_control_groupOmit<ExtArgs> | null;
    include?: Prisma.campaign_control_groupInclude<ExtArgs> | null;
    where?: Prisma.campaign_control_groupWhereInput;
    orderBy?: Prisma.campaign_control_groupOrderByWithRelationInput | Prisma.campaign_control_groupOrderByWithRelationInput[];
    cursor?: Prisma.campaign_control_groupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Campaign_control_groupScalarFieldEnum | Prisma.Campaign_control_groupScalarFieldEnum[];
};
export type campaign_control_groupFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaign_control_groupSelect<ExtArgs> | null;
    omit?: Prisma.campaign_control_groupOmit<ExtArgs> | null;
    include?: Prisma.campaign_control_groupInclude<ExtArgs> | null;
    where?: Prisma.campaign_control_groupWhereInput;
    orderBy?: Prisma.campaign_control_groupOrderByWithRelationInput | Prisma.campaign_control_groupOrderByWithRelationInput[];
    cursor?: Prisma.campaign_control_groupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Campaign_control_groupScalarFieldEnum | Prisma.Campaign_control_groupScalarFieldEnum[];
};
export type campaign_control_groupCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaign_control_groupSelect<ExtArgs> | null;
    omit?: Prisma.campaign_control_groupOmit<ExtArgs> | null;
    include?: Prisma.campaign_control_groupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.campaign_control_groupCreateInput, Prisma.campaign_control_groupUncheckedCreateInput>;
};
export type campaign_control_groupCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.campaign_control_groupCreateManyInput | Prisma.campaign_control_groupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type campaign_control_groupCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaign_control_groupSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.campaign_control_groupOmit<ExtArgs> | null;
    data: Prisma.campaign_control_groupCreateManyInput | Prisma.campaign_control_groupCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.campaign_control_groupIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type campaign_control_groupUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaign_control_groupSelect<ExtArgs> | null;
    omit?: Prisma.campaign_control_groupOmit<ExtArgs> | null;
    include?: Prisma.campaign_control_groupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.campaign_control_groupUpdateInput, Prisma.campaign_control_groupUncheckedUpdateInput>;
    where: Prisma.campaign_control_groupWhereUniqueInput;
};
export type campaign_control_groupUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.campaign_control_groupUpdateManyMutationInput, Prisma.campaign_control_groupUncheckedUpdateManyInput>;
    where?: Prisma.campaign_control_groupWhereInput;
    limit?: number;
};
export type campaign_control_groupUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaign_control_groupSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.campaign_control_groupOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.campaign_control_groupUpdateManyMutationInput, Prisma.campaign_control_groupUncheckedUpdateManyInput>;
    where?: Prisma.campaign_control_groupWhereInput;
    limit?: number;
    include?: Prisma.campaign_control_groupIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type campaign_control_groupUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaign_control_groupSelect<ExtArgs> | null;
    omit?: Prisma.campaign_control_groupOmit<ExtArgs> | null;
    include?: Prisma.campaign_control_groupInclude<ExtArgs> | null;
    where: Prisma.campaign_control_groupWhereUniqueInput;
    create: Prisma.XOR<Prisma.campaign_control_groupCreateInput, Prisma.campaign_control_groupUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.campaign_control_groupUpdateInput, Prisma.campaign_control_groupUncheckedUpdateInput>;
};
export type campaign_control_groupDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaign_control_groupSelect<ExtArgs> | null;
    omit?: Prisma.campaign_control_groupOmit<ExtArgs> | null;
    include?: Prisma.campaign_control_groupInclude<ExtArgs> | null;
    where: Prisma.campaign_control_groupWhereUniqueInput;
};
export type campaign_control_groupDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.campaign_control_groupWhereInput;
    limit?: number;
};
export type campaign_control_group$journeyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.JourneySelect<ExtArgs> | null;
    omit?: Prisma.JourneyOmit<ExtArgs> | null;
    include?: Prisma.JourneyInclude<ExtArgs> | null;
    where?: Prisma.JourneyWhereInput;
};
export type campaign_control_groupDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.campaign_control_groupSelect<ExtArgs> | null;
    omit?: Prisma.campaign_control_groupOmit<ExtArgs> | null;
    include?: Prisma.campaign_control_groupInclude<ExtArgs> | null;
};
