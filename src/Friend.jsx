export default function Friend({friend}){
    const {name, email} = friend;
    return (
        <div style={{border: '2px solid yellow', borderRadius: '15px', padding: '20px', margin: '20px'}}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}