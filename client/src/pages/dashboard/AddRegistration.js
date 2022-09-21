import { FormRow, FormRowSelect, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddRegistration = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    name,
    type,
    typeOptions,
    university,
    univOptions,
    birthdate,
    gender,
    genderOptions,
    address,
    phoneNr,
    handleChange,
    clearValues,
    createRegistration,
    editRegistration,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editRegistration();
      return;
    }
    createRegistration();
  };

  const handleRegInput = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper>
      <form className='form'>
        <h2>Student Registration Form</h2>
        <h3>{isEditing ? 'edit registration' : 'add registration'} </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={handleRegInput}
          />
          <FormRowSelect
            name='type'
            value={type}
            handleChange={handleRegInput}
            list={typeOptions}
          />

          {/* university */}
          <FormRowSelect
            labelText='university'
            name='university'
            value={university}
            handleChange={handleRegInput}
            list={univOptions}
          />
          <FormRowSelect
            name='gender'
            value={gender}
            handleChange={handleRegInput}
            list={genderOptions}
          />
          {/* birthdate */}
          <FormRow
            type='date'
            labelText='birthdate'
            name='birthdate'
            value={birthdate}
            handleChange={handleRegInput}
          />
          {/* address */}
          <FormRow
            type='text'
            labelText='address'
            name='address'
            value={address}
            handleChange={handleRegInput}
          />
          {/* phoneNr */}
          <FormRow
            type='text'
            labelText='phone number'
            name='phoneNr'
            value={phoneNr}
            handleChange={handleRegInput}
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

export default AddRegistration;
