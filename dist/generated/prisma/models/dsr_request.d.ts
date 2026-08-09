import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type dsr_requestModel = runtime.Types.Result.DefaultSelection<Prisma.$dsr_requestPayload>;
export type AggregateDsr_request = {
    _count: Dsr_requestCountAggregateOutputType | null;
    _min: Dsr_requestMinAggregateOutputType | null;
    _max: Dsr_requestMaxAggregateOutputType | null;
};
export type Dsr_requestMinAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    request_type: string | null;
    status: string | null;
    requested_at: Date | null;
    completed_at: Date | null;
    export_url: string | null;
    handled_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Dsr_requestMaxAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    request_type: string | null;
    status: string | null;
    requested_at: Date | null;
    completed_at: Date | null;
    export_url: string | null;
    handled_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Dsr_requestCountAggregateOutputType = {
    id: number;
    customer_id: number;
    request_type: number;
    status: number;
    requested_at: number;
    completed_at: number;
    export_url: number;
    handled_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Dsr_requestMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    request_type?: true;
    status?: true;
    requested_at?: true;
    completed_at?: true;
    export_url?: true;
    handled_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type Dsr_requestMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    request_type?: true;
    status?: true;
    requested_at?: true;
    completed_at?: true;
    export_url?: true;
    handled_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type Dsr_requestCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    request_type?: true;
    status?: true;
    requested_at?: true;
    completed_at?: true;
    export_url?: true;
    handled_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Dsr_requestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.dsr_requestWhereInput;
    orderBy?: Prisma.dsr_requestOrderByWithRelationInput | Prisma.dsr_requestOrderByWithRelationInput[];
    cursor?: Prisma.dsr_requestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Dsr_requestCountAggregateInputType;
    _min?: Dsr_requestMinAggregateInputType;
    _max?: Dsr_requestMaxAggregateInputType;
};
export type GetDsr_requestAggregateType<T extends Dsr_requestAggregateArgs> = {
    [P in keyof T & keyof AggregateDsr_request]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDsr_request[P]> : Prisma.GetScalarType<T[P], AggregateDsr_request[P]>;
};
export type dsr_requestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.dsr_requestWhereInput;
    orderBy?: Prisma.dsr_requestOrderByWithAggregationInput | Prisma.dsr_requestOrderByWithAggregationInput[];
    by: Prisma.Dsr_requestScalarFieldEnum[] | Prisma.Dsr_requestScalarFieldEnum;
    having?: Prisma.dsr_requestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Dsr_requestCountAggregateInputType | true;
    _min?: Dsr_requestMinAggregateInputType;
    _max?: Dsr_requestMaxAggregateInputType;
};
export type Dsr_requestGroupByOutputType = {
    id: string;
    customer_id: string;
    request_type: string;
    status: string;
    requested_at: Date;
    completed_at: Date | null;
    export_url: string | null;
    handled_by: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Dsr_requestCountAggregateOutputType | null;
    _min: Dsr_requestMinAggregateOutputType | null;
    _max: Dsr_requestMaxAggregateOutputType | null;
};
export type GetDsr_requestGroupByPayload<T extends dsr_requestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Dsr_requestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Dsr_requestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Dsr_requestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Dsr_requestGroupByOutputType[P]>;
}>>;
export type dsr_requestWhereInput = {
    AND?: Prisma.dsr_requestWhereInput | Prisma.dsr_requestWhereInput[];
    OR?: Prisma.dsr_requestWhereInput[];
    NOT?: Prisma.dsr_requestWhereInput | Prisma.dsr_requestWhereInput[];
    id?: Prisma.UuidFilter<"dsr_request"> | string;
    customer_id?: Prisma.UuidFilter<"dsr_request"> | string;
    request_type?: Prisma.StringFilter<"dsr_request"> | string;
    status?: Prisma.StringFilter<"dsr_request"> | string;
    requested_at?: Prisma.DateTimeFilter<"dsr_request"> | Date | string;
    completed_at?: Prisma.DateTimeNullableFilter<"dsr_request"> | Date | string | null;
    export_url?: Prisma.StringNullableFilter<"dsr_request"> | string | null;
    handled_by?: Prisma.UuidNullableFilter<"dsr_request"> | string | null;
    created_at?: Prisma.DateTimeFilter<"dsr_request"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"dsr_request"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    admin_user?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
};
export type dsr_requestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    request_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requested_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    export_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    handled_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    admin_user?: Prisma.AdminUserOrderByWithRelationInput;
};
export type dsr_requestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.dsr_requestWhereInput | Prisma.dsr_requestWhereInput[];
    OR?: Prisma.dsr_requestWhereInput[];
    NOT?: Prisma.dsr_requestWhereInput | Prisma.dsr_requestWhereInput[];
    customer_id?: Prisma.UuidFilter<"dsr_request"> | string;
    request_type?: Prisma.StringFilter<"dsr_request"> | string;
    status?: Prisma.StringFilter<"dsr_request"> | string;
    requested_at?: Prisma.DateTimeFilter<"dsr_request"> | Date | string;
    completed_at?: Prisma.DateTimeNullableFilter<"dsr_request"> | Date | string | null;
    export_url?: Prisma.StringNullableFilter<"dsr_request"> | string | null;
    handled_by?: Prisma.UuidNullableFilter<"dsr_request"> | string | null;
    created_at?: Prisma.DateTimeFilter<"dsr_request"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"dsr_request"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    admin_user?: Prisma.XOR<Prisma.AdminUserNullableScalarRelationFilter, Prisma.AdminUserWhereInput> | null;
}, "id">;
export type dsr_requestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    request_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requested_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    export_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    handled_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.dsr_requestCountOrderByAggregateInput;
    _max?: Prisma.dsr_requestMaxOrderByAggregateInput;
    _min?: Prisma.dsr_requestMinOrderByAggregateInput;
};
export type dsr_requestScalarWhereWithAggregatesInput = {
    AND?: Prisma.dsr_requestScalarWhereWithAggregatesInput | Prisma.dsr_requestScalarWhereWithAggregatesInput[];
    OR?: Prisma.dsr_requestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.dsr_requestScalarWhereWithAggregatesInput | Prisma.dsr_requestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"dsr_request"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"dsr_request"> | string;
    request_type?: Prisma.StringWithAggregatesFilter<"dsr_request"> | string;
    status?: Prisma.StringWithAggregatesFilter<"dsr_request"> | string;
    requested_at?: Prisma.DateTimeWithAggregatesFilter<"dsr_request"> | Date | string;
    completed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"dsr_request"> | Date | string | null;
    export_url?: Prisma.StringNullableWithAggregatesFilter<"dsr_request"> | string | null;
    handled_by?: Prisma.UuidNullableWithAggregatesFilter<"dsr_request"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"dsr_request"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"dsr_request"> | Date | string;
};
export type dsr_requestCreateInput = {
    id?: string;
    request_type: string;
    status?: string;
    requested_at?: Date | string;
    completed_at?: Date | string | null;
    export_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutDsr_requestInput;
    admin_user?: Prisma.AdminUserCreateNestedOneWithoutDsr_requestInput;
};
export type dsr_requestUncheckedCreateInput = {
    id?: string;
    customer_id: string;
    request_type: string;
    status?: string;
    requested_at?: Date | string;
    completed_at?: Date | string | null;
    export_url?: string | null;
    handled_by?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type dsr_requestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    export_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutDsr_requestNestedInput;
    admin_user?: Prisma.AdminUserUpdateOneWithoutDsr_requestNestedInput;
};
export type dsr_requestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    export_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    handled_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dsr_requestCreateManyInput = {
    id?: string;
    customer_id: string;
    request_type: string;
    status?: string;
    requested_at?: Date | string;
    completed_at?: Date | string | null;
    export_url?: string | null;
    handled_by?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type dsr_requestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    export_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dsr_requestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    export_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    handled_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Dsr_requestListRelationFilter = {
    every?: Prisma.dsr_requestWhereInput;
    some?: Prisma.dsr_requestWhereInput;
    none?: Prisma.dsr_requestWhereInput;
};
export type dsr_requestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type dsr_requestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    request_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requested_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    export_url?: Prisma.SortOrder;
    handled_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type dsr_requestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    request_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requested_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    export_url?: Prisma.SortOrder;
    handled_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type dsr_requestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    request_type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requested_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    export_url?: Prisma.SortOrder;
    handled_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type dsr_requestCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.dsr_requestCreateWithoutCustomerInput, Prisma.dsr_requestUncheckedCreateWithoutCustomerInput> | Prisma.dsr_requestCreateWithoutCustomerInput[] | Prisma.dsr_requestUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.dsr_requestCreateOrConnectWithoutCustomerInput | Prisma.dsr_requestCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.dsr_requestCreateManyCustomerInputEnvelope;
    connect?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
};
export type dsr_requestUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.dsr_requestCreateWithoutCustomerInput, Prisma.dsr_requestUncheckedCreateWithoutCustomerInput> | Prisma.dsr_requestCreateWithoutCustomerInput[] | Prisma.dsr_requestUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.dsr_requestCreateOrConnectWithoutCustomerInput | Prisma.dsr_requestCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.dsr_requestCreateManyCustomerInputEnvelope;
    connect?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
};
export type dsr_requestUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.dsr_requestCreateWithoutCustomerInput, Prisma.dsr_requestUncheckedCreateWithoutCustomerInput> | Prisma.dsr_requestCreateWithoutCustomerInput[] | Prisma.dsr_requestUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.dsr_requestCreateOrConnectWithoutCustomerInput | Prisma.dsr_requestCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.dsr_requestUpsertWithWhereUniqueWithoutCustomerInput | Prisma.dsr_requestUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.dsr_requestCreateManyCustomerInputEnvelope;
    set?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    disconnect?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    delete?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    connect?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    update?: Prisma.dsr_requestUpdateWithWhereUniqueWithoutCustomerInput | Prisma.dsr_requestUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.dsr_requestUpdateManyWithWhereWithoutCustomerInput | Prisma.dsr_requestUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.dsr_requestScalarWhereInput | Prisma.dsr_requestScalarWhereInput[];
};
export type dsr_requestUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.dsr_requestCreateWithoutCustomerInput, Prisma.dsr_requestUncheckedCreateWithoutCustomerInput> | Prisma.dsr_requestCreateWithoutCustomerInput[] | Prisma.dsr_requestUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.dsr_requestCreateOrConnectWithoutCustomerInput | Prisma.dsr_requestCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.dsr_requestUpsertWithWhereUniqueWithoutCustomerInput | Prisma.dsr_requestUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.dsr_requestCreateManyCustomerInputEnvelope;
    set?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    disconnect?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    delete?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    connect?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    update?: Prisma.dsr_requestUpdateWithWhereUniqueWithoutCustomerInput | Prisma.dsr_requestUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.dsr_requestUpdateManyWithWhereWithoutCustomerInput | Prisma.dsr_requestUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.dsr_requestScalarWhereInput | Prisma.dsr_requestScalarWhereInput[];
};
export type dsr_requestCreateNestedManyWithoutAdmin_userInput = {
    create?: Prisma.XOR<Prisma.dsr_requestCreateWithoutAdmin_userInput, Prisma.dsr_requestUncheckedCreateWithoutAdmin_userInput> | Prisma.dsr_requestCreateWithoutAdmin_userInput[] | Prisma.dsr_requestUncheckedCreateWithoutAdmin_userInput[];
    connectOrCreate?: Prisma.dsr_requestCreateOrConnectWithoutAdmin_userInput | Prisma.dsr_requestCreateOrConnectWithoutAdmin_userInput[];
    createMany?: Prisma.dsr_requestCreateManyAdmin_userInputEnvelope;
    connect?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
};
export type dsr_requestUncheckedCreateNestedManyWithoutAdmin_userInput = {
    create?: Prisma.XOR<Prisma.dsr_requestCreateWithoutAdmin_userInput, Prisma.dsr_requestUncheckedCreateWithoutAdmin_userInput> | Prisma.dsr_requestCreateWithoutAdmin_userInput[] | Prisma.dsr_requestUncheckedCreateWithoutAdmin_userInput[];
    connectOrCreate?: Prisma.dsr_requestCreateOrConnectWithoutAdmin_userInput | Prisma.dsr_requestCreateOrConnectWithoutAdmin_userInput[];
    createMany?: Prisma.dsr_requestCreateManyAdmin_userInputEnvelope;
    connect?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
};
export type dsr_requestUpdateManyWithoutAdmin_userNestedInput = {
    create?: Prisma.XOR<Prisma.dsr_requestCreateWithoutAdmin_userInput, Prisma.dsr_requestUncheckedCreateWithoutAdmin_userInput> | Prisma.dsr_requestCreateWithoutAdmin_userInput[] | Prisma.dsr_requestUncheckedCreateWithoutAdmin_userInput[];
    connectOrCreate?: Prisma.dsr_requestCreateOrConnectWithoutAdmin_userInput | Prisma.dsr_requestCreateOrConnectWithoutAdmin_userInput[];
    upsert?: Prisma.dsr_requestUpsertWithWhereUniqueWithoutAdmin_userInput | Prisma.dsr_requestUpsertWithWhereUniqueWithoutAdmin_userInput[];
    createMany?: Prisma.dsr_requestCreateManyAdmin_userInputEnvelope;
    set?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    disconnect?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    delete?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    connect?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    update?: Prisma.dsr_requestUpdateWithWhereUniqueWithoutAdmin_userInput | Prisma.dsr_requestUpdateWithWhereUniqueWithoutAdmin_userInput[];
    updateMany?: Prisma.dsr_requestUpdateManyWithWhereWithoutAdmin_userInput | Prisma.dsr_requestUpdateManyWithWhereWithoutAdmin_userInput[];
    deleteMany?: Prisma.dsr_requestScalarWhereInput | Prisma.dsr_requestScalarWhereInput[];
};
export type dsr_requestUncheckedUpdateManyWithoutAdmin_userNestedInput = {
    create?: Prisma.XOR<Prisma.dsr_requestCreateWithoutAdmin_userInput, Prisma.dsr_requestUncheckedCreateWithoutAdmin_userInput> | Prisma.dsr_requestCreateWithoutAdmin_userInput[] | Prisma.dsr_requestUncheckedCreateWithoutAdmin_userInput[];
    connectOrCreate?: Prisma.dsr_requestCreateOrConnectWithoutAdmin_userInput | Prisma.dsr_requestCreateOrConnectWithoutAdmin_userInput[];
    upsert?: Prisma.dsr_requestUpsertWithWhereUniqueWithoutAdmin_userInput | Prisma.dsr_requestUpsertWithWhereUniqueWithoutAdmin_userInput[];
    createMany?: Prisma.dsr_requestCreateManyAdmin_userInputEnvelope;
    set?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    disconnect?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    delete?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    connect?: Prisma.dsr_requestWhereUniqueInput | Prisma.dsr_requestWhereUniqueInput[];
    update?: Prisma.dsr_requestUpdateWithWhereUniqueWithoutAdmin_userInput | Prisma.dsr_requestUpdateWithWhereUniqueWithoutAdmin_userInput[];
    updateMany?: Prisma.dsr_requestUpdateManyWithWhereWithoutAdmin_userInput | Prisma.dsr_requestUpdateManyWithWhereWithoutAdmin_userInput[];
    deleteMany?: Prisma.dsr_requestScalarWhereInput | Prisma.dsr_requestScalarWhereInput[];
};
export type dsr_requestCreateWithoutCustomerInput = {
    id?: string;
    request_type: string;
    status?: string;
    requested_at?: Date | string;
    completed_at?: Date | string | null;
    export_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    admin_user?: Prisma.AdminUserCreateNestedOneWithoutDsr_requestInput;
};
export type dsr_requestUncheckedCreateWithoutCustomerInput = {
    id?: string;
    request_type: string;
    status?: string;
    requested_at?: Date | string;
    completed_at?: Date | string | null;
    export_url?: string | null;
    handled_by?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type dsr_requestCreateOrConnectWithoutCustomerInput = {
    where: Prisma.dsr_requestWhereUniqueInput;
    create: Prisma.XOR<Prisma.dsr_requestCreateWithoutCustomerInput, Prisma.dsr_requestUncheckedCreateWithoutCustomerInput>;
};
export type dsr_requestCreateManyCustomerInputEnvelope = {
    data: Prisma.dsr_requestCreateManyCustomerInput | Prisma.dsr_requestCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type dsr_requestUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.dsr_requestWhereUniqueInput;
    update: Prisma.XOR<Prisma.dsr_requestUpdateWithoutCustomerInput, Prisma.dsr_requestUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.dsr_requestCreateWithoutCustomerInput, Prisma.dsr_requestUncheckedCreateWithoutCustomerInput>;
};
export type dsr_requestUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.dsr_requestWhereUniqueInput;
    data: Prisma.XOR<Prisma.dsr_requestUpdateWithoutCustomerInput, Prisma.dsr_requestUncheckedUpdateWithoutCustomerInput>;
};
export type dsr_requestUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.dsr_requestScalarWhereInput;
    data: Prisma.XOR<Prisma.dsr_requestUpdateManyMutationInput, Prisma.dsr_requestUncheckedUpdateManyWithoutCustomerInput>;
};
export type dsr_requestScalarWhereInput = {
    AND?: Prisma.dsr_requestScalarWhereInput | Prisma.dsr_requestScalarWhereInput[];
    OR?: Prisma.dsr_requestScalarWhereInput[];
    NOT?: Prisma.dsr_requestScalarWhereInput | Prisma.dsr_requestScalarWhereInput[];
    id?: Prisma.UuidFilter<"dsr_request"> | string;
    customer_id?: Prisma.UuidFilter<"dsr_request"> | string;
    request_type?: Prisma.StringFilter<"dsr_request"> | string;
    status?: Prisma.StringFilter<"dsr_request"> | string;
    requested_at?: Prisma.DateTimeFilter<"dsr_request"> | Date | string;
    completed_at?: Prisma.DateTimeNullableFilter<"dsr_request"> | Date | string | null;
    export_url?: Prisma.StringNullableFilter<"dsr_request"> | string | null;
    handled_by?: Prisma.UuidNullableFilter<"dsr_request"> | string | null;
    created_at?: Prisma.DateTimeFilter<"dsr_request"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"dsr_request"> | Date | string;
};
export type dsr_requestCreateWithoutAdmin_userInput = {
    id?: string;
    request_type: string;
    status?: string;
    requested_at?: Date | string;
    completed_at?: Date | string | null;
    export_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutDsr_requestInput;
};
export type dsr_requestUncheckedCreateWithoutAdmin_userInput = {
    id?: string;
    customer_id: string;
    request_type: string;
    status?: string;
    requested_at?: Date | string;
    completed_at?: Date | string | null;
    export_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type dsr_requestCreateOrConnectWithoutAdmin_userInput = {
    where: Prisma.dsr_requestWhereUniqueInput;
    create: Prisma.XOR<Prisma.dsr_requestCreateWithoutAdmin_userInput, Prisma.dsr_requestUncheckedCreateWithoutAdmin_userInput>;
};
export type dsr_requestCreateManyAdmin_userInputEnvelope = {
    data: Prisma.dsr_requestCreateManyAdmin_userInput | Prisma.dsr_requestCreateManyAdmin_userInput[];
    skipDuplicates?: boolean;
};
export type dsr_requestUpsertWithWhereUniqueWithoutAdmin_userInput = {
    where: Prisma.dsr_requestWhereUniqueInput;
    update: Prisma.XOR<Prisma.dsr_requestUpdateWithoutAdmin_userInput, Prisma.dsr_requestUncheckedUpdateWithoutAdmin_userInput>;
    create: Prisma.XOR<Prisma.dsr_requestCreateWithoutAdmin_userInput, Prisma.dsr_requestUncheckedCreateWithoutAdmin_userInput>;
};
export type dsr_requestUpdateWithWhereUniqueWithoutAdmin_userInput = {
    where: Prisma.dsr_requestWhereUniqueInput;
    data: Prisma.XOR<Prisma.dsr_requestUpdateWithoutAdmin_userInput, Prisma.dsr_requestUncheckedUpdateWithoutAdmin_userInput>;
};
export type dsr_requestUpdateManyWithWhereWithoutAdmin_userInput = {
    where: Prisma.dsr_requestScalarWhereInput;
    data: Prisma.XOR<Prisma.dsr_requestUpdateManyMutationInput, Prisma.dsr_requestUncheckedUpdateManyWithoutAdmin_userInput>;
};
export type dsr_requestCreateManyCustomerInput = {
    id?: string;
    request_type: string;
    status?: string;
    requested_at?: Date | string;
    completed_at?: Date | string | null;
    export_url?: string | null;
    handled_by?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type dsr_requestUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    export_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin_user?: Prisma.AdminUserUpdateOneWithoutDsr_requestNestedInput;
};
export type dsr_requestUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    export_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    handled_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dsr_requestUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    export_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    handled_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dsr_requestCreateManyAdmin_userInput = {
    id?: string;
    customer_id: string;
    request_type: string;
    status?: string;
    requested_at?: Date | string;
    completed_at?: Date | string | null;
    export_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type dsr_requestUpdateWithoutAdmin_userInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    export_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutDsr_requestNestedInput;
};
export type dsr_requestUncheckedUpdateWithoutAdmin_userInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    export_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dsr_requestUncheckedUpdateManyWithoutAdmin_userInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    request_type?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    export_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dsr_requestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    request_type?: boolean;
    status?: boolean;
    requested_at?: boolean;
    completed_at?: boolean;
    export_url?: boolean;
    handled_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    admin_user?: boolean | Prisma.dsr_request$admin_userArgs<ExtArgs>;
}, ExtArgs["result"]["dsr_request"]>;
export type dsr_requestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    request_type?: boolean;
    status?: boolean;
    requested_at?: boolean;
    completed_at?: boolean;
    export_url?: boolean;
    handled_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    admin_user?: boolean | Prisma.dsr_request$admin_userArgs<ExtArgs>;
}, ExtArgs["result"]["dsr_request"]>;
export type dsr_requestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    request_type?: boolean;
    status?: boolean;
    requested_at?: boolean;
    completed_at?: boolean;
    export_url?: boolean;
    handled_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    admin_user?: boolean | Prisma.dsr_request$admin_userArgs<ExtArgs>;
}, ExtArgs["result"]["dsr_request"]>;
export type dsr_requestSelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    request_type?: boolean;
    status?: boolean;
    requested_at?: boolean;
    completed_at?: boolean;
    export_url?: boolean;
    handled_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type dsr_requestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "request_type" | "status" | "requested_at" | "completed_at" | "export_url" | "handled_by" | "created_at" | "updated_at", ExtArgs["result"]["dsr_request"]>;
