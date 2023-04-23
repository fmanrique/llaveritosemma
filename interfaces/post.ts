import type Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  iframe: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
  embedded: string
}

export default PostType
