export function snackEmoji (name:string){
  switch(name.toLowerCase()){
    case 'burguer':
      return '🍔'
    case 'desserts':
      return '🍭'
    case 'drinks':
      return '🥤'
    case 'pizzas':
      return '🍕'
    default:
      return '🔍👀'
  }
}
