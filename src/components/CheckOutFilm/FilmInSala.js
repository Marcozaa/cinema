import React from 'react'

import { Card, Image, Text, Button, Group, useMantineTheme, Badge } from '@mantine/core';

export default function FilmInSala({sala}) {
  return (
    <div>
    {sala && (
        <div style={{ width: 340, margin: 'auto' }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src="https://images.unsplash.com/photo-1651718642072-a62e53d41861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=80" height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5 }}>
          <Text weight={500}>{sala.film}</Text>
          <Badge color="pink" variant="light">
           Sala {sala.salaNome} - {sala.salaCinema}
          </Badge>
          <Badge>{sala.data}</Badge>
        </Group>

        <Text size="sm" style={{ color: "black", lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Compra biglietto
        </Button>
      </Card>
      </div>
    )}
    </div>
  )
}
