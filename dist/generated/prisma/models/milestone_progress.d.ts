import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type milestone_progressModel = runtime.Types.Result.DefaultSelection<Prisma.$milestone_progressPayload>;
export type AggregateMilestone_progress = {
    _count: Milestone_progressCountAggregateOutputType | null;
    _avg: Milestone_progressAvgAggregateOutputType | null;
    _sum: Milestone_progressSumAggregateOutputType | null;
    _min: Milestone_progressMinAggregateOutputType | null;
    _max: Milestone_progressMaxAggregateOutputType | null;
};
export type Milestone_progressAvgAggregateOutputType = {
    progress_value: runtime.Decimal | null;
};
export type Milestone_progressSumAggregateOutputType = {
    progress_value: runtime.Decimal | null;
};
export type Milestone_progressMinAggregateOutputType = {
    id: string | null;
    milestone_id: string | null;
    customer_id: string | null;
    baby_id: string | null;
    progress_value: runtime.Decimal | null;
    is_completed: boolean | null;
    completed_at: Date | null;
    points_awarded: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Milestone_progressMaxAggregateOutputType = {
    id: string | null;
    milestone_id: string | null;
    customer_id: string | null;
    baby_id: string | null;
    progress_value: runtime.Decimal | null;
    is_completed: boolean | null;
    completed_at: Date | null;
    points_awarded: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Milestone_progressCountAggregateOutputType = {
    id: number;
    milestone_id: number;
    customer_id: number;
    baby_id: number;
    progress_value: number;
    is_completed: number;
    completed_at: number;
    points_awarded: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Milestone_progressAvgAggregateInputType = {
    progress_value?: true;
};
export type Milestone_progressSumAggregateInputType = {
    progress_value?: true;
};
export type Milestone_progressMinAggregateInputType = {
    id?: true;
    milestone_id?: true;
    customer_id?: true;
    baby_id?: true;
    progress_value?: true;
    is_completed?: true;
    completed_at?: true;
    points_awarded?: true;
    created_at?: true;
    updated_at?: true;
};
export type Milestone_progressMaxAggregateInputType = {
    id?: true;
    milestone_id?: true;
    customer_id?: true;
    baby_id?: true;
    progress_value?: true;
    is_completed?: true;
    completed_at?: true;
    points_awarded?: true;
    created_at?: true;
    updated_at?: true;
};
export type Milestone_progressCountAggregateInputType = {
    id?: true;
    milestone_id?: true;
    customer_id?: true;
    baby_id?: true;
    progress_value?: true;
    is_completed?: true;
    completed_at?: true;
    points_awarded?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Milestone_progressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.milestone_progressWhereInput;
    orderBy?: Prisma.milestone_progressOrderByWithRelationInput | Prisma.milestone_progressOrderByWithRelationInput[];
    cursor?: Prisma.milestone_progressWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Milestone_progressCountAggregateInputType;
    _avg?: Milestone_progressAvgAggregateInputType;
    _sum?: Milestone_progressSumAggregateInputType;
    _min?: Milestone_progressMinAggregateInputType;
    _max?: Milestone_progressMaxAggregateInputType;
};
export type GetMilestone_progressAggregateType<T extends Milestone_progressAggregateArgs> = {
    [P in keyof T & keyof AggregateMilestone_progress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMilestone_progress[P]> : Prisma.GetScalarType<T[P], AggregateMilestone_progress[P]>;
};
export type milestone_progressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.milestone_progressWhereInput;
    orderBy?: Prisma.milestone_progressOrderByWithAggregationInput | Prisma.milestone_progressOrderByWithAggregationInput[];
    by: Prisma.Milestone_progressScalarFieldEnum[] | Prisma.Milestone_progressScalarFieldEnum;
    having?: Prisma.milestone_progressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Milestone_progressCountAggregateInputType | true;
    _avg?: Milestone_progressAvgAggregateInputType;
    _sum?: Milestone_progressSumAggregateInputType;
    _min?: Milestone_progressMinAggregateInputType;
    _max?: Milestone_progressMaxAggregateInputType;
};
export type Milestone_progressGroupByOutputType = {
    id: string;
    milestone_id: string;
    customer_id: string;
    baby_id: string | null;
    progress_value: runtime.Decimal;
    is_completed: boolean;
    completed_at: Date | null;
    points_awarded: boolean;
    created_at: Date;
    updated_at: Date;
    _count: Milestone_progressCountAggregateOutputType | null;
    _avg: Milestone_progressAvgAggregateOutputType | null;
    _sum: Milestone_progressSumAggregateOutputType | null;
    _min: Milestone_progressMinAggregateOutputType | null;
    _max: Milestone_progressMaxAggregateOutputType | null;
};
export type GetMilestone_progressGroupByPayload<T extends milestone_progressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Milestone_progressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Milestone_progressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Milestone_progressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Milestone_progressGroupByOutputType[P]>;
}>>;
export type milestone_progressWhereInput = {
    AND?: Prisma.milestone_progressWhereInput | Prisma.milestone_progressWhereInput[];
    OR?: Prisma.milestone_progressWhereInput[];
    NOT?: Prisma.milestone_progressWhereInput | Prisma.milestone_progressWhereInput[];
    id?: Prisma.UuidFilter<"milestone_progress"> | string;
    milestone_id?: Prisma.UuidFilter<"milestone_progress"> | string;
    customer_id?: Prisma.UuidFilter<"milestone_progress"> | string;
    baby_id?: Prisma.UuidNullableFilter<"milestone_progress"> | string | null;
    progress_value?: Prisma.DecimalFilter<"milestone_progress"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFilter<"milestone_progress"> | boolean;
    completed_at?: Prisma.DateTimeNullableFilter<"milestone_progress"> | Date | string | null;
    points_awarded?: Prisma.BoolFilter<"milestone_progress"> | boolean;
    created_at?: Prisma.DateTimeFilter<"milestone_progress"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"milestone_progress"> | Date | string;
    baby?: Prisma.XOR<Prisma.BabyNullableScalarRelationFilter, Prisma.BabyWhereInput> | null;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    milestone_definition?: Prisma.XOR<Prisma.Milestone_definitionScalarRelationFilter, Prisma.milestone_definitionWhereInput>;
};
export type milestone_progressOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    milestone_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    progress_value?: Prisma.SortOrder;
    is_completed?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    points_awarded?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    baby?: Prisma.BabyOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    milestone_definition?: Prisma.milestone_definitionOrderByWithRelationInput;
};
export type milestone_progressWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    milestone_id_customer_id_baby_id?: Prisma.milestone_progressMilestone_idCustomer_idBaby_idCompoundUniqueInput;
    AND?: Prisma.milestone_progressWhereInput | Prisma.milestone_progressWhereInput[];
    OR?: Prisma.milestone_progressWhereInput[];
    NOT?: Prisma.milestone_progressWhereInput | Prisma.milestone_progressWhereInput[];
    milestone_id?: Prisma.UuidFilter<"milestone_progress"> | string;
    customer_id?: Prisma.UuidFilter<"milestone_progress"> | string;
    baby_id?: Prisma.UuidNullableFilter<"milestone_progress"> | string | null;
    progress_value?: Prisma.DecimalFilter<"milestone_progress"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFilter<"milestone_progress"> | boolean;
    completed_at?: Prisma.DateTimeNullableFilter<"milestone_progress"> | Date | string | null;
    points_awarded?: Prisma.BoolFilter<"milestone_progress"> | boolean;
    created_at?: Prisma.DateTimeFilter<"milestone_progress"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"milestone_progress"> | Date | string;
    baby?: Prisma.XOR<Prisma.BabyNullableScalarRelationFilter, Prisma.BabyWhereInput> | null;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    milestone_definition?: Prisma.XOR<Prisma.Milestone_definitionScalarRelationFilter, Prisma.milestone_definitionWhereInput>;
}, "id" | "milestone_id_customer_id_baby_id">;
export type milestone_progressOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    milestone_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    progress_value?: Prisma.SortOrder;
    is_completed?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    points_awarded?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.milestone_progressCountOrderByAggregateInput;
    _avg?: Prisma.milestone_progressAvgOrderByAggregateInput;
    _max?: Prisma.milestone_progressMaxOrderByAggregateInput;
    _min?: Prisma.milestone_progressMinOrderByAggregateInput;
    _sum?: Prisma.milestone_progressSumOrderByAggregateInput;
};
export type milestone_progressScalarWhereWithAggregatesInput = {
    AND?: Prisma.milestone_progressScalarWhereWithAggregatesInput | Prisma.milestone_progressScalarWhereWithAggregatesInput[];
    OR?: Prisma.milestone_progressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.milestone_progressScalarWhereWithAggregatesInput | Prisma.milestone_progressScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"milestone_progress"> | string;
    milestone_id?: Prisma.UuidWithAggregatesFilter<"milestone_progress"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"milestone_progress"> | string;
    baby_id?: Prisma.UuidNullableWithAggregatesFilter<"milestone_progress"> | string | null;
    progress_value?: Prisma.DecimalWithAggregatesFilter<"milestone_progress"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolWithAggregatesFilter<"milestone_progress"> | boolean;
    completed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"milestone_progress"> | Date | string | null;
    points_awarded?: Prisma.BoolWithAggregatesFilter<"milestone_progress"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"milestone_progress"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"milestone_progress"> | Date | string;
};
export type milestone_progressCreateInput = {
    id?: string;
    progress_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    points_awarded?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    baby?: Prisma.BabyCreateNestedOneWithoutMilestone_progressInput;
    customer: Prisma.CustomerCreateNestedOneWithoutMilestone_progressInput;
    milestone_definition: Prisma.milestone_definitionCreateNestedOneWithoutMilestone_progressInput;
};
export type milestone_progressUncheckedCreateInput = {
    id?: string;
    milestone_id: string;
    customer_id: string;
    baby_id?: string | null;
    progress_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    points_awarded?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type milestone_progressUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    points_awarded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    baby?: Prisma.BabyUpdateOneWithoutMilestone_progressNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutMilestone_progressNestedInput;
    milestone_definition?: Prisma.milestone_definitionUpdateOneRequiredWithoutMilestone_progressNestedInput;
};
export type milestone_progressUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    milestone_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    progress_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    points_awarded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type milestone_progressCreateManyInput = {
    id?: string;
    milestone_id: string;
    customer_id: string;
    baby_id?: string | null;
    progress_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    points_awarded?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type milestone_progressUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    points_awarded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type milestone_progressUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    milestone_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    progress_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    points_awarded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Milestone_progressListRelationFilter = {
    every?: Prisma.milestone_progressWhereInput;
    some?: Prisma.milestone_progressWhereInput;
    none?: Prisma.milestone_progressWhereInput;
};
export type milestone_progressOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type milestone_progressMilestone_idCustomer_idBaby_idCompoundUniqueInput = {
    milestone_id: string;
    customer_id: string;
    baby_id: string;
};
export type milestone_progressCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    milestone_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrder;
    progress_value?: Prisma.SortOrder;
    is_completed?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    points_awarded?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type milestone_progressAvgOrderByAggregateInput = {
    progress_value?: Prisma.SortOrder;
};
export type milestone_progressMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    milestone_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrder;
    progress_value?: Prisma.SortOrder;
    is_completed?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    points_awarded?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type milestone_progressMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    milestone_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrder;
    progress_value?: Prisma.SortOrder;
    is_completed?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    points_awarded?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type milestone_progressSumOrderByAggregateInput = {
    progress_value?: Prisma.SortOrder;
};
export type milestone_progressCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.milestone_progressCreateWithoutCustomerInput, Prisma.milestone_progressUncheckedCreateWithoutCustomerInput> | Prisma.milestone_progressCreateWithoutCustomerInput[] | Prisma.milestone_progressUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.milestone_progressCreateOrConnectWithoutCustomerInput | Prisma.milestone_progressCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.milestone_progressCreateManyCustomerInputEnvelope;
    connect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
};
export type milestone_progressUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.milestone_progressCreateWithoutCustomerInput, Prisma.milestone_progressUncheckedCreateWithoutCustomerInput> | Prisma.milestone_progressCreateWithoutCustomerInput[] | Prisma.milestone_progressUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.milestone_progressCreateOrConnectWithoutCustomerInput | Prisma.milestone_progressCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.milestone_progressCreateManyCustomerInputEnvelope;
    connect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
};
export type milestone_progressUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.milestone_progressCreateWithoutCustomerInput, Prisma.milestone_progressUncheckedCreateWithoutCustomerInput> | Prisma.milestone_progressCreateWithoutCustomerInput[] | Prisma.milestone_progressUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.milestone_progressCreateOrConnectWithoutCustomerInput | Prisma.milestone_progressCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.milestone_progressUpsertWithWhereUniqueWithoutCustomerInput | Prisma.milestone_progressUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.milestone_progressCreateManyCustomerInputEnvelope;
    set?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    disconnect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    delete?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    connect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    update?: Prisma.milestone_progressUpdateWithWhereUniqueWithoutCustomerInput | Prisma.milestone_progressUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.milestone_progressUpdateManyWithWhereWithoutCustomerInput | Prisma.milestone_progressUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.milestone_progressScalarWhereInput | Prisma.milestone_progressScalarWhereInput[];
};
export type milestone_progressUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.milestone_progressCreateWithoutCustomerInput, Prisma.milestone_progressUncheckedCreateWithoutCustomerInput> | Prisma.milestone_progressCreateWithoutCustomerInput[] | Prisma.milestone_progressUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.milestone_progressCreateOrConnectWithoutCustomerInput | Prisma.milestone_progressCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.milestone_progressUpsertWithWhereUniqueWithoutCustomerInput | Prisma.milestone_progressUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.milestone_progressCreateManyCustomerInputEnvelope;
    set?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    disconnect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    delete?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    connect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    update?: Prisma.milestone_progressUpdateWithWhereUniqueWithoutCustomerInput | Prisma.milestone_progressUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.milestone_progressUpdateManyWithWhereWithoutCustomerInput | Prisma.milestone_progressUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.milestone_progressScalarWhereInput | Prisma.milestone_progressScalarWhereInput[];
};
export type milestone_progressCreateNestedManyWithoutBabyInput = {
    create?: Prisma.XOR<Prisma.milestone_progressCreateWithoutBabyInput, Prisma.milestone_progressUncheckedCreateWithoutBabyInput> | Prisma.milestone_progressCreateWithoutBabyInput[] | Prisma.milestone_progressUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.milestone_progressCreateOrConnectWithoutBabyInput | Prisma.milestone_progressCreateOrConnectWithoutBabyInput[];
    createMany?: Prisma.milestone_progressCreateManyBabyInputEnvelope;
    connect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
};
export type milestone_progressUncheckedCreateNestedManyWithoutBabyInput = {
    create?: Prisma.XOR<Prisma.milestone_progressCreateWithoutBabyInput, Prisma.milestone_progressUncheckedCreateWithoutBabyInput> | Prisma.milestone_progressCreateWithoutBabyInput[] | Prisma.milestone_progressUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.milestone_progressCreateOrConnectWithoutBabyInput | Prisma.milestone_progressCreateOrConnectWithoutBabyInput[];
    createMany?: Prisma.milestone_progressCreateManyBabyInputEnvelope;
    connect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
};
export type milestone_progressUpdateManyWithoutBabyNestedInput = {
    create?: Prisma.XOR<Prisma.milestone_progressCreateWithoutBabyInput, Prisma.milestone_progressUncheckedCreateWithoutBabyInput> | Prisma.milestone_progressCreateWithoutBabyInput[] | Prisma.milestone_progressUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.milestone_progressCreateOrConnectWithoutBabyInput | Prisma.milestone_progressCreateOrConnectWithoutBabyInput[];
    upsert?: Prisma.milestone_progressUpsertWithWhereUniqueWithoutBabyInput | Prisma.milestone_progressUpsertWithWhereUniqueWithoutBabyInput[];
    createMany?: Prisma.milestone_progressCreateManyBabyInputEnvelope;
    set?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    disconnect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    delete?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    connect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    update?: Prisma.milestone_progressUpdateWithWhereUniqueWithoutBabyInput | Prisma.milestone_progressUpdateWithWhereUniqueWithoutBabyInput[];
    updateMany?: Prisma.milestone_progressUpdateManyWithWhereWithoutBabyInput | Prisma.milestone_progressUpdateManyWithWhereWithoutBabyInput[];
    deleteMany?: Prisma.milestone_progressScalarWhereInput | Prisma.milestone_progressScalarWhereInput[];
};
export type milestone_progressUncheckedUpdateManyWithoutBabyNestedInput = {
    create?: Prisma.XOR<Prisma.milestone_progressCreateWithoutBabyInput, Prisma.milestone_progressUncheckedCreateWithoutBabyInput> | Prisma.milestone_progressCreateWithoutBabyInput[] | Prisma.milestone_progressUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.milestone_progressCreateOrConnectWithoutBabyInput | Prisma.milestone_progressCreateOrConnectWithoutBabyInput[];
    upsert?: Prisma.milestone_progressUpsertWithWhereUniqueWithoutBabyInput | Prisma.milestone_progressUpsertWithWhereUniqueWithoutBabyInput[];
    createMany?: Prisma.milestone_progressCreateManyBabyInputEnvelope;
    set?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    disconnect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    delete?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    connect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    update?: Prisma.milestone_progressUpdateWithWhereUniqueWithoutBabyInput | Prisma.milestone_progressUpdateWithWhereUniqueWithoutBabyInput[];
    updateMany?: Prisma.milestone_progressUpdateManyWithWhereWithoutBabyInput | Prisma.milestone_progressUpdateManyWithWhereWithoutBabyInput[];
    deleteMany?: Prisma.milestone_progressScalarWhereInput | Prisma.milestone_progressScalarWhereInput[];
};
export type milestone_progressCreateNestedManyWithoutMilestone_definitionInput = {
    create?: Prisma.XOR<Prisma.milestone_progressCreateWithoutMilestone_definitionInput, Prisma.milestone_progressUncheckedCreateWithoutMilestone_definitionInput> | Prisma.milestone_progressCreateWithoutMilestone_definitionInput[] | Prisma.milestone_progressUncheckedCreateWithoutMilestone_definitionInput[];
    connectOrCreate?: Prisma.milestone_progressCreateOrConnectWithoutMilestone_definitionInput | Prisma.milestone_progressCreateOrConnectWithoutMilestone_definitionInput[];
    createMany?: Prisma.milestone_progressCreateManyMilestone_definitionInputEnvelope;
    connect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
};
export type milestone_progressUncheckedCreateNestedManyWithoutMilestone_definitionInput = {
    create?: Prisma.XOR<Prisma.milestone_progressCreateWithoutMilestone_definitionInput, Prisma.milestone_progressUncheckedCreateWithoutMilestone_definitionInput> | Prisma.milestone_progressCreateWithoutMilestone_definitionInput[] | Prisma.milestone_progressUncheckedCreateWithoutMilestone_definitionInput[];
    connectOrCreate?: Prisma.milestone_progressCreateOrConnectWithoutMilestone_definitionInput | Prisma.milestone_progressCreateOrConnectWithoutMilestone_definitionInput[];
    createMany?: Prisma.milestone_progressCreateManyMilestone_definitionInputEnvelope;
    connect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
};
export type milestone_progressUpdateManyWithoutMilestone_definitionNestedInput = {
    create?: Prisma.XOR<Prisma.milestone_progressCreateWithoutMilestone_definitionInput, Prisma.milestone_progressUncheckedCreateWithoutMilestone_definitionInput> | Prisma.milestone_progressCreateWithoutMilestone_definitionInput[] | Prisma.milestone_progressUncheckedCreateWithoutMilestone_definitionInput[];
    connectOrCreate?: Prisma.milestone_progressCreateOrConnectWithoutMilestone_definitionInput | Prisma.milestone_progressCreateOrConnectWithoutMilestone_definitionInput[];
    upsert?: Prisma.milestone_progressUpsertWithWhereUniqueWithoutMilestone_definitionInput | Prisma.milestone_progressUpsertWithWhereUniqueWithoutMilestone_definitionInput[];
    createMany?: Prisma.milestone_progressCreateManyMilestone_definitionInputEnvelope;
    set?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    disconnect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    delete?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    connect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    update?: Prisma.milestone_progressUpdateWithWhereUniqueWithoutMilestone_definitionInput | Prisma.milestone_progressUpdateWithWhereUniqueWithoutMilestone_definitionInput[];
    updateMany?: Prisma.milestone_progressUpdateManyWithWhereWithoutMilestone_definitionInput | Prisma.milestone_progressUpdateManyWithWhereWithoutMilestone_definitionInput[];
    deleteMany?: Prisma.milestone_progressScalarWhereInput | Prisma.milestone_progressScalarWhereInput[];
};
export type milestone_progressUncheckedUpdateManyWithoutMilestone_definitionNestedInput = {
    create?: Prisma.XOR<Prisma.milestone_progressCreateWithoutMilestone_definitionInput, Prisma.milestone_progressUncheckedCreateWithoutMilestone_definitionInput> | Prisma.milestone_progressCreateWithoutMilestone_definitionInput[] | Prisma.milestone_progressUncheckedCreateWithoutMilestone_definitionInput[];
    connectOrCreate?: Prisma.milestone_progressCreateOrConnectWithoutMilestone_definitionInput | Prisma.milestone_progressCreateOrConnectWithoutMilestone_definitionInput[];
    upsert?: Prisma.milestone_progressUpsertWithWhereUniqueWithoutMilestone_definitionInput | Prisma.milestone_progressUpsertWithWhereUniqueWithoutMilestone_definitionInput[];
    createMany?: Prisma.milestone_progressCreateManyMilestone_definitionInputEnvelope;
    set?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    disconnect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    delete?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    connect?: Prisma.milestone_progressWhereUniqueInput | Prisma.milestone_progressWhereUniqueInput[];
    update?: Prisma.milestone_progressUpdateWithWhereUniqueWithoutMilestone_definitionInput | Prisma.milestone_progressUpdateWithWhereUniqueWithoutMilestone_definitionInput[];
    updateMany?: Prisma.milestone_progressUpdateManyWithWhereWithoutMilestone_definitionInput | Prisma.milestone_progressUpdateManyWithWhereWithoutMilestone_definitionInput[];
    deleteMany?: Prisma.milestone_progressScalarWhereInput | Prisma.milestone_progressScalarWhereInput[];
};
export type milestone_progressCreateWithoutCustomerInput = {
    id?: string;
    progress_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    points_awarded?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    baby?: Prisma.BabyCreateNestedOneWithoutMilestone_progressInput;
    milestone_definition: Prisma.milestone_definitionCreateNestedOneWithoutMilestone_progressInput;
};
export type milestone_progressUncheckedCreateWithoutCustomerInput = {
    id?: string;
    milestone_id: string;
    baby_id?: string | null;
    progress_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    points_awarded?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type milestone_progressCreateOrConnectWithoutCustomerInput = {
    where: Prisma.milestone_progressWhereUniqueInput;
    create: Prisma.XOR<Prisma.milestone_progressCreateWithoutCustomerInput, Prisma.milestone_progressUncheckedCreateWithoutCustomerInput>;
};
export type milestone_progressCreateManyCustomerInputEnvelope = {
    data: Prisma.milestone_progressCreateManyCustomerInput | Prisma.milestone_progressCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type milestone_progressUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.milestone_progressWhereUniqueInput;
    update: Prisma.XOR<Prisma.milestone_progressUpdateWithoutCustomerInput, Prisma.milestone_progressUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.milestone_progressCreateWithoutCustomerInput, Prisma.milestone_progressUncheckedCreateWithoutCustomerInput>;
};
export type milestone_progressUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.milestone_progressWhereUniqueInput;
    data: Prisma.XOR<Prisma.milestone_progressUpdateWithoutCustomerInput, Prisma.milestone_progressUncheckedUpdateWithoutCustomerInput>;
};
export type milestone_progressUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.milestone_progressScalarWhereInput;
    data: Prisma.XOR<Prisma.milestone_progressUpdateManyMutationInput, Prisma.milestone_progressUncheckedUpdateManyWithoutCustomerInput>;
};
export type milestone_progressScalarWhereInput = {
    AND?: Prisma.milestone_progressScalarWhereInput | Prisma.milestone_progressScalarWhereInput[];
    OR?: Prisma.milestone_progressScalarWhereInput[];
    NOT?: Prisma.milestone_progressScalarWhereInput | Prisma.milestone_progressScalarWhereInput[];
    id?: Prisma.UuidFilter<"milestone_progress"> | string;
    milestone_id?: Prisma.UuidFilter<"milestone_progress"> | string;
    customer_id?: Prisma.UuidFilter<"milestone_progress"> | string;
    baby_id?: Prisma.UuidNullableFilter<"milestone_progress"> | string | null;
    progress_value?: Prisma.DecimalFilter<"milestone_progress"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFilter<"milestone_progress"> | boolean;
    completed_at?: Prisma.DateTimeNullableFilter<"milestone_progress"> | Date | string | null;
    points_awarded?: Prisma.BoolFilter<"milestone_progress"> | boolean;
    created_at?: Prisma.DateTimeFilter<"milestone_progress"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"milestone_progress"> | Date | string;
};
export type milestone_progressCreateWithoutBabyInput = {
    id?: string;
    progress_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    points_awarded?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutMilestone_progressInput;
    milestone_definition: Prisma.milestone_definitionCreateNestedOneWithoutMilestone_progressInput;
};
export type milestone_progressUncheckedCreateWithoutBabyInput = {
    id?: string;
    milestone_id: string;
    customer_id: string;
    progress_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    points_awarded?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type milestone_progressCreateOrConnectWithoutBabyInput = {
    where: Prisma.milestone_progressWhereUniqueInput;
    create: Prisma.XOR<Prisma.milestone_progressCreateWithoutBabyInput, Prisma.milestone_progressUncheckedCreateWithoutBabyInput>;
};
export type milestone_progressCreateManyBabyInputEnvelope = {
    data: Prisma.milestone_progressCreateManyBabyInput | Prisma.milestone_progressCreateManyBabyInput[];
    skipDuplicates?: boolean;
};
export type milestone_progressUpsertWithWhereUniqueWithoutBabyInput = {
    where: Prisma.milestone_progressWhereUniqueInput;
    update: Prisma.XOR<Prisma.milestone_progressUpdateWithoutBabyInput, Prisma.milestone_progressUncheckedUpdateWithoutBabyInput>;
    create: Prisma.XOR<Prisma.milestone_progressCreateWithoutBabyInput, Prisma.milestone_progressUncheckedCreateWithoutBabyInput>;
};
export type milestone_progressUpdateWithWhereUniqueWithoutBabyInput = {
    where: Prisma.milestone_progressWhereUniqueInput;
    data: Prisma.XOR<Prisma.milestone_progressUpdateWithoutBabyInput, Prisma.milestone_progressUncheckedUpdateWithoutBabyInput>;
};
export type milestone_progressUpdateManyWithWhereWithoutBabyInput = {
    where: Prisma.milestone_progressScalarWhereInput;
    data: Prisma.XOR<Prisma.milestone_progressUpdateManyMutationInput, Prisma.milestone_progressUncheckedUpdateManyWithoutBabyInput>;
};
export type milestone_progressCreateWithoutMilestone_definitionInput = {
    id?: string;
    progress_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    points_awarded?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    baby?: Prisma.BabyCreateNestedOneWithoutMilestone_progressInput;
    customer: Prisma.CustomerCreateNestedOneWithoutMilestone_progressInput;
};
export type milestone_progressUncheckedCreateWithoutMilestone_definitionInput = {
    id?: string;
    customer_id: string;
    baby_id?: string | null;
    progress_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    points_awarded?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type milestone_progressCreateOrConnectWithoutMilestone_definitionInput = {
    where: Prisma.milestone_progressWhereUniqueInput;
    create: Prisma.XOR<Prisma.milestone_progressCreateWithoutMilestone_definitionInput, Prisma.milestone_progressUncheckedCreateWithoutMilestone_definitionInput>;
};
export type milestone_progressCreateManyMilestone_definitionInputEnvelope = {
    data: Prisma.milestone_progressCreateManyMilestone_definitionInput | Prisma.milestone_progressCreateManyMilestone_definitionInput[];
    skipDuplicates?: boolean;
};
export type milestone_progressUpsertWithWhereUniqueWithoutMilestone_definitionInput = {
    where: Prisma.milestone_progressWhereUniqueInput;
    update: Prisma.XOR<Prisma.milestone_progressUpdateWithoutMilestone_definitionInput, Prisma.milestone_progressUncheckedUpdateWithoutMilestone_definitionInput>;
    create: Prisma.XOR<Prisma.milestone_progressCreateWithoutMilestone_definitionInput, Prisma.milestone_progressUncheckedCreateWithoutMilestone_definitionInput>;
};
export type milestone_progressUpdateWithWhereUniqueWithoutMilestone_definitionInput = {
    where: Prisma.milestone_progressWhereUniqueInput;
    data: Prisma.XOR<Prisma.milestone_progressUpdateWithoutMilestone_definitionInput, Prisma.milestone_progressUncheckedUpdateWithoutMilestone_definitionInput>;
};
export type milestone_progressUpdateManyWithWhereWithoutMilestone_definitionInput = {
    where: Prisma.milestone_progressScalarWhereInput;
    data: Prisma.XOR<Prisma.milestone_progressUpdateManyMutationInput, Prisma.milestone_progressUncheckedUpdateManyWithoutMilestone_definitionInput>;
};
export type milestone_progressCreateManyCustomerInput = {
    id?: string;
    milestone_id: string;
    baby_id?: string | null;
    progress_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    points_awarded?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type milestone_progressUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    points_awarded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    baby?: Prisma.BabyUpdateOneWithoutMilestone_progressNestedInput;
    milestone_definition?: Prisma.milestone_definitionUpdateOneRequiredWithoutMilestone_progressNestedInput;
};
export type milestone_progressUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    milestone_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    progress_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    points_awarded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type milestone_progressUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    milestone_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    progress_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    points_awarded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type milestone_progressCreateManyBabyInput = {
    id?: string;
    milestone_id: string;
    customer_id: string;
    progress_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    points_awarded?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type milestone_progressUpdateWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    points_awarded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutMilestone_progressNestedInput;
    milestone_definition?: Prisma.milestone_definitionUpdateOneRequiredWithoutMilestone_progressNestedInput;
};
export type milestone_progressUncheckedUpdateWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    milestone_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    points_awarded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type milestone_progressUncheckedUpdateManyWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    milestone_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    points_awarded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type milestone_progressCreateManyMilestone_definitionInput = {
    id?: string;
    customer_id: string;
    baby_id?: string | null;
    progress_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    points_awarded?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type milestone_progressUpdateWithoutMilestone_definitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    progress_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    points_awarded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    baby?: Prisma.BabyUpdateOneWithoutMilestone_progressNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutMilestone_progressNestedInput;
};
export type milestone_progressUncheckedUpdateWithoutMilestone_definitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    progress_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    points_awarded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type milestone_progressUncheckedUpdateManyWithoutMilestone_definitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    progress_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    points_awarded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type milestone_progressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    milestone_id?: boolean;
    customer_id?: boolean;
    baby_id?: boolean;
    progress_value?: boolean;
    is_completed?: boolean;
    completed_at?: boolean;
    points_awarded?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    baby?: boolean | Prisma.milestone_progress$babyArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    milestone_definition?: boolean | Prisma.milestone_definitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["milestone_progress"]>;
export type milestone_progressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    milestone_id?: boolean;
    customer_id?: boolean;
    baby_id?: boolean;
    progress_value?: boolean;
    is_completed?: boolean;
    completed_at?: boolean;
    points_awarded?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    baby?: boolean | Prisma.milestone_progress$babyArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    milestone_definition?: boolean | Prisma.milestone_definitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["milestone_progress"]>;
export type milestone_progressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    milestone_id?: boolean;
    customer_id?: boolean;
    baby_id?: boolean;
    progress_value?: boolean;
    is_completed?: boolean;
    completed_at?: boolean;
    points_awarded?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    baby?: boolean | Prisma.milestone_progress$babyArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    milestone_definition?: boolean | Prisma.milestone_definitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["milestone_progress"]>;
export type milestone_progressSelectScalar = {
    id?: boolean;
    milestone_id?: boolean;
    customer_id?: boolean;
    baby_id?: boolean;
    progress_value?: boolean;
    is_completed?: boolean;
    completed_at?: boolean;
    points_awarded?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type milestone_progressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "milestone_id" | "customer_id" | "baby_id" | "progress_value" | "is_completed" | "completed_at" | "points_awarded" | "created_at" | "updated_at", ExtArgs["result"]["milestone_progress"]>;
export type milestone_progressInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.milestone_progress$babyArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    milestone_definition?: boolean | Prisma.milestone_definitionDefaultArgs<ExtArgs>;
};
export type milestone_progressIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.milestone_progress$babyArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    milestone_definition?: boolean | Prisma.milestone_definitionDefaultArgs<ExtArgs>;
};
export type milestone_progressIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.milestone_progress$babyArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    milestone_definition?: boolean | Prisma.milestone_definitionDefaultArgs<ExtArgs>;
};
export type $milestone_progressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "milestone_progress";
    objects: {
        baby: Prisma.$BabyPayload<ExtArgs> | null;
        customer: Prisma.$CustomerPayload<ExtArgs>;
        milestone_definition: Prisma.$milestone_definitionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        milestone_id: string;
        customer_id: string;
        baby_id: string | null;
        progress_value: runtime.Decimal;
        is_completed: boolean;
        completed_at: Date | null;
        points_awarded: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["milestone_progress"]>;
    composites: {};
};
export type milestone_progressGetPayload<S extends boolean | null | undefined | milestone_progressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$milestone_progressPayload, S>;
export type milestone_progressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<milestone_progressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Milestone_progressCountAggregateInputType | true;
};
export interface milestone_progressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['milestone_progress'];
        meta: {
            name: 'milestone_progress';
        };
    };
    findUnique<T extends milestone_progressFindUniqueArgs>(args: Prisma.SelectSubset<T, milestone_progressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__milestone_progressClient<runtime.Types.Result.GetResult<Prisma.$milestone_progressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends milestone_progressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, milestone_progressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__milestone_progressClient<runtime.Types.Result.GetResult<Prisma.$milestone_progressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends milestone_progressFindFirstArgs>(args?: Prisma.SelectSubset<T, milestone_progressFindFirstArgs<ExtArgs>>): Prisma.Prisma__milestone_progressClient<runtime.Types.Result.GetResult<Prisma.$milestone_progressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends milestone_progressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, milestone_progressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__milestone_progressClient<runtime.Types.Result.GetResult<Prisma.$milestone_progressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends milestone_progressFindManyArgs>(args?: Prisma.SelectSubset<T, milestone_progressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$milestone_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends milestone_progressCreateArgs>(args: Prisma.SelectSubset<T, milestone_progressCreateArgs<ExtArgs>>): Prisma.Prisma__milestone_progressClient<runtime.Types.Result.GetResult<Prisma.$milestone_progressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends milestone_progressCreateManyArgs>(args?: Prisma.SelectSubset<T, milestone_progressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends milestone_progressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, milestone_progressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$milestone_progressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends milestone_progressDeleteArgs>(args: Prisma.SelectSubset<T, milestone_progressDeleteArgs<ExtArgs>>): Prisma.Prisma__milestone_progressClient<runtime.Types.Result.GetResult<Prisma.$milestone_progressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends milestone_progressUpdateArgs>(args: Prisma.SelectSubset<T, milestone_progressUpdateArgs<ExtArgs>>): Prisma.Prisma__milestone_progressClient<runtime.Types.Result.GetResult<Prisma.$milestone_progressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends milestone_progressDeleteManyArgs>(args?: Prisma.SelectSubset<T, milestone_progressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends milestone_progressUpdateManyArgs>(args: Prisma.SelectSubset<T, milestone_progressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends milestone_progressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, milestone_progressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$milestone_progressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends milestone_progressUpsertArgs>(args: Prisma.SelectSubset<T, milestone_progressUpsertArgs<ExtArgs>>): Prisma.Prisma__milestone_progressClient<runtime.Types.Result.GetResult<Prisma.$milestone_progressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends milestone_progressCountArgs>(args?: Prisma.Subset<T, milestone_progressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Milestone_progressCountAggregateOutputType> : number>;
    aggregate<T extends Milestone_progressAggregateArgs>(args: Prisma.Subset<T, Milestone_progressAggregateArgs>): Prisma.PrismaPromise<GetMilestone_progressAggregateType<T>>;
    groupBy<T extends milestone_progressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: milestone_progressGroupByArgs['orderBy'];
    } : {
        orderBy?: milestone_progressGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, milestone_progressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestone_progressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: milestone_progressFieldRefs;
}
export interface Prisma__milestone_progressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    baby<T extends Prisma.milestone_progress$babyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.milestone_progress$babyArgs<ExtArgs>>): Prisma.Prisma__BabyClient<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    milestone_definition<T extends Prisma.milestone_definitionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.milestone_definitionDefaultArgs<ExtArgs>>): Prisma.Prisma__milestone_definitionClient<runtime.Types.Result.GetResult<Prisma.$milestone_definitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface milestone_progressFieldRefs {
    readonly id: Prisma.FieldRef<"milestone_progress", 'String'>;
    readonly milestone_id: Prisma.FieldRef<"milestone_progress", 'String'>;
    readonly customer_id: Prisma.FieldRef<"milestone_progress", 'String'>;
    readonly baby_id: Prisma.FieldRef<"milestone_progress", 'String'>;
    readonly progress_value: Prisma.FieldRef<"milestone_progress", 'Decimal'>;
    readonly is_completed: Prisma.FieldRef<"milestone_progress", 'Boolean'>;
    readonly completed_at: Prisma.FieldRef<"milestone_progress", 'DateTime'>;
    readonly points_awarded: Prisma.FieldRef<"milestone_progress", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"milestone_progress", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"milestone_progress", 'DateTime'>;
}
export type milestone_progressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_progressSelect<ExtArgs> | null;
    omit?: Prisma.milestone_progressOmit<ExtArgs> | null;
    include?: Prisma.milestone_progressInclude<ExtArgs> | null;
    where: Prisma.milestone_progressWhereUniqueInput;
};
export type milestone_progressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_progressSelect<ExtArgs> | null;
    omit?: Prisma.milestone_progressOmit<ExtArgs> | null;
    include?: Prisma.milestone_progressInclude<ExtArgs> | null;
    where: Prisma.milestone_progressWhereUniqueInput;
};
export type milestone_progressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type milestone_progressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type milestone_progressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type milestone_progressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_progressSelect<ExtArgs> | null;
    omit?: Prisma.milestone_progressOmit<ExtArgs> | null;
    include?: Prisma.milestone_progressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.milestone_progressCreateInput, Prisma.milestone_progressUncheckedCreateInput>;
};
export type milestone_progressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.milestone_progressCreateManyInput | Prisma.milestone_progressCreateManyInput[];
    skipDuplicates?: boolean;
};
export type milestone_progressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_progressSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.milestone_progressOmit<ExtArgs> | null;
    data: Prisma.milestone_progressCreateManyInput | Prisma.milestone_progressCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.milestone_progressIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type milestone_progressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_progressSelect<ExtArgs> | null;
    omit?: Prisma.milestone_progressOmit<ExtArgs> | null;
    include?: Prisma.milestone_progressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.milestone_progressUpdateInput, Prisma.milestone_progressUncheckedUpdateInput>;
    where: Prisma.milestone_progressWhereUniqueInput;
};
export type milestone_progressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.milestone_progressUpdateManyMutationInput, Prisma.milestone_progressUncheckedUpdateManyInput>;
    where?: Prisma.milestone_progressWhereInput;
    limit?: number;
};
export type milestone_progressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_progressSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.milestone_progressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.milestone_progressUpdateManyMutationInput, Prisma.milestone_progressUncheckedUpdateManyInput>;
    where?: Prisma.milestone_progressWhereInput;
    limit?: number;
    include?: Prisma.milestone_progressIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type milestone_progressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_progressSelect<ExtArgs> | null;
    omit?: Prisma.milestone_progressOmit<ExtArgs> | null;
    include?: Prisma.milestone_progressInclude<ExtArgs> | null;
    where: Prisma.milestone_progressWhereUniqueInput;
    create: Prisma.XOR<Prisma.milestone_progressCreateInput, Prisma.milestone_progressUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.milestone_progressUpdateInput, Prisma.milestone_progressUncheckedUpdateInput>;
};
export type milestone_progressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_progressSelect<ExtArgs> | null;
    omit?: Prisma.milestone_progressOmit<ExtArgs> | null;
    include?: Prisma.milestone_progressInclude<ExtArgs> | null;
    where: Prisma.milestone_progressWhereUniqueInput;
};
export type milestone_progressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.milestone_progressWhereInput;
    limit?: number;
};
export type milestone_progress$babyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelect<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    include?: Prisma.BabyInclude<ExtArgs> | null;
    where?: Prisma.BabyWhereInput;
};
export type milestone_progressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.milestone_progressSelect<ExtArgs> | null;
    omit?: Prisma.milestone_progressOmit<ExtArgs> | null;
    include?: Prisma.milestone_progressInclude<ExtArgs> | null;
};
