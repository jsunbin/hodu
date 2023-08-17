import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// 로그인 타입
const { persistAtom } = recoilPersist({
  key: 'type',
  storage: localStorage,
});

export const userLoginTypeAtom = atom({
  key: 'userTypeAtom',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

// 로그인 타입을 확인하는 Selector
export const isUserSeller = selector({
  key: 'isUserSeller',
  get: ({ get }) => !!get(userLoginTypeAtom),
});
