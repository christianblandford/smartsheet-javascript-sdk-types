type FontTraits = 'sans-serif' | 'serif';

type FontFamilyMember = {
  name: string;
  traits: FontTraits[];
};

type Formats = {
  defaults: string;
  bold: string[];
  color: string[];
  currency: Currency[];
  dateFormat: string[];
  decimalCount: string[];
  fontFamily: FontFamilyMember[];
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

type ServerInfo = {
  formats: Formats;
  supportedLocales: LocaleCode[];
};
