import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type kpi_daily_snapshotModel = runtime.Types.Result.DefaultSelection<Prisma.$kpi_daily_snapshotPayload>;
export type AggregateKpi_daily_snapshot = {
    _count: Kpi_daily_snapshotCountAggregateOutputType | null;
    _avg: Kpi_daily_snapshotAvgAggregateOutputType | null;
    _sum: Kpi_daily_snapshotSumAggregateOutputType | null;
    _min: Kpi_daily_snapshotMinAggregateOutputType | null;
    _max: Kpi_daily_snapshotMaxAggregateOutputType | null;
};
export type Kpi_daily_snapshotAvgAggregateOutputType = {
    total_customers: number | null;
    new_customers: number | null;
    active_customers: number | null;
    total_orders: number | null;
    total_revenue: runtime.Decimal | null;
    avg_order_value: runtime.Decimal | null;
    messages_sent: number | null;
    messages_delivered: number | null;
    points_issued: number | null;
    points_redeemed: number | null;
};
export type Kpi_daily_snapshotSumAggregateOutputType = {
    total_customers: number | null;
    new_customers: number | null;
    active_customers: number | null;
    total_orders: number | null;
    total_revenue: runtime.Decimal | null;
    avg_order_value: runtime.Decimal | null;
    messages_sent: number | null;
    messages_delivered: number | null;
    points_issued: number | null;
    points_redeemed: number | null;
};
export type Kpi_daily_snapshotMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    total_customers: number | null;
    new_customers: number | null;
    active_customers: number | null;
    total_orders: number | null;
    total_revenue: runtime.Decimal | null;
    avg_order_value: runtime.Decimal | null;
    messages_sent: number | null;
    messages_delivered: number | null;
    points_issued: number | null;
    points_redeemed: number | null;
    created_at: Date | null;
};
export type Kpi_daily_snapshotMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    total_customers: number | null;
    new_customers: number | null;
    active_customers: number | null;
    total_orders: number | null;
    total_revenue: runtime.Decimal | null;
    avg_order_value: runtime.Decimal | null;
    messages_sent: number | null;
    messages_delivered: number | null;
    points_issued: number | null;
    points_redeemed: number | null;
    created_at: Date | null;
};
export type Kpi_daily_snapshotCountAggregateOutputType = {
    id: number;
    date: number;
    total_customers: number;
    new_customers: number;
    active_customers: number;
    total_orders: number;
    total_revenue: number;
    avg_order_value: number;
    messages_sent: number;
    messages_delivered: number;
    points_issued: number;
    points_redeemed: number;
    created_at: number;
    _all: number;
};
export type Kpi_daily_snapshotAvgAggregateInputType = {
    total_customers?: true;
    new_customers?: true;
    active_customers?: true;
    total_orders?: true;
    total_revenue?: true;
    avg_order_value?: true;
    messages_sent?: true;
    messages_delivered?: true;
    points_issued?: true;
    points_redeemed?: true;
};
export type Kpi_daily_snapshotSumAggregateInputType = {
    total_customers?: true;
    new_customers?: true;
    active_customers?: true;
    total_orders?: true;
    total_revenue?: true;
    avg_order_value?: true;
    messages_sent?: true;
    messages_delivered?: true;
    points_issued?: true;
    points_redeemed?: true;
};
export type Kpi_daily_snapshotMinAggregateInputType = {
    id?: true;
    date?: true;
    total_customers?: true;
    new_customers?: true;
    active_customers?: true;
    total_orders?: true;
    total_revenue?: true;
    avg_order_value?: true;
    messages_sent?: true;
    messages_delivered?: true;
    points_issued?: true;
    points_redeemed?: true;
    created_at?: true;
};
export type Kpi_daily_snapshotMaxAggregateInputType = {
    id?: true;
    date?: true;
    total_customers?: true;
    new_customers?: true;
    active_customers?: true;
    total_orders?: true;
    total_revenue?: true;
    avg_order_value?: true;
    messages_sent?: true;
    messages_delivered?: true;
    points_issued?: true;
    points_redeemed?: true;
    created_at?: true;
};
export type Kpi_daily_snapshotCountAggregateInputType = {
    id?: true;
    date?: true;
    total_customers?: true;
    new_customers?: true;
    active_customers?: true;
    total_orders?: true;
    total_revenue?: true;
    avg_order_value?: true;
    messages_sent?: true;
    messages_delivered?: true;
    points_issued?: true;
    points_redeemed?: true;
    created_at?: true;
    _all?: true;
};
export type Kpi_daily_snapshotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.kpi_daily_snapshotWhereInput;
    orderBy?: Prisma.kpi_daily_snapshotOrderByWithRelationInput | Prisma.kpi_daily_snapshotOrderByWithRelationInput[];
    cursor?: Prisma.kpi_daily_snapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Kpi_daily_snapshotCountAggregateInputType;
    _avg?: Kpi_daily_snapshotAvgAggregateInputType;
    _sum?: Kpi_daily_snapshotSumAggregateInputType;
    _min?: Kpi_daily_snapshotMinAggregateInputType;
    _max?: Kpi_daily_snapshotMaxAggregateInputType;
};
export type GetKpi_daily_snapshotAggregateType<T extends Kpi_daily_snapshotAggregateArgs> = {
    [P in keyof T & keyof AggregateKpi_daily_snapshot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKpi_daily_snapshot[P]> : Prisma.GetScalarType<T[P], AggregateKpi_daily_snapshot[P]>;
};
export type kpi_daily_snapshotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.kpi_daily_snapshotWhereInput;
    orderBy?: Prisma.kpi_daily_snapshotOrderByWithAggregationInput | Prisma.kpi_daily_snapshotOrderByWithAggregationInput[];
    by: Prisma.Kpi_daily_snapshotScalarFieldEnum[] | Prisma.Kpi_daily_snapshotScalarFieldEnum;
    having?: Prisma.kpi_daily_snapshotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Kpi_daily_snapshotCountAggregateInputType | true;
    _avg?: Kpi_daily_snapshotAvgAggregateInputType;
    _sum?: Kpi_daily_snapshotSumAggregateInputType;
    _min?: Kpi_daily_snapshotMinAggregateInputType;
    _max?: Kpi_daily_snapshotMaxAggregateInputType;
};
export type Kpi_daily_snapshotGroupByOutputType = {
    id: string;
    date: Date;
    total_customers: number;
    new_customers: number;
    active_customers: number;
    total_orders: number;
    total_revenue: runtime.Decimal;
    avg_order_value: runtime.Decimal;
    messages_sent: number;
    messages_delivered: number;
    points_issued: number;
    points_redeemed: number;
    created_at: Date;
    _count: Kpi_daily_snapshotCountAggregateOutputType | null;
    _avg: Kpi_daily_snapshotAvgAggregateOutputType | null;
    _sum: Kpi_daily_snapshotSumAggregateOutputType | null;
    _min: Kpi_daily_snapshotMinAggregateOutputType | null;
    _max: Kpi_daily_snapshotMaxAggregateOutputType | null;
};
export type GetKpi_daily_snapshotGroupByPayload<T extends kpi_daily_snapshotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Kpi_daily_snapshotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Kpi_daily_snapshotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Kpi_daily_snapshotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Kpi_daily_snapshotGroupByOutputType[P]>;
}>>;
export type kpi_daily_snapshotWhereInput = {
    AND?: Prisma.kpi_daily_snapshotWhereInput | Prisma.kpi_daily_snapshotWhereInput[];
    OR?: Prisma.kpi_daily_snapshotWhereInput[];
    NOT?: Prisma.kpi_daily_snapshotWhereInput | Prisma.kpi_daily_snapshotWhereInput[];
    id?: Prisma.UuidFilter<"kpi_daily_snapshot"> | string;
    date?: Prisma.DateTimeFilter<"kpi_daily_snapshot"> | Date | string;
    total_customers?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    new_customers?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    active_customers?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    total_orders?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    total_revenue?: Prisma.DecimalFilter<"kpi_daily_snapshot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avg_order_value?: Prisma.DecimalFilter<"kpi_daily_snapshot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    messages_sent?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    messages_delivered?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    points_issued?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    points_redeemed?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    created_at?: Prisma.DateTimeFilter<"kpi_daily_snapshot"> | Date | string;
};
export type kpi_daily_snapshotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    total_customers?: Prisma.SortOrder;
    new_customers?: Prisma.SortOrder;
    active_customers?: Prisma.SortOrder;
    total_orders?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    avg_order_value?: Prisma.SortOrder;
    messages_sent?: Prisma.SortOrder;
    messages_delivered?: Prisma.SortOrder;
    points_issued?: Prisma.SortOrder;
    points_redeemed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type kpi_daily_snapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    date?: Date | string;
    AND?: Prisma.kpi_daily_snapshotWhereInput | Prisma.kpi_daily_snapshotWhereInput[];
    OR?: Prisma.kpi_daily_snapshotWhereInput[];
    NOT?: Prisma.kpi_daily_snapshotWhereInput | Prisma.kpi_daily_snapshotWhereInput[];
    total_customers?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    new_customers?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    active_customers?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    total_orders?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    total_revenue?: Prisma.DecimalFilter<"kpi_daily_snapshot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avg_order_value?: Prisma.DecimalFilter<"kpi_daily_snapshot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    messages_sent?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    messages_delivered?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    points_issued?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    points_redeemed?: Prisma.IntFilter<"kpi_daily_snapshot"> | number;
    created_at?: Prisma.DateTimeFilter<"kpi_daily_snapshot"> | Date | string;
}, "id" | "date">;
export type kpi_daily_snapshotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    total_customers?: Prisma.SortOrder;
    new_customers?: Prisma.SortOrder;
    active_customers?: Prisma.SortOrder;
    total_orders?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    avg_order_value?: Prisma.SortOrder;
    messages_sent?: Prisma.SortOrder;
    messages_delivered?: Prisma.SortOrder;
    points_issued?: Prisma.SortOrder;
    points_redeemed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.kpi_daily_snapshotCountOrderByAggregateInput;
    _avg?: Prisma.kpi_daily_snapshotAvgOrderByAggregateInput;
    _max?: Prisma.kpi_daily_snapshotMaxOrderByAggregateInput;
    _min?: Prisma.kpi_daily_snapshotMinOrderByAggregateInput;
    _sum?: Prisma.kpi_daily_snapshotSumOrderByAggregateInput;
};
export type kpi_daily_snapshotScalarWhereWithAggregatesInput = {
    AND?: Prisma.kpi_daily_snapshotScalarWhereWithAggregatesInput | Prisma.kpi_daily_snapshotScalarWhereWithAggregatesInput[];
    OR?: Prisma.kpi_daily_snapshotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.kpi_daily_snapshotScalarWhereWithAggregatesInput | Prisma.kpi_daily_snapshotScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"kpi_daily_snapshot"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"kpi_daily_snapshot"> | Date | string;
    total_customers?: Prisma.IntWithAggregatesFilter<"kpi_daily_snapshot"> | number;
    new_customers?: Prisma.IntWithAggregatesFilter<"kpi_daily_snapshot"> | number;
    active_customers?: Prisma.IntWithAggregatesFilter<"kpi_daily_snapshot"> | number;
    total_orders?: Prisma.IntWithAggregatesFilter<"kpi_daily_snapshot"> | number;
    total_revenue?: Prisma.DecimalWithAggregatesFilter<"kpi_daily_snapshot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avg_order_value?: Prisma.DecimalWithAggregatesFilter<"kpi_daily_snapshot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    messages_sent?: Prisma.IntWithAggregatesFilter<"kpi_daily_snapshot"> | number;
    messages_delivered?: Prisma.IntWithAggregatesFilter<"kpi_daily_snapshot"> | number;
    points_issued?: Prisma.IntWithAggregatesFilter<"kpi_daily_snapshot"> | number;
    points_redeemed?: Prisma.IntWithAggregatesFilter<"kpi_daily_snapshot"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"kpi_daily_snapshot"> | Date | string;
};
export type kpi_daily_snapshotCreateInput = {
    id?: string;
    date: Date | string;
    total_customers?: number;
    new_customers?: number;
    active_customers?: number;
    total_orders?: number;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    avg_order_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    messages_sent?: number;
    messages_delivered?: number;
    points_issued?: number;
    points_redeemed?: number;
    created_at?: Date | string;
};
export type kpi_daily_snapshotUncheckedCreateInput = {
    id?: string;
    date: Date | string;
    total_customers?: number;
    new_customers?: number;
    active_customers?: number;
    total_orders?: number;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    avg_order_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    messages_sent?: number;
    messages_delivered?: number;
    points_issued?: number;
    points_redeemed?: number;
    created_at?: Date | string;
};
export type kpi_daily_snapshotUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_customers?: Prisma.IntFieldUpdateOperationsInput | number;
    new_customers?: Prisma.IntFieldUpdateOperationsInput | number;
    active_customers?: Prisma.IntFieldUpdateOperationsInput | number;
    total_orders?: Prisma.IntFieldUpdateOperationsInput | number;
    total_revenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avg_order_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    messages_sent?: Prisma.IntFieldUpdateOperationsInput | number;
    messages_delivered?: Prisma.IntFieldUpdateOperationsInput | number;
    points_issued?: Prisma.IntFieldUpdateOperationsInput | number;
    points_redeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type kpi_daily_snapshotUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_customers?: Prisma.IntFieldUpdateOperationsInput | number;
    new_customers?: Prisma.IntFieldUpdateOperationsInput | number;
    active_customers?: Prisma.IntFieldUpdateOperationsInput | number;
    total_orders?: Prisma.IntFieldUpdateOperationsInput | number;
    total_revenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avg_order_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    messages_sent?: Prisma.IntFieldUpdateOperationsInput | number;
    messages_delivered?: Prisma.IntFieldUpdateOperationsInput | number;
    points_issued?: Prisma.IntFieldUpdateOperationsInput | number;
    points_redeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type kpi_daily_snapshotCreateManyInput = {
    id?: string;
    date: Date | string;
    total_customers?: number;
    new_customers?: number;
    active_customers?: number;
    total_orders?: number;
    total_revenue?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    avg_order_value?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    messages_sent?: number;
    messages_delivered?: number;
    points_issued?: number;
    points_redeemed?: number;
    created_at?: Date | string;
};
export type kpi_daily_snapshotUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_customers?: Prisma.IntFieldUpdateOperationsInput | number;
    new_customers?: Prisma.IntFieldUpdateOperationsInput | number;
    active_customers?: Prisma.IntFieldUpdateOperationsInput | number;
    total_orders?: Prisma.IntFieldUpdateOperationsInput | number;
    total_revenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avg_order_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    messages_sent?: Prisma.IntFieldUpdateOperationsInput | number;
    messages_delivered?: Prisma.IntFieldUpdateOperationsInput | number;
    points_issued?: Prisma.IntFieldUpdateOperationsInput | number;
    points_redeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type kpi_daily_snapshotUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_customers?: Prisma.IntFieldUpdateOperationsInput | number;
    new_customers?: Prisma.IntFieldUpdateOperationsInput | number;
    active_customers?: Prisma.IntFieldUpdateOperationsInput | number;
    total_orders?: Prisma.IntFieldUpdateOperationsInput | number;
    total_revenue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    avg_order_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    messages_sent?: Prisma.IntFieldUpdateOperationsInput | number;
    messages_delivered?: Prisma.IntFieldUpdateOperationsInput | number;
    points_issued?: Prisma.IntFieldUpdateOperationsInput | number;
    points_redeemed?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type kpi_daily_snapshotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    total_customers?: Prisma.SortOrder;
    new_customers?: Prisma.SortOrder;
    active_customers?: Prisma.SortOrder;
    total_orders?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    avg_order_value?: Prisma.SortOrder;
    messages_sent?: Prisma.SortOrder;
    messages_delivered?: Prisma.SortOrder;
    points_issued?: Prisma.SortOrder;
    points_redeemed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type kpi_daily_snapshotAvgOrderByAggregateInput = {
    total_customers?: Prisma.SortOrder;
    new_customers?: Prisma.SortOrder;
    active_customers?: Prisma.SortOrder;
    total_orders?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    avg_order_value?: Prisma.SortOrder;
    messages_sent?: Prisma.SortOrder;
    messages_delivered?: Prisma.SortOrder;
    points_issued?: Prisma.SortOrder;
    points_redeemed?: Prisma.SortOrder;
};
export type kpi_daily_snapshotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    total_customers?: Prisma.SortOrder;
    new_customers?: Prisma.SortOrder;
    active_customers?: Prisma.SortOrder;
    total_orders?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    avg_order_value?: Prisma.SortOrder;
    messages_sent?: Prisma.SortOrder;
    messages_delivered?: Prisma.SortOrder;
    points_issued?: Prisma.SortOrder;
    points_redeemed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type kpi_daily_snapshotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    total_customers?: Prisma.SortOrder;
    new_customers?: Prisma.SortOrder;
    active_customers?: Prisma.SortOrder;
    total_orders?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    avg_order_value?: Prisma.SortOrder;
    messages_sent?: Prisma.SortOrder;
    messages_delivered?: Prisma.SortOrder;
    points_issued?: Prisma.SortOrder;
    points_redeemed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type kpi_daily_snapshotSumOrderByAggregateInput = {
    total_customers?: Prisma.SortOrder;
    new_customers?: Prisma.SortOrder;
    active_customers?: Prisma.SortOrder;
    total_orders?: Prisma.SortOrder;
    total_revenue?: Prisma.SortOrder;
    avg_order_value?: Prisma.SortOrder;
    messages_sent?: Prisma.SortOrder;
    messages_delivered?: Prisma.SortOrder;
    points_issued?: Prisma.SortOrder;
    points_redeemed?: Prisma.SortOrder;
};
export type kpi_daily_snapshotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    total_customers?: boolean;
    new_customers?: boolean;
    active_customers?: boolean;
    total_orders?: boolean;
    total_revenue?: boolean;
    avg_order_value?: boolean;
    messages_sent?: boolean;
    messages_delivered?: boolean;
    points_issued?: boolean;
    points_redeemed?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["kpi_daily_snapshot"]>;
