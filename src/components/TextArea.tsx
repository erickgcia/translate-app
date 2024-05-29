import { SectionType } from '../types.d'

interface Props {
  loading?: boolean
  value: string
  type: SectionType
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({ loading, value, type, onChange }: Props) => {
  const placeHolderText =
    type === SectionType.Input
      ? 'Enter Text...'
      : type === SectionType.Output && loading
      ? 'Loading...'
      : 'Translation'

  return (
    <textarea
      name={value}
      id={value}
      autoFocus={type === SectionType.Input}
      cols={60}
      rows={15}
      placeholder={placeHolderText}
      onChange={onChange}
      value={value}
      readOnly={type === SectionType.Output}
    ></textarea>
  )
}

export default TextArea
