import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type frequency_counterModel = runtime.Types.Result.DefaultSelection<Prisma.$frequency_counterPayload>;
export type AggregateFrequency_counter = {
    _count: Frequency_counterCountAggregateOutputType | null;
    _avg: Frequency_counterAvgAggregateOutputType | null;
    _sum: Frequency_counterSumAggregateOutputType | null;
    _min: Frequency_counterMinAggregateOutputType | null;
    _max: Frequency_counterMaxAggregateOutputType | null;
};
export type Frequency_counterAvgAggregateOutputType = {
    count: number | null;
};
export type Frequency_counterSumAggregateOutputType = {
    count: number | null;
};
export type Frequency_counterMinAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    channel: string | null;
    window_start: Date | null;
    window_end: Date | null;
    count: number | null;
};
export type Frequency_counterMaxAggregateOutputType = {
    id: string | null;
    customer_id: string | null;
    channel: string | null;
    window_start: Date | null;
    window_end: Date | null;
    count: number | null;
};
export type Frequency_counterCountAggregateOutputType = {
    id: number;
    customer_id: number;
    channel: number;
    window_start: number;
    window_end: number;
    count: number;
    _all: number;
};
export type Frequency_counterAvgAggregateInputType = {
    count?: true;
};
export type Frequency_counterSumAggregateInputType = {
    count?: true;
};
export type Frequency_counterMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    channel?: true;
    window_start?: true;
    window_end?: true;
    count?: true;
};
export type Frequency_counterMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    channel?: true;
    window_start?: true;
    window_end?: true;
    count?: true;
};
export type Frequency_counterCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    channel?: true;
    window_start?: true;
    window_end?: true;
    count?: true;
    _all?: true;
};
export type Frequency_counterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.frequency_counterWhereInput;
    orderBy?: Prisma.frequency_counterOrderByWithRelationInput | Prisma.frequency_counterOrderByWithRelationInput[];
    cursor?: Prisma.frequency_counterWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Frequency_counterCountAggregateInputType;
    _avg?: Frequency_counterAvgAggregateInputType;
    _sum?: Frequency_counterSumAggregateInputType;
    _min?: Frequency_counterMinAggregateInputType;
    _max?: Frequency_counterMaxAggregateInputType;
};
export type GetFrequency_counterAggregateType<T extends Frequency_counterAggregateArgs> = {
    [P in keyof T & keyof AggregateFrequency_counter]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFrequency_counter[P]> : Prisma.GetScalarType<T[P], AggregateFrequency_counter[P]>;
};
export type frequency_counterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.frequency_counterWhereInput;
    orderBy?: Prisma.frequency_counterOrderByWithAggregationInput | Prisma.frequency_counterOrderByWithAggregationInput[];
    by: Prisma.Frequency_counterScalarFieldEnum[] | Prisma.Frequency_counterScalarFieldEnum;
    having?: Prisma.frequency_counterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Frequency_counterCountAggregateInputType | true;
    _avg?: Frequency_counterAvgAggregateInputType;
    _sum?: Frequency_counterSumAggregateInputType;
    _min?: Frequency_counterMinAggregateInputType;
    _max?: Frequency_counterMaxAggregateInputType;
};
export type Frequency_counterGroupByOutputType = {
    id: string;
    customer_id: string;
    channel: string;
    window_start: Date;
    window_end: Date;
    count: number;
    _count: Frequency_counterCountAggregateOutputType | null;
    _avg: Frequency_counterAvgAggregateOutputType | null;
    _sum: Frequency_counterSumAggregateOutputType | null;
    _min: Frequency_counterMinAggregateOutputType | null;
    _max: Frequency_counterMaxAggregateOutputType | null;
};
export type GetFrequency_counterGroupByPayload<T extends frequency_counterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Frequency_counterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Frequency_counterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Frequency_counterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Frequency_counterGroupByOutputType[P]>;
}>>;
export type frequency_counterWhereInput = {
    AND?: Prisma.frequency_counterWhereInput | Prisma.frequency_counterWhereInput[];
    OR?: Prisma.frequency_counterWhereInput[];
    NOT?: Prisma.frequency_counterWhereInput | Prisma.frequency_counterWhereInput[];
    id?: Prisma.UuidFilter<"frequency_counter"> | string;
    customer_id?: Prisma.UuidFilter<"frequency_counter"> | string;
    channel?: Prisma.StringFilter<"frequency_counter"> | string;
    window_start?: Prisma.DateTimeFilter<"frequency_counter"> | Date | string;
    window_end?: Prisma.DateTimeFilter<"frequency_counter"> | Date | string;
    count?: Prisma.IntFilter<"frequency_counter"> | number;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
};
export type frequency_counterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    window_start?: Prisma.SortOrder;
    window_end?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type frequency_counterWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    customer_id_channel_window_start?: Prisma.frequency_counterCustomer_idChannelWindow_startCompoundUniqueInput;
    AND?: Prisma.frequency_counterWhereInput | Prisma.frequency_counterWhereInput[];
    OR?: Prisma.frequency_counterWhereInput[];
    NOT?: Prisma.frequency_counterWhereInput | Prisma.frequency_counterWhereInput[];
    customer_id?: Prisma.UuidFilter<"frequency_counter"> | string;
    channel?: Prisma.StringFilter<"frequency_counter"> | string;
    window_start?: Prisma.DateTimeFilter<"frequency_counter"> | Date | string;
    window_end?: Prisma.DateTimeFilter<"frequency_counter"> | Date | string;
    count?: Prisma.IntFilter<"frequency_counter"> | number;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
}, "id" | "customer_id_channel_window_start">;
export type frequency_counterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    window_start?: Prisma.SortOrder;
    window_end?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
    _count?: Prisma.frequency_counterCountOrderByAggregateInput;
    _avg?: Prisma.frequency_counterAvgOrderByAggregateInput;
    _max?: Prisma.frequency_counterMaxOrderByAggregateInput;
    _min?: Prisma.frequency_counterMinOrderByAggregateInput;
    _sum?: Prisma.frequency_counterSumOrderByAggregateInput;
};
export type frequency_counterScalarWhereWithAggregatesInput = {
    AND?: Prisma.frequency_counterScalarWhereWithAggregatesInput | Prisma.frequency_counterScalarWhereWithAggregatesInput[];
    OR?: Prisma.frequency_counterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.frequency_counterScalarWhereWithAggregatesInput | Prisma.frequency_counterScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"frequency_counter"> | string;
    customer_id?: Prisma.UuidWithAggregatesFilter<"frequency_counter"> | string;
    channel?: Prisma.StringWithAggregatesFilter<"frequency_counter"> | string;
    window_start?: Prisma.DateTimeWithAggregatesFilter<"frequency_counter"> | Date | string;
    window_end?: Prisma.DateTimeWithAggregatesFilter<"frequency_counter"> | Date | string;
    count?: Prisma.IntWithAggregatesFilter<"frequency_counter"> | number;
};
export type frequency_counterCreateInput = {
    id?: string;
    channel: string;
    window_start: Date | string;
    window_end: Date | string;
    count?: number;
    customer: Prisma.CustomerCreateNestedOneWithoutFrequency_counterInput;
};
export type frequency_counterUncheckedCreateInput = {
    id?: string;
    customer_id: string;
    channel: string;
    window_start: Date | string;
    window_end: Date | string;
    count?: number;
};
export type frequency_counterUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    window_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    window_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutFrequency_counterNestedInput;
};
export type frequency_counterUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    window_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    window_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type frequency_counterCreateManyInput = {
    id?: string;
    customer_id: string;
    channel: string;
    window_start: Date | string;
    window_end: Date | string;
    count?: number;
};
export type frequency_counterUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    window_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    window_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type frequency_counterUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    window_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    window_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Frequency_counterListRelationFilter = {
    every?: Prisma.frequency_counterWhereInput;
    some?: Prisma.frequency_counterWhereInput;
    none?: Prisma.frequency_counterWhereInput;
};
export type frequency_counterOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type frequency_counterCustomer_idChannelWindow_startCompoundUniqueInput = {
    customer_id: string;
    channel: string;
    window_start: Date | string;
};
export type frequency_counterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    window_start?: Prisma.SortOrder;
    window_end?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
};
export type frequency_counterAvgOrderByAggregateInput = {
    count?: Prisma.SortOrder;
};
export type frequency_counterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    window_start?: Prisma.SortOrder;
    window_end?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
};
export type frequency_counterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    channel?: Prisma.SortOrder;
    window_start?: Prisma.SortOrder;
    window_end?: Prisma.SortOrder;
    count?: Prisma.SortOrder;
};
export type frequency_counterSumOrderByAggregateInput = {
    count?: Prisma.SortOrder;
};
export type frequency_counterCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.frequency_counterCreateWithoutCustomerInput, Prisma.frequency_counterUncheckedCreateWithoutCustomerInput> | Prisma.frequency_counterCreateWithoutCustomerInput[] | Prisma.frequency_counterUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.frequency_counterCreateOrConnectWithoutCustomerInput | Prisma.frequency_counterCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.frequency_counterCreateManyCustomerInputEnvelope;
    connect?: Prisma.frequency_counterWhereUniqueInput | Prisma.frequency_counterWhereUniqueInput[];
};
export type frequency_counterUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.frequency_counterCreateWithoutCustomerInput, Prisma.frequency_counterUncheckedCreateWithoutCustomerInput> | Prisma.frequency_counterCreateWithoutCustomerInput[] | Prisma.frequency_counterUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.frequency_counterCreateOrConnectWithoutCustomerInput | Prisma.frequency_counterCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.frequency_counterCreateManyCustomerInputEnvelope;
    connect?: Prisma.frequency_counterWhereUniqueInput | Prisma.frequency_counterWhereUniqueInput[];
};
export type frequency_counterUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.frequency_counterCreateWithoutCustomerInput, Prisma.frequency_counterUncheckedCreateWithoutCustomerInput> | Prisma.frequency_counterCreateWithoutCustomerInput[] | Prisma.frequency_counterUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.frequency_counterCreateOrConnectWithoutCustomerInput | Prisma.frequency_counterCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.frequency_counterUpsertWithWhereUniqueWithoutCustomerInput | Prisma.frequency_counterUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.frequency_counterCreateManyCustomerInputEnvelope;
    set?: Prisma.frequency_counterWhereUniqueInput | Prisma.frequency_counterWhereUniqueInput[];
    disconnect?: Prisma.frequency_counterWhereUniqueInput | Prisma.frequency_counterWhereUniqueInput[];
    delete?: Prisma.frequency_counterWhereUniqueInput | Prisma.frequency_counterWhereUniqueInput[];
    connect?: Prisma.frequency_counterWhereUniqueInput | Prisma.frequency_counterWhereUniqueInput[];
    update?: Prisma.frequency_counterUpdateWithWhereUniqueWithoutCustomerInput | Prisma.frequency_counterUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.frequency_counterUpdateManyWithWhereWithoutCustomerInput | Prisma.frequency_counterUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.frequency_counterScalarWhereInput | Prisma.frequency_counterScalarWhereInput[];
};
export type frequency_counterUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.frequency_counterCreateWithoutCustomerInput, Prisma.frequency_counterUncheckedCreateWithoutCustomerInput> | Prisma.frequency_counterCreateWithoutCustomerInput[] | Prisma.frequency_counterUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.frequency_counterCreateOrConnectWithoutCustomerInput | Prisma.frequency_counterCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.frequency_counterUpsertWithWhereUniqueWithoutCustomerInput | Prisma.frequency_counterUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.frequency_counterCreateManyCustomerInputEnvelope;
    set?: Prisma.frequency_counterWhereUniqueInput | Prisma.frequency_counterWhereUniqueInput[];
    disconnect?: Prisma.frequency_counterWhereUniqueInput | Prisma.frequency_counterWhereUniqueInput[];
    delete?: Prisma.frequency_counterWhereUniqueInput | Prisma.frequency_counterWhereUniqueInput[];
    connect?: Prisma.frequency_counterWhereUniqueInput | Prisma.frequency_counterWhereUniqueInput[];
    update?: Prisma.frequency_counterUpdateWithWhereUniqueWithoutCustomerInput | Prisma.frequency_counterUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.frequency_counterUpdateManyWithWhereWithoutCustomerInput | Prisma.frequency_counterUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.frequency_counterScalarWhereInput | Prisma.frequency_counterScalarWhereInput[];
};
export type frequency_counterCreateWithoutCustomerInput = {
    id?: string;
    channel: string;
    window_start: Date | string;
    window_end: Date | string;
    count?: number;
};
export type frequency_counterUncheckedCreateWithoutCustomerInput = {
    id?: string;
    channel: string;
    window_start: Date | string;
    window_end: Date | string;
    count?: number;
};
export type frequency_counterCreateOrConnectWithoutCustomerInput = {
    where: Prisma.frequency_counterWhereUniqueInput;
    create: Prisma.XOR<Prisma.frequency_counterCreateWithoutCustomerInput, Prisma.frequency_counterUncheckedCreateWithoutCustomerInput>;
};
export type frequency_counterCreateManyCustomerInputEnvelope = {
    data: Prisma.frequency_counterCreateManyCustomerInput | Prisma.frequency_counterCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type frequency_counterUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.frequency_counterWhereUniqueInput;
    update: Prisma.XOR<Prisma.frequency_counterUpdateWithoutCustomerInput, Prisma.frequency_counterUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.frequency_counterCreateWithoutCustomerInput, Prisma.frequency_counterUncheckedCreateWithoutCustomerInput>;
};
export type frequency_counterUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.frequency_counterWhereUniqueInput;
    data: Prisma.XOR<Prisma.frequency_counterUpdateWithoutCustomerInput, Prisma.frequency_counterUncheckedUpdateWithoutCustomerInput>;
};
export type frequency_counterUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.frequency_counterScalarWhereInput;
    data: Prisma.XOR<Prisma.frequency_counterUpdateManyMutationInput, Prisma.frequency_counterUncheckedUpdateManyWithoutCustomerInput>;
};
export type frequency_counterScalarWhereInput = {
    AND?: Prisma.frequency_counterScalarWhereInput | Prisma.frequency_counterScalarWhereInput[];
    OR?: Prisma.frequency_counterScalarWhereInput[];
    NOT?: Prisma.frequency_counterScalarWhereInput | Prisma.frequency_counterScalarWhereInput[];
    id?: Prisma.UuidFilter<"frequency_counter"> | string;
    customer_id?: Prisma.UuidFilter<"frequency_counter"> | string;
    channel?: Prisma.StringFilter<"frequency_counter"> | string;
    window_start?: Prisma.DateTimeFilter<"frequency_counter"> | Date | string;
    window_end?: Prisma.DateTimeFilter<"frequency_counter"> | Date | string;
    count?: Prisma.IntFilter<"frequency_counter"> | number;
};
export type frequency_counterCreateManyCustomerInput = {
    id?: string;
    channel: string;
    window_start: Date | string;
    window_end: Date | string;
    count?: number;
};
export type frequency_counterUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    window_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    window_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type frequency_counterUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    window_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    window_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type frequency_counterUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    channel?: Prisma.StringFieldUpdateOperationsInput | string;
    window_start?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    window_end?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    count?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type frequency_counterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    channel?: boolean;
    window_start?: boolean;
    window_end?: boolean;
    count?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["frequency_counter"]>;
