import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type customer_metrics_dailyModel = runtime.Types.Result.DefaultSelection<Prisma.$customer_metrics_dailyPayload>;
export type AggregateCustomer_metrics_daily = {
    _count: Customer_metrics_dailyCountAggregateOutputType | null;
    _avg: Customer_metrics_dailyAvgAggregateOutputType | null;
    _sum: Customer_metrics_dailySumAggregateOutputType | null;
    _min: Customer_metrics_dailyMinAggregateOutputType | null;
    _max: Customer_metrics_dailyMaxAggregateOutputType | null;
};
export type Customer_metrics_dailyAvgAggregateOutputType = {
    total_orders: number | null;
    total_revenue: runtime.Decimal | null;
    total_items: number | null;
    page_views: number | null;
    sessions: number | null;
    points_earned: number | null;
    points_spent: number | null;
};
export type Customer_metrics_dailySumAggregateOutputType = {
    total_orders: number | null;
    total_revenue: runtime.Decimal | null;
    total_items: number | null;
    page_views: number | null;
    sessions: number | null;
    points_earned: number | null;
    points_spent: number | null;
};
export type Customer_metrics_dailyMinAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    date: Date | null;
    total_orders: number | null;
    total_revenue: runtime.Decimal | null;
    total_items: number | null;
    page_views: number | null;
    sessions: number | null;
    points_earned: number | null;
    points_spent: number | null;
    created_at: Date | null;
};
export type Customer_metrics_dailyMaxAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    date: Date | null;
    total_orders: number | null;
    total_revenue: runtime.Decimal | null;
    total_items: number | null;
    page_views: number | null;
    sessions: number | null;
    points_earned: number | null;
    points_spent: number | null;
    created_at: Date | null;
};
export type Customer_metrics_dailyCountAggregateOutputType = {
    id: number;
    customer_id: number;
    date: number;
    total_orders: number;
    total_revenue: number;
    total_items: number;
    page_views: number;
    sessions: number;
    points_earned: number;
    points_spent: number;
    created_at: number;
    _all: number;
};
export type Customer_metrics_dailyAvgAggregateInputType = {
    total_orders?: true;
    total_revenue?: true;
    total_items?: true;
    page_views?: true;
    sessions?: true;
    points_earned?: true;
    points_spent?: true;
};
export type Customer_metrics_dailySumAggregateInputType = {
    total_orders?: true;
    total_revenue?: true;
    total_items?: true;
    page_views?: true;
    sessions?: true;
    points_earned?: true;
    points_spent?: true;
};
export type Customer_metrics_dailyMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    date?: true;
    total_orders?: true;
    total_revenue?: true;
    total_items?: true;
    page_views?: true;
    sessions?: true;
    points_earned?: true;
    points_spent?: true;
    created_at?: true;
};
export type Customer_metrics_dailyMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    date?: true;
    total_orders?: true;
    total_revenue?: true;
    total_items?: true;
    page_views?: true;
    sessions?: true;
    points_earned?: true;
    points_spent?: true;
    created_at?: true;
};
export type Customer_metrics_dailyCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    date?: true;
    total_orders?: true;
    total_revenue?: true;
    total_items?: true;
    page_views?: true;
    sessions?: true;
    points_earned?: true;
    points_spent?: true;
    created_at?: true;
    _all?: true;
};
export type Customer_metrics_dailyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customer_metrics_dailyWhereInput;
    orderBy?: Prisma.customer_metrics_dailyOrderByWithRelationInput | Prisma.customer_metrics_dailyOrderByWithRelationInput[];
    cursor?: Prisma.customer_metrics_dailyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Customer_metrics_dailyCountAggregateInputType;
    _avg?: Customer_metrics_dailyAvgAggregateInputType;
    _sum?: Customer_metrics_dailySumAggregateInputType;
    _min?: Customer_metrics_dailyMinAggregateInputType;
    _max?: Customer_metrics_dailyMaxAggregateInputType;
};
export type GetCustomer_metrics_dailyAggregateType<T extends Customer_metrics_dailyAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer_metrics_daily]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomer_metrics_daily[P]> : Prisma.GetScalarType<T[P], AggregateCustomer_metrics_daily[P]>;
};
export type customer_metrics_dailyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customer_metrics_dailyWhereInput;
    orderBy?: Prisma.customer_metrics_dailyOrderByWithAggregationInput | Prisma.customer_metrics_dailyOrderByWithAggregationInput[];
    by: Prisma.Customer_metrics_dailyScalarFieldEnum[] | Prisma.Customer_metrics_dailyScalarFieldEnum;
    having?: Prisma.customer_metrics_dailyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Customer_metrics_dailyCountAggregateInputType | true;
    _avg?: Customer_metrics_dailyAvgAggregateInputType;
    _sum?: Customer_metrics_dailySumAggregateInputType;
    _min?: Customer_metrics_dailyMinAggregateInputType;
    _max?: Customer_metrics_dailyMaxAggregateInputType;
};
export type Customer_metrics_dailyGroupByOutputType = {
    id: string;
    customer_id: string;
    date: Date;
    total_orders: number;
    total_revenue: runtime.Decimal;
    total_items: number;
    page_views: number;
    sessions: number;
    points_earned: number;
    points_spent: number;
    created_at: Date;
    _count: Customer_metrics_dailyCountAggregateOutputType | null;
    _avg: Customer_metrics_dailyAvgAggregateOutputType | null;
    _sum: Customer_metrics_dailySumAggregateOutputType | null;
    _min: Customer_metrics_dailyMinAggregateOutputType | null;
    _max: Customer_metrics_dailyMaxAggregateOutputType | null;
};
export type GetCustomer_metrics_dailyGroupByPayload<T extends customer_metrics_dailyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Customer_metrics_dailyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Customer_metrics_dailyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Customer_metrics_dailyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Customer_metrics_dailyGroupByOutputType[P]>;
}>>;
export type customer_metrics_dailyWhereInput = {
    AND?: Prisma.customer_metrics_dailyWhereInput | Prisma.customer_metrics_dailyWhereInput[];
    OR?: Prisma.customer_metrics_dailyWhereInput[];
    NOT?: Prisma.customer_metrics_dailyWhereInput | Prisma.customer_metrics_dailyWhereInput[];
    id?: Prisma.UuidFilter<"customer_metrics_daily"> | string;
    customer_id?: Prisma.UuidFilter<"customer_metrics_daily"> | string;
    date?: Prisma.DateTimeFilter<"customer_metrics_daily"> | Date | string;
    total_orders?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    total_revenue?: Prisma.DecimalFilter<"customer_metrics_daily"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    page_views?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    sessions?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    points_earned?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    points_spent?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    created_at?: Prisma.DateTimeFilter<"customer_metrics_daily"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
};
export type customer_metrics_dailyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    total_orders?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    total_items?: Prisma.SortOrder;
    page_views?: Prisma.SortOrder;
    sessions?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    points_spent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type customer_metrics_dailyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    customer_id_date?: Prisma.customer_metrics_dailyCustomer_idDateCompoundUniqueInput;
    AND?: Prisma.customer_metrics_dailyWhereInput | Prisma.customer_metrics_dailyWhereInput[];
    OR?: Prisma.customer_metrics_dailyWhereInput[];
    NOT?: Prisma.customer_metrics_dailyWhereInput | Prisma.customer_metrics_dailyWhereInput[];
    customer_id?: Prisma.UuidFilter<"customer_metrics_daily"> | string;
    date?: Prisma.DateTimeFilter<"customer_metrics_daily"> | Date | string;
    total_orders?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    total_revenue?: Prisma.DecimalFilter<"customer_metrics_daily"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    page_views?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    sessions?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    points_earned?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    points_spent?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    created_at?: Prisma.DateTimeFilter<"customer_metrics_daily"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
}, "id" | "customer_id_date">;
export type customer_metrics_dailyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    total_orders?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    total_items?: Prisma.SortOrder;
    page_views?: Prisma.SortOrder;
    sessions?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    points_spent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.customer_metrics_dailyCountOrderByAggregateInput;
    _avg?: Prisma.customer_metrics_dailyAvgOrderByAggregateInput;
    _max?: Prisma.customer_metrics_dailyMaxOrderByAggregateInput;
    _min?: Prisma.customer_metrics_dailyMinOrderByAggregateInput;
    _sum?: Prisma.customer_metrics_dailySumOrderByAggregateInput;
};
export type customer_metrics_dailyScalarWhereWithAggregatesInput = {
    AND?: Prisma.customer_metrics_dailyScalarWhereWithAggregatesInput | Prisma.customer_metrics_dailyScalarWhereWithAggregatesInput[];
    OR?: Prisma.customer_metrics_dailyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.customer_metrics_dailyScalarWhereWithAggregatesInput | Prisma.customer_metrics_dailyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"customer_metrics_daily"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"customer_metrics_daily"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"customer_metrics_daily"> | Date | string;
    total_orders?: Prisma.IntWithAggregatesFilter<"customer_metrics_daily"> | number;
    total_revenue?: Prisma.DecimalWithAggregatesFilter<"customer_metrics_daily"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: Prisma.IntWithAggregatesFilter<"customer_metrics_daily"> | number;
    page_views?: Prisma.IntWithAggregatesFilter<"customer_metrics_daily"> | number;
    sessions?: Prisma.IntWithAggregatesFilter<"customer_metrics_daily"> | number;
    points_earned?: Prisma.IntWithAggregatesFilter<"customer_metrics_daily"> | number;
    points_spent?: Prisma.IntWithAggregatesFilter<"customer_metrics_daily"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"customer_metrics_daily"> | Date | string;
};
export type customer_metrics_dailyCreateInput = {
    id?: string;
    date: Date | string;
    total_orders?: number;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: number;
    page_views?: number;
    sessions?: number;
    points_earned?: number;
    points_spent?: number;
    created_at?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutCustomer_metrics_dailyInput;
};
export type customer_metrics_dailyUncheckedCreateInput = {
    id?: string;
    customer_id: string;
    date: Date | string;
    total_orders?: number;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: number;
    page_views?: number;
    sessions?: number;
    points_earned?: number;
    points_spent?: number;
    created_at?: Date | string;
};
export type customer_metrics_dailyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_orders?: Prisma.IntFieldUpdateOperationsInput | number;
    total_revenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: Prisma.IntFieldUpdateOperationsInput | number;
    page_views?: Prisma.IntFieldUpdateOperationsInput | number;
    sessions?: Prisma.IntFieldUpdateOperationsInput | number;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    points_spent?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutCustomer_metrics_dailyNestedInput;
};
export type customer_metrics_dailyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_orders?: Prisma.IntFieldUpdateOperationsInput | number;
    total_revenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: Prisma.IntFieldUpdateOperationsInput | number;
    page_views?: Prisma.IntFieldUpdateOperationsInput | number;
    sessions?: Prisma.IntFieldUpdateOperationsInput | number;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    points_spent?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type customer_metrics_dailyCreateManyInput = {
    id?: string;
    customer_id: string;
    date: Date | string;
    total_orders?: number;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: number;
    page_views?: number;
    sessions?: number;
    points_earned?: number;
    points_spent?: number;
    created_at?: Date | string;
};
export type customer_metrics_dailyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_orders?: Prisma.IntFieldUpdateOperationsInput | number;
    total_revenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: Prisma.IntFieldUpdateOperationsInput | number;
    page_views?: Prisma.IntFieldUpdateOperationsInput | number;
    sessions?: Prisma.IntFieldUpdateOperationsInput | number;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    points_spent?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type customer_metrics_dailyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_orders?: Prisma.IntFieldUpdateOperationsInput | number;
    total_revenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: Prisma.IntFieldUpdateOperationsInput | number;
    page_views?: Prisma.IntFieldUpdateOperationsInput | number;
    sessions?: Prisma.IntFieldUpdateOperationsInput | number;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    points_spent?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Customer_metrics_dailyListRelationFilter = {
    every?: Prisma.customer_metrics_dailyWhereInput;
    some?: Prisma.customer_metrics_dailyWhereInput;
    none?: Prisma.customer_metrics_dailyWhereInput;
};
export type customer_metrics_dailyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type customer_metrics_dailyCustomer_idDateCompoundUniqueInput = {
    customer_id: string;
    date: Date | string;
};
export type customer_metrics_dailyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    total_orders?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    total_items?: Prisma.SortOrder;
    page_views?: Prisma.SortOrder;
    sessions?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    points_spent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type customer_metrics_dailyAvgOrderByAggregateInput = {
    total_orders?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    total_items?: Prisma.SortOrder;
    page_views?: Prisma.SortOrder;
    sessions?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    points_spent?: Prisma.SortOrder;
};
export type customer_metrics_dailyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    total_orders?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    total_items?: Prisma.SortOrder;
    page_views?: Prisma.SortOrder;
    sessions?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    points_spent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type customer_metrics_dailyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    total_orders?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    total_items?: Prisma.SortOrder;
    page_views?: Prisma.SortOrder;
    sessions?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    points_spent?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type customer_metrics_dailySumOrderByAggregateInput = {
    total_orders?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    total_items?: Prisma.SortOrder;
    page_views?: Prisma.SortOrder;
    sessions?: Prisma.SortOrder;
    points_earned?: Prisma.SortOrder;
    points_spent?: Prisma.SortOrder;
};
export type customer_metrics_dailyCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.customer_metrics_dailyCreateWithoutCustomerInput, Prisma.customer_metrics_dailyUncheckedCreateWithoutCustomerInput> | Prisma.customer_metrics_dailyCreateWithoutCustomerInput[] | Prisma.customer_metrics_dailyUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.customer_metrics_dailyCreateOrConnectWithoutCustomerInput | Prisma.customer_metrics_dailyCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.customer_metrics_dailyCreateManyCustomerInputEnvelope;
    connect?: Prisma.customer_metrics_dailyWhereUniqueInput | Prisma.customer_metrics_dailyWhereUniqueInput[];
};
export type customer_metrics_dailyUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.customer_metrics_dailyCreateWithoutCustomerInput, Prisma.customer_metrics_dailyUncheckedCreateWithoutCustomerInput> | Prisma.customer_metrics_dailyCreateWithoutCustomerInput[] | Prisma.customer_metrics_dailyUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.customer_metrics_dailyCreateOrConnectWithoutCustomerInput | Prisma.customer_metrics_dailyCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.customer_metrics_dailyCreateManyCustomerInputEnvelope;
    connect?: Prisma.customer_metrics_dailyWhereUniqueInput | Prisma.customer_metrics_dailyWhereUniqueInput[];
};
export type customer_metrics_dailyUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.customer_metrics_dailyCreateWithoutCustomerInput, Prisma.customer_metrics_dailyUncheckedCreateWithoutCustomerInput> | Prisma.customer_metrics_dailyCreateWithoutCustomerInput[] | Prisma.customer_metrics_dailyUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.customer_metrics_dailyCreateOrConnectWithoutCustomerInput | Prisma.customer_metrics_dailyCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.customer_metrics_dailyUpsertWithWhereUniqueWithoutCustomerInput | Prisma.customer_metrics_dailyUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.customer_metrics_dailyCreateManyCustomerInputEnvelope;
    set?: Prisma.customer_metrics_dailyWhereUniqueInput | Prisma.customer_metrics_dailyWhereUniqueInput[];
    disconnect?: Prisma.customer_metrics_dailyWhereUniqueInput | Prisma.customer_metrics_dailyWhereUniqueInput[];
    delete?: Prisma.customer_metrics_dailyWhereUniqueInput | Prisma.customer_metrics_dailyWhereUniqueInput[];
    connect?: Prisma.customer_metrics_dailyWhereUniqueInput | Prisma.customer_metrics_dailyWhereUniqueInput[];
    update?: Prisma.customer_metrics_dailyUpdateWithWhereUniqueWithoutCustomerInput | Prisma.customer_metrics_dailyUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.customer_metrics_dailyUpdateManyWithWhereWithoutCustomerInput | Prisma.customer_metrics_dailyUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.customer_metrics_dailyScalarWhereInput | Prisma.customer_metrics_dailyScalarWhereInput[];
};
export type customer_metrics_dailyUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.customer_metrics_dailyCreateWithoutCustomerInput, Prisma.customer_metrics_dailyUncheckedCreateWithoutCustomerInput> | Prisma.customer_metrics_dailyCreateWithoutCustomerInput[] | Prisma.customer_metrics_dailyUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.customer_metrics_dailyCreateOrConnectWithoutCustomerInput | Prisma.customer_metrics_dailyCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.customer_metrics_dailyUpsertWithWhereUniqueWithoutCustomerInput | Prisma.customer_metrics_dailyUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.customer_metrics_dailyCreateManyCustomerInputEnvelope;
    set?: Prisma.customer_metrics_dailyWhereUniqueInput | Prisma.customer_metrics_dailyWhereUniqueInput[];
    disconnect?: Prisma.customer_metrics_dailyWhereUniqueInput | Prisma.customer_metrics_dailyWhereUniqueInput[];
    delete?: Prisma.customer_metrics_dailyWhereUniqueInput | Prisma.customer_metrics_dailyWhereUniqueInput[];
    connect?: Prisma.customer_metrics_dailyWhereUniqueInput | Prisma.customer_metrics_dailyWhereUniqueInput[];
    update?: Prisma.customer_metrics_dailyUpdateWithWhereUniqueWithoutCustomerInput | Prisma.customer_metrics_dailyUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.customer_metrics_dailyUpdateManyWithWhereWithoutCustomerInput | Prisma.customer_metrics_dailyUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.customer_metrics_dailyScalarWhereInput | Prisma.customer_metrics_dailyScalarWhereInput[];
};
export type customer_metrics_dailyCreateWithoutCustomerInput = {
    id?: string;
    date: Date | string;
    total_orders?: number;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: number;
    page_views?: number;
    sessions?: number;
    points_earned?: number;
    points_spent?: number;
    created_at?: Date | string;
};
export type customer_metrics_dailyUncheckedCreateWithoutCustomerInput = {
    id?: string;
    date: Date | string;
    total_orders?: number;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: number;
    page_views?: number;
    sessions?: number;
    points_earned?: number;
    points_spent?: number;
    created_at?: Date | string;
};
export type customer_metrics_dailyCreateOrConnectWithoutCustomerInput = {
    where: Prisma.customer_metrics_dailyWhereUniqueInput;
    create: Prisma.XOR<Prisma.customer_metrics_dailyCreateWithoutCustomerInput, Prisma.customer_metrics_dailyUncheckedCreateWithoutCustomerInput>;
};
export type customer_metrics_dailyCreateManyCustomerInputEnvelope = {
    data: Prisma.customer_metrics_dailyCreateManyCustomerInput | Prisma.customer_metrics_dailyCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type customer_metrics_dailyUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.customer_metrics_dailyWhereUniqueInput;
    update: Prisma.XOR<Prisma.customer_metrics_dailyUpdateWithoutCustomerInput, Prisma.customer_metrics_dailyUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.customer_metrics_dailyCreateWithoutCustomerInput, Prisma.customer_metrics_dailyUncheckedCreateWithoutCustomerInput>;
};
export type customer_metrics_dailyUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.customer_metrics_dailyWhereUniqueInput;
    data: Prisma.XOR<Prisma.customer_metrics_dailyUpdateWithoutCustomerInput, Prisma.customer_metrics_dailyUncheckedUpdateWithoutCustomerInput>;
};
export type customer_metrics_dailyUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.customer_metrics_dailyScalarWhereInput;
    data: Prisma.XOR<Prisma.customer_metrics_dailyUpdateManyMutationInput, Prisma.customer_metrics_dailyUncheckedUpdateManyWithoutCustomerInput>;
};
export type customer_metrics_dailyScalarWhereInput = {
    AND?: Prisma.customer_metrics_dailyScalarWhereInput | Prisma.customer_metrics_dailyScalarWhereInput[];
    OR?: Prisma.customer_metrics_dailyScalarWhereInput[];
    NOT?: Prisma.customer_metrics_dailyScalarWhereInput | Prisma.customer_metrics_dailyScalarWhereInput[];
    id?: Prisma.UuidFilter<"customer_metrics_daily"> | string;
    customer_id?: Prisma.UuidFilter<"customer_metrics_daily"> | string;
    date?: Prisma.DateTimeFilter<"customer_metrics_daily"> | Date | string;
    total_orders?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    total_revenue?: Prisma.DecimalFilter<"customer_metrics_daily"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    page_views?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    sessions?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    points_earned?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    points_spent?: Prisma.IntFilter<"customer_metrics_daily"> | number;
    created_at?: Prisma.DateTimeFilter<"customer_metrics_daily"> | Date | string;
};
export type customer_metrics_dailyCreateManyCustomerInput = {
    id?: string;
    date: Date | string;
    total_orders?: number;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: number;
    page_views?: number;
    sessions?: number;
    points_earned?: number;
    points_spent?: number;
    created_at?: Date | string;
};
export type customer_metrics_dailyUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_orders?: Prisma.IntFieldUpdateOperationsInput | number;
    total_revenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: Prisma.IntFieldUpdateOperationsInput | number;
    page_views?: Prisma.IntFieldUpdateOperationsInput | number;
    sessions?: Prisma.IntFieldUpdateOperationsInput | number;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    points_spent?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type customer_metrics_dailyUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_orders?: Prisma.IntFieldUpdateOperationsInput | number;
    total_revenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: Prisma.IntFieldUpdateOperationsInput | number;
    page_views?: Prisma.IntFieldUpdateOperationsInput | number;
    sessions?: Prisma.IntFieldUpdateOperationsInput | number;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    points_spent?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type customer_metrics_dailyUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_orders?: Prisma.IntFieldUpdateOperationsInput | number;
    total_revenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total_items?: Prisma.IntFieldUpdateOperationsInput | number;
    page_views?: Prisma.IntFieldUpdateOperationsInput | number;
    sessions?: Prisma.IntFieldUpdateOperationsInput | number;
    points_earned?: Prisma.IntFieldUpdateOperationsInput | number;
    points_spent?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type customer_metrics_dailySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    date?: boolean;
    total_orders?: boolean;
    total_revenue?: boolean;
    total_items?: boolean;
    page_views?: boolean;
    sessions?: boolean;
    points_earned?: boolean;
    points_spent?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer_metrics_daily"]>;
