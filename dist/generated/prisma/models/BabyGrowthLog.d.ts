import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BabyGrowthLogModel = runtime.Types.Result.DefaultSelection<Prisma.$BabyGrowthLogPayload>;
export type AggregateBabyGrowthLog = {
    _count: BabyGrowthLogCountAggregateOutputType | null;
    _avg: BabyGrowthLogAvgAggregateOutputType | null;
    _sum: BabyGrowthLogSumAggregateOutputType | null;
    _min: BabyGrowthLogMinAggregateOutputType | null;
    _max: BabyGrowthLogMaxAggregateOutputType | null;
};
export type BabyGrowthLogAvgAggregateOutputType = {
    weightKg: runtime.Decimal | null;
    heightCm: runtime.Decimal | null;
    headCircumferenceCm: runtime.Decimal | null;
};
export type BabyGrowthLogSumAggregateOutputType = {
    weightKg: runtime.Decimal | null;
    heightCm: runtime.Decimal | null;
    headCircumferenceCm: runtime.Decimal | null;
};
export type BabyGrowthLogMinAggregateOutputType = {
    id: string | null;
    babyId: string | null;
    recordedAt: Date | null;
    weightKg: runtime.Decimal | null;
    heightCm: runtime.Decimal | null;
    headCircumferenceCm: runtime.Decimal | null;
    notes: string | null;
    createdAt: Date | null;
};
export type BabyGrowthLogMaxAggregateOutputType = {
    id: string | null;
    babyId: string | null;
    recordedAt: Date | null;
    weightKg: runtime.Decimal | null;
    heightCm: runtime.Decimal | null;
    headCircumferenceCm: runtime.Decimal | null;
    notes: string | null;
    createdAt: Date | null;
};
export type BabyGrowthLogCountAggregateOutputType = {
    id: number;
    babyId: number;
    recordedAt: number;
    weightKg: number;
    heightCm: number;
    headCircumferenceCm: number;
    notes: number;
    createdAt: number;
    _all: number;
};
export type BabyGrowthLogAvgAggregateInputType = {
    weightKg?: true;
    heightCm?: true;
    headCircumferenceCm?: true;
};
export type BabyGrowthLogSumAggregateInputType = {
    weightKg?: true;
    heightCm?: true;
    headCircumferenceCm?: true;
};
export type BabyGrowthLogMinAggregateInputType = {
    id?: true;
    babyId?: true;
    recordedAt?: true;
    weightKg?: true;
    heightCm?: true;
    headCircumferenceCm?: true;
    notes?: true;
    createdAt?: true;
};
export type BabyGrowthLogMaxAggregateInputType = {
    id?: true;
    babyId?: true;
    recordedAt?: true;
    weightKg?: true;
    heightCm?: true;
    headCircumferenceCm?: true;
    notes?: true;
    createdAt?: true;
};
export type BabyGrowthLogCountAggregateInputType = {
    id?: true;
    babyId?: true;
    recordedAt?: true;
    weightKg?: true;
    heightCm?: true;
    headCircumferenceCm?: true;
    notes?: true;
    createdAt?: true;
    _all?: true;
};
export type BabyGrowthLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BabyGrowthLogWhereInput;
    orderBy?: Prisma.BabyGrowthLogOrderByWithRelationInput | Prisma.BabyGrowthLogOrderByWithRelationInput[];
    cursor?: Prisma.BabyGrowthLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BabyGrowthLogCountAggregateInputType;
    _avg?: BabyGrowthLogAvgAggregateInputType;
    _sum?: BabyGrowthLogSumAggregateInputType;
    _min?: BabyGrowthLogMinAggregateInputType;
    _max?: BabyGrowthLogMaxAggregateInputType;
};
export type GetBabyGrowthLogAggregateType<T extends BabyGrowthLogAggregateArgs> = {
    [P in keyof T & keyof AggregateBabyGrowthLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBabyGrowthLog[P]> : Prisma.GetScalarType<T[P], AggregateBabyGrowthLog[P]>;
};
export type BabyGrowthLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BabyGrowthLogWhereInput;
    orderBy?: Prisma.BabyGrowthLogOrderByWithAggregationInput | Prisma.BabyGrowthLogOrderByWithAggregationInput[];
    by: Prisma.BabyGrowthLogScalarFieldEnum[] | Prisma.BabyGrowthLogScalarFieldEnum;
    having?: Prisma.BabyGrowthLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BabyGrowthLogCountAggregateInputType | true;
    _avg?: BabyGrowthLogAvgAggregateInputType;
    _sum?: BabyGrowthLogSumAggregateInputType;
    _min?: BabyGrowthLogMinAggregateInputType;
    _max?: BabyGrowthLogMaxAggregateInputType;
};
export type BabyGrowthLogGroupByOutputType = {
    id: string;
    babyId: string;
    recordedAt: Date;
    weightKg: runtime.Decimal | null;
    heightCm: runtime.Decimal | null;
    headCircumferenceCm: runtime.Decimal | null;
    notes: string | null;
    createdAt: Date;
    _count: BabyGrowthLogCountAggregateOutputType | null;
    _avg: BabyGrowthLogAvgAggregateOutputType | null;
    _sum: BabyGrowthLogSumAggregateOutputType | null;
    _min: BabyGrowthLogMinAggregateOutputType | null;
    _max: BabyGrowthLogMaxAggregateOutputType | null;
};
export type GetBabyGrowthLogGroupByPayload<T extends BabyGrowthLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BabyGrowthLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BabyGrowthLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BabyGrowthLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BabyGrowthLogGroupByOutputType[P]>;
}>>;
export type BabyGrowthLogWhereInput = {
    AND?: Prisma.BabyGrowthLogWhereInput | Prisma.BabyGrowthLogWhereInput[];
    OR?: Prisma.BabyGrowthLogWhereInput[];
    NOT?: Prisma.BabyGrowthLogWhereInput | Prisma.BabyGrowthLogWhereInput[];
    id?: Prisma.UuidFilter<"BabyGrowthLog"> | string;
    babyId?: Prisma.UuidFilter<"BabyGrowthLog"> | string;
    recordedAt?: Prisma.DateTimeFilter<"BabyGrowthLog"> | Date | string;
    weightKg?: Prisma.DecimalNullableFilter<"BabyGrowthLog"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: Prisma.DecimalNullableFilter<"BabyGrowthLog"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: Prisma.DecimalNullableFilter<"BabyGrowthLog"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableFilter<"BabyGrowthLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BabyGrowthLog"> | Date | string;
    baby?: Prisma.XOR<Prisma.BabyScalarRelationFilter, Prisma.BabyWhereInput>;
};
export type BabyGrowthLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    babyId?: Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
    weightKg?: Prisma.SortOrderInput | Prisma.SortOrder;
    heightCm?: Prisma.SortOrderInput | Prisma.SortOrder;
    headCircumferenceCm?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    baby?: Prisma.BabyOrderByWithRelationInput;
};
export type BabyGrowthLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BabyGrowthLogWhereInput | Prisma.BabyGrowthLogWhereInput[];
    OR?: Prisma.BabyGrowthLogWhereInput[];
    NOT?: Prisma.BabyGrowthLogWhereInput | Prisma.BabyGrowthLogWhereInput[];
    babyId?: Prisma.UuidFilter<"BabyGrowthLog"> | string;
    recordedAt?: Prisma.DateTimeFilter<"BabyGrowthLog"> | Date | string;
    weightKg?: Prisma.DecimalNullableFilter<"BabyGrowthLog"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: Prisma.DecimalNullableFilter<"BabyGrowthLog"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: Prisma.DecimalNullableFilter<"BabyGrowthLog"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableFilter<"BabyGrowthLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BabyGrowthLog"> | Date | string;
    baby?: Prisma.XOR<Prisma.BabyScalarRelationFilter, Prisma.BabyWhereInput>;
}, "id">;
export type BabyGrowthLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    babyId?: Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
    weightKg?: Prisma.SortOrderInput | Prisma.SortOrder;
    heightCm?: Prisma.SortOrderInput | Prisma.SortOrder;
    headCircumferenceCm?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BabyGrowthLogCountOrderByAggregateInput;
    _avg?: Prisma.BabyGrowthLogAvgOrderByAggregateInput;
    _max?: Prisma.BabyGrowthLogMaxOrderByAggregateInput;
    _min?: Prisma.BabyGrowthLogMinOrderByAggregateInput;
    _sum?: Prisma.BabyGrowthLogSumOrderByAggregateInput;
};
export type BabyGrowthLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.BabyGrowthLogScalarWhereWithAggregatesInput | Prisma.BabyGrowthLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.BabyGrowthLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BabyGrowthLogScalarWhereWithAggregatesInput | Prisma.BabyGrowthLogScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BabyGrowthLog"> | string;
    babyId?: Prisma.UuidWithAggregatesFilter<"BabyGrowthLog"> | string;
    recordedAt?: Prisma.DateTimeWithAggregatesFilter<"BabyGrowthLog"> | Date | string;
    weightKg?: Prisma.DecimalNullableWithAggregatesFilter<"BabyGrowthLog"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: Prisma.DecimalNullableWithAggregatesFilter<"BabyGrowthLog"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: Prisma.DecimalNullableWithAggregatesFilter<"BabyGrowthLog"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"BabyGrowthLog"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BabyGrowthLog"> | Date | string;
};
export type BabyGrowthLogCreateInput = {
    id?: string;
    recordedAt: Date | string;
    weightKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    baby: Prisma.BabyCreateNestedOneWithoutGrowthLogsInput;
};
export type BabyGrowthLogUncheckedCreateInput = {
    id?: string;
    babyId: string;
    recordedAt: Date | string;
    weightKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type BabyGrowthLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weightKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    baby?: Prisma.BabyUpdateOneRequiredWithoutGrowthLogsNestedInput;
};
export type BabyGrowthLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    babyId?: Prisma.StringFieldUpdateOperationsInput | string;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weightKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyGrowthLogCreateManyInput = {
    id?: string;
    babyId: string;
    recordedAt: Date | string;
    weightKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type BabyGrowthLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weightKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyGrowthLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    babyId?: Prisma.StringFieldUpdateOperationsInput | string;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weightKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyGrowthLogListRelationFilter = {
    every?: Prisma.BabyGrowthLogWhereInput;
    some?: Prisma.BabyGrowthLogWhereInput;
    none?: Prisma.BabyGrowthLogWhereInput;
};
export type BabyGrowthLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BabyGrowthLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    babyId?: Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
    weightKg?: Prisma.SortOrder;
    heightCm?: Prisma.SortOrder;
    headCircumferenceCm?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BabyGrowthLogAvgOrderByAggregateInput = {
    weightKg?: Prisma.SortOrder;
    heightCm?: Prisma.SortOrder;
    headCircumferenceCm?: Prisma.SortOrder;
};
export type BabyGrowthLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    babyId?: Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
    weightKg?: Prisma.SortOrder;
    heightCm?: Prisma.SortOrder;
    headCircumferenceCm?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BabyGrowthLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    babyId?: Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
    weightKg?: Prisma.SortOrder;
    heightCm?: Prisma.SortOrder;
    headCircumferenceCm?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BabyGrowthLogSumOrderByAggregateInput = {
    weightKg?: Prisma.SortOrder;
    heightCm?: Prisma.SortOrder;
    headCircumferenceCm?: Prisma.SortOrder;
};
export type BabyGrowthLogCreateNestedManyWithoutBabyInput = {
    create?: Prisma.XOR<Prisma.BabyGrowthLogCreateWithoutBabyInput, Prisma.BabyGrowthLogUncheckedCreateWithoutBabyInput> | Prisma.BabyGrowthLogCreateWithoutBabyInput[] | Prisma.BabyGrowthLogUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.BabyGrowthLogCreateOrConnectWithoutBabyInput | Prisma.BabyGrowthLogCreateOrConnectWithoutBabyInput[];
    createMany?: Prisma.BabyGrowthLogCreateManyBabyInputEnvelope;
    connect?: Prisma.BabyGrowthLogWhereUniqueInput | Prisma.BabyGrowthLogWhereUniqueInput[];
};
export type BabyGrowthLogUncheckedCreateNestedManyWithoutBabyInput = {
    create?: Prisma.XOR<Prisma.BabyGrowthLogCreateWithoutBabyInput, Prisma.BabyGrowthLogUncheckedCreateWithoutBabyInput> | Prisma.BabyGrowthLogCreateWithoutBabyInput[] | Prisma.BabyGrowthLogUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.BabyGrowthLogCreateOrConnectWithoutBabyInput | Prisma.BabyGrowthLogCreateOrConnectWithoutBabyInput[];
    createMany?: Prisma.BabyGrowthLogCreateManyBabyInputEnvelope;
    connect?: Prisma.BabyGrowthLogWhereUniqueInput | Prisma.BabyGrowthLogWhereUniqueInput[];
};
export type BabyGrowthLogUpdateManyWithoutBabyNestedInput = {
    create?: Prisma.XOR<Prisma.BabyGrowthLogCreateWithoutBabyInput, Prisma.BabyGrowthLogUncheckedCreateWithoutBabyInput> | Prisma.BabyGrowthLogCreateWithoutBabyInput[] | Prisma.BabyGrowthLogUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.BabyGrowthLogCreateOrConnectWithoutBabyInput | Prisma.BabyGrowthLogCreateOrConnectWithoutBabyInput[];
    upsert?: Prisma.BabyGrowthLogUpsertWithWhereUniqueWithoutBabyInput | Prisma.BabyGrowthLogUpsertWithWhereUniqueWithoutBabyInput[];
    createMany?: Prisma.BabyGrowthLogCreateManyBabyInputEnvelope;
    set?: Prisma.BabyGrowthLogWhereUniqueInput | Prisma.BabyGrowthLogWhereUniqueInput[];
    disconnect?: Prisma.BabyGrowthLogWhereUniqueInput | Prisma.BabyGrowthLogWhereUniqueInput[];
    delete?: Prisma.BabyGrowthLogWhereUniqueInput | Prisma.BabyGrowthLogWhereUniqueInput[];
    connect?: Prisma.BabyGrowthLogWhereUniqueInput | Prisma.BabyGrowthLogWhereUniqueInput[];
    update?: Prisma.BabyGrowthLogUpdateWithWhereUniqueWithoutBabyInput | Prisma.BabyGrowthLogUpdateWithWhereUniqueWithoutBabyInput[];
    updateMany?: Prisma.BabyGrowthLogUpdateManyWithWhereWithoutBabyInput | Prisma.BabyGrowthLogUpdateManyWithWhereWithoutBabyInput[];
    deleteMany?: Prisma.BabyGrowthLogScalarWhereInput | Prisma.BabyGrowthLogScalarWhereInput[];
};
export type BabyGrowthLogUncheckedUpdateManyWithoutBabyNestedInput = {
    create?: Prisma.XOR<Prisma.BabyGrowthLogCreateWithoutBabyInput, Prisma.BabyGrowthLogUncheckedCreateWithoutBabyInput> | Prisma.BabyGrowthLogCreateWithoutBabyInput[] | Prisma.BabyGrowthLogUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.BabyGrowthLogCreateOrConnectWithoutBabyInput | Prisma.BabyGrowthLogCreateOrConnectWithoutBabyInput[];
    upsert?: Prisma.BabyGrowthLogUpsertWithWhereUniqueWithoutBabyInput | Prisma.BabyGrowthLogUpsertWithWhereUniqueWithoutBabyInput[];
    createMany?: Prisma.BabyGrowthLogCreateManyBabyInputEnvelope;
    set?: Prisma.BabyGrowthLogWhereUniqueInput | Prisma.BabyGrowthLogWhereUniqueInput[];
    disconnect?: Prisma.BabyGrowthLogWhereUniqueInput | Prisma.BabyGrowthLogWhereUniqueInput[];
    delete?: Prisma.BabyGrowthLogWhereUniqueInput | Prisma.BabyGrowthLogWhereUniqueInput[];
    connect?: Prisma.BabyGrowthLogWhereUniqueInput | Prisma.BabyGrowthLogWhereUniqueInput[];
    update?: Prisma.BabyGrowthLogUpdateWithWhereUniqueWithoutBabyInput | Prisma.BabyGrowthLogUpdateWithWhereUniqueWithoutBabyInput[];
    updateMany?: Prisma.BabyGrowthLogUpdateManyWithWhereWithoutBabyInput | Prisma.BabyGrowthLogUpdateManyWithWhereWithoutBabyInput[];
    deleteMany?: Prisma.BabyGrowthLogScalarWhereInput | Prisma.BabyGrowthLogScalarWhereInput[];
};
export type BabyGrowthLogCreateWithoutBabyInput = {
    id?: string;
    recordedAt: Date | string;
    weightKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type BabyGrowthLogUncheckedCreateWithoutBabyInput = {
    id?: string;
    recordedAt: Date | string;
    weightKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type BabyGrowthLogCreateOrConnectWithoutBabyInput = {
    where: Prisma.BabyGrowthLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.BabyGrowthLogCreateWithoutBabyInput, Prisma.BabyGrowthLogUncheckedCreateWithoutBabyInput>;
};
export type BabyGrowthLogCreateManyBabyInputEnvelope = {
    data: Prisma.BabyGrowthLogCreateManyBabyInput | Prisma.BabyGrowthLogCreateManyBabyInput[];
    skipDuplicates?: boolean;
};
export type BabyGrowthLogUpsertWithWhereUniqueWithoutBabyInput = {
    where: Prisma.BabyGrowthLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.BabyGrowthLogUpdateWithoutBabyInput, Prisma.BabyGrowthLogUncheckedUpdateWithoutBabyInput>;
    create: Prisma.XOR<Prisma.BabyGrowthLogCreateWithoutBabyInput, Prisma.BabyGrowthLogUncheckedCreateWithoutBabyInput>;
};
export type BabyGrowthLogUpdateWithWhereUniqueWithoutBabyInput = {
    where: Prisma.BabyGrowthLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.BabyGrowthLogUpdateWithoutBabyInput, Prisma.BabyGrowthLogUncheckedUpdateWithoutBabyInput>;
};
export type BabyGrowthLogUpdateManyWithWhereWithoutBabyInput = {
    where: Prisma.BabyGrowthLogScalarWhereInput;
    data: Prisma.XOR<Prisma.BabyGrowthLogUpdateManyMutationInput, Prisma.BabyGrowthLogUncheckedUpdateManyWithoutBabyInput>;
};
export type BabyGrowthLogScalarWhereInput = {
    AND?: Prisma.BabyGrowthLogScalarWhereInput | Prisma.BabyGrowthLogScalarWhereInput[];
    OR?: Prisma.BabyGrowthLogScalarWhereInput[];
    NOT?: Prisma.BabyGrowthLogScalarWhereInput | Prisma.BabyGrowthLogScalarWhereInput[];
    id?: Prisma.UuidFilter<"BabyGrowthLog"> | string;
    babyId?: Prisma.UuidFilter<"BabyGrowthLog"> | string;
    recordedAt?: Prisma.DateTimeFilter<"BabyGrowthLog"> | Date | string;
    weightKg?: Prisma.DecimalNullableFilter<"BabyGrowthLog"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: Prisma.DecimalNullableFilter<"BabyGrowthLog"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: Prisma.DecimalNullableFilter<"BabyGrowthLog"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.StringNullableFilter<"BabyGrowthLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BabyGrowthLog"> | Date | string;
};
export type BabyGrowthLogCreateManyBabyInput = {
    id?: string;
    recordedAt: Date | string;
    weightKg?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type BabyGrowthLogUpdateWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weightKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyGrowthLogUncheckedUpdateWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weightKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyGrowthLogUncheckedUpdateManyWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    weightKg?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    heightCm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    headCircumferenceCm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyGrowthLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    babyId?: boolean;
    recordedAt?: boolean;
    weightKg?: boolean;
    heightCm?: boolean;
    headCircumferenceCm?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    baby?: boolean | Prisma.BabyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["babyGrowthLog"]>;
export type BabyGrowthLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    babyId?: boolean;
    recordedAt?: boolean;
    weightKg?: boolean;
    heightCm?: boolean;
    headCircumferenceCm?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    baby?: boolean | Prisma.BabyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["babyGrowthLog"]>;
export type BabyGrowthLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    babyId?: boolean;
    recordedAt?: boolean;
    weightKg?: boolean;
    heightCm?: boolean;
    headCircumferenceCm?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    baby?: boolean | Prisma.BabyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["babyGrowthLog"]>;
export type BabyGrowthLogSelectScalar = {
    id?: boolean;
    babyId?: boolean;
    recordedAt?: boolean;
    weightKg?: boolean;
    heightCm?: boolean;
    headCircumferenceCm?: boolean;
    notes?: boolean;
    createdAt?: boolean;
};
export type BabyGrowthLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "babyId" | "recordedAt" | "weightKg" | "heightCm" | "headCircumferenceCm" | "notes" | "createdAt", ExtArgs["result"]["babyGrowthLog"]>;
export type BabyGrowthLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.BabyDefaultArgs<ExtArgs>;
};
export type BabyGrowthLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.BabyDefaultArgs<ExtArgs>;
};
export type BabyGrowthLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.BabyDefaultArgs<ExtArgs>;
};
export type $BabyGrowthLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BabyGrowthLog";
    objects: {
        baby: Prisma.$BabyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        babyId: string;
        recordedAt: Date;
        weightKg: runtime.Decimal | null;
        heightCm: runtime.Decimal | null;
        headCircumferenceCm: runtime.Decimal | null;
        notes: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["babyGrowthLog"]>;
    composites: {};
};
export type BabyGrowthLogGetPayload<S extends boolean | null | undefined | BabyGrowthLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BabyGrowthLogPayload, S>;
export type BabyGrowthLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BabyGrowthLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BabyGrowthLogCountAggregateInputType | true;
};
export interface BabyGrowthLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BabyGrowthLog'];
        meta: {
            name: 'BabyGrowthLog';
        };
    };
    findUnique<T extends BabyGrowthLogFindUniqueArgs>(args: Prisma.SelectSubset<T, BabyGrowthLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BabyGrowthLogClient<runtime.Types.Result.GetResult<Prisma.$BabyGrowthLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BabyGrowthLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BabyGrowthLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BabyGrowthLogClient<runtime.Types.Result.GetResult<Prisma.$BabyGrowthLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BabyGrowthLogFindFirstArgs>(args?: Prisma.SelectSubset<T, BabyGrowthLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__BabyGrowthLogClient<runtime.Types.Result.GetResult<Prisma.$BabyGrowthLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BabyGrowthLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BabyGrowthLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BabyGrowthLogClient<runtime.Types.Result.GetResult<Prisma.$BabyGrowthLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BabyGrowthLogFindManyArgs>(args?: Prisma.SelectSubset<T, BabyGrowthLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BabyGrowthLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BabyGrowthLogCreateArgs>(args: Prisma.SelectSubset<T, BabyGrowthLogCreateArgs<ExtArgs>>): Prisma.Prisma__BabyGrowthLogClient<runtime.Types.Result.GetResult<Prisma.$BabyGrowthLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BabyGrowthLogCreateManyArgs>(args?: Prisma.SelectSubset<T, BabyGrowthLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BabyGrowthLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BabyGrowthLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BabyGrowthLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BabyGrowthLogDeleteArgs>(args: Prisma.SelectSubset<T, BabyGrowthLogDeleteArgs<ExtArgs>>): Prisma.Prisma__BabyGrowthLogClient<runtime.Types.Result.GetResult<Prisma.$BabyGrowthLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BabyGrowthLogUpdateArgs>(args: Prisma.SelectSubset<T, BabyGrowthLogUpdateArgs<ExtArgs>>): Prisma.Prisma__BabyGrowthLogClient<runtime.Types.Result.GetResult<Prisma.$BabyGrowthLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BabyGrowthLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, BabyGrowthLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BabyGrowthLogUpdateManyArgs>(args: Prisma.SelectSubset<T, BabyGrowthLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BabyGrowthLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BabyGrowthLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BabyGrowthLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BabyGrowthLogUpsertArgs>(args: Prisma.SelectSubset<T, BabyGrowthLogUpsertArgs<ExtArgs>>): Prisma.Prisma__BabyGrowthLogClient<runtime.Types.Result.GetResult<Prisma.$BabyGrowthLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BabyGrowthLogCountArgs>(args?: Prisma.Subset<T, BabyGrowthLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BabyGrowthLogCountAggregateOutputType> : number>;
    aggregate<T extends BabyGrowthLogAggregateArgs>(args: Prisma.Subset<T, BabyGrowthLogAggregateArgs>): Prisma.PrismaPromise<GetBabyGrowthLogAggregateType<T>>;
    groupBy<T extends BabyGrowthLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BabyGrowthLogGroupByArgs['orderBy'];
    } : {
        orderBy?: BabyGrowthLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BabyGrowthLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBabyGrowthLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BabyGrowthLogFieldRefs;
}
export interface Prisma__BabyGrowthLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    baby<T extends Prisma.BabyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BabyDefaultArgs<ExtArgs>>): Prisma.Prisma__BabyClient<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BabyGrowthLogFieldRefs {
    readonly id: Prisma.FieldRef<"BabyGrowthLog", 'String'>;
    readonly babyId: Prisma.FieldRef<"BabyGrowthLog", 'String'>;
    readonly recordedAt: Prisma.FieldRef<"BabyGrowthLog", 'DateTime'>;
    readonly weightKg: Prisma.FieldRef<"BabyGrowthLog", 'Decimal'>;
    readonly heightCm: Prisma.FieldRef<"BabyGrowthLog", 'Decimal'>;
    readonly headCircumferenceCm: Prisma.FieldRef<"BabyGrowthLog", 'Decimal'>;
    readonly notes: Prisma.FieldRef<"BabyGrowthLog", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BabyGrowthLog", 'DateTime'>;
}
export type BabyGrowthLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyGrowthLogSelect<ExtArgs> | null;
    omit?: Prisma.BabyGrowthLogOmit<ExtArgs> | null;
    include?: Prisma.BabyGrowthLogInclude<ExtArgs> | null;
    where: Prisma.BabyGrowthLogWhereUniqueInput;
};
export type BabyGrowthLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyGrowthLogSelect<ExtArgs> | null;
    omit?: Prisma.BabyGrowthLogOmit<ExtArgs> | null;
    include?: Prisma.BabyGrowthLogInclude<ExtArgs> | null;
    where: Prisma.BabyGrowthLogWhereUniqueInput;
};
export type BabyGrowthLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BabyGrowthLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BabyGrowthLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BabyGrowthLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyGrowthLogSelect<ExtArgs> | null;
    omit?: Prisma.BabyGrowthLogOmit<ExtArgs> | null;
    include?: Prisma.BabyGrowthLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BabyGrowthLogCreateInput, Prisma.BabyGrowthLogUncheckedCreateInput>;
};
export type BabyGrowthLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BabyGrowthLogCreateManyInput | Prisma.BabyGrowthLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BabyGrowthLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyGrowthLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BabyGrowthLogOmit<ExtArgs> | null;
    data: Prisma.BabyGrowthLogCreateManyInput | Prisma.BabyGrowthLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BabyGrowthLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BabyGrowthLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyGrowthLogSelect<ExtArgs> | null;
    omit?: Prisma.BabyGrowthLogOmit<ExtArgs> | null;
    include?: Prisma.BabyGrowthLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BabyGrowthLogUpdateInput, Prisma.BabyGrowthLogUncheckedUpdateInput>;
    where: Prisma.BabyGrowthLogWhereUniqueInput;
};
export type BabyGrowthLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BabyGrowthLogUpdateManyMutationInput, Prisma.BabyGrowthLogUncheckedUpdateManyInput>;
    where?: Prisma.BabyGrowthLogWhereInput;
    limit?: number;
};
export type BabyGrowthLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyGrowthLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BabyGrowthLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BabyGrowthLogUpdateManyMutationInput, Prisma.BabyGrowthLogUncheckedUpdateManyInput>;
    where?: Prisma.BabyGrowthLogWhereInput;
    limit?: number;
    include?: Prisma.BabyGrowthLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BabyGrowthLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyGrowthLogSelect<ExtArgs> | null;
    omit?: Prisma.BabyGrowthLogOmit<ExtArgs> | null;
    include?: Prisma.BabyGrowthLogInclude<ExtArgs> | null;
    where: Prisma.BabyGrowthLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.BabyGrowthLogCreateInput, Prisma.BabyGrowthLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BabyGrowthLogUpdateInput, Prisma.BabyGrowthLogUncheckedUpdateInput>;
};
export type BabyGrowthLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyGrowthLogSelect<ExtArgs> | null;
    omit?: Prisma.BabyGrowthLogOmit<ExtArgs> | null;
    include?: Prisma.BabyGrowthLogInclude<ExtArgs> | null;
    where: Prisma.BabyGrowthLogWhereUniqueInput;
};
export type BabyGrowthLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BabyGrowthLogWhereInput;
    limit?: number;
};
export type BabyGrowthLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyGrowthLogSelect<ExtArgs> | null;
    omit?: Prisma.BabyGrowthLogOmit<ExtArgs> | null;
    include?: Prisma.BabyGrowthLogInclude<ExtArgs> | null;
};
