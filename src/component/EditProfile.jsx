import React, { useEffect, useState } from "react";
import axios from "axios";
import "./editprofile.css";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
	const navigate=useNavigate;
  const [iduser, setIdUser] = useState([
	{ firstname: '', lastname: '', email: '', password: '',photo:'' } ])
  const [users, setUser] = useState({});

  useEffect(() => {

	const storediduser = localStorage.getItem('iduser');
        setIdUser(storediduser);

    axios.get(`http://localhost:3000/users/${iduser}`).then((response) => {
      setUser(response.data);
      console.log("this user ", response.data);
    });
  }, [iduser]);
  const changefirstname = (e) => {
	return {...users, firstname: e.target.value}
	
  };

  const changelastname = (e) => {
	setUser(users.map(user => {
	  if(user === users[0]) {
		return {...user, lastname: e.target.value}
	  }
	  return user;
	}));
  };


  const changeemail = (e) => {
	setUser(users.map(user => {
	  if(user === users[0]) {
		return {...user, email: e.target.value}
	  }
	  return user;
	}));
  };

  
  const changepasword = (e) => {
	setUser(users.map(user => {
	  if(user === users[0]) {
		return {...user, password: e.target.value}
	  }
	  return user;
	}));
  };

  const changehoto = (e) => {
	setUser(users.map(user => {
	  if(user === users[0]) {
		return {...user, password: e.target.value}
	  }
	  return user;
	}));
  };


  const hand = async (e) => {
	navigate('/user');
	  await axios.put(`http://localhost:3000/users/${iduser}`, users[0])
		  .then(response => console.log(response.data))
		  .catch(error => console.error(error));
		  navigate(`profile/${iduser}`);


	 await axios.get('http://localhost:3000/users')
		  .then(response => setUser(response.data))
		  .catch(error => console.error(error));
	   
		
   }

	
return(

<>



<div class="container">
<br/>
<br/>
	<div class="row" id="main">
        <div class="col-md-4 well" id="leftPanel">
            <div class="row">
                <div class="col-md-12">
                	<div>
        				<img src="http://lorempixel.com/200/200/abstract/1/" alt="Texto Alternativo" class="img-circle img-thumbnail"/>
        				<h2>Gopinath Perumal</h2>
        				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        				tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="btn-group">
                            <button type="button" class="btn btn-warning">
                                Social</button>
                            <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">
                                <span class="caret"></span><span class="sr-only">Social</span>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Twitter</a></li>
                                <li><a href="https://plus.google.com/+Jquery2dotnet/posts">Google +</a></li>
                                <li><a href="https://www.facebook.com/jquery2dotnet">Facebook</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Github</a></li>
                            </ul>
                        </div>
        			</div>
        		</div>
            </div>
        </div>
        <div class="col-md-8 well" id="rightPanel">
            <div class="row">
    <div class="col-md-12">
    	<form role="form" >
			<h2>Edit your profile.<small>It's always easy</small></h2>
			<hr class="colorgraph"/>
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-6">
					<div class="form-group">
                        <input type="text" name="first_name" id="first_name" class="form" placeholder="First Name" value={users.firstname}  tabindex="1" onChange={changefirstname}/>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-6">
					<div class="form-group">
						<input type="text" name="last_name" id="last_name" class="form" placeholder="Last Name" value={users.lastname} onChange={changelastname}  tabindex="2"/>
					</div>
				</div>
			</div>
			<div class="form-group">
				<input type="email" name="email" id="email" class="form" placeholder="Email Address" value={users.email} tabindex="4" />
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-10 col-md-10">
					<div class="form-group">
						<input type="password" name="password" id="password" class="form-control input-lg" placeholder="Password" tabindex="5"/>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-10">
					
				</div>
			</div>
			<hr class="colorgraph"/>
			<div class="row">
				<div class="col-xs-12 col-md-6"></div>
				<div class="col-xs-12 col-md-6"><a href="#" class="btn btn-success btn-block btn-lg" onClick={hand}>Save</a></div>
			</div>
		</form>
	</div>
</div>

<div class="modal fade" id="t_and_c_m" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h4 class="modal-title" id="myModalLabel">Terms & Conditions</h4>
			</div>
			<div class="modal-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-primary" data-dismiss="modal">I Agree</button>
			</div>
		</div>
	</div>
</div>
</div>
        </div>
     </div>       




</>
)



}

export default EditProfile