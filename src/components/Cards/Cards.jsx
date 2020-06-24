import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return "...loading";
  }
  const Item=(props)=>{
    return (
      <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, props.clsname)}
        >
          <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {props.title}
                </Typography>
                <Typography variant="h5">
                  <CountUp
                    start={0}
                    end={props.number}
                    duration={2}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  {props.message}
                </Typography>
          </CardContent>
      </Grid>
    );

  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Item 
          title='Infected' 
          message='No. of active cases of COVID-19' 
          number={confirmed.value} 
          clsname={styles.infected}

          />

        <Item 
          title='Recovered' 
          message='No. of recoveries from COVID-19' 
          number={recovered.value} 
          clsname={styles.recovered}

          />

        <Item 
          title='Deaths' 
          message='No. of deaths caused by COVID-19' 
          number={deaths.value} 
          clsname={styles.deaths}
            
          />
      </Grid>
    </div>
  );
}

export default Cards;
