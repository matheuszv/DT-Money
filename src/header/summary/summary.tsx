import { useContext } from "react"
import { TransactionContext } from "../../contexts/TransactionsContext"
import { SummaryCard, SummaryContainer } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"

export function Summary(){

    const { transactions } = useContext(TransactionContext)

    const summary = transactions.reduce(
    (acc, transaction) => {
        if(transaction.type == 'income'){
            acc.income+= transaction.price
            acc.total+= transaction.price
        } else {
            acc.outcome +=transaction.price
            acc.total-=transaction.price
        }

        return acc;
    },
    {
        income: 0,
        outcome: 0,
        total: 0,
    }
    )

    function moneyToString(data: number){
        return data.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return(
     <SummaryContainer>
        <SummaryCard>
            <header>
                <span>Entradas</span>
                <ArrowCircleUp size={32} color="#00b37e"/>
            </header>
            <strong>{moneyToString(summary.income)}</strong>
        </SummaryCard>
        <SummaryCard>
            <header>
                <span>Saídas</span>
                <ArrowCircleDown size={32} color="#f75a68"/>
            </header>
            <strong>{moneyToString(summary.outcome)}</strong>
        </SummaryCard>
        <SummaryCard variant="green">
            <header>
                <span>Total</span>
                <CurrencyDollar size={32} color="#fff"/>
            </header>
            <strong>{moneyToString(summary.total)}</strong>
        </SummaryCard>
     </SummaryContainer>   
    )
}