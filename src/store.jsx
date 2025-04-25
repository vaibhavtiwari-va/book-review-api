import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Reducers (you will create these in the next steps)
import bookReducer from './reducers/bookReducer';
import reviewReducer from './reducers/reviewReducer';
import userReducer from './reducers/userReducer';

// Combine reducers
const rootReducer = combineReducers({
  books: bookReducer,
  reviews: reviewReducer,
  user: userReducer,
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
