import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    return (
        <div className="select">
            <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
                {/* eslint-disable i18next/no-literal-string */}
                <option value="en">English</option>
                <option value="cz">Čeština</option>
                <option value="arm">Հայերեն</option>
                <option value="ru">Русский</option>
            </select>
        </div>
    );
}

export default LanguageSwitcher;
