import css from './Bio.module.css';

const Bio = ({ meta: { name, tag, location } }) => {
  return (
    <>
      <p className={css.name}>{name}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </>
  );
};


export default Bio;
