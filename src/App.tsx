import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"
import { Transaction } from "./pages/transactions/index"
import { TransactionsProvider } from "./contexts/TransactionsContext"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <TransactionsProvider>
        <Transaction/>
      </TransactionsProvider>
    </ThemeProvider>
  )
}

