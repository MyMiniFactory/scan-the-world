import React from "react"
import "./scss/newsletter-subscribe.scss"

class NewsletterSubscribe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {	
			email: '',
		}
	}

	handleChange=(event)=>{
		this.setState({email: event.target.value});
	}

	render() {
		return (
		<form className="newletterSubscribe">
			<label 
				className="newletterSubscribeLabel"
				htmlFor="emailAddress"
			>
				Subscribe to our Newsletter
			</label>
			<div className="newletterFlex">
				<input 
					id="emailAddress"
					className="newletterInput" 
					type="text" 
					name="emailAddress"
					placeholder="Email Address"
					value={this.state.email}
					onChange={this.handleChange}
				/>
				{/* <input type="submit" value="Submit" /> */}
				<button className="submitButton">subscribe</button>
			</div>
		</form>
		)
	}
}

export default NewsletterSubscribe;
