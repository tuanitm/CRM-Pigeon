import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type rfm_snapshotModel = runtime.Types.Result.DefaultSelection<Prisma.$rfm_snapshotPayload>;
export type AggregateRfm_snapshot = {
    _count: Rfm_snapshotCountAggregateOutputType | null;
    _avg: Rfm_snapshotAvgAggregateOutputType | null;
    _sum: Rfm_snapshotSumAggregateOutputType | null;
    _min: Rfm_snapshotMinAggregateOutputType | null;
    _max: Rfm_snapshotMaxAggregateOutputType | null;
};
export type Rfm_snapshotAvgAggregateOutputType = {
    recency_score: number | null;
    frequency_score: number | null;
    monetary_score: number | null;
};
export type Rfm_snapshotSumAggregateOutputType = {
    recency_score: number | null;
    frequency_score: number | null;
    monetary_score: number | null;
};
export type Rfm_snapshotMinAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    period: string | null;
    recency_score: number | null;
    frequency_score: number | null;
    monetary_score: number | null;
    rfm_segment: string | null;
    is_discount_hunter: boolean | null;
    calculated_at: Date | null;
};
export type Rfm_snapshotMaxAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    period: string | null;
    recency_score: number | null;
    frequency_score: number | null;
    monetary_score: number | null;
    rfm_segment: string | null;
    is_discount_hunter: boolean | null;
    calculated_at: Date | null;
};
export type Rfm_snapshotCountAggregateOutputType = {
    id: number;
    customer_id: number;
    period: number;
    recency_score: number;
    frequency_score: number;
    monetary_score: number;
    rfm_segment: number;
    is_discount_hunter: number;
    calculated_at: number;
    _all: number;
};
export type Rfm_snapshotAvgAggregateInputType = {
    recency_score?: true;
    frequency_score?: true;
    monetary_score?: true;
};
export type Rfm_snapshotSumAggregateInputType = {
    recency_score?: true;
    frequency_score?: true;
    monetary_score?: true;
};
export type Rfm_snapshotMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    period?: true;
    recency_score?: true;
    frequency_score?: true;
    monetary_score?: true;
    rfm_segment?: true;
    is_discount_hunter?: true;
    calculated_at?: true;
};
export type Rfm_snapshotMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    period?: true;
    recency_score?: true;
    frequency_score?: true;
    monetary_score?: true;
    rfm_segment?: true;
    is_discount_hunter?: true;
    calculated_at?: true;
};
export type Rfm_snapshotCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    period?: true;
    recency_score?: true;
    frequency_score?: true;
    monetary_score?: true;
    rfm_segment?: true;
    is_discount_hunter?: true;
    calculated_at?: true;
    _all?: true;
};
export type Rfm_snapshotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rfm_snapshotWhereInput;
    orderBy?: Prisma.rfm_snapshotOrderByWithRelationInput | Prisma.rfm_snapshotOrderByWithRelationInput[];
    cursor?: Prisma.rfm_snapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Rfm_snapshotCountAggregateInputType;
    _avg?: Rfm_snapshotAvgAggregateInputType;
    _sum?: Rfm_snapshotSumAggregateInputType;
    _min?: Rfm_snapshotMinAggregateInputType;
    _max?: Rfm_snapshotMaxAggregateInputType;
};
export type GetRfm_snapshotAggregateType<T extends Rfm_snapshotAggregateArgs> = {
    [P in keyof T & keyof AggregateRfm_snapshot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRfm_snapshot[P]> : Prisma.GetScalarType<T[P], AggregateRfm_snapshot[P]>;
};
export type rfm_snapshotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rfm_snapshotWhereInput;
    orderBy?: Prisma.rfm_snapshotOrderByWithAggregationInput | Prisma.rfm_snapshotOrderByWithAggregationInput[];
    by: Prisma.Rfm_snapshotScalarFieldEnum[] | Prisma.Rfm_snapshotScalarFieldEnum;
    having?: Prisma.rfm_snapshotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Rfm_snapshotCountAggregateInputType | true;
    _avg?: Rfm_snapshotAvgAggregateInputType;
    _sum?: Rfm_snapshotSumAggregateInputType;
    _min?: Rfm_snapshotMinAggregateInputType;
    _max?: Rfm_snapshotMaxAggregateInputType;
};
export type Rfm_snapshotGroupByOutputType = {
    id: string;
    customer_id: string;
    period: string;
    recency_score: number;
    frequency_score: number;
    monetary_score: number;
    rfm_segment: string;
    is_discount_hunter: boolean;
    calculated_at: Date;
    _count: Rfm_snapshotCountAggregateOutputType | null;
    _avg: Rfm_snapshotAvgAggregateOutputType | null;
    _sum: Rfm_snapshotSumAggregateOutputType | null;
    _min: Rfm_snapshotMinAggregateOutputType | null;
    _max: Rfm_snapshotMaxAggregateOutputType | null;
};
export type GetRfm_snapshotGroupByPayload<T extends rfm_snapshotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Rfm_snapshotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Rfm_snapshotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Rfm_snapshotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Rfm_snapshotGroupByOutputType[P]>;
}>>;
export type rfm_snapshotWhereInput = {
    AND?: Prisma.rfm_snapshotWhereInput | Prisma.rfm_snapshotWhereInput[];
    OR?: Prisma.rfm_snapshotWhereInput[];
    NOT?: Prisma.rfm_snapshotWhereInput | Prisma.rfm_snapshotWhereInput[];
    id?: Prisma.UuidFilter<"rfm_snapshot"> | string;
    customer_id?: Prisma.UuidFilter<"rfm_snapshot"> | string;
    period?: Prisma.StringFilter<"rfm_snapshot"> | string;
    recency_score?: Prisma.IntFilter<"rfm_snapshot"> | number;
    frequency_score?: Prisma.IntFilter<"rfm_snapshot"> | number;
    monetary_score?: Prisma.IntFilter<"rfm_snapshot"> | number;
    rfm_segment?: Prisma.StringFilter<"rfm_snapshot"> | string;
    is_discount_hunter?: Prisma.BoolFilter<"rfm_snapshot"> | boolean;
    calculated_at?: Prisma.DateTimeFilter<"rfm_snapshot"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
};
export type rfm_snapshotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    recency_score?: Prisma.SortOrder;
    frequency_score?: Prisma.SortOrder;
    monetary_score?: Prisma.SortOrder;
    rfm_segment?: Prisma.SortOrder;
    is_discount_hunter?: Prisma.SortOrder;
    calculated_at?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type rfm_snapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    customer_id_period?: Prisma.rfm_snapshotCustomer_idPeriodCompoundUniqueInput;
    AND?: Prisma.rfm_snapshotWhereInput | Prisma.rfm_snapshotWhereInput[];
    OR?: Prisma.rfm_snapshotWhereInput[];
    NOT?: Prisma.rfm_snapshotWhereInput | Prisma.rfm_snapshotWhereInput[];
    customer_id?: Prisma.UuidFilter<"rfm_snapshot"> | string;
    period?: Prisma.StringFilter<"rfm_snapshot"> | string;
    recency_score?: Prisma.IntFilter<"rfm_snapshot"> | number;
    frequency_score?: Prisma.IntFilter<"rfm_snapshot"> | number;
    monetary_score?: Prisma.IntFilter<"rfm_snapshot"> | number;
    rfm_segment?: Prisma.StringFilter<"rfm_snapshot"> | string;
    is_discount_hunter?: Prisma.BoolFilter<"rfm_snapshot"> | boolean;
    calculated_at?: Prisma.DateTimeFilter<"rfm_snapshot"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
}, "id" | "customer_id_period">;
export type rfm_snapshotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    recency_score?: Prisma.SortOrder;
    frequency_score?: Prisma.SortOrder;
    monetary_score?: Prisma.SortOrder;
    rfm_segment?: Prisma.SortOrder;
    is_discount_hunter?: Prisma.SortOrder;
    calculated_at?: Prisma.SortOrder;
    _count?: Prisma.rfm_snapshotCountOrderByAggregateInput;
    _avg?: Prisma.rfm_snapshotAvgOrderByAggregateInput;
    _max?: Prisma.rfm_snapshotMaxOrderByAggregateInput;
    _min?: Prisma.rfm_snapshotMinOrderByAggregateInput;
    _sum?: Prisma.rfm_snapshotSumOrderByAggregateInput;
};
export type rfm_snapshotScalarWhereWithAggregatesInput = {
    AND?: Prisma.rfm_snapshotScalarWhereWithAggregatesInput | Prisma.rfm_snapshotScalarWhereWithAggregatesInput[];
    OR?: Prisma.rfm_snapshotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.rfm_snapshotScalarWhereWithAggregatesInput | Prisma.rfm_snapshotScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"rfm_snapshot"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"rfm_snapshot"> | string;
    period?: Prisma.StringWithAggregatesFilter<"rfm_snapshot"> | string;
    recency_score?: Prisma.IntWithAggregatesFilter<"rfm_snapshot"> | number;
    frequency_score?: Prisma.IntWithAggregatesFilter<"rfm_snapshot"> | number;
    monetary_score?: Prisma.IntWithAggregatesFilter<"rfm_snapshot"> | number;
    rfm_segment?: Prisma.StringWithAggregatesFilter<"rfm_snapshot"> | string;
    is_discount_hunter?: Prisma.BoolWithAggregatesFilter<"rfm_snapshot"> | boolean;
    calculated_at?: Prisma.DateTimeWithAggregatesFilter<"rfm_snapshot"> | Date | string;
};
export type rfm_snapshotCreateInput = {
    id?: string;
    period: string;
    recency_score: number;
    frequency_score: number;
    monetary_score: number;
    rfm_segment: string;
    is_discount_hunter?: boolean;
    calculated_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutRfm_snapshotInput;
};
export type rfm_snapshotUncheckedCreateInput = {
    id?: string;
    customer_id: string;
    period: string;
    recency_score: number;
    frequency_score: number;
    monetary_score: number;
    rfm_segment: string;
    is_discount_hunter?: boolean;
    calculated_at?: Date | string;
};
export type rfm_snapshotUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    recency_score?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency_score?: Prisma.IntFieldUpdateOperationsInput | number;
    monetary_score?: Prisma.IntFieldUpdateOperationsInput | number;
    rfm_segment?: Prisma.StringFieldUpdateOperationsInput | string;
    is_discount_hunter?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    calculated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutRfm_snapshotNestedInput;
};
export type rfm_snapshotUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    recency_score?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency_score?: Prisma.IntFieldUpdateOperationsInput | number;
    monetary_score?: Prisma.IntFieldUpdateOperationsInput | number;
    rfm_segment?: Prisma.StringFieldUpdateOperationsInput | string;
    is_discount_hunter?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    calculated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rfm_snapshotCreateManyInput = {
    id?: string;
    customer_id: string;
    period: string;
    recency_score: number;
    frequency_score: number;
    monetary_score: number;
    rfm_segment: string;
    is_discount_hunter?: boolean;
    calculated_at?: Date | string;
};
export type rfm_snapshotUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    recency_score?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency_score?: Prisma.IntFieldUpdateOperationsInput | number;
    monetary_score?: Prisma.IntFieldUpdateOperationsInput | number;
    rfm_segment?: Prisma.StringFieldUpdateOperationsInput | string;
    is_discount_hunter?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    calculated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rfm_snapshotUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    recency_score?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency_score?: Prisma.IntFieldUpdateOperationsInput | number;
    monetary_score?: Prisma.IntFieldUpdateOperationsInput | number;
    rfm_segment?: Prisma.StringFieldUpdateOperationsInput | string;
    is_discount_hunter?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    calculated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Rfm_snapshotListRelationFilter = {
    every?: Prisma.rfm_snapshotWhereInput;
    some?: Prisma.rfm_snapshotWhereInput;
    none?: Prisma.rfm_snapshotWhereInput;
};
export type rfm_snapshotOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type rfm_snapshotCustomer_idPeriodCompoundUniqueInput = {
    customer_id: string;
    period: string;
};
export type rfm_snapshotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    recency_score?: Prisma.SortOrder;
    frequency_score?: Prisma.SortOrder;
    monetary_score?: Prisma.SortOrder;
    rfm_segment?: Prisma.SortOrder;
    is_discount_hunter?: Prisma.SortOrder;
    calculated_at?: Prisma.SortOrder;
};
export type rfm_snapshotAvgOrderByAggregateInput = {
    recency_score?: Prisma.SortOrder;
    frequency_score?: Prisma.SortOrder;
    monetary_score?: Prisma.SortOrder;
};
export type rfm_snapshotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    recency_score?: Prisma.SortOrder;
    frequency_score?: Prisma.SortOrder;
    monetary_score?: Prisma.SortOrder;
    rfm_segment?: Prisma.SortOrder;
    is_discount_hunter?: Prisma.SortOrder;
    calculated_at?: Prisma.SortOrder;
};
export type rfm_snapshotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    period?: Prisma.SortOrder;
    recency_score?: Prisma.SortOrder;
    frequency_score?: Prisma.SortOrder;
    monetary_score?: Prisma.SortOrder;
    rfm_segment?: Prisma.SortOrder;
    is_discount_hunter?: Prisma.SortOrder;
    calculated_at?: Prisma.SortOrder;
};
export type rfm_snapshotSumOrderByAggregateInput = {
    recency_score?: Prisma.SortOrder;
    frequency_score?: Prisma.SortOrder;
    monetary_score?: Prisma.SortOrder;
};
export type rfm_snapshotCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.rfm_snapshotCreateWithoutCustomerInput, Prisma.rfm_snapshotUncheckedCreateWithoutCustomerInput> | Prisma.rfm_snapshotCreateWithoutCustomerInput[] | Prisma.rfm_snapshotUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.rfm_snapshotCreateOrConnectWithoutCustomerInput | Prisma.rfm_snapshotCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.rfm_snapshotCreateManyCustomerInputEnvelope;
    connect?: Prisma.rfm_snapshotWhereUniqueInput | Prisma.rfm_snapshotWhereUniqueInput[];
};
export type rfm_snapshotUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.rfm_snapshotCreateWithoutCustomerInput, Prisma.rfm_snapshotUncheckedCreateWithoutCustomerInput> | Prisma.rfm_snapshotCreateWithoutCustomerInput[] | Prisma.rfm_snapshotUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.rfm_snapshotCreateOrConnectWithoutCustomerInput | Prisma.rfm_snapshotCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.rfm_snapshotCreateManyCustomerInputEnvelope;
    connect?: Prisma.rfm_snapshotWhereUniqueInput | Prisma.rfm_snapshotWhereUniqueInput[];
};
export type rfm_snapshotUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.rfm_snapshotCreateWithoutCustomerInput, Prisma.rfm_snapshotUncheckedCreateWithoutCustomerInput> | Prisma.rfm_snapshotCreateWithoutCustomerInput[] | Prisma.rfm_snapshotUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.rfm_snapshotCreateOrConnectWithoutCustomerInput | Prisma.rfm_snapshotCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.rfm_snapshotUpsertWithWhereUniqueWithoutCustomerInput | Prisma.rfm_snapshotUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.rfm_snapshotCreateManyCustomerInputEnvelope;
    set?: Prisma.rfm_snapshotWhereUniqueInput | Prisma.rfm_snapshotWhereUniqueInput[];
    disconnect?: Prisma.rfm_snapshotWhereUniqueInput | Prisma.rfm_snapshotWhereUniqueInput[];
    delete?: Prisma.rfm_snapshotWhereUniqueInput | Prisma.rfm_snapshotWhereUniqueInput[];
    connect?: Prisma.rfm_snapshotWhereUniqueInput | Prisma.rfm_snapshotWhereUniqueInput[];
    update?: Prisma.rfm_snapshotUpdateWithWhereUniqueWithoutCustomerInput | Prisma.rfm_snapshotUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.rfm_snapshotUpdateManyWithWhereWithoutCustomerInput | Prisma.rfm_snapshotUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.rfm_snapshotScalarWhereInput | Prisma.rfm_snapshotScalarWhereInput[];
};
export type rfm_snapshotUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.rfm_snapshotCreateWithoutCustomerInput, Prisma.rfm_snapshotUncheckedCreateWithoutCustomerInput> | Prisma.rfm_snapshotCreateWithoutCustomerInput[] | Prisma.rfm_snapshotUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.rfm_snapshotCreateOrConnectWithoutCustomerInput | Prisma.rfm_snapshotCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.rfm_snapshotUpsertWithWhereUniqueWithoutCustomerInput | Prisma.rfm_snapshotUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.rfm_snapshotCreateManyCustomerInputEnvelope;
    set?: Prisma.rfm_snapshotWhereUniqueInput | Prisma.rfm_snapshotWhereUniqueInput[];
    disconnect?: Prisma.rfm_snapshotWhereUniqueInput | Prisma.rfm_snapshotWhereUniqueInput[];
    delete?: Prisma.rfm_snapshotWhereUniqueInput | Prisma.rfm_snapshotWhereUniqueInput[];
    connect?: Prisma.rfm_snapshotWhereUniqueInput | Prisma.rfm_snapshotWhereUniqueInput[];
    update?: Prisma.rfm_snapshotUpdateWithWhereUniqueWithoutCustomerInput | Prisma.rfm_snapshotUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.rfm_snapshotUpdateManyWithWhereWithoutCustomerInput | Prisma.rfm_snapshotUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.rfm_snapshotScalarWhereInput | Prisma.rfm_snapshotScalarWhereInput[];
};
export type rfm_snapshotCreateWithoutCustomerInput = {
    id?: string;
    period: string;
    recency_score: number;
    frequency_score: number;
    monetary_score: number;
    rfm_segment: string;
    is_discount_hunter?: boolean;
    calculated_at?: Date | string;
};
export type rfm_snapshotUncheckedCreateWithoutCustomerInput = {
    id?: string;
    period: string;
    recency_score: number;
    frequency_score: number;
    monetary_score: number;
    rfm_segment: string;
    is_discount_hunter?: boolean;
    calculated_at?: Date | string;
};
export type rfm_snapshotCreateOrConnectWithoutCustomerInput = {
    where: Prisma.rfm_snapshotWhereUniqueInput;
    create: Prisma.XOR<Prisma.rfm_snapshotCreateWithoutCustomerInput, Prisma.rfm_snapshotUncheckedCreateWithoutCustomerInput>;
};
export type rfm_snapshotCreateManyCustomerInputEnvelope = {
    data: Prisma.rfm_snapshotCreateManyCustomerInput | Prisma.rfm_snapshotCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type rfm_snapshotUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.rfm_snapshotWhereUniqueInput;
    update: Prisma.XOR<Prisma.rfm_snapshotUpdateWithoutCustomerInput, Prisma.rfm_snapshotUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.rfm_snapshotCreateWithoutCustomerInput, Prisma.rfm_snapshotUncheckedCreateWithoutCustomerInput>;
};
export type rfm_snapshotUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.rfm_snapshotWhereUniqueInput;
    data: Prisma.XOR<Prisma.rfm_snapshotUpdateWithoutCustomerInput, Prisma.rfm_snapshotUncheckedUpdateWithoutCustomerInput>;
};
export type rfm_snapshotUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.rfm_snapshotScalarWhereInput;
    data: Prisma.XOR<Prisma.rfm_snapshotUpdateManyMutationInput, Prisma.rfm_snapshotUncheckedUpdateManyWithoutCustomerInput>;
};
export type rfm_snapshotScalarWhereInput = {
    AND?: Prisma.rfm_snapshotScalarWhereInput | Prisma.rfm_snapshotScalarWhereInput[];
    OR?: Prisma.rfm_snapshotScalarWhereInput[];
    NOT?: Prisma.rfm_snapshotScalarWhereInput | Prisma.rfm_snapshotScalarWhereInput[];
    id?: Prisma.UuidFilter<"rfm_snapshot"> | string;
    customer_id?: Prisma.UuidFilter<"rfm_snapshot"> | string;
    period?: Prisma.StringFilter<"rfm_snapshot"> | string;
    recency_score?: Prisma.IntFilter<"rfm_snapshot"> | number;
    frequency_score?: Prisma.IntFilter<"rfm_snapshot"> | number;
    monetary_score?: Prisma.IntFilter<"rfm_snapshot"> | number;
    rfm_segment?: Prisma.StringFilter<"rfm_snapshot"> | string;
    is_discount_hunter?: Prisma.BoolFilter<"rfm_snapshot"> | boolean;
    calculated_at?: Prisma.DateTimeFilter<"rfm_snapshot"> | Date | string;
};
export type rfm_snapshotCreateManyCustomerInput = {
    id?: string;
    period: string;
    recency_score: number;
    frequency_score: number;
    monetary_score: number;
    rfm_segment: string;
    is_discount_hunter?: boolean;
    calculated_at?: Date | string;
};
export type rfm_snapshotUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    recency_score?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency_score?: Prisma.IntFieldUpdateOperationsInput | number;
    monetary_score?: Prisma.IntFieldUpdateOperationsInput | number;
    rfm_segment?: Prisma.StringFieldUpdateOperationsInput | string;
    is_discount_hunter?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    calculated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rfm_snapshotUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    recency_score?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency_score?: Prisma.IntFieldUpdateOperationsInput | number;
    monetary_score?: Prisma.IntFieldUpdateOperationsInput | number;
    rfm_segment?: Prisma.StringFieldUpdateOperationsInput | string;
    is_discount_hunter?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    calculated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rfm_snapshotUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    period?: Prisma.StringFieldUpdateOperationsInput | string;
    recency_score?: Prisma.IntFieldUpdateOperationsInput | number;
    frequency_score?: Prisma.IntFieldUpdateOperationsInput | number;
    monetary_score?: Prisma.IntFieldUpdateOperationsInput | number;
    rfm_segment?: Prisma.StringFieldUpdateOperationsInput | string;
    is_discount_hunter?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    calculated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rfm_snapshotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    period?: boolean;
    recency_score?: boolean;
    frequency_score?: boolean;
    monetary_score?: boolean;
    rfm_segment?: boolean;
    is_discount_hunter?: boolean;
    calculated_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rfm_snapshot"]>;
