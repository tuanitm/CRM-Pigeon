import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type expert_bookingModel = runtime.Types.Result.DefaultSelection<Prisma.$expert_bookingPayload>;
export type AggregateExpert_booking = {
    _count: Expert_bookingCountAggregateOutputType | null;
    _min: Expert_bookingMinAggregateOutputType | null;
    _max: Expert_bookingMaxAggregateOutputType | null;
};
export type Expert_bookingMinAggregateOutputType = {
    id: string | null;
    slot_id: string | null;
    customer_id: string | null;
    baby_id: string | null;
    status: string | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Expert_bookingMaxAggregateOutputType = {
    id: string | null;
    slot_id: string | null;
    customer_id: string | null;
    baby_id: string | null;
    status: string | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Expert_bookingCountAggregateOutputType = {
    id: number;
    slot_id: number;
    customer_id: number;
    baby_id: number;
    status: number;
    notes: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Expert_bookingMinAggregateInputType = {
    id?: true;
    slot_id?: true;
    customer_id?: true;
    baby_id?: true;
    status?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
};
export type Expert_bookingMaxAggregateInputType = {
    id?: true;
    slot_id?: true;
    customer_id?: true;
    baby_id?: true;
    status?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
};
export type Expert_bookingCountAggregateInputType = {
    id?: true;
    slot_id?: true;
    customer_id?: true;
    baby_id?: true;
    status?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Expert_bookingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.expert_bookingWhereInput;
    orderBy?: Prisma.expert_bookingOrderByWithRelationInput | Prisma.expert_bookingOrderByWithRelationInput[];
    cursor?: Prisma.expert_bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Expert_bookingCountAggregateInputType;
    _min?: Expert_bookingMinAggregateInputType;
    _max?: Expert_bookingMaxAggregateInputType;
};
export type GetExpert_bookingAggregateType<T extends Expert_bookingAggregateArgs> = {
    [P in keyof T & keyof AggregateExpert_booking]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExpert_booking[P]> : Prisma.GetScalarType<T[P], AggregateExpert_booking[P]>;
};
export type expert_bookingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.expert_bookingWhereInput;
    orderBy?: Prisma.expert_bookingOrderByWithAggregationInput | Prisma.expert_bookingOrderByWithAggregationInput[];
    by: Prisma.Expert_bookingScalarFieldEnum[] | Prisma.Expert_bookingScalarFieldEnum;
    having?: Prisma.expert_bookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Expert_bookingCountAggregateInputType | true;
    _min?: Expert_bookingMinAggregateInputType;
    _max?: Expert_bookingMaxAggregateInputType;
};
export type Expert_bookingGroupByOutputType = {
    id: string;
    slot_id: string;
    customer_id: string;
    baby_id: string | null;
    status: string;
    notes: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Expert_bookingCountAggregateOutputType | null;
    _min: Expert_bookingMinAggregateOutputType | null;
    _max: Expert_bookingMaxAggregateOutputType | null;
};
export type GetExpert_bookingGroupByPayload<T extends expert_bookingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Expert_bookingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Expert_bookingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Expert_bookingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Expert_bookingGroupByOutputType[P]>;
}>>;
export type expert_bookingWhereInput = {
    AND?: Prisma.expert_bookingWhereInput | Prisma.expert_bookingWhereInput[];
    OR?: Prisma.expert_bookingWhereInput[];
    NOT?: Prisma.expert_bookingWhereInput | Prisma.expert_bookingWhereInput[];
    id?: Prisma.UuidFilter<"expert_booking"> | string;
    slot_id?: Prisma.UuidFilter<"expert_booking"> | string;
    customer_id?: Prisma.UuidFilter<"expert_booking"> | string;
    baby_id?: Prisma.UuidNullableFilter<"expert_booking"> | string | null;
    status?: Prisma.StringFilter<"expert_booking"> | string;
    notes?: Prisma.StringNullableFilter<"expert_booking"> | string | null;
    created_at?: Prisma.DateTimeFilter<"expert_booking"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"expert_booking"> | Date | string;
    baby?: Prisma.XOR<Prisma.BabyNullableScalarRelationFilter, Prisma.BabyWhereInput> | null;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    expert_slot?: Prisma.XOR<Prisma.Expert_slotScalarRelationFilter, Prisma.expert_slotWhereInput>;
};
export type expert_bookingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slot_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    baby?: Prisma.BabyOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    expert_slot?: Prisma.expert_slotOrderByWithRelationInput;
};
export type expert_bookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.expert_bookingWhereInput | Prisma.expert_bookingWhereInput[];
    OR?: Prisma.expert_bookingWhereInput[];
    NOT?: Prisma.expert_bookingWhereInput | Prisma.expert_bookingWhereInput[];
    slot_id?: Prisma.UuidFilter<"expert_booking"> | string;
    customer_id?: Prisma.UuidFilter<"expert_booking"> | string;
    baby_id?: Prisma.UuidNullableFilter<"expert_booking"> | string | null;
    status?: Prisma.StringFilter<"expert_booking"> | string;
    notes?: Prisma.StringNullableFilter<"expert_booking"> | string | null;
    created_at?: Prisma.DateTimeFilter<"expert_booking"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"expert_booking"> | Date | string;
    baby?: Prisma.XOR<Prisma.BabyNullableScalarRelationFilter, Prisma.BabyWhereInput> | null;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    expert_slot?: Prisma.XOR<Prisma.Expert_slotScalarRelationFilter, Prisma.expert_slotWhereInput>;
}, "id">;
export type expert_bookingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slot_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.expert_bookingCountOrderByAggregateInput;
    _max?: Prisma.expert_bookingMaxOrderByAggregateInput;
    _min?: Prisma.expert_bookingMinOrderByAggregateInput;
};
export type expert_bookingScalarWhereWithAggregatesInput = {
    AND?: Prisma.expert_bookingScalarWhereWithAggregatesInput | Prisma.expert_bookingScalarWhereWithAggregatesInput[];
    OR?: Prisma.expert_bookingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.expert_bookingScalarWhereWithAggregatesInput | Prisma.expert_bookingScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"expert_booking"> | string;
    slot_id?: Prisma.UuidWithAggregatesFilter<"expert_booking"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"expert_booking"> | string;
    baby_id?: Prisma.UuidNullableWithAggregatesFilter<"expert_booking"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"expert_booking"> | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"expert_booking"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"expert_booking"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"expert_booking"> | Date | string;
};
export type expert_bookingCreateInput = {
    id?: string;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    baby?: Prisma.BabyCreateNestedOneWithoutExpert_bookingInput;
    customer: Prisma.CustomerCreateNestedOneWithoutExpert_bookingInput;
    expert_slot: Prisma.expert_slotCreateNestedOneWithoutExpert_bookingInput;
};
export type expert_bookingUncheckedCreateInput = {
    id?: string;
    slot_id: string;
    customer_id: string;
    baby_id?: string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type expert_bookingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    baby?: Prisma.BabyUpdateOneWithoutExpert_bookingNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutExpert_bookingNestedInput;
    expert_slot?: Prisma.expert_slotUpdateOneRequiredWithoutExpert_bookingNestedInput;
};
export type expert_bookingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type expert_bookingCreateManyInput = {
    id?: string;
    slot_id: string;
    customer_id: string;
    baby_id?: string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type expert_bookingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type expert_bookingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Expert_bookingListRelationFilter = {
    every?: Prisma.expert_bookingWhereInput;
    some?: Prisma.expert_bookingWhereInput;
    none?: Prisma.expert_bookingWhereInput;
};
export type expert_bookingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type expert_bookingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slot_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type expert_bookingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slot_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type expert_bookingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slot_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type expert_bookingCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.expert_bookingCreateWithoutCustomerInput, Prisma.expert_bookingUncheckedCreateWithoutCustomerInput> | Prisma.expert_bookingCreateWithoutCustomerInput[] | Prisma.expert_bookingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.expert_bookingCreateOrConnectWithoutCustomerInput | Prisma.expert_bookingCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.expert_bookingCreateManyCustomerInputEnvelope;
    connect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
};
export type expert_bookingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.expert_bookingCreateWithoutCustomerInput, Prisma.expert_bookingUncheckedCreateWithoutCustomerInput> | Prisma.expert_bookingCreateWithoutCustomerInput[] | Prisma.expert_bookingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.expert_bookingCreateOrConnectWithoutCustomerInput | Prisma.expert_bookingCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.expert_bookingCreateManyCustomerInputEnvelope;
    connect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
};
export type expert_bookingUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.expert_bookingCreateWithoutCustomerInput, Prisma.expert_bookingUncheckedCreateWithoutCustomerInput> | Prisma.expert_bookingCreateWithoutCustomerInput[] | Prisma.expert_bookingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.expert_bookingCreateOrConnectWithoutCustomerInput | Prisma.expert_bookingCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.expert_bookingUpsertWithWhereUniqueWithoutCustomerInput | Prisma.expert_bookingUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.expert_bookingCreateManyCustomerInputEnvelope;
    set?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    disconnect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    delete?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    connect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    update?: Prisma.expert_bookingUpdateWithWhereUniqueWithoutCustomerInput | Prisma.expert_bookingUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.expert_bookingUpdateManyWithWhereWithoutCustomerInput | Prisma.expert_bookingUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.expert_bookingScalarWhereInput | Prisma.expert_bookingScalarWhereInput[];
};
export type expert_bookingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.expert_bookingCreateWithoutCustomerInput, Prisma.expert_bookingUncheckedCreateWithoutCustomerInput> | Prisma.expert_bookingCreateWithoutCustomerInput[] | Prisma.expert_bookingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.expert_bookingCreateOrConnectWithoutCustomerInput | Prisma.expert_bookingCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.expert_bookingUpsertWithWhereUniqueWithoutCustomerInput | Prisma.expert_bookingUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.expert_bookingCreateManyCustomerInputEnvelope;
    set?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    disconnect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    delete?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    connect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    update?: Prisma.expert_bookingUpdateWithWhereUniqueWithoutCustomerInput | Prisma.expert_bookingUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.expert_bookingUpdateManyWithWhereWithoutCustomerInput | Prisma.expert_bookingUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.expert_bookingScalarWhereInput | Prisma.expert_bookingScalarWhereInput[];
};
export type expert_bookingCreateNestedManyWithoutBabyInput = {
    create?: Prisma.XOR<Prisma.expert_bookingCreateWithoutBabyInput, Prisma.expert_bookingUncheckedCreateWithoutBabyInput> | Prisma.expert_bookingCreateWithoutBabyInput[] | Prisma.expert_bookingUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.expert_bookingCreateOrConnectWithoutBabyInput | Prisma.expert_bookingCreateOrConnectWithoutBabyInput[];
    createMany?: Prisma.expert_bookingCreateManyBabyInputEnvelope;
    connect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
};
export type expert_bookingUncheckedCreateNestedManyWithoutBabyInput = {
    create?: Prisma.XOR<Prisma.expert_bookingCreateWithoutBabyInput, Prisma.expert_bookingUncheckedCreateWithoutBabyInput> | Prisma.expert_bookingCreateWithoutBabyInput[] | Prisma.expert_bookingUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.expert_bookingCreateOrConnectWithoutBabyInput | Prisma.expert_bookingCreateOrConnectWithoutBabyInput[];
    createMany?: Prisma.expert_bookingCreateManyBabyInputEnvelope;
    connect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
};
export type expert_bookingUpdateManyWithoutBabyNestedInput = {
    create?: Prisma.XOR<Prisma.expert_bookingCreateWithoutBabyInput, Prisma.expert_bookingUncheckedCreateWithoutBabyInput> | Prisma.expert_bookingCreateWithoutBabyInput[] | Prisma.expert_bookingUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.expert_bookingCreateOrConnectWithoutBabyInput | Prisma.expert_bookingCreateOrConnectWithoutBabyInput[];
    upsert?: Prisma.expert_bookingUpsertWithWhereUniqueWithoutBabyInput | Prisma.expert_bookingUpsertWithWhereUniqueWithoutBabyInput[];
    createMany?: Prisma.expert_bookingCreateManyBabyInputEnvelope;
    set?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    disconnect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    delete?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    connect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    update?: Prisma.expert_bookingUpdateWithWhereUniqueWithoutBabyInput | Prisma.expert_bookingUpdateWithWhereUniqueWithoutBabyInput[];
    updateMany?: Prisma.expert_bookingUpdateManyWithWhereWithoutBabyInput | Prisma.expert_bookingUpdateManyWithWhereWithoutBabyInput[];
    deleteMany?: Prisma.expert_bookingScalarWhereInput | Prisma.expert_bookingScalarWhereInput[];
};
export type expert_bookingUncheckedUpdateManyWithoutBabyNestedInput = {
    create?: Prisma.XOR<Prisma.expert_bookingCreateWithoutBabyInput, Prisma.expert_bookingUncheckedCreateWithoutBabyInput> | Prisma.expert_bookingCreateWithoutBabyInput[] | Prisma.expert_bookingUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.expert_bookingCreateOrConnectWithoutBabyInput | Prisma.expert_bookingCreateOrConnectWithoutBabyInput[];
    upsert?: Prisma.expert_bookingUpsertWithWhereUniqueWithoutBabyInput | Prisma.expert_bookingUpsertWithWhereUniqueWithoutBabyInput[];
    createMany?: Prisma.expert_bookingCreateManyBabyInputEnvelope;
    set?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    disconnect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    delete?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    connect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    update?: Prisma.expert_bookingUpdateWithWhereUniqueWithoutBabyInput | Prisma.expert_bookingUpdateWithWhereUniqueWithoutBabyInput[];
    updateMany?: Prisma.expert_bookingUpdateManyWithWhereWithoutBabyInput | Prisma.expert_bookingUpdateManyWithWhereWithoutBabyInput[];
    deleteMany?: Prisma.expert_bookingScalarWhereInput | Prisma.expert_bookingScalarWhereInput[];
};
export type expert_bookingCreateNestedManyWithoutExpert_slotInput = {
    create?: Prisma.XOR<Prisma.expert_bookingCreateWithoutExpert_slotInput, Prisma.expert_bookingUncheckedCreateWithoutExpert_slotInput> | Prisma.expert_bookingCreateWithoutExpert_slotInput[] | Prisma.expert_bookingUncheckedCreateWithoutExpert_slotInput[];
    connectOrCreate?: Prisma.expert_bookingCreateOrConnectWithoutExpert_slotInput | Prisma.expert_bookingCreateOrConnectWithoutExpert_slotInput[];
    createMany?: Prisma.expert_bookingCreateManyExpert_slotInputEnvelope;
    connect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
};
export type expert_bookingUncheckedCreateNestedManyWithoutExpert_slotInput = {
    create?: Prisma.XOR<Prisma.expert_bookingCreateWithoutExpert_slotInput, Prisma.expert_bookingUncheckedCreateWithoutExpert_slotInput> | Prisma.expert_bookingCreateWithoutExpert_slotInput[] | Prisma.expert_bookingUncheckedCreateWithoutExpert_slotInput[];
    connectOrCreate?: Prisma.expert_bookingCreateOrConnectWithoutExpert_slotInput | Prisma.expert_bookingCreateOrConnectWithoutExpert_slotInput[];
    createMany?: Prisma.expert_bookingCreateManyExpert_slotInputEnvelope;
    connect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
};
export type expert_bookingUpdateManyWithoutExpert_slotNestedInput = {
    create?: Prisma.XOR<Prisma.expert_bookingCreateWithoutExpert_slotInput, Prisma.expert_bookingUncheckedCreateWithoutExpert_slotInput> | Prisma.expert_bookingCreateWithoutExpert_slotInput[] | Prisma.expert_bookingUncheckedCreateWithoutExpert_slotInput[];
    connectOrCreate?: Prisma.expert_bookingCreateOrConnectWithoutExpert_slotInput | Prisma.expert_bookingCreateOrConnectWithoutExpert_slotInput[];
    upsert?: Prisma.expert_bookingUpsertWithWhereUniqueWithoutExpert_slotInput | Prisma.expert_bookingUpsertWithWhereUniqueWithoutExpert_slotInput[];
    createMany?: Prisma.expert_bookingCreateManyExpert_slotInputEnvelope;
    set?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    disconnect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    delete?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    connect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    update?: Prisma.expert_bookingUpdateWithWhereUniqueWithoutExpert_slotInput | Prisma.expert_bookingUpdateWithWhereUniqueWithoutExpert_slotInput[];
    updateMany?: Prisma.expert_bookingUpdateManyWithWhereWithoutExpert_slotInput | Prisma.expert_bookingUpdateManyWithWhereWithoutExpert_slotInput[];
    deleteMany?: Prisma.expert_bookingScalarWhereInput | Prisma.expert_bookingScalarWhereInput[];
};
export type expert_bookingUncheckedUpdateManyWithoutExpert_slotNestedInput = {
    create?: Prisma.XOR<Prisma.expert_bookingCreateWithoutExpert_slotInput, Prisma.expert_bookingUncheckedCreateWithoutExpert_slotInput> | Prisma.expert_bookingCreateWithoutExpert_slotInput[] | Prisma.expert_bookingUncheckedCreateWithoutExpert_slotInput[];
    connectOrCreate?: Prisma.expert_bookingCreateOrConnectWithoutExpert_slotInput | Prisma.expert_bookingCreateOrConnectWithoutExpert_slotInput[];
    upsert?: Prisma.expert_bookingUpsertWithWhereUniqueWithoutExpert_slotInput | Prisma.expert_bookingUpsertWithWhereUniqueWithoutExpert_slotInput[];
    createMany?: Prisma.expert_bookingCreateManyExpert_slotInputEnvelope;
    set?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    disconnect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    delete?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    connect?: Prisma.expert_bookingWhereUniqueInput | Prisma.expert_bookingWhereUniqueInput[];
    update?: Prisma.expert_bookingUpdateWithWhereUniqueWithoutExpert_slotInput | Prisma.expert_bookingUpdateWithWhereUniqueWithoutExpert_slotInput[];
    updateMany?: Prisma.expert_bookingUpdateManyWithWhereWithoutExpert_slotInput | Prisma.expert_bookingUpdateManyWithWhereWithoutExpert_slotInput[];
    deleteMany?: Prisma.expert_bookingScalarWhereInput | Prisma.expert_bookingScalarWhereInput[];
};
export type expert_bookingCreateWithoutCustomerInput = {
    id?: string;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    baby?: Prisma.BabyCreateNestedOneWithoutExpert_bookingInput;
    expert_slot: Prisma.expert_slotCreateNestedOneWithoutExpert_bookingInput;
};
export type expert_bookingUncheckedCreateWithoutCustomerInput = {
    id?: string;
    slot_id: string;
    baby_id?: string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type expert_bookingCreateOrConnectWithoutCustomerInput = {
    where: Prisma.expert_bookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.expert_bookingCreateWithoutCustomerInput, Prisma.expert_bookingUncheckedCreateWithoutCustomerInput>;
};
export type expert_bookingCreateManyCustomerInputEnvelope = {
    data: Prisma.expert_bookingCreateManyCustomerInput | Prisma.expert_bookingCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type expert_bookingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.expert_bookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.expert_bookingUpdateWithoutCustomerInput, Prisma.expert_bookingUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.expert_bookingCreateWithoutCustomerInput, Prisma.expert_bookingUncheckedCreateWithoutCustomerInput>;
};
export type expert_bookingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.expert_bookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.expert_bookingUpdateWithoutCustomerInput, Prisma.expert_bookingUncheckedUpdateWithoutCustomerInput>;
};
export type expert_bookingUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.expert_bookingScalarWhereInput;
    data: Prisma.XOR<Prisma.expert_bookingUpdateManyMutationInput, Prisma.expert_bookingUncheckedUpdateManyWithoutCustomerInput>;
};
export type expert_bookingScalarWhereInput = {
    AND?: Prisma.expert_bookingScalarWhereInput | Prisma.expert_bookingScalarWhereInput[];
    OR?: Prisma.expert_bookingScalarWhereInput[];
    NOT?: Prisma.expert_bookingScalarWhereInput | Prisma.expert_bookingScalarWhereInput[];
    id?: Prisma.UuidFilter<"expert_booking"> | string;
    slot_id?: Prisma.UuidFilter<"expert_booking"> | string;
    customer_id?: Prisma.UuidFilter<"expert_booking"> | string;
    baby_id?: Prisma.UuidNullableFilter<"expert_booking"> | string | null;
    status?: Prisma.StringFilter<"expert_booking"> | string;
    notes?: Prisma.StringNullableFilter<"expert_booking"> | string | null;
    created_at?: Prisma.DateTimeFilter<"expert_booking"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"expert_booking"> | Date | string;
};
export type expert_bookingCreateWithoutBabyInput = {
    id?: string;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutExpert_bookingInput;
    expert_slot: Prisma.expert_slotCreateNestedOneWithoutExpert_bookingInput;
};
export type expert_bookingUncheckedCreateWithoutBabyInput = {
    id?: string;
    slot_id: string;
    customer_id: string;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type expert_bookingCreateOrConnectWithoutBabyInput = {
    where: Prisma.expert_bookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.expert_bookingCreateWithoutBabyInput, Prisma.expert_bookingUncheckedCreateWithoutBabyInput>;
};
export type expert_bookingCreateManyBabyInputEnvelope = {
    data: Prisma.expert_bookingCreateManyBabyInput | Prisma.expert_bookingCreateManyBabyInput[];
    skipDuplicates?: boolean;
};
export type expert_bookingUpsertWithWhereUniqueWithoutBabyInput = {
    where: Prisma.expert_bookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.expert_bookingUpdateWithoutBabyInput, Prisma.expert_bookingUncheckedUpdateWithoutBabyInput>;
    create: Prisma.XOR<Prisma.expert_bookingCreateWithoutBabyInput, Prisma.expert_bookingUncheckedCreateWithoutBabyInput>;
};
export type expert_bookingUpdateWithWhereUniqueWithoutBabyInput = {
    where: Prisma.expert_bookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.expert_bookingUpdateWithoutBabyInput, Prisma.expert_bookingUncheckedUpdateWithoutBabyInput>;
};
export type expert_bookingUpdateManyWithWhereWithoutBabyInput = {
    where: Prisma.expert_bookingScalarWhereInput;
    data: Prisma.XOR<Prisma.expert_bookingUpdateManyMutationInput, Prisma.expert_bookingUncheckedUpdateManyWithoutBabyInput>;
};
export type expert_bookingCreateWithoutExpert_slotInput = {
    id?: string;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    baby?: Prisma.BabyCreateNestedOneWithoutExpert_bookingInput;
    customer: Prisma.CustomerCreateNestedOneWithoutExpert_bookingInput;
};
export type expert_bookingUncheckedCreateWithoutExpert_slotInput = {
    id?: string;
    customer_id: string;
    baby_id?: string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type expert_bookingCreateOrConnectWithoutExpert_slotInput = {
    where: Prisma.expert_bookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.expert_bookingCreateWithoutExpert_slotInput, Prisma.expert_bookingUncheckedCreateWithoutExpert_slotInput>;
};
export type expert_bookingCreateManyExpert_slotInputEnvelope = {
    data: Prisma.expert_bookingCreateManyExpert_slotInput | Prisma.expert_bookingCreateManyExpert_slotInput[];
    skipDuplicates?: boolean;
};
export type expert_bookingUpsertWithWhereUniqueWithoutExpert_slotInput = {
    where: Prisma.expert_bookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.expert_bookingUpdateWithoutExpert_slotInput, Prisma.expert_bookingUncheckedUpdateWithoutExpert_slotInput>;
    create: Prisma.XOR<Prisma.expert_bookingCreateWithoutExpert_slotInput, Prisma.expert_bookingUncheckedCreateWithoutExpert_slotInput>;
};
export type expert_bookingUpdateWithWhereUniqueWithoutExpert_slotInput = {
    where: Prisma.expert_bookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.expert_bookingUpdateWithoutExpert_slotInput, Prisma.expert_bookingUncheckedUpdateWithoutExpert_slotInput>;
};
export type expert_bookingUpdateManyWithWhereWithoutExpert_slotInput = {
    where: Prisma.expert_bookingScalarWhereInput;
    data: Prisma.XOR<Prisma.expert_bookingUpdateManyMutationInput, Prisma.expert_bookingUncheckedUpdateManyWithoutExpert_slotInput>;
};
export type expert_bookingCreateManyCustomerInput = {
    id?: string;
    slot_id: string;
    baby_id?: string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type expert_bookingUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    baby?: Prisma.BabyUpdateOneWithoutExpert_bookingNestedInput;
    expert_slot?: Prisma.expert_slotUpdateOneRequiredWithoutExpert_bookingNestedInput;
};
export type expert_bookingUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type expert_bookingUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type expert_bookingCreateManyBabyInput = {
    id?: string;
    slot_id: string;
    customer_id: string;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type expert_bookingUpdateWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutExpert_bookingNestedInput;
    expert_slot?: Prisma.expert_slotUpdateOneRequiredWithoutExpert_bookingNestedInput;
};
export type expert_bookingUncheckedUpdateWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type expert_bookingUncheckedUpdateManyWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type expert_bookingCreateManyExpert_slotInput = {
    id?: string;
    customer_id: string;
    baby_id?: string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type expert_bookingUpdateWithoutExpert_slotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    baby?: Prisma.BabyUpdateOneWithoutExpert_bookingNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutExpert_bookingNestedInput;
};
export type expert_bookingUncheckedUpdateWithoutExpert_slotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type expert_bookingUncheckedUpdateManyWithoutExpert_slotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type expert_bookingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slot_id?: boolean;
    customer_id?: boolean;
    baby_id?: boolean;
    status?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    baby?: boolean | Prisma.expert_booking$babyArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    expert_slot?: boolean | Prisma.expert_slotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expert_booking"]>;
export type expert_bookingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slot_id?: boolean;
    customer_id?: boolean;
    baby_id?: boolean;
    status?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    baby?: boolean | Prisma.expert_booking$babyArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    expert_slot?: boolean | Prisma.expert_slotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expert_booking"]>;
export type expert_bookingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slot_id?: boolean;
    customer_id?: boolean;
    baby_id?: boolean;
    status?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    baby?: boolean | Prisma.expert_booking$babyArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    expert_slot?: boolean | Prisma.expert_slotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expert_booking"]>;
export type expert_bookingSelectScalar = {
    id?: boolean;
    slot_id?: boolean;
    customer_id?: boolean;
    baby_id?: boolean;
    status?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type expert_bookingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slot_id" | "customer_id" | "baby_id" | "status" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["expert_booking"]>;
export type expert_bookingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.expert_booking$babyArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    expert_slot?: boolean | Prisma.expert_slotDefaultArgs<ExtArgs>;
};
export type expert_bookingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.expert_booking$babyArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    expert_slot?: boolean | Prisma.expert_slotDefaultArgs<ExtArgs>;
};
export type expert_bookingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.expert_booking$babyArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    expert_slot?: boolean | Prisma.expert_slotDefaultArgs<ExtArgs>;
};
export type $expert_bookingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "expert_booking";
    objects: {
        baby: Prisma.$BabyPayload<ExtArgs> | null;
        customer: Prisma.$CustomerPayload<ExtArgs>;
        expert_slot: Prisma.$expert_slotPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        slot_id: string;
        customer_id: string;
        baby_id: string | null;
        status: string;
        notes: string | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["expert_booking"]>;
    composites: {};
};
export type expert_bookingGetPayload<S extends boolean | null | undefined | expert_bookingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$expert_bookingPayload, S>;
export type expert_bookingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<expert_bookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Expert_bookingCountAggregateInputType | true;
};
export interface expert_bookingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['expert_booking'];
        meta: {
            name: 'expert_booking';
        };
    };
    findUnique<T extends expert_bookingFindUniqueArgs>(args: Prisma.SelectSubset<T, expert_bookingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__expert_bookingClient<runtime.Types.Result.GetResult<Prisma.$expert_bookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends expert_bookingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, expert_bookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__expert_bookingClient<runtime.Types.Result.GetResult<Prisma.$expert_bookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends expert_bookingFindFirstArgs>(args?: Prisma.SelectSubset<T, expert_bookingFindFirstArgs<ExtArgs>>): Prisma.Prisma__expert_bookingClient<runtime.Types.Result.GetResult<Prisma.$expert_bookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends expert_bookingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, expert_bookingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__expert_bookingClient<runtime.Types.Result.GetResult<Prisma.$expert_bookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends expert_bookingFindManyArgs>(args?: Prisma.SelectSubset<T, expert_bookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$expert_bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends expert_bookingCreateArgs>(args: Prisma.SelectSubset<T, expert_bookingCreateArgs<ExtArgs>>): Prisma.Prisma__expert_bookingClient<runtime.Types.Result.GetResult<Prisma.$expert_bookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends expert_bookingCreateManyArgs>(args?: Prisma.SelectSubset<T, expert_bookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends expert_bookingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, expert_bookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$expert_bookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends expert_bookingDeleteArgs>(args: Prisma.SelectSubset<T, expert_bookingDeleteArgs<ExtArgs>>): Prisma.Prisma__expert_bookingClient<runtime.Types.Result.GetResult<Prisma.$expert_bookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends expert_bookingUpdateArgs>(args: Prisma.SelectSubset<T, expert_bookingUpdateArgs<ExtArgs>>): Prisma.Prisma__expert_bookingClient<runtime.Types.Result.GetResult<Prisma.$expert_bookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends expert_bookingDeleteManyArgs>(args?: Prisma.SelectSubset<T, expert_bookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends expert_bookingUpdateManyArgs>(args: Prisma.SelectSubset<T, expert_bookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends expert_bookingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, expert_bookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$expert_bookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends expert_bookingUpsertArgs>(args: Prisma.SelectSubset<T, expert_bookingUpsertArgs<ExtArgs>>): Prisma.Prisma__expert_bookingClient<runtime.Types.Result.GetResult<Prisma.$expert_bookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends expert_bookingCountArgs>(args?: Prisma.Subset<T, expert_bookingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Expert_bookingCountAggregateOutputType> : number>;
    aggregate<T extends Expert_bookingAggregateArgs>(args: Prisma.Subset<T, Expert_bookingAggregateArgs>): Prisma.PrismaPromise<GetExpert_bookingAggregateType<T>>;
    groupBy<T extends expert_bookingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: expert_bookingGroupByArgs['orderBy'];
    } : {
        orderBy?: expert_bookingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, expert_bookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpert_bookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: expert_bookingFieldRefs;
}
export interface Prisma__expert_bookingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    baby<T extends Prisma.expert_booking$babyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.expert_booking$babyArgs<ExtArgs>>): Prisma.Prisma__BabyClient<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    expert_slot<T extends Prisma.expert_slotDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.expert_slotDefaultArgs<ExtArgs>>): Prisma.Prisma__expert_slotClient<runtime.Types.Result.GetResult<Prisma.$expert_slotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface expert_bookingFieldRefs {
    readonly id: Prisma.FieldRef<"expert_booking", 'String'>;
    readonly slot_id: Prisma.FieldRef<"expert_booking", 'String'>;
    readonly customer_id: Prisma.FieldRef<"expert_booking", 'String'>;
    readonly baby_id: Prisma.FieldRef<"expert_booking", 'String'>;
    readonly status: Prisma.FieldRef<"expert_booking", 'String'>;
    readonly notes: Prisma.FieldRef<"expert_booking", 'String'>;
    readonly created_at: Prisma.FieldRef<"expert_booking", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"expert_booking", 'DateTime'>;
}
export type expert_bookingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_bookingSelect<ExtArgs> | null;
    omit?: Prisma.expert_bookingOmit<ExtArgs> | null;
    include?: Prisma.expert_bookingInclude<ExtArgs> | null;
    where: Prisma.expert_bookingWhereUniqueInput;
};
export type expert_bookingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_bookingSelect<ExtArgs> | null;
    omit?: Prisma.expert_bookingOmit<ExtArgs> | null;
    include?: Prisma.expert_bookingInclude<ExtArgs> | null;
    where: Prisma.expert_bookingWhereUniqueInput;
};
export type expert_bookingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_bookingSelect<ExtArgs> | null;
    omit?: Prisma.expert_bookingOmit<ExtArgs> | null;
    include?: Prisma.expert_bookingInclude<ExtArgs> | null;
    where?: Prisma.expert_bookingWhereInput;
    orderBy?: Prisma.expert_bookingOrderByWithRelationInput | Prisma.expert_bookingOrderByWithRelationInput[];
    cursor?: Prisma.expert_bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Expert_bookingScalarFieldEnum | Prisma.Expert_bookingScalarFieldEnum[];
};
export type expert_bookingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_bookingSelect<ExtArgs> | null;
    omit?: Prisma.expert_bookingOmit<ExtArgs> | null;
    include?: Prisma.expert_bookingInclude<ExtArgs> | null;
    where?: Prisma.expert_bookingWhereInput;
    orderBy?: Prisma.expert_bookingOrderByWithRelationInput | Prisma.expert_bookingOrderByWithRelationInput[];
    cursor?: Prisma.expert_bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Expert_bookingScalarFieldEnum | Prisma.Expert_bookingScalarFieldEnum[];
};
export type expert_bookingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_bookingSelect<ExtArgs> | null;
    omit?: Prisma.expert_bookingOmit<ExtArgs> | null;
    include?: Prisma.expert_bookingInclude<ExtArgs> | null;
    where?: Prisma.expert_bookingWhereInput;
    orderBy?: Prisma.expert_bookingOrderByWithRelationInput | Prisma.expert_bookingOrderByWithRelationInput[];
    cursor?: Prisma.expert_bookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Expert_bookingScalarFieldEnum | Prisma.Expert_bookingScalarFieldEnum[];
};
export type expert_bookingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_bookingSelect<ExtArgs> | null;
    omit?: Prisma.expert_bookingOmit<ExtArgs> | null;
    include?: Prisma.expert_bookingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.expert_bookingCreateInput, Prisma.expert_bookingUncheckedCreateInput>;
};
export type expert_bookingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.expert_bookingCreateManyInput | Prisma.expert_bookingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type expert_bookingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_bookingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.expert_bookingOmit<ExtArgs> | null;
    data: Prisma.expert_bookingCreateManyInput | Prisma.expert_bookingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.expert_bookingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type expert_bookingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_bookingSelect<ExtArgs> | null;
    omit?: Prisma.expert_bookingOmit<ExtArgs> | null;
    include?: Prisma.expert_bookingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.expert_bookingUpdateInput, Prisma.expert_bookingUncheckedUpdateInput>;
    where: Prisma.expert_bookingWhereUniqueInput;
};
export type expert_bookingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.expert_bookingUpdateManyMutationInput, Prisma.expert_bookingUncheckedUpdateManyInput>;
    where?: Prisma.expert_bookingWhereInput;
    limit?: number;
};
export type expert_bookingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_bookingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.expert_bookingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.expert_bookingUpdateManyMutationInput, Prisma.expert_bookingUncheckedUpdateManyInput>;
    where?: Prisma.expert_bookingWhereInput;
    limit?: number;
    include?: Prisma.expert_bookingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type expert_bookingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_bookingSelect<ExtArgs> | null;
    omit?: Prisma.expert_bookingOmit<ExtArgs> | null;
    include?: Prisma.expert_bookingInclude<ExtArgs> | null;
    where: Prisma.expert_bookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.expert_bookingCreateInput, Prisma.expert_bookingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.expert_bookingUpdateInput, Prisma.expert_bookingUncheckedUpdateInput>;
};
export type expert_bookingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_bookingSelect<ExtArgs> | null;
    omit?: Prisma.expert_bookingOmit<ExtArgs> | null;
    include?: Prisma.expert_bookingInclude<ExtArgs> | null;
    where: Prisma.expert_bookingWhereUniqueInput;
};
export type expert_bookingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.expert_bookingWhereInput;
    limit?: number;
};
export type expert_booking$babyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelect<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    include?: Prisma.BabyInclude<ExtArgs> | null;
    where?: Prisma.BabyWhereInput;
};
export type expert_bookingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_bookingSelect<ExtArgs> | null;
    omit?: Prisma.expert_bookingOmit<ExtArgs> | null;
    include?: Prisma.expert_bookingInclude<ExtArgs> | null;
};
