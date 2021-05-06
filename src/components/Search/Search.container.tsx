import React, { useRef, useState } from 'react'

import { useGlobalContext } from '../../context/GlobalState'

import { invalidValue } from '../../utils/functions'

import { Render } from './Search.render'

export function Container() {

  const { getPokemon, isLoading } = useGlobalContext()

  const [value, setValue] = useState('')
  const [active, setActive] = useState(false)

  const timeOutRef = useRef<number>(null!)

  const startSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {

    const value = e.target.value.trim()

    setValue(value)

    clearTimeout(timeOutRef.current)

    if (!invalidValue(value, 50)) {

      isLoading(true)

      setActive(true)

      const t = window.setTimeout(() => {

        getPokemon(value)

      }, 500)

      timeOutRef.current = t

    } else {

      setActive(false)

      isLoading(false)

    }

  }

  const clearSearch = () => {
    setValue('')
    setActive(false)
  }

  return (
    <Render
      value={value}
      active={active}
      startSearch={startSearch}
      clearSearch={clearSearch}
    />
  )
}