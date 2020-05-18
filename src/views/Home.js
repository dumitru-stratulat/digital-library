
import React, { useEffect,useContext} from 'react';
import '../App.css'
import {Context} from '../context/ShelfContext'
import Book from '../components/Book'
import { Row } from 'antd';
import "antd/dist/antd.css";

const Home = () => {
    const  {state,addbook,getBooks} = useContext(Context)

    useEffect( ()=>{
          getBooks()
    },[]) 

  return (

      <div className="App">
          <Row align="center" justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {state.books.map(item => (
                  item.books.map((book, i) => (
                      <Book
                          book={book}
                          onSubmit={{ addbook }}
                          submitButtonText={"Add"}
                          state={state}
                          key={i}
                      />
                  ))
              ))}
          </Row>
      </div>

  );
}


export default Home;

