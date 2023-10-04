import { atom } from 'recoil';

export const orderKindAtom = atom({
  key: 'orderKindAtom',
  default: 'direct_order',
});
