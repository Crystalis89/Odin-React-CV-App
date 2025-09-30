export {ExperienceInfoEdit, ExperienceEntryCard}

function ExperienceInfoEdit(props) {
    let data
        if (props.props === undefined) {
            data = {EXPcompanyname:'', EXPtitle:'', EXPstartdate: '', EXPenddate: '', EXPlocation:'', EXPdescription: ''}
        } else {
            data = props.props
        }
    return <>
        <label htmlFor='EXPcompanyname' >Company Name</label>
        <input type="text" id='EXPcompanyname' name='companyname' defaultValue={data.EXPcompanyname}/>

        <label htmlFor='EXPtitle' >Position Title</label>
        <input type="text" id='EXPtitle' name='title' defaultValue={data.EXPtitle}/>

        <label htmlFor='EXPstartdate' >Start Date</label>
        <input type="date" id='EXPstartdate' name='startdate'defaultValue={data.EXPstartdate}/>

        <label htmlFor='EXPenddate' >End Date</label>
        <input type="date" id='EXPenddate' name='enddate' defaultValue={data.EXPenddate}/>
        
        <label htmlFor='EXPlocation' >Location</label>
        <input type="text" id='EXPlocation' name='location' defaultValue={data.EXPlocation}/>

        <label htmlFor='EXPdescription' >Description</label>
        <input type="text" id='EXPdescription' name='description' defaultValue={data.EXPdescription}/>

        <button id="EXPsavebutton" onClick={() => props.onSave('experienceinfo', data.id)}>Save</button>
        <button id="EXPdeletebutton" onClick={() => props.onDelete('experienceinfo', data.id)}>Delete</button>                
    </>
}


function ExperienceEntryCard(props) {

    let cardcollection = []
    let slicedprops = props.props.slice(3)

    slicedprops.map((entry) => {
        cardcollection.push(<li className="EXPCard" key={entry.id} id={entry.id} onClick={() => props.onClick('experienceinfo', entry.id)
    }>
            <h3 >{entry.EXPcompanyname}</h3>
        </li>)

    })
    return cardcollection
}
