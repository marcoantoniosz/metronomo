import * as express from 'express';

export default class LpRoutes {
  public router = express.Router();

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/lps', (req, res) => {
      res.send({ message: 'Hello World!' });
    });
  }
}
