import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type points_liability_snapshotModel = runtime.Types.Result.DefaultSelection<Prisma.$points_liability_snapshotPayload>;
export type AggregatePoints_liability_snapshot = {
    _count: Points_liability_snapshotCountAggregateOutputType | null;
    _avg: Points_liability_snapshotAvgAggregateOutputType | null;
    _sum: Points_liability_snapshotSumAggregateOutputType | null;
    _min: Points_liability_snapshotMinAggregateOutputType | null;
    _max: Points_liability_snapshotMaxAggregateOutputType | null;
};
export type Points_liability_snapshotAvgAggregateOutputType = {
    total_outstanding_points: number | null;
    estimated_liability_vnd: runtime.Decimal | null;
    points_expiring_30d: number | null;
    points_expiring_90d: number | null;
};
export type Points_liability_snapshotSumAggregateOutputType = {
    total_outstanding_points: bigint | null;
    estimated_liability_vnd: runtime.Decimal | null;
    points_expiring_30d: number | null;
    points_expiring_90d: number | null;
};
export type Points_liability_snapshotMinAggregateOutputType = {
    id: string | null;
    snapshot_date: Date | null;
    total_outstanding_points: bigint | null;
    estimated_liability_vnd: runtime.Decimal | null;
    points_expiring_30d: number | null;
    points_expiring_90d: number | null;
    created_at: Date | null;
};
export type Points_liability_snapshotMaxAggregateOutputType = {
    id: string | null;
    snapshot_date: Date | null;
    total_outstanding_points: bigint | null;
    estimated_liability_vnd: runtime.Decimal | null;
    points_expiring_30d: number | null;
    points_expiring_90d: number | null;
    created_at: Date | null;
};
export type Points_liability_snapshotCountAggregateOutputType = {
    id: number;
    snapshot_date: number;
    total_outstanding_points: number;
    estimated_liability_vnd: number;
    points_expiring_30d: number;
    points_expiring_90d: number;
    created_at: number;
    _all: number;
};
export type Points_liability_snapshotAvgAggregateInputType = {
    total_outstanding_points?: true;
    estimated_liability_vnd?: true;
    points_expiring_30d?: true;
    points_expiring_90d?: true;
};
export type Points_liability_snapshotSumAggregateInputType = {
    total_outstanding_points?: true;
    estimated_liability_vnd?: true;
    points_expiring_30d?: true;
    points_expiring_90d?: true;
};
export type Points_liability_snapshotMinAggregateInputType = {
    id?: true;
    snapshot_date?: true;
    total_outstanding_points?: true;
    estimated_liability_vnd?: true;
    points_expiring_30d?: true;
    points_expiring_90d?: true;
    created_at?: true;
};
export type Points_liability_snapshotMaxAggregateInputType = {
    id?: true;
    snapshot_date?: true;
    total_outstanding_points?: true;
    estimated_liability_vnd?: true;
    points_expiring_30d?: true;
    points_expiring_90d?: true;
    created_at?: true;
};
export type Points_liability_snapshotCountAggregateInputType = {
    id?: true;
    snapshot_date?: true;
    total_outstanding_points?: true;
    estimated_liability_vnd?: true;
    points_expiring_30d?: true;
    points_expiring_90d?: true;
    created_at?: true;
    _all?: true;
};
export type Points_liability_snapshotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.points_liability_snapshotWhereInput;
    orderBy?: Prisma.points_liability_snapshotOrderByWithRelationInput | Prisma.points_liability_snapshotOrderByWithRelationInput[];
    cursor?: Prisma.points_liability_snapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Points_liability_snapshotCountAggregateInputType;
    _avg?: Points_liability_snapshotAvgAggregateInputType;
    _sum?: Points_liability_snapshotSumAggregateInputType;
    _min?: Points_liability_snapshotMinAggregateInputType;
    _max?: Points_liability_snapshotMaxAggregateInputType;
};
export type GetPoints_liability_snapshotAggregateType<T extends Points_liability_snapshotAggregateArgs> = {
    [P in keyof T & keyof AggregatePoints_liability_snapshot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePoints_liability_snapshot[P]> : Prisma.GetScalarType<T[P], AggregatePoints_liability_snapshot[P]>;
};
export type points_liability_snapshotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.points_liability_snapshotWhereInput;
    orderBy?: Prisma.points_liability_snapshotOrderByWithAggregationInput | Prisma.points_liability_snapshotOrderByWithAggregationInput[];
    by: Prisma.Points_liability_snapshotScalarFieldEnum[] | Prisma.Points_liability_snapshotScalarFieldEnum;
    having?: Prisma.points_liability_snapshotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Points_liability_snapshotCountAggregateInputType | true;
    _avg?: Points_liability_snapshotAvgAggregateInputType;
    _sum?: Points_liability_snapshotSumAggregateInputType;
    _min?: Points_liability_snapshotMinAggregateInputType;
    _max?: Points_liability_snapshotMaxAggregateInputType;
};
export type Points_liability_snapshotGroupByOutputType = {
    id: string;
    snapshot_date: Date;
    total_outstanding_points: bigint;
    estimated_liability_vnd: runtime.Decimal;
    points_expiring_30d: number;
    points_expiring_90d: number;
    created_at: Date;
    _count: Points_liability_snapshotCountAggregateOutputType | null;
    _avg: Points_liability_snapshotAvgAggregateOutputType | null;
    _sum: Points_liability_snapshotSumAggregateOutputType | null;
    _min: Points_liability_snapshotMinAggregateOutputType | null;
    _max: Points_liability_snapshotMaxAggregateOutputType | null;
};
export type GetPoints_liability_snapshotGroupByPayload<T extends points_liability_snapshotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Points_liability_snapshotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Points_liability_snapshotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Points_liability_snapshotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Points_liability_snapshotGroupByOutputType[P]>;
}>>;
export type points_liability_snapshotWhereInput = {
    AND?: Prisma.points_liability_snapshotWhereInput | Prisma.points_liability_snapshotWhereInput[];
    OR?: Prisma.points_liability_snapshotWhereInput[];
    NOT?: Prisma.points_liability_snapshotWhereInput | Prisma.points_liability_snapshotWhereInput[];
    id?: Prisma.UuidFilter<"points_liability_snapshot"> | string;
    snapshot_date?: Prisma.DateTimeFilter<"points_liability_snapshot"> | Date | string;
    total_outstanding_points?: Prisma.BigIntFilter<"points_liability_snapshot"> | bigint | number;
    estimated_liability_vnd?: Prisma.DecimalFilter<"points_liability_snapshot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    points_expiring_30d?: Prisma.IntFilter<"points_liability_snapshot"> | number;
    points_expiring_90d?: Prisma.IntFilter<"points_liability_snapshot"> | number;
    created_at?: Prisma.DateTimeFilter<"points_liability_snapshot"> | Date | string;
};
export type points_liability_snapshotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    snapshot_date?: Prisma.SortOrder;
    total_outstanding_points?: Prisma.SortOrder;
    estimated_liability_vnd?: Prisma.SortOrder;
    points_expiring_30d?: Prisma.SortOrder;
    points_expiring_90d?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type points_liability_snapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    snapshot_date?: Date | string;
    AND?: Prisma.points_liability_snapshotWhereInput | Prisma.points_liability_snapshotWhereInput[];
    OR?: Prisma.points_liability_snapshotWhereInput[];
    NOT?: Prisma.points_liability_snapshotWhereInput | Prisma.points_liability_snapshotWhereInput[];
    total_outstanding_points?: Prisma.BigIntFilter<"points_liability_snapshot"> | bigint | number;
    estimated_liability_vnd?: Prisma.DecimalFilter<"points_liability_snapshot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    points_expiring_30d?: Prisma.IntFilter<"points_liability_snapshot"> | number;
    points_expiring_90d?: Prisma.IntFilter<"points_liability_snapshot"> | number;
    created_at?: Prisma.DateTimeFilter<"points_liability_snapshot"> | Date | string;
}, "id" | "snapshot_date">;
export type points_liability_snapshotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    snapshot_date?: Prisma.SortOrder;
    total_outstanding_points?: Prisma.SortOrder;
    estimated_liability_vnd?: Prisma.SortOrder;
    points_expiring_30d?: Prisma.SortOrder;
    points_expiring_90d?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.points_liability_snapshotCountOrderByAggregateInput;
    _avg?: Prisma.points_liability_snapshotAvgOrderByAggregateInput;
    _max?: Prisma.points_liability_snapshotMaxOrderByAggregateInput;
    _min?: Prisma.points_liability_snapshotMinOrderByAggregateInput;
    _sum?: Prisma.points_liability_snapshotSumOrderByAggregateInput;
};
export type points_liability_snapshotScalarWhereWithAggregatesInput = {
    AND?: Prisma.points_liability_snapshotScalarWhereWithAggregatesInput | Prisma.points_liability_snapshotScalarWhereWithAggregatesInput[];
    OR?: Prisma.points_liability_snapshotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.points_liability_snapshotScalarWhereWithAggregatesInput | Prisma.points_liability_snapshotScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"points_liability_snapshot"> | string;
    snapshot_date?: Prisma.DateTimeWithAggregatesFilter<"points_liability_snapshot"> | Date | string;
    total_outstanding_points?: Prisma.BigIntWithAggregatesFilter<"points_liability_snapshot"> | bigint | number;
    estimated_liability_vnd?: Prisma.DecimalWithAggregatesFilter<"points_liability_snapshot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    points_expiring_30d?: Prisma.IntWithAggregatesFilter<"points_liability_snapshot"> | number;
    points_expiring_90d?: Prisma.IntWithAggregatesFilter<"points_liability_snapshot"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"points_liability_snapshot"> | Date | string;
};
export type points_liability_snapshotCreateInput = {
    id?: string;
    snapshot_date: Date | string;
    total_outstanding_points?: bigint | number;
    estimated_liability_vnd?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    points_expiring_30d?: number;
    points_expiring_90d?: number;
    created_at?: Date | string;
};
export type points_liability_snapshotUncheckedCreateInput = {
    id?: string;
    snapshot_date: Date | string;
    total_outstanding_points?: bigint | number;
    estimated_liability_vnd?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    points_expiring_30d?: number;
    points_expiring_90d?: number;
    created_at?: Date | string;
};
export type points_liability_snapshotUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_outstanding_points?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estimated_liability_vnd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    points_expiring_30d?: Prisma.IntFieldUpdateOperationsInput | number;
    points_expiring_90d?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type points_liability_snapshotUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_outstanding_points?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estimated_liability_vnd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    points_expiring_30d?: Prisma.IntFieldUpdateOperationsInput | number;
    points_expiring_90d?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type points_liability_snapshotCreateManyInput = {
    id?: string;
    snapshot_date: Date | string;
    total_outstanding_points?: bigint | number;
    estimated_liability_vnd?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    points_expiring_30d?: number;
    points_expiring_90d?: number;
    created_at?: Date | string;
};
export type points_liability_snapshotUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_outstanding_points?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estimated_liability_vnd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    points_expiring_30d?: Prisma.IntFieldUpdateOperationsInput | number;
    points_expiring_90d?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type points_liability_snapshotUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total_outstanding_points?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estimated_liability_vnd?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    points_expiring_30d?: Prisma.IntFieldUpdateOperationsInput | number;
    points_expiring_90d?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type points_liability_snapshotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    snapshot_date?: Prisma.SortOrder;
    total_outstanding_points?: Prisma.SortOrder;
    estimated_liability_vnd?: Prisma.SortOrder;
    points_expiring_30d?: Prisma.SortOrder;
    points_expiring_90d?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type points_liability_snapshotAvgOrderByAggregateInput = {
    total_outstanding_points?: Prisma.SortOrder;
    estimated_liability_vnd?: Prisma.SortOrder;
    points_expiring_30d?: Prisma.SortOrder;
    points_expiring_90d?: Prisma.SortOrder;
};
export type points_liability_snapshotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    snapshot_date?: Prisma.SortOrder;
    total_outstanding_points?: Prisma.SortOrder;
    estimated_liability_vnd?: Prisma.SortOrder;
    points_expiring_30d?: Prisma.SortOrder;
    points_expiring_90d?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type points_liability_snapshotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    snapshot_date?: Prisma.SortOrder;
    total_outstanding_points?: Prisma.SortOrder;
    estimated_liability_vnd?: Prisma.SortOrder;
    points_expiring_30d?: Prisma.SortOrder;
    points_expiring_90d?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type points_liability_snapshotSumOrderByAggregateInput = {
    total_outstanding_points?: Prisma.SortOrder;
    estimated_liability_vnd?: Prisma.SortOrder;
    points_expiring_30d?: Prisma.SortOrder;
    points_expiring_90d?: Prisma.SortOrder;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type points_liability_snapshotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    snapshot_date?: boolean;
    total_outstanding_points?: boolean;
    estimated_liability_vnd?: boolean;
    points_expiring_30d?: boolean;
    points_expiring_90d?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["points_liability_snapshot"]>;
export type points_liability_snapshotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    snapshot_date?: boolean;
    total_outstanding_points?: boolean;
    estimated_liability_vnd?: boolean;
    points_expiring_30d?: boolean;
    points_expiring_90d?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["points_liability_snapshot"]>;
export type points_liability_snapshotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    snapshot_date?: boolean;
    total_outstanding_points?: boolean;
    estimated_liability_vnd?: boolean;
    points_expiring_30d?: boolean;
    points_expiring_90d?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["points_liability_snapshot"]>;
export type points_liability_snapshotSelectScalar = {
    id?: boolean;
    snapshot_date?: boolean;
    total_outstanding_points?: boolean;
    estimated_liability_vnd?: boolean;
    points_expiring_30d?: boolean;
    points_expiring_90d?: boolean;
    created_at?: boolean;
};
export type points_liability_snapshotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "snapshot_date" | "total_outstanding_points" | "estimated_liability_vnd" | "points_expiring_30d" | "points_expiring_90d" | "created_at", ExtArgs["result"]["points_liability_snapshot"]>;
export type $points_liability_snapshotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "points_liability_snapshot";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        snapshot_date: Date;
        total_outstanding_points: bigint;
        estimated_liability_vnd: runtime.Decimal;
        points_expiring_30d: number;
        points_expiring_90d: number;
        created_at: Date;
    }, ExtArgs["result"]["points_liability_snapshot"]>;
    composites: {};
};
export type points_liability_snapshotGetPayload<S extends boolean | null | undefined | points_liability_snapshotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$points_liability_snapshotPayload, S>;
export type points_liability_snapshotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<points_liability_snapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Points_liability_snapshotCountAggregateInputType | true;
};
export interface points_liability_snapshotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['points_liability_snapshot'];
        meta: {
            name: 'points_liability_snapshot';
        };
    };
    findUnique<T extends points_liability_snapshotFindUniqueArgs>(args: Prisma.SelectSubset<T, points_liability_snapshotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__points_liability_snapshotClient<runtime.Types.Result.GetResult<Prisma.$points_liability_snapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends points_liability_snapshotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, points_liability_snapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__points_liability_snapshotClient<runtime.Types.Result.GetResult<Prisma.$points_liability_snapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends points_liability_snapshotFindFirstArgs>(args?: Prisma.SelectSubset<T, points_liability_snapshotFindFirstArgs<ExtArgs>>): Prisma.Prisma__points_liability_snapshotClient<runtime.Types.Result.GetResult<Prisma.$points_liability_snapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends points_liability_snapshotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, points_liability_snapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__points_liability_snapshotClient<runtime.Types.Result.GetResult<Prisma.$points_liability_snapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends points_liability_snapshotFindManyArgs>(args?: Prisma.SelectSubset<T, points_liability_snapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$points_liability_snapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends points_liability_snapshotCreateArgs>(args: Prisma.SelectSubset<T, points_liability_snapshotCreateArgs<ExtArgs>>): Prisma.Prisma__points_liability_snapshotClient<runtime.Types.Result.GetResult<Prisma.$points_liability_snapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends points_liability_snapshotCreateManyArgs>(args?: Prisma.SelectSubset<T, points_liability_snapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends points_liability_snapshotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, points_liability_snapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$points_liability_snapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends points_liability_snapshotDeleteArgs>(args: Prisma.SelectSubset<T, points_liability_snapshotDeleteArgs<ExtArgs>>): Prisma.Prisma__points_liability_snapshotClient<runtime.Types.Result.GetResult<Prisma.$points_liability_snapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends points_liability_snapshotUpdateArgs>(args: Prisma.SelectSubset<T, points_liability_snapshotUpdateArgs<ExtArgs>>): Prisma.Prisma__points_liability_snapshotClient<runtime.Types.Result.GetResult<Prisma.$points_liability_snapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends points_liability_snapshotDeleteManyArgs>(args?: Prisma.SelectSubset<T, points_liability_snapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends points_liability_snapshotUpdateManyArgs>(args: Prisma.SelectSubset<T, points_liability_snapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends points_liability_snapshotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, points_liability_snapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$points_liability_snapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends points_liability_snapshotUpsertArgs>(args: Prisma.SelectSubset<T, points_liability_snapshotUpsertArgs<ExtArgs>>): Prisma.Prisma__points_liability_snapshotClient<runtime.Types.Result.GetResult<Prisma.$points_liability_snapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends points_liability_snapshotCountArgs>(args?: Prisma.Subset<T, points_liability_snapshotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Points_liability_snapshotCountAggregateOutputType> : number>;
    aggregate<T extends Points_liability_snapshotAggregateArgs>(args: Prisma.Subset<T, Points_liability_snapshotAggregateArgs>): Prisma.PrismaPromise<GetPoints_liability_snapshotAggregateType<T>>;
    groupBy<T extends points_liability_snapshotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: points_liability_snapshotGroupByArgs['orderBy'];
    } : {
        orderBy?: points_liability_snapshotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, points_liability_snapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoints_liability_snapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: points_liability_snapshotFieldRefs;
}
export interface Prisma__points_liability_snapshotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface points_liability_snapshotFieldRefs {
    readonly id: Prisma.FieldRef<"points_liability_snapshot", 'String'>;
    readonly snapshot_date: Prisma.FieldRef<"points_liability_snapshot", 'DateTime'>;
    readonly total_outstanding_points: Prisma.FieldRef<"points_liability_snapshot", 'BigInt'>;
    readonly estimated_liability_vnd: Prisma.FieldRef<"points_liability_snapshot", 'Decimal'>;
    readonly points_expiring_30d: Prisma.FieldRef<"points_liability_snapshot", 'Int'>;
    readonly points_expiring_90d: Prisma.FieldRef<"points_liability_snapshot", 'Int'>;
    readonly created_at: Prisma.FieldRef<"points_liability_snapshot", 'DateTime'>;
}
export type points_liability_snapshotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.points_liability_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.points_liability_snapshotOmit<ExtArgs> | null;
    where: Prisma.points_liability_snapshotWhereUniqueInput;
};
export type points_liability_snapshotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.points_liability_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.points_liability_snapshotOmit<ExtArgs> | null;
    where: Prisma.points_liability_snapshotWhereUniqueInput;
};
export type points_liability_snapshotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.points_liability_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.points_liability_snapshotOmit<ExtArgs> | null;
    where?: Prisma.points_liability_snapshotWhereInput;
    orderBy?: Prisma.points_liability_snapshotOrderByWithRelationInput | Prisma.points_liability_snapshotOrderByWithRelationInput[];
    cursor?: Prisma.points_liability_snapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Points_liability_snapshotScalarFieldEnum | Prisma.Points_liability_snapshotScalarFieldEnum[];
};
export type points_liability_snapshotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.points_liability_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.points_liability_snapshotOmit<ExtArgs> | null;
    where?: Prisma.points_liability_snapshotWhereInput;
    orderBy?: Prisma.points_liability_snapshotOrderByWithRelationInput | Prisma.points_liability_snapshotOrderByWithRelationInput[];
    cursor?: Prisma.points_liability_snapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Points_liability_snapshotScalarFieldEnum | Prisma.Points_liability_snapshotScalarFieldEnum[];
};
export type points_liability_snapshotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.points_liability_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.points_liability_snapshotOmit<ExtArgs> | null;
    where?: Prisma.points_liability_snapshotWhereInput;
    orderBy?: Prisma.points_liability_snapshotOrderByWithRelationInput | Prisma.points_liability_snapshotOrderByWithRelationInput[];
    cursor?: Prisma.points_liability_snapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Points_liability_snapshotScalarFieldEnum | Prisma.Points_liability_snapshotScalarFieldEnum[];
};
export type points_liability_snapshotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.points_liability_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.points_liability_snapshotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.points_liability_snapshotCreateInput, Prisma.points_liability_snapshotUncheckedCreateInput>;
};
export type points_liability_snapshotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.points_liability_snapshotCreateManyInput | Prisma.points_liability_snapshotCreateManyInput[];
    skipDuplicates?: boolean;
};
export type points_liability_snapshotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.points_liability_snapshotSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.points_liability_snapshotOmit<ExtArgs> | null;
    data: Prisma.points_liability_snapshotCreateManyInput | Prisma.points_liability_snapshotCreateManyInput[];
    skipDuplicates?: boolean;
};
export type points_liability_snapshotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.points_liability_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.points_liability_snapshotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.points_liability_snapshotUpdateInput, Prisma.points_liability_snapshotUncheckedUpdateInput>;
    where: Prisma.points_liability_snapshotWhereUniqueInput;
};
export type points_liability_snapshotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.points_liability_snapshotUpdateManyMutationInput, Prisma.points_liability_snapshotUncheckedUpdateManyInput>;
    where?: Prisma.points_liability_snapshotWhereInput;
    limit?: number;
};
export type points_liability_snapshotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.points_liability_snapshotSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.points_liability_snapshotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.points_liability_snapshotUpdateManyMutationInput, Prisma.points_liability_snapshotUncheckedUpdateManyInput>;
    where?: Prisma.points_liability_snapshotWhereInput;
    limit?: number;
};
export type points_liability_snapshotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.points_liability_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.points_liability_snapshotOmit<ExtArgs> | null;
    where: Prisma.points_liability_snapshotWhereUniqueInput;
    create: Prisma.XOR<Prisma.points_liability_snapshotCreateInput, Prisma.points_liability_snapshotUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.points_liability_snapshotUpdateInput, Prisma.points_liability_snapshotUncheckedUpdateInput>;
};
export type points_liability_snapshotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.points_liability_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.points_liability_snapshotOmit<ExtArgs> | null;
    where: Prisma.points_liability_snapshotWhereUniqueInput;
};
export type points_liability_snapshotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.points_liability_snapshotWhereInput;
    limit?: number;
};
export type points_liability_snapshotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.points_liability_snapshotSelect<ExtArgs> | null;
    omit?: Prisma.points_liability_snapshotOmit<ExtArgs> | null;
};
