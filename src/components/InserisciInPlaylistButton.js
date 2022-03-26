import React from 'react';
import { Button, Menu, Text, useMantineTheme } from '@mantine/core';
import { SquareCheck, Package, Users, Calendar, ChevronDown } from 'tabler-icons-react';
import { useSelector } from 'react-redux';
export function InserisciInPlaylistButton({nome}) {
  const theme = useMantineTheme();
  const playlist = useSelector((state) => state.playlistUtente.value)
  return (
    <Menu
      control={
        <Button rightIcon={<ChevronDown size={18} />} sx={{ paddingRight: 12 }}>
          Inserisci in
        </Button>
      }
      transition="pop-top-right"
      placement="end"
      size="lg"
    >
      {playlist && (
      playlist.map(playlist =>(
          <Menu.Item
        icon={<Package size={16} color={theme.colors.blue[6]} />}
        rightSection={
          <Text size="xs" transform="uppercase" weight={700} color="dimmed">
            Ctrl + P
          </Text>
        }
      >
       {playlist.nome}
      </Menu.Item>
      )))}
      
      
    </Menu>
  );
}