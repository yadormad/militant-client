import { combineReducers } from 'redux';
import ArticleReducer from './Article/reducer';
import SideMenuReducer from './SideMenu/reducer';
import HomeScreenReducer from './Home/reducer';
import ScrollspyReducer from './Scrollspy/reducer';

export default combineReducers({
    article: ArticleReducer,
    sideMenu: SideMenuReducer,
    home: HomeScreenReducer,
    scrollspy: ScrollspyReducer,
});
