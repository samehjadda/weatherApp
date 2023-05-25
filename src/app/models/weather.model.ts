export interface WeatherData {
    location: Location
    current: Current
  }
  
  export interface Location {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
  }
  
  export interface Current {
    last_updated_epoch: number
    last_updated: string
    temp_c: number
    is_day: number
    condition: Condition
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    humidity: number
    cloud: number
    uv: number
  }
  
  export interface Condition {
    text: string
    icon: string
    code: number
  }
  