export type dsr_requestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    admin_user?: boolean | Prisma.dsr_request$admin_userArgs<ExtArgs>;
};
export type dsr_requestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    admin_user?: boolean | Prisma.dsr_request$admin_userArgs<ExtArgs>;
};
export type dsr_requestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    admin_user?: boolean | Prisma.dsr_request$admin_userArgs<ExtArgs>;
};
export type $dsr_requestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "dsr_request";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        admin_user: Prisma.$AdminUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customer_id: string;
        request_type: string;
        status: string;
        requested_at: Date;
        completed_at: Date | null;
        export_url: string | null;
        handled_by: string | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["dsr_request"]>;
    composites: {};
};
export type dsr_requestGetPayload<S extends boolean | null | undefined | dsr_requestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$dsr_requestPayload, S>;
export type dsr_requestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<dsr_requestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Dsr_requestCountAggregateInputType | true;
};
export interface dsr_requestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['dsr_request'];
        meta: {
            name: 'dsr_request';
        };
    };
    findUnique<T extends dsr_requestFindUniqueArgs>(args: Prisma.SelectSubset<T, dsr_requestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__dsr_requestClient<runtime.Types.Result.GetResult<Prisma.$dsr_requestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends dsr_requestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, dsr_requestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__dsr_requestClient<runtime.Types.Result.GetResult<Prisma.$dsr_requestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends dsr_requestFindFirstArgs>(args?: Prisma.SelectSubset<T, dsr_requestFindFirstArgs<ExtArgs>>): Prisma.Prisma__dsr_requestClient<runtime.Types.Result.GetResult<Prisma.$dsr_requestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends dsr_requestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, dsr_requestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__dsr_requestClient<runtime.Types.Result.GetResult<Prisma.$dsr_requestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends dsr_requestFindManyArgs>(args?: Prisma.SelectSubset<T, dsr_requestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$dsr_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends dsr_requestCreateArgs>(args: Prisma.SelectSubset<T, dsr_requestCreateArgs<ExtArgs>>): Prisma.Prisma__dsr_requestClient<runtime.Types.Result.GetResult<Prisma.$dsr_requestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends dsr_requestCreateManyArgs>(args?: Prisma.SelectSubset<T, dsr_requestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends dsr_requestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, dsr_requestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$dsr_requestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends dsr_requestDeleteArgs>(args: Prisma.SelectSubset<T, dsr_requestDeleteArgs<ExtArgs>>): Prisma.Prisma__dsr_requestClient<runtime.Types.Result.GetResult<Prisma.$dsr_requestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends dsr_requestUpdateArgs>(args: Prisma.SelectSubset<T, dsr_requestUpdateArgs<ExtArgs>>): Prisma.Prisma__dsr_requestClient<runtime.Types.Result.GetResult<Prisma.$dsr_requestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends dsr_requestDeleteManyArgs>(args?: Prisma.SelectSubset<T, dsr_requestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends dsr_requestUpdateManyArgs>(args: Prisma.SelectSubset<T, dsr_requestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends dsr_requestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, dsr_requestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$dsr_requestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends dsr_requestUpsertArgs>(args: Prisma.SelectSubset<T, dsr_requestUpsertArgs<ExtArgs>>): Prisma.Prisma__dsr_requestClient<runtime.Types.Result.GetResult<Prisma.$dsr_requestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends dsr_requestCountArgs>(args?: Prisma.Subset<T, dsr_requestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Dsr_requestCountAggregateOutputType> : number>;
    aggregate<T extends Dsr_requestAggregateArgs>(args: Prisma.Subset<T, Dsr_requestAggregateArgs>): Prisma.PrismaPromise<GetDsr_requestAggregateType<T>>;
    groupBy<T extends dsr_requestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: dsr_requestGroupByArgs['orderBy'];
    } : {
        orderBy?: dsr_requestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, dsr_requestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDsr_requestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: dsr_requestFieldRefs;
}
export interface Prisma__dsr_requestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    admin_user<T extends Prisma.dsr_request$admin_userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.dsr_request$admin_userArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface dsr_requestFieldRefs {
    readonly id: Prisma.FieldRef<"dsr_request", 'String'>;
    readonly customer_id: Prisma.FieldRef<"dsr_request", 'String'>;
    readonly request_type: Prisma.FieldRef<"dsr_request", 'String'>;
    readonly status: Prisma.FieldRef<"dsr_request", 'String'>;
    readonly requested_at: Prisma.FieldRef<"dsr_request", 'DateTime'>;
    readonly completed_at: Prisma.FieldRef<"dsr_request", 'DateTime'>;
    readonly export_url: Prisma.FieldRef<"dsr_request", 'String'>;
    readonly handled_by: Prisma.FieldRef<"dsr_request", 'String'>;
    readonly created_at: Prisma.FieldRef<"dsr_request", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"dsr_request", 'DateTime'>;
}
export type dsr_requestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dsr_requestSelect<ExtArgs> | null;
    omit?: Prisma.dsr_requestOmit<ExtArgs> | null;
    include?: Prisma.dsr_requestInclude<ExtArgs> | null;
    where: Prisma.dsr_requestWhereUniqueInput;
};
export type dsr_requestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dsr_requestSelect<ExtArgs> | null;
    omit?: Prisma.dsr_requestOmit<ExtArgs> | null;
    include?: Prisma.dsr_requestInclude<ExtArgs> | null;
    where: Prisma.dsr_requestWhereUniqueInput;
};
export type dsr_requestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dsr_requestSelect<ExtArgs> | null;
    omit?: Prisma.dsr_requestOmit<ExtArgs> | null;
    include?: Prisma.dsr_requestInclude<ExtArgs> | null;
    where?: Prisma.dsr_requestWhereInput;
    orderBy?: Prisma.dsr_requestOrderByWithRelationInput | Prisma.dsr_requestOrderByWithRelationInput[];
    cursor?: Prisma.dsr_requestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Dsr_requestScalarFieldEnum | Prisma.Dsr_requestScalarFieldEnum[];
};
export type dsr_requestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dsr_requestSelect<ExtArgs> | null;
    omit?: Prisma.dsr_requestOmit<ExtArgs> | null;
    include?: Prisma.dsr_requestInclude<ExtArgs> | null;
    where?: Prisma.dsr_requestWhereInput;
    orderBy?: Prisma.dsr_requestOrderByWithRelationInput | Prisma.dsr_requestOrderByWithRelationInput[];
    cursor?: Prisma.dsr_requestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Dsr_requestScalarFieldEnum | Prisma.Dsr_requestScalarFieldEnum[];
};
export type dsr_requestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dsr_requestSelect<ExtArgs> | null;
    omit?: Prisma.dsr_requestOmit<ExtArgs> | null;
    include?: Prisma.dsr_requestInclude<ExtArgs> | null;
    where?: Prisma.dsr_requestWhereInput;
    orderBy?: Prisma.dsr_requestOrderByWithRelationInput | Prisma.dsr_requestOrderByWithRelationInput[];
    cursor?: Prisma.dsr_requestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Dsr_requestScalarFieldEnum | Prisma.Dsr_requestScalarFieldEnum[];
};
export type dsr_requestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dsr_requestSelect<ExtArgs> | null;
    omit?: Prisma.dsr_requestOmit<ExtArgs> | null;
    include?: Prisma.dsr_requestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.dsr_requestCreateInput, Prisma.dsr_requestUncheckedCreateInput>;
};
export type dsr_requestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.dsr_requestCreateManyInput | Prisma.dsr_requestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type dsr_requestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dsr_requestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.dsr_requestOmit<ExtArgs> | null;
    data: Prisma.dsr_requestCreateManyInput | Prisma.dsr_requestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.dsr_requestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type dsr_requestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dsr_requestSelect<ExtArgs> | null;
    omit?: Prisma.dsr_requestOmit<ExtArgs> | null;
    include?: Prisma.dsr_requestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.dsr_requestUpdateInput, Prisma.dsr_requestUncheckedUpdateInput>;
    where: Prisma.dsr_requestWhereUniqueInput;
};
export type dsr_requestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.dsr_requestUpdateManyMutationInput, Prisma.dsr_requestUncheckedUpdateManyInput>;
    where?: Prisma.dsr_requestWhereInput;
    limit?: number;
};
export type dsr_requestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dsr_requestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.dsr_requestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.dsr_requestUpdateManyMutationInput, Prisma.dsr_requestUncheckedUpdateManyInput>;
    where?: Prisma.dsr_requestWhereInput;
    limit?: number;
    include?: Prisma.dsr_requestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type dsr_requestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dsr_requestSelect<ExtArgs> | null;
    omit?: Prisma.dsr_requestOmit<ExtArgs> | null;
    include?: Prisma.dsr_requestInclude<ExtArgs> | null;
    where: Prisma.dsr_requestWhereUniqueInput;
    create: Prisma.XOR<Prisma.dsr_requestCreateInput, Prisma.dsr_requestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.dsr_requestUpdateInput, Prisma.dsr_requestUncheckedUpdateInput>;
};
export type dsr_requestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dsr_requestSelect<ExtArgs> | null;
    omit?: Prisma.dsr_requestOmit<ExtArgs> | null;
    include?: Prisma.dsr_requestInclude<ExtArgs> | null;
    where: Prisma.dsr_requestWhereUniqueInput;
};
export type dsr_requestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.dsr_requestWhereInput;
    limit?: number;
};
export type dsr_request$admin_userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
};
export type dsr_requestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dsr_requestSelect<ExtArgs> | null;
    omit?: Prisma.dsr_requestOmit<ExtArgs> | null;
    include?: Prisma.dsr_requestInclude<ExtArgs> | null;
};
