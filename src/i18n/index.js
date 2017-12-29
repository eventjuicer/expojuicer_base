import { englishMessages } from 'admin-on-rest';
import customEnglishMessages from './en';
import customPolishMessages from './pl';
import customGermanMessages from './de';

export default {
    en: { ...englishMessages, ...customEnglishMessages },
    pl: { ...englishMessages, ...customEnglishMessages, ...customPolishMessages },
    de: { ...englishMessages, ...customEnglishMessages,  ...customGermanMessages}
};
