import { combineReducers } from 'redux';
import Axios from 'axios';

// const callServer = function(){
// 	Axios.get("/").then(function(response){
// 		console.info(response);
// 		return response;
// 	})
// }

const initialUserState = { 
	curPage: "Bids"
};
const userReducers = function (
	state = initialUserState, action) {
	// alert(action.type);
	let tmpObj = "";
	switch (action.type) {
		case 'NAV':
			tmpObj=JSON.parse(JSON.stringify(state));
			tmpObj.curPage=action.payload;
			return tmpObj;
		default:
			return state;
	}
}

// vendor status : Y: Active, I : Invited , R : Requested, N: Rejected
const initialBidState = { 
	items: [
		{
			id: "996",
			itemCode : "#32432",
			placedDate:"03/19/2018",
			endDate:"06/11/2019",
			bidStatus:"Active",
			posted:"Y",
			vendors:[{
				name:"Caleb Pittman",
				vendorId:"VENDOR#1",
				rank:1,
				email:"celeb@pittman.com",
				bidAmount:"674",
				status:"Y"
			},{
				name:"Harvey Aguliar",
				vendorId:"VENDOR#2",
				rank:2,
				email:"harvey@aguliar.com",
				bidAmount:"508",
				status:"Y"
			},{
				name:"XYZ",
				vendorId:"VENDOR#301",
				rank:3,
				email:"libby.schuppe@reece.com",
				bidAmount:"0",
				status:"I"
			},{
				name:"XYZ2",
				vendorId:"VENDOR#862",
				rank:4,
				email:"mcdernot.barney@yahoo.com",
				bidAmount:"0",
				status:"I"
			},{
				name:"ABC1",
				vendorId:"VENDOR#778",
				rank:5,
				email:"libby.schuppe@reece.com",
				bidAmount:"433",
				status:"R"
			},{
				name:"ABC2",
				vendorId:"VENDOR#938",
				rank:6,
				email:"libby.schuppe@reece.com",
				bidAmount:"325",
				status:"R"
			}]
		},
		{
			id: "323",
			itemCode : "#32323",
			placedDate:"03/19/2018",
			endDate:"12/11/2018",
			bidStatus:"Active",
			posted:"Y",
			vendors:[{
				name:"Lorem ipsum1",
				vendorId:"VENDOR#4",
				rank:1,
				email:"lorem1@ipsum.com",
				bidAmount:"123",
				status:"Y"
			},{
				name:"Lorem ipsum2",
				vendorId:"VENDOR#5",
				rank:2,
				email:"lorem2@ipsum.com",
				bidAmount:"456",
				status:"Y"
			},{
				name:"Lorem ipsum3",
				vendorId:"VENDOR#5",
				rank:3,
				email:"lorem3@ipsum.com",
				bidAmount:"789",
				status:"Y"
			},{
				name:"Lorem ipsum4",
				vendorId:"VENDOR#500",
				rank:4,
				email:"lorem4@ipsum.com",
				bidAmount:"111",
				status:"R"
			},{
				name:"Lorem ipsum5",
				vendorId:"VENDOR#501",
				rank:5,
				email:"lorem5@ipsum.com",
				bidAmount:"222",
				status:"R"
			},{
				name:"Lorem ipsum6",
				vendorId:"VENDOR#502",
				rank:6,
				email:"lorem6@ipsum.com",
				bidAmount:"222",
				status:"I"
			},{
				name:"Lorem ipsum7",
				vendorId:"VENDOR#503",
				rank:7,
				email:"lorem7@ipsum.com",
				bidAmount:"111",
				status:"I"
			}]
		},
		{
			id: "999",
			itemCode : "#04017",
			placedDate:"03/19/2015",
			endDate:"12/31/2018",
			bidStatus:"Inactive",
			posted:"Y",
			vendors:[{
				name:"Lorem ipsum8",
				vendorId:"VENDOR#6",
				rank:8,
				email:"lorem8@ipsum.com",
				bidAmount:"333",
				status:"Y"
			},{
				name:"Lorem ipsum9",
				vendorId:"VENDOR#7",
				rank:9,
				email:"lorem9@ipsum.com",
				bidAmount:"444",
				status:"Y"
			}]
		}
	],
	curBidFetch:"Active",
	curBidView:0
};
const bidReducers = function (
	state = initialBidState, action) {
	// alert(action.type);
	let tmpObj = "";
	switch (action.type) {
		case 'LNAV':
			// console.info("Lnav: "+action.payload);
			tmpObj=JSON.parse(JSON.stringify(state));
			tmpObj.curBidFetch=action.payload;
			tmpObj.curBidView=-1;
			return tmpObj;
		case 'BID_ITEM_SELECTED':
			// console.info("BID_ITEM_SELECTED: "+action.payload);
			tmpObj=JSON.parse(JSON.stringify(state));
			tmpObj.curBidView=action.payload;
			return tmpObj;
		case 'BID_REQUEST_ACTION':
			// console.info("BID_ITEM_SELECTED: "+action.payload);
			tmpObj=JSON.parse(JSON.stringify(state));
			tmpObj.items.map((each,i)=>{
				if(each.id==action.payload.bidId){
					// console.info(each.vendors[action.payload.vendorKey].status);
					each.vendors[action.payload.vendorKey].status = action.payload.response
				}
			})
			return tmpObj;
		default:
			return state;
	}
}

const allreducers = combineReducers(
	{
		users: userReducers,
		bids: bidReducers
	}
);
// const userReducers=()=>{
// 	isLoggedIn:false
// };

export default allreducers;