export function invalidValue(s: string) {
	s = s.trim()
	return s === null || (/^ *$/).test(s)
}

export const capitalize = (string: string) =>
	string[0].toLocaleUpperCase() + string.slice(1)