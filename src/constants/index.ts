import {
  ClockIcon,
  FranceFlag,
  GlobeIcon,
  MexicoFlag,
  StarIcon,
  TranslateIcon,
  UnitedStatesFlag,
  UserIcon,
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
    flag: GlobeIcon,
  },
]

export const LANGUAGEABVS: { [key: string]: string } = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
}

export const NavLinks = [
  {
    id: crypto.randomUUID(),
    icon: TranslateIcon,
    to: '',
    name: 'Translate',
  },
  {
    id: crypto.randomUUID(),
    icon: StarIcon,
    to: 'favorites',
    name: 'Favorites',
  },
  {
    id: crypto.randomUUID(),
    icon: ClockIcon,
    to: 'history',
    name: 'History',
  },
  {
    id: crypto.randomUUID(),
    icon: UserIcon,
    to: 'profile',
    name: 'Profile',
  },
]
