import { Button } from '../src/components/atoms/Button/Button';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Figure } from '../src/components/atoms/Figure/Figure';
import { Icon } from '../src/components/atoms/Icon/Icon';

export default function About() {
  return (
    <>
      <Figure src='./fish.jpg' width='400px' height='auto' alt='Picture of the fish' figcaption='Picture of the fish'/>
      <br />
      <div><Button targeturl="/about" label='Primary button' variant='contained' disabled endicon={<Icon icon='mui-arrowright'/>}></Button></div>
      <br />
      <div><Button targeturl="/" label='Secondary button' variant='outlined'  starticon={<KeyboardArrowLeft/>}></Button></div>
      <br />
    </>
  );
}
