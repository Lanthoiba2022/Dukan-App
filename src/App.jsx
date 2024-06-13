
import './App.css'
import OverView from './components/Overview'
import SideBar from './components/SideBar'
import Table from './components/Table'
import  TopBar  from './components/TopBar'
import Transaction from './components/Transaction'


function App() {
  return (
    <div className="bg-white-800">
      <SideBar/>

      <div className="sm:ml-64 border-b border-black-150 pl-4 bg-white-500">
          <TopBar />
      </div>

      <div className=" m-5 mb-0 sm:ml-64 grid gap-8">
        <OverView />
        <div className="grid gap-6">
          <Transaction />
          <Table/>
        </div>
      </div>
      
    </div>
  )
}

export default App
