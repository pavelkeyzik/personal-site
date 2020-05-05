import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Box, Flex, SideNav, Text } from '@primer/components';

function Layout({ children }) {
  return (
    <Grid gridTemplateRows="60px 1fr" minHeight="100vh">
      <Grid bg="black" color="white" gridTemplateColumns="2fr 10fr" gridGap={3}>
        <Flex alignItems="center" p={3}>
          Admin panel
        </Flex>
      </Grid>
      <Grid gridTemplateColumns="2fr 10fr" gridGap={3}>
        <Box p={3}>
          <SideNav borderRadius={0} bordered>
            <SideNav.Link as={NavLink} to="/" exact>
              <Text>Dasboard</Text>
            </SideNav.Link>
            <SideNav.Link as={NavLink} to="/works">
              <Text>Works</Text>
            </SideNav.Link>
            <SideNav.Link as={NavLink} to="/about">
              <Text>About</Text>
            </SideNav.Link>
          </SideNav>
        </Box>
        <Box p={3}>{children}</Box>
      </Grid>
    </Grid>
  );
}

export { Layout };
