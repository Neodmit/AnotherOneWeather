export type WeatherType = {
  name:string
  wind:{
    speed:number | null
  }
  main:{
    temp:number | null
    humidity:number | null
  }
}
 