type Template = {
  id: number;
  type: 'report' | 'sheet';
  accessLevel: AccessLevel;
  blank: boolean;
  categories: string[];
  description: string;
  globalTemplate: 'BLANK_SHEET' | 'PROJECT_SHEET' | 'TASK_LIST';
  image: string;
  largeImage: string;
  locale: LocaleCode;
  name: string;
  tags: string[];
};
