type Email = {
  ccMe: boolean;
  message: string;
  sendTo: Recipient[];
  subject: string;
};

type PaperSize = 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'ARCHID' | 'LEGAL' | 'LETTER' | 'WIDE';

type FormatDetails = {
  paperSize: PaperSize;
};

type Recipient = { email: string } | { groupId: number };

type Layout = 'HORIZONTAL' | 'VERTICAL';

type RowEmail = {
  columnIds: Column['id'][];
  includeAttachments: boolean;
  includeDiscussions: boolean;
  layout: Layout;
  ccMe: boolean;
  message: string;
  sendTo: Recipient[];
  subject: string;
};

type MultiRowEmail = {
  rowIds: Row['id'][];
  columnIds: Column['id'][];
  includeAttachments: boolean;
  includeDiscussions: boolean;
  layout: Layout;
  ccMe: boolean;
  message: string;
  sendTo: Recipient[];
  subject: string;
};

type SheetEmail = {
  format: FormatDetails;
  formatDetails: FormatDetails;
  ccMe: boolean;
  message: string;
  sendTo: Recipient[];
  subject: string;
};
