import React from 'react'
import { connect } from 'react-redux'
import UserInput from './userInput'

const UserInputList = ({ inputList }) => (
  <ol>
    {inputList.map(input =>
      <UserInput
        key={input.id}
        {...input}
      />
    )}
  </ol>
)


const mapStateToProps = (state) => {
  return {
    inputList: state
  }
}



export default connect(mapStateToProps)(UserInputList)