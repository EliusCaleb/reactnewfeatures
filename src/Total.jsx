import PropTypes from 'prop-types';

const Total = ({totals}) => {
  return (
    <div>
      <p>Number of exercises {totals}</p>
    </div>
  )
}
Total.propTypes = {
    totals: PropTypes.number.isRequired,
  };

export default Total