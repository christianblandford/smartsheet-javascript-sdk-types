type SmartsheetComment = {
  id: number;
  createdAt: string | number;
  modifiedAt: string | number;
  createdBy: CreatedBy<string>;
  discussionId: number;
  text: string;
  attachments: Attachment[];
};
