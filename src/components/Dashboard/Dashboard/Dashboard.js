import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddCar from '../AddCar/AddCar';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../AdminRoute/AdminRoute';
import PaymentMethod from '../../PaymentMethod/PaymentMethod';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddReviews from '../../AddReviews/AddReviews';

const drawerWidth = 200;
function Dashboard(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    let { path, url } = useRouteMatch();
    const drawer = (
        <div >
            <Toolbar style={{ backgroundColor: '#17B978' }} />
            <Divider />
            <List>
                {!admin && <Box>
                    <List><Link style={{ textDecoration: 'none', m: 2 }} to='/home'><Button style={{ backgroundColor: '#17B978', color: '#fff' }} color="inherit">Home</Button></Link ></List>

                    <List><Link style={{ textDecoration: 'none', m: 2 }} to={`${url}`}><Button style={{ backgroundColor: '#17B978', color: '#fff' }} color="inherit">My Orders</Button></Link ></List>

                    <List><Link style={{ textDecoration: 'none', m: 2 }} to={`${url}/addRating`}><Button style={{ backgroundColor: '#17B978', color: '#fff' }} color="inherit">Review</Button></Link ></List>

                    <List> <Link style={{ textDecoration: 'none', m: 2 }} to={`${url}/pay`}><Button style={{ backgroundColor: '#17B978', color: '#fff' }} color="inherit">Pay</Button></Link ></List>

                    <Button style={{ backgroundColor: '#17B978', color: '#fff' }} onClick={logOut} color="inherit">Logout</Button>
                </Box>
                }

                {
                    admin && <Box>
                        <List><Link style={{ textDecoration: 'none', m: 2 }} to={`${url}/manageOrder`}><Button style={{ backgroundColor: '#17B978', color: '#fff' }} color="inherit">Manage All Orders</Button></Link ></List>

                        <List><Link style={{ textDecoration: 'none', m: 2 }} to={`${url}/addCar`}><Button style={{ backgroundColor: '#17B978', color: '#fff' }} color="inherit">Add Car</Button></Link ></List>

                        <List><Link style={{ textDecoration: 'none' }} to={`${url}/manageProducts`}><Button style={{ backgroundColor: '#17B978', color: '#fff' }} color="inherit">Manage Products</Button></Link ></List>

                        <List><Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}><Button style={{ backgroundColor: '#17B978', color: '#fff' }} color="inherit">Make Admin</Button></Link ></List>

                        <Button style={{ backgroundColor: '#17B978', color: '#fff' }} onClick={logOut} color="inherit">Logout</Button>
                    </Box>
                }
            </List >
            <Divider />


        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                style={{ backgroundColor: '#17B978' }}
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }

                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ backgroundColor: '#17B978' }} noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <PaymentMethod></PaymentMethod>
                    </Route>
                    <Route path={`${path}/addRating`}>
                        <AddReviews />
                    </Route>

                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrder`}>
                        <ManageOrder />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </AdminRoute>

                    <AdminRoute path={`${path}/addCar`}>
                        <AddCar></AddCar>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;