import React, { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({book, onDelete, onEdit}) => {
  const [showEdit, setShowEdit] = useState(false)
  const handleDeleteClick = () => {
    onDelete(book.id)
  }
  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }
  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false)
  }
  let content = <h3>{book.title}</h3>
  if(showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />
  }
  return (
    <div className='book-show'>
      <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`}/>
      <div>{content}</div>
      <div className='actions'>
        <button onClick={handleEditClick} className='edit'>Edit</button>
        <button onClick={handleDeleteClick} className='delete'>Delete</button>
      </div>
    </div>
  )
}

export default BookShow;