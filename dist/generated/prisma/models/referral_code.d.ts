import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type referral_codeModel = runtime.Types.Result.DefaultSelection<Prisma.$referral_codePayload>;
export type AggregateReferral_code = {
    _count: Referral_codeCountAggregateOutputType | null;
    _avg: Referral_codeAvgAggregateOutputType | null;
    _sum: Referral_codeSumAggregateOutputType | null;
    _min: Referral_codeMinAggregateOutputType | null;
    _max: Referral_codeMaxAggregateOutputType | null;
};
export type Referral_codeAvgAggregateOutputType = {
    max_uses: number | null;
    current_uses: number | null;
};
export type Referral_codeSumAggregateOutputType = {
    max_uses: number | null;
    current_uses: number | null;
};
export type Referral_codeMinAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    code: string | null;
    max_uses: number | null;
    current_uses: number | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Referral_codeMaxAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    code: string | null;
    max_uses: number | null;
    current_uses: number | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type Referral_codeCountAggregateOutputType = {
    id: number;
    customer_id: number;
    code: number;
    max_uses: number;
    current_uses: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type Referral_codeAvgAggregateInputType = {
    max_uses?: true;
    current_uses?: true;
};
export type Referral_codeSumAggregateInputType = {
    max_uses?: true;
    current_uses?: true;
};
export type Referral_codeMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    code?: true;
    max_uses?: true;
    current_uses?: true;
    is_active?: true;
    created_at?: true;
};
export type Referral_codeMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    code?: true;
    max_uses?: true;
    current_uses?: true;
    is_active?: true;
    created_at?: true;
};
export type Referral_codeCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    code?: true;
    max_uses?: true;
    current_uses?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type Referral_codeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.referral_codeWhereInput;
    orderBy?: Prisma.referral_codeOrderByWithRelationInput | Prisma.referral_codeOrderByWithRelationInput[];
    cursor?: Prisma.referral_codeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Referral_codeCountAggregateInputType;
    _avg?: Referral_codeAvgAggregateInputType;
    _sum?: Referral_codeSumAggregateInputType;
    _min?: Referral_codeMinAggregateInputType;
    _max?: Referral_codeMaxAggregateInputType;
};
export type GetReferral_codeAggregateType<T extends Referral_codeAggregateArgs> = {
    [P in keyof T & keyof AggregateReferral_code]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReferral_code[P]> : Prisma.GetScalarType<T[P], AggregateReferral_code[P]>;
};
export type referral_codeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.referral_codeWhereInput;
    orderBy?: Prisma.referral_codeOrderByWithAggregationInput | Prisma.referral_codeOrderByWithAggregationInput[];
    by: Prisma.Referral_codeScalarFieldEnum[] | Prisma.Referral_codeScalarFieldEnum;
    having?: Prisma.referral_codeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Referral_codeCountAggregateInputType | true;
    _avg?: Referral_codeAvgAggregateInputType;
    _sum?: Referral_codeSumAggregateInputType;
    _min?: Referral_codeMinAggregateInputType;
    _max?: Referral_codeMaxAggregateInputType;
};
export type Referral_codeGroupByOutputType = {
    id: string;
    customer_id: string;
    code: string;
    max_uses: number | null;
    current_uses: number;
    is_active: boolean;
    created_at: Date;
    _count: Referral_codeCountAggregateOutputType | null;
    _avg: Referral_codeAvgAggregateOutputType | null;
    _sum: Referral_codeSumAggregateOutputType | null;
    _min: Referral_codeMinAggregateOutputType | null;
    _max: Referral_codeMaxAggregateOutputType | null;
};
export type GetReferral_codeGroupByPayload<T extends referral_codeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Referral_codeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Referral_codeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Referral_codeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Referral_codeGroupByOutputType[P]>;
}>>;
export type referral_codeWhereInput = {
    AND?: Prisma.referral_codeWhereInput | Prisma.referral_codeWhereInput[];
    OR?: Prisma.referral_codeWhereInput[];
    NOT?: Prisma.referral_codeWhereInput | Prisma.referral_codeWhereInput[];
    id?: Prisma.UuidFilter<"referral_code"> | string;
    customer_id?: Prisma.UuidFilter<"referral_code"> | string;
    code?: Prisma.StringFilter<"referral_code"> | string;
    max_uses?: Prisma.IntNullableFilter<"referral_code"> | number | null;
    current_uses?: Prisma.IntFilter<"referral_code"> | number;
    is_active?: Prisma.BoolFilter<"referral_code"> | boolean;
    created_at?: Prisma.DateTimeFilter<"referral_code"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    referral_conversion?: Prisma.Referral_conversionListRelationFilter;
};
export type referral_codeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    max_uses?: Prisma.SortOrderInput | Prisma.SortOrder;
    current_uses?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    referral_conversion?: Prisma.referral_conversionOrderByRelationAggregateInput;
};
export type referral_codeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.referral_codeWhereInput | Prisma.referral_codeWhereInput[];
    OR?: Prisma.referral_codeWhereInput[];
    NOT?: Prisma.referral_codeWhereInput | Prisma.referral_codeWhereInput[];
    customer_id?: Prisma.UuidFilter<"referral_code"> | string;
    max_uses?: Prisma.IntNullableFilter<"referral_code"> | number | null;
    current_uses?: Prisma.IntFilter<"referral_code"> | number;
    is_active?: Prisma.BoolFilter<"referral_code"> | boolean;
    created_at?: Prisma.DateTimeFilter<"referral_code"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    referral_conversion?: Prisma.Referral_conversionListRelationFilter;
}, "id" | "code">;
export type referral_codeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    max_uses?: Prisma.SortOrderInput | Prisma.SortOrder;
    current_uses?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.referral_codeCountOrderByAggregateInput;
    _avg?: Prisma.referral_codeAvgOrderByAggregateInput;
    _max?: Prisma.referral_codeMaxOrderByAggregateInput;
    _min?: Prisma.referral_codeMinOrderByAggregateInput;
    _sum?: Prisma.referral_codeSumOrderByAggregateInput;
};
export type referral_codeScalarWhereWithAggregatesInput = {
    AND?: Prisma.referral_codeScalarWhereWithAggregatesInput | Prisma.referral_codeScalarWhereWithAggregatesInput[];
    OR?: Prisma.referral_codeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.referral_codeScalarWhereWithAggregatesInput | Prisma.referral_codeScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"referral_code"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"referral_code"> | string;
    code?: Prisma.StringWithAggregatesFilter<"referral_code"> | string;
    max_uses?: Prisma.IntNullableWithAggregatesFilter<"referral_code"> | number | null;
    current_uses?: Prisma.IntWithAggregatesFilter<"referral_code"> | number;
    is_active?: Prisma.BoolWithAggregatesFilter<"referral_code"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"referral_code"> | Date | string;
};
export type referral_codeCreateInput = {
    id?: string;
    code: string;
    max_uses?: number | null;
    current_uses?: number;
    is_active?: boolean;
    created_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutReferral_codeInput;
    referral_conversion?: Prisma.referral_conversionCreateNestedManyWithoutReferral_codeInput;
};
export type referral_codeUncheckedCreateInput = {
    id?: string;
    customer_id: string;
    code: string;
    max_uses?: number | null;
    current_uses?: number;
    is_active?: boolean;
    created_at?: Date | string;
    referral_conversion?: Prisma.referral_conversionUncheckedCreateNestedManyWithoutReferral_codeInput;
};
export type referral_codeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    max_uses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    current_uses?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReferral_codeNestedInput;
    referral_conversion?: Prisma.referral_conversionUpdateManyWithoutReferral_codeNestedInput;
};
export type referral_codeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    max_uses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    current_uses?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referral_conversion?: Prisma.referral_conversionUncheckedUpdateManyWithoutReferral_codeNestedInput;
};
export type referral_codeCreateManyInput = {
    id?: string;
    customer_id: string;
    code: string;
    max_uses?: number | null;
    current_uses?: number;
    is_active?: boolean;
    created_at?: Date | string;
};
export type referral_codeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    max_uses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    current_uses?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type referral_codeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    max_uses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    current_uses?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Referral_codeListRelationFilter = {
    every?: Prisma.referral_codeWhereInput;
    some?: Prisma.referral_codeWhereInput;
    none?: Prisma.referral_codeWhereInput;
};
export type referral_codeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type referral_codeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    max_uses?: Prisma.SortOrder;
    current_uses?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type referral_codeAvgOrderByAggregateInput = {
    max_uses?: Prisma.SortOrder;
    current_uses?: Prisma.SortOrder;
};
export type referral_codeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    max_uses?: Prisma.SortOrder;
    current_uses?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type referral_codeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    max_uses?: Prisma.SortOrder;
    current_uses?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type referral_codeSumOrderByAggregateInput = {
    max_uses?: Prisma.SortOrder;
    current_uses?: Prisma.SortOrder;
};
export type Referral_codeScalarRelationFilter = {
    is?: Prisma.referral_codeWhereInput;
    isNot?: Prisma.referral_codeWhereInput;
};
export type referral_codeCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.referral_codeCreateWithoutCustomerInput, Prisma.referral_codeUncheckedCreateWithoutCustomerInput> | Prisma.referral_codeCreateWithoutCustomerInput[] | Prisma.referral_codeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.referral_codeCreateOrConnectWithoutCustomerInput | Prisma.referral_codeCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.referral_codeCreateManyCustomerInputEnvelope;
    connect?: Prisma.referral_codeWhereUniqueInput | Prisma.referral_codeWhereUniqueInput[];
};
export type referral_codeUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.referral_codeCreateWithoutCustomerInput, Prisma.referral_codeUncheckedCreateWithoutCustomerInput> | Prisma.referral_codeCreateWithoutCustomerInput[] | Prisma.referral_codeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.referral_codeCreateOrConnectWithoutCustomerInput | Prisma.referral_codeCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.referral_codeCreateManyCustomerInputEnvelope;
    connect?: Prisma.referral_codeWhereUniqueInput | Prisma.referral_codeWhereUniqueInput[];
};
export type referral_codeUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.referral_codeCreateWithoutCustomerInput, Prisma.referral_codeUncheckedCreateWithoutCustomerInput> | Prisma.referral_codeCreateWithoutCustomerInput[] | Prisma.referral_codeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.referral_codeCreateOrConnectWithoutCustomerInput | Prisma.referral_codeCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.referral_codeUpsertWithWhereUniqueWithoutCustomerInput | Prisma.referral_codeUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.referral_codeCreateManyCustomerInputEnvelope;
    set?: Prisma.referral_codeWhereUniqueInput | Prisma.referral_codeWhereUniqueInput[];
    disconnect?: Prisma.referral_codeWhereUniqueInput | Prisma.referral_codeWhereUniqueInput[];
    delete?: Prisma.referral_codeWhereUniqueInput | Prisma.referral_codeWhereUniqueInput[];
    connect?: Prisma.referral_codeWhereUniqueInput | Prisma.referral_codeWhereUniqueInput[];
    update?: Prisma.referral_codeUpdateWithWhereUniqueWithoutCustomerInput | Prisma.referral_codeUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.referral_codeUpdateManyWithWhereWithoutCustomerInput | Prisma.referral_codeUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.referral_codeScalarWhereInput | Prisma.referral_codeScalarWhereInput[];
};
export type referral_codeUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.referral_codeCreateWithoutCustomerInput, Prisma.referral_codeUncheckedCreateWithoutCustomerInput> | Prisma.referral_codeCreateWithoutCustomerInput[] | Prisma.referral_codeUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.referral_codeCreateOrConnectWithoutCustomerInput | Prisma.referral_codeCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.referral_codeUpsertWithWhereUniqueWithoutCustomerInput | Prisma.referral_codeUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.referral_codeCreateManyCustomerInputEnvelope;
    set?: Prisma.referral_codeWhereUniqueInput | Prisma.referral_codeWhereUniqueInput[];
    disconnect?: Prisma.referral_codeWhereUniqueInput | Prisma.referral_codeWhereUniqueInput[];
    delete?: Prisma.referral_codeWhereUniqueInput | Prisma.referral_codeWhereUniqueInput[];
    connect?: Prisma.referral_codeWhereUniqueInput | Prisma.referral_codeWhereUniqueInput[];
    update?: Prisma.referral_codeUpdateWithWhereUniqueWithoutCustomerInput | Prisma.referral_codeUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.referral_codeUpdateManyWithWhereWithoutCustomerInput | Prisma.referral_codeUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.referral_codeScalarWhereInput | Prisma.referral_codeScalarWhereInput[];
};
export type referral_codeCreateNestedOneWithoutReferral_conversionInput = {
    create?: Prisma.XOR<Prisma.referral_codeCreateWithoutReferral_conversionInput, Prisma.referral_codeUncheckedCreateWithoutReferral_conversionInput>;
    connectOrCreate?: Prisma.referral_codeCreateOrConnectWithoutReferral_conversionInput;
    connect?: Prisma.referral_codeWhereUniqueInput;
};
export type referral_codeUpdateOneRequiredWithoutReferral_conversionNestedInput = {
    create?: Prisma.XOR<Prisma.referral_codeCreateWithoutReferral_conversionInput, Prisma.referral_codeUncheckedCreateWithoutReferral_conversionInput>;
    connectOrCreate?: Prisma.referral_codeCreateOrConnectWithoutReferral_conversionInput;
    upsert?: Prisma.referral_codeUpsertWithoutReferral_conversionInput;
    connect?: Prisma.referral_codeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.referral_codeUpdateToOneWithWhereWithoutReferral_conversionInput, Prisma.referral_codeUpdateWithoutReferral_conversionInput>, Prisma.referral_codeUncheckedUpdateWithoutReferral_conversionInput>;
};
export type referral_codeCreateWithoutCustomerInput = {
    id?: string;
    code: string;
    max_uses?: number | null;
    current_uses?: number;
    is_active?: boolean;
    created_at?: Date | string;
    referral_conversion?: Prisma.referral_conversionCreateNestedManyWithoutReferral_codeInput;
};
export type referral_codeUncheckedCreateWithoutCustomerInput = {
    id?: string;
    code: string;
    max_uses?: number | null;
    current_uses?: number;
    is_active?: boolean;
    created_at?: Date | string;
    referral_conversion?: Prisma.referral_conversionUncheckedCreateNestedManyWithoutReferral_codeInput;
};
export type referral_codeCreateOrConnectWithoutCustomerInput = {
    where: Prisma.referral_codeWhereUniqueInput;
    create: Prisma.XOR<Prisma.referral_codeCreateWithoutCustomerInput, Prisma.referral_codeUncheckedCreateWithoutCustomerInput>;
};
export type referral_codeCreateManyCustomerInputEnvelope = {
    data: Prisma.referral_codeCreateManyCustomerInput | Prisma.referral_codeCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type referral_codeUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.referral_codeWhereUniqueInput;
    update: Prisma.XOR<Prisma.referral_codeUpdateWithoutCustomerInput, Prisma.referral_codeUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.referral_codeCreateWithoutCustomerInput, Prisma.referral_codeUncheckedCreateWithoutCustomerInput>;
};
export type referral_codeUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.referral_codeWhereUniqueInput;
    data: Prisma.XOR<Prisma.referral_codeUpdateWithoutCustomerInput, Prisma.referral_codeUncheckedUpdateWithoutCustomerInput>;
};
export type referral_codeUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.referral_codeScalarWhereInput;
    data: Prisma.XOR<Prisma.referral_codeUpdateManyMutationInput, Prisma.referral_codeUncheckedUpdateManyWithoutCustomerInput>;
};
export type referral_codeScalarWhereInput = {
    AND?: Prisma.referral_codeScalarWhereInput | Prisma.referral_codeScalarWhereInput[];
    OR?: Prisma.referral_codeScalarWhereInput[];
    NOT?: Prisma.referral_codeScalarWhereInput | Prisma.referral_codeScalarWhereInput[];
    id?: Prisma.UuidFilter<"referral_code"> | string;
    customer_id?: Prisma.UuidFilter<"referral_code"> | string;
    code?: Prisma.StringFilter<"referral_code"> | string;
    max_uses?: Prisma.IntNullableFilter<"referral_code"> | number | null;
    current_uses?: Prisma.IntFilter<"referral_code"> | number;
    is_active?: Prisma.BoolFilter<"referral_code"> | boolean;
    created_at?: Prisma.DateTimeFilter<"referral_code"> | Date | string;
};
export type referral_codeCreateWithoutReferral_conversionInput = {
    id?: string;
    code: string;
    max_uses?: number | null;
    current_uses?: number;
    is_active?: boolean;
    created_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutReferral_codeInput;
};
export type referral_codeUncheckedCreateWithoutReferral_conversionInput = {
    id?: string;
    customer_id: string;
    code: string;
    max_uses?: number | null;
    current_uses?: number;
    is_active?: boolean;
    created_at?: Date | string;
};
export type referral_codeCreateOrConnectWithoutReferral_conversionInput = {
    where: Prisma.referral_codeWhereUniqueInput;
    create: Prisma.XOR<Prisma.referral_codeCreateWithoutReferral_conversionInput, Prisma.referral_codeUncheckedCreateWithoutReferral_conversionInput>;
};
export type referral_codeUpsertWithoutReferral_conversionInput = {
    update: Prisma.XOR<Prisma.referral_codeUpdateWithoutReferral_conversionInput, Prisma.referral_codeUncheckedUpdateWithoutReferral_conversionInput>;
    create: Prisma.XOR<Prisma.referral_codeCreateWithoutReferral_conversionInput, Prisma.referral_codeUncheckedCreateWithoutReferral_conversionInput>;
    where?: Prisma.referral_codeWhereInput;
};
export type referral_codeUpdateToOneWithWhereWithoutReferral_conversionInput = {
    where?: Prisma.referral_codeWhereInput;
    data: Prisma.XOR<Prisma.referral_codeUpdateWithoutReferral_conversionInput, Prisma.referral_codeUncheckedUpdateWithoutReferral_conversionInput>;
};
export type referral_codeUpdateWithoutReferral_conversionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    max_uses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    current_uses?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReferral_codeNestedInput;
};
export type referral_codeUncheckedUpdateWithoutReferral_conversionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    max_uses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    current_uses?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type referral_codeCreateManyCustomerInput = {
    id?: string;
    code: string;
    max_uses?: number | null;
    current_uses?: number;
    is_active?: boolean;
    created_at?: Date | string;
};
export type referral_codeUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    max_uses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    current_uses?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referral_conversion?: Prisma.referral_conversionUpdateManyWithoutReferral_codeNestedInput;
};
export type referral_codeUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    max_uses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    current_uses?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referral_conversion?: Prisma.referral_conversionUncheckedUpdateManyWithoutReferral_codeNestedInput;
};
export type referral_codeUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    max_uses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    current_uses?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Referral_codeCountOutputType = {
    referral_conversion: number;
};
export type Referral_codeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    referral_conversion?: boolean | Referral_codeCountOutputTypeCountReferral_conversionArgs;
};
export type Referral_codeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Referral_codeCountOutputTypeSelect<ExtArgs> | null;
};
export type Referral_codeCountOutputTypeCountReferral_conversionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.referral_conversionWhereInput;
};
export type referral_codeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    code?: boolean;
    max_uses?: boolean;
    current_uses?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    referral_conversion?: boolean | Prisma.referral_code$referral_conversionArgs<ExtArgs>;
    _count?: boolean | Prisma.Referral_codeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["referral_code"]>;
