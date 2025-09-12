export default ExperienceInfoCVForm

function ExperienceEntryCard(props) {
    // Itterate through the state array to create a card for each
}

function ExperienceInfoCVForm(props) {
    // console.log(props)

    // const props = {name:'John Smith', email:'test', phone: '1234567890', address: '123 Home Drive, PA 12345', linkedin: 'linkedinlink', github:'githublink'}
 
    // Now that I got the generation of the element working now need to build it's interactivity

    return <>
        <label htmlFor='companyname' >Company Name</label>
        <input type="text" id='companyname' name='companyname'/>

        <label htmlFor='title' >Position Title</label>
        <input type="date" id='title' name='title'/>

        <label htmlFor='startdate' >Start Date</label>
        <input type="date" id='startdate' name='startdate'/>

        <label htmlFor='enddate' >End Date</label>
        <input type="text" id='enddate' name='enddate'/>
        
        <label htmlFor='location' >Location</label>
        <input type="text" id='location' name='location' />

        <label htmlFor='description' >Description</label>
        <textarea type="text" id='description' name='description' />

        <button id="savebutton"  onClick={() => props.onClick('experienceinfo')} 
>Save</button>

    </>
}

function ExperienceInfoEntry(props) {
    <li>
    <h1>Company Name</h1>
    <p>{props.companyname}</p>
    <h1>Title</h1>
    <p>{props.title}</p>
    <h1>Start Date</h1>
    <p>{props.startdate}</p>
    <h1>End Date</h1>
    <p>{props.enddate}</p>
    <h1>Location</h1>
    <p>{props.location}</p>
    <h1>Description</h1>
    <p>{props.description}</p>
    <button onClick={() => props.onClick(props.id)}>Edit</button>

    </li>
}