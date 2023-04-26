import markdownStyles from './markdown-styles.module.css'
import Iframe from 'react-iframe'

type Props = {
  content: string,
  embedded: string
}

const PostBody = ({ content, embedded }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="mb-6 text-lg">
          <div
            dangerouslySetInnerHTML={{ __html: embedded }}
          />
      </div>
    </div>
  )
}

export default PostBody
