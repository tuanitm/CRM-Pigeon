import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReviewModel = runtime.Types.Result.DefaultSelection<Prisma.$ReviewPayload>;
export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
};
export type ReviewAvgAggregateOutputType = {
    rating: number | null;
};
export type ReviewSumAggregateOutputType = {
    rating: number | null;
};
export type ReviewMinAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    productId: string | null;
    orderId: string | null;
    rating: number | null;
    content: string | null;
    isVerifiedPurchase: boolean | null;
    status: string | null;
    createdAt: Date | null;
};
export type ReviewMaxAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    productId: string | null;
    orderId: string | null;
    rating: number | null;
    content: string | null;
    isVerifiedPurchase: boolean | null;
    status: string | null;
    createdAt: Date | null;
};
export type ReviewCountAggregateOutputType = {
    id: number;
    customerId: number;
    productId: number;
    orderId: number;
    rating: number;
    content: number;
    isVerifiedPurchase: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type ReviewAvgAggregateInputType = {
    rating?: true;
};
export type ReviewSumAggregateInputType = {
    rating?: true;
};
export type ReviewMinAggregateInputType = {
    id?: true;
    customerId?: true;
    productId?: true;
    orderId?: true;
    rating?: true;
    content?: true;
    isVerifiedPurchase?: true;
    status?: true;
    createdAt?: true;
};
export type ReviewMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    productId?: true;
    orderId?: true;
    rating?: true;
    content?: true;
    isVerifiedPurchase?: true;
    status?: true;
    createdAt?: true;
};
export type ReviewCountAggregateInputType = {
    id?: true;
    customerId?: true;
    productId?: true;
    orderId?: true;
    rating?: true;
    content?: true;
    isVerifiedPurchase?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type ReviewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReviewCountAggregateInputType;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
};
export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReview[P]> : Prisma.GetScalarType<T[P], AggregateReview[P]>;
};
export type ReviewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithAggregationInput | Prisma.ReviewOrderByWithAggregationInput[];
    by: Prisma.ReviewScalarFieldEnum[] | Prisma.ReviewScalarFieldEnum;
    having?: Prisma.ReviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
};
export type ReviewGroupByOutputType = {
    id: string;
    customerId: string;
    productId: string;
    orderId: string | null;
    rating: number;
    content: string | null;
    isVerifiedPurchase: boolean;
    status: string;
    createdAt: Date;
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
};
export type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReviewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReviewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReviewGroupByOutputType[P]>;
}>>;
export type ReviewWhereInput = {
    AND?: Prisma.ReviewWhereInput | Prisma.ReviewWhereInput[];
    OR?: Prisma.ReviewWhereInput[];
    NOT?: Prisma.ReviewWhereInput | Prisma.ReviewWhereInput[];
    id?: Prisma.UuidFilter<"Review"> | string;
    customerId?: Prisma.UuidFilter<"Review"> | string;
    productId?: Prisma.UuidFilter<"Review"> | string;
    orderId?: Prisma.UuidNullableFilter<"Review"> | string | null;
    rating?: Prisma.IntFilter<"Review"> | number;
    content?: Prisma.StringNullableFilter<"Review"> | string | null;
    isVerifiedPurchase?: Prisma.BoolFilter<"Review"> | boolean;
    status?: Prisma.StringFilter<"Review"> | string;
    createdAt?: Prisma.DateTimeFilter<"Review"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    order?: Prisma.XOR<Prisma.OrderNullableScalarRelationFilter, Prisma.OrderWhereInput> | null;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type ReviewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVerifiedPurchase?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    order?: Prisma.OrderOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ReviewWhereInput | Prisma.ReviewWhereInput[];
    OR?: Prisma.ReviewWhereInput[];
    NOT?: Prisma.ReviewWhereInput | Prisma.ReviewWhereInput[];
    customerId?: Prisma.UuidFilter<"Review"> | string;
    productId?: Prisma.UuidFilter<"Review"> | string;
    orderId?: Prisma.UuidNullableFilter<"Review"> | string | null;
    rating?: Prisma.IntFilter<"Review"> | number;
    content?: Prisma.StringNullableFilter<"Review"> | string | null;
    isVerifiedPurchase?: Prisma.BoolFilter<"Review"> | boolean;
    status?: Prisma.StringFilter<"Review"> | string;
    createdAt?: Prisma.DateTimeFilter<"Review"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    order?: Prisma.XOR<Prisma.OrderNullableScalarRelationFilter, Prisma.OrderWhereInput> | null;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id">;
export type ReviewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    isVerifiedPurchase?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ReviewCountOrderByAggregateInput;
    _avg?: Prisma.ReviewAvgOrderByAggregateInput;
    _max?: Prisma.ReviewMaxOrderByAggregateInput;
    _min?: Prisma.ReviewMinOrderByAggregateInput;
    _sum?: Prisma.ReviewSumOrderByAggregateInput;
};
export type ReviewScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReviewScalarWhereWithAggregatesInput | Prisma.ReviewScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReviewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReviewScalarWhereWithAggregatesInput | Prisma.ReviewScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Review"> | string;
    customerId?: Prisma.UuidWithAggregatesFilter<"Review"> | string;
    productId?: Prisma.UuidWithAggregatesFilter<"Review"> | string;
    orderId?: Prisma.UuidNullableWithAggregatesFilter<"Review"> | string | null;
    rating?: Prisma.IntWithAggregatesFilter<"Review"> | number;
    content?: Prisma.StringNullableWithAggregatesFilter<"Review"> | string | null;
    isVerifiedPurchase?: Prisma.BoolWithAggregatesFilter<"Review"> | boolean;
    status?: Prisma.StringWithAggregatesFilter<"Review"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Review"> | Date | string;
};
export type ReviewCreateInput = {
    id?: string;
    rating: number;
    content?: string | null;
    isVerifiedPurchase?: boolean;
    status?: string;
    createdAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutReviewsInput;
    order?: Prisma.OrderCreateNestedOneWithoutReviewInput;
    product: Prisma.ProductCreateNestedOneWithoutReviewInput;
};
export type ReviewUncheckedCreateInput = {
    id?: string;
    customerId: string;
    productId: string;
    orderId?: string | null;
    rating: number;
    content?: string | null;
    isVerifiedPurchase?: boolean;
    status?: string;
    createdAt?: Date | string;
};
export type ReviewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerifiedPurchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReviewsNestedInput;
    order?: Prisma.OrderUpdateOneWithoutReviewNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutReviewNestedInput;
};
export type ReviewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerifiedPurchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewCreateManyInput = {
    id?: string;
    customerId: string;
    productId: string;
    orderId?: string | null;
    rating: number;
    content?: string | null;
    isVerifiedPurchase?: boolean;
    status?: string;
    createdAt?: Date | string;
};
export type ReviewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerifiedPurchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerifiedPurchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewListRelationFilter = {
    every?: Prisma.ReviewWhereInput;
    some?: Prisma.ReviewWhereInput;
    none?: Prisma.ReviewWhereInput;
};
export type ReviewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReviewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isVerifiedPurchase?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReviewAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type ReviewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isVerifiedPurchase?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReviewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    isVerifiedPurchase?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReviewSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
};
export type ReviewCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutCustomerInput, Prisma.ReviewUncheckedCreateWithoutCustomerInput> | Prisma.ReviewCreateWithoutCustomerInput[] | Prisma.ReviewUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutCustomerInput | Prisma.ReviewCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ReviewCreateManyCustomerInputEnvelope;
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
};
export type ReviewUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutCustomerInput, Prisma.ReviewUncheckedCreateWithoutCustomerInput> | Prisma.ReviewCreateWithoutCustomerInput[] | Prisma.ReviewUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutCustomerInput | Prisma.ReviewCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ReviewCreateManyCustomerInputEnvelope;
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
};
export type ReviewUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutCustomerInput, Prisma.ReviewUncheckedCreateWithoutCustomerInput> | Prisma.ReviewCreateWithoutCustomerInput[] | Prisma.ReviewUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutCustomerInput | Prisma.ReviewCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ReviewUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ReviewUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ReviewCreateManyCustomerInputEnvelope;
    set?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    disconnect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    delete?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    update?: Prisma.ReviewUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ReviewUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ReviewUpdateManyWithWhereWithoutCustomerInput | Prisma.ReviewUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ReviewScalarWhereInput | Prisma.ReviewScalarWhereInput[];
};
export type ReviewUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutCustomerInput, Prisma.ReviewUncheckedCreateWithoutCustomerInput> | Prisma.ReviewCreateWithoutCustomerInput[] | Prisma.ReviewUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutCustomerInput | Prisma.ReviewCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ReviewUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ReviewUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ReviewCreateManyCustomerInputEnvelope;
    set?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    disconnect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    delete?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    update?: Prisma.ReviewUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ReviewUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ReviewUpdateManyWithWhereWithoutCustomerInput | Prisma.ReviewUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ReviewScalarWhereInput | Prisma.ReviewScalarWhereInput[];
};
export type ReviewCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutProductInput, Prisma.ReviewUncheckedCreateWithoutProductInput> | Prisma.ReviewCreateWithoutProductInput[] | Prisma.ReviewUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutProductInput | Prisma.ReviewCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ReviewCreateManyProductInputEnvelope;
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
};
export type ReviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutProductInput, Prisma.ReviewUncheckedCreateWithoutProductInput> | Prisma.ReviewCreateWithoutProductInput[] | Prisma.ReviewUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutProductInput | Prisma.ReviewCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ReviewCreateManyProductInputEnvelope;
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
};
export type ReviewUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutProductInput, Prisma.ReviewUncheckedCreateWithoutProductInput> | Prisma.ReviewCreateWithoutProductInput[] | Prisma.ReviewUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutProductInput | Prisma.ReviewCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ReviewUpsertWithWhereUniqueWithoutProductInput | Prisma.ReviewUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ReviewCreateManyProductInputEnvelope;
    set?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    disconnect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    delete?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    update?: Prisma.ReviewUpdateWithWhereUniqueWithoutProductInput | Prisma.ReviewUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ReviewUpdateManyWithWhereWithoutProductInput | Prisma.ReviewUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ReviewScalarWhereInput | Prisma.ReviewScalarWhereInput[];
};
export type ReviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutProductInput, Prisma.ReviewUncheckedCreateWithoutProductInput> | Prisma.ReviewCreateWithoutProductInput[] | Prisma.ReviewUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutProductInput | Prisma.ReviewCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ReviewUpsertWithWhereUniqueWithoutProductInput | Prisma.ReviewUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ReviewCreateManyProductInputEnvelope;
    set?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    disconnect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    delete?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    update?: Prisma.ReviewUpdateWithWhereUniqueWithoutProductInput | Prisma.ReviewUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ReviewUpdateManyWithWhereWithoutProductInput | Prisma.ReviewUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ReviewScalarWhereInput | Prisma.ReviewScalarWhereInput[];
};
export type ReviewCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutOrderInput, Prisma.ReviewUncheckedCreateWithoutOrderInput> | Prisma.ReviewCreateWithoutOrderInput[] | Prisma.ReviewUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutOrderInput | Prisma.ReviewCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.ReviewCreateManyOrderInputEnvelope;
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
};
export type ReviewUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutOrderInput, Prisma.ReviewUncheckedCreateWithoutOrderInput> | Prisma.ReviewCreateWithoutOrderInput[] | Prisma.ReviewUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutOrderInput | Prisma.ReviewCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.ReviewCreateManyOrderInputEnvelope;
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
};
export type ReviewUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutOrderInput, Prisma.ReviewUncheckedCreateWithoutOrderInput> | Prisma.ReviewCreateWithoutOrderInput[] | Prisma.ReviewUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutOrderInput | Prisma.ReviewCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.ReviewUpsertWithWhereUniqueWithoutOrderInput | Prisma.ReviewUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.ReviewCreateManyOrderInputEnvelope;
    set?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    disconnect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    delete?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    update?: Prisma.ReviewUpdateWithWhereUniqueWithoutOrderInput | Prisma.ReviewUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.ReviewUpdateManyWithWhereWithoutOrderInput | Prisma.ReviewUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.ReviewScalarWhereInput | Prisma.ReviewScalarWhereInput[];
};
export type ReviewUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutOrderInput, Prisma.ReviewUncheckedCreateWithoutOrderInput> | Prisma.ReviewCreateWithoutOrderInput[] | Prisma.ReviewUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutOrderInput | Prisma.ReviewCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.ReviewUpsertWithWhereUniqueWithoutOrderInput | Prisma.ReviewUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.ReviewCreateManyOrderInputEnvelope;
    set?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    disconnect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    delete?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    update?: Prisma.ReviewUpdateWithWhereUniqueWithoutOrderInput | Prisma.ReviewUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.ReviewUpdateManyWithWhereWithoutOrderInput | Prisma.ReviewUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.ReviewScalarWhereInput | Prisma.ReviewScalarWhereInput[];
};
export type ReviewCreateWithoutCustomerInput = {
    id?: string;
    rating: number;
    content?: string | null;
    isVerifiedPurchase?: boolean;
    status?: string;
    createdAt?: Date | string;
    order?: Prisma.OrderCreateNestedOneWithoutReviewInput;
    product: Prisma.ProductCreateNestedOneWithoutReviewInput;
};
export type ReviewUncheckedCreateWithoutCustomerInput = {
    id?: string;
    productId: string;
    orderId?: string | null;
    rating: number;
    content?: string | null;
    isVerifiedPurchase?: boolean;
    status?: string;
    createdAt?: Date | string;
};
export type ReviewCreateOrConnectWithoutCustomerInput = {
    where: Prisma.ReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReviewCreateWithoutCustomerInput, Prisma.ReviewUncheckedCreateWithoutCustomerInput>;
};
export type ReviewCreateManyCustomerInputEnvelope = {
    data: Prisma.ReviewCreateManyCustomerInput | Prisma.ReviewCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type ReviewUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReviewUpdateWithoutCustomerInput, Prisma.ReviewUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.ReviewCreateWithoutCustomerInput, Prisma.ReviewUncheckedCreateWithoutCustomerInput>;
};
export type ReviewUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReviewUpdateWithoutCustomerInput, Prisma.ReviewUncheckedUpdateWithoutCustomerInput>;
};
export type ReviewUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.ReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.ReviewUpdateManyMutationInput, Prisma.ReviewUncheckedUpdateManyWithoutCustomerInput>;
};
export type ReviewScalarWhereInput = {
    AND?: Prisma.ReviewScalarWhereInput | Prisma.ReviewScalarWhereInput[];
    OR?: Prisma.ReviewScalarWhereInput[];
    NOT?: Prisma.ReviewScalarWhereInput | Prisma.ReviewScalarWhereInput[];
    id?: Prisma.UuidFilter<"Review"> | string;
    customerId?: Prisma.UuidFilter<"Review"> | string;
    productId?: Prisma.UuidFilter<"Review"> | string;
    orderId?: Prisma.UuidNullableFilter<"Review"> | string | null;
    rating?: Prisma.IntFilter<"Review"> | number;
    content?: Prisma.StringNullableFilter<"Review"> | string | null;
    isVerifiedPurchase?: Prisma.BoolFilter<"Review"> | boolean;
    status?: Prisma.StringFilter<"Review"> | string;
    createdAt?: Prisma.DateTimeFilter<"Review"> | Date | string;
};
export type ReviewCreateWithoutProductInput = {
    id?: string;
    rating: number;
    content?: string | null;
    isVerifiedPurchase?: boolean;
    status?: string;
    createdAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutReviewsInput;
    order?: Prisma.OrderCreateNestedOneWithoutReviewInput;
};
export type ReviewUncheckedCreateWithoutProductInput = {
    id?: string;
    customerId: string;
    orderId?: string | null;
    rating: number;
    content?: string | null;
    isVerifiedPurchase?: boolean;
    status?: string;
    createdAt?: Date | string;
};
export type ReviewCreateOrConnectWithoutProductInput = {
    where: Prisma.ReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReviewCreateWithoutProductInput, Prisma.ReviewUncheckedCreateWithoutProductInput>;
};
export type ReviewCreateManyProductInputEnvelope = {
    data: Prisma.ReviewCreateManyProductInput | Prisma.ReviewCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReviewUpdateWithoutProductInput, Prisma.ReviewUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ReviewCreateWithoutProductInput, Prisma.ReviewUncheckedCreateWithoutProductInput>;
};
export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReviewUpdateWithoutProductInput, Prisma.ReviewUncheckedUpdateWithoutProductInput>;
};
export type ReviewUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.ReviewUpdateManyMutationInput, Prisma.ReviewUncheckedUpdateManyWithoutProductInput>;
};
export type ReviewCreateWithoutOrderInput = {
    id?: string;
    rating: number;
    content?: string | null;
    isVerifiedPurchase?: boolean;
    status?: string;
    createdAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutReviewsInput;
    product: Prisma.ProductCreateNestedOneWithoutReviewInput;
};
export type ReviewUncheckedCreateWithoutOrderInput = {
    id?: string;
    customerId: string;
    productId: string;
    rating: number;
    content?: string | null;
    isVerifiedPurchase?: boolean;
    status?: string;
    createdAt?: Date | string;
};
export type ReviewCreateOrConnectWithoutOrderInput = {
    where: Prisma.ReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReviewCreateWithoutOrderInput, Prisma.ReviewUncheckedCreateWithoutOrderInput>;
};
export type ReviewCreateManyOrderInputEnvelope = {
    data: Prisma.ReviewCreateManyOrderInput | Prisma.ReviewCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type ReviewUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.ReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReviewUpdateWithoutOrderInput, Prisma.ReviewUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.ReviewCreateWithoutOrderInput, Prisma.ReviewUncheckedCreateWithoutOrderInput>;
};
export type ReviewUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.ReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReviewUpdateWithoutOrderInput, Prisma.ReviewUncheckedUpdateWithoutOrderInput>;
};
export type ReviewUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.ReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.ReviewUpdateManyMutationInput, Prisma.ReviewUncheckedUpdateManyWithoutOrderInput>;
};
export type ReviewCreateManyCustomerInput = {
    id?: string;
    productId: string;
    orderId?: string | null;
    rating: number;
    content?: string | null;
    isVerifiedPurchase?: boolean;
    status?: string;
    createdAt?: Date | string;
};
export type ReviewUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerifiedPurchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneWithoutReviewNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutReviewNestedInput;
};
export type ReviewUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerifiedPurchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerifiedPurchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewCreateManyProductInput = {
    id?: string;
    customerId: string;
    orderId?: string | null;
    rating: number;
    content?: string | null;
    isVerifiedPurchase?: boolean;
    status?: string;
    createdAt?: Date | string;
};
export type ReviewUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerifiedPurchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReviewsNestedInput;
    order?: Prisma.OrderUpdateOneWithoutReviewNestedInput;
};
export type ReviewUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerifiedPurchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerifiedPurchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewCreateManyOrderInput = {
    id?: string;
    customerId: string;
    productId: string;
    rating: number;
    content?: string | null;
    isVerifiedPurchase?: boolean;
    status?: string;
    createdAt?: Date | string;
};
export type ReviewUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerifiedPurchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutReviewsNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutReviewNestedInput;
};
export type ReviewUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerifiedPurchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isVerifiedPurchase?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    productId?: boolean;
    orderId?: boolean;
    rating?: boolean;
    content?: boolean;
    isVerifiedPurchase?: boolean;
    status?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.Review$orderArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["review"]>;
