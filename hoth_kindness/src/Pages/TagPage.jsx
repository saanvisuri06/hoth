import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TagPage = () => {
    const { tagName } = useParams();
    
    return (
        <div>
            This is tag page
        </div>
    );
};

export default TagPage;