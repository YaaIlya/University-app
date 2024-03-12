const TURN_ON_WAWE = "TURN-ON-WAWE";

let initialState = {
    wawe: [
        { id: 1, name: "You Belong To Me", link: "university-app\src\redux\sounds\Inna - Sun Is Up.mp3", isPlaying: false },
        { id: 2, name: "What The Fuck", link: "university-app\src\redux\sounds\You Belong To Me.mp3", isPlaying: false }
    ],
};

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case TURN_ON_WAWE:
            return {
                ...state,
                wawe: state.wawe.map(track => {
                    if (track.id === action.trackId) {
                        return { ...track, isPlaying: !track.isPlaying }; // Toggle isPlaying
                    }
                    return { ...track, isPlaying: false };
                }),
            };

        default:
            return state;
    }
};

export const turnOnWave = (trackId) => ({ type: TURN_ON_WAWE, trackId });

export default musicReducer;
