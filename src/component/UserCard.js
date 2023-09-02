import React from 'react'

const UserCard = () => {
    return (
        <>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Subheading</div>
                    Content for list item
                </div>
            <a className='float-end' href='/'><i class="fa-sharp fa-solid fa-trash fas fa-star"></i></a>
            </li>
        </>
    )
}

export default UserCard