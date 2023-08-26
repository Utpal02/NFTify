import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div>
          <img src='../toplogo.png' alt=''/>
          <a style={{ fontFamily: 'Pacifo', width: '206px', lineHeight: '50px',fontSize:'25px', padding:'15px' ,color:'white'}}>NFTify</a>
      </div>
      
      <div className='token_address'>
          <img src='../ll1.png' alt=''/>
          <a style={{ fontFamily: 'Pacifo', width: '106px', lineHeight: '50px' , lineWidth:'50px',fontSize:'25px', padding:'15px',color:'white'}}>Token Address</a>
      </div> 
      <div className='pair_address'>
           <img src='../fluent_pair-24-filled.png' alt=''></img>
           <a style={{ fontFamily: 'Pacifo', width: '106px', lineHeight: '50px',fontSize:'25px', padding:'25px',color:'white' }}>Pair Address</a>

      </div>
      <div className='icons'>

      </div>
    
    </div>
  )
}

export default Sidebar
