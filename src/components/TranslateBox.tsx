import LangSelector from './LangSelector'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state/store'
import LangSwitch from './LangSwitch'
import TextArea from './TextArea'
import { SectionType } from '../types.d'
import { setText } from '../state/translate/translateSlice'

const TranslateBox = () => {
  const inputLang = useSelector((state: RootState) => state.translate.langInput)
  const outputLang = useSelector(
    (state: RootState) => state.translate.langOutput
  )
  const text = useSelector((state: RootState) => state.translate.text)
  const result = useSelector((state: RootState) => state.translate.resultText)
  const loadingStatus = useSelector(
    (state: RootState) => state.translate.loading
  )

  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setText(e.target.value))
  }

  return (
    <article className="translate-box">
      <section className="translate-box__section">
        <div className="lang-input">
          <LangSelector location="langInput" currentLang={inputLang} />
        </div>
        <TextArea
          loading={loadingStatus}
          value={text}
          type={SectionType.Input}
          onChange={handleChange}
        />
      </section>
      <div className="translate-box--switch">
        <LangSwitch />
      </div>
      <section className="translate-box__section">
        <div className="lang-input">
          <LangSelector location="langOutput" currentLang={outputLang} />
        </div>
        <TextArea
          loading={loadingStatus}
          value={result}
          type={SectionType.Output}
        />
      </section>
    </article>
  )
}

export default TranslateBox
