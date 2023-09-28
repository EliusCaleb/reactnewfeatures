import PropTypes from 'prop-types';
import Part from './Part';


const Content = ({ parts }) => {
    console.log("qwerty",parts)
  return (

    <div>
      <ol>
        <Part parts={parts}/>
        
      </ol>
    </div>
  );
};

Content.propTypes = {
    parts: PropTypes.arrayOf(
      PropTypes.shape({
        part: PropTypes.string.isRequired,
        exercises: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  

export default Content;
