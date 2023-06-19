const Profile = (props) => {
    
    const { name, lastName } = props

    return (
        <>
            <h1>Name: {name} {lastName}</h1>
            {props.children}
        </>
    );
}

export default Profile;