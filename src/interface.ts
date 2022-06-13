export type NumberWordsMapping = {
    number: number;
    word: string;
    ordinal: string;
    ordinalWord: string;
}

export interface NumberWordsOptions {
    locale?: 'en-IN' | 'en-US';
    toOrdinalWords?: boolean;
    toOrdinal?: boolean;
    changeCaseTo?: 'upper' | 'lower' | 'sentence' | 'title';
}