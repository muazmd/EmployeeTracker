const Footer = ({ Team, EmployeeCount }) => {
  const d = new Date();
  return (
    <header className='container'>
      <div className='row justify-content-center mt-3 ml-3'>
        <div className='col-6'>
          <h4>Powered by MAPS</h4>
          <p> Employee Allocation - {d.getFullYear()} </p>

        </div>
      </div>
    </header>
  )
}

export default Footer