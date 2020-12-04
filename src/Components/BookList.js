import React,{useContext, useState} from 'react'
import {ThemeContext} from '../Context.js/ThemeContext'

function BookList() {
    const{isLight , light , dark} = useContext(ThemeContext);
    const ui = isLight ? light : dark;
    const [books , setBooks] = useState([
        {name : "htmlcss" , author : 'jon ducket'},
        {name : "React" , author : 'dave ceddia'},
        {name : "js" , author : 'Mark mayers'},

    ])
    return (
        <div style = {{backgroundColor: ui.bg, color: ui.text}}>
            <ul>
                {books.map((item) => (
                    <li key= {item.name}> 
                        {`${item.name} is written by ${item.author}`}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList;
