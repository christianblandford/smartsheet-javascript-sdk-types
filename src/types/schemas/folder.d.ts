type Folder = {
  id: number;
  favorite: boolean;
  folders: Folder[];
  name: string;
  permalink: string;
  reports: SmartsheetReport[];
  sheets: Sheet[];
  sights: Dashboard[];
  templates: Template[];
};
