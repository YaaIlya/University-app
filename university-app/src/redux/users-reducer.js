const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
        { id: 1, photoUrl: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745", followed: false, fullName: "Ilya", status: "prepodovatel", location: { city: "Moscow", country: "Russia" } },
        { id: 2, photoUrl: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745", followed: true, fullName: "Dima", status: "old prepodovatel", location: { city: "Kiev", country: "Ukrain" } },
        { id: 3, photoUrl: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745", followed: false, fullName: "Artem", status: "young prepodovatel", location: { city: "Minsk", country: "Belarus" } },
    ]

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: true }
                    }
                    return u;
                }),
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: false }
                    }
                    return u;
                }),
            }

        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }


        default:
            return state;
    }
}

export const followAC = (userid) => ({ type: FOLLOW, userid })
export const unfollowAC = (userid) => ({ type: UNFOLLOW, userid })
export const setUsersAC = (users) => ({ type: SET_USERS, users })



export default usersReducer;