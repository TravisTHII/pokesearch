import { useEffect } from 'react'

export const useHideBodyOverflow = (open: boolean) =>
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow_hidden')
    }

    return () => document.body.classList.remove('overflow_hidden')
  }, [open])
