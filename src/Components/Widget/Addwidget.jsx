import React, { useState } from 'react'
import './Addwidget.css'
import Cspm from './Cspm.jsx';
import Cwpp from './Cwpp.jsx';
import Image from './Image.jsx';
import Ticket from './Ticket.jsx';
import { IconX } from '@tabler/icons-react';
import { data } from '../Dashbroard/DashboardData';
import { Flex } from '@mantine/core';
import Dashboard from '../Dashbroard/Dashboard.jsx';
import { useNavigate } from 'react-router-dom';


function Addwidget({addwidget}) {
const [activeTab,setActivetab]=useState(0)

const handleTab=(tab)=>{
  setActivetab(tab)
}
const rendercontent=()=>{
  switch (activeTab){
    case 0:
      return <Cspm/>
    case 1:
      return <Cwpp/> 
    case 2: 
      return <Image/>
    case 3:
      return <Ticket/>  
  }
}


  // const [widget,setWidget]=useState(true)
  // const handle=()=>{
  //   setWidget(!widget)
  //   addwidget===false
  // }


  const navigate=useNavigate()

  return (
    <>
    
    
        <div className='rightpart'>
          <header className='toppart'>
            
            <div style={{display:'flex',alignItems:'center',height:'100%' }}><h4>Add widget</h4></div>
            <div style={{display:'flex',alignItems:'flex-start',justifyContent:'flex-end',height:'100%'}}>
              <IconX c={'white'} onClick={()=>{navigate('/')}}/></div>

          </header>
          
                <div className='secondpart'>
                  <p>Personalize your dashboard by adding following widgets</p>
                  <div >
                    <div style={{display:'flex',gap:'2%'}}>
                    <button onClick={()=>{handleTab(0)}}>CSPM</button>
                    <button onClick={()=>{handleTab(1)}}>CWPP</button>
                    <button onClick={()=>{handleTab(2)}}>Image</button>
                    <button onClick={()=>{handleTab(3)}}>Ticket</button>
                    </div>
                    <hr />
                    
                    </div>
                    
             {rendercontent()}
          </div>
          <div className='bottompart'>
                       <button>Cancel</button><button>Confirm</button>
                    </div>
        </div>
       <Dashboard/>
      
    </>
  )
}

export default Addwidget