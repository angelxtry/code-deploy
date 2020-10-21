import { resolve } from 'path';
import { config } from 'dotenv';

config({ path: resolve(__dirname, '../../.env') });

type AwsParams = {
  region: string;
  awsAccountId: string;
  dashboardId: string;
  identityType: string;
};

export const awsParams: AwsParams = {
  region: process.env.REGION || '',
  awsAccountId: process.env.AWS_ACCOUNT_ID || '',
  dashboardId: process.env.DASHBOARD_ID || '',
  identityType: process.env.IDENTITY_TYPE || '',
};
