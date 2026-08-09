import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type product_purchase_cycleModel = runtime.Types.Result.DefaultSelection<Prisma.$product_purchase_cyclePayload>;
export type AggregateProduct_purchase_cycle = {
    _count: Product_purchase_cycleCountAggregateOutputType | null;
    _avg: Product_purchase_cycleAvgAggregateOutputType | null;
    _sum: Product_purchase_cycleSumAggregateOutputType | null;
    _min: Product_purchase_cycleMinAggregateOutputType | null;
    _max: Product_purchase_cycleMaxAggregateOutputType | null;
};
export type Product_purchase_cycleAvgAggregateOutputType = {
    median_days: number | null;
    sample_count: number | null;
};
export type Product_purchase_cycleSumAggregateOutputType = {
    median_days: number | null;
    sample_count: number | null;
};
export type Product_purchase_cycleMinAggregateOutputType = {
    id: string | null;
    product_id: string | null;
    stage_code: string | null;
    median_days: number | null;
    sample_count: number | null;
    calculated_at: Date | null;
};
export type Product_purchase_cycleMaxAggregateOutputType = {
    id: string | null;
    product_id: string | null;
    stage_code: string | null;
    median_days: number | null;
    sample_count: number | null;
    calculated_at: Date | null;
};
export type Product_purchase_cycleCountAggregateOutputType = {
    id: number;
    product_id: number;
    stage_code: number;
    median_days: number;
    sample_count: number;
    calculated_at: number;
    _all: number;
};
export type Product_purchase_cycleAvgAggregateInputType = {
    median_days?: true;
    sample_count?: true;
};
export type Product_purchase_cycleSumAggregateInputType = {
    median_days?: true;
    sample_count?: true;
};
export type Product_purchase_cycleMinAggregateInputType = {
    id?: true;
    product_id?: true;
    stage_code?: true;
    median_days?: true;
    sample_count?: true;
    calculated_at?: true;
};
export type Product_purchase_cycleMaxAggregateInputType = {
    id?: true;
    product_id?: true;
    stage_code?: true;
    median_days?: true;
    sample_count?: true;
    calculated_at?: true;
};
export type Product_purchase_cycleCountAggregateInputType = {
    id?: true;
    product_id?: true;
    stage_code?: true;
    median_days?: true;
    sample_count?: true;
    calculated_at?: true;
    _all?: true;
};
export type Product_purchase_cycleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_purchase_cycleWhereInput;
    orderBy?: Prisma.product_purchase_cycleOrderByWithRelationInput | Prisma.product_purchase_cycleOrderByWithRelationInput[];
    cursor?: Prisma.product_purchase_cycleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Product_purchase_cycleCountAggregateInputType;
    _avg?: Product_purchase_cycleAvgAggregateInputType;
    _sum?: Product_purchase_cycleSumAggregateInputType;
    _min?: Product_purchase_cycleMinAggregateInputType;
    _max?: Product_purchase_cycleMaxAggregateInputType;
};
export type GetProduct_purchase_cycleAggregateType<T extends Product_purchase_cycleAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct_purchase_cycle]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct_purchase_cycle[P]> : Prisma.GetScalarType<T[P], AggregateProduct_purchase_cycle[P]>;
};
export type product_purchase_cycleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_purchase_cycleWhereInput;
    orderBy?: Prisma.product_purchase_cycleOrderByWithAggregationInput | Prisma.product_purchase_cycleOrderByWithAggregationInput[];
    by: Prisma.Product_purchase_cycleScalarFieldEnum[] | Prisma.Product_purchase_cycleScalarFieldEnum;
    having?: Prisma.product_purchase_cycleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Product_purchase_cycleCountAggregateInputType | true;
    _avg?: Product_purchase_cycleAvgAggregateInputType;
    _sum?: Product_purchase_cycleSumAggregateInputType;
    _min?: Product_purchase_cycleMinAggregateInputType;
    _max?: Product_purchase_cycleMaxAggregateInputType;
};
export type Product_purchase_cycleGroupByOutputType = {
    id: string;
    product_id: string;
    stage_code: string | null;
    median_days: number | null;
    sample_count: number;
    calculated_at: Date;
    _count: Product_purchase_cycleCountAggregateOutputType | null;
    _avg: Product_purchase_cycleAvgAggregateOutputType | null;
    _sum: Product_purchase_cycleSumAggregateOutputType | null;
    _min: Product_purchase_cycleMinAggregateOutputType | null;
    _max: Product_purchase_cycleMaxAggregateOutputType | null;
};
export type GetProduct_purchase_cycleGroupByPayload<T extends product_purchase_cycleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Product_purchase_cycleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Product_purchase_cycleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Product_purchase_cycleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Product_purchase_cycleGroupByOutputType[P]>;
}>>;
export type product_purchase_cycleWhereInput = {
    AND?: Prisma.product_purchase_cycleWhereInput | Prisma.product_purchase_cycleWhereInput[];
    OR?: Prisma.product_purchase_cycleWhereInput[];
    NOT?: Prisma.product_purchase_cycleWhereInput | Prisma.product_purchase_cycleWhereInput[];
    id?: Prisma.UuidFilter<"product_purchase_cycle"> | string;
    product_id?: Prisma.UuidFilter<"product_purchase_cycle"> | string;
    stage_code?: Prisma.StringNullableFilter<"product_purchase_cycle"> | string | null;
    median_days?: Prisma.IntNullableFilter<"product_purchase_cycle"> | number | null;
    sample_count?: Prisma.IntFilter<"product_purchase_cycle"> | number;
    calculated_at?: Prisma.DateTimeFilter<"product_purchase_cycle"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type product_purchase_cycleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    stage_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    median_days?: Prisma.SortOrderInput | Prisma.SortOrder;
    sample_count?: Prisma.SortOrder;
    calculated_at?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type product_purchase_cycleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    product_id_stage_code?: Prisma.product_purchase_cycleProduct_idStage_codeCompoundUniqueInput;
    AND?: Prisma.product_purchase_cycleWhereInput | Prisma.product_purchase_cycleWhereInput[];
    OR?: Prisma.product_purchase_cycleWhereInput[];
    NOT?: Prisma.product_purchase_cycleWhereInput | Prisma.product_purchase_cycleWhereInput[];
    product_id?: Prisma.UuidFilter<"product_purchase_cycle"> | string;
    stage_code?: Prisma.StringNullableFilter<"product_purchase_cycle"> | string | null;
    median_days?: Prisma.IntNullableFilter<"product_purchase_cycle"> | number | null;
    sample_count?: Prisma.IntFilter<"product_purchase_cycle"> | number;
    calculated_at?: Prisma.DateTimeFilter<"product_purchase_cycle"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id" | "product_id_stage_code">;
export type product_purchase_cycleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    stage_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    median_days?: Prisma.SortOrderInput | Prisma.SortOrder;
    sample_count?: Prisma.SortOrder;
    calculated_at?: Prisma.SortOrder;
    _count?: Prisma.product_purchase_cycleCountOrderByAggregateInput;
    _avg?: Prisma.product_purchase_cycleAvgOrderByAggregateInput;
    _max?: Prisma.product_purchase_cycleMaxOrderByAggregateInput;
    _min?: Prisma.product_purchase_cycleMinOrderByAggregateInput;
    _sum?: Prisma.product_purchase_cycleSumOrderByAggregateInput;
};
export type product_purchase_cycleScalarWhereWithAggregatesInput = {
    AND?: Prisma.product_purchase_cycleScalarWhereWithAggregatesInput | Prisma.product_purchase_cycleScalarWhereWithAggregatesInput[];
    OR?: Prisma.product_purchase_cycleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.product_purchase_cycleScalarWhereWithAggregatesInput | Prisma.product_purchase_cycleScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"product_purchase_cycle"> | string;
    product_id?: Prisma.UuidWithAggregatesFilter<"product_purchase_cycle"> | string;
    stage_code?: Prisma.StringNullableWithAggregatesFilter<"product_purchase_cycle"> | string | null;
    median_days?: Prisma.IntNullableWithAggregatesFilter<"product_purchase_cycle"> | number | null;
    sample_count?: Prisma.IntWithAggregatesFilter<"product_purchase_cycle"> | number;
    calculated_at?: Prisma.DateTimeWithAggregatesFilter<"product_purchase_cycle"> | Date | string;
};
export type product_purchase_cycleCreateInput = {
    id?: string;
    stage_code?: string | null;
    median_days?: number | null;
    sample_count?: number;
    calculated_at?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutProduct_purchase_cycleInput;
};
export type product_purchase_cycleUncheckedCreateInput = {
    id?: string;
    product_id: string;
    stage_code?: string | null;
    median_days?: number | null;
    sample_count?: number;
    calculated_at?: Date | string;
};
export type product_purchase_cycleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stage_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    median_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sample_count?: Prisma.IntFieldUpdateOperationsInput | number;
    calculated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutProduct_purchase_cycleNestedInput;
};
export type product_purchase_cycleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    stage_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    median_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sample_count?: Prisma.IntFieldUpdateOperationsInput | number;
    calculated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type product_purchase_cycleCreateManyInput = {
    id?: string;
    product_id: string;
    stage_code?: string | null;
    median_days?: number | null;
    sample_count?: number;
    calculated_at?: Date | string;
};
export type product_purchase_cycleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stage_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    median_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sample_count?: Prisma.IntFieldUpdateOperationsInput | number;
    calculated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type product_purchase_cycleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.StringFieldUpdateOperationsInput | string;
    stage_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    median_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sample_count?: Prisma.IntFieldUpdateOperationsInput | number;
    calculated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Product_purchase_cycleListRelationFilter = {
    every?: Prisma.product_purchase_cycleWhereInput;
    some?: Prisma.product_purchase_cycleWhereInput;
    none?: Prisma.product_purchase_cycleWhereInput;
};
export type product_purchase_cycleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type product_purchase_cycleProduct_idStage_codeCompoundUniqueInput = {
    product_id: string;
    stage_code: string;
};
export type product_purchase_cycleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    stage_code?: Prisma.SortOrder;
    median_days?: Prisma.SortOrder;
    sample_count?: Prisma.SortOrder;
    calculated_at?: Prisma.SortOrder;
};
export type product_purchase_cycleAvgOrderByAggregateInput = {
    median_days?: Prisma.SortOrder;
    sample_count?: Prisma.SortOrder;
};
export type product_purchase_cycleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    stage_code?: Prisma.SortOrder;
    median_days?: Prisma.SortOrder;
    sample_count?: Prisma.SortOrder;
    calculated_at?: Prisma.SortOrder;
};
export type product_purchase_cycleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    stage_code?: Prisma.SortOrder;
    median_days?: Prisma.SortOrder;
    sample_count?: Prisma.SortOrder;
    calculated_at?: Prisma.SortOrder;
};
export type product_purchase_cycleSumOrderByAggregateInput = {
    median_days?: Prisma.SortOrder;
    sample_count?: Prisma.SortOrder;
};
export type product_purchase_cycleCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.product_purchase_cycleCreateWithoutProductInput, Prisma.product_purchase_cycleUncheckedCreateWithoutProductInput> | Prisma.product_purchase_cycleCreateWithoutProductInput[] | Prisma.product_purchase_cycleUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.product_purchase_cycleCreateOrConnectWithoutProductInput | Prisma.product_purchase_cycleCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.product_purchase_cycleCreateManyProductInputEnvelope;
    connect?: Prisma.product_purchase_cycleWhereUniqueInput | Prisma.product_purchase_cycleWhereUniqueInput[];
};
export type product_purchase_cycleUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.product_purchase_cycleCreateWithoutProductInput, Prisma.product_purchase_cycleUncheckedCreateWithoutProductInput> | Prisma.product_purchase_cycleCreateWithoutProductInput[] | Prisma.product_purchase_cycleUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.product_purchase_cycleCreateOrConnectWithoutProductInput | Prisma.product_purchase_cycleCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.product_purchase_cycleCreateManyProductInputEnvelope;
    connect?: Prisma.product_purchase_cycleWhereUniqueInput | Prisma.product_purchase_cycleWhereUniqueInput[];
};
export type product_purchase_cycleUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.product_purchase_cycleCreateWithoutProductInput, Prisma.product_purchase_cycleUncheckedCreateWithoutProductInput> | Prisma.product_purchase_cycleCreateWithoutProductInput[] | Prisma.product_purchase_cycleUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.product_purchase_cycleCreateOrConnectWithoutProductInput | Prisma.product_purchase_cycleCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.product_purchase_cycleUpsertWithWhereUniqueWithoutProductInput | Prisma.product_purchase_cycleUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.product_purchase_cycleCreateManyProductInputEnvelope;
    set?: Prisma.product_purchase_cycleWhereUniqueInput | Prisma.product_purchase_cycleWhereUniqueInput[];
    disconnect?: Prisma.product_purchase_cycleWhereUniqueInput | Prisma.product_purchase_cycleWhereUniqueInput[];
    delete?: Prisma.product_purchase_cycleWhereUniqueInput | Prisma.product_purchase_cycleWhereUniqueInput[];
    connect?: Prisma.product_purchase_cycleWhereUniqueInput | Prisma.product_purchase_cycleWhereUniqueInput[];
    update?: Prisma.product_purchase_cycleUpdateWithWhereUniqueWithoutProductInput | Prisma.product_purchase_cycleUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.product_purchase_cycleUpdateManyWithWhereWithoutProductInput | Prisma.product_purchase_cycleUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.product_purchase_cycleScalarWhereInput | Prisma.product_purchase_cycleScalarWhereInput[];
};
export type product_purchase_cycleUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.product_purchase_cycleCreateWithoutProductInput, Prisma.product_purchase_cycleUncheckedCreateWithoutProductInput> | Prisma.product_purchase_cycleCreateWithoutProductInput[] | Prisma.product_purchase_cycleUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.product_purchase_cycleCreateOrConnectWithoutProductInput | Prisma.product_purchase_cycleCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.product_purchase_cycleUpsertWithWhereUniqueWithoutProductInput | Prisma.product_purchase_cycleUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.product_purchase_cycleCreateManyProductInputEnvelope;
    set?: Prisma.product_purchase_cycleWhereUniqueInput | Prisma.product_purchase_cycleWhereUniqueInput[];
    disconnect?: Prisma.product_purchase_cycleWhereUniqueInput | Prisma.product_purchase_cycleWhereUniqueInput[];
    delete?: Prisma.product_purchase_cycleWhereUniqueInput | Prisma.product_purchase_cycleWhereUniqueInput[];
    connect?: Prisma.product_purchase_cycleWhereUniqueInput | Prisma.product_purchase_cycleWhereUniqueInput[];
    update?: Prisma.product_purchase_cycleUpdateWithWhereUniqueWithoutProductInput | Prisma.product_purchase_cycleUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.product_purchase_cycleUpdateManyWithWhereWithoutProductInput | Prisma.product_purchase_cycleUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.product_purchase_cycleScalarWhereInput | Prisma.product_purchase_cycleScalarWhereInput[];
};
export type product_purchase_cycleCreateWithoutProductInput = {
    id?: string;
    stage_code?: string | null;
    median_days?: number | null;
    sample_count?: number;
    calculated_at?: Date | string;
};
export type product_purchase_cycleUncheckedCreateWithoutProductInput = {
    id?: string;
    stage_code?: string | null;
    median_days?: number | null;
    sample_count?: number;
    calculated_at?: Date | string;
};
export type product_purchase_cycleCreateOrConnectWithoutProductInput = {
    where: Prisma.product_purchase_cycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_purchase_cycleCreateWithoutProductInput, Prisma.product_purchase_cycleUncheckedCreateWithoutProductInput>;
};
export type product_purchase_cycleCreateManyProductInputEnvelope = {
    data: Prisma.product_purchase_cycleCreateManyProductInput | Prisma.product_purchase_cycleCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type product_purchase_cycleUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.product_purchase_cycleWhereUniqueInput;
    update: Prisma.XOR<Prisma.product_purchase_cycleUpdateWithoutProductInput, Prisma.product_purchase_cycleUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.product_purchase_cycleCreateWithoutProductInput, Prisma.product_purchase_cycleUncheckedCreateWithoutProductInput>;
};
export type product_purchase_cycleUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.product_purchase_cycleWhereUniqueInput;
    data: Prisma.XOR<Prisma.product_purchase_cycleUpdateWithoutProductInput, Prisma.product_purchase_cycleUncheckedUpdateWithoutProductInput>;
};
export type product_purchase_cycleUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.product_purchase_cycleScalarWhereInput;
    data: Prisma.XOR<Prisma.product_purchase_cycleUpdateManyMutationInput, Prisma.product_purchase_cycleUncheckedUpdateManyWithoutProductInput>;
};
export type product_purchase_cycleScalarWhereInput = {
    AND?: Prisma.product_purchase_cycleScalarWhereInput | Prisma.product_purchase_cycleScalarWhereInput[];
    OR?: Prisma.product_purchase_cycleScalarWhereInput[];
    NOT?: Prisma.product_purchase_cycleScalarWhereInput | Prisma.product_purchase_cycleScalarWhereInput[];
    id?: Prisma.UuidFilter<"product_purchase_cycle"> | string;
    product_id?: Prisma.UuidFilter<"product_purchase_cycle"> | string;
    stage_code?: Prisma.StringNullableFilter<"product_purchase_cycle"> | string | null;
    median_days?: Prisma.IntNullableFilter<"product_purchase_cycle"> | number | null;
    sample_count?: Prisma.IntFilter<"product_purchase_cycle"> | number;
    calculated_at?: Prisma.DateTimeFilter<"product_purchase_cycle"> | Date | string;
};
export type product_purchase_cycleCreateManyProductInput = {
    id?: string;
    stage_code?: string | null;
    median_days?: number | null;
    sample_count?: number;
    calculated_at?: Date | string;
};
export type product_purchase_cycleUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stage_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    median_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sample_count?: Prisma.IntFieldUpdateOperationsInput | number;
    calculated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type product_purchase_cycleUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stage_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    median_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sample_count?: Prisma.IntFieldUpdateOperationsInput | number;
    calculated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type product_purchase_cycleUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stage_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    median_days?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sample_count?: Prisma.IntFieldUpdateOperationsInput | number;
    calculated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type product_purchase_cycleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    product_id?: boolean;
    stage_code?: boolean;
    median_days?: boolean;
    sample_count?: boolean;
    calculated_at?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_purchase_cycle"]>;
