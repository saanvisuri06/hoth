import { Link } from 'react-router-dom';
const Hashtag = ( {tag}) =>{
    return (
    <Link to = {`/tag/${tag}`}>
        <div class="inline-block rounded-xl bg-purple-500 bg-opacity-70 hover:bg-opacity-100 pl-1 pr-1">
            <div class="md:flex">
                <div class="text-sm font-semibold tracking-wide text-white uppercase">#{tag}</div>
        </div>    
        </div>
    </Link>
    );
};

export default Hashtag;