
export default interface Amenity {
  availabilityDate: string
  id: string
  images: any[]
  name: string
  price: string
  residentShortName: string
  sqft: number
}
  
export function mapObj(values: any): Amenity {
  return {
    availabilityDate: values.availability_date,
    id: values.id,
    images: values.images,
    name: values.name,
    price: values.price,
    residentShortName: values.resident_short_name,
    sqft: values.sqft,
  }
}
