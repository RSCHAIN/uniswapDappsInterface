import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import "./Pools.css"
import IfButtonIsClicked from "../IfButtonIsClicked/IfButtonIsClicked"

function Pools() {
    
    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(!open);
    }


  return (
    <div className='poolsContainer'>
        <div className="poolsContent">
            <div className="poolsHeader">
                <h2>Pools</h2>
            </div>
            <div className="poolsBody">
                <Link onClick={handleOpen}>+ Nouvelle position</Link>
                
            </div>
        </div>
        {open ? (<IfButtonIsClicked/>): null}
    </div>
  )
}

export default Pools