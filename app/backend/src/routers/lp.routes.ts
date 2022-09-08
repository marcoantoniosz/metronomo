import * as express from 'express';
import Controller from '../controllers/lp.controller';

export default class LpRoutes {
  public router = express.Router();

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/lps', Controller.getAll);
    this.router.get('/lps/:id', Controller.getOne);
    this.router.post('/lps', Controller.create);
    this.router.patch('/lps/:id', Controller.updatePrice);
    this.router.put('/lps/:id', Controller.update);
    this.router.delete('/lps/:id', Controller.delete);
  }
}
