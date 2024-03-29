import React from 'react'
import users from '../../asset/image/avatar.svg'
const UserCard = () => {
    return (
        <div className='container'>
            <li class="list-group-item d-flex justify-conpxtent-between align-items-start">
            <img src={users} alt="avtar" style={{height:"50px"}}/>
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Subheading</div>
                    Content for list item
                </div>
                <a className='float-end' href='/'><i class="fa-sharp fa-solid fa-trash fas fa-star"></i></a>
            </li>
        </div>
    )
}

export default UserCard