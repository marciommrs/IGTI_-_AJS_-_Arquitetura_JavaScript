import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => {
    return (
        <div role='form' className='bookForm'>
            <Grid cols='4'>
                <input id='nome' className='form-control' 
                    placeholder='Adicione um livro' 
                    value={props.nome}/>
            </Grid>
            <Grid cols='4'>
                <input id='autor' className='form-control' 
                    placeholder='Adicione o autor do livro' 
                    value={props.autor}/>
            </Grid>
            <Grid cols='2'>
                <input id='preco' className='form-control' 
                    placeholder='Adicione o preço do livro' 
                    value={props.preco}/>
            </Grid>
            <Grid cols='2'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='close' onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    );
}