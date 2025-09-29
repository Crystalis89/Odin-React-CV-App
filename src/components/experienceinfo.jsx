export {ExperienceInfoEdit, ExperienceEntryCard}

function ExperienceInfoEdit(props) {
    let data
        if (props.props === undefined) {
            data = {EXPcompanyname:'', EXPtitle:'', EXPstartdate: '', EXPenddate: '', EXPlocation:''}
        } else {
            data = props.props
        }
    return <>
        <label htmlFor='EXPcompanyname' >Company Name</label>
        <input type="text" id='EXPcompanyname' name='companyname' defaultValue={data.EXPcompanyname}/>

        <label htmlFor='EXPtitle' >Position Title</label>
        <input type="date" id='EXPtitle' name='title' defaultValue={data.EXPtitle}/>

        <label htmlFor='EXPstartdate' >Start Date</label>
        <input type="date" id='EXPstartdate' name='startdate'defaultValue={data.EXPstartdate}/>

        <label htmlFor='EXPenddate' >End Date</label>
        <input type="text" id='EXPenddate' name='enddate' defaultValue={data.EXPenddate}/>
        
        <label htmlFor='EXPlocation' >Location</label>
        <input type="text" id='EXPlocation' name='location' defaultValue={data.EXPlocation}/>

        <button id="EXPsavebutton" onClick={() => props.onClick('experienceinfo', data.id)}>Save</button>

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
