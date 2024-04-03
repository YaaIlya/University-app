const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPageNumber: 1,
    isFetching: false,
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
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPageNumber: action.currentPageNumber }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }


        default:
            return state;
    }
}

export const followAC = (userid) => ({ type: FOLLOW, userid })
export const unfollowAC = (userid) => ({ type: UNFOLLOW, userid })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageNumberAC = (currentPageNumber) => ({ type: SET_CURRENT_PAGE, currentPageNumber })
export const setUsersTotalCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer;