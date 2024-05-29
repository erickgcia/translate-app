import LangSelector from './LangSelector'
import { useSelector } from 'react-redux'
import { RootState } from '../state/store'
import LangSwitch from './LangSwitch'

const TranslateBox = () => {
  const inputLang = useSelector((state: RootState) => state.translate.langInput)
  const outputLang = useSelector(
    (state: RootState) => state.translate.langOutput
  )

  return (
    <article className="translate-box">
      <section className="translate-box__section">
        <div className="lang-input">
          <LangSelector location="langInput" currentLang={inputLang} />
        </div>
        <textarea
          name="input"
          id="input"
          cols={60}
          rows={15}
          placeholder="Enter text..."
        ></textarea>
      </section>
      <div className="translate-box--switch">
        <LangSwitch />
      </div>
      <section className="translate-box__section">
        <div className="lang-input">
          <LangSelector location="langOutput" currentLang={outputLang} />
        </div>
        <textarea
          name="output"
          id="output"
          cols={60}
          rows={15}
          placeholder="Translation..."
        ></textarea>
      </section>
    </article>
  )
}

export default TranslateBox
