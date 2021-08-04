import './CharacterCard.css'

export default function CharacterCard(props) {
    return <section className="character-card">
        <img className="character-card__img" src={props.character.image} alt="character img"/>
        <h2 className="character-card__title">{props.character.name}</h2>
    </section>
}