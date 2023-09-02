import React from 'react'
import { Link } from 'react-router-dom'

const DashbordBar = () => {
    return (
        <>
            <nav>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/dashbord/adduser">Add User</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/dashbord/addblog">Add Blog</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/dashbord/addproject">Add Project</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default DashbordBar