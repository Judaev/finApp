import { atom } from 'recoil';

const profileAtom = atom<IThemeAtom>({
  key: 'profileAtom',
  default: {
    userName: '',
    userPhoto: '',
    status: null,
    currency: null,
  },
});

interface IThemeAtom {
  userName: string;
  userPhoto: any;
  status: ProfileStatus | null;
  currency: any;
}

export declare enum ProfileStatus {
  basic = 'basic',
  pro = 'pro',
}

export default profileAtom;