export type customer_metrics_dailySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    date?: boolean;
    total_orders?: boolean;
    total_revenue?: boolean;
    total_items?: boolean;
    page_views?: boolean;
    sessions?: boolean;
    points_earned?: boolean;
    points_spent?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer_metrics_daily"]>;
export type customer_metrics_dailySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    date?: boolean;
    total_orders?: boolean;
    total_revenue?: boolean;
    total_items?: boolean;
    page_views?: boolean;
    sessions?: boolean;
    points_earned?: boolean;
    points_spent?: boolean;
    created_at?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer_metrics_daily"]>;
export type customer_metrics_dailySelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    date?: boolean;
    total_orders?: boolean;
    total_revenue?: boolean;
    total_items?: boolean;
    page_views?: boolean;
    sessions?: boolean;
    points_earned?: boolean;
    points_spent?: boolean;
    created_at?: boolean;
};
export type customer_metrics_dailyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "date" | "total_orders" | "total_revenue" | "total_items" | "page_views" | "sessions" | "points_earned" | "points_spent" | "created_at", ExtArgs["result"]["customer_metrics_daily"]>;
export type customer_metrics_dailyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type customer_metrics_dailyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type customer_metrics_dailyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $customer_metrics_dailyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "customer_metrics_daily";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customer_id: string;
        date: Date;
        total_orders: number;
        total_revenue: runtime.Decimal;
        total_items: number;
        page_views: number;
        sessions: number;
        points_earned: number;
        points_spent: number;
        created_at: Date;
    }, ExtArgs["result"]["customer_metrics_daily"]>;
    composites: {};
};
export type customer_metrics_dailyGetPayload<S extends boolean | null | undefined | customer_metrics_dailyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$customer_metrics_dailyPayload, S>;
export type customer_metrics_dailyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<customer_metrics_dailyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Customer_metrics_dailyCountAggregateInputType | true;
};
export interface customer_metrics_dailyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['customer_metrics_daily'];
        meta: {
            name: 'customer_metrics_daily';
        };
    };
    findUnique<T extends customer_metrics_dailyFindUniqueArgs>(args: Prisma.SelectSubset<T, customer_metrics_dailyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__customer_metrics_dailyClient<runtime.Types.Result.GetResult<Prisma.$customer_metrics_dailyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends customer_metrics_dailyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, customer_metrics_dailyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__customer_metrics_dailyClient<runtime.Types.Result.GetResult<Prisma.$customer_metrics_dailyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends customer_metrics_dailyFindFirstArgs>(args?: Prisma.SelectSubset<T, customer_metrics_dailyFindFirstArgs<ExtArgs>>): Prisma.Prisma__customer_metrics_dailyClient<runtime.Types.Result.GetResult<Prisma.$customer_metrics_dailyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends customer_metrics_dailyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, customer_metrics_dailyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__customer_metrics_dailyClient<runtime.Types.Result.GetResult<Prisma.$customer_metrics_dailyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends customer_metrics_dailyFindManyArgs>(args?: Prisma.SelectSubset<T, customer_metrics_dailyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customer_metrics_dailyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends customer_metrics_dailyCreateArgs>(args: Prisma.SelectSubset<T, customer_metrics_dailyCreateArgs<ExtArgs>>): Prisma.Prisma__customer_metrics_dailyClient<runtime.Types.Result.GetResult<Prisma.$customer_metrics_dailyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends customer_metrics_dailyCreateManyArgs>(args?: Prisma.SelectSubset<T, customer_metrics_dailyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends customer_metrics_dailyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, customer_metrics_dailyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customer_metrics_dailyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends customer_metrics_dailyDeleteArgs>(args: Prisma.SelectSubset<T, customer_metrics_dailyDeleteArgs<ExtArgs>>): Prisma.Prisma__customer_metrics_dailyClient<runtime.Types.Result.GetResult<Prisma.$customer_metrics_dailyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends customer_metrics_dailyUpdateArgs>(args: Prisma.SelectSubset<T, customer_metrics_dailyUpdateArgs<ExtArgs>>): Prisma.Prisma__customer_metrics_dailyClient<runtime.Types.Result.GetResult<Prisma.$customer_metrics_dailyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends customer_metrics_dailyDeleteManyArgs>(args?: Prisma.SelectSubset<T, customer_metrics_dailyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends customer_metrics_dailyUpdateManyArgs>(args: Prisma.SelectSubset<T, customer_metrics_dailyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends customer_metrics_dailyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, customer_metrics_dailyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customer_metrics_dailyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends customer_metrics_dailyUpsertArgs>(args: Prisma.SelectSubset<T, customer_metrics_dailyUpsertArgs<ExtArgs>>): Prisma.Prisma__customer_metrics_dailyClient<runtime.Types.Result.GetResult<Prisma.$customer_metrics_dailyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends customer_metrics_dailyCountArgs>(args?: Prisma.Subset<T, customer_metrics_dailyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Customer_metrics_dailyCountAggregateOutputType> : number>;
    aggregate<T extends Customer_metrics_dailyAggregateArgs>(args: Prisma.Subset<T, Customer_metrics_dailyAggregateArgs>): Prisma.PrismaPromise<GetCustomer_metrics_dailyAggregateType<T>>;
    groupBy<T extends customer_metrics_dailyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: customer_metrics_dailyGroupByArgs['orderBy'];
    } : {
        orderBy?: customer_metrics_dailyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, customer_metrics_dailyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomer_metrics_dailyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: customer_metrics_dailyFieldRefs;
}
export interface Prisma__customer_metrics_dailyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface customer_metrics_dailyFieldRefs {
    readonly id: Prisma.FieldRef<"customer_metrics_daily", 'String'>;
    readonly customer_id: Prisma.FieldRef<"customer_metrics_daily", 'String'>;
    readonly date: Prisma.FieldRef<"customer_metrics_daily", 'DateTime'>;
    readonly total_orders: Prisma.FieldRef<"customer_metrics_daily", 'Int'>;
    readonly total_revenue: Prisma.FieldRef<"customer_metrics_daily", 'Decimal'>;
    readonly total_items: Prisma.FieldRef<"customer_metrics_daily", 'Int'>;
    readonly page_views: Prisma.FieldRef<"customer_metrics_daily", 'Int'>;
    readonly sessions: Prisma.FieldRef<"customer_metrics_daily", 'Int'>;
    readonly points_earned: Prisma.FieldRef<"customer_metrics_daily", 'Int'>;
    readonly points_spent: Prisma.FieldRef<"customer_metrics_daily", 'Int'>;
    readonly created_at: Prisma.FieldRef<"customer_metrics_daily", 'DateTime'>;
}
export type customer_metrics_dailyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_metrics_dailySelect<ExtArgs> | null;
    omit?: Prisma.customer_metrics_dailyOmit<ExtArgs> | null;
    include?: Prisma.customer_metrics_dailyInclude<ExtArgs> | null;
    where: Prisma.customer_metrics_dailyWhereUniqueInput;
};
export type customer_metrics_dailyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_metrics_dailySelect<ExtArgs> | null;
    omit?: Prisma.customer_metrics_dailyOmit<ExtArgs> | null;
    include?: Prisma.customer_metrics_dailyInclude<ExtArgs> | null;
    where: Prisma.customer_metrics_dailyWhereUniqueInput;
};
export type customer_metrics_dailyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_metrics_dailySelect<ExtArgs> | null;
    omit?: Prisma.customer_metrics_dailyOmit<ExtArgs> | null;
    include?: Prisma.customer_metrics_dailyInclude<ExtArgs> | null;
    where?: Prisma.customer_metrics_dailyWhereInput;
    orderBy?: Prisma.customer_metrics_dailyOrderByWithRelationInput | Prisma.customer_metrics_dailyOrderByWithRelationInput[];
    cursor?: Prisma.customer_metrics_dailyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Customer_metrics_dailyScalarFieldEnum | Prisma.Customer_metrics_dailyScalarFieldEnum[];
};
export type customer_metrics_dailyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_metrics_dailySelect<ExtArgs> | null;
    omit?: Prisma.customer_metrics_dailyOmit<ExtArgs> | null;
    include?: Prisma.customer_metrics_dailyInclude<ExtArgs> | null;
    where?: Prisma.customer_metrics_dailyWhereInput;
    orderBy?: Prisma.customer_metrics_dailyOrderByWithRelationInput | Prisma.customer_metrics_dailyOrderByWithRelationInput[];
    cursor?: Prisma.customer_metrics_dailyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Customer_metrics_dailyScalarFieldEnum | Prisma.Customer_metrics_dailyScalarFieldEnum[];
};
export type customer_metrics_dailyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_metrics_dailySelect<ExtArgs> | null;
    omit?: Prisma.customer_metrics_dailyOmit<ExtArgs> | null;
    include?: Prisma.customer_metrics_dailyInclude<ExtArgs> | null;
    where?: Prisma.customer_metrics_dailyWhereInput;
    orderBy?: Prisma.customer_metrics_dailyOrderByWithRelationInput | Prisma.customer_metrics_dailyOrderByWithRelationInput[];
    cursor?: Prisma.customer_metrics_dailyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Customer_metrics_dailyScalarFieldEnum | Prisma.Customer_metrics_dailyScalarFieldEnum[];
};
export type customer_metrics_dailyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_metrics_dailySelect<ExtArgs> | null;
    omit?: Prisma.customer_metrics_dailyOmit<ExtArgs> | null;
    include?: Prisma.customer_metrics_dailyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customer_metrics_dailyCreateInput, Prisma.customer_metrics_dailyUncheckedCreateInput>;
};
export type customer_metrics_dailyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.customer_metrics_dailyCreateManyInput | Prisma.customer_metrics_dailyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type customer_metrics_dailyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_metrics_dailySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.customer_metrics_dailyOmit<ExtArgs> | null;
    data: Prisma.customer_metrics_dailyCreateManyInput | Prisma.customer_metrics_dailyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.customer_metrics_dailyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type customer_metrics_dailyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_metrics_dailySelect<ExtArgs> | null;
    omit?: Prisma.customer_metrics_dailyOmit<ExtArgs> | null;
    include?: Prisma.customer_metrics_dailyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customer_metrics_dailyUpdateInput, Prisma.customer_metrics_dailyUncheckedUpdateInput>;
    where: Prisma.customer_metrics_dailyWhereUniqueInput;
};
export type customer_metrics_dailyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.customer_metrics_dailyUpdateManyMutationInput, Prisma.customer_metrics_dailyUncheckedUpdateManyInput>;
    where?: Prisma.customer_metrics_dailyWhereInput;
    limit?: number;
};
export type customer_metrics_dailyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_metrics_dailySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.customer_metrics_dailyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customer_metrics_dailyUpdateManyMutationInput, Prisma.customer_metrics_dailyUncheckedUpdateManyInput>;
    where?: Prisma.customer_metrics_dailyWhereInput;
    limit?: number;
    include?: Prisma.customer_metrics_dailyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type customer_metrics_dailyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_metrics_dailySelect<ExtArgs> | null;
    omit?: Prisma.customer_metrics_dailyOmit<ExtArgs> | null;
    include?: Prisma.customer_metrics_dailyInclude<ExtArgs> | null;
    where: Prisma.customer_metrics_dailyWhereUniqueInput;
    create: Prisma.XOR<Prisma.customer_metrics_dailyCreateInput, Prisma.customer_metrics_dailyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.customer_metrics_dailyUpdateInput, Prisma.customer_metrics_dailyUncheckedUpdateInput>;
};
export type customer_metrics_dailyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_metrics_dailySelect<ExtArgs> | null;
    omit?: Prisma.customer_metrics_dailyOmit<ExtArgs> | null;
    include?: Prisma.customer_metrics_dailyInclude<ExtArgs> | null;
    where: Prisma.customer_metrics_dailyWhereUniqueInput;
};
export type customer_metrics_dailyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customer_metrics_dailyWhereInput;
    limit?: number;
};
export type customer_metrics_dailyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customer_metrics_dailySelect<ExtArgs> | null;
    omit?: Prisma.customer_metrics_dailyOmit<ExtArgs> | null;
    include?: Prisma.customer_metrics_dailyInclude<ExtArgs> | null;
};
