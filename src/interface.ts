export type NumberToStringMapping = {
    number: number;
    word: string;
    ordinal: string;
    ordinalWord: string;
}

export interface ConvertToStringOptions {
    locale?: 'en-IN' | 'en-US';
    toOrdinalWords?: boolean;
    toOrdinal?: boolean;
    changeCaseTo?: 'upper' | 'lower' | 'sentence' | 'title';
}