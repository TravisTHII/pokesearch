import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import queryString from 'query-string'

import { useGlobalContext } from '../../context/GlobalState'

import { Render } from './Search.render'

import { Location } from './types'

export function Container({ location }: Location) {

  const { loading } = useGlobalContext()

  const [value, setValue] = useState('')

  const history = useHistory()

  useEffect(() => {
    const q = queryString.parse(location.search).search
    if (q) setValue(String(q))
  }, [location.search])

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