type FavoriteType = 'folder' | 'report' | 'sheet' | 'sight' | 'template' | 'workspace';

type Favorite = {
  objectId: number;
  type: FavoriteType;
};
