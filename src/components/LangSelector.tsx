import { LANGUAGES } from '../constants'
import { VerticalSwitch } from './Icons'
import { useDispatch } from 'react-redux'
import { setLanguage } from '../app/translate/translateSlice'
import {
  FranceFlag,
  GlobeIcon,
  MexicoFlag,
  UnitedStatesFlag,
} from '../components/Icons'
import { Props } from '../types'

const LangSelector = ({ location, currentLang }: Props) => {
  const dispatch = useDispatch()

  const checkCurrentFlag = () => {
    switch (currentLang) {
      case 'auto':
        return <GlobeIcon />
      case 'en':
        return <UnitedStatesFlag />
      case 'es':
        return <MexicoFlag />
      case 'fr':
        return <FranceFlag />
      default:
        return null
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage({ location: location, value: e.target.value }))
  }

  return (
    <section className="language-selector">
      <i className="icon--flag">{checkCurrentFlag()}</i>
      <select
        className="language-selector__select"
        name="languages"
        id="language-select"
        value={currentLang}
        onChange={handleChange}
      >
        {location === 'langInput' && (
          <option value="auto">Detect language</option>
        )}
        {LANGUAGES.map(({ id, code, lang }) => (
          <option key={id} value={code}>
            {lang}
          </option>
        ))}
      </select>
      <i className="icon--switch">
        <VerticalSwitch />
      </i>
    </section>
  )
}

export default LangSelector
