import { Paper } from '@mui/material';

function Item(props) {
  const { img, title } = props.item;  
  return (
    <Paper className='item-container'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </Paper>
  );
}

export default Item;
