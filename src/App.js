import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/header/Header';
import {ROUTES} from './routes';
import ArticlePage from "./pages/Article/ArticlePage";
import HomePage from "./pages/Home/HomePage";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Route
                    render={({ location }) => (
                        <div className='App'>
                            <Header location={location} />
                            <TransitionGroup>
                                <CSSTransition
                                    key={location.pathname}
                                    classNames='fade'
                                    timeout={300}
                                >
                                    <Switch location={location}>
                                        <Route path={ROUTES.ARTICLE_BY_ID} component={ArticlePage} />
                                        <Route path={ROUTES.HOME} component={HomePage} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    )}
                />
            </BrowserRouter>
        </div>
    );
}

export default App;
