import { Request, Response } from 'express';

import mockbooks from './mockbooks';

interface Book {
  titulo: string;
  autor: string;
  editora: string;
  area: string;
}

let books = mockbooks;

class BookController {
  
  async create(request: Request, response: Response) {
      const data = request.body;
      const book = {
          titulo: data.titulo,
          autor: data.autor,
          editora: data.editora,
          area: data.area
      }
      books.push(book);
      return response.json(book);
  }

  async delete(request: Request, response: Response) {
    const { titulo } = request.params
    const filteredBooks = books.filter(book => book.titulo != titulo);
    books = filteredBooks;
    return response.json("Registro excluído");
  }

  async index(request: Request, response: Response) {
    return response.json(books);
  }
  }


export default BookController;