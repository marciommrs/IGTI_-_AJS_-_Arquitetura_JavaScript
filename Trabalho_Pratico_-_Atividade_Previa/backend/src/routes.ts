import express, { request, response } from 'express';

import BookController from './controllers/BookController'

const routes = express.Router();

const bookController = new BookController();
routes.get('/books', bookController.index);
routes.post('/books', bookController.create);
routes.delete('/books/:titulo', bookController.delete);

export default routes;