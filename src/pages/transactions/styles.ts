import styled from "styled-components"

 const sizes = {
     mobile: '880px',
     desktop: '881px'
   };
  
   const media = {
     mobile: `(max-width: ${sizes.mobile})`,
     desktop: `(min-width: ${sizes.desktop})`
 }

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
    
   @media ${media.mobile} {
        tbody{
            display: none;
        }
        
   }

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

export const TrasactionDiv = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem 3rem;

    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;
    overflow-y: scroll;
    max-height: 33.5rem;

    @media ${media.desktop}{
        display: none;
    }
`

export const TransactionsOnes = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    min-width: 20rem;
    height: 8.75rem;
    gap: 0.6rem;

    background: ${props => props.theme["gray-700"]};
    padding: 1.5rem 2rem;
    border-radius: 12px;
`
export const TransactionsTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
        overflow: hidden;
        color: ${props => props.theme["gray-300"]};
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
`

export const TransactionsFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.35rem;
        color: ${props => props.theme["gray-400"]};
    }
`

interface PriceHighLightProps {
    variant: 'income' | 'outcome';
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
    color: ${props => props.variant == 'income' ? props.theme["green-300"] : props.theme["red-300"]};
    width: 200px;
    font-weight: bold;
`