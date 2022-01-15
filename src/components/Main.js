import Page from './Page'
import React, { useState } from 'react'
import Tour from './Tour'

const Main = () => {
    const [tourData, setTourData] = useState(Tour)

    const removedTour = (id) => {
        const newTourData = tourData.filter(tour => tour.id !== id);
        setTourData(newTourData)   
    };

    if (tourData.length > 0){  
        return (
            <div className='mainPage'>
                <section>
                    <div className='title'>
                        <h1>Our Tours</h1>
                        <div className='underLine'></div>
                    </div>
                    <Page tourData={tourData} removedTour={removedTour} className='page' />
                </section> 
            </div>
        )
    }else {
        return (
            <div className='mainTitle'>
                    <div className='newTitle'>
                        <h1>No Tours Left</h1>
                    </div>
                        <button onClick={() => window.location.reload(false)}>Refresh</button>
            </div>
        )
    } 
}

export default Main
