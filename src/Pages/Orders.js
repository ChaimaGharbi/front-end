import OrderCards from '../Components/OrderCards.js';
import {data} from '../Components/Data';
export default function Favorites(){
 
        return(
            <div>
               <OrderCards products={data} />
            </div>

              )
    
    
}