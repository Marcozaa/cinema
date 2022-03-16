import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import './movieCard.css'
const MovieCard = ({immagine, titolo}) => {
  return (

    <div className="movieCard" >
      <img src={immagine} />
      <p>{titolo}</p>
    </div>

  );
};

export default MovieCard;