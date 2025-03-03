import Hashtag from './Hashtag';
import React from 'react'

const DashboardCard = ( {title, value, hashtags = []}) => {
    return (
    <div class="mx-auto w-full min-h-[300px] overflow-hidden rounded-xl bg-white shadow-lg flex flex-col">
        <div class="p-8 flex flex-col flex-grow">
            <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase text-center">{title}</div>
            <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                {title}
            </a>
            <p class="mt-2 text-gray-500 font-itim flex-grow">
                {value}
            </p>
            {/* Map through the hashtags array and render each Hashtag component */}
            {<div className="flex flex-wrap gap-2 mt-4">
                {hashtags.map((hashtag, index) => (
                <Hashtag tag={hashtag} />
                ))}
            </div>}
            {/*<Hashtag tag = '#Metoo' />*/}
        </div>  
    </div>
    );
}

export default DashboardCard;