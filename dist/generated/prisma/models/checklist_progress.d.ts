import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type checklist_progressModel = runtime.Types.Result.DefaultSelection<Prisma.$checklist_progressPayload>;
export type AggregateChecklist_progress = {
    _count: Checklist_progressCountAggregateOutputType | null;
    _min: Checklist_progressMinAggregateOutputType | null;
    _max: Checklist_progressMaxAggregateOutputType | null;
};
export type Checklist_progressMinAggregateOutputType = {
    id: string | null;
    checklist_id: string | null;
    customer_id: string | null;
    baby_id: string | null;
    is_completed: boolean | null;
    completed_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Checklist_progressMaxAggregateOutputType = {
    id: string | null;
    checklist_id: string | null;
    customer_id: string | null;
    baby_id: string | null;
    is_completed: boolean | null;
    completed_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Checklist_progressCountAggregateOutputType = {
    id: number;
    checklist_id: number;
    customer_id: number;
    baby_id: number;
    completed_items: number;
    is_completed: number;
    completed_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Checklist_progressMinAggregateInputType = {
    id?: true;
    checklist_id?: true;
    customer_id?: true;
    baby_id?: true;
    is_completed?: true;
    completed_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type Checklist_progressMaxAggregateInputType = {
    id?: true;
    checklist_id?: true;
    customer_id?: true;
    baby_id?: true;
    is_completed?: true;
    completed_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type Checklist_progressCountAggregateInputType = {
    id?: true;
    checklist_id?: true;
    customer_id?: true;
    baby_id?: true;
    completed_items?: true;
    is_completed?: true;
    completed_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Checklist_progressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.checklist_progressWhereInput;
    orderBy?: Prisma.checklist_progressOrderByWithRelationInput | Prisma.checklist_progressOrderByWithRelationInput[];
    cursor?: Prisma.checklist_progressWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Checklist_progressCountAggregateInputType;
    _min?: Checklist_progressMinAggregateInputType;
    _max?: Checklist_progressMaxAggregateInputType;
};
export type GetChecklist_progressAggregateType<T extends Checklist_progressAggregateArgs> = {
    [P in keyof T & keyof AggregateChecklist_progress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChecklist_progress[P]> : Prisma.GetScalarType<T[P], AggregateChecklist_progress[P]>;
};
export type checklist_progressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.checklist_progressWhereInput;
    orderBy?: Prisma.checklist_progressOrderByWithAggregationInput | Prisma.checklist_progressOrderByWithAggregationInput[];
    by: Prisma.Checklist_progressScalarFieldEnum[] | Prisma.Checklist_progressScalarFieldEnum;
    having?: Prisma.checklist_progressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Checklist_progressCountAggregateInputType | true;
    _min?: Checklist_progressMinAggregateInputType;
    _max?: Checklist_progressMaxAggregateInputType;
};
export type Checklist_progressGroupByOutputType = {
    id: string;
    checklist_id: string;
    customer_id: string;
    baby_id: string | null;
    completed_items: runtime.JsonValue;
    is_completed: boolean;
    completed_at: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: Checklist_progressCountAggregateOutputType | null;
    _min: Checklist_progressMinAggregateOutputType | null;
    _max: Checklist_progressMaxAggregateOutputType | null;
};
export type GetChecklist_progressGroupByPayload<T extends checklist_progressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Checklist_progressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Checklist_progressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Checklist_progressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Checklist_progressGroupByOutputType[P]>;
}>>;
export type checklist_progressWhereInput = {
    AND?: Prisma.checklist_progressWhereInput | Prisma.checklist_progressWhereInput[];
    OR?: Prisma.checklist_progressWhereInput[];
    NOT?: Prisma.checklist_progressWhereInput | Prisma.checklist_progressWhereInput[];
    id?: Prisma.UuidFilter<"checklist_progress"> | string;
    checklist_id?: Prisma.UuidFilter<"checklist_progress"> | string;
    customer_id?: Prisma.UuidFilter<"checklist_progress"> | string;
    baby_id?: Prisma.UuidNullableFilter<"checklist_progress"> | string | null;
    completed_items?: Prisma.JsonFilter<"checklist_progress">;
    is_completed?: Prisma.BoolFilter<"checklist_progress"> | boolean;
    completed_at?: Prisma.DateTimeNullableFilter<"checklist_progress"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"checklist_progress"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"checklist_progress"> | Date | string;
    baby?: Prisma.XOR<Prisma.BabyNullableScalarRelationFilter, Prisma.BabyWhereInput> | null;
    checklist_definition?: Prisma.XOR<Prisma.Checklist_definitionScalarRelationFilter, Prisma.checklist_definitionWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
};
export type checklist_progressOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    checklist_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    completed_items?: Prisma.SortOrder;
    is_completed?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    baby?: Prisma.BabyOrderByWithRelationInput;
    checklist_definition?: Prisma.checklist_definitionOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type checklist_progressWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.checklist_progressWhereInput | Prisma.checklist_progressWhereInput[];
    OR?: Prisma.checklist_progressWhereInput[];
    NOT?: Prisma.checklist_progressWhereInput | Prisma.checklist_progressWhereInput[];
    checklist_id?: Prisma.UuidFilter<"checklist_progress"> | string;
    customer_id?: Prisma.UuidFilter<"checklist_progress"> | string;
    baby_id?: Prisma.UuidNullableFilter<"checklist_progress"> | string | null;
    completed_items?: Prisma.JsonFilter<"checklist_progress">;
    is_completed?: Prisma.BoolFilter<"checklist_progress"> | boolean;
    completed_at?: Prisma.DateTimeNullableFilter<"checklist_progress"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"checklist_progress"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"checklist_progress"> | Date | string;
    baby?: Prisma.XOR<Prisma.BabyNullableScalarRelationFilter, Prisma.BabyWhereInput> | null;
    checklist_definition?: Prisma.XOR<Prisma.Checklist_definitionScalarRelationFilter, Prisma.checklist_definitionWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
}, "id">;
export type checklist_progressOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    checklist_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    completed_items?: Prisma.SortOrder;
    is_completed?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.checklist_progressCountOrderByAggregateInput;
    _max?: Prisma.checklist_progressMaxOrderByAggregateInput;
    _min?: Prisma.checklist_progressMinOrderByAggregateInput;
};
export type checklist_progressScalarWhereWithAggregatesInput = {
    AND?: Prisma.checklist_progressScalarWhereWithAggregatesInput | Prisma.checklist_progressScalarWhereWithAggregatesInput[];
    OR?: Prisma.checklist_progressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.checklist_progressScalarWhereWithAggregatesInput | Prisma.checklist_progressScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"checklist_progress"> | string;
    checklist_id?: Prisma.UuidWithAggregatesFilter<"checklist_progress"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"checklist_progress"> | string;
    baby_id?: Prisma.UuidNullableWithAggregatesFilter<"checklist_progress"> | string | null;
    completed_items?: Prisma.JsonWithAggregatesFilter<"checklist_progress">;
    is_completed?: Prisma.BoolWithAggregatesFilter<"checklist_progress"> | boolean;
    completed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"checklist_progress"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"checklist_progress"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"checklist_progress"> | Date | string;
};
export type checklist_progressCreateInput = {
    id?: string;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    baby?: Prisma.BabyCreateNestedOneWithoutChecklist_progressInput;
    checklist_definition: Prisma.checklist_definitionCreateNestedOneWithoutChecklist_progressInput;
    customer: Prisma.CustomerCreateNestedOneWithoutChecklist_progressInput;
};
export type checklist_progressUncheckedCreateInput = {
    id?: string;
    checklist_id: string;
    customer_id: string;
    baby_id?: string | null;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type checklist_progressUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    baby?: Prisma.BabyUpdateOneWithoutChecklist_progressNestedInput;
    checklist_definition?: Prisma.checklist_definitionUpdateOneRequiredWithoutChecklist_progressNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutChecklist_progressNestedInput;
};
export type checklist_progressUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checklist_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type checklist_progressCreateManyInput = {
    id?: string;
    checklist_id: string;
    customer_id: string;
    baby_id?: string | null;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type checklist_progressUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type checklist_progressUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checklist_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Checklist_progressListRelationFilter = {
    every?: Prisma.checklist_progressWhereInput;
    some?: Prisma.checklist_progressWhereInput;
    none?: Prisma.checklist_progressWhereInput;
};
export type checklist_progressOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type checklist_progressCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    checklist_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrder;
    completed_items?: Prisma.SortOrder;
    is_completed?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type checklist_progressMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    checklist_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrder;
    is_completed?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type checklist_progressMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    checklist_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    baby_id?: Prisma.SortOrder;
    is_completed?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type checklist_progressCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.checklist_progressCreateWithoutCustomerInput, Prisma.checklist_progressUncheckedCreateWithoutCustomerInput> | Prisma.checklist_progressCreateWithoutCustomerInput[] | Prisma.checklist_progressUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.checklist_progressCreateOrConnectWithoutCustomerInput | Prisma.checklist_progressCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.checklist_progressCreateManyCustomerInputEnvelope;
    connect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
};
export type checklist_progressUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.checklist_progressCreateWithoutCustomerInput, Prisma.checklist_progressUncheckedCreateWithoutCustomerInput> | Prisma.checklist_progressCreateWithoutCustomerInput[] | Prisma.checklist_progressUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.checklist_progressCreateOrConnectWithoutCustomerInput | Prisma.checklist_progressCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.checklist_progressCreateManyCustomerInputEnvelope;
    connect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
};
export type checklist_progressUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.checklist_progressCreateWithoutCustomerInput, Prisma.checklist_progressUncheckedCreateWithoutCustomerInput> | Prisma.checklist_progressCreateWithoutCustomerInput[] | Prisma.checklist_progressUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.checklist_progressCreateOrConnectWithoutCustomerInput | Prisma.checklist_progressCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.checklist_progressUpsertWithWhereUniqueWithoutCustomerInput | Prisma.checklist_progressUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.checklist_progressCreateManyCustomerInputEnvelope;
    set?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    disconnect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    delete?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    connect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    update?: Prisma.checklist_progressUpdateWithWhereUniqueWithoutCustomerInput | Prisma.checklist_progressUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.checklist_progressUpdateManyWithWhereWithoutCustomerInput | Prisma.checklist_progressUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.checklist_progressScalarWhereInput | Prisma.checklist_progressScalarWhereInput[];
};
export type checklist_progressUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.checklist_progressCreateWithoutCustomerInput, Prisma.checklist_progressUncheckedCreateWithoutCustomerInput> | Prisma.checklist_progressCreateWithoutCustomerInput[] | Prisma.checklist_progressUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.checklist_progressCreateOrConnectWithoutCustomerInput | Prisma.checklist_progressCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.checklist_progressUpsertWithWhereUniqueWithoutCustomerInput | Prisma.checklist_progressUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.checklist_progressCreateManyCustomerInputEnvelope;
    set?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    disconnect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    delete?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    connect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    update?: Prisma.checklist_progressUpdateWithWhereUniqueWithoutCustomerInput | Prisma.checklist_progressUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.checklist_progressUpdateManyWithWhereWithoutCustomerInput | Prisma.checklist_progressUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.checklist_progressScalarWhereInput | Prisma.checklist_progressScalarWhereInput[];
};
export type checklist_progressCreateNestedManyWithoutBabyInput = {
    create?: Prisma.XOR<Prisma.checklist_progressCreateWithoutBabyInput, Prisma.checklist_progressUncheckedCreateWithoutBabyInput> | Prisma.checklist_progressCreateWithoutBabyInput[] | Prisma.checklist_progressUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.checklist_progressCreateOrConnectWithoutBabyInput | Prisma.checklist_progressCreateOrConnectWithoutBabyInput[];
    createMany?: Prisma.checklist_progressCreateManyBabyInputEnvelope;
    connect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
};
export type checklist_progressUncheckedCreateNestedManyWithoutBabyInput = {
    create?: Prisma.XOR<Prisma.checklist_progressCreateWithoutBabyInput, Prisma.checklist_progressUncheckedCreateWithoutBabyInput> | Prisma.checklist_progressCreateWithoutBabyInput[] | Prisma.checklist_progressUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.checklist_progressCreateOrConnectWithoutBabyInput | Prisma.checklist_progressCreateOrConnectWithoutBabyInput[];
    createMany?: Prisma.checklist_progressCreateManyBabyInputEnvelope;
    connect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
};
export type checklist_progressUpdateManyWithoutBabyNestedInput = {
    create?: Prisma.XOR<Prisma.checklist_progressCreateWithoutBabyInput, Prisma.checklist_progressUncheckedCreateWithoutBabyInput> | Prisma.checklist_progressCreateWithoutBabyInput[] | Prisma.checklist_progressUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.checklist_progressCreateOrConnectWithoutBabyInput | Prisma.checklist_progressCreateOrConnectWithoutBabyInput[];
    upsert?: Prisma.checklist_progressUpsertWithWhereUniqueWithoutBabyInput | Prisma.checklist_progressUpsertWithWhereUniqueWithoutBabyInput[];
    createMany?: Prisma.checklist_progressCreateManyBabyInputEnvelope;
    set?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    disconnect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    delete?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    connect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    update?: Prisma.checklist_progressUpdateWithWhereUniqueWithoutBabyInput | Prisma.checklist_progressUpdateWithWhereUniqueWithoutBabyInput[];
    updateMany?: Prisma.checklist_progressUpdateManyWithWhereWithoutBabyInput | Prisma.checklist_progressUpdateManyWithWhereWithoutBabyInput[];
    deleteMany?: Prisma.checklist_progressScalarWhereInput | Prisma.checklist_progressScalarWhereInput[];
};
export type checklist_progressUncheckedUpdateManyWithoutBabyNestedInput = {
    create?: Prisma.XOR<Prisma.checklist_progressCreateWithoutBabyInput, Prisma.checklist_progressUncheckedCreateWithoutBabyInput> | Prisma.checklist_progressCreateWithoutBabyInput[] | Prisma.checklist_progressUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.checklist_progressCreateOrConnectWithoutBabyInput | Prisma.checklist_progressCreateOrConnectWithoutBabyInput[];
    upsert?: Prisma.checklist_progressUpsertWithWhereUniqueWithoutBabyInput | Prisma.checklist_progressUpsertWithWhereUniqueWithoutBabyInput[];
    createMany?: Prisma.checklist_progressCreateManyBabyInputEnvelope;
    set?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    disconnect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    delete?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    connect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    update?: Prisma.checklist_progressUpdateWithWhereUniqueWithoutBabyInput | Prisma.checklist_progressUpdateWithWhereUniqueWithoutBabyInput[];
    updateMany?: Prisma.checklist_progressUpdateManyWithWhereWithoutBabyInput | Prisma.checklist_progressUpdateManyWithWhereWithoutBabyInput[];
    deleteMany?: Prisma.checklist_progressScalarWhereInput | Prisma.checklist_progressScalarWhereInput[];
};
export type checklist_progressCreateNestedManyWithoutChecklist_definitionInput = {
    create?: Prisma.XOR<Prisma.checklist_progressCreateWithoutChecklist_definitionInput, Prisma.checklist_progressUncheckedCreateWithoutChecklist_definitionInput> | Prisma.checklist_progressCreateWithoutChecklist_definitionInput[] | Prisma.checklist_progressUncheckedCreateWithoutChecklist_definitionInput[];
    connectOrCreate?: Prisma.checklist_progressCreateOrConnectWithoutChecklist_definitionInput | Prisma.checklist_progressCreateOrConnectWithoutChecklist_definitionInput[];
    createMany?: Prisma.checklist_progressCreateManyChecklist_definitionInputEnvelope;
    connect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
};
export type checklist_progressUncheckedCreateNestedManyWithoutChecklist_definitionInput = {
    create?: Prisma.XOR<Prisma.checklist_progressCreateWithoutChecklist_definitionInput, Prisma.checklist_progressUncheckedCreateWithoutChecklist_definitionInput> | Prisma.checklist_progressCreateWithoutChecklist_definitionInput[] | Prisma.checklist_progressUncheckedCreateWithoutChecklist_definitionInput[];
    connectOrCreate?: Prisma.checklist_progressCreateOrConnectWithoutChecklist_definitionInput | Prisma.checklist_progressCreateOrConnectWithoutChecklist_definitionInput[];
    createMany?: Prisma.checklist_progressCreateManyChecklist_definitionInputEnvelope;
    connect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
};
export type checklist_progressUpdateManyWithoutChecklist_definitionNestedInput = {
    create?: Prisma.XOR<Prisma.checklist_progressCreateWithoutChecklist_definitionInput, Prisma.checklist_progressUncheckedCreateWithoutChecklist_definitionInput> | Prisma.checklist_progressCreateWithoutChecklist_definitionInput[] | Prisma.checklist_progressUncheckedCreateWithoutChecklist_definitionInput[];
    connectOrCreate?: Prisma.checklist_progressCreateOrConnectWithoutChecklist_definitionInput | Prisma.checklist_progressCreateOrConnectWithoutChecklist_definitionInput[];
    upsert?: Prisma.checklist_progressUpsertWithWhereUniqueWithoutChecklist_definitionInput | Prisma.checklist_progressUpsertWithWhereUniqueWithoutChecklist_definitionInput[];
    createMany?: Prisma.checklist_progressCreateManyChecklist_definitionInputEnvelope;
    set?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    disconnect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    delete?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    connect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    update?: Prisma.checklist_progressUpdateWithWhereUniqueWithoutChecklist_definitionInput | Prisma.checklist_progressUpdateWithWhereUniqueWithoutChecklist_definitionInput[];
    updateMany?: Prisma.checklist_progressUpdateManyWithWhereWithoutChecklist_definitionInput | Prisma.checklist_progressUpdateManyWithWhereWithoutChecklist_definitionInput[];
    deleteMany?: Prisma.checklist_progressScalarWhereInput | Prisma.checklist_progressScalarWhereInput[];
};
export type checklist_progressUncheckedUpdateManyWithoutChecklist_definitionNestedInput = {
    create?: Prisma.XOR<Prisma.checklist_progressCreateWithoutChecklist_definitionInput, Prisma.checklist_progressUncheckedCreateWithoutChecklist_definitionInput> | Prisma.checklist_progressCreateWithoutChecklist_definitionInput[] | Prisma.checklist_progressUncheckedCreateWithoutChecklist_definitionInput[];
    connectOrCreate?: Prisma.checklist_progressCreateOrConnectWithoutChecklist_definitionInput | Prisma.checklist_progressCreateOrConnectWithoutChecklist_definitionInput[];
    upsert?: Prisma.checklist_progressUpsertWithWhereUniqueWithoutChecklist_definitionInput | Prisma.checklist_progressUpsertWithWhereUniqueWithoutChecklist_definitionInput[];
    createMany?: Prisma.checklist_progressCreateManyChecklist_definitionInputEnvelope;
    set?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    disconnect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    delete?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    connect?: Prisma.checklist_progressWhereUniqueInput | Prisma.checklist_progressWhereUniqueInput[];
    update?: Prisma.checklist_progressUpdateWithWhereUniqueWithoutChecklist_definitionInput | Prisma.checklist_progressUpdateWithWhereUniqueWithoutChecklist_definitionInput[];
    updateMany?: Prisma.checklist_progressUpdateManyWithWhereWithoutChecklist_definitionInput | Prisma.checklist_progressUpdateManyWithWhereWithoutChecklist_definitionInput[];
    deleteMany?: Prisma.checklist_progressScalarWhereInput | Prisma.checklist_progressScalarWhereInput[];
};
export type checklist_progressCreateWithoutCustomerInput = {
    id?: string;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    baby?: Prisma.BabyCreateNestedOneWithoutChecklist_progressInput;
    checklist_definition: Prisma.checklist_definitionCreateNestedOneWithoutChecklist_progressInput;
};
export type checklist_progressUncheckedCreateWithoutCustomerInput = {
    id?: string;
    checklist_id: string;
    baby_id?: string | null;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type checklist_progressCreateOrConnectWithoutCustomerInput = {
    where: Prisma.checklist_progressWhereUniqueInput;
    create: Prisma.XOR<Prisma.checklist_progressCreateWithoutCustomerInput, Prisma.checklist_progressUncheckedCreateWithoutCustomerInput>;
};
export type checklist_progressCreateManyCustomerInputEnvelope = {
    data: Prisma.checklist_progressCreateManyCustomerInput | Prisma.checklist_progressCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type checklist_progressUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.checklist_progressWhereUniqueInput;
    update: Prisma.XOR<Prisma.checklist_progressUpdateWithoutCustomerInput, Prisma.checklist_progressUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.checklist_progressCreateWithoutCustomerInput, Prisma.checklist_progressUncheckedCreateWithoutCustomerInput>;
};
export type checklist_progressUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.checklist_progressWhereUniqueInput;
    data: Prisma.XOR<Prisma.checklist_progressUpdateWithoutCustomerInput, Prisma.checklist_progressUncheckedUpdateWithoutCustomerInput>;
};
export type checklist_progressUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.checklist_progressScalarWhereInput;
    data: Prisma.XOR<Prisma.checklist_progressUpdateManyMutationInput, Prisma.checklist_progressUncheckedUpdateManyWithoutCustomerInput>;
};
export type checklist_progressScalarWhereInput = {
    AND?: Prisma.checklist_progressScalarWhereInput | Prisma.checklist_progressScalarWhereInput[];
    OR?: Prisma.checklist_progressScalarWhereInput[];
    NOT?: Prisma.checklist_progressScalarWhereInput | Prisma.checklist_progressScalarWhereInput[];
    id?: Prisma.UuidFilter<"checklist_progress"> | string;
    checklist_id?: Prisma.UuidFilter<"checklist_progress"> | string;
    customer_id?: Prisma.UuidFilter<"checklist_progress"> | string;
    baby_id?: Prisma.UuidNullableFilter<"checklist_progress"> | string | null;
    completed_items?: Prisma.JsonFilter<"checklist_progress">;
    is_completed?: Prisma.BoolFilter<"checklist_progress"> | boolean;
    completed_at?: Prisma.DateTimeNullableFilter<"checklist_progress"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"checklist_progress"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"checklist_progress"> | Date | string;
};
export type checklist_progressCreateWithoutBabyInput = {
    id?: string;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    checklist_definition: Prisma.checklist_definitionCreateNestedOneWithoutChecklist_progressInput;
    customer: Prisma.CustomerCreateNestedOneWithoutChecklist_progressInput;
};
export type checklist_progressUncheckedCreateWithoutBabyInput = {
    id?: string;
    checklist_id: string;
    customer_id: string;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type checklist_progressCreateOrConnectWithoutBabyInput = {
    where: Prisma.checklist_progressWhereUniqueInput;
    create: Prisma.XOR<Prisma.checklist_progressCreateWithoutBabyInput, Prisma.checklist_progressUncheckedCreateWithoutBabyInput>;
};
export type checklist_progressCreateManyBabyInputEnvelope = {
    data: Prisma.checklist_progressCreateManyBabyInput | Prisma.checklist_progressCreateManyBabyInput[];
    skipDuplicates?: boolean;
};
export type checklist_progressUpsertWithWhereUniqueWithoutBabyInput = {
    where: Prisma.checklist_progressWhereUniqueInput;
    update: Prisma.XOR<Prisma.checklist_progressUpdateWithoutBabyInput, Prisma.checklist_progressUncheckedUpdateWithoutBabyInput>;
    create: Prisma.XOR<Prisma.checklist_progressCreateWithoutBabyInput, Prisma.checklist_progressUncheckedCreateWithoutBabyInput>;
};
export type checklist_progressUpdateWithWhereUniqueWithoutBabyInput = {
    where: Prisma.checklist_progressWhereUniqueInput;
    data: Prisma.XOR<Prisma.checklist_progressUpdateWithoutBabyInput, Prisma.checklist_progressUncheckedUpdateWithoutBabyInput>;
};
export type checklist_progressUpdateManyWithWhereWithoutBabyInput = {
    where: Prisma.checklist_progressScalarWhereInput;
    data: Prisma.XOR<Prisma.checklist_progressUpdateManyMutationInput, Prisma.checklist_progressUncheckedUpdateManyWithoutBabyInput>;
};
export type checklist_progressCreateWithoutChecklist_definitionInput = {
    id?: string;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    baby?: Prisma.BabyCreateNestedOneWithoutChecklist_progressInput;
    customer: Prisma.CustomerCreateNestedOneWithoutChecklist_progressInput;
};
export type checklist_progressUncheckedCreateWithoutChecklist_definitionInput = {
    id?: string;
    customer_id: string;
    baby_id?: string | null;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type checklist_progressCreateOrConnectWithoutChecklist_definitionInput = {
    where: Prisma.checklist_progressWhereUniqueInput;
    create: Prisma.XOR<Prisma.checklist_progressCreateWithoutChecklist_definitionInput, Prisma.checklist_progressUncheckedCreateWithoutChecklist_definitionInput>;
};
export type checklist_progressCreateManyChecklist_definitionInputEnvelope = {
    data: Prisma.checklist_progressCreateManyChecklist_definitionInput | Prisma.checklist_progressCreateManyChecklist_definitionInput[];
    skipDuplicates?: boolean;
};
export type checklist_progressUpsertWithWhereUniqueWithoutChecklist_definitionInput = {
    where: Prisma.checklist_progressWhereUniqueInput;
    update: Prisma.XOR<Prisma.checklist_progressUpdateWithoutChecklist_definitionInput, Prisma.checklist_progressUncheckedUpdateWithoutChecklist_definitionInput>;
    create: Prisma.XOR<Prisma.checklist_progressCreateWithoutChecklist_definitionInput, Prisma.checklist_progressUncheckedCreateWithoutChecklist_definitionInput>;
};
export type checklist_progressUpdateWithWhereUniqueWithoutChecklist_definitionInput = {
    where: Prisma.checklist_progressWhereUniqueInput;
    data: Prisma.XOR<Prisma.checklist_progressUpdateWithoutChecklist_definitionInput, Prisma.checklist_progressUncheckedUpdateWithoutChecklist_definitionInput>;
};
export type checklist_progressUpdateManyWithWhereWithoutChecklist_definitionInput = {
    where: Prisma.checklist_progressScalarWhereInput;
    data: Prisma.XOR<Prisma.checklist_progressUpdateManyMutationInput, Prisma.checklist_progressUncheckedUpdateManyWithoutChecklist_definitionInput>;
};
export type checklist_progressCreateManyCustomerInput = {
    id?: string;
    checklist_id: string;
    baby_id?: string | null;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type checklist_progressUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    baby?: Prisma.BabyUpdateOneWithoutChecklist_progressNestedInput;
    checklist_definition?: Prisma.checklist_definitionUpdateOneRequiredWithoutChecklist_progressNestedInput;
};
export type checklist_progressUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checklist_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type checklist_progressUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checklist_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type checklist_progressCreateManyBabyInput = {
    id?: string;
    checklist_id: string;
    customer_id: string;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type checklist_progressUpdateWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    checklist_definition?: Prisma.checklist_definitionUpdateOneRequiredWithoutChecklist_progressNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutChecklist_progressNestedInput;
};
export type checklist_progressUncheckedUpdateWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checklist_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type checklist_progressUncheckedUpdateManyWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    checklist_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type checklist_progressCreateManyChecklist_definitionInput = {
    id?: string;
    customer_id: string;
    baby_id?: string | null;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: boolean;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type checklist_progressUpdateWithoutChecklist_definitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    baby?: Prisma.BabyUpdateOneWithoutChecklist_progressNestedInput;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutChecklist_progressNestedInput;
};
export type checklist_progressUncheckedUpdateWithoutChecklist_definitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type checklist_progressUncheckedUpdateManyWithoutChecklist_definitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    baby_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    completed_items?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    is_completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type checklist_progressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    checklist_id?: boolean;
    customer_id?: boolean;
    baby_id?: boolean;
    completed_items?: boolean;
    is_completed?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    baby?: boolean | Prisma.checklist_progress$babyArgs<ExtArgs>;
    checklist_definition?: boolean | Prisma.checklist_definitionDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["checklist_progress"]>;
export type checklist_progressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    checklist_id?: boolean;
    customer_id?: boolean;
    baby_id?: boolean;
    completed_items?: boolean;
    is_completed?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    baby?: boolean | Prisma.checklist_progress$babyArgs<ExtArgs>;
    checklist_definition?: boolean | Prisma.checklist_definitionDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["checklist_progress"]>;
export type checklist_progressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    checklist_id?: boolean;
    customer_id?: boolean;
    baby_id?: boolean;
    completed_items?: boolean;
    is_completed?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    baby?: boolean | Prisma.checklist_progress$babyArgs<ExtArgs>;
    checklist_definition?: boolean | Prisma.checklist_definitionDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["checklist_progress"]>;
export type checklist_progressSelectScalar = {
    id?: boolean;
    checklist_id?: boolean;
    customer_id?: boolean;
    baby_id?: boolean;
    completed_items?: boolean;
    is_completed?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type checklist_progressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "checklist_id" | "customer_id" | "baby_id" | "completed_items" | "is_completed" | "completed_at" | "created_at" | "updated_at", ExtArgs["result"]["checklist_progress"]>;
export type checklist_progressInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.checklist_progress$babyArgs<ExtArgs>;
    checklist_definition?: boolean | Prisma.checklist_definitionDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type checklist_progressIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.checklist_progress$babyArgs<ExtArgs>;
    checklist_definition?: boolean | Prisma.checklist_definitionDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type checklist_progressIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.checklist_progress$babyArgs<ExtArgs>;
    checklist_definition?: boolean | Prisma.checklist_definitionDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $checklist_progressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "checklist_progress";
    objects: {
        baby: Prisma.$BabyPayload<ExtArgs> | null;
        checklist_definition: Prisma.$checklist_definitionPayload<ExtArgs>;
        customer: Prisma.$CustomerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        checklist_id: string;
        customer_id: string;
        baby_id: string | null;
        completed_items: runtime.JsonValue;
        is_completed: boolean;
        completed_at: Date | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["checklist_progress"]>;
    composites: {};
};
export type checklist_progressGetPayload<S extends boolean | null | undefined | checklist_progressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$checklist_progressPayload, S>;
export type checklist_progressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<checklist_progressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Checklist_progressCountAggregateInputType | true;
};
export interface checklist_progressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['checklist_progress'];
        meta: {
            name: 'checklist_progress';
        };
    };
    findUnique<T extends checklist_progressFindUniqueArgs>(args: Prisma.SelectSubset<T, checklist_progressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__checklist_progressClient<runtime.Types.Result.GetResult<Prisma.$checklist_progressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends checklist_progressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, checklist_progressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__checklist_progressClient<runtime.Types.Result.GetResult<Prisma.$checklist_progressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends checklist_progressFindFirstArgs>(args?: Prisma.SelectSubset<T, checklist_progressFindFirstArgs<ExtArgs>>): Prisma.Prisma__checklist_progressClient<runtime.Types.Result.GetResult<Prisma.$checklist_progressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends checklist_progressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, checklist_progressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__checklist_progressClient<runtime.Types.Result.GetResult<Prisma.$checklist_progressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends checklist_progressFindManyArgs>(args?: Prisma.SelectSubset<T, checklist_progressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$checklist_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends checklist_progressCreateArgs>(args: Prisma.SelectSubset<T, checklist_progressCreateArgs<ExtArgs>>): Prisma.Prisma__checklist_progressClient<runtime.Types.Result.GetResult<Prisma.$checklist_progressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends checklist_progressCreateManyArgs>(args?: Prisma.SelectSubset<T, checklist_progressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends checklist_progressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, checklist_progressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$checklist_progressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends checklist_progressDeleteArgs>(args: Prisma.SelectSubset<T, checklist_progressDeleteArgs<ExtArgs>>): Prisma.Prisma__checklist_progressClient<runtime.Types.Result.GetResult<Prisma.$checklist_progressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends checklist_progressUpdateArgs>(args: Prisma.SelectSubset<T, checklist_progressUpdateArgs<ExtArgs>>): Prisma.Prisma__checklist_progressClient<runtime.Types.Result.GetResult<Prisma.$checklist_progressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends checklist_progressDeleteManyArgs>(args?: Prisma.SelectSubset<T, checklist_progressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends checklist_progressUpdateManyArgs>(args: Prisma.SelectSubset<T, checklist_progressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends checklist_progressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, checklist_progressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$checklist_progressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends checklist_progressUpsertArgs>(args: Prisma.SelectSubset<T, checklist_progressUpsertArgs<ExtArgs>>): Prisma.Prisma__checklist_progressClient<runtime.Types.Result.GetResult<Prisma.$checklist_progressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends checklist_progressCountArgs>(args?: Prisma.Subset<T, checklist_progressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Checklist_progressCountAggregateOutputType> : number>;
    aggregate<T extends Checklist_progressAggregateArgs>(args: Prisma.Subset<T, Checklist_progressAggregateArgs>): Prisma.PrismaPromise<GetChecklist_progressAggregateType<T>>;
    groupBy<T extends checklist_progressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: checklist_progressGroupByArgs['orderBy'];
    } : {
        orderBy?: checklist_progressGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, checklist_progressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklist_progressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: checklist_progressFieldRefs;
}
export interface Prisma__checklist_progressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    baby<T extends Prisma.checklist_progress$babyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.checklist_progress$babyArgs<ExtArgs>>): Prisma.Prisma__BabyClient<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    checklist_definition<T extends Prisma.checklist_definitionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.checklist_definitionDefaultArgs<ExtArgs>>): Prisma.Prisma__checklist_definitionClient<runtime.Types.Result.GetResult<Prisma.$checklist_definitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface checklist_progressFieldRefs {
    readonly id: Prisma.FieldRef<"checklist_progress", 'String'>;
    readonly checklist_id: Prisma.FieldRef<"checklist_progress", 'String'>;
    readonly customer_id: Prisma.FieldRef<"checklist_progress", 'String'>;
    readonly baby_id: Prisma.FieldRef<"checklist_progress", 'String'>;
    readonly completed_items: Prisma.FieldRef<"checklist_progress", 'Json'>;
    readonly is_completed: Prisma.FieldRef<"checklist_progress", 'Boolean'>;
    readonly completed_at: Prisma.FieldRef<"checklist_progress", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"checklist_progress", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"checklist_progress", 'DateTime'>;
}
export type checklist_progressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_progressSelect<ExtArgs> | null;
    omit?: Prisma.checklist_progressOmit<ExtArgs> | null;
    include?: Prisma.checklist_progressInclude<ExtArgs> | null;
    where: Prisma.checklist_progressWhereUniqueInput;
};
export type checklist_progressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_progressSelect<ExtArgs> | null;
    omit?: Prisma.checklist_progressOmit<ExtArgs> | null;
    include?: Prisma.checklist_progressInclude<ExtArgs> | null;
    where: Prisma.checklist_progressWhereUniqueInput;
};
export type checklist_progressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type checklist_progressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type checklist_progressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type checklist_progressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_progressSelect<ExtArgs> | null;
    omit?: Prisma.checklist_progressOmit<ExtArgs> | null;
    include?: Prisma.checklist_progressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.checklist_progressCreateInput, Prisma.checklist_progressUncheckedCreateInput>;
};
export type checklist_progressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.checklist_progressCreateManyInput | Prisma.checklist_progressCreateManyInput[];
    skipDuplicates?: boolean;
};
export type checklist_progressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_progressSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.checklist_progressOmit<ExtArgs> | null;
    data: Prisma.checklist_progressCreateManyInput | Prisma.checklist_progressCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.checklist_progressIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type checklist_progressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_progressSelect<ExtArgs> | null;
    omit?: Prisma.checklist_progressOmit<ExtArgs> | null;
    include?: Prisma.checklist_progressInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.checklist_progressUpdateInput, Prisma.checklist_progressUncheckedUpdateInput>;
    where: Prisma.checklist_progressWhereUniqueInput;
};
export type checklist_progressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.checklist_progressUpdateManyMutationInput, Prisma.checklist_progressUncheckedUpdateManyInput>;
    where?: Prisma.checklist_progressWhereInput;
    limit?: number;
};
export type checklist_progressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_progressSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.checklist_progressOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.checklist_progressUpdateManyMutationInput, Prisma.checklist_progressUncheckedUpdateManyInput>;
    where?: Prisma.checklist_progressWhereInput;
    limit?: number;
    include?: Prisma.checklist_progressIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type checklist_progressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_progressSelect<ExtArgs> | null;
    omit?: Prisma.checklist_progressOmit<ExtArgs> | null;
    include?: Prisma.checklist_progressInclude<ExtArgs> | null;
    where: Prisma.checklist_progressWhereUniqueInput;
    create: Prisma.XOR<Prisma.checklist_progressCreateInput, Prisma.checklist_progressUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.checklist_progressUpdateInput, Prisma.checklist_progressUncheckedUpdateInput>;
};
export type checklist_progressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_progressSelect<ExtArgs> | null;
    omit?: Prisma.checklist_progressOmit<ExtArgs> | null;
    include?: Prisma.checklist_progressInclude<ExtArgs> | null;
    where: Prisma.checklist_progressWhereUniqueInput;
};
export type checklist_progressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.checklist_progressWhereInput;
    limit?: number;
};
export type checklist_progress$babyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabySelect<ExtArgs> | null;
    omit?: Prisma.BabyOmit<ExtArgs> | null;
    include?: Prisma.BabyInclude<ExtArgs> | null;
    where?: Prisma.BabyWhereInput;
};
export type checklist_progressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.checklist_progressSelect<ExtArgs> | null;
    omit?: Prisma.checklist_progressOmit<ExtArgs> | null;
    include?: Prisma.checklist_progressInclude<ExtArgs> | null;
};
