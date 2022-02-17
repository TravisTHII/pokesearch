import { ReactNode } from 'react'

export interface ProviderProps {
  children: ReactNode
}

export type InitialStateType = {
  openMenu: (open: boolean) => void
  showSearch: () => void
} & State

export type State = {
  open: boolean
  showSearchBar: boolean
}

export type Action =
  | {
      type: 'OPEN_MENU'
      payload: { open: boolean }
    }
  | {
      type: 'OPEN_SEARCH_BAR'
      payload: { showSearchBar: boolean }
    }
