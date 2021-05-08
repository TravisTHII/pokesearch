export interface Props {
  value: string
  loading: boolean
  setValue: (value: string) => void
  submitSearch: () => void
  handleSubmitSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface Location {
  location: {
    search: string
  }
}