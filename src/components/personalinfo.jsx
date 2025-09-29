export  {PersonalInfoEdit, PersonalInfoTemplate}

function PersonalInfoEdit(props) {

    return <>
        <label htmlFor='PIname' >Name</label>
        <input type="text" id='PIname' name='name' defaultValue={props.props.PIname}/>

        <label htmlFor='PIemail' >Email</label>
        <input type="email" id='PIemail' name='email' defaultValue={props.props.PIemail}/>

        <label htmlFor='PIphone' >Phone</label>
        <input type="tel" id='PIphone' name='phone' defaultValue={props.props.PIphone}/>

        <label htmlFor='PIaddress' >Address</label>
        <input type="text" id='PIaddress' name='address' defaultValue={props.props.PIaddress}/>

        <label htmlFor='PIlinkedin' >LinkedIn Address</label>
        <input type="text" id='PIlinkedin' name='linkedin' defaultValue={props.props.PIlinkedin}/>
        
        <label htmlFor='PIgithub' >Github Address</label>
        <input type="text" id='PIgithub' name='github' defaultValue={props.props.PIgithub}/>

        <button id="PIsavebutton"  onClick={() => props.onClick('personalinfo')}>Save</button> 

    </>
}

function PersonalInfoTemplate(props) {

    return <>
        <h2 id="PItitle__name">Name</h2>
        <p id="PIname">{props.props.PIname}</p>

        <h2 htmlFor='PIemail' >Email</h2>
        <p type="email" id='PIemail' name='email'>{props.props.PIemail}</p>

        <h2 htmlFor='PIphone' >Phone</h2>
        <p type="tel" id='PIphone' name='phone'>{props.props.PIphone}</p>

        <h2 htmlFor='PIaddress' >Address</h2>
        <p type="text" id='PIaddress' name='address'>{props.props.PIaddress}</p>

        <h2 htmlFor='PIlinkedin' >LinkedIn Address</h2>
        <p type="text" id='PIlinkedin' name='linkedin'>{props.props.PIlinkedin}</p>
        
        <h2 htmlFor='PIgithub' >Github Address</h2>
        <p type="text" id='PIgithub' name='github' >{props.props.PIgithub}</p>

        <button id="PIeditbutton"  onClick={() => props.onClick(['personalinfo'], props.props.id)}>Edit</button> 
    </>
    
}