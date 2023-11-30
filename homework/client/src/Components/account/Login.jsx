import React, { useState, useEffect, useContext } from 'react';
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { ReactComponent as Logo } from '../../Assets/logo.svg';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 4px 4px 16px 0px rgb(0 0 0/ 0.4);
    border-radius: 4px;
    background: #fff;
`;

const StyledLogo = styled(Logo)`
    margin-top: 48px;
    margin-left: 48px;
    margin-right: 48px;
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    padding-top: 0px;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [loginError, setLoginError] = useState({ username: '', password: '' });
    const [signupError, setSignupError] = useState({ name: '', username: '', password: '' });
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    useEffect(() => {
        showError('');
    }, [login]);

    const validateLoginForm = () => {
        const errors = { username: '', password: '' };

        if (!login.username) {
            errors.username = 'Username is required';
        }

        if (!login.password) {
            errors.password = 'Password is required';
        }

        setLoginError(errors);

        return !errors.username && !errors.password;
    };

    const validateSignupForm = () => {
        const errors = { name: '', username: '', password: '' };

        if (!signup.name) {
            errors.name = 'Name is required';
        }

        if (!signup.username) {
            errors.username = 'Username is required';
        }

        if (!signup.password) {
            errors.password = 'Password is required';
        }

        setSignupError(errors);

        return !errors.name && !errors.username && !errors.password;
    };

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
        setLoginError({ ...loginError, [e.target.name]: '' });
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        setSignupError({ ...signupError, [e.target.name]: '' });
    };

    const loginUser = async () => {
        if (validateLoginForm()) {
            let response = await API.userLogin(login);
            if (response.isSuccess) {
                showError('');

                sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
                sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
                setAccount({ name: response.data.name, username: response.data.username });

                isUserAuthenticated(true);
                setLogin(loginInitialValues);
                navigate('/');
            } else {
                showError('Something went wrong! Please try again later');
            }
        }
    };

    const signupUser = async () => {
        if (validateSignupForm()) {
            let response = await API.userSignup(signup);
            if (response.isSuccess) {
                showError('');
                setSignup(signupInitialValues);
                toggleAccount('login');
            } else {
                showError('Something went wrong! Please try again later');
            }
        }
    };

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    };

    return (
        <Component>
            <StyledLogo />
            <Box>
                {account === 'login' ? (
                    <Wrapper>
                        <TextField
                            variant="standard"
                            value={login.username}
                            onChange={(e) => onValueChange(e)}
                            name="username"
                            label="Enter Username"
                        />
                        {loginError.username && <Error>{loginError.username}</Error>}
                        <TextField
                            variant="standard"
                            value={login.password}
                            onChange={(e) => onValueChange(e)}
                            name="password"
                            label="Enter Password"
                            type='password'
                        />
                        {loginError.password && <Error>{loginError.password}</Error>}

                        {error && <Error>{error}</Error>}

                        <LoginButton variant="contained" onClick={() => loginUser()}>
                            Login
                        </LoginButton>
                        <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>
                            Create an account
                        </SignupButton>
                    </Wrapper>
                ) : (
                    <Wrapper>
                        <TextField
                            variant="standard"
                            onChange={(e) => onInputChange(e)}
                            name="name"
                            label="Enter Name"
                        />
                        {signupError.name && <Error>{signupError.name}</Error>}
                        <TextField
                            variant="standard"
                            onChange={(e) => onInputChange(e)}
                            name="username"
                            label="Enter Username"
                        />
                        {signupError.username && <Error>{signupError.username}</Error>}
                        <TextField
                            variant="standard"
                            onChange={(e) => onInputChange(e)}
                            name="password"
                            label="Enter Password"
                            type='password'
                        />
                        {signupError.password && <Error>{signupError.password}</Error>}

                        <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
                        <LoginButton variant="contained" onClick={() => toggleSignup()}>
                            Already have an account
                        </LoginButton>
                    </Wrapper>
                )}
            </Box>
        </Component>
    );
};

export default Login;