import { Flex } from '@chakra-ui/react'
import { Button, Divider } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminLogins() {
  return (
    <Flex w={'100%'} justifyContent="space-evenly" alignItems={'center'} h={'90vh'}>
        <Link to="loginPageSala/gestoreSala">
            <Button>Sei il gestore di una sala?</Button>
        </Link>
        <Divider orientation='vertical'/>
        <Link to="loginPageSala/gestoreCinema">
        <Button>Sei il gestore di un cinema?</Button>
        </Link>
    </Flex>
  )
}
