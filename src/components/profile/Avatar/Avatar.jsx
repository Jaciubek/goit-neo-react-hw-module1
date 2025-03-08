import css from './Avatar.module.css';

const Avatar = ({ meta: { image, name }, shape }) => {
  return (
    <div className={css[shape]}>
      <img className={css.avatar} src={image} alt={name} />
    </div>
  );
};

export default Avatar;
