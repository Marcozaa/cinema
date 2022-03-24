import { HdrPlus } from '@mui/icons-material'
import { padding } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { UserPlus } from 'tabler-icons-react'
import './profileImageForm.css'
export default function ProfileImageForm() {

    function previewFile() {
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  // Get blob?
  console.log(URL.createObjectURL(file) );
  setImage(URL.createObjectURL(file))
}
const [image, setImage] = useState()
   
  return (
    <div className='profileImageForm'>
        <img src={image}/>
        <div className="content">
            <div className="addIcon" >
                <input type="file" id="input" onChange={previewFile}/>
                <label for="input"><UserPlus 
                style={{
                    background: "#226094", 
                    cursor: "pointer", 
                    borderRadius: "50%",  
                    padding: "1rem"}}
                /></label>
            </div>
        </div>
    </div>
  )
}
