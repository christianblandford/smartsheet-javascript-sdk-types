type LogLevel = 'trace' | 'info' | 'error' | 'warn';
type Logger = any;
type LoggerContainer = any;

type ClientOptions = {
  accessToken?: string;
  userAgent?: string;
  baseUrl?: string;
} & ({ logLevel: LogLevel } | { logger: Logger } | { loggerContainer: LoggerContainer });

interface SmartsheetClient {
  constants: any;
  contacts: any;
  events: any;
  favorites: any;
  folders: any;
  groups: any;
  home: any;
  images: any;
  reports: Reports;
  request: any;
  search: any;
  server: any;
  sheets: Sheets;
  sights: any;
  templates: any;
  tokens: any;
  users: any;
  webhooks: Webhooks;
  workspaces: any;
}
