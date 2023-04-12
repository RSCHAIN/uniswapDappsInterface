import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import EthereumLogo from '../../images/ethereum-logo.png'
import { Link } from 'react-router-dom'

import "./IfButtonIsClicked.css"

function IfButtonIsClicked() {


  return (
    <div className="ifButtonIsClickedContainer">
        <div className="ifButtonIsClickedCard">
            <div className="ifButtonIsClickedCard-header">
                <span><FontAwesomeIcon icon={faChevronLeft} /></span>
                <h2>Ajouter de la liquidité</h2>
                <small>Tout effacer</small>
                <span><FontAwesomeIcon icon={faGear} /></span>
            </div>
            <hr/>
            <div className="ifButtonIsClickedCard-body">
                <div className="ifButtonIsClickedCard-body-left">
                    <div className="firstParty">
                        <h2>Selectionnez une paire</h2>
                        <div className="firstPartyItems">
                            <div className="twoBittons">
                                <Link>
                                    <img src={EthereumLogo} alt="" />
                                    <span>ETH</span>
                                    <span><FontAwesomeIcon icon={faChevronDown} /></span>
                                </Link>
                                <Link>Select token</Link>
                            </div>
                            <div className="cardAfterButton">
                                <div className="cardAfterButton-left">
                                    <span>Niveau de frais</span>
                                    <small>The % you will earn in fees.</small>
                                </div>
                                <div className="cardAfterButton-right">
                                    <span>Masquer</span>
                                </div>
                            </div>
                            <div className="fourCards">
                                <div className="rows row1">
                                    <h2>0.05%</h2>
                                    <p>Idéal pour les paires très stables</p>
                                </div>
                                <div className="rows row2">
                                    <h2>0.05%</h2>
                                    <p>Idéal pour les paires très stables</p>
                                </div>
                                <div className="rows row3">
                                    <h2>0.05%</h2>
                                    <p>Idéal pour les paires très stables</p>
                                </div>
                                <div className="rows row4">
                                    <h2>0.05%</h2>
                                    <p>Idéal pour les paires très stables</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="secondParty">
                        <h2>Montants du dépôt</h2>
                        <div className="secondPartyTop">
                            <input type="text" placeholder='0'/>
                            <Link className="secondPartyTop-linkButton">
                                <span><img src={EthereumLogo} alt="" /></span>
                                <h2>ETH</h2>
                            </Link>
                        </div>
                        <div className="secondPartyBottom">
                            <input type="text" placeholder='0'/>
                            <Link className="secondPartyBottom-linkButton">
                                <span>Select token</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="ifButtonIsClickedCard-body-right"></div>
            </div>
        </div>

    </div>
  )
}

export default IfButtonIsClicked