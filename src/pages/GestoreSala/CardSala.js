import { Flex } from '@chakra-ui/react';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { LocationOnOutlined } from '@mui/icons-material';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Location } from 'tabler-icons-react';

export function CardSala({image, nomeSala, cinema, numeroPosti, nomeFilm, fotoSala}) {
  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];
  const [film, setFilm] = useState([null])
  
  useEffect(() => {
    async function fetchDataForBanners(){ // Get all the basic info about a movie
      const request = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=0f441200379c274a067c935d56625bc4&language=it&query="+nomeFilm+"&page=1&include_adult=false")
      setFilm(request.data)
      return request
    }
     fetchDataForBanners()
  }, []);

  return (
    <Card shadow="sm" p="lg">
      <Card.Section component="a" href="https://mantine.dev" target="_blank">
        {film.results && (
          fotoSala == null ?(
      <Image
          src={`${'https://image.tmdb.org/t/p/original'+film.results[0].poster_path}`|| null}
          height={160}
          alt="Norway"
        />
          ):(
        <Image
          src={fotoSala}
          height={160}
          alt="Norway"
        />
          )
        )}
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
