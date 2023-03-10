/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia';
// import Box from '@mui/material/Box';
// import Image from "@material-ui/core/Image";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

//http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=54dadd0dc2a3fe8d31eb9d376a84c24d
//http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=54dadd0dc2a3fe8d31eb9d376a84c24d
//defination  of WeatherInfo widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  }
};

const WeatherInfo = (props) => {
  const [data, setData] = useState(null);
  const [city, setcity] = useState();

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     console.log(city);
  //     const url = `http://api.weatherapi.com/v1/current.json?key=6db8b9619d9d4bddb0e155940213004&q=${city}&aqi=yes`;
  //     const response = await fetch(url);
  //     const resJSON = await response.json();
  //     setData(resJSON);
  //     console.log(data);
  //   };
  //   fetchApi();
  // }, [city]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/run-script')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setData(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <>
      

      <div>
        {data ? (
          !data.error ? (
            <Card className="my-3" style={{ maxWidth: 345, border: "block" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <h4>{data.summary}</h4>
                  </Typography>
                  <CardMedia
  
  image={data.image} // require image
  title="Contemplative Reptile"
  style={styles.media} // specify styles
/>
                  {/* <Box
                    component="img"
                    sx={{
                      height: 233,
                      width: 350,
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={data.image}
                  /> */}
                  {/* <Image>
                    {data.image}
                  </Image> */}
                </CardContent>
              </CardActionArea>
            </Card>
          ) : (
            <h3>data not found</h3>
          )
        ) : (
          <h3>data not found</h3>
        )}
      </div>
    </>
  );
};

export default WeatherInfo;
