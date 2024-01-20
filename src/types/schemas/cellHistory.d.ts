type CellHistory = {
  modifiedAt: string;
  modifiedBy: {
    email: string;
    name: string;
  };
  columnId: number;
  columnType?: string;
  conditionalFormat?: string;
  displayValue?: string;
  format?: string;
  formula?: string;
  object?: object;
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
  objectValue?: ObjectValue;
};
