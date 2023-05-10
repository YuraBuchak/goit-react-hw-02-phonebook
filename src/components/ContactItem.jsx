import PropTypes from 'prop-types';
import css from './Phonebook.module.css';

export const ContactItem = ({ contactArrays, onClick }) => (
  <>
    {contactArrays.length ? (
      contactArrays.map(prop => (
        <li key={prop.id} className={css.listItem}>
          {prop.name}: {prop.number}
          <button className={css.deleteBtn} onClick={() => onClick(prop.id)}>
            X
          </button>
        </li>
      ))
    ) : (
      <p className={css.labelFilter}>Not found</p>
    )}
  </>
);

ContactItem.propTypes = {
  contactArrays: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
