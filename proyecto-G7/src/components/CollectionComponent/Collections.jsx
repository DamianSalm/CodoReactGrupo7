import "./Collections.css";
import { Link } from 'react-router-dom'
import useFetch from "../../useFetch";


const Collections = () => {
    const {data} = useFetch('http://localhost:3000/licenses')
    console.log(data)
    return (
        <main className="main-container">
            {
                data?.map((licen) => {
                    const licence = {
                        id: licen.licence_id,
                        name: licen.licence_name,
                        description: licen.licence_description,
                        img: licen.licence_image,
                        imgAlt: licen.licence_image_alt_text
                    }

                    return (
                    <section key={licence.id} className="collection container">
                        <article className="collection__content">
                            <h3 className="collection__title">{licence.name}</h3>
                            <p className="collection__text">{licence.description}</p>
                            <Link className="collection__link">VER COLECCIÓN</Link>
                        </article>
                        <picture className="collection__cover">
                            <img src={licence.img} alt={licence.imgAlt} />
                        </picture>
                    </section>
                    )
                })
            }
    </main>
    )
}

export default Collections