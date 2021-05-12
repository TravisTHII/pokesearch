import React, { useEffect, useRef } from 'react'

export const useOutsideClick = (
  handler: (a: boolean) => void
) => {
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const outsideClick: any = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!(e.target as Element).closest('.search_main') || (e.target as Element).closest('.query_results')) {
        handler(false)
      }
    }

    document.addEventListener('click', outsideClick)

    return () => document.removeEventListener('click', outsideClick)
  }, [handler])

  return domRef
}