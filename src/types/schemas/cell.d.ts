type Cell = {
  columnId: number;
  columnType?: string;
  conditionalFormat?: string;
  displayValue?: string;
  format?: string;
  formula?: string;
  objectValue?: {
    objectType:
      | 'ABSTRACT_DATETIME'
      | 'CONTACT'
      | 'DATE'
      | 'DATETIME'
      | 'DURATION'
      | 'MULTI_CONTACT'
      | 'MULTI_PICKLIST'
      | 'PREDECESSOR_LIST';
  };
  overrideValidation?: boolean;
  strict?: boolean;
  value: string | number | boolean;
  hyperlink?: Hyperlink;
  image?: {
    altText?: string;
    height?: number;
    id?: string;
    width?: number;
  };
  linkInFromCell?: CellLink;
  linksOutToCells?: CellLink[];
};
