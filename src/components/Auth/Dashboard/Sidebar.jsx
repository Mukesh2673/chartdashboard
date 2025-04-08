import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Chat as ChatIcon,
  CalendarToday as CalendarIcon,
  Contacts as ContactsIcon,
  Assignment as OpportunitiesIcon,
  Payment as PaymentIcon,
  SmartToy as AIAgentsIcon,
  Campaign as MarketingIcon,
  SettingsApplications as AutomationIcon,
  Web as SitesIcon,
  People as MembershipsIcon,
  PhotoLibrary as MediaStorageIcon,
  Star as ReputationIcon,
  BarChart as ReportingIcon,
  Store as AppMarketplaceIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    backgroundColor: '#000040',
    color: 'white',
  },
});

const Sidebar = ({ mobileOpen, onDrawerToggle, isMobile }) => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Launchpad', icon: <DashboardIcon sx={{ color: 'white' }} />, path: '/chart' },
    { text: 'Dashboard', icon: <DashboardIcon sx={{ color: 'white' }} />, path: '/chart' },
    { text: 'Conversations', icon: <ChatIcon sx={{ color: 'white' }} />, path: '/chart' },
    { text: 'Calendars', icon: <CalendarIcon sx={{ color: 'white' }} />, path:'/chart' },
    { text: 'Contacts', icon: <ContactsIcon sx={{ color: 'white' }} />, path: '/chart' },
    { text: 'Opportunities', icon: <OpportunitiesIcon sx={{ color: 'white' }} />, path: '/chart' },
    { text: 'Payments', icon: <PaymentIcon sx={{ color: 'white' }} />, path: '/chart' },
    { text: 'AI Agents', icon: <AIAgentsIcon sx={{ color: 'white' }} />, path: '/chart' },
    { text: 'Marketing', icon: <MarketingIcon sx={{ color: 'white' }} />, path: '/chart' },
    { text: 'Automation', icon: <AutomationIcon sx={{ color: 'white' }} />, path: '/chart' },
    { text: 'Sites', icon: <SitesIcon sx={{ color: 'white' }} />, path: '/sites' },
    { text: 'Memberships', icon: <MembershipsIcon sx={{ color: 'white' }} />, path: '/chart' },
    { text: 'Media Storage', icon: <MediaStorageIcon sx={{ color: 'white' }} />, path: '/chart' },
    { text: 'Reputation', icon: <ReputationIcon sx={{ color: 'white' }} />, path:'/chart' },
    { text: 'Reporting', icon: <ReportingIcon sx={{ color: 'white' }} />, path: '/chart' },
    { text: 'App Marketplace', icon: <AppMarketplaceIcon sx={{ color: 'white' }} />, path: '/chart' },
    { text: 'Settings', icon: <SettingsIcon sx={{ color: 'white' }} />, path: '/chart'},
  ];

  const drawerContent = (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Toolbar sx={{ justifyContent: 'center', backgroundColor: 'inherit' }}>
        <Typography variant="h6" noWrap>
          Structured Settlement
        </Typography>
      </Toolbar>
      <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)' }} />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
            sx={{ '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <StyledDrawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isMobile ? mobileOpen : true}
      onClose={onDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: 'block', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box' },
      }}
    >
      {drawerContent}
    </StyledDrawer>
  );
};

export default Sidebar;