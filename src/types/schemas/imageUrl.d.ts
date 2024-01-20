type ImageUrl = {
  imageId: string;
  error: SmartsheetError;
  height: number;
  url: string;
  width: number;
};

type ImageUrlForRequest = Omit<ImageUrl, 'url'>;
