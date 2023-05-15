import React from 'react'
import { useNavigate} from 'react-router-dom'
import { Button} from 'react-bootstrap'
const Contact = () => {
  const navigate = useNavigate()

  const id="Praveen"
  const backhome=()=>{
    navigate('/',{state:{id:id}})
  }
  const navigatefunction=()=>{
    let x=(true)
    if(x){
      navigate('/about')
    }
    else{
      navigate('/')
    }
  }
  return (
    <div className='hacpage'>
        <h1>Contact</h1>
        <p>My Name Praveen</p>
        <p>My Contact No. 8081646264</p>
        <p>My Village Rudari</p>

        <h3>Ye button ke under navigation use hai</h3>

        <Button onClick={()=>backhome()}>Go Back To Home</Button> <span></span>

        <h3>Ye button ke under Function ke sath navigate ho rha hai agar true hai to home page false to about </h3>

        <Button onClick={()=>navigatefunction()}>Go To Home/About </Button>

        <br /><br></br>
        <Button onClick={()=>{navigate(-1)}}>Previous Page</Button>      {/* ye button k under click jo hai pichla page open krne k liye hai  */}

          
    </div>
  )
}

export default Contact