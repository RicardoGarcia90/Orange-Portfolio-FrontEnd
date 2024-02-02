import { createContext, useState } from 'react';

const UserContext = createContext({
  user: {
    token: null,
    name: null,
    lastName: null,
    avatar: null,
    nation: null,
  },
  setUser: () => {},
});
export default UserContext;
