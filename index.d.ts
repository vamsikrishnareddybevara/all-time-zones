export interface Timezone {
    value: string;
    abbr: string;
    offset: number;
    isdst: boolean;
    text: string;
    utc: string[];
  }
  
  declare const allTimezones: Timezone[];
  
  export default allTimezones;