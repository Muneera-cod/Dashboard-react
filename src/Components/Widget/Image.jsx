import React from 'react'
import './Addwidget.css'
function Image() {
  return (
    <div className='outercontainer'>
    <form>
    <fieldset>
        <label><input type='checkbox' checked/>Image Risk Assesment</label>
    </fieldset>
    <fieldset>
        <label><input type='checkbox' checked/>Image Security issue</label>
    </fieldset>
    </form>
    
</div>
  )
}

export default Image