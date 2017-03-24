import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
import request from 'superagent';
import Moment from 'react-moment';
import { browserHistory } from 'react-router';
const CLOUDINARY_UPLOAD_PRESET = 'csxglbua';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/ds7zkewzh/upload';



class CarPost extends Component {
    
	constructor(props) {
        var carscheck = JSON.parse(localStorage.getItem('cars'));
        if (carscheck === null || carscheck.length === 0)
            {
            var newId = 0;
            }
        else
            {
        	var newId = (JSON.parse(localStorage.getItem('cars'))[JSON.parse(localStorage.getItem('cars')).length - 1].id) + 1;
            }
        
        var moment = require('moment');

         var postdate = moment().format("DD-MM-YYYY HH:mm");


	  super(props);
        
	  this.state = {
	  	cars: JSON.parse(localStorage.getItem('cars')) || [],
	  	newCar: {
            id: newId,
            username: "User Name",
	  		make: "Car Make",
	  		description: "Description",
            price: "Price",
            date: postdate,
	  	},
	  	uploadedFileCloudinaryUrl: ''
	  };
	  this.submitCar = this.submitCar.bind(this);
	  this.onImageDrop = this.onImageDrop.bind(this);
	}
    
      

	onImageDrop(files) {
		this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
	}

	handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

	submitCar() {
		console.log('Submit Car');
		console.log(this.username.value, this.make.value, this.description.value);
        if (this.username.value != '' && this.make.value != '' && this.price.value != '' && this.description.value != '' )
            {
		let newCar = this.state.newCar;
        newCar.username = this.username.value;
		newCar.make = this.make.value;
        newCar.price = this.price.value;
		newCar.description = this.description.value;
		newCar.image = this.state.uploadedFileCloudinaryUrl;

		this.setState({newCar});

		let cars = this.state.cars;
		cars.push(newCar);

		this.setState({cars});
		localStorage.setItem('cars', JSON.stringify(cars));
		console.log(cars);
		browserHistory.push('/');
                }
        else
            {
                console.log("Oops")
                alert("Please Fill The Required Fields");

            }

	}


		render() {
		return (
			<div className="row">
				<div className="col-sm-11" id="carform">
					<h1>Submit</h1>
					<form>
            <label htmlFor="dropzone">Car Image (Optional)</label>
					<Dropzone
             style={{"width" : "19%", "height" : "25%", "border" : "2px solid #BBB", "background-color" : "#FFFFFF", "color": "#999" }}
			      multiple={false}
			      accept="image/*"
			      onDrop={this.onImageDrop}>
			      <h5>Drop Image or Add Image via Click.</h5>
                </Dropzone>
            <br>
            </br>
			    <div>
		        {this.state.uploadedFileCloudinaryUrl === '' ? null :
		        <div>
		          <p>{this.state.uploadedFile.name}</p>
		          <img alt={this.state.uploadedFile.name} src={this.state.uploadedFileCloudinaryUrl} />
		        </div>}
		      </div>
                   
                     <div className="form-group">
					    <label htmlFor="username">Your Name</label>
					    <input type="text" 
					    				ref={(input) => {this.username = input;}}
					    				className="form-control" 
					    				id="name" 
					    				placeholder="Enter your name" />
					  </div>
                                        
           <div className="form-group">
             <label htmlFor="Make">Car Make</label>
             <select id="make" className="form-control" ref={(input)=> this.make = input}>
              <option value="Audi">Audi</option>
 <option value="Alfa Romeo">Alfa Romeo</option>
<option value="Aston Martin">Aston Martin</option>
<option value="Bentley">Bentley</option>
<option value="BMW">BMW</option>
<option value="Buick">Buick</option>
<option value="Bugatti">Bugatti</option>
<option value="Cadillac">Cadillac</option>
<option value="Chevrolet">Chevrolet</option>
<option value="Chrysler">Chrysler</option>
<option value="Citroën">Citroën</option>
<option value="Dodge">Dodge</option>
<option value="Ferrari">Ferrari</option>
<option value="Fiat">Fiat</option>
<option value="Ford">Ford</option>
<option value="Holden">Holden</option>
<option value="Honda">Honda</option>
<option value="Hyundai">Hyundai</option>
<option value="Jaguar">Jaguar</option>
<option value="Jeep">Jeep</option>
<option value="Kia">Kia</option>
<option value="Land Rover">Land Rover</option>
<option value="Lamborghini">Lamborghini</option>
<option value="Lexus">Lexus</option>
<option value="Lincoln">Lincoln</option>
<option value="Lotus">Lotus</option>
<option value="Maserati">Maserati</option>
<option value="Mazda">Mazda</option>
<option value="McLaren">McLaren</option>
<option value="Mercedes">Mercedes</option>
<option value="Mitsubishi">Mitsubishi</option>
<option value="Nissan">Nissan</option>
<option value="Opel">Opel</option>
<option value="Peugeot">Peugeot</option>
<option value="Plymouth">Plymouth</option>
<option value="Pontiac">Pontiac</option>
<option value="Porsche">Porsche</option>
<option value="Renault">Renault</option>
<option value="Rolls-Royce">Rolls-Royce</option>
<option value="SEAT">SEAT</option>
<option value="Škoda">Škoda</option>
<option value="Smart">Smart</option>
<option value="Subaru">Subaru</option>
<option value="Suzuki">Suzuki</option>
<option value="Toyota">Toyota</option>
<option value="Tesla">Tesla</option>
<option value="Volkswagen">Volkswagen</option>
<option value="Volvo">Volvo</option>
<option value="Other">Other...</option>
        </select>
            </div>
                    <div className="form-group">
					    <label htmlFor="Price">Car Price</label>
					    <input type="number" 
					    				ref={(input) => {this.price = input;}}
					    				className="form-control" 
					    				id="price" 
					    				placeholder="Enter Price" />
					  </div>    
                    
					  <div className="form-group">
					    <label htmlFor="description">Car Description</label>
					    <textarea className="form-control" 
					    id="description" 
					    ref={(input) => {this.description = input;}}
					    placeholder="Enter a car description" />
					  </div>

					  <button type="button" onClick={this.submitCar} className="btn btn-default">Submit</button>
					</form>
				</div>

			</div>

		);
	}
}


export default CarPost;