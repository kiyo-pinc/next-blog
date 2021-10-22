import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { MicroCMSCommonValue } from '~/src/types/microCMS/Common'
import { Banner } from '~/src/types/microCMS/api/Banner'

import styles from './Banner.module.css'

type ContainerProps = {
  banner: Omit<Banner, keyof MicroCMSCommonValue>
  id: string
}

type Props = ContainerProps

const Component: React.VFC<Props> = ({ banner, id }) => (
  <div className={styles.wrapper}>
    <Link href={banner.url}>
      <a className={`${id} ` + styles.link}>
        <Image src={banner.image.url} width={banner.image.width} height={banner.image.height} alt="" />
      </a>
    </Link>
  </div>
)

const Container: React.VFC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export default Container
