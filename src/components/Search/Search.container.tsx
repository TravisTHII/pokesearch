import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import queryString from 'query-string'

import { useGlobalContext } from '../../context/Global'

import { Render } from './Search.render'

export function Container() {

  const { loading, search } = useGlobalContext()

  const [value, setValue] = useState('')

  const history = useHistory()

  useEffect(() => {
    const q = queryString.parse(search).search
    if (q) setValue(String(q))
  }, [search])

  const submitSearch = () => history.push(`?search=${value.trim()}`)

  const handleSubmitSearch = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') submitSearch()
  }

  return (
    <Render
      loading={loading}
      value={value}
      setValue={setValue}
      submitSearch={submitSearch}
      handleSubmitSearch={handleSubmitSearch}
    />
  )
}