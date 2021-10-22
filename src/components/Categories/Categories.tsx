import Link from 'next/link'
import React from 'react'

import { pagesPath } from '~/lib/$path'
import { Category } from '~/src/types/microCMS/api/Category'

import styles from './Categories.module.scss'

type ContainerProps = {
  categories: Category[]
}
type Props = ContainerProps

const Component: React.VFC<Props> = ({ categories }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.pageTitle}>カテゴリー</h1>
    <ul className="p-0 my-0 mx-n2 d-flex flex-wrap">
      {categories.map((category) => (
        <li key={category.id} className={'px-2 ' + styles.list}>
          <Link href={pagesPath.category._categoryId(category.id).page._pageNumber(1).$url()}>
            <a>{category.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
