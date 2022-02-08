import React from 'react';
import logo from './logo.svg';
import './App.css';
var status = {
  1: 'suspended',
  2: 'completed',
  3: 'cancelled'
}


const appointments = {
  name: 'Allen ford',
  employeeId: 123456,
  appointmenton: new Date().toLocaleDateString(),
  email: 'allen@gmail.com',
  phone: 9876543210,
  'orderInfo': {
    status: status[1],
    door: 'Mark',
    time: new Date().toLocaleTimeString(),
  },
  'person': {
    title: 'Simple Title',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book   '
  }
}









var arrow = "<"
var rightarrow = ">"
function App() {
  return (
    <div className="site-container">
      <div className='order-details'>
        <div className='nav'>
          <div className='nav-conatainer'>
            <a className='nav-arrow arrow' href="#">{arrow}</a>
            <h1 className='nav-title'>{appointments.name}</h1>
            <span className='nav-text'>{appointments.employeeId}</span>
            <button className='btn nav-btn'>Print</button>

          </div>
        </div>
        <div className='container'>
          <div className='customer-info block'>
            <p className='text'>
              <strong>Appointment On </strong>
              {
                appointments.appointmenton
              }
            </p>
            <p className='text'>
              <strong>Email </strong>
              {
                appointments.email
              }
            </p>
            <p className='text'>
              <strong>Phone </strong>
              {
                appointments.phone
              }
            </p>
          </div>
          <div className='order-info grid block'>
            <div className='unit one-third'>
              <p className='text text-label'><strong>Status</strong></p>
              <p className='text order-status'>{appointments.orderInfo.status}</p>
            </div>
            <div className='unit one-third'>
              <p className='text text-label'> <strong>Door</strong></p>
              <p className='text order-status'>{appointments.orderInfo.door}</p>
            </div>
            <div className='unit one-third'>
              <p className='text text-label'> <strong>Time</strong></p>
              <p className='text order-status'>{appointments.orderInfo.time}</p>
            </div>
          </div>
          <ul className='product-list block'>
            <li className=' product'>
              <label className='img custom-checkbox'>
                <input type='checkbox' className='product-input' value=""></input>
                <span className='custom-checkbox-indicator'></span>
                <img className='avatar' src={appointments.person.avatar} width="100" height="100"></img>
              </label>
             </li>
             <li> 
              <a href="#" className='product-desc'>
                <div className='product-info'>
                  <h3 className='product-title text'>{appointments.person.title}</h3>
                  <p className='text-help text'>{appointments.person.description}</p>
                </div>
              </a>
            </li>
            <li>
            <span className='product-arrow arrow'>{rightarrow}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
