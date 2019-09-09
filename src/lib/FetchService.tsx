import Errors from '../Errors'
import axios from 'axios'

export const POST = 'POST'
export const GET = 'GET'

export const PROPERTY_LIST_END_POINT = 'https://fieldstone.bungalow.com/api/v1/listings/properties/?market__name=seattle'

export const basicFetch = async (endpoint: string, body: any, method: string) => {
  if(method === GET){
    return axios.get(
      endpoint,
      body
    )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    })
  }else if (method === POST){
    return axios.post(
      endpoint,
      body
    )
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    })

  }else {
    console.log('Error: Unknown Type')
  }

  // return fetch(endpoint, {
  //   body,
  //   method,
  //   headers: { Accept: 'application/json' },
  // })
  //   .then((response: any) => response.json()
  //     .then((jsonData: any) => ({
  //       ok: response.ok,
  //       json: jsonData,
  //       url: response.url,
  //       status: response.status,
  //     })),
  //     (error: any) => {
  //       console.log('Base Service Error:')
  //       console.log(error)
  //       throw error
  //     },
  //   )
  //   .then((json: any) => {
  //     if (json === undefined) {
  //       return {
  //         status: 500,
  //         message: Errors.unknown,
  //       }
  //     }

  //     return json
  //   })
}
