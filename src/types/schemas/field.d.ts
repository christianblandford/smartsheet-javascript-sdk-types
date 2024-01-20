type FieldObjectType =
  | 'ABSTRACT_DATETIME'
  | 'CONTACT'
  | 'DATE'
  | 'DATETIME'
  | 'DURATION'
  | 'MULTI_CONTACT'
  | 'MULTI_PICKLIST'
  | 'PREDECESSOR_LIST';

type Field = {
  id: number;
  contactOptions: CreatedBy<string>[];
  createdAt: string | number;
  createdBy: CreatedBy<string>[];
  displayValue: string;
  format: string;
  formula: string;
  hyperlink: {
    reportId?: number;
    sheetId?: number;
    sightId?: number;
    url?: string;
  };
  image: Image;
  index: number;
  locked: boolean;
  lockedForUser: boolean;
  modifiedAt: string | number;
  modifiedBy: CreatedBy<string>;
  objectValue: {
    objectType: FieldObjectType;
  };
  options: string[];
  symbol: string;
  title: string;
  type:
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
  validation: boolean;
};
