import Link from 'next/link'
import React from 'react'

import { pagesPath } from '~/lib/$path'
import { Blog } from '~/src/types/microCMS/api/Blog'
import { Category } from '~/src/types/microCMS/api/Category'

import { Meta } from '../Meta'

import styles from './BlogList.module.scss'

type ContainerProps =
  | {
    contents: Blog[]
    currentPage: number
    pager: number[]
    selectedCategory?: Category | null
  }
  | {
    contents: Blog[]
    currentPage?: number | null
    pager?: number[] | null
    selectedCategory?: Category | null
  }

export type { ContainerProps as BlogListProps }

type Props = ContainerProps

const Component: React.VFC<Props> = ({ contents, currentPage, pager, selectedCategory }) => (
  <>
    <ul className="row">
      {contents.map((content) => (
        <li key={content.id} className={'mb-18 col-12 col-sm-6 col-md-4 ' + styles.lsn}>
          <Link href={pagesPath._slug(content.id).$url()}>
            <a className={'d-block card ' + styles.tdn}>
              {/* <picture> */}
              {/* <source type="image/webp" data-srcset={content.ogimage.url + '?w=670&fm=webp'} /> */}
              <div className={styles.imgFrame}>
                {/* <img
                  src={content.ogimage.url + '?w=670'}
                  className={'lazyload w-100 h-auto d-block '}
                  alt="アイキャッチ画像"
                /> */}
                <picture>
                  <source type="image/webp" srcSet={`${content.ogimage.url}?fit=crop&w=200&h=115&fm=webp`} />
                  <img src={`${content.ogimage.url}?fit=crop&w=200&h=115&q=100`} className={styles.image} alt="" />
                </picture>
              </div>
              {/* </picture> */}
              <dl className={'p-3 ' + styles.content}>
                <dt className={styles.title}>{content.title}</dt>
                <dd>
                  <Meta
                    createdAt={content.publishedAt ?? content.createdAt}
                    author={content.writer !== null ? content.writer.name : ''}
                    category={content.category}
                  />
                </dd>
              </dl>
            </a>
          </Link>
        </li>
      ))}
    </ul>
    {pager && (
      <ul className={styles.pager}>
        {pager.map((page) => (
          <li key={page} className={styles.page} data-is-active={currentPage === page + 1}>
            <Link
              href={
                selectedCategory !== null && selectedCategory !== undefined
                  ? pagesPath.category
                    ._categoryId(selectedCategory.id)
                    .page._pageNumber(page + 1)
                    .$url()
                  : pagesPath.page._pageNumber(page + 1).$url()
              }
            >
              <a>{page + 1}</a>
            </Link>
          </li>
        ))}
      </ul>
    )}
  </>
)

const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
