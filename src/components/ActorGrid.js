import React from 'react';
import { SimpleGrid, Skeleton, Container, Group, useMantineTheme } from '@mantine/core';
import { Image } from '@mantine/core';
import { ArticleCardImage } from './CardCast.tsx';
import { UserInfoIcons } from './CardCast.tsx';
import { PersonRemove } from '@mui/icons-material';
import './actorGrid.css'
export function ActorGrid({cast, crew, option}) {
  
  const theme = useMantineTheme();
  return (
    <div style={{paddingTop: '1rem'}} >
    <h1 style={{margin: '0rem', fontSize: '1.4rem', fontWeight: '400'}}>
      {option == true ? ("Attori in primo piano"): 
      ("La troupe")} 
      </h1>
    <div className="actorgrid" style={{display: 'flex' , alignItems:'center', gap: '2rem', overflowX: 'scroll', padding: '1rem'}}>
      
      {option == true ? (
      cast && (
        cast.map(person =>(
          <UserInfoIcons avatar={person.profile_path} name={person.name} title={person.character}/>
        ))
      )
      ): (
        crew && (
        crew.map(person =>(
          <UserInfoIcons avatar={person.profile_path} name={person.name} title={person.job}/>
        ))
      )
      )}
    </div>
    </div>
  );
}