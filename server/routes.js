import examplesRouter from './api/controllers/example/router'
export default function routes(app) {
  app.use('/api/v1',examplesRouter);
};