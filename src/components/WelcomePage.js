import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {Container} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

function WelcomePage() {
  const useStyles = makeStyles({
    container: {
      paddingTop: '20%',
      margin: 'auto'
    },
    element: {
      width: '100%',
      margin: '10px auto'
    }
  });

  const styled = useStyles()


  const [username, setUsername] = useState('');
  let history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();
    sessionStorage.setItem('nickname', e.target.nickname.value);
    history.push('/chat')
  }

  return (
    <Container maxWidth={'sm'} className={styled.container}>
      <Typography
        variant='h4'
        color='secondary'
      >Welcome</Typography>
      <Typography
        variant='body1'
        component='p'
      >to the chat app build with React, Material-UI and websocket server
      </Typography>
      <form onSubmit={handleSignIn}>
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
          name="nickname"
          placeholder="please type your nickname"
          type="text"
          fullWidth
          className={styled.element}
        />
        <Button
          type='submit'
          variant="contained"
          color="secondary"
          size="large"
          className={styled.element}
        >Sign-in</Button>
      </form>
    </Container>
  )
}

export default WelcomePage;