import { Ref, ref } from 'vue';

export type ApiRequest=()=>Promise<void>
export interface UseableApi <T> {
  response: Ref<T | undefined>;
  request:ApiRequest
}

function useApi<T>(url:RequestInfo, options?:RequestInit) {
  const response: Ref<T | undefined> = ref();
   const request = async () => {
     const res = await fetch(url, options)
     const data = await res.json();
     response.value=data
  }
  return {
    request,
    response
  }
}
export {useApi}