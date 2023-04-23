import markdownStyles from './markdown-styles.module.css'
import Iframe from 'react-iframe'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="mb-6 text-lg">
          <Iframe width="100%" height="600" scrolling="no" allow="autoplay" url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1498382365&color=%23ff00fd&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
      </div>
    </div>
  )
}

export default PostBody
