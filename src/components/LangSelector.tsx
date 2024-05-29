import { RootState } from '../state/store'
import { LANGUAGES } from '../constants'
import {
  FranceFlag,
  Globe,
  MexicoFlag,
  UnitedStatesFlag,
  VerticalSwitch,
} from './Icons'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../state/translate/translateSlice'

const LangSelector = () => {
  const currentLang = useSelector(
    (state: RootState) => state.translate.langInput
  )
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage({ location: 'langInput', value: e.target.value }))
  }

  const checkCurrentFlag = () => {
    switch (currentLang) {
      case 'auto':
        return <Globe />
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

  return (
    <section className="language-box">
      <i className="icon--flag">{checkCurrentFlag()}</i>
      <select
        className="language-box__selector"
        name="languages"
        id="language-select"
        value={currentLang}
        onChange={handleChange}
      >
        <option value="auto">Select a language</option>
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
