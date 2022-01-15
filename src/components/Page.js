import React, { useState } from 'react'


const Page = ({ tourData, removedTour }) => {
    const [readMore, setReadMore] = useState(false);
    
    return (
        <div>
            {tourData.map((page) => {
                return (
                    <div key={page.id} className='singleTour'>
                        <img src={page.img} alt={page.title} />
                        <footer className='foot'>
                            <div className='tourInfo'>
                                <h2>{page.title}</h2>
                                <h3 className='tourPrice'>
                                    $
                                    {page.price}
                                </h3>
                            </div>
                            <div className='textInfo'>
                                <p>
                                    {readMore ? page.description : `${page.description.substring(0,200)}...`}
                                    <button onClick={() => setReadMore(!readMore)}>
                                        {readMore ? 'Show Less' : 'Read More'}
                                    </button>
                                </p>
                            </div>
                            <div className='notInterested'>
                                <button onClick={() => removedTour(page.id)} className='deleteButton'>Not Interested</button>
                            </div>     
                        </footer>
                    </div>
                );
            })}            
        </div>
    )
}

export default Page
