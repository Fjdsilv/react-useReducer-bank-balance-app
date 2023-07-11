export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD" :
        return {...state, balance: state.balance + action.payload}
  
      case "WITHD" :
        if (state.balance >= action.payload) {
          return {...state, balance: state.balance - action.payload}
        }
        return state
      default:
        return state
    }
  }

  