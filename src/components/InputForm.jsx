import PropTypes from "prop-types"
const InputForm = ({inputKey, handleChange, formData}) => {
  return (

      <div
        
        className={` 
          ${inputKey === "photo" ? "hidden": ""}
        `}
      >
        <label className="block text-gray-600">
          {inputKey.charAt(0).toUpperCase() + inputKey.slice(1)}
        </label>
        <input
          type='text'
          name={inputKey}
          value={formData[inputKey]}
          onChange={handleChange}
          placeholder={`Enter coffee ${inputKey}`}
          className="input input-bordered w-full"
          required
        />
      </div>
  );
};

InputForm.propTypes = {
  formData: PropTypes.any,
  handleChange: PropTypes.any,
  inputKey: PropTypes.shape({
    charAt: PropTypes.func,
    slice: PropTypes.func
  }),
  key: PropTypes.shape({
    charAt: PropTypes.func,
    slice: PropTypes.func
  })
}

export default InputForm;
