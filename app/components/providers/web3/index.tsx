import { createContext, useContext, useState, type PropsWithChildren } from "react";
import { type Web3State, createDefaultState } from './utils';

const Web3Context = createContext<Web3State>(createDefaultState());

export const Web3Provider = ({ children }: PropsWithChildren) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());

  return (
    <Web3Context.Provider value={web3Api}>
      {children}
    </Web3Context.Provider>
  )
}

export const useWeb3 = () => useContext(Web3Context);

export default Web3Provider;