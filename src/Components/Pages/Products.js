import ProductCards from '../ProductCards.js';
import {data} from '../Data';
export default function Favorites(){
 
        return(
            <div>
               <ProductCards products={data} />
            </div>

              )
}