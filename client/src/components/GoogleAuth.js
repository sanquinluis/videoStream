import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'; 

class GoogleAuth extends React.Component {

	componentDidMount(){
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: 
					'114615132445-99e0esugrvba1jmef3fsn13it6tkc8d3.apps.googleusercontent.com',
				scope: 'email'

			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();

				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			}); 
	 	});
	}

// This line will check if the user is signed in to his(hers) google account.

	onAuthChange = isSignedIn => {
		if(isSignedIn){
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};



	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};


	renderAuthButton(){
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button onClick={this.onSignOutClick} className="ui red google button">
					<i className="google icon"/>
					Sign Out
				</button>
			);
		} else {
			return (
				<button  onClick={this.onSignInClick}className=" ui red google button">
					<i className=" google icon"/>
					Sign In with google
				</button>
			);
		}
	}
	
	render() {
		return(
			<div> {this.renderAuthButton()} </div>
		);
	}
}

// The value of isSingedIn will be either (null, true or false)
const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect( 
	mapStateToProps, 
	{ signIn, signOut }
	)(GoogleAuth);




