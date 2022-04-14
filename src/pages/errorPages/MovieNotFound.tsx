import React from 'react';
import { createStyles, Container, Title, Text, Button, Group } from '@mantine/core';
import { Illustration } from './Illustration.tsx';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  inner: {
    position: 'relative',
  },

  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 0,
    opacity: 0.75,
  },

  content: {
    paddingTop: 220,
    position: 'relative',
    zIndex: 1,

    [theme.fn.smallerThan('sm')]: {
      paddingTop: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));



export function NothingFoundBackground() {

  function tornaIndietro(){
    window.history.back()
  }
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Niente da vedere qui</Title>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            Il film che hai ricercato non è presente nei nostri database.
          </Text>
          <Group position="center">
            <Button size="md"
            onClick={tornaIndietro}
            >Riportami indietro</Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}