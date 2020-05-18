import React, {useState, useEffect, useContext} from 'react';
import {Context as ShelfContext} from '../context/ShelfContext'
import {Context as ReviewContext} from '../context/ReviewContext'
import { Rate } from 'antd';
import Book from '../components/Book'
import ReviewModal from '../components/ReviewModal'
import '../App.css';

function Item({ match:{params:{url}} }) {
  const  {state:{books},state,getBooks} = useContext(ShelfContext)
  const  {state:{review}} = useContext(ReviewContext)

  const [showModal,setShowModal] = useState(false)
  const [selectedBookId,setSelectedBookId] = useState(null)

  const [book,setBook] = useState([])
  const [feedback,setFeedback] = useState([])

    useEffect(()=>{
       getBooks()
       fetchBooks()
       fetchReview()

    },[state.books.length,review]) 
    
  const fetchBooks = () => {
    let currentBook

    books.find((e, index) => {
      return currentBook = e.books.find((e, index) => e.id === parseInt(url))
    })
    if(currentBook){setBook([currentBook])}
  }

  const fetchReview = () => {
    let currentReview
    currentReview = review.find((e, index) => e.bookId === parseInt(url))
    
    if (currentReview){setFeedback(currentReview.feedback)}
  }

       
  return (
      <div className="App">
       {book.length > 0 ? book.map((item)=>(  
        <>
           <Book
              book={book[0]}
              onSubmit={{setSelectedBookId,setShowModal}}
              submitButtonText={"Leave feedback"}
             />
        </>
      )) : <div className="book">No item found</div>}

      <ReviewModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedBookId={selectedBookId}
      />

       {feedback.length > 0 ? feedback.map((item,index)=>( 
         <div className="review">
           <Rate disabled defaultValue={item.rate} />
           <div>{item.comment}</div>
         </div>
       )) : <p className="review">No rates yet</p> }

      </div>
  );
}

export default Item;
