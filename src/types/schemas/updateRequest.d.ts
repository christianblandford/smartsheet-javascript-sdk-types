type UpdateRequest = {
  rowIds: Row['id'][];
  columnIds: Column['id'][];
  includeAttachments: boolean;
  includeDiscussions: boolean;
  layout: 'HORIZONTAL' | 'VERTICAL';
  ccMe: boolean;
  message: string;
  sendto: Recipient[];
  subject: string;
  id: number;
  createdAt: string | number;
  modifiedAt: string | number;
  schedule: Schedule;
};

type PolymorphicScheduleDetails =
  | {
      type: 'MONTHLY';
      dayOrdinal: 'FIRST' | 'LAST' | 'SECOND' | 'THIRD' | 'FOURTH';
      dayOfMonth: DayOfTheMonth;
      repeatEvery: AllowedRepeatValues;
      endAt: DateISO | number;
      dayDescriptors: (DayOfWeek | 'DAY' | 'WEEKDAY' | 'WEEKEND')[];
    }
  | { type: 'ONCE' }
  | {
      type: 'DAILY';
      repeatEvery: AllowedRepeatValues;
      endAt: DateISO | number;
      dayDescriptors: ['WEEKDAY'];
    }
  | { type: 'WEEKLY'; repeatEvery: AllowedRepeatValues; endAt: DateISO | number; dayDescriptors: DayOfWeek[] }
  | { type: 'YEARLY'; repeatEvery: AllowedRepeatValues; endAt: DateISO | number };

type Schedule = PolymorphicScheduleDetails & {
  startAt: number | DateISO;
  sendBy: CreatedBy<string>;
  lastSentAt?: string | number;
  nextSendAt?: string | number;
};

type SendUpdateRequest = {
  id: number;
  columnIds: Column['id'][];
  rowIds: Row['id'][];
  updateRequestId: UpdateRequest['id'];
  includeAttachments: boolean;
  includeDiscussions: boolean;
  message: string;
  sentAt: string | number;
  sentBy: CreatedBy<string>;
  sentTo: Recipient;
  status: 'CANCELED' | 'COMPLETE' | 'PENDING';
  subject: string;
};

type AllowedRepeatValues =
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
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 67
  | 68
  | 69
  | 70
  | 71
  | 72
  | 73
  | 74
  | 75
  | 76
  | 77
  | 78
  | 79
  | 80
  | 81
  | 82
  | 83
  | 84
  | 85
  | 86
  | 87
  | 88
  | 89
  | 90
  | 91
  | 92
  | 93
  | 94
  | 95
  | 96
  | 97
  | 98
  | 99;
