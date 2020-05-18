import React, {useState, useEffect,useContext} from 'react';
import '../App.css';
import {Context as ShelfContext} from '../context/ShelfContext'
import Book from '../components/Book'
import { Row } from 'antd';
import { Form } from 'antd';
import "antd/dist/antd.css";
import ReviewModal from '../components/ReviewModal';
import { useTheme } from "../context/ThemeContext";
import CategoryInput from '../components/CategoryInput';

const style = { background: '#0092ff', padding: '8px 0' };


const Shelf = () => {
    const [category,setCategory] = useState('')
    const  {state,addCategory} = useContext(ShelfContext)
    const [showModal,setShowModal] = useState(false)
    const [selectedBookId,setSelectedBookId] = useState(null)
    const { books:{shelf} } = state
    const {dark} = useTheme();
    const [form] = Form.useForm();

    useEffect(() => {

    }, [])

    return (
        <div className="App">            
            <Row align="center" justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            
            {state.shelf.map((e) => ( 
                e.books.map((book,index) => (  
                    <Book
                            book={book}
                            onSubmit={{setSelectedBookId,setShowModal}}
                            submitButtonText={"Rate"}
                            key={index}
                        />
                ))
            ))}
            </Row>
            <ReviewModal
                showModal={showModal}
                setShowModal={setShowModal}
                selectedBookId={selectedBookId}
            />
            <Row justify="center" style={{ padding: '20px 0 40px 0' }}>
                <CategoryInput
                    onSubmit={{ setCategory, addCategory }}
                    state={state}
                    dark={dark}
                />
            </Row>
        </div>
    )
}

export default Shelf