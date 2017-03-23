import React, { Component } from 'react';
import { browserHistory } from 'react-router';




class Contact extends Component {
    
    constructor(props) {
        
         var fbcheck = JSON.parse(localStorage.getItem('feedbacks'));
        if (fbcheck == null || fbcheck.length == 0)
            {
            var cId = 0;
            }
        else
            {
        	var cId = (JSON.parse(localStorage.getItem('feedbacks'))[JSON.parse(localStorage.getItem('feedbacks')).length - 1].id) + 1;
            }

	  super(props);

	  this.state = {
	  	feedbacks: JSON.parse(localStorage.getItem('feedbacks')) || [],
	  	 newFeedback: {
            id: cId,
            username: "User Name",
	  		comment: "Comment",
	  	},
	  };
	  this.submitFeedback = this.submitFeedback.bind(this);
	}

	

	submitFeedback() {
        
		console.log('Submit Feedback');
		console.log(this.username.value, this.comment.value);
     
            let newFeedback = this.state.newFeedback;
            newFeedback.username = this.username.value;
		      newFeedback.comment = this.comment.value;

		      this.setState({newFeedback});

		      let feedbacks = this.state.feedbacks;
		      feedbacks.push(newFeedback);

		      this.setState({feedbacks});
        	

		      localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
		      console.log(feedbacks);
window.location.reload();        
	}
    
    
     delete(feedback){
    const newState = this.state.feedbacks;
    if (newState.indexOf(feedback) > -1) {
      newState.splice(newState.indexOf(feedback), 1);
      this.setState({feedbacks: this.state.feedbacks});
      feedbacks: JSON.parse(localStorage.setItem("feedbacks", JSON.stringify(this.state.feedbacks)));
    }
     }
    
    displayFeedback() {
		let feedbackArray = [];
		this.state.feedbacks.map((feedback, i) => {
			feedbackArray.push(
				<div className="col-sm-12">
						<div className="caption">
			        <h3>Posted By: {feedback.username} & {feedback.id}</h3>
                    
			        <p>{feedback.comment}</p>
                <button type="button" onClick={this.delete.bind(this, feedback)} className="btn btn-danger btn-xs">Delete</button>

			      </div>
					</div>
				
				);
		});

		return feedbackArray;
	}

    
  render() {
    return (
        <div>
    <div id="contactform" className="col-sm-5">
    <h1>ContactPage</h1>  
        
    <div className="row">
				<div className="col-sm-12">
					<h3>Add Feedback</h3>
					<form>
                   
                     <div className="form-group">
					    <label htmlFor="username">Your Name</label>
					    <input type="text" 
					    				ref={(input) => {this.username = input;}}
					    				className="form-control" 
					    				id="name" 
					    				placeholder="Enter your name" />
					  </div>
                                        
					  <div className="form-group">
					    <label htmlFor="comment">Your Comment</label>
					    <input type="text" 
					    				ref={(input) => {this.comment = input;}}
					    				className="form-control" 
					    				id="comment" 
					    				placeholder="Enter Site Feedback" />
					  </div>            
                    

					  <button type="button" onClick={this.submitFeedback} className="btn btn-default">Submit</button>

					</form>
    

<h2>Contact Details</h2>
<h5>Phone - 01024929349</h5>
<h5>Email - <a href="mailto:20063614@mail.wit.ie">20063614@mail.wit.ie</a></h5>
				</div>
			</div>
           </div>
        <div id="contactlist" className="col-sm-6" >
         <div id="clrow" className="row col-sm-12" >
		<div classname="col-sm-12">
             
            </div>
    <h2>List of Feedback</h2>
         {this.displayFeedback()}
            </div>
        
            </div>
        
        
        
        
        
        
        
        
        
        </div>
                      
       
    );
  }
}

export default Contact;
