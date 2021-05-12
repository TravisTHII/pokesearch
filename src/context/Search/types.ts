import { ReactNode } from 'react'

export interface ProviderProps {
  children: ReactNode
  isLoading: boolean
  search: string
}

export type InitialStateType = {
  isLoading: boolean
  value: string
  active: boolean
  search: string
  setValue: (value: string) => void
  setActive: (active: boolean) => void
  submitSearch: () => void
  showResults: () => void
  startSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmitSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export type State = {
  isLoading: boolean
  value: string
  active: boolean
}

export enum DispatchName {
  SET_VALUE = 'SET_VALUE',
  SET_ACTIVE = 'SET_ACTIVE'
}

export type Action =
  | {
    type: DispatchName.SET_VALUE
    payload: { value: string }
  }
  | {
    type: DispatchName.SET_ACTIVE
    payload: { active: boolean }
  }