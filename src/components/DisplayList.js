import React from 'react'
import { connect } from 'react-redux'
import UserInput from './UserInput'

const UserInputList = ({ inputList, history }) => {

  const backButtonHandler = () => {
    history.replace('/');
  }

  return (
    < React.Fragment >
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {inputList.map(input =>
            <UserInput
              key={input.id}
              {...input}
            />
          )}
        </tbody>
      </table>
      <div className='row'>
        <input type="button" value="Back" onClick={backButtonHandler} />
      </div>
    </React.Fragment >
  )
}


const mapStateToProps = (state) => {
  return {
    inputList: state
  }
}

export default connect(mapStateToProps)(UserInputList)