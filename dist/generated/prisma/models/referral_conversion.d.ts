import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type referral_conversionModel = runtime.Types.Result.DefaultSelection<Prisma.$referral_conversionPayload>;
export type AggregateReferral_conversion = {
    _count: Referral_conversionCountAggregateOutputType | null;
    _avg: Referral_conversionAvgAggregateOutputType | null;
    _sum: Referral_conversionSumAggregateOutputType | null;
    _min: Referral_conversionMinAggregateOutputType | null;
    _max: Referral_conversionMaxAggregateOutputType | null;
};
export type Referral_conversionAvgAggregateOutputType = {
    referrer_points: number | null;
    referred_points: number | null;
};
export type Referral_conversionSumAggregateOutputType = {
    referrer_points: number | null;
    referred_points: number | null;
};
export type Referral_conversionMinAggregateOutputType = {
    id: string | null;
    referral_code_id: string | null;
    referrer_id: string | null;
    referred_id: string | null;
    status: string | null;
    referrer_points: number | null;
    referred_points: number | null;
    converted_at: Date | null;
    created_at: Date | null;
};
export type Referral_conversionMaxAggregateOutputType = {
    id: string | null;
    referral_code_id: string | null;
    referrer_id: string | null;
    referred_id: string | null;
    status: string | null;
    referrer_points: number | null;
    referred_points: number | null;
    converted_at: Date | null;
    created_at: Date | null;
};
export type Referral_conversionCountAggregateOutputType = {
    id: number;
    referral_code_id: number;
    referrer_id: number;
    referred_id: number;
    status: number;
    referrer_points: number;
    referred_points: number;
    converted_at: number;
    created_at: number;
    _all: number;
};
export type Referral_conversionAvgAggregateInputType = {
    referrer_points?: true;
    referred_points?: true;
};
export type Referral_conversionSumAggregateInputType = {
    referrer_points?: true;
    referred_points?: true;
};
export type Referral_conversionMinAggregateInputType = {
    id?: true;
    referral_code_id?: true;
    referrer_id?: true;
    referred_id?: true;
    status?: true;
    referrer_points?: true;
    referred_points?: true;
    converted_at?: true;
    created_at?: true;
};
export type Referral_conversionMaxAggregateInputType = {
    id?: true;
    referral_code_id?: true;
    referrer_id?: true;
    referred_id?: true;
    status?: true;
    referrer_points?: true;
    referred_points?: true;
    converted_at?: true;
    created_at?: true;
};
export type Referral_conversionCountAggregateInputType = {
    id?: true;
    referral_code_id?: true;
    referrer_id?: true;
    referred_id?: true;
    status?: true;
    referrer_points?: true;
    referred_points?: true;
    converted_at?: true;
    created_at?: true;
    _all?: true;
};
export type Referral_conversionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.referral_conversionWhereInput;
    orderBy?: Prisma.referral_conversionOrderByWithRelationInput | Prisma.referral_conversionOrderByWithRelationInput[];
    cursor?: Prisma.referral_conversionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Referral_conversionCountAggregateInputType;
    _avg?: Referral_conversionAvgAggregateInputType;
    _sum?: Referral_conversionSumAggregateInputType;
    _min?: Referral_conversionMinAggregateInputType;
    _max?: Referral_conversionMaxAggregateInputType;
};
export type GetReferral_conversionAggregateType<T extends Referral_conversionAggregateArgs> = {
    [P in keyof T & keyof AggregateReferral_conversion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReferral_conversion[P]> : Prisma.GetScalarType<T[P], AggregateReferral_conversion[P]>;
};
export type referral_conversionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.referral_conversionWhereInput;
    orderBy?: Prisma.referral_conversionOrderByWithAggregationInput | Prisma.referral_conversionOrderByWithAggregationInput[];
    by: Prisma.Referral_conversionScalarFieldEnum[] | Prisma.Referral_conversionScalarFieldEnum;
    having?: Prisma.referral_conversionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Referral_conversionCountAggregateInputType | true;
    _avg?: Referral_conversionAvgAggregateInputType;
    _sum?: Referral_conversionSumAggregateInputType;
    _min?: Referral_conversionMinAggregateInputType;
    _max?: Referral_conversionMaxAggregateInputType;
};
export type Referral_conversionGroupByOutputType = {
    id: string;
    referral_code_id: string;
    referrer_id: string;
    referred_id: string;
    status: string;
    referrer_points: number;
    referred_points: number;
    converted_at: Date | null;
    created_at: Date;
    _count: Referral_conversionCountAggregateOutputType | null;
    _avg: Referral_conversionAvgAggregateOutputType | null;
    _sum: Referral_conversionSumAggregateOutputType | null;
    _min: Referral_conversionMinAggregateOutputType | null;
    _max: Referral_conversionMaxAggregateOutputType | null;
};
export type GetReferral_conversionGroupByPayload<T extends referral_conversionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Referral_conversionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Referral_conversionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Referral_conversionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Referral_conversionGroupByOutputType[P]>;
}>>;
export type referral_conversionWhereInput = {
    AND?: Prisma.referral_conversionWhereInput | Prisma.referral_conversionWhereInput[];
    OR?: Prisma.referral_conversionWhereInput[];
    NOT?: Prisma.referral_conversionWhereInput | Prisma.referral_conversionWhereInput[];
    id?: Prisma.UuidFilter<"referral_conversion"> | string;
    referral_code_id?: Prisma.UuidFilter<"referral_conversion"> | string;
    referrer_id?: Prisma.UuidFilter<"referral_conversion"> | string;
    referred_id?: Prisma.UuidFilter<"referral_conversion"> | string;
    status?: Prisma.StringFilter<"referral_conversion"> | string;
    referrer_points?: Prisma.IntFilter<"referral_conversion"> | number;
    referred_points?: Prisma.IntFilter<"referral_conversion"> | number;
    converted_at?: Prisma.DateTimeNullableFilter<"referral_conversion"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"referral_conversion"> | Date | string;
    referral_code?: Prisma.XOR<Prisma.Referral_codeScalarRelationFilter, Prisma.referral_codeWhereInput>;
    customer_referral_conversion_referred_idTocustomer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    customer_referral_conversion_referrer_idTocustomer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
};
export type referral_conversionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    referral_code_id?: Prisma.SortOrder;
    referrer_id?: Prisma.SortOrder;
    referred_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    referrer_points?: Prisma.SortOrder;
    referred_points?: Prisma.SortOrder;
    converted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    referral_code?: Prisma.referral_codeOrderByWithRelationInput;
    customer_referral_conversion_referred_idTocustomer?: Prisma.CustomerOrderByWithRelationInput;
    customer_referral_conversion_referrer_idTocustomer?: Prisma.CustomerOrderByWithRelationInput;
};
export type referral_conversionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    referral_code_id_referred_id?: Prisma.referral_conversionReferral_code_idReferred_idCompoundUniqueInput;
    AND?: Prisma.referral_conversionWhereInput | Prisma.referral_conversionWhereInput[];
    OR?: Prisma.referral_conversionWhereInput[];
    NOT?: Prisma.referral_conversionWhereInput | Prisma.referral_conversionWhereInput[];
    referral_code_id?: Prisma.UuidFilter<"referral_conversion"> | string;
    referrer_id?: Prisma.UuidFilter<"referral_conversion"> | string;
    referred_id?: Prisma.UuidFilter<"referral_conversion"> | string;
    status?: Prisma.StringFilter<"referral_conversion"> | string;
    referrer_points?: Prisma.IntFilter<"referral_conversion"> | number;
    referred_points?: Prisma.IntFilter<"referral_conversion"> | number;
    converted_at?: Prisma.DateTimeNullableFilter<"referral_conversion"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"referral_conversion"> | Date | string;
    referral_code?: Prisma.XOR<Prisma.Referral_codeScalarRelationFilter, Prisma.referral_codeWhereInput>;
    customer_referral_conversion_referred_idTocustomer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    customer_referral_conversion_referrer_idTocustomer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
}, "id" | "referral_code_id_referred_id">;
export type referral_conversionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    referral_code_id?: Prisma.SortOrder;
    referrer_id?: Prisma.SortOrder;
    referred_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    referrer_points?: Prisma.SortOrder;
    referred_points?: Prisma.SortOrder;
    converted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.referral_conversionCountOrderByAggregateInput;
    _avg?: Prisma.referral_conversionAvgOrderByAggregateInput;
    _max?: Prisma.referral_conversionMaxOrderByAggregateInput;
    _min?: Prisma.referral_conversionMinOrderByAggregateInput;
    _sum?: Prisma.referral_conversionSumOrderByAggregateInput;
};
export type referral_conversionScalarWhereWithAggregatesInput = {
    AND?: Prisma.referral_conversionScalarWhereWithAggregatesInput | Prisma.referral_conversionScalarWhereWithAggregatesInput[];
    OR?: Prisma.referral_conversionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.referral_conversionScalarWhereWithAggregatesInput | Prisma.referral_conversionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"referral_conversion"> | string;
    referral_code_id?: Prisma.UuidWithAggregatesFilter<"referral_conversion"> | string;
    referrer_id?: Prisma.UuidWithAggregatesFilter<"referral_conversion"> | string;
    referred_id?: Prisma.UuidWithAggregatesFilter<"referral_conversion"> | string;
    status?: Prisma.StringWithAggregatesFilter<"referral_conversion"> | string;
    referrer_points?: Prisma.IntWithAggregatesFilter<"referral_conversion"> | number;
    referred_points?: Prisma.IntWithAggregatesFilter<"referral_conversion"> | number;
    converted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"referral_conversion"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"referral_conversion"> | Date | string;
};
export type referral_conversionCreateInput = {
    id?: string;
    status?: string;
    referrer_points?: number;
    referred_points?: number;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    referral_code: Prisma.referral_codeCreateNestedOneWithoutReferral_conversionInput;
    customer_referral_conversion_referred_idTocustomer: Prisma.CustomerCreateNestedOneWithoutReferral_conversion_referral_conversion_referred_idTocustomerInput;
    customer_referral_conversion_referrer_idTocustomer: Prisma.CustomerCreateNestedOneWithoutReferral_conversion_referral_conversion_referrer_idTocustomerInput;
};
export type referral_conversionUncheckedCreateInput = {
    id?: string;
    referral_code_id: string;
    referrer_id: string;
    referred_id: string;
    status?: string;
    referrer_points?: number;
    referred_points?: number;
    converted_at?: Date | string | null;
    created_at?: Date | string;
};
export type referral_conversionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_points?: Prisma.IntFieldUpdateOperationsInput | number;
    referred_points?: Prisma.IntFieldUpdateOperationsInput | number;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referral_code?: Prisma.referral_codeUpdateOneRequiredWithoutReferral_conversionNestedInput;
    customer_referral_conversion_referred_idTocustomer?: Prisma.CustomerUpdateOneRequiredWithoutReferral_conversion_referral_conversion_referred_idTocustomerNestedInput;
    customer_referral_conversion_referrer_idTocustomer?: Prisma.CustomerUpdateOneRequiredWithoutReferral_conversion_referral_conversion_referrer_idTocustomerNestedInput;
};
export type referral_conversionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referral_code_id?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    referred_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_points?: Prisma.IntFieldUpdateOperationsInput | number;
    referred_points?: Prisma.IntFieldUpdateOperationsInput | number;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type referral_conversionCreateManyInput = {
    id?: string;
    referral_code_id: string;
    referrer_id: string;
    referred_id: string;
    status?: string;
    referrer_points?: number;
    referred_points?: number;
    converted_at?: Date | string | null;
    created_at?: Date | string;
};
export type referral_conversionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_points?: Prisma.IntFieldUpdateOperationsInput | number;
    referred_points?: Prisma.IntFieldUpdateOperationsInput | number;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type referral_conversionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referral_code_id?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    referred_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_points?: Prisma.IntFieldUpdateOperationsInput | number;
    referred_points?: Prisma.IntFieldUpdateOperationsInput | number;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Referral_conversionListRelationFilter = {
    every?: Prisma.referral_conversionWhereInput;
    some?: Prisma.referral_conversionWhereInput;
    none?: Prisma.referral_conversionWhereInput;
};
export type referral_conversionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type referral_conversionReferral_code_idReferred_idCompoundUniqueInput = {
    referral_code_id: string;
    referred_id: string;
};
export type referral_conversionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    referral_code_id?: Prisma.SortOrder;
    referrer_id?: Prisma.SortOrder;
    referred_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    referrer_points?: Prisma.SortOrder;
    referred_points?: Prisma.SortOrder;
    converted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type referral_conversionAvgOrderByAggregateInput = {
    referrer_points?: Prisma.SortOrder;
    referred_points?: Prisma.SortOrder;
};
export type referral_conversionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    referral_code_id?: Prisma.SortOrder;
    referrer_id?: Prisma.SortOrder;
    referred_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    referrer_points?: Prisma.SortOrder;
    referred_points?: Prisma.SortOrder;
    converted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type referral_conversionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    referral_code_id?: Prisma.SortOrder;
    referrer_id?: Prisma.SortOrder;
    referred_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    referrer_points?: Prisma.SortOrder;
    referred_points?: Prisma.SortOrder;
    converted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type referral_conversionSumOrderByAggregateInput = {
    referrer_points?: Prisma.SortOrder;
    referred_points?: Prisma.SortOrder;
};
export type referral_conversionCreateNestedManyWithoutCustomer_referral_conversion_referred_idTocustomerInput = {
    create?: Prisma.XOR<Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput, Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput> | Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput[] | Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput[];
    connectOrCreate?: Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referred_idTocustomerInput | Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referred_idTocustomerInput[];
    createMany?: Prisma.referral_conversionCreateManyCustomer_referral_conversion_referred_idTocustomerInputEnvelope;
    connect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
};
export type referral_conversionCreateNestedManyWithoutCustomer_referral_conversion_referrer_idTocustomerInput = {
    create?: Prisma.XOR<Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput, Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput> | Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput[] | Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput[];
    connectOrCreate?: Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referrer_idTocustomerInput | Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referrer_idTocustomerInput[];
    createMany?: Prisma.referral_conversionCreateManyCustomer_referral_conversion_referrer_idTocustomerInputEnvelope;
    connect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
};
export type referral_conversionUncheckedCreateNestedManyWithoutCustomer_referral_conversion_referred_idTocustomerInput = {
    create?: Prisma.XOR<Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput, Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput> | Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput[] | Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput[];
    connectOrCreate?: Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referred_idTocustomerInput | Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referred_idTocustomerInput[];
    createMany?: Prisma.referral_conversionCreateManyCustomer_referral_conversion_referred_idTocustomerInputEnvelope;
    connect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
};
export type referral_conversionUncheckedCreateNestedManyWithoutCustomer_referral_conversion_referrer_idTocustomerInput = {
    create?: Prisma.XOR<Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput, Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput> | Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput[] | Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput[];
    connectOrCreate?: Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referrer_idTocustomerInput | Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referrer_idTocustomerInput[];
    createMany?: Prisma.referral_conversionCreateManyCustomer_referral_conversion_referrer_idTocustomerInputEnvelope;
    connect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
};
export type referral_conversionUpdateManyWithoutCustomer_referral_conversion_referred_idTocustomerNestedInput = {
    create?: Prisma.XOR<Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput, Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput> | Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput[] | Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput[];
    connectOrCreate?: Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referred_idTocustomerInput | Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referred_idTocustomerInput[];
    upsert?: Prisma.referral_conversionUpsertWithWhereUniqueWithoutCustomer_referral_conversion_referred_idTocustomerInput | Prisma.referral_conversionUpsertWithWhereUniqueWithoutCustomer_referral_conversion_referred_idTocustomerInput[];
    createMany?: Prisma.referral_conversionCreateManyCustomer_referral_conversion_referred_idTocustomerInputEnvelope;
    set?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    disconnect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    delete?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    connect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    update?: Prisma.referral_conversionUpdateWithWhereUniqueWithoutCustomer_referral_conversion_referred_idTocustomerInput | Prisma.referral_conversionUpdateWithWhereUniqueWithoutCustomer_referral_conversion_referred_idTocustomerInput[];
    updateMany?: Prisma.referral_conversionUpdateManyWithWhereWithoutCustomer_referral_conversion_referred_idTocustomerInput | Prisma.referral_conversionUpdateManyWithWhereWithoutCustomer_referral_conversion_referred_idTocustomerInput[];
    deleteMany?: Prisma.referral_conversionScalarWhereInput | Prisma.referral_conversionScalarWhereInput[];
};
export type referral_conversionUpdateManyWithoutCustomer_referral_conversion_referrer_idTocustomerNestedInput = {
    create?: Prisma.XOR<Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput, Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput> | Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput[] | Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput[];
    connectOrCreate?: Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referrer_idTocustomerInput | Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referrer_idTocustomerInput[];
    upsert?: Prisma.referral_conversionUpsertWithWhereUniqueWithoutCustomer_referral_conversion_referrer_idTocustomerInput | Prisma.referral_conversionUpsertWithWhereUniqueWithoutCustomer_referral_conversion_referrer_idTocustomerInput[];
    createMany?: Prisma.referral_conversionCreateManyCustomer_referral_conversion_referrer_idTocustomerInputEnvelope;
    set?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    disconnect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    delete?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    connect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    update?: Prisma.referral_conversionUpdateWithWhereUniqueWithoutCustomer_referral_conversion_referrer_idTocustomerInput | Prisma.referral_conversionUpdateWithWhereUniqueWithoutCustomer_referral_conversion_referrer_idTocustomerInput[];
    updateMany?: Prisma.referral_conversionUpdateManyWithWhereWithoutCustomer_referral_conversion_referrer_idTocustomerInput | Prisma.referral_conversionUpdateManyWithWhereWithoutCustomer_referral_conversion_referrer_idTocustomerInput[];
    deleteMany?: Prisma.referral_conversionScalarWhereInput | Prisma.referral_conversionScalarWhereInput[];
};
export type referral_conversionUncheckedUpdateManyWithoutCustomer_referral_conversion_referred_idTocustomerNestedInput = {
    create?: Prisma.XOR<Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput, Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput> | Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput[] | Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput[];
    connectOrCreate?: Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referred_idTocustomerInput | Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referred_idTocustomerInput[];
    upsert?: Prisma.referral_conversionUpsertWithWhereUniqueWithoutCustomer_referral_conversion_referred_idTocustomerInput | Prisma.referral_conversionUpsertWithWhereUniqueWithoutCustomer_referral_conversion_referred_idTocustomerInput[];
    createMany?: Prisma.referral_conversionCreateManyCustomer_referral_conversion_referred_idTocustomerInputEnvelope;
    set?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    disconnect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    delete?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    connect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    update?: Prisma.referral_conversionUpdateWithWhereUniqueWithoutCustomer_referral_conversion_referred_idTocustomerInput | Prisma.referral_conversionUpdateWithWhereUniqueWithoutCustomer_referral_conversion_referred_idTocustomerInput[];
    updateMany?: Prisma.referral_conversionUpdateManyWithWhereWithoutCustomer_referral_conversion_referred_idTocustomerInput | Prisma.referral_conversionUpdateManyWithWhereWithoutCustomer_referral_conversion_referred_idTocustomerInput[];
    deleteMany?: Prisma.referral_conversionScalarWhereInput | Prisma.referral_conversionScalarWhereInput[];
};
export type referral_conversionUncheckedUpdateManyWithoutCustomer_referral_conversion_referrer_idTocustomerNestedInput = {
    create?: Prisma.XOR<Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput, Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput> | Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput[] | Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput[];
    connectOrCreate?: Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referrer_idTocustomerInput | Prisma.referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referrer_idTocustomerInput[];
    upsert?: Prisma.referral_conversionUpsertWithWhereUniqueWithoutCustomer_referral_conversion_referrer_idTocustomerInput | Prisma.referral_conversionUpsertWithWhereUniqueWithoutCustomer_referral_conversion_referrer_idTocustomerInput[];
    createMany?: Prisma.referral_conversionCreateManyCustomer_referral_conversion_referrer_idTocustomerInputEnvelope;
    set?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    disconnect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    delete?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    connect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    update?: Prisma.referral_conversionUpdateWithWhereUniqueWithoutCustomer_referral_conversion_referrer_idTocustomerInput | Prisma.referral_conversionUpdateWithWhereUniqueWithoutCustomer_referral_conversion_referrer_idTocustomerInput[];
    updateMany?: Prisma.referral_conversionUpdateManyWithWhereWithoutCustomer_referral_conversion_referrer_idTocustomerInput | Prisma.referral_conversionUpdateManyWithWhereWithoutCustomer_referral_conversion_referrer_idTocustomerInput[];
    deleteMany?: Prisma.referral_conversionScalarWhereInput | Prisma.referral_conversionScalarWhereInput[];
};
export type referral_conversionCreateNestedManyWithoutReferral_codeInput = {
    create?: Prisma.XOR<Prisma.referral_conversionCreateWithoutReferral_codeInput, Prisma.referral_conversionUncheckedCreateWithoutReferral_codeInput> | Prisma.referral_conversionCreateWithoutReferral_codeInput[] | Prisma.referral_conversionUncheckedCreateWithoutReferral_codeInput[];
    connectOrCreate?: Prisma.referral_conversionCreateOrConnectWithoutReferral_codeInput | Prisma.referral_conversionCreateOrConnectWithoutReferral_codeInput[];
    createMany?: Prisma.referral_conversionCreateManyReferral_codeInputEnvelope;
    connect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
};
export type referral_conversionUncheckedCreateNestedManyWithoutReferral_codeInput = {
    create?: Prisma.XOR<Prisma.referral_conversionCreateWithoutReferral_codeInput, Prisma.referral_conversionUncheckedCreateWithoutReferral_codeInput> | Prisma.referral_conversionCreateWithoutReferral_codeInput[] | Prisma.referral_conversionUncheckedCreateWithoutReferral_codeInput[];
    connectOrCreate?: Prisma.referral_conversionCreateOrConnectWithoutReferral_codeInput | Prisma.referral_conversionCreateOrConnectWithoutReferral_codeInput[];
    createMany?: Prisma.referral_conversionCreateManyReferral_codeInputEnvelope;
    connect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
};
export type referral_conversionUpdateManyWithoutReferral_codeNestedInput = {
    create?: Prisma.XOR<Prisma.referral_conversionCreateWithoutReferral_codeInput, Prisma.referral_conversionUncheckedCreateWithoutReferral_codeInput> | Prisma.referral_conversionCreateWithoutReferral_codeInput[] | Prisma.referral_conversionUncheckedCreateWithoutReferral_codeInput[];
    connectOrCreate?: Prisma.referral_conversionCreateOrConnectWithoutReferral_codeInput | Prisma.referral_conversionCreateOrConnectWithoutReferral_codeInput[];
    upsert?: Prisma.referral_conversionUpsertWithWhereUniqueWithoutReferral_codeInput | Prisma.referral_conversionUpsertWithWhereUniqueWithoutReferral_codeInput[];
    createMany?: Prisma.referral_conversionCreateManyReferral_codeInputEnvelope;
    set?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    disconnect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    delete?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    connect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    update?: Prisma.referral_conversionUpdateWithWhereUniqueWithoutReferral_codeInput | Prisma.referral_conversionUpdateWithWhereUniqueWithoutReferral_codeInput[];
    updateMany?: Prisma.referral_conversionUpdateManyWithWhereWithoutReferral_codeInput | Prisma.referral_conversionUpdateManyWithWhereWithoutReferral_codeInput[];
    deleteMany?: Prisma.referral_conversionScalarWhereInput | Prisma.referral_conversionScalarWhereInput[];
};
export type referral_conversionUncheckedUpdateManyWithoutReferral_codeNestedInput = {
    create?: Prisma.XOR<Prisma.referral_conversionCreateWithoutReferral_codeInput, Prisma.referral_conversionUncheckedCreateWithoutReferral_codeInput> | Prisma.referral_conversionCreateWithoutReferral_codeInput[] | Prisma.referral_conversionUncheckedCreateWithoutReferral_codeInput[];
    connectOrCreate?: Prisma.referral_conversionCreateOrConnectWithoutReferral_codeInput | Prisma.referral_conversionCreateOrConnectWithoutReferral_codeInput[];
    upsert?: Prisma.referral_conversionUpsertWithWhereUniqueWithoutReferral_codeInput | Prisma.referral_conversionUpsertWithWhereUniqueWithoutReferral_codeInput[];
    createMany?: Prisma.referral_conversionCreateManyReferral_codeInputEnvelope;
    set?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    disconnect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    delete?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    connect?: Prisma.referral_conversionWhereUniqueInput | Prisma.referral_conversionWhereUniqueInput[];
    update?: Prisma.referral_conversionUpdateWithWhereUniqueWithoutReferral_codeInput | Prisma.referral_conversionUpdateWithWhereUniqueWithoutReferral_codeInput[];
    updateMany?: Prisma.referral_conversionUpdateManyWithWhereWithoutReferral_codeInput | Prisma.referral_conversionUpdateManyWithWhereWithoutReferral_codeInput[];
    deleteMany?: Prisma.referral_conversionScalarWhereInput | Prisma.referral_conversionScalarWhereInput[];
};
export type referral_conversionCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput = {
    id?: string;
    status?: string;
    referrer_points?: number;
    referred_points?: number;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    referral_code: Prisma.referral_codeCreateNestedOneWithoutReferral_conversionInput;
    customer_referral_conversion_referrer_idTocustomer: Prisma.CustomerCreateNestedOneWithoutReferral_conversion_referral_conversion_referrer_idTocustomerInput;
};
export type referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput = {
    id?: string;
    referral_code_id: string;
    referrer_id: string;
    status?: string;
    referrer_points?: number;
    referred_points?: number;
    converted_at?: Date | string | null;
    created_at?: Date | string;
};
export type referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referred_idTocustomerInput = {
    where: Prisma.referral_conversionWhereUniqueInput;
    create: Prisma.XOR<Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput, Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput>;
};
export type referral_conversionCreateManyCustomer_referral_conversion_referred_idTocustomerInputEnvelope = {
    data: Prisma.referral_conversionCreateManyCustomer_referral_conversion_referred_idTocustomerInput | Prisma.referral_conversionCreateManyCustomer_referral_conversion_referred_idTocustomerInput[];
    skipDuplicates?: boolean;
};
export type referral_conversionCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput = {
    id?: string;
    status?: string;
    referrer_points?: number;
    referred_points?: number;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    referral_code: Prisma.referral_codeCreateNestedOneWithoutReferral_conversionInput;
    customer_referral_conversion_referred_idTocustomer: Prisma.CustomerCreateNestedOneWithoutReferral_conversion_referral_conversion_referred_idTocustomerInput;
};
export type referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput = {
    id?: string;
    referral_code_id: string;
    referred_id: string;
    status?: string;
    referrer_points?: number;
    referred_points?: number;
    converted_at?: Date | string | null;
    created_at?: Date | string;
};
export type referral_conversionCreateOrConnectWithoutCustomer_referral_conversion_referrer_idTocustomerInput = {
    where: Prisma.referral_conversionWhereUniqueInput;
    create: Prisma.XOR<Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput, Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput>;
};
export type referral_conversionCreateManyCustomer_referral_conversion_referrer_idTocustomerInputEnvelope = {
    data: Prisma.referral_conversionCreateManyCustomer_referral_conversion_referrer_idTocustomerInput | Prisma.referral_conversionCreateManyCustomer_referral_conversion_referrer_idTocustomerInput[];
    skipDuplicates?: boolean;
};
export type referral_conversionUpsertWithWhereUniqueWithoutCustomer_referral_conversion_referred_idTocustomerInput = {
    where: Prisma.referral_conversionWhereUniqueInput;
    update: Prisma.XOR<Prisma.referral_conversionUpdateWithoutCustomer_referral_conversion_referred_idTocustomerInput, Prisma.referral_conversionUncheckedUpdateWithoutCustomer_referral_conversion_referred_idTocustomerInput>;
    create: Prisma.XOR<Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput, Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referred_idTocustomerInput>;
};
export type referral_conversionUpdateWithWhereUniqueWithoutCustomer_referral_conversion_referred_idTocustomerInput = {
    where: Prisma.referral_conversionWhereUniqueInput;
    data: Prisma.XOR<Prisma.referral_conversionUpdateWithoutCustomer_referral_conversion_referred_idTocustomerInput, Prisma.referral_conversionUncheckedUpdateWithoutCustomer_referral_conversion_referred_idTocustomerInput>;
};
export type referral_conversionUpdateManyWithWhereWithoutCustomer_referral_conversion_referred_idTocustomerInput = {
    where: Prisma.referral_conversionScalarWhereInput;
    data: Prisma.XOR<Prisma.referral_conversionUpdateManyMutationInput, Prisma.referral_conversionUncheckedUpdateManyWithoutCustomer_referral_conversion_referred_idTocustomerInput>;
};
export type referral_conversionScalarWhereInput = {
    AND?: Prisma.referral_conversionScalarWhereInput | Prisma.referral_conversionScalarWhereInput[];
    OR?: Prisma.referral_conversionScalarWhereInput[];
    NOT?: Prisma.referral_conversionScalarWhereInput | Prisma.referral_conversionScalarWhereInput[];
    id?: Prisma.UuidFilter<"referral_conversion"> | string;
    referral_code_id?: Prisma.UuidFilter<"referral_conversion"> | string;
    referrer_id?: Prisma.UuidFilter<"referral_conversion"> | string;
    referred_id?: Prisma.UuidFilter<"referral_conversion"> | string;
    status?: Prisma.StringFilter<"referral_conversion"> | string;
    referrer_points?: Prisma.IntFilter<"referral_conversion"> | number;
    referred_points?: Prisma.IntFilter<"referral_conversion"> | number;
    converted_at?: Prisma.DateTimeNullableFilter<"referral_conversion"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"referral_conversion"> | Date | string;
};
export type referral_conversionUpsertWithWhereUniqueWithoutCustomer_referral_conversion_referrer_idTocustomerInput = {
    where: Prisma.referral_conversionWhereUniqueInput;
    update: Prisma.XOR<Prisma.referral_conversionUpdateWithoutCustomer_referral_conversion_referrer_idTocustomerInput, Prisma.referral_conversionUncheckedUpdateWithoutCustomer_referral_conversion_referrer_idTocustomerInput>;
    create: Prisma.XOR<Prisma.referral_conversionCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput, Prisma.referral_conversionUncheckedCreateWithoutCustomer_referral_conversion_referrer_idTocustomerInput>;
};
export type referral_conversionUpdateWithWhereUniqueWithoutCustomer_referral_conversion_referrer_idTocustomerInput = {
    where: Prisma.referral_conversionWhereUniqueInput;
    data: Prisma.XOR<Prisma.referral_conversionUpdateWithoutCustomer_referral_conversion_referrer_idTocustomerInput, Prisma.referral_conversionUncheckedUpdateWithoutCustomer_referral_conversion_referrer_idTocustomerInput>;
};
export type referral_conversionUpdateManyWithWhereWithoutCustomer_referral_conversion_referrer_idTocustomerInput = {
    where: Prisma.referral_conversionScalarWhereInput;
    data: Prisma.XOR<Prisma.referral_conversionUpdateManyMutationInput, Prisma.referral_conversionUncheckedUpdateManyWithoutCustomer_referral_conversion_referrer_idTocustomerInput>;
};
export type referral_conversionCreateWithoutReferral_codeInput = {
    id?: string;
    status?: string;
    referrer_points?: number;
    referred_points?: number;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    customer_referral_conversion_referred_idTocustomer: Prisma.CustomerCreateNestedOneWithoutReferral_conversion_referral_conversion_referred_idTocustomerInput;
    customer_referral_conversion_referrer_idTocustomer: Prisma.CustomerCreateNestedOneWithoutReferral_conversion_referral_conversion_referrer_idTocustomerInput;
};
export type referral_conversionUncheckedCreateWithoutReferral_codeInput = {
    id?: string;
    referrer_id: string;
    referred_id: string;
    status?: string;
    referrer_points?: number;
    referred_points?: number;
    converted_at?: Date | string | null;
    created_at?: Date | string;
};
export type referral_conversionCreateOrConnectWithoutReferral_codeInput = {
    where: Prisma.referral_conversionWhereUniqueInput;
    create: Prisma.XOR<Prisma.referral_conversionCreateWithoutReferral_codeInput, Prisma.referral_conversionUncheckedCreateWithoutReferral_codeInput>;
};
export type referral_conversionCreateManyReferral_codeInputEnvelope = {
    data: Prisma.referral_conversionCreateManyReferral_codeInput | Prisma.referral_conversionCreateManyReferral_codeInput[];
    skipDuplicates?: boolean;
};
export type referral_conversionUpsertWithWhereUniqueWithoutReferral_codeInput = {
    where: Prisma.referral_conversionWhereUniqueInput;
    update: Prisma.XOR<Prisma.referral_conversionUpdateWithoutReferral_codeInput, Prisma.referral_conversionUncheckedUpdateWithoutReferral_codeInput>;
    create: Prisma.XOR<Prisma.referral_conversionCreateWithoutReferral_codeInput, Prisma.referral_conversionUncheckedCreateWithoutReferral_codeInput>;
};
export type referral_conversionUpdateWithWhereUniqueWithoutReferral_codeInput = {
    where: Prisma.referral_conversionWhereUniqueInput;
    data: Prisma.XOR<Prisma.referral_conversionUpdateWithoutReferral_codeInput, Prisma.referral_conversionUncheckedUpdateWithoutReferral_codeInput>;
};
export type referral_conversionUpdateManyWithWhereWithoutReferral_codeInput = {
    where: Prisma.referral_conversionScalarWhereInput;
    data: Prisma.XOR<Prisma.referral_conversionUpdateManyMutationInput, Prisma.referral_conversionUncheckedUpdateManyWithoutReferral_codeInput>;
};
export type referral_conversionCreateManyCustomer_referral_conversion_referred_idTocustomerInput = {
    id?: string;
    referral_code_id: string;
    referrer_id: string;
    status?: string;
    referrer_points?: number;
    referred_points?: number;
    converted_at?: Date | string | null;
    created_at?: Date | string;
};
export type referral_conversionCreateManyCustomer_referral_conversion_referrer_idTocustomerInput = {
    id?: string;
    referral_code_id: string;
    referred_id: string;
    status?: string;
    referrer_points?: number;
    referred_points?: number;
    converted_at?: Date | string | null;
    created_at?: Date | string;
};
export type referral_conversionUpdateWithoutCustomer_referral_conversion_referred_idTocustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_points?: Prisma.IntFieldUpdateOperationsInput | number;
    referred_points?: Prisma.IntFieldUpdateOperationsInput | number;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referral_code?: Prisma.referral_codeUpdateOneRequiredWithoutReferral_conversionNestedInput;
    customer_referral_conversion_referrer_idTocustomer?: Prisma.CustomerUpdateOneRequiredWithoutReferral_conversion_referral_conversion_referrer_idTocustomerNestedInput;
};
export type referral_conversionUncheckedUpdateWithoutCustomer_referral_conversion_referred_idTocustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referral_code_id?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_points?: Prisma.IntFieldUpdateOperationsInput | number;
    referred_points?: Prisma.IntFieldUpdateOperationsInput | number;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type referral_conversionUncheckedUpdateManyWithoutCustomer_referral_conversion_referred_idTocustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referral_code_id?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_points?: Prisma.IntFieldUpdateOperationsInput | number;
    referred_points?: Prisma.IntFieldUpdateOperationsInput | number;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type referral_conversionUpdateWithoutCustomer_referral_conversion_referrer_idTocustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_points?: Prisma.IntFieldUpdateOperationsInput | number;
    referred_points?: Prisma.IntFieldUpdateOperationsInput | number;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referral_code?: Prisma.referral_codeUpdateOneRequiredWithoutReferral_conversionNestedInput;
    customer_referral_conversion_referred_idTocustomer?: Prisma.CustomerUpdateOneRequiredWithoutReferral_conversion_referral_conversion_referred_idTocustomerNestedInput;
};
export type referral_conversionUncheckedUpdateWithoutCustomer_referral_conversion_referrer_idTocustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referral_code_id?: Prisma.StringFieldUpdateOperationsInput | string;
    referred_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_points?: Prisma.IntFieldUpdateOperationsInput | number;
    referred_points?: Prisma.IntFieldUpdateOperationsInput | number;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type referral_conversionUncheckedUpdateManyWithoutCustomer_referral_conversion_referrer_idTocustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referral_code_id?: Prisma.StringFieldUpdateOperationsInput | string;
    referred_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_points?: Prisma.IntFieldUpdateOperationsInput | number;
    referred_points?: Prisma.IntFieldUpdateOperationsInput | number;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type referral_conversionCreateManyReferral_codeInput = {
    id?: string;
    referrer_id: string;
    referred_id: string;
    status?: string;
    referrer_points?: number;
    referred_points?: number;
    converted_at?: Date | string | null;
    created_at?: Date | string;
};
export type referral_conversionUpdateWithoutReferral_codeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_points?: Prisma.IntFieldUpdateOperationsInput | number;
    referred_points?: Prisma.IntFieldUpdateOperationsInput | number;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer_referral_conversion_referred_idTocustomer?: Prisma.CustomerUpdateOneRequiredWithoutReferral_conversion_referral_conversion_referred_idTocustomerNestedInput;
    customer_referral_conversion_referrer_idTocustomer?: Prisma.CustomerUpdateOneRequiredWithoutReferral_conversion_referral_conversion_referrer_idTocustomerNestedInput;
};
export type referral_conversionUncheckedUpdateWithoutReferral_codeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    referred_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_points?: Prisma.IntFieldUpdateOperationsInput | number;
    referred_points?: Prisma.IntFieldUpdateOperationsInput | number;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type referral_conversionUncheckedUpdateManyWithoutReferral_codeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    referred_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer_points?: Prisma.IntFieldUpdateOperationsInput | number;
    referred_points?: Prisma.IntFieldUpdateOperationsInput | number;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type referral_conversionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    referral_code_id?: boolean;
    referrer_id?: boolean;
    referred_id?: boolean;
    status?: boolean;
    referrer_points?: boolean;
    referred_points?: boolean;
    converted_at?: boolean;
    created_at?: boolean;
    referral_code?: boolean | Prisma.referral_codeDefaultArgs<ExtArgs>;
    customer_referral_conversion_referred_idTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    customer_referral_conversion_referrer_idTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["referral_conversion"]>;
