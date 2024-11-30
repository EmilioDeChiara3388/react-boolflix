export default function FlagForLanguage(languageCode) {

    const changesToLanguageCode = {
        en: "us",
        pt: "br",
        zh: "cn",
        ja: "jp",
        ko: "kr",
        ar: "sa"
    };

    return changesToLanguageCode[languageCode] || languageCode;
};