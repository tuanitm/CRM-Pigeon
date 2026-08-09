import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LoyaltyTransactionModel = runtime.Types.Result.DefaultSelection<Prisma.$LoyaltyTransactionPayload>;
export type AggregateLoyaltyTransaction = {
    _count: LoyaltyTransactionCountAggregateOutputType | null;
    _avg: LoyaltyTransactionAvgAggregateOutputType | null;
    _sum: LoyaltyTransactionSumAggregateOutputType | null;
    _min: LoyaltyTransactionMinAggregateOutputType | null;
    _max: LoyaltyTransactionMaxAggregateOutputType | null;
};
export type LoyaltyTransactionAvgAggregateOutputType = {
    points: number | null;
    balanceAfter: number | null;
};
export type LoyaltyTransactionSumAggregateOutputType = {
    points: number | null;
    balanceAfter: number | null;
};
export type LoyaltyTransactionMinAggregateOutputType = {
    id: string | null;
    loyaltyAccountId: string | null;
    customerId: string | null;
    type: string | null;
    source: string | null;
    points: number | null;
    balanceAfter: number | null;
    referenceType: string | null;
    referenceId: string | null;
    description: string | null;
    expiresAt: Date | null;
    idempotencyKey: string | null;
    createdAt: Date | null;
};
export type LoyaltyTransactionMaxAggregateOutputType = {
    id: string | null;
    loyaltyAccountId: string | null;
    customerId: string | null;
    type: string | null;
    source: string | null;
    points: number | null;
    balanceAfter: number | null;
    referenceType: string | null;
    referenceId: string | null;
    description: string | null;
    expiresAt: Date | null;
    idempotencyKey: string | null;
    createdAt: Date | null;
};
export type LoyaltyTransactionCountAggregateOutputType = {
    id: number;
    loyaltyAccountId: number;
    customerId: number;
    type: number;
    source: number;
    points: number;
    balanceAfter: number;
    referenceType: number;
    referenceId: number;
    description: number;
    expiresAt: number;
    idempotencyKey: number;
    createdAt: number;
    _all: number;
};
export type LoyaltyTransactionAvgAggregateInputType = {
    points?: true;
    balanceAfter?: true;
};
export type LoyaltyTransactionSumAggregateInputType = {
    points?: true;
    balanceAfter?: true;
};
export type LoyaltyTransactionMinAggregateInputType = {
    id?: true;
    loyaltyAccountId?: true;
    customerId?: true;
    type?: true;
    source?: true;
    points?: true;
    balanceAfter?: true;
    referenceType?: true;
    referenceId?: true;
    description?: true;
    expiresAt?: true;
    idempotencyKey?: true;
    createdAt?: true;
};
export type LoyaltyTransactionMaxAggregateInputType = {
    id?: true;
    loyaltyAccountId?: true;
    customerId?: true;
    type?: true;
    source?: true;
    points?: true;
    balanceAfter?: true;
    referenceType?: true;
    referenceId?: true;
    description?: true;
    expiresAt?: true;
    idempotencyKey?: true;
    createdAt?: true;
};
export type LoyaltyTransactionCountAggregateInputType = {
    id?: true;
    loyaltyAccountId?: true;
    customerId?: true;
    type?: true;
    source?: true;
    points?: true;
    balanceAfter?: true;
    referenceType?: true;
    referenceId?: true;
    description?: true;
    expiresAt?: true;
    idempotencyKey?: true;
    createdAt?: true;
    _all?: true;
};
export type LoyaltyTransactionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyTransactionWhereInput;
    orderBy?: Prisma.LoyaltyTransactionOrderByWithRelationInput | Prisma.LoyaltyTransactionOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyTransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LoyaltyTransactionCountAggregateInputType;
    _avg?: LoyaltyTransactionAvgAggregateInputType;
    _sum?: LoyaltyTransactionSumAggregateInputType;
    _min?: LoyaltyTransactionMinAggregateInputType;
    _max?: LoyaltyTransactionMaxAggregateInputType;
};
export type GetLoyaltyTransactionAggregateType<T extends LoyaltyTransactionAggregateArgs> = {
    [P in keyof T & keyof AggregateLoyaltyTransaction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLoyaltyTransaction[P]> : Prisma.GetScalarType<T[P], AggregateLoyaltyTransaction[P]>;
};
export type LoyaltyTransactionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyTransactionWhereInput;
    orderBy?: Prisma.LoyaltyTransactionOrderByWithAggregationInput | Prisma.LoyaltyTransactionOrderByWithAggregationInput[];
    by: Prisma.LoyaltyTransactionScalarFieldEnum[] | Prisma.LoyaltyTransactionScalarFieldEnum;
    having?: Prisma.LoyaltyTransactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoyaltyTransactionCountAggregateInputType | true;
    _avg?: LoyaltyTransactionAvgAggregateInputType;
    _sum?: LoyaltyTransactionSumAggregateInputType;
    _min?: LoyaltyTransactionMinAggregateInputType;
    _max?: LoyaltyTransactionMaxAggregateInputType;
};
export type LoyaltyTransactionGroupByOutputType = {
    id: string;
    loyaltyAccountId: string;
    customerId: string;
    type: string;
    source: string;
    points: number;
    balanceAfter: number;
    referenceType: string | null;
    referenceId: string | null;
    description: string | null;
    expiresAt: Date | null;
    idempotencyKey: string | null;
    createdAt: Date;
    _count: LoyaltyTransactionCountAggregateOutputType | null;
    _avg: LoyaltyTransactionAvgAggregateOutputType | null;
    _sum: LoyaltyTransactionSumAggregateOutputType | null;
    _min: LoyaltyTransactionMinAggregateOutputType | null;
    _max: LoyaltyTransactionMaxAggregateOutputType | null;
};
export type GetLoyaltyTransactionGroupByPayload<T extends LoyaltyTransactionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LoyaltyTransactionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LoyaltyTransactionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LoyaltyTransactionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LoyaltyTransactionGroupByOutputType[P]>;
}>>;
export type LoyaltyTransactionWhereInput = {
    AND?: Prisma.LoyaltyTransactionWhereInput | Prisma.LoyaltyTransactionWhereInput[];
    OR?: Prisma.LoyaltyTransactionWhereInput[];
    NOT?: Prisma.LoyaltyTransactionWhereInput | Prisma.LoyaltyTransactionWhereInput[];
    id?: Prisma.UuidFilter<"LoyaltyTransaction"> | string;
    loyaltyAccountId?: Prisma.UuidFilter<"LoyaltyTransaction"> | string;
    customerId?: Prisma.UuidFilter<"LoyaltyTransaction"> | string;
    type?: Prisma.StringFilter<"LoyaltyTransaction"> | string;
    source?: Prisma.StringFilter<"LoyaltyTransaction"> | string;
    points?: Prisma.IntFilter<"LoyaltyTransaction"> | number;
    balanceAfter?: Prisma.IntFilter<"LoyaltyTransaction"> | number;
    referenceType?: Prisma.StringNullableFilter<"LoyaltyTransaction"> | string | null;
    referenceId?: Prisma.UuidNullableFilter<"LoyaltyTransaction"> | string | null;
    description?: Prisma.StringNullableFilter<"LoyaltyTransaction"> | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"LoyaltyTransaction"> | Date | string | null;
    idempotencyKey?: Prisma.StringNullableFilter<"LoyaltyTransaction"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyTransaction"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    loyaltyAccount?: Prisma.XOR<Prisma.LoyaltyAccountScalarRelationFilter, Prisma.LoyaltyAccountWhereInput>;
};
export type LoyaltyTransactionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    loyaltyAccountId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    referenceType?: Prisma.SortOrderInput | Prisma.SortOrder;
    referenceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    loyaltyAccount?: Prisma.LoyaltyAccountOrderByWithRelationInput;
};
export type LoyaltyTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    idempotencyKey?: string;
    AND?: Prisma.LoyaltyTransactionWhereInput | Prisma.LoyaltyTransactionWhereInput[];
    OR?: Prisma.LoyaltyTransactionWhereInput[];
    NOT?: Prisma.LoyaltyTransactionWhereInput | Prisma.LoyaltyTransactionWhereInput[];
    loyaltyAccountId?: Prisma.UuidFilter<"LoyaltyTransaction"> | string;
    customerId?: Prisma.UuidFilter<"LoyaltyTransaction"> | string;
    type?: Prisma.StringFilter<"LoyaltyTransaction"> | string;
    source?: Prisma.StringFilter<"LoyaltyTransaction"> | string;
    points?: Prisma.IntFilter<"LoyaltyTransaction"> | number;
    balanceAfter?: Prisma.IntFilter<"LoyaltyTransaction"> | number;
    referenceType?: Prisma.StringNullableFilter<"LoyaltyTransaction"> | string | null;
    referenceId?: Prisma.UuidNullableFilter<"LoyaltyTransaction"> | string | null;
    description?: Prisma.StringNullableFilter<"LoyaltyTransaction"> | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"LoyaltyTransaction"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyTransaction"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    loyaltyAccount?: Prisma.XOR<Prisma.LoyaltyAccountScalarRelationFilter, Prisma.LoyaltyAccountWhereInput>;
}, "id" | "idempotencyKey">;
export type LoyaltyTransactionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    loyaltyAccountId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    referenceType?: Prisma.SortOrderInput | Prisma.SortOrder;
    referenceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LoyaltyTransactionCountOrderByAggregateInput;
    _avg?: Prisma.LoyaltyTransactionAvgOrderByAggregateInput;
    _max?: Prisma.LoyaltyTransactionMaxOrderByAggregateInput;
    _min?: Prisma.LoyaltyTransactionMinOrderByAggregateInput;
    _sum?: Prisma.LoyaltyTransactionSumOrderByAggregateInput;
};
export type LoyaltyTransactionScalarWhereWithAggregatesInput = {
    AND?: Prisma.LoyaltyTransactionScalarWhereWithAggregatesInput | Prisma.LoyaltyTransactionScalarWhereWithAggregatesInput[];
    OR?: Prisma.LoyaltyTransactionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LoyaltyTransactionScalarWhereWithAggregatesInput | Prisma.LoyaltyTransactionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"LoyaltyTransaction"> | string;
    loyaltyAccountId?: Prisma.UuidWithAggregatesFilter<"LoyaltyTransaction"> | string;
    customerId?: Prisma.UuidWithAggregatesFilter<"LoyaltyTransaction"> | string;
    type?: Prisma.StringWithAggregatesFilter<"LoyaltyTransaction"> | string;
    source?: Prisma.StringWithAggregatesFilter<"LoyaltyTransaction"> | string;
    points?: Prisma.IntWithAggregatesFilter<"LoyaltyTransaction"> | number;
    balanceAfter?: Prisma.IntWithAggregatesFilter<"LoyaltyTransaction"> | number;
    referenceType?: Prisma.StringNullableWithAggregatesFilter<"LoyaltyTransaction"> | string | null;
    referenceId?: Prisma.UuidNullableWithAggregatesFilter<"LoyaltyTransaction"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"LoyaltyTransaction"> | string | null;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LoyaltyTransaction"> | Date | string | null;
    idempotencyKey?: Prisma.StringNullableWithAggregatesFilter<"LoyaltyTransaction"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyTransaction"> | Date | string;
};
export type LoyaltyTransactionCreateInput = {
    id?: string;
    type: string;
    source: string;
    points: number;
    balanceAfter: number;
    referenceType?: string | null;
    referenceId?: string | null;
    description?: string | null;
    expiresAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutLoyalty_transactionInput;
    loyaltyAccount: Prisma.LoyaltyAccountCreateNestedOneWithoutTransactionsInput;
};
export type LoyaltyTransactionUncheckedCreateInput = {
    id?: string;
    loyaltyAccountId: string;
    customerId: string;
    type: string;
    source: string;
    points: number;
    balanceAfter: number;
    referenceType?: string | null;
    referenceId?: string | null;
    description?: string | null;
    expiresAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
};
export type LoyaltyTransactionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutLoyalty_transactionNestedInput;
    loyaltyAccount?: Prisma.LoyaltyAccountUpdateOneRequiredWithoutTransactionsNestedInput;
};
export type LoyaltyTransactionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    loyaltyAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyTransactionCreateManyInput = {
    id?: string;
    loyaltyAccountId: string;
    customerId: string;
    type: string;
    source: string;
    points: number;
    balanceAfter: number;
    referenceType?: string | null;
    referenceId?: string | null;
    description?: string | null;
    expiresAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
};
export type LoyaltyTransactionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyTransactionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    loyaltyAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyTransactionListRelationFilter = {
    every?: Prisma.LoyaltyTransactionWhereInput;
    some?: Prisma.LoyaltyTransactionWhereInput;
    none?: Prisma.LoyaltyTransactionWhereInput;
};
export type LoyaltyTransactionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LoyaltyTransactionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    loyaltyAccountId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    referenceType?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LoyaltyTransactionAvgOrderByAggregateInput = {
    points?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
};
export type LoyaltyTransactionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    loyaltyAccountId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    referenceType?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LoyaltyTransactionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    loyaltyAccountId?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
    referenceType?: Prisma.SortOrder;
    referenceId?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    idempotencyKey?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LoyaltyTransactionSumOrderByAggregateInput = {
    points?: Prisma.SortOrder;
    balanceAfter?: Prisma.SortOrder;
};
export type LoyaltyTransactionCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.LoyaltyTransactionCreateWithoutCustomerInput, Prisma.LoyaltyTransactionUncheckedCreateWithoutCustomerInput> | Prisma.LoyaltyTransactionCreateWithoutCustomerInput[] | Prisma.LoyaltyTransactionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.LoyaltyTransactionCreateOrConnectWithoutCustomerInput | Prisma.LoyaltyTransactionCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.LoyaltyTransactionCreateManyCustomerInputEnvelope;
    connect?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
};
export type LoyaltyTransactionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.LoyaltyTransactionCreateWithoutCustomerInput, Prisma.LoyaltyTransactionUncheckedCreateWithoutCustomerInput> | Prisma.LoyaltyTransactionCreateWithoutCustomerInput[] | Prisma.LoyaltyTransactionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.LoyaltyTransactionCreateOrConnectWithoutCustomerInput | Prisma.LoyaltyTransactionCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.LoyaltyTransactionCreateManyCustomerInputEnvelope;
    connect?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
};
export type LoyaltyTransactionUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyTransactionCreateWithoutCustomerInput, Prisma.LoyaltyTransactionUncheckedCreateWithoutCustomerInput> | Prisma.LoyaltyTransactionCreateWithoutCustomerInput[] | Prisma.LoyaltyTransactionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.LoyaltyTransactionCreateOrConnectWithoutCustomerInput | Prisma.LoyaltyTransactionCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.LoyaltyTransactionUpsertWithWhereUniqueWithoutCustomerInput | Prisma.LoyaltyTransactionUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.LoyaltyTransactionCreateManyCustomerInputEnvelope;
    set?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    disconnect?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    delete?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    connect?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    update?: Prisma.LoyaltyTransactionUpdateWithWhereUniqueWithoutCustomerInput | Prisma.LoyaltyTransactionUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.LoyaltyTransactionUpdateManyWithWhereWithoutCustomerInput | Prisma.LoyaltyTransactionUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.LoyaltyTransactionScalarWhereInput | Prisma.LoyaltyTransactionScalarWhereInput[];
};
export type LoyaltyTransactionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyTransactionCreateWithoutCustomerInput, Prisma.LoyaltyTransactionUncheckedCreateWithoutCustomerInput> | Prisma.LoyaltyTransactionCreateWithoutCustomerInput[] | Prisma.LoyaltyTransactionUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.LoyaltyTransactionCreateOrConnectWithoutCustomerInput | Prisma.LoyaltyTransactionCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.LoyaltyTransactionUpsertWithWhereUniqueWithoutCustomerInput | Prisma.LoyaltyTransactionUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.LoyaltyTransactionCreateManyCustomerInputEnvelope;
    set?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    disconnect?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    delete?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    connect?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    update?: Prisma.LoyaltyTransactionUpdateWithWhereUniqueWithoutCustomerInput | Prisma.LoyaltyTransactionUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.LoyaltyTransactionUpdateManyWithWhereWithoutCustomerInput | Prisma.LoyaltyTransactionUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.LoyaltyTransactionScalarWhereInput | Prisma.LoyaltyTransactionScalarWhereInput[];
};
export type LoyaltyTransactionCreateNestedManyWithoutLoyaltyAccountInput = {
    create?: Prisma.XOR<Prisma.LoyaltyTransactionCreateWithoutLoyaltyAccountInput, Prisma.LoyaltyTransactionUncheckedCreateWithoutLoyaltyAccountInput> | Prisma.LoyaltyTransactionCreateWithoutLoyaltyAccountInput[] | Prisma.LoyaltyTransactionUncheckedCreateWithoutLoyaltyAccountInput[];
    connectOrCreate?: Prisma.LoyaltyTransactionCreateOrConnectWithoutLoyaltyAccountInput | Prisma.LoyaltyTransactionCreateOrConnectWithoutLoyaltyAccountInput[];
    createMany?: Prisma.LoyaltyTransactionCreateManyLoyaltyAccountInputEnvelope;
    connect?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
};
export type LoyaltyTransactionUncheckedCreateNestedManyWithoutLoyaltyAccountInput = {
    create?: Prisma.XOR<Prisma.LoyaltyTransactionCreateWithoutLoyaltyAccountInput, Prisma.LoyaltyTransactionUncheckedCreateWithoutLoyaltyAccountInput> | Prisma.LoyaltyTransactionCreateWithoutLoyaltyAccountInput[] | Prisma.LoyaltyTransactionUncheckedCreateWithoutLoyaltyAccountInput[];
    connectOrCreate?: Prisma.LoyaltyTransactionCreateOrConnectWithoutLoyaltyAccountInput | Prisma.LoyaltyTransactionCreateOrConnectWithoutLoyaltyAccountInput[];
    createMany?: Prisma.LoyaltyTransactionCreateManyLoyaltyAccountInputEnvelope;
    connect?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
};
export type LoyaltyTransactionUpdateManyWithoutLoyaltyAccountNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyTransactionCreateWithoutLoyaltyAccountInput, Prisma.LoyaltyTransactionUncheckedCreateWithoutLoyaltyAccountInput> | Prisma.LoyaltyTransactionCreateWithoutLoyaltyAccountInput[] | Prisma.LoyaltyTransactionUncheckedCreateWithoutLoyaltyAccountInput[];
    connectOrCreate?: Prisma.LoyaltyTransactionCreateOrConnectWithoutLoyaltyAccountInput | Prisma.LoyaltyTransactionCreateOrConnectWithoutLoyaltyAccountInput[];
    upsert?: Prisma.LoyaltyTransactionUpsertWithWhereUniqueWithoutLoyaltyAccountInput | Prisma.LoyaltyTransactionUpsertWithWhereUniqueWithoutLoyaltyAccountInput[];
    createMany?: Prisma.LoyaltyTransactionCreateManyLoyaltyAccountInputEnvelope;
    set?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    disconnect?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    delete?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    connect?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    update?: Prisma.LoyaltyTransactionUpdateWithWhereUniqueWithoutLoyaltyAccountInput | Prisma.LoyaltyTransactionUpdateWithWhereUniqueWithoutLoyaltyAccountInput[];
    updateMany?: Prisma.LoyaltyTransactionUpdateManyWithWhereWithoutLoyaltyAccountInput | Prisma.LoyaltyTransactionUpdateManyWithWhereWithoutLoyaltyAccountInput[];
    deleteMany?: Prisma.LoyaltyTransactionScalarWhereInput | Prisma.LoyaltyTransactionScalarWhereInput[];
};
export type LoyaltyTransactionUncheckedUpdateManyWithoutLoyaltyAccountNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyTransactionCreateWithoutLoyaltyAccountInput, Prisma.LoyaltyTransactionUncheckedCreateWithoutLoyaltyAccountInput> | Prisma.LoyaltyTransactionCreateWithoutLoyaltyAccountInput[] | Prisma.LoyaltyTransactionUncheckedCreateWithoutLoyaltyAccountInput[];
    connectOrCreate?: Prisma.LoyaltyTransactionCreateOrConnectWithoutLoyaltyAccountInput | Prisma.LoyaltyTransactionCreateOrConnectWithoutLoyaltyAccountInput[];
    upsert?: Prisma.LoyaltyTransactionUpsertWithWhereUniqueWithoutLoyaltyAccountInput | Prisma.LoyaltyTransactionUpsertWithWhereUniqueWithoutLoyaltyAccountInput[];
    createMany?: Prisma.LoyaltyTransactionCreateManyLoyaltyAccountInputEnvelope;
    set?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    disconnect?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    delete?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    connect?: Prisma.LoyaltyTransactionWhereUniqueInput | Prisma.LoyaltyTransactionWhereUniqueInput[];
    update?: Prisma.LoyaltyTransactionUpdateWithWhereUniqueWithoutLoyaltyAccountInput | Prisma.LoyaltyTransactionUpdateWithWhereUniqueWithoutLoyaltyAccountInput[];
    updateMany?: Prisma.LoyaltyTransactionUpdateManyWithWhereWithoutLoyaltyAccountInput | Prisma.LoyaltyTransactionUpdateManyWithWhereWithoutLoyaltyAccountInput[];
    deleteMany?: Prisma.LoyaltyTransactionScalarWhereInput | Prisma.LoyaltyTransactionScalarWhereInput[];
};
export type LoyaltyTransactionCreateWithoutCustomerInput = {
    id?: string;
    type: string;
    source: string;
    points: number;
    balanceAfter: number;
    referenceType?: string | null;
    referenceId?: string | null;
    description?: string | null;
    expiresAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    loyaltyAccount: Prisma.LoyaltyAccountCreateNestedOneWithoutTransactionsInput;
};
export type LoyaltyTransactionUncheckedCreateWithoutCustomerInput = {
    id?: string;
    loyaltyAccountId: string;
    type: string;
    source: string;
    points: number;
    balanceAfter: number;
    referenceType?: string | null;
    referenceId?: string | null;
    description?: string | null;
    expiresAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
};
export type LoyaltyTransactionCreateOrConnectWithoutCustomerInput = {
    where: Prisma.LoyaltyTransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyTransactionCreateWithoutCustomerInput, Prisma.LoyaltyTransactionUncheckedCreateWithoutCustomerInput>;
};
export type LoyaltyTransactionCreateManyCustomerInputEnvelope = {
    data: Prisma.LoyaltyTransactionCreateManyCustomerInput | Prisma.LoyaltyTransactionCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type LoyaltyTransactionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.LoyaltyTransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.LoyaltyTransactionUpdateWithoutCustomerInput, Prisma.LoyaltyTransactionUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.LoyaltyTransactionCreateWithoutCustomerInput, Prisma.LoyaltyTransactionUncheckedCreateWithoutCustomerInput>;
};
export type LoyaltyTransactionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.LoyaltyTransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.LoyaltyTransactionUpdateWithoutCustomerInput, Prisma.LoyaltyTransactionUncheckedUpdateWithoutCustomerInput>;
};
export type LoyaltyTransactionUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.LoyaltyTransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.LoyaltyTransactionUpdateManyMutationInput, Prisma.LoyaltyTransactionUncheckedUpdateManyWithoutCustomerInput>;
};
export type LoyaltyTransactionScalarWhereInput = {
    AND?: Prisma.LoyaltyTransactionScalarWhereInput | Prisma.LoyaltyTransactionScalarWhereInput[];
    OR?: Prisma.LoyaltyTransactionScalarWhereInput[];
    NOT?: Prisma.LoyaltyTransactionScalarWhereInput | Prisma.LoyaltyTransactionScalarWhereInput[];
    id?: Prisma.UuidFilter<"LoyaltyTransaction"> | string;
    loyaltyAccountId?: Prisma.UuidFilter<"LoyaltyTransaction"> | string;
    customerId?: Prisma.UuidFilter<"LoyaltyTransaction"> | string;
    type?: Prisma.StringFilter<"LoyaltyTransaction"> | string;
    source?: Prisma.StringFilter<"LoyaltyTransaction"> | string;
    points?: Prisma.IntFilter<"LoyaltyTransaction"> | number;
    balanceAfter?: Prisma.IntFilter<"LoyaltyTransaction"> | number;
    referenceType?: Prisma.StringNullableFilter<"LoyaltyTransaction"> | string | null;
    referenceId?: Prisma.UuidNullableFilter<"LoyaltyTransaction"> | string | null;
    description?: Prisma.StringNullableFilter<"LoyaltyTransaction"> | string | null;
    expiresAt?: Prisma.DateTimeNullableFilter<"LoyaltyTransaction"> | Date | string | null;
    idempotencyKey?: Prisma.StringNullableFilter<"LoyaltyTransaction"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyTransaction"> | Date | string;
};
export type LoyaltyTransactionCreateWithoutLoyaltyAccountInput = {
    id?: string;
    type: string;
    source: string;
    points: number;
    balanceAfter: number;
    referenceType?: string | null;
    referenceId?: string | null;
    description?: string | null;
    expiresAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutLoyalty_transactionInput;
};
export type LoyaltyTransactionUncheckedCreateWithoutLoyaltyAccountInput = {
    id?: string;
    customerId: string;
    type: string;
    source: string;
    points: number;
    balanceAfter: number;
    referenceType?: string | null;
    referenceId?: string | null;
    description?: string | null;
    expiresAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
};
export type LoyaltyTransactionCreateOrConnectWithoutLoyaltyAccountInput = {
    where: Prisma.LoyaltyTransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyTransactionCreateWithoutLoyaltyAccountInput, Prisma.LoyaltyTransactionUncheckedCreateWithoutLoyaltyAccountInput>;
};
export type LoyaltyTransactionCreateManyLoyaltyAccountInputEnvelope = {
    data: Prisma.LoyaltyTransactionCreateManyLoyaltyAccountInput | Prisma.LoyaltyTransactionCreateManyLoyaltyAccountInput[];
    skipDuplicates?: boolean;
};
export type LoyaltyTransactionUpsertWithWhereUniqueWithoutLoyaltyAccountInput = {
    where: Prisma.LoyaltyTransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.LoyaltyTransactionUpdateWithoutLoyaltyAccountInput, Prisma.LoyaltyTransactionUncheckedUpdateWithoutLoyaltyAccountInput>;
    create: Prisma.XOR<Prisma.LoyaltyTransactionCreateWithoutLoyaltyAccountInput, Prisma.LoyaltyTransactionUncheckedCreateWithoutLoyaltyAccountInput>;
};
export type LoyaltyTransactionUpdateWithWhereUniqueWithoutLoyaltyAccountInput = {
    where: Prisma.LoyaltyTransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.LoyaltyTransactionUpdateWithoutLoyaltyAccountInput, Prisma.LoyaltyTransactionUncheckedUpdateWithoutLoyaltyAccountInput>;
};
export type LoyaltyTransactionUpdateManyWithWhereWithoutLoyaltyAccountInput = {
    where: Prisma.LoyaltyTransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.LoyaltyTransactionUpdateManyMutationInput, Prisma.LoyaltyTransactionUncheckedUpdateManyWithoutLoyaltyAccountInput>;
};
export type LoyaltyTransactionCreateManyCustomerInput = {
    id?: string;
    loyaltyAccountId: string;
    type: string;
    source: string;
    points: number;
    balanceAfter: number;
    referenceType?: string | null;
    referenceId?: string | null;
    description?: string | null;
    expiresAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
};
export type LoyaltyTransactionUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loyaltyAccount?: Prisma.LoyaltyAccountUpdateOneRequiredWithoutTransactionsNestedInput;
};
export type LoyaltyTransactionUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    loyaltyAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyTransactionUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    loyaltyAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyTransactionCreateManyLoyaltyAccountInput = {
    id?: string;
    customerId: string;
    type: string;
    source: string;
    points: number;
    balanceAfter: number;
    referenceType?: string | null;
    referenceId?: string | null;
    description?: string | null;
    expiresAt?: Date | string | null;
    idempotencyKey?: string | null;
    createdAt?: Date | string;
};
export type LoyaltyTransactionUpdateWithoutLoyaltyAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutLoyalty_transactionNestedInput;
};
export type LoyaltyTransactionUncheckedUpdateWithoutLoyaltyAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyTransactionUncheckedUpdateManyWithoutLoyaltyAccountInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    balanceAfter?: Prisma.IntFieldUpdateOperationsInput | number;
    referenceType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referenceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    idempotencyKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyTransactionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    loyaltyAccountId?: boolean;
    customerId?: boolean;
    type?: boolean;
    source?: boolean;
    points?: boolean;
    balanceAfter?: boolean;
    referenceType?: boolean;
    referenceId?: boolean;
    description?: boolean;
    expiresAt?: boolean;
    idempotencyKey?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    loyaltyAccount?: boolean | Prisma.LoyaltyAccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["loyaltyTransaction"]>;
