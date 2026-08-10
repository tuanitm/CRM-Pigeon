import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AdminUserModel = runtime.Types.Result.DefaultSelection<Prisma.$AdminUserPayload>;
export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null;
    _min: AdminUserMinAggregateOutputType | null;
    _max: AdminUserMaxAggregateOutputType | null;
};
export type AdminUserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    fullName: string | null;
    roleId: string | null;
    isActive: boolean | null;
    lastLoginAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AdminUserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    fullName: string | null;
    roleId: string | null;
    isActive: boolean | null;
    lastLoginAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AdminUserCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    fullName: number;
    roleId: number;
    isActive: number;
    lastLoginAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AdminUserMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    fullName?: true;
    roleId?: true;
    isActive?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AdminUserMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    fullName?: true;
    roleId?: true;
    isActive?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AdminUserCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    fullName?: true;
    roleId?: true;
    isActive?: true;
    lastLoginAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AdminUserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminUserWhereInput;
    orderBy?: Prisma.AdminUserOrderByWithRelationInput | Prisma.AdminUserOrderByWithRelationInput[];
    cursor?: Prisma.AdminUserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdminUserCountAggregateInputType;
    _min?: AdminUserMinAggregateInputType;
    _max?: AdminUserMaxAggregateInputType;
};
export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
    [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdminUser[P]> : Prisma.GetScalarType<T[P], AggregateAdminUser[P]>;
};
export type AdminUserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminUserWhereInput;
    orderBy?: Prisma.AdminUserOrderByWithAggregationInput | Prisma.AdminUserOrderByWithAggregationInput[];
    by: Prisma.AdminUserScalarFieldEnum[] | Prisma.AdminUserScalarFieldEnum;
    having?: Prisma.AdminUserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminUserCountAggregateInputType | true;
    _min?: AdminUserMinAggregateInputType;
    _max?: AdminUserMaxAggregateInputType;
};
export type AdminUserGroupByOutputType = {
    id: string;
    email: string;
    passwordHash: string;
    fullName: string;
    roleId: string;
    isActive: boolean;
    lastLoginAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AdminUserCountAggregateOutputType | null;
    _min: AdminUserMinAggregateOutputType | null;
    _max: AdminUserMaxAggregateOutputType | null;
};
export type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminUserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminUserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminUserGroupByOutputType[P]>;
}>>;
export type AdminUserWhereInput = {
    AND?: Prisma.AdminUserWhereInput | Prisma.AdminUserWhereInput[];
    OR?: Prisma.AdminUserWhereInput[];
    NOT?: Prisma.AdminUserWhereInput | Prisma.AdminUserWhereInput[];
    id?: Prisma.UuidFilter<"AdminUser"> | string;
    email?: Prisma.StringFilter<"AdminUser"> | string;
    passwordHash?: Prisma.StringFilter<"AdminUser"> | string;
    fullName?: Prisma.StringFilter<"AdminUser"> | string;
    roleId?: Prisma.UuidFilter<"AdminUser"> | string;
    isActive?: Prisma.BoolFilter<"AdminUser"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"AdminUser"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdminUser"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdminUser"> | Date | string;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
    audit_log?: Prisma.AuditLogListRelationFilter;
    dsr_request?: Prisma.Dsr_requestListRelationFilter;
    data_hubs?: Prisma.DataHubListRelationFilter;
    dynamic_actions?: Prisma.DynamicActionListRelationFilter;
    zaloOAs?: Prisma.ZaloOAListRelationFilter;
    zaloMiniApps?: Prisma.ZaloMiniAppListRelationFilter;
};
export type AdminUserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    role?: Prisma.RoleOrderByWithRelationInput;
    audit_log?: Prisma.AuditLogOrderByRelationAggregateInput;
    dsr_request?: Prisma.dsr_requestOrderByRelationAggregateInput;
    data_hubs?: Prisma.DataHubOrderByRelationAggregateInput;
    dynamic_actions?: Prisma.DynamicActionOrderByRelationAggregateInput;
    zaloOAs?: Prisma.ZaloOAOrderByRelationAggregateInput;
    zaloMiniApps?: Prisma.ZaloMiniAppOrderByRelationAggregateInput;
};
export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.AdminUserWhereInput | Prisma.AdminUserWhereInput[];
    OR?: Prisma.AdminUserWhereInput[];
    NOT?: Prisma.AdminUserWhereInput | Prisma.AdminUserWhereInput[];
    passwordHash?: Prisma.StringFilter<"AdminUser"> | string;
    fullName?: Prisma.StringFilter<"AdminUser"> | string;
    roleId?: Prisma.UuidFilter<"AdminUser"> | string;
    isActive?: Prisma.BoolFilter<"AdminUser"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"AdminUser"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdminUser"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdminUser"> | Date | string;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.RoleWhereInput>;
    audit_log?: Prisma.AuditLogListRelationFilter;
    dsr_request?: Prisma.Dsr_requestListRelationFilter;
    data_hubs?: Prisma.DataHubListRelationFilter;
    dynamic_actions?: Prisma.DynamicActionListRelationFilter;
    zaloOAs?: Prisma.ZaloOAListRelationFilter;
    zaloMiniApps?: Prisma.ZaloMiniAppListRelationFilter;
}, "id" | "email">;
export type AdminUserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AdminUserCountOrderByAggregateInput;
    _max?: Prisma.AdminUserMaxOrderByAggregateInput;
    _min?: Prisma.AdminUserMinOrderByAggregateInput;
};
export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdminUserScalarWhereWithAggregatesInput | Prisma.AdminUserScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdminUserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdminUserScalarWhereWithAggregatesInput | Prisma.AdminUserScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AdminUser"> | string;
    email?: Prisma.StringWithAggregatesFilter<"AdminUser"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"AdminUser"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"AdminUser"> | string;
    roleId?: Prisma.UuidWithAggregatesFilter<"AdminUser"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"AdminUser"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AdminUser"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AdminUser"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AdminUser"> | Date | string;
};
export type AdminUserCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    role: Prisma.RoleCreateNestedOneWithoutAdminUsersInput;
    audit_log?: Prisma.AuditLogCreateNestedManyWithoutAdmin_userInput;
    dsr_request?: Prisma.dsr_requestCreateNestedManyWithoutAdmin_userInput;
    data_hubs?: Prisma.DataHubCreateNestedManyWithoutAdminUserInput;
    dynamic_actions?: Prisma.DynamicActionCreateNestedManyWithoutAdminUserInput;
    zaloOAs?: Prisma.ZaloOACreateNestedManyWithoutAdminUserInput;
    zaloMiniApps?: Prisma.ZaloMiniAppCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserUncheckedCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    roleId: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    audit_log?: Prisma.AuditLogUncheckedCreateNestedManyWithoutAdmin_userInput;
    dsr_request?: Prisma.dsr_requestUncheckedCreateNestedManyWithoutAdmin_userInput;
    data_hubs?: Prisma.DataHubUncheckedCreateNestedManyWithoutAdminUserInput;
    dynamic_actions?: Prisma.DynamicActionUncheckedCreateNestedManyWithoutAdminUserInput;
    zaloOAs?: Prisma.ZaloOAUncheckedCreateNestedManyWithoutAdminUserInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUncheckedCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.RoleUpdateOneRequiredWithoutAdminUsersNestedInput;
    audit_log?: Prisma.AuditLogUpdateManyWithoutAdmin_userNestedInput;
    dsr_request?: Prisma.dsr_requestUpdateManyWithoutAdmin_userNestedInput;
    data_hubs?: Prisma.DataHubUpdateManyWithoutAdminUserNestedInput;
    dynamic_actions?: Prisma.DynamicActionUpdateManyWithoutAdminUserNestedInput;
    zaloOAs?: Prisma.ZaloOAUpdateManyWithoutAdminUserNestedInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: Prisma.AuditLogUncheckedUpdateManyWithoutAdmin_userNestedInput;
    dsr_request?: Prisma.dsr_requestUncheckedUpdateManyWithoutAdmin_userNestedInput;
    data_hubs?: Prisma.DataHubUncheckedUpdateManyWithoutAdminUserNestedInput;
    dynamic_actions?: Prisma.DynamicActionUncheckedUpdateManyWithoutAdminUserNestedInput;
    zaloOAs?: Prisma.ZaloOAUncheckedUpdateManyWithoutAdminUserNestedInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUncheckedUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserCreateManyInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    roleId: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdminUserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminUserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminUserListRelationFilter = {
    every?: Prisma.AdminUserWhereInput;
    some?: Prisma.AdminUserWhereInput;
    none?: Prisma.AdminUserWhereInput;
};
export type AdminUserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AdminUserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdminUserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdminUserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    lastLoginAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AdminUserNullableScalarRelationFilter = {
    is?: Prisma.AdminUserWhereInput | null;
    isNot?: Prisma.AdminUserWhereInput | null;
};
export type AdminUserCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutRoleInput, Prisma.AdminUserUncheckedCreateWithoutRoleInput> | Prisma.AdminUserCreateWithoutRoleInput[] | Prisma.AdminUserUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutRoleInput | Prisma.AdminUserCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.AdminUserCreateManyRoleInputEnvelope;
    connect?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
};
export type AdminUserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutRoleInput, Prisma.AdminUserUncheckedCreateWithoutRoleInput> | Prisma.AdminUserCreateWithoutRoleInput[] | Prisma.AdminUserUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutRoleInput | Prisma.AdminUserCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.AdminUserCreateManyRoleInputEnvelope;
    connect?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
};
export type AdminUserUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutRoleInput, Prisma.AdminUserUncheckedCreateWithoutRoleInput> | Prisma.AdminUserCreateWithoutRoleInput[] | Prisma.AdminUserUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutRoleInput | Prisma.AdminUserCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.AdminUserUpsertWithWhereUniqueWithoutRoleInput | Prisma.AdminUserUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.AdminUserCreateManyRoleInputEnvelope;
    set?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    disconnect?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    delete?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    connect?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    update?: Prisma.AdminUserUpdateWithWhereUniqueWithoutRoleInput | Prisma.AdminUserUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.AdminUserUpdateManyWithWhereWithoutRoleInput | Prisma.AdminUserUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.AdminUserScalarWhereInput | Prisma.AdminUserScalarWhereInput[];
};
export type AdminUserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutRoleInput, Prisma.AdminUserUncheckedCreateWithoutRoleInput> | Prisma.AdminUserCreateWithoutRoleInput[] | Prisma.AdminUserUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutRoleInput | Prisma.AdminUserCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.AdminUserUpsertWithWhereUniqueWithoutRoleInput | Prisma.AdminUserUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.AdminUserCreateManyRoleInputEnvelope;
    set?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    disconnect?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    delete?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    connect?: Prisma.AdminUserWhereUniqueInput | Prisma.AdminUserWhereUniqueInput[];
    update?: Prisma.AdminUserUpdateWithWhereUniqueWithoutRoleInput | Prisma.AdminUserUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.AdminUserUpdateManyWithWhereWithoutRoleInput | Prisma.AdminUserUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.AdminUserScalarWhereInput | Prisma.AdminUserScalarWhereInput[];
};
export type AdminUserCreateNestedOneWithoutAudit_logInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutAudit_logInput, Prisma.AdminUserUncheckedCreateWithoutAudit_logInput>;
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutAudit_logInput;
    connect?: Prisma.AdminUserWhereUniqueInput;
};
export type AdminUserUpdateOneWithoutAudit_logNestedInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutAudit_logInput, Prisma.AdminUserUncheckedCreateWithoutAudit_logInput>;
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutAudit_logInput;
    upsert?: Prisma.AdminUserUpsertWithoutAudit_logInput;
    disconnect?: Prisma.AdminUserWhereInput | boolean;
    delete?: Prisma.AdminUserWhereInput | boolean;
    connect?: Prisma.AdminUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUserUpdateToOneWithWhereWithoutAudit_logInput, Prisma.AdminUserUpdateWithoutAudit_logInput>, Prisma.AdminUserUncheckedUpdateWithoutAudit_logInput>;
};
export type AdminUserCreateNestedOneWithoutDsr_requestInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutDsr_requestInput, Prisma.AdminUserUncheckedCreateWithoutDsr_requestInput>;
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutDsr_requestInput;
    connect?: Prisma.AdminUserWhereUniqueInput;
};
export type AdminUserUpdateOneWithoutDsr_requestNestedInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutDsr_requestInput, Prisma.AdminUserUncheckedCreateWithoutDsr_requestInput>;
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutDsr_requestInput;
    upsert?: Prisma.AdminUserUpsertWithoutDsr_requestInput;
    disconnect?: Prisma.AdminUserWhereInput | boolean;
    delete?: Prisma.AdminUserWhereInput | boolean;
    connect?: Prisma.AdminUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUserUpdateToOneWithWhereWithoutDsr_requestInput, Prisma.AdminUserUpdateWithoutDsr_requestInput>, Prisma.AdminUserUncheckedUpdateWithoutDsr_requestInput>;
};
export type AdminUserCreateNestedOneWithoutData_hubsInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutData_hubsInput, Prisma.AdminUserUncheckedCreateWithoutData_hubsInput>;
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutData_hubsInput;
    connect?: Prisma.AdminUserWhereUniqueInput;
};
export type AdminUserUpdateOneWithoutData_hubsNestedInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutData_hubsInput, Prisma.AdminUserUncheckedCreateWithoutData_hubsInput>;
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutData_hubsInput;
    upsert?: Prisma.AdminUserUpsertWithoutData_hubsInput;
    disconnect?: Prisma.AdminUserWhereInput | boolean;
    delete?: Prisma.AdminUserWhereInput | boolean;
    connect?: Prisma.AdminUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUserUpdateToOneWithWhereWithoutData_hubsInput, Prisma.AdminUserUpdateWithoutData_hubsInput>, Prisma.AdminUserUncheckedUpdateWithoutData_hubsInput>;
};
export type AdminUserCreateNestedOneWithoutDynamic_actionsInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutDynamic_actionsInput, Prisma.AdminUserUncheckedCreateWithoutDynamic_actionsInput>;
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutDynamic_actionsInput;
    connect?: Prisma.AdminUserWhereUniqueInput;
};
export type AdminUserUpdateOneWithoutDynamic_actionsNestedInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutDynamic_actionsInput, Prisma.AdminUserUncheckedCreateWithoutDynamic_actionsInput>;
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutDynamic_actionsInput;
    upsert?: Prisma.AdminUserUpsertWithoutDynamic_actionsInput;
    disconnect?: Prisma.AdminUserWhereInput | boolean;
    delete?: Prisma.AdminUserWhereInput | boolean;
    connect?: Prisma.AdminUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUserUpdateToOneWithWhereWithoutDynamic_actionsInput, Prisma.AdminUserUpdateWithoutDynamic_actionsInput>, Prisma.AdminUserUncheckedUpdateWithoutDynamic_actionsInput>;
};
export type AdminUserCreateNestedOneWithoutZaloOAsInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutZaloOAsInput, Prisma.AdminUserUncheckedCreateWithoutZaloOAsInput>;
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutZaloOAsInput;
    connect?: Prisma.AdminUserWhereUniqueInput;
};
export type AdminUserUpdateOneWithoutZaloOAsNestedInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutZaloOAsInput, Prisma.AdminUserUncheckedCreateWithoutZaloOAsInput>;
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutZaloOAsInput;
    upsert?: Prisma.AdminUserUpsertWithoutZaloOAsInput;
    disconnect?: Prisma.AdminUserWhereInput | boolean;
    delete?: Prisma.AdminUserWhereInput | boolean;
    connect?: Prisma.AdminUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUserUpdateToOneWithWhereWithoutZaloOAsInput, Prisma.AdminUserUpdateWithoutZaloOAsInput>, Prisma.AdminUserUncheckedUpdateWithoutZaloOAsInput>;
};
export type AdminUserCreateNestedOneWithoutZaloMiniAppsInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutZaloMiniAppsInput, Prisma.AdminUserUncheckedCreateWithoutZaloMiniAppsInput>;
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutZaloMiniAppsInput;
    connect?: Prisma.AdminUserWhereUniqueInput;
};
export type AdminUserUpdateOneWithoutZaloMiniAppsNestedInput = {
    create?: Prisma.XOR<Prisma.AdminUserCreateWithoutZaloMiniAppsInput, Prisma.AdminUserUncheckedCreateWithoutZaloMiniAppsInput>;
    connectOrCreate?: Prisma.AdminUserCreateOrConnectWithoutZaloMiniAppsInput;
    upsert?: Prisma.AdminUserUpsertWithoutZaloMiniAppsInput;
    disconnect?: Prisma.AdminUserWhereInput | boolean;
    delete?: Prisma.AdminUserWhereInput | boolean;
    connect?: Prisma.AdminUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminUserUpdateToOneWithWhereWithoutZaloMiniAppsInput, Prisma.AdminUserUpdateWithoutZaloMiniAppsInput>, Prisma.AdminUserUncheckedUpdateWithoutZaloMiniAppsInput>;
};
export type AdminUserCreateWithoutRoleInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    audit_log?: Prisma.AuditLogCreateNestedManyWithoutAdmin_userInput;
    dsr_request?: Prisma.dsr_requestCreateNestedManyWithoutAdmin_userInput;
    data_hubs?: Prisma.DataHubCreateNestedManyWithoutAdminUserInput;
    dynamic_actions?: Prisma.DynamicActionCreateNestedManyWithoutAdminUserInput;
    zaloOAs?: Prisma.ZaloOACreateNestedManyWithoutAdminUserInput;
    zaloMiniApps?: Prisma.ZaloMiniAppCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserUncheckedCreateWithoutRoleInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    audit_log?: Prisma.AuditLogUncheckedCreateNestedManyWithoutAdmin_userInput;
    dsr_request?: Prisma.dsr_requestUncheckedCreateNestedManyWithoutAdmin_userInput;
    data_hubs?: Prisma.DataHubUncheckedCreateNestedManyWithoutAdminUserInput;
    dynamic_actions?: Prisma.DynamicActionUncheckedCreateNestedManyWithoutAdminUserInput;
    zaloOAs?: Prisma.ZaloOAUncheckedCreateNestedManyWithoutAdminUserInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUncheckedCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserCreateOrConnectWithoutRoleInput = {
    where: Prisma.AdminUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutRoleInput, Prisma.AdminUserUncheckedCreateWithoutRoleInput>;
};
export type AdminUserCreateManyRoleInputEnvelope = {
    data: Prisma.AdminUserCreateManyRoleInput | Prisma.AdminUserCreateManyRoleInput[];
    skipDuplicates?: boolean;
};
export type AdminUserUpsertWithWhereUniqueWithoutRoleInput = {
    where: Prisma.AdminUserWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdminUserUpdateWithoutRoleInput, Prisma.AdminUserUncheckedUpdateWithoutRoleInput>;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutRoleInput, Prisma.AdminUserUncheckedCreateWithoutRoleInput>;
};
export type AdminUserUpdateWithWhereUniqueWithoutRoleInput = {
    where: Prisma.AdminUserWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdminUserUpdateWithoutRoleInput, Prisma.AdminUserUncheckedUpdateWithoutRoleInput>;
};
export type AdminUserUpdateManyWithWhereWithoutRoleInput = {
    where: Prisma.AdminUserScalarWhereInput;
    data: Prisma.XOR<Prisma.AdminUserUpdateManyMutationInput, Prisma.AdminUserUncheckedUpdateManyWithoutRoleInput>;
};
export type AdminUserScalarWhereInput = {
    AND?: Prisma.AdminUserScalarWhereInput | Prisma.AdminUserScalarWhereInput[];
    OR?: Prisma.AdminUserScalarWhereInput[];
    NOT?: Prisma.AdminUserScalarWhereInput | Prisma.AdminUserScalarWhereInput[];
    id?: Prisma.UuidFilter<"AdminUser"> | string;
    email?: Prisma.StringFilter<"AdminUser"> | string;
    passwordHash?: Prisma.StringFilter<"AdminUser"> | string;
    fullName?: Prisma.StringFilter<"AdminUser"> | string;
    roleId?: Prisma.UuidFilter<"AdminUser"> | string;
    isActive?: Prisma.BoolFilter<"AdminUser"> | boolean;
    lastLoginAt?: Prisma.DateTimeNullableFilter<"AdminUser"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdminUser"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdminUser"> | Date | string;
};
export type AdminUserCreateWithoutAudit_logInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    role: Prisma.RoleCreateNestedOneWithoutAdminUsersInput;
    dsr_request?: Prisma.dsr_requestCreateNestedManyWithoutAdmin_userInput;
    data_hubs?: Prisma.DataHubCreateNestedManyWithoutAdminUserInput;
    dynamic_actions?: Prisma.DynamicActionCreateNestedManyWithoutAdminUserInput;
    zaloOAs?: Prisma.ZaloOACreateNestedManyWithoutAdminUserInput;
    zaloMiniApps?: Prisma.ZaloMiniAppCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserUncheckedCreateWithoutAudit_logInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    roleId: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dsr_request?: Prisma.dsr_requestUncheckedCreateNestedManyWithoutAdmin_userInput;
    data_hubs?: Prisma.DataHubUncheckedCreateNestedManyWithoutAdminUserInput;
    dynamic_actions?: Prisma.DynamicActionUncheckedCreateNestedManyWithoutAdminUserInput;
    zaloOAs?: Prisma.ZaloOAUncheckedCreateNestedManyWithoutAdminUserInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUncheckedCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserCreateOrConnectWithoutAudit_logInput = {
    where: Prisma.AdminUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutAudit_logInput, Prisma.AdminUserUncheckedCreateWithoutAudit_logInput>;
};
export type AdminUserUpsertWithoutAudit_logInput = {
    update: Prisma.XOR<Prisma.AdminUserUpdateWithoutAudit_logInput, Prisma.AdminUserUncheckedUpdateWithoutAudit_logInput>;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutAudit_logInput, Prisma.AdminUserUncheckedCreateWithoutAudit_logInput>;
    where?: Prisma.AdminUserWhereInput;
};
export type AdminUserUpdateToOneWithWhereWithoutAudit_logInput = {
    where?: Prisma.AdminUserWhereInput;
    data: Prisma.XOR<Prisma.AdminUserUpdateWithoutAudit_logInput, Prisma.AdminUserUncheckedUpdateWithoutAudit_logInput>;
};
export type AdminUserUpdateWithoutAudit_logInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.RoleUpdateOneRequiredWithoutAdminUsersNestedInput;
    dsr_request?: Prisma.dsr_requestUpdateManyWithoutAdmin_userNestedInput;
    data_hubs?: Prisma.DataHubUpdateManyWithoutAdminUserNestedInput;
    dynamic_actions?: Prisma.DynamicActionUpdateManyWithoutAdminUserNestedInput;
    zaloOAs?: Prisma.ZaloOAUpdateManyWithoutAdminUserNestedInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserUncheckedUpdateWithoutAudit_logInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dsr_request?: Prisma.dsr_requestUncheckedUpdateManyWithoutAdmin_userNestedInput;
    data_hubs?: Prisma.DataHubUncheckedUpdateManyWithoutAdminUserNestedInput;
    dynamic_actions?: Prisma.DynamicActionUncheckedUpdateManyWithoutAdminUserNestedInput;
    zaloOAs?: Prisma.ZaloOAUncheckedUpdateManyWithoutAdminUserNestedInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUncheckedUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserCreateWithoutDsr_requestInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    role: Prisma.RoleCreateNestedOneWithoutAdminUsersInput;
    audit_log?: Prisma.AuditLogCreateNestedManyWithoutAdmin_userInput;
    data_hubs?: Prisma.DataHubCreateNestedManyWithoutAdminUserInput;
    dynamic_actions?: Prisma.DynamicActionCreateNestedManyWithoutAdminUserInput;
    zaloOAs?: Prisma.ZaloOACreateNestedManyWithoutAdminUserInput;
    zaloMiniApps?: Prisma.ZaloMiniAppCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserUncheckedCreateWithoutDsr_requestInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    roleId: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    audit_log?: Prisma.AuditLogUncheckedCreateNestedManyWithoutAdmin_userInput;
    data_hubs?: Prisma.DataHubUncheckedCreateNestedManyWithoutAdminUserInput;
    dynamic_actions?: Prisma.DynamicActionUncheckedCreateNestedManyWithoutAdminUserInput;
    zaloOAs?: Prisma.ZaloOAUncheckedCreateNestedManyWithoutAdminUserInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUncheckedCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserCreateOrConnectWithoutDsr_requestInput = {
    where: Prisma.AdminUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutDsr_requestInput, Prisma.AdminUserUncheckedCreateWithoutDsr_requestInput>;
};
export type AdminUserUpsertWithoutDsr_requestInput = {
    update: Prisma.XOR<Prisma.AdminUserUpdateWithoutDsr_requestInput, Prisma.AdminUserUncheckedUpdateWithoutDsr_requestInput>;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutDsr_requestInput, Prisma.AdminUserUncheckedCreateWithoutDsr_requestInput>;
    where?: Prisma.AdminUserWhereInput;
};
export type AdminUserUpdateToOneWithWhereWithoutDsr_requestInput = {
    where?: Prisma.AdminUserWhereInput;
    data: Prisma.XOR<Prisma.AdminUserUpdateWithoutDsr_requestInput, Prisma.AdminUserUncheckedUpdateWithoutDsr_requestInput>;
};
export type AdminUserUpdateWithoutDsr_requestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.RoleUpdateOneRequiredWithoutAdminUsersNestedInput;
    audit_log?: Prisma.AuditLogUpdateManyWithoutAdmin_userNestedInput;
    data_hubs?: Prisma.DataHubUpdateManyWithoutAdminUserNestedInput;
    dynamic_actions?: Prisma.DynamicActionUpdateManyWithoutAdminUserNestedInput;
    zaloOAs?: Prisma.ZaloOAUpdateManyWithoutAdminUserNestedInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserUncheckedUpdateWithoutDsr_requestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: Prisma.AuditLogUncheckedUpdateManyWithoutAdmin_userNestedInput;
    data_hubs?: Prisma.DataHubUncheckedUpdateManyWithoutAdminUserNestedInput;
    dynamic_actions?: Prisma.DynamicActionUncheckedUpdateManyWithoutAdminUserNestedInput;
    zaloOAs?: Prisma.ZaloOAUncheckedUpdateManyWithoutAdminUserNestedInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUncheckedUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserCreateWithoutData_hubsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    role: Prisma.RoleCreateNestedOneWithoutAdminUsersInput;
    audit_log?: Prisma.AuditLogCreateNestedManyWithoutAdmin_userInput;
    dsr_request?: Prisma.dsr_requestCreateNestedManyWithoutAdmin_userInput;
    dynamic_actions?: Prisma.DynamicActionCreateNestedManyWithoutAdminUserInput;
    zaloOAs?: Prisma.ZaloOACreateNestedManyWithoutAdminUserInput;
    zaloMiniApps?: Prisma.ZaloMiniAppCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserUncheckedCreateWithoutData_hubsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    roleId: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    audit_log?: Prisma.AuditLogUncheckedCreateNestedManyWithoutAdmin_userInput;
    dsr_request?: Prisma.dsr_requestUncheckedCreateNestedManyWithoutAdmin_userInput;
    dynamic_actions?: Prisma.DynamicActionUncheckedCreateNestedManyWithoutAdminUserInput;
    zaloOAs?: Prisma.ZaloOAUncheckedCreateNestedManyWithoutAdminUserInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUncheckedCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserCreateOrConnectWithoutData_hubsInput = {
    where: Prisma.AdminUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutData_hubsInput, Prisma.AdminUserUncheckedCreateWithoutData_hubsInput>;
};
export type AdminUserUpsertWithoutData_hubsInput = {
    update: Prisma.XOR<Prisma.AdminUserUpdateWithoutData_hubsInput, Prisma.AdminUserUncheckedUpdateWithoutData_hubsInput>;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutData_hubsInput, Prisma.AdminUserUncheckedCreateWithoutData_hubsInput>;
    where?: Prisma.AdminUserWhereInput;
};
export type AdminUserUpdateToOneWithWhereWithoutData_hubsInput = {
    where?: Prisma.AdminUserWhereInput;
    data: Prisma.XOR<Prisma.AdminUserUpdateWithoutData_hubsInput, Prisma.AdminUserUncheckedUpdateWithoutData_hubsInput>;
};
export type AdminUserUpdateWithoutData_hubsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.RoleUpdateOneRequiredWithoutAdminUsersNestedInput;
    audit_log?: Prisma.AuditLogUpdateManyWithoutAdmin_userNestedInput;
    dsr_request?: Prisma.dsr_requestUpdateManyWithoutAdmin_userNestedInput;
    dynamic_actions?: Prisma.DynamicActionUpdateManyWithoutAdminUserNestedInput;
    zaloOAs?: Prisma.ZaloOAUpdateManyWithoutAdminUserNestedInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserUncheckedUpdateWithoutData_hubsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: Prisma.AuditLogUncheckedUpdateManyWithoutAdmin_userNestedInput;
    dsr_request?: Prisma.dsr_requestUncheckedUpdateManyWithoutAdmin_userNestedInput;
    dynamic_actions?: Prisma.DynamicActionUncheckedUpdateManyWithoutAdminUserNestedInput;
    zaloOAs?: Prisma.ZaloOAUncheckedUpdateManyWithoutAdminUserNestedInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUncheckedUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserCreateWithoutDynamic_actionsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    role: Prisma.RoleCreateNestedOneWithoutAdminUsersInput;
    audit_log?: Prisma.AuditLogCreateNestedManyWithoutAdmin_userInput;
    dsr_request?: Prisma.dsr_requestCreateNestedManyWithoutAdmin_userInput;
    data_hubs?: Prisma.DataHubCreateNestedManyWithoutAdminUserInput;
    zaloOAs?: Prisma.ZaloOACreateNestedManyWithoutAdminUserInput;
    zaloMiniApps?: Prisma.ZaloMiniAppCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserUncheckedCreateWithoutDynamic_actionsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    roleId: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    audit_log?: Prisma.AuditLogUncheckedCreateNestedManyWithoutAdmin_userInput;
    dsr_request?: Prisma.dsr_requestUncheckedCreateNestedManyWithoutAdmin_userInput;
    data_hubs?: Prisma.DataHubUncheckedCreateNestedManyWithoutAdminUserInput;
    zaloOAs?: Prisma.ZaloOAUncheckedCreateNestedManyWithoutAdminUserInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUncheckedCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserCreateOrConnectWithoutDynamic_actionsInput = {
    where: Prisma.AdminUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutDynamic_actionsInput, Prisma.AdminUserUncheckedCreateWithoutDynamic_actionsInput>;
};
export type AdminUserUpsertWithoutDynamic_actionsInput = {
    update: Prisma.XOR<Prisma.AdminUserUpdateWithoutDynamic_actionsInput, Prisma.AdminUserUncheckedUpdateWithoutDynamic_actionsInput>;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutDynamic_actionsInput, Prisma.AdminUserUncheckedCreateWithoutDynamic_actionsInput>;
    where?: Prisma.AdminUserWhereInput;
};
export type AdminUserUpdateToOneWithWhereWithoutDynamic_actionsInput = {
    where?: Prisma.AdminUserWhereInput;
    data: Prisma.XOR<Prisma.AdminUserUpdateWithoutDynamic_actionsInput, Prisma.AdminUserUncheckedUpdateWithoutDynamic_actionsInput>;
};
export type AdminUserUpdateWithoutDynamic_actionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.RoleUpdateOneRequiredWithoutAdminUsersNestedInput;
    audit_log?: Prisma.AuditLogUpdateManyWithoutAdmin_userNestedInput;
    dsr_request?: Prisma.dsr_requestUpdateManyWithoutAdmin_userNestedInput;
    data_hubs?: Prisma.DataHubUpdateManyWithoutAdminUserNestedInput;
    zaloOAs?: Prisma.ZaloOAUpdateManyWithoutAdminUserNestedInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserUncheckedUpdateWithoutDynamic_actionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: Prisma.AuditLogUncheckedUpdateManyWithoutAdmin_userNestedInput;
    dsr_request?: Prisma.dsr_requestUncheckedUpdateManyWithoutAdmin_userNestedInput;
    data_hubs?: Prisma.DataHubUncheckedUpdateManyWithoutAdminUserNestedInput;
    zaloOAs?: Prisma.ZaloOAUncheckedUpdateManyWithoutAdminUserNestedInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUncheckedUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserCreateWithoutZaloOAsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    role: Prisma.RoleCreateNestedOneWithoutAdminUsersInput;
    audit_log?: Prisma.AuditLogCreateNestedManyWithoutAdmin_userInput;
    dsr_request?: Prisma.dsr_requestCreateNestedManyWithoutAdmin_userInput;
    data_hubs?: Prisma.DataHubCreateNestedManyWithoutAdminUserInput;
    dynamic_actions?: Prisma.DynamicActionCreateNestedManyWithoutAdminUserInput;
    zaloMiniApps?: Prisma.ZaloMiniAppCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserUncheckedCreateWithoutZaloOAsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    roleId: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    audit_log?: Prisma.AuditLogUncheckedCreateNestedManyWithoutAdmin_userInput;
    dsr_request?: Prisma.dsr_requestUncheckedCreateNestedManyWithoutAdmin_userInput;
    data_hubs?: Prisma.DataHubUncheckedCreateNestedManyWithoutAdminUserInput;
    dynamic_actions?: Prisma.DynamicActionUncheckedCreateNestedManyWithoutAdminUserInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUncheckedCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserCreateOrConnectWithoutZaloOAsInput = {
    where: Prisma.AdminUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutZaloOAsInput, Prisma.AdminUserUncheckedCreateWithoutZaloOAsInput>;
};
export type AdminUserUpsertWithoutZaloOAsInput = {
    update: Prisma.XOR<Prisma.AdminUserUpdateWithoutZaloOAsInput, Prisma.AdminUserUncheckedUpdateWithoutZaloOAsInput>;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutZaloOAsInput, Prisma.AdminUserUncheckedCreateWithoutZaloOAsInput>;
    where?: Prisma.AdminUserWhereInput;
};
export type AdminUserUpdateToOneWithWhereWithoutZaloOAsInput = {
    where?: Prisma.AdminUserWhereInput;
    data: Prisma.XOR<Prisma.AdminUserUpdateWithoutZaloOAsInput, Prisma.AdminUserUncheckedUpdateWithoutZaloOAsInput>;
};
export type AdminUserUpdateWithoutZaloOAsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.RoleUpdateOneRequiredWithoutAdminUsersNestedInput;
    audit_log?: Prisma.AuditLogUpdateManyWithoutAdmin_userNestedInput;
    dsr_request?: Prisma.dsr_requestUpdateManyWithoutAdmin_userNestedInput;
    data_hubs?: Prisma.DataHubUpdateManyWithoutAdminUserNestedInput;
    dynamic_actions?: Prisma.DynamicActionUpdateManyWithoutAdminUserNestedInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserUncheckedUpdateWithoutZaloOAsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: Prisma.AuditLogUncheckedUpdateManyWithoutAdmin_userNestedInput;
    dsr_request?: Prisma.dsr_requestUncheckedUpdateManyWithoutAdmin_userNestedInput;
    data_hubs?: Prisma.DataHubUncheckedUpdateManyWithoutAdminUserNestedInput;
    dynamic_actions?: Prisma.DynamicActionUncheckedUpdateManyWithoutAdminUserNestedInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUncheckedUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserCreateWithoutZaloMiniAppsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    role: Prisma.RoleCreateNestedOneWithoutAdminUsersInput;
    audit_log?: Prisma.AuditLogCreateNestedManyWithoutAdmin_userInput;
    dsr_request?: Prisma.dsr_requestCreateNestedManyWithoutAdmin_userInput;
    data_hubs?: Prisma.DataHubCreateNestedManyWithoutAdminUserInput;
    dynamic_actions?: Prisma.DynamicActionCreateNestedManyWithoutAdminUserInput;
    zaloOAs?: Prisma.ZaloOACreateNestedManyWithoutAdminUserInput;
};
export type AdminUserUncheckedCreateWithoutZaloMiniAppsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    roleId: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    audit_log?: Prisma.AuditLogUncheckedCreateNestedManyWithoutAdmin_userInput;
    dsr_request?: Prisma.dsr_requestUncheckedCreateNestedManyWithoutAdmin_userInput;
    data_hubs?: Prisma.DataHubUncheckedCreateNestedManyWithoutAdminUserInput;
    dynamic_actions?: Prisma.DynamicActionUncheckedCreateNestedManyWithoutAdminUserInput;
    zaloOAs?: Prisma.ZaloOAUncheckedCreateNestedManyWithoutAdminUserInput;
};
export type AdminUserCreateOrConnectWithoutZaloMiniAppsInput = {
    where: Prisma.AdminUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutZaloMiniAppsInput, Prisma.AdminUserUncheckedCreateWithoutZaloMiniAppsInput>;
};
export type AdminUserUpsertWithoutZaloMiniAppsInput = {
    update: Prisma.XOR<Prisma.AdminUserUpdateWithoutZaloMiniAppsInput, Prisma.AdminUserUncheckedUpdateWithoutZaloMiniAppsInput>;
    create: Prisma.XOR<Prisma.AdminUserCreateWithoutZaloMiniAppsInput, Prisma.AdminUserUncheckedCreateWithoutZaloMiniAppsInput>;
    where?: Prisma.AdminUserWhereInput;
};
export type AdminUserUpdateToOneWithWhereWithoutZaloMiniAppsInput = {
    where?: Prisma.AdminUserWhereInput;
    data: Prisma.XOR<Prisma.AdminUserUpdateWithoutZaloMiniAppsInput, Prisma.AdminUserUncheckedUpdateWithoutZaloMiniAppsInput>;
};
export type AdminUserUpdateWithoutZaloMiniAppsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.RoleUpdateOneRequiredWithoutAdminUsersNestedInput;
    audit_log?: Prisma.AuditLogUpdateManyWithoutAdmin_userNestedInput;
    dsr_request?: Prisma.dsr_requestUpdateManyWithoutAdmin_userNestedInput;
    data_hubs?: Prisma.DataHubUpdateManyWithoutAdminUserNestedInput;
    dynamic_actions?: Prisma.DynamicActionUpdateManyWithoutAdminUserNestedInput;
    zaloOAs?: Prisma.ZaloOAUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserUncheckedUpdateWithoutZaloMiniAppsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: Prisma.AuditLogUncheckedUpdateManyWithoutAdmin_userNestedInput;
    dsr_request?: Prisma.dsr_requestUncheckedUpdateManyWithoutAdmin_userNestedInput;
    data_hubs?: Prisma.DataHubUncheckedUpdateManyWithoutAdminUserNestedInput;
    dynamic_actions?: Prisma.DynamicActionUncheckedUpdateManyWithoutAdminUserNestedInput;
    zaloOAs?: Prisma.ZaloOAUncheckedUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserCreateManyRoleInput = {
    id?: string;
    email: string;
    passwordHash: string;
    fullName: string;
    isActive?: boolean;
    lastLoginAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdminUserUpdateWithoutRoleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: Prisma.AuditLogUpdateManyWithoutAdmin_userNestedInput;
    dsr_request?: Prisma.dsr_requestUpdateManyWithoutAdmin_userNestedInput;
    data_hubs?: Prisma.DataHubUpdateManyWithoutAdminUserNestedInput;
    dynamic_actions?: Prisma.DynamicActionUpdateManyWithoutAdminUserNestedInput;
    zaloOAs?: Prisma.ZaloOAUpdateManyWithoutAdminUserNestedInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserUncheckedUpdateWithoutRoleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: Prisma.AuditLogUncheckedUpdateManyWithoutAdmin_userNestedInput;
    dsr_request?: Prisma.dsr_requestUncheckedUpdateManyWithoutAdmin_userNestedInput;
    data_hubs?: Prisma.DataHubUncheckedUpdateManyWithoutAdminUserNestedInput;
    dynamic_actions?: Prisma.DynamicActionUncheckedUpdateManyWithoutAdminUserNestedInput;
    zaloOAs?: Prisma.ZaloOAUncheckedUpdateManyWithoutAdminUserNestedInput;
    zaloMiniApps?: Prisma.ZaloMiniAppUncheckedUpdateManyWithoutAdminUserNestedInput;
};
export type AdminUserUncheckedUpdateManyWithoutRoleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastLoginAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminUserCountOutputType = {
    audit_log: number;
    dsr_request: number;
    data_hubs: number;
    dynamic_actions: number;
    zaloOAs: number;
    zaloMiniApps: number;
};
export type AdminUserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    audit_log?: boolean | AdminUserCountOutputTypeCountAudit_logArgs;
    dsr_request?: boolean | AdminUserCountOutputTypeCountDsr_requestArgs;
    data_hubs?: boolean | AdminUserCountOutputTypeCountData_hubsArgs;
    dynamic_actions?: boolean | AdminUserCountOutputTypeCountDynamic_actionsArgs;
    zaloOAs?: boolean | AdminUserCountOutputTypeCountZaloOAsArgs;
    zaloMiniApps?: boolean | AdminUserCountOutputTypeCountZaloMiniAppsArgs;
};
export type AdminUserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserCountOutputTypeSelect<ExtArgs> | null;
};
export type AdminUserCountOutputTypeCountAudit_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
export type AdminUserCountOutputTypeCountDsr_requestArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.dsr_requestWhereInput;
};
export type AdminUserCountOutputTypeCountData_hubsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DataHubWhereInput;
};
export type AdminUserCountOutputTypeCountDynamic_actionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DynamicActionWhereInput;
};
export type AdminUserCountOutputTypeCountZaloOAsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZaloOAWhereInput;
};
export type AdminUserCountOutputTypeCountZaloMiniAppsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZaloMiniAppWhereInput;
};
export type AdminUserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    fullName?: boolean;
    roleId?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
    audit_log?: boolean | Prisma.AdminUser$audit_logArgs<ExtArgs>;
    dsr_request?: boolean | Prisma.AdminUser$dsr_requestArgs<ExtArgs>;
    data_hubs?: boolean | Prisma.AdminUser$data_hubsArgs<ExtArgs>;
    dynamic_actions?: boolean | Prisma.AdminUser$dynamic_actionsArgs<ExtArgs>;
    zaloOAs?: boolean | Prisma.AdminUser$zaloOAsArgs<ExtArgs>;
    zaloMiniApps?: boolean | Prisma.AdminUser$zaloMiniAppsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminUserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminUser"]>;
