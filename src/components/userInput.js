import React from 'react'

const UserInput = ({ input }) => (
    <React.Fragment>
        <tr>
            <td>{input.fname}</td>
            <td>{input.lname}</td>
            <td>{input.phone}</td>
            <td>{input.email}</td>
            <td>{input.addr}</td>
        </tr>
    </React.Fragment>
)

export default UserInput
