import axios from "axios";
import React, {useState, useEffect } from "react";
import Chart from "react-apexcharts";
import loginRequests from '../../LoginRequests'

function Barchart() {
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
            console.log(res.data)

            for(let i=0; i<res.data.length; i++)
            {
              arrayPrenotazione.push(res.data[i]);
              arrayBigliettiVenduti.push(res.data[i]);
      
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
              name: "Biglietti acquistati",
              data: prenotazione,
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
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: prenotazione,
              title: {
                text: "Biglietti acquistati",
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

export default Barchart;