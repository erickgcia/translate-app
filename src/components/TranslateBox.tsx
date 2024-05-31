import LangSelector from './LangSelector'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state/store'
import LangSwitch from './LangSwitch'
import TextArea from './TextArea'
import { SectionType } from '../types.d'
import { setResult, setText } from '../state/translate/translateSlice'
import { useEffect, useState } from 'react'
import translate from '../services/translate'
import { useDebounce } from '../hooks/useDebounce'
import { CopyIcon, SpeakerIcon, StarIcon } from './Icons'
import PopUp from './PopUp'

const TranslateBox = () => {
  const langInput = useSelector((state: RootState) => state.translate.langInput)
  const langOutput = useSelector(
    (state: RootState) => state.translate.langOutput
  )
  const text = useSelector((state: RootState) => state.translate.text)
  const result = useSelector((state: RootState) => state.translate.resultText)
  const loadingStatus = useSelector(
    (state: RootState) => state.translate.loading
  )

  const dispatch = useDispatch()

  const [isCopied, setIsCopied] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleClipboardClick = () => {
    navigator.clipboard
      .writeText(result)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((error) => {
        console.error('Error copying text to clipboard: ', error)
      })
  }

  const handleFavoriteClick = () => {
    setIsFavorite(true)
    setTimeout(() => {
      setIsFavorite(false)
    }, 1500)
  }

  const handleSpeakerClick = (box: string) => {
    const utterance = new SpeechSynthesisUtterance(box)
    utterance.lang = 'en-AU'
    speechSynthesis.speak(utterance)
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setText(e.target.value))
  }

  const handleResultChange = () => {
    dispatch(setResult(result))
  }

  const debounceText = useDebounce(text, 300)

  useEffect(() => {
    if (debounceText === '') return

    translate({ langInput, langOutput, text: debounceText })
      .then((translatedResult) => {
        if (translatedResult === null || translatedResult === undefined) return
        dispatch(setResult(translatedResult))
      })
      .catch(() => {
        dispatch(setResult('Error'))
      })
  }, [debounceText, langInput, langOutput, dispatch])

  return (
    <article className="translate-box">
      <section className="translate-box__section">
        <div className="lang-input">
          <LangSelector location="langInput" currentLang={langInput} />
        </div>
        <TextArea
          loading={loadingStatus}
          value={text}
          type={SectionType.Input}
          onChange={handleChange}
        />
        {text !== '' && (
          <i className="icon--speaker" onClick={() => handleSpeakerClick(text)}>
            <SpeakerIcon />
          </i>
        )}
      </section>
      <div className="translate-box--switch">
        <LangSwitch />
      </div>
      <section className="translate-box__section">
        <div className="lang-input">
          <LangSelector location="langOutput" currentLang={langOutput} />
        </div>
        <TextArea
          loading={loadingStatus}
          value={result}
          type={SectionType.Output}
          onChange={handleResultChange}
        />
        {text !== '' && (
          <>
            <i className="icon--star" onClick={handleFavoriteClick}>
              <StarIcon />
              {isFavorite && <PopUp text="Favorite added." />}
            </i>
            <i
              className="icon--speaker"
              onClick={() => handleSpeakerClick(result)}
            >
              <SpeakerIcon />
            </i>

            <i className="icon--copy" onClick={handleClipboardClick}>
              <CopyIcon />
              {isCopied && <PopUp text="Copied to your clipboard." />}
            </i>
          </>
        )}
      </section>
    </article>
  )
}

export default TranslateBox
