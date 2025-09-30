import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {EducationInfoEdit, EducationEntryCard} from './components/educationinfo.jsx'
import {ExperienceInfoEdit, ExperienceEntryCard} from './components/experienceinfo.jsx'
import {PersonalInfoEdit, PersonalInfoTemplate} from './components/personalinfo.jsx'
import {CompiledSummary} from './components/compiledsummary.jsx'

import './App.css'

function App() {
   
  const [personalinfo, setPInfo] = useState({mode:'edit', PIname:'', PIemail:'', PIphone: '', PIaddress: '', PIlinkedin: '', PIgithub:'', id:''})
  // The first value for both of these is a boolean to check for if the menu is expanded or not.
  const [experienceinfo, setExpInfo] = useState([true, 'saved', -1])

  const [educationinfo, setEduInfo] = useState([true, 'saved', -1])
  let picontent
  let educontent = []
  let expcontent = []

  function handleSave(formcategory, entryid) {

    let newInfo = {}
    const category = (formcategory === 'educationinfo'? educationinfo : formcategory === 'experienceinfo' ? experienceinfo : personalinfo)        
    const inputs = [...document.querySelectorAll(`#cv__${formcategory} input`)]
    let slicedprops = []


    if (formcategory !== 'personalinfo') {
          slicedprops = category.slice(3)

    }
    let targetindex = (formcategory === 'personalinfo' ? -1 : slicedprops.findIndex(entry => {
            return entry.id === entryid    
    }))

    if (targetindex != -1) {
      targetindex += 3

    }

        inputs.map((input) => {
        newInfo[input.id] = input.value
        })

        if (targetindex === -1 && newInfo['id'] === undefined) {
          newInfo['id'] = crypto.randomUUID()
        } else {
        formcategory === 'personalinfo' ? newInfo['id'] = 'personalinfo' : newInfo['id'] = category[targetindex].id}

   switch (true) {
      case (formcategory === 'personalinfo'):
    
        newInfo.mode = 'saved'
        setPInfo(newInfo)

        break;
      case (formcategory === 'experienceinfo'):
        if (targetindex != -1) {
        let targetedentry = [...category]
          targetedentry[targetindex] = newInfo
          newInfo = targetedentry

        } else {

          newInfo = [...category, newInfo]

        }
        newInfo[1] = 'saved'
        setExpInfo(newInfo)

        break;
      case (formcategory === 'educationinfo'):
        if (targetindex != -1) {
          let targetedentry = [...category]
              targetedentry[targetindex] = newInfo
              newInfo = targetedentry
            } else {
                newInfo = [...category, newInfo]
            } 
        newInfo[1] = 'saved'
        setEduInfo(newInfo)

        break;  
    
      default:
        break;
    }
  } 

  function handleEdit(formcategory) {

    const category = (formcategory === 'educationinfo'? educationinfo : formcategory === 'experienceinfo' ? experienceinfo : [personalinfo]) 

    let targetedElement = category.findIndex(entry => {return entry.id === event.target.id})

    let newInfo 
    switch (true) {
      case (formcategory[0] === 'personalinfo'):

        newInfo = {...personalinfo}
        newInfo.mode = 'edit'
  
        setPInfo(newInfo)

        break;    

      case (formcategory === 'experienceinfo'):
        newInfo = [...category]
        newInfo[1] = 'edit'
        newInfo[2] = targetedElement

        setExpInfo(newInfo)

        break;

        case (formcategory === 'educationinfo'):
          newInfo = [...category]
          newInfo[1] = 'edit'
          newInfo[2] = targetedElement
        setEduInfo(newInfo)

        break;
    
      default:
        break;
    }
  }

  function handleDelete(formcategory, entryid) {
        const category = (formcategory === 'educationinfo'? educationinfo : formcategory === 'experienceinfo' ? experienceinfo : undefined)
        let targetedElement = category.findIndex(entry => {return entry.id === entryid})
        
        let newInfo = [...category]
         newInfo.splice(targetedElement, 1)
         newInfo[1] = 'saved'


         if (formcategory === 'educationinfo') {
          setEduInfo(newInfo)
         }

         if (formcategory === 'experienceinfo') {
              setExpInfo(newInfo)
         }

  }

  function handleExpand(event) {
    let newInfo
    if (event.target.value === 'education') {
      newInfo = [...educationinfo]
      newInfo[0] !== true ? newInfo[0] = true : newInfo[0] = false
      setEduInfo(newInfo)
    } 
    
    if (event.target.value === 'experience') {
      newInfo = [...experienceinfo]
      newInfo[0] !== true ? newInfo[0] = true : newInfo[0] = false
      setExpInfo(newInfo)
    }
  }
  
  if (personalinfo.mode === 'saved') {
    picontent = <PersonalInfoTemplate 
          props = {personalinfo} 
          onClick={handleEdit}
          />
  } else {
    picontent = <PersonalInfoEdit 
          props = {personalinfo} 
          onClick={handleSave}
          />
  }
 if (experienceinfo[0] === true) {
  if (experienceinfo[1] === 'saved') {
    expcontent = <>
    <ExperienceEntryCard props = {experienceinfo}
    onClick = {handleEdit}/> 
    <button onClick={() => handleEdit('experienceinfo')}>Add</button>          

              </>
      } else {
        expcontent = <>
          <ExperienceInfoEdit 
            props = {experienceinfo[experienceinfo[2]]} 
            onSave={handleSave}
            onDelete={handleDelete}          />
        </>
      
      }
  } else {
    expcontent =  <></>
  }

  if (educationinfo[0] === true) {

    if (educationinfo[1] === 'saved') {
          educontent = <>
      <EducationEntryCard props = {educationinfo}
                onClick = {handleEdit}/> 
      <button onClick={() => handleEdit('educationinfo')}>Add</button>          

                </>
        } else {
          educontent = <>
            <EducationInfoEdit 
              props = {educationinfo[educationinfo[2]]} 
              onSave={handleSave}
              onDelete={handleDelete}
            />
          </>
        
        }      
    } else {
      educontent =  <></>
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
      <section id='compiledsummary__container'>
        <CompiledSummary 
          personalinfo={personalinfo}
          experienceinfo={experienceinfo}
          educationinfo={educationinfo}
        />
      </section>
    </>
  )
}

export default App
