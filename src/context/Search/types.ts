import { ReactNode } from 'react'

export interface ProviderProps {
  children: ReactNode
  isLoading: boolean
  search: string
}

export type InitialStateType = {
  search: string
  setValue: (value: string) => void
  setActive: (active: boolean) => void
  submitSearch: () => void
  showResults: () => void
  startSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmitSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void
} & State

export type State = {
  isLoading: boolean
  value: string
  active: boolean
}

export type Action =
  | {
    type: 'SET_VALUE'
    payload: { value: string }
  }
  | {
    type: 'SET_ACTIVE'
    payload: { active: boolean }
  }