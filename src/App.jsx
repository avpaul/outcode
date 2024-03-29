import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { css } from "styled-components";
import { subscriber } from "./services/themeService";
import WithToken from "./components/authHOC/withTokenComponent";
import Home from "./components/home";
import Editor from "./components/editorComponent/editor";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import article from "./components/articleComponent";
import UserArticles from "./components/userArticlesComponent/userArticle";
import Login from "./components/loginComponent/login";
import NotFound from "./components/notFoundComponent/notFound";
import Analytics from "./components/analyticsComponent/analytics";

import "./App.scss";

const AppContainerWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #ffffff;

  ${props =>
    props.theme === "dark" &&
    css`
      background-color: #202124;
    `}
`;

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
  @media (min-width: 1441px) {
    width: 55%;
    margin: 0 auto;
  }
`;

const App = () => {
  const [theme, setTheme] = useState(subscriber.value);

  useEffect(() => {
    subscriber.subscribe(value => {
      setTheme(value);
    });
  }, []);
  return (
    <Router>
      <AppContainerWrapper theme={theme}>
        <AppContainer>
          <Route component={Analytics} />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/editor" component={WithToken(Editor)} />
            <Route
              exact
              path="/my-articles"
              component={WithToken(UserArticles)}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/:slug" component={article} />
            <Route path="/notfound" component={NotFound} />
          </Switch>
          <Footer />
        </AppContainer>
      </AppContainerWrapper>
    </Router>
  );
};

export default App;
