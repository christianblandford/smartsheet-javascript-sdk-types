type AutomationAction = {
  notifyAllSharedUsers?: boolean;
  includedColumnIds?: number[];
  type: AutomationActionType;
  frequency?: AutomationActionFrequency;
  includeAllColumns?: boolean;
  includeAttachments?: boolean;
  includeDiscussions?: boolean;
  message?: string;
  subject?: string;
};
