import styled from "styled-components"
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

const sizes = {
    mobile: '880px',
  };
  
  const media = {
    mobile: `(max-width: ${sizes.mobile})`,
}


export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem 0;
    
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        @media ${media.mobile} {
           width: 8rem;
        }
    }
`

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme["green-700"]};
        transition: background-color 0.2s;
    }

    @media ${media.mobile} {
        font-size: 0.75rem;
        padding: 0 1rem;
        height: 40px;
    }

`


export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
    min-width: 30rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${props => props.theme["gray-800"]};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media ${media.mobile} {
        padding: 2rem 2.4rem;
        min-width: 18rem;
    }

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input{
            border-radius: 6px;
            border: 0;
            background: ${props => props.theme["gray-900"]};
            color: ${props => props.theme["gray-300"]};
            padding: 1rem;

               &::placeholder {
                color: ${props => props.theme["gray-500"]};
                }
        }
        

     
    }

    button[type="submit"]{
        height: 58px;
        border: 0;
        background: ${props => props.theme["green-500"]};
        color: ${props => props.theme.white};
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 1.5rem;
        cursor: pointer;

        &:disabled{
            opacity: 0.6;
            cursor: not-allowed;
        }

        &:not(:disabled):hover{
            background: ${props => props.theme["green-700"]};
            transition: background 0.2s
        }
    }
`

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    focus: none;
    line-height: 0;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
    color: ${props => props.theme["gray-400"]};

`

export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;

`

interface TransactionTypeButtonProps{
    variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    background: ${props => props.theme["gray-700"]};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    border: 0;
    color: ${props => props.theme["gray-300"]};

    svg {
        color: ${props => props.variant == 'income' ? props.theme["green-300"] : props.theme["red-300"]}
    }

    
    &[data-state='unchecked']:hover{
        transition: background 0.2s;
        background: ${props => props.theme["gray-600"]};
    }
    &[data-state='checked']{
        color: ${props => props.theme.white};
        background:  ${props => props.variant == 'income' ? props.theme["green-500"] : props.theme["red-500"]};
    
        svg {
            color: ${props => props.theme.white};
        }
    }
`