import Button from "./Button";

const Header = ({ title,onAdd }) => {
  return (
    <>
    <header className="header">
      <h1> {title} </h1>

    <Button color='green' text='hello' onClick = {onAdd}/>
    </header>
    </>
  );
};


export default Header