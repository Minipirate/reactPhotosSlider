import React, { useState } from 'react'
import './Slider.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'


export default function Slider() {

    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    })

    const nextSlide = () => {
        if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) { //est-ce que 1 est strictement différent de 5 qui est la longueur du tableau dataSlider qui contient 5 imgs?
            setSlideAnim({
                index: slideAnim.index + 1, //ici on change le state (slideAnim) donc ça va maj
                inProgress: true
            })
            setTimeout(() => {
                setSlideAnim({ index: slideAnim.index + 1, inProgress: false })
            }, 400) //au bout de 400 millisecondes (0,4 sec) on renvoie un setSlideAnim et on envoie notre objet indexSlideAnim. index +1 et inProgress on le repasse à false pour autoriser de nouveau une animation
        }
        else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) { //si on arrive à la fin des 5 imgs
            setSlideAnim({
                index: 1, //donc ici si l'index est à 1 ça signifie qu'on le remet au début 
                inProgress: true
            })
            setTimeout(() => {
                setSlideAnim({ index: 1, inProgress: false })
            }, 400)

        }
    }

    const prevSlide = () => {
        if (slideAnim.index !== 1 && !slideAnim.inProgress) {
            setSlideAnim({
                index: slideAnim.index - 1, inProgress: true
            })

            setTimeout(() => {
                setSlideAnim({ index: slideAnim.index - 1, inProgress: false })
            }, 400)
        }
        else if (slideAnim.index === 1 && !slideAnim.inProgress) {
            setSlideAnim({ index: 5, inProgress: true })
            setTimeout(() => {
                setSlideAnim({ index: 5, inProgress: false })
            }, 400)
        }
    }

    const moveDot = index => {
        setSlideAnim({ index: index, inProgress: false }) //pour pouvoir directement cliquer sur les dots que l'on souhaite et non pas uniquement dans l'ordre de base
    }

    return (

        <div className='container-slider'>
            <h1>Pictures by Thomas Pesquet !</h1>

            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideAnim.index === index + 1 ? //si 1 = 1 c'est true et donc on donne la classe à l'élé slide
                            "slide active-anim" : "slide"} //classe css active-anim en opacity 1 pour que l'on puisse voir l'image qui correspond à l'index en cours
                    // et si c'est false ils auront juste la classe Slide avec une opacity à 0 donc on ne les verra pas
                    >
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="" />

                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className='container-dots'>
                {Array.from({ length: 5 }).map((item, index) => { //creation d'un array de longueur 5 sur lequel on va mapper
                    return <button className={slideAnim.index === index + 1 ? "dot active" : "dot"}
                        onClick={() => moveDot(index + 1)}></button>
                })}
            </div>
        </div>
    )
}