import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { switchLanguage } from '../app/translate/translateSlice'
import { RotateIcon } from './Icons'

const LangSwitch = () => {
  const langInput = useSelector((state: RootState) => state.translate.langInput)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(switchLanguage())
  }
  return (
    <div className="switch">
      <button disabled={langInput === 'auto'} onClick={handleClick}>
        <RotateIcon />
      </button>
    </div>
  )
}

export default LangSwitch
