import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';


const List = (props) => 
{
  const location = useLocation()
  const [currentDataSource, setCurrentDataSource] = useState("")
  
  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];

    if(currentPath === 'owners')
        setCurrentDataSource('owners');
    else if(currentPath === 'playgrounds')
        setCurrentDataSource('playgrounds');
    else if(currentPath === 'reservations')
        setCurrentDataSource('reservations');
    
  });
   return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable dataSource = {currentDataSource}/>
      </div>
    </div>
  )
}

export default List