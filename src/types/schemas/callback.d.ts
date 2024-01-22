type Callback = {
  scopeObjectId: number;
  webhookId: Webhook["id"];
  events: CallbackEvent[];
  newWebhookStatus: string;
  none: string;
  scope: "sheet";
  timestamp: string;
};
