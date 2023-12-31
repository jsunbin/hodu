import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// 결제 예정 상품
const { persistAtom } = recoilPersist({
  key: 'orderItems',
  storage: localStorage,
});

export const orderItemAtom = atom({
  key: 'orderItemAtom',
  default: { totalPrice: 0, productPrice: 0, deliveryFee: 0, items: [] },
  effects_UNSTABLE: [persistAtom],
});
