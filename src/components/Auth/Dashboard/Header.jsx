import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from '@mui/material';
import { Menu as MenuIcon, Logout as LogoutIcon, Phone, Mail, Notifications, Help } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// Styled component for the AppBar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#000040',
  color: 'white',
}));

// Styled component for the red dot on the message icon
const StyledMailIcon = styled(Mail)(({ theme }) => ({
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: 6,
    height: 6,
    backgroundColor: '#ff0000',
    borderRadius: '50%',
    border: '1px solid white',
  },
}));

const Header = ({ onDrawerToggle }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileMenuOpen = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleProfileMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleProfile = useCallback(() => {
    handleProfileMenuClose();
    navigate('/dashboard/profile');
  }, [navigate]);

  const handleLogout = useCallback(() => {
    handleProfileMenuClose();
    localStorage.removeItem('jwtToken');
    navigate('/login');
  }, [navigate]);

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onDrawerToggle}
          edge="start"
          sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        {/* Added Icons from the Image */}
        <IconButton color="inherit" sx={{ color: '#00cc00' }}> {/* Green Phone */}
          <Phone />
        </IconButton>
        <IconButton color="inherit" sx={{ color: '#00cc00', position: 'relative' }}> {/* Green Message with Red Dot */}
          <StyledMailIcon />
        </IconButton>
        <IconButton color="inherit" sx={{ color: '#ff9900' }}> {/* Orange Bell */}
          <Notifications />
        </IconButton>
        <IconButton color="inherit" sx={{ color: '#0066cc' }}> {/* Blue Question Mark */}
          <Help />
        </IconButton>

        {/* Existing Profile Avatar */}
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls="profile-menu"
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          sx={{ p: 0, color: '#ff66b3' }} // Pinkish color for user profile
        >
          <Avatar sx={{ width: 32, height: 32, bgcolor: '#ff66b3', color: '#000040' }} />
        </IconButton>

        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileMenuClose}
          PaperProps={{
            elevation: 0,
            sx: {
              mt: 1.5,
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleProfile}>
            <Avatar sx={{ mr: 2, width: 32, height: 32 }} /> Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;