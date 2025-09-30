export {EducationInfoEdit, EducationEntryCard}

function EducationInfoEdit(props) {
      let data
        if (props.props === undefined) {
            data = {EXPcompanyname:'', EXPtitle:'', EXPstartdate: '', EXPenddate: '', EXPlocation:''}
        } else {
            data = props.props
        }
    return <>
        <label htmlFor='EDUschool' >School</label>
        <input type="text" id='EDUschool' name='school' defaultValue={data.EDUschool}/>

        <label htmlFor='EDUdegree' >Degree</label>
        <input type="text" id='EDUdegree' name='degree' defaultValue={data.EDUdegree}/>

        <label htmlFor='EDUstartdate' >Start Date</label>
        <input type="date" id='EDUstartdate' name='startdate' defaultValue={data.EDUstartdate}/>

        <label htmlFor='EDUenddate' >End Date</label>
        <input type="date" id='EDUenddate' name='enddate'defaultValue={data.EDUenddate}/>
        
        <label htmlFor='EDUlocation' >Location</label>
        <input type="text" id='EDUlocation' name='location' defaultValue={data.EDUlocation}/>
        
         <button id="EDUsavebutton" onClick={() => props.onSave('educationinfo', data.id)}>Save</button>
        <button id="EDUdeletebutton" onClick={() => props.onDelete('educationinfo', data.id)}>Delete</button>        

    </>

}


function EducationEntryCard(props) {
    let cardcollection = []
    let slicedprops = props.props.slice(3)
    slicedprops.map((entry) => {
        cardcollection.push(<li className="EDUCard" key={entry.id} id={entry.id} onClick={() => props.onClick('educationinfo', entry.id)
}>
            <h3 >{entry.EDUschool}</h3>
        </li>)

    })

   

    return cardcollection
}
