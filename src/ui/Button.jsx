import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed text-white';

  const styles = {
    primary:
      base +
      ' bg-olive-600 hover:bg-olive-500 focus:bg-olive-500 px-4 py-3 md:px-6 md:py-4',
    small:
      base +
      ' bg-olive-600 text-xs hover:bg-olive-500 focus:bg-olive-500 px-4 py-2 md:px-5 md:py-2.5',
    round:
      base +
      ' bg-olive-600 px-2.5 py-1 text-sm hover:bg-olive-500 focus:bg-olive-500 md:px-3.5 md:py-2',
    secondary:
      'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-olive-600 hover:text-white focus:bg-olive-600 focus:text-white focus:outline-none focus:ring focus:ring-olive-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
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


