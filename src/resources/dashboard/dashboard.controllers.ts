import { Request, Response } from 'express';
import { QuickSightData, QuickSightOption } from '../../types/type';
import { getDashborad } from '../../utils';
import { awsParams } from '../../config';

export const getDashboardUrl = (_: Request, res: Response) => {
  const option: QuickSightOption = {
    AwsAccountId: awsParams.awsAccountId,
    DashboardId: awsParams.dashboardId,
    IdentityType: awsParams.identityType,
    SessionLifetimeInMinutes: 100,
    UndoRedoDisabled: false,
  };

  const callback = (data: QuickSightData) => {
    res.status(200).send({
      status: 'success',
      message: 'QuickSight',
      data,
    });
  };
  getDashborad({ option, callback });
};
