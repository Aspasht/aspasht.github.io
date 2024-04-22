import { useContext, useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
// import '../Blogs/preview.css';
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// @ts-ignore
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useParams } from 'react-router-dom';
import { PostContext } from '../Contexts/PostProvider'
// import '../Blogs/preview.css';
import LoadingPage from './LoadingPage';
import Layout from './Layout'
import './BlogPreview.css'
import axios from 'axios'


type PostType= {
    id: string;
    title: string;
    content: string;
}

const SingleBlog = () => {
    const { id } = useParams();
    const  {posts}  = useContext(PostContext);
    const [singlePost, setSinglePost] = useState<PostType|null>(null);
    console.log(id);

    useEffect(() => {
        const findPost = async (post: PostType[]) => {
            const foundPost = post.find((obj: PostType) => obj.title === id);
            if (foundPost) {
                setSinglePost(foundPost);
            } else {
                try {
                    const response = await axios.get(`/api/posts/${id}/`);
                    setSinglePost(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        findPost(posts as PostType[]);
    }, [id, posts]);
    
    return (
        <Layout>
            {singlePost ?
                (<div className='text-white px-5 mx-12'>
                    <div className=''>
                        <p className='text-[30px] font-bold overflow-auto text-left text-green-900'>{singlePost.title}</p>
                    </div>
                    <div className='my-4 space-y-3 w-full text-[15px] text-gray-500 '>
                        <ReactMarkdown  
                            children={singlePost.content}
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
                </div>):(
                    <LoadingPage />
                )
            }
        </Layout>
    )
};

export default SingleBlog;