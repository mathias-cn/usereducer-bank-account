import { useReducer } from "react"
import { ActionForm } from "./components/actionForm"
import { Balance } from "../balance"
import { Divider } from "../divider"
import { Header } from "../header"

interface LoggedInProps {
    user: string
    setUser: (name: null) => void
}

type State = {
    balance: number,
    loan: number
    status: "open" | "closed"
}
type Action = {
    type: "deposit" | "withdraw" | "loanReq" | "loanPay",
    payload: number
} | {
    type: "closeAccount"
}

const initialState: State = {
    balance: 0,
    loan: 0,
    status: "open"
}
function reducer(state: State, action: Action): State {
    switch(action.type) {
        case "deposit":
            return { ...state, balance: state.balance + action.payload }
        case "withdraw":
            return { ...state, balance: state.balance - action.payload }
        case "loanReq":
            return { ...state, balance: state.balance + action.payload, loan: action.payload }
        case "loanPay":
            return { ...state, balance: state.balance - action.payload, loan: state.loan - action.payload }
        case "closeAccount":
            return { balance: 0, loan: 0, status: "closed" }
        default:
            throw new Error("Sorry, there was an error ;(")
    }
}
export function LoggedIn({ user, setUser }: LoggedInProps) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {balance, loan, status} = state

    if(status === "closed") setUser(null)

    function handleDeposit(val: number) {
        dispatch({ type: "deposit", payload: val })
    }
    function handleWithdraw(val: number) {
        dispatch({ type: "withdraw", payload: val })
    }
    function handleLoanReq(val: number) {
        dispatch({ type: "loanReq", payload: val })
    }
    function handleLoanPay(val: number) {
        dispatch({ type: "loanPay", payload: val })
    }
    function handleCloseAccount() {
        dispatch({ type: "closeAccount" })
    }

    return (
        <>
            <Header name={user} closeHandler={balance === 0 && loan === 0 ? handleCloseAccount : () => {}} />
            <Divider />
            <div className="space-y-6">
                <Balance balance={balance} loan={loan} />

                <Divider />

                <div className="space-y-3 w-full">
                    <ActionForm type="deposit" placeholder="Deposit" dispatchFn={handleDeposit} />
                    <ActionForm type="withdraw" placeholder="Withdraw" dispatchFn={handleWithdraw} maxVal={balance} />
                    {loan === 0 && <ActionForm type="loanReq" placeholder="Make Loan" dispatchFn={handleLoanReq} />}
                    {loan > 0 && <ActionForm type="loanPay" placeholder="Pay Loan" dispatchFn={handleLoanPay} maxVal={loan < balance ? loan : balance} />}
                </div>
            </div>
        </>
    )
}