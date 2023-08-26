import React from 'react'

const Pair_Token = () => {
  return (
    <div className="card">
      <div className="card1 cc">
        <h1>Basic Info</h1>
        <div className="data1">
        <p className="label">Pair created at</p>
        <p className="value">Etherium</p>
        </div>

        <div className="data1">
        <p className="label">Symbol</p>
        <p className="value">{props.data.baseToken.symbol}</p>
        </div>

        <div className="data1">
        <p className="label">Dex Id</p>
        <p className="value">{props.data.dexId}</p>
        </div>

        <div className="data1">
        <p className="label">Pair Address</p>
        <p className="value">#{props.data.pairAddress.substring(0,4)}</p>
        </div>

        <div className="smallimg">
            
            <img src="../info.png" alt="" className="center1"/>
        </div>
     </div>


      <div className="card2 cc">
      <h1>Basic Token</h1>
        <div className="data1">
        <p className="label">Name</p>
        <p className="value">{props.data.baseToken.name}</p>
        </div>

        <div className="data1">
        <p className="label">Symbol</p>
        <p className="value">{props.data.baseToken.symbol}</p>
        </div>

        <div className="data1">
        <p className="label">Address</p>
        <p className="value">#{props.data.baseToken.address.substring(0,4)}</p>
        </div>

        <div className="smallimg">  
            <img src="../ll1.png" alt="" className="center1"/>
        </div>

      
      </div>
      <div className="card3 cc">
      <h1>Quote Token</h1>
        <div className="data1">
        <p className="label">Name</p>
        <p className="value">{props.data.quoteToken.name}</p>
        </div>

        <div className="data1">
        <p className="label">Symbol</p>
        <p className="value">{props.data.quoteToken.symbol}</p>
        </div>

        <div className="data1">
        <p className="label"> Address</p>
        <p className="value">#{props.data.quoteToken.address.substring(0,4)}</p>
        </div>

        <div className="smallimg">   
            <img src="../ll1.png" alt="" className="center1"/>
        </div>

      </div>


      <div className="card4 cc">
      <h1>Price</h1>
        <div className="data1">
        <p className="label">Price Native</p>
        <p className="value">{props.data.priceNative}</p>
        </div>

        <div className="data1">
        <p className="label">Price Usd</p>
        <p className="value">{props.data.priceUsd}</p>
        </div>

        <div className="smallimg">  
            <img src="../dollar.png" alt="" className="center1"/>
        </div>

      </div>
    </div>
  )
}

export default Pair_Token;
