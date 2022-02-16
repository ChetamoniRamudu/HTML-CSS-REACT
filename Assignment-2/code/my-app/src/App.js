import logo from './logo.svg';
import './App.css';



function App(props) {
  const { employee } = props;

  return (
    <div className="container">
      <div className='employee'>
        <div className='em-img'>
        <img src={employee.profileImg} width="100" height="100" />

        </div>
        <div>
        <h2>{employee.name}</h2>
        </div>
        <div className='employee-info'>
        <label>Location</label><br></br>
        <strong>{employee.location}</strong>
        </div>
        <div className='employee-info'> 
        <label id="blood">Blood group</label><br></br>
        <strong>{employee.bloodGroup}</strong>
        </div>
        <div className='employee-info'>
        <label id="age">Age</label><br></br>
        <strong>{employee.age}</strong>
        </div>
        
        
        
        
      </div>

    </div>
  )
}



export default App;
