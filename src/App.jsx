
import userData from './userData.json'
import './App.css'
import Profile from './components/Profile/Profile'
import FriendList from './components/FriendList/FriendList'
import Friends from './friends.json'

function App() {
  

  return (
    <>
     <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    <FriendList friends={friends} />
      
     
    </>
  )
}

export default App
