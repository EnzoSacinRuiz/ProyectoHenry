import Card from "./Card";

import style from "./cards.module.css";

export default function Cards({characters, onClose}) {
  return (
    <div className={style.cardList}>
      {characters.map((character) => (
        <Card key={character.id} character={character} onClose={onClose} />
      ))}
    </div>
  );
}
