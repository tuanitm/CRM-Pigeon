import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BabyStageHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$BabyStageHistoryPayload>;
export type AggregateBabyStageHistory = {
    _count: BabyStageHistoryCountAggregateOutputType | null;
    _min: BabyStageHistoryMinAggregateOutputType | null;
    _max: BabyStageHistoryMaxAggregateOutputType | null;
};
export type BabyStageHistoryMinAggregateOutputType = {
    id: string | null;
    babyId: string | null;
    stageCode: string | null;
    startedAt: Date | null;
    endedAt: Date | null;
    createdAt: Date | null;
};
export type BabyStageHistoryMaxAggregateOutputType = {
    id: string | null;
    babyId: string | null;
    stageCode: string | null;
    startedAt: Date | null;
    endedAt: Date | null;
    createdAt: Date | null;
};
export type BabyStageHistoryCountAggregateOutputType = {
    id: number;
    babyId: number;
    stageCode: number;
    startedAt: number;
    endedAt: number;
    createdAt: number;
    _all: number;
};
export type BabyStageHistoryMinAggregateInputType = {
    id?: true;
    babyId?: true;
    stageCode?: true;
    startedAt?: true;
    endedAt?: true;
    createdAt?: true;
};
export type BabyStageHistoryMaxAggregateInputType = {
    id?: true;
    babyId?: true;
    stageCode?: true;
    startedAt?: true;
    endedAt?: true;
    createdAt?: true;
};
export type BabyStageHistoryCountAggregateInputType = {
    id?: true;
    babyId?: true;
    stageCode?: true;
    startedAt?: true;
    endedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type BabyStageHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BabyStageHistoryWhereInput;
    orderBy?: Prisma.BabyStageHistoryOrderByWithRelationInput | Prisma.BabyStageHistoryOrderByWithRelationInput[];
    cursor?: Prisma.BabyStageHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BabyStageHistoryCountAggregateInputType;
    _min?: BabyStageHistoryMinAggregateInputType;
    _max?: BabyStageHistoryMaxAggregateInputType;
};
export type GetBabyStageHistoryAggregateType<T extends BabyStageHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateBabyStageHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBabyStageHistory[P]> : Prisma.GetScalarType<T[P], AggregateBabyStageHistory[P]>;
};
export type BabyStageHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BabyStageHistoryWhereInput;
    orderBy?: Prisma.BabyStageHistoryOrderByWithAggregationInput | Prisma.BabyStageHistoryOrderByWithAggregationInput[];
    by: Prisma.BabyStageHistoryScalarFieldEnum[] | Prisma.BabyStageHistoryScalarFieldEnum;
    having?: Prisma.BabyStageHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BabyStageHistoryCountAggregateInputType | true;
    _min?: BabyStageHistoryMinAggregateInputType;
    _max?: BabyStageHistoryMaxAggregateInputType;
};
export type BabyStageHistoryGroupByOutputType = {
    id: string;
    babyId: string;
    stageCode: string;
    startedAt: Date;
    endedAt: Date | null;
    createdAt: Date;
    _count: BabyStageHistoryCountAggregateOutputType | null;
    _min: BabyStageHistoryMinAggregateOutputType | null;
    _max: BabyStageHistoryMaxAggregateOutputType | null;
};
export type GetBabyStageHistoryGroupByPayload<T extends BabyStageHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BabyStageHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BabyStageHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BabyStageHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BabyStageHistoryGroupByOutputType[P]>;
}>>;
export type BabyStageHistoryWhereInput = {
    AND?: Prisma.BabyStageHistoryWhereInput | Prisma.BabyStageHistoryWhereInput[];
    OR?: Prisma.BabyStageHistoryWhereInput[];
    NOT?: Prisma.BabyStageHistoryWhereInput | Prisma.BabyStageHistoryWhereInput[];
    id?: Prisma.UuidFilter<"BabyStageHistory"> | string;
    babyId?: Prisma.UuidFilter<"BabyStageHistory"> | string;
    stageCode?: Prisma.StringFilter<"BabyStageHistory"> | string;
    startedAt?: Prisma.DateTimeFilter<"BabyStageHistory"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"BabyStageHistory"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BabyStageHistory"> | Date | string;
    baby?: Prisma.XOR<Prisma.BabyScalarRelationFilter, Prisma.BabyWhereInput>;
};
export type BabyStageHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    babyId?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    baby?: Prisma.BabyOrderByWithRelationInput;
};
export type BabyStageHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BabyStageHistoryWhereInput | Prisma.BabyStageHistoryWhereInput[];
    OR?: Prisma.BabyStageHistoryWhereInput[];
    NOT?: Prisma.BabyStageHistoryWhereInput | Prisma.BabyStageHistoryWhereInput[];
    babyId?: Prisma.UuidFilter<"BabyStageHistory"> | string;
    stageCode?: Prisma.StringFilter<"BabyStageHistory"> | string;
    startedAt?: Prisma.DateTimeFilter<"BabyStageHistory"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"BabyStageHistory"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BabyStageHistory"> | Date | string;
    baby?: Prisma.XOR<Prisma.BabyScalarRelationFilter, Prisma.BabyWhereInput>;
}, "id">;
export type BabyStageHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    babyId?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BabyStageHistoryCountOrderByAggregateInput;
    _max?: Prisma.BabyStageHistoryMaxOrderByAggregateInput;
    _min?: Prisma.BabyStageHistoryMinOrderByAggregateInput;
};
export type BabyStageHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.BabyStageHistoryScalarWhereWithAggregatesInput | Prisma.BabyStageHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.BabyStageHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BabyStageHistoryScalarWhereWithAggregatesInput | Prisma.BabyStageHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BabyStageHistory"> | string;
    babyId?: Prisma.UuidWithAggregatesFilter<"BabyStageHistory"> | string;
    stageCode?: Prisma.StringWithAggregatesFilter<"BabyStageHistory"> | string;
    startedAt?: Prisma.DateTimeWithAggregatesFilter<"BabyStageHistory"> | Date | string;
    endedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BabyStageHistory"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BabyStageHistory"> | Date | string;
};
export type BabyStageHistoryCreateInput = {
    id?: string;
    stageCode: string;
    startedAt: Date | string;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
    baby: Prisma.BabyCreateNestedOneWithoutStageHistoryInput;
};
export type BabyStageHistoryUncheckedCreateInput = {
    id?: string;
    babyId: string;
    stageCode: string;
    startedAt: Date | string;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BabyStageHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    baby?: Prisma.BabyUpdateOneRequiredWithoutStageHistoryNestedInput;
};
export type BabyStageHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    babyId?: Prisma.StringFieldUpdateOperationsInput | string;
    stageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyStageHistoryCreateManyInput = {
    id?: string;
    babyId: string;
    stageCode: string;
    startedAt: Date | string;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BabyStageHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyStageHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    babyId?: Prisma.StringFieldUpdateOperationsInput | string;
    stageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyStageHistoryListRelationFilter = {
    every?: Prisma.BabyStageHistoryWhereInput;
    some?: Prisma.BabyStageHistoryWhereInput;
    none?: Prisma.BabyStageHistoryWhereInput;
};
export type BabyStageHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BabyStageHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    babyId?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BabyStageHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    babyId?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BabyStageHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    babyId?: Prisma.SortOrder;
    stageCode?: Prisma.SortOrder;
    startedAt?: Prisma.SortOrder;
    endedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BabyStageHistoryCreateNestedManyWithoutBabyInput = {
    create?: Prisma.XOR<Prisma.BabyStageHistoryCreateWithoutBabyInput, Prisma.BabyStageHistoryUncheckedCreateWithoutBabyInput> | Prisma.BabyStageHistoryCreateWithoutBabyInput[] | Prisma.BabyStageHistoryUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.BabyStageHistoryCreateOrConnectWithoutBabyInput | Prisma.BabyStageHistoryCreateOrConnectWithoutBabyInput[];
    createMany?: Prisma.BabyStageHistoryCreateManyBabyInputEnvelope;
    connect?: Prisma.BabyStageHistoryWhereUniqueInput | Prisma.BabyStageHistoryWhereUniqueInput[];
};
export type BabyStageHistoryUncheckedCreateNestedManyWithoutBabyInput = {
    create?: Prisma.XOR<Prisma.BabyStageHistoryCreateWithoutBabyInput, Prisma.BabyStageHistoryUncheckedCreateWithoutBabyInput> | Prisma.BabyStageHistoryCreateWithoutBabyInput[] | Prisma.BabyStageHistoryUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.BabyStageHistoryCreateOrConnectWithoutBabyInput | Prisma.BabyStageHistoryCreateOrConnectWithoutBabyInput[];
    createMany?: Prisma.BabyStageHistoryCreateManyBabyInputEnvelope;
    connect?: Prisma.BabyStageHistoryWhereUniqueInput | Prisma.BabyStageHistoryWhereUniqueInput[];
};
export type BabyStageHistoryUpdateManyWithoutBabyNestedInput = {
    create?: Prisma.XOR<Prisma.BabyStageHistoryCreateWithoutBabyInput, Prisma.BabyStageHistoryUncheckedCreateWithoutBabyInput> | Prisma.BabyStageHistoryCreateWithoutBabyInput[] | Prisma.BabyStageHistoryUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.BabyStageHistoryCreateOrConnectWithoutBabyInput | Prisma.BabyStageHistoryCreateOrConnectWithoutBabyInput[];
    upsert?: Prisma.BabyStageHistoryUpsertWithWhereUniqueWithoutBabyInput | Prisma.BabyStageHistoryUpsertWithWhereUniqueWithoutBabyInput[];
    createMany?: Prisma.BabyStageHistoryCreateManyBabyInputEnvelope;
    set?: Prisma.BabyStageHistoryWhereUniqueInput | Prisma.BabyStageHistoryWhereUniqueInput[];
    disconnect?: Prisma.BabyStageHistoryWhereUniqueInput | Prisma.BabyStageHistoryWhereUniqueInput[];
    delete?: Prisma.BabyStageHistoryWhereUniqueInput | Prisma.BabyStageHistoryWhereUniqueInput[];
    connect?: Prisma.BabyStageHistoryWhereUniqueInput | Prisma.BabyStageHistoryWhereUniqueInput[];
    update?: Prisma.BabyStageHistoryUpdateWithWhereUniqueWithoutBabyInput | Prisma.BabyStageHistoryUpdateWithWhereUniqueWithoutBabyInput[];
    updateMany?: Prisma.BabyStageHistoryUpdateManyWithWhereWithoutBabyInput | Prisma.BabyStageHistoryUpdateManyWithWhereWithoutBabyInput[];
    deleteMany?: Prisma.BabyStageHistoryScalarWhereInput | Prisma.BabyStageHistoryScalarWhereInput[];
};
export type BabyStageHistoryUncheckedUpdateManyWithoutBabyNestedInput = {
    create?: Prisma.XOR<Prisma.BabyStageHistoryCreateWithoutBabyInput, Prisma.BabyStageHistoryUncheckedCreateWithoutBabyInput> | Prisma.BabyStageHistoryCreateWithoutBabyInput[] | Prisma.BabyStageHistoryUncheckedCreateWithoutBabyInput[];
    connectOrCreate?: Prisma.BabyStageHistoryCreateOrConnectWithoutBabyInput | Prisma.BabyStageHistoryCreateOrConnectWithoutBabyInput[];
    upsert?: Prisma.BabyStageHistoryUpsertWithWhereUniqueWithoutBabyInput | Prisma.BabyStageHistoryUpsertWithWhereUniqueWithoutBabyInput[];
    createMany?: Prisma.BabyStageHistoryCreateManyBabyInputEnvelope;
    set?: Prisma.BabyStageHistoryWhereUniqueInput | Prisma.BabyStageHistoryWhereUniqueInput[];
    disconnect?: Prisma.BabyStageHistoryWhereUniqueInput | Prisma.BabyStageHistoryWhereUniqueInput[];
    delete?: Prisma.BabyStageHistoryWhereUniqueInput | Prisma.BabyStageHistoryWhereUniqueInput[];
    connect?: Prisma.BabyStageHistoryWhereUniqueInput | Prisma.BabyStageHistoryWhereUniqueInput[];
    update?: Prisma.BabyStageHistoryUpdateWithWhereUniqueWithoutBabyInput | Prisma.BabyStageHistoryUpdateWithWhereUniqueWithoutBabyInput[];
    updateMany?: Prisma.BabyStageHistoryUpdateManyWithWhereWithoutBabyInput | Prisma.BabyStageHistoryUpdateManyWithWhereWithoutBabyInput[];
    deleteMany?: Prisma.BabyStageHistoryScalarWhereInput | Prisma.BabyStageHistoryScalarWhereInput[];
};
export type BabyStageHistoryCreateWithoutBabyInput = {
    id?: string;
    stageCode: string;
    startedAt: Date | string;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BabyStageHistoryUncheckedCreateWithoutBabyInput = {
    id?: string;
    stageCode: string;
    startedAt: Date | string;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BabyStageHistoryCreateOrConnectWithoutBabyInput = {
    where: Prisma.BabyStageHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.BabyStageHistoryCreateWithoutBabyInput, Prisma.BabyStageHistoryUncheckedCreateWithoutBabyInput>;
};
export type BabyStageHistoryCreateManyBabyInputEnvelope = {
    data: Prisma.BabyStageHistoryCreateManyBabyInput | Prisma.BabyStageHistoryCreateManyBabyInput[];
    skipDuplicates?: boolean;
};
export type BabyStageHistoryUpsertWithWhereUniqueWithoutBabyInput = {
    where: Prisma.BabyStageHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.BabyStageHistoryUpdateWithoutBabyInput, Prisma.BabyStageHistoryUncheckedUpdateWithoutBabyInput>;
    create: Prisma.XOR<Prisma.BabyStageHistoryCreateWithoutBabyInput, Prisma.BabyStageHistoryUncheckedCreateWithoutBabyInput>;
};
export type BabyStageHistoryUpdateWithWhereUniqueWithoutBabyInput = {
    where: Prisma.BabyStageHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.BabyStageHistoryUpdateWithoutBabyInput, Prisma.BabyStageHistoryUncheckedUpdateWithoutBabyInput>;
};
export type BabyStageHistoryUpdateManyWithWhereWithoutBabyInput = {
    where: Prisma.BabyStageHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.BabyStageHistoryUpdateManyMutationInput, Prisma.BabyStageHistoryUncheckedUpdateManyWithoutBabyInput>;
};
export type BabyStageHistoryScalarWhereInput = {
    AND?: Prisma.BabyStageHistoryScalarWhereInput | Prisma.BabyStageHistoryScalarWhereInput[];
    OR?: Prisma.BabyStageHistoryScalarWhereInput[];
    NOT?: Prisma.BabyStageHistoryScalarWhereInput | Prisma.BabyStageHistoryScalarWhereInput[];
    id?: Prisma.UuidFilter<"BabyStageHistory"> | string;
    babyId?: Prisma.UuidFilter<"BabyStageHistory"> | string;
    stageCode?: Prisma.StringFilter<"BabyStageHistory"> | string;
    startedAt?: Prisma.DateTimeFilter<"BabyStageHistory"> | Date | string;
    endedAt?: Prisma.DateTimeNullableFilter<"BabyStageHistory"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BabyStageHistory"> | Date | string;
};
export type BabyStageHistoryCreateManyBabyInput = {
    id?: string;
    stageCode: string;
    startedAt: Date | string;
    endedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type BabyStageHistoryUpdateWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyStageHistoryUncheckedUpdateWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyStageHistoryUncheckedUpdateManyWithoutBabyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    startedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BabyStageHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    babyId?: boolean;
    stageCode?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    createdAt?: boolean;
    baby?: boolean | Prisma.BabyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["babyStageHistory"]>;
export type BabyStageHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    babyId?: boolean;
    stageCode?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    createdAt?: boolean;
    baby?: boolean | Prisma.BabyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["babyStageHistory"]>;
export type BabyStageHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    babyId?: boolean;
    stageCode?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    createdAt?: boolean;
    baby?: boolean | Prisma.BabyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["babyStageHistory"]>;
export type BabyStageHistorySelectScalar = {
    id?: boolean;
    babyId?: boolean;
    stageCode?: boolean;
    startedAt?: boolean;
    endedAt?: boolean;
    createdAt?: boolean;
};
export type BabyStageHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "babyId" | "stageCode" | "startedAt" | "endedAt" | "createdAt", ExtArgs["result"]["babyStageHistory"]>;
export type BabyStageHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.BabyDefaultArgs<ExtArgs>;
};
export type BabyStageHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.BabyDefaultArgs<ExtArgs>;
};
export type BabyStageHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baby?: boolean | Prisma.BabyDefaultArgs<ExtArgs>;
};
export type $BabyStageHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BabyStageHistory";
    objects: {
        baby: Prisma.$BabyPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        babyId: string;
        stageCode: string;
        startedAt: Date;
        endedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["babyStageHistory"]>;
    composites: {};
};
export type BabyStageHistoryGetPayload<S extends boolean | null | undefined | BabyStageHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BabyStageHistoryPayload, S>;
export type BabyStageHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BabyStageHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BabyStageHistoryCountAggregateInputType | true;
};
export interface BabyStageHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BabyStageHistory'];
        meta: {
            name: 'BabyStageHistory';
        };
    };
    findUnique<T extends BabyStageHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, BabyStageHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BabyStageHistoryClient<runtime.Types.Result.GetResult<Prisma.$BabyStageHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BabyStageHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BabyStageHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BabyStageHistoryClient<runtime.Types.Result.GetResult<Prisma.$BabyStageHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BabyStageHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, BabyStageHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__BabyStageHistoryClient<runtime.Types.Result.GetResult<Prisma.$BabyStageHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BabyStageHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BabyStageHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BabyStageHistoryClient<runtime.Types.Result.GetResult<Prisma.$BabyStageHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BabyStageHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, BabyStageHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BabyStageHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BabyStageHistoryCreateArgs>(args: Prisma.SelectSubset<T, BabyStageHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__BabyStageHistoryClient<runtime.Types.Result.GetResult<Prisma.$BabyStageHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BabyStageHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, BabyStageHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BabyStageHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BabyStageHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BabyStageHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BabyStageHistoryDeleteArgs>(args: Prisma.SelectSubset<T, BabyStageHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__BabyStageHistoryClient<runtime.Types.Result.GetResult<Prisma.$BabyStageHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BabyStageHistoryUpdateArgs>(args: Prisma.SelectSubset<T, BabyStageHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__BabyStageHistoryClient<runtime.Types.Result.GetResult<Prisma.$BabyStageHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BabyStageHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, BabyStageHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BabyStageHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, BabyStageHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BabyStageHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BabyStageHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BabyStageHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BabyStageHistoryUpsertArgs>(args: Prisma.SelectSubset<T, BabyStageHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__BabyStageHistoryClient<runtime.Types.Result.GetResult<Prisma.$BabyStageHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BabyStageHistoryCountArgs>(args?: Prisma.Subset<T, BabyStageHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BabyStageHistoryCountAggregateOutputType> : number>;
    aggregate<T extends BabyStageHistoryAggregateArgs>(args: Prisma.Subset<T, BabyStageHistoryAggregateArgs>): Prisma.PrismaPromise<GetBabyStageHistoryAggregateType<T>>;
    groupBy<T extends BabyStageHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BabyStageHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: BabyStageHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BabyStageHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBabyStageHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BabyStageHistoryFieldRefs;
}
export interface Prisma__BabyStageHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    baby<T extends Prisma.BabyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BabyDefaultArgs<ExtArgs>>): Prisma.Prisma__BabyClient<runtime.Types.Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BabyStageHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"BabyStageHistory", 'String'>;
    readonly babyId: Prisma.FieldRef<"BabyStageHistory", 'String'>;
    readonly stageCode: Prisma.FieldRef<"BabyStageHistory", 'String'>;
    readonly startedAt: Prisma.FieldRef<"BabyStageHistory", 'DateTime'>;
    readonly endedAt: Prisma.FieldRef<"BabyStageHistory", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"BabyStageHistory", 'DateTime'>;
}
export type BabyStageHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyStageHistorySelect<ExtArgs> | null;
    omit?: Prisma.BabyStageHistoryOmit<ExtArgs> | null;
    include?: Prisma.BabyStageHistoryInclude<ExtArgs> | null;
    where: Prisma.BabyStageHistoryWhereUniqueInput;
};
export type BabyStageHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyStageHistorySelect<ExtArgs> | null;
    omit?: Prisma.BabyStageHistoryOmit<ExtArgs> | null;
    include?: Prisma.BabyStageHistoryInclude<ExtArgs> | null;
    where: Prisma.BabyStageHistoryWhereUniqueInput;
};
export type BabyStageHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyStageHistorySelect<ExtArgs> | null;
    omit?: Prisma.BabyStageHistoryOmit<ExtArgs> | null;
    include?: Prisma.BabyStageHistoryInclude<ExtArgs> | null;
    where?: Prisma.BabyStageHistoryWhereInput;
    orderBy?: Prisma.BabyStageHistoryOrderByWithRelationInput | Prisma.BabyStageHistoryOrderByWithRelationInput[];
    cursor?: Prisma.BabyStageHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BabyStageHistoryScalarFieldEnum | Prisma.BabyStageHistoryScalarFieldEnum[];
};
export type BabyStageHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyStageHistorySelect<ExtArgs> | null;
    omit?: Prisma.BabyStageHistoryOmit<ExtArgs> | null;
    include?: Prisma.BabyStageHistoryInclude<ExtArgs> | null;
    where?: Prisma.BabyStageHistoryWhereInput;
    orderBy?: Prisma.BabyStageHistoryOrderByWithRelationInput | Prisma.BabyStageHistoryOrderByWithRelationInput[];
    cursor?: Prisma.BabyStageHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BabyStageHistoryScalarFieldEnum | Prisma.BabyStageHistoryScalarFieldEnum[];
};
export type BabyStageHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyStageHistorySelect<ExtArgs> | null;
    omit?: Prisma.BabyStageHistoryOmit<ExtArgs> | null;
    include?: Prisma.BabyStageHistoryInclude<ExtArgs> | null;
    where?: Prisma.BabyStageHistoryWhereInput;
    orderBy?: Prisma.BabyStageHistoryOrderByWithRelationInput | Prisma.BabyStageHistoryOrderByWithRelationInput[];
    cursor?: Prisma.BabyStageHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BabyStageHistoryScalarFieldEnum | Prisma.BabyStageHistoryScalarFieldEnum[];
};
export type BabyStageHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyStageHistorySelect<ExtArgs> | null;
    omit?: Prisma.BabyStageHistoryOmit<ExtArgs> | null;
    include?: Prisma.BabyStageHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BabyStageHistoryCreateInput, Prisma.BabyStageHistoryUncheckedCreateInput>;
};
export type BabyStageHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BabyStageHistoryCreateManyInput | Prisma.BabyStageHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BabyStageHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyStageHistorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BabyStageHistoryOmit<ExtArgs> | null;
    data: Prisma.BabyStageHistoryCreateManyInput | Prisma.BabyStageHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BabyStageHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BabyStageHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyStageHistorySelect<ExtArgs> | null;
    omit?: Prisma.BabyStageHistoryOmit<ExtArgs> | null;
    include?: Prisma.BabyStageHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BabyStageHistoryUpdateInput, Prisma.BabyStageHistoryUncheckedUpdateInput>;
    where: Prisma.BabyStageHistoryWhereUniqueInput;
};
export type BabyStageHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BabyStageHistoryUpdateManyMutationInput, Prisma.BabyStageHistoryUncheckedUpdateManyInput>;
    where?: Prisma.BabyStageHistoryWhereInput;
    limit?: number;
};
export type BabyStageHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyStageHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BabyStageHistoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BabyStageHistoryUpdateManyMutationInput, Prisma.BabyStageHistoryUncheckedUpdateManyInput>;
    where?: Prisma.BabyStageHistoryWhereInput;
    limit?: number;
    include?: Prisma.BabyStageHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BabyStageHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyStageHistorySelect<ExtArgs> | null;
    omit?: Prisma.BabyStageHistoryOmit<ExtArgs> | null;
    include?: Prisma.BabyStageHistoryInclude<ExtArgs> | null;
    where: Prisma.BabyStageHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.BabyStageHistoryCreateInput, Prisma.BabyStageHistoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BabyStageHistoryUpdateInput, Prisma.BabyStageHistoryUncheckedUpdateInput>;
};
export type BabyStageHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyStageHistorySelect<ExtArgs> | null;
    omit?: Prisma.BabyStageHistoryOmit<ExtArgs> | null;
    include?: Prisma.BabyStageHistoryInclude<ExtArgs> | null;
    where: Prisma.BabyStageHistoryWhereUniqueInput;
};
export type BabyStageHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BabyStageHistoryWhereInput;
    limit?: number;
};
export type BabyStageHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BabyStageHistorySelect<ExtArgs> | null;
    omit?: Prisma.BabyStageHistoryOmit<ExtArgs> | null;
    include?: Prisma.BabyStageHistoryInclude<ExtArgs> | null;
};
