import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { storage } from '../firebase-config';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import DashboardCard from './DashboardCard';
import Hashtag from './Hashtag';
import { Link } from 'react-router-dom';

const TagPage = () => {
    const { tagName } = useParams();
    //console.log("Current Tag:", tagName);
    const [posts, setPosts] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
          const imageRef = ref(storage, "images/");
          try {
            const response = await listAll(imageRef); // List all files in the folder
            const urls = await Promise.all(response.items.map(async (item) => {
              return await getDownloadURL(item);
            }));
            
            setImageUrl(urls); // Store URLs in state
          } catch (error) {
            console.error("Error fetching images:", error);
          }
        };
    
        fetchImage();
      }, []);

    useEffect(() => {
        if (!tagName) return;

        //console.log("Rerendering:", tagName);
        // Simulate fetching posts with the same tag (replace with actual API)
        const fetchPostsByTag = async () => {
          const allPosts = [
            { title: 'A Women in Tech', tags: ['Metoo', 'Tech'], value: 'The fight for gender equity in <Hashtag tag="Tech" /> continues. Stand with survivors, support <Hashtag tag="Metoo" /> initiatives, and advocate for systemic change.' },
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
                                <div>
                                <p>No posts available for this tag.</p>
                                
      </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TagPage;