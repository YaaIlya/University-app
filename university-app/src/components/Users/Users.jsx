import React from "react";
import userPhoto from "../../assets/images/user.png";
import styles from "./users.module.css";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    pagesCount = 10;
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div div className={styles.info} >
            <div>
                {pages.map(p => {
                    return <span className={props.currentPageNumber === p && styles.selectedPage}
                        onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userphoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>

                        </span>
                    </span>
                </div>)
            }
        </div >
    );
}

export default Users;