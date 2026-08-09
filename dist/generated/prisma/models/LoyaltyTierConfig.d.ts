import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LoyaltyTierConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$LoyaltyTierConfigPayload>;
export type AggregateLoyaltyTierConfig = {
    _count: LoyaltyTierConfigCountAggregateOutputType | null;
    _avg: LoyaltyTierConfigAvgAggregateOutputType | null;
    _sum: LoyaltyTierConfigSumAggregateOutputType | null;
    _min: LoyaltyTierConfigMinAggregateOutputType | null;
    _max: LoyaltyTierConfigMaxAggregateOutputType | null;
};
export type LoyaltyTierConfigAvgAggregateOutputType = {
    tierOrder: number | null;
    minNetSpend: runtime.Decimal | null;
    minDistinctMonths: number | null;
    pointsMultiplier: runtime.Decimal | null;
};
export type LoyaltyTierConfigSumAggregateOutputType = {
    tierOrder: number | null;
    minNetSpend: runtime.Decimal | null;
    minDistinctMonths: number | null;
    pointsMultiplier: runtime.Decimal | null;
};
export type LoyaltyTierConfigMinAggregateOutputType = {
    id: string | null;
    tierCode: string | null;
    tierName: string | null;
    tierOrder: number | null;
    minNetSpend: runtime.Decimal | null;
    minDistinctMonths: number | null;
    pointsMultiplier: runtime.Decimal | null;
    isDefault: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LoyaltyTierConfigMaxAggregateOutputType = {
    id: string | null;
    tierCode: string | null;
    tierName: string | null;
    tierOrder: number | null;
    minNetSpend: runtime.Decimal | null;
    minDistinctMonths: number | null;
    pointsMultiplier: runtime.Decimal | null;
    isDefault: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LoyaltyTierConfigCountAggregateOutputType = {
    id: number;
    tierCode: number;
    tierName: number;
    tierOrder: number;
    minNetSpend: number;
    minDistinctMonths: number;
    pointsMultiplier: number;
    benefits: number;
    isDefault: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LoyaltyTierConfigAvgAggregateInputType = {
    tierOrder?: true;
    minNetSpend?: true;
    minDistinctMonths?: true;
    pointsMultiplier?: true;
};
export type LoyaltyTierConfigSumAggregateInputType = {
    tierOrder?: true;
    minNetSpend?: true;
    minDistinctMonths?: true;
    pointsMultiplier?: true;
};
export type LoyaltyTierConfigMinAggregateInputType = {
    id?: true;
    tierCode?: true;
    tierName?: true;
    tierOrder?: true;
    minNetSpend?: true;
    minDistinctMonths?: true;
    pointsMultiplier?: true;
    isDefault?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LoyaltyTierConfigMaxAggregateInputType = {
    id?: true;
    tierCode?: true;
    tierName?: true;
    tierOrder?: true;
    minNetSpend?: true;
    minDistinctMonths?: true;
    pointsMultiplier?: true;
    isDefault?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LoyaltyTierConfigCountAggregateInputType = {
    id?: true;
    tierCode?: true;
    tierName?: true;
    tierOrder?: true;
    minNetSpend?: true;
    minDistinctMonths?: true;
    pointsMultiplier?: true;
    benefits?: true;
    isDefault?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LoyaltyTierConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyTierConfigWhereInput;
    orderBy?: Prisma.LoyaltyTierConfigOrderByWithRelationInput | Prisma.LoyaltyTierConfigOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyTierConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LoyaltyTierConfigCountAggregateInputType;
    _avg?: LoyaltyTierConfigAvgAggregateInputType;
    _sum?: LoyaltyTierConfigSumAggregateInputType;
    _min?: LoyaltyTierConfigMinAggregateInputType;
    _max?: LoyaltyTierConfigMaxAggregateInputType;
};
export type GetLoyaltyTierConfigAggregateType<T extends LoyaltyTierConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateLoyaltyTierConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLoyaltyTierConfig[P]> : Prisma.GetScalarType<T[P], AggregateLoyaltyTierConfig[P]>;
};
export type LoyaltyTierConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyTierConfigWhereInput;
    orderBy?: Prisma.LoyaltyTierConfigOrderByWithAggregationInput | Prisma.LoyaltyTierConfigOrderByWithAggregationInput[];
    by: Prisma.LoyaltyTierConfigScalarFieldEnum[] | Prisma.LoyaltyTierConfigScalarFieldEnum;
    having?: Prisma.LoyaltyTierConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoyaltyTierConfigCountAggregateInputType | true;
    _avg?: LoyaltyTierConfigAvgAggregateInputType;
    _sum?: LoyaltyTierConfigSumAggregateInputType;
    _min?: LoyaltyTierConfigMinAggregateInputType;
    _max?: LoyaltyTierConfigMaxAggregateInputType;
};
export type LoyaltyTierConfigGroupByOutputType = {
    id: string;
    tierCode: string;
    tierName: string;
    tierOrder: number;
    minNetSpend: runtime.Decimal;
    minDistinctMonths: number;
    pointsMultiplier: runtime.Decimal;
    benefits: runtime.JsonValue | null;
    isDefault: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: LoyaltyTierConfigCountAggregateOutputType | null;
    _avg: LoyaltyTierConfigAvgAggregateOutputType | null;
    _sum: LoyaltyTierConfigSumAggregateOutputType | null;
    _min: LoyaltyTierConfigMinAggregateOutputType | null;
    _max: LoyaltyTierConfigMaxAggregateOutputType | null;
};
export type GetLoyaltyTierConfigGroupByPayload<T extends LoyaltyTierConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LoyaltyTierConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LoyaltyTierConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LoyaltyTierConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LoyaltyTierConfigGroupByOutputType[P]>;
}>>;
export type LoyaltyTierConfigWhereInput = {
    AND?: Prisma.LoyaltyTierConfigWhereInput | Prisma.LoyaltyTierConfigWhereInput[];
    OR?: Prisma.LoyaltyTierConfigWhereInput[];
    NOT?: Prisma.LoyaltyTierConfigWhereInput | Prisma.LoyaltyTierConfigWhereInput[];
    id?: Prisma.UuidFilter<"LoyaltyTierConfig"> | string;
    tierCode?: Prisma.StringFilter<"LoyaltyTierConfig"> | string;
    tierName?: Prisma.StringFilter<"LoyaltyTierConfig"> | string;
    tierOrder?: Prisma.IntFilter<"LoyaltyTierConfig"> | number;
    minNetSpend?: Prisma.DecimalFilter<"LoyaltyTierConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minDistinctMonths?: Prisma.IntFilter<"LoyaltyTierConfig"> | number;
    pointsMultiplier?: Prisma.DecimalFilter<"LoyaltyTierConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    benefits?: Prisma.JsonNullableFilter<"LoyaltyTierConfig">;
    isDefault?: Prisma.BoolFilter<"LoyaltyTierConfig"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyTierConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LoyaltyTierConfig"> | Date | string;
    accounts?: Prisma.LoyaltyAccountListRelationFilter;
};
export type LoyaltyTierConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tierCode?: Prisma.SortOrder;
    tierName?: Prisma.SortOrder;
    tierOrder?: Prisma.SortOrder;
    minNetSpend?: Prisma.SortOrder;
    minDistinctMonths?: Prisma.SortOrder;
    pointsMultiplier?: Prisma.SortOrder;
    benefits?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    accounts?: Prisma.LoyaltyAccountOrderByRelationAggregateInput;
};
export type LoyaltyTierConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tierCode?: string;
    AND?: Prisma.LoyaltyTierConfigWhereInput | Prisma.LoyaltyTierConfigWhereInput[];
    OR?: Prisma.LoyaltyTierConfigWhereInput[];
    NOT?: Prisma.LoyaltyTierConfigWhereInput | Prisma.LoyaltyTierConfigWhereInput[];
    tierName?: Prisma.StringFilter<"LoyaltyTierConfig"> | string;
    tierOrder?: Prisma.IntFilter<"LoyaltyTierConfig"> | number;
    minNetSpend?: Prisma.DecimalFilter<"LoyaltyTierConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minDistinctMonths?: Prisma.IntFilter<"LoyaltyTierConfig"> | number;
    pointsMultiplier?: Prisma.DecimalFilter<"LoyaltyTierConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    benefits?: Prisma.JsonNullableFilter<"LoyaltyTierConfig">;
    isDefault?: Prisma.BoolFilter<"LoyaltyTierConfig"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LoyaltyTierConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LoyaltyTierConfig"> | Date | string;
    accounts?: Prisma.LoyaltyAccountListRelationFilter;
}, "id" | "tierCode">;
export type LoyaltyTierConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tierCode?: Prisma.SortOrder;
    tierName?: Prisma.SortOrder;
    tierOrder?: Prisma.SortOrder;
    minNetSpend?: Prisma.SortOrder;
    minDistinctMonths?: Prisma.SortOrder;
    pointsMultiplier?: Prisma.SortOrder;
    benefits?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LoyaltyTierConfigCountOrderByAggregateInput;
    _avg?: Prisma.LoyaltyTierConfigAvgOrderByAggregateInput;
    _max?: Prisma.LoyaltyTierConfigMaxOrderByAggregateInput;
    _min?: Prisma.LoyaltyTierConfigMinOrderByAggregateInput;
    _sum?: Prisma.LoyaltyTierConfigSumOrderByAggregateInput;
};
export type LoyaltyTierConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.LoyaltyTierConfigScalarWhereWithAggregatesInput | Prisma.LoyaltyTierConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.LoyaltyTierConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LoyaltyTierConfigScalarWhereWithAggregatesInput | Prisma.LoyaltyTierConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"LoyaltyTierConfig"> | string;
    tierCode?: Prisma.StringWithAggregatesFilter<"LoyaltyTierConfig"> | string;
    tierName?: Prisma.StringWithAggregatesFilter<"LoyaltyTierConfig"> | string;
    tierOrder?: Prisma.IntWithAggregatesFilter<"LoyaltyTierConfig"> | number;
    minNetSpend?: Prisma.DecimalWithAggregatesFilter<"LoyaltyTierConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minDistinctMonths?: Prisma.IntWithAggregatesFilter<"LoyaltyTierConfig"> | number;
    pointsMultiplier?: Prisma.DecimalWithAggregatesFilter<"LoyaltyTierConfig"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    benefits?: Prisma.JsonNullableWithAggregatesFilter<"LoyaltyTierConfig">;
    isDefault?: Prisma.BoolWithAggregatesFilter<"LoyaltyTierConfig"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyTierConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LoyaltyTierConfig"> | Date | string;
};
export type LoyaltyTierConfigCreateInput = {
    id?: string;
    tierCode: string;
    tierName: string;
    tierOrder: number;
    minNetSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minDistinctMonths?: number;
    pointsMultiplier?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    benefits?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.LoyaltyAccountCreateNestedManyWithoutTierInput;
};
export type LoyaltyTierConfigUncheckedCreateInput = {
    id?: string;
    tierCode: string;
    tierName: string;
    tierOrder: number;
    minNetSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minDistinctMonths?: number;
    pointsMultiplier?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    benefits?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    accounts?: Prisma.LoyaltyAccountUncheckedCreateNestedManyWithoutTierInput;
};
export type LoyaltyTierConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tierCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tierName?: Prisma.StringFieldUpdateOperationsInput | string;
    tierOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    minNetSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minDistinctMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsMultiplier?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    benefits?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.LoyaltyAccountUpdateManyWithoutTierNestedInput;
};
export type LoyaltyTierConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tierCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tierName?: Prisma.StringFieldUpdateOperationsInput | string;
    tierOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    minNetSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minDistinctMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsMultiplier?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    benefits?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.LoyaltyAccountUncheckedUpdateManyWithoutTierNestedInput;
};
export type LoyaltyTierConfigCreateManyInput = {
    id?: string;
    tierCode: string;
    tierName: string;
    tierOrder: number;
    minNetSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minDistinctMonths?: number;
    pointsMultiplier?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    benefits?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoyaltyTierConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tierCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tierName?: Prisma.StringFieldUpdateOperationsInput | string;
    tierOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    minNetSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minDistinctMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsMultiplier?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    benefits?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyTierConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tierCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tierName?: Prisma.StringFieldUpdateOperationsInput | string;
    tierOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    minNetSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minDistinctMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsMultiplier?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    benefits?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyTierConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tierCode?: Prisma.SortOrder;
    tierName?: Prisma.SortOrder;
    tierOrder?: Prisma.SortOrder;
    minNetSpend?: Prisma.SortOrder;
    minDistinctMonths?: Prisma.SortOrder;
    pointsMultiplier?: Prisma.SortOrder;
    benefits?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyTierConfigAvgOrderByAggregateInput = {
    tierOrder?: Prisma.SortOrder;
    minNetSpend?: Prisma.SortOrder;
    minDistinctMonths?: Prisma.SortOrder;
    pointsMultiplier?: Prisma.SortOrder;
};
export type LoyaltyTierConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tierCode?: Prisma.SortOrder;
    tierName?: Prisma.SortOrder;
    tierOrder?: Prisma.SortOrder;
    minNetSpend?: Prisma.SortOrder;
    minDistinctMonths?: Prisma.SortOrder;
    pointsMultiplier?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyTierConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tierCode?: Prisma.SortOrder;
    tierName?: Prisma.SortOrder;
    tierOrder?: Prisma.SortOrder;
    minNetSpend?: Prisma.SortOrder;
    minDistinctMonths?: Prisma.SortOrder;
    pointsMultiplier?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LoyaltyTierConfigSumOrderByAggregateInput = {
    tierOrder?: Prisma.SortOrder;
    minNetSpend?: Prisma.SortOrder;
    minDistinctMonths?: Prisma.SortOrder;
    pointsMultiplier?: Prisma.SortOrder;
};
export type LoyaltyTierConfigNullableScalarRelationFilter = {
    is?: Prisma.LoyaltyTierConfigWhereInput | null;
    isNot?: Prisma.LoyaltyTierConfigWhereInput | null;
};
export type LoyaltyTierConfigCreateNestedOneWithoutAccountsInput = {
    create?: Prisma.XOR<Prisma.LoyaltyTierConfigCreateWithoutAccountsInput, Prisma.LoyaltyTierConfigUncheckedCreateWithoutAccountsInput>;
    connectOrCreate?: Prisma.LoyaltyTierConfigCreateOrConnectWithoutAccountsInput;
    connect?: Prisma.LoyaltyTierConfigWhereUniqueInput;
};
export type LoyaltyTierConfigUpdateOneWithoutAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.LoyaltyTierConfigCreateWithoutAccountsInput, Prisma.LoyaltyTierConfigUncheckedCreateWithoutAccountsInput>;
    connectOrCreate?: Prisma.LoyaltyTierConfigCreateOrConnectWithoutAccountsInput;
    upsert?: Prisma.LoyaltyTierConfigUpsertWithoutAccountsInput;
    disconnect?: Prisma.LoyaltyTierConfigWhereInput | boolean;
    delete?: Prisma.LoyaltyTierConfigWhereInput | boolean;
    connect?: Prisma.LoyaltyTierConfigWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LoyaltyTierConfigUpdateToOneWithWhereWithoutAccountsInput, Prisma.LoyaltyTierConfigUpdateWithoutAccountsInput>, Prisma.LoyaltyTierConfigUncheckedUpdateWithoutAccountsInput>;
};
export type LoyaltyTierConfigCreateWithoutAccountsInput = {
    id?: string;
    tierCode: string;
    tierName: string;
    tierOrder: number;
    minNetSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minDistinctMonths?: number;
    pointsMultiplier?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    benefits?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoyaltyTierConfigUncheckedCreateWithoutAccountsInput = {
    id?: string;
    tierCode: string;
    tierName: string;
    tierOrder: number;
    minNetSpend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minDistinctMonths?: number;
    pointsMultiplier?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    benefits?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDefault?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoyaltyTierConfigCreateOrConnectWithoutAccountsInput = {
    where: Prisma.LoyaltyTierConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyTierConfigCreateWithoutAccountsInput, Prisma.LoyaltyTierConfigUncheckedCreateWithoutAccountsInput>;
};
export type LoyaltyTierConfigUpsertWithoutAccountsInput = {
    update: Prisma.XOR<Prisma.LoyaltyTierConfigUpdateWithoutAccountsInput, Prisma.LoyaltyTierConfigUncheckedUpdateWithoutAccountsInput>;
    create: Prisma.XOR<Prisma.LoyaltyTierConfigCreateWithoutAccountsInput, Prisma.LoyaltyTierConfigUncheckedCreateWithoutAccountsInput>;
    where?: Prisma.LoyaltyTierConfigWhereInput;
};
export type LoyaltyTierConfigUpdateToOneWithWhereWithoutAccountsInput = {
    where?: Prisma.LoyaltyTierConfigWhereInput;
    data: Prisma.XOR<Prisma.LoyaltyTierConfigUpdateWithoutAccountsInput, Prisma.LoyaltyTierConfigUncheckedUpdateWithoutAccountsInput>;
};
export type LoyaltyTierConfigUpdateWithoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tierCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tierName?: Prisma.StringFieldUpdateOperationsInput | string;
    tierOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    minNetSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minDistinctMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsMultiplier?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    benefits?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyTierConfigUncheckedUpdateWithoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tierCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tierName?: Prisma.StringFieldUpdateOperationsInput | string;
    tierOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    minNetSpend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minDistinctMonths?: Prisma.IntFieldUpdateOperationsInput | number;
    pointsMultiplier?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    benefits?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoyaltyTierConfigCountOutputType = {
    accounts: number;
};
export type LoyaltyTierConfigCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    accounts?: boolean | LoyaltyTierConfigCountOutputTypeCountAccountsArgs;
};
export type LoyaltyTierConfigCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTierConfigCountOutputTypeSelect<ExtArgs> | null;
};
export type LoyaltyTierConfigCountOutputTypeCountAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyAccountWhereInput;
};
export type LoyaltyTierConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tierCode?: boolean;
    tierName?: boolean;
    tierOrder?: boolean;
    minNetSpend?: boolean;
    minDistinctMonths?: boolean;
    pointsMultiplier?: boolean;
    benefits?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    accounts?: boolean | Prisma.LoyaltyTierConfig$accountsArgs<ExtArgs>;
    _count?: boolean | Prisma.LoyaltyTierConfigCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["loyaltyTierConfig"]>;
