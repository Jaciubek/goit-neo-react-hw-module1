import { ProfileMeta, Statistic } from '@components/profile';
import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  return (
    <article className={css.profile} style={{ backgroundColor: randomColor() }}>
      <ProfileMeta name={name} tag={tag} location={location} image={image} />
      <Statistic stats={stats} />
    </article>
  );
};

export default Profile;
