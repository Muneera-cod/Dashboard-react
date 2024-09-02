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
                          <div style={{ width: 120, height: 120 ,position:'relative',top:0}} >
                              { widget.total ?
                                     (widget.circular?<><CircularProgressbar  text={widget.total} 
                                          value={widget.value1}
                                       styles={buildStyles({textColor: "black", pathColor:widget.pathcolor1 ,trailColor:widget.unfilledcolor
                                         })}/>
                                </>:<div style={{position:'absolute',right:0,left:0}}><label>{widget.total}</label><progress></progress></div>):<div style={{position:'absolute',top:'5%',right:'0',left:'150%',bottom:'5%'}}><IconChartBarOff color='lightgray'/><p style={{fontSize:'x-small'}}>No graph data</p></div>}
                          </div>
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