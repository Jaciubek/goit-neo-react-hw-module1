import { Avatar, Bio } from '@components/profile';
import css from './ProfileMeta.module.css';

const ProfileMeta = ({ name, tag, location, image }) => {
  return (
    <div className={css.profileTop}>
      <Avatar meta={{ image, name }} shape="circle" />
      <Bio meta={{ name, tag, location }} />
    </div>
  );
};

export default ProfileMeta;
