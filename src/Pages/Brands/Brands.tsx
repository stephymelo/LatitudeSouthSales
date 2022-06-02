import * as React from 'react';
import cuccio from "../../Resources/Logos/cuccio.png";
import robanda from "../../Resources/Logos/robanda.png";
import fisk from "../../Resources/Logos/fisk.png";
import gamma from "../../Resources/Logos/gamma.png";
import keracolor from "../../Resources/Logos/keracolor.png";
import body from "../../Resources/Logos/body.png";
import chemco from "../../Resources/Logos/chemco.png";
import depileve from "../../Resources/Logos/deplieve.png";
import style from "../../Resources/Logos/style.png";


interface Brands {
}

export const Brands: React.FC<Brands> = () => {
    return (
        <section className='brands'>
            <div className='brands__info'>

                <h1 className='title'>Brands and Partners</h1>
                <hr></hr>

                <h2 className='subtitle'>Here you can find our brands and partners pages</h2>
            </div>

            <article className='brands__images'>
                <div className='brands__images--1'>
                <img className='img cuccio' src={cuccio}/>
                <img className='img style' src={style}/>
                <img className='img body' src={body}/>
                </div>

                <div className='brands__images--2'>
                <img className='img gamma' src={gamma}/>
                <img className='img' src={keracolor}/>
                <img className='img' src={fisk}/>
                </div>

                <div className='brands__images--3'>
                <img className='img' src={chemco}/>
                <img className='img' src={robanda}/>
                <img className='img' src={depileve}/>
                </div>
            </article>

        </section>
    );
}