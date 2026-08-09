import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type webhook_inboxModel = runtime.Types.Result.DefaultSelection<Prisma.$webhook_inboxPayload>;
export type AggregateWebhook_inbox = {
    _count: Webhook_inboxCountAggregateOutputType | null;
    _min: Webhook_inboxMinAggregateOutputType | null;
    _max: Webhook_inboxMaxAggregateOutputType | null;
};
export type Webhook_inboxMinAggregateOutputType = {
    id: string | null;
    source: string | null;
    event_type: string | null;
    signature_valid: boolean | null;
    processed: boolean | null;
    processed_at: Date | null;
    error: string | null;
    received_at: Date | null;
};
export type Webhook_inboxMaxAggregateOutputType = {
    id: string | null;
    source: string | null;
    event_type: string | null;
    signature_valid: boolean | null;
    processed: boolean | null;
    processed_at: Date | null;
    error: string | null;
    received_at: Date | null;
};
export type Webhook_inboxCountAggregateOutputType = {
    id: number;
    source: number;
    event_type: number;
    payload: number;
    headers: number;
    signature_valid: number;
    processed: number;
    processed_at: number;
    error: number;
    received_at: number;
    _all: number;
};
export type Webhook_inboxMinAggregateInputType = {
    id?: true;
    source?: true;
    event_type?: true;
    signature_valid?: true;
    processed?: true;
    processed_at?: true;
    error?: true;
    received_at?: true;
};
export type Webhook_inboxMaxAggregateInputType = {
    id?: true;
    source?: true;
    event_type?: true;
    signature_valid?: true;
    processed?: true;
    processed_at?: true;
    error?: true;
    received_at?: true;
};
export type Webhook_inboxCountAggregateInputType = {
    id?: true;
    source?: true;
    event_type?: true;
    payload?: true;
    headers?: true;
    signature_valid?: true;
    processed?: true;
    processed_at?: true;
    error?: true;
    received_at?: true;
    _all?: true;
};
export type Webhook_inboxAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.webhook_inboxWhereInput;
    orderBy?: Prisma.webhook_inboxOrderByWithRelationInput | Prisma.webhook_inboxOrderByWithRelationInput[];
    cursor?: Prisma.webhook_inboxWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Webhook_inboxCountAggregateInputType;
    _min?: Webhook_inboxMinAggregateInputType;
    _max?: Webhook_inboxMaxAggregateInputType;
};
export type GetWebhook_inboxAggregateType<T extends Webhook_inboxAggregateArgs> = {
    [P in keyof T & keyof AggregateWebhook_inbox]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWebhook_inbox[P]> : Prisma.GetScalarType<T[P], AggregateWebhook_inbox[P]>;
};
export type webhook_inboxGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.webhook_inboxWhereInput;
    orderBy?: Prisma.webhook_inboxOrderByWithAggregationInput | Prisma.webhook_inboxOrderByWithAggregationInput[];
    by: Prisma.Webhook_inboxScalarFieldEnum[] | Prisma.Webhook_inboxScalarFieldEnum;
    having?: Prisma.webhook_inboxScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Webhook_inboxCountAggregateInputType | true;
    _min?: Webhook_inboxMinAggregateInputType;
    _max?: Webhook_inboxMaxAggregateInputType;
};
export type Webhook_inboxGroupByOutputType = {
    id: string;
    source: string;
    event_type: string | null;
    payload: runtime.JsonValue;
    headers: runtime.JsonValue | null;
    signature_valid: boolean | null;
    processed: boolean;
    processed_at: Date | null;
    error: string | null;
    received_at: Date;
    _count: Webhook_inboxCountAggregateOutputType | null;
    _min: Webhook_inboxMinAggregateOutputType | null;
    _max: Webhook_inboxMaxAggregateOutputType | null;
};
export type GetWebhook_inboxGroupByPayload<T extends webhook_inboxGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Webhook_inboxGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Webhook_inboxGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Webhook_inboxGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Webhook_inboxGroupByOutputType[P]>;
}>>;
export type webhook_inboxWhereInput = {
    AND?: Prisma.webhook_inboxWhereInput | Prisma.webhook_inboxWhereInput[];
    OR?: Prisma.webhook_inboxWhereInput[];
    NOT?: Prisma.webhook_inboxWhereInput | Prisma.webhook_inboxWhereInput[];
    id?: Prisma.UuidFilter<"webhook_inbox"> | string;
    source?: Prisma.StringFilter<"webhook_inbox"> | string;
    event_type?: Prisma.StringNullableFilter<"webhook_inbox"> | string | null;
    payload?: Prisma.JsonFilter<"webhook_inbox">;
    headers?: Prisma.JsonNullableFilter<"webhook_inbox">;
    signature_valid?: Prisma.BoolNullableFilter<"webhook_inbox"> | boolean | null;
    processed?: Prisma.BoolFilter<"webhook_inbox"> | boolean;
    processed_at?: Prisma.DateTimeNullableFilter<"webhook_inbox"> | Date | string | null;
    error?: Prisma.StringNullableFilter<"webhook_inbox"> | string | null;
    received_at?: Prisma.DateTimeFilter<"webhook_inbox"> | Date | string;
};
export type webhook_inboxOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    event_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    headers?: Prisma.SortOrderInput | Prisma.SortOrder;
    signature_valid?: Prisma.SortOrderInput | Prisma.SortOrder;
    processed?: Prisma.SortOrder;
    processed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    error?: Prisma.SortOrderInput | Prisma.SortOrder;
    received_at?: Prisma.SortOrder;
};
export type webhook_inboxWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.webhook_inboxWhereInput | Prisma.webhook_inboxWhereInput[];
    OR?: Prisma.webhook_inboxWhereInput[];
    NOT?: Prisma.webhook_inboxWhereInput | Prisma.webhook_inboxWhereInput[];
    source?: Prisma.StringFilter<"webhook_inbox"> | string;
    event_type?: Prisma.StringNullableFilter<"webhook_inbox"> | string | null;
    payload?: Prisma.JsonFilter<"webhook_inbox">;
    headers?: Prisma.JsonNullableFilter<"webhook_inbox">;
    signature_valid?: Prisma.BoolNullableFilter<"webhook_inbox"> | boolean | null;
    processed?: Prisma.BoolFilter<"webhook_inbox"> | boolean;
    processed_at?: Prisma.DateTimeNullableFilter<"webhook_inbox"> | Date | string | null;
    error?: Prisma.StringNullableFilter<"webhook_inbox"> | string | null;
    received_at?: Prisma.DateTimeFilter<"webhook_inbox"> | Date | string;
}, "id">;
export type webhook_inboxOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    event_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    headers?: Prisma.SortOrderInput | Prisma.SortOrder;
    signature_valid?: Prisma.SortOrderInput | Prisma.SortOrder;
    processed?: Prisma.SortOrder;
    processed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    error?: Prisma.SortOrderInput | Prisma.SortOrder;
    received_at?: Prisma.SortOrder;
    _count?: Prisma.webhook_inboxCountOrderByAggregateInput;
    _max?: Prisma.webhook_inboxMaxOrderByAggregateInput;
    _min?: Prisma.webhook_inboxMinOrderByAggregateInput;
};
export type webhook_inboxScalarWhereWithAggregatesInput = {
    AND?: Prisma.webhook_inboxScalarWhereWithAggregatesInput | Prisma.webhook_inboxScalarWhereWithAggregatesInput[];
    OR?: Prisma.webhook_inboxScalarWhereWithAggregatesInput[];
    NOT?: Prisma.webhook_inboxScalarWhereWithAggregatesInput | Prisma.webhook_inboxScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"webhook_inbox"> | string;
    source?: Prisma.StringWithAggregatesFilter<"webhook_inbox"> | string;
    event_type?: Prisma.StringNullableWithAggregatesFilter<"webhook_inbox"> | string | null;
    payload?: Prisma.JsonWithAggregatesFilter<"webhook_inbox">;
    headers?: Prisma.JsonNullableWithAggregatesFilter<"webhook_inbox">;
    signature_valid?: Prisma.BoolNullableWithAggregatesFilter<"webhook_inbox"> | boolean | null;
    processed?: Prisma.BoolWithAggregatesFilter<"webhook_inbox"> | boolean;
    processed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"webhook_inbox"> | Date | string | null;
    error?: Prisma.StringNullableWithAggregatesFilter<"webhook_inbox"> | string | null;
    received_at?: Prisma.DateTimeWithAggregatesFilter<"webhook_inbox"> | Date | string;
};
export type webhook_inboxCreateInput = {
    id?: string;
    source: string;
    event_type?: string | null;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    signature_valid?: boolean | null;
    processed?: boolean;
    processed_at?: Date | string | null;
    error?: string | null;
    received_at?: Date | string;
};
export type webhook_inboxUncheckedCreateInput = {
    id?: string;
    source: string;
    event_type?: string | null;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    signature_valid?: boolean | null;
    processed?: boolean;
    processed_at?: Date | string | null;
    error?: string | null;
    received_at?: Date | string;
};
export type webhook_inboxUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    event_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    signature_valid?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    processed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type webhook_inboxUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    event_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    signature_valid?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    processed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type webhook_inboxCreateManyInput = {
    id?: string;
    source: string;
    event_type?: string | null;
    payload: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    signature_valid?: boolean | null;
    processed?: boolean;
    processed_at?: Date | string | null;
    error?: string | null;
    received_at?: Date | string;
};
export type webhook_inboxUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    event_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    signature_valid?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    processed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type webhook_inboxUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    event_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    headers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    signature_valid?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    processed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    processed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type webhook_inboxCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    headers?: Prisma.SortOrder;
    signature_valid?: Prisma.SortOrder;
    processed?: Prisma.SortOrder;
    processed_at?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    received_at?: Prisma.SortOrder;
};
export type webhook_inboxMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    signature_valid?: Prisma.SortOrder;
    processed?: Prisma.SortOrder;
    processed_at?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    received_at?: Prisma.SortOrder;
};
export type webhook_inboxMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    event_type?: Prisma.SortOrder;
    signature_valid?: Prisma.SortOrder;
    processed?: Prisma.SortOrder;
    processed_at?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    received_at?: Prisma.SortOrder;
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type webhook_inboxSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    source?: boolean;
    event_type?: boolean;
    payload?: boolean;
    headers?: boolean;
    signature_valid?: boolean;
    processed?: boolean;
    processed_at?: boolean;
    error?: boolean;
    received_at?: boolean;
}, ExtArgs["result"]["webhook_inbox"]>;
export type webhook_inboxSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    source?: boolean;
    event_type?: boolean;
    payload?: boolean;
    headers?: boolean;
    signature_valid?: boolean;
    processed?: boolean;
    processed_at?: boolean;
    error?: boolean;
    received_at?: boolean;
}, ExtArgs["result"]["webhook_inbox"]>;
export type webhook_inboxSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    source?: boolean;
    event_type?: boolean;
    payload?: boolean;
    headers?: boolean;
    signature_valid?: boolean;
    processed?: boolean;
    processed_at?: boolean;
    error?: boolean;
    received_at?: boolean;
}, ExtArgs["result"]["webhook_inbox"]>;
export type webhook_inboxSelectScalar = {
    id?: boolean;
    source?: boolean;
    event_type?: boolean;
    payload?: boolean;
    headers?: boolean;
    signature_valid?: boolean;
    processed?: boolean;
    processed_at?: boolean;
    error?: boolean;
    received_at?: boolean;
};
export type webhook_inboxOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "source" | "event_type" | "payload" | "headers" | "signature_valid" | "processed" | "processed_at" | "error" | "received_at", ExtArgs["result"]["webhook_inbox"]>;
export type $webhook_inboxPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "webhook_inbox";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        source: string;
        event_type: string | null;
        payload: runtime.JsonValue;
        headers: runtime.JsonValue | null;
        signature_valid: boolean | null;
        processed: boolean;
        processed_at: Date | null;
        error: string | null;
        received_at: Date;
    }, ExtArgs["result"]["webhook_inbox"]>;
    composites: {};
};
export type webhook_inboxGetPayload<S extends boolean | null | undefined | webhook_inboxDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$webhook_inboxPayload, S>;
export type webhook_inboxCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<webhook_inboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Webhook_inboxCountAggregateInputType | true;
};
export interface webhook_inboxDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['webhook_inbox'];
        meta: {
            name: 'webhook_inbox';
        };
    };
    findUnique<T extends webhook_inboxFindUniqueArgs>(args: Prisma.SelectSubset<T, webhook_inboxFindUniqueArgs<ExtArgs>>): Prisma.Prisma__webhook_inboxClient<runtime.Types.Result.GetResult<Prisma.$webhook_inboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends webhook_inboxFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, webhook_inboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__webhook_inboxClient<runtime.Types.Result.GetResult<Prisma.$webhook_inboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends webhook_inboxFindFirstArgs>(args?: Prisma.SelectSubset<T, webhook_inboxFindFirstArgs<ExtArgs>>): Prisma.Prisma__webhook_inboxClient<runtime.Types.Result.GetResult<Prisma.$webhook_inboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends webhook_inboxFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, webhook_inboxFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__webhook_inboxClient<runtime.Types.Result.GetResult<Prisma.$webhook_inboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends webhook_inboxFindManyArgs>(args?: Prisma.SelectSubset<T, webhook_inboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$webhook_inboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends webhook_inboxCreateArgs>(args: Prisma.SelectSubset<T, webhook_inboxCreateArgs<ExtArgs>>): Prisma.Prisma__webhook_inboxClient<runtime.Types.Result.GetResult<Prisma.$webhook_inboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends webhook_inboxCreateManyArgs>(args?: Prisma.SelectSubset<T, webhook_inboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends webhook_inboxCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, webhook_inboxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$webhook_inboxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends webhook_inboxDeleteArgs>(args: Prisma.SelectSubset<T, webhook_inboxDeleteArgs<ExtArgs>>): Prisma.Prisma__webhook_inboxClient<runtime.Types.Result.GetResult<Prisma.$webhook_inboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends webhook_inboxUpdateArgs>(args: Prisma.SelectSubset<T, webhook_inboxUpdateArgs<ExtArgs>>): Prisma.Prisma__webhook_inboxClient<runtime.Types.Result.GetResult<Prisma.$webhook_inboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends webhook_inboxDeleteManyArgs>(args?: Prisma.SelectSubset<T, webhook_inboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends webhook_inboxUpdateManyArgs>(args: Prisma.SelectSubset<T, webhook_inboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends webhook_inboxUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, webhook_inboxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$webhook_inboxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends webhook_inboxUpsertArgs>(args: Prisma.SelectSubset<T, webhook_inboxUpsertArgs<ExtArgs>>): Prisma.Prisma__webhook_inboxClient<runtime.Types.Result.GetResult<Prisma.$webhook_inboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends webhook_inboxCountArgs>(args?: Prisma.Subset<T, webhook_inboxCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Webhook_inboxCountAggregateOutputType> : number>;
    aggregate<T extends Webhook_inboxAggregateArgs>(args: Prisma.Subset<T, Webhook_inboxAggregateArgs>): Prisma.PrismaPromise<GetWebhook_inboxAggregateType<T>>;
    groupBy<T extends webhook_inboxGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: webhook_inboxGroupByArgs['orderBy'];
    } : {
        orderBy?: webhook_inboxGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, webhook_inboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhook_inboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: webhook_inboxFieldRefs;
}
export interface Prisma__webhook_inboxClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface webhook_inboxFieldRefs {
    readonly id: Prisma.FieldRef<"webhook_inbox", 'String'>;
    readonly source: Prisma.FieldRef<"webhook_inbox", 'String'>;
    readonly event_type: Prisma.FieldRef<"webhook_inbox", 'String'>;
    readonly payload: Prisma.FieldRef<"webhook_inbox", 'Json'>;
    readonly headers: Prisma.FieldRef<"webhook_inbox", 'Json'>;
    readonly signature_valid: Prisma.FieldRef<"webhook_inbox", 'Boolean'>;
    readonly processed: Prisma.FieldRef<"webhook_inbox", 'Boolean'>;
    readonly processed_at: Prisma.FieldRef<"webhook_inbox", 'DateTime'>;
    readonly error: Prisma.FieldRef<"webhook_inbox", 'String'>;
    readonly received_at: Prisma.FieldRef<"webhook_inbox", 'DateTime'>;
}
export type webhook_inboxFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webhook_inboxSelect<ExtArgs> | null;
    omit?: Prisma.webhook_inboxOmit<ExtArgs> | null;
    where: Prisma.webhook_inboxWhereUniqueInput;
};
export type webhook_inboxFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webhook_inboxSelect<ExtArgs> | null;
    omit?: Prisma.webhook_inboxOmit<ExtArgs> | null;
    where: Prisma.webhook_inboxWhereUniqueInput;
};
export type webhook_inboxFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webhook_inboxSelect<ExtArgs> | null;
    omit?: Prisma.webhook_inboxOmit<ExtArgs> | null;
    where?: Prisma.webhook_inboxWhereInput;
    orderBy?: Prisma.webhook_inboxOrderByWithRelationInput | Prisma.webhook_inboxOrderByWithRelationInput[];
    cursor?: Prisma.webhook_inboxWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Webhook_inboxScalarFieldEnum | Prisma.Webhook_inboxScalarFieldEnum[];
};
export type webhook_inboxFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webhook_inboxSelect<ExtArgs> | null;
    omit?: Prisma.webhook_inboxOmit<ExtArgs> | null;
    where?: Prisma.webhook_inboxWhereInput;
    orderBy?: Prisma.webhook_inboxOrderByWithRelationInput | Prisma.webhook_inboxOrderByWithRelationInput[];
    cursor?: Prisma.webhook_inboxWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Webhook_inboxScalarFieldEnum | Prisma.Webhook_inboxScalarFieldEnum[];
};
export type webhook_inboxFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webhook_inboxSelect<ExtArgs> | null;
    omit?: Prisma.webhook_inboxOmit<ExtArgs> | null;
    where?: Prisma.webhook_inboxWhereInput;
    orderBy?: Prisma.webhook_inboxOrderByWithRelationInput | Prisma.webhook_inboxOrderByWithRelationInput[];
    cursor?: Prisma.webhook_inboxWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Webhook_inboxScalarFieldEnum | Prisma.Webhook_inboxScalarFieldEnum[];
};
export type webhook_inboxCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webhook_inboxSelect<ExtArgs> | null;
    omit?: Prisma.webhook_inboxOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.webhook_inboxCreateInput, Prisma.webhook_inboxUncheckedCreateInput>;
};
export type webhook_inboxCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.webhook_inboxCreateManyInput | Prisma.webhook_inboxCreateManyInput[];
    skipDuplicates?: boolean;
};
export type webhook_inboxCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webhook_inboxSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.webhook_inboxOmit<ExtArgs> | null;
    data: Prisma.webhook_inboxCreateManyInput | Prisma.webhook_inboxCreateManyInput[];
    skipDuplicates?: boolean;
};
export type webhook_inboxUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webhook_inboxSelect<ExtArgs> | null;
    omit?: Prisma.webhook_inboxOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.webhook_inboxUpdateInput, Prisma.webhook_inboxUncheckedUpdateInput>;
    where: Prisma.webhook_inboxWhereUniqueInput;
};
export type webhook_inboxUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.webhook_inboxUpdateManyMutationInput, Prisma.webhook_inboxUncheckedUpdateManyInput>;
    where?: Prisma.webhook_inboxWhereInput;
    limit?: number;
};
export type webhook_inboxUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webhook_inboxSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.webhook_inboxOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.webhook_inboxUpdateManyMutationInput, Prisma.webhook_inboxUncheckedUpdateManyInput>;
    where?: Prisma.webhook_inboxWhereInput;
    limit?: number;
};
export type webhook_inboxUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webhook_inboxSelect<ExtArgs> | null;
    omit?: Prisma.webhook_inboxOmit<ExtArgs> | null;
    where: Prisma.webhook_inboxWhereUniqueInput;
    create: Prisma.XOR<Prisma.webhook_inboxCreateInput, Prisma.webhook_inboxUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.webhook_inboxUpdateInput, Prisma.webhook_inboxUncheckedUpdateInput>;
};
export type webhook_inboxDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webhook_inboxSelect<ExtArgs> | null;
    omit?: Prisma.webhook_inboxOmit<ExtArgs> | null;
    where: Prisma.webhook_inboxWhereUniqueInput;
};
export type webhook_inboxDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.webhook_inboxWhereInput;
    limit?: number;
};
export type webhook_inboxDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.webhook_inboxSelect<ExtArgs> | null;
    omit?: Prisma.webhook_inboxOmit<ExtArgs> | null;
};
