
import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 8px;
    margin: 6px;
    padding: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }

    $:hover{
        transition: 1s;
        border-radius: 18px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const CategoryIcon = styled('img')`
    filter: opacity(0.4);
    margin-right: 8px;

`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Devider = styled('hr')`
    min-width: 140px;
    width: fill-content;
    max-width: fill-content;
    margin: 4px;
    margin-bottom: 8px;
`;

const TextWrapper = styled(Box)`
    margin-top: 6px;
    margin-bottom: 6px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    padding-top: 0px;
    padding-bottom: 0px;
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
`;

const Post = ({ post }) => {
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container>
            <TextWrapper>
                <CategoryIcon src={`categories/${post.categories}.svg`}/>
                <Text>{post.categories}</Text>
            </TextWrapper>
            <Text>Author: {post.username}</Text>
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Devider/>
            <Details>{addEllipsis(post.description, 100)}</Details>
        </Container>
    )
}

export default Post;