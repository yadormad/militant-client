import { combineReducers } from 'redux';
import ArticleReducer from './Article/reducer';
import SideMenuReducer from './SideMenu/reducer';
import HomeScreenReducer from './Home/reducer';

export default combineReducers({
    article: ArticleReducer,
    sideMenu: SideMenuReducer,
    home: HomeScreenReducer,
});
