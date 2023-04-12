import { useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import EthereumLogo from "../../images/ethereum-logo.png"
import UniswapLogo from "../../images/uniswap-logo.png"

import "./Header.css"


const Header = () => {
    //new inject... suffit
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });
    const { address } = useAccount();

    return (
        <div className='headerContainer'>
            <div className="headerItems">
                <div className="headerItems-left">
                    <Link to={""}><img src={UniswapLogo} alt="Logo uniswap" /></Link>
                    <Link to="/">Echanger</Link>
                    <Link to="/pools">Pools</Link>
                </div>
                <div className="headerItems-right">
                    <Link to={""}>
                        <img src={EthereumLogo} alt="Logo ethereum" />
                        <span><FontAwesomeIcon icon={faChevronDown}/></span>
                    </Link>
                    <Link className='connectWalletButton' to={""}>
                        {address ? (<p>{address}</p>) : ( <button onClick={() => connect()}>Connect wallet</button>)}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;

    