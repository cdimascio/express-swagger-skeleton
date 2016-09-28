import * as express from 'express';
import controller from './controller'
export default express.Router()
    .get('/examples', ::controller.examples)
    .get('/examples/:id', ::controller.example);