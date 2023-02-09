import React from 'react';

function BlogCard({src,Categori, title, link}) {
    return (
        <div className="blog-card">
            <img src={src} alt ="blog"  className="w-100"/>
            <p>{Categori}</p>
            <h4>{title}</h4>
            <a href={link} >read more.</a>
        </div>
    )
}

export default BlogCard
