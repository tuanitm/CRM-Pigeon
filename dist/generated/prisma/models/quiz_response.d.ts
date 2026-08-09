import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type quiz_responseModel = runtime.Types.Result.DefaultSelection<Prisma.$quiz_responsePayload>;
export type AggregateQuiz_response = {
    _count: Quiz_responseCountAggregateOutputType | null;
    _min: Quiz_responseMinAggregateOutputType | null;
    _max: Quiz_responseMaxAggregateOutputType | null;
};
export type Quiz_responseMinAggregateOutputType = {
    id: string | null;
    quiz_id: string | null;
    customer_id: string | null;
    anonymous_id: string | null;
    completed_at: Date | null;
    created_at: Date | null;
};
export type Quiz_responseMaxAggregateOutputType = {
    id: string | null;
    quiz_id: string | null;
    customer_id: string | null;
    anonymous_id: string | null;
    completed_at: Date | null;
    created_at: Date | null;
};
export type Quiz_responseCountAggregateOutputType = {
    id: number;
    quiz_id: number;
    customer_id: number;
    anonymous_id: number;
    answers: number;
    result: number;
    completed_at: number;
    created_at: number;
    _all: number;
};
export type Quiz_responseMinAggregateInputType = {
    id?: true;
    quiz_id?: true;
    customer_id?: true;
    anonymous_id?: true;
    completed_at?: true;
    created_at?: true;
};
export type Quiz_responseMaxAggregateInputType = {
    id?: true;
    quiz_id?: true;
    customer_id?: true;
    anonymous_id?: true;
    completed_at?: true;
    created_at?: true;
};
export type Quiz_responseCountAggregateInputType = {
    id?: true;
    quiz_id?: true;
    customer_id?: true;
    anonymous_id?: true;
    answers?: true;
    result?: true;
    completed_at?: true;
    created_at?: true;
    _all?: true;
};
export type Quiz_responseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_responseWhereInput;
    orderBy?: Prisma.quiz_responseOrderByWithRelationInput | Prisma.quiz_responseOrderByWithRelationInput[];
    cursor?: Prisma.quiz_responseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Quiz_responseCountAggregateInputType;
    _min?: Quiz_responseMinAggregateInputType;
    _max?: Quiz_responseMaxAggregateInputType;
};
export type GetQuiz_responseAggregateType<T extends Quiz_responseAggregateArgs> = {
    [P in keyof T & keyof AggregateQuiz_response]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateQuiz_response[P]> : Prisma.GetScalarType<T[P], AggregateQuiz_response[P]>;
};
export type quiz_responseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_responseWhereInput;
    orderBy?: Prisma.quiz_responseOrderByWithAggregationInput | Prisma.quiz_responseOrderByWithAggregationInput[];
    by: Prisma.Quiz_responseScalarFieldEnum[] | Prisma.Quiz_responseScalarFieldEnum;
    having?: Prisma.quiz_responseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Quiz_responseCountAggregateInputType | true;
    _min?: Quiz_responseMinAggregateInputType;
    _max?: Quiz_responseMaxAggregateInputType;
};
export type Quiz_responseGroupByOutputType = {
    id: string;
    quiz_id: string;
    customer_id: string | null;
    anonymous_id: string | null;
    answers: runtime.JsonValue;
    result: runtime.JsonValue | null;
    completed_at: Date | null;
    created_at: Date;
    _count: Quiz_responseCountAggregateOutputType | null;
    _min: Quiz_responseMinAggregateOutputType | null;
    _max: Quiz_responseMaxAggregateOutputType | null;
};
export type GetQuiz_responseGroupByPayload<T extends quiz_responseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Quiz_responseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Quiz_responseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Quiz_responseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Quiz_responseGroupByOutputType[P]>;
}>>;
export type quiz_responseWhereInput = {
    AND?: Prisma.quiz_responseWhereInput | Prisma.quiz_responseWhereInput[];
    OR?: Prisma.quiz_responseWhereInput[];
    NOT?: Prisma.quiz_responseWhereInput | Prisma.quiz_responseWhereInput[];
    id?: Prisma.UuidFilter<"quiz_response"> | string;
    quiz_id?: Prisma.UuidFilter<"quiz_response"> | string;
    customer_id?: Prisma.UuidNullableFilter<"quiz_response"> | string | null;
    anonymous_id?: Prisma.StringNullableFilter<"quiz_response"> | string | null;
    answers?: Prisma.JsonFilter<"quiz_response">;
    result?: Prisma.JsonNullableFilter<"quiz_response">;
    completed_at?: Prisma.DateTimeNullableFilter<"quiz_response"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"quiz_response"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    quiz_definition?: Prisma.XOR<Prisma.Quiz_definitionScalarRelationFilter, Prisma.quiz_definitionWhereInput>;
};
export type quiz_responseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    answers?: Prisma.SortOrder;
    result?: Prisma.SortOrderInput | Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    quiz_definition?: Prisma.quiz_definitionOrderByWithRelationInput;
};
export type quiz_responseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.quiz_responseWhereInput | Prisma.quiz_responseWhereInput[];
    OR?: Prisma.quiz_responseWhereInput[];
    NOT?: Prisma.quiz_responseWhereInput | Prisma.quiz_responseWhereInput[];
    quiz_id?: Prisma.UuidFilter<"quiz_response"> | string;
    customer_id?: Prisma.UuidNullableFilter<"quiz_response"> | string | null;
    anonymous_id?: Prisma.StringNullableFilter<"quiz_response"> | string | null;
    answers?: Prisma.JsonFilter<"quiz_response">;
    result?: Prisma.JsonNullableFilter<"quiz_response">;
    completed_at?: Prisma.DateTimeNullableFilter<"quiz_response"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"quiz_response"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    quiz_definition?: Prisma.XOR<Prisma.Quiz_definitionScalarRelationFilter, Prisma.quiz_definitionWhereInput>;
}, "id">;
export type quiz_responseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    answers?: Prisma.SortOrder;
    result?: Prisma.SortOrderInput | Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.quiz_responseCountOrderByAggregateInput;
    _max?: Prisma.quiz_responseMaxOrderByAggregateInput;
    _min?: Prisma.quiz_responseMinOrderByAggregateInput;
};
export type quiz_responseScalarWhereWithAggregatesInput = {
    AND?: Prisma.quiz_responseScalarWhereWithAggregatesInput | Prisma.quiz_responseScalarWhereWithAggregatesInput[];
    OR?: Prisma.quiz_responseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.quiz_responseScalarWhereWithAggregatesInput | Prisma.quiz_responseScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"quiz_response"> | string;
    quiz_id?: Prisma.UuidWithAggregatesFilter<"quiz_response"> | string;
    customer_id?: Prisma.UuidNullableWithAggregatesFilter<"quiz_response"> | string | null;
    anonymous_id?: Prisma.StringNullableWithAggregatesFilter<"quiz_response"> | string | null;
    answers?: Prisma.JsonWithAggregatesFilter<"quiz_response">;
    result?: Prisma.JsonNullableWithAggregatesFilter<"quiz_response">;
    completed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"quiz_response"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"quiz_response"> | Date | string;
};
export type quiz_responseCreateInput = {
    id?: string;
    anonymous_id?: string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    customer?: Prisma.CustomerCreateNestedOneWithoutQuiz_responseInput;
    quiz_definition: Prisma.quiz_definitionCreateNestedOneWithoutQuiz_responseInput;
};
export type quiz_responseUncheckedCreateInput = {
    id?: string;
    quiz_id: string;
    customer_id?: string | null;
    anonymous_id?: string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Date | string | null;
    created_at?: Date | string;
};
export type quiz_responseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneWithoutQuiz_responseNestedInput;
    quiz_definition?: Prisma.quiz_definitionUpdateOneRequiredWithoutQuiz_responseNestedInput;
};
export type quiz_responseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quiz_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type quiz_responseCreateManyInput = {
    id?: string;
    quiz_id: string;
    customer_id?: string | null;
    anonymous_id?: string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Date | string | null;
    created_at?: Date | string;
};
export type quiz_responseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type quiz_responseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quiz_id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Quiz_responseListRelationFilter = {
    every?: Prisma.quiz_responseWhereInput;
    some?: Prisma.quiz_responseWhereInput;
    none?: Prisma.quiz_responseWhereInput;
};
export type quiz_responseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type quiz_responseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrder;
    answers?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type quiz_responseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type quiz_responseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quiz_id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    anonymous_id?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type quiz_responseCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.quiz_responseCreateWithoutCustomerInput, Prisma.quiz_responseUncheckedCreateWithoutCustomerInput> | Prisma.quiz_responseCreateWithoutCustomerInput[] | Prisma.quiz_responseUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.quiz_responseCreateOrConnectWithoutCustomerInput | Prisma.quiz_responseCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.quiz_responseCreateManyCustomerInputEnvelope;
    connect?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
};
export type quiz_responseUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.quiz_responseCreateWithoutCustomerInput, Prisma.quiz_responseUncheckedCreateWithoutCustomerInput> | Prisma.quiz_responseCreateWithoutCustomerInput[] | Prisma.quiz_responseUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.quiz_responseCreateOrConnectWithoutCustomerInput | Prisma.quiz_responseCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.quiz_responseCreateManyCustomerInputEnvelope;
    connect?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
};
export type quiz_responseUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_responseCreateWithoutCustomerInput, Prisma.quiz_responseUncheckedCreateWithoutCustomerInput> | Prisma.quiz_responseCreateWithoutCustomerInput[] | Prisma.quiz_responseUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.quiz_responseCreateOrConnectWithoutCustomerInput | Prisma.quiz_responseCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.quiz_responseUpsertWithWhereUniqueWithoutCustomerInput | Prisma.quiz_responseUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.quiz_responseCreateManyCustomerInputEnvelope;
    set?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    disconnect?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    delete?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    connect?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    update?: Prisma.quiz_responseUpdateWithWhereUniqueWithoutCustomerInput | Prisma.quiz_responseUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.quiz_responseUpdateManyWithWhereWithoutCustomerInput | Prisma.quiz_responseUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.quiz_responseScalarWhereInput | Prisma.quiz_responseScalarWhereInput[];
};
export type quiz_responseUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_responseCreateWithoutCustomerInput, Prisma.quiz_responseUncheckedCreateWithoutCustomerInput> | Prisma.quiz_responseCreateWithoutCustomerInput[] | Prisma.quiz_responseUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.quiz_responseCreateOrConnectWithoutCustomerInput | Prisma.quiz_responseCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.quiz_responseUpsertWithWhereUniqueWithoutCustomerInput | Prisma.quiz_responseUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.quiz_responseCreateManyCustomerInputEnvelope;
    set?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    disconnect?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    delete?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    connect?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    update?: Prisma.quiz_responseUpdateWithWhereUniqueWithoutCustomerInput | Prisma.quiz_responseUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.quiz_responseUpdateManyWithWhereWithoutCustomerInput | Prisma.quiz_responseUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.quiz_responseScalarWhereInput | Prisma.quiz_responseScalarWhereInput[];
};
export type quiz_responseCreateNestedManyWithoutQuiz_definitionInput = {
    create?: Prisma.XOR<Prisma.quiz_responseCreateWithoutQuiz_definitionInput, Prisma.quiz_responseUncheckedCreateWithoutQuiz_definitionInput> | Prisma.quiz_responseCreateWithoutQuiz_definitionInput[] | Prisma.quiz_responseUncheckedCreateWithoutQuiz_definitionInput[];
    connectOrCreate?: Prisma.quiz_responseCreateOrConnectWithoutQuiz_definitionInput | Prisma.quiz_responseCreateOrConnectWithoutQuiz_definitionInput[];
    createMany?: Prisma.quiz_responseCreateManyQuiz_definitionInputEnvelope;
    connect?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
};
export type quiz_responseUncheckedCreateNestedManyWithoutQuiz_definitionInput = {
    create?: Prisma.XOR<Prisma.quiz_responseCreateWithoutQuiz_definitionInput, Prisma.quiz_responseUncheckedCreateWithoutQuiz_definitionInput> | Prisma.quiz_responseCreateWithoutQuiz_definitionInput[] | Prisma.quiz_responseUncheckedCreateWithoutQuiz_definitionInput[];
    connectOrCreate?: Prisma.quiz_responseCreateOrConnectWithoutQuiz_definitionInput | Prisma.quiz_responseCreateOrConnectWithoutQuiz_definitionInput[];
    createMany?: Prisma.quiz_responseCreateManyQuiz_definitionInputEnvelope;
    connect?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
};
export type quiz_responseUpdateManyWithoutQuiz_definitionNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_responseCreateWithoutQuiz_definitionInput, Prisma.quiz_responseUncheckedCreateWithoutQuiz_definitionInput> | Prisma.quiz_responseCreateWithoutQuiz_definitionInput[] | Prisma.quiz_responseUncheckedCreateWithoutQuiz_definitionInput[];
    connectOrCreate?: Prisma.quiz_responseCreateOrConnectWithoutQuiz_definitionInput | Prisma.quiz_responseCreateOrConnectWithoutQuiz_definitionInput[];
    upsert?: Prisma.quiz_responseUpsertWithWhereUniqueWithoutQuiz_definitionInput | Prisma.quiz_responseUpsertWithWhereUniqueWithoutQuiz_definitionInput[];
    createMany?: Prisma.quiz_responseCreateManyQuiz_definitionInputEnvelope;
    set?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    disconnect?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    delete?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    connect?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    update?: Prisma.quiz_responseUpdateWithWhereUniqueWithoutQuiz_definitionInput | Prisma.quiz_responseUpdateWithWhereUniqueWithoutQuiz_definitionInput[];
    updateMany?: Prisma.quiz_responseUpdateManyWithWhereWithoutQuiz_definitionInput | Prisma.quiz_responseUpdateManyWithWhereWithoutQuiz_definitionInput[];
    deleteMany?: Prisma.quiz_responseScalarWhereInput | Prisma.quiz_responseScalarWhereInput[];
};
export type quiz_responseUncheckedUpdateManyWithoutQuiz_definitionNestedInput = {
    create?: Prisma.XOR<Prisma.quiz_responseCreateWithoutQuiz_definitionInput, Prisma.quiz_responseUncheckedCreateWithoutQuiz_definitionInput> | Prisma.quiz_responseCreateWithoutQuiz_definitionInput[] | Prisma.quiz_responseUncheckedCreateWithoutQuiz_definitionInput[];
    connectOrCreate?: Prisma.quiz_responseCreateOrConnectWithoutQuiz_definitionInput | Prisma.quiz_responseCreateOrConnectWithoutQuiz_definitionInput[];
    upsert?: Prisma.quiz_responseUpsertWithWhereUniqueWithoutQuiz_definitionInput | Prisma.quiz_responseUpsertWithWhereUniqueWithoutQuiz_definitionInput[];
    createMany?: Prisma.quiz_responseCreateManyQuiz_definitionInputEnvelope;
    set?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    disconnect?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    delete?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    connect?: Prisma.quiz_responseWhereUniqueInput | Prisma.quiz_responseWhereUniqueInput[];
    update?: Prisma.quiz_responseUpdateWithWhereUniqueWithoutQuiz_definitionInput | Prisma.quiz_responseUpdateWithWhereUniqueWithoutQuiz_definitionInput[];
    updateMany?: Prisma.quiz_responseUpdateManyWithWhereWithoutQuiz_definitionInput | Prisma.quiz_responseUpdateManyWithWhereWithoutQuiz_definitionInput[];
    deleteMany?: Prisma.quiz_responseScalarWhereInput | Prisma.quiz_responseScalarWhereInput[];
};
export type quiz_responseCreateWithoutCustomerInput = {
    id?: string;
    anonymous_id?: string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    quiz_definition: Prisma.quiz_definitionCreateNestedOneWithoutQuiz_responseInput;
};
export type quiz_responseUncheckedCreateWithoutCustomerInput = {
    id?: string;
    quiz_id: string;
    anonymous_id?: string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Date | string | null;
    created_at?: Date | string;
};
export type quiz_responseCreateOrConnectWithoutCustomerInput = {
    where: Prisma.quiz_responseWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_responseCreateWithoutCustomerInput, Prisma.quiz_responseUncheckedCreateWithoutCustomerInput>;
};
export type quiz_responseCreateManyCustomerInputEnvelope = {
    data: Prisma.quiz_responseCreateManyCustomerInput | Prisma.quiz_responseCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type quiz_responseUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.quiz_responseWhereUniqueInput;
    update: Prisma.XOR<Prisma.quiz_responseUpdateWithoutCustomerInput, Prisma.quiz_responseUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.quiz_responseCreateWithoutCustomerInput, Prisma.quiz_responseUncheckedCreateWithoutCustomerInput>;
};
export type quiz_responseUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.quiz_responseWhereUniqueInput;
    data: Prisma.XOR<Prisma.quiz_responseUpdateWithoutCustomerInput, Prisma.quiz_responseUncheckedUpdateWithoutCustomerInput>;
};
export type quiz_responseUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.quiz_responseScalarWhereInput;
    data: Prisma.XOR<Prisma.quiz_responseUpdateManyMutationInput, Prisma.quiz_responseUncheckedUpdateManyWithoutCustomerInput>;
};
export type quiz_responseScalarWhereInput = {
    AND?: Prisma.quiz_responseScalarWhereInput | Prisma.quiz_responseScalarWhereInput[];
    OR?: Prisma.quiz_responseScalarWhereInput[];
    NOT?: Prisma.quiz_responseScalarWhereInput | Prisma.quiz_responseScalarWhereInput[];
    id?: Prisma.UuidFilter<"quiz_response"> | string;
    quiz_id?: Prisma.UuidFilter<"quiz_response"> | string;
    customer_id?: Prisma.UuidNullableFilter<"quiz_response"> | string | null;
    anonymous_id?: Prisma.StringNullableFilter<"quiz_response"> | string | null;
    answers?: Prisma.JsonFilter<"quiz_response">;
    result?: Prisma.JsonNullableFilter<"quiz_response">;
    completed_at?: Prisma.DateTimeNullableFilter<"quiz_response"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"quiz_response"> | Date | string;
};
export type quiz_responseCreateWithoutQuiz_definitionInput = {
    id?: string;
    anonymous_id?: string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    customer?: Prisma.CustomerCreateNestedOneWithoutQuiz_responseInput;
};
export type quiz_responseUncheckedCreateWithoutQuiz_definitionInput = {
    id?: string;
    customer_id?: string | null;
    anonymous_id?: string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Date | string | null;
    created_at?: Date | string;
};
export type quiz_responseCreateOrConnectWithoutQuiz_definitionInput = {
    where: Prisma.quiz_responseWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_responseCreateWithoutQuiz_definitionInput, Prisma.quiz_responseUncheckedCreateWithoutQuiz_definitionInput>;
};
export type quiz_responseCreateManyQuiz_definitionInputEnvelope = {
    data: Prisma.quiz_responseCreateManyQuiz_definitionInput | Prisma.quiz_responseCreateManyQuiz_definitionInput[];
    skipDuplicates?: boolean;
};
export type quiz_responseUpsertWithWhereUniqueWithoutQuiz_definitionInput = {
    where: Prisma.quiz_responseWhereUniqueInput;
    update: Prisma.XOR<Prisma.quiz_responseUpdateWithoutQuiz_definitionInput, Prisma.quiz_responseUncheckedUpdateWithoutQuiz_definitionInput>;
    create: Prisma.XOR<Prisma.quiz_responseCreateWithoutQuiz_definitionInput, Prisma.quiz_responseUncheckedCreateWithoutQuiz_definitionInput>;
};
export type quiz_responseUpdateWithWhereUniqueWithoutQuiz_definitionInput = {
    where: Prisma.quiz_responseWhereUniqueInput;
    data: Prisma.XOR<Prisma.quiz_responseUpdateWithoutQuiz_definitionInput, Prisma.quiz_responseUncheckedUpdateWithoutQuiz_definitionInput>;
};
export type quiz_responseUpdateManyWithWhereWithoutQuiz_definitionInput = {
    where: Prisma.quiz_responseScalarWhereInput;
    data: Prisma.XOR<Prisma.quiz_responseUpdateManyMutationInput, Prisma.quiz_responseUncheckedUpdateManyWithoutQuiz_definitionInput>;
};
export type quiz_responseCreateManyCustomerInput = {
    id?: string;
    quiz_id: string;
    anonymous_id?: string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Date | string | null;
    created_at?: Date | string;
};
export type quiz_responseUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    quiz_definition?: Prisma.quiz_definitionUpdateOneRequiredWithoutQuiz_responseNestedInput;
};
export type quiz_responseUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quiz_id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type quiz_responseUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quiz_id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type quiz_responseCreateManyQuiz_definitionInput = {
    id?: string;
    customer_id?: string | null;
    anonymous_id?: string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Date | string | null;
    created_at?: Date | string;
};
export type quiz_responseUpdateWithoutQuiz_definitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneWithoutQuiz_responseNestedInput;
};
export type quiz_responseUncheckedUpdateWithoutQuiz_definitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type quiz_responseUncheckedUpdateManyWithoutQuiz_definitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    anonymous_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    result?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type quiz_responseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quiz_id?: boolean;
    customer_id?: boolean;
    anonymous_id?: boolean;
    answers?: boolean;
    result?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.quiz_response$customerArgs<ExtArgs>;
    quiz_definition?: boolean | Prisma.quiz_definitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_response"]>;
