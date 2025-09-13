import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {EducationInfoEdit, EducationEntryCard} from './components/educationinfo.jsx'
import {ExperienceInfoEdit, ExperienceEntryCard} from './components/experienceinfo.jsx'
import {PersonalInfoEdit, PersonalInfoTemplate} from './components/personalinfo.jsx'

import './App.css'


function App() {
  const [personalinfo, setPInfo] = useState({mode:'edit'})

  // The first value for both of these is a boolean to check for if the menu is expanded or not.
  const [educationinfo, setEduInfo] = useState([true])
  const [experienceinfo, setExpInfo] = useState([true])
  let picontent
  let educontent = []
  let expcontent = []
  
  // {name:'John Smith', email:'test', phone: '1234567890', address: '123 Home Drive, PA 12345', linkedin: 'linkedinlink', github:'githublink'}

// console.log(personalinfo)
  function handleSave(formcategory, mode) {
    let newInfo = {}
   

    if (personalinfo.mode === 'save') {
      
      newInfo = {...personalinfo, mode:'edit'}
     } else {
        const inputs = [...document.querySelectorAll(`#cv__${formcategory} input`)]

            // console.log(inputs)

         inputs.map((input) => {
        newInfo[input.id] = input.value
      })
    if (newInfo['id'] === undefined && formcategory !== 'personalinfo') {
      newInfo['id'] = crypto.randomUUID()
    }
      // console.log(newInfo)
    }
   

    switch (true) {
      case (formcategory === 'personalinfo'):
        newInfo.mode = mode
        // console.log(newInfo)

        setPInfo(newInfo)
          
        break;

      case (formcategory === 'educationinfo'):

        newInfo = [...educationinfo, newInfo]
        console.log(newInfo)

        setEduInfo(newInfo)

        break;

      case (formcategory === 'experienceinfo'):
        newInfo = [...experienceinfo, newInfo]
                console.log(newInfo)

        setExpInfo(newInfo)

        break;
    
      default:
        break;
    }
    // console.log(newInfo)
  }

  function handleExpand(event) {
    console.log('expand')
    // let targetState = `${event.target.value}info`
    let newinfo
    // let content

                // Iterate through the state data to generate as many cards as needed. Start by slicing off the first index to cut out the true/false check for expand. Then populate the entry component and include it in the content. Possibly seperate this into it's own function so can use it for when close the newentry/edit form.


    if (event.target.value === 'education') {
      newinfo = [...educationinfo]
      newinfo[0] !== true ? newinfo[0] = true : newinfo[0] = false
      setEduInfo(newinfo)
    } 
    
    if (event.target.value === 'experience') {
      // console.log('experience')
      newinfo = [...experienceinfo]
      newinfo[0] !== true ? newinfo[0] = true : newinfo[0] = false
      setExpInfo(newinfo)
    }
       console.log(newinfo)

  }

  if (personalinfo.mode === 'save') {
    picontent = <PersonalInfoTemplate 
          props = {personalinfo} 
          onClick={handleSave}
          />
  } else {
    picontent = <PersonalInfoEdit 
          props = {personalinfo} 
          onClick={handleSave}
          />
  }

  if (educationinfo[0] === true) {
    educontent = <><EducationInfoEdit 
          props = {educationinfo} 
          onClick={handleSave}
          />
        <EducationEntryCard props = {educationinfo}/>
        </>        
        } else {
          educontent = <></>
        }



  if (experienceinfo[0] === true) {
    console.log(experienceinfo)
    expcontent = <>
          <ExperienceInfoEdit 
            props = {experienceinfo} 
            onClick={handleSave}
            />
            <ExperienceEntryCard props = {experienceinfo}/>
            </>
        } else {
          expcontent = <></>
        }

              

  return (
    <>
      <section id='cv__container'>
        <section id="cv__personalinfo">
          <h1>Personal Details</h1>

          {picontent}

        </section>

       <section id="cv__experienceinfo">
          <h1>Experience</h1>
          <button onClick={handleExpand} value={'experience'}>Expand</button>          
          {expcontent}

        </section>

         <section id="cv__educationinfo">
          <h1>Education</h1>
          <button onClick={handleExpand} value={'education'}>Expand</button>          
          {educontent}

          </section>

        
        
      </section>
    </>
  )
}

export default App
