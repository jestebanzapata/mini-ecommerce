import Card from '@/components/molecules/Card/Card';
import useSWR from 'swr'
import { StyledHome } from './Home.style';

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const fetcher = url => fetch(url).then(r => r.json())

export default function HomePage() {

  const { data: response, error } = useSWR(`${STRAPI_API_URL}/products?populate=*`, fetcher);
  
  if(error){
    <span>Error loading data</span>
  }

  let priceCo = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
});

  return (response && 
    <StyledHome>
      {
        response.data.map(({id, attributes: { name, description, price, image}}) => {

          const productImages = image.data.map(({attributes: {url}}) => url);
          return <Card key={`product${id}`} id={id} title={name} description={description} aditionalData={priceCo.format(price)} image={productImages[0]}/>
        })
      }
    </StyledHome>
  )
}
