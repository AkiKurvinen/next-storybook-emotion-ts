import { Button } from '../src/components/atoms/Button/Button';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Icon } from '../src/components/atoms/Icon/Icon';
import { Figure } from '../src/components/atoms/Figure/Figure';

export default function Home() {
  return (
    <>
      <Figure src='./bird.jpg' width='400px' height='auto' alt='Picture of the bird' figcaption='Picture of the bird'/>
      <br />
      <div><Button targeturl="/about" label='Primary button' variant='contained'  endicon={<Icon icon='mui-arrowright'/>}></Button></div>
      <br />
      <div><Button targeturl="/" label='Secondary button' variant='outlined' disabled starticon={<KeyboardArrowLeft/>}></Button></div>
      <br />
    </>
  );
}
