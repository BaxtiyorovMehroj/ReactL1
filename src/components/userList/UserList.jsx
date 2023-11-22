import './UserList.css'

export default function UserList({users, deleteUser} ) {

    console.log(users);

  return (
    <div className='userList'>
        <div className="userList-container container">
        {users.map((user)=>{
            return(
                <div className="card" key={user.id}>
                    <div className="card-inner">
                       
                        <img 
                        src={user.image} 
                        alt={user.name} 
                        height={150} 
                        width={150} />
                        <hr />
                        <h3>{user.firstName},
                         {user.lastName}, 
                         {user.age} age</h3>
                        <p>Gender:{user.gender}</p>
                        <p>From:{user.from}</p>
                        <button onClick={()=>deleteUser(user.id)}>Delete</button>
                    </div>
                </div>
            )
        })}
      
        </div>
      
    </div>
  )
}
