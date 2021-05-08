import { useLocation } from 'react-router-dom'

export function useQueryString(): any {
  return new URLSearchParams(useLocation().search)
}