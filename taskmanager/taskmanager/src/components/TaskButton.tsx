// enkelt komponent med kun en knapp. Når knappen trykkes skal det logges i konsollen. Ingen props eller logikk. 

export default function TaskButton() {
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button was clicked', e.currentTarget);
  };

  return <button onClick={onButtonClick}>Trykk</button>;
}
