type AutomationRuleDisabledReason =
  | 'APPROVAL_COLUMN_MISSING'
  | 'APPROVAL_COLUMN_WRONG_TYPE'
  | 'AUTOMATION_NOT_ENABLED_FOR_ORG'
  | 'COLUMN_MISSING'
  | 'COLUMN_TYPE_INCOMPATIBLE'
  | 'NO_POTENTIAL_RECIPIENTS'
  | 'NO_VALID_SELECTED_COLUMNS';

type AutomationActionType = 'APPROVAL_REQUEST_ACTION' | 'NOTIFICATION_ACTION' | 'UPDATE_REQUEST_ACTION';

type AutomationActionFrequency = 'DAILY' | 'HOURLY' | 'IMMEDIATELY' | 'WEEKLY';

type AutomationRule = {
  id: number;
  createdAt?: string | number | object;
  createdBy?: CreatedBy<string>;
  disabledReason?: AutomationRuleDisabledReason;
  disabledReasonText?: string;
  enabled?: boolean;
  modifiedAt?: string | number | object;
  modifiedBy?: CreatedBy<string>;
  name: string;
  userCanModify?: boolean;
  action: AutomationAction;
};
