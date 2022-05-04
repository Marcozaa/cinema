import { Flex } from '@chakra-ui/react';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { LocationOnOutlined } from '@mui/icons-material';
import { Location } from 'tabler-icons-react';

export function CardSala({image, nomeSala, cinema, numeroPosti}) {
  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card shadow="sm" p="lg">
      <Card.Section component="a" href="https://mantine.dev" target="_blank">
        <Image
          src={image}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text weight={500}>{nomeSala}</Text>
        <Badge color="pink" variant="light">
          {numeroPosti}&nbsp;posti
        </Badge>
     <div
     style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         gap: '1rem'
     }}>
         <LocationOnOutlined/>
      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        {cinema}
      </Text>
      </div>
      </Group>

      <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
        Informazioni
      </Button>
    </Card>
  );
}
