export {CompiledSummary}

function CompiledSummary(props) {

    return <>
        <section id="summary__heading">
            <h1>{props.personalinfo.PIname}</h1>
            {/* Dont forget to add icons */}
            <div><p>{props.personalinfo.PIemail} {props.personalinfo.PIphone} {props.personalinfo.PIaddress}</p></div>
        </section>
        <section id="summary__info">
            
            <section id="summary__education">
                <h2 id="summary__title">Education</h2>
                <ul id="summary__list">
                    <SummaryEducationEntryCard props={props.educationinfo} />

                </ul>
            </section>

            <section id="summary__experience">
                <h2 id="summary__title">Professional Experience</h2>

                <ul id="summary__list">
                    <SummaryExperienceEntryCard props={props.experienceinfo} />
                </ul>
            </section>

        </section>
    
    </>
}

function SummaryExperienceEntryCard(props) {

    let cardcollection = []
    let slicedprops = props.props.slice(3) 

    if (slicedprops.length > 0 && Object.keys(slicedprops[0])[0].includes('EXP')) {
         slicedprops.map((entry) => {
        cardcollection.push(
        <li className="SummaryCard" key={`summary__${entry.id}`} id={`summary__${entry.id}`}>
            <div className="left">
                <p>{entry.EXPstartdate}-{entry.EXPenddate}</p>
                <p>{entry.EXPlocation}</p>
            </div>
            <div className="right">
                <h3 >{entry.EXPcompanyname}</h3>
                <p>{entry.EXPtitle}</p>
                <p>{entry.EXPdescription}</p>
            </div>

        </li>
        
    )

    })
    } 
   
    return cardcollection
}

function SummaryEducationEntryCard(props) {

    let cardcollection = []
    let slicedprops = props.props.slice(3)

    if (slicedprops.length > 0 && Object.keys(slicedprops[0])[0].includes('EDU')) {
         slicedprops.map((entry) => {
        cardcollection.push(
        <li className="SummaryCard" key={`summary__${entry.id}`} id={`summary__${entry.id}`}>
            <div className="left">
                <p>{entry.EDUstartdate}-{entry.EDUenddate}</p>
                <p>{entry.EDUlocation}</p>
            </div>
            <div className="right">
                <h3 >{entry.EDUcompanyname}</h3>
                <p>{entry.EDUschool}</p>
                <p>{entry.EDUdegree}</p>
            </div>

        </li>
        
    )

    })
    } 
   
    return cardcollection
}
