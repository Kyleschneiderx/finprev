import React from 'react';
import { Link } from 'react-router-dom';



const UserList = ({allUsers, access}) => {

    const list = (values) => (
        values ?
            values.map(user => (
                <Link
                key = {user.id}
                to={`/User/${user.id}/${access}`}
                >
                    <div>
                        {user.name}
                    </div>
                </Link>
            ))
        : null
    )

    return(
        <div>
            <h4> Ad Accounts </h4>
            <div>
                {list(allUsers)}
            </div>

        </div>
    )

}


export default UserList;