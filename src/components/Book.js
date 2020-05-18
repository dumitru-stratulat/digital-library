import React,{useEffect} from 'react'
import { Button,Row,Col } from 'antd';
import { Link } from 'react-router-dom'
import "antd/dist/antd.css";
import { useTheme } from "../context/ThemeContext";

const Book = ({book,onSubmit,submitButtonText,state}) => {
    const {name,id,author,category,genre} = book
    const {dark} = useTheme();

    return (
        <Col className="gutter-row" align="center" xl={6} md={6}>
            <div className="cart">
                <Row justify="center">
                    <Col className="bookname" >
                        <p className="bookname__text">{name}</p>
                    </Col>
                </Row>

                <p className="bookauthor__text">{author}</p>
                <p className="bookgenre__text" >{category}</p>
                <div>
                   { onSubmit ? 
                        <Button
                            className="bookbutton"
                            size="small"
                            type="primary"
                            onClick={() => {
                                if (Object.keys(onSubmit)[0] == 'setSelectedBookId') {
                                    onSubmit.setSelectedBookId(id)
                                    onSubmit.setShowModal(true)
                                }
                                if (Object.keys(onSubmit)[0] == 'addbook') {
                                    onSubmit.addbook(name, id, author, category, genre, state,dark)
                                }
                            }}
                        >
                            {submitButtonText}
                        </Button>
                    : null }  

                    { onSubmit && submitButtonText != 'Leave feedback'  ? 
                    <Button
                        className="bookbutton"
                        size="small"
                        type="primary"
                        onClick={() => {
                        }}>
                        <Link to={`/shelf/${id}`}>Details</Link>
                    </Button>
                    : null }
                </div>
            </div>
        </Col>
    )
}

export default Book
