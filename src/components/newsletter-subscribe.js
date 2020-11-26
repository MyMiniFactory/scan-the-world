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
		<form 
			className="newletterSubscribe"
			action="https://myminifactory.us11.list-manage.com/subscribe/post?u=d472931d3b83139f3fe4179d3&id=71e6a4bafd"
			method="post" 
			id="mc-embedded-subscribe-form" 
			name="mc-embedded-subscribe-form" 
			target="_blank"
		>
			<label 
				className="newletterSubscribeLabel"
				htmlFor="mce-EMAIL"
			>
				Subscribe to our Newsletter
			</label>
			<div className="newletterFlex">
				<input 
					id="mce-EMAIL"
					className="newletterInput" 
					type="text" 
					name="EMAIL"
					placeholder="Email Address"
					value={this.state.email}
					onChange={this.handleChange}
				/>
				<input className="submitButton" type="submit" value="subscribe" />
			</div>
		</form>
		)
	}
}

export default NewsletterSubscribe;
