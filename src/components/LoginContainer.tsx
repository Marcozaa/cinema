import React from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';

export function LoginContainer() {
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        style={{
          textShadow: '2px 2px 8px #0000007b'
        }}
      >
        Bentornato!
      </Title>
      <Text color="dimmed" 
      style={{
          textShadow: '2px 2px 8px #0000007b'
        }}
      size="sm" 
      align="center" mt={5}
>
        Non hai ancora un account?{' '}
        <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
          Crea account
        </Anchor>
      </Text>

      <Paper  shadow="md" p={30} mt={30} radius="md"  >
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Group position="apart" mt="md">
          <Checkbox label="ricordami" />
          <Anchor<'a'> onClick={(event) => event.preventDefault()} href="#" size="sm">
            Password dimenticata?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Entra
        </Button>
      </Paper>
    </Container>
  );
}