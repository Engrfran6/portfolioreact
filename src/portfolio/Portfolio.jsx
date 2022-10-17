import "./portfolio.css"

import IMG1 from "../assets/portfolio1.jpg"
import IMG2 from "../assets/portfolio2.jpg"
import IMG3 from "../assets/portfolio3.jpg"
import IMG4 from "../assets/portfolio4.jpg"
import IMG5 from "../assets/portfolio5.png"
import IMG6 from "../assets/portfolio6.jpg"

const data = [
  {
    id: 1,
    images: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-Visualization"
  },

  {
    id: 2,
    images: IMG2,
    title: 'Crypto Currency Dashboard',
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-Visualization"
  },

  {
        id: 3,
    images: IMG3,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-Visualization"
  },

  {
        id: 4,
    images: IMG4,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-Visualization"
  },

  {
        id: 5,
    images: IMG5,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-Visualization"
  },

  {
        id: 6,
    images: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-Currency-Dashboard-and-Financial-Visualization"
  }
]


export default function Portfolio() {
  return (
    <section id="porfolio">
      <h5>Projects Done</h5>
      <h2>My Portfolio</h2>

        <div className="container portfolio_container">
      
         {data.map(  ( {id, images, title, github, demo} )=> {
            return(
          <article key={id} className="portfolio_content">
            <div className="portfolio_image">
              <img src={images} alt="" />
            </div>
            <h4>{title}</h4>
            <div className="portfolio_link">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
            );
            })}
        </div>
   </section>
  );
}





    