export default interface PropertyListItem {
  id: string,
  slug: string,
  headline: string,
  availableRoom: number,
  availableDate: string,
  images: string[],
}

export function mapObj(values: any): PropertyListItem {
  return {
    id: values.id,
    slug: values.slug,
    headline: values.headline,
    availableRoom: values.available_room_count,
    availableDate: values.earliest_available_date,
    images: values.images,
  }
}