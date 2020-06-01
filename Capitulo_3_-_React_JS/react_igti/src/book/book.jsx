import React, { Component } from 'react';

import PageHeader from '../template/pageHeader';
import BookForm from './bookform';
import BookList from './bookList';

export default class Book extends Component {
    
    constructor(props) {
        super(props);
        this.state = { nome: '', autor: '', preco: '', list: []};
    }

    render() {
        return (
            <div>
                <PageHeader name='cadastro' small='Livros'></PageHeader>
                <BookForm />
                <BookList />
            </div>
        );
    }
}