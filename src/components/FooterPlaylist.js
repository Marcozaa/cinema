import { Button, TextInput } from '@mantine/core'
import { useSelector, useDispatch } from 'react-redux'
import { Search, SearchOffOutlined, SearchSharp } from '@mui/icons-material'
import React from 'react'
import axios from '../axiosLogin'
import loginRequests from '../LoginRequests'
import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function FooterPlaylist({nomePlaylist, immaginePlaylist}) {
const [open, setOpen] = React.useState(false);
const [severity, setSeverity] = useState("success")
const [messaggioAlert, setMessaggioAlert] = useState( `Hai creato una playlist con nome ${nomePlaylist}!`)
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  var idUtente = useSelector((state) => state.idUtente.value)
  async function createPlaylist(){
      const request = await axios.get(loginRequests.playlistCreation+
        "?nome="+nomePlaylist+
        "&cliente="+idUtente+"&immagine="+immaginePlaylist);
        if(request.data.includes("playlist_number_exceeded")){
          setSeverity("error")
          setMessaggioAlert("Hai creato troppe playlist! Eliminane qualcuna.")
        }else{
          setSeverity("success")
          setMessaggioAlert(`Hai creato una playlist con nome ${nomePlaylist}!`)
        }
      return request
    }
    console.log(useSelector((state) => state.idUtente.value))
  return (
    <div>
        <h1>Cerchiamo qualcosa per la tua playlist</h1>
        <TextInput
              placeholder="Cerca film"
              variant='filled'
              size="xl"
              rightSection={<SearchSharp color='white'/>}
            />


    <Button onClick={() => {createPlaylist(); handleClick()}}>Crea playlist</Button>

     <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {messaggioAlert}
        </Alert>
      </Snackbar>

    </div>
  )
}
