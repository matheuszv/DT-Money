import { useContext } from "react"
import { Header } from "../../header/header"
import { Summary } from "../../header/summary/summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighLight, TransactionContainer, TransactionsFooter, TransactionsOnes, TransactionsTitle, TransactionTable, TrasactionDiv } from "./styles"
import { TransactionContext } from "../../contexts/TransactionsContext"
import { dateFormmater } from "../../utils/fommarts"
import { CalendarBlank, TagSimple, Trash } from "phosphor-react"

interface Transaction {
    id: string,
    description: string,
    type: 'income' | 'outcome',
    price: number,
    category: string,
    createdAt: string,
}


export function Transaction(){
    

    const { transactions, deleteTransactions } = useContext(TransactionContext)

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
                                <td width="50%">{transaction.description}</td>
                                <td id="type">
                                    <PriceHighLight variant={transaction.type}>
                                        {transaction.type=='income' ? 'R$ ' + transaction.price : '– R$ ' + transaction.price}
                                    </PriceHighLight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dateFormmater(transaction.createdAt)}</td>
                                <td><button onClick={() => deleteTransactions(transaction.id)}><Trash size={22}/></button> </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </TransactionTable>
                <TrasactionDiv>
                    {transactions.map(transaction => {
                                return(
                                    <TransactionsOnes key={transaction.id}>
                                        <TransactionsTitle>
                                            <span>{transaction.description}</span>
                                            <button onClick={() => deleteTransactions(transaction.id)}><Trash size={22}/></button>
                                        </TransactionsTitle>
                                        <PriceHighLight variant={transaction.type}>
                                            {transaction.type=='income' ? 'R$ ' + transaction.price : '– R$ ' + transaction.price}
                                        </PriceHighLight>
                                        <TransactionsFooter>
                                            <span><TagSimple size={16} /> {transaction.category}</span>
                                            <span><CalendarBlank size={16} /> {dateFormmater(transaction.createdAt)}</span>
                                        </TransactionsFooter>
                                    </TransactionsOnes>
                                )
                            })
                        }
                </TrasactionDiv>
            </TransactionContainer>
        </div>
    )
}