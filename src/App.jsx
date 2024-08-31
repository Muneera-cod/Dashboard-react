import { MantineProvider } from "@mantine/core"
import Dashboard from "./Components/Dashbroard/Dashboard"



function App() {

  return (
    <MantineProvider>
      <div>
        
        <Dashboard/>
      </div>
    
      
   
    </MantineProvider>
  )
}

export default App
