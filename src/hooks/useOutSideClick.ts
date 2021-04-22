import { useEffect, useRef } from 'react'

const useOutsideClick = (
  handler: (e?: Event) => void,
  type: string,
  dependency?: boolean
) => {
  const domRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const clickRef = domRef.current

    const outsideClick = (e: any) => {
      if (type === 'outside') {
        if (!clickRef.contains(e.target)) {
          handler()
        }
      }

      if (type === 'custom') {
        handler(e)
      }
    }

    document.addEventListener('click', outsideClick)

    return () => document.removeEventListener('click', outsideClick)
  }, [dependency, handler, type])

  return domRef
}

export default useOutsideClick