export type rfm_snapshotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    period?: boolean;
    recency_score?: boolean;
    frequency_score?: boolean;
    monetary_score?: boolean;
    rfm_segment?: boolean;
    is_discount_hunter?: boolean;
    calculated_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rfm_snapshot"]>;
export type rfm_snapshotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    period?: boolean;
    recency_score?: boolean;
    frequency_score?: boolean;
    monetary_score?: boolean;
    rfm_segment?: boolean;
    is_discount_hunter?: boolean;
    calculated_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rfm_snapshot"]>;
export type rfm_snapshotSelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    period?: boolean;
    recency_score?: boolean;
    frequency_score?: boolean;
    monetary_score?: boolean;
    rfm_segment?: boolean;
    is_discount_hunter?: boolean;
    calculated_at?: boolean;
};
export type rfm_snapshotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "period" | "recency_score" | "frequency_score" | "monetary_score" | "rfm_segment" | "is_discount_hunter" | "calculated_at", ExtArgs["result"]["rfm_snapshot"]>;
export type rfm_snapshotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type rfm_snapshotIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type rfm_snapshotIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $rfm_snapshotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "rfm_snapshot";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customer_id: string;
        period: string;
        recency_score: number;
        frequency_score: number;
        monetary_score: number;
        rfm_segment: string;
        is_discount_hunter: boolean;
        calculated_at: Date;
    }, ExtArgs["result"]["rfm_snapshot"]>;
    composites: {};
};
export type rfm_snapshotGetPayload<S extends boolean | null | undefined | rfm_snapshotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rfm_snapshotPayload, S>;
export type rfm_snapshotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<rfm_snapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Rfm_snapshotCountAggregateInputType | true;
};
export interface rfm_snapshotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['rfm_snapshot'];
        meta: {
            name: 'rfm_snapshot';
        };
    };
    findUnique<T extends rfm_snapshotFindUniqueArgs>(args: Prisma.SelectSubset<T, rfm_snapshotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__rfm_snapshotClient<runtime.Types.Result.GetResult<Prisma.$rfm_snapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends rfm_snapshotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, rfm_snapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__rfm_snapshotClient<runtime.Types.Result.GetResult<Prisma.$rfm_snapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends rfm_snapshotFindFirstArgs>(args?: Prisma.SelectSubset<T, rfm_snapshotFindFirstArgs<ExtArgs>>): Prisma.Prisma__rfm_snapshotClient<runtime.Types.Result.GetResult<Prisma.$rfm_snapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends rfm_snapshotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, rfm_snapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__rfm_snapshotClient<runtime.Types.Result.GetResult<Prisma.$rfm_snapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends rfm_snapshotFindManyArgs>(args?: Prisma.SelectSubset<T, rfm_snapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rfm_snapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends rfm_snapshotCreateArgs>(args: Prisma.SelectSubset<T, rfm_snapshotCreateArgs<ExtArgs>>): Prisma.Prisma__rfm_snapshotClient<runtime.Types.Result.GetResult<Prisma.$rfm_snapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends rfm_snapshotCreateManyArgs>(args?: Prisma.SelectSubset<T, rfm_snapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends rfm_snapshotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, rfm_snapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rfm_snapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends rfm_snapshotDeleteArgs>(args: Prisma.SelectSubset<T, rfm_snapshotDeleteArgs<ExtArgs>>): Prisma.Prisma__rfm_snapshotClient<runtime.Types.Result.GetResult<Prisma.$rfm_snapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends rfm_snapshotUpdateArgs>(args: Prisma.SelectSubset<T, rfm_snapshotUpdateArgs<ExtArgs>>): Prisma.Prisma__rfm_snapshotClient<runtime.Types.Result.GetResult<Prisma.$rfm_snapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends rfm_snapshotDeleteManyArgs>(args?: Prisma.SelectSubset<T, rfm_snapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends rfm_snapshotUpdateManyArgs>(args: Prisma.SelectSubset<T, rfm_snapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends rfm_snapshotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, rfm_snapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rfm_snapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends rfm_snapshotUpsertArgs>(args: Prisma.SelectSubset<T, rfm_snapshotUpsertArgs<ExtArgs>>): Prisma.Prisma__rfm_snapshotClient<runtime.Types.Result.GetResult<Prisma.$rfm_snapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends rfm_snapshotCountArgs>(args?: Prisma.Subset<T, rfm_snapshotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Rfm_snapshotCountAggregateOutputType> : number>;
    aggregate<T extends Rfm_snapshotAggregateArgs>(args: Prisma.Subset<T, Rfm_snapshotAggregateArgs>): Prisma.PrismaPromise<GetRfm_snapshotAggregateType<T>>;
    groupBy<T extends rfm_snapshotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: rfm_snapshotGroupByArgs['orderBy'];
    } : {
        orderBy?: rfm_snapshotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, rfm_snapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRfm_snapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: rfm_snapshotFieldRefs;
}
export interface Prisma__rfm_snapshotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface rfm_snapshotFieldRefs {
    readonly id: Prisma.FieldRef<"rfm_snapshot", 'String'>;
    readonly customer_id: Prisma.FieldRef<"rfm_snapshot", 'String'>;
    readonly period: Prisma.FieldRef<"rfm_snapshot", 'String'>;
    readonly recency_score: Prisma.FieldRef<"rfm_snapshot", 'Int'>;
    readonly frequency_score: Prisma.FieldRef<"rfm_snapshot", 'Int'>;
    readonly monetary_score: Prisma.FieldRef<"rfm_snapshot", 'Int'>;
    readonly rfm_segment: Prisma.FieldRef<"rfm_snapshot", 'String'>;
    readonly is_discount_hunter: Prisma.FieldRef<"rfm_snapshot", 'Boolean'>;
    readonly calculated_at: Prisma.FieldRef<"rfm_snapshot", 'DateTime'>;
}
export type rfm_snapshotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rfm_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.rfm_snapshotOmit<ExtArgs> | null;
    include?: Prisma.rfm_snapshotInclude<ExtArgs> | null;
    where: Prisma.rfm_snapshotWhereUniqueInput;
};
export type rfm_snapshotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rfm_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.rfm_snapshotOmit<ExtArgs> | null;
    include?: Prisma.rfm_snapshotInclude<ExtArgs> | null;
    where: Prisma.rfm_snapshotWhereUniqueInput;
};
export type rfm_snapshotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rfm_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.rfm_snapshotOmit<ExtArgs> | null;
    include?: Prisma.rfm_snapshotInclude<ExtArgs> | null;
    where?: Prisma.rfm_snapshotWhereInput;
    orderBy?: Prisma.rfm_snapshotOrderByWithRelationInput | Prisma.rfm_snapshotOrderByWithRelationInput[];
    cursor?: Prisma.rfm_snapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rfm_snapshotScalarFieldEnum | Prisma.Rfm_snapshotScalarFieldEnum[];
};
export type rfm_snapshotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rfm_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.rfm_snapshotOmit<ExtArgs> | null;
    include?: Prisma.rfm_snapshotInclude<ExtArgs> | null;
    where?: Prisma.rfm_snapshotWhereInput;
    orderBy?: Prisma.rfm_snapshotOrderByWithRelationInput | Prisma.rfm_snapshotOrderByWithRelationInput[];
    cursor?: Prisma.rfm_snapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rfm_snapshotScalarFieldEnum | Prisma.Rfm_snapshotScalarFieldEnum[];
};
export type rfm_snapshotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rfm_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.rfm_snapshotOmit<ExtArgs> | null;
    include?: Prisma.rfm_snapshotInclude<ExtArgs> | null;
    where?: Prisma.rfm_snapshotWhereInput;
    orderBy?: Prisma.rfm_snapshotOrderByWithRelationInput | Prisma.rfm_snapshotOrderByWithRelationInput[];
    cursor?: Prisma.rfm_snapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Rfm_snapshotScalarFieldEnum | Prisma.Rfm_snapshotScalarFieldEnum[];
};
export type rfm_snapshotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rfm_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.rfm_snapshotOmit<ExtArgs> | null;
    include?: Prisma.rfm_snapshotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rfm_snapshotCreateInput, Prisma.rfm_snapshotUncheckedCreateInput>;
};
export type rfm_snapshotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.rfm_snapshotCreateManyInput | Prisma.rfm_snapshotCreateManyInput[];
    skipDuplicates?: boolean;
};
export type rfm_snapshotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rfm_snapshotSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.rfm_snapshotOmit<ExtArgs> | null;
    data: Prisma.rfm_snapshotCreateManyInput | Prisma.rfm_snapshotCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.rfm_snapshotIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type rfm_snapshotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rfm_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.rfm_snapshotOmit<ExtArgs> | null;
    include?: Prisma.rfm_snapshotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rfm_snapshotUpdateInput, Prisma.rfm_snapshotUncheckedUpdateInput>;
    where: Prisma.rfm_snapshotWhereUniqueInput;
};
export type rfm_snapshotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.rfm_snapshotUpdateManyMutationInput, Prisma.rfm_snapshotUncheckedUpdateManyInput>;
    where?: Prisma.rfm_snapshotWhereInput;
    limit?: number;
};
export type rfm_snapshotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rfm_snapshotSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.rfm_snapshotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rfm_snapshotUpdateManyMutationInput, Prisma.rfm_snapshotUncheckedUpdateManyInput>;
    where?: Prisma.rfm_snapshotWhereInput;
    limit?: number;
    include?: Prisma.rfm_snapshotIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type rfm_snapshotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rfm_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.rfm_snapshotOmit<ExtArgs> | null;
    include?: Prisma.rfm_snapshotInclude<ExtArgs> | null;
    where: Prisma.rfm_snapshotWhereUniqueInput;
    create: Prisma.XOR<Prisma.rfm_snapshotCreateInput, Prisma.rfm_snapshotUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.rfm_snapshotUpdateInput, Prisma.rfm_snapshotUncheckedUpdateInput>;
};
export type rfm_snapshotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rfm_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.rfm_snapshotOmit<ExtArgs> | null;
    include?: Prisma.rfm_snapshotInclude<ExtArgs> | null;
    where: Prisma.rfm_snapshotWhereUniqueInput;
};
export type rfm_snapshotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rfm_snapshotWhereInput;
    limit?: number;
};
export type rfm_snapshotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rfm_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.rfm_snapshotOmit<ExtArgs> | null;
    include?: Prisma.rfm_snapshotInclude<ExtArgs> | null;
};
