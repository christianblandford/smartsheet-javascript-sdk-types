type ObjectType =
  | 'attachment'
  | 'dashboard'
  | 'discussion'
  | 'folder'
  | 'report'
  | 'row'
  | 'sheet'
  | 'summaryField'
  | 'template'
  | 'workspace';

type ParentObjectType = 'dashboard' | 'folder' | 'report' | 'sheet' | 'template' | 'workspace';

type SearchResultItem = {
  objectID: number;
  parentObjectId: number;
  contextData: string[];
  objectType: ObjectType;
  parentObjectName: string;
  parentObjectType: ParentObjectType;
  proofUrl?: string;
  text: string;
};

type SearchResult = {
  results: SearchResultItem[];
  totalCount: number;
};
