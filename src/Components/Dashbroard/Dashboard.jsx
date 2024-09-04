import React, { useState } from 'react'
import './Dashbroad.css'
import { RingProgress, Text ,Flex, Button } from '@mantine/core';
import imgg from '../../assets/circulararrow.svg'
import { IconDotsVertical,IconClockFilled ,IconChevronDown,IconChartBarOff} from '@tabler/icons-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { data } from './DashboardData';
import { useNavigate } from 'react-router-dom';

// import Addwidget from '../Widget/Addwidget.jsx';

function Dashboard() {
  
  // const [addwidget,setAddwidget]=useState(false)
  // const handleAddwidget=()=>{
  //     setAddwidget(!addwidget)
  // }
  const navigate=useNavigate()
  
  return (<>
   {/* <Addwidget addwidget={addwidget}/>  */}

  <div className='outerbox'>
     <div className='headerr'>
        <h2>CNAPP Dashboard</h2>
         <div className='btns'>
            <button onClick={()=>{navigate('/addwidget')}}>Add widget<span style={{paddingLeft:'10px'}}>+</span></button>
            <button><img src={imgg}></img></button>
            <button><IconDotsVertical></IconDotsVertical></button>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
              <button style={{borderRadius:'5px 0 0 5px',borderStyle:'initial',borderColor:'rgb(50, 11, 87)',borderStyle:'groove'}}><IconClockFilled color='rgb(50, 11, 87)' bordercolor='rgb(50, 11, 87)'/></button>
            <button style={{borderRadius:0,height:'41px',borderColor:'rgb(50, 11, 87)',borderStyle:'groove',color:'rgb(50, 11, 87)',fontWeight:'700',borderRight:'none'}}>Last 2 days</button>
            <button style={{height:'41px',borderRadius:'0 5px 5px 0',borderColor:'rgb(50, 11, 87)',borderStyle:'groove',borderLeft:'none'}}><IconChevronDown color='rgb(50, 11, 87)'/></button></div>
         </div>
     </div>
     
      <div className='innerpart' >

        {data.map((item)=>{
          return(
            <>
           <h3 style={{marginBottom:'0.3%',paddingLeft:'2%'}} key={item.id}>{item.name}</h3>
              <div className='row'>
              {item.widgets.map((widget)=>(
                <div className='box'>
                  
                    
                    <div className='boxinleft'>
                 
                          <h4 style={{margin:0}} key={widget.id}>{widget.name}</h4>
                          
                              { widget.total ?
                                     (widget.circular?<><div>
                                      
                                      <div style={{ width: 120, height: 100,position:'absolute',zIndex:10}}><CircularProgressbar  text={widget.total} 
                                      value={widget.value1}
                                   styles={buildStyles({textColor: "black", pathColor:widget.pathcolor1 ,trailColor:widget.unfilledcolor
                                     })}/></div>
                                       
                                         <div style={{ width: 120, height: 100,position:'relative',top:0,zIndex:9}} ><CircularProgressbar  text={widget.total} 
                                      value={widget.value2}
                                   styles={buildStyles({textColor: "black", pathColor:widget.pathcolor2 ,trailColor:widget.unfilledcolor
                                     })}/></div>
                                          <div style={{ width: 120, height: 100,position:'relative',top:-100}}><CircularProgressbar  text={widget.total} 
                                      value={widget.value3}
                                   styles={buildStyles({textColor: "black", pathColor:widget.pathcolor3 ,trailColor:"lightgray"
                                     })}>
                                          </CircularProgressbar></div> 
                                
                                          </div></>:<div>
                                  <label>{widget.total}</label><progress></progress></div>)
                                  
                                  :<div>
                                    <IconChartBarOff color='lightgray'/><p style={{fontSize:'x-small'}}>No graph data</p></div>}
                          
                   </div>
                 
                    <div className='boxinright'>
                 
                          <ul>
                            <li><p><img src={widget.checkboxcolor1}/>{widget.list1}</p></li>
                            <li><p><img src={widget.checkboxcolor2}/>{widget.list2}</p></li>
                            <li><p><img src={widget.checkboxcolor3}/>{widget.list3}</p></li>
                            <li><p><img src={widget.checkboxcolor4}/>{widget.list4}</p></li>
                          </ul>
                         
                    </div>
                  
                    
         
                </div>
              )) }
                <div className='box'>
                  <div style={{display:'flex',height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
                    <button onClick={()=>{navigate('/addwidget')}}><span style={{padding:'0 10%'}}>+</span>Add widget</button></div>
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