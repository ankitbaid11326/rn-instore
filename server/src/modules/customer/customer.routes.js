import { Router } from 'express';

import { create } from './customer.controller';
import { customerAuth } from './customer';

const routes = Router();

routes.post('/', create);

routes.get('/hello', customerAuth, (req, res) => {
  console.log('req.user', req.user);
  res.send(`${req.user.firstName}`);
});

export default routes;
