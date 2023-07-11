import { useReducer } from "react"
import { reducer } from "./reducer";

const initialState = { balance: 15 };

function App() {
const [state, dispatch] = useReducer(reducer, initialState)  

  return (
    <div>
      <h2>Balance: $ {state.balance}</h2>
      <button
        onClick={() => dispatch({ type: "ADD", payload: 10 })}
      >
      Deposite: $10
      </button>
      <button
        onClick={() => dispatch({ type: "WITHD", payload: 4 })}
      >
      Withdraw: $4 if available
      </button>
    </div>
  )
}

export default App
