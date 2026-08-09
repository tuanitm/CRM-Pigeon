import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type expert_slotModel = runtime.Types.Result.DefaultSelection<Prisma.$expert_slotPayload>;
export type AggregateExpert_slot = {
    _count: Expert_slotCountAggregateOutputType | null;
    _avg: Expert_slotAvgAggregateOutputType | null;
    _sum: Expert_slotSumAggregateOutputType | null;
    _min: Expert_slotMinAggregateOutputType | null;
    _max: Expert_slotMaxAggregateOutputType | null;
};
export type Expert_slotAvgAggregateOutputType = {
    max_bookings: number | null;
    current_bookings: number | null;
};
export type Expert_slotSumAggregateOutputType = {
    max_bookings: number | null;
    current_bookings: number | null;
};
export type Expert_slotMinAggregateOutputType = {
    id: string | null;
    topic_id: string | null;
    slot_date: Date | null;
    start_time: Date | null;
    end_time: Date | null;
    max_bookings: number | null;
    current_bookings: number | null;
    created_at: Date | null;
};
export type Expert_slotMaxAggregateOutputType = {
    id: string | null;
    topic_id: string | null;
    slot_date: Date | null;
    start_time: Date | null;
    end_time: Date | null;
    max_bookings: number | null;
    current_bookings: number | null;
    created_at: Date | null;
};
export type Expert_slotCountAggregateOutputType = {
    id: number;
    topic_id: number;
    slot_date: number;
    start_time: number;
    end_time: number;
    max_bookings: number;
    current_bookings: number;
    created_at: number;
    _all: number;
};
export type Expert_slotAvgAggregateInputType = {
    max_bookings?: true;
    current_bookings?: true;
};
export type Expert_slotSumAggregateInputType = {
    max_bookings?: true;
    current_bookings?: true;
};
export type Expert_slotMinAggregateInputType = {
    id?: true;
    topic_id?: true;
    slot_date?: true;
    start_time?: true;
    end_time?: true;
    max_bookings?: true;
    current_bookings?: true;
    created_at?: true;
};
export type Expert_slotMaxAggregateInputType = {
    id?: true;
    topic_id?: true;
    slot_date?: true;
    start_time?: true;
    end_time?: true;
    max_bookings?: true;
    current_bookings?: true;
    created_at?: true;
};
export type Expert_slotCountAggregateInputType = {
    id?: true;
    topic_id?: true;
    slot_date?: true;
    start_time?: true;
    end_time?: true;
    max_bookings?: true;
    current_bookings?: true;
    created_at?: true;
    _all?: true;
};
export type Expert_slotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.expert_slotWhereInput;
    orderBy?: Prisma.expert_slotOrderByWithRelationInput | Prisma.expert_slotOrderByWithRelationInput[];
    cursor?: Prisma.expert_slotWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Expert_slotCountAggregateInputType;
    _avg?: Expert_slotAvgAggregateInputType;
    _sum?: Expert_slotSumAggregateInputType;
    _min?: Expert_slotMinAggregateInputType;
    _max?: Expert_slotMaxAggregateInputType;
};
export type GetExpert_slotAggregateType<T extends Expert_slotAggregateArgs> = {
    [P in keyof T & keyof AggregateExpert_slot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExpert_slot[P]> : Prisma.GetScalarType<T[P], AggregateExpert_slot[P]>;
};
export type expert_slotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.expert_slotWhereInput;
    orderBy?: Prisma.expert_slotOrderByWithAggregationInput | Prisma.expert_slotOrderByWithAggregationInput[];
    by: Prisma.Expert_slotScalarFieldEnum[] | Prisma.Expert_slotScalarFieldEnum;
    having?: Prisma.expert_slotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Expert_slotCountAggregateInputType | true;
    _avg?: Expert_slotAvgAggregateInputType;
    _sum?: Expert_slotSumAggregateInputType;
    _min?: Expert_slotMinAggregateInputType;
    _max?: Expert_slotMaxAggregateInputType;
};
export type Expert_slotGroupByOutputType = {
    id: string;
    topic_id: string;
    slot_date: Date;
    start_time: Date;
    end_time: Date;
    max_bookings: number;
    current_bookings: number;
    created_at: Date;
    _count: Expert_slotCountAggregateOutputType | null;
    _avg: Expert_slotAvgAggregateOutputType | null;
    _sum: Expert_slotSumAggregateOutputType | null;
    _min: Expert_slotMinAggregateOutputType | null;
    _max: Expert_slotMaxAggregateOutputType | null;
};
export type GetExpert_slotGroupByPayload<T extends expert_slotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Expert_slotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Expert_slotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Expert_slotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Expert_slotGroupByOutputType[P]>;
}>>;
export type expert_slotWhereInput = {
    AND?: Prisma.expert_slotWhereInput | Prisma.expert_slotWhereInput[];
    OR?: Prisma.expert_slotWhereInput[];
    NOT?: Prisma.expert_slotWhereInput | Prisma.expert_slotWhereInput[];
    id?: Prisma.UuidFilter<"expert_slot"> | string;
    topic_id?: Prisma.UuidFilter<"expert_slot"> | string;
    slot_date?: Prisma.DateTimeFilter<"expert_slot"> | Date | string;
    start_time?: Prisma.DateTimeFilter<"expert_slot"> | Date | string;
    end_time?: Prisma.DateTimeFilter<"expert_slot"> | Date | string;
    max_bookings?: Prisma.IntFilter<"expert_slot"> | number;
    current_bookings?: Prisma.IntFilter<"expert_slot"> | number;
    created_at?: Prisma.DateTimeFilter<"expert_slot"> | Date | string;
    expert_booking?: Prisma.Expert_bookingListRelationFilter;
    expert_topic?: Prisma.XOR<Prisma.Expert_topicScalarRelationFilter, Prisma.expert_topicWhereInput>;
};
export type expert_slotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    topic_id?: Prisma.SortOrder;
    slot_date?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    max_bookings?: Prisma.SortOrder;
    current_bookings?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    expert_booking?: Prisma.expert_bookingOrderByRelationAggregateInput;
    expert_topic?: Prisma.expert_topicOrderByWithRelationInput;
};
export type expert_slotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.expert_slotWhereInput | Prisma.expert_slotWhereInput[];
    OR?: Prisma.expert_slotWhereInput[];
    NOT?: Prisma.expert_slotWhereInput | Prisma.expert_slotWhereInput[];
    topic_id?: Prisma.UuidFilter<"expert_slot"> | string;
    slot_date?: Prisma.DateTimeFilter<"expert_slot"> | Date | string;
    start_time?: Prisma.DateTimeFilter<"expert_slot"> | Date | string;
    end_time?: Prisma.DateTimeFilter<"expert_slot"> | Date | string;
    max_bookings?: Prisma.IntFilter<"expert_slot"> | number;
    current_bookings?: Prisma.IntFilter<"expert_slot"> | number;
    created_at?: Prisma.DateTimeFilter<"expert_slot"> | Date | string;
    expert_booking?: Prisma.Expert_bookingListRelationFilter;
    expert_topic?: Prisma.XOR<Prisma.Expert_topicScalarRelationFilter, Prisma.expert_topicWhereInput>;
}, "id">;
export type expert_slotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    topic_id?: Prisma.SortOrder;
    slot_date?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    max_bookings?: Prisma.SortOrder;
    current_bookings?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.expert_slotCountOrderByAggregateInput;
    _avg?: Prisma.expert_slotAvgOrderByAggregateInput;
    _max?: Prisma.expert_slotMaxOrderByAggregateInput;
    _min?: Prisma.expert_slotMinOrderByAggregateInput;
    _sum?: Prisma.expert_slotSumOrderByAggregateInput;
};
export type expert_slotScalarWhereWithAggregatesInput = {
    AND?: Prisma.expert_slotScalarWhereWithAggregatesInput | Prisma.expert_slotScalarWhereWithAggregatesInput[];
    OR?: Prisma.expert_slotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.expert_slotScalarWhereWithAggregatesInput | Prisma.expert_slotScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"expert_slot"> | string;
    topic_id?: Prisma.UuidWithAggregatesFilter<"expert_slot"> | string;
    slot_date?: Prisma.DateTimeWithAggregatesFilter<"expert_slot"> | Date | string;
    start_time?: Prisma.DateTimeWithAggregatesFilter<"expert_slot"> | Date | string;
    end_time?: Prisma.DateTimeWithAggregatesFilter<"expert_slot"> | Date | string;
    max_bookings?: Prisma.IntWithAggregatesFilter<"expert_slot"> | number;
    current_bookings?: Prisma.IntWithAggregatesFilter<"expert_slot"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"expert_slot"> | Date | string;
};
export type expert_slotCreateInput = {
    id?: string;
    slot_date: Date | string;
    start_time: Date | string;
    end_time: Date | string;
    max_bookings?: number;
    current_bookings?: number;
    created_at?: Date | string;
    expert_booking?: Prisma.expert_bookingCreateNestedManyWithoutExpert_slotInput;
    expert_topic: Prisma.expert_topicCreateNestedOneWithoutExpert_slotInput;
};
export type expert_slotUncheckedCreateInput = {
    id?: string;
    topic_id: string;
    slot_date: Date | string;
    start_time: Date | string;
    end_time: Date | string;
    max_bookings?: number;
    current_bookings?: number;
    created_at?: Date | string;
    expert_booking?: Prisma.expert_bookingUncheckedCreateNestedManyWithoutExpert_slotInput;
};
export type expert_slotUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    max_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    current_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expert_booking?: Prisma.expert_bookingUpdateManyWithoutExpert_slotNestedInput;
    expert_topic?: Prisma.expert_topicUpdateOneRequiredWithoutExpert_slotNestedInput;
};
export type expert_slotUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    topic_id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    max_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    current_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expert_booking?: Prisma.expert_bookingUncheckedUpdateManyWithoutExpert_slotNestedInput;
};
export type expert_slotCreateManyInput = {
    id?: string;
    topic_id: string;
    slot_date: Date | string;
    start_time: Date | string;
    end_time: Date | string;
    max_bookings?: number;
    current_bookings?: number;
    created_at?: Date | string;
};
export type expert_slotUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    max_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    current_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type expert_slotUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    topic_id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    max_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    current_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Expert_slotScalarRelationFilter = {
    is?: Prisma.expert_slotWhereInput;
    isNot?: Prisma.expert_slotWhereInput;
};
export type expert_slotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    topic_id?: Prisma.SortOrder;
    slot_date?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    max_bookings?: Prisma.SortOrder;
    current_bookings?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type expert_slotAvgOrderByAggregateInput = {
    max_bookings?: Prisma.SortOrder;
    current_bookings?: Prisma.SortOrder;
};
export type expert_slotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    topic_id?: Prisma.SortOrder;
    slot_date?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    max_bookings?: Prisma.SortOrder;
    current_bookings?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type expert_slotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    topic_id?: Prisma.SortOrder;
    slot_date?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    max_bookings?: Prisma.SortOrder;
    current_bookings?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type expert_slotSumOrderByAggregateInput = {
    max_bookings?: Prisma.SortOrder;
    current_bookings?: Prisma.SortOrder;
};
export type Expert_slotListRelationFilter = {
    every?: Prisma.expert_slotWhereInput;
    some?: Prisma.expert_slotWhereInput;
    none?: Prisma.expert_slotWhereInput;
};
export type expert_slotOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type expert_slotCreateNestedOneWithoutExpert_bookingInput = {
    create?: Prisma.XOR<Prisma.expert_slotCreateWithoutExpert_bookingInput, Prisma.expert_slotUncheckedCreateWithoutExpert_bookingInput>;
    connectOrCreate?: Prisma.expert_slotCreateOrConnectWithoutExpert_bookingInput;
    connect?: Prisma.expert_slotWhereUniqueInput;
};
export type expert_slotUpdateOneRequiredWithoutExpert_bookingNestedInput = {
    create?: Prisma.XOR<Prisma.expert_slotCreateWithoutExpert_bookingInput, Prisma.expert_slotUncheckedCreateWithoutExpert_bookingInput>;
    connectOrCreate?: Prisma.expert_slotCreateOrConnectWithoutExpert_bookingInput;
    upsert?: Prisma.expert_slotUpsertWithoutExpert_bookingInput;
    connect?: Prisma.expert_slotWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.expert_slotUpdateToOneWithWhereWithoutExpert_bookingInput, Prisma.expert_slotUpdateWithoutExpert_bookingInput>, Prisma.expert_slotUncheckedUpdateWithoutExpert_bookingInput>;
};
export type expert_slotCreateNestedManyWithoutExpert_topicInput = {
    create?: Prisma.XOR<Prisma.expert_slotCreateWithoutExpert_topicInput, Prisma.expert_slotUncheckedCreateWithoutExpert_topicInput> | Prisma.expert_slotCreateWithoutExpert_topicInput[] | Prisma.expert_slotUncheckedCreateWithoutExpert_topicInput[];
    connectOrCreate?: Prisma.expert_slotCreateOrConnectWithoutExpert_topicInput | Prisma.expert_slotCreateOrConnectWithoutExpert_topicInput[];
    createMany?: Prisma.expert_slotCreateManyExpert_topicInputEnvelope;
    connect?: Prisma.expert_slotWhereUniqueInput | Prisma.expert_slotWhereUniqueInput[];
};
export type expert_slotUncheckedCreateNestedManyWithoutExpert_topicInput = {
    create?: Prisma.XOR<Prisma.expert_slotCreateWithoutExpert_topicInput, Prisma.expert_slotUncheckedCreateWithoutExpert_topicInput> | Prisma.expert_slotCreateWithoutExpert_topicInput[] | Prisma.expert_slotUncheckedCreateWithoutExpert_topicInput[];
    connectOrCreate?: Prisma.expert_slotCreateOrConnectWithoutExpert_topicInput | Prisma.expert_slotCreateOrConnectWithoutExpert_topicInput[];
    createMany?: Prisma.expert_slotCreateManyExpert_topicInputEnvelope;
    connect?: Prisma.expert_slotWhereUniqueInput | Prisma.expert_slotWhereUniqueInput[];
};
export type expert_slotUpdateManyWithoutExpert_topicNestedInput = {
    create?: Prisma.XOR<Prisma.expert_slotCreateWithoutExpert_topicInput, Prisma.expert_slotUncheckedCreateWithoutExpert_topicInput> | Prisma.expert_slotCreateWithoutExpert_topicInput[] | Prisma.expert_slotUncheckedCreateWithoutExpert_topicInput[];
    connectOrCreate?: Prisma.expert_slotCreateOrConnectWithoutExpert_topicInput | Prisma.expert_slotCreateOrConnectWithoutExpert_topicInput[];
    upsert?: Prisma.expert_slotUpsertWithWhereUniqueWithoutExpert_topicInput | Prisma.expert_slotUpsertWithWhereUniqueWithoutExpert_topicInput[];
    createMany?: Prisma.expert_slotCreateManyExpert_topicInputEnvelope;
    set?: Prisma.expert_slotWhereUniqueInput | Prisma.expert_slotWhereUniqueInput[];
    disconnect?: Prisma.expert_slotWhereUniqueInput | Prisma.expert_slotWhereUniqueInput[];
    delete?: Prisma.expert_slotWhereUniqueInput | Prisma.expert_slotWhereUniqueInput[];
    connect?: Prisma.expert_slotWhereUniqueInput | Prisma.expert_slotWhereUniqueInput[];
    update?: Prisma.expert_slotUpdateWithWhereUniqueWithoutExpert_topicInput | Prisma.expert_slotUpdateWithWhereUniqueWithoutExpert_topicInput[];
    updateMany?: Prisma.expert_slotUpdateManyWithWhereWithoutExpert_topicInput | Prisma.expert_slotUpdateManyWithWhereWithoutExpert_topicInput[];
    deleteMany?: Prisma.expert_slotScalarWhereInput | Prisma.expert_slotScalarWhereInput[];
};
export type expert_slotUncheckedUpdateManyWithoutExpert_topicNestedInput = {
    create?: Prisma.XOR<Prisma.expert_slotCreateWithoutExpert_topicInput, Prisma.expert_slotUncheckedCreateWithoutExpert_topicInput> | Prisma.expert_slotCreateWithoutExpert_topicInput[] | Prisma.expert_slotUncheckedCreateWithoutExpert_topicInput[];
    connectOrCreate?: Prisma.expert_slotCreateOrConnectWithoutExpert_topicInput | Prisma.expert_slotCreateOrConnectWithoutExpert_topicInput[];
    upsert?: Prisma.expert_slotUpsertWithWhereUniqueWithoutExpert_topicInput | Prisma.expert_slotUpsertWithWhereUniqueWithoutExpert_topicInput[];
    createMany?: Prisma.expert_slotCreateManyExpert_topicInputEnvelope;
    set?: Prisma.expert_slotWhereUniqueInput | Prisma.expert_slotWhereUniqueInput[];
    disconnect?: Prisma.expert_slotWhereUniqueInput | Prisma.expert_slotWhereUniqueInput[];
    delete?: Prisma.expert_slotWhereUniqueInput | Prisma.expert_slotWhereUniqueInput[];
    connect?: Prisma.expert_slotWhereUniqueInput | Prisma.expert_slotWhereUniqueInput[];
    update?: Prisma.expert_slotUpdateWithWhereUniqueWithoutExpert_topicInput | Prisma.expert_slotUpdateWithWhereUniqueWithoutExpert_topicInput[];
    updateMany?: Prisma.expert_slotUpdateManyWithWhereWithoutExpert_topicInput | Prisma.expert_slotUpdateManyWithWhereWithoutExpert_topicInput[];
    deleteMany?: Prisma.expert_slotScalarWhereInput | Prisma.expert_slotScalarWhereInput[];
};
export type expert_slotCreateWithoutExpert_bookingInput = {
    id?: string;
    slot_date: Date | string;
    start_time: Date | string;
    end_time: Date | string;
    max_bookings?: number;
    current_bookings?: number;
    created_at?: Date | string;
    expert_topic: Prisma.expert_topicCreateNestedOneWithoutExpert_slotInput;
};
export type expert_slotUncheckedCreateWithoutExpert_bookingInput = {
    id?: string;
    topic_id: string;
    slot_date: Date | string;
    start_time: Date | string;
    end_time: Date | string;
    max_bookings?: number;
    current_bookings?: number;
    created_at?: Date | string;
};
export type expert_slotCreateOrConnectWithoutExpert_bookingInput = {
    where: Prisma.expert_slotWhereUniqueInput;
    create: Prisma.XOR<Prisma.expert_slotCreateWithoutExpert_bookingInput, Prisma.expert_slotUncheckedCreateWithoutExpert_bookingInput>;
};
export type expert_slotUpsertWithoutExpert_bookingInput = {
    update: Prisma.XOR<Prisma.expert_slotUpdateWithoutExpert_bookingInput, Prisma.expert_slotUncheckedUpdateWithoutExpert_bookingInput>;
    create: Prisma.XOR<Prisma.expert_slotCreateWithoutExpert_bookingInput, Prisma.expert_slotUncheckedCreateWithoutExpert_bookingInput>;
    where?: Prisma.expert_slotWhereInput;
};
export type expert_slotUpdateToOneWithWhereWithoutExpert_bookingInput = {
    where?: Prisma.expert_slotWhereInput;
    data: Prisma.XOR<Prisma.expert_slotUpdateWithoutExpert_bookingInput, Prisma.expert_slotUncheckedUpdateWithoutExpert_bookingInput>;
};
export type expert_slotUpdateWithoutExpert_bookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    max_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    current_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expert_topic?: Prisma.expert_topicUpdateOneRequiredWithoutExpert_slotNestedInput;
};
export type expert_slotUncheckedUpdateWithoutExpert_bookingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    topic_id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    max_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    current_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type expert_slotCreateWithoutExpert_topicInput = {
    id?: string;
    slot_date: Date | string;
    start_time: Date | string;
    end_time: Date | string;
    max_bookings?: number;
    current_bookings?: number;
    created_at?: Date | string;
    expert_booking?: Prisma.expert_bookingCreateNestedManyWithoutExpert_slotInput;
};
export type expert_slotUncheckedCreateWithoutExpert_topicInput = {
    id?: string;
    slot_date: Date | string;
    start_time: Date | string;
    end_time: Date | string;
    max_bookings?: number;
    current_bookings?: number;
    created_at?: Date | string;
    expert_booking?: Prisma.expert_bookingUncheckedCreateNestedManyWithoutExpert_slotInput;
};
export type expert_slotCreateOrConnectWithoutExpert_topicInput = {
    where: Prisma.expert_slotWhereUniqueInput;
    create: Prisma.XOR<Prisma.expert_slotCreateWithoutExpert_topicInput, Prisma.expert_slotUncheckedCreateWithoutExpert_topicInput>;
};
export type expert_slotCreateManyExpert_topicInputEnvelope = {
    data: Prisma.expert_slotCreateManyExpert_topicInput | Prisma.expert_slotCreateManyExpert_topicInput[];
    skipDuplicates?: boolean;
};
export type expert_slotUpsertWithWhereUniqueWithoutExpert_topicInput = {
    where: Prisma.expert_slotWhereUniqueInput;
    update: Prisma.XOR<Prisma.expert_slotUpdateWithoutExpert_topicInput, Prisma.expert_slotUncheckedUpdateWithoutExpert_topicInput>;
    create: Prisma.XOR<Prisma.expert_slotCreateWithoutExpert_topicInput, Prisma.expert_slotUncheckedCreateWithoutExpert_topicInput>;
};
export type expert_slotUpdateWithWhereUniqueWithoutExpert_topicInput = {
    where: Prisma.expert_slotWhereUniqueInput;
    data: Prisma.XOR<Prisma.expert_slotUpdateWithoutExpert_topicInput, Prisma.expert_slotUncheckedUpdateWithoutExpert_topicInput>;
};
export type expert_slotUpdateManyWithWhereWithoutExpert_topicInput = {
    where: Prisma.expert_slotScalarWhereInput;
    data: Prisma.XOR<Prisma.expert_slotUpdateManyMutationInput, Prisma.expert_slotUncheckedUpdateManyWithoutExpert_topicInput>;
};
export type expert_slotScalarWhereInput = {
    AND?: Prisma.expert_slotScalarWhereInput | Prisma.expert_slotScalarWhereInput[];
    OR?: Prisma.expert_slotScalarWhereInput[];
    NOT?: Prisma.expert_slotScalarWhereInput | Prisma.expert_slotScalarWhereInput[];
    id?: Prisma.UuidFilter<"expert_slot"> | string;
    topic_id?: Prisma.UuidFilter<"expert_slot"> | string;
    slot_date?: Prisma.DateTimeFilter<"expert_slot"> | Date | string;
    start_time?: Prisma.DateTimeFilter<"expert_slot"> | Date | string;
    end_time?: Prisma.DateTimeFilter<"expert_slot"> | Date | string;
    max_bookings?: Prisma.IntFilter<"expert_slot"> | number;
    current_bookings?: Prisma.IntFilter<"expert_slot"> | number;
    created_at?: Prisma.DateTimeFilter<"expert_slot"> | Date | string;
};
export type expert_slotCreateManyExpert_topicInput = {
    id?: string;
    slot_date: Date | string;
    start_time: Date | string;
    end_time: Date | string;
    max_bookings?: number;
    current_bookings?: number;
    created_at?: Date | string;
};
export type expert_slotUpdateWithoutExpert_topicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    max_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    current_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expert_booking?: Prisma.expert_bookingUpdateManyWithoutExpert_slotNestedInput;
};
export type expert_slotUncheckedUpdateWithoutExpert_topicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    max_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    current_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expert_booking?: Prisma.expert_bookingUncheckedUpdateManyWithoutExpert_slotNestedInput;
};
export type expert_slotUncheckedUpdateManyWithoutExpert_topicInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slot_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    max_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    current_bookings?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Expert_slotCountOutputType = {
    expert_booking: number;
};
export type Expert_slotCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    expert_booking?: boolean | Expert_slotCountOutputTypeCountExpert_bookingArgs;
};
export type Expert_slotCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Expert_slotCountOutputTypeSelect<ExtArgs> | null;
};
export type Expert_slotCountOutputTypeCountExpert_bookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.expert_bookingWhereInput;
};
export type expert_slotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    topic_id?: boolean;
    slot_date?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    max_bookings?: boolean;
    current_bookings?: boolean;
    created_at?: boolean;
    expert_booking?: boolean | Prisma.expert_slot$expert_bookingArgs<ExtArgs>;
    expert_topic?: boolean | Prisma.expert_topicDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Expert_slotCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expert_slot"]>;
