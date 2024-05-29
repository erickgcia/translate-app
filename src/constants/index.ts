import {
  FranceFlag,
  Globe,
  MexicoFlag,
  UnitedStatesFlag,
} from '../components/Icons'

export const LANGUAGES = [
  {
    id: crypto.randomUUID(),
    code: 'en',
    lang: 'English',
    flag: UnitedStatesFlag,
  },
  {
    id: crypto.randomUUID(),
    code: 'es',
    lang: 'Español',
    flag: MexicoFlag,
  },
  {
    id: crypto.randomUUID(),
    code: 'fr',
    lang: 'Français',
    flag: FranceFlag,
  },
]

export const AUTO_LANGUAGE = [
  {
    id: crypto.randomUUID(),
    code: 'auto',
    flag: Globe,
  },
]
