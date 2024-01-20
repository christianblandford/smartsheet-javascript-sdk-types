type Predecessor = {
  rowId: number;
  type: 'FF' | 'FS' | 'SF' | 'SS';
  inCriticalPath?: boolean;
  invalid?: boolean;
  lag?: Duration;
  object?: object;
  rowNumber?: number;
};

type PredecessorList = Predecessor[];
