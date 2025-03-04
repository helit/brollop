import './App.css';
import { Button, Typography } from '@mui/material';
import { useDb } from './hooks/useDb';
import { PostType } from './types/postType';

function App() {
  const { getPosts, createPost, postCount } = useDb();

  getPosts();

  const newPost: PostType = {
    firstName: 'Kajsa',
    lastName: 'Anka',
    email: 'hej@mail.com',
    adultGuests: 1,
    childGuests: 0,
    foodPreferences: 'Vegan',
    message: 'Kajsa Anka är bäst!',
  };


  return (
    <>
      <Typography variant="body1">{`Nr of posts: ${postCount}`}</Typography>
      <Button variant="contained" onClick={getPosts}>
        Fetch All Posts
      </Button>
      <Button variant="contained" onClick={() => createPost(newPost)}>
        Create new post
      </Button>
    </>
  );
}

export default App;
