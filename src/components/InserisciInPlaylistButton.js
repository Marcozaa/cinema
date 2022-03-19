import React from 'react';
import { Button, Menu, Text, useMantineTheme } from '@mantine/core';
import { SquareCheck, Package, Users, Calendar, ChevronDown } from 'tabler-icons-react';

export function InserisciInPlaylistButton() {
  const theme = useMantineTheme();
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
      <Menu.Item
        icon={<Package size={16} color={theme.colors.blue[6]} />}
        rightSection={
          <Text size="xs" transform="uppercase" weight={700} color="dimmed">
            Ctrl + P
          </Text>
        }
      >
        Cinepanettoni
      </Menu.Item>
      <Menu.Item
        icon={<SquareCheck size={16} color={theme.colors.pink[6]} />}
        rightSection={
          <Text size="xs" transform="uppercase" weight={700} color="dimmed">
            Ctrl + T
          </Text>
        }
      >
        Fantasia
      </Menu.Item>
      <Menu.Item
        icon={<Users size={16} color={theme.colors.cyan[6]} />}
        rightSection={
          <Text size="xs" transform="uppercase" weight={700} color="dimmed">
            Ctrl + U
          </Text>
        }
      >
        Documentari
      </Menu.Item>
      <Menu.Item
        icon={<Calendar size={16} color={theme.colors.violet[6]} />}
        rightSection={
          <Text size="xs" transform="uppercase" weight={700} color="dimmed">
            Ctrl + E
          </Text>
        }
      >
        Serie TV preferite
      </Menu.Item>
    </Menu>
  );
}