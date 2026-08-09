import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type serial_batchModel = runtime.Types.Result.DefaultSelection<Prisma.$serial_batchPayload>;
export type AggregateSerial_batch = {
    _count: Serial_batchCountAggregateOutputType | null;
    _avg: Serial_batchAvgAggregateOutputType | null;
    _sum: Serial_batchSumAggregateOutputType | null;
    _min: Serial_batchMinAggregateOutputType | null;
    _max: Serial_batchMaxAggregateOutputType | null;
};
export type Serial_batchAvgAggregateOutputType = {
    quantity: number | null;
};
export type Serial_batchSumAggregateOutputType = {
    quantity: number | null;
};
export type Serial_batchMinAggregateOutputType = {
    id: string | null;
    batch_code: string | null;
    product_id: string | null;
    quantity: number | null;
    manufactured_at: Date | null;
    expires_at: Date | null;
    created_at: Date | null;
};
export type Serial_batchMaxAggregateOutputType = {
    id: string | null;
    batch_code: string | null;
    product_id: string | null;
    quantity: number | null;
    manufactured_at: Date | null;
    expires_at: Date | null;
    created_at: Date | null;
};
export type Serial_batchCountAggregateOutputType = {
    id: number;
    batch_code: number;
    product_id: number;
    quantity: number;
    manufactured_at: number;
    expires_at: number;
    created_at: number;
    _all: number;
};
export type Serial_batchAvgAggregateInputType = {
    quantity?: true;
};
export type Serial_batchSumAggregateInputType = {
    quantity?: true;
};
export type Serial_batchMinAggregateInputType = {
    id?: true;
    batch_code?: true;
    product_id?: true;
    quantity?: true;
    manufactured_at?: true;
    expires_at?: true;
    created_at?: true;
};
export type Serial_batchMaxAggregateInputType = {
    id?: true;
    batch_code?: true;
    product_id?: true;
    quantity?: true;
    manufactured_at?: true;
    expires_at?: true;
    created_at?: true;
};
export type Serial_batchCountAggregateInputType = {
    id?: true;
    batch_code?: true;
    product_id?: true;
    quantity?: true;
    manufactured_at?: true;
    expires_at?: true;
    created_at?: true;
    _all?: true;
};
export type Serial_batchAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.serial_batchWhereInput;
    orderBy?: Prisma.serial_batchOrderByWithRelationInput | Prisma.serial_batchOrderByWithRelationInput[];
    cursor?: Prisma.serial_batchWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Serial_batchCountAggregateInputType;
    _avg?: Serial_batchAvgAggregateInputType;
    _sum?: Serial_batchSumAggregateInputType;
    _min?: Serial_batchMinAggregateInputType;
    _max?: Serial_batchMaxAggregateInputType;
};
export type GetSerial_batchAggregateType<T extends Serial_batchAggregateArgs> = {
    [P in keyof T & keyof AggregateSerial_batch]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSerial_batch[P]> : Prisma.GetScalarType<T[P], AggregateSerial_batch[P]>;
};
export type serial_batchGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.serial_batchWhereInput;
    orderBy?: Prisma.serial_batchOrderByWithAggregationInput | Prisma.serial_batchOrderByWithAggregationInput[];
    by: Prisma.Serial_batchScalarFieldEnum[] | Prisma.Serial_batchScalarFieldEnum;
    having?: Prisma.serial_batchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Serial_batchCountAggregateInputType | true;
    _avg?: Serial_batchAvgAggregateInputType;
    _sum?: Serial_batchSumAggregateInputType;
    _min?: Serial_batchMinAggregateInputType;
    _max?: Serial_batchMaxAggregateInputType;
};
export type Serial_batchGroupByOutputType = {
    id: string;
    batch_code: string;
    product_id: string;
    quantity: number;
    manufactured_at: Date | null;
    expires_at: Date | null;
    created_at: Date;
    _count: Serial_batchCountAggregateOutputType | null;
    _avg: Serial_batchAvgAggregateOutputType | null;
    _sum: Serial_batchSumAggregateOutputType | null;
    _min: Serial_batchMinAggregateOutputType | null;
    _max: Serial_batchMaxAggregateOutputType | null;
};
export type GetSerial_batchGroupByPayload<T extends serial_batchGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Serial_batchGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Serial_batchGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Serial_batchGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Serial_batchGroupByOutputType[P]>;
}>>;
export type serial_batchWhereInput = {
    AND?: Prisma.serial_batchWhereInput | Prisma.serial_batchWhereInput[];
    OR?: Prisma.serial_batchWhereInput[];
    NOT?: Prisma.serial_batchWhereInput | Prisma.serial_batchWhereInput[];
    id?: Prisma.UuidFilter<"serial_batch"> | string;
    batch_code?: Prisma.StringFilter<"serial_batch"> | string;
    product_id?: Prisma.UuidFilter<"serial_batch"> | string;
    quantity?: Prisma.IntFilter<"serial_batch"> | number;
    manufactured_at?: Prisma.DateTimeNullableFilter<"serial_batch"> | Date | string | null;
    expires_at?: Prisma.DateTimeNullableFilter<"serial_batch"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"serial_batch"> | Date | string;
    product_serial?: Prisma.Product_serialListRelationFilter;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type serial_batchOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    batch_code?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    manufactured_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    expires_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    product_serial?: Prisma.product_serialOrderByRelationAggregateInput;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type serial_batchWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    batch_code?: string;
    AND?: Prisma.serial_batchWhereInput | Prisma.serial_batchWhereInput[];
    OR?: Prisma.serial_batchWhereInput[];
    NOT?: Prisma.serial_batchWhereInput | Prisma.serial_batchWhereInput[];
    product_id?: Prisma.UuidFilter<"serial_batch"> | string;
    quantity?: Prisma.IntFilter<"serial_batch"> | number;
    manufactured_at?: Prisma.DateTimeNullableFilter<"serial_batch"> | Date | string | null;
    expires_at?: Prisma.DateTimeNullableFilter<"serial_batch"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"serial_batch"> | Date | string;
    product_serial?: Prisma.Product_serialListRelationFilter;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id" | "batch_code">;
export type serial_batchOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    batch_code?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    manufactured_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    expires_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.serial_batchCountOrderByAggregateInput;
    _avg?: Prisma.serial_batchAvgOrderByAggregateInput;
    _max?: Prisma.serial_batchMaxOrderByAggregateInput;
    _min?: Prisma.serial_batchMinOrderByAggregateInput;
    _sum?: Prisma.serial_batchSumOrderByAggregateInput;
};
export type serial_batchScalarWhereWithAggregatesInput = {
    AND?: Prisma.serial_batchScalarWhereWithAggregatesInput | Prisma.serial_batchScalarWhereWithAggregatesInput[];
    OR?: Prisma.serial_batchScalarWhereWithAggregatesInput[];
    NOT?: Prisma.serial_batchScalarWhereWithAggregatesInput | Prisma.serial_batchScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"serial_batch"> | string;
    batch_code?: Prisma.StringWithAggregatesFilter<"serial_batch"> | string;
    product_id?: Prisma.UuidWithAggregatesFilter<"serial_batch"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"serial_batch"> | number;
    manufactured_at?: Prisma.DateTimeNullableWithAggregatesFilter<"serial_batch"> | Date | string | null;
    expires_at?: Prisma.DateTimeNullableWithAggregatesFilter<"serial_batch"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"serial_batch"> | Date | string;
};
export type serial_batchCreateInput = {
    id?: string;
    batch_code: string;
    quantity: number;
    manufactured_at?: Date | string | null;
    expires_at?: Date | string | null;
    created_at?: Date | string;
    product_serial?: Prisma.product_serialCreateNestedManyWithoutSerial_batchInput;
    product: Prisma.ProductCreateNestedOneWithoutSerial_batchInput;
};
export type serial_batchUncheckedCreateInput = {
    id?: string;
    batch_code: string;
    product_id: string;
    quantity: number;
    manufactured_at?: Date | string | null;
    expires_at?: Date | string | null;
    created_at?: Date | string;
    product_serial?: Prisma.product_serialUncheckedCreateNestedManyWithoutSerial_batchInput;
};
export type serial_batchUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    manufactured_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_serial?: Prisma.product_serialUpdateManyWithoutSerial_batchNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutSerial_batchNestedInput;
};
export type serial_batchUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_code?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    manufactured_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_serial?: Prisma.product_serialUncheckedUpdateManyWithoutSerial_batchNestedInput;
};
export type serial_batchCreateManyInput = {
    id?: string;
    batch_code: string;
    product_id: string;
    quantity: number;
    manufactured_at?: Date | string | null;
    expires_at?: Date | string | null;
    created_at?: Date | string;
};
export type serial_batchUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    manufactured_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type serial_batchUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_code?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    manufactured_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Serial_batchListRelationFilter = {
    every?: Prisma.serial_batchWhereInput;
    some?: Prisma.serial_batchWhereInput;
    none?: Prisma.serial_batchWhereInput;
};
export type serial_batchOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Serial_batchScalarRelationFilter = {
    is?: Prisma.serial_batchWhereInput;
    isNot?: Prisma.serial_batchWhereInput;
};
export type serial_batchCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batch_code?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    manufactured_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type serial_batchAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type serial_batchMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batch_code?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    manufactured_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type serial_batchMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batch_code?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    manufactured_at?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type serial_batchSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type serial_batchCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.serial_batchCreateWithoutProductInput, Prisma.serial_batchUncheckedCreateWithoutProductInput> | Prisma.serial_batchCreateWithoutProductInput[] | Prisma.serial_batchUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.serial_batchCreateOrConnectWithoutProductInput | Prisma.serial_batchCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.serial_batchCreateManyProductInputEnvelope;
    connect?: Prisma.serial_batchWhereUniqueInput | Prisma.serial_batchWhereUniqueInput[];
};
export type serial_batchUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.serial_batchCreateWithoutProductInput, Prisma.serial_batchUncheckedCreateWithoutProductInput> | Prisma.serial_batchCreateWithoutProductInput[] | Prisma.serial_batchUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.serial_batchCreateOrConnectWithoutProductInput | Prisma.serial_batchCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.serial_batchCreateManyProductInputEnvelope;
    connect?: Prisma.serial_batchWhereUniqueInput | Prisma.serial_batchWhereUniqueInput[];
};
export type serial_batchUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.serial_batchCreateWithoutProductInput, Prisma.serial_batchUncheckedCreateWithoutProductInput> | Prisma.serial_batchCreateWithoutProductInput[] | Prisma.serial_batchUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.serial_batchCreateOrConnectWithoutProductInput | Prisma.serial_batchCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.serial_batchUpsertWithWhereUniqueWithoutProductInput | Prisma.serial_batchUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.serial_batchCreateManyProductInputEnvelope;
    set?: Prisma.serial_batchWhereUniqueInput | Prisma.serial_batchWhereUniqueInput[];
    disconnect?: Prisma.serial_batchWhereUniqueInput | Prisma.serial_batchWhereUniqueInput[];
    delete?: Prisma.serial_batchWhereUniqueInput | Prisma.serial_batchWhereUniqueInput[];
    connect?: Prisma.serial_batchWhereUniqueInput | Prisma.serial_batchWhereUniqueInput[];
    update?: Prisma.serial_batchUpdateWithWhereUniqueWithoutProductInput | Prisma.serial_batchUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.serial_batchUpdateManyWithWhereWithoutProductInput | Prisma.serial_batchUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.serial_batchScalarWhereInput | Prisma.serial_batchScalarWhereInput[];
};
export type serial_batchUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.serial_batchCreateWithoutProductInput, Prisma.serial_batchUncheckedCreateWithoutProductInput> | Prisma.serial_batchCreateWithoutProductInput[] | Prisma.serial_batchUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.serial_batchCreateOrConnectWithoutProductInput | Prisma.serial_batchCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.serial_batchUpsertWithWhereUniqueWithoutProductInput | Prisma.serial_batchUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.serial_batchCreateManyProductInputEnvelope;
    set?: Prisma.serial_batchWhereUniqueInput | Prisma.serial_batchWhereUniqueInput[];
    disconnect?: Prisma.serial_batchWhereUniqueInput | Prisma.serial_batchWhereUniqueInput[];
    delete?: Prisma.serial_batchWhereUniqueInput | Prisma.serial_batchWhereUniqueInput[];
    connect?: Prisma.serial_batchWhereUniqueInput | Prisma.serial_batchWhereUniqueInput[];
    update?: Prisma.serial_batchUpdateWithWhereUniqueWithoutProductInput | Prisma.serial_batchUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.serial_batchUpdateManyWithWhereWithoutProductInput | Prisma.serial_batchUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.serial_batchScalarWhereInput | Prisma.serial_batchScalarWhereInput[];
};
export type serial_batchCreateNestedOneWithoutProduct_serialInput = {
    create?: Prisma.XOR<Prisma.serial_batchCreateWithoutProduct_serialInput, Prisma.serial_batchUncheckedCreateWithoutProduct_serialInput>;
    connectOrCreate?: Prisma.serial_batchCreateOrConnectWithoutProduct_serialInput;
    connect?: Prisma.serial_batchWhereUniqueInput;
};
export type serial_batchUpdateOneRequiredWithoutProduct_serialNestedInput = {
    create?: Prisma.XOR<Prisma.serial_batchCreateWithoutProduct_serialInput, Prisma.serial_batchUncheckedCreateWithoutProduct_serialInput>;
    connectOrCreate?: Prisma.serial_batchCreateOrConnectWithoutProduct_serialInput;
    upsert?: Prisma.serial_batchUpsertWithoutProduct_serialInput;
    connect?: Prisma.serial_batchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.serial_batchUpdateToOneWithWhereWithoutProduct_serialInput, Prisma.serial_batchUpdateWithoutProduct_serialInput>, Prisma.serial_batchUncheckedUpdateWithoutProduct_serialInput>;
};
export type serial_batchCreateWithoutProductInput = {
    id?: string;
    batch_code: string;
    quantity: number;
    manufactured_at?: Date | string | null;
    expires_at?: Date | string | null;
    created_at?: Date | string;
    product_serial?: Prisma.product_serialCreateNestedManyWithoutSerial_batchInput;
};
export type serial_batchUncheckedCreateWithoutProductInput = {
    id?: string;
    batch_code: string;
    quantity: number;
    manufactured_at?: Date | string | null;
    expires_at?: Date | string | null;
    created_at?: Date | string;
    product_serial?: Prisma.product_serialUncheckedCreateNestedManyWithoutSerial_batchInput;
};
export type serial_batchCreateOrConnectWithoutProductInput = {
    where: Prisma.serial_batchWhereUniqueInput;
    create: Prisma.XOR<Prisma.serial_batchCreateWithoutProductInput, Prisma.serial_batchUncheckedCreateWithoutProductInput>;
};
export type serial_batchCreateManyProductInputEnvelope = {
    data: Prisma.serial_batchCreateManyProductInput | Prisma.serial_batchCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type serial_batchUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.serial_batchWhereUniqueInput;
    update: Prisma.XOR<Prisma.serial_batchUpdateWithoutProductInput, Prisma.serial_batchUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.serial_batchCreateWithoutProductInput, Prisma.serial_batchUncheckedCreateWithoutProductInput>;
};
export type serial_batchUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.serial_batchWhereUniqueInput;
    data: Prisma.XOR<Prisma.serial_batchUpdateWithoutProductInput, Prisma.serial_batchUncheckedUpdateWithoutProductInput>;
};
export type serial_batchUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.serial_batchScalarWhereInput;
    data: Prisma.XOR<Prisma.serial_batchUpdateManyMutationInput, Prisma.serial_batchUncheckedUpdateManyWithoutProductInput>;
};
export type serial_batchScalarWhereInput = {
    AND?: Prisma.serial_batchScalarWhereInput | Prisma.serial_batchScalarWhereInput[];
    OR?: Prisma.serial_batchScalarWhereInput[];
    NOT?: Prisma.serial_batchScalarWhereInput | Prisma.serial_batchScalarWhereInput[];
    id?: Prisma.UuidFilter<"serial_batch"> | string;
    batch_code?: Prisma.StringFilter<"serial_batch"> | string;
    product_id?: Prisma.UuidFilter<"serial_batch"> | string;
    quantity?: Prisma.IntFilter<"serial_batch"> | number;
    manufactured_at?: Prisma.DateTimeNullableFilter<"serial_batch"> | Date | string | null;
    expires_at?: Prisma.DateTimeNullableFilter<"serial_batch"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"serial_batch"> | Date | string;
};
export type serial_batchCreateWithoutProduct_serialInput = {
    id?: string;
    batch_code: string;
    quantity: number;
    manufactured_at?: Date | string | null;
    expires_at?: Date | string | null;
    created_at?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutSerial_batchInput;
};
export type serial_batchUncheckedCreateWithoutProduct_serialInput = {
    id?: string;
    batch_code: string;
    product_id: string;
    quantity: number;
    manufactured_at?: Date | string | null;
    expires_at?: Date | string | null;
    created_at?: Date | string;
};
export type serial_batchCreateOrConnectWithoutProduct_serialInput = {
    where: Prisma.serial_batchWhereUniqueInput;
    create: Prisma.XOR<Prisma.serial_batchCreateWithoutProduct_serialInput, Prisma.serial_batchUncheckedCreateWithoutProduct_serialInput>;
};
export type serial_batchUpsertWithoutProduct_serialInput = {
    update: Prisma.XOR<Prisma.serial_batchUpdateWithoutProduct_serialInput, Prisma.serial_batchUncheckedUpdateWithoutProduct_serialInput>;
    create: Prisma.XOR<Prisma.serial_batchCreateWithoutProduct_serialInput, Prisma.serial_batchUncheckedCreateWithoutProduct_serialInput>;
    where?: Prisma.serial_batchWhereInput;
};
export type serial_batchUpdateToOneWithWhereWithoutProduct_serialInput = {
    where?: Prisma.serial_batchWhereInput;
    data: Prisma.XOR<Prisma.serial_batchUpdateWithoutProduct_serialInput, Prisma.serial_batchUncheckedUpdateWithoutProduct_serialInput>;
};
export type serial_batchUpdateWithoutProduct_serialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    manufactured_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutSerial_batchNestedInput;
};
export type serial_batchUncheckedUpdateWithoutProduct_serialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_code?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    manufactured_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type serial_batchCreateManyProductInput = {
    id?: string;
    batch_code: string;
    quantity: number;
    manufactured_at?: Date | string | null;
    expires_at?: Date | string | null;
    created_at?: Date | string;
};
export type serial_batchUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    manufactured_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_serial?: Prisma.product_serialUpdateManyWithoutSerial_batchNestedInput;
};
export type serial_batchUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    manufactured_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product_serial?: Prisma.product_serialUncheckedUpdateManyWithoutSerial_batchNestedInput;
};
export type serial_batchUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    batch_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    manufactured_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Serial_batchCountOutputType = {
    product_serial: number;
};
export type Serial_batchCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_serial?: boolean | Serial_batchCountOutputTypeCountProduct_serialArgs;
};
export type Serial_batchCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Serial_batchCountOutputTypeSelect<ExtArgs> | null;
};
export type Serial_batchCountOutputTypeCountProduct_serialArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_serialWhereInput;
};
export type serial_batchSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batch_code?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    manufactured_at?: boolean;
    expires_at?: boolean;
    created_at?: boolean;
    product_serial?: boolean | Prisma.serial_batch$product_serialArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Serial_batchCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serial_batch"]>;
