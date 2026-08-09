import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type replenishment_scheduleModel = runtime.Types.Result.DefaultSelection<Prisma.$replenishment_schedulePayload>;
export type AggregateReplenishment_schedule = {
    _count: Replenishment_scheduleCountAggregateOutputType | null;
    _avg: Replenishment_scheduleAvgAggregateOutputType | null;
    _sum: Replenishment_scheduleSumAggregateOutputType | null;
    _min: Replenishment_scheduleMinAggregateOutputType | null;
    _max: Replenishment_scheduleMaxAggregateOutputType | null;
};
export type Replenishment_scheduleAvgAggregateOutputType = {
    cycle_days: number | null;
    reminder_count: number | null;
};
export type Replenishment_scheduleSumAggregateOutputType = {
    cycle_days: number | null;
    reminder_count: number | null;
};
export type Replenishment_scheduleMinAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    product_id: string | null;
    cycle_days: number | null;
    cycle_source: string | null;
    last_purchase_at: Date | null;
    next_reminder_at: Date | null;
    reminder_count: number | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Replenishment_scheduleMaxAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    product_id: string | null;
    cycle_days: number | null;
    cycle_source: string | null;
    last_purchase_at: Date | null;
    next_reminder_at: Date | null;
    reminder_count: number | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Replenishment_scheduleCountAggregateOutputType = {
    id: number;
    customer_id: number;
    product_id: number;
    cycle_days: number;
    cycle_source: number;
    last_purchase_at: number;
    next_reminder_at: number;
    reminder_count: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Replenishment_scheduleAvgAggregateInputType = {
    cycle_days?: true;
    reminder_count?: true;
};
export type Replenishment_scheduleSumAggregateInputType = {
    cycle_days?: true;
    reminder_count?: true;
};
export type Replenishment_scheduleMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    product_id?: true;
    cycle_days?: true;
    cycle_source?: true;
    last_purchase_at?: true;
    next_reminder_at?: true;
    reminder_count?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Replenishment_scheduleMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    product_id?: true;
    cycle_days?: true;
    cycle_source?: true;
    last_purchase_at?: true;
    next_reminder_at?: true;
    reminder_count?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type Replenishment_scheduleCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    product_id?: true;
    cycle_days?: true;
    cycle_source?: true;
    last_purchase_at?: true;
    next_reminder_at?: true;
    reminder_count?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Replenishment_scheduleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.replenishment_scheduleWhereInput;
    orderBy?: Prisma.replenishment_scheduleOrderByWithRelationInput | Prisma.replenishment_scheduleOrderByWithRelationInput[];
    cursor?: Prisma.replenishment_scheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Replenishment_scheduleCountAggregateInputType;
    _avg?: Replenishment_scheduleAvgAggregateInputType;
    _sum?: Replenishment_scheduleSumAggregateInputType;
    _min?: Replenishment_scheduleMinAggregateInputType;
    _max?: Replenishment_scheduleMaxAggregateInputType;
};
export type GetReplenishment_scheduleAggregateType<T extends Replenishment_scheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateReplenishment_schedule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReplenishment_schedule[P]> : Prisma.GetScalarType<T[P], AggregateReplenishment_schedule[P]>;
};
export type replenishment_scheduleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.replenishment_scheduleWhereInput;
    orderBy?: Prisma.replenishment_scheduleOrderByWithAggregationInput | Prisma.replenishment_scheduleOrderByWithAggregationInput[];
    by: Prisma.Replenishment_scheduleScalarFieldEnum[] | Prisma.Replenishment_scheduleScalarFieldEnum;
    having?: Prisma.replenishment_scheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Replenishment_scheduleCountAggregateInputType | true;
    _avg?: Replenishment_scheduleAvgAggregateInputType;
    _sum?: Replenishment_scheduleSumAggregateInputType;
    _min?: Replenishment_scheduleMinAggregateInputType;
    _max?: Replenishment_scheduleMaxAggregateInputType;
};
export type Replenishment_scheduleGroupByOutputType = {
    id: string;
    customer_id: string;
    product_id: string;
    cycle_days: number;
    cycle_source: string;
    last_purchase_at: Date | null;
    next_reminder_at: Date | null;
    reminder_count: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: Replenishment_scheduleCountAggregateOutputType | null;
    _avg: Replenishment_scheduleAvgAggregateOutputType | null;
    _sum: Replenishment_scheduleSumAggregateOutputType | null;
    _min: Replenishment_scheduleMinAggregateOutputType | null;
    _max: Replenishment_scheduleMaxAggregateOutputType | null;
};
export type GetReplenishment_scheduleGroupByPayload<T extends replenishment_scheduleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Replenishment_scheduleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Replenishment_scheduleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Replenishment_scheduleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Replenishment_scheduleGroupByOutputType[P]>;
}>>;
export type replenishment_scheduleWhereInput = {
    AND?: Prisma.replenishment_scheduleWhereInput | Prisma.replenishment_scheduleWhereInput[];
    OR?: Prisma.replenishment_scheduleWhereInput[];
    NOT?: Prisma.replenishment_scheduleWhereInput | Prisma.replenishment_scheduleWhereInput[];
    id?: Prisma.UuidFilter<"replenishment_schedule"> | string;
    customer_id?: Prisma.UuidFilter<"replenishment_schedule"> | string;
    product_id?: Prisma.UuidFilter<"replenishment_schedule"> | string;
    cycle_days?: Prisma.IntFilter<"replenishment_schedule"> | number;
    cycle_source?: Prisma.StringFilter<"replenishment_schedule"> | string;
    last_purchase_at?: Prisma.DateTimeNullableFilter<"replenishment_schedule"> | Date | string | null;
    next_reminder_at?: Prisma.DateTimeNullableFilter<"replenishment_schedule"> | Date | string | null;
    reminder_count?: Prisma.IntFilter<"replenishment_schedule"> | number;
    is_active?: Prisma.BoolFilter<"replenishment_schedule"> | boolean;
    created_at?: Prisma.DateTimeFilter<"replenishment_schedule"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"replenishment_schedule"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type replenishment_scheduleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    cycle_days?: Prisma.SortOrder;
    cycle_source?: Prisma.SortOrder;
    last_purchase_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    next_reminder_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    reminder_count?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type replenishment_scheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    customer_id_product_id?: Prisma.replenishment_scheduleCustomer_idProduct_idCompoundUniqueInput;
    AND?: Prisma.replenishment_scheduleWhereInput | Prisma.replenishment_scheduleWhereInput[];
    OR?: Prisma.replenishment_scheduleWhereInput[];
    NOT?: Prisma.replenishment_scheduleWhereInput | Prisma.replenishment_scheduleWhereInput[];
    customer_id?: Prisma.UuidFilter<"replenishment_schedule"> | string;
    product_id?: Prisma.UuidFilter<"replenishment_schedule"> | string;
    cycle_days?: Prisma.IntFilter<"replenishment_schedule"> | number;
    cycle_source?: Prisma.StringFilter<"replenishment_schedule"> | string;
    last_purchase_at?: Prisma.DateTimeNullableFilter<"replenishment_schedule"> | Date | string | null;
    next_reminder_at?: Prisma.DateTimeNullableFilter<"replenishment_schedule"> | Date | string | null;
    reminder_count?: Prisma.IntFilter<"replenishment_schedule"> | number;
    is_active?: Prisma.BoolFilter<"replenishment_schedule"> | boolean;
    created_at?: Prisma.DateTimeFilter<"replenishment_schedule"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"replenishment_schedule"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id" | "customer_id_product_id">;
export type replenishment_scheduleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    cycle_days?: Prisma.SortOrder;
    cycle_source?: Prisma.SortOrder;
    last_purchase_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    next_reminder_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    reminder_count?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.replenishment_scheduleCountOrderByAggregateInput;
    _avg?: Prisma.replenishment_scheduleAvgOrderByAggregateInput;
    _max?: Prisma.replenishment_scheduleMaxOrderByAggregateInput;
    _min?: Prisma.replenishment_scheduleMinOrderByAggregateInput;
    _sum?: Prisma.replenishment_scheduleSumOrderByAggregateInput;
};
export type replenishment_scheduleScalarWhereWithAggregatesInput = {
    AND?: Prisma.replenishment_scheduleScalarWhereWithAggregatesInput | Prisma.replenishment_scheduleScalarWhereWithAggregatesInput[];
    OR?: Prisma.replenishment_scheduleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.replenishment_scheduleScalarWhereWithAggregatesInput | Prisma.replenishment_scheduleScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"replenishment_schedule"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"replenishment_schedule"> | string;
    product_id?: Prisma.UuidWithAggregatesFilter<"replenishment_schedule"> | string;
    cycle_days?: Prisma.IntWithAggregatesFilter<"replenishment_schedule"> | number;
    cycle_source?: Prisma.StringWithAggregatesFilter<"replenishment_schedule"> | string;
    last_purchase_at?: Prisma.DateTimeNullableWithAggregatesFilter<"replenishment_schedule"> | Date | string | null;
    next_reminder_at?: Prisma.DateTimeNullableWithAggregatesFilter<"replenishment_schedule"> | Date | string | null;
    reminder_count?: Prisma.IntWithAggregatesFilter<"replenishment_schedule"> | number;
    is_active?: Prisma.BoolWithAggregatesFilter<"replenishment_schedule"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"replenishment_schedule"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"replenishment_schedule"> | Date | string;
};
export type replenishment_scheduleCreateInput = {
    id?: string;
    cycle_days: number;
    cycle_source: string;
    last_purchase_at?: Date | string | null;
    next_reminder_at?: Date | string | null;
    reminder_count?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutReplenishment_scheduleInput;
    product: Prisma.ProductCreateNestedOneWithoutReplenishment_scheduleInput;
};
export type replenishment_scheduleUncheckedCreateInput = {
    id?: string;
    customer_id: string;
    product_id: string;
    cycle_days: number;
    cycle_source: string;
    last_purchase_at?: Date | string | null;
    next_reminder_at?: Date | string | null;
    reminder_count?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type replenishment_scheduleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycle_days?: Prisma.IntFieldUpdateOperationsInput | number;
    cycle_source?: Prisma.StringFieldUpdateOperationsInput | string;
    last_purchase_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    next_reminder_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminder_count?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReplenishment_scheduleNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutReplenishment_scheduleNestedInput;
};
export type replenishment_scheduleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycle_days?: Prisma.IntFieldUpdateOperationsInput | number;
    cycle_source?: Prisma.StringFieldUpdateOperationsInput | string;
    last_purchase_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    next_reminder_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminder_count?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type replenishment_scheduleCreateManyInput = {
    id?: string;
    customer_id: string;
    product_id: string;
    cycle_days: number;
    cycle_source: string;
    last_purchase_at?: Date | string | null;
    next_reminder_at?: Date | string | null;
    reminder_count?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type replenishment_scheduleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycle_days?: Prisma.IntFieldUpdateOperationsInput | number;
    cycle_source?: Prisma.StringFieldUpdateOperationsInput | string;
    last_purchase_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    next_reminder_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminder_count?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type replenishment_scheduleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycle_days?: Prisma.IntFieldUpdateOperationsInput | number;
    cycle_source?: Prisma.StringFieldUpdateOperationsInput | string;
    last_purchase_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    next_reminder_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminder_count?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Replenishment_scheduleListRelationFilter = {
    every?: Prisma.replenishment_scheduleWhereInput;
    some?: Prisma.replenishment_scheduleWhereInput;
    none?: Prisma.replenishment_scheduleWhereInput;
};
export type replenishment_scheduleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type replenishment_scheduleCustomer_idProduct_idCompoundUniqueInput = {
    customer_id: string;
    product_id: string;
};
export type replenishment_scheduleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    cycle_days?: Prisma.SortOrder;
    cycle_source?: Prisma.SortOrder;
    last_purchase_at?: Prisma.SortOrder;
    next_reminder_at?: Prisma.SortOrder;
    reminder_count?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type replenishment_scheduleAvgOrderByAggregateInput = {
    cycle_days?: Prisma.SortOrder;
    reminder_count?: Prisma.SortOrder;
};
export type replenishment_scheduleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    cycle_days?: Prisma.SortOrder;
    cycle_source?: Prisma.SortOrder;
    last_purchase_at?: Prisma.SortOrder;
    next_reminder_at?: Prisma.SortOrder;
    reminder_count?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type replenishment_scheduleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    cycle_days?: Prisma.SortOrder;
    cycle_source?: Prisma.SortOrder;
    last_purchase_at?: Prisma.SortOrder;
    next_reminder_at?: Prisma.SortOrder;
    reminder_count?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type replenishment_scheduleSumOrderByAggregateInput = {
    cycle_days?: Prisma.SortOrder;
    reminder_count?: Prisma.SortOrder;
};
export type replenishment_scheduleCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.replenishment_scheduleCreateWithoutCustomerInput, Prisma.replenishment_scheduleUncheckedCreateWithoutCustomerInput> | Prisma.replenishment_scheduleCreateWithoutCustomerInput[] | Prisma.replenishment_scheduleUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.replenishment_scheduleCreateOrConnectWithoutCustomerInput | Prisma.replenishment_scheduleCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.replenishment_scheduleCreateManyCustomerInputEnvelope;
    connect?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
};
export type replenishment_scheduleUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.replenishment_scheduleCreateWithoutCustomerInput, Prisma.replenishment_scheduleUncheckedCreateWithoutCustomerInput> | Prisma.replenishment_scheduleCreateWithoutCustomerInput[] | Prisma.replenishment_scheduleUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.replenishment_scheduleCreateOrConnectWithoutCustomerInput | Prisma.replenishment_scheduleCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.replenishment_scheduleCreateManyCustomerInputEnvelope;
    connect?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
};
export type replenishment_scheduleUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.replenishment_scheduleCreateWithoutCustomerInput, Prisma.replenishment_scheduleUncheckedCreateWithoutCustomerInput> | Prisma.replenishment_scheduleCreateWithoutCustomerInput[] | Prisma.replenishment_scheduleUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.replenishment_scheduleCreateOrConnectWithoutCustomerInput | Prisma.replenishment_scheduleCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.replenishment_scheduleUpsertWithWhereUniqueWithoutCustomerInput | Prisma.replenishment_scheduleUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.replenishment_scheduleCreateManyCustomerInputEnvelope;
    set?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    disconnect?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    delete?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    connect?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    update?: Prisma.replenishment_scheduleUpdateWithWhereUniqueWithoutCustomerInput | Prisma.replenishment_scheduleUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.replenishment_scheduleUpdateManyWithWhereWithoutCustomerInput | Prisma.replenishment_scheduleUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.replenishment_scheduleScalarWhereInput | Prisma.replenishment_scheduleScalarWhereInput[];
};
export type replenishment_scheduleUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.replenishment_scheduleCreateWithoutCustomerInput, Prisma.replenishment_scheduleUncheckedCreateWithoutCustomerInput> | Prisma.replenishment_scheduleCreateWithoutCustomerInput[] | Prisma.replenishment_scheduleUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.replenishment_scheduleCreateOrConnectWithoutCustomerInput | Prisma.replenishment_scheduleCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.replenishment_scheduleUpsertWithWhereUniqueWithoutCustomerInput | Prisma.replenishment_scheduleUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.replenishment_scheduleCreateManyCustomerInputEnvelope;
    set?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    disconnect?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    delete?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    connect?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    update?: Prisma.replenishment_scheduleUpdateWithWhereUniqueWithoutCustomerInput | Prisma.replenishment_scheduleUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.replenishment_scheduleUpdateManyWithWhereWithoutCustomerInput | Prisma.replenishment_scheduleUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.replenishment_scheduleScalarWhereInput | Prisma.replenishment_scheduleScalarWhereInput[];
};
export type replenishment_scheduleCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.replenishment_scheduleCreateWithoutProductInput, Prisma.replenishment_scheduleUncheckedCreateWithoutProductInput> | Prisma.replenishment_scheduleCreateWithoutProductInput[] | Prisma.replenishment_scheduleUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.replenishment_scheduleCreateOrConnectWithoutProductInput | Prisma.replenishment_scheduleCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.replenishment_scheduleCreateManyProductInputEnvelope;
    connect?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
};
export type replenishment_scheduleUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.replenishment_scheduleCreateWithoutProductInput, Prisma.replenishment_scheduleUncheckedCreateWithoutProductInput> | Prisma.replenishment_scheduleCreateWithoutProductInput[] | Prisma.replenishment_scheduleUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.replenishment_scheduleCreateOrConnectWithoutProductInput | Prisma.replenishment_scheduleCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.replenishment_scheduleCreateManyProductInputEnvelope;
    connect?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
};
export type replenishment_scheduleUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.replenishment_scheduleCreateWithoutProductInput, Prisma.replenishment_scheduleUncheckedCreateWithoutProductInput> | Prisma.replenishment_scheduleCreateWithoutProductInput[] | Prisma.replenishment_scheduleUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.replenishment_scheduleCreateOrConnectWithoutProductInput | Prisma.replenishment_scheduleCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.replenishment_scheduleUpsertWithWhereUniqueWithoutProductInput | Prisma.replenishment_scheduleUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.replenishment_scheduleCreateManyProductInputEnvelope;
    set?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    disconnect?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    delete?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    connect?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    update?: Prisma.replenishment_scheduleUpdateWithWhereUniqueWithoutProductInput | Prisma.replenishment_scheduleUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.replenishment_scheduleUpdateManyWithWhereWithoutProductInput | Prisma.replenishment_scheduleUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.replenishment_scheduleScalarWhereInput | Prisma.replenishment_scheduleScalarWhereInput[];
};
export type replenishment_scheduleUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.replenishment_scheduleCreateWithoutProductInput, Prisma.replenishment_scheduleUncheckedCreateWithoutProductInput> | Prisma.replenishment_scheduleCreateWithoutProductInput[] | Prisma.replenishment_scheduleUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.replenishment_scheduleCreateOrConnectWithoutProductInput | Prisma.replenishment_scheduleCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.replenishment_scheduleUpsertWithWhereUniqueWithoutProductInput | Prisma.replenishment_scheduleUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.replenishment_scheduleCreateManyProductInputEnvelope;
    set?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    disconnect?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    delete?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    connect?: Prisma.replenishment_scheduleWhereUniqueInput | Prisma.replenishment_scheduleWhereUniqueInput[];
    update?: Prisma.replenishment_scheduleUpdateWithWhereUniqueWithoutProductInput | Prisma.replenishment_scheduleUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.replenishment_scheduleUpdateManyWithWhereWithoutProductInput | Prisma.replenishment_scheduleUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.replenishment_scheduleScalarWhereInput | Prisma.replenishment_scheduleScalarWhereInput[];
};
export type replenishment_scheduleCreateWithoutCustomerInput = {
    id?: string;
    cycle_days: number;
    cycle_source: string;
    last_purchase_at?: Date | string | null;
    next_reminder_at?: Date | string | null;
    reminder_count?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutReplenishment_scheduleInput;
};
export type replenishment_scheduleUncheckedCreateWithoutCustomerInput = {
    id?: string;
    product_id: string;
    cycle_days: number;
    cycle_source: string;
    last_purchase_at?: Date | string | null;
    next_reminder_at?: Date | string | null;
    reminder_count?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type replenishment_scheduleCreateOrConnectWithoutCustomerInput = {
    where: Prisma.replenishment_scheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.replenishment_scheduleCreateWithoutCustomerInput, Prisma.replenishment_scheduleUncheckedCreateWithoutCustomerInput>;
};
export type replenishment_scheduleCreateManyCustomerInputEnvelope = {
    data: Prisma.replenishment_scheduleCreateManyCustomerInput | Prisma.replenishment_scheduleCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type replenishment_scheduleUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.replenishment_scheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.replenishment_scheduleUpdateWithoutCustomerInput, Prisma.replenishment_scheduleUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.replenishment_scheduleCreateWithoutCustomerInput, Prisma.replenishment_scheduleUncheckedCreateWithoutCustomerInput>;
};
export type replenishment_scheduleUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.replenishment_scheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.replenishment_scheduleUpdateWithoutCustomerInput, Prisma.replenishment_scheduleUncheckedUpdateWithoutCustomerInput>;
};
export type replenishment_scheduleUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.replenishment_scheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.replenishment_scheduleUpdateManyMutationInput, Prisma.replenishment_scheduleUncheckedUpdateManyWithoutCustomerInput>;
};
export type replenishment_scheduleScalarWhereInput = {
    AND?: Prisma.replenishment_scheduleScalarWhereInput | Prisma.replenishment_scheduleScalarWhereInput[];
    OR?: Prisma.replenishment_scheduleScalarWhereInput[];
    NOT?: Prisma.replenishment_scheduleScalarWhereInput | Prisma.replenishment_scheduleScalarWhereInput[];
    id?: Prisma.UuidFilter<"replenishment_schedule"> | string;
    customer_id?: Prisma.UuidFilter<"replenishment_schedule"> | string;
    product_id?: Prisma.UuidFilter<"replenishment_schedule"> | string;
    cycle_days?: Prisma.IntFilter<"replenishment_schedule"> | number;
    cycle_source?: Prisma.StringFilter<"replenishment_schedule"> | string;
    last_purchase_at?: Prisma.DateTimeNullableFilter<"replenishment_schedule"> | Date | string | null;
    next_reminder_at?: Prisma.DateTimeNullableFilter<"replenishment_schedule"> | Date | string | null;
    reminder_count?: Prisma.IntFilter<"replenishment_schedule"> | number;
    is_active?: Prisma.BoolFilter<"replenishment_schedule"> | boolean;
    created_at?: Prisma.DateTimeFilter<"replenishment_schedule"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"replenishment_schedule"> | Date | string;
};
export type replenishment_scheduleCreateWithoutProductInput = {
    id?: string;
    cycle_days: number;
    cycle_source: string;
    last_purchase_at?: Date | string | null;
    next_reminder_at?: Date | string | null;
    reminder_count?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutReplenishment_scheduleInput;
};
export type replenishment_scheduleUncheckedCreateWithoutProductInput = {
    id?: string;
    customer_id: string;
    cycle_days: number;
    cycle_source: string;
    last_purchase_at?: Date | string | null;
    next_reminder_at?: Date | string | null;
    reminder_count?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type replenishment_scheduleCreateOrConnectWithoutProductInput = {
    where: Prisma.replenishment_scheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.replenishment_scheduleCreateWithoutProductInput, Prisma.replenishment_scheduleUncheckedCreateWithoutProductInput>;
};
export type replenishment_scheduleCreateManyProductInputEnvelope = {
    data: Prisma.replenishment_scheduleCreateManyProductInput | Prisma.replenishment_scheduleCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type replenishment_scheduleUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.replenishment_scheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.replenishment_scheduleUpdateWithoutProductInput, Prisma.replenishment_scheduleUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.replenishment_scheduleCreateWithoutProductInput, Prisma.replenishment_scheduleUncheckedCreateWithoutProductInput>;
};
export type replenishment_scheduleUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.replenishment_scheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.replenishment_scheduleUpdateWithoutProductInput, Prisma.replenishment_scheduleUncheckedUpdateWithoutProductInput>;
};
export type replenishment_scheduleUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.replenishment_scheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.replenishment_scheduleUpdateManyMutationInput, Prisma.replenishment_scheduleUncheckedUpdateManyWithoutProductInput>;
};
export type replenishment_scheduleCreateManyCustomerInput = {
    id?: string;
    product_id: string;
    cycle_days: number;
    cycle_source: string;
    last_purchase_at?: Date | string | null;
    next_reminder_at?: Date | string | null;
    reminder_count?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type replenishment_scheduleUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycle_days?: Prisma.IntFieldUpdateOperationsInput | number;
    cycle_source?: Prisma.StringFieldUpdateOperationsInput | string;
    last_purchase_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    next_reminder_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminder_count?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutReplenishment_scheduleNestedInput;
};
export type replenishment_scheduleUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycle_days?: Prisma.IntFieldUpdateOperationsInput | number;
    cycle_source?: Prisma.StringFieldUpdateOperationsInput | string;
    last_purchase_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    next_reminder_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminder_count?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type replenishment_scheduleUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycle_days?: Prisma.IntFieldUpdateOperationsInput | number;
    cycle_source?: Prisma.StringFieldUpdateOperationsInput | string;
    last_purchase_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    next_reminder_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminder_count?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type replenishment_scheduleCreateManyProductInput = {
    id?: string;
    customer_id: string;
    cycle_days: number;
    cycle_source: string;
    last_purchase_at?: Date | string | null;
    next_reminder_at?: Date | string | null;
    reminder_count?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type replenishment_scheduleUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycle_days?: Prisma.IntFieldUpdateOperationsInput | number;
    cycle_source?: Prisma.StringFieldUpdateOperationsInput | string;
    last_purchase_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    next_reminder_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminder_count?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReplenishment_scheduleNestedInput;
};
export type replenishment_scheduleUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycle_days?: Prisma.IntFieldUpdateOperationsInput | number;
    cycle_source?: Prisma.StringFieldUpdateOperationsInput | string;
    last_purchase_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    next_reminder_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminder_count?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type replenishment_scheduleUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycle_days?: Prisma.IntFieldUpdateOperationsInput | number;
    cycle_source?: Prisma.StringFieldUpdateOperationsInput | string;
    last_purchase_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    next_reminder_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reminder_count?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type replenishment_scheduleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    product_id?: boolean;
    cycle_days?: boolean;
    cycle_source?: boolean;
    last_purchase_at?: boolean;
    next_reminder_at?: boolean;
    reminder_count?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["replenishment_schedule"]>;
