import React, { useRef, useState } from 'react'

import { useGlobalContext } from '../../context/GlobalState'

import { invalidValue } from '../../utils/functions'

import { Render } from './Search.render'

export function Container() {

  const { getPokemon, isLoading } = useGlobalContext()

  const [value, setValue] = useState('')

  const timeOutRef = useRef<number>(null!)

  const startSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {

    const value = e.target.value

    setValue(value)

    clearTimeout(timeOutRef.current)

    if (!invalidValue(value, 50)) {

      isLoading(true)

      const t = window.setTimeout(() => {

        getPokemon(value.trim().toLowerCase())

      }, 500)

      timeOutRef.current = t

    } else {

      isLoading(false)

    }

  }

  const clearSearch = () => setValue('')

  return (
    <Render
      value={value}
      startSearch={startSearch}
      clearSearch={clearSearch}
    />
  )
}