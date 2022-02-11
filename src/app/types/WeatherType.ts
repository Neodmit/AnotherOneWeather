export type WeatherType = {
  name?:string
  wind:{
    speed?:number 
  }
  main:{
    temp?:number
    humidity?:number
  }
}
 