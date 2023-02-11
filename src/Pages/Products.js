import ProductCards from 'Components/ProductCards.js';
import {data} from 'Components/Data';
export default function Favorites(){
 
        return(
            <div>
               <ProductCards products={data} />
            </div>

              )
}