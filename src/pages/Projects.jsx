import React from 'react'
import Card from '../components/projects/Card'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { NavColorContext } from '../context/Navcontext'

const Projects = () => { 

  const cardImg = [
    {
      img1:"https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
      img2:"https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022"
    },
    {
      img1:'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47',
      img2:'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996'
    },
    {
      img1:'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
      img2:'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda'
    },
    {
      img1: 'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821',
      img2:'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Featured.jpg?w=1200&h=1920&s=b6128a058cfa913791364f5d8814e9a8'
    },
    {
      img1:'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757',
      img2:'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479'
    },
    {
      img1:'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
      img2:'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14'
    },
    {
      img1:'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124',
      img2:'https://k72.ca/images/caseStudies/OSM/thumbnail_OSM_1280.jpg?w=1280&h=960&s=968b0d5b6e3ac3b7ab84c1706efd4377'
    }
  ]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.from('.card',{
      height:'100px',
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger:'.card-parent',
        // markers:true,
        start:'top 100%',
        end:'top -150%',
        scrub:true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2'>
      <div className='pt-[40vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl text-black uppercase'>Projets</h2>
      </div>
      <div className='-lg:mt-12 card-parent'>
        {cardImg.map((img,idx)=>{
          return <div key={idx} className='card w-full lg:h-95  mb-4 flex lg:flex-row flex-col lg:gap-3 gap-1.5'>
            <Card imgs={img}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects
