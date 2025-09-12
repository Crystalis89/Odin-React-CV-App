export  {PersonalInfoEdit, PersonalInfoTemplate}

function PersonalInfoEdit(props) {
    // console.log(props)
     // const props = {name:'John Smith', email:'test', phone: '1234567890', address: '123 Home Drive, PA 12345', linkedin: 'linkedinlink', github:'githublink'}


    return <>
        <label htmlFor='name' >Name</label>
        <input type="text" id='name' name='name' defaultValue={props.props.name}/>

        <label htmlFor='email' >Email</label>
        <input type="email" id='email' name='email' defaultValue={props.props.email}/>

        <label htmlFor='phone' >Phone</label>
        <input type="tel" id='phone' name='phone' defaultValue={props.props.phone}/>

        <label htmlFor='address' >Address</label>
        <input type="text" id='address' name='address' defaultValue={props.props.address}/>

        <label htmlFor='linkedin' >LinkedIn Address</label>
        <input type="text" id='linkedin' name='linkedin' defaultValue={props.props.linkedin}/>
        
        <label htmlFor='github' >Github Address</label>
        <input type="text" id='github' name='github' defaultValue={props.props.github}/>

        <button id="savebutton"  onClick={() => props.onClick('personalinfo', 'save')}>Save</button> 


    </>
}

function PersonalInfoTemplate(props) {
        // console.log({props})

    return <>
        <h1 id="title__name">Name</h1>
        <p id="name">{props.props.name}</p>

        <h2 htmlFor='email' >Email</h2>
        <p type="email" id='email' name='email'>{props.props.email}</p>

        <h2 htmlFor='phone' >Phone</h2>
        <p type="tel" id='phone' name='phone'>{props.props.phone}</p>

        <h2 htmlFor='address' >Address</h2>
        <p type="text" id='address' name='address'>{props.props.address}</p>

        <h2 htmlFor='linkedin' >LinkedIn Address</h2>
        <p type="text" id='linkedin' name='linkedin'>{props.props.linkedin}</p>
        
        <h2 htmlFor='github' >Github Address</h2>
        <p type="text" id='github' name='github' >{props.props.github}</p>

        <button id="editbutton"  onClick={() => props.onClick('personalinfo', 'edit')}>Edit</button> 
    </>
    
}