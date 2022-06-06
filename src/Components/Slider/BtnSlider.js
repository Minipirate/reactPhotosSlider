import React from 'react'
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'

export default function BtnSlider({ direction, moveSlide }) {

    return (
        <button button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"
            }> {/*direction est strictement égale à next ? si true alors btn-slide next sinon btn-slide prev */}
            < img src={direction === "next" ? rightArrow : leftArrow} alt="icone flèche" /> {/*Si la direction est next on envoie la fèche droite sinon la gauche */}
        </button >
    )
}
