import React,{useState ,useEffect} from 'react'
import {motion} from 'framer-motion'
import {images} from "../../constants"
import './about.scss'
import { urlFor,client } from '../../client'
import {AppWrap} from '../../wrapper'

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
  
    const query ='*[_type=="abouts"]'

    client.fetch(query)
              .then((data)=>setAbouts(data))

  }, [])
  
  // const abouts =[
  //   {title:'Web Development',description:"I am a good web developer.",imgUrl:images.about01},
  //   {title:'Web Design',description:"I am a good web designer.",imgUrl:images.about02},
  //   {title:'UI/UX',description:"I am a good web developer.",imgUrl:images.about03},
  //   {title:'Web Animations',description:"I am a good web developer.",imgUrl:images.about04},

  // ]
  return (
    // <div id="about" >About</div>
    
    <>
      <h2 className='head-text'>
        I know that
        <span>Good Design</span>
        <br/>
        means
        <span>Good Business</span>

      </h2>
      <div className="app__profiles">
          {abouts.map((about,i)=>(
            <motion.div
              whileInView ={{opacity:1}}
              whileHover={{scale:1.1}}
              transition={{duration:0.5,type:'tween'}}
              className='app__profile-item'
              key={about.title+i}
            >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
          ))}
      </div>
    
    </>
  )
}

export default AppWrap(About,'about')