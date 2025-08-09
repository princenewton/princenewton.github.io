import React from 'react';
import './Book.css';

interface RightPageProps {
    currentRightPage: React.FC;
}

const RightPage : React.FC<RightPageProps> = ({ currentRightPage }) => {
    const PageComponent = currentRightPage;
    return (
        <div className="page" id="right-page">
            <PageComponent />
        </div>
    );
}

export default RightPage;