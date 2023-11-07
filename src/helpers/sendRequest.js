
export default async function sendRequest (url){
  const respond = await fetch(url);
  const result = await respond.json();
  return result;
}
