import { atom, selector } from 'recoil';

// 토큰
export const TokenAtom = atom({
  key: 'TokenAtom',
  default: undefined,
});

// 로그인 여부를 확인하는 Selector
export const isLoginSelector = selector({
  key: 'isLoginSelector',
  get: ({ get }) => !!get(TokenAtom),
});
