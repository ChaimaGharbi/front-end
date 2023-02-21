import FavoriteCards from './FavoriteCards.js';
import {data} from '../Data';

export default function Favorites(){
 
        return(
            <div>
               <FavoriteCards products={data} />
            </div>

              )
    
    
}