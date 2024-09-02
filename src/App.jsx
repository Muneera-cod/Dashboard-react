import { MantineProvider } from "@mantine/core"
import Dashboard from "./Components/Dashbroard/Dashboard"
import { RouterProvider } from "react-router-dom"
import { router } from './Routes/Routes.jsx'


function App() {

  return (
    <MantineProvider>
      <RouterProvider router={router}>
        
      </RouterProvider>
        
       
      
    
      
   
    </MantineProvider>
  )
}

export default App
