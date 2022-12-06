import { createContext, useContext, useState, type PropsWithChildren } from "react";

const Web3Context = createContext<any>(null);

export const Web3Provider = ({ children }: PropsWithChildren) => {
  const [web3Api, setWeb3Api] = useState({ test: "Hello Provider " })

  return (
    <Web3Context.Provider value={web3Api}>
      {children}
    </Web3Context.Provider>
  )
}

export const useWeb3 = () => useContext(Web3Context);

export default Web3Provider;