type AttachmentSubType = 'DOCUMENT' | 'DRAWING' | 'FOLDER*' | 'PDF' | 'PRESENTATION' | 'SPREADSHEET';

type AttachmentType = 'BOX_COM' | 'DROPBOX*' | 'EGNYTE*' | 'EVERNOTE*' | 'FILE' | 'GOOGLE_DRIVE' | 'LINK' | 'ONEDRIVE';

type AttachmentParentType = 'COMMENT' | 'PROOF' | 'ROW' | 'SHEET';

type Attachment = {
  id: number;
  parentId: number;
  attachmentType: AttachmentType;
  attachmentSubType?: AttachmentSubType;
  mimeType: string;
  parentType: AttachmentParentType;
  createdBy: CreatedBy<string>;
  name: string;
  sizeInKb?: number;
  url?: string;
  urlExpiresInMillis?: number;
};

type URLAttachmentRequest = {
  attachmentSubType?: AttachmentSubType;
  attachmentType: AttachmentType;
  description?: string;
  name: string;
  url: string;
};
