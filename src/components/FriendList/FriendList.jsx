import FriendListItem from './FriendListItem'
import css from './FriendList.module.css'
const FriendList = ({ friends }) => {
    return (
      <ul className={css.card}>
        {friends.map((friend) => (
          <li className={css.list} key={friend.id}>
            <FriendListItem  avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
      
    );
  };
  
  export default FriendList;
  