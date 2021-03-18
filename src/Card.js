import React from 'react'
import { Card as C, Container, Button } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
export default function Card({news, index, decrement, increment}) {

    const btnStyle = {
        display: "flex",
        justifyContent: "space-around"
    }
  
      const classes = useStyles();


    return (
        <Container>
            
            <C  style={{width:"100%"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={news[index].title}
          height="140"
          image= {news[index].urlToImage}
          title={news[index].title}
        />
        <CardContent>
        
          <Typography gutterBottom variant="h5" component="h2">
          {news[index].title}
          </Typography>
            <Typography gutterBottom variant="h5" component="h3">{news[index].author}</Typography>
            <Typography gutterBottom variant="h5" component="h3">{news[index].source.name}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {news[index].description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={decrement} size="small" color="primary">
        Back
        </Button>
        <Button onClick={increment} size="small" color="primary">
        Next
        </Button>
      </CardActions>
    </C>
            {/* <img style={{width: "100vw", height: "60vh"}} src= {news[index].urlToImage} alt=""/>
            <h1>{news[index].title}</h1>
            <h2>{news[index].author}</h2>
            <h3>{news[index].source.name}</h3>
            <p>{news[index].description}</p>
            <div style = {btnStyle}>
                <Button onClick={decrement}>Back</Button>
                <Button onClick={increment}>Next</Button>
            </div> */}
        
        </Container>
    )
}
