import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BabyModel = runtime.Types.Result.DefaultSelection<Prisma.$BabyPayload>;
export type AggregateBaby = {
    _count: BabyCountAggregateOutputType | null;
    _min: BabyMinAggregateOutputType | null;
    _max: BabyMaxAggregateOutputType | null;
};
export type BabyMinAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    name: string | null;
    gender: string | null;
    dateOfBirth: Date | null;
    dueDate: Date | null;
    isBorn: boolean | null;
    stageCode: string | null;
    feedingType: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BabyMaxAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    name: string | null;
    gender: string | null;
    dateOfBirth: Date | null;
    dueDate: Date | null;
    isBorn: boolean | null;
    stageCode: string | null;
    feedingType: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BabyCountAggregateOutputType = {
    id: number;
    customerId: number;
    name: number;
    gender: number;
    dateOfBirth: number;
    dueDate: number;
    isBorn: number;
    stageCode: number;
    feedingType: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BabyMinAggregateInputType = {
    id?: true;
    customerId?: true;
    name?: true;
    gender?: true;
    dateOfBirth?: true;
    dueDate?: true;
    isBorn?: true;
    stageCode?: true;
    feedingType?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BabyMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    name?: true;
    gender?: true;
    dateOfBirth?: true;
    dueDate?: true;
    isBorn?: true;
    stageCode?: true;
    feedingType?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BabyCountAggregateInputType = {
    id?: true;
    customerId?: true;
    name?: true;
    gender?: true;
    dateOfBirth?: true;
    dueDate?: true;
    isBorn?: true;
    stageCode?: true;
    feedingType?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BabyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BabyWhereInput;
    orderBy?: Prisma.BabyOrderByWithRelationInput | Prisma.BabyOrderByWithRelationInput[];
    cursor?: Prisma.BabyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BabyCountAggregateInputType;
    _min?: BabyMinAggregateInputType;
    _max?: BabyMaxAggregateInputType;
};
export type GetBabyAggregateType<T extends BabyAggregateArgs> = {
    [P in keyof T & keyof AggregateBaby]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBaby[P]> : Prisma.GetScalarType<T[P], AggregateBaby[P]>;
};
export type BabyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BabyWhereInput;
    orderBy?: Prisma.BabyOrderByWithAggregationInput | Prisma.BabyOrderByWithAggregationInput[];
    by: Prisma.BabyScalarFieldEnum[] | Prisma.BabyScalarFieldEnum;
    having?: Prisma.BabyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BabyCountAggregateInputType | true;
    _min?: BabyMinAggregateInputType;
    _max?: BabyMaxAggregateInputType;
};
export type BabyGroupByOutputType = {
    id: string;
    customerId: string;
    name: string | null;
    gender: string | null;
    dateOfBirth: Date | null;
    dueDate: Date | null;
    isBorn: boolean;
    stageCode: string | null;
    feedingType: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BabyCountAggregateOutputType | null;
    _min: BabyMinAggregateOutputType | null;
    _max: BabyMaxAggregateOutputType | null;
};
export type GetBabyGroupByPayload<T extends BabyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BabyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BabyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BabyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BabyGroupByOutputType[P]>;
}>>;
export type BabyWhereInput = {
    AND?: Prisma.BabyWhereInput | Prisma.BabyWhereInput[];
    OR?: Prisma.BabyWhereInput[];
    NOT?: Prisma.BabyWhereInput | Prisma.BabyWhereInput[];
    id?: Prisma.UuidFilter<"Baby"> | string;
    customerId?: Prisma.UuidFilter<"Baby"> | string;
    name?: Prisma.StringNullableFilter<"Baby"> | string | null;
    gender?: Prisma.StringNullableFilter<"Baby"> | string | null;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"Baby"> | Date | string | null;
    dueDate?: Prisma.DateTimeNullableFilter<"Baby"> | Date | string | null;
    isBorn?: Prisma.BoolFilter<"Baby"> | boolean;
    stageCode?: Prisma.StringNullableFilter<"Baby"> | string | null;
    feedingType?: Prisma.StringNullableFilter<"Baby"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Baby"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Baby"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    growthLogs?: Prisma.BabyGrowthLogListRelationFilter;
    stageHistory?: Prisma.BabyStageHistoryListRelationFilter;
    checklist_progress?: Prisma.Checklist_progressListRelationFilter;
    expert_booking?: Prisma.Expert_bookingListRelationFilter;
    milestone_progress?: Prisma.Milestone_progressListRelationFilter;
};
export type BabyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isBorn?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    feedingType?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    growthLogs?: Prisma.BabyGrowthLogOrderByRelationAggregateInput;
    stageHistory?: Prisma.BabyStageHistoryOrderByRelationAggregateInput;
    checklist_progress?: Prisma.checklist_progressOrderByRelationAggregateInput;
    expert_booking?: Prisma.expert_bookingOrderByRelationAggregateInput;
    milestone_progress?: Prisma.milestone_progressOrderByRelationAggregateInput;
};
export type BabyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BabyWhereInput | Prisma.BabyWhereInput[];
    OR?: Prisma.BabyWhereInput[];
    NOT?: Prisma.BabyWhereInput | Prisma.BabyWhereInput[];
    customerId?: Prisma.UuidFilter<"Baby"> | string;
    name?: Prisma.StringNullableFilter<"Baby"> | string | null;
    gender?: Prisma.StringNullableFilter<"Baby"> | string | null;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"Baby"> | Date | string | null;
    dueDate?: Prisma.DateTimeNullableFilter<"Baby"> | Date | string | null;
    isBorn?: Prisma.BoolFilter<"Baby"> | boolean;
    stageCode?: Prisma.StringNullableFilter<"Baby"> | string | null;
    feedingType?: Prisma.StringNullableFilter<"Baby"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Baby"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Baby"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    growthLogs?: Prisma.BabyGrowthLogListRelationFilter;
    stageHistory?: Prisma.BabyStageHistoryListRelationFilter;
    checklist_progress?: Prisma.Checklist_progressListRelationFilter;
    expert_booking?: Prisma.Expert_bookingListRelationFilter;
    milestone_progress?: Prisma.Milestone_progressListRelationFilter;
}, "id">;
export type BabyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    gender?: Prisma.SortOrderInput | Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isBorn?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    feedingType?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BabyCountOrderByAggregateInput;
    _max?: Prisma.BabyMaxOrderByAggregateInput;
    _min?: Prisma.BabyMinOrderByAggregateInput;
};
export type BabyScalarWhereWithAggregatesInput = {
    AND?: Prisma.BabyScalarWhereWithAggregatesInput | Prisma.BabyScalarWhereWithAggregatesInput[];
    OR?: Prisma.BabyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BabyScalarWhereWithAggregatesInput | Prisma.BabyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Baby"> | string;
    customerId?: Prisma.UuidWithAggregatesFilter<"Baby"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"Baby"> | string | null;
    gender?: Prisma.StringNullableWithAggregatesFilter<"Baby"> | string | null;
    dateOfBirth?: Prisma.DateTimeNullableWithAggregatesFilter<"Baby"> | Date | string | null;
    dueDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Baby"> | Date | string | null;
    isBorn?: Prisma.BoolWithAggregatesFilter<"Baby"> | boolean;
    stageCode?: Prisma.StringNullableWithAggregatesFilter<"Baby"> | string | null;
    feedingType?: Prisma.StringNullableWithAggregatesFilter<"Baby"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Baby"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Baby"> | Date | string;
};
export type BabyCreateInput = {
    id?: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutBabiesInput;
    growthLogs?: Prisma.BabyGrowthLogCreateNestedManyWithoutBabyInput;
    stageHistory?: Prisma.BabyStageHistoryCreateNestedManyWithoutBabyInput;
    checklist_progress?: Prisma.checklist_progressCreateNestedManyWithoutBabyInput;
    expert_booking?: Prisma.expert_bookingCreateNestedManyWithoutBabyInput;
    milestone_progress?: Prisma.milestone_progressCreateNestedManyWithoutBabyInput;
};
export type BabyUncheckedCreateInput = {
    id?: string;
    customerId: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    growthLogs?: Prisma.BabyGrowthLogUncheckedCreateNestedManyWithoutBabyInput;
    stageHistory?: Prisma.BabyStageHistoryUncheckedCreateNestedManyWithoutBabyInput;
    checklist_progress?: Prisma.checklist_progressUncheckedCreateNestedManyWithoutBabyInput;
    expert_booking?: Prisma.expert_bookingUncheckedCreateNestedManyWithoutBabyInput;
    milestone_progress?: Prisma.milestone_progressUncheckedCreateNestedManyWithoutBabyInput;
};
export type BabyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutBabiesNestedInput;
    growthLogs?: Prisma.BabyGrowthLogUpdateManyWithoutBabyNestedInput;
    stageHistory?: Prisma.BabyStageHistoryUpdateManyWithoutBabyNestedInput;
    checklist_progress?: Prisma.checklist_progressUpdateManyWithoutBabyNestedInput;
    expert_booking?: Prisma.expert_bookingUpdateManyWithoutBabyNestedInput;
    milestone_progress?: Prisma.milestone_progressUpdateManyWithoutBabyNestedInput;
};
export type BabyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    growthLogs?: Prisma.BabyGrowthLogUncheckedUpdateManyWithoutBabyNestedInput;
    stageHistory?: Prisma.BabyStageHistoryUncheckedUpdateManyWithoutBabyNestedInput;
    checklist_progress?: Prisma.checklist_progressUncheckedUpdateManyWithoutBabyNestedInput;
    expert_booking?: Prisma.expert_bookingUncheckedUpdateManyWithoutBabyNestedInput;
    milestone_progress?: Prisma.milestone_progressUncheckedUpdateManyWithoutBabyNestedInput;
};
export type BabyCreateManyInput = {
    id?: string;
    customerId: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BabyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyListRelationFilter = {
    every?: Prisma.BabyWhereInput;
    some?: Prisma.BabyWhereInput;
    none?: Prisma.BabyWhereInput;
};
export type BabyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BabyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    isBorn?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrder;
    feedingType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BabyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    isBorn?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrder;
    feedingType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BabyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    isBorn?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrder;
    feedingType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BabyScalarRelationFilter = {
    is?: Prisma.BabyWhereInput;
    isNot?: Prisma.BabyWhereInput;
};
export type BabyNullableScalarRelationFilter = {
    is?: Prisma.BabyWhereInput | null;
    isNot?: Prisma.BabyWhereInput | null;
};
export type BabyCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.BabyCreateWithoutCustomerInput, Prisma.BabyUncheckedCreateWithoutCustomerInput> | Prisma.BabyCreateWithoutCustomerInput[] | Prisma.BabyUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.BabyCreateOrConnectWithoutCustomerInput | Prisma.BabyCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.BabyCreateManyCustomerInputEnvelope;
    connect?: Prisma.BabyWhereUniqueInput | Prisma.BabyWhereUniqueInput[];
};
export type BabyUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.BabyCreateWithoutCustomerInput, Prisma.BabyUncheckedCreateWithoutCustomerInput> | Prisma.BabyCreateWithoutCustomerInput[] | Prisma.BabyUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.BabyCreateOrConnectWithoutCustomerInput | Prisma.BabyCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.BabyCreateManyCustomerInputEnvelope;
    connect?: Prisma.BabyWhereUniqueInput | Prisma.BabyWhereUniqueInput[];
};
export type BabyUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.BabyCreateWithoutCustomerInput, Prisma.BabyUncheckedCreateWithoutCustomerInput> | Prisma.BabyCreateWithoutCustomerInput[] | Prisma.BabyUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.BabyCreateOrConnectWithoutCustomerInput | Prisma.BabyCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.BabyUpsertWithWhereUniqueWithoutCustomerInput | Prisma.BabyUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.BabyCreateManyCustomerInputEnvelope;
    set?: Prisma.BabyWhereUniqueInput | Prisma.BabyWhereUniqueInput[];
    disconnect?: Prisma.BabyWhereUniqueInput | Prisma.BabyWhereUniqueInput[];
    delete?: Prisma.BabyWhereUniqueInput | Prisma.BabyWhereUniqueInput[];
    connect?: Prisma.BabyWhereUniqueInput | Prisma.BabyWhereUniqueInput[];
    update?: Prisma.BabyUpdateWithWhereUniqueWithoutCustomerInput | Prisma.BabyUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.BabyUpdateManyWithWhereWithoutCustomerInput | Prisma.BabyUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.BabyScalarWhereInput | Prisma.BabyScalarWhereInput[];
};
export type BabyUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.BabyCreateWithoutCustomerInput, Prisma.BabyUncheckedCreateWithoutCustomerInput> | Prisma.BabyCreateWithoutCustomerInput[] | Prisma.BabyUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.BabyCreateOrConnectWithoutCustomerInput | Prisma.BabyCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.BabyUpsertWithWhereUniqueWithoutCustomerInput | Prisma.BabyUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.BabyCreateManyCustomerInputEnvelope;
    set?: Prisma.BabyWhereUniqueInput | Prisma.BabyWhereUniqueInput[];
    disconnect?: Prisma.BabyWhereUniqueInput | Prisma.BabyWhereUniqueInput[];
    delete?: Prisma.BabyWhereUniqueInput | Prisma.BabyWhereUniqueInput[];
    connect?: Prisma.BabyWhereUniqueInput | Prisma.BabyWhereUniqueInput[];
    update?: Prisma.BabyUpdateWithWhereUniqueWithoutCustomerInput | Prisma.BabyUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.BabyUpdateManyWithWhereWithoutCustomerInput | Prisma.BabyUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.BabyScalarWhereInput | Prisma.BabyScalarWhereInput[];
};
export type BabyCreateNestedOneWithoutGrowthLogsInput = {
    create?: Prisma.XOR<Prisma.BabyCreateWithoutGrowthLogsInput, Prisma.BabyUncheckedCreateWithoutGrowthLogsInput>;
    connectOrCreate?: Prisma.BabyCreateOrConnectWithoutGrowthLogsInput;
    connect?: Prisma.BabyWhereUniqueInput;
};
export type BabyUpdateOneRequiredWithoutGrowthLogsNestedInput = {
    create?: Prisma.XOR<Prisma.BabyCreateWithoutGrowthLogsInput, Prisma.BabyUncheckedCreateWithoutGrowthLogsInput>;
    connectOrCreate?: Prisma.BabyCreateOrConnectWithoutGrowthLogsInput;
    upsert?: Prisma.BabyUpsertWithoutGrowthLogsInput;
    connect?: Prisma.BabyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BabyUpdateToOneWithWhereWithoutGrowthLogsInput, Prisma.BabyUpdateWithoutGrowthLogsInput>, Prisma.BabyUncheckedUpdateWithoutGrowthLogsInput>;
};
export type BabyCreateNestedOneWithoutStageHistoryInput = {
    create?: Prisma.XOR<Prisma.BabyCreateWithoutStageHistoryInput, Prisma.BabyUncheckedCreateWithoutStageHistoryInput>;
    connectOrCreate?: Prisma.BabyCreateOrConnectWithoutStageHistoryInput;
    connect?: Prisma.BabyWhereUniqueInput;
};
export type BabyUpdateOneRequiredWithoutStageHistoryNestedInput = {
    create?: Prisma.XOR<Prisma.BabyCreateWithoutStageHistoryInput, Prisma.BabyUncheckedCreateWithoutStageHistoryInput>;
    connectOrCreate?: Prisma.BabyCreateOrConnectWithoutStageHistoryInput;
    upsert?: Prisma.BabyUpsertWithoutStageHistoryInput;
    connect?: Prisma.BabyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BabyUpdateToOneWithWhereWithoutStageHistoryInput, Prisma.BabyUpdateWithoutStageHistoryInput>, Prisma.BabyUncheckedUpdateWithoutStageHistoryInput>;
};
export type BabyCreateNestedOneWithoutChecklist_progressInput = {
    create?: Prisma.XOR<Prisma.BabyCreateWithoutChecklist_progressInput, Prisma.BabyUncheckedCreateWithoutChecklist_progressInput>;
    connectOrCreate?: Prisma.BabyCreateOrConnectWithoutChecklist_progressInput;
    connect?: Prisma.BabyWhereUniqueInput;
};
export type BabyUpdateOneWithoutChecklist_progressNestedInput = {
    create?: Prisma.XOR<Prisma.BabyCreateWithoutChecklist_progressInput, Prisma.BabyUncheckedCreateWithoutChecklist_progressInput>;
    connectOrCreate?: Prisma.BabyCreateOrConnectWithoutChecklist_progressInput;
    upsert?: Prisma.BabyUpsertWithoutChecklist_progressInput;
    disconnect?: Prisma.BabyWhereInput | boolean;
    delete?: Prisma.BabyWhereInput | boolean;
    connect?: Prisma.BabyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BabyUpdateToOneWithWhereWithoutChecklist_progressInput, Prisma.BabyUpdateWithoutChecklist_progressInput>, Prisma.BabyUncheckedUpdateWithoutChecklist_progressInput>;
};
export type BabyCreateNestedOneWithoutExpert_bookingInput = {
    create?: Prisma.XOR<Prisma.BabyCreateWithoutExpert_bookingInput, Prisma.BabyUncheckedCreateWithoutExpert_bookingInput>;
    connectOrCreate?: Prisma.BabyCreateOrConnectWithoutExpert_bookingInput;
    connect?: Prisma.BabyWhereUniqueInput;
};
export type BabyUpdateOneWithoutExpert_bookingNestedInput = {
    create?: Prisma.XOR<Prisma.BabyCreateWithoutExpert_bookingInput, Prisma.BabyUncheckedCreateWithoutExpert_bookingInput>;
    connectOrCreate?: Prisma.BabyCreateOrConnectWithoutExpert_bookingInput;
    upsert?: Prisma.BabyUpsertWithoutExpert_bookingInput;
    disconnect?: Prisma.BabyWhereInput | boolean;
    delete?: Prisma.BabyWhereInput | boolean;
    connect?: Prisma.BabyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BabyUpdateToOneWithWhereWithoutExpert_bookingInput, Prisma.BabyUpdateWithoutExpert_bookingInput>, Prisma.BabyUncheckedUpdateWithoutExpert_bookingInput>;
};
export type BabyCreateNestedOneWithoutMilestone_progressInput = {
    create?: Prisma.XOR<Prisma.BabyCreateWithoutMilestone_progressInput, Prisma.BabyUncheckedCreateWithoutMilestone_progressInput>;
    connectOrCreate?: Prisma.BabyCreateOrConnectWithoutMilestone_progressInput;
    connect?: Prisma.BabyWhereUniqueInput;
};
export type BabyUpdateOneWithoutMilestone_progressNestedInput = {
    create?: Prisma.XOR<Prisma.BabyCreateWithoutMilestone_progressInput, Prisma.BabyUncheckedCreateWithoutMilestone_progressInput>;
    connectOrCreate?: Prisma.BabyCreateOrConnectWithoutMilestone_progressInput;
    upsert?: Prisma.BabyUpsertWithoutMilestone_progressInput;
    disconnect?: Prisma.BabyWhereInput | boolean;
    delete?: Prisma.BabyWhereInput | boolean;
    connect?: Prisma.BabyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BabyUpdateToOneWithWhereWithoutMilestone_progressInput, Prisma.BabyUpdateWithoutMilestone_progressInput>, Prisma.BabyUncheckedUpdateWithoutMilestone_progressInput>;
};
export type BabyCreateWithoutCustomerInput = {
    id?: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    growthLogs?: Prisma.BabyGrowthLogCreateNestedManyWithoutBabyInput;
    stageHistory?: Prisma.BabyStageHistoryCreateNestedManyWithoutBabyInput;
    checklist_progress?: Prisma.checklist_progressCreateNestedManyWithoutBabyInput;
    expert_booking?: Prisma.expert_bookingCreateNestedManyWithoutBabyInput;
    milestone_progress?: Prisma.milestone_progressCreateNestedManyWithoutBabyInput;
};
export type BabyUncheckedCreateWithoutCustomerInput = {
    id?: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    growthLogs?: Prisma.BabyGrowthLogUncheckedCreateNestedManyWithoutBabyInput;
    stageHistory?: Prisma.BabyStageHistoryUncheckedCreateNestedManyWithoutBabyInput;
    checklist_progress?: Prisma.checklist_progressUncheckedCreateNestedManyWithoutBabyInput;
    expert_booking?: Prisma.expert_bookingUncheckedCreateNestedManyWithoutBabyInput;
    milestone_progress?: Prisma.milestone_progressUncheckedCreateNestedManyWithoutBabyInput;
};
export type BabyCreateOrConnectWithoutCustomerInput = {
    where: Prisma.BabyWhereUniqueInput;
    create: Prisma.XOR<Prisma.BabyCreateWithoutCustomerInput, Prisma.BabyUncheckedCreateWithoutCustomerInput>;
};
export type BabyCreateManyCustomerInputEnvelope = {
    data: Prisma.BabyCreateManyCustomerInput | Prisma.BabyCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type BabyUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.BabyWhereUniqueInput;
    update: Prisma.XOR<Prisma.BabyUpdateWithoutCustomerInput, Prisma.BabyUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.BabyCreateWithoutCustomerInput, Prisma.BabyUncheckedCreateWithoutCustomerInput>;
};
export type BabyUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.BabyWhereUniqueInput;
    data: Prisma.XOR<Prisma.BabyUpdateWithoutCustomerInput, Prisma.BabyUncheckedUpdateWithoutCustomerInput>;
};
export type BabyUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.BabyScalarWhereInput;
    data: Prisma.XOR<Prisma.BabyUpdateManyMutationInput, Prisma.BabyUncheckedUpdateManyWithoutCustomerInput>;
};
export type BabyScalarWhereInput = {
    AND?: Prisma.BabyScalarWhereInput | Prisma.BabyScalarWhereInput[];
    OR?: Prisma.BabyScalarWhereInput[];
    NOT?: Prisma.BabyScalarWhereInput | Prisma.BabyScalarWhereInput[];
    id?: Prisma.UuidFilter<"Baby"> | string;
    customerId?: Prisma.UuidFilter<"Baby"> | string;
    name?: Prisma.StringNullableFilter<"Baby"> | string | null;
    gender?: Prisma.StringNullableFilter<"Baby"> | string | null;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"Baby"> | Date | string | null;
    dueDate?: Prisma.DateTimeNullableFilter<"Baby"> | Date | string | null;
    isBorn?: Prisma.BoolFilter<"Baby"> | boolean;
    stageCode?: Prisma.StringNullableFilter<"Baby"> | string | null;
    feedingType?: Prisma.StringNullableFilter<"Baby"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Baby"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Baby"> | Date | string;
};
export type BabyCreateWithoutGrowthLogsInput = {
    id?: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutBabiesInput;
    stageHistory?: Prisma.BabyStageHistoryCreateNestedManyWithoutBabyInput;
    checklist_progress?: Prisma.checklist_progressCreateNestedManyWithoutBabyInput;
    expert_booking?: Prisma.expert_bookingCreateNestedManyWithoutBabyInput;
    milestone_progress?: Prisma.milestone_progressCreateNestedManyWithoutBabyInput;
};
export type BabyUncheckedCreateWithoutGrowthLogsInput = {
    id?: string;
    customerId: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stageHistory?: Prisma.BabyStageHistoryUncheckedCreateNestedManyWithoutBabyInput;
    checklist_progress?: Prisma.checklist_progressUncheckedCreateNestedManyWithoutBabyInput;
    expert_booking?: Prisma.expert_bookingUncheckedCreateNestedManyWithoutBabyInput;
    milestone_progress?: Prisma.milestone_progressUncheckedCreateNestedManyWithoutBabyInput;
};
export type BabyCreateOrConnectWithoutGrowthLogsInput = {
    where: Prisma.BabyWhereUniqueInput;
    create: Prisma.XOR<Prisma.BabyCreateWithoutGrowthLogsInput, Prisma.BabyUncheckedCreateWithoutGrowthLogsInput>;
};
export type BabyUpsertWithoutGrowthLogsInput = {
    update: Prisma.XOR<Prisma.BabyUpdateWithoutGrowthLogsInput, Prisma.BabyUncheckedUpdateWithoutGrowthLogsInput>;
    create: Prisma.XOR<Prisma.BabyCreateWithoutGrowthLogsInput, Prisma.BabyUncheckedCreateWithoutGrowthLogsInput>;
    where?: Prisma.BabyWhereInput;
};
export type BabyUpdateToOneWithWhereWithoutGrowthLogsInput = {
    where?: Prisma.BabyWhereInput;
    data: Prisma.XOR<Prisma.BabyUpdateWithoutGrowthLogsInput, Prisma.BabyUncheckedUpdateWithoutGrowthLogsInput>;
};
export type BabyUpdateWithoutGrowthLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutBabiesNestedInput;
    stageHistory?: Prisma.BabyStageHistoryUpdateManyWithoutBabyNestedInput;
    checklist_progress?: Prisma.checklist_progressUpdateManyWithoutBabyNestedInput;
    expert_booking?: Prisma.expert_bookingUpdateManyWithoutBabyNestedInput;
    milestone_progress?: Prisma.milestone_progressUpdateManyWithoutBabyNestedInput;
};
export type BabyUncheckedUpdateWithoutGrowthLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stageHistory?: Prisma.BabyStageHistoryUncheckedUpdateManyWithoutBabyNestedInput;
    checklist_progress?: Prisma.checklist_progressUncheckedUpdateManyWithoutBabyNestedInput;
    expert_booking?: Prisma.expert_bookingUncheckedUpdateManyWithoutBabyNestedInput;
    milestone_progress?: Prisma.milestone_progressUncheckedUpdateManyWithoutBabyNestedInput;
};
export type BabyCreateWithoutStageHistoryInput = {
    id?: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutBabiesInput;
    growthLogs?: Prisma.BabyGrowthLogCreateNestedManyWithoutBabyInput;
    checklist_progress?: Prisma.checklist_progressCreateNestedManyWithoutBabyInput;
    expert_booking?: Prisma.expert_bookingCreateNestedManyWithoutBabyInput;
    milestone_progress?: Prisma.milestone_progressCreateNestedManyWithoutBabyInput;
};
export type BabyUncheckedCreateWithoutStageHistoryInput = {
    id?: string;
    customerId: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    growthLogs?: Prisma.BabyGrowthLogUncheckedCreateNestedManyWithoutBabyInput;
    checklist_progress?: Prisma.checklist_progressUncheckedCreateNestedManyWithoutBabyInput;
    expert_booking?: Prisma.expert_bookingUncheckedCreateNestedManyWithoutBabyInput;
    milestone_progress?: Prisma.milestone_progressUncheckedCreateNestedManyWithoutBabyInput;
};
export type BabyCreateOrConnectWithoutStageHistoryInput = {
    where: Prisma.BabyWhereUniqueInput;
    create: Prisma.XOR<Prisma.BabyCreateWithoutStageHistoryInput, Prisma.BabyUncheckedCreateWithoutStageHistoryInput>;
};
export type BabyUpsertWithoutStageHistoryInput = {
    update: Prisma.XOR<Prisma.BabyUpdateWithoutStageHistoryInput, Prisma.BabyUncheckedUpdateWithoutStageHistoryInput>;
    create: Prisma.XOR<Prisma.BabyCreateWithoutStageHistoryInput, Prisma.BabyUncheckedCreateWithoutStageHistoryInput>;
    where?: Prisma.BabyWhereInput;
};
export type BabyUpdateToOneWithWhereWithoutStageHistoryInput = {
    where?: Prisma.BabyWhereInput;
    data: Prisma.XOR<Prisma.BabyUpdateWithoutStageHistoryInput, Prisma.BabyUncheckedUpdateWithoutStageHistoryInput>;
};
export type BabyUpdateWithoutStageHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutBabiesNestedInput;
    growthLogs?: Prisma.BabyGrowthLogUpdateManyWithoutBabyNestedInput;
    checklist_progress?: Prisma.checklist_progressUpdateManyWithoutBabyNestedInput;
    expert_booking?: Prisma.expert_bookingUpdateManyWithoutBabyNestedInput;
    milestone_progress?: Prisma.milestone_progressUpdateManyWithoutBabyNestedInput;
};
export type BabyUncheckedUpdateWithoutStageHistoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    growthLogs?: Prisma.BabyGrowthLogUncheckedUpdateManyWithoutBabyNestedInput;
    checklist_progress?: Prisma.checklist_progressUncheckedUpdateManyWithoutBabyNestedInput;
    expert_booking?: Prisma.expert_bookingUncheckedUpdateManyWithoutBabyNestedInput;
    milestone_progress?: Prisma.milestone_progressUncheckedUpdateManyWithoutBabyNestedInput;
};
export type BabyCreateWithoutChecklist_progressInput = {
    id?: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutBabiesInput;
    growthLogs?: Prisma.BabyGrowthLogCreateNestedManyWithoutBabyInput;
    stageHistory?: Prisma.BabyStageHistoryCreateNestedManyWithoutBabyInput;
    expert_booking?: Prisma.expert_bookingCreateNestedManyWithoutBabyInput;
    milestone_progress?: Prisma.milestone_progressCreateNestedManyWithoutBabyInput;
};
export type BabyUncheckedCreateWithoutChecklist_progressInput = {
    id?: string;
    customerId: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    growthLogs?: Prisma.BabyGrowthLogUncheckedCreateNestedManyWithoutBabyInput;
    stageHistory?: Prisma.BabyStageHistoryUncheckedCreateNestedManyWithoutBabyInput;
    expert_booking?: Prisma.expert_bookingUncheckedCreateNestedManyWithoutBabyInput;
    milestone_progress?: Prisma.milestone_progressUncheckedCreateNestedManyWithoutBabyInput;
};
export type BabyCreateOrConnectWithoutChecklist_progressInput = {
    where: Prisma.BabyWhereUniqueInput;
    create: Prisma.XOR<Prisma.BabyCreateWithoutChecklist_progressInput, Prisma.BabyUncheckedCreateWithoutChecklist_progressInput>;
};
export type BabyUpsertWithoutChecklist_progressInput = {
    update: Prisma.XOR<Prisma.BabyUpdateWithoutChecklist_progressInput, Prisma.BabyUncheckedUpdateWithoutChecklist_progressInput>;
    create: Prisma.XOR<Prisma.BabyCreateWithoutChecklist_progressInput, Prisma.BabyUncheckedCreateWithoutChecklist_progressInput>;
    where?: Prisma.BabyWhereInput;
};
export type BabyUpdateToOneWithWhereWithoutChecklist_progressInput = {
    where?: Prisma.BabyWhereInput;
    data: Prisma.XOR<Prisma.BabyUpdateWithoutChecklist_progressInput, Prisma.BabyUncheckedUpdateWithoutChecklist_progressInput>;
};
export type BabyUpdateWithoutChecklist_progressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutBabiesNestedInput;
    growthLogs?: Prisma.BabyGrowthLogUpdateManyWithoutBabyNestedInput;
    stageHistory?: Prisma.BabyStageHistoryUpdateManyWithoutBabyNestedInput;
    expert_booking?: Prisma.expert_bookingUpdateManyWithoutBabyNestedInput;
    milestone_progress?: Prisma.milestone_progressUpdateManyWithoutBabyNestedInput;
};
export type BabyUncheckedUpdateWithoutChecklist_progressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    growthLogs?: Prisma.BabyGrowthLogUncheckedUpdateManyWithoutBabyNestedInput;
    stageHistory?: Prisma.BabyStageHistoryUncheckedUpdateManyWithoutBabyNestedInput;
    expert_booking?: Prisma.expert_bookingUncheckedUpdateManyWithoutBabyNestedInput;
    milestone_progress?: Prisma.milestone_progressUncheckedUpdateManyWithoutBabyNestedInput;
};
export type BabyCreateWithoutExpert_bookingInput = {
    id?: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutBabiesInput;
    growthLogs?: Prisma.BabyGrowthLogCreateNestedManyWithoutBabyInput;
    stageHistory?: Prisma.BabyStageHistoryCreateNestedManyWithoutBabyInput;
    checklist_progress?: Prisma.checklist_progressCreateNestedManyWithoutBabyInput;
    milestone_progress?: Prisma.milestone_progressCreateNestedManyWithoutBabyInput;
};
export type BabyUncheckedCreateWithoutExpert_bookingInput = {
    id?: string;
    customerId: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    growthLogs?: Prisma.BabyGrowthLogUncheckedCreateNestedManyWithoutBabyInput;
    stageHistory?: Prisma.BabyStageHistoryUncheckedCreateNestedManyWithoutBabyInput;
    checklist_progress?: Prisma.checklist_progressUncheckedCreateNestedManyWithoutBabyInput;
    milestone_progress?: Prisma.milestone_progressUncheckedCreateNestedManyWithoutBabyInput;
};
export type BabyCreateOrConnectWithoutExpert_bookingInput = {
    where: Prisma.BabyWhereUniqueInput;
    create: Prisma.XOR<Prisma.BabyCreateWithoutExpert_bookingInput, Prisma.BabyUncheckedCreateWithoutExpert_bookingInput>;
};
export type BabyUpsertWithoutExpert_bookingInput = {
    update: Prisma.XOR<Prisma.BabyUpdateWithoutExpert_bookingInput, Prisma.BabyUncheckedUpdateWithoutExpert_bookingInput>;
    create: Prisma.XOR<Prisma.BabyCreateWithoutExpert_bookingInput, Prisma.BabyUncheckedCreateWithoutExpert_bookingInput>;
    where?: Prisma.BabyWhereInput;
};
export type BabyUpdateToOneWithWhereWithoutExpert_bookingInput = {
    where?: Prisma.BabyWhereInput;
    data: Prisma.XOR<Prisma.BabyUpdateWithoutExpert_bookingInput, Prisma.BabyUncheckedUpdateWithoutExpert_bookingInput>;
};
export type BabyUpdateWithoutExpert_bookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutBabiesNestedInput;
    growthLogs?: Prisma.BabyGrowthLogUpdateManyWithoutBabyNestedInput;
    stageHistory?: Prisma.BabyStageHistoryUpdateManyWithoutBabyNestedInput;
    checklist_progress?: Prisma.checklist_progressUpdateManyWithoutBabyNestedInput;
    milestone_progress?: Prisma.milestone_progressUpdateManyWithoutBabyNestedInput;
};
export type BabyUncheckedUpdateWithoutExpert_bookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    growthLogs?: Prisma.BabyGrowthLogUncheckedUpdateManyWithoutBabyNestedInput;
    stageHistory?: Prisma.BabyStageHistoryUncheckedUpdateManyWithoutBabyNestedInput;
    checklist_progress?: Prisma.checklist_progressUncheckedUpdateManyWithoutBabyNestedInput;
    milestone_progress?: Prisma.milestone_progressUncheckedUpdateManyWithoutBabyNestedInput;
};
export type BabyCreateWithoutMilestone_progressInput = {
    id?: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutBabiesInput;
    growthLogs?: Prisma.BabyGrowthLogCreateNestedManyWithoutBabyInput;
    stageHistory?: Prisma.BabyStageHistoryCreateNestedManyWithoutBabyInput;
    checklist_progress?: Prisma.checklist_progressCreateNestedManyWithoutBabyInput;
    expert_booking?: Prisma.expert_bookingCreateNestedManyWithoutBabyInput;
};
export type BabyUncheckedCreateWithoutMilestone_progressInput = {
    id?: string;
    customerId: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    growthLogs?: Prisma.BabyGrowthLogUncheckedCreateNestedManyWithoutBabyInput;
    stageHistory?: Prisma.BabyStageHistoryUncheckedCreateNestedManyWithoutBabyInput;
    checklist_progress?: Prisma.checklist_progressUncheckedCreateNestedManyWithoutBabyInput;
    expert_booking?: Prisma.expert_bookingUncheckedCreateNestedManyWithoutBabyInput;
};
export type BabyCreateOrConnectWithoutMilestone_progressInput = {
    where: Prisma.BabyWhereUniqueInput;
    create: Prisma.XOR<Prisma.BabyCreateWithoutMilestone_progressInput, Prisma.BabyUncheckedCreateWithoutMilestone_progressInput>;
};
export type BabyUpsertWithoutMilestone_progressInput = {
    update: Prisma.XOR<Prisma.BabyUpdateWithoutMilestone_progressInput, Prisma.BabyUncheckedUpdateWithoutMilestone_progressInput>;
    create: Prisma.XOR<Prisma.BabyCreateWithoutMilestone_progressInput, Prisma.BabyUncheckedCreateWithoutMilestone_progressInput>;
    where?: Prisma.BabyWhereInput;
};
export type BabyUpdateToOneWithWhereWithoutMilestone_progressInput = {
    where?: Prisma.BabyWhereInput;
    data: Prisma.XOR<Prisma.BabyUpdateWithoutMilestone_progressInput, Prisma.BabyUncheckedUpdateWithoutMilestone_progressInput>;
};
export type BabyUpdateWithoutMilestone_progressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutBabiesNestedInput;
    growthLogs?: Prisma.BabyGrowthLogUpdateManyWithoutBabyNestedInput;
    stageHistory?: Prisma.BabyStageHistoryUpdateManyWithoutBabyNestedInput;
    checklist_progress?: Prisma.checklist_progressUpdateManyWithoutBabyNestedInput;
    expert_booking?: Prisma.expert_bookingUpdateManyWithoutBabyNestedInput;
};
export type BabyUncheckedUpdateWithoutMilestone_progressInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    growthLogs?: Prisma.BabyGrowthLogUncheckedUpdateManyWithoutBabyNestedInput;
    stageHistory?: Prisma.BabyStageHistoryUncheckedUpdateManyWithoutBabyNestedInput;
    checklist_progress?: Prisma.checklist_progressUncheckedUpdateManyWithoutBabyNestedInput;
    expert_booking?: Prisma.expert_bookingUncheckedUpdateManyWithoutBabyNestedInput;
};
export type BabyCreateManyCustomerInput = {
    id?: string;
    name?: string | null;
    gender?: string | null;
    dateOfBirth?: Date | string | null;
    dueDate?: Date | string | null;
    isBorn?: boolean;
    stageCode?: string | null;
    feedingType?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BabyUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    growthLogs?: Prisma.BabyGrowthLogUpdateManyWithoutBabyNestedInput;
    stageHistory?: Prisma.BabyStageHistoryUpdateManyWithoutBabyNestedInput;
    checklist_progress?: Prisma.checklist_progressUpdateManyWithoutBabyNestedInput;
    expert_booking?: Prisma.expert_bookingUpdateManyWithoutBabyNestedInput;
    milestone_progress?: Prisma.milestone_progressUpdateManyWithoutBabyNestedInput;
};
export type BabyUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    growthLogs?: Prisma.BabyGrowthLogUncheckedUpdateManyWithoutBabyNestedInput;
    stageHistory?: Prisma.BabyStageHistoryUncheckedUpdateManyWithoutBabyNestedInput;
    checklist_progress?: Prisma.checklist_progressUncheckedUpdateManyWithoutBabyNestedInput;
    expert_booking?: Prisma.expert_bookingUncheckedUpdateManyWithoutBabyNestedInput;
    milestone_progress?: Prisma.milestone_progressUncheckedUpdateManyWithoutBabyNestedInput;
};
export type BabyUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isBorn?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stageCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    feedingType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyCountOutputType = {
    growthLogs: number;
    stageHistory: number;
    checklist_progress: number;
    expert_booking: number;
    milestone_progress: number;
};
export type BabyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    growthLogs?: boolean | BabyCountOutputTypeCountGrowthLogsArgs;
    stageHistory?: boolean | BabyCountOutputTypeCountStageHistoryArgs;
    checklist_progress?: boolean | BabyCountOutputTypeCountChecklist_progressArgs;
    expert_booking?: boolean | BabyCountOutputTypeCountExpert_bookingArgs;
    milestone_progress?: boolean | BabyCountOutputTypeCountMilestone_progressArgs;
};
export type BabyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyCountOutputTypeSelect<ExtArgs> | null;
};
export type BabyCountOutputTypeCountGrowthLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BabyGrowthLogWhereInput;
};
export type BabyCountOutputTypeCountStageHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BabyStageHistoryWhereInput;
};
export type BabyCountOutputTypeCountChecklist_progressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.checklist_progressWhereInput;
};
export type BabyCountOutputTypeCountExpert_bookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.expert_bookingWhereInput;
};
export type BabyCountOutputTypeCountMilestone_progressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.milestone_progressWhereInput;
};
export type BabySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    name?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    dueDate?: boolean;
    isBorn?: boolean;
    stageCode?: boolean;
    feedingType?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    growthLogs?: boolean | Prisma.Baby$growthLogsArgs<ExtArgs>;
    stageHistory?: boolean | Prisma.Baby$stageHistoryArgs<ExtArgs>;
    checklist_progress?: boolean | Prisma.Baby$checklist_progressArgs<ExtArgs>;
    expert_booking?: boolean | Prisma.Baby$expert_bookingArgs<ExtArgs>;
    milestone_progress?: boolean | Prisma.Baby$milestone_progressArgs<ExtArgs>;
    _count?: boolean | Prisma.BabyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["baby"]>;
