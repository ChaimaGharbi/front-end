import OrderCards from '../OrderCards.js';
import {data} from '../Data';
export default function Favorites(){
 
        return(
            <div>
               <OrderCards products={data} />
            </div>

              )
    
    
}