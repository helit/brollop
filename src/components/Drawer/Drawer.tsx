import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Drawer as MuiDrawer, Typography } from '@mui/material';
import { useDrawer } from '../../hooks/useDrawer';
import { Bed, Celebration, Checkroom, Home, InsertInvitation, Schedule, Support } from '@mui/icons-material';
import { DrawerContent } from './Drawer.styled';
import { useNavigate } from 'react-router-dom';

export const Drawer = () => {
    const { isOpen, close } = useDrawer();
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
        close();
    }

    return (
        <MuiDrawer anchor='left' open={isOpen} onClose={close}>
            <DrawerContent>
                <Typography fontFamily={'Charm'} variant='h6'>Meny</Typography>
                <Divider />
                <MenuList>
                    <MenuItem onClick={() => handleNavigate('/')}>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText>Start</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => handleNavigate('#')}>
                        <ListItemIcon>
                            <Schedule />
                        </ListItemIcon>
                        <ListItemText>Program</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => handleNavigate('#')}>
                        <ListItemIcon>
                            <Bed />
                        </ListItemIcon>
                        <ListItemText>Boende</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => handleNavigate('#')}>
                        <ListItemIcon>
                            <Celebration />
                        </ListItemIcon>
                        <ListItemText>Festen</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => handleNavigate('#')}>
                        <ListItemIcon>
                            <Checkroom />
                        </ListItemIcon>
                        <ListItemText>Klädsel</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => handleNavigate('/anmalan')}>
                        <ListItemIcon>
                            <InsertInvitation />
                        </ListItemIcon>
                        <ListItemText>Anmälan</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => handleNavigate('#')}>
                        <ListItemIcon>
                            <Support />
                        </ListItemIcon>
                        <ListItemText>Hjälp oss</ListItemText>
                    </MenuItem>
                </MenuList>
            </DrawerContent>
        </MuiDrawer>
    );
}