// Menu reducer, for controlling drop-down state
export default function menuReducer(state, action) {
  switch (action.type) {
    case 'SHOW_ACCOUNT_MENU':
      return state.merge({
        showAccountMenu: true,
      });

    case 'HIDE_ACCOUNT_MENU':
      return state.merge({
        showAccountMenu: false,
      });

    default:
      return state;
  }
}
