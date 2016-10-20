import React from 'react'
import styles from './styles'
// Add in a default image

type Props = {
  title: String,
  collectionName: String,
  postExcerpt: Array,
  postImage: String,
};

const defaultText = [`Sed posuere consectetur est at lobortis. Praesent commodo
cursus magna, vel scelerisque nisl consectetur et. Cum soci
is natoque penatibus et magnis dis part urient montes, nascetur ridiculus mus...`]

const MediumPostCard = ({ title = 'Post Title', collectionName = 'Collection Name',
postExcerpt = defaultText }: Props) => {
  return (
    <figure className={styles.postCard}>
      <section className={styles.cardMeta}>
        <header>
          <h3>{title}</h3>
          <h4>{collectionName}</h4>
        </header>
        <img src='{postImage}' />
      </section>
      <figcaption>
        {postExcerpt.map(paragraph => (<p>{paragraph}</p>))}
      </figcaption>
    </figure>
  )
}

export default MediumPostCard
