import React from 'react';
import { Grid, Box, Text, Flex, Button, AvatarStack } from '@primer/components';
import { PencilIcon } from '@primer/octicons-v2-react';

function WorkPreview() {
  return (
    <Grid gridTemplateColumns="200px 1fr auto" gridTemplateRows="200px">
      <Box bg="blue.2" />
      <Flex paddingX={3} flexDirection="column">
        <Text fontWeight="bold" mb={2} p={0} as="h3">
          Project title
        </Text>
        <Text>Short information about project</Text>
        <Text fontWeight="bold" mb={2} mt={4}>
          Technologies:
        </Text>
        <AvatarStack>
          <img
            alt="Primer"
            src="https://avatars.githubusercontent.com/primer"
          />
          <img
            alt="GitHub"
            src="https://avatars.githubusercontent.com/github"
          />
          <img alt="Atom" src="https://avatars.githubusercontent.com/atom" />
          <img
            alt="Desktop"
            src="https://avatars.githubusercontent.com/desktop"
          />
        </AvatarStack>
      </Flex>
      <Flex alignItems="flex-start" p={3}>
        <Button>
          <PencilIcon /> Edit information
        </Button>
      </Flex>
    </Grid>
  );
}

export { WorkPreview };
