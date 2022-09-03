const Header = ({ Team, EmployeeCount }) => {
  return (
    <header className='container'>
      <div className='row justify-content-center mt-3 ml-3'>
        <div className='col-6'>
          <h1>Team Member Allocation</h1>
          <h4> There are {EmployeeCount} Employee in {Team} </h4>
        </div>
      </div>
    </header>
  )
}

export default Header