export type referral_conversionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    referral_code_id?: boolean;
    referrer_id?: boolean;
    referred_id?: boolean;
    status?: boolean;
    referrer_points?: boolean;
    referred_points?: boolean;
    converted_at?: boolean;
    created_at?: boolean;
    referral_code?: boolean | Prisma.referral_codeDefaultArgs<ExtArgs>;
    customer_referral_conversion_referred_idTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    customer_referral_conversion_referrer_idTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["referral_conversion"]>;
export type referral_conversionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    referral_code_id?: boolean;
    referrer_id?: boolean;
    referred_id?: boolean;
    status?: boolean;
    referrer_points?: boolean;
    referred_points?: boolean;
    converted_at?: boolean;
    created_at?: boolean;
    referral_code?: boolean | Prisma.referral_codeDefaultArgs<ExtArgs>;
    customer_referral_conversion_referred_idTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    customer_referral_conversion_referrer_idTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["referral_conversion"]>;
export type referral_conversionSelectScalar = {
    id?: boolean;
    referral_code_id?: boolean;
    referrer_id?: boolean;
    referred_id?: boolean;
    status?: boolean;
    referrer_points?: boolean;
    referred_points?: boolean;
    converted_at?: boolean;
    created_at?: boolean;
};
export type referral_conversionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "referral_code_id" | "referrer_id" | "referred_id" | "status" | "referrer_points" | "referred_points" | "converted_at" | "created_at", ExtArgs["result"]["referral_conversion"]>;
export type referral_conversionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    referral_code?: boolean | Prisma.referral_codeDefaultArgs<ExtArgs>;
    customer_referral_conversion_referred_idTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    customer_referral_conversion_referrer_idTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type referral_conversionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    referral_code?: boolean | Prisma.referral_codeDefaultArgs<ExtArgs>;
    customer_referral_conversion_referred_idTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    customer_referral_conversion_referrer_idTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type referral_conversionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    referral_code?: boolean | Prisma.referral_codeDefaultArgs<ExtArgs>;
    customer_referral_conversion_referred_idTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    customer_referral_conversion_referrer_idTocustomer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $referral_conversionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "referral_conversion";
    objects: {
        referral_code: Prisma.$referral_codePayload<ExtArgs>;
        customer_referral_conversion_referred_idTocustomer: Prisma.$CustomerPayload<ExtArgs>;
        customer_referral_conversion_referrer_idTocustomer: Prisma.$CustomerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        referral_code_id: string;
        referrer_id: string;
        referred_id: string;
        status: string;
        referrer_points: number;
        referred_points: number;
        converted_at: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["referral_conversion"]>;
    composites: {};
};
export type referral_conversionGetPayload<S extends boolean | null | undefined | referral_conversionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$referral_conversionPayload, S>;
export type referral_conversionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<referral_conversionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Referral_conversionCountAggregateInputType | true;
};
export interface referral_conversionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['referral_conversion'];
        meta: {
            name: 'referral_conversion';
        };
    };
    findUnique<T extends referral_conversionFindUniqueArgs>(args: Prisma.SelectSubset<T, referral_conversionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__referral_conversionClient<runtime.Types.Result.GetResult<Prisma.$referral_conversionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends referral_conversionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, referral_conversionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__referral_conversionClient<runtime.Types.Result.GetResult<Prisma.$referral_conversionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends referral_conversionFindFirstArgs>(args?: Prisma.SelectSubset<T, referral_conversionFindFirstArgs<ExtArgs>>): Prisma.Prisma__referral_conversionClient<runtime.Types.Result.GetResult<Prisma.$referral_conversionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends referral_conversionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, referral_conversionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__referral_conversionClient<runtime.Types.Result.GetResult<Prisma.$referral_conversionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends referral_conversionFindManyArgs>(args?: Prisma.SelectSubset<T, referral_conversionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$referral_conversionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends referral_conversionCreateArgs>(args: Prisma.SelectSubset<T, referral_conversionCreateArgs<ExtArgs>>): Prisma.Prisma__referral_conversionClient<runtime.Types.Result.GetResult<Prisma.$referral_conversionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends referral_conversionCreateManyArgs>(args?: Prisma.SelectSubset<T, referral_conversionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends referral_conversionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, referral_conversionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$referral_conversionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends referral_conversionDeleteArgs>(args: Prisma.SelectSubset<T, referral_conversionDeleteArgs<ExtArgs>>): Prisma.Prisma__referral_conversionClient<runtime.Types.Result.GetResult<Prisma.$referral_conversionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends referral_conversionUpdateArgs>(args: Prisma.SelectSubset<T, referral_conversionUpdateArgs<ExtArgs>>): Prisma.Prisma__referral_conversionClient<runtime.Types.Result.GetResult<Prisma.$referral_conversionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends referral_conversionDeleteManyArgs>(args?: Prisma.SelectSubset<T, referral_conversionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends referral_conversionUpdateManyArgs>(args: Prisma.SelectSubset<T, referral_conversionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends referral_conversionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, referral_conversionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$referral_conversionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends referral_conversionUpsertArgs>(args: Prisma.SelectSubset<T, referral_conversionUpsertArgs<ExtArgs>>): Prisma.Prisma__referral_conversionClient<runtime.Types.Result.GetResult<Prisma.$referral_conversionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends referral_conversionCountArgs>(args?: Prisma.Subset<T, referral_conversionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Referral_conversionCountAggregateOutputType> : number>;
    aggregate<T extends Referral_conversionAggregateArgs>(args: Prisma.Subset<T, Referral_conversionAggregateArgs>): Prisma.PrismaPromise<GetReferral_conversionAggregateType<T>>;
    groupBy<T extends referral_conversionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: referral_conversionGroupByArgs['orderBy'];
    } : {
        orderBy?: referral_conversionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, referral_conversionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferral_conversionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: referral_conversionFieldRefs;
}
export interface Prisma__referral_conversionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    referral_code<T extends Prisma.referral_codeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.referral_codeDefaultArgs<ExtArgs>>): Prisma.Prisma__referral_codeClient<runtime.Types.Result.GetResult<Prisma.$referral_codePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer_referral_conversion_referred_idTocustomer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer_referral_conversion_referrer_idTocustomer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface referral_conversionFieldRefs {
    readonly id: Prisma.FieldRef<"referral_conversion", 'String'>;
    readonly referral_code_id: Prisma.FieldRef<"referral_conversion", 'String'>;
    readonly referrer_id: Prisma.FieldRef<"referral_conversion", 'String'>;
    readonly referred_id: Prisma.FieldRef<"referral_conversion", 'String'>;
    readonly status: Prisma.FieldRef<"referral_conversion", 'String'>;
    readonly referrer_points: Prisma.FieldRef<"referral_conversion", 'Int'>;
    readonly referred_points: Prisma.FieldRef<"referral_conversion", 'Int'>;
    readonly converted_at: Prisma.FieldRef<"referral_conversion", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"referral_conversion", 'DateTime'>;
}
export type referral_conversionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_conversionSelect<ExtArgs> | null;
    omit?: Prisma.referral_conversionOmit<ExtArgs> | null;
    include?: Prisma.referral_conversionInclude<ExtArgs> | null;
    where: Prisma.referral_conversionWhereUniqueInput;
};
export type referral_conversionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_conversionSelect<ExtArgs> | null;
    omit?: Prisma.referral_conversionOmit<ExtArgs> | null;
    include?: Prisma.referral_conversionInclude<ExtArgs> | null;
    where: Prisma.referral_conversionWhereUniqueInput;
};
export type referral_conversionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_conversionSelect<ExtArgs> | null;
    omit?: Prisma.referral_conversionOmit<ExtArgs> | null;
    include?: Prisma.referral_conversionInclude<ExtArgs> | null;
    where?: Prisma.referral_conversionWhereInput;
    orderBy?: Prisma.referral_conversionOrderByWithRelationInput | Prisma.referral_conversionOrderByWithRelationInput[];
    cursor?: Prisma.referral_conversionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Referral_conversionScalarFieldEnum | Prisma.Referral_conversionScalarFieldEnum[];
};
export type referral_conversionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_conversionSelect<ExtArgs> | null;
    omit?: Prisma.referral_conversionOmit<ExtArgs> | null;
    include?: Prisma.referral_conversionInclude<ExtArgs> | null;
    where?: Prisma.referral_conversionWhereInput;
    orderBy?: Prisma.referral_conversionOrderByWithRelationInput | Prisma.referral_conversionOrderByWithRelationInput[];
    cursor?: Prisma.referral_conversionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Referral_conversionScalarFieldEnum | Prisma.Referral_conversionScalarFieldEnum[];
};
export type referral_conversionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_conversionSelect<ExtArgs> | null;
    omit?: Prisma.referral_conversionOmit<ExtArgs> | null;
    include?: Prisma.referral_conversionInclude<ExtArgs> | null;
    where?: Prisma.referral_conversionWhereInput;
    orderBy?: Prisma.referral_conversionOrderByWithRelationInput | Prisma.referral_conversionOrderByWithRelationInput[];
    cursor?: Prisma.referral_conversionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Referral_conversionScalarFieldEnum | Prisma.Referral_conversionScalarFieldEnum[];
};
export type referral_conversionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_conversionSelect<ExtArgs> | null;
    omit?: Prisma.referral_conversionOmit<ExtArgs> | null;
    include?: Prisma.referral_conversionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.referral_conversionCreateInput, Prisma.referral_conversionUncheckedCreateInput>;
};
export type referral_conversionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.referral_conversionCreateManyInput | Prisma.referral_conversionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type referral_conversionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_conversionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.referral_conversionOmit<ExtArgs> | null;
    data: Prisma.referral_conversionCreateManyInput | Prisma.referral_conversionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.referral_conversionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type referral_conversionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_conversionSelect<ExtArgs> | null;
    omit?: Prisma.referral_conversionOmit<ExtArgs> | null;
    include?: Prisma.referral_conversionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.referral_conversionUpdateInput, Prisma.referral_conversionUncheckedUpdateInput>;
    where: Prisma.referral_conversionWhereUniqueInput;
};
export type referral_conversionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.referral_conversionUpdateManyMutationInput, Prisma.referral_conversionUncheckedUpdateManyInput>;
    where?: Prisma.referral_conversionWhereInput;
    limit?: number;
};
export type referral_conversionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_conversionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.referral_conversionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.referral_conversionUpdateManyMutationInput, Prisma.referral_conversionUncheckedUpdateManyInput>;
    where?: Prisma.referral_conversionWhereInput;
    limit?: number;
    include?: Prisma.referral_conversionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type referral_conversionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_conversionSelect<ExtArgs> | null;
    omit?: Prisma.referral_conversionOmit<ExtArgs> | null;
    include?: Prisma.referral_conversionInclude<ExtArgs> | null;
    where: Prisma.referral_conversionWhereUniqueInput;
    create: Prisma.XOR<Prisma.referral_conversionCreateInput, Prisma.referral_conversionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.referral_conversionUpdateInput, Prisma.referral_conversionUncheckedUpdateInput>;
};
export type referral_conversionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_conversionSelect<ExtArgs> | null;
    omit?: Prisma.referral_conversionOmit<ExtArgs> | null;
    include?: Prisma.referral_conversionInclude<ExtArgs> | null;
    where: Prisma.referral_conversionWhereUniqueInput;
};
export type referral_conversionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.referral_conversionWhereInput;
    limit?: number;
};
export type referral_conversionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_conversionSelect<ExtArgs> | null;
    omit?: Prisma.referral_conversionOmit<ExtArgs> | null;
    include?: Prisma.referral_conversionInclude<ExtArgs> | null;
};
