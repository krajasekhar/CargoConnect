import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bidRequestAction } from '../actions';


class BidView extends React.Component {
	constructor(props) {
		super(props);

		this.topper = this.topper.bind(this);

	}
	componentDidMount() {


	}
	componentWillUnMount() {


	}
	topper() {
		// console.info(this.props.item.vendors);
		let index = 0;
		this.props.item.vendors.map((vendor, i) => {
			if (vendor.rank == 1) {
				index = i;
			}
		})
		// return <p>{this.props.item.vendors[index].name} &nbsp; ${this.props.item.vendors[index].bidAmount}/unit</p>
		return <header className="slds-media slds-media_center slds-has-flexi-truncate">
			<div className="slds-media__body">
				<h2 className="slds-card__header-title">
					<span className="slds-text-heading_small">{this.props.item.vendors[index].name}</span>
				</h2>
			</div>
			<div className="slds-no-flex">
				<span className="slds-text-heading_small">${this.props.item.vendors[index].bidAmount}/unit</span>
			</div>
		</header>
	}
	bidRequestAction(p, e) {
		let lobj = "";
		lobj = {
			bidId: this.props.item.id,
			response: e.target.value,
			vendorKey: p
		};
		// console.info("Accepted "+p+" "+this.props.item.id);
		this.props.bidRequestAction(lobj);
	}
	render() {
		// alert(this.props.users.isLoggedIn);
		return (
			<div className="">
				<article className="slds-card" style={{margin:'10px',padding:'10px'}}>	{/* TOP part */}
					<div className="slds-grid  slds-card__header">
						<header className="slds-media slds-media_center slds-has-flexi-truncate">
							<div className="slds-grid slds-grid_vertical-align-center slds-size_3-of-4 slds-medium-size_2-of-3">
								<div className="slds-media__body">
									<h2 className="slds-truncate" title="Bid ID">
										<span className="slds-text-heading_small">BID<span className="slds-text-heading_small" style={{color:'rgb(40,80,255)',fontWeight:'bold'}}>#{this.props.item.id}</span></span>
									</h2>
								</div>
							</div>
						</header>
					</div>
					<div className="slds-card__body slds-card__body_inner">
						<div className="slds-grid slds-gutters">
							<div className="slds-col">
								<table className="slds-table slds-no-row-hover">
									<thead>
										<tr>
											<td>Placed on</td>
											<td>Ends on</td>
											<td>Item</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												{this.props.item.placedDate}
											</td>
											<td>
												{this.props.item.endDate}
											</td>
											<td>
												{this.props.item.itemCode}
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							<div className="slds-col slds-button-group" role="group" style={{ height: '30px', marginTop: '15px' }}>
								<button className="slds-button slds-button_neutral">Refresh</button>
								<button className="slds-button slds-button_neutral">Edit</button>
								<button className="slds-button slds-button_neutral">Save</button>
								<div className="slds-dropdown-trigger slds-dropdown-trigger_click slds-button_last" style={{ height: '30px' }}>
									<button className="slds-button slds-button_icon slds-button_icon-border-filled" aria-haspopup="true" title="Show More" style={{ height: '30px' }}>
										<svg className="slds-button__icon" aria-hidden="true">
											<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/src/client/assets/icons/utility-sprite/svg/symbols.svg#down" />
										</svg>
										<span className="slds-assistive-text">Show More</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</article>
				<div className="slds-grid slds-gutters">
					<div className="slds-col">	 {/*slds-size_7-of-12*/}
						<article className="slds-card" style={{margin:'10px',padding:'10px'}}> {/* LEFT MIDDLE*/}
							<div className="slds-section slds-is-open">
								<h3 className="slds-section__title">
									<button aria-controls="expando-unique-id" aria-expanded="true" className="slds-button slds-section__title-action">
										<span className="slds-truncate" title="LEADERBOARD">LEADERBOARD</span>

										<div className="slds-clearfix slds-float_right" style={{ marginRight: '2px', marginLeft: '220px' }}>
											<svg className="slds-section__title-action-icon slds-button__icon slds-button__icon_right slds-clearfix slds-float_right" aria-hidden="true">
												<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/src/client/assets/icons/utility-sprite/svg/symbols.svg#switch" />
											</svg>
										</div>
									</button>
								</h3>
								<div aria-hidden="false" className="slds-section__content" id="expando-unique-id">

									<div className="slds-card__header slds-grid">

										{this.topper()}
									</div>

									<div className="slds-card__body">
										<table className="slds-table slds-table_bordered slds-table_resizable-cols slds-table_fixed-layout" role="grid">
											<thead>
												<tr className="slds-line-height_reset">
													<th aria-sort="none" className="slds-is-sortable slds-is-resizable slds-text-title_caps" aria-label="Account Name" scope="col">
														<a className="slds-th__action slds-text-link_reset" href="javascript:void(0);" role="button" tabIndex="0">
															<span className="slds-assistive-text">Sort by: </span>
															<span className="slds-truncate" title="RANK">RANK</span>
															<div className="slds-icon_container">
																<svg className="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon" aria-hidden="true">
																	<use xlinkHref="/src/client/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
																</svg>
															</div>
														</a>
														<span className="slds-assistive-text" aria-live="assertive" aria-atomic="true">Sorted none</span>
														<div className="slds-resizable">
															<input type="range" min="20" max="1000" aria-label="Account Name column width" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-191" tabIndex="0" />
															<span className="slds-resizable__handle">
																<span className="slds-resizable__divider"></span>
															</span>
														</div>
													</th>
													<th aria-sort="none" className="slds-is-sortable slds-is-resizable slds-text-title_caps" aria-label="Name" scope="col">
														<a className="slds-th__action slds-text-link_reset" href="javascript:void(0);" role="button" tabIndex="0">
															<span className="slds-assistive-text">Sort by: </span>
															<span className="slds-truncate" title="VENDOR">VENDOR</span>
															<div className="slds-icon_container">
																<svg className="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon" aria-hidden="true">
																	<use xlinkHref="/src/client/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
																</svg>
															</div>
														</a>
														<span className="slds-assistive-text" aria-live="assertive" aria-atomic="true">Sorted none</span>
														<div className="slds-resizable">
															<input type="range" min="20" max="1000" aria-label="Name column width" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-190" tabIndex="0" />
															<span className="slds-resizable__handle">
																<span className="slds-resizable__divider"></span>
															</span>
														</div>
													</th>

													<th aria-sort="none" className="slds-is-sortable slds-is-resizable slds-text-title_caps" aria-label="Close Date" scope="col">
														<a className="slds-th__action slds-text-link_reset" href="javascript:void(0);" role="button" tabIndex="0">
															<span className="slds-assistive-text">Sort by: </span>
															<span className="slds-truncate" title="BID AMOUNT/UNIT">BID AMOUNT/UNIT</span>
															<div className="slds-icon_container">
																<svg className="slds-icon slds-icon_x-small slds-icon-text-default slds-is-sortable__icon" aria-hidden="true">
																	<use xlinkHref="/src/client/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
																</svg>
															</div>
														</a>
														<span className="slds-assistive-text" aria-live="assertive" aria-atomic="true">Sorted none</span>
														<div className="slds-resizable">
															<input type="range" min="20" max="1000" aria-label="Close Date column width" className="slds-resizable__input slds-assistive-text" id="cell-resize-handle-192" tabIndex="0" />
															<span className="slds-resizable__handle">
																<span className="slds-resizable__divider"></span>
															</span>
														</div>
													</th>

												</tr>
											</thead>
											<tbody>
												{this.props.item.vendors.map((row, i) => {
													if (row.status == "Y")
														return <tr className="slds-hint-parent" key={i}>
															<td role="gridcell">
																<div className="slds-truncate" title="rank">{row.rank}</div>
															</td>
															<th scope="row">
																<div className="slds-truncate" title="vendor">
																	<a href="javascript:void(0);" tabIndex="0">{row.name}</a>
																</div>
															</th>
															<td role="gridcell">
																<div className="slds-truncate" title="bidAmoutpUnit">${row.bidAmount}</div>
															</td>
														</tr>
												}
												)}
											</tbody>

										</table>

									</div>
									<footer className="slds-card__footer">
										<a className="slds-card__footer-action" href="javascript:void(0);">
											<span className="slds-assistive-text"></span>
										</a>
									</footer>

								</div>
							</div>
						</article>


						<article className="slds-card" style={{margin:'10px',padding:'10px'}}> {/*LEFT Bottom*/}
							<div className="slds-section slds-is-open">
								<h3 className="slds-section__title">
									<button aria-controls="expando-unique-id" aria-expanded="true" className="slds-button slds-section__title-action">
										<span className="slds-truncate" title="PENDING INVITES">PENDING INVITES</span>

										<div className="slds-clearfix slds-float_right" style={{ marginRight: '2px', marginLeft: '220px' }}>
											<svg className="slds-section__title-action-icon slds-button__icon slds-button__icon_right slds-clearfix slds-float_right" aria-hidden="true">
												<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/src/client/assets/icons/utility-sprite/svg/symbols.svg#switch" />
											</svg>
										</div>
									</button>
								</h3>
								<div aria-hidden="false" className="slds-section__content" id="expando-unique-id">

									<div className="slds-card__body">
										<table className="slds-table slds-table_bordered slds-table_resizable-cols slds-table_fixed-layout" role="grid">

											<tbody>
												{this.props.item.vendors.map((row, i) => {
													if (row.status == "I")
														return <tr className="slds-hint-parent" key={i}>
															<td role="gridcell">
																<div className="slds-truncate" title="rank">{row.vendorId}</div>
															</td>
															<th scope="row">
																<div className="slds-truncate" title="vendor">
																	<a href="javascript:void(0);" tabIndex="0">{row.email}</a>
																</div>
															</th>
															<td role="gridcell">
																<div className="slds-truncate" title="rank"><a href="#">Remind</a></div>
															</td>
														</tr>
												})}


											</tbody>

										</table>

									</div>
								</div>
							</div>
						</article>

					</div>
					<div className="slds-col">	{/* RIGHT*/}
						<article className="slds-card" style={{margin:'10px',marginLeft:'0px',padding:'10px',paddingLeft:'0px'}}>
							<div className="slds-section slds-is-open">
								<h3 className="slds-section__title">
									<button aria-controls="expando-unique-id" aria-expanded="true" className="slds-button slds-section__title-action">
										<span className="slds-truncate" title="BID REQUESTS">BID REQUESTS</span>

										<div className="slds-clearfix slds-float_right" style={{ marginRight: '2px', marginLeft: '220px' }}>
											<svg className="slds-section__title-action-icon slds-button__icon slds-button__icon_right slds-clearfix slds-float_right" aria-hidden="true">
												<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/src/client/assets/icons/utility-sprite/svg/symbols.svg#switch" />
											</svg>
										</div>
									</button>
								</h3>
								{/* <div aria-hidden="false" className="slds-section__content" id="expando-unique-id">

								</div> */}
							</div>
									{/* <div className="slds-card__body"> */}
										{this.props.item.vendors.map((row, i) => {
											let bidRequestActionClick = this.bidRequestAction.bind(this, i);
											if (row.status == "R")
												return <BidRequests key={i} row={row} bidRequestAction={bidRequestActionClick} />
										})}

									{/* </div> */}
						</article>

					</div>
				</div>
			</div >
		)
	}
};

