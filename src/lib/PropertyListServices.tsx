import { basicFetch, GET } from './FetchService'
import PropertyListItem, {mapObj as MapPropertyListItem} from '../models/PropertyListItem'

export const PROPERTY_LIST_END_POINT = 'https://fieldstone.bungalow.com/api/v1/listings/properties/?market__name=seattle'


export const get = async () => {

  return await basicFetch(PROPERTY_LIST_END_POINT, null, GET)
    .then((response: any) => {
      const propertyList: PropertyListItem[] = [];
      response.data.results.forEach((item: any)=>{
        item && propertyList.push(MapPropertyListItem(item))
      })

      return propertyList;
      // return MapArticleListSection(response);
    })
    .catch((error) => {
        console.log(error);
    })
}
