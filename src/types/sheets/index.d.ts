type ListSheetsSingleResult = Pick<Sheet, 'id' | 'name' | 'accessLevel' | 'permalink' | 'createdAt' | 'modifiedAt'>[];

interface Sheets {
  listSheets(): PagniatedGetResult<ListSheetsSingleResult>;
}