export type serial_batchSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batch_code?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    manufactured_at?: boolean;
    expires_at?: boolean;
    created_at?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serial_batch"]>;
export type serial_batchSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batch_code?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    manufactured_at?: boolean;
    expires_at?: boolean;
    created_at?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serial_batch"]>;
export type serial_batchSelectScalar = {
    id?: boolean;
    batch_code?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    manufactured_at?: boolean;
    expires_at?: boolean;
    created_at?: boolean;
};
export type serial_batchOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "batch_code" | "product_id" | "quantity" | "manufactured_at" | "expires_at" | "created_at", ExtArgs["result"]["serial_batch"]>;
export type serial_batchInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product_serial?: boolean | Prisma.serial_batch$product_serialArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Serial_batchCountOutputTypeDefaultArgs<ExtArgs>;
};
export type serial_batchIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type serial_batchIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $serial_batchPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "serial_batch";
    objects: {
        product_serial: Prisma.$product_serialPayload<ExtArgs>[];
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        batch_code: string;
        product_id: string;
        quantity: number;
        manufactured_at: Date | null;
        expires_at: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["serial_batch"]>;
    composites: {};
};
export type serial_batchGetPayload<S extends boolean | null | undefined | serial_batchDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$serial_batchPayload, S>;
export type serial_batchCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<serial_batchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Serial_batchCountAggregateInputType | true;
};
export interface serial_batchDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['serial_batch'];
        meta: {
            name: 'serial_batch';
        };
    };
    findUnique<T extends serial_batchFindUniqueArgs>(args: Prisma.SelectSubset<T, serial_batchFindUniqueArgs<ExtArgs>>): Prisma.Prisma__serial_batchClient<runtime.Types.Result.GetResult<Prisma.$serial_batchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends serial_batchFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, serial_batchFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__serial_batchClient<runtime.Types.Result.GetResult<Prisma.$serial_batchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends serial_batchFindFirstArgs>(args?: Prisma.SelectSubset<T, serial_batchFindFirstArgs<ExtArgs>>): Prisma.Prisma__serial_batchClient<runtime.Types.Result.GetResult<Prisma.$serial_batchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends serial_batchFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, serial_batchFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__serial_batchClient<runtime.Types.Result.GetResult<Prisma.$serial_batchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends serial_batchFindManyArgs>(args?: Prisma.SelectSubset<T, serial_batchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$serial_batchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends serial_batchCreateArgs>(args: Prisma.SelectSubset<T, serial_batchCreateArgs<ExtArgs>>): Prisma.Prisma__serial_batchClient<runtime.Types.Result.GetResult<Prisma.$serial_batchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends serial_batchCreateManyArgs>(args?: Prisma.SelectSubset<T, serial_batchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends serial_batchCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, serial_batchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$serial_batchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends serial_batchDeleteArgs>(args: Prisma.SelectSubset<T, serial_batchDeleteArgs<ExtArgs>>): Prisma.Prisma__serial_batchClient<runtime.Types.Result.GetResult<Prisma.$serial_batchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends serial_batchUpdateArgs>(args: Prisma.SelectSubset<T, serial_batchUpdateArgs<ExtArgs>>): Prisma.Prisma__serial_batchClient<runtime.Types.Result.GetResult<Prisma.$serial_batchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends serial_batchDeleteManyArgs>(args?: Prisma.SelectSubset<T, serial_batchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends serial_batchUpdateManyArgs>(args: Prisma.SelectSubset<T, serial_batchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends serial_batchUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, serial_batchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$serial_batchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends serial_batchUpsertArgs>(args: Prisma.SelectSubset<T, serial_batchUpsertArgs<ExtArgs>>): Prisma.Prisma__serial_batchClient<runtime.Types.Result.GetResult<Prisma.$serial_batchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends serial_batchCountArgs>(args?: Prisma.Subset<T, serial_batchCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Serial_batchCountAggregateOutputType> : number>;
    aggregate<T extends Serial_batchAggregateArgs>(args: Prisma.Subset<T, Serial_batchAggregateArgs>): Prisma.PrismaPromise<GetSerial_batchAggregateType<T>>;
    groupBy<T extends serial_batchGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: serial_batchGroupByArgs['orderBy'];
    } : {
        orderBy?: serial_batchGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, serial_batchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSerial_batchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: serial_batchFieldRefs;
}
export interface Prisma__serial_batchClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product_serial<T extends Prisma.serial_batch$product_serialArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.serial_batch$product_serialArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_serialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface serial_batchFieldRefs {
    readonly id: Prisma.FieldRef<"serial_batch", 'String'>;
    readonly batch_code: Prisma.FieldRef<"serial_batch", 'String'>;
    readonly product_id: Prisma.FieldRef<"serial_batch", 'String'>;
    readonly quantity: Prisma.FieldRef<"serial_batch", 'Int'>;
    readonly manufactured_at: Prisma.FieldRef<"serial_batch", 'DateTime'>;
    readonly expires_at: Prisma.FieldRef<"serial_batch", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"serial_batch", 'DateTime'>;
}
export type serial_batchFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_batchSelect<ExtArgs> | null;
    omit?: Prisma.serial_batchOmit<ExtArgs> | null;
    include?: Prisma.serial_batchInclude<ExtArgs> | null;
    where: Prisma.serial_batchWhereUniqueInput;
};
export type serial_batchFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_batchSelect<ExtArgs> | null;
    omit?: Prisma.serial_batchOmit<ExtArgs> | null;
    include?: Prisma.serial_batchInclude<ExtArgs> | null;
    where: Prisma.serial_batchWhereUniqueInput;
};
export type serial_batchFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_batchSelect<ExtArgs> | null;
    omit?: Prisma.serial_batchOmit<ExtArgs> | null;
    include?: Prisma.serial_batchInclude<ExtArgs> | null;
    where?: Prisma.serial_batchWhereInput;
    orderBy?: Prisma.serial_batchOrderByWithRelationInput | Prisma.serial_batchOrderByWithRelationInput[];
    cursor?: Prisma.serial_batchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Serial_batchScalarFieldEnum | Prisma.Serial_batchScalarFieldEnum[];
};
export type serial_batchFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_batchSelect<ExtArgs> | null;
    omit?: Prisma.serial_batchOmit<ExtArgs> | null;
    include?: Prisma.serial_batchInclude<ExtArgs> | null;
    where?: Prisma.serial_batchWhereInput;
    orderBy?: Prisma.serial_batchOrderByWithRelationInput | Prisma.serial_batchOrderByWithRelationInput[];
    cursor?: Prisma.serial_batchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Serial_batchScalarFieldEnum | Prisma.Serial_batchScalarFieldEnum[];
};
export type serial_batchFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_batchSelect<ExtArgs> | null;
    omit?: Prisma.serial_batchOmit<ExtArgs> | null;
    include?: Prisma.serial_batchInclude<ExtArgs> | null;
    where?: Prisma.serial_batchWhereInput;
    orderBy?: Prisma.serial_batchOrderByWithRelationInput | Prisma.serial_batchOrderByWithRelationInput[];
    cursor?: Prisma.serial_batchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Serial_batchScalarFieldEnum | Prisma.Serial_batchScalarFieldEnum[];
};
export type serial_batchCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_batchSelect<ExtArgs> | null;
    omit?: Prisma.serial_batchOmit<ExtArgs> | null;
    include?: Prisma.serial_batchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.serial_batchCreateInput, Prisma.serial_batchUncheckedCreateInput>;
};
export type serial_batchCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.serial_batchCreateManyInput | Prisma.serial_batchCreateManyInput[];
    skipDuplicates?: boolean;
};
export type serial_batchCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_batchSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.serial_batchOmit<ExtArgs> | null;
    data: Prisma.serial_batchCreateManyInput | Prisma.serial_batchCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.serial_batchIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type serial_batchUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_batchSelect<ExtArgs> | null;
    omit?: Prisma.serial_batchOmit<ExtArgs> | null;
    include?: Prisma.serial_batchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.serial_batchUpdateInput, Prisma.serial_batchUncheckedUpdateInput>;
    where: Prisma.serial_batchWhereUniqueInput;
};
export type serial_batchUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.serial_batchUpdateManyMutationInput, Prisma.serial_batchUncheckedUpdateManyInput>;
    where?: Prisma.serial_batchWhereInput;
    limit?: number;
};
export type serial_batchUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_batchSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.serial_batchOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.serial_batchUpdateManyMutationInput, Prisma.serial_batchUncheckedUpdateManyInput>;
    where?: Prisma.serial_batchWhereInput;
    limit?: number;
    include?: Prisma.serial_batchIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type serial_batchUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_batchSelect<ExtArgs> | null;
    omit?: Prisma.serial_batchOmit<ExtArgs> | null;
    include?: Prisma.serial_batchInclude<ExtArgs> | null;
    where: Prisma.serial_batchWhereUniqueInput;
    create: Prisma.XOR<Prisma.serial_batchCreateInput, Prisma.serial_batchUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.serial_batchUpdateInput, Prisma.serial_batchUncheckedUpdateInput>;
};
export type serial_batchDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_batchSelect<ExtArgs> | null;
    omit?: Prisma.serial_batchOmit<ExtArgs> | null;
    include?: Prisma.serial_batchInclude<ExtArgs> | null;
    where: Prisma.serial_batchWhereUniqueInput;
};
export type serial_batchDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.serial_batchWhereInput;
    limit?: number;
};
export type serial_batch$product_serialArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_serialSelect<ExtArgs> | null;
    omit?: Prisma.product_serialOmit<ExtArgs> | null;
    include?: Prisma.product_serialInclude<ExtArgs> | null;
    where?: Prisma.product_serialWhereInput;
    orderBy?: Prisma.product_serialOrderByWithRelationInput | Prisma.product_serialOrderByWithRelationInput[];
    cursor?: Prisma.product_serialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_serialScalarFieldEnum | Prisma.Product_serialScalarFieldEnum[];
};
export type serial_batchDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.serial_batchSelect<ExtArgs> | null;
    omit?: Prisma.serial_batchOmit<ExtArgs> | null;
    include?: Prisma.serial_batchInclude<ExtArgs> | null;
};
