import React from 'react';
import { Grid } from '@primer/components';

import { WorkPreview } from '../../components/work-preview';

import { useWorks } from '../../hooks/use-works';

function ListOfWorks() {
  const { loading, error, works } = useWorks();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  return (
    <Grid mt={4} gridGap={20}>
      {works.map((work) => (
        <WorkPreview
          key={work.id}
          title={work.title}
          description={work.description}
          link={work.link}
        />
      ))}
    </Grid>
  );
}

export { ListOfWorks };
