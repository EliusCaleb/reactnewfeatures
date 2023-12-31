import PropTypes from 'prop-types';

const Header = ({course}) => {
  return (
    <div>
        <h1>{course}</h1>
    </div>
  )
}
Header.propTypes = {
    course: PropTypes.string.isRequired,
  };
export default Header