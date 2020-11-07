import React from 'react'
 
const List = (props) => {
    return(
        <div className="container">
            <h1>Grocery List</h1>
            <ul>
                {props.list.map(item => <li key={item.id}>{item.item} </li>)}
            </ul>
        </div>
    )
}

export default List;