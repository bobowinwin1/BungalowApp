
export default interface Amenity {
    name: string,
    type: string,
  }
  
  export function mapObj(values: any): Amenity {
    return {
      name: values.display_name,
      type: values.type,
    }
  }