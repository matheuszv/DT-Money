import { createContext, ReactNode, useEffect, useState } from "react"

interface Transaction {
    id: string,
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
    deleteTransactions: (id: string) => Promise<void>
}

export const TransactionContext = createContext({} as TransactionContextType)

interface TransactionsProvider{
    children: ReactNode,
}

export function TransactionsProvider({children}: TransactionsProvider){
    
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query?: string){
        const url = new URL('https://dt-money-backend.onrender.com/transatations')
        
        if(query){
            url.searchParams.append('description', query)
        }
        
        const response = await fetch(url)
        const data = await response.json()
        setTransactions(data);
    }

    async function createTransactions(data: createTransactions){
        console.log(data)
        const newTrasaction = {
            description: data.description,
            price: data.price,
            category: data.category,
            type: data.type,
            createdAt: new Date(),
        }
        console.log(newTrasaction)
        await fetch("https://dt-money-back-end.vercel.app/api/transatations", {
        
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
            console.log(responseData)
          })
          .catch(error => {
            console.error('Erro:', error);
          });
        fetchTransactions()
    }

    async function deleteTransactions(id: string){
        const url = new URL(`https://dt-money-back-end.vercel.app/api/transatations/${id}`)

        await fetch(url, {
            method: 'DELETE',
        }).then(response => {
            if (response.ok) {
                console.log('Item deletado com sucesso!');
            } else {
                console.log('Erro ao deletar o item');
            }})
        
        fetchTransactions()
    }

    useEffect(() => {
        fetchTransactions()
        
    }, [])

    
    return (
        <TransactionContext.Provider value={{transactions, fetchTransactions, createTransactions, deleteTransactions}}>
            {children}
        </TransactionContext.Provider>
    )
}