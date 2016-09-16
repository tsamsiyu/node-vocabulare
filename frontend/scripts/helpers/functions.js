import Immutable from 'immutable';

export function tryKey(hash, chain, missedValue = undefined) {
    if (typeof chain === 'string') {
        chain = chain.split('.');
    }

    for (let item of chain) {
        if (hash instanceof Immutable.Map) {
            if (!hash.has(item)) {
                return missedValue;
            } else {
                hash = hash.get(item);
            }
        } else if (typeof hash === 'object') {
            if (!hash.hasOwnProperty(item)) {
                return missedValue;
            } else {
                hash = hash[item];
            }
        } else {
            return missedValue;
        }
    }

    return hash;
}