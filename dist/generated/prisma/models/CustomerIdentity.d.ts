import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomerIdentityModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomerIdentityPayload>;
export type AggregateCustomerIdentity = {
    _count: CustomerIdentityCountAggregateOutputType | null;
    _avg: CustomerIdentityAvgAggregateOutputType | null;
    _sum: CustomerIdentitySumAggregateOutputType | null;
    _min: CustomerIdentityMinAggregateOutputType | null;
    _max: CustomerIdentityMaxAggregateOutputType | null;
};
export type CustomerIdentityAvgAggregateOutputType = {
    priority: number | null;
};
export type CustomerIdentitySumAggregateOutputType = {
    priority: number | null;
};
export type CustomerIdentityMinAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    identityType: string | null;
    identityValue: string | null;
    priority: number | null;
    verified: boolean | null;
    verifiedAt: Date | null;
    createdAt: Date | null;
};
export type CustomerIdentityMaxAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    identityType: string | null;
    identityValue: string | null;
    priority: number | null;
    verified: boolean | null;
    verifiedAt: Date | null;
    createdAt: Date | null;
};
export type CustomerIdentityCountAggregateOutputType = {
    id: number;
    customerId: number;
    identityType: number;
    identityValue: number;
    priority: number;
    verified: number;
    verifiedAt: number;
    createdAt: number;
    _all: number;
};
export type CustomerIdentityAvgAggregateInputType = {
    priority?: true;
};
export type CustomerIdentitySumAggregateInputType = {
    priority?: true;
};
export type CustomerIdentityMinAggregateInputType = {
    id?: true;
    customerId?: true;
    identityType?: true;
    identityValue?: true;
    priority?: true;
    verified?: true;
    verifiedAt?: true;
    createdAt?: true;
};
export type CustomerIdentityMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    identityType?: true;
    identityValue?: true;
    priority?: true;
    verified?: true;
    verifiedAt?: true;
    createdAt?: true;
};
export type CustomerIdentityCountAggregateInputType = {
    id?: true;
    customerId?: true;
    identityType?: true;
    identityValue?: true;
    priority?: true;
    verified?: true;
    verifiedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type CustomerIdentityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerIdentityWhereInput;
    orderBy?: Prisma.CustomerIdentityOrderByWithRelationInput | Prisma.CustomerIdentityOrderByWithRelationInput[];
    cursor?: Prisma.CustomerIdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerIdentityCountAggregateInputType;
    _avg?: CustomerIdentityAvgAggregateInputType;
    _sum?: CustomerIdentitySumAggregateInputType;
    _min?: CustomerIdentityMinAggregateInputType;
    _max?: CustomerIdentityMaxAggregateInputType;
};
export type GetCustomerIdentityAggregateType<T extends CustomerIdentityAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomerIdentity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomerIdentity[P]> : Prisma.GetScalarType<T[P], AggregateCustomerIdentity[P]>;
};
export type CustomerIdentityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerIdentityWhereInput;
    orderBy?: Prisma.CustomerIdentityOrderByWithAggregationInput | Prisma.CustomerIdentityOrderByWithAggregationInput[];
    by: Prisma.CustomerIdentityScalarFieldEnum[] | Prisma.CustomerIdentityScalarFieldEnum;
    having?: Prisma.CustomerIdentityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerIdentityCountAggregateInputType | true;
    _avg?: CustomerIdentityAvgAggregateInputType;
    _sum?: CustomerIdentitySumAggregateInputType;
    _min?: CustomerIdentityMinAggregateInputType;
    _max?: CustomerIdentityMaxAggregateInputType;
};
export type CustomerIdentityGroupByOutputType = {
    id: string;
    customerId: string;
    identityType: string;
    identityValue: string;
    priority: number;
    verified: boolean;
    verifiedAt: Date | null;
    createdAt: Date;
    _count: CustomerIdentityCountAggregateOutputType | null;
    _avg: CustomerIdentityAvgAggregateOutputType | null;
    _sum: CustomerIdentitySumAggregateOutputType | null;
    _min: CustomerIdentityMinAggregateOutputType | null;
    _max: CustomerIdentityMaxAggregateOutputType | null;
};
export type GetCustomerIdentityGroupByPayload<T extends CustomerIdentityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerIdentityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerIdentityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerIdentityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerIdentityGroupByOutputType[P]>;
}>>;
export type CustomerIdentityWhereInput = {
    AND?: Prisma.CustomerIdentityWhereInput | Prisma.CustomerIdentityWhereInput[];
    OR?: Prisma.CustomerIdentityWhereInput[];
    NOT?: Prisma.CustomerIdentityWhereInput | Prisma.CustomerIdentityWhereInput[];
    id?: Prisma.UuidFilter<"CustomerIdentity"> | string;
    customerId?: Prisma.UuidFilter<"CustomerIdentity"> | string;
    identityType?: Prisma.StringFilter<"CustomerIdentity"> | string;
    identityValue?: Prisma.StringFilter<"CustomerIdentity"> | string;
    priority?: Prisma.IntFilter<"CustomerIdentity"> | number;
    verified?: Prisma.BoolFilter<"CustomerIdentity"> | boolean;
    verifiedAt?: Prisma.DateTimeNullableFilter<"CustomerIdentity"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CustomerIdentity"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
};
export type CustomerIdentityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    identityType?: Prisma.SortOrder;
    identityValue?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
};
export type CustomerIdentityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    identityType_identityValue?: Prisma.CustomerIdentityIdentityTypeIdentityValueCompoundUniqueInput;
    AND?: Prisma.CustomerIdentityWhereInput | Prisma.CustomerIdentityWhereInput[];
    OR?: Prisma.CustomerIdentityWhereInput[];
    NOT?: Prisma.CustomerIdentityWhereInput | Prisma.CustomerIdentityWhereInput[];
    customerId?: Prisma.UuidFilter<"CustomerIdentity"> | string;
    identityType?: Prisma.StringFilter<"CustomerIdentity"> | string;
    identityValue?: Prisma.StringFilter<"CustomerIdentity"> | string;
    priority?: Prisma.IntFilter<"CustomerIdentity"> | number;
    verified?: Prisma.BoolFilter<"CustomerIdentity"> | boolean;
    verifiedAt?: Prisma.DateTimeNullableFilter<"CustomerIdentity"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CustomerIdentity"> | Date | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
}, "id" | "identityType_identityValue">;
export type CustomerIdentityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    identityType?: Prisma.SortOrder;
    identityValue?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CustomerIdentityCountOrderByAggregateInput;
    _avg?: Prisma.CustomerIdentityAvgOrderByAggregateInput;
    _max?: Prisma.CustomerIdentityMaxOrderByAggregateInput;
    _min?: Prisma.CustomerIdentityMinOrderByAggregateInput;
    _sum?: Prisma.CustomerIdentitySumOrderByAggregateInput;
};
export type CustomerIdentityScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomerIdentityScalarWhereWithAggregatesInput | Prisma.CustomerIdentityScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomerIdentityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomerIdentityScalarWhereWithAggregatesInput | Prisma.CustomerIdentityScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CustomerIdentity"> | string;
    customerId?: Prisma.UuidWithAggregatesFilter<"CustomerIdentity"> | string;
    identityType?: Prisma.StringWithAggregatesFilter<"CustomerIdentity"> | string;
    identityValue?: Prisma.StringWithAggregatesFilter<"CustomerIdentity"> | string;
    priority?: Prisma.IntWithAggregatesFilter<"CustomerIdentity"> | number;
    verified?: Prisma.BoolWithAggregatesFilter<"CustomerIdentity"> | boolean;
    verifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CustomerIdentity"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CustomerIdentity"> | Date | string;
};
export type CustomerIdentityCreateInput = {
    id?: string;
    identityType: string;
    identityValue: string;
    priority?: number;
    verified?: boolean;
    verifiedAt?: Date | string | null;
    createdAt?: Date | string;
    customer: Prisma.CustomerCreateNestedOneWithoutIdentitiesInput;
};
export type CustomerIdentityUncheckedCreateInput = {
    id?: string;
    customerId: string;
    identityType: string;
    identityValue: string;
    priority?: number;
    verified?: boolean;
    verifiedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CustomerIdentityUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    identityType?: Prisma.StringFieldUpdateOperationsInput | string;
    identityValue?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutIdentitiesNestedInput;
};
export type CustomerIdentityUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    identityType?: Prisma.StringFieldUpdateOperationsInput | string;
    identityValue?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerIdentityCreateManyInput = {
    id?: string;
    customerId: string;
    identityType: string;
    identityValue: string;
    priority?: number;
    verified?: boolean;
    verifiedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CustomerIdentityUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    identityType?: Prisma.StringFieldUpdateOperationsInput | string;
    identityValue?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerIdentityUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    identityType?: Prisma.StringFieldUpdateOperationsInput | string;
    identityValue?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerIdentityListRelationFilter = {
    every?: Prisma.CustomerIdentityWhereInput;
    some?: Prisma.CustomerIdentityWhereInput;
    none?: Prisma.CustomerIdentityWhereInput;
};
export type CustomerIdentityOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CustomerIdentityIdentityTypeIdentityValueCompoundUniqueInput = {
    identityType: string;
    identityValue: string;
};
export type CustomerIdentityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    identityType?: Prisma.SortOrder;
    identityValue?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerIdentityAvgOrderByAggregateInput = {
    priority?: Prisma.SortOrder;
};
export type CustomerIdentityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    identityType?: Prisma.SortOrder;
    identityValue?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerIdentityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    identityType?: Prisma.SortOrder;
    identityValue?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    verified?: Prisma.SortOrder;
    verifiedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerIdentitySumOrderByAggregateInput = {
    priority?: Prisma.SortOrder;
};
export type CustomerIdentityCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CustomerIdentityCreateWithoutCustomerInput, Prisma.CustomerIdentityUncheckedCreateWithoutCustomerInput> | Prisma.CustomerIdentityCreateWithoutCustomerInput[] | Prisma.CustomerIdentityUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerIdentityCreateOrConnectWithoutCustomerInput | Prisma.CustomerIdentityCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CustomerIdentityCreateManyCustomerInputEnvelope;
    connect?: Prisma.CustomerIdentityWhereUniqueInput | Prisma.CustomerIdentityWhereUniqueInput[];
};
export type CustomerIdentityUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.CustomerIdentityCreateWithoutCustomerInput, Prisma.CustomerIdentityUncheckedCreateWithoutCustomerInput> | Prisma.CustomerIdentityCreateWithoutCustomerInput[] | Prisma.CustomerIdentityUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerIdentityCreateOrConnectWithoutCustomerInput | Prisma.CustomerIdentityCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.CustomerIdentityCreateManyCustomerInputEnvelope;
    connect?: Prisma.CustomerIdentityWhereUniqueInput | Prisma.CustomerIdentityWhereUniqueInput[];
};
export type CustomerIdentityUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerIdentityCreateWithoutCustomerInput, Prisma.CustomerIdentityUncheckedCreateWithoutCustomerInput> | Prisma.CustomerIdentityCreateWithoutCustomerInput[] | Prisma.CustomerIdentityUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerIdentityCreateOrConnectWithoutCustomerInput | Prisma.CustomerIdentityCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CustomerIdentityUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CustomerIdentityUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CustomerIdentityCreateManyCustomerInputEnvelope;
    set?: Prisma.CustomerIdentityWhereUniqueInput | Prisma.CustomerIdentityWhereUniqueInput[];
    disconnect?: Prisma.CustomerIdentityWhereUniqueInput | Prisma.CustomerIdentityWhereUniqueInput[];
    delete?: Prisma.CustomerIdentityWhereUniqueInput | Prisma.CustomerIdentityWhereUniqueInput[];
    connect?: Prisma.CustomerIdentityWhereUniqueInput | Prisma.CustomerIdentityWhereUniqueInput[];
    update?: Prisma.CustomerIdentityUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CustomerIdentityUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CustomerIdentityUpdateManyWithWhereWithoutCustomerInput | Prisma.CustomerIdentityUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CustomerIdentityScalarWhereInput | Prisma.CustomerIdentityScalarWhereInput[];
};
export type CustomerIdentityUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerIdentityCreateWithoutCustomerInput, Prisma.CustomerIdentityUncheckedCreateWithoutCustomerInput> | Prisma.CustomerIdentityCreateWithoutCustomerInput[] | Prisma.CustomerIdentityUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.CustomerIdentityCreateOrConnectWithoutCustomerInput | Prisma.CustomerIdentityCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.CustomerIdentityUpsertWithWhereUniqueWithoutCustomerInput | Prisma.CustomerIdentityUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.CustomerIdentityCreateManyCustomerInputEnvelope;
    set?: Prisma.CustomerIdentityWhereUniqueInput | Prisma.CustomerIdentityWhereUniqueInput[];
    disconnect?: Prisma.CustomerIdentityWhereUniqueInput | Prisma.CustomerIdentityWhereUniqueInput[];
    delete?: Prisma.CustomerIdentityWhereUniqueInput | Prisma.CustomerIdentityWhereUniqueInput[];
    connect?: Prisma.CustomerIdentityWhereUniqueInput | Prisma.CustomerIdentityWhereUniqueInput[];
    update?: Prisma.CustomerIdentityUpdateWithWhereUniqueWithoutCustomerInput | Prisma.CustomerIdentityUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.CustomerIdentityUpdateManyWithWhereWithoutCustomerInput | Prisma.CustomerIdentityUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.CustomerIdentityScalarWhereInput | Prisma.CustomerIdentityScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CustomerIdentityCreateWithoutCustomerInput = {
    id?: string;
    identityType: string;
    identityValue: string;
    priority?: number;
    verified?: boolean;
    verifiedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CustomerIdentityUncheckedCreateWithoutCustomerInput = {
    id?: string;
    identityType: string;
    identityValue: string;
    priority?: number;
    verified?: boolean;
    verifiedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CustomerIdentityCreateOrConnectWithoutCustomerInput = {
    where: Prisma.CustomerIdentityWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerIdentityCreateWithoutCustomerInput, Prisma.CustomerIdentityUncheckedCreateWithoutCustomerInput>;
};
export type CustomerIdentityCreateManyCustomerInputEnvelope = {
    data: Prisma.CustomerIdentityCreateManyCustomerInput | Prisma.CustomerIdentityCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type CustomerIdentityUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CustomerIdentityWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustomerIdentityUpdateWithoutCustomerInput, Prisma.CustomerIdentityUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.CustomerIdentityCreateWithoutCustomerInput, Prisma.CustomerIdentityUncheckedCreateWithoutCustomerInput>;
};
export type CustomerIdentityUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.CustomerIdentityWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustomerIdentityUpdateWithoutCustomerInput, Prisma.CustomerIdentityUncheckedUpdateWithoutCustomerInput>;
};
export type CustomerIdentityUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.CustomerIdentityScalarWhereInput;
    data: Prisma.XOR<Prisma.CustomerIdentityUpdateManyMutationInput, Prisma.CustomerIdentityUncheckedUpdateManyWithoutCustomerInput>;
};
export type CustomerIdentityScalarWhereInput = {
    AND?: Prisma.CustomerIdentityScalarWhereInput | Prisma.CustomerIdentityScalarWhereInput[];
    OR?: Prisma.CustomerIdentityScalarWhereInput[];
    NOT?: Prisma.CustomerIdentityScalarWhereInput | Prisma.CustomerIdentityScalarWhereInput[];
    id?: Prisma.UuidFilter<"CustomerIdentity"> | string;
    customerId?: Prisma.UuidFilter<"CustomerIdentity"> | string;
    identityType?: Prisma.StringFilter<"CustomerIdentity"> | string;
    identityValue?: Prisma.StringFilter<"CustomerIdentity"> | string;
    priority?: Prisma.IntFilter<"CustomerIdentity"> | number;
    verified?: Prisma.BoolFilter<"CustomerIdentity"> | boolean;
    verifiedAt?: Prisma.DateTimeNullableFilter<"CustomerIdentity"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"CustomerIdentity"> | Date | string;
};
export type CustomerIdentityCreateManyCustomerInput = {
    id?: string;
    identityType: string;
    identityValue: string;
    priority?: number;
    verified?: boolean;
    verifiedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type CustomerIdentityUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    identityType?: Prisma.StringFieldUpdateOperationsInput | string;
    identityValue?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerIdentityUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    identityType?: Prisma.StringFieldUpdateOperationsInput | string;
    identityValue?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerIdentityUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    identityType?: Prisma.StringFieldUpdateOperationsInput | string;
    identityValue?: Prisma.StringFieldUpdateOperationsInput | string;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    verifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerIdentitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    identityType?: boolean;
    identityValue?: boolean;
    priority?: boolean;
    verified?: boolean;
    verifiedAt?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerIdentity"]>;
export type CustomerIdentitySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    identityType?: boolean;
    identityValue?: boolean;
    priority?: boolean;
    verified?: boolean;
    verifiedAt?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerIdentity"]>;
export type CustomerIdentitySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    identityType?: boolean;
    identityValue?: boolean;
    priority?: boolean;
    verified?: boolean;
    verifiedAt?: boolean;
    createdAt?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerIdentity"]>;
export type CustomerIdentitySelectScalar = {
    id?: boolean;
    customerId?: boolean;
    identityType?: boolean;
    identityValue?: boolean;
    priority?: boolean;
    verified?: boolean;
    verifiedAt?: boolean;
    createdAt?: boolean;
};
export type CustomerIdentityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "identityType" | "identityValue" | "priority" | "verified" | "verifiedAt" | "createdAt", ExtArgs["result"]["customerIdentity"]>;
export type CustomerIdentityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type CustomerIdentityIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type CustomerIdentityIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $CustomerIdentityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CustomerIdentity";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customerId: string;
        identityType: string;
        identityValue: string;
        priority: number;
        verified: boolean;
        verifiedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["customerIdentity"]>;
    composites: {};
};
export type CustomerIdentityGetPayload<S extends boolean | null | undefined | CustomerIdentityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomerIdentityPayload, S>;
export type CustomerIdentityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomerIdentityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerIdentityCountAggregateInputType | true;
};
export interface CustomerIdentityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CustomerIdentity'];
        meta: {
            name: 'CustomerIdentity';
        };
    };
    findUnique<T extends CustomerIdentityFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomerIdentityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomerIdentityClient<runtime.Types.Result.GetResult<Prisma.$CustomerIdentityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomerIdentityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomerIdentityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerIdentityClient<runtime.Types.Result.GetResult<Prisma.$CustomerIdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomerIdentityFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomerIdentityFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomerIdentityClient<runtime.Types.Result.GetResult<Prisma.$CustomerIdentityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomerIdentityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomerIdentityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerIdentityClient<runtime.Types.Result.GetResult<Prisma.$CustomerIdentityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomerIdentityFindManyArgs>(args?: Prisma.SelectSubset<T, CustomerIdentityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerIdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomerIdentityCreateArgs>(args: Prisma.SelectSubset<T, CustomerIdentityCreateArgs<ExtArgs>>): Prisma.Prisma__CustomerIdentityClient<runtime.Types.Result.GetResult<Prisma.$CustomerIdentityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomerIdentityCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomerIdentityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomerIdentityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomerIdentityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerIdentityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomerIdentityDeleteArgs>(args: Prisma.SelectSubset<T, CustomerIdentityDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomerIdentityClient<runtime.Types.Result.GetResult<Prisma.$CustomerIdentityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomerIdentityUpdateArgs>(args: Prisma.SelectSubset<T, CustomerIdentityUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomerIdentityClient<runtime.Types.Result.GetResult<Prisma.$CustomerIdentityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomerIdentityDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomerIdentityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomerIdentityUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomerIdentityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomerIdentityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomerIdentityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerIdentityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomerIdentityUpsertArgs>(args: Prisma.SelectSubset<T, CustomerIdentityUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomerIdentityClient<runtime.Types.Result.GetResult<Prisma.$CustomerIdentityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomerIdentityCountArgs>(args?: Prisma.Subset<T, CustomerIdentityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerIdentityCountAggregateOutputType> : number>;
    aggregate<T extends CustomerIdentityAggregateArgs>(args: Prisma.Subset<T, CustomerIdentityAggregateArgs>): Prisma.PrismaPromise<GetCustomerIdentityAggregateType<T>>;
    groupBy<T extends CustomerIdentityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomerIdentityGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomerIdentityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomerIdentityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerIdentityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomerIdentityFieldRefs;
}
export interface Prisma__CustomerIdentityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomerIdentityFieldRefs {
    readonly id: Prisma.FieldRef<"CustomerIdentity", 'String'>;
    readonly customerId: Prisma.FieldRef<"CustomerIdentity", 'String'>;
    readonly identityType: Prisma.FieldRef<"CustomerIdentity", 'String'>;
    readonly identityValue: Prisma.FieldRef<"CustomerIdentity", 'String'>;
    readonly priority: Prisma.FieldRef<"CustomerIdentity", 'Int'>;
    readonly verified: Prisma.FieldRef<"CustomerIdentity", 'Boolean'>;
    readonly verifiedAt: Prisma.FieldRef<"CustomerIdentity", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"CustomerIdentity", 'DateTime'>;
}
export type CustomerIdentityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerIdentitySelect<ExtArgs> | null;
    omit?: Prisma.CustomerIdentityOmit<ExtArgs> | null;
    include?: Prisma.CustomerIdentityInclude<ExtArgs> | null;
    where: Prisma.CustomerIdentityWhereUniqueInput;
};
export type CustomerIdentityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerIdentitySelect<ExtArgs> | null;
    omit?: Prisma.CustomerIdentityOmit<ExtArgs> | null;
    include?: Prisma.CustomerIdentityInclude<ExtArgs> | null;
    where: Prisma.CustomerIdentityWhereUniqueInput;
};
export type CustomerIdentityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerIdentitySelect<ExtArgs> | null;
    omit?: Prisma.CustomerIdentityOmit<ExtArgs> | null;
    include?: Prisma.CustomerIdentityInclude<ExtArgs> | null;
    where?: Prisma.CustomerIdentityWhereInput;
    orderBy?: Prisma.CustomerIdentityOrderByWithRelationInput | Prisma.CustomerIdentityOrderByWithRelationInput[];
    cursor?: Prisma.CustomerIdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerIdentityScalarFieldEnum | Prisma.CustomerIdentityScalarFieldEnum[];
};
export type CustomerIdentityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerIdentitySelect<ExtArgs> | null;
    omit?: Prisma.CustomerIdentityOmit<ExtArgs> | null;
    include?: Prisma.CustomerIdentityInclude<ExtArgs> | null;
    where?: Prisma.CustomerIdentityWhereInput;
    orderBy?: Prisma.CustomerIdentityOrderByWithRelationInput | Prisma.CustomerIdentityOrderByWithRelationInput[];
    cursor?: Prisma.CustomerIdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerIdentityScalarFieldEnum | Prisma.CustomerIdentityScalarFieldEnum[];
};
export type CustomerIdentityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerIdentitySelect<ExtArgs> | null;
    omit?: Prisma.CustomerIdentityOmit<ExtArgs> | null;
    include?: Prisma.CustomerIdentityInclude<ExtArgs> | null;
    where?: Prisma.CustomerIdentityWhereInput;
    orderBy?: Prisma.CustomerIdentityOrderByWithRelationInput | Prisma.CustomerIdentityOrderByWithRelationInput[];
    cursor?: Prisma.CustomerIdentityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerIdentityScalarFieldEnum | Prisma.CustomerIdentityScalarFieldEnum[];
};
export type CustomerIdentityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerIdentitySelect<ExtArgs> | null;
    omit?: Prisma.CustomerIdentityOmit<ExtArgs> | null;
    include?: Prisma.CustomerIdentityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerIdentityCreateInput, Prisma.CustomerIdentityUncheckedCreateInput>;
};
export type CustomerIdentityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomerIdentityCreateManyInput | Prisma.CustomerIdentityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomerIdentityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerIdentitySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerIdentityOmit<ExtArgs> | null;
    data: Prisma.CustomerIdentityCreateManyInput | Prisma.CustomerIdentityCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CustomerIdentityIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CustomerIdentityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerIdentitySelect<ExtArgs> | null;
    omit?: Prisma.CustomerIdentityOmit<ExtArgs> | null;
    include?: Prisma.CustomerIdentityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerIdentityUpdateInput, Prisma.CustomerIdentityUncheckedUpdateInput>;
    where: Prisma.CustomerIdentityWhereUniqueInput;
};
export type CustomerIdentityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomerIdentityUpdateManyMutationInput, Prisma.CustomerIdentityUncheckedUpdateManyInput>;
    where?: Prisma.CustomerIdentityWhereInput;
    limit?: number;
};
export type CustomerIdentityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerIdentitySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerIdentityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerIdentityUpdateManyMutationInput, Prisma.CustomerIdentityUncheckedUpdateManyInput>;
    where?: Prisma.CustomerIdentityWhereInput;
    limit?: number;
    include?: Prisma.CustomerIdentityIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CustomerIdentityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerIdentitySelect<ExtArgs> | null;
    omit?: Prisma.CustomerIdentityOmit<ExtArgs> | null;
    include?: Prisma.CustomerIdentityInclude<ExtArgs> | null;
    where: Prisma.CustomerIdentityWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerIdentityCreateInput, Prisma.CustomerIdentityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomerIdentityUpdateInput, Prisma.CustomerIdentityUncheckedUpdateInput>;
};
export type CustomerIdentityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerIdentitySelect<ExtArgs> | null;
    omit?: Prisma.CustomerIdentityOmit<ExtArgs> | null;
    include?: Prisma.CustomerIdentityInclude<ExtArgs> | null;
    where: Prisma.CustomerIdentityWhereUniqueInput;
};
export type CustomerIdentityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerIdentityWhereInput;
    limit?: number;
};
export type CustomerIdentityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerIdentitySelect<ExtArgs> | null;
    omit?: Prisma.CustomerIdentityOmit<ExtArgs> | null;
    include?: Prisma.CustomerIdentityInclude<ExtArgs> | null;
};
