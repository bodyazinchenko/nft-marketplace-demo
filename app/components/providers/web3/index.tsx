import { createContext, useContext, useState, type PropsWithChildren } from "react";
import { MetaMaskInpageProvider } from '@metamask/providers';
import { Contract, providers } from 'ethers';

export type Web3State = {
  ethereum: MetaMaskInpageProvider;
  provider: providers.Web3Provider;
  contract: Contract
}

const Web3Context = createContext<Web3State>(null);

export const Web3Provider = ({ children }: PropsWithChildren) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(null);

  return (
    <Web3Context.Provider value={web3Api}>
      {children}
    </Web3Context.Provider>
  )
}

export const useWeb3 = () => useContext(Web3Context);

export default Web3Provider;