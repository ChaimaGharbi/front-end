import FavoriteCards from '../Components/FavoriteCards.js';
import {data} from '../Components/Data';

export default function Favorites(){
 
        return(
            <div>
               <FavoriteCards products={data} />
            </div>

              )
    
    
}