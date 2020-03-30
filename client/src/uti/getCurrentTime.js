export default () =>{
  const now = new Date();

  return {
    year:now.getFullYear(),
    month:now.toLocaleString('default',{month:'long'}),
    date:now.getDate(),
    hour:now.getHours(),
    minute:now.getMinutes(),
    second:now.getSeconds(),
    now
  }
}
