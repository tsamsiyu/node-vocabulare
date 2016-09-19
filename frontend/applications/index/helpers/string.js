import rtrim from 'lodash/trimEnd';
import ltrim from 'lodash/trimStart';

export function join(strings, glue) {
    if (!strings instanceof Array || strings.length < 2) {
        throw new Error('Expects 2 strings as minimum');
    }
    let res = '';
    for (let i = 0; i < strings.length; i+=2) {
        res += rtrim(strings[i], glue) + glue + ltrim(strings[i+1], glue);
    }
    return res;
}