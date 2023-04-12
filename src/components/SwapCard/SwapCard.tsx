import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useAccount, useBalance } from 'wagmi';

import EthereumLogo from "../../images/ethereum-logo.png"

import useSwap from "../../Hooks/UseSwap";
import "./SwapCard.css"


const UNI_ADDRESS = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984';

const SwapCard = () => {
  const [quote, setQuote] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const { address } = useAccount();
  const { data: ETHBalance } = useBalance({
    address,
    watch: true,
  });
  const { data: UNIBalance } = useBalance({
    address,
    token: UNI_ADDRESS,
    watch: true,
  });

  const { getQuote, swap } = useSwap();

  const onChangeAmountInput = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAmount(parseFloat(event.target.value));
    const quote = await getQuote(parseFloat(event.target.value));
    setQuote(quote)
  };

  const onClickSwapButton = async () => {
    const txn = await swap(amount);
    await txn.wait();
  };

  return (
    <div className='cardContainer'>
      <div className="card">
        <div className="cardHeader">
          <h4>Échanger</h4>
          <span><FontAwesomeIcon icon={faGear} /></span>
        </div>
        <div className="cardBody">
          <div className="bodyTop">
            <input type="text" placeholder='0' onChange={onChangeAmountInput}/>
            <Link to={"/"}  className="linkButton">
              <img src={EthereumLogo} alt="" />
              <h2>ETH</h2>
              <span><FontAwesomeIcon icon={faChevronDown} /></span>
            </Link>
          </div>
          <p>Balance: {ETHBalance?.formatted}</p>
          <div className="bodyBottom">
            <input type="text" placeholder='0' disabled value={quote === 0 ? '' : quote}/>
            <Link to={"/"} className="linkButton">
              <span>Select token</span>
              <span><FontAwesomeIcon icon={faChevronDown} /></span>
            </Link>
          </div>
          <p>Balance: {UNIBalance?.formatted}</p>
        </div>
      </div>
      <button className='swapButton' disabled={address ? false : true} onClick={onClickSwapButton}>Swap</button>
    </div>
    
  );
};

export default SwapCard;