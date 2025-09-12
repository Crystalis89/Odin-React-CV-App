export default EducationInfoCV

function EducationInfoCV(props) {
    console.log(props[0])

   
    // console.log(props)

    // const props = {name:'John Smith', email:'test', phone: '1234567890', address: '123 Home Drive, PA 12345', linkedin: 'linkedinlink', github:'githublink'}
  

    // Now that I got the generation of the element working now need to build it's interactivity
    // const randomid = crypto.randomUUID()
    return <form>
        <label htmlFor='school' >School</label>
        <input type="text" id='school' name='school'/>

        <label htmlFor='degree' >Degree</label>
        <input type="text" id='degree' name='degree'/>

        <label htmlFor='startdate' >Start Date</label>
        <input type="date" id='startdate' name='startdate'/>

        <label htmlFor='enddate' >End Date</label>
        <input type="date" id='enddate' name='enddate'/>
        
        <label htmlFor='location' >Location</label>
        <input type="text" id='location' name='location' />

        <button id="expandbutton"  onClick={() => props.onClick('educationinfo')}>Save</button>
    </form>

}

// function EducationInfoEntry(props) {
    
// }