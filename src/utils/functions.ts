export function invalidValue(s: string, l: number) {
	s = s.trim()
	return s === null || (/^ *$/).test(s) || s.length > l
}