export type BabySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    name?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    dueDate?: boolean;
    isBorn?: boolean;
    stageCode?: boolean;
    feedingType?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["baby"]>;
export type BabySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    name?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    dueDate?: boolean;
    isBorn?: boolean;
    stageCode?: boolean;
    feedingType?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["baby"]>;
export type BabySelectScalar = {
    id?: boolean;
    customerId?: boolean;
    name?: boolean;
    gender?: boolean;
    dateOfBirth?: boolean;
    dueDate?: boolean;
    isBorn?: boolean;
    stageCode?: boolean;
    feedingType?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BabyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "name" | "gender" | "dateOfBirth" | "dueDate" | "isBorn" | "stageCode" | "feedingType" | "createdAt" | "updatedAt", ExtArgs["result"]["baby"]>;
export type BabyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    growthLogs?: boolean | Prisma.Baby$growthLogsArgs<ExtArgs>;
    stageHistory?: boolean | Prisma.Baby$stageHistoryArgs<ExtArgs>;
    checklist_progress?: boolean | Prisma.Baby$checklist_progressArgs<ExtArgs>;
    expert_booking?: boolean | Prisma.Baby$expert_bookingArgs<ExtArgs>;
    milestone_progress?: boolean | Prisma.Baby$milestone_progressArgs<ExtArgs>;
    _count?: boolean | Prisma.BabyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BabyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type BabyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $BabyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Baby";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        growthLogs: Prisma.$BabyGrowthLogPayload<ExtArgs>[];
        stageHistory: Prisma.$BabyStageHistoryPayload<ExtArgs>[];
        checklist_progress: Prisma.$checklist_progressPayload<ExtArgs>[];
        expert_booking: Prisma.$expert_bookingPayload<ExtArgs>[];
        milestone_progress: Prisma.$milestone_progressPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customerId: string;
        name: string | null;
        gender: string | null;
        dateOfBirth: Date | null;
        dueDate: Date | null;
        isBorn: boolean;
        stageCode: string | null;
        feedingType: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["baby"]>;
    composites: {};
};
export type BabyGetPayload<S extends boolean | null | undefined | BabyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BabyPayload, S>;
export type BabyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BabyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BabyCountAggregateInputType | true;
};
export interface BabyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Baby'];
        meta: {
            name: 'Baby';
        };
    };
    findUnique<T extends BabyFindUniqueArgs>(args: Prisma.SelectSubset<T, BabyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BabyClient<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BabyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BabyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BabyClient<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BabyFindFirstArgs>(args?: Prisma.SelectSubset<T, BabyFindFirstArgs<ExtArgs>>): Prisma.Prisma__BabyClient<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BabyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BabyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BabyClient<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BabyFindManyArgs>(args?: Prisma.SelectSubset<T, BabyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BabyCreateArgs>(args: Prisma.SelectSubset<T, BabyCreateArgs<ExtArgs>>): Prisma.Prisma__BabyClient<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BabyCreateManyArgs>(args?: Prisma.SelectSubset<T, BabyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BabyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BabyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BabyDeleteArgs>(args: Prisma.SelectSubset<T, BabyDeleteArgs<ExtArgs>>): Prisma.Prisma__BabyClient<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BabyUpdateArgs>(args: Prisma.SelectSubset<T, BabyUpdateArgs<ExtArgs>>): Prisma.Prisma__BabyClient<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BabyDeleteManyArgs>(args?: Prisma.SelectSubset<T, BabyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BabyUpdateManyArgs>(args: Prisma.SelectSubset<T, BabyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BabyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BabyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BabyUpsertArgs>(args: Prisma.SelectSubset<T, BabyUpsertArgs<ExtArgs>>): Prisma.Prisma__BabyClient<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BabyCountArgs>(args?: Prisma.Subset<T, BabyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BabyCountAggregateOutputType> : number>;
    aggregate<T extends BabyAggregateArgs>(args: Prisma.Subset<T, BabyAggregateArgs>): Prisma.PrismaPromise<GetBabyAggregateType<T>>;
    groupBy<T extends BabyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BabyGroupByArgs['orderBy'];
    } : {
        orderBy?: BabyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BabyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBabyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BabyFieldRefs;
}
export interface Prisma__BabyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    growthLogs<T extends Prisma.Baby$growthLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Baby$growthLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BabyGrowthLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stageHistory<T extends Prisma.Baby$stageHistoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Baby$stageHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BabyStageHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    checklist_progress<T extends Prisma.Baby$checklist_progressArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Baby$checklist_progressArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$checklist_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    expert_booking<T extends Prisma.Baby$expert_bookingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Baby$expert_bookingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$expert_bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    milestone_progress<T extends Prisma.Baby$milestone_progressArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Baby$milestone_progressArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$milestone_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BabyFieldRefs {
    readonly id: Prisma.FieldRef<"Baby", 'String'>;
    readonly customerId: Prisma.FieldRef<"Baby", 'String'>;
    readonly name: Prisma.FieldRef<"Baby", 'String'>;
    readonly gender: Prisma.FieldRef<"Baby", 'String'>;
    readonly dateOfBirth: Prisma.FieldRef<"Baby", 'DateTime'>;
    readonly dueDate: Prisma.FieldRef<"Baby", 'DateTime'>;
    readonly isBorn: Prisma.FieldRef<"Baby", 'Boolean'>;
    readonly stageCode: Prisma.FieldRef<"Baby", 'String'>;
    readonly feedingType: Prisma.FieldRef<"Baby", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Baby", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Baby", 'DateTime'>;
}
export type BabyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelect<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    include?: Prisma.BabyInclude<ExtArgs> | null;
    where: Prisma.BabyWhereUniqueInput;
};
export type BabyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelect<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    include?: Prisma.BabyInclude<ExtArgs> | null;
    where: Prisma.BabyWhereUniqueInput;
};
export type BabyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelect<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    include?: Prisma.BabyInclude<ExtArgs> | null;
    where?: Prisma.BabyWhereInput;
    orderBy?: Prisma.BabyOrderByWithRelationInput | Prisma.BabyOrderByWithRelationInput[];
    cursor?: Prisma.BabyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BabyScalarFieldEnum | Prisma.BabyScalarFieldEnum[];
};
export type BabyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelect<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    include?: Prisma.BabyInclude<ExtArgs> | null;
    where?: Prisma.BabyWhereInput;
    orderBy?: Prisma.BabyOrderByWithRelationInput | Prisma.BabyOrderByWithRelationInput[];
    cursor?: Prisma.BabyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BabyScalarFieldEnum | Prisma.BabyScalarFieldEnum[];
};
export type BabyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelect<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    include?: Prisma.BabyInclude<ExtArgs> | null;
    where?: Prisma.BabyWhereInput;
    orderBy?: Prisma.BabyOrderByWithRelationInput | Prisma.BabyOrderByWithRelationInput[];
    cursor?: Prisma.BabyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BabyScalarFieldEnum | Prisma.BabyScalarFieldEnum[];
};
export type BabyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelect<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    include?: Prisma.BabyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BabyCreateInput, Prisma.BabyUncheckedCreateInput>;
};
export type BabyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BabyCreateManyInput | Prisma.BabyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BabyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    data: Prisma.BabyCreateManyInput | Prisma.BabyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BabyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BabyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelect<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    include?: Prisma.BabyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BabyUpdateInput, Prisma.BabyUncheckedUpdateInput>;
    where: Prisma.BabyWhereUniqueInput;
};
export type BabyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BabyUpdateManyMutationInput, Prisma.BabyUncheckedUpdateManyInput>;
    where?: Prisma.BabyWhereInput;
    limit?: number;
};
export type BabyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BabyUpdateManyMutationInput, Prisma.BabyUncheckedUpdateManyInput>;
    where?: Prisma.BabyWhereInput;
    limit?: number;
    include?: Prisma.BabyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BabyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelect<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    include?: Prisma.BabyInclude<ExtArgs> | null;
    where: Prisma.BabyWhereUniqueInput;
    create: Prisma.XOR<Prisma.BabyCreateInput, Prisma.BabyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BabyUpdateInput, Prisma.BabyUncheckedUpdateInput>;
};
export type BabyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelect<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    include?: Prisma.BabyInclude<ExtArgs> | null;
    where: Prisma.BabyWhereUniqueInput;
};
export type BabyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BabyWhereInput;
    limit?: number;
};
export type Baby$growthLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyGrowthLogSelect<ExtArgs> | null;
    omit?: Prisma.BabyGrowthLogOmit<ExtArgs> | null;
    include?: Prisma.BabyGrowthLogInclude<ExtArgs> | null;
    where?: Prisma.BabyGrowthLogWhereInput;
    orderBy?: Prisma.BabyGrowthLogOrderByWithRelationInput | Prisma.BabyGrowthLogOrderByWithRelationInput[];
    cursor?: Prisma.BabyGrowthLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BabyGrowthLogScalarFieldEnum | Prisma.BabyGrowthLogScalarFieldEnum[];
};
export type Baby$stageHistoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyStageHistorySelect<ExtArgs> | null;
    omit?: Prisma.BabyStageHistoryOmit<ExtArgs> | null;
    include?: Prisma.BabyStageHistoryInclude<ExtArgs> | null;
    where?: Prisma.BabyStageHistoryWhereInput;
    orderBy?: Prisma.BabyStageHistoryOrderByWithRelationInput | Prisma.BabyStageHistoryOrderByWithRelationInput[];
    cursor?: Prisma.BabyStageHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BabyStageHistoryScalarFieldEnum | Prisma.BabyStageHistoryScalarFieldEnum[];
};
export type Baby$checklist_progressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_progressSelect<ExtArgs> | null;
    omit?: Prisma.checklist_progressOmit<ExtArgs> | null;
    include?: Prisma.checklist_progressInclude<ExtArgs> | null;
    where?: Prisma.checklist_progressWhereInput;
    orderBy?: Prisma.checklist_progressOrderByWithRelationInput | Prisma.checklist_progressOrderByWithRelationInput[];
    cursor?: Prisma.checklist_progressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Checklist_progressScalarFieldEnum | Prisma.Checklist_progressScalarFieldEnum[];
};
export type Baby$expert_bookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Baby$milestone_progressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_progressSelect<ExtArgs> | null;
    omit?: Prisma.milestone_progressOmit<ExtArgs> | null;
    include?: Prisma.milestone_progressInclude<ExtArgs> | null;
    where?: Prisma.milestone_progressWhereInput;
    orderBy?: Prisma.milestone_progressOrderByWithRelationInput | Prisma.milestone_progressOrderByWithRelationInput[];
    cursor?: Prisma.milestone_progressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Milestone_progressScalarFieldEnum | Prisma.Milestone_progressScalarFieldEnum[];
};
export type BabyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelect<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    include?: Prisma.BabyInclude<ExtArgs> | null;
};
