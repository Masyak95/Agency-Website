import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

enum Language {
    EN = 'en',
    CZ = 'cz',
    ARM = 'arm',
    RU = 'ru',
}

interface LangSwitcherProps {
    short?: boolean;
}

export function LanguageSwitcher({ short }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.currentTarget.value as Language;
        i18n.changeLanguage(selectedLanguage);
    };

    const getLanguageName = (language: Language) => (short
        ? t(
            'short language',
            { lng: language },
        )
        : t(
            'language',
            { lng: language },
        ));

    return (
        <div className={cls.select}>
            <select value={i18n.language} onChange={handleLanguageChange}>
                {Object.values(Language).map((language) => (
                    <option value={language} key={language}>
                        {getLanguageName(language)}
                    </option>
                ))}
            </select>
        </div>
    );
}
