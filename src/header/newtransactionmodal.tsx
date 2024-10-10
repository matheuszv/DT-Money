import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionContext } from "../contexts/TransactionsContext";
import { useContext } from "react";

const newTransitionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransitionFormSchema>;


export function NewTransactionModal(){

    const {createTransactions} = useContext(TransactionContext)

    const { 
        register,
        handleSubmit,
        formState: {isSubmitting},
        control,
        reset,
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransitionFormSchema)
    });

    async function handleCreateNewTransaction(data: NewTransactionFormInputs){
        await createTransactions(data)

        reset()
    }

    return (
        <Dialog.Portal>
            <Overlay/>

            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton>
                    <X size={20}/>
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input type="text" placeholder="Descrição" required
                    {...register('description')}/>
                    <input type="number" placeholder="Valor" required
                    {...register('price', {valueAsNumber: true})}/>
                    <input type="text" placeholder="Categoria" required
                    {...register('category', )}/>

                    <Controller
                     control={control}
                     name="type"
                     render={({field}) => {
                        return (
                            <TransactionType onValueChange={field.onChange} value={field.value}>
                                <TransactionTypeButton variant="income" value="income">
                                    <ArrowCircleUp size={24}/>
                                    Entrada
                                </TransactionTypeButton>
                                <TransactionTypeButton variant="outcome" value="outcome">
                                    <ArrowCircleDown size={24}/>
                                    Saída
                                </TransactionTypeButton>
                            </TransactionType>
                        )
                     }}/>
                    

                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}