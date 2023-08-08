import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

const languages = {
    en: {
        short: 'en',
        long: 'English',
    },
    cz: {
        short: 'cz',
        long: 'Čeština',
    },
    arm: {
        short: 'arm',
        long: 'հայերեն',
    },
    ru: {
        short: 'ru',
        long: 'Русский',
    },
};

interface LangSwitcherProps {
    short?: boolean;
}

export function LanguageSwitcher({ short }: LangSwitcherProps) {
    const { i18n } = useTranslation();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.currentTarget.value;
        i18n.changeLanguage(selectedLanguage);
    };

    const flagType = short ? 'short' : 'long';

    return (
        <div className={cls.select}>
            <select value={i18n.language} onChange={handleLanguageChange}>
                {Object.entries(languages).map(([key, value]) => (
                    <option value={key} key={key}>
                        {value[flagType]}
                    </option>
                ))}
            </select>
        </div>
    );
}
