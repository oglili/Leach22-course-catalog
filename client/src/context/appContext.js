import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
import axios from 'axios';

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
} from './actions';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userLocation = localStorage.getItem('location');

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  showSidebar: false,
  isEditing: false,
  editCourseId: '',
  name: '',
  type: 'bachelor',
  typeOptions: ['bachelor', 'masters', 'postgraduate'],
  university: 'University of Verona',
  univOptions: [
    'University of Verona',
    'University of Rome',
    'University of Brescia',
    'University of Torino',
    'University of Milan',
    'University of Sicilia',
  ],
  courseLocation: userLocation || '',
  courses: [],
  totalCourses: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  statsUniv: {},
  search: '',
  searchType: 'all',
  searchUniv: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const authFetch = axios.create({
    baseURL: '/api/v1',
  });

  // request interceptor
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common['Authorization'] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // response interceptor
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('location', location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('location');
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );

      const { user, token, location } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser);

      // no token
      const { user, location, token } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      });

      addUserToLocalStorage({ user, location, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const handleChange = ({ name, value }) => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: { name, value },
    });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createCourse = async () => {
    dispatch({ type: CREATE_COURSE_BEGIN });
    try {
      const { name, courseLocation, type, university } = state;

      await authFetch.post('/courses', {
        name,
        courseLocation,
        type,
        university,
      });
      dispatch({
        type: CREATE_COURSE_SUCCESS,
      });
      // call function instead clearValues()
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_COURSE_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getCourses = async () => {
    const { search, searchType, searchUniv, sort, page } = state;
    let url = `/courses?page=${page}&type=${searchType}&university=${searchUniv}&sort=${sort}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    dispatch({ type: GET_COURSES_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { courses, totalCourses, numOfPages } = data;
      dispatch({
        type: GET_COURSES_SUCCESS,
        payload: {
          courses,
          totalCourses,
          numOfPages,
        },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  const getCoursesTot = async () => {
    const { search, searchType, searchUniv, sort, page } = state;
    let url = `/courses/total?page=${page}&type=${searchType}&university=${searchUniv}&sort=${sort}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    dispatch({ type: GET_COURSES_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { courses, totalCourses, numOfPages } = data;
      dispatch({
        type: GET_COURSES_SUCCESS,
        payload: {
          courses,
          totalCourses,
          numOfPages,
        },
      });
    } catch (error) {
      logoutUser();
    }
    clearAlert();
  };

  const deleteCourse = async (courseId) => {
    dispatch({ type: DELETE_COURSE_BEGIN });
    try {
      await authFetch.delete(`/courses/${courseId}`);
      getCourses();
    } catch (error) {
      logoutUser();
    }
  };

  const setEditCourse = (id) => {
    dispatch({ type: SET_EDIT_COURSE, payload: { id } });
  };
  const editCourse = async () => {
    dispatch({ type: EDIT_COURSE_BEGIN });
    try {
      const { name, courseLocation, type, university } = state;

      await authFetch.patch(`/courses/${state.editCourseId}`, {
        name,
        courseLocation,
        type,
        university,
      });
      dispatch({
        type: EDIT_COURSE_SUCCESS,
      });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_COURSE_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const showStats = async () => {
    dispatch({ type: SHOW_STATS_BEGIN });
    try {
      const { data } = await authFetch('/courses/stats');
      dispatch({
        type: SHOW_STATS_SUCCESS,
        payload: {
          stats: data.defaultStats,
          statsUniv: data.defaultStatsUniv,
        },
      });
    } catch (error) {
      logoutUser();
    }

    clearAlert();
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        createCourse,
        getCourses,
        setEditCourse,
        deleteCourse,
        editCourse,
        showStats,
        clearFilters,
        changePage,
        getCoursesTot,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
