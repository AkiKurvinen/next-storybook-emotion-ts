import { Button } from '../src/components/atoms/Button/Button';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Frame } from '../src/components/atoms/Frame/Frame';
import { Icon } from '../src/components/atoms/Icon/Icon';

export default function About() {
  return (
    <>
      <Frame src='./bird.jpg'/>
      <br />
      <div><Button targeturl="/about" label='Primary button' variant='contained' disabled endicon={<Icon icon='arrowright'/>}></Button></div>
      <br />
      <div><Button targeturl="/" label='Secondary button' variant='outlined'  starticon={<KeyboardArrowLeft/>}></Button></div>
      <br />
    </>
  );
}
