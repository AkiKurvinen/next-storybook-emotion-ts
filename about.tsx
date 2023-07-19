import { Button } from '../src/components/atoms/Button/Button';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { KeyboardArrowRight } from '@mui/icons-material';

export default function About() {
  return (
    <>
      <br />
      <div><Button targeturl="/about" label='Primary button' variant='contained' disabled endicon={<KeyboardArrowRight/>}></Button></div>
      <br />
      <div><Button targeturl="/" label='Secondary button' variant='outlined'  starticon={<KeyboardArrowLeft/>}></Button></div>
      <br />
    </>
  );
}
