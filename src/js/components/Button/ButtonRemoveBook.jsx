import React from 'react'

const ButtonRemoveBook = ({handleDelete}) => {
    return (
        <button data-testid="test-button-delete" className="btn btn-close btn-delete" onClick={handleDelete}></button>
    )
}

export default ButtonRemoveBook