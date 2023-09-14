interface DictionaryEntry {
    title: string
}

export const dictionary: Record<string, DictionaryEntry> = {
    en: {
        title: "Hello world!"
    },
    vi: {
        title: "Xin chào thế giới!"
    }

}