export type product_purchase_cycleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    product_id?: boolean;
    stage_code?: boolean;
    median_days?: boolean;
    sample_count?: boolean;
    calculated_at?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_purchase_cycle"]>;
export type product_purchase_cycleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    product_id?: boolean;
    stage_code?: boolean;
    median_days?: boolean;
    sample_count?: boolean;
    calculated_at?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product_purchase_cycle"]>;
export type product_purchase_cycleSelectScalar = {
    id?: boolean;
    product_id?: boolean;
    stage_code?: boolean;
    median_days?: boolean;
    sample_count?: boolean;
    calculated_at?: boolean;
};
export type product_purchase_cycleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "product_id" | "stage_code" | "median_days" | "sample_count" | "calculated_at", ExtArgs["result"]["product_purchase_cycle"]>;
export type product_purchase_cycleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type product_purchase_cycleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type product_purchase_cycleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $product_purchase_cyclePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "product_purchase_cycle";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        product_id: string;
        stage_code: string | null;
        median_days: number | null;
        sample_count: number;
        calculated_at: Date;
    }, ExtArgs["result"]["product_purchase_cycle"]>;
    composites: {};
};
export type product_purchase_cycleGetPayload<S extends boolean | null | undefined | product_purchase_cycleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$product_purchase_cyclePayload, S>;
export type product_purchase_cycleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<product_purchase_cycleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Product_purchase_cycleCountAggregateInputType | true;
};
export interface product_purchase_cycleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['product_purchase_cycle'];
        meta: {
            name: 'product_purchase_cycle';
        };
    };
    findUnique<T extends product_purchase_cycleFindUniqueArgs>(args: Prisma.SelectSubset<T, product_purchase_cycleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__product_purchase_cycleClient<runtime.Types.Result.GetResult<Prisma.$product_purchase_cyclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends product_purchase_cycleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, product_purchase_cycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_purchase_cycleClient<runtime.Types.Result.GetResult<Prisma.$product_purchase_cyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends product_purchase_cycleFindFirstArgs>(args?: Prisma.SelectSubset<T, product_purchase_cycleFindFirstArgs<ExtArgs>>): Prisma.Prisma__product_purchase_cycleClient<runtime.Types.Result.GetResult<Prisma.$product_purchase_cyclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends product_purchase_cycleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, product_purchase_cycleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__product_purchase_cycleClient<runtime.Types.Result.GetResult<Prisma.$product_purchase_cyclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends product_purchase_cycleFindManyArgs>(args?: Prisma.SelectSubset<T, product_purchase_cycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_purchase_cyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends product_purchase_cycleCreateArgs>(args: Prisma.SelectSubset<T, product_purchase_cycleCreateArgs<ExtArgs>>): Prisma.Prisma__product_purchase_cycleClient<runtime.Types.Result.GetResult<Prisma.$product_purchase_cyclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends product_purchase_cycleCreateManyArgs>(args?: Prisma.SelectSubset<T, product_purchase_cycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends product_purchase_cycleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, product_purchase_cycleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_purchase_cyclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends product_purchase_cycleDeleteArgs>(args: Prisma.SelectSubset<T, product_purchase_cycleDeleteArgs<ExtArgs>>): Prisma.Prisma__product_purchase_cycleClient<runtime.Types.Result.GetResult<Prisma.$product_purchase_cyclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends product_purchase_cycleUpdateArgs>(args: Prisma.SelectSubset<T, product_purchase_cycleUpdateArgs<ExtArgs>>): Prisma.Prisma__product_purchase_cycleClient<runtime.Types.Result.GetResult<Prisma.$product_purchase_cyclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends product_purchase_cycleDeleteManyArgs>(args?: Prisma.SelectSubset<T, product_purchase_cycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends product_purchase_cycleUpdateManyArgs>(args: Prisma.SelectSubset<T, product_purchase_cycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends product_purchase_cycleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, product_purchase_cycleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$product_purchase_cyclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends product_purchase_cycleUpsertArgs>(args: Prisma.SelectSubset<T, product_purchase_cycleUpsertArgs<ExtArgs>>): Prisma.Prisma__product_purchase_cycleClient<runtime.Types.Result.GetResult<Prisma.$product_purchase_cyclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends product_purchase_cycleCountArgs>(args?: Prisma.Subset<T, product_purchase_cycleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Product_purchase_cycleCountAggregateOutputType> : number>;
    aggregate<T extends Product_purchase_cycleAggregateArgs>(args: Prisma.Subset<T, Product_purchase_cycleAggregateArgs>): Prisma.PrismaPromise<GetProduct_purchase_cycleAggregateType<T>>;
    groupBy<T extends product_purchase_cycleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: product_purchase_cycleGroupByArgs['orderBy'];
    } : {
        orderBy?: product_purchase_cycleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, product_purchase_cycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_purchase_cycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: product_purchase_cycleFieldRefs;
}
export interface Prisma__product_purchase_cycleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface product_purchase_cycleFieldRefs {
    readonly id: Prisma.FieldRef<"product_purchase_cycle", 'String'>;
    readonly product_id: Prisma.FieldRef<"product_purchase_cycle", 'String'>;
    readonly stage_code: Prisma.FieldRef<"product_purchase_cycle", 'String'>;
    readonly median_days: Prisma.FieldRef<"product_purchase_cycle", 'Int'>;
    readonly sample_count: Prisma.FieldRef<"product_purchase_cycle", 'Int'>;
    readonly calculated_at: Prisma.FieldRef<"product_purchase_cycle", 'DateTime'>;
}
export type product_purchase_cycleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_purchase_cycleSelect<ExtArgs> | null;
    omit?: Prisma.product_purchase_cycleOmit<ExtArgs> | null;
    include?: Prisma.product_purchase_cycleInclude<ExtArgs> | null;
    where: Prisma.product_purchase_cycleWhereUniqueInput;
};
export type product_purchase_cycleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_purchase_cycleSelect<ExtArgs> | null;
    omit?: Prisma.product_purchase_cycleOmit<ExtArgs> | null;
    include?: Prisma.product_purchase_cycleInclude<ExtArgs> | null;
    where: Prisma.product_purchase_cycleWhereUniqueInput;
};
export type product_purchase_cycleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_purchase_cycleSelect<ExtArgs> | null;
    omit?: Prisma.product_purchase_cycleOmit<ExtArgs> | null;
    include?: Prisma.product_purchase_cycleInclude<ExtArgs> | null;
    where?: Prisma.product_purchase_cycleWhereInput;
    orderBy?: Prisma.product_purchase_cycleOrderByWithRelationInput | Prisma.product_purchase_cycleOrderByWithRelationInput[];
    cursor?: Prisma.product_purchase_cycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_purchase_cycleScalarFieldEnum | Prisma.Product_purchase_cycleScalarFieldEnum[];
};
export type product_purchase_cycleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_purchase_cycleSelect<ExtArgs> | null;
    omit?: Prisma.product_purchase_cycleOmit<ExtArgs> | null;
    include?: Prisma.product_purchase_cycleInclude<ExtArgs> | null;
    where?: Prisma.product_purchase_cycleWhereInput;
    orderBy?: Prisma.product_purchase_cycleOrderByWithRelationInput | Prisma.product_purchase_cycleOrderByWithRelationInput[];
    cursor?: Prisma.product_purchase_cycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_purchase_cycleScalarFieldEnum | Prisma.Product_purchase_cycleScalarFieldEnum[];
};
export type product_purchase_cycleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_purchase_cycleSelect<ExtArgs> | null;
    omit?: Prisma.product_purchase_cycleOmit<ExtArgs> | null;
    include?: Prisma.product_purchase_cycleInclude<ExtArgs> | null;
    where?: Prisma.product_purchase_cycleWhereInput;
    orderBy?: Prisma.product_purchase_cycleOrderByWithRelationInput | Prisma.product_purchase_cycleOrderByWithRelationInput[];
    cursor?: Prisma.product_purchase_cycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Product_purchase_cycleScalarFieldEnum | Prisma.Product_purchase_cycleScalarFieldEnum[];
};
export type product_purchase_cycleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_purchase_cycleSelect<ExtArgs> | null;
    omit?: Prisma.product_purchase_cycleOmit<ExtArgs> | null;
    include?: Prisma.product_purchase_cycleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_purchase_cycleCreateInput, Prisma.product_purchase_cycleUncheckedCreateInput>;
};
export type product_purchase_cycleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.product_purchase_cycleCreateManyInput | Prisma.product_purchase_cycleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type product_purchase_cycleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_purchase_cycleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.product_purchase_cycleOmit<ExtArgs> | null;
    data: Prisma.product_purchase_cycleCreateManyInput | Prisma.product_purchase_cycleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.product_purchase_cycleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type product_purchase_cycleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_purchase_cycleSelect<ExtArgs> | null;
    omit?: Prisma.product_purchase_cycleOmit<ExtArgs> | null;
    include?: Prisma.product_purchase_cycleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_purchase_cycleUpdateInput, Prisma.product_purchase_cycleUncheckedUpdateInput>;
    where: Prisma.product_purchase_cycleWhereUniqueInput;
};
export type product_purchase_cycleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.product_purchase_cycleUpdateManyMutationInput, Prisma.product_purchase_cycleUncheckedUpdateManyInput>;
    where?: Prisma.product_purchase_cycleWhereInput;
    limit?: number;
};
export type product_purchase_cycleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_purchase_cycleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.product_purchase_cycleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.product_purchase_cycleUpdateManyMutationInput, Prisma.product_purchase_cycleUncheckedUpdateManyInput>;
    where?: Prisma.product_purchase_cycleWhereInput;
    limit?: number;
    include?: Prisma.product_purchase_cycleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type product_purchase_cycleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_purchase_cycleSelect<ExtArgs> | null;
    omit?: Prisma.product_purchase_cycleOmit<ExtArgs> | null;
    include?: Prisma.product_purchase_cycleInclude<ExtArgs> | null;
    where: Prisma.product_purchase_cycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.product_purchase_cycleCreateInput, Prisma.product_purchase_cycleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.product_purchase_cycleUpdateInput, Prisma.product_purchase_cycleUncheckedUpdateInput>;
};
export type product_purchase_cycleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_purchase_cycleSelect<ExtArgs> | null;
    omit?: Prisma.product_purchase_cycleOmit<ExtArgs> | null;
    include?: Prisma.product_purchase_cycleInclude<ExtArgs> | null;
    where: Prisma.product_purchase_cycleWhereUniqueInput;
};
export type product_purchase_cycleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.product_purchase_cycleWhereInput;
    limit?: number;
};
export type product_purchase_cycleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.product_purchase_cycleSelect<ExtArgs> | null;
    omit?: Prisma.product_purchase_cycleOmit<ExtArgs> | null;
    include?: Prisma.product_purchase_cycleInclude<ExtArgs> | null;
};
