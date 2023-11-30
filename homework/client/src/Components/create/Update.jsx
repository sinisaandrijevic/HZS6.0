import React, { useState, useEffect } from 'react';
import { Box, styled, TextareaAutosize, Button, FormControl, InputBase } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../service/api';

const Container = styled(Box)(({ theme }) => ({
    margin: '100px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0,
    },
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

    background: #fff;
    padding: 12px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

const StyledTextArea = styled(TextareaAutosize)`
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

    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: 'codeforinterview',
    categories: 'Tech',
    createdDate: new Date(),
};

const Update = () => {
    const navigate = useNavigate();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        };
        fetchData();
    }, [id]); // Added dependency array to avoid unnecessary re-fetching

    useEffect(() => {
        // You may add logic related to file handling here if needed
    }, [file]);

    const updateBlogPost = async () => {
        await API.updatePost(post);
        navigate(`/details/${id}`);
    };

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    return (
        <Container>
            <h2 align="center">Update {post.title}</h2>
            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputTextField
                    onChange={(e) => handleChange(e)}
                    value={post.title}
                    name="title"
                    placeholder="Title"
                />
                <Button onClick={() => updateBlogPost()} variant="contained" color="primary">
                    Update
                </Button>
            </StyledFormControl>

            <StyledTextArea
                rowsMin={5}
                placeholder="Tell your story..."
                name="description"
                onChange={(e) => handleChange(e)}
                value={post.description}
            />
        </Container>
    );
};

export default Update;
