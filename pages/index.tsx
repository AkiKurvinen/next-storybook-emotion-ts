import { Button } from '../src/components/atoms/Button/Button';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { KeyboardArrowRight } from '@mui/icons-material';

export default function Home() {
  return (
    <>
      <br />
      <div><Button targeturl="/about" label='Primary button' variant='contained'  endicon={<KeyboardArrowRight/>}></Button></div>
      <br />
      <div><Button targeturl="/" label='Secondary button' variant='outlined' disabled starticon={<KeyboardArrowLeft/>}></Button></div>
      <br />
    </>
  );
}
