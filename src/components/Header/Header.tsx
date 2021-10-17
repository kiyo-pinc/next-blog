/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { headerId } from '~/src/utils/ids'

import styles from './Header.module.css'

type Props = {
  params: string
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  toggleOpen: () => void
}

const LinkList = [
  {
    href: 'https://google.com',
    text: 'ブログ',
  },
  {
    href: 'https://google.com',
    text: 'ドキュメント',
  },
  {
    href: 'https://google.com',
    text: 'ブログ',
  },
  {
    href: 'https://google.com',
    text: 'お問い合わせ',
  },
]

const Component: React.VFC<Props> = ({ params, isOpen, toggleOpen, setIsOpen }) => (
  <>
    <header id={headerId} className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">
          <a>
            <img className={styles.logoImg} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/logo.svg`} alt="microCMS" />
          </a>
        </Link>
      </h1>
      <button className={styles.menuBtn} onClick={toggleOpen}>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/icon_menu.svg`} alt="menu" />
      </button>
      {isOpen && <div className={styles.mask} onClick={() => setIsOpen(false)}></div>}
      <div className={styles.menu} data-is-open={isOpen}>
        <ul className={styles.lists}>
          {LinkList.map((link) => (
            <li key={link.text} className={styles.list}>
              <Link href={link.href}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
    <div className={styles.empty}></div>
  </>
)

const Container: React.VFC = () => {
  const [params, setParams] = useState('')
  useEffect(() => {
    setParams(window.location.search)
  }, [])

  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen((prevValue) => !prevValue)

  return <Component params={params} isOpen={isOpen} setIsOpen={setIsOpen} toggleOpen={toggleOpen} />
}

export default Container
