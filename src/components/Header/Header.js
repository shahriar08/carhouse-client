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
import { Avatar, Container, useTheme } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo from './logo.png'
// const style = {

//   background : '#fff',
// };

const Header = () => {
  const { user, logOut } = useAuth();
  const theme = useTheme()
  const useStyle = makeStyles({
    navItem: {
      color: '#fff',
      textDecoration: 'none'
    },
    navIcon: {
      color: 'black',
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
          <ListItemText><Link className={navItem} to="/home"><Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="text" color="inherit">Home</Button></Link></ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText><Link className={navItem} to="/car-collection"><Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="text" color="inherit">Car Collection</Button></Link></ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText> <Link className={navItem} to="/dashboard"><Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="text" color="inherit">Dashboard</Button></Link></ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText>{!user?.email && <Link className={navItem} to="/login"><Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="outlined" color="inherit">Sign In</Button></Link>}</ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText><span variant="outlined" style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }} >{user.displayName || user.email}</span></ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText>  {user?.email && <Button onClick={logOut} style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} color="inherit" variant="outlined">Sign Out</Button>}</ListItemText>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ background: '#fff' }} position="static">
          <Container>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, color: '#17B978' }}
                className={navIcon}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton>
              <Avatar
                  alt="logo"
                  src={logo}
                  sx={{ width: 50, height: 50,mr:1 }}
                />
              <Typography style={{ color: '#17B978'}} className='navLogo' variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                Car House
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 0, flexDirection: 'row-reverse', mx: "auto" }}>
                <Box className={navItemContainer} sx={{ mx: "auto" }}>
                  <Link className={navItem} to="/home"><Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="text" color="inherit">Home</Button></Link>
                  <Link className={navItem} to="/car-collection"><Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="text" color="inherit">Car Collection</Button></Link>
                  <Link className={navItem} to="/dashboard"><Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="text" color="inherit">Dashboard</Button></Link>

                  {!user?.email && <Link className={navItem} to="/login"><Button style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17 }} variant="outlined" color="inherit">Sign In</Button></Link>}
                  <span variant="outlined" style={{ color: 'black', fontWeight: 'bold', fontSize: 20}} >{user.displayName || user.email}</span>
                  {user?.email && <Button onClick={logOut} style={{ color: '#17B978', fontWeight: 'bold', fontSize: 17}} color="inherit" variant="outlined">Sign Out</Button>}
                </Box>
              </Typography>

            </Toolbar>
          </Container>
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