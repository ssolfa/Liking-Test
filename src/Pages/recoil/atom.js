import { atom } from 'recoil';

export const quizState = atom({
  key: 'quizState',
  default: {
    quiz1: '',
    quiz2: '',
    quiz3: '',
    quiz4: '',
  },
});