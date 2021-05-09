export function invalidValue(s: string, l: number) {
	s = s.trim()
	return s === null || (/^ *$/).test(s) || s.length > l
}

export const capitalize = (string: string) =>
	string[0].toLocaleUpperCase() + string.slice(1)