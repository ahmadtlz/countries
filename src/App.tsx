import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import HomeHeader from './components/molecules/HomeHeader';
import { Global, darkTheme, lightTheme } from './Global.styled';
import CountryDetail from './pages/CountryDetail';

import Home from './pages/Home';
import { selectChecker } from './store/modules/theme/theme.selector';

const App:React.FC = () => {
  const checker:boolean = useSelector(selectChecker);

  return (
    <ThemeProvider theme={checker ? lightTheme : darkTheme}>
      <Global />
      <HomeHeader />
      <Switch>
        <Route path="/country/:id" component={CountryDetail} />
        <Route exact path="/" component={Home} />
      </Switch>
    </ThemeProvider>
  );
};
export default App;
