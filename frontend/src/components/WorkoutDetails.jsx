import PropTypes from "prop-types";

const WorkoutDetails = ({ workout }) => {
  return (
    <div className="bg-white rounded-md my-5 mx-auto p-5 relative shadow-sm">
      <h4 className="mb-3 text-xl text-primary font-bold">{workout.title}</h4>
      <p className="m-0 text-sm text-gray-600">
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p className="m-0 text-sm text-gray-600">
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p className="m-0 text-sm text-gray-600">{workout.createdAt}</p>
    </div>
  );
};

WorkoutDetails.propTypes = {
  workout: PropTypes.shape({
    title: PropTypes.string.isRequired,
    load: PropTypes.number.isRequired,
    reps: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkoutDetails;
