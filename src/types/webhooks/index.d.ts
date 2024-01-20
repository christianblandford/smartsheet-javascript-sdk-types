type PartialWebhook = Pick<
  Webhook,
  | 'id'
  | 'name'
  | 'scope'
  | 'scopeObjectId'
  | 'subscope'
  | 'events'
  | 'callbackUrl'
  | 'sharedSecret'
  | 'enabled'
  | 'status'
  | 'version'
  | 'createdAt'
  | 'modifiedAt'
>;

type NewWebhookProperties = {
  callbackUrl: Webhook['callbackUrl'];
  events: Webhook['events'];
  name: Webhook['name'];
  version: Webhook['version'];
  scopeObjectId: Webhook['scopeObjectId'];
  scope: Webhook['scope'];
  subscope?: Webhook['subscope'];
};

type CreateOrUpdateWebhookResponse = {
  version?: number;
  message: 'PARTIAL_SUCCESS' | 'SUCCESS';
  resultCode: 0 | 3;
  result: PartialWebhook;
  failedItems?: {
    rowId?: Row['id'];
    error: Error;
    index: number;
  }[];
};

type DeleteWebhookResponse = Omit<CreateOrUpdateWebhookResponse, 'result'>;

type UpdateWebhookProperties = {
  callbackUrl?: Webhook['callbackUrl'];
  enabled?: Webhook['enabled'];
  events?: Webhook['events'];
  name?: Webhook['name'];
  version?: Webhook['version'];
};

interface Webhooks {
  listWebhooks(options?: PaginationOptions): PagniatedGetResult<PartialWebhook>;
  createWebhook(options: { body: NewWebhookProperties }): Promise<CreateOrUpdateWebhookResponse>;
  getWebhook(options: { webhookId: Webhook['id'] }): Promise<Webhook>;
  updateWebhook(options: {
    webhookId: Webhook['id'];
    body: UpdateWebhookProperties;
  }): Promise<CreateOrUpdateWebhookResponse>;
  deleteWebhook(options: { webhookId: Webhook['id'] }): Promise<DeleteWebhookResponse>;
}