export type kpi_daily_snapshotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    total_customers?: boolean;
    new_customers?: boolean;
    active_customers?: boolean;
    total_orders?: boolean;
    total_revenue?: boolean;
    avg_order_value?: boolean;
    messages_sent?: boolean;
    messages_delivered?: boolean;
    points_issued?: boolean;
    points_redeemed?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["kpi_daily_snapshot"]>;
export type kpi_daily_snapshotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    total_customers?: boolean;
    new_customers?: boolean;
    active_customers?: boolean;
    total_orders?: boolean;
    total_revenue?: boolean;
    avg_order_value?: boolean;
    messages_sent?: boolean;
    messages_delivered?: boolean;
    points_issued?: boolean;
    points_redeemed?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["kpi_daily_snapshot"]>;
export type kpi_daily_snapshotSelectScalar = {
    id?: boolean;
    date?: boolean;
    total_customers?: boolean;
    new_customers?: boolean;
    active_customers?: boolean;
    total_orders?: boolean;
    total_revenue?: boolean;
    avg_order_value?: boolean;
    messages_sent?: boolean;
    messages_delivered?: boolean;
    points_issued?: boolean;
    points_redeemed?: boolean;
    created_at?: boolean;
};
export type kpi_daily_snapshotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "date" | "total_customers" | "new_customers" | "active_customers" | "total_orders" | "total_revenue" | "avg_order_value" | "messages_sent" | "messages_delivered" | "points_issued" | "points_redeemed" | "created_at", ExtArgs["result"]["kpi_daily_snapshot"]>;
export type $kpi_daily_snapshotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "kpi_daily_snapshot";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        date: Date;
        total_customers: number;
        new_customers: number;
        active_customers: number;
        total_orders: number;
        total_revenue: runtime.Decimal;
        avg_order_value: runtime.Decimal;
        messages_sent: number;
        messages_delivered: number;
        points_issued: number;
        points_redeemed: number;
        created_at: Date;
    }, ExtArgs["result"]["kpi_daily_snapshot"]>;
    composites: {};
};
export type kpi_daily_snapshotGetPayload<S extends boolean | null | undefined | kpi_daily_snapshotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$kpi_daily_snapshotPayload, S>;
export type kpi_daily_snapshotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<kpi_daily_snapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Kpi_daily_snapshotCountAggregateInputType | true;
};
export interface kpi_daily_snapshotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['kpi_daily_snapshot'];
        meta: {
            name: 'kpi_daily_snapshot';
        };
    };
    findUnique<T extends kpi_daily_snapshotFindUniqueArgs>(args: Prisma.SelectSubset<T, kpi_daily_snapshotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__kpi_daily_snapshotClient<runtime.Types.Result.GetResult<Prisma.$kpi_daily_snapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends kpi_daily_snapshotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, kpi_daily_snapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__kpi_daily_snapshotClient<runtime.Types.Result.GetResult<Prisma.$kpi_daily_snapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends kpi_daily_snapshotFindFirstArgs>(args?: Prisma.SelectSubset<T, kpi_daily_snapshotFindFirstArgs<ExtArgs>>): Prisma.Prisma__kpi_daily_snapshotClient<runtime.Types.Result.GetResult<Prisma.$kpi_daily_snapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends kpi_daily_snapshotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, kpi_daily_snapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__kpi_daily_snapshotClient<runtime.Types.Result.GetResult<Prisma.$kpi_daily_snapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends kpi_daily_snapshotFindManyArgs>(args?: Prisma.SelectSubset<T, kpi_daily_snapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$kpi_daily_snapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends kpi_daily_snapshotCreateArgs>(args: Prisma.SelectSubset<T, kpi_daily_snapshotCreateArgs<ExtArgs>>): Prisma.Prisma__kpi_daily_snapshotClient<runtime.Types.Result.GetResult<Prisma.$kpi_daily_snapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends kpi_daily_snapshotCreateManyArgs>(args?: Prisma.SelectSubset<T, kpi_daily_snapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends kpi_daily_snapshotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, kpi_daily_snapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$kpi_daily_snapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends kpi_daily_snapshotDeleteArgs>(args: Prisma.SelectSubset<T, kpi_daily_snapshotDeleteArgs<ExtArgs>>): Prisma.Prisma__kpi_daily_snapshotClient<runtime.Types.Result.GetResult<Prisma.$kpi_daily_snapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends kpi_daily_snapshotUpdateArgs>(args: Prisma.SelectSubset<T, kpi_daily_snapshotUpdateArgs<ExtArgs>>): Prisma.Prisma__kpi_daily_snapshotClient<runtime.Types.Result.GetResult<Prisma.$kpi_daily_snapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends kpi_daily_snapshotDeleteManyArgs>(args?: Prisma.SelectSubset<T, kpi_daily_snapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends kpi_daily_snapshotUpdateManyArgs>(args: Prisma.SelectSubset<T, kpi_daily_snapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends kpi_daily_snapshotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, kpi_daily_snapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$kpi_daily_snapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends kpi_daily_snapshotUpsertArgs>(args: Prisma.SelectSubset<T, kpi_daily_snapshotUpsertArgs<ExtArgs>>): Prisma.Prisma__kpi_daily_snapshotClient<runtime.Types.Result.GetResult<Prisma.$kpi_daily_snapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends kpi_daily_snapshotCountArgs>(args?: Prisma.Subset<T, kpi_daily_snapshotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Kpi_daily_snapshotCountAggregateOutputType> : number>;
    aggregate<T extends Kpi_daily_snapshotAggregateArgs>(args: Prisma.Subset<T, Kpi_daily_snapshotAggregateArgs>): Prisma.PrismaPromise<GetKpi_daily_snapshotAggregateType<T>>;
    groupBy<T extends kpi_daily_snapshotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: kpi_daily_snapshotGroupByArgs['orderBy'];
    } : {
        orderBy?: kpi_daily_snapshotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, kpi_daily_snapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKpi_daily_snapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: kpi_daily_snapshotFieldRefs;
}
export interface Prisma__kpi_daily_snapshotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface kpi_daily_snapshotFieldRefs {
    readonly id: Prisma.FieldRef<"kpi_daily_snapshot", 'String'>;
    readonly date: Prisma.FieldRef<"kpi_daily_snapshot", 'DateTime'>;
    readonly total_customers: Prisma.FieldRef<"kpi_daily_snapshot", 'Int'>;
    readonly new_customers: Prisma.FieldRef<"kpi_daily_snapshot", 'Int'>;
    readonly active_customers: Prisma.FieldRef<"kpi_daily_snapshot", 'Int'>;
    readonly total_orders: Prisma.FieldRef<"kpi_daily_snapshot", 'Int'>;
    readonly total_revenue: Prisma.FieldRef<"kpi_daily_snapshot", 'Decimal'>;
    readonly avg_order_value: Prisma.FieldRef<"kpi_daily_snapshot", 'Decimal'>;
    readonly messages_sent: Prisma.FieldRef<"kpi_daily_snapshot", 'Int'>;
    readonly messages_delivered: Prisma.FieldRef<"kpi_daily_snapshot", 'Int'>;
    readonly points_issued: Prisma.FieldRef<"kpi_daily_snapshot", 'Int'>;
    readonly points_redeemed: Prisma.FieldRef<"kpi_daily_snapshot", 'Int'>;
    readonly created_at: Prisma.FieldRef<"kpi_daily_snapshot", 'DateTime'>;
}
export type kpi_daily_snapshotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.kpi_daily_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.kpi_daily_snapshotOmit<ExtArgs> | null;
    where: Prisma.kpi_daily_snapshotWhereUniqueInput;
};
export type kpi_daily_snapshotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.kpi_daily_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.kpi_daily_snapshotOmit<ExtArgs> | null;
    where: Prisma.kpi_daily_snapshotWhereUniqueInput;
};
export type kpi_daily_snapshotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.kpi_daily_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.kpi_daily_snapshotOmit<ExtArgs> | null;
    where?: Prisma.kpi_daily_snapshotWhereInput;
    orderBy?: Prisma.kpi_daily_snapshotOrderByWithRelationInput | Prisma.kpi_daily_snapshotOrderByWithRelationInput[];
    cursor?: Prisma.kpi_daily_snapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Kpi_daily_snapshotScalarFieldEnum | Prisma.Kpi_daily_snapshotScalarFieldEnum[];
};
export type kpi_daily_snapshotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.kpi_daily_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.kpi_daily_snapshotOmit<ExtArgs> | null;
    where?: Prisma.kpi_daily_snapshotWhereInput;
    orderBy?: Prisma.kpi_daily_snapshotOrderByWithRelationInput | Prisma.kpi_daily_snapshotOrderByWithRelationInput[];
    cursor?: Prisma.kpi_daily_snapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Kpi_daily_snapshotScalarFieldEnum | Prisma.Kpi_daily_snapshotScalarFieldEnum[];
};
export type kpi_daily_snapshotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.kpi_daily_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.kpi_daily_snapshotOmit<ExtArgs> | null;
    where?: Prisma.kpi_daily_snapshotWhereInput;
    orderBy?: Prisma.kpi_daily_snapshotOrderByWithRelationInput | Prisma.kpi_daily_snapshotOrderByWithRelationInput[];
    cursor?: Prisma.kpi_daily_snapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Kpi_daily_snapshotScalarFieldEnum | Prisma.Kpi_daily_snapshotScalarFieldEnum[];
};
export type kpi_daily_snapshotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.kpi_daily_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.kpi_daily_snapshotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.kpi_daily_snapshotCreateInput, Prisma.kpi_daily_snapshotUncheckedCreateInput>;
};
export type kpi_daily_snapshotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.kpi_daily_snapshotCreateManyInput | Prisma.kpi_daily_snapshotCreateManyInput[];
    skipDuplicates?: boolean;
};
export type kpi_daily_snapshotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.kpi_daily_snapshotSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.kpi_daily_snapshotOmit<ExtArgs> | null;
    data: Prisma.kpi_daily_snapshotCreateManyInput | Prisma.kpi_daily_snapshotCreateManyInput[];
    skipDuplicates?: boolean;
};
export type kpi_daily_snapshotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.kpi_daily_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.kpi_daily_snapshotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.kpi_daily_snapshotUpdateInput, Prisma.kpi_daily_snapshotUncheckedUpdateInput>;
    where: Prisma.kpi_daily_snapshotWhereUniqueInput;
};
export type kpi_daily_snapshotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.kpi_daily_snapshotUpdateManyMutationInput, Prisma.kpi_daily_snapshotUncheckedUpdateManyInput>;
    where?: Prisma.kpi_daily_snapshotWhereInput;
    limit?: number;
};
export type kpi_daily_snapshotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.kpi_daily_snapshotSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.kpi_daily_snapshotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.kpi_daily_snapshotUpdateManyMutationInput, Prisma.kpi_daily_snapshotUncheckedUpdateManyInput>;
    where?: Prisma.kpi_daily_snapshotWhereInput;
    limit?: number;
};
export type kpi_daily_snapshotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.kpi_daily_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.kpi_daily_snapshotOmit<ExtArgs> | null;
    where: Prisma.kpi_daily_snapshotWhereUniqueInput;
    create: Prisma.XOR<Prisma.kpi_daily_snapshotCreateInput, Prisma.kpi_daily_snapshotUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.kpi_daily_snapshotUpdateInput, Prisma.kpi_daily_snapshotUncheckedUpdateInput>;
};
export type kpi_daily_snapshotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.kpi_daily_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.kpi_daily_snapshotOmit<ExtArgs> | null;
    where: Prisma.kpi_daily_snapshotWhereUniqueInput;
};
export type kpi_daily_snapshotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.kpi_daily_snapshotWhereInput;
    limit?: number;
};
export type kpi_daily_snapshotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.kpi_daily_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.kpi_daily_snapshotOmit<ExtArgs> | null;
};
