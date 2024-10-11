import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
    }

    body {
        background-color: ${props => props.theme['gray-800']};
        color: ${props => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
    }    

    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }

          ::-webkit-scrollbar {
            width: 6px;
            height: 3px;
        }

        /* Remove o fundo do trilho da barra de rolagem */
        ::-webkit-scrollbar-track {
            background: transparent;
        }

        
        ::-webkit-scrollbar-thumb {
            background-color: #494C4E; 
            border-radius: 10px;
        }
`
