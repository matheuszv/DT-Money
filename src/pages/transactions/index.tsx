import { useContext } from "react"
import { Header } from "../../header/header"
import { Summary } from "../../header/summary/summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighLight, TransactionContainer, TransactionTable } from "./styles"
import { TransactionContext } from "../../contexts/TransactionsContext"
import { dateFormmater } from "../../utils/fommarts"

interface Transaction {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    price: number,
    category: string,
    createdAt: string,
}


export function Transaction(){

    const { transactions } = useContext(TransactionContext)

    return(
        <div>
            <Header/>
            <Summary/>
            <TransactionContainer>
            <SearchForm/>
                <TransactionTable>
                    <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td width="55%">{transaction.description}</td>
                                <td>
                                    <PriceHighLight variant={transaction.type}>
                                        {transaction.type=='income' ? 'R$ ' + transaction.price : '– R$ ' + transaction.price}
                                    </PriceHighLight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dateFormmater(transaction.createdAt)}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </div>
    )
}