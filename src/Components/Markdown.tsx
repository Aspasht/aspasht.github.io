import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// @ts-ignore
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'


type Props = {
  markdown: string,
}

const SingleBlog: React.FC<Props> = ({ markdown }) => {
  return (
    <div>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={atomDark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <SyntaxHighlighter language="bash" style={atomDark}>
                {children}
              </SyntaxHighlighter>
            )
          }
        }}
      />
    </div>
  )
};

export default SingleBlog;
