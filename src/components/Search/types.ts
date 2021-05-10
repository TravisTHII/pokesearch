export interface ContainerProps {
  isLoading: boolean,
  search: string
}

export interface RenderProps {
  value: string
  isLoading: boolean
  setValue: (value: string) => void
  submitSearch: () => void
  handleSubmitSearch: (e: React.KeyboardEvent<HTMLInputElement>) => void
}