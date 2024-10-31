 async function sendHttpRequest(url: string, config: RequestInit){
    const response = await fetch(url, config);
    const respData = await response.json();
    if (!response.ok) {
      throw new Error(respData.message || `Something went wrong, failed to the request!`);
    }
    
    return respData;
}

export default function useHttp(){
    return {sendHttpRequest}
}