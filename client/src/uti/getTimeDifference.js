export default (prevTimeObj,currentTimeObj)=> {
  const currentTime = currentTimeObj.getTime();
  const prevTime = prevTimeObj.getTime();
  return currentTime - prevTime;
}
