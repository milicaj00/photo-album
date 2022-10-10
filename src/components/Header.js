import {Fragment} from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';

function Header(props) {
  const title = "Blog Header";

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('currentUser')
    navigate('/login')

    window.location.reload()
  }

  return (
    <Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton onClick = {logout}>
          <LogoutIcon />
        </IconButton>
        
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >    
      </Toolbar>
    </Fragment>
  );
}

export default Header;