import { logger, awsParams } from '../config';
import { QuickSightData, QuickSightOption } from '../types/type';

interface GetDashboard {
  option: QuickSightOption;
  callback: (data: QuickSightData) => void;
}

const AWS = require('aws-sdk');

const quicksight = new AWS.Service({
  apiConfig: require('./quicksight-2018-04-01.min.json'),
  region: awsParams.region,
  // region: 'ap-southeast',
});

export function getDashborad({ option, callback }: GetDashboard): void {
  try {
    quicksight.getDashboardEmbedUrl(option, function (err: any, data: QuickSightData) {
      if (data && data.EmbedUrl) {
        logger.info(`${data.EmbedUrl}`);
      }
      if (err) {
        logger.error(err);
        logger.error(data);
      }
      callback(data);
    });
  } catch (e) {
    logger.error(`getDashborad Exception: ${e}`);
  }
}
