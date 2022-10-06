import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import SelectRolePage from '@pages/SelectRolePage';
import LogInPage from '@pages/LogInPage';
import ClientSignUp from '@pages/signup/ClientSignUp';
import RecruiterSignUp from '@pages/signup/RecruiterSignUp';
import PrepareEmailPage from '@pages/usingEmail/PrepareEmailPage'
import EmailVerifyPage from '@pages/usingEmail/EmailVerifyPage'
import VerifySuccessPage from '@pages/usingEmail/VerifySuccessPage'

import Dashboard from '@pages/Dashboard'


import { useSelector } from 'react-redux'


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#F5F5F5',
  }
}))

function App(props) {
  const classes = useStyles(props)
  const userData = useSelector(state => state.user)

  return (
    <Router>
      <div className={clsx(classes.root, "App flex flex-col items-center justify-center")}>
        <Routes>
          <Route path="/select_role" element={<SelectRolePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={
            userData.role === 'client' ? <ClientSignUp /> : <RecruiterSignUp />
          } />

          <Route path="/prepare_email" element={<PrepareEmailPage />} />
          <Route path="/verify_email" element={<EmailVerifyPage />} />
          <Route path="/verify_success" element={<VerifySuccessPage />} />

          <Route path="/dashboard" element={<Dashboard />} />



          <Route path="*" element={<Navigate to={true ? "/select_role" : "/login"} replace />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
