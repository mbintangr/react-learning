
import React from 'react';
const Profile = (props) => {
    
    const { name, lastName } = props

    return (
        <div>
            <h1>Name: {name} {lastName}</h1>
            {props.children}
        </div>
    );
}

export default Profile;