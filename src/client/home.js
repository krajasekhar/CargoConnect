import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// import {nav} from './actions';

class Home extends React.Component {
	constructor(props) {
		super(props);

	}
	componentDidMount() {

	}
	componentWillUnMount() {


	}
	render() {
		// alert(this.props.users.isLoggedIn);
		return (
			<div>
				Home Page
			</div>
		)
	}
};

// var mapStateToProps = (state) => {
// 	return {
// 		users: state.users
// 	};
// }


// var mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({ nav: nav }, dispatch);
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App);
export default Home;