type Callback = {
  scopeObjectId: number;
  webhookId: Webhook['id'];
  events: SmartsheetEvent[];
  newWebhookStatus: string;
  none: string;
  scope: 'sheet';
  timestamp: string;
};