export type ReviewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    productId?: boolean;
    orderId?: boolean;
    rating?: boolean;
    content?: boolean;
    isVerifiedPurchase?: boolean;
    status?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.Review$orderArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["review"]>;
export type ReviewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    productId?: boolean;
    orderId?: boolean;
    rating?: boolean;
    content?: boolean;
    isVerifiedPurchase?: boolean;
    status?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.Review$orderArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["review"]>;
export type ReviewSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    productId?: boolean;
    orderId?: boolean;
    rating?: boolean;
    content?: boolean;
    isVerifiedPurchase?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type ReviewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "productId" | "orderId" | "rating" | "content" | "isVerifiedPurchase" | "status" | "createdAt", ExtArgs["result"]["review"]>;
export type ReviewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.Review$orderArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ReviewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.Review$orderArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.Review$orderArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $ReviewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Review";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        order: Prisma.$OrderPayload<ExtArgs> | null;
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customerId: string;
        productId: string;
        orderId: string | null;
        rating: number;
        content: string | null;
        isVerifiedPurchase: boolean;
        status: string;
        createdAt: Date;
    }, ExtArgs["result"]["review"]>;
    composites: {};
};
export type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReviewPayload, S>;
export type ReviewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReviewCountAggregateInputType | true;
};
export interface ReviewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Review'];
        meta: {
            name: 'Review';
        };
    };
    findUnique<T extends ReviewFindUniqueArgs>(args: Prisma.SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReviewFindFirstArgs>(args?: Prisma.SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReviewFindManyArgs>(args?: Prisma.SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReviewCreateArgs>(args: Prisma.SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReviewCreateManyArgs>(args?: Prisma.SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReviewDeleteArgs>(args: Prisma.SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReviewUpdateArgs>(args: Prisma.SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReviewDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReviewUpdateManyArgs>(args: Prisma.SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReviewUpsertArgs>(args: Prisma.SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReviewCountArgs>(args?: Prisma.Subset<T, ReviewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReviewCountAggregateOutputType> : number>;
    aggregate<T extends ReviewAggregateArgs>(args: Prisma.Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>;
    groupBy<T extends ReviewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReviewGroupByArgs['orderBy'];
    } : {
        orderBy?: ReviewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReviewFieldRefs;
}
export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    order<T extends Prisma.Review$orderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Review$orderArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReviewFieldRefs {
    readonly id: Prisma.FieldRef<"Review", 'String'>;
    readonly customerId: Prisma.FieldRef<"Review", 'String'>;
    readonly productId: Prisma.FieldRef<"Review", 'String'>;
    readonly orderId: Prisma.FieldRef<"Review", 'String'>;
    readonly rating: Prisma.FieldRef<"Review", 'Int'>;
    readonly content: Prisma.FieldRef<"Review", 'String'>;
    readonly isVerifiedPurchase: Prisma.FieldRef<"Review", 'Boolean'>;
    readonly status: Prisma.FieldRef<"Review", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Review", 'DateTime'>;
}
export type ReviewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where: Prisma.ReviewWhereUniqueInput;
};
export type ReviewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where: Prisma.ReviewWhereUniqueInput;
};
export type ReviewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
export type ReviewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
export type ReviewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
export type ReviewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReviewCreateInput, Prisma.ReviewUncheckedCreateInput>;
};
export type ReviewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReviewCreateManyInput | Prisma.ReviewCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReviewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    data: Prisma.ReviewCreateManyInput | Prisma.ReviewCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReviewIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReviewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReviewUpdateInput, Prisma.ReviewUncheckedUpdateInput>;
    where: Prisma.ReviewWhereUniqueInput;
};
export type ReviewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReviewUpdateManyMutationInput, Prisma.ReviewUncheckedUpdateManyInput>;
    where?: Prisma.ReviewWhereInput;
    limit?: number;
};
export type ReviewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReviewUpdateManyMutationInput, Prisma.ReviewUncheckedUpdateManyInput>;
    where?: Prisma.ReviewWhereInput;
    limit?: number;
    include?: Prisma.ReviewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReviewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where: Prisma.ReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReviewCreateInput, Prisma.ReviewUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReviewUpdateInput, Prisma.ReviewUncheckedUpdateInput>;
};
export type ReviewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where: Prisma.ReviewWhereUniqueInput;
};
export type ReviewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
    limit?: number;
};
export type Review$orderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
};
export type ReviewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
};
