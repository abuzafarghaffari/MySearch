import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MyCard({item}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.flag.large}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        population:{item.population}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Region:{item.region
}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Capital:{item.capital
}
        </Typography>
      </CardContent>
      
    </Card>
  );
}