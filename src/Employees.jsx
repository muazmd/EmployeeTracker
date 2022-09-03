
import MaleImg from './Images/MaleLogo.png'
import FeMaleImg from './Images/femalelogo.png'

import './Style/Employees.css'

const Employees = ({ Employee, Team, handleChangeSelection, handleCardClick }) => {

  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-6'>

          <select className='form-select form-select-lg' value={Team} onChange={handleChangeSelection}>
            <option value='TeamA'>TeamA</option>
            <option value='TeamB'>TeamB</option>
            <option value='TeamC'>TeamC</option>
            <option value='TeamD'>TeamD</option>

          </select>
        </div>
      </div>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
          <div className='cardCollection' style={{ cursor: 'pointer' }} >
            {Employee.map((Emp) => (
              <div key={Emp.id} id={Emp.id} className={Emp.teamName === Team ? 'card m-3 selected' : 'card m-3'} onClick={handleCardClick}   >
                {
                  Emp.gender === 'male' ?
                    <img className='card-image-top' src={MaleImg} width='200px' height='200px' alt='Male' /> :
                    <img className='card-image-top' src={FeMaleImg} width='200px' height='200px' alt='Male' />
                }
                <div className='card-body'>
                  <h5 className='card-title'> Full Name : {Emp.fullName}</h5>
                  <p className='card-text'> designation: {Emp.designation}</p>
                </div>
              </div>
            )
            )}
          </div>
        </div>
      </div>
    </main >
  )
}
export default Employees