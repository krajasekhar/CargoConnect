

export const nav = function(target) {
	return { type: 'NAV',payload:target}
};

export const getData = function() {
	return { type: 'GET_DATA' }
};

export const lnav = function(target) {
	return { type: 'LNAV',payload:target }
};

export const bidItemSelected = function(target) {
	return { type: 'BID_ITEM_SELECTED',payload:target }
};

export const bidRequestAction = function(target) {
	return { type: 'BID_REQUEST_ACTION',payload:target }
};
// export default {login,logout};