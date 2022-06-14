import React from 'react'
import Styles from "./ListItem.module.css"

const ListItem = ({item,deleteItem,id}) => {
    const deleteTask = () => {
        deleteItem(id);
    }

  return (
    <div className={Styles.container}>
        <p>{item}</p>
        <button onClick={deleteTask}>delete</button>
    </div>
  )
}

export default ListItem