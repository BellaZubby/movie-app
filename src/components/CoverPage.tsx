import React from 'react'
import { Cover} from '@/styles/Styles.modules'

interface CoverProps {
    title: string;
    description: string;
    catchyPhrase: string;
    headerImage:string;
    showHeaderImage: boolean;
    
}

const CoverPage: React.FC<CoverProps> = ({title, description, catchyPhrase, headerImage, showHeaderImage}) => {
  return (
    <Cover>
        <div className="coverText">
            <h1>{title}</h1>
            <p>{description}</p>
            <em>{catchyPhrase}</em>
        </div>
        {showHeaderImage && <img src={headerImage} alt='img'/>}

    </Cover>
  )
}

export default CoverPage