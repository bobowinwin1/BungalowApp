import Amenity, {mapObj as mapAmenity} from './Amenity'
import roomInfo, {mapObj as mapRoomInfo} from './RoomInfo'

export default interface PropertyDetails {
  id: string,
  slug: string,
  amenities: Amenity[],
  descriptionHtml: string,
  numBathrooms: number,
  matterportUrl: string,
  rooms: roomInfo[],
}

export function mapObj(values: any): PropertyDetails {
  return {
    id: values.id,
    slug: values.slug,
    amenities: values.amenities.map(mapAmenity),
    descriptionHtml: values.description_html,
    numBathrooms: values.num_bathrooms,
    matterportUrl: values.matterport_url,
    rooms: values.rooms.map(mapRoomInfo),
  }
}