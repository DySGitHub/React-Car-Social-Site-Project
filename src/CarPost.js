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
        if (this.username.value != '' && this.make.value != '' && this.description.value != '' && this.state.uploadedFileCloudinaryUrl != '')
            {
		let newCar = this.state.newCar;
        newCar.username = this.username.value;
		newCar.make = this.make.value;
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
				<div className="col-sm-10">
					<h1>Submit</h1>
					<form>
            <label htmlFor="dropzone">Car Image</label>
					<Dropzone
             style={{"width" : "50%", "height" : "25%", "border" : "1px solid black"}}
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
					    <input type="text" 
					    				ref={(input) => {this.make = input;}}
					    				className="form-control" 
					    				id="make" 
					    				placeholder="Enter the make of the car" />
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