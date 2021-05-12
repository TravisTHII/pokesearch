
export interface ContainerProps {
  isLoading: boolean,
  search: string
}

export interface RenderProps {
  isLoading: boolean
  value: string
  setValue: (value: string) => void
  active: boolean
  setActive: (value: boolean) => void
  showResults: () => void
  startSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  submitSearch: () => void
  handleSubmitSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface SBProps {
  isLoading: boolean
  submitSearch: () => void
}