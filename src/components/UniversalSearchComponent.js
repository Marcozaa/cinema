import React from 'react'
import { TextInput, Loader } from '@mantine/core';
import { FaSearch } from 'react-icons/fa';

export default function UniversalSearchComponent() {
  return (
    <TextInput placeholder="Ricerca un film..." rightSection={<FaSearch />} />
  )
}
