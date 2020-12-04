import Axios from 'axios'
import React, {useState, useEffect } from 'react'
import MediaCard from './MediaCard'
import { Doughnut} from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
function Api() {
    const[confirmed, setConfirmed] = useState(0)
    const[recovered, setRecovered] = useState(0)
    const[deaths, setDeaths] = useState(0)
    useEffect(()=>{
        Axios.get('https://covid19.mathdro.id/api')
        .then((res)=>{
            console.log(res.data)
            setConfirmed(res.data.confirmed.value);
            setRecovered(res.data.recovered.value);
             setDeaths(res.data.deaths.value);
            
        })
    },[])
    return (
        <>
         <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4}>
            <MediaCard txt ='Confirmed Cases' value = {confirmed} color='lightpink'/>
            <MediaCard txt ='recovered Cases' value = {recovered}  color='lightgrey'/>
            <MediaCard txt ='deaths Cases' value = {deaths}  color='lightgreen'/>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
        <Doughnut data={{
          labels: ['confirme d', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed, recovered, deaths],
            },
          ],
        }}/>
        </Grid>
      </Grid>
        </>
    )
}

export default Api;
