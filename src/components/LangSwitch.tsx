import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state/store'
import { switchLanguage } from '../state/translate/translateSlice'
import { AUTO_LANGUAGE } from '../constants'
import { SwitchIcon } from './Icons'

const LangSwitch = () => {
  const fromLang = useSelector((state: RootState) => state.translate.langInput)
  const toLang = useSelector((state: RootState) => state.translate.langOutput)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(switchLanguage())
  }
  return (
    <div className="switch">
      <span>{fromLang}</span>
      <button disabled={fromLang === AUTO_LANGUAGE} onClick={handleClick}>
        <SwitchIcon />
      </button>
      <span>{toLang}</span>
    </div>
  )
}

export default LangSwitch
