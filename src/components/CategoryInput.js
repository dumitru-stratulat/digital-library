import React,{useState} from 'react';
import '../App.css';

const CategoryInput = ({onSubmit:{addCategory},state,dark}) => {
    const [category,setCategory] = useState('')
    return (
        <>
            <input
                type="text"
                value={category}
                onChange={(newCategory) => { setCategory(newCategory.target.value) }}
                style={{
                    backgroundColor: dark ? '#161617' : null,
                    border: '1px solid #5A5753',
                }}
                className="category-input"
            />
            <button type="submit" className="category-input-button"
                style={{
                    backgroundColor: dark ? '#161617' : null,
                    border: '1px solid #5A5753',
                }}
                onClick={() => {
                    addCategory(category, state, dark)
                    setCategory('')
                }}
            >
                Add category
            </button>
        </>
    )
}

export default CategoryInput
