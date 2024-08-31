import React from 'react'
import './Addwidget.css'
import { IconX } from '@tabler/icons-react';
function Addwidget({addwidget}) {
  return (
    <>
    {addwidget &&
    
        <div className='rightpart'>
          <header className='toppart'>
            
            <div style={{display:'flex',alignItems:'center',height:'100%' }}><h4>Add widget</h4></div>
            <div style={{display:'flex',alignItems:'flex-start',justifyContent:'flex-end',height:'100%'}}><IconX c={'white'} onClick={()=>(!addwidget)}/></div>

          </header>
          <div className='secondpart'>

          </div>
        </div>
  
    }
    </>
  )
}

export default Addwidget