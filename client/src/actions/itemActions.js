// this is where we make request our backend
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './types';
import axios from 'axios'
// export const getItems = () => {
// 	return {
// 		type: GET_ITEMS,
// 	};
// };

export const getItems = () => dispatch => {
	dispatch(setItemsLoading());
	axios
		.get('/api/items')
		.then(res => dispatch({
			type: GET_ITEMS,
			payload: res.data
		}))
}

export const addItem = item => dispatch=> {
  axios
    .post('/api/items', item)
    .then(res => dispatch({
      type: ADD_ITEMS,
      payload: res.data
    }))
};

// export const addItem = item => {
// 	return {
// 		type: ADD_ITEMS,
// 		payload: item
// 	};
// };


// export const deleteItem = id => {
// 	return {
// 		type: DELETE_ITEMS,
// 		payload: id,
// 	};
// };

export const deleteItem = id => dispatch=> {
  axios.delete(`/api/items/${id}`).then(res => dispatch({
    type: DELETE_ITEMS,
    payload: id
  }))
};


export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	}
}
