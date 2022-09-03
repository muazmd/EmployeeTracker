import './App.css'
import Employees from './Employees';
import Header from './Header'
import Footer from './Footer'
import GroupedTeam from './GroupedTeam'
import NAV from './NAV'
import { useState, useEffect } from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

export default function App() {

  const [Team, setTeam] = useState(JSON.parse(localStorage.getItem('Team'))  || 'TeamA')
  const [TransformedTeam, setTransformedTeam] = useState([])
  const [Employee, setEmployees] = useState(  JSON.parse(localStorage.getItem('Employee')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }] )


  useEffect(() => {
    localStorage.setItem('Employee', JSON.stringify(Employee))
  }, [Employee])


  useEffect(() => {
    localStorage.setItem('Team', JSON.stringify(Team))
  }, [Team])

  const handleChangeSelection = (event) => {
    setTeam(event.target.value)
    console.log(Team)
  }
  const handleCardClick = (event) => {
    console.log(parseInt(event))
    const TransformedTeam =
      Employee.map((emp) => emp.id === parseInt(event.currentTarget.id)
        ?
        (emp.teamName === Team)
          ?
          { ...emp, teamName: '' }
          : { ...emp, teamName: Team }
        :
        emp);
    setEmployees(TransformedTeam)
    console.log(TransformedTeam)
  }


  return (
    <div>
      <Router>
      <NAV />
      <Header
        Team={Team}
        EmployeeCount={Employee.filter((emp) => emp.teamName === Team).length}
      />
        <Routes>
        <Route path='/' exact element={ <Employees
        Employee={Employee}
        Team={Team}
        handleChangeSelection={handleChangeSelection}
        handleCardClick={handleCardClick} />}  />
     

        
        <Route path='/GroupedTeam' element={ <GroupedTeam /> }/>
     </Routes>
      <Footer />
        </Router>
    </div>
  )
}
