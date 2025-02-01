import { useState } from "react";

const WorkoutForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    load: "",
    reps: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, load, reps } = formData;
    const workout = { title, load, reps };

    try {
      const response = await fetch("http://localhost:5000/api/workouts", {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error);
      }

      setFormData({ title: "", load: "", reps: "" });
      console.log("New workout added:", json);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label className="block">Exercise Title: </label>
      <input
        className="block py-2 px-4 mt-2 mb-4 w-full border border-gray-300 rounded"
        type="text"
        name="title"
        onChange={handleChange}
        value={formData.title}
      />

      <label className="block">Load (in kg): </label>
      <input
        className="block py-2 px-4 mt-2 mb-4 w-full border border-gray-300 rounded"
        type="number"
        name="load"
        onChange={handleChange}
        value={formData.load}
      />

      <label className="block">Reps: </label>
      <input
        className="block py-2 px-4 mt-2 mb-4 w-full border border-gray-300 rounded"
        type="number"
        name="reps"
        onChange={handleChange}
        value={formData.reps}
      />

      <button className="bg-primary text-white py-2 px-4 rounded cursor-pointer">
        Add Workout
      </button>

      {error && (
        <p className="py-2 px-4 bg-rose-500/15 text-rose-600 border border-rose-600 rounded my-4">
          {error}
        </p>
      )}
    </form>
  );
};

export default WorkoutForm;