export type AdminUserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    fullName?: boolean;
    roleId?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminUser"]>;
export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    fullName?: boolean;
    roleId?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminUser"]>;
export type AdminUserSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    fullName?: boolean;
    roleId?: boolean;
    isActive?: boolean;
    lastLoginAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AdminUserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "passwordHash" | "fullName" | "roleId" | "isActive" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>;
export type AdminUserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
    audit_log?: boolean | Prisma.AdminUser$audit_logArgs<ExtArgs>;
    dsr_request?: boolean | Prisma.AdminUser$dsr_requestArgs<ExtArgs>;
    data_hubs?: boolean | Prisma.AdminUser$data_hubsArgs<ExtArgs>;
    dynamic_actions?: boolean | Prisma.AdminUser$dynamic_actionsArgs<ExtArgs>;
    zaloOAs?: boolean | Prisma.AdminUser$zaloOAsArgs<ExtArgs>;
    zaloMiniApps?: boolean | Prisma.AdminUser$zaloMiniAppsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminUserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AdminUserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type AdminUserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.RoleDefaultArgs<ExtArgs>;
};
export type $AdminUserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdminUser";
    objects: {
        role: Prisma.$RolePayload<ExtArgs>;
        audit_log: Prisma.$AuditLogPayload<ExtArgs>[];
        dsr_request: Prisma.$dsr_requestPayload<ExtArgs>[];
        data_hubs: Prisma.$DataHubPayload<ExtArgs>[];
        dynamic_actions: Prisma.$DynamicActionPayload<ExtArgs>[];
        zaloOAs: Prisma.$ZaloOAPayload<ExtArgs>[];
        zaloMiniApps: Prisma.$ZaloMiniAppPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        passwordHash: string;
        fullName: string;
        roleId: string;
        isActive: boolean;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["adminUser"]>;
    composites: {};
};
export type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdminUserPayload, S>;
export type AdminUserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminUserCountAggregateInputType | true;
};
export interface AdminUserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'];
        meta: {
            name: 'AdminUser';
        };
    };
    findUnique<T extends AdminUserFindUniqueArgs>(args: Prisma.SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AdminUserFindFirstArgs>(args?: Prisma.SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AdminUserFindManyArgs>(args?: Prisma.SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AdminUserCreateArgs>(args: Prisma.SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AdminUserCreateManyArgs>(args?: Prisma.SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AdminUserDeleteArgs>(args: Prisma.SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AdminUserUpdateArgs>(args: Prisma.SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AdminUserUpdateManyArgs>(args: Prisma.SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AdminUserUpsertArgs>(args: Prisma.SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma.Prisma__AdminUserClient<runtime.Types.Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AdminUserCountArgs>(args?: Prisma.Subset<T, AdminUserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminUserCountAggregateOutputType> : number>;
    aggregate<T extends AdminUserAggregateArgs>(args: Prisma.Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>;
    groupBy<T extends AdminUserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdminUserGroupByArgs['orderBy'];
    } : {
        orderBy?: AdminUserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AdminUserFieldRefs;
}
export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    role<T extends Prisma.RoleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RoleDefaultArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    audit_log<T extends Prisma.AdminUser$audit_logArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminUser$audit_logArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    dsr_request<T extends Prisma.AdminUser$dsr_requestArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminUser$dsr_requestArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$dsr_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    data_hubs<T extends Prisma.AdminUser$data_hubsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminUser$data_hubsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DataHubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    dynamic_actions<T extends Prisma.AdminUser$dynamic_actionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminUser$dynamic_actionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DynamicActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    zaloOAs<T extends Prisma.AdminUser$zaloOAsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminUser$zaloOAsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZaloOAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    zaloMiniApps<T extends Prisma.AdminUser$zaloMiniAppsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminUser$zaloMiniAppsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZaloMiniAppPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AdminUserFieldRefs {
    readonly id: Prisma.FieldRef<"AdminUser", 'String'>;
    readonly email: Prisma.FieldRef<"AdminUser", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"AdminUser", 'String'>;
    readonly fullName: Prisma.FieldRef<"AdminUser", 'String'>;
    readonly roleId: Prisma.FieldRef<"AdminUser", 'String'>;
    readonly isActive: Prisma.FieldRef<"AdminUser", 'Boolean'>;
    readonly lastLoginAt: Prisma.FieldRef<"AdminUser", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"AdminUser", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AdminUser", 'DateTime'>;
}
export type AdminUserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where: Prisma.AdminUserWhereUniqueInput;
};
export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where: Prisma.AdminUserWhereUniqueInput;
};
export type AdminUserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
    orderBy?: Prisma.AdminUserOrderByWithRelationInput | Prisma.AdminUserOrderByWithRelationInput[];
    cursor?: Prisma.AdminUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminUserScalarFieldEnum | Prisma.AdminUserScalarFieldEnum[];
};
export type AdminUserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
    orderBy?: Prisma.AdminUserOrderByWithRelationInput | Prisma.AdminUserOrderByWithRelationInput[];
    cursor?: Prisma.AdminUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminUserScalarFieldEnum | Prisma.AdminUserScalarFieldEnum[];
};
export type AdminUserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where?: Prisma.AdminUserWhereInput;
    orderBy?: Prisma.AdminUserOrderByWithRelationInput | Prisma.AdminUserOrderByWithRelationInput[];
    cursor?: Prisma.AdminUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminUserScalarFieldEnum | Prisma.AdminUserScalarFieldEnum[];
};
export type AdminUserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminUserCreateInput, Prisma.AdminUserUncheckedCreateInput>;
};
export type AdminUserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AdminUserCreateManyInput | Prisma.AdminUserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AdminUserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    data: Prisma.AdminUserCreateManyInput | Prisma.AdminUserCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AdminUserIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AdminUserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminUserUpdateInput, Prisma.AdminUserUncheckedUpdateInput>;
    where: Prisma.AdminUserWhereUniqueInput;
};
export type AdminUserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AdminUserUpdateManyMutationInput, Prisma.AdminUserUncheckedUpdateManyInput>;
    where?: Prisma.AdminUserWhereInput;
    limit?: number;
};
export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AdminUserUpdateManyMutationInput, Prisma.AdminUserUncheckedUpdateManyInput>;
    where?: Prisma.AdminUserWhereInput;
    limit?: number;
    include?: Prisma.AdminUserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AdminUserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where: Prisma.AdminUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminUserCreateInput, Prisma.AdminUserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AdminUserUpdateInput, Prisma.AdminUserUncheckedUpdateInput>;
};
export type AdminUserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
    where: Prisma.AdminUserWhereUniqueInput;
};
export type AdminUserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminUserWhereInput;
    limit?: number;
};
export type AdminUser$audit_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditLogScalarFieldEnum | Prisma.AuditLogScalarFieldEnum[];
};
export type AdminUser$dsr_requestArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.dsr_requestSelect<ExtArgs> | null;
    omit?: Prisma.dsr_requestOmit<ExtArgs> | null;
    include?: Prisma.dsr_requestInclude<ExtArgs> | null;
    where?: Prisma.dsr_requestWhereInput;
    orderBy?: Prisma.dsr_requestOrderByWithRelationInput | Prisma.dsr_requestOrderByWithRelationInput[];
    cursor?: Prisma.dsr_requestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Dsr_requestScalarFieldEnum | Prisma.Dsr_requestScalarFieldEnum[];
};
export type AdminUser$data_hubsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DataHubSelect<ExtArgs> | null;
    omit?: Prisma.DataHubOmit<ExtArgs> | null;
    include?: Prisma.DataHubInclude<ExtArgs> | null;
    where?: Prisma.DataHubWhereInput;
    orderBy?: Prisma.DataHubOrderByWithRelationInput | Prisma.DataHubOrderByWithRelationInput[];
    cursor?: Prisma.DataHubWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DataHubScalarFieldEnum | Prisma.DataHubScalarFieldEnum[];
};
export type AdminUser$dynamic_actionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DynamicActionSelect<ExtArgs> | null;
    omit?: Prisma.DynamicActionOmit<ExtArgs> | null;
    include?: Prisma.DynamicActionInclude<ExtArgs> | null;
    where?: Prisma.DynamicActionWhereInput;
    orderBy?: Prisma.DynamicActionOrderByWithRelationInput | Prisma.DynamicActionOrderByWithRelationInput[];
    cursor?: Prisma.DynamicActionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DynamicActionScalarFieldEnum | Prisma.DynamicActionScalarFieldEnum[];
};
export type AdminUser$zaloOAsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZaloOASelect<ExtArgs> | null;
    omit?: Prisma.ZaloOAOmit<ExtArgs> | null;
    include?: Prisma.ZaloOAInclude<ExtArgs> | null;
    where?: Prisma.ZaloOAWhereInput;
    orderBy?: Prisma.ZaloOAOrderByWithRelationInput | Prisma.ZaloOAOrderByWithRelationInput[];
    cursor?: Prisma.ZaloOAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZaloOAScalarFieldEnum | Prisma.ZaloOAScalarFieldEnum[];
};
export type AdminUser$zaloMiniAppsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZaloMiniAppSelect<ExtArgs> | null;
    omit?: Prisma.ZaloMiniAppOmit<ExtArgs> | null;
    include?: Prisma.ZaloMiniAppInclude<ExtArgs> | null;
    where?: Prisma.ZaloMiniAppWhereInput;
    orderBy?: Prisma.ZaloMiniAppOrderByWithRelationInput | Prisma.ZaloMiniAppOrderByWithRelationInput[];
    cursor?: Prisma.ZaloMiniAppWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZaloMiniAppScalarFieldEnum | Prisma.ZaloMiniAppScalarFieldEnum[];
};
export type AdminUserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminUserSelect<ExtArgs> | null;
    omit?: Prisma.AdminUserOmit<ExtArgs> | null;
    include?: Prisma.AdminUserInclude<ExtArgs> | null;
};
