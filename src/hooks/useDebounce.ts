import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debounceValue, setDebouceValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouceValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debounceValue
}
