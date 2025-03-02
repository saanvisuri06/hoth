import { Link } from 'react-router-dom';
const Hashtag = ( {tag, bgColor = 'bg-purple-500', textSize = "text-sm", textColor = "text-white"}) =>{
    return (
    <Link to = {`/tag/${tag}`}>
        <div class={`inline-block rounded-xl ${bgColor} bg-opacity-70 hover:bg-opacity-100 pl-1 pr-1`}>
            <div class="md:flex">
                <div class={ `${textSize} font-semibold tracking-wide ${textColor} uppercase`}>#{tag}</div>
        </div>    
        </div>
    </Link>
    );
};

export default Hashtag;