import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Header = () => {
  const { user, logOut } = useAuth();
  const theme = useTheme()
  const useStyle = makeStyles({
    navItem: {
      color: '#fff',
      textDecoration: 'none'
    },
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !important'

      }
    },
    navItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  })
  const { navItem, navIcon, navItemContainer } = useStyle()

  const [state, setState] = React.useState(false);


  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
        <ListItem button >
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText>Home</ListItemText>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className='navLogo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Car House
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Box className={navItemContainer}>
                <Link className={navItem} to="/home"><Button color="inherit">Home</Button></Link>
                <Link className={navItem} to="/car-collection"><Button color="inherit">Car Collection</Button></Link>
                <Link className={navItem} to="/dashboard"><Button color="inherit">Dashboard</Button></Link>

                {!user?.email && <Link to="/login" className="items" variant="danger">Sign In</Link>}
                <span className="display-name">{user.displayName || user.email}</span>
                {user?.email && <Button onClick={logOut} className='ms-2 fw-bold' variant="danger">Sign Out</Button>}
              </Box>
            </Typography>

          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <React.Fragment>
          <Drawer
            open={state}
            onClose={() => setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Header;