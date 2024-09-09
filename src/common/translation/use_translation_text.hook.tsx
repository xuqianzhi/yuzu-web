// useTranslation.ts
import { useLanguage } from "../../language_context";
import { staticTexts, TranslationKeys } from "./static_texts";
import { Language as LanguageEnum } from "src/common/constants";

type TranslatedElements = {
  [K in TranslationKeys]: JSX.Element;
};

export const useTranslation = (): TranslatedElements => {
  const { language } = useLanguage();
  const lang = language === LanguageEnum.CHINESE ? "zh" : "en";
  const translatedElements = Object.keys(staticTexts).reduce((acc, key) => {
    const translationKey = key as TranslationKeys;

    acc[translationKey] = (
      <span lang={lang}>{staticTexts[translationKey][language]}</span>
    );
    return acc;
  }, {} as TranslatedElements);

  return translatedElements;
};
