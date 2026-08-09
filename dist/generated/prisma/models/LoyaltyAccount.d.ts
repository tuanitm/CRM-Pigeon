import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LoyaltyAccountModel = runtime.Types.Result.DefaultSelection<Prisma.$LoyaltyAccountPayload>;
export type AggregateLoyaltyAccount = {
    _count: LoyaltyAccountCountAggregateOutputType | null;
    _avg: LoyaltyAccountAvgAggregateOutputType | null;
    _sum: LoyaltyAccountSumAggregateOutputType | null;
    _min: LoyaltyAccountMinAggregateOutputType | null;
    _max: LoyaltyAccountMaxAggregateOutputType | null;
};
export type LoyaltyAccountAvgAggregateOutputType = {
    pointsBalance: number | null;
    pointsLifetime: number | null;
    pointsRedeemed: number | null;
    pointsExpired: number | null;
    netSpend: runtime.Decimal | null;
    distinctOrderMonths: number | null;
};
export type LoyaltyAccountSumAggregateOutputType = {
    pointsBalance: number | null;
    pointsLifetime: number | null;
    pointsRedeemed: number | null;
    pointsExpired: number | null;
    netSpend: runtime.Decimal | null;
    distinctOrderMonths: number | null;
};
export type LoyaltyAccountMinAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    tierId: string | null;
    pointsBalance: number | null;
    pointsLifetime: number | null;
    pointsRedeemed: number | null;
    pointsExpired: number | null;
    netSpend: runtime.Decimal | null;
    distinctOrderMonths: number | null;
    tierEvaluatedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LoyaltyAccountMaxAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    tierId: string | null;
    pointsBalance: number | null;
    pointsLifetime: number | null;
    pointsRedeemed: number | null;
    pointsExpired: number | null;
    netSpend: runtime.Decimal | null;
    distinctOrderMonths: number | null;
    tierEvaluatedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LoyaltyAccountCountAggregateOutputType = {
    id: number;
    customerId: number;
    tierId: number;
    pointsBalance: number;
    pointsLifetime: number;
    pointsRedeemed: number;
    pointsExpired: number;
    netSpend: number;
    distinctOrderMonths: number;
    tierEvaluatedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LoyaltyAccountAvgAggregateInputType = {
    pointsBalance?: true;
    pointsLifetime?: true;
    pointsRedeemed?: true;
    pointsExpired?: true;
    netSpend?: true;
    distinctOrderMonths?: true;
};
export type LoyaltyAccountSumAggregateInputType = {
    pointsBalance?: true;
    pointsLifetime?: true;
    pointsRedeemed?: true;
    pointsExpired?: true;
    netSpend?: true;
    distinctOrderMonths?: true;
};
export type LoyaltyAccountMinAggregateInputType = {
    id?: true;
    customerId?: true;
    tierId?: true;
    pointsBalance?: true;
    pointsLifetime?: true;
    pointsRedeemed?: true;
    pointsExpired?: true;
    netSpend?: true;
    distinctOrderMonths?: true;
    tierEvaluatedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LoyaltyAccountMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    tierId?: true;
    pointsBalance?: true;
    pointsLifetime?: true;
    pointsRedeemed?: true;
    pointsExpired?: true;
    netSpend?: true;
    distinctOrderMonths?: true;
    tierEvaluatedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LoyaltyAccountCountAggregateInputType = {
    id?: true;
    customerId?: true;
    tierId?: true;
    pointsBalance?: true;
    pointsLifetime?: true;
    pointsRedeemed?: true;
    pointsExpired?: true;
    netSpend?: true;
    distinctOrderMonths?: true;
    tierEvaluatedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LoyaltyAccountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyAccountWhereInput;
    orderBy?: Prisma.LoyaltyAccountOrderByWithRelationInput | Prisma.LoyaltyAccountOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LoyaltyAccountCountAggregateInputType;
    _avg?: LoyaltyAccountAvgAggregateInputType;
    _sum?: LoyaltyAccountSumAggregateInputType;
    _min?: LoyaltyAccountMinAggregateInputType;
    _max?: LoyaltyAccountMaxAggregateInputType;
};
export type GetLoyaltyAccountAggregateType<T extends LoyaltyAccountAggregateArgs> = {
    [P in keyof T & keyof AggregateLoyaltyAccount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLoyaltyAccount[P]> : Prisma.GetScalarType<T[P], AggregateLoyaltyAccount[P]>;
};
export type LoyaltyAccountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyAccountWhereInput;
    orderBy?: Prisma.LoyaltyAccountOrderByWithAggregationInput | Prisma.LoyaltyAccountOrderByWithAggregationInput[];
    by: Prisma.LoyaltyAccountScalarFieldEnum[] | Prisma.LoyaltyAccountScalarFieldEnum;
    having?: Prisma.LoyaltyAccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoyaltyAccountCountAggregateInputType | true;
    _avg?: LoyaltyAccountAvgAggregateInputType;
    _sum?: LoyaltyAccountSumAggregateInputType;
    _min?: LoyaltyAccountMinAggregateInputType;
    _max?: LoyaltyAccountMaxAggregateInputType;
};
export type LoyaltyAccountGroupByOutputType = {
    id: string;
    customerId: string;
    tierId: string | null;
    pointsBalance: number;
    pointsLifetime: number;
    pointsRedeemed: number;
    pointsExpired: number;
    netSpend: runtime.Decimal;
    distinctOrderMonths: number;
    tierEvaluatedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LoyaltyAccountCountAggregateOutputType | null;
    _avg: LoyaltyAccountAvgAggregateOutputType | null;
    _sum: LoyaltyAccountSumAggregateOutputType | null;
    _min: LoyaltyAccountMinAggregateOutputType | null;
    _max: LoyaltyAccountMaxAggregateOutputType | null;
};
export type GetLoyaltyAccountGroupByPayload<T extends LoyaltyAccountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LoyaltyAccountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LoyaltyAccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LoyaltyAccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LoyaltyAccountGroupByOutputType[P]>;
}>>;
export type LoyaltyAccountWhereInput = {
    AND?: Prisma.LoyaltyAccountWhereInput | Prisma.LoyaltyAccountWhereInput[];
    OR?: Prisma.LoyaltyAccountWhereInput[];
    NOT?: Prisma.LoyaltyAccountWhereInput | Prisma.LoyaltyAccountWhereInput[];
    id?: Prisma.UuidFilter<"LoyaltyAccount"> | string;
    customerId?: Prisma.UuidFilter<"LoyaltyAccount"> | string;
    tierId?: Prisma.UuidNullableFilter<"LoyaltyAccount"> | string | null;
    pointsBalance?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    pointsLifetime?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    pointsRedeemed?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    pointsExpired?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    netSpend?: Prisma.DecimalFilter<"LoyaltyAccount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    tierEvaluatedAt?: Prisma.DateTimeNullableFilter<"LoyaltyAccount"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyAccount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LoyaltyAccount"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    tier?: Prisma.XOR<Prisma.LoyaltyTierConfigNullableScalarRelationFilter, Prisma.LoyaltyTierConfigWhereInput> | null;
    transactions?: Prisma.LoyaltyTransactionListRelationFilter;
    reward_redemption?: Prisma.RewardRedemptionListRelationFilter;
};
export type LoyaltyAccountOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tierId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pointsBalance?: Prisma.SortOrder;
    pointsLifetime?: Prisma.SortOrder;
    pointsRedeemed?: Prisma.SortOrder;
    pointsExpired?: Prisma.SortOrder;
    netSpend?: Prisma.SortOrder;
    distinctOrderMonths?: Prisma.SortOrder;
    tierEvaluatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    tier?: Prisma.LoyaltyTierConfigOrderByWithRelationInput;
    transactions?: Prisma.LoyaltyTransactionOrderByRelationAggregateInput;
    reward_redemption?: Prisma.RewardRedemptionOrderByRelationAggregateInput;
};
export type LoyaltyAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    customerId?: string;
    AND?: Prisma.LoyaltyAccountWhereInput | Prisma.LoyaltyAccountWhereInput[];
    OR?: Prisma.LoyaltyAccountWhereInput[];
    NOT?: Prisma.LoyaltyAccountWhereInput | Prisma.LoyaltyAccountWhereInput[];
    tierId?: Prisma.UuidNullableFilter<"LoyaltyAccount"> | string | null;
    pointsBalance?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    pointsLifetime?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    pointsRedeemed?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    pointsExpired?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    netSpend?: Prisma.DecimalFilter<"LoyaltyAccount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    tierEvaluatedAt?: Prisma.DateTimeNullableFilter<"LoyaltyAccount"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyAccount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LoyaltyAccount"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    tier?: Prisma.XOR<Prisma.LoyaltyTierConfigNullableScalarRelationFilter, Prisma.LoyaltyTierConfigWhereInput> | null;
    transactions?: Prisma.LoyaltyTransactionListRelationFilter;
    reward_redemption?: Prisma.RewardRedemptionListRelationFilter;
}, "id" | "customerId">;
export type LoyaltyAccountOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tierId?: Prisma.SortOrderInput | Prisma.SortOrder;
    pointsBalance?: Prisma.SortOrder;
    pointsLifetime?: Prisma.SortOrder;
    pointsRedeemed?: Prisma.SortOrder;
    pointsExpired?: Prisma.SortOrder;
    netSpend?: Prisma.SortOrder;
    distinctOrderMonths?: Prisma.SortOrder;
    tierEvaluatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LoyaltyAccountCountOrderByAggregateInput;
    _avg?: Prisma.LoyaltyAccountAvgOrderByAggregateInput;
    _max?: Prisma.LoyaltyAccountMaxOrderByAggregateInput;
    _min?: Prisma.LoyaltyAccountMinOrderByAggregateInput;
    _sum?: Prisma.LoyaltyAccountSumOrderByAggregateInput;
};
export type LoyaltyAccountScalarWhereWithAggregatesInput = {
    AND?: Prisma.LoyaltyAccountScalarWhereWithAggregatesInput | Prisma.LoyaltyAccountScalarWhereWithAggregatesInput[];
    OR?: Prisma.LoyaltyAccountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LoyaltyAccountScalarWhereWithAggregatesInput | Prisma.LoyaltyAccountScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"LoyaltyAccount"> | string;
    customerId?: Prisma.UuidWithAggregatesFilter<"LoyaltyAccount"> | string;
    tierId?: Prisma.UuidNullableWithAggregatesFilter<"LoyaltyAccount"> | string | null;
    pointsBalance?: Prisma.IntWithAggregatesFilter<"LoyaltyAccount"> | number;
    pointsLifetime?: Prisma.IntWithAggregatesFilter<"LoyaltyAccount"> | number;
    pointsRedeemed?: Prisma.IntWithAggregatesFilter<"LoyaltyAccount"> | number;
    pointsExpired?: Prisma.IntWithAggregatesFilter<"LoyaltyAccount"> | number;
    netSpend?: Prisma.DecimalWithAggregatesFilter<"LoyaltyAccount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntWithAggregatesFilter<"LoyaltyAccount"> | number;
    tierEvaluatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LoyaltyAccount"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyAccount"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyAccount"> | Date | string;
};
export type LoyaltyAccountCreateInput = {
    id?: string;
    pointsBalance?: number;
    pointsLifetime?: number;
    pointsRedeemed?: number;
    pointsExpired?: number;
    netSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: number;
    tierEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutLoyaltyAccountInput;
    tier?: Prisma.LoyaltyTierConfigCreateNestedOneWithoutAccountsInput;
    transactions?: Prisma.LoyaltyTransactionCreateNestedManyWithoutLoyaltyAccountInput;
    reward_redemption?: Prisma.RewardRedemptionCreateNestedManyWithoutLoyalty_accountInput;
};
export type LoyaltyAccountUncheckedCreateInput = {
    id?: string;
    customerId: string;
    tierId?: string | null;
    pointsBalance?: number;
    pointsLifetime?: number;
    pointsRedeemed?: number;
    pointsExpired?: number;
    netSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: number;
    tierEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.LoyaltyTransactionUncheckedCreateNestedManyWithoutLoyaltyAccountInput;
    reward_redemption?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutLoyalty_accountInput;
};
export type LoyaltyAccountUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsBalance?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsLifetime?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsRedeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsExpired?: Prisma.IntFieldUpdateOperationsInput | number;
    netSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    tierEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutLoyaltyAccountNestedInput;
    tier?: Prisma.LoyaltyTierConfigUpdateOneWithoutAccountsNestedInput;
    transactions?: Prisma.LoyaltyTransactionUpdateManyWithoutLoyaltyAccountNestedInput;
    reward_redemption?: Prisma.RewardRedemptionUpdateManyWithoutLoyalty_accountNestedInput;
};
export type LoyaltyAccountUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    tierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsBalance?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsLifetime?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsRedeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsExpired?: Prisma.IntFieldUpdateOperationsInput | number;
    netSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    tierEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.LoyaltyTransactionUncheckedUpdateManyWithoutLoyaltyAccountNestedInput;
    reward_redemption?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutLoyalty_accountNestedInput;
};
export type LoyaltyAccountCreateManyInput = {
    id?: string;
    customerId: string;
    tierId?: string | null;
    pointsBalance?: number;
    pointsLifetime?: number;
    pointsRedeemed?: number;
    pointsExpired?: number;
    netSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: number;
    tierEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoyaltyAccountUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsBalance?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsLifetime?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsRedeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsExpired?: Prisma.IntFieldUpdateOperationsInput | number;
    netSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    tierEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyAccountUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    tierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsBalance?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsLifetime?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsRedeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsExpired?: Prisma.IntFieldUpdateOperationsInput | number;
    netSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    tierEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyAccountNullableScalarRelationFilter = {
    is?: Prisma.LoyaltyAccountWhereInput | null;
    isNot?: Prisma.LoyaltyAccountWhereInput | null;
};
export type LoyaltyAccountListRelationFilter = {
    every?: Prisma.LoyaltyAccountWhereInput;
    some?: Prisma.LoyaltyAccountWhereInput;
    none?: Prisma.LoyaltyAccountWhereInput;
};
export type LoyaltyAccountOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LoyaltyAccountCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tierId?: Prisma.SortOrder;
    pointsBalance?: Prisma.SortOrder;
    pointsLifetime?: Prisma.SortOrder;
    pointsRedeemed?: Prisma.SortOrder;
    pointsExpired?: Prisma.SortOrder;
    netSpend?: Prisma.SortOrder;
    distinctOrderMonths?: Prisma.SortOrder;
    tierEvaluatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyAccountAvgOrderByAggregateInput = {
    pointsBalance?: Prisma.SortOrder;
    pointsLifetime?: Prisma.SortOrder;
    pointsRedeemed?: Prisma.SortOrder;
    pointsExpired?: Prisma.SortOrder;
    netSpend?: Prisma.SortOrder;
    distinctOrderMonths?: Prisma.SortOrder;
};
export type LoyaltyAccountMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tierId?: Prisma.SortOrder;
    pointsBalance?: Prisma.SortOrder;
    pointsLifetime?: Prisma.SortOrder;
    pointsRedeemed?: Prisma.SortOrder;
    pointsExpired?: Prisma.SortOrder;
    netSpend?: Prisma.SortOrder;
    distinctOrderMonths?: Prisma.SortOrder;
    tierEvaluatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyAccountMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    tierId?: Prisma.SortOrder;
    pointsBalance?: Prisma.SortOrder;
    pointsLifetime?: Prisma.SortOrder;
    pointsRedeemed?: Prisma.SortOrder;
    pointsExpired?: Prisma.SortOrder;
    netSpend?: Prisma.SortOrder;
    distinctOrderMonths?: Prisma.SortOrder;
    tierEvaluatedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyAccountSumOrderByAggregateInput = {
    pointsBalance?: Prisma.SortOrder;
    pointsLifetime?: Prisma.SortOrder;
    pointsRedeemed?: Prisma.SortOrder;
    pointsExpired?: Prisma.SortOrder;
    netSpend?: Prisma.SortOrder;
    distinctOrderMonths?: Prisma.SortOrder;
};
export type LoyaltyAccountScalarRelationFilter = {
    is?: Prisma.LoyaltyAccountWhereInput;
    isNot?: Prisma.LoyaltyAccountWhereInput;
};
export type LoyaltyAccountCreateNestedOneWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutCustomerInput, Prisma.LoyaltyAccountUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.LoyaltyAccountCreateOrConnectWithoutCustomerInput;
    connect?: Prisma.LoyaltyAccountWhereUniqueInput;
};
export type LoyaltyAccountUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutCustomerInput, Prisma.LoyaltyAccountUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.LoyaltyAccountCreateOrConnectWithoutCustomerInput;
    connect?: Prisma.LoyaltyAccountWhereUniqueInput;
};
export type LoyaltyAccountUpdateOneWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutCustomerInput, Prisma.LoyaltyAccountUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.LoyaltyAccountCreateOrConnectWithoutCustomerInput;
    upsert?: Prisma.LoyaltyAccountUpsertWithoutCustomerInput;
    disconnect?: Prisma.LoyaltyAccountWhereInput | boolean;
    delete?: Prisma.LoyaltyAccountWhereInput | boolean;
    connect?: Prisma.LoyaltyAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LoyaltyAccountUpdateToOneWithWhereWithoutCustomerInput, Prisma.LoyaltyAccountUpdateWithoutCustomerInput>, Prisma.LoyaltyAccountUncheckedUpdateWithoutCustomerInput>;
};
export type LoyaltyAccountUncheckedUpdateOneWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutCustomerInput, Prisma.LoyaltyAccountUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.LoyaltyAccountCreateOrConnectWithoutCustomerInput;
    upsert?: Prisma.LoyaltyAccountUpsertWithoutCustomerInput;
    disconnect?: Prisma.LoyaltyAccountWhereInput | boolean;
    delete?: Prisma.LoyaltyAccountWhereInput | boolean;
    connect?: Prisma.LoyaltyAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LoyaltyAccountUpdateToOneWithWhereWithoutCustomerInput, Prisma.LoyaltyAccountUpdateWithoutCustomerInput>, Prisma.LoyaltyAccountUncheckedUpdateWithoutCustomerInput>;
};
export type LoyaltyAccountCreateNestedManyWithoutTierInput = {
    create?: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutTierInput, Prisma.LoyaltyAccountUncheckedCreateWithoutTierInput> | Prisma.LoyaltyAccountCreateWithoutTierInput[] | Prisma.LoyaltyAccountUncheckedCreateWithoutTierInput[];
    connectOrCreate?: Prisma.LoyaltyAccountCreateOrConnectWithoutTierInput | Prisma.LoyaltyAccountCreateOrConnectWithoutTierInput[];
    createMany?: Prisma.LoyaltyAccountCreateManyTierInputEnvelope;
    connect?: Prisma.LoyaltyAccountWhereUniqueInput | Prisma.LoyaltyAccountWhereUniqueInput[];
};
export type LoyaltyAccountUncheckedCreateNestedManyWithoutTierInput = {
    create?: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutTierInput, Prisma.LoyaltyAccountUncheckedCreateWithoutTierInput> | Prisma.LoyaltyAccountCreateWithoutTierInput[] | Prisma.LoyaltyAccountUncheckedCreateWithoutTierInput[];
    connectOrCreate?: Prisma.LoyaltyAccountCreateOrConnectWithoutTierInput | Prisma.LoyaltyAccountCreateOrConnectWithoutTierInput[];
    createMany?: Prisma.LoyaltyAccountCreateManyTierInputEnvelope;
    connect?: Prisma.LoyaltyAccountWhereUniqueInput | Prisma.LoyaltyAccountWhereUniqueInput[];
};
export type LoyaltyAccountUpdateManyWithoutTierNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutTierInput, Prisma.LoyaltyAccountUncheckedCreateWithoutTierInput> | Prisma.LoyaltyAccountCreateWithoutTierInput[] | Prisma.LoyaltyAccountUncheckedCreateWithoutTierInput[];
    connectOrCreate?: Prisma.LoyaltyAccountCreateOrConnectWithoutTierInput | Prisma.LoyaltyAccountCreateOrConnectWithoutTierInput[];
    upsert?: Prisma.LoyaltyAccountUpsertWithWhereUniqueWithoutTierInput | Prisma.LoyaltyAccountUpsertWithWhereUniqueWithoutTierInput[];
    createMany?: Prisma.LoyaltyAccountCreateManyTierInputEnvelope;
    set?: Prisma.LoyaltyAccountWhereUniqueInput | Prisma.LoyaltyAccountWhereUniqueInput[];
    disconnect?: Prisma.LoyaltyAccountWhereUniqueInput | Prisma.LoyaltyAccountWhereUniqueInput[];
    delete?: Prisma.LoyaltyAccountWhereUniqueInput | Prisma.LoyaltyAccountWhereUniqueInput[];
    connect?: Prisma.LoyaltyAccountWhereUniqueInput | Prisma.LoyaltyAccountWhereUniqueInput[];
    update?: Prisma.LoyaltyAccountUpdateWithWhereUniqueWithoutTierInput | Prisma.LoyaltyAccountUpdateWithWhereUniqueWithoutTierInput[];
    updateMany?: Prisma.LoyaltyAccountUpdateManyWithWhereWithoutTierInput | Prisma.LoyaltyAccountUpdateManyWithWhereWithoutTierInput[];
    deleteMany?: Prisma.LoyaltyAccountScalarWhereInput | Prisma.LoyaltyAccountScalarWhereInput[];
};
export type LoyaltyAccountUncheckedUpdateManyWithoutTierNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutTierInput, Prisma.LoyaltyAccountUncheckedCreateWithoutTierInput> | Prisma.LoyaltyAccountCreateWithoutTierInput[] | Prisma.LoyaltyAccountUncheckedCreateWithoutTierInput[];
    connectOrCreate?: Prisma.LoyaltyAccountCreateOrConnectWithoutTierInput | Prisma.LoyaltyAccountCreateOrConnectWithoutTierInput[];
    upsert?: Prisma.LoyaltyAccountUpsertWithWhereUniqueWithoutTierInput | Prisma.LoyaltyAccountUpsertWithWhereUniqueWithoutTierInput[];
    createMany?: Prisma.LoyaltyAccountCreateManyTierInputEnvelope;
    set?: Prisma.LoyaltyAccountWhereUniqueInput | Prisma.LoyaltyAccountWhereUniqueInput[];
    disconnect?: Prisma.LoyaltyAccountWhereUniqueInput | Prisma.LoyaltyAccountWhereUniqueInput[];
    delete?: Prisma.LoyaltyAccountWhereUniqueInput | Prisma.LoyaltyAccountWhereUniqueInput[];
    connect?: Prisma.LoyaltyAccountWhereUniqueInput | Prisma.LoyaltyAccountWhereUniqueInput[];
    update?: Prisma.LoyaltyAccountUpdateWithWhereUniqueWithoutTierInput | Prisma.LoyaltyAccountUpdateWithWhereUniqueWithoutTierInput[];
    updateMany?: Prisma.LoyaltyAccountUpdateManyWithWhereWithoutTierInput | Prisma.LoyaltyAccountUpdateManyWithWhereWithoutTierInput[];
    deleteMany?: Prisma.LoyaltyAccountScalarWhereInput | Prisma.LoyaltyAccountScalarWhereInput[];
};
export type LoyaltyAccountCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutTransactionsInput, Prisma.LoyaltyAccountUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.LoyaltyAccountCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.LoyaltyAccountWhereUniqueInput;
};
export type LoyaltyAccountUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutTransactionsInput, Prisma.LoyaltyAccountUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.LoyaltyAccountCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.LoyaltyAccountUpsertWithoutTransactionsInput;
    connect?: Prisma.LoyaltyAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LoyaltyAccountUpdateToOneWithWhereWithoutTransactionsInput, Prisma.LoyaltyAccountUpdateWithoutTransactionsInput>, Prisma.LoyaltyAccountUncheckedUpdateWithoutTransactionsInput>;
};
export type LoyaltyAccountCreateNestedOneWithoutReward_redemptionInput = {
    create?: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutReward_redemptionInput, Prisma.LoyaltyAccountUncheckedCreateWithoutReward_redemptionInput>;
    connectOrCreate?: Prisma.LoyaltyAccountCreateOrConnectWithoutReward_redemptionInput;
    connect?: Prisma.LoyaltyAccountWhereUniqueInput;
};
export type LoyaltyAccountUpdateOneRequiredWithoutReward_redemptionNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutReward_redemptionInput, Prisma.LoyaltyAccountUncheckedCreateWithoutReward_redemptionInput>;
    connectOrCreate?: Prisma.LoyaltyAccountCreateOrConnectWithoutReward_redemptionInput;
    upsert?: Prisma.LoyaltyAccountUpsertWithoutReward_redemptionInput;
    connect?: Prisma.LoyaltyAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LoyaltyAccountUpdateToOneWithWhereWithoutReward_redemptionInput, Prisma.LoyaltyAccountUpdateWithoutReward_redemptionInput>, Prisma.LoyaltyAccountUncheckedUpdateWithoutReward_redemptionInput>;
};
export type LoyaltyAccountCreateWithoutCustomerInput = {
    id?: string;
    pointsBalance?: number;
    pointsLifetime?: number;
    pointsRedeemed?: number;
    pointsExpired?: number;
    netSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: number;
    tierEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tier?: Prisma.LoyaltyTierConfigCreateNestedOneWithoutAccountsInput;
    transactions?: Prisma.LoyaltyTransactionCreateNestedManyWithoutLoyaltyAccountInput;
    reward_redemption?: Prisma.RewardRedemptionCreateNestedManyWithoutLoyalty_accountInput;
};
export type LoyaltyAccountUncheckedCreateWithoutCustomerInput = {
    id?: string;
    tierId?: string | null;
    pointsBalance?: number;
    pointsLifetime?: number;
    pointsRedeemed?: number;
    pointsExpired?: number;
    netSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: number;
    tierEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.LoyaltyTransactionUncheckedCreateNestedManyWithoutLoyaltyAccountInput;
    reward_redemption?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutLoyalty_accountInput;
};
export type LoyaltyAccountCreateOrConnectWithoutCustomerInput = {
    where: Prisma.LoyaltyAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutCustomerInput, Prisma.LoyaltyAccountUncheckedCreateWithoutCustomerInput>;
};
export type LoyaltyAccountUpsertWithoutCustomerInput = {
    update: Prisma.XOR<Prisma.LoyaltyAccountUpdateWithoutCustomerInput, Prisma.LoyaltyAccountUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutCustomerInput, Prisma.LoyaltyAccountUncheckedCreateWithoutCustomerInput>;
    where?: Prisma.LoyaltyAccountWhereInput;
};
export type LoyaltyAccountUpdateToOneWithWhereWithoutCustomerInput = {
    where?: Prisma.LoyaltyAccountWhereInput;
    data: Prisma.XOR<Prisma.LoyaltyAccountUpdateWithoutCustomerInput, Prisma.LoyaltyAccountUncheckedUpdateWithoutCustomerInput>;
};
export type LoyaltyAccountUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsBalance?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsLifetime?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsRedeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsExpired?: Prisma.IntFieldUpdateOperationsInput | number;
    netSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    tierEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tier?: Prisma.LoyaltyTierConfigUpdateOneWithoutAccountsNestedInput;
    transactions?: Prisma.LoyaltyTransactionUpdateManyWithoutLoyaltyAccountNestedInput;
    reward_redemption?: Prisma.RewardRedemptionUpdateManyWithoutLoyalty_accountNestedInput;
};
export type LoyaltyAccountUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsBalance?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsLifetime?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsRedeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsExpired?: Prisma.IntFieldUpdateOperationsInput | number;
    netSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    tierEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.LoyaltyTransactionUncheckedUpdateManyWithoutLoyaltyAccountNestedInput;
    reward_redemption?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutLoyalty_accountNestedInput;
};
export type LoyaltyAccountCreateWithoutTierInput = {
    id?: string;
    pointsBalance?: number;
    pointsLifetime?: number;
    pointsRedeemed?: number;
    pointsExpired?: number;
    netSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: number;
    tierEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutLoyaltyAccountInput;
    transactions?: Prisma.LoyaltyTransactionCreateNestedManyWithoutLoyaltyAccountInput;
    reward_redemption?: Prisma.RewardRedemptionCreateNestedManyWithoutLoyalty_accountInput;
};
export type LoyaltyAccountUncheckedCreateWithoutTierInput = {
    id?: string;
    customerId: string;
    pointsBalance?: number;
    pointsLifetime?: number;
    pointsRedeemed?: number;
    pointsExpired?: number;
    netSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: number;
    tierEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.LoyaltyTransactionUncheckedCreateNestedManyWithoutLoyaltyAccountInput;
    reward_redemption?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutLoyalty_accountInput;
};
export type LoyaltyAccountCreateOrConnectWithoutTierInput = {
    where: Prisma.LoyaltyAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutTierInput, Prisma.LoyaltyAccountUncheckedCreateWithoutTierInput>;
};
export type LoyaltyAccountCreateManyTierInputEnvelope = {
    data: Prisma.LoyaltyAccountCreateManyTierInput | Prisma.LoyaltyAccountCreateManyTierInput[];
    skipDuplicates?: boolean;
};
export type LoyaltyAccountUpsertWithWhereUniqueWithoutTierInput = {
    where: Prisma.LoyaltyAccountWhereUniqueInput;
    update: Prisma.XOR<Prisma.LoyaltyAccountUpdateWithoutTierInput, Prisma.LoyaltyAccountUncheckedUpdateWithoutTierInput>;
    create: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutTierInput, Prisma.LoyaltyAccountUncheckedCreateWithoutTierInput>;
};
export type LoyaltyAccountUpdateWithWhereUniqueWithoutTierInput = {
    where: Prisma.LoyaltyAccountWhereUniqueInput;
    data: Prisma.XOR<Prisma.LoyaltyAccountUpdateWithoutTierInput, Prisma.LoyaltyAccountUncheckedUpdateWithoutTierInput>;
};
export type LoyaltyAccountUpdateManyWithWhereWithoutTierInput = {
    where: Prisma.LoyaltyAccountScalarWhereInput;
    data: Prisma.XOR<Prisma.LoyaltyAccountUpdateManyMutationInput, Prisma.LoyaltyAccountUncheckedUpdateManyWithoutTierInput>;
};
export type LoyaltyAccountScalarWhereInput = {
    AND?: Prisma.LoyaltyAccountScalarWhereInput | Prisma.LoyaltyAccountScalarWhereInput[];
    OR?: Prisma.LoyaltyAccountScalarWhereInput[];
    NOT?: Prisma.LoyaltyAccountScalarWhereInput | Prisma.LoyaltyAccountScalarWhereInput[];
    id?: Prisma.UuidFilter<"LoyaltyAccount"> | string;
    customerId?: Prisma.UuidFilter<"LoyaltyAccount"> | string;
    tierId?: Prisma.UuidNullableFilter<"LoyaltyAccount"> | string | null;
    pointsBalance?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    pointsLifetime?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    pointsRedeemed?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    pointsExpired?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    netSpend?: Prisma.DecimalFilter<"LoyaltyAccount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFilter<"LoyaltyAccount"> | number;
    tierEvaluatedAt?: Prisma.DateTimeNullableFilter<"LoyaltyAccount"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyAccount"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LoyaltyAccount"> | Date | string;
};
export type LoyaltyAccountCreateWithoutTransactionsInput = {
    id?: string;
    pointsBalance?: number;
    pointsLifetime?: number;
    pointsRedeemed?: number;
    pointsExpired?: number;
    netSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: number;
    tierEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutLoyaltyAccountInput;
    tier?: Prisma.LoyaltyTierConfigCreateNestedOneWithoutAccountsInput;
    reward_redemption?: Prisma.RewardRedemptionCreateNestedManyWithoutLoyalty_accountInput;
};
export type LoyaltyAccountUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    customerId: string;
    tierId?: string | null;
    pointsBalance?: number;
    pointsLifetime?: number;
    pointsRedeemed?: number;
    pointsExpired?: number;
    netSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: number;
    tierEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reward_redemption?: Prisma.RewardRedemptionUncheckedCreateNestedManyWithoutLoyalty_accountInput;
};
export type LoyaltyAccountCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.LoyaltyAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutTransactionsInput, Prisma.LoyaltyAccountUncheckedCreateWithoutTransactionsInput>;
};
export type LoyaltyAccountUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.LoyaltyAccountUpdateWithoutTransactionsInput, Prisma.LoyaltyAccountUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutTransactionsInput, Prisma.LoyaltyAccountUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.LoyaltyAccountWhereInput;
};
export type LoyaltyAccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.LoyaltyAccountWhereInput;
    data: Prisma.XOR<Prisma.LoyaltyAccountUpdateWithoutTransactionsInput, Prisma.LoyaltyAccountUncheckedUpdateWithoutTransactionsInput>;
};
export type LoyaltyAccountUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsBalance?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsLifetime?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsRedeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsExpired?: Prisma.IntFieldUpdateOperationsInput | number;
    netSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    tierEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutLoyaltyAccountNestedInput;
    tier?: Prisma.LoyaltyTierConfigUpdateOneWithoutAccountsNestedInput;
    reward_redemption?: Prisma.RewardRedemptionUpdateManyWithoutLoyalty_accountNestedInput;
};
export type LoyaltyAccountUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    tierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsBalance?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsLifetime?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsRedeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsExpired?: Prisma.IntFieldUpdateOperationsInput | number;
    netSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    tierEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reward_redemption?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutLoyalty_accountNestedInput;
};
export type LoyaltyAccountCreateWithoutReward_redemptionInput = {
    id?: string;
    pointsBalance?: number;
    pointsLifetime?: number;
    pointsRedeemed?: number;
    pointsExpired?: number;
    netSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: number;
    tierEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutLoyaltyAccountInput;
    tier?: Prisma.LoyaltyTierConfigCreateNestedOneWithoutAccountsInput;
    transactions?: Prisma.LoyaltyTransactionCreateNestedManyWithoutLoyaltyAccountInput;
};
export type LoyaltyAccountUncheckedCreateWithoutReward_redemptionInput = {
    id?: string;
    customerId: string;
    tierId?: string | null;
    pointsBalance?: number;
    pointsLifetime?: number;
    pointsRedeemed?: number;
    pointsExpired?: number;
    netSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: number;
    tierEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.LoyaltyTransactionUncheckedCreateNestedManyWithoutLoyaltyAccountInput;
};
export type LoyaltyAccountCreateOrConnectWithoutReward_redemptionInput = {
    where: Prisma.LoyaltyAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutReward_redemptionInput, Prisma.LoyaltyAccountUncheckedCreateWithoutReward_redemptionInput>;
};
export type LoyaltyAccountUpsertWithoutReward_redemptionInput = {
    update: Prisma.XOR<Prisma.LoyaltyAccountUpdateWithoutReward_redemptionInput, Prisma.LoyaltyAccountUncheckedUpdateWithoutReward_redemptionInput>;
    create: Prisma.XOR<Prisma.LoyaltyAccountCreateWithoutReward_redemptionInput, Prisma.LoyaltyAccountUncheckedCreateWithoutReward_redemptionInput>;
    where?: Prisma.LoyaltyAccountWhereInput;
};
export type LoyaltyAccountUpdateToOneWithWhereWithoutReward_redemptionInput = {
    where?: Prisma.LoyaltyAccountWhereInput;
    data: Prisma.XOR<Prisma.LoyaltyAccountUpdateWithoutReward_redemptionInput, Prisma.LoyaltyAccountUncheckedUpdateWithoutReward_redemptionInput>;
};
export type LoyaltyAccountUpdateWithoutReward_redemptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsBalance?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsLifetime?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsRedeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsExpired?: Prisma.IntFieldUpdateOperationsInput | number;
    netSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    tierEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutLoyaltyAccountNestedInput;
    tier?: Prisma.LoyaltyTierConfigUpdateOneWithoutAccountsNestedInput;
    transactions?: Prisma.LoyaltyTransactionUpdateManyWithoutLoyaltyAccountNestedInput;
};
export type LoyaltyAccountUncheckedUpdateWithoutReward_redemptionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    tierId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pointsBalance?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsLifetime?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsRedeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsExpired?: Prisma.IntFieldUpdateOperationsInput | number;
    netSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    tierEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.LoyaltyTransactionUncheckedUpdateManyWithoutLoyaltyAccountNestedInput;
};
export type LoyaltyAccountCreateManyTierInput = {
    id?: string;
    customerId: string;
    pointsBalance?: number;
    pointsLifetime?: number;
    pointsRedeemed?: number;
    pointsExpired?: number;
    netSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: number;
    tierEvaluatedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoyaltyAccountUpdateWithoutTierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsBalance?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsLifetime?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsRedeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsExpired?: Prisma.IntFieldUpdateOperationsInput | number;
    netSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    tierEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutLoyaltyAccountNestedInput;
    transactions?: Prisma.LoyaltyTransactionUpdateManyWithoutLoyaltyAccountNestedInput;
    reward_redemption?: Prisma.RewardRedemptionUpdateManyWithoutLoyalty_accountNestedInput;
};
export type LoyaltyAccountUncheckedUpdateWithoutTierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsBalance?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsLifetime?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsRedeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsExpired?: Prisma.IntFieldUpdateOperationsInput | number;
    netSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    tierEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.LoyaltyTransactionUncheckedUpdateManyWithoutLoyaltyAccountNestedInput;
    reward_redemption?: Prisma.RewardRedemptionUncheckedUpdateManyWithoutLoyalty_accountNestedInput;
};
export type LoyaltyAccountUncheckedUpdateManyWithoutTierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    pointsBalance?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsLifetime?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsRedeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsExpired?: Prisma.IntFieldUpdateOperationsInput | number;
    netSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    distinctOrderMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    tierEvaluatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyAccountCountOutputType = {
    transactions: number;
    reward_redemption: number;
};
export type LoyaltyAccountCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transactions?: boolean | LoyaltyAccountCountOutputTypeCountTransactionsArgs;
    reward_redemption?: boolean | LoyaltyAccountCountOutputTypeCountReward_redemptionArgs;
};
export type LoyaltyAccountCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyAccountCountOutputTypeSelect<ExtArgs> | null;
};
export type LoyaltyAccountCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyTransactionWhereInput;
};
export type LoyaltyAccountCountOutputTypeCountReward_redemptionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RewardRedemptionWhereInput;
};
export type LoyaltyAccountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    tierId?: boolean;
    pointsBalance?: boolean;
    pointsLifetime?: boolean;
    pointsRedeemed?: boolean;
    pointsExpired?: boolean;
    netSpend?: boolean;
    distinctOrderMonths?: boolean;
    tierEvaluatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    tier?: boolean | Prisma.LoyaltyAccount$tierArgs<ExtArgs>;
    transactions?: boolean | Prisma.LoyaltyAccount$transactionsArgs<ExtArgs>;
    reward_redemption?: boolean | Prisma.LoyaltyAccount$reward_redemptionArgs<ExtArgs>;
    _count?: boolean | Prisma.LoyaltyAccountCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["loyaltyAccount"]>;
export type LoyaltyAccountSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    tierId?: boolean;
    pointsBalance?: boolean;
    pointsLifetime?: boolean;
    pointsRedeemed?: boolean;
    pointsExpired?: boolean;
    netSpend?: boolean;
    distinctOrderMonths?: boolean;
    tierEvaluatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    tier?: boolean | Prisma.LoyaltyAccount$tierArgs<ExtArgs>;
}, ExtArgs["result"]["loyaltyAccount"]>;
export type LoyaltyAccountSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    tierId?: boolean;
    pointsBalance?: boolean;
    pointsLifetime?: boolean;
    pointsRedeemed?: boolean;
    pointsExpired?: boolean;
    netSpend?: boolean;
    distinctOrderMonths?: boolean;
    tierEvaluatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    tier?: boolean | Prisma.LoyaltyAccount$tierArgs<ExtArgs>;
}, ExtArgs["result"]["loyaltyAccount"]>;
export type LoyaltyAccountSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    tierId?: boolean;
    pointsBalance?: boolean;
    pointsLifetime?: boolean;
    pointsRedeemed?: boolean;
    pointsExpired?: boolean;
    netSpend?: boolean;
    distinctOrderMonths?: boolean;
    tierEvaluatedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LoyaltyAccountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "tierId" | "pointsBalance" | "pointsLifetime" | "pointsRedeemed" | "pointsExpired" | "netSpend" | "distinctOrderMonths" | "tierEvaluatedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["loyaltyAccount"]>;
