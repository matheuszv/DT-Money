import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionContext } from "../contexts/TransactionsContext";
import { useContext, useState } from "react";

const newTransitionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = z.infer<typeof newTransitionFormSchema>;

export function NewTransactionModal() {
    const [isOpen, setIsOpen] = useState(false);
    const { createTransactions } = useContext(TransactionContext);

    const { 
        register,
        handleSubmit,
        formState: { isSubmitting },
        control,
        reset,
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransitionFormSchema)
    });

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        await createTransactions(data);
        reset();
        setIsOpen(false); // Fecha o modal após a criação da transação
    }

    return (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}> {/* Controlando o estado do modal diretamente no Dialog.Root */}
            <Dialog.Portal>
                <Overlay />

                <Content>
                    <Dialog.Title>New Transaction</Dialog.Title>

                    <CloseButton>
                        <X size={20} />
                    </CloseButton>

                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input 
                            type="text" 
                            placeholder="Description" 
                            required 
                            {...register('description')} 
                        />
                        <input 
                            type="number" 
                            placeholder="Value" 
                            required 
                            {...register('price', { valueAsNumber: true })} 
                        />
                        <input 
                            type="text" 
                            placeholder="Category" 
                            required 
                            {...register('category')} 
                        />

                        <Controller
                            control={control}
                            name="type"
                            render={({ field }) => (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant="income" value="income">
                                        <ArrowCircleUp size={24} />
                                        Income
                                    </TransactionTypeButton>
                                    <TransactionTypeButton variant="outcome" value="outcome">
                                        <ArrowCircleDown size={24} />
                                        Outcome
                                    </TransactionTypeButton>
                                </TransactionType>
                            )}
                        />

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                </Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
