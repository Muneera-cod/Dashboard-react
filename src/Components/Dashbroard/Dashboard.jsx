import React, { useState } from 'react'
import './Dashbroad.css'
import { RingProgress, Text ,Flex, Button } from '@mantine/core';
import imgg from '../../assets/circulararrow.svg'
import { IconDotsVertical,IconClockFilled ,IconChevronDown} from '@tabler/icons-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { data } from './DashboardData';
import Addwidget from '../Widget/Addwidget';

function Dashboard() {
  
  const [addwidget,setAddwidget]=useState(false)
  const handleAddwidget=()=>{
      setAddwidget(!addwidget)
  }
  
  
  return (<>
   <Addwidget addwidget={addwidget}/> 

  <div className='outerbox' onClick={()=>setAddwidget(!addwidget)}>
     <div className='headerr'>
        <h3>CNAPP Dashboard</h3>
         <div className='btns'>
            <button onClick={handleAddwidget}>Add widget<span style={{paddingLeft:'10px'}}>+</span></button>
            <button><img src={imgg}></img></button>
            <button><IconDotsVertical></IconDotsVertical></button>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
              <button style={{borderRadius:'5px 0 0 5px',borderStyle:'initial',borderColor:'rgb(50, 11, 87)',borderStyle:'groove'}}><IconClockFilled color='rgb(50, 11, 87)' borderColor='rgb(50, 11, 87)'/></button>
            <button style={{borderRadius:0,height:'41px',borderColor:'rgb(50, 11, 87)',borderStyle:'groove',color:'rgb(50, 11, 87)',fontWeight:'700',borderRight:'none'}}>Last 2 days</button>
            <button style={{height:'41px',borderRadius:'0 5px 5px 0',borderColor:'rgb(50, 11, 87)',borderStyle:'groove',borderLeft:'none'}}><IconChevronDown color='rgb(50, 11, 87)'/></button></div>
         </div>
     </div>
     
      <div className='innerpart' >

        {data.map((item,index)=>{
          return(
            <>
           <h4 style={{marginBottom:'0.3%',paddingLeft:'2%'}} key={index}>{item.name}</h4>
              <div className='row'>
              {item.widgets.map((itemss,widgetIndex)=>(
                <div className='box'>
                  
                    
                    <div className='boxinleft'>
                 
                          <h4 style={{margin:0}}>{itemss.name}</h4>
                          <div style={{ width: 120, height: 120 }}>
                              <CircularProgressbar  text={itemss.total} 
                              styles={buildStyles({textColor: "red", pathColor: "turquoise",trailColor: "gold"
                                  })}
                                />
                          </div>
                   </div>
                  
                    <div className='boxinright'>
                 
                          <h4 style={{margin:0}}></h4>
                         
                    </div>
                    
         
                </div>
              )) }
                <div className='box'>
                  <div style={{display:'flex',height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}><button onClick={handleAddwidget}><span style={{padding:'0 10%'}}>+</span>Add widget</button></div>
                </div>                                                             
                                                                               
              </div>
              </>
              )})}
                                                                           
        
       </div>
    </div>    
     
    </>
  )
}

export default Dashboard