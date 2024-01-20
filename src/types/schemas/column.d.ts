type SystemColumnType = 'AUTO_NUMBER' | 'CREATED_BY' | 'CREATED_DATE' | 'MODIFIED_BY' | 'MODIFIED_DATE';

type ColumnTag =
  | 'CALENDAR_END_DATE'
  | 'CALENDAR_START_DATE'
  | 'CARD_DONE'
  | 'GANTT_ALLOCATION'
  | 'GANTT_ASSIGNED_RESOURCE'
  | 'GANTT_DISPLAY_LABEL'
  | 'GANTT_DURATION'
  | 'GANTT_END_DATE'
  | 'GANTT_PERCENT_COMPLETE'
  | 'GANTT_PREDECESSOR'
  | 'GANTT_START_DATE'
  | 'BASELINE_START_DATE'
  | 'BASELINE_END_DATE'
  | 'BASELINE_VARIANCE';

type ColumnType =
  | 'ABSTRACT_DATETIME'
  | 'CHECKBOX'
  | 'CONTACT_LIST'
  | 'DATE'
  | 'DATETIME'
  | 'DURATION'
  | 'MULTI_CONTACT_LIST'
  | 'MULTI_PICKLIST'
  | 'PICKLIST'
  | 'PREDECESSOR'
  | 'TEXT_NUMBER';

interface Column {
  autoNumberFormat: AutoNumberFormat;
  contactOptions: ContactOption[];
  description: string;
  format: string;
  formula: string;
  hidden: boolean;
  id: number;
  index: number;
  locked: boolean;
  lockedForUser: boolean;
  options: string[];
  primary: boolean;
  symbol?: string;
  systemColumnType: SystemColumnType;
  tags: ColumnTag[];
  title: string;
  type: ColumnType;
  validation: boolean;
  version: 0 | 1 | 2;
  width: number;
}
