import { FormRow, FormRowSelect, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddCourse = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    name,
    courseLocation,
    type,
    typeOptions,
    university,
    univOptions,
    handleChange,
    clearValues,
    createCourse,
    editCourse,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !courseLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editCourse();
      return;
    }
    createCourse();
  };

  const handleCourseInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit course' : 'add course'} </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={handleCourseInput}
          />

          {/* location */}
          <FormRow
            type='text'
            labelText='course location'
            name='courseLocation'
            value={courseLocation}
            handleChange={handleCourseInput}
          />
          <FormRowSelect
            name='type'
            value={type}
            handleChange={handleCourseInput}
            list={typeOptions}
          />

          {/* job type */}
          <FormRowSelect
            labelText='university'
            name='university'
            value={university}
            handleChange={handleCourseInput}
            list={univOptions}
          />
          {/* submit button */}
          <div className='btn-container'>
            <button
              className='btn btn-block submit-btn'
              type='submit'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
          <button
            className='btn btn-block clear-btn'
            onClick={(e) => {
              e.preventDefault();
              clearValues();
            }}
          >
            clear
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddCourse;
