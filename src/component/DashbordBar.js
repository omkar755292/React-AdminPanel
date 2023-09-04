import React from 'react'

const DashbordBar = (props) => {

    return (
        <>
            <nav>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <button class="nav-link active"
                            onClick={(e) => { e.preventDefault(); props.viewInfo() }}>Info</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link active"
                            onClick={(e) => { e.preventDefault(); props.addUser() }}>Add User</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link"
                        onClick={(e) => { e.preventDefault(); props.addBlog() }}>Add Blog</button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link"
                        onClick={(e) => { e.preventDefault(); props.addProject() }}>Add Project</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default DashbordBar