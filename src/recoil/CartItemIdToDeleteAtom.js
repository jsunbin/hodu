import { atom } from 'recoil';

export const cartItemIdToDeleteAtom = atom({
  key: 'cartItemToDeleteAtom',
  default: undefined,
});