export type referral_codeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    code?: boolean;
    max_uses?: boolean;
    current_uses?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["referral_code"]>;
export type referral_codeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    code?: boolean;
    max_uses?: boolean;
    current_uses?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["referral_code"]>;
export type referral_codeSelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    code?: boolean;
    max_uses?: boolean;
    current_uses?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type referral_codeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "code" | "max_uses" | "current_uses" | "is_active" | "created_at", ExtArgs["result"]["referral_code"]>;
export type referral_codeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    referral_conversion?: boolean | Prisma.referral_code$referral_conversionArgs<ExtArgs>;
    _count?: boolean | Prisma.Referral_codeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type referral_codeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type referral_codeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $referral_codePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "referral_code";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        referral_conversion: Prisma.$referral_conversionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customer_id: string;
        code: string;
        max_uses: number | null;
        current_uses: number;
        is_active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["referral_code"]>;
    composites: {};
};
export type referral_codeGetPayload<S extends boolean | null | undefined | referral_codeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$referral_codePayload, S>;
export type referral_codeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<referral_codeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Referral_codeCountAggregateInputType | true;
};
export interface referral_codeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['referral_code'];
        meta: {
            name: 'referral_code';
        };
    };
    findUnique<T extends referral_codeFindUniqueArgs>(args: Prisma.SelectSubset<T, referral_codeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__referral_codeClient<runtime.Types.Result.GetResult<Prisma.$referral_codePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends referral_codeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, referral_codeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__referral_codeClient<runtime.Types.Result.GetResult<Prisma.$referral_codePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends referral_codeFindFirstArgs>(args?: Prisma.SelectSubset<T, referral_codeFindFirstArgs<ExtArgs>>): Prisma.Prisma__referral_codeClient<runtime.Types.Result.GetResult<Prisma.$referral_codePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends referral_codeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, referral_codeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__referral_codeClient<runtime.Types.Result.GetResult<Prisma.$referral_codePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends referral_codeFindManyArgs>(args?: Prisma.SelectSubset<T, referral_codeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$referral_codePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends referral_codeCreateArgs>(args: Prisma.SelectSubset<T, referral_codeCreateArgs<ExtArgs>>): Prisma.Prisma__referral_codeClient<runtime.Types.Result.GetResult<Prisma.$referral_codePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends referral_codeCreateManyArgs>(args?: Prisma.SelectSubset<T, referral_codeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends referral_codeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, referral_codeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$referral_codePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends referral_codeDeleteArgs>(args: Prisma.SelectSubset<T, referral_codeDeleteArgs<ExtArgs>>): Prisma.Prisma__referral_codeClient<runtime.Types.Result.GetResult<Prisma.$referral_codePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends referral_codeUpdateArgs>(args: Prisma.SelectSubset<T, referral_codeUpdateArgs<ExtArgs>>): Prisma.Prisma__referral_codeClient<runtime.Types.Result.GetResult<Prisma.$referral_codePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends referral_codeDeleteManyArgs>(args?: Prisma.SelectSubset<T, referral_codeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends referral_codeUpdateManyArgs>(args: Prisma.SelectSubset<T, referral_codeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends referral_codeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, referral_codeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$referral_codePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends referral_codeUpsertArgs>(args: Prisma.SelectSubset<T, referral_codeUpsertArgs<ExtArgs>>): Prisma.Prisma__referral_codeClient<runtime.Types.Result.GetResult<Prisma.$referral_codePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends referral_codeCountArgs>(args?: Prisma.Subset<T, referral_codeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Referral_codeCountAggregateOutputType> : number>;
    aggregate<T extends Referral_codeAggregateArgs>(args: Prisma.Subset<T, Referral_codeAggregateArgs>): Prisma.PrismaPromise<GetReferral_codeAggregateType<T>>;
    groupBy<T extends referral_codeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: referral_codeGroupByArgs['orderBy'];
    } : {
        orderBy?: referral_codeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, referral_codeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferral_codeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: referral_codeFieldRefs;
}
export interface Prisma__referral_codeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    referral_conversion<T extends Prisma.referral_code$referral_conversionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.referral_code$referral_conversionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$referral_conversionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface referral_codeFieldRefs {
    readonly id: Prisma.FieldRef<"referral_code", 'String'>;
    readonly customer_id: Prisma.FieldRef<"referral_code", 'String'>;
    readonly code: Prisma.FieldRef<"referral_code", 'String'>;
    readonly max_uses: Prisma.FieldRef<"referral_code", 'Int'>;
    readonly current_uses: Prisma.FieldRef<"referral_code", 'Int'>;
    readonly is_active: Prisma.FieldRef<"referral_code", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"referral_code", 'DateTime'>;
}
export type referral_codeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_codeSelect<ExtArgs> | null;
    omit?: Prisma.referral_codeOmit<ExtArgs> | null;
    include?: Prisma.referral_codeInclude<ExtArgs> | null;
    where: Prisma.referral_codeWhereUniqueInput;
};
export type referral_codeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_codeSelect<ExtArgs> | null;
    omit?: Prisma.referral_codeOmit<ExtArgs> | null;
    include?: Prisma.referral_codeInclude<ExtArgs> | null;
    where: Prisma.referral_codeWhereUniqueInput;
};
export type referral_codeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_codeSelect<ExtArgs> | null;
    omit?: Prisma.referral_codeOmit<ExtArgs> | null;
    include?: Prisma.referral_codeInclude<ExtArgs> | null;
    where?: Prisma.referral_codeWhereInput;
    orderBy?: Prisma.referral_codeOrderByWithRelationInput | Prisma.referral_codeOrderByWithRelationInput[];
    cursor?: Prisma.referral_codeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Referral_codeScalarFieldEnum | Prisma.Referral_codeScalarFieldEnum[];
};
export type referral_codeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_codeSelect<ExtArgs> | null;
    omit?: Prisma.referral_codeOmit<ExtArgs> | null;
    include?: Prisma.referral_codeInclude<ExtArgs> | null;
    where?: Prisma.referral_codeWhereInput;
    orderBy?: Prisma.referral_codeOrderByWithRelationInput | Prisma.referral_codeOrderByWithRelationInput[];
    cursor?: Prisma.referral_codeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Referral_codeScalarFieldEnum | Prisma.Referral_codeScalarFieldEnum[];
};
export type referral_codeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_codeSelect<ExtArgs> | null;
    omit?: Prisma.referral_codeOmit<ExtArgs> | null;
    include?: Prisma.referral_codeInclude<ExtArgs> | null;
    where?: Prisma.referral_codeWhereInput;
    orderBy?: Prisma.referral_codeOrderByWithRelationInput | Prisma.referral_codeOrderByWithRelationInput[];
    cursor?: Prisma.referral_codeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Referral_codeScalarFieldEnum | Prisma.Referral_codeScalarFieldEnum[];
};
export type referral_codeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_codeSelect<ExtArgs> | null;
    omit?: Prisma.referral_codeOmit<ExtArgs> | null;
    include?: Prisma.referral_codeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.referral_codeCreateInput, Prisma.referral_codeUncheckedCreateInput>;
};
export type referral_codeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.referral_codeCreateManyInput | Prisma.referral_codeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type referral_codeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_codeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.referral_codeOmit<ExtArgs> | null;
    data: Prisma.referral_codeCreateManyInput | Prisma.referral_codeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.referral_codeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type referral_codeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_codeSelect<ExtArgs> | null;
    omit?: Prisma.referral_codeOmit<ExtArgs> | null;
    include?: Prisma.referral_codeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.referral_codeUpdateInput, Prisma.referral_codeUncheckedUpdateInput>;
    where: Prisma.referral_codeWhereUniqueInput;
};
export type referral_codeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.referral_codeUpdateManyMutationInput, Prisma.referral_codeUncheckedUpdateManyInput>;
    where?: Prisma.referral_codeWhereInput;
    limit?: number;
};
export type referral_codeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_codeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.referral_codeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.referral_codeUpdateManyMutationInput, Prisma.referral_codeUncheckedUpdateManyInput>;
    where?: Prisma.referral_codeWhereInput;
    limit?: number;
    include?: Prisma.referral_codeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type referral_codeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_codeSelect<ExtArgs> | null;
    omit?: Prisma.referral_codeOmit<ExtArgs> | null;
    include?: Prisma.referral_codeInclude<ExtArgs> | null;
    where: Prisma.referral_codeWhereUniqueInput;
    create: Prisma.XOR<Prisma.referral_codeCreateInput, Prisma.referral_codeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.referral_codeUpdateInput, Prisma.referral_codeUncheckedUpdateInput>;
};
export type referral_codeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_codeSelect<ExtArgs> | null;
    omit?: Prisma.referral_codeOmit<ExtArgs> | null;
    include?: Prisma.referral_codeInclude<ExtArgs> | null;
    where: Prisma.referral_codeWhereUniqueInput;
};
export type referral_codeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.referral_codeWhereInput;
    limit?: number;
};
export type referral_code$referral_conversionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type referral_codeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.referral_codeSelect<ExtArgs> | null;
    omit?: Prisma.referral_codeOmit<ExtArgs> | null;
    include?: Prisma.referral_codeInclude<ExtArgs> | null;
};
