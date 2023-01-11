import { useParams } from 'react-router-dom'
import alita from '../../assets/img/banner_alita.jpg'
import it from '../../assets/img/banner_it.jpg'
import coraline from '../../assets/img/banner_coraline.jpg'

function banner(){

    const { id } = useParams()

    if (id == '1'){

        return (

            <div id="banner">
    
                <img src={alita} alt="Banner alita" width="100%" height={800}/>
    
            </div>
        )
    }

    else if (id == '2'){

        return (

            <div id="banner">
    
                <img src={it} alt="Banner it" width="100%" height={800}/>
    
            </div>
        )
    }

    else if (id == '3') {

        return (

            <div id="banner">
    
                <img src={coraline} alt="Banner coraline" width="100%" height={800}/>
    
            </div>
        )
    }
}

export default banner