import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { common, logger, stream } from './config';
import dashboardRouter from './resources/dashboard/dashboard.router';

const app = express();
app.use(
  cors({
    origin: common.corsUrl,
    credentials: true,
  }),
);
app.use(helmet());
app.use(morgan('combined', { stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/health', (_, res) => {
  res.status(200).send('health check version2!@#$');
});

app.use('/dashboard', dashboardRouter);

const { port } = common;
export const start = () => {
  app.listen(port, () => {
    logger.info(`server is on ${port}`);
  });
};
