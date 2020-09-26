export const reduceParagraphLength = (paragraph,length) =>{
  return paragraph.split(' ').slice(0,length).join(' ');
}
