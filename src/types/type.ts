export interface QuickSightData {
  Status: number;
  EmbedUrl: string;
  RequestId: string;
}

export interface QuickSightOption {
  AwsAccountId: string;
  DashboardId: string;
  IdentityType: string;
  SessionLifetimeInMinutes: number;
  UndoRedoDisabled: boolean;
}
