import React, { Component } from 'react';
import Moment from 'react-moment';

const cars = JSON.parse(localStorage.getItem('cars'));

function searchingFor(term){
    return function(x){
        return x.make.toLowerCase().includes(term.toLowerCase()) || x.username.toLowerCase().includes(term.toLowerCase()) || x.description.toLowerCase().includes(term.toLowerCase());
    }
    
}
class Home extends Component {

	constructor(props) {
        

	  super(props);
    
	  this.state = {

	  	cars: JSON.parse(localStorage.getItem('cars')) || [],
          term: '',
        
	  }
      this.searchHandler = this.searchHandler.bind(this);

    }    
    
    searchHandler(event){
        this.setState({term: event.target.value})
        
    }
    
     delete(car){
    const newState = this.state.cars;
    if (newState.indexOf(car) > -1) {
      newState.splice(newState.indexOf(car), 1);
      this.setState({cars: this.state.cars});
      cars: JSON.parse(localStorage.setItem("cars", JSON.stringify(this.state.cars)));
    }
     }
    
    
    

    
    
	displayCar() {
		let resultsArray = [];
        
		this.state.cars.filter(searchingFor(this.state.term)).map((car, i) => {
                
			resultsArray.push(
				<div className="col-md-12">
					<div className="thumbnail">
						<img src={car.image} alt={car.make} />
						<div className="caption">
			        <h3>{car.username}'s {car.make}</h3>
			        <p>{car.description}</p>
                <small>Post Date: {car.date}</small>
                <br></br>
                <button type="button" onClick={this.delete.bind(this, car)} className="btn btn-danger btn-xs">Delete</button>

			      </div>
					</div>
				</div>
				);
		});
		return resultsArray; 

	}

    

	render() {
		return (
            <div>
			<div className="row">
            <div className="col-md-12">
			<h1>Home</h1>
            <form>
            <input type="text"
                 onChange={this.searchHandler}
                 value={this.state.term}
                  placeholder="Car Search"/>  
                </form>
            {this.displayCar()}
            </div>
			</div>  
      </div>
           
		);
	}
}

export default Home;