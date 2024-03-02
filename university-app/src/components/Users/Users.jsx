import React from "react";
import styles from "./users.module.css";

let Users = (props) => {

    // if (props.users.length === 0) {
    //     props.setUsers([
    //         { id: 1, photoUrl: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745", followed: false, fullName: "Ilya", status: "prepodovatel", location: { city: "Moscow", country: "Russia" } },
    //         { id: 2, photoUrl: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745", followed: true, fullName: "Dima", status: "old prepodovatel", location: { city: "Kiev", country: "Ukrain" } },
    //         { id: 3, photoUrl: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745", followed: false, fullName: "Artem", status: "young prepodovatel", location: { city: "Minsk", country: "Belarus" } },
    //     ]
    //     )
    // }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userphoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>

                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;