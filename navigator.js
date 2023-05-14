//Класс, записывающий нынешнюю позицию и высчитывающий маршрут по 4м направлениям
class Map{
  //В конструктор записывается нынешняя позиция (up, left)
  constructor(u,l){
  this.u=u,
  this.d=0-u,
  this.l=l,
  this.r=0-l
  }
  //Команды для передвижений
  goUp(){
    this.u+=1,
    this.d-=1
  }
  goDown(){
    this.u-=1,
    this.d+=1
  }
  goLeft(){
    this.l+=1,
    this.r-=1
  }
  goRight(){
    this.r+=1,
    this.l-=1
  }
    //Команда для просмотра позиции
  showMap(){
    return `Current position:\n     UP:${this.u}\nLEFT:${this.l}    RIGHT:${this.r}\n     DOWN:${this.d}`
  }
  //Команда для ряда передвижений в виде атрибутов, (u,d,l,r) - направления.
  going(...pos){
    let time = 0;
    for(let i of pos){
      i === 'u' ? this.goUp() :
      i === 'd' ? this.goDown() :
      i === 'l' ? this.goLeft() :
      i === 'r' ? this.goRight() :
      'Wrong coordinate'
      time+=1
    }
    return this.showMap() + `\nPath time: ${time} mins`
}
    //Команда для проверки, вернетеьс ли вы в конце пути.

    shouldIReturn(...pos){
      let defaultPos = {
        u:this.u,
        d:this.d,
        l:this.l,
        r:this.r
      }
      this.going(...pos)
      return this.u===defaultPos.u && this.l===defaultPos.l && this.r===defaultPos.r && this.d===defaultPos.d ? 'You will return': 'You will not return!'
       
    }
    //Команда для проверки, вернетесь ли вы в конце пути, и вовремя ли (время в минутах,направления через запятую)
    shouldIReturnInTime(time, ...pos){
      let defaultPos = {
        u:this.u,
        d:this.d,
        l:this.l,
        r:this.r
      }
      this.going(...pos)
      let timer = 0
      timer += pos.length
      return this.u===defaultPos.u && this.l===defaultPos.l && this.r===defaultPos.r && this.d===defaultPos.d && timer <= time? 'You will return in time': 'You will not return in time!'
       
    }
}


//Ниже - простанство для теста

let newMap = new Map(2,4)

console.log('\n\nTest "going":')
console.log(newMap.going('u','d','u','d'))
console.log(newMap.going('r','r','d','d','d','d'))


console.log('\n\nTest "shouldIReturn":')
console.log(newMap.shouldIReturn('u','d','u','d'))
console.log(newMap.shouldIReturn('u','d','u','r'))


console.log('\n\nTest "shouldIReturnInTime":')
console.log(newMap.shouldIReturnInTime(4,'u','d','u','d'))
console.log(newMap.shouldIReturnInTime(3,'u','d','u','d'))


/**Test "going":
Current position:
     UP:2
LEFT:4    RIGHT:-4
     DOWN:-2
Path time: 4 mins
Current position:
     UP:-2
LEFT:2    RIGHT:-2
     DOWN:2
Path time: 6 mins


Test "shouldIReturn":
You will return
You will not return!


Test "shouldIReturnInTime":
You will return in time
You will not return in time! */