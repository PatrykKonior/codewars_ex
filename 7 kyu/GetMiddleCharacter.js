function getMiddle(s)
{
  if (s.length % 2 === 0) {
    return s.substr(s.length/2-1, 2);
  } else {  
    return s.charAt(Math.floor(s.length/2));      
 }    
}