import styled from "styled-components"


const sizes = {
    mobile: '880px',
  }
  
  const media = {
    mobile: `(max-width: ${sizes.mobile})`,
}

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;
    

    input {
        flex: 1;
        border-radius: 6px;
        border: 0;
        background: ${props => props.theme["gray-900"]};
        color: ${props => props.theme["gray-300"]};
        padding: 1rem;


        &&::placeholder{
            color: ${props => props.theme["gray-500"]};
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        border: 0;
        padding: 1rem;
        background: transparent;
        border: 1px solid  ${props => props.theme["green-300"]};
        font-weight: bold;
        border-radius: 6px;
        color: ${props => props.theme["green-300"]};
        cursor: pointer;


        @media ${media.mobile} {
            p {
                display: none;
            }  
        }
        
        &:disabled{
            opacity: 0.6;
            cursor: not-allowed;
        }

        &:not(:disabled):hover{
            background: ${props => props.theme["green-500"]};
            border: 1px solid  ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
            transition: background-color 0.3s, color 0.3s, border-color 0.3s; 
        }

        

    }
`