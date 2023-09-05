import React from 'react'

const MessageCard = (props) => {
    const deleteMessage = (e) => {
        e.preventDefault();
        props.handleDelete(props.message._id)

    }
    const emailId = props.message.email;
    return (
        <>
            <div class="list-group-item list-group-item-action active mb-1">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">send by {props.message.name}</h5>
                    <button onClick={deleteMessage} className='btn btn-link'><i class="fa-solid fa-lg fa-xmark" style={{ color: "white" }}></i></button>
                </div>
                <p class="mb-1">Message: {props.message.message}</p>
                <p>Email Id: {emailId}</p>
                <small>{props.message.createdAt}</small>
                <a href={`mailto:${emailId}`} className='btn float-end'><i style={{ color: "white" }} class="fa-solid fa-reply fa-lg "></i></a>
            </div>
        </>
    )
}

export default MessageCard