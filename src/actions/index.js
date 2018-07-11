let userInputdataId = 0
export const addTolist = input => ({
  type: 'ADD_USERINPUT',
  id: userInputdataId++,
  input
})