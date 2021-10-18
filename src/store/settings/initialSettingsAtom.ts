import { atom } from 'recoil';

const initialSettingsAtom = atom({
  key: 'initialSettingsAtom',
  default: {
    isInitialSetup: true,
  },
});

export default initialSettingsAtom;
