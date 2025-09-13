export {ExperienceInfoEdit, ExperienceEntryCard}

function ExperienceInfoEdit(props) {
    // console.log(props)

    // const props = {name:'John Smith', email:'test', phone: '1234567890', address: '123 Home Drive, PA 12345', linkedin: 'linkedinlink', github:'githublink'}
 
    return <>
        <label htmlFor='EXPcompanyname' >Company Name</label>
        <input type="text" id='EXPcompanyname' name='companyname'/>

        <label htmlFor='EXPtitle' >Position Title</label>
        <input type="date" id='EXPtitle' name='title'/>

        <label htmlFor='EXPstartdate' >Start Date</label>
        <input type="date" id='EXPstartdate' name='startdate'/>

        <label htmlFor='EXPenddate' >End Date</label>
        <input type="text" id='EXPenddate' name='enddate'/>
        
        <label htmlFor='EXPlocation' >Location</label>
        <input type="text" id='EXPlocation' name='location' />

        <button id="EXPsavebutton" onClick={() => props.onClick('experienceinfo')}>Save</button>

    </>
}

function ExperienceInfoEntry(props) {
    return <li id={props.props.id}>
        <h1>Company Name</h1>
        <p>{props.companyname}</p>
        <h1>Title</h1>
        <p>{props.props.title}</p>
        <h1>Start Date</h1>
        <p>{props.props.startdate}</p>
        <h1>End Date</h1>
        <p>{props.props.enddate}</p>
        <h1>Location</h1>
        <p>{props.props.location}</p>
        <h1>Description</h1>
        <p>{props.props.description}</p>
        <button onClick={() => props.onClick(props.id)}>Edit</button>

    </li>
}

function ExperienceEntryCard(props) {
    let cardcollection = []
    let slicedprops = props.props.slice(1)

    slicedprops.map((entry) => {
        cardcollection.push(<li className="EXPCard" key={entry.id} id={entry.id}>
            <h3 >{entry.EXPcompanyname}</h3>
            <button>Reveal</button>
        </li>)

    })

    console.log(cardcollection)
   

    return cardcollection
}
