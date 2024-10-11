import styled from "styled-components"

// const sizes = {
//     mobile: '880px',
//   };
  
//   const media = {
//     mobile: `(max-width: ${sizes.mobile})`,
// }

export const TransactionContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 4rem;
    padding: 0 1.5rem;

`

export const TransactionTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;
    overflow-y: scroll;
    max-height: 33.5rem;
    display: block;
    
    td{
        padding: 1.25rem 1.8rem;
        background: ${props => props.theme["gray-700"]};
        
        &:first-child{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child{
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
        
        button{
            background: transparent;
            outline: none;
            border: none;
            color: ${props => props.theme["red-300"]};
        }

        button:hover{
            color: ${props => props.theme["red-500"]};
            cursor: pointer;
        }
    }
`

interface PriceHighLightProps {
    variant: 'income' | 'outcome';
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
    color: ${props => props.variant == 'income' ? props.theme["green-300"] : props.theme["red-300"]};
    width: 200px;
`