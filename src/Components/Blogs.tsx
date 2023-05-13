import {useContext } from 'react'
import Layout from './Layout';
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
import LoadingPage from './LoadingPage';
import { PostContext } from '../Contexts/PostProvider';

// interface PostType {
//   _id: string,
//   title: string,
//   content: string,
//   createdAt: string;
// }


const Blogs = () => {
  // const [posts, setPosts] = useState<PostType[]>([])
  // const [isOpen, setIsOpen] = useState(false);
  const { posts } = useContext(PostContext);


  // useEffect(() => {
  //   postBlog();
  // }, []);

  // const postBlog = async () => {
  //   try {
  //     const response = await axios.get("/api/post/view");
  //     setPosts(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // console.log(userPosts);

  function date(createdAt: string) {
    const date = new Date(createdAt);
    const dateOnly = date.toDateString();
    return dateOnly
  }

  // const toggleSidebar = () => {
  //   if (isOpen === false) {
  //     setIsOpen(true);
  //   } else {
  //     setIsOpen(false);
  //   }
  // };


  return (
    <>
      {
        posts ? (
          <Layout>
            <div className='flex flex-row w-full p-2'>
              <div className="h-auto z-30 w-full">

                <div className="flex flex-col">
                  {/* <div>
                    <button className="flex px-2 justify-start focus-visible:ring-8" onClick={toggleSidebar}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </button>
                  </div> */}
                  {posts && posts.map((data: any) => {
                    return (
                      <div key={data.id} className='my-5 rounded-bl-3xl mx-auto w-full '>
                        <div className='inline-block p-3 overflow-hidden w-full'>
                          <div className='inline-flex gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                            </svg>
                            <Link className="font-blogtitle font-bold text-xl text-green-600 underline hover:scale-95 active:scale-95" to={data.title}>{data.title}</Link>
                          </div>
                          <div>
                            <p className='mx-8 text-sm prose'>{date(data.createdAt)}</p>
                          </div>
                          <div className='h-24 overflow-hidden'>
                            <p className='prose max-w-none font-blogtitle my-2 overflow-hidden text-md text-slate-300'>{data.description}</p>
                          </div>
                          <div className='flex justify-between'>
                            <div className='text-yellow-500 justify-start hover:scale-95 active:scale-95'>
                              <Link to={data.title}>Read More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                              </Link>
                            </div>
                            <div className='flex sm:pr-10 gap-2 text-red-500'>
                              <a className='hover:scale-105 active:scale-95' id='twitter' href='https://twitter.com/intent/tweet?text='><svg xmlns="http://www.w3.org/2000/svg" fill='blue' width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></a>
                              <a className='hover:scale-105 active:scale-95' id='facebook' href='https://facebook.com'><svg xmlns="http://www.w3.org/2000/svg" fill='blue' width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" /></svg></a>
                              <a className='hover:scale-105 active:scale-95' id='discord' href='https://discord.com'><svg fill='blue' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm2.784 15.584h-6.804c-.678 0-1.23-.552-1.23-1.236v-8.112c0-.684.552-1.236 1.23-1.236h8.04c.678 0 1.23.552 1.23 1.236v10.764l-1.29-1.14-.726-.672-.768-.714.318 1.11zm-1.08-2.748c1.326-.042 1.836-.912 1.836-.912 0-1.932-.864-3.498-.864-3.498-.864-.648-1.686-.63-1.686-.63l-.084.096c1.02.312 1.494.762 1.494.762-.624-.342-1.236-.51-1.806-.576-.432-.048-.846-.036-1.212.012l-.102.012c-.21.018-.72.096-1.362.378l-.354.174s.498-.474 1.578-.786l-.06-.072s-.822-.018-1.686.63c0 0-.864 1.566-.864 3.498 0 0 .504.87 1.83.912l.402-.498c-.762-.228-1.05-.708-1.05-.708l.168.102.024.018.024.013.006.004.024.013c.15.084.3.15.438.204.246.096.54.192.882.258.45.084.978.114 1.554.006.282-.048.57-.132.87-.258.21-.078.444-.192.69-.354 0 0-.3.492-1.086.714l.396.486zm-2.79-2.802c-.342 0-.612.3-.612.666 0 .366.276.666.612.666.342 0 .612-.3.612-.666.006-.366-.27-.666-.612-.666zm2.19 0c-.342 0-.612.3-.612.666 0 .366.276.666.612.666.342 0 .612-.3.612-.666 0-.366-.27-.666-.612-.666z" /></svg></a>
                              <a className='hover:scale-105 active:scale-95' id='linkedin' href='http://linkedin.com'><svg xmlns="http://www.w3.org/2000/svg" fill='blue' width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" /></svg></a>
                            </div>
                          </div>
                        </div>

                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </Layout>
        ) : (
          <LoadingPage />
        )
      }
    </>
  )
}

export default Blogs;