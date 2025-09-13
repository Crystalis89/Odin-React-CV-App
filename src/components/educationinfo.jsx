export {EducationInfoEdit, EducationEntryCard}

function EducationInfoEdit(props) {
    // console.log(props)
  
    // const props = {name:'John Smith', email:'test', phone: '1234567890', address: '123 Home Drive, PA 12345', linkedin: 'linkedinlink', github:'githublink'}

    // Now that I got the generation of the element working now need to build it's interactivity

    return <>
        <label htmlFor='EDUschool' >School</label>
        <input type="text" id='EDUschool' name='school'/>

        <label htmlFor='EDUdegree' >Degree</label>
        <input type="text" id='EDUdegree' name='degree'/>

        <label htmlFor='EDUstartdate' >Start Date</label>
        <input type="date" id='EDUstartdate' name='startdate'/>

        <label htmlFor='EDUenddate' >End Date</label>
        <input type="date" id='EDUenddate' name='enddate'/>
        
        <label htmlFor='EDUlocation' >Location</label>
        <input type="text" id='EDUlocation' name='location' />
        
        <label htmlFor='EXPdescription' >Description</label>
        <input type="text" id='EXPdescription' name='description' />

        <button id="EDUsavebutton" onClick={() => props.onClick('educationinfo')}>Save</button>
    </>

}


function EducationEntryCard(props) {
    let cardcollection = []
    let slicedprops = props.props.slice(1)

    slicedprops.map((entry) => {
        cardcollection.push(<li className="EDUCard" key={entry.id} id={entry.id}>
            <h3 >{entry.EDUschool}</h3>
            <button>Reveal</button>
        </li>)

    })

    console.log(cardcollection)
   

    return cardcollection
}