class BidRequests extends React.Component {
	render() {
		return (
			<div className="slds-card slds-has-top-magnet">
				<div className="slds-p-around_medium">
					<div className="slds-grid slds-gutters">

						<div className="slds-col">
							<p>{this.props.row.vendorId}</p>
							<p>${this.props.row.bidAmount} &nbsp; Ranks {this.props.row.rank}</p>
						</div>
						{/* <div className="sds-col"> */}
						{/* <div className="sds-col slds-border_all" style={{border:'2px solid',borderRadius: '5px'}} value="Y" onClick={this.props.bidRequestAction}> */}
						<div className="sds-col" value="Y" onClick={this.props.bidRequestAction}>
							<svg className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
								<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/src/client/assets/icons/action-sprite/svg/symbols.svg#check" />
							</svg>
						</div>
						<div className="sds-col" value="N" onClick={this.props.bidRequestAction}>
							<svg className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-right_x-small" aria-hidden="true">
								<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/src/client/assets/icons/action-sprite/svg/symbols.svg#remove" />
							</svg>
						</div>
						{/* </div> */}
					</div>
				</div>
			</div>
		)
	}
}

var mapStateToProps = (state) => {
	return {
		bids: state.bids
	};
}


var mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ bidRequestAction: bidRequestAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BidView);
// export default Bids;