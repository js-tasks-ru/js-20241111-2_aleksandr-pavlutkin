/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const sortedArr = Array.from(arr)

    if(param === 'asc') {
        sortedArr?.sort((a, b) => new Intl.Collator(['ru', 'en'], {caseFirst: 'upper'}).compare(a, b))
    } else if(param === 'desc') {
        sortedArr?.sort((a, b) => new Intl.Collator(['ru', 'en'], {caseFirst: 'upper'}).compare(b, a))
    }

    return sortedArr
}
