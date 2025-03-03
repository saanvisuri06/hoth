import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DashboardCard from './DashboardCard';
import Hashtag from './Hashtag';
import { Link } from 'react-router-dom';

const TagPage = () => {
    const { tagName } = useParams();
    //console.log("Current Tag:", tagName);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (!tagName) return;

        //console.log("Rerendering:", tagName);
        // Simulate fetching posts with the same tag (replace with actual API)
        const fetchPostsByTag = async () => {
          const allPosts = [
            { title: 'Post 1', tags: ['Metoo', 'Tech'], value: 'This is post 1' },
            { title: 'Post 2', tags: ['Metoo'], value: 'This is post 2' },
            { title: 'Post 3', tags: ['bruh'], value: 'This is post 3' },
            { title: 'Post 4', tags: ['Metoo'], value: 'This is post 4' },
          ];
    
          // Filter posts by the tag name from the URL
          const filteredPosts = allPosts.filter(post =>
            post.tags.includes(tagName)
          );
    
          console.log("filtered posts", filteredPosts[0]);
          setPosts(filteredPosts);
        };
    
        fetchPostsByTag();
      }, [tagName]);

      return (
        <div>
            <div className="bg-purple-200 font-itim min-h-screen">
                {/* Today's Challenge */}
                <div className="mx-auto w-full overflow-hidden rounded-xl">
                    <div className="p-8 font-itim">
                        <Link to = {`/Home`}>
                            <div className='p-2'> 
                                {`> Back`}
                            </div>
                        </Link>
                        <div className="text-4xl font-semibold tracking-wide text-left pb-5">
                            Posts for <Hashtag tag={tagName} textSize="text-3xl" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
                            {/* Dynamically render posts */}
                            {posts.length > 0 ? (
                                posts.map((post, index) => (
            <DashboardCard 
                key={index} // Always add a key for list items in React
                title={post.title}
                value={post.value}
                hashtags={post.tags}
            />
        ))
                            ) : (
                                <p>No posts available for this tag.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TagPage;