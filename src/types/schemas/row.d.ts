interface Row {
  id: number;
  sheetId: number;
  accessLevel: AccessLevel;
  attachments: Attachment[];
  cells: Cell[];
  columns: Column[];
  conditionalFormat: string;
  createdAt: string | number;
  createdBy: CreatedBy<string>;
  discussions: Discussion[];
  proofs: Proof | Proof[];
  expanded: boolean;
  filteredOut?: boolean;
  format?: string;
  inCriticalPath?: boolean;
  locked: boolean;
  lockedForUser: boolean;
  modifiedAt: string | number;
  modifiedBy: CreatedBy<string>;
  permaLink?: string;
  rowNumber: number;
  version: number;
}

type CopyOrMoveRowDestination = {
  sheetId: Sheet['id'];
};

type CopyOrMoveRowDirective = {
  rowIds: Row['id'][];
  to: {
    sheetId: Sheet['id'];
  };
};

type RowMapping = {
  from: Row['id'];
  to: Row['id'];
};

type CopyOrMoveRowResult = {
  destinationSheetId: Sheet['id'];
  rowMappings: RowMapping[];
};
