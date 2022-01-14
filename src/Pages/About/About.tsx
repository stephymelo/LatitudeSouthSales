import * as React from 'react';
import map from "../../Resources/map.png"
import peopleIcon from "../../Resources/peopleIcon.png"
import blowIcon from "../../Resources/blowdyerIcon.png"

interface About {
}

export const About: React.FC<About> = () => {
    return (
        <section className='about'>
            <article className='about--1'>
                <div className='infocard'>

                    <h1 className='title'>Who we are</h1>
                    <hr></hr>

                    <h2 className='subtitle'>The Latitude South Sales Team is dedicated to representing manufacturers in the professional beauty industry. </h2>
                </div>
                <div className='basic'>
                    <ul className='basic__list'>
                        <li className='basic__list li'>
                            <img className='listimg' src={peopleIcon} />
                            <p className='listp' >We increase sales and build strong partnerships with our brands and distributors </p>
                        </li>
                        <li className='basic__list lihr'>
                            <hr className='listhr'></hr>
                        </li>
                        <li className='basic__list li'>
                            <img className='listimg' src={blowIcon} />
                            <p className='listp'>We direct import salon equipment and furniture for key distributors</p>
                        </li>
                    </ul>

                </div>

                <div className='info'>
                    <ul className='infolist'>
                        <li className='infolist__li' >
                            <h2 className='infolist__li title'>Specialized business model</h2>
                            <p className='infolist__li p'>Founded over 25 years ago, we have an extensive experience  in this industry to offer the best service for our clients</p>

                        </li>
                        <div className='vl'></div>
                        <li className='infolist__li'>
                            <h2 className='infolist__li title'>Beauty and Salon</h2>
                            <p className='infolist__li p'>The vendors we represent offer a wide range of products in the beauty indsutry:</p>
                            <ul className='productlist'>
                                <li className='productlist__li'>Barber Equipment</li>
                                <li className='productlist__li'>Salon Equipment</li>
                                <li className='productlist__li'>Nail Tech</li>
                                <li className='productlist__li'>Health and Beauty aids</li>
                            </ul>

                        </li>
                        <div className='vl'></div>
                        <li className='infolist__li'>
                            <h2 className='infolist__li title'>Our Territores</h2>
                            <p className='infolist__li p'>We serve the Southeast United States, the Caribbean, Central America and South America.</p>

                        </li>
                    </ul>
                </div>
                <aside className='map'>
                    <img className='imgmap' src={map} />
                </aside>
            </article>

            <article className='about--2'>



            </article>



        </section>
    );
}