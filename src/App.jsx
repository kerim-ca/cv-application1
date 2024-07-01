import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Input = ({placeholder, type = "text", value, onChange, name}) => (
  <input 
  placeholder={placeholder} 
  type={type} 
  value={value}
  onChange={(e) => onChange(name, e.target.value)}
  name={name}  
  />
);



const Button = ({onClick, text}) => (
  <div onClick={onClick} >{text}</div>
);


 const GeneralInfo = ({formData, onChange}) => (
  <div className="exterior-input-container">
              <h2>General Information</h2>
              <div className="input-container">
                  <Input placeholder='First Name' name="firstName" value={formData.firstName} onChange={onChange}/>
                  <Input placeholder='Last Name' name="lastName" value={formData.lastName} onChange={onChange} />
              </div>
              <div className="input-container">
                  <Input placeholder='Phone Number' name="phoneNumber" value={formData.phoneNumber} onChange={onChange}/>
                  <Input placeholder='Email' name="email" value={formData.email} onChange={onChange} />
              </div>
  </div>
);

const EducationalInfo = ({formData, onChange}) => (
   <div className="exterior-input-container">
              <h2>Educational Information</h2>
              <div className="input-container">
                  <Input placeholder='School Name' name="schoolName" value={formData.schoolName} onChange={onChange} />
                  <Input placeholder='Date of Study' name="dateOfStudy" value={formData.dateOfStudy} onChange={onChange} />
              </div>
              <div className="input-container">
                  <Input placeholder='Title of Study' name="titleOfStudy" value={formData.titleOfStudy} onChange={onChange} />
                  <Input placeholder='Degree Level' name="degreeLevel" value={formData.degreeLevel} onChange={onChange}/>
              </div>
          </div>
);

const WorkInfo = ({formData, onChange}) => (
  <div className="exterior-input-container">
              <h2>Work Information</h2>
              <div className="input-container">
                  <Input placeholder='Company Name' name="companyName" value={formData.companyName} onChange={onChange}/>
                  <Input placeholder='Date of Work' name="dateOfWork" value={formData.dateOfWork} onChange={onChange}/>
              </div>
              <div className="input-container">
                  <Input placeholder='Position Title' name="positionTitle" value={formData.positionTitle} onChange={onChange}/>
                  <Input placeholder='resposibilities'name="responsibilities" value={formData.responsibilities} onChange={onChange}/>
              </div>
  </div>
);
  






function App() {

  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    schoolName: '',
    dateOfStudy: '',
    titleOfStudy: '',
    degreeLevel: '',
    companyName: '',
    dateOfWork: '', 
    positionTitle: '', 
    responsibilities: '',
  });

  const handleInputChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData, 
      [name]: value
    }));
  }

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleSubmit = () => {
    setIsEditing(false);

  }


  return (
      <div id="container">

        <header id="header">
          <Button onClick={handleEdit} text="Edit"/>
          <Button onClick={handleSubmit} text="Submit"/>
        </header>
      <h1>CV</h1>
        <div id="content">
          { isEditing ? (
          <div>
            <GeneralInfo formData={formData} onChange={handleInputChange}/>
            <EducationalInfo formData={formData} onChange={handleInputChange}/>
            <WorkInfo formData={formData} onChange={handleInputChange}/>
          </div>) : (
            <div>
              <h2>Submitted CV</h2>
              <p><strong>Name: </strong>{formData.firstName} {formData.lastName}</p>
              <p><strong>Phone: </strong>{formData.phoneNumber}</p>
              <p><strong>Email: </strong>{formData.email}</p>
              <p><strong>Education: </strong>{formData.degreeLevel} in {formData.titleOfStudy} from {formData.schoolName} ({formData.dateOfStudy})</p>
              <p><strong>Work: </strong> {formData.positionTitle} at {formData.companyName} ({formData.dateOfWork})</p>
              <p><strong>Responsibilities: </strong>{formData.responsibilities}</p>
            </div>
          )}
        </div>
      </div>
  )
}

export default App
