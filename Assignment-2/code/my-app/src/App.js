import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
    <img src={employee. profileImg} width="100" height="100" />
    <h2>Tom</h2>
    <label>Location</label>
    <strong>New York</strong>
    <label id="blood">Blood group</label>
    <strong>B+</strong>
    <label id="age">Age</label>
    <strong>28</strong>
  
</div>
)
}



export default App;
