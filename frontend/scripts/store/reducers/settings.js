// export default function reducer(state, action) {
//     if (action.type === 'SETTINGS_PENDING') {
//         state = state.loading();
//     } else if (action.type === 'SETTINGS_FULFIELD') {
//         state = state.loaded(action.payload);
//     } else if (action.type === 'SETTINGS_LOADING_REJECTED') {
//         state = state.failed(action.payload);
//     }
//
//     console.log(action, state.toJS());
//
//     return state;
// }