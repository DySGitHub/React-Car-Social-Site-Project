import React, { Component } from 'react';
import Moment from 'react-moment';


const loadcars = [
          {
              'id': 1,
              'username': 'Tomas',
              'make': 'Mercedes',
              'description': 'TBA',
              'price': '55000.00',
              image: '',
              date: 'N/A'
              
          }, {
               'id': 2,
              'username': 'Andy',
              'make': 'Ferrari',
              'description': 'TBA',
              'price': '120000.00',
              image: '',
              date: 'N/A'
          }, {
             'id': 3,
              'username': 'Alex',
              'make': 'Ford',
              'description': 'TBA',
              price: '21000.00',              
              image: '',
              date: 'N/A'
          }, {
              'id': 4,
              'username': 'Bob',
              'make': 'Nissan',
              'description': 'TBA',
               price: '15000.00',
              image: '',
              date: 'N/A'
          }, {
               'id': 5,
              'username': 'George',
              'make': 'Toyota',
              'description': 'TBA',
              'price': '12000.00',
              image: '',
              date: 'N/A'
          }
    ]




function searchingFor(term){
    return function(x){
        if (x.make != undefined)
            {
        return x.make.toLowerCase().includes(term.toLowerCase()) || x.username.toLowerCase().includes(term.toLowerCase()) || x.description.toLowerCase().includes(term.toLowerCase()) || !term ;
            }
        else
            {
                console.log("No Search");
            }
    }
    
}
class Home extends Component {

	constructor(props) {
        
localStorage.setItem('loadcars', JSON.stringify(loadcars));
            



	  super(props);
    
	  this.state = {
          cars: JSON.parse(localStorage.getItem('cars')) || [],
                    term: '',
        
	  }
      this.searchHandler = this.searchHandler.bind(this);
        var carscheck = JSON.parse(localStorage.getItem('cars'));
        if (carscheck === null || carscheck.length === 0)
            {
                let cars = this.state.cars;

cars.push(loadcars["0"], loadcars["1"], loadcars["2"], loadcars["3"], loadcars["4"]);

        
		this.setState({cars});
                		localStorage.setItem('cars', JSON.stringify(cars));

            }
        else{
            
            
        }
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
    
    
    
    
    edit(car)
    {
         let editcar = car;
    var nameis=prompt("Please enter username",car.username);
    var makeis=prompt("Please enter make", car.make);
    var priceis=prompt("Please enter price", car.price);
    var descriptionis=prompt("Please enter description", car.description);


         editcar.username = nameis;
         editcar.make = makeis;
        editcar.price = priceis;
        editcar.description = descriptionis;
         this.setState({editcar});
         let cars = this.state.cars;
         		      localStorage.setItem('cars', JSON.stringify(cars));


         console.log(editcar);




    }
    

    
    
	displayCar() {
		let resultsArray = [];
		this.state.cars.filter(searchingFor(this.state.term)).map((car, i) => {
			resultsArray.push( 
				<div className="col-md-12" >
					<div className="thumbnail" id="piclist">
						<img src={car.image} alt={car.make} />
						<div className="caption" id="carlist">
			        <h3>{car.username}'s {car.make}</h3>
			        <p>{car.description}</p>
                			        <p>${car.price}</p>

                <small>Post Date: {car.date}</small>
                <br></br>
                <button type="button" onClick={this.delete.bind(this, car)} className="btn btn-danger btn-xs">Delete</button> &nbsp;
                <button type="button" onClick={this.edit.bind(this, car)} className="btn btn-info btn-xs">Edit</button>
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
            <div className="col-md-11" id="HomePage">
			<h1>Home</h1>
            
            <form>
            <input type="text"
                 onChange={this.searchHandler}
                 value={this.state.term}
                  placeholder="Car Search"/>  
                </form>
            <br></br>
            {this.displayCar()}

            </div>
			</div>  
      </div>
           
		);
	}
}

export default Home;