import React from 'react';
import {
  Grid,
  Box,
  Text,
  Flex,
  Button,
  AvatarStack,
  Link,
} from '@primer/components';
import { PencilIcon, LinkExternalIcon } from '@primer/octicons-v2-react';

function WorkPreview({ title, description, link }) {
  return (
    <Grid gridTemplateColumns="200px 1fr auto" gridTemplateRows="200px">
      <Flex
        flexDirection="column"
        alignItems="center"
        style={styles.imageContainer}
      >
        <Box bg="blue.2" overflow="hidden" height={200} width={200}>
          <img src="https://picsum.photos/200?random" />
        </Box>
        {link && (
          <Flex
            alignItems="center"
            justifyContent="center"
            height={40}
            backgroundColor="blue.2"
            style={styles.siteLink}
          >
            <Link href={link} target="_blank">
              <LinkExternalIcon /> Visit site
            </Link>
          </Flex>
        )}
      </Flex>
      <Flex paddingX={3} flexDirection="column">
        <Text fontWeight="bold" mb={1} p={0} as="h3">
          {title || 'Title is not providen'}
        </Text>
        <Text mt={2}>{description || 'Information is not providen'}</Text>
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

const styles = {
  imageContainer: {
    position: 'relative',
  },
  siteLink: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
};

export { WorkPreview };
