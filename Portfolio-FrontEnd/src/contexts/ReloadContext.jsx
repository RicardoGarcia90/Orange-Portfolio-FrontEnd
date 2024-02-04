import { createContext } from "react";


export const ReloadContext = createContext({
  reload: true,
  setReload: () => {},
});