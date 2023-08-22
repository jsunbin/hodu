import { atom } from 'recoil';
import { selector } from 'recoil';

export const modalStateAtom = atom({
  key: 'modalStateAtom',
  default: {
    isOpen: false,
  },
});

export const openModalSelector = selector({
  key: 'openModalSelector',
  get: ({ get }) => {
    const modalState = get(modalStateAtom);
    return modalState.isOpen;
  },
  set: ({ set }) => {
    set(modalStateAtom, { isOpen: true });
  },
});

export const closeModalSelector = selector({
  key: 'closeModalSelector',
  get: ({ get }) => {
    const modalState = get(modalStateAtom);
    return modalState.isOpen;
  },
  set: ({ set }) => {
    set(modalStateAtom, { isOpen: false });
  },
});
