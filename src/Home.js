import React, { Component } from 'react';



class Home extends Component {

	constructor(props) {
	  super(props);

	  this.state = {

	  	cars: JSON.parse(localStorage.getItem('cars')) || [],
          loadcars: [
          {
              'id': 995,
              'username': '2',
              'image': 'AM',
              'make': 'Finish Tutorial Series',
              'description': '#ReactForNewbies'
          }, {
              'id': 996,
              'username': '9',
              'image': 'AM',
              'make': 'Meeting with Team Leads',
              'description': 'New Project Kickoff'
          }, {
              'id': 997,
              'username': '11',
              'image': 'AM',
              'make': 'Call Mom',
              'description': 'Return her call before she kills me'
          }, {
              'id': 998,
              'username': '3',
              'image': 'PM',
              'make': 'Fix Wifey\'s website',
              'description': 'FB Ads Integration not working'
          }, {
              'id': 999,
              'username': '6',
              'image': 'PM',
              'make': 'Do DB Backups',
              'description': 'Related to upcoming server migration'
          }
      ]
          

	  };

	}
    
    
     delete(car){
    const newState = this.state.cars;
    if (newState.indexOf(car) > -1) {
      newState.splice(newState.indexOf(car), 1);
      this.setState({cars: this.state.cars})
    }
     }
    
	displayCar() {
		let resultsArray = [];
		this.state.cars.map((car, i) => {
			resultsArray.push(
				<div className="col-md-12">
					<div className="thumbnail">
						<img src={car.image} alt={car.make} />
						<div className="caption">
			        <h3>{car.username}'s {car.make} & ID: {car.id}</h3>
                    
			        <p>{car.description}</p>
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
			<div className="row">
            				<div className="col-md-12">

				<h1>Home</h1>
            </div>
				{this.displayCar()}
			</div>
		);
	}
}

export default Home;