export type LoyaltyAccountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    tier?: boolean | Prisma.LoyaltyAccount$tierArgs<ExtArgs>;
    transactions?: boolean | Prisma.LoyaltyAccount$transactionsArgs<ExtArgs>;
    reward_redemption?: boolean | Prisma.LoyaltyAccount$reward_redemptionArgs<ExtArgs>;
    _count?: boolean | Prisma.LoyaltyAccountCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LoyaltyAccountIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    tier?: boolean | Prisma.LoyaltyAccount$tierArgs<ExtArgs>;
};
export type LoyaltyAccountIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    tier?: boolean | Prisma.LoyaltyAccount$tierArgs<ExtArgs>;
};
export type $LoyaltyAccountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LoyaltyAccount";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        tier: Prisma.$LoyaltyTierConfigPayload<ExtArgs> | null;
        transactions: Prisma.$LoyaltyTransactionPayload<ExtArgs>[];
        reward_redemption: Prisma.$RewardRedemptionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customerId: string;
        tierId: string | null;
        pointsBalance: number;
        pointsLifetime: number;
        pointsRedeemed: number;
        pointsExpired: number;
        netSpend: runtime.Decimal;
        distinctOrderMonths: number;
        tierEvaluatedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["loyaltyAccount"]>;
    composites: {};
};
export type LoyaltyAccountGetPayload<S extends boolean | null | undefined | LoyaltyAccountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload, S>;
export type LoyaltyAccountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LoyaltyAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LoyaltyAccountCountAggregateInputType | true;
};
export interface LoyaltyAccountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LoyaltyAccount'];
        meta: {
            name: 'LoyaltyAccount';
        };
    };
    findUnique<T extends LoyaltyAccountFindUniqueArgs>(args: Prisma.SelectSubset<T, LoyaltyAccountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LoyaltyAccountClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LoyaltyAccountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LoyaltyAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyAccountClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LoyaltyAccountFindFirstArgs>(args?: Prisma.SelectSubset<T, LoyaltyAccountFindFirstArgs<ExtArgs>>): Prisma.Prisma__LoyaltyAccountClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LoyaltyAccountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LoyaltyAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyAccountClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LoyaltyAccountFindManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LoyaltyAccountCreateArgs>(args: Prisma.SelectSubset<T, LoyaltyAccountCreateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyAccountClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LoyaltyAccountCreateManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LoyaltyAccountCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LoyaltyAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LoyaltyAccountDeleteArgs>(args: Prisma.SelectSubset<T, LoyaltyAccountDeleteArgs<ExtArgs>>): Prisma.Prisma__LoyaltyAccountClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LoyaltyAccountUpdateArgs>(args: Prisma.SelectSubset<T, LoyaltyAccountUpdateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyAccountClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LoyaltyAccountDeleteManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LoyaltyAccountUpdateManyArgs>(args: Prisma.SelectSubset<T, LoyaltyAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LoyaltyAccountUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LoyaltyAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LoyaltyAccountUpsertArgs>(args: Prisma.SelectSubset<T, LoyaltyAccountUpsertArgs<ExtArgs>>): Prisma.Prisma__LoyaltyAccountClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LoyaltyAccountCountArgs>(args?: Prisma.Subset<T, LoyaltyAccountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LoyaltyAccountCountAggregateOutputType> : number>;
    aggregate<T extends LoyaltyAccountAggregateArgs>(args: Prisma.Subset<T, LoyaltyAccountAggregateArgs>): Prisma.PrismaPromise<GetLoyaltyAccountAggregateType<T>>;
    groupBy<T extends LoyaltyAccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LoyaltyAccountGroupByArgs['orderBy'];
    } : {
        orderBy?: LoyaltyAccountGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LoyaltyAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoyaltyAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LoyaltyAccountFieldRefs;
}
export interface Prisma__LoyaltyAccountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tier<T extends Prisma.LoyaltyAccount$tierArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LoyaltyAccount$tierArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTierConfigClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTierConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    transactions<T extends Prisma.LoyaltyAccount$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LoyaltyAccount$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reward_redemption<T extends Prisma.LoyaltyAccount$reward_redemptionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LoyaltyAccount$reward_redemptionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RewardRedemptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LoyaltyAccountFieldRefs {
    readonly id: Prisma.FieldRef<"LoyaltyAccount", 'String'>;
    readonly customerId: Prisma.FieldRef<"LoyaltyAccount", 'String'>;
    readonly tierId: Prisma.FieldRef<"LoyaltyAccount", 'String'>;
    readonly pointsBalance: Prisma.FieldRef<"LoyaltyAccount", 'Int'>;
    readonly pointsLifetime: Prisma.FieldRef<"LoyaltyAccount", 'Int'>;
    readonly pointsRedeemed: Prisma.FieldRef<"LoyaltyAccount", 'Int'>;
    readonly pointsExpired: Prisma.FieldRef<"LoyaltyAccount", 'Int'>;
    readonly netSpend: Prisma.FieldRef<"LoyaltyAccount", 'Decimal'>;
    readonly distinctOrderMonths: Prisma.FieldRef<"LoyaltyAccount", 'Int'>;
    readonly tierEvaluatedAt: Prisma.FieldRef<"LoyaltyAccount", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"LoyaltyAccount", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LoyaltyAccount", 'DateTime'>;
}
export type LoyaltyAccountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyAccountSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyAccountOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyAccountInclude<ExtArgs> | null;
    where: Prisma.LoyaltyAccountWhereUniqueInput;
};
export type LoyaltyAccountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyAccountSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyAccountOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyAccountInclude<ExtArgs> | null;
    where: Prisma.LoyaltyAccountWhereUniqueInput;
};
export type LoyaltyAccountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyAccountSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyAccountOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyAccountInclude<ExtArgs> | null;
    where?: Prisma.LoyaltyAccountWhereInput;
    orderBy?: Prisma.LoyaltyAccountOrderByWithRelationInput | Prisma.LoyaltyAccountOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoyaltyAccountScalarFieldEnum | Prisma.LoyaltyAccountScalarFieldEnum[];
};
export type LoyaltyAccountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyAccountSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyAccountOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyAccountInclude<ExtArgs> | null;
    where?: Prisma.LoyaltyAccountWhereInput;
    orderBy?: Prisma.LoyaltyAccountOrderByWithRelationInput | Prisma.LoyaltyAccountOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoyaltyAccountScalarFieldEnum | Prisma.LoyaltyAccountScalarFieldEnum[];
};
export type LoyaltyAccountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyAccountSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyAccountOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyAccountInclude<ExtArgs> | null;
    where?: Prisma.LoyaltyAccountWhereInput;
    orderBy?: Prisma.LoyaltyAccountOrderByWithRelationInput | Prisma.LoyaltyAccountOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoyaltyAccountScalarFieldEnum | Prisma.LoyaltyAccountScalarFieldEnum[];
};
export type LoyaltyAccountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyAccountSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyAccountOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyAccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyAccountCreateInput, Prisma.LoyaltyAccountUncheckedCreateInput>;
};
export type LoyaltyAccountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LoyaltyAccountCreateManyInput | Prisma.LoyaltyAccountCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LoyaltyAccountCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyAccountSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LoyaltyAccountOmit<ExtArgs> | null;
    data: Prisma.LoyaltyAccountCreateManyInput | Prisma.LoyaltyAccountCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LoyaltyAccountIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LoyaltyAccountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyAccountSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyAccountOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyAccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyAccountUpdateInput, Prisma.LoyaltyAccountUncheckedUpdateInput>;
    where: Prisma.LoyaltyAccountWhereUniqueInput;
};
export type LoyaltyAccountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LoyaltyAccountUpdateManyMutationInput, Prisma.LoyaltyAccountUncheckedUpdateManyInput>;
    where?: Prisma.LoyaltyAccountWhereInput;
    limit?: number;
};
export type LoyaltyAccountUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyAccountSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LoyaltyAccountOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyAccountUpdateManyMutationInput, Prisma.LoyaltyAccountUncheckedUpdateManyInput>;
    where?: Prisma.LoyaltyAccountWhereInput;
    limit?: number;
    include?: Prisma.LoyaltyAccountIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LoyaltyAccountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyAccountSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyAccountOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyAccountInclude<ExtArgs> | null;
    where: Prisma.LoyaltyAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyAccountCreateInput, Prisma.LoyaltyAccountUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LoyaltyAccountUpdateInput, Prisma.LoyaltyAccountUncheckedUpdateInput>;
};
export type LoyaltyAccountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyAccountSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyAccountOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyAccountInclude<ExtArgs> | null;
    where: Prisma.LoyaltyAccountWhereUniqueInput;
};
export type LoyaltyAccountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyAccountWhereInput;
    limit?: number;
};
export type LoyaltyAccount$tierArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTierConfigOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTierConfigInclude<ExtArgs> | null;
    where?: Prisma.LoyaltyTierConfigWhereInput;
};
export type LoyaltyAccount$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LoyaltyAccount$reward_redemptionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardRedemptionSelect<ExtArgs> | null;
    omit?: Prisma.RewardRedemptionOmit<ExtArgs> | null;
    include?: Prisma.RewardRedemptionInclude<ExtArgs> | null;
    where?: Prisma.RewardRedemptionWhereInput;
    orderBy?: Prisma.RewardRedemptionOrderByWithRelationInput | Prisma.RewardRedemptionOrderByWithRelationInput[];
    cursor?: Prisma.RewardRedemptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RewardRedemptionScalarFieldEnum | Prisma.RewardRedemptionScalarFieldEnum[];
};
export type LoyaltyAccountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyAccountSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyAccountOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyAccountInclude<ExtArgs> | null;
};
