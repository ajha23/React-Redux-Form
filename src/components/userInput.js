import React from 'react'

const UserInput = ({input}) => (
    <li>
        <ul>
            <li>{input.fname}</li>
            <li>{input.lname}</li>
            <li>{input.phone}</li>
            <li>{input.email}</li>
            <li>{input.addr}</li>
        </ul>
    </li>
)



export default UserInput