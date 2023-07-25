import { Button } from '../src/components/atoms/Button/Button';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Icon } from '../src/components/atoms/Icon/Icon';
import { Frame } from '../src/components/atoms/Frame/Frame';

export default function Home() {
  return (
    <>
    <Frame src='./bird.jpg'/>
      <br />
      <div><Button targeturl="/about" label='Primary button' variant='contained'  endicon={<Icon icon='arrowright'/>}></Button></div>
      <br />
      <div><Button targeturl="/" label='Secondary button' variant='outlined' disabled starticon={<KeyboardArrowLeft/>}></Button></div>
      <br />
    </>
  );
}

 

