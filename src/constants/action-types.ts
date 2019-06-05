/**
 * Please follow the <<STATE>>_<<ACTION_TYPE>> pattern and group actions by STATE
 */
const ActionTypes = {
  // Home actions
  HOME_LOADING: 'HOME_LOADING',
  HOME_RECEIVE_DATA: 'HOME_RECEIVE_DATA',

  // Item actions
  ITEM_LOADING: 'ITEM_LOADING',
  ITEM_RECEIVE_DATA: 'ITEM_RECEIVE_DATA'
}

export default ActionTypes
