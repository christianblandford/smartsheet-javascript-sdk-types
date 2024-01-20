interface Reports {
  listReports(options?: { modifiedSince: string | number }): PagniatedGetResult<Report>;
}
