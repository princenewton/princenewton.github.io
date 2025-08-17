import React from 'react';
import './Book.css'
import { PageProp } from './types'

interface PageComponentProps {
    pageProp: PageProp;
}

const Page: React.FC<PageComponentProps> = ({ pageProp }) => {
    return (
        <div>
            <h1>{pageProp.title}</h1>
            <p>{pageProp.content}</p>
        </div>
    )
}

export default Page;