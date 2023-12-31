import React, { useState, useEffect, useContext } from 'react';

import { styled, Box, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
// import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
    margin: '100px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;

    background: #fff
    padding: 12px;

    border-bottom: rgba(0, 0, 0, 0.5);
    border-bottom-style: solid;
    border-width: 1px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    max-width: 100%;
    min-width: 50%;

    min-height: 80px;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }

    padding: 12px;

    border-bottom: rgba(0, 0, 0, 0.5);
    border-bottom-style: solid;
    border-width: 1px;
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);

    useEffect(() => {
       
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [file])

    const savePost = async () => {
        await API.createPost(post);
        navigate('/');
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <h2 align="center">Create a new card</h2>
            <StyledFormControl>
                {/* <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label> */}
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputTextField onChange={(e) => handleChange(e)} name='title' placeholder="Title" />
                <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
            </StyledFormControl>

            <Textarea
                rowsMin={5}
                placeholder="Description"
                name='description'
                onChange={(e) => handleChange(e)} 
            />
        </Container>
    )
}

export default CreatePost;