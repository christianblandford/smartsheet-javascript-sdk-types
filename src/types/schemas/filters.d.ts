type FilterType = 'PERSONAL' | 'SHARED';

type Filters = {
  id: number;
  excludeSelected: boolean;
  filterType: FilterType;
  query: FilterQuery;
};

type FilterQuery = {
  operator: 'AND' | 'OR';
  criteria: Criteria[];
  includeParent: boolean;
};
