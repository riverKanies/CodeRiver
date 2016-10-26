import React from 'react'
import styles from './styles'
import Button from '../Button'
import dummyImage from './assets/mediumFPO.png'

type Props = {
  title: String,
  collectionName: String,
  postExcerpt: Array,
  postImage: String,
  buttonText: String,
  linkTo: String,
  buttonColor: String
};

const defaultText = [`Sed posuere consectetur est at lobortis. Praesent commodo
cursus magna, vel scelerisque nisl consectetur et. Cum soci
is natoque penatibus et magnis dis part urient montes, nascetur ridiculus mus...`]

const defaultImage = dummyImage

const MediumPostCard = ({
  title = 'Post Title',
  collectionName = 'Collection Name',
  postImage = defaultImage,
  postExcerpt = defaultText,
  buttonText = 'Read More',
  buttonColor = 'dark'
}: Props) => {
  return (
    <figure className={styles.postCard}>
      <img className={styles.postImage} src={postImage} />
      <section className={styles.cardMeta}>
        <header>
          <h3>{title}</h3>
          <h4>{collectionName}</h4>
        </header>
      </section>
      <figcaption>
        {postExcerpt.map(paragraph => (<p>{paragraph}</p>))}
        <Button />
      </figcaption>
    </figure>
  )
}

export default MediumPostCard
