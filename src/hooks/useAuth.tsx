import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { User } from '@react-native-google-signin/google-signin';
import { tokenAtom, userAtom } from '../state';

const useAuth = () => {
  const [user, setUser] = useRecoilState<User | null>(userAtom);
  const setToken = useSetRecoilState<string | null>(tokenAtom);

  const auth = () => {};

  return null;
};