export type LoyaltyTierConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tierCode?: boolean;
    tierName?: boolean;
    tierOrder?: boolean;
    minNetSpend?: boolean;
    minDistinctMonths?: boolean;
    pointsMultiplier?: boolean;
    benefits?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["loyaltyTierConfig"]>;
export type LoyaltyTierConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tierCode?: boolean;
    tierName?: boolean;
    tierOrder?: boolean;
    minNetSpend?: boolean;
    minDistinctMonths?: boolean;
    pointsMultiplier?: boolean;
    benefits?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["loyaltyTierConfig"]>;
export type LoyaltyTierConfigSelectScalar = {
    id?: boolean;
    tierCode?: boolean;
    tierName?: boolean;
    tierOrder?: boolean;
    minNetSpend?: boolean;
    minDistinctMonths?: boolean;
    pointsMultiplier?: boolean;
    benefits?: boolean;
    isDefault?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LoyaltyTierConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tierCode" | "tierName" | "tierOrder" | "minNetSpend" | "minDistinctMonths" | "pointsMultiplier" | "benefits" | "isDefault" | "createdAt" | "updatedAt", ExtArgs["result"]["loyaltyTierConfig"]>;
export type LoyaltyTierConfigInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    accounts?: boolean | Prisma.LoyaltyTierConfig$accountsArgs<ExtArgs>;
    _count?: boolean | Prisma.LoyaltyTierConfigCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LoyaltyTierConfigIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type LoyaltyTierConfigIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $LoyaltyTierConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LoyaltyTierConfig";
    objects: {
        accounts: Prisma.$LoyaltyAccountPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tierCode: string;
        tierName: string;
        tierOrder: number;
        minNetSpend: runtime.Decimal;
        minDistinctMonths: number;
        pointsMultiplier: runtime.Decimal;
        benefits: runtime.JsonValue | null;
        isDefault: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["loyaltyTierConfig"]>;
    composites: {};
};
export type LoyaltyTierConfigGetPayload<S extends boolean | null | undefined | LoyaltyTierConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LoyaltyTierConfigPayload, S>;
export type LoyaltyTierConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LoyaltyTierConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LoyaltyTierConfigCountAggregateInputType | true;
};
export interface LoyaltyTierConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LoyaltyTierConfig'];
        meta: {
            name: 'LoyaltyTierConfig';
        };
    };
    findUnique<T extends LoyaltyTierConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, LoyaltyTierConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTierConfigClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTierConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LoyaltyTierConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LoyaltyTierConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTierConfigClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTierConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LoyaltyTierConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, LoyaltyTierConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTierConfigClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTierConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LoyaltyTierConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LoyaltyTierConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTierConfigClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTierConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LoyaltyTierConfigFindManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyTierConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyTierConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LoyaltyTierConfigCreateArgs>(args: Prisma.SelectSubset<T, LoyaltyTierConfigCreateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTierConfigClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTierConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LoyaltyTierConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyTierConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LoyaltyTierConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LoyaltyTierConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyTierConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LoyaltyTierConfigDeleteArgs>(args: Prisma.SelectSubset<T, LoyaltyTierConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTierConfigClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTierConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LoyaltyTierConfigUpdateArgs>(args: Prisma.SelectSubset<T, LoyaltyTierConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTierConfigClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTierConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LoyaltyTierConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, LoyaltyTierConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LoyaltyTierConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, LoyaltyTierConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LoyaltyTierConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LoyaltyTierConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyTierConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LoyaltyTierConfigUpsertArgs>(args: Prisma.SelectSubset<T, LoyaltyTierConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__LoyaltyTierConfigClient<runtime.Types.Result.GetResult<Prisma.$LoyaltyTierConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LoyaltyTierConfigCountArgs>(args?: Prisma.Subset<T, LoyaltyTierConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LoyaltyTierConfigCountAggregateOutputType> : number>;
    aggregate<T extends LoyaltyTierConfigAggregateArgs>(args: Prisma.Subset<T, LoyaltyTierConfigAggregateArgs>): Prisma.PrismaPromise<GetLoyaltyTierConfigAggregateType<T>>;
    groupBy<T extends LoyaltyTierConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LoyaltyTierConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: LoyaltyTierConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LoyaltyTierConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoyaltyTierConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LoyaltyTierConfigFieldRefs;
}
export interface Prisma__LoyaltyTierConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    accounts<T extends Prisma.LoyaltyTierConfig$accountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LoyaltyTierConfig$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LoyaltyTierConfigFieldRefs {
    readonly id: Prisma.FieldRef<"LoyaltyTierConfig", 'String'>;
    readonly tierCode: Prisma.FieldRef<"LoyaltyTierConfig", 'String'>;
    readonly tierName: Prisma.FieldRef<"LoyaltyTierConfig", 'String'>;
    readonly tierOrder: Prisma.FieldRef<"LoyaltyTierConfig", 'Int'>;
    readonly minNetSpend: Prisma.FieldRef<"LoyaltyTierConfig", 'Decimal'>;
    readonly minDistinctMonths: Prisma.FieldRef<"LoyaltyTierConfig", 'Int'>;
    readonly pointsMultiplier: Prisma.FieldRef<"LoyaltyTierConfig", 'Decimal'>;
    readonly benefits: Prisma.FieldRef<"LoyaltyTierConfig", 'Json'>;
    readonly isDefault: Prisma.FieldRef<"LoyaltyTierConfig", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"LoyaltyTierConfig", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LoyaltyTierConfig", 'DateTime'>;
}
export type LoyaltyTierConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTierConfigOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTierConfigInclude<ExtArgs> | null;
    where: Prisma.LoyaltyTierConfigWhereUniqueInput;
};
export type LoyaltyTierConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTierConfigOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTierConfigInclude<ExtArgs> | null;
    where: Prisma.LoyaltyTierConfigWhereUniqueInput;
};
export type LoyaltyTierConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTierConfigOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTierConfigInclude<ExtArgs> | null;
    where?: Prisma.LoyaltyTierConfigWhereInput;
    orderBy?: Prisma.LoyaltyTierConfigOrderByWithRelationInput | Prisma.LoyaltyTierConfigOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyTierConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoyaltyTierConfigScalarFieldEnum | Prisma.LoyaltyTierConfigScalarFieldEnum[];
};
export type LoyaltyTierConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTierConfigOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTierConfigInclude<ExtArgs> | null;
    where?: Prisma.LoyaltyTierConfigWhereInput;
    orderBy?: Prisma.LoyaltyTierConfigOrderByWithRelationInput | Prisma.LoyaltyTierConfigOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyTierConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoyaltyTierConfigScalarFieldEnum | Prisma.LoyaltyTierConfigScalarFieldEnum[];
};
export type LoyaltyTierConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTierConfigOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTierConfigInclude<ExtArgs> | null;
    where?: Prisma.LoyaltyTierConfigWhereInput;
    orderBy?: Prisma.LoyaltyTierConfigOrderByWithRelationInput | Prisma.LoyaltyTierConfigOrderByWithRelationInput[];
    cursor?: Prisma.LoyaltyTierConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LoyaltyTierConfigScalarFieldEnum | Prisma.LoyaltyTierConfigScalarFieldEnum[];
};
export type LoyaltyTierConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTierConfigOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTierConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyTierConfigCreateInput, Prisma.LoyaltyTierConfigUncheckedCreateInput>;
};
export type LoyaltyTierConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LoyaltyTierConfigCreateManyInput | Prisma.LoyaltyTierConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LoyaltyTierConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTierConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LoyaltyTierConfigOmit<ExtArgs> | null;
    data: Prisma.LoyaltyTierConfigCreateManyInput | Prisma.LoyaltyTierConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LoyaltyTierConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTierConfigOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTierConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyTierConfigUpdateInput, Prisma.LoyaltyTierConfigUncheckedUpdateInput>;
    where: Prisma.LoyaltyTierConfigWhereUniqueInput;
};
export type LoyaltyTierConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LoyaltyTierConfigUpdateManyMutationInput, Prisma.LoyaltyTierConfigUncheckedUpdateManyInput>;
    where?: Prisma.LoyaltyTierConfigWhereInput;
    limit?: number;
};
export type LoyaltyTierConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTierConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LoyaltyTierConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LoyaltyTierConfigUpdateManyMutationInput, Prisma.LoyaltyTierConfigUncheckedUpdateManyInput>;
    where?: Prisma.LoyaltyTierConfigWhereInput;
    limit?: number;
};
export type LoyaltyTierConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTierConfigOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTierConfigInclude<ExtArgs> | null;
    where: Prisma.LoyaltyTierConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoyaltyTierConfigCreateInput, Prisma.LoyaltyTierConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LoyaltyTierConfigUpdateInput, Prisma.LoyaltyTierConfigUncheckedUpdateInput>;
};
export type LoyaltyTierConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTierConfigOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTierConfigInclude<ExtArgs> | null;
    where: Prisma.LoyaltyTierConfigWhereUniqueInput;
};
export type LoyaltyTierConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoyaltyTierConfigWhereInput;
    limit?: number;
};
export type LoyaltyTierConfig$accountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LoyaltyTierConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LoyaltyTierConfigSelect<ExtArgs> | null;
    omit?: Prisma.LoyaltyTierConfigOmit<ExtArgs> | null;
    include?: Prisma.LoyaltyTierConfigInclude<ExtArgs> | null;
};
