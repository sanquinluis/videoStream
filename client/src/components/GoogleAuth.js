import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

	componentDidMount(){
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: 
					'114615132445-99e0esugrvba1jmef3fsn13it6tkc8d3.apps.googleusercontent.com',
				scope: 'email'

			}).then = (() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.setState({ isSignedIn: this.auth.isSignedIn.get() })
			});
	 	});
	}

	renderAuthButton(){
		if (this.state.isSignedIn === null) {
			return <div> Don't KNOW</div>;
		} else if ( this.state.isSignedIn){
			return <div> I'm Singed in</div>;
		} else {
			return <div> I am Signed In</div>;
		}
	}
	
	render() {
		return(
			<div>{this.renderAuthButton()}</div>
		);
	}
}

export default GoogleAuth;