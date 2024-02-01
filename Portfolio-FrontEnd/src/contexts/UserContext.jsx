import { createContext, useState } from 'react';

const UserContext = createContext({
  user: {
    name: '',
    lastName: '',
    avatar: '',
    nation: '',
  },
  setUser: () => {},
});
export default UserContext;
