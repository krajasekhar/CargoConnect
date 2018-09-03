import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import {nav} from './actions';


class BidItem extends React.Component {
	constructor(props) {
		super(props);

		this.daysLeft = "";
		// console.info(this.props.item);
		let endDate = this.props.item.endDate;
		// console.info(endDate);
		let daycomps = "";
		daycomps = endDate.split("/");
		let endDate1 = new Date(daycomps[2], daycomps[0], daycomps[1]);
		this.daysLeft = endDate1.getTime() - Date.now();
		this.daysLeft = Math.floor(this.daysLeft / (1000 * 60 * 60 * 24));
		// console.info(this.daysLeft);
		
	}
	componentDidMount() {
		

	}
	componentWillUnMount() {


	}
	render() {
		// alert(this.props.users.isLoggedIn);
		this.bgStyle={};
		if(this.props.isSelected){
			this.bgStyle={backgroundColor:'rgb(245,245,245',border:'0px solid'};
		}
		// console.info(this.props.isSelected);
		// console.info(this.bgStyle);
		return (
			<div className="slds-card slds-has-bottom-magnet" style={this.bgStyle}>
				<div className="slds-p-around_medium ">

					<div className="slds-text-heading_small" style={{color:'rgb(40,80,255)',fontWeight:'bold'}}>
					<p>Bid#{this.props.item.id}</p>
					</div>
					<div className="slds-text-color_weak">
					{this.props.item.vendors.length} Bidders - {this.daysLeft} Days Left
					</div>
					
				</div>
			</div>
		)
	}
};

var mapStateToProps = (state) => {
	return {
		bids: state.bids
	};
}


var mapDispatchToProps = (dispatch) => {
	return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BidItem);
// export default Bids;