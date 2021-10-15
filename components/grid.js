import { fetchGists } from '../lib/github';
import styles from '../styles/grid.module.css'


export default function Grid (props) {
  const formatter = (gist) => {
    // Parse Gist description. If it has a semicolon, split it up into title and text.
    const gistDescription = gist.description.split(":");
    const gistTitle = gistDescription.length > 1 ? gistDescription[0] : gist.description;
    const gistText = gistDescription.length > 1 ? gistDescription[1] : "";

    return (
    <div key={gist.id} className={styles.cardWrap}>
      <a href={gist.owner.login + "/" + gist.id} className={styles.card}>
        <img src="https://user-images.githubusercontent.com/19257435/120700950-4ce70a80-c480-11eb-9f8b-0d5f2be18b37.png" className={styles.cardimg}/>
        <h2>{gistTitle}</h2>
        <p>{gistText}</p>
      </a>
    </div>
  )};

  const gists = fetchGists(props.username, formatter);
  return (
      <div className={styles.grid}>
        {gists}
      </div>
  )
}
