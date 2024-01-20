interface Sheet {
  /** @description Sheet Id. */
  id?: number;
  /** @description The Id of the template from which to create the sheet. This attribute can be specified in a request, but is never present in a response. */
  fromId?: number;
  /** @description User Id of the sheet owner. */
  ownerId?: number;
  accessLevel?: AccessLevel;
  /**
   * @description Array of Attachment objects.
   * Only returned if the [include](../../tag/sheets#operation/getSheet) query string parameter contains **attachments**.
   */
  attachments?: Attachment[];
  columns?: Column[];
  createdAt?: string | number;
  /**
   * @description Array of CrossSheetReference objects.
   * Only returned if the [include](../../tag/sheets#operation/getSheet) query string parameter contains **crossSheetReferences**.
   */
  crossSheetReferences?: CrossSheetReference[];
  /** @description Indicates whether dependencies are enabled. */
  dependenciesEnabled?: boolean;
  /**
   * @description Array of Discussion objects
   * Only returned if the [include](../../tag/sheets#operation/getSheet) query string parameter contains **discussions**.
   */
  discussions?: Discussion[];
  /** @description Array of enum strings (see [Attachment.attachmentType](../../tag/attachmentsDescription) indicating the allowable attachment options for the current user and sheet. */
  effectiveAttachmentOptions?: string[];
  /** @description Returned only if the user has marked this sheet as a favorite in their Home tab (value = **true**). */
  favorite?: boolean;
  /** @description Indicates whether "Gantt View" is enabled. */
  ganttEnabled?: boolean;
  /** @description Indicates whether a sheet summary is present. */
  hasSummaryFields?: boolean;
  modifiedAt?: string | number;
  /** @description Sheet name. */
  name?: string;
  /** @description Email address of the sheet owner. */
  owner?: string;
  /** @description URL that represents a direct link to the sheet in Smartsheet. */
  permalink?: string;
  projectSettings?: ProjectSettings;
  /** @description Returned only if the sheet belongs to an expired trial (value = **true**). */
  readOnly?: boolean;
  /** @description Indicates that resource management is enabled. */
  resourceManagementEnabled?: boolean;
  /**
   * @description Resource Management type. Indicates the type of RM that is enabled.
   * @enum {string}
   */
  resourceManagementType?: 'NONE' | 'LEGACY_RESOURCE_MANAGEMENT' | 'RESOURCE_MANAGEMENT_BY_SMARTSHEET';
  rows?: Row[];
  /** @description Returned only if there are column filters on the sheet. Value = **true** if "show parent rows" is enabled for the filters. */
  showParentRowsForFilters?: boolean;
  source?: { id: number; type: Source };
  summary?: Field[];
  /** @description The total number of rows in the sheet. */
  totalRowCount?: number;
  userPermissions?: Pick<UserPermissions, 'summaryPermissions'>;
  userSettings?: Pick<UserSettings, 'criticalPathEnabled' | 'displaySummaryTasks'>;
  /** @description A number that is incremented every time a sheet is modified. */
  version: number;
  workspace?: Workspace;
}
