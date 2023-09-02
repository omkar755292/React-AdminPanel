import React from 'react'

const MessageCard = (props) => {
    return (
        <>
            <a href="/" class="list-group-item list-group-item-action active mb-1">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">send by {props.message.name}</h5>
                    <a href="/"><i class="fa-solid fa-lg fa-xmark" style={{ color: "white" }}></i></a>
                </div>
                <p class="mb-1">Message: {props.message.message}</p>
                <p>Email Id: {props.message.email}</p>
                <small>{props.message.createdAt}</small>
                <i class="fa-solid fa-reply fa-lg float-end"></i>
            </a>
        </>
    )
}

export default MessageCard