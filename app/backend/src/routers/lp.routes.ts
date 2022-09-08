import * as express from 'express';
import Controller from '../controllers/lp.controller';
import Middleware from '../middlewares/lp.middleware';

export default class LpRoutes {
  public router = express.Router();

  constructor() {
    this.router = express.Router();
    this.getRoutes();
    this.postRoutes();
    this.putRoutes();
    this.patchRoutes();
    this.deleteRoutes();
  }

  private getRoutes(): void {
    this.router.get(
      '/lps',
      Controller.getAll,
    );

    this.router.get(
      '/lps/search',
      Middleware.validateQuery,

      Controller.getBySearchTerm,
    );

    this.router.get(
      '/lps/:id',
      Middleware.validateId,

      Controller.getOne,
    );
  }

  private postRoutes(): void {
    this.router.post(
      '/lps',
      Middleware.validateBody,

      Controller.create,
    );
  }

  private putRoutes(): void {
    this.router.put(
      '/lps/:id',
      Middleware.validateBody,

      Middleware.validateId,

      Controller.update,
    );
  }

  private patchRoutes(): void {
    this.router.patch(
      '/lps/:id',
      Middleware.validatePrice,

      Middleware.validateId,

      Controller.updatePrice,
    );
  }

  private deleteRoutes(): void {
    this.router.delete(
      '/lps/:id',
      Middleware.validateId,

      Controller.delete,
    );
  }
}
