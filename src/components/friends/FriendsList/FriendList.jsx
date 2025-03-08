import { FriendListItem } from '@components/friends';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  return (
    <ul className={css['friends-list']} >
      {friends.map(friend => (
        <li className={css['friends-item']} key={friend.id} style={{ backgroundColor: randomColor() }}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
