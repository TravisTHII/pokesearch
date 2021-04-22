export function validText(x: string) {
	const v = x.trim()
	return v === null || (/^ *$/).test(v) || v.length > 9999
}

export function invalidValue(s: string, l: number) {
	return s === null || (/^ *$/).test(s) || s.length > l
}