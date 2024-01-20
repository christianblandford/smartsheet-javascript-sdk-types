type AccessLevel = 'ADMIN' | 'COMMENTED' | 'EDITOR' | 'EDITOR_SHARE' | 'OWNER' | 'VIEWER';

type ResourceManagementType = 'NONE' | 'LEGACY_RESOURCE_MANAGEMENT' | 'RESOURCE_MANAGEMENT_BY_SMARTSHEET';

type SmartsheetReport = {
  scope: Scope;
  sourceSheets: Sheet[];
  isSummaryReport: boolean;
  proogs: Proof[];
  id: number;
  fromId: number;
  ownerId: number;
  accessLevel: AccessLevel;
  attachments: Attachment[];
  columns: Column[];
  createdAt: string | number;
  crossSheetReferences: CrossSheetReference[];
  dependenciesEnabled: boolean;
  discussions: Discussion[];
  effectiveAttachmentOptions: string[];
  favorite: boolean;
  ganttEnabled: boolean;
  hasSummaryFields: boolean;
  modifiedAt: string | number;
  name: string;
  owner: string;
  permalink: string;
  projectSettings: ProjectSettings;
  readOnly?: boolean;
  resourceManagementEnabled: boolean;
  resourceManagementType: ResourceManagementType;
  rows: Row[];
  showParentRowsForFilters?: boolean;
  source: {
    id: number;
    type: Source;
  };
  summary: {
    fields: Field[];
  };
  totalRowCount: number;
  userPermissions: {
    summaryPermissions: 'ADMIN' | 'READ_DELETE' | 'READ_ONLY' | 'READ_WRITE';
  };
  userSettings: {
    criticalPathEnabled: boolean;
    displaySummaryTasks: boolean;
  };
  version: number;
  workspace: Pick<Workspace, 'id' | 'accessLevel' | 'name' | 'permalink'>;
};

type ReportCellLink = {
  columnId: Column['id'];
  rowId: Row['id'];
  sheetId: Sheet['id'];
  sheetName: Sheet['name'];
  status: 'BLOCKED' | 'BROKEN' | 'CIRCULAR' | 'DISABLED' | 'INACCESSIBLE' | 'INVALID' | 'NOT_SHARED' | 'OK';
};

type ReportCell = Cell & {
  virtualColumnId: number;
};

type ReportColumn = Column & {
  virtualId: number;
  sheetNameColumn: boolean;
};

type ReportRow = Row & {};

type ReportPublish = {
  readOnlyFullAccessibleBy?: 'ALL' | 'ORG' | 'SHARED';
  readOnlyFullDefaultView: 'CALENDAR' | 'CARD' | 'GRID';
  readOnlyFullEnabled: boolean;
  readOnlyFullUrl?: true;
};