export type replenishment_scheduleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    product_id?: boolean;
    cycle_days?: boolean;
    cycle_source?: boolean;
    last_purchase_at?: boolean;
    next_reminder_at?: boolean;
    reminder_count?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["replenishment_schedule"]>;
export type replenishment_scheduleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    product_id?: boolean;
    cycle_days?: boolean;
    cycle_source?: boolean;
    last_purchase_at?: boolean;
    next_reminder_at?: boolean;
    reminder_count?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["replenishment_schedule"]>;
export type replenishment_scheduleSelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    product_id?: boolean;
    cycle_days?: boolean;
    cycle_source?: boolean;
    last_purchase_at?: boolean;
    next_reminder_at?: boolean;
    reminder_count?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type replenishment_scheduleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "product_id" | "cycle_days" | "cycle_source" | "last_purchase_at" | "next_reminder_at" | "reminder_count" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["replenishment_schedule"]>;
export type replenishment_scheduleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type replenishment_scheduleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type replenishment_scheduleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $replenishment_schedulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "replenishment_schedule";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customer_id: string;
        product_id: string;
        cycle_days: number;
        cycle_source: string;
        last_purchase_at: Date | null;
        next_reminder_at: Date | null;
        reminder_count: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["replenishment_schedule"]>;
    composites: {};
};
export type replenishment_scheduleGetPayload<S extends boolean | null | undefined | replenishment_scheduleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$replenishment_schedulePayload, S>;
export type replenishment_scheduleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<replenishment_scheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Replenishment_scheduleCountAggregateInputType | true;
};
export interface replenishment_scheduleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['replenishment_schedule'];
        meta: {
            name: 'replenishment_schedule';
        };
    };
    findUnique<T extends replenishment_scheduleFindUniqueArgs>(args: Prisma.SelectSubset<T, replenishment_scheduleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__replenishment_scheduleClient<runtime.Types.Result.GetResult<Prisma.$replenishment_schedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends replenishment_scheduleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, replenishment_scheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__replenishment_scheduleClient<runtime.Types.Result.GetResult<Prisma.$replenishment_schedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends replenishment_scheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, replenishment_scheduleFindFirstArgs<ExtArgs>>): Prisma.Prisma__replenishment_scheduleClient<runtime.Types.Result.GetResult<Prisma.$replenishment_schedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends replenishment_scheduleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, replenishment_scheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__replenishment_scheduleClient<runtime.Types.Result.GetResult<Prisma.$replenishment_schedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends replenishment_scheduleFindManyArgs>(args?: Prisma.SelectSubset<T, replenishment_scheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$replenishment_schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends replenishment_scheduleCreateArgs>(args: Prisma.SelectSubset<T, replenishment_scheduleCreateArgs<ExtArgs>>): Prisma.Prisma__replenishment_scheduleClient<runtime.Types.Result.GetResult<Prisma.$replenishment_schedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends replenishment_scheduleCreateManyArgs>(args?: Prisma.SelectSubset<T, replenishment_scheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends replenishment_scheduleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, replenishment_scheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$replenishment_schedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends replenishment_scheduleDeleteArgs>(args: Prisma.SelectSubset<T, replenishment_scheduleDeleteArgs<ExtArgs>>): Prisma.Prisma__replenishment_scheduleClient<runtime.Types.Result.GetResult<Prisma.$replenishment_schedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends replenishment_scheduleUpdateArgs>(args: Prisma.SelectSubset<T, replenishment_scheduleUpdateArgs<ExtArgs>>): Prisma.Prisma__replenishment_scheduleClient<runtime.Types.Result.GetResult<Prisma.$replenishment_schedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends replenishment_scheduleDeleteManyArgs>(args?: Prisma.SelectSubset<T, replenishment_scheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends replenishment_scheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, replenishment_scheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends replenishment_scheduleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, replenishment_scheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$replenishment_schedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends replenishment_scheduleUpsertArgs>(args: Prisma.SelectSubset<T, replenishment_scheduleUpsertArgs<ExtArgs>>): Prisma.Prisma__replenishment_scheduleClient<runtime.Types.Result.GetResult<Prisma.$replenishment_schedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends replenishment_scheduleCountArgs>(args?: Prisma.Subset<T, replenishment_scheduleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Replenishment_scheduleCountAggregateOutputType> : number>;
    aggregate<T extends Replenishment_scheduleAggregateArgs>(args: Prisma.Subset<T, Replenishment_scheduleAggregateArgs>): Prisma.PrismaPromise<GetReplenishment_scheduleAggregateType<T>>;
    groupBy<T extends replenishment_scheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: replenishment_scheduleGroupByArgs['orderBy'];
    } : {
        orderBy?: replenishment_scheduleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, replenishment_scheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplenishment_scheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: replenishment_scheduleFieldRefs;
}
export interface Prisma__replenishment_scheduleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface replenishment_scheduleFieldRefs {
    readonly id: Prisma.FieldRef<"replenishment_schedule", 'String'>;
    readonly customer_id: Prisma.FieldRef<"replenishment_schedule", 'String'>;
    readonly product_id: Prisma.FieldRef<"replenishment_schedule", 'String'>;
    readonly cycle_days: Prisma.FieldRef<"replenishment_schedule", 'Int'>;
    readonly cycle_source: Prisma.FieldRef<"replenishment_schedule", 'String'>;
    readonly last_purchase_at: Prisma.FieldRef<"replenishment_schedule", 'DateTime'>;
    readonly next_reminder_at: Prisma.FieldRef<"replenishment_schedule", 'DateTime'>;
    readonly reminder_count: Prisma.FieldRef<"replenishment_schedule", 'Int'>;
    readonly is_active: Prisma.FieldRef<"replenishment_schedule", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"replenishment_schedule", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"replenishment_schedule", 'DateTime'>;
}
export type replenishment_scheduleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.replenishment_scheduleSelect<ExtArgs> | null;
    omit?: Prisma.replenishment_scheduleOmit<ExtArgs> | null;
    include?: Prisma.replenishment_scheduleInclude<ExtArgs> | null;
    where: Prisma.replenishment_scheduleWhereUniqueInput;
};
export type replenishment_scheduleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.replenishment_scheduleSelect<ExtArgs> | null;
    omit?: Prisma.replenishment_scheduleOmit<ExtArgs> | null;
    include?: Prisma.replenishment_scheduleInclude<ExtArgs> | null;
    where: Prisma.replenishment_scheduleWhereUniqueInput;
};
export type replenishment_scheduleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.replenishment_scheduleSelect<ExtArgs> | null;
    omit?: Prisma.replenishment_scheduleOmit<ExtArgs> | null;
    include?: Prisma.replenishment_scheduleInclude<ExtArgs> | null;
    where?: Prisma.replenishment_scheduleWhereInput;
    orderBy?: Prisma.replenishment_scheduleOrderByWithRelationInput | Prisma.replenishment_scheduleOrderByWithRelationInput[];
    cursor?: Prisma.replenishment_scheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Replenishment_scheduleScalarFieldEnum | Prisma.Replenishment_scheduleScalarFieldEnum[];
};
export type replenishment_scheduleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.replenishment_scheduleSelect<ExtArgs> | null;
    omit?: Prisma.replenishment_scheduleOmit<ExtArgs> | null;
    include?: Prisma.replenishment_scheduleInclude<ExtArgs> | null;
    where?: Prisma.replenishment_scheduleWhereInput;
    orderBy?: Prisma.replenishment_scheduleOrderByWithRelationInput | Prisma.replenishment_scheduleOrderByWithRelationInput[];
    cursor?: Prisma.replenishment_scheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Replenishment_scheduleScalarFieldEnum | Prisma.Replenishment_scheduleScalarFieldEnum[];
};
export type replenishment_scheduleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.replenishment_scheduleSelect<ExtArgs> | null;
    omit?: Prisma.replenishment_scheduleOmit<ExtArgs> | null;
    include?: Prisma.replenishment_scheduleInclude<ExtArgs> | null;
    where?: Prisma.replenishment_scheduleWhereInput;
    orderBy?: Prisma.replenishment_scheduleOrderByWithRelationInput | Prisma.replenishment_scheduleOrderByWithRelationInput[];
    cursor?: Prisma.replenishment_scheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Replenishment_scheduleScalarFieldEnum | Prisma.Replenishment_scheduleScalarFieldEnum[];
};
export type replenishment_scheduleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.replenishment_scheduleSelect<ExtArgs> | null;
    omit?: Prisma.replenishment_scheduleOmit<ExtArgs> | null;
    include?: Prisma.replenishment_scheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.replenishment_scheduleCreateInput, Prisma.replenishment_scheduleUncheckedCreateInput>;
};
export type replenishment_scheduleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.replenishment_scheduleCreateManyInput | Prisma.replenishment_scheduleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type replenishment_scheduleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.replenishment_scheduleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.replenishment_scheduleOmit<ExtArgs> | null;
    data: Prisma.replenishment_scheduleCreateManyInput | Prisma.replenishment_scheduleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.replenishment_scheduleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type replenishment_scheduleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.replenishment_scheduleSelect<ExtArgs> | null;
    omit?: Prisma.replenishment_scheduleOmit<ExtArgs> | null;
    include?: Prisma.replenishment_scheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.replenishment_scheduleUpdateInput, Prisma.replenishment_scheduleUncheckedUpdateInput>;
    where: Prisma.replenishment_scheduleWhereUniqueInput;
};
export type replenishment_scheduleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.replenishment_scheduleUpdateManyMutationInput, Prisma.replenishment_scheduleUncheckedUpdateManyInput>;
    where?: Prisma.replenishment_scheduleWhereInput;
    limit?: number;
};
export type replenishment_scheduleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.replenishment_scheduleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.replenishment_scheduleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.replenishment_scheduleUpdateManyMutationInput, Prisma.replenishment_scheduleUncheckedUpdateManyInput>;
    where?: Prisma.replenishment_scheduleWhereInput;
    limit?: number;
    include?: Prisma.replenishment_scheduleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type replenishment_scheduleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.replenishment_scheduleSelect<ExtArgs> | null;
    omit?: Prisma.replenishment_scheduleOmit<ExtArgs> | null;
    include?: Prisma.replenishment_scheduleInclude<ExtArgs> | null;
    where: Prisma.replenishment_scheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.replenishment_scheduleCreateInput, Prisma.replenishment_scheduleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.replenishment_scheduleUpdateInput, Prisma.replenishment_scheduleUncheckedUpdateInput>;
};
export type replenishment_scheduleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.replenishment_scheduleSelect<ExtArgs> | null;
    omit?: Prisma.replenishment_scheduleOmit<ExtArgs> | null;
    include?: Prisma.replenishment_scheduleInclude<ExtArgs> | null;
    where: Prisma.replenishment_scheduleWhereUniqueInput;
};
export type replenishment_scheduleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.replenishment_scheduleWhereInput;
    limit?: number;
};
export type replenishment_scheduleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.replenishment_scheduleSelect<ExtArgs> | null;
    omit?: Prisma.replenishment_scheduleOmit<ExtArgs> | null;
    include?: Prisma.replenishment_scheduleInclude<ExtArgs> | null;
};
