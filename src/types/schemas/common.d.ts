type AutoNumberFormat = {
  fill?: '0' | '00' | '000' | '0000' | '00000' | '000000' | '0000000' | '00000000' | '000000000' | '0000000000';
  prefix?: string;
  startingNumber?: number;
  suffix?: string;
};

type BulkItemFailure = {
  rowId?: number;
  error?: SmartsheetError;
  index?: number;
};

type ContainerDestination = {
  destinationId: number;
  destinationType?: 'folder' | 'home' | 'workspace';
  newName?: string;
};

type Currency = {
  code?: string;
  symbol?: string;
};

type SmartsheetError = {
  refId: string;
  errorCode: number;
  message: string;
};

type FontFamily = {
  name: string;
  traits: string[];
};

type FormatTables = {
  defaults: string;
  bold: string[];
  color: string[];
  currency: {};
  dateFormat: string[];
  decimalCount: string[];
  fontFamily: {};
  fontSize: string[];
  horizontalAlign: string[];
  italic: string[];
  numberFormat: string[];
  strikethrough: string[];
  textWrap: string[];
  thousandsSeparator: string[];
  underline: string[];
  verticalAlign: string[];
};

type IndexResult = {
  pageNumber: number;
  pageSize?: number;
  totalPages: number;
  totalCount: number;
};

type Result = {
  version?: number;
  items?: {};
  message: 'PARTIAL_SUCCESS' | 'SUCCESS';
  resultCode: 0 | 3;
};
type DayOfWeek = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

type Hour =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

type DayOfTheMonth =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31;

type LocaleCode =
  | 'ar_AE'
  | 'ar_BH'
  | 'ar_DZ'
  | 'ar_EG'
  | 'ar_IQ'
  | 'ar_JO'
  | 'ar_KW'
  | 'ar_LB'
  | 'ar_LY'
  | 'ar_MA'
  | 'ar_OM'
  | 'ar_QA'
  | 'ar_SA'
  | 'ar_SD'
  | 'ar_SY'
  | 'ar_TN'
  | 'ar_YE'
  | 'be_BY'
  | 'bg_BG'
  | 'ca_ES'
  | 'cs_CZ'
  | 'da_DK'
  | 'de_AT'
  | 'de_CH'
  | 'de_DE'
  | 'de_LU'
  | 'el_CY'
  | 'el_GR'
  | 'en_AU'
  | 'en_CA'
  | 'en_GB'
  | 'en_IE'
  | 'en_IN'
  | 'en_MT'
  | 'en_NZ'
  | 'en_PH'
  | 'en_SG'
  | 'en_US'
  | 'en_ZA'
  | 'es_AR'
  | 'es_BO'
  | 'es_CL'
  | 'es_CO'
  | 'es_CR'
  | 'es_DO'
  | 'es_EC'
  | 'es_ES'
  | 'es_GT'
  | 'es_HN'
  | 'es_MX'
  | 'es_NI'
  | 'es_PA'
  | 'es_PE'
  | 'es_PR'
  | 'es_PY'
  | 'es_SV'
  | 'es_US'
  | 'es_UY'
  | 'es_VE'
  | 'et_EE'
  | 'fi_FI'
  | 'fr_BE'
  | 'fr_CA'
  | 'fr_CH'
  | 'fr_FR'
  | 'fr_LU'
  | 'ga_IE'
  | 'hi_US'
  | 'hr_HR'
  | 'hu_HU'
  | 'in_ID'
  | 'is_IS'
  | 'it_CH'
  | 'it_IT'
  | 'iw_IL'
  | 'ja_JP'
  | 'ko_KR'
  | 'lt_LT'
  | 'lv_LV'
  | 'mk_MK'
  | 'ms_MY'
  | 'mt_MT'
  | 'nl_BE'
  | 'nl_NL'
  | 'no_NO'
  | 'pl_PL'
  | 'pt_BR'
  | 'pt_PT'
  | 'ro_RO'
  | 'ru_RU'
  | 'sk_SK'
  | 'sl_SI'
  | 'sq_AL'
  | 'sr_BA'
  | 'sr_CS'
  | 'sv_SE'
  | 'th_US'
  | 'tr_TR'
  | 'uk_UA'
  | 'vi_VN'
  | 'zh_CN'
  | 'zh_HK'
  | 'zh_SG'
  | 'zh_TW';
