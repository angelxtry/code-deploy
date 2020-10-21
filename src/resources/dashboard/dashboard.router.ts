import { Router } from 'express';
import { getDashboardUrl } from './dashboard.controllers';

const router = Router();

router.get('/', getDashboardUrl);

export default router;