export type frequency_counterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    channel?: boolean;
    window_start?: boolean;
    window_end?: boolean;
    count?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["frequency_counter"]>;
export type frequency_counterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    channel?: boolean;
    window_start?: boolean;
    window_end?: boolean;
    count?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["frequency_counter"]>;
export type frequency_counterSelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    channel?: boolean;
    window_start?: boolean;
    window_end?: boolean;
    count?: boolean;
};
export type frequency_counterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "channel" | "window_start" | "window_end" | "count", ExtArgs["result"]["frequency_counter"]>;
export type frequency_counterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type frequency_counterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type frequency_counterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $frequency_counterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "frequency_counter";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customer_id: string;
        channel: string;
        window_start: Date;
        window_end: Date;
        count: number;
    }, ExtArgs["result"]["frequency_counter"]>;
    composites: {};
};
export type frequency_counterGetPayload<S extends boolean | null | undefined | frequency_counterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$frequency_counterPayload, S>;
export type frequency_counterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<frequency_counterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Frequency_counterCountAggregateInputType | true;
};
export interface frequency_counterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['frequency_counter'];
        meta: {
            name: 'frequency_counter';
        };
    };
    findUnique<T extends frequency_counterFindUniqueArgs>(args: Prisma.SelectSubset<T, frequency_counterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__frequency_counterClient<runtime.Types.Result.GetResult<Prisma.$frequency_counterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends frequency_counterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, frequency_counterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__frequency_counterClient<runtime.Types.Result.GetResult<Prisma.$frequency_counterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends frequency_counterFindFirstArgs>(args?: Prisma.SelectSubset<T, frequency_counterFindFirstArgs<ExtArgs>>): Prisma.Prisma__frequency_counterClient<runtime.Types.Result.GetResult<Prisma.$frequency_counterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends frequency_counterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, frequency_counterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__frequency_counterClient<runtime.Types.Result.GetResult<Prisma.$frequency_counterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends frequency_counterFindManyArgs>(args?: Prisma.SelectSubset<T, frequency_counterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$frequency_counterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends frequency_counterCreateArgs>(args: Prisma.SelectSubset<T, frequency_counterCreateArgs<ExtArgs>>): Prisma.Prisma__frequency_counterClient<runtime.Types.Result.GetResult<Prisma.$frequency_counterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends frequency_counterCreateManyArgs>(args?: Prisma.SelectSubset<T, frequency_counterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends frequency_counterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, frequency_counterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$frequency_counterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends frequency_counterDeleteArgs>(args: Prisma.SelectSubset<T, frequency_counterDeleteArgs<ExtArgs>>): Prisma.Prisma__frequency_counterClient<runtime.Types.Result.GetResult<Prisma.$frequency_counterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends frequency_counterUpdateArgs>(args: Prisma.SelectSubset<T, frequency_counterUpdateArgs<ExtArgs>>): Prisma.Prisma__frequency_counterClient<runtime.Types.Result.GetResult<Prisma.$frequency_counterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends frequency_counterDeleteManyArgs>(args?: Prisma.SelectSubset<T, frequency_counterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends frequency_counterUpdateManyArgs>(args: Prisma.SelectSubset<T, frequency_counterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends frequency_counterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, frequency_counterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$frequency_counterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends frequency_counterUpsertArgs>(args: Prisma.SelectSubset<T, frequency_counterUpsertArgs<ExtArgs>>): Prisma.Prisma__frequency_counterClient<runtime.Types.Result.GetResult<Prisma.$frequency_counterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends frequency_counterCountArgs>(args?: Prisma.Subset<T, frequency_counterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Frequency_counterCountAggregateOutputType> : number>;
    aggregate<T extends Frequency_counterAggregateArgs>(args: Prisma.Subset<T, Frequency_counterAggregateArgs>): Prisma.PrismaPromise<GetFrequency_counterAggregateType<T>>;
    groupBy<T extends frequency_counterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: frequency_counterGroupByArgs['orderBy'];
    } : {
        orderBy?: frequency_counterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, frequency_counterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrequency_counterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: frequency_counterFieldRefs;
}
export interface Prisma__frequency_counterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface frequency_counterFieldRefs {
    readonly id: Prisma.FieldRef<"frequency_counter", 'String'>;
    readonly customer_id: Prisma.FieldRef<"frequency_counter", 'String'>;
    readonly channel: Prisma.FieldRef<"frequency_counter", 'String'>;
    readonly window_start: Prisma.FieldRef<"frequency_counter", 'DateTime'>;
    readonly window_end: Prisma.FieldRef<"frequency_counter", 'DateTime'>;
    readonly count: Prisma.FieldRef<"frequency_counter", 'Int'>;
}
export type frequency_counterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.frequency_counterSelect<ExtArgs> | null;
    omit?: Prisma.frequency_counterOmit<ExtArgs> | null;
    include?: Prisma.frequency_counterInclude<ExtArgs> | null;
    where: Prisma.frequency_counterWhereUniqueInput;
};
export type frequency_counterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.frequency_counterSelect<ExtArgs> | null;
    omit?: Prisma.frequency_counterOmit<ExtArgs> | null;
    include?: Prisma.frequency_counterInclude<ExtArgs> | null;
    where: Prisma.frequency_counterWhereUniqueInput;
};
export type frequency_counterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.frequency_counterSelect<ExtArgs> | null;
    omit?: Prisma.frequency_counterOmit<ExtArgs> | null;
    include?: Prisma.frequency_counterInclude<ExtArgs> | null;
    where?: Prisma.frequency_counterWhereInput;
    orderBy?: Prisma.frequency_counterOrderByWithRelationInput | Prisma.frequency_counterOrderByWithRelationInput[];
    cursor?: Prisma.frequency_counterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Frequency_counterScalarFieldEnum | Prisma.Frequency_counterScalarFieldEnum[];
};
export type frequency_counterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.frequency_counterSelect<ExtArgs> | null;
    omit?: Prisma.frequency_counterOmit<ExtArgs> | null;
    include?: Prisma.frequency_counterInclude<ExtArgs> | null;
    where?: Prisma.frequency_counterWhereInput;
    orderBy?: Prisma.frequency_counterOrderByWithRelationInput | Prisma.frequency_counterOrderByWithRelationInput[];
    cursor?: Prisma.frequency_counterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Frequency_counterScalarFieldEnum | Prisma.Frequency_counterScalarFieldEnum[];
};
export type frequency_counterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.frequency_counterSelect<ExtArgs> | null;
    omit?: Prisma.frequency_counterOmit<ExtArgs> | null;
    include?: Prisma.frequency_counterInclude<ExtArgs> | null;
    where?: Prisma.frequency_counterWhereInput;
    orderBy?: Prisma.frequency_counterOrderByWithRelationInput | Prisma.frequency_counterOrderByWithRelationInput[];
    cursor?: Prisma.frequency_counterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Frequency_counterScalarFieldEnum | Prisma.Frequency_counterScalarFieldEnum[];
};
export type frequency_counterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.frequency_counterSelect<ExtArgs> | null;
    omit?: Prisma.frequency_counterOmit<ExtArgs> | null;
    include?: Prisma.frequency_counterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.frequency_counterCreateInput, Prisma.frequency_counterUncheckedCreateInput>;
};
export type frequency_counterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.frequency_counterCreateManyInput | Prisma.frequency_counterCreateManyInput[];
    skipDuplicates?: boolean;
};
export type frequency_counterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.frequency_counterSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.frequency_counterOmit<ExtArgs> | null;
    data: Prisma.frequency_counterCreateManyInput | Prisma.frequency_counterCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.frequency_counterIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type frequency_counterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.frequency_counterSelect<ExtArgs> | null;
    omit?: Prisma.frequency_counterOmit<ExtArgs> | null;
    include?: Prisma.frequency_counterInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.frequency_counterUpdateInput, Prisma.frequency_counterUncheckedUpdateInput>;
    where: Prisma.frequency_counterWhereUniqueInput;
};
export type frequency_counterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.frequency_counterUpdateManyMutationInput, Prisma.frequency_counterUncheckedUpdateManyInput>;
    where?: Prisma.frequency_counterWhereInput;
    limit?: number;
};
export type frequency_counterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.frequency_counterSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.frequency_counterOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.frequency_counterUpdateManyMutationInput, Prisma.frequency_counterUncheckedUpdateManyInput>;
    where?: Prisma.frequency_counterWhereInput;
    limit?: number;
    include?: Prisma.frequency_counterIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type frequency_counterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.frequency_counterSelect<ExtArgs> | null;
    omit?: Prisma.frequency_counterOmit<ExtArgs> | null;
    include?: Prisma.frequency_counterInclude<ExtArgs> | null;
    where: Prisma.frequency_counterWhereUniqueInput;
    create: Prisma.XOR<Prisma.frequency_counterCreateInput, Prisma.frequency_counterUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.frequency_counterUpdateInput, Prisma.frequency_counterUncheckedUpdateInput>;
};
export type frequency_counterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.frequency_counterSelect<ExtArgs> | null;
    omit?: Prisma.frequency_counterOmit<ExtArgs> | null;
    include?: Prisma.frequency_counterInclude<ExtArgs> | null;
    where: Prisma.frequency_counterWhereUniqueInput;
};
export type frequency_counterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.frequency_counterWhereInput;
    limit?: number;
};
export type frequency_counterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.frequency_counterSelect<ExtArgs> | null;
    omit?: Prisma.frequency_counterOmit<ExtArgs> | null;
    include?: Prisma.frequency_counterInclude<ExtArgs> | null;
};
