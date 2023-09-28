import PropTypes from "prop-types";

const Part = ({ parts }) => {
  console.log("qw", parts);
  return (
    <div>
      {parts?.map((data, index) => (
        <li key={index}>
          <p>
            {data.part} {data.exercises}{" "}
          </p>
        </li>
      ))}
    </div>
  );
};
Part.propTypes = {
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      part: PropTypes.string.isRequired,
      exercises: PropTypes.number.isRequired,
    })
  ),
};

export default Part;
