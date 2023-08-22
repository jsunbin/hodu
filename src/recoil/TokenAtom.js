import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'token',
  storage: localStorage,
});

// 토큰
export const TokenAtom = atom({
  key: 'TokenAtom',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

// 로그인 여부를 확인하는 Selector
export const isLoginSelector = selector({
  key: 'isLoginSelector',
  get: ({ get }) => !!get(TokenAtom),
});
