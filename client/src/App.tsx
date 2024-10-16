import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import theme from './assets/theme';
import { store, persistor } from './util/redux/store';
import NotFoundPage from './NotFound/NotFoundPage';
import HomePage from './Home/HomePage';
import AdminDashboardPage from './AdminDashboard/AdminDashboardPage';
import {
  UnauthenticatedRoutesWrapper,
  ProtectedRoutesWrapper,
  DynamicRedirect,
  AdminRoutesWrapper,
} from './util/routes';
import VerifyAccountPage from './Authentication/VerifyAccountPage';
import RegisterPage from './Authentication/RegisterPage';
import LoginPage from './Authentication/LoginPage';
import EmailResetPasswordPage from './Authentication/EmailResetPasswordPage';
import ResetPasswordPage from './Authentication/ResetPasswordPage';
import AlertPopup from './components/AlertPopup';
import InviteRegisterPage from './Authentication/InviteRegisterPage';
import UserPage from './User/UserPage';
import CreateUser from './Create/CreateUser';

const users = [
  {
    id: '1',
    name: 'James',
    url: '/james.png',
    traits: [
      'asian down perm addict',
      'i turn 23 in 3 months',
      'ex-light machine gunner from the korean army',
    ],
    year: '2026',
    hometown: 'Seoul, Korea',
  },
  {
    id: '2',
    name: 'Khoi',
    url: '/khoi.jpeg',
    traits: [
      'puts milk before cereal',
      'apple calendar enjoyer',
      'wakes up past 1 pm most weekends',
      'halal fiend',
      'pickleball addict',
    ],
    year: '2028',
    hometown: 'Mclean, VA',
  },
  {
    id: '3',
    name: 'Evelyn',
    url: '/evelyn.jpg',
    traits: [
      'dnd princess',
      'chalant',
      'retail therapy',
      'can only enter van pelt if bribed w a sweet treat',
      'doesnt make her bed',
    ],
    year: '2028',
    hometown: 'Chantilly, VA',
  },
];

function App() {
  const [currUsers, setCurrUsers] = useState(users);

  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <CssBaseline>
                <AlertPopup />
                <Routes>
                  {/* Routes accessed only if user is not authenticated */}
                  <Route element={<UnauthenticatedRoutesWrapper />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                      path="/verify-account/:token"
                      element={<VerifyAccountPage />}
                    />
                    <Route
                      path="/email-reset"
                      element={<EmailResetPasswordPage />}
                    />
                    <Route
                      path="/reset-password/:token"
                      element={<ResetPasswordPage />}
                    />
                  </Route>
                  <Route
                    path="/invite/:token"
                    element={<InviteRegisterPage />}
                  />
                  {/* Routes accessed only if user is authenticated */}
                  <Route element={<UnauthenticatedRoutesWrapper />}>
                    <Route
                      path="/home"
                      element={<HomePage users={currUsers} />}
                    />
                    <Route path="/home/:userId" element={<UserPage />} />
                    <Route
                      path="/create"
                      element={<CreateUser setCurrUsers={setCurrUsers} />}
                    />
                  </Route>
                  <Route element={<AdminRoutesWrapper />}>
                    <Route path="/users" element={<AdminDashboardPage />} />
                  </Route>

                  {/* Route which redirects to a different page depending on if the user is an authenticated or not by utilizing the DynamicRedirect component */}
                  <Route
                    path="/"
                    element={
                      <DynamicRedirect unAuthPath="/login" authPath="/home" />
                    }
                  />

                  {/* Route which is accessed if no other route is matched */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </CssBaseline>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