export type quiz_responseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quiz_id?: boolean;
    customer_id?: boolean;
    anonymous_id?: boolean;
    answers?: boolean;
    result?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.quiz_response$customerArgs<ExtArgs>;
    quiz_definition?: boolean | Prisma.quiz_definitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_response"]>;
export type quiz_responseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quiz_id?: boolean;
    customer_id?: boolean;
    anonymous_id?: boolean;
    answers?: boolean;
    result?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.quiz_response$customerArgs<ExtArgs>;
    quiz_definition?: boolean | Prisma.quiz_definitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["quiz_response"]>;
export type quiz_responseSelectScalar = {
    id?: boolean;
    quiz_id?: boolean;
    customer_id?: boolean;
    anonymous_id?: boolean;
    answers?: boolean;
    result?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
};
export type quiz_responseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "quiz_id" | "customer_id" | "anonymous_id" | "answers" | "result" | "completed_at" | "created_at", ExtArgs["result"]["quiz_response"]>;
export type quiz_responseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.quiz_response$customerArgs<ExtArgs>;
    quiz_definition?: boolean | Prisma.quiz_definitionDefaultArgs<ExtArgs>;
};
export type quiz_responseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.quiz_response$customerArgs<ExtArgs>;
    quiz_definition?: boolean | Prisma.quiz_definitionDefaultArgs<ExtArgs>;
};
export type quiz_responseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.quiz_response$customerArgs<ExtArgs>;
    quiz_definition?: boolean | Prisma.quiz_definitionDefaultArgs<ExtArgs>;
};
export type $quiz_responsePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "quiz_response";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs> | null;
        quiz_definition: Prisma.$quiz_definitionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        quiz_id: string;
        customer_id: string | null;
        anonymous_id: string | null;
        answers: runtime.JsonValue;
        result: runtime.JsonValue | null;
        completed_at: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["quiz_response"]>;
    composites: {};
};
export type quiz_responseGetPayload<S extends boolean | null | undefined | quiz_responseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$quiz_responsePayload, S>;
export type quiz_responseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<quiz_responseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Quiz_responseCountAggregateInputType | true;
};
export interface quiz_responseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['quiz_response'];
        meta: {
            name: 'quiz_response';
        };
    };
    findUnique<T extends quiz_responseFindUniqueArgs>(args: Prisma.SelectSubset<T, quiz_responseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__quiz_responseClient<runtime.Types.Result.GetResult<Prisma.$quiz_responsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends quiz_responseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, quiz_responseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_responseClient<runtime.Types.Result.GetResult<Prisma.$quiz_responsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends quiz_responseFindFirstArgs>(args?: Prisma.SelectSubset<T, quiz_responseFindFirstArgs<ExtArgs>>): Prisma.Prisma__quiz_responseClient<runtime.Types.Result.GetResult<Prisma.$quiz_responsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends quiz_responseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, quiz_responseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__quiz_responseClient<runtime.Types.Result.GetResult<Prisma.$quiz_responsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends quiz_responseFindManyArgs>(args?: Prisma.SelectSubset<T, quiz_responseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_responsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends quiz_responseCreateArgs>(args: Prisma.SelectSubset<T, quiz_responseCreateArgs<ExtArgs>>): Prisma.Prisma__quiz_responseClient<runtime.Types.Result.GetResult<Prisma.$quiz_responsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends quiz_responseCreateManyArgs>(args?: Prisma.SelectSubset<T, quiz_responseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends quiz_responseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, quiz_responseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_responsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends quiz_responseDeleteArgs>(args: Prisma.SelectSubset<T, quiz_responseDeleteArgs<ExtArgs>>): Prisma.Prisma__quiz_responseClient<runtime.Types.Result.GetResult<Prisma.$quiz_responsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends quiz_responseUpdateArgs>(args: Prisma.SelectSubset<T, quiz_responseUpdateArgs<ExtArgs>>): Prisma.Prisma__quiz_responseClient<runtime.Types.Result.GetResult<Prisma.$quiz_responsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends quiz_responseDeleteManyArgs>(args?: Prisma.SelectSubset<T, quiz_responseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends quiz_responseUpdateManyArgs>(args: Prisma.SelectSubset<T, quiz_responseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends quiz_responseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, quiz_responseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$quiz_responsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends quiz_responseUpsertArgs>(args: Prisma.SelectSubset<T, quiz_responseUpsertArgs<ExtArgs>>): Prisma.Prisma__quiz_responseClient<runtime.Types.Result.GetResult<Prisma.$quiz_responsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends quiz_responseCountArgs>(args?: Prisma.Subset<T, quiz_responseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Quiz_responseCountAggregateOutputType> : number>;
    aggregate<T extends Quiz_responseAggregateArgs>(args: Prisma.Subset<T, Quiz_responseAggregateArgs>): Prisma.PrismaPromise<GetQuiz_responseAggregateType<T>>;
    groupBy<T extends quiz_responseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: quiz_responseGroupByArgs['orderBy'];
    } : {
        orderBy?: quiz_responseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, quiz_responseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuiz_responseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: quiz_responseFieldRefs;
}
export interface Prisma__quiz_responseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.quiz_response$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quiz_response$customerArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    quiz_definition<T extends Prisma.quiz_definitionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.quiz_definitionDefaultArgs<ExtArgs>>): Prisma.Prisma__quiz_definitionClient<runtime.Types.Result.GetResult<Prisma.$quiz_definitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface quiz_responseFieldRefs {
    readonly id: Prisma.FieldRef<"quiz_response", 'String'>;
    readonly quiz_id: Prisma.FieldRef<"quiz_response", 'String'>;
    readonly customer_id: Prisma.FieldRef<"quiz_response", 'String'>;
    readonly anonymous_id: Prisma.FieldRef<"quiz_response", 'String'>;
    readonly answers: Prisma.FieldRef<"quiz_response", 'Json'>;
    readonly result: Prisma.FieldRef<"quiz_response", 'Json'>;
    readonly completed_at: Prisma.FieldRef<"quiz_response", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"quiz_response", 'DateTime'>;
}
export type quiz_responseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_responseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_responseOmit<ExtArgs> | null;
    include?: Prisma.quiz_responseInclude<ExtArgs> | null;
    where: Prisma.quiz_responseWhereUniqueInput;
};
export type quiz_responseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_responseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_responseOmit<ExtArgs> | null;
    include?: Prisma.quiz_responseInclude<ExtArgs> | null;
    where: Prisma.quiz_responseWhereUniqueInput;
};
export type quiz_responseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_responseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_responseOmit<ExtArgs> | null;
    include?: Prisma.quiz_responseInclude<ExtArgs> | null;
    where?: Prisma.quiz_responseWhereInput;
    orderBy?: Prisma.quiz_responseOrderByWithRelationInput | Prisma.quiz_responseOrderByWithRelationInput[];
    cursor?: Prisma.quiz_responseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_responseScalarFieldEnum | Prisma.Quiz_responseScalarFieldEnum[];
};
export type quiz_responseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_responseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_responseOmit<ExtArgs> | null;
    include?: Prisma.quiz_responseInclude<ExtArgs> | null;
    where?: Prisma.quiz_responseWhereInput;
    orderBy?: Prisma.quiz_responseOrderByWithRelationInput | Prisma.quiz_responseOrderByWithRelationInput[];
    cursor?: Prisma.quiz_responseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_responseScalarFieldEnum | Prisma.Quiz_responseScalarFieldEnum[];
};
export type quiz_responseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_responseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_responseOmit<ExtArgs> | null;
    include?: Prisma.quiz_responseInclude<ExtArgs> | null;
    where?: Prisma.quiz_responseWhereInput;
    orderBy?: Prisma.quiz_responseOrderByWithRelationInput | Prisma.quiz_responseOrderByWithRelationInput[];
    cursor?: Prisma.quiz_responseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Quiz_responseScalarFieldEnum | Prisma.Quiz_responseScalarFieldEnum[];
};
export type quiz_responseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_responseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_responseOmit<ExtArgs> | null;
    include?: Prisma.quiz_responseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_responseCreateInput, Prisma.quiz_responseUncheckedCreateInput>;
};
export type quiz_responseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.quiz_responseCreateManyInput | Prisma.quiz_responseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type quiz_responseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_responseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quiz_responseOmit<ExtArgs> | null;
    data: Prisma.quiz_responseCreateManyInput | Prisma.quiz_responseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.quiz_responseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type quiz_responseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_responseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_responseOmit<ExtArgs> | null;
    include?: Prisma.quiz_responseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_responseUpdateInput, Prisma.quiz_responseUncheckedUpdateInput>;
    where: Prisma.quiz_responseWhereUniqueInput;
};
export type quiz_responseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.quiz_responseUpdateManyMutationInput, Prisma.quiz_responseUncheckedUpdateManyInput>;
    where?: Prisma.quiz_responseWhereInput;
    limit?: number;
};
export type quiz_responseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_responseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.quiz_responseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.quiz_responseUpdateManyMutationInput, Prisma.quiz_responseUncheckedUpdateManyInput>;
    where?: Prisma.quiz_responseWhereInput;
    limit?: number;
    include?: Prisma.quiz_responseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type quiz_responseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_responseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_responseOmit<ExtArgs> | null;
    include?: Prisma.quiz_responseInclude<ExtArgs> | null;
    where: Prisma.quiz_responseWhereUniqueInput;
    create: Prisma.XOR<Prisma.quiz_responseCreateInput, Prisma.quiz_responseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.quiz_responseUpdateInput, Prisma.quiz_responseUncheckedUpdateInput>;
};
export type quiz_responseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_responseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_responseOmit<ExtArgs> | null;
    include?: Prisma.quiz_responseInclude<ExtArgs> | null;
    where: Prisma.quiz_responseWhereUniqueInput;
};
export type quiz_responseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.quiz_responseWhereInput;
    limit?: number;
};
export type quiz_response$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
};
export type quiz_responseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.quiz_responseSelect<ExtArgs> | null;
    omit?: Prisma.quiz_responseOmit<ExtArgs> | null;
    include?: Prisma.quiz_responseInclude<ExtArgs> | null;
};
