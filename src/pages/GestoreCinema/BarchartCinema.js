import axios from "axios";
import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";
import loginRequests from '../../LoginRequests'

function BarchartCinema() {
  const [prenotazione, setPrenotazione]= useState([]);
  const [bigliettiVenduti, setBigliettiVenduti]= useState([]);

  useEffect( ()=>{

    const arrayPrenotazione=[];
    const arrayBigliettiVenduti=[];

    function getChartData(){

        axios
        .get(
            'https://87.250.73.22/html/diCastri/ProgettoCinema' + loginRequests.getChartData
        )
        .then(res => {
            console.log(res.data[0].biglietti_venduti)

            for(let i=0; i<res.data.length; i++)
            {
              arrayPrenotazione.push(res.data[i].film);
              arrayBigliettiVenduti.push(res.data[i].biglietti_venduti);
      
            }
            setPrenotazione(arrayPrenotazione);
            setBigliettiVenduti(arrayBigliettiVenduti);
          } )


          return 0
        }
        getChartData();
  },[]);
  


 


  return (
    <React.Fragment>
        <Chart
          type="bar"
          width={900}
          height={600}
          series={[
            {
              name: "Biglietti venduti",
              data: bigliettiVenduti,
            },
          ]}
          options={{
            title: {
              text: "",
            },

            subtitle: {
              text: "",
            },

            colors: ["#f90000"],
            theme: { mode: "dark" },

            xaxis: {
              tickPlacement: "on",
              categories: prenotazione,
              title: {
                text: "Biglietti venduti",
                style: { color: "white", fontSize: 30 },
              },
            },

            yaxis: {
                labels: {
                  formatter: (val) => {
                  return `${val}`;
                  },
                style: { fontSize: "15", colors: ["white"] },
              },
                 title: {
                 text: "Biglietti venduti",
                 style: { color: "white", fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["white"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
    </React.Fragment>
  );
}

export default BarchartCinema;