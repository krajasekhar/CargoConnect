import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nav } from './actions';
import Home from './home';
import Orders from './orders';
import Vendors from './vendors';
import Bids from './bids/bids';
import Products from './products';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.allTabs = {
			"Home": <Home />,
			"Orders": <Orders />,
			"Vendors": <Vendors />,
			"Bids": <Bids />,
			"Products": <Products />
		};

		this.nav = this.nav.bind(this);

	}
	componentDidMount() {

	}
	componentWillUnMount() {


	}
	nav(p,e) {
		this.props.nav(p);
	}
	render() {
		// alert(this.props.users.isLoggedIn);
		return (
			<div>
				<div>
					<Header nav={this.nav} activeOne={this.props.users.curPage}/>
				</div>
				<div>
					{this.allTabs[this.props.users.curPage]}
				</div>
			</div>
		)
	}
};

var mapStateToProps = (state) => {
	return {
		users: state.users
	};
}

class Header extends React.Component {
	constructor(){
		super();
		// this.activeClass="slds-context-bar__item slds-is-active";
		this.activeClass=this.activeClass.bind(this);
	}
	activeClass(p){
		// console.info(p);
		const baseActive="slds-context-bar__item";
		let finalActive=baseActive;
		if(p==this.props.activeOne){
			finalActive+=" slds-is-active";
		}
		if(p=="Bids"){
			finalActive+=" slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover";
		}
		return(
			finalActive
		)
		// "slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_hover"
	}
	render() {
		// let activeRec=this.props.activeOne;
		// console.info(activeRec);
		return (
			<div>
				<div className="slds-context-bar">
					<div className="slds-context-bar__primary">
						<div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
							<div className="slds-context-bar__icon-action">
								<button className="slds-button slds-icon-waffle_container slds-context-bar__button" title="Description of the icon when needed">
									<span className="slds-icon-waffle">
										<span className="slds-r1"></span>
										<span className="slds-r2"></span>
										<span className="slds-r3"></span>
										<span className="slds-r4"></span>
										<span className="slds-r5"></span>
										<span className="slds-r6"></span>
										<span className="slds-r7"></span>
										<span className="slds-r8"></span>
										<span className="slds-r9"></span>
									</span>
									<span className="slds-assistive-text">Open App Launcher</span>
								</button>
							</div>
							<span className="slds-context-bar__label-action slds-context-bar__app-name">
								<span className="slds-truncate" title="CargoConnect">CargoConnect</span>
							</span>
						</div>
					</div>
					<nav className="slds-context-bar__secondary" role="navigation">
						<ul className="slds-grid">
							<li className={this.activeClass("Home")} >
								<a href="javascript:void(0);" className="slds-context-bar__label-action" title="Home">
									<span className="slds-assistive-text">Current Page:</span>
									<span className="slds-truncate" title="Home" onClick={(e)=>this.props.nav("Home",e)}>Home</span>
								</a>
							</li>
							<li className={this.activeClass("Orders")}>
								<a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
									<span className="slds-truncate" title="Orders" onClick={(e)=>this.props.nav("Orders",e)}>Orders</span>
								</a>
							</li>
							<li className={this.activeClass("Vendors")}>
								<a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
									<span className="slds-truncate" title="Vendors" onClick={(e)=>this.props.nav("Vendors",e)}>Vendors</span>
								</a>
							</li>
							<li className={this.activeClass("Bids")}>
								<a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
									<span className="slds-truncate" title="Bids" onClick={(e)=>this.props.nav("Bids",e)}>Bids</span>
								</a>
								<div className="slds-context-bar__icon-action slds-p-left_none">
									<button className="slds-button slds-button_icon slds-button_icon slds-context-bar__button" aria-haspopup="true" title="Open menu item submenu">
										<svg className="slds-button__icon" aria-hidden="true">
											<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/src/client/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
										</svg>
										<span className="slds-assistive-text">Open menu item submenu</span>
									</button>
								</div>
								<div className="slds-dropdown slds-dropdown_right">
									<ul className="slds-dropdown__list" role="menu">
										<li className="slds-dropdown__header" role="separator">
											<span className="slds-text-title_caps">ALL BIDS</span>
										</li>
										<li className="slds-dropdown__item" role="presentation">
											<a href="javascript:void(0);" role="menuitem" tabIndex="-1">
												<span className="slds-truncate" title="Menu Item One">Active Bids</span>
											</a>
										</li>
										<li className="slds-dropdown__item" role="presentation">
											<a href="javascript:void(0);" role="menuitem" tabIndex="-1">
												<span className="slds-truncate" title="Menu Item Two">Inactive Bids</span>
											</a>
										</li>
										<li className="slds-dropdown__item" role="presentation">
											<a href="javascript:void(0);" role="menuitem" tabIndex="-1">
												<span className="slds-truncate" title="Menu Item Three">Drafts</span>
											</a>
										</li>
										<li className="slds-dropdown__item" role="presentation">
											<a href="javascript:void(0);" role="menuitem" tabIndex="-1">
												<span className="slds-truncate" title="Menu Item Four">Requests</span>
											</a>
										</li>
										<li className="slds-dropdown__header slds-has-divider_top-space" role="separator">
											<span className="slds-text-title_caps">OPTIONS</span>
										</li>
										<li className="slds-dropdown__item" role="presentation">
											<a href="javascript:void(0);" role="menuitem" tabIndex="-1">
												<span className="slds-truncate" title="Menu Item One">Create new Bid</span>
											</a>
										</li>
										<li className="slds-dropdown__item" role="presentation">
											<a href="javascript:void(0);" role="menuitem" tabIndex="-1">
												<span className="slds-truncate" title="Menu Item Two">Create Vendor Group</span>
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li className={this.activeClass("Products")}>
								<a href="javascript:void(0);" className="slds-context-bar__label-action" title="Menu Item">
									<span className="slds-truncate" title="Products" onClick={(e)=>this.props.nav("Products",e)}>Products</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		)
	}
}


var mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ nav: nav }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(mapStateToProps)(Home);