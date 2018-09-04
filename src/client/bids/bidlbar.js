import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { lnav } from '../actions';

class BidLbar extends React.Component {
	constructor(props) {
		super(props);

		this.lnav = this.lnav.bind(this);
	}
	componentDidMount() {
		
		// document.getElementById("activeLSpan").click();
	}
	componentWillUnMount() {


	}
	lnav(p, e) {
		// console.log(p);
		this.props.lnav(p);
	}
	render() {
		// alert(this.props.users.isLoggedIn);
		return (
			<div>
				<div className="demo-only">
					<div className="slds-nav-vertical__section">
						<fieldset className="slds-nav-vertical">
							<legend className="slds-nav-vertical__title slds-text-title_caps">ALL BIDS</legend>
							{/* <input type="text" className="" placeholder="Search Bids"></input> */}
							<div className="slds-form-element">
								<div className="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
									<svg className="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default" aria-hidden="true">
										<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="../assets/icons/utility-sprite/svg/symbols.svg#search" />
									</svg>
									<input type="text" id="text-input-id-1" className="slds-input" placeholder="Search Bids" />
								</div>
							</div>
							<span className="slds-nav-vertical__item" onClick={(e) => this.lnav("Active", e)}>
								<input type="radio" id="Active" value="Active" name="AllBids" />
								<label className="slds-nav-vertical__action" htmlFor="Active" id="activeLSpan">
									<span className="slds-nav-vertical_radio-faux">Active Bids</span>
								</label>
							</span>
							<span className="slds-nav-vertical__item" onClick={(e) => this.lnav("Inactive", e)}>
								<input type="radio" id="Inactive" value="Inactive" name="AllBids" />
								<label className="slds-nav-vertical__action" htmlFor="Inactive">
									<span className="slds-nav-vertical_radio-faux">Inactive Bids</span>
								</label>
							</span>
							<span className="slds-nav-vertical__item" onClick={(e) => this.lnav("Drafts", e)}>
								<input type="radio" id="Drafts" value="Drafts" name="AllBids" />
								<label className="slds-nav-vertical__action" htmlFor="Drafts">
									<span className="slds-nav-vertical_radio-faux">Drafts</span>
								</label>
							</span>
							<span className="slds-nav-vertical__item" onClick={(e) => this.lnav("Requests", e)}>
								<input type="radio" id="Requests" value="Requests" name="AllBids" />
								<label className="slds-nav-vertical__action" htmlFor="Requests">
									<span className="slds-nav-vertical_radio-faux">Requests</span>
								</label>
							</span>
							<legend className="slds-nav-vertical__title slds-text-title_caps">OPTIONS</legend>
							<span className="slds-nav-vertical__item">
								<input type="radio" id="Create new Bid" value="Create new Bid" name="Options" />
								<label className="slds-nav-vertical__action" htmlFor="Create new Bid">
									<svg className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
										<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="../assets/icons/utility-sprite/svg/symbols.svg#add" />
									</svg>
									<span className="slds-nav-vertical_radio-faux" onClick={(e) => this.lnav("CreateBid", e)}>Create new Bid</span>
								</label>
							</span>
							<span className="slds-nav-vertical__item">
								<input type="radio" id="Create Vendor Group" value="Create Vendor Group" name="Options" />
								<label className="slds-nav-vertical__action" htmlFor="Create Vendor Group">
									<svg className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
										<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="../assets/icons/utility-sprite/svg/symbols.svg#people" />
									</svg>
									<span className="slds-nav-vertical_radio-faux" onClick={(e) => this.lnav("CreateVendorGroup", e)}>Create Vendor Group</span>
								</label>
							</span>
						</fieldset>
					</div>
				</div>
			</div >
		)
	}
};

var mapStateToProps = (state) => {
	return {
		bids: state.bids
	};
}


var mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ lnav: lnav }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BidLbar);
// export default Bids;