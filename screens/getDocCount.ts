import { DocsType } from "./home_screens/components/DocList";

export const getDocCount = (docs: DocsType[]) => {
    const counts = { all: 0, toAgree: 0, archive: 0 };
    docs.forEach(doc => {
        if (doc.status === 'new') {
            counts.toAgree = counts.toAgree + 1
        }
        else {
            counts.archive = counts.archive + 1
        }
    })

    counts.all = docs.length
    return counts
};
