export const OG_TITLE = 'og:title'
export const DESCRIPTION = 'description'
export const OG_DESCRIPTION = 'og:description'
export const OG_TYPE = 'og:type'
export const OG_IMAGE = 'og:image'

if (process.env.NEXT_PUBLIC_SITE_URL === undefined) {
  throw Error('envファイルにNEXT_PUBLIC_SITE_URLを設定してください。')
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL

const title = 'キヨスケの備忘録'
export const description = 'キヨスケがした技術検証をつらつらと書き残しています。Webサイトの制作もしております。'

export const returnTitle = (pageTitle?: string) => {
  if (pageTitle !== undefined) {
    return `${pageTitle} | ${title}`
  } else {
    return title
  }
}