export type expert_slotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    topic_id?: boolean;
    slot_date?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    max_bookings?: boolean;
    current_bookings?: boolean;
    created_at?: boolean;
    expert_topic?: boolean | Prisma.expert_topicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expert_slot"]>;
export type expert_slotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    topic_id?: boolean;
    slot_date?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    max_bookings?: boolean;
    current_bookings?: boolean;
    created_at?: boolean;
    expert_topic?: boolean | Prisma.expert_topicDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["expert_slot"]>;
export type expert_slotSelectScalar = {
    id?: boolean;
    topic_id?: boolean;
    slot_date?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    max_bookings?: boolean;
    current_bookings?: boolean;
    created_at?: boolean;
};
export type expert_slotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "topic_id" | "slot_date" | "start_time" | "end_time" | "max_bookings" | "current_bookings" | "created_at", ExtArgs["result"]["expert_slot"]>;
export type expert_slotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    expert_booking?: boolean | Prisma.expert_slot$expert_bookingArgs<ExtArgs>;
    expert_topic?: boolean | Prisma.expert_topicDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Expert_slotCountOutputTypeDefaultArgs<ExtArgs>;
};
export type expert_slotIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    expert_topic?: boolean | Prisma.expert_topicDefaultArgs<ExtArgs>;
};
export type expert_slotIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    expert_topic?: boolean | Prisma.expert_topicDefaultArgs<ExtArgs>;
};
export type $expert_slotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "expert_slot";
    objects: {
        expert_booking: Prisma.$expert_bookingPayload<ExtArgs>[];
        expert_topic: Prisma.$expert_topicPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        topic_id: string;
        slot_date: Date;
        start_time: Date;
        end_time: Date;
        max_bookings: number;
        current_bookings: number;
        created_at: Date;
    }, ExtArgs["result"]["expert_slot"]>;
    composites: {};
};
export type expert_slotGetPayload<S extends boolean | null | undefined | expert_slotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$expert_slotPayload, S>;
export type expert_slotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<expert_slotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Expert_slotCountAggregateInputType | true;
};
export interface expert_slotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['expert_slot'];
        meta: {
            name: 'expert_slot';
        };
    };
    findUnique<T extends expert_slotFindUniqueArgs>(args: Prisma.SelectSubset<T, expert_slotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__expert_slotClient<runtime.Types.Result.GetResult<Prisma.$expert_slotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends expert_slotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, expert_slotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__expert_slotClient<runtime.Types.Result.GetResult<Prisma.$expert_slotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends expert_slotFindFirstArgs>(args?: Prisma.SelectSubset<T, expert_slotFindFirstArgs<ExtArgs>>): Prisma.Prisma__expert_slotClient<runtime.Types.Result.GetResult<Prisma.$expert_slotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends expert_slotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, expert_slotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__expert_slotClient<runtime.Types.Result.GetResult<Prisma.$expert_slotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends expert_slotFindManyArgs>(args?: Prisma.SelectSubset<T, expert_slotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$expert_slotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends expert_slotCreateArgs>(args: Prisma.SelectSubset<T, expert_slotCreateArgs<ExtArgs>>): Prisma.Prisma__expert_slotClient<runtime.Types.Result.GetResult<Prisma.$expert_slotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends expert_slotCreateManyArgs>(args?: Prisma.SelectSubset<T, expert_slotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends expert_slotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, expert_slotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$expert_slotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends expert_slotDeleteArgs>(args: Prisma.SelectSubset<T, expert_slotDeleteArgs<ExtArgs>>): Prisma.Prisma__expert_slotClient<runtime.Types.Result.GetResult<Prisma.$expert_slotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends expert_slotUpdateArgs>(args: Prisma.SelectSubset<T, expert_slotUpdateArgs<ExtArgs>>): Prisma.Prisma__expert_slotClient<runtime.Types.Result.GetResult<Prisma.$expert_slotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends expert_slotDeleteManyArgs>(args?: Prisma.SelectSubset<T, expert_slotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends expert_slotUpdateManyArgs>(args: Prisma.SelectSubset<T, expert_slotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends expert_slotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, expert_slotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$expert_slotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends expert_slotUpsertArgs>(args: Prisma.SelectSubset<T, expert_slotUpsertArgs<ExtArgs>>): Prisma.Prisma__expert_slotClient<runtime.Types.Result.GetResult<Prisma.$expert_slotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends expert_slotCountArgs>(args?: Prisma.Subset<T, expert_slotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Expert_slotCountAggregateOutputType> : number>;
    aggregate<T extends Expert_slotAggregateArgs>(args: Prisma.Subset<T, Expert_slotAggregateArgs>): Prisma.PrismaPromise<GetExpert_slotAggregateType<T>>;
    groupBy<T extends expert_slotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: expert_slotGroupByArgs['orderBy'];
    } : {
        orderBy?: expert_slotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, expert_slotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpert_slotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: expert_slotFieldRefs;
}
export interface Prisma__expert_slotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    expert_booking<T extends Prisma.expert_slot$expert_bookingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.expert_slot$expert_bookingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$expert_bookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    expert_topic<T extends Prisma.expert_topicDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.expert_topicDefaultArgs<ExtArgs>>): Prisma.Prisma__expert_topicClient<runtime.Types.Result.GetResult<Prisma.$expert_topicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface expert_slotFieldRefs {
    readonly id: Prisma.FieldRef<"expert_slot", 'String'>;
    readonly topic_id: Prisma.FieldRef<"expert_slot", 'String'>;
    readonly slot_date: Prisma.FieldRef<"expert_slot", 'DateTime'>;
    readonly start_time: Prisma.FieldRef<"expert_slot", 'DateTime'>;
    readonly end_time: Prisma.FieldRef<"expert_slot", 'DateTime'>;
    readonly max_bookings: Prisma.FieldRef<"expert_slot", 'Int'>;
    readonly current_bookings: Prisma.FieldRef<"expert_slot", 'Int'>;
    readonly created_at: Prisma.FieldRef<"expert_slot", 'DateTime'>;
}
export type expert_slotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_slotSelect<ExtArgs> | null;
    omit?: Prisma.expert_slotOmit<ExtArgs> | null;
    include?: Prisma.expert_slotInclude<ExtArgs> | null;
    where: Prisma.expert_slotWhereUniqueInput;
};
export type expert_slotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_slotSelect<ExtArgs> | null;
    omit?: Prisma.expert_slotOmit<ExtArgs> | null;
    include?: Prisma.expert_slotInclude<ExtArgs> | null;
    where: Prisma.expert_slotWhereUniqueInput;
};
export type expert_slotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_slotSelect<ExtArgs> | null;
    omit?: Prisma.expert_slotOmit<ExtArgs> | null;
    include?: Prisma.expert_slotInclude<ExtArgs> | null;
    where?: Prisma.expert_slotWhereInput;
    orderBy?: Prisma.expert_slotOrderByWithRelationInput | Prisma.expert_slotOrderByWithRelationInput[];
    cursor?: Prisma.expert_slotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Expert_slotScalarFieldEnum | Prisma.Expert_slotScalarFieldEnum[];
};
export type expert_slotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_slotSelect<ExtArgs> | null;
    omit?: Prisma.expert_slotOmit<ExtArgs> | null;
    include?: Prisma.expert_slotInclude<ExtArgs> | null;
    where?: Prisma.expert_slotWhereInput;
    orderBy?: Prisma.expert_slotOrderByWithRelationInput | Prisma.expert_slotOrderByWithRelationInput[];
    cursor?: Prisma.expert_slotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Expert_slotScalarFieldEnum | Prisma.Expert_slotScalarFieldEnum[];
};
export type expert_slotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_slotSelect<ExtArgs> | null;
    omit?: Prisma.expert_slotOmit<ExtArgs> | null;
    include?: Prisma.expert_slotInclude<ExtArgs> | null;
    where?: Prisma.expert_slotWhereInput;
    orderBy?: Prisma.expert_slotOrderByWithRelationInput | Prisma.expert_slotOrderByWithRelationInput[];
    cursor?: Prisma.expert_slotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Expert_slotScalarFieldEnum | Prisma.Expert_slotScalarFieldEnum[];
};
export type expert_slotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_slotSelect<ExtArgs> | null;
    omit?: Prisma.expert_slotOmit<ExtArgs> | null;
    include?: Prisma.expert_slotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.expert_slotCreateInput, Prisma.expert_slotUncheckedCreateInput>;
};
export type expert_slotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.expert_slotCreateManyInput | Prisma.expert_slotCreateManyInput[];
    skipDuplicates?: boolean;
};
export type expert_slotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_slotSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.expert_slotOmit<ExtArgs> | null;
    data: Prisma.expert_slotCreateManyInput | Prisma.expert_slotCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.expert_slotIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type expert_slotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_slotSelect<ExtArgs> | null;
    omit?: Prisma.expert_slotOmit<ExtArgs> | null;
    include?: Prisma.expert_slotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.expert_slotUpdateInput, Prisma.expert_slotUncheckedUpdateInput>;
    where: Prisma.expert_slotWhereUniqueInput;
};
export type expert_slotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.expert_slotUpdateManyMutationInput, Prisma.expert_slotUncheckedUpdateManyInput>;
    where?: Prisma.expert_slotWhereInput;
    limit?: number;
};
export type expert_slotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_slotSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.expert_slotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.expert_slotUpdateManyMutationInput, Prisma.expert_slotUncheckedUpdateManyInput>;
    where?: Prisma.expert_slotWhereInput;
    limit?: number;
    include?: Prisma.expert_slotIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type expert_slotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_slotSelect<ExtArgs> | null;
    omit?: Prisma.expert_slotOmit<ExtArgs> | null;
    include?: Prisma.expert_slotInclude<ExtArgs> | null;
    where: Prisma.expert_slotWhereUniqueInput;
    create: Prisma.XOR<Prisma.expert_slotCreateInput, Prisma.expert_slotUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.expert_slotUpdateInput, Prisma.expert_slotUncheckedUpdateInput>;
};
export type expert_slotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_slotSelect<ExtArgs> | null;
    omit?: Prisma.expert_slotOmit<ExtArgs> | null;
    include?: Prisma.expert_slotInclude<ExtArgs> | null;
    where: Prisma.expert_slotWhereUniqueInput;
};
export type expert_slotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.expert_slotWhereInput;
    limit?: number;
};
export type expert_slot$expert_bookingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type expert_slotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.expert_slotSelect<ExtArgs> | null;
    omit?: Prisma.expert_slotOmit<ExtArgs> | null;
    include?: Prisma.expert_slotInclude<ExtArgs> | null;
};
