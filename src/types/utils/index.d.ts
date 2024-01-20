type Page = number;
type PageSize = number;
type PageAndPageSize = {
  page?: Page;
  pageSize?: PageSize;
};
type PaginationOptions = PageAndPageSize | { includeAll?: boolean };

type PageinationData = {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
};

type PagniatedGetResult<T> = Promise<PageinationData & { data: T[] }>;

// From: https://gist.github.com/MrChocolatine/367fb2a35d02f6175cc8ccb3d3a20054

// In TS, interfaces are "open" and can be extended
interface Date {
  /**
   * Give a more precise return type to the method `toISOString()`:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
   */
  toISOString(): DateISO;
}

type TYear = `${number}${number}${number}${number}`;
type TMonth = `${number}${number}`;
type TDay = `${number}${number}`;
type THours = `${number}${number}`;
type TMinutes = `${number}${number}`;
type TSeconds = `${number}${number}`;

/**
 * Represent a string like `2021-01-08`
 */
type TDateISODate = `${TYear}-${TMonth}-${TDay}`;

/**
 * Represent a string like `14:42:34.678`
 */
type TDateISOTime = `${THours}:${TMinutes}:${TSeconds}`;

/**
 * Represent a string like `2021-01-08T14:42:34Z` (format: ISO 8601).
 *
 * It is not possible to type more precisely (list every possible values for months, hours etc) as
 * it would result in a warning from TypeScript:
 *   "Expression produces a union type that is too complex to represent. ts(2590)
 */
type DateISO = `${TDateISODate}T${TDateISOTime}Z`;
