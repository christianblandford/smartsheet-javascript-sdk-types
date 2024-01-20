type IcalOptions = { icalEnabled: true; icalUrl: string } | { icalEnabled: false };

type ReadOnlyFullOptions =
  | {
      readOnlyFullEnabled: true;
      readOnlyFullAccessibleBy: 'ALL' | 'ORG' | 'SHARED';
      readOnlyFullUrl: string;
    }
  | { readOnlyFullEnabled: false };

type ReadOnlyLiteOptions =
  | { readOnlyLiteEnabled: false }
  | { readOnlyLiteEnabled: true; readOnlyLiteSslUrl: string; readOnlyLiteUrl: string };

type ReadWriteOptions =
  | { readWriteEnabled: false }
  | {
      readWriteEnabled: true;
      readWriteAccessibleBy: 'CALENDAR' | 'CARD' | 'GRID';
      readWriteUrl: string;
    };

type SheetPublish = IcalOptions & ReadOnlyFullOptions & ReadOnlyLiteOptions & ReadWriteOptions;
