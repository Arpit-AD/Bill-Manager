import {React ,useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddBillContainer from './Containers/AddBillContainer'
import ChartContainer from './Containers/ChartContainer'
import EditCardContainer from './Containers/EditCardContainer'
import HomeContainer from './Containers/HomeContainer'

function App() {

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path = '/' exact element = {<HomeContainer/>}/>
        </Routes>
        <Routes>
          <Route path = '/new' exact element = {<AddBillContainer/>}/>
        </Routes> 
        <Routes>
          <Route path = '/edit/:id' exact element = {<EditCardContainer/>}/>
        </Routes> 
        <Routes>
          <Route path = '/chart' exact element = {<ChartContainer/>}/>
        </Routes> 
      </div>
    </Router>
  )
}

export default App
