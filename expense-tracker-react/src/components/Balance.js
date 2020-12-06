import React, {useContext} from 'react'
import { GlobalContext} from '../context/GlobalState';


export const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const balance = transactions.map( transaction => transaction.amount);

    const total = balance.reduce((acc,item) => (acc += item),0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}
