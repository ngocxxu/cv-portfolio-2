import { Dispatch, ReactNode, createContext, useState } from "react";

type TGlobalProvider = {
  children: ReactNode;
};

type TViewPortState = {
  isView: boolean;
  id: string;
};

export type TGlobalContextState = {
  viewPortState: {
    isView: boolean;
    id: string;
  };
  setViewPortState: Dispatch<React.SetStateAction<TViewPortState>>;
};

export const GlobalContext = createContext<TGlobalContextState | null>(null);

const GlobalProvider = ({ children }: TGlobalProvider) => {
  const [viewPortState, setViewPortState] = useState<TViewPortState>({
    isView: false,
    id: "",
  });

  const value = {
    viewPortState,
    setViewPortState,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
