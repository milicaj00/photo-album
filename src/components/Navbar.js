import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    
    const [tab, setTab] = useState( 0);
    const navigate = useNavigate();

    const changeTab = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Box className = 'Navbar' sx={{  display: 'flex', minWidth: '20%', marginRight: '1%' }}>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{ display: { xs: 'flex' }, justifyContent: 'center' }}
                >
                    <Tabs
                        position="sticky"
                        orientation="vertical"
                        variant="scrollable"
                        value={tab}
                        onChange={changeTab}
                        sx={{
                            borderRight: 1,
                            borderColor: "divider",
                            width: "100%"
                        }}
                    >
                        <Tab label="Posts" onClick={() => navigate('/posts')}/>
                        <Tab label="Albums" onClick={() => navigate('/albums')}/>
                        <Tab label="Users" />
                    </Tabs>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Navbar;
