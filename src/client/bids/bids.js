import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bidItemSelected } from '../actions';
import BidLbar from './bidlbar';
import BidItem from './biditem';
import BidView from './bidview';

class Bids extends React.Component {
	constructor(props) {
		super(props);

		// this.item = {
		// 	id: "996",
		// 	itemCode: "#32432",
		// 	placedDate: "03/19/2018",
		// 	endDate: "06/11/2019",
		// 	status: "Active",
		// 	posted: "Y",
		// 	vendors: [{
		// 		name: "Caleb Pittman",
		// 		bidAmount: "674"
		// 	}, {
		// 		name: "Harvey Aguliar",
		// 		bidAmount: "508"
		// 	}]
		// };
		// this.bidItemSelected=this.bidItemSelected.bind(this);
	}
	componentDidMount() {

	}
	componentWillUnMount() {


	}
	bidItemSelected(p, e) {
		// console.log(p);
		this.props.bidItemSelected(p);
	}
	render() {
		// alert(this.props.users.isLoggedIn);
		return (
			<div>
				<div className="slds-grid slds-gutters" >
					<div className="slds-col slds-size_5-of-24" style={{ borderRight: '3px solid',borderColor: '#cecece', paddingRight: '20px' }}>
						<BidLbar />
					</div>
					<div className="slds-col slds-size_16-of-24" style={{margin:'0px',padding:'0px'}}>
						<div className="slds-form-element" role="group" aria-labelledby="picklist-group-label" style={{height: '99%'}}>
							<div className="slds-dueling-list" style={{minHeight: '99%'}}>
								<div className="slds-dueling-list__column slds-dueling-list__column_responsive" style={{}}>
									<div className="slds-dueling-list__options" style={{minHeight: '99%'}}>
										<ul aria-describedby="option-drag-label" aria-labelledby="label-83" aria-multiselectable="false" className="slds-listbox slds-listbox_vertical" role="listbox" style={{margin:'0px',padding:'0px'}}>
											{this.props.bids.items.map((row, i) => {

												let boundItemClick = this.bidItemSelected.bind(this, i);
												if (row.bidStatus == this.props.bids.curBidFetch)
													return <li role="presentation" className="slds-listbox__item" key={i} onClick={boundItemClick}>
														<div className="slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline" aria-selected="false" draggable="false" role="option" tabIndex="0" style={{margin:'0px',padding:'0px',minHeight: '99%'}}>
															{/* <span className="slds-media__body"> */}
																{/* <span className="slds-truncate" title="Bid"> */}
																	<BidItem item={row} isSelected={i==this.props.bids.curBidView}/>
																{/* </span> */}
															{/* </span> */}
														</div>
													</li>
											}
											)}

										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="slds-col">
						{
							this.props.bids.curBidView != -1
							&&
							<BidView item={this.props.bids.items[this.props.bids.curBidView]} />
						}
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
	return bindActionCreators({ bidItemSelected: bidItemSelected }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Bids);
// export default Bids;