import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer';
import {Notification} from '../components/Notification'


const shelvReducer = (state,action) => { 
    switch(action.type) {
        case 'get_books':
            return {shelf: state.shelf,books: action.payload}

        case 'add_book':
            const { book,shelfIndex } = action.payload
            state.shelf[shelfIndex].books.push(book)
            return { ...state }

        case 'add_category':
            state.shelf.push(action.payload)
            return { ...state }   
        case 'add_error':
            return { ...state, errorMessage: action.payload }   

        default:
            return state;
    }
}

const getBooks = dispatch => async() => {
    const response = await jsonServer.get('/books')
    dispatch({type: 'get_books', payload: response.data})
}

const addbook = dispatch => (name,id,author,category,genre,state,isDark) => {
    let isBookExist; 
    let shelfIndex
    const book = { name,id,author,category,genre }

    state.shelf.map((x,i) => {

        if (x.category === category) { shelfIndex = i }
        
        if (x.books.some(e => e.id === id)) {
            isBookExist = true
        }
    })
   
    if (shelfIndex >-1 && !isBookExist) {
        dispatch({ type: 'add_book',payload:{book,shelfIndex}})
        Notification('Succes','Book succesfully added on shelf ',isDark)

    }else {
        const message = isBookExist ? 'Book already exist in shelf.': 'Category not found in shelf.'

        dispatch({ type: 'add_error',payload: message});
        Notification('Something went wrong',message,isDark)
    }
}

const addCategory = dispatch => (category,isDark) => {
    let emtpyShelf = { category, books: []}
    dispatch({ type: 'add_category',payload: emtpyShelf})
    Notification('Succes','Category succesfully added',isDark)
}

export const { Context, Provider } = createDataContext(
    shelvReducer,
    {addbook,addCategory,getBooks},
    {
        shelf: [
            {
                category: "Book Category 1",
                books: [
                    { name: "The Saying Of Confucius", id: 1, author: "Confucius",category: "Book Category 1",genre: "History",rate: 5 }
                ]
            },
            {
                category: "Book Category 2",
                books: [
                    { name: "The Secret Agent", id: 3, "author": "Joseph Conrad",category: "Book Category 2",genre:"Fiction",rate: 5 }, 
                    { name: "Being Earnest", id: 4, author: "Edward Gibbon",category: "Book Category 2",genre:"Fiction",rate: 5 },
                ]
            },
            
        ],
        books:[],
        errorMessage: ''
    }
)

