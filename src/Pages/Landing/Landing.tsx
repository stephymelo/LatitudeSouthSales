import * as React from 'react';
import bg from "../../Resources/bgbanner.png";


interface Landing {
    
}

export const Landing: React.FC<Landing> = () => {
    const styles: React.CSSProperties = {
        backgroundImage: bg,
      };
    return (
        <section className='landing'>
            <article className='landing__article--1' style={styles}>
                <h1>Welcome to <br/> Latitude South Sales</h1>
                <h2>Manufacturers specialists representing professional beauty brands throughout Southeast United States, Caribbean,Central and South America</h2>


            </article>
            <article className='landing__article--2'>

                <article className='info'>
                    <div className='image'>

                    </div>
                    <h2>Manufacturer Representation</h2>
                    <p>
                    Latitude has been representing manufacturerer for over 3 decades and has taken the act of representing to a new level. We build partnerships between the brand and the distributor and we also have new brand partners that will attest to the success we have created.

                    </p>
                </article>
                

            </article>


        </section>

    );
}