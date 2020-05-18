import createDataContext from './createDataContext'

const reviewReducer = (state,action) =>{ //(state,action)
    const {reviewIndex,newReview,bookId} = action.payload
    switch(action.type) {
        case 'add_existing_book_review':
            state.review[reviewIndex].feedback.push(newReview)
            return {...state}

        case 'add_review':
            return {...state, review:[...state.review,{bookId,feedback:[newReview]}]}

        default:
            return state;
    }
}

const addReview = dispatch => ({comment},rate,review,bookId) => {
    let reviewIndex
    const newReview = { rate, comment }

            if(review.some((e,index) => {return (reviewIndex = index, e.bookId === bookId)})){
                return dispatch({ type: 'add_existing_book_review',payload: {reviewIndex,newReview}})
            }else{
                return dispatch({ type: 'add_review',payload: {bookId,newReview}})
            }
}

export const { Context, Provider } = createDataContext(
    reviewReducer,
    {addReview},{review: [ 

            {
                bookId: 1,
                feedback: [{ rate: 3,comment:"Awesome book" }, { rate: 5, comment: "Good book"}]
            },
           
        ]
    }
)
