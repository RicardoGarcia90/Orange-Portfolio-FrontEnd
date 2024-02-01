import { createContext, useState } from 'react';

const UserContext = createContext({
  user: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  setUser: () => {},
});
export default UserContext;
