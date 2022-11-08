import { useCallback } from 'react'
import { Input } from './style'

export default function InputSearch({keyword}: {keyword: Function}) {
  const handleInputChange = useCallback((e: any) => {
    setTimeout(() => {
      keyword(e.target.value)
    }, 500)
  }, [])

  return (
    <Input
      type='text'
      placeholder='Search'
      onKeyUp={handleInputChange}
    />
  )
}
