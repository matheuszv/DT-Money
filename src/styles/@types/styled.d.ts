import 'styled-components'
import { defaultTheme } from '../theme/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
    export type DefaultTheme = ThemeType
}