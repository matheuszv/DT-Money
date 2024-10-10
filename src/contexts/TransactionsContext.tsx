import { createContext, ReactNode, useEffect, useState } from "react"

interface Transaction {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    price: number,
    category: string,
    createdAt: string,
}

interface createTransactions{
    description: string,
    type: 'income' | 'outcome',
    price: number,
    category: string,
}

interface TransactionContextType{
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>
    createTransactions: (data: createTransactions) => Promise<void>
}

export const TransactionContext = createContext({} as TransactionContextType)

interface TransactionsProvider{
    children: ReactNode,
}

export function TransactionsProvider({children}: TransactionsProvider){
    
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query?: string){
        const url = new URL('http://localhost:3000/transatations')
        
        if(query) {
            url.searchParams.append('q', query)
        }
        
        const response = await fetch(url)
        const data = await response.json()

        setTransactions(data);
    }

    async function createTransactions(data: createTransactions){
        const newTrasaction = {
            description: data.description,
            price: data.price,
            category: data.category,
            type: data.type,
            createdAt: new Date(),
        }
        await fetch("http://localhost:3000/transatations", {
        
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTrasaction)
        }).then(response => {
            if (!response.ok) {
              console.log('Erro ao realizar o POST');
            }
            return response.json()
          })
          .then(responseData => {
            setTransactions(responseData) 
          })
          .catch(error => {
            console.error('Erro:', error);
          });
    }

    useEffect(() => {
     fetchTransactions()
    }, [])
    
    return (
        <TransactionContext.Provider value={{transactions, fetchTransactions, createTransactions}}>
            {children}
        </TransactionContext.Provider>
    )
}