//STYLE
import './App.css'

//COMPONENTS
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userList/UserList'

import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([{
    id:1,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxY5jVbq5fVQMbeBtnon_1ptzOEUsnCXmYw&usqp=CAU",
    firstName:"Mehroj",
    lastName:"Baxtiyorov",
    from:"UZB",
    gender: "Male"
  },
  {
    id:2,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4B-z71aP3n3VrfrQoDVXbJeYLuUi5gfcRlw&usqp=CAU",
    firstName:"Mehroj",
    lastName:"Baxtiyorov",
    from:"UZB",
    gender: "Male"
  },
  {
    id:3,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwH0HZcdd5OAg_VuUoAiIYwxG-dtKZ1H3MdA&usqp=CAU",
    firstName:"Mehroj",
    lastName:"Baxtiyorov",
    from:"UZB",
    gender: "Male"
  },
  {
    id:4,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSf9DoptLzjFsd4O1LacpmyIznk6yfGf6Sqg&usqp=CAU",
    firstName:"Mehroj",
    lastName:"Baxtiyorov",
    from:"UZB",
    gender: "Male"
  },
  {
    id:5,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43wDN0j33I98NSoGA_Hm_jgIt1nYVyDWlYw&usqp=CAU",
    firstName:"Mehroj",
    lastName:"Baxtiyorov",
    from:"UZB",
    gender: "Male"
  },
  {
    id:6,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQUym8JK6RDIM2D8B0ZzMuQSkkD7ptIWMi9Go2aOjchgJs5XltvcQNO22-DBiCbbW4xE&usqp=CAU",
    firstName:"Mehroj",
    lastName:"Baxtiyorov",
    from:"UZB",
    gender: "Male"
  },
  {
    id:7,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHVOIJ254vhL0LxgJEUyZoq0FeY0gy_FSJ_g&usqp=CAU",
    firstName:"Mehroj",
    lastName:"Baxtiyorov",
    from:"UZB",
    gender: "Male"
  },
  {
    id:8,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmiIKuCRWkfjE9h3vhOpHLlSdvHVRC4NdZ7776BpY3kQjNJNIaPloKqYlcJ-tA_sUtnY&usqp=CAU",
    firstName:"Mehroj",
    lastName:"Baxtiyorov",
    from:"UZB",
    gender: "Male"
  },
  {
    id:9,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJbBrB5C62_OcT4xtxGLa-r-4HL55Qj0T3qA&usqp=CAU",
    firstName:"Mehroj",
    lastName:"Baxtiyorov",
    from:"UZB",
    gender: "Male"
  },
  {
    id:10,
    image:"https://oir.mobi/uploads/posts/2020-06/1591733183_49-p-windows-7-3d-oboi-na-rabochii-stol-wallher-65.jpg",
    firstName:"Mehroj",
    lastName:"Baxtiyorov",
    from:"UZB",
    gender: "Male"
  }
])

  //DELETE user
   let deleteUser =(id)=>{
    console.log(id);
    setUsers((prev)=>{
      return prev.filter((user)=>{
        return user.id !==id
      })
    })
   }

  return (
    <div className='App'>

      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.lengthe === 0 && <h2>NO USERS</h2>}
        </div>

        <UserList users={users} deleteUser = {deleteUser}/>
      </main>

  
      <Footer />

    </div>



  )
}

export default App
