type CriteriaOperator =
  | 'BETWEEN'
  | 'CONTAINS'
  | 'EQUAL'
  | 'FUTURE'
  | 'GREATER_THAN'
  | 'IS_BLANK'
  | 'IS_CHECKED'
  | 'IS_DATE'
  | 'IS_NUMBER'
  | 'IS_NOT_BLANK'
  | 'IS_NOT_CHECKED'
  | 'IS_NOT_DATE'
  | 'IS_NOT_NUMBER'
  | 'LAST_N_DAYS'
  | 'LESS_THAN'
  | 'NEXT_N_DAYS'
  | 'NOT_EQUAL'
  | 'PAST'
  | 'TODAY';

type Criteria = {
  columnId: Column['id'];
  operator: CriteriaOperator;
  values?: string[];
};
