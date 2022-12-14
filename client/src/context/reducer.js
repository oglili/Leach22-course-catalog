import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_COURSE_BEGIN,
  CREATE_COURSE_SUCCESS,
  CREATE_COURSE_ERROR,
  GET_COURSES_BEGIN,
  GET_COURSES_SUCCESS,
  SET_EDIT_COURSE,
  DELETE_COURSE_BEGIN,
  EDIT_COURSE_BEGIN,
  EDIT_COURSE_SUCCESS,
  EDIT_COURSE_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  CREATE_REGISTER_BEGIN,
  CREATE_REGISTER_SUCCESS,
  CREATE_REGISTER_ERROR,
  GET_REGISTER_BEGIN,
  GET_REGISTER_SUCCESS,
  DELETE_REGISTER_BEGIN,
  SET_EDIT_REGISTER,
  EDIT_REGISTER_BEGIN,
  EDIT_REGISTER_SUCCESS,
  EDIT_REGISTER_ERROR,
} from './actions';
import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }
  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      courseLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: '',
      courseLocation: '',
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      courseLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated!',
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return { ...state, page: 1, [action.payload.name]: action.payload.value };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editCourseId: '',
      name: '',
      courseLocation: state.userLocation,
      type: 'bachelor',
      university: 'University of Verona',
    };
    return { ...state, ...initialState };
  }
  if (action.type === CREATE_COURSE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_COURSE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Course Created!',
    };
  }
  if (action.type === CREATE_COURSE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_COURSES_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_COURSES_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      courses: action.payload.courses,
      totalCourses: action.payload.totalCourses,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === SET_EDIT_COURSE) {
    const course = state.courses.find(
      (course) => course._id === action.payload.id
    );
    const { _id, name, courseLocation, university, type } = course;
    return {
      ...state,
      isEditing: true,
      editCourseId: _id,
      name,
      courseLocation,
      university,
      type,
    };
  }
  if (action.type === DELETE_COURSE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_COURSE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_COURSE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Course Updated!',
    };
  }
  if (action.type === EDIT_COURSE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === SHOW_STATS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,
      statsUniv: action.payload.statsUniv,
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: '',
      searchUniv: 'all',
      searchType: 'all',
      sort: 'latest',
    };
  }
  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload.page };
  }

  if (action.type === CREATE_REGISTER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_REGISTER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Registration Created!',
    };
  }
  if (action.type === CREATE_REGISTER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_REGISTER_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_REGISTER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      reg: action.payload.reg,
      totalReg: action.payload.totalReg,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === SET_EDIT_REGISTER) {
    const registers = state.reg.find(
      (register) => register._id === action.payload.id
    );
    const { _id, name, university, type, address, birthdate, phoneNr } =
      registers;
    return {
      ...state,
      isEditing: true,
      editRegId: _id,
      name,
      university,
      type,
      address,
      birthdate,
      phoneNr,
    };
  }
  if (action.type === DELETE_REGISTER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_REGISTER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_REGISTER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Registration Updated!',
    };
  }
  if (action.type === EDIT_REGISTER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  throw new Error(`no such action :${action.type}`);
};
export default reducer;
