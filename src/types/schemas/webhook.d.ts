type WebhookStatus =
  | 'DISABLED_ADMINISTRATIVE'
  | 'DISABLED_APP_REVOKED'
  | 'DISABLED_BY_OWNER'
  | 'DISABLED_CALLBACK_FAILED'
  | 'DISABLED_SCOPE_INACCESSIBLE'
  | 'DISABLED_VERIFICATION_FAILED'
  | 'ENABLED'
  | 'NEW_NOT_VERIFIED';

type WebhookStats = {
  lastCallbackAttempt: string;
  lastCallbackAttemptRetryCount: number;
  lastSuccessfulCallback: string;
};

type Webhook = {
  callbackUrl: string;
  enabled: boolean;
  events: ['*.*'];
  name: string;
  version: 1;
  id: number;
  apiClientId: number;
  scopeObjectId: number;
  apiClientName: string;
  createdAt: string;
  disabledDetails: string;
  modifiedAt: string;
  scope: string;
  sharedSecret: string;
  stats: WebhookStats;
  status: WebhookStatus;
  subscope: Subscope;
};
