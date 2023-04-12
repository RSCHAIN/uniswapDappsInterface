import { ethers } from 'ethers';
import { useContract, useSigner } from 'wagmi';

import WETHArtifact from "../utils/abis/WETH.json";

const WETH_ADDRESS = '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6';
const WETH_DECIMALS = 18;

const useWETH = () => {
  const { data: signer } = useSigner();
  const WETHContract = useContract({
    address: WETH_ADDRESS,
    abi: WETHArtifact,
    signerOrProvider: signer,
  });

  const deposit = async (amount: number) => {
    if (!WETHContract)
      throw new Error('WETH contract has not been initialized');

    const parsedAmount = ethers.utils.parseUnits(
      amount.toString(),
      WETH_DECIMALS
    );

    const txn = await WETHContract.deposit({ value: parsedAmount });
    return txn;
  };

  const approve = async (address: string, amount: number) => {
    if (!WETHContract)
      throw new Error('WETH contract has not been initialized');

    const parsedAmount = ethers.utils.parseUnits(
      amount.toString(),
      WETH_DECIMALS
    );

    const txn = WETHContract.approve(address, parsedAmount);
    return txn;
  };

  return { deposit, approve };
};

export default useWETH;

/*import { useSigner, useContract } from 'wagmi';
import WETHArtifact from "./WETH.json";

const WETH_ADDRESS = '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6';
const WETH_DECIMALS = 18;
const useWETH = () => {
  const { data: signer } = useSigner();
  const WETHContract = useContract({
    address: WETH_ADDRESS,
    abi: WETHArtifact,
    signerOrProvider: signer,
  });
};

const deposit = async (amount: number) => {
    if (!WETHContract)
      throw new Error('WETH contract has not been initialized');
  
    const parsedAmount = ethers.utils.parseUnits(
      amount.toString(),
      WETH_DECIMALS
    );
  
    const txn = await WETHContract.deposit({ value: parsedAmount });
    return txn;
  };


  const approve = async (address: string, amount: number) => {
    if (!WETHContract)
      throw new Error('WETH contract has not been initialized');
  
    const parsedAmount = ethers.utils.parseUnits(
      amount.toString(),
      WETH_DECIMALS
    );
  
    const txn = WETHContract.approve(address, parsedAmount);
    return txn;
  };
  
  return { deposit, approve };

export default useWETH;*/