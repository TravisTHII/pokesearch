import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import queryString from 'query-string'

import { Render } from './Search.render'

import { ContainerProps } from './types'

import { invalidValue } from '../../utils/functions'

export function Container({
  isLoading,
  search
}: ContainerProps) {

  const [value, setValue] = useState('')

  const history = useHistory()

  useEffect(() => {
    const q = queryString.parse(search).search

    if (q) setValue(String(q))

    return () => setValue('')
  }, [search])

  const submitSearch = () =>
    !invalidValue(value) && history.push(`?search=${value.trim()}`)

  const handleSubmitSearch = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') submitSearch()
  }

  return (
    <Render
      isLoading={isLoading}
      value={value}
      setValue={setValue}
      submitSearch={submitSearch}
      handleSubmitSearch={handleSubmitSearch}
    />
  )
}