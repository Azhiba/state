import React, { useState } from 'react'

function Profile() {
    const [show,setshow] = useState(false);
  return (
    <div>
         
        <div className='container'>
        <h1 className='title'> Welcome to My profile</h1>
        <button onClick={()=>setshow(!show)}>click here to show my profile</button>
        <br/>
        {show? (
       <div className='main'>
        <h2 className='namee'>Azouz Hiba</h2>
        <img src='im1.jpg' className='photo' alt=''/>
      < div className="All" style={{    width: "347px"}} >
      <p>I am currently a student at GO My Code,I'm looking for a new opportunity as a Full stack Developpeur</p>
    <p>  <b>SKIILS</b> <br/> -HTML/CSS <br/> -JAVASCRIPT <br/> -REACT <br/> -Visual Studio <br/></p>
</div>

</div>
 ):null} 
    </div>
    </div>
  )
}

export default Profile
