import { AUTO_LANGUAGE, LANGUAGES } from './constants'

export type Language = keyof typeof LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export type Props = {
  location: 'langInput' | 'langOutput'
  currentLang: string
}

export interface LanguagePayload {
  location: 'langInput' | 'langOutput'
  value: string
}

export interface translateState {
  langInput: string
  langOutput: string
  text: string
  resultText: string
  loading: boolean
}

export interface MenuState {
  isOpen: boolean
}

export enum SectionType {
  Input = 'input',
  Output = 'output',
}

export interface NavLinkProps {
  name: string
  id: string
  to: string
  icon: () => JSX.Element
}
