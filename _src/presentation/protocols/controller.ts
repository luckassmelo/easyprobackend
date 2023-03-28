import { HttpResponse }from './http'

export interface Controller<T = any>{
    handle: (request: T, params?: T) => Promise<HttpResponse>
}