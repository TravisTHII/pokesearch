export function invalidValue(s: string) {
  s = s.trim()
  return s === null || (/^ *$/).test(s)
}

export const capitalize = (string: string) =>
  string[0].toLocaleUpperCase() + string.slice(1)

function preventDefault(e: Event) {
  e.preventDefault()
}

function disableScroll() {
  document.body.addEventListener('wheel', preventDefault, { passive: false })
}

export function enableScroll() {
  document.body.removeEventListener('wheel', preventDefault)
}

export function StopScrolling(x: Element) {
  x.addEventListener('mouseenter', () => {
    disableScroll()

    x.addEventListener('mouseleave', () => {
      enableScroll()
    })
  })
}