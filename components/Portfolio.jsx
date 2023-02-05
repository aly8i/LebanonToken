import styles from '../styles/Portfolio.module.css';
import IMG1 from '../public/gd.jpg';
import IMG2 from '../public/ba.jpg';
import IMG3 from '../public/es.jpg';
import IMG4 from '../public/ma.jpg';
import IMG5 from '../public/mis.jpg';
import IMG6 from '../public/wa.jpg';
import Image from 'next/image';

//data
const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Fast Delivery Graphic Desgin Solutions ',
        github: 'https://github.com',
        demo: "https://dribbble.com/Alien_pixels"
    },
    {
        id: 2,
        image: IMG2,
        title: 'Detail Oriented Business Flow Automation',
        github: 'https://github.com',
        demo: "https://dribbble.com/Alien_pixels"
    },
    {
        id: 3,
        image: IMG3,
        title: 'High Quality Ecommerce Store Setup',
        github: 'https://github.com',
        demo: "https://dribbble.com/Alien_pixels"
    },
    {
        id: 4,
        image: IMG4,
        title: 'Mobile Application Development',
        github: 'https://github.com',
        demo: "https://dribbble.com/Alien_pixels"
    },
    {
        id: 5,
        image: IMG5,
        title: 'Reactive Managment Information Systems',
        github: 'https://github.com',
        demo: "https://dribbble.com/Alien_pixels"
    },
    {
        id: 6,
        image: IMG6,
        title: 'Web Application Development',
        github: 'https://github.com',
        demo: "https://dribbble.com/Alien_pixels"
    }
    
]
function Portfolio() {
    return (
        <div className={styles.portfolio}>
            <section id='portfolio'>
                <div className={`${styles.container} ${styles.portfolioContainer}`}>
                    {
                        data.map(({id,image,title,github,demo}) => {
                            return (
                                <article key={id} className={styles.portfolioItem}>
                                    <div className={styles.portfolioItemiImage}>
                                        <Image className={styles.image} width={200} height={200} src={image} alt={title} />
                                    </div>
                                    <h3>{title}</h3>
                                </article>
                                );
                        })
                    }
                </div>
            </section>
        </div>
    );
}
export default Portfolio;