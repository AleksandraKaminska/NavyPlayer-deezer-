const initialState = {title: '', artist: {name: ''}, album: {cover_big: ''}, id: ''};
export default function (state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TRACK':
            return action.track;
            break;
    }
    return state;
}
