type Discussion = {
  accessLevel?: AccessLevel;
  id: number;
  comments?: Comment[];
  commentAttachments?: Attachment[];
  commentCount: number;
  createdBy?: CreatedBy<string>;
  lastCommentedAt: string | number;
  lastCommentedUser?: CreatedBy<string>;
  parentId: number;
  parentType: 'ROW' | 'SHEET';
  readOnly: boolean;
  title: string;
};
