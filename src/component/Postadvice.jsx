import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './postadvice.css'
import * as filestack from 'filestack-js';


const Postadvice=()=>{
    const apikey = "AKRm9EgF3T06czN0i0UBpz";
    const client = filestack.init(apikey);
    const navigate=useNavigate();

    const [username, setUsername] = useState('');
    const[lastname,setLastname]=useState('');
    const [advice,setAdvice]=useState([
        { text: '', auther: '', photoUser: '', date: new Date().toLocaleDateString(), photoAdvise:'' }
      ])
      

   
   

      useEffect(() => {
        if(!localStorage.getItem("iduser"))
        navigate("/login");
        const storedUsername = localStorage.getItem('firstname');
        setUsername(storedUsername);

        const storeLastname=localStorage.getItem('lastname');
    setLastname(storeLastname);

        setAdvice([{ ...advice[0], auther: storedUsername+' '+storeLastname }]);
        console.log("storedUsername "+storedUsername+' '+storeLastname)
      }, []);

 

  
  const changetext = (e) => {
    setAdvice(advice.map(adviceItem => {
      if(adviceItem === advice[0]) {
        return {...adviceItem, text: e.target.value}
      }
      return adviceItem;
    }));
  };
  

 

  const changephotoUser = (e) => {
    setAdvice(advice.map(Adivce => {
      if(Adivce === advice[0]) {
        return {...advice, photoUser: e.target.value}
      }
      return Adivce;
    }));
  };

 

  const handleFileUpload = () => {
    const client = filestack.init(apikey);
    const options = {
      maxFiles: 20,
      uploadInBackground: false,
      onOpen: () => console.log("opened!"),
      onUploadDone: (res) => {
        if (res.filesUploaded && res.filesUploaded.length > 0) {
          const fileUrl = res.filesUploaded[0].url;
          setAdvice([{ ...advice[0], photoAdvise: fileUrl }]);
          console.log('upload:', fileUrl);
        }
      },
    };
    client.picker(options).open();
  };

  const hand = async (e) => {
    navigate('/advice');
      await axios.post('http://localhost:3000/advises',advice[0])
          .then(response => console.log(response.data))
          .catch(error => console.error(error));
          
  
     await axios.get('http://localhost:3000/advises')
          .then(response => setAdvice(response.data))
          .catch(error => console.error(error));
       
        
   }


    return(

        <>
        
        <fieldset>
  <legend>Create a post</legend>
  <textarea  onChange={changetext} placeholder="Message"></textarea>
  

  <div className="input-group">
  <div className="input-group-prepend">
   
  </div>
  <span className="input-group-text">
      <i className="fa fa-image"></i>
    </span>
  <input
  
    type="text"
    className="form-control-file"
    id="i"
    value={advice[0].photoAdvise}
    onChange={(e) => setAdvice([{ ...advice[0], photoAdvise: e.target.value }])}
    readOnly
    onClick={handleFileUpload}
    accept="image/*"
  />
</div>
 
  <button className="send" onClick={hand}>Send</button>
  
</fieldset>
        </>
    )
}

export default Postadvice;