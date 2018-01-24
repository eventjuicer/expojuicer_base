import { englishMessages } from 'admin-on-rest';


import {en,de,pl} from 'eventjuicer-aor-translations';

export default {
  en: { ...englishMessages, ...en },
  pl: { ...englishMessages, ...en, ...pl },
  de: { ...englishMessages, ...en, ...de }
};