export type LoyaltyTransactionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    loyaltyAccountId?: boolean;
    customerId?: boolean;
    type?: boolean;
    source?: boolean;
    points?: boolean;
    balanceAfter?: boolean;
    referenceType?: boolean;
    referenceId?: boolean;
    description?: boolean;
    expiresAt?: boolean;
    idempotencyKey?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    loyaltyAccount?: boolean | Prisma.LoyaltyAccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["loyaltyTransaction"]>;
export type LoyaltyTransactionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    loyaltyAccountId?: boolean;
    customerId?: boolean;
    type?: boolean;
    source?: boolean;
    points?: boolean;
    balanceAfter?: boolean;
    referenceType?: boolean;
    referenceId?: boolean;
    description?: boolean;
    expiresAt?: boolean;
    idempotencyKey?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    loyaltyAccount?: boolean | Prisma.LoyaltyAccountDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["loyaltyTransaction"]>;
export type LoyaltyTransactionSelectScalar = {
    id?: boolean;
    loyaltyAccountId?: boolean;
    customerId?: boolean;
    type?: boolean;
    source?: boolean;
    points?: boolean;
    balanceAfter?: boolean;
    referenceType?: boolean;
    referenceId?: boolean;
    description?: boolean;
    expiresAt?: boolean;
    idempotencyKey?: boolean;
    createdAt?: boolean;
};
export type LoyaltyTransactionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "loyaltyAccountId" | "customerId" | "type" | "source" | "points" | "balanceAfter" | "referenceType" | "referenceId" | "description" | "expiresAt" | "idempotencyKey" | "createdAt", ExtArgs["result"]["loyaltyTransaction"]>;
export type LoyaltyTransactionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    loyaltyAccount?: boolean | Prisma.LoyaltyAccountDefaultArgs<ExtArgs>;
};
export type LoyaltyTransactionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    loyaltyAccount?: boolean | Prisma.LoyaltyAccountDefaultArgs<ExtArgs>;
};
export type LoyaltyTransactionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    loyaltyAccount?: boolean | Prisma.LoyaltyAccountDefaultArgs<ExtArgs>;
};
export type $LoyaltyTransactionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LoyaltyTransaction";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        loyaltyAccount: Prisma.$LoyaltyAccountPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        loyaltyAccountId: string;
        customerId: string;
        type: string;
        source: string;
        points: number;
        balanceAfter: number;
        referenceType: string | null;
        referenceId: string | null;
        description: string | null;
        expiresAt: Date | null;
        idempotencyKey: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["loyaltyTransaction"]>;
    composites: {};
};
export type LoyaltyTransactionGetPayload<S extends boolean | null | undefined | LoyaltyTransactionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LoyaltyTransactionPayload, S>;
export type LoyaltyTransactionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LoyaltyTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LoyaltyTransactionCountAggregateInputType | true;
};
export interface LoyaltyTransactionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LoyaltyTransaction'];
        meta: {
            name: 'LoyaltyTransaction';
        };
    };
    findUnique<T extends LoyaltyTransactionFindUniqueArgs>(args: Prisma.SelectSubset<T, LoyaltyTransactionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTransactionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LoyaltyTransactionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LoyaltyTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTransactionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LoyaltyTransactionFindFirstArgs>(args?: Prisma.SelectSubset<T, LoyaltyTransactionFindFirstArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTransactionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LoyaltyTransactionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LoyaltyTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTransactionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LoyaltyTransactionFindManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LoyaltyTransactionCreateArgs>(args: Prisma.SelectSubset<T, LoyaltyTransactionCreateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTransactionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LoyaltyTransactionCreateManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LoyaltyTransactionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LoyaltyTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LoyaltyTransactionDeleteArgs>(args: Prisma.SelectSubset<T, LoyaltyTransactionDeleteArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTransactionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LoyaltyTransactionUpdateArgs>(args: Prisma.SelectSubset<T, LoyaltyTransactionUpdateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTransactionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LoyaltyTransactionDeleteManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LoyaltyTransactionUpdateManyArgs>(args: Prisma.SelectSubset<T, LoyaltyTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LoyaltyTransactionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LoyaltyTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LoyaltyTransactionUpsertArgs>(args: Prisma.SelectSubset<T, LoyaltyTransactionUpsertArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTransactionClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LoyaltyTransactionCountArgs>(args?: Prisma.Subset<T, LoyaltyTransactionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LoyaltyTransactionCountAggregateOutputType> : number>;
    aggregate<T extends LoyaltyTransactionAggregateArgs>(args: Prisma.Subset<T, LoyaltyTransactionAggregateArgs>): Prisma.PrismaPromise<GetLoyaltyTransactionAggregateType<T>>;
    groupBy<T extends LoyaltyTransactionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LoyaltyTransactionGroupByArgs['orderBy'];
    } : {
        orderBy?: LoyaltyTransactionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LoyaltyTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoyaltyTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LoyaltyTransactionFieldRefs;
}
export interface Prisma__LoyaltyTransactionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    loyaltyAccount<T extends Prisma.LoyaltyAccountDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LoyaltyAccountDefaultArgs<ExtArgs>>): Prisma.Prisma__LoyaltyAccountClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LoyaltyTransactionFieldRefs {
    readonly id: Prisma.FieldRef<"LoyaltyTransaction", 'String'>;
    readonly loyaltyAccountId: Prisma.FieldRef<"LoyaltyTransaction", 'String'>;
    readonly customerId: Prisma.FieldRef<"LoyaltyTransaction", 'String'>;
    readonly type: Prisma.FieldRef<"LoyaltyTransaction", 'String'>;
    readonly source: Prisma.FieldRef<"LoyaltyTransaction", 'String'>;
    readonly points: Prisma.FieldRef<"LoyaltyTransaction", 'Int'>;
    readonly balanceAfter: Prisma.FieldRef<"LoyaltyTransaction", 'Int'>;
    readonly referenceType: Prisma.FieldRef<"LoyaltyTransaction", 'String'>;
    readonly referenceId: Prisma.FieldRef<"LoyaltyTransaction", 'String'>;
    readonly description: Prisma.FieldRef<"LoyaltyTransaction", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"LoyaltyTransaction", 'DateTime'>;
    readonly idempotencyKey: Prisma.FieldRef<"LoyaltyTransaction", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LoyaltyTransaction", 'DateTime'>;
}
export type LoyaltyTransactionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTransactionSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTransactionOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTransactionInclude<ExtArgs> | null;
    where: Prisma.LoyaltyTransactionWhereUniqueInput;
};
export type LoyaltyTransactionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTransactionSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTransactionOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTransactionInclude<ExtArgs> | null;
    where: Prisma.LoyaltyTransactionWhereUniqueInput;
};
export type LoyaltyTransactionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTransactionSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTransactionOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTransactionInclude<ExtArgs> | null;
    where?: Prisma.LoyaltyTransactionWhereInput;
    orderBy?: Prisma.LoyaltyTransactionOrderByWithRelationInput | Prisma.LoyaltyTransactionOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyTransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoyaltyTransactionScalarFieldEnum | Prisma.LoyaltyTransactionScalarFieldEnum[];
};
export type LoyaltyTransactionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTransactionSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTransactionOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTransactionInclude<ExtArgs> | null;
    where?: Prisma.LoyaltyTransactionWhereInput;
    orderBy?: Prisma.LoyaltyTransactionOrderByWithRelationInput | Prisma.LoyaltyTransactionOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyTransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoyaltyTransactionScalarFieldEnum | Prisma.LoyaltyTransactionScalarFieldEnum[];
};
export type LoyaltyTransactionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTransactionSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTransactionOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTransactionInclude<ExtArgs> | null;
    where?: Prisma.LoyaltyTransactionWhereInput;
    orderBy?: Prisma.LoyaltyTransactionOrderByWithRelationInput | Prisma.LoyaltyTransactionOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyTransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoyaltyTransactionScalarFieldEnum | Prisma.LoyaltyTransactionScalarFieldEnum[];
};
export type LoyaltyTransactionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTransactionSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTransactionOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTransactionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyTransactionCreateInput, Prisma.LoyaltyTransactionUncheckedCreateInput>;
};
export type LoyaltyTransactionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LoyaltyTransactionCreateManyInput | Prisma.LoyaltyTransactionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LoyaltyTransactionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTransactionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LoyaltyTransactionOmit<ExtArgs> | null;
    data: Prisma.LoyaltyTransactionCreateManyInput | Prisma.LoyaltyTransactionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LoyaltyTransactionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LoyaltyTransactionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTransactionSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTransactionOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTransactionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyTransactionUpdateInput, Prisma.LoyaltyTransactionUncheckedUpdateInput>;
    where: Prisma.LoyaltyTransactionWhereUniqueInput;
};
export type LoyaltyTransactionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LoyaltyTransactionUpdateManyMutationInput, Prisma.LoyaltyTransactionUncheckedUpdateManyInput>;
    where?: Prisma.LoyaltyTransactionWhereInput;
    limit?: number;
};
export type LoyaltyTransactionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTransactionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LoyaltyTransactionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyTransactionUpdateManyMutationInput, Prisma.LoyaltyTransactionUncheckedUpdateManyInput>;
    where?: Prisma.LoyaltyTransactionWhereInput;
    limit?: number;
    include?: Prisma.LoyaltyTransactionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LoyaltyTransactionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTransactionSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTransactionOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTransactionInclude<ExtArgs> | null;
    where: Prisma.LoyaltyTransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyTransactionCreateInput, Prisma.LoyaltyTransactionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LoyaltyTransactionUpdateInput, Prisma.LoyaltyTransactionUncheckedUpdateInput>;
};
export type LoyaltyTransactionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTransactionSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTransactionOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTransactionInclude<ExtArgs> | null;
    where: Prisma.LoyaltyTransactionWhereUniqueInput;
};
export type LoyaltyTransactionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyTransactionWhereInput;
    limit?: number;
};
export type LoyaltyTransactionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTransactionSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTransactionOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTransactionInclude<ExtArgs> | null;
};
