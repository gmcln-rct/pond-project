// _ underscore is a convention to indicate that this is a private function

import { BRAZILIAN_VERBS } from "../data/brazil-verbs";

export function getVerbItem(filterId) {
    const verbs = BRAZILIAN_VERBS;

    const findVerb = verbs.find((verb) => {
        return verb.id === filterId;
    }
    );

    return findVerb;
}

export function getVerbItemByRank(rank) {
    const verbs = BRAZILIAN_VERBS;

    const findVerb = verbs.find((verb) => {
        return verb.rank === rank;
    }
    );

    return findVerb;
}

export function filterVerbsByRank(rank) {
    const verbs = BRAZILIAN_VERBS;

    const filterVerbs = verbs.filter((verb) => {
        return verb.rank <= rank;
    }
    );

    return filterVerbs;
}

export function getVerbTotal() {
    const verbs = BRAZILIAN_VERBS;

    return verbs.length;
}