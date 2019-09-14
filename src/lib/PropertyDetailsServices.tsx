import { basicFetch, GET } from './FetchService'
import PropertyDetails, {mapObj as MapPropertyDetails} from '../models/PropertyDetails'

export const PROPERTY_DETAILS_END_POINT = 'https://fieldstone.bungalow.com/api/v1/listings/properties'


export const get = async (slug: string) => {
  const endpointURL = `${PROPERTY_DETAILS_END_POINT}/${slug}/`

  return await basicFetch(endpointURL, null, GET)
    .then((response: any) => {
      return MapPropertyDetails(response.data);
      // return MapArticleListSection(response);
    })
    .catch((error) => {
        console.log(error);
    })
}