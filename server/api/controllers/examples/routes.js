import ExamplesController from './controller';
import * as express from 'express';

class ExamplesRoutes {
  constructor() {
    this._router = express.Router();
    this._ec = new ExamplesController();
  }

  init() {
    this._router.get('/', ::this._ec.examples);

    return this._router;
  }
}
export default ExamplesRoutes;