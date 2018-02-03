//import sagaExamples from './sagaExamples';

import auth from './sagas/auth';
import messages from './sagas/messages';
import imports from '../views/imports/redux/sagas';

export default [
  auth,
  messages,
  imports
  // sagaExamples
];
