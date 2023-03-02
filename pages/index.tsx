import HTag from "../components/HTag/Htag";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <>
      <HTag tag='h1' text='Текст' />
        <Button appearance={'primary'}>Primary</Button>
        <Button appearance={'ghost'}>Primary</Button>
    </>
  );
}
