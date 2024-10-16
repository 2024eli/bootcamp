import React from 'react';
import { Grid } from '@mui/material';
import { AnyChildren } from '../util/types/generic';

/**
 * This styles a the whole screen as a grid component, serves as a wrapper to ensure
 * that we know what role it plays, as well as height as the whole screen, spacing, and resizing
 * @param children The {@link AnyChildren} representing the components of the screen.
 * @returns
 */
function ScreenGrid({ children }: AnyChildren) {
  return (
    <Grid
      container
      columnGap={4}
      paddingLeft={20}
      paddingRight={20}
      height="100vh"
      justifyContent="center"
      alignItems="flex-start"
    >
      {children}
    </Grid>
  );
}

export default ScreenGrid;
