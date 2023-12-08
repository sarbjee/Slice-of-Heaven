import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary:
      base +
      ' bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 px-4 py-3 md:px-6 md:py-4',
    small:
      base +
      ' bg-yellow-400 text-stone-800 text-xs hover:bg-yellow-300 focus:bg-yellow-300 px-4 py-2 md:px-5 md:py-2.5',
    round:
      base +
      ' bg-yellow-400 text-stone-800 px-2.5 py-1 text-sm hover:bg-yellow-300 focus:bg-yellow-300 md:px-3.5 md:py-2',
    secondary:
      'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]} disabled={disabled}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'small', 'round', 'secondary']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  to: null,
  type: 'primary',
  onClick: null,
};

export default Button;

