import { useRecoilState } from 'recoil';
import { tokenAtom, userAtom } from '../state';
import { User } from '../state/types';

const useAuth = () => {
  const [user, setUser] = useRecoilState<User | null>(userAtom);
  const [token, setToken] = useRecoilState<string | null>(tokenAtom);

  return { user, setUser, token, setToken };
};

export default useAuth;
