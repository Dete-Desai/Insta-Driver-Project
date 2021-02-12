export const ONE_HOUR=60*1000*60;
export const TWELVE_HOUR=12*ONE_HOUR;
export const ONE_DAY=2*TWELVE_HOUR;
export const ONE_WEEK=7*ONE_DAY;
export const ONE_MONTH=30*ONE_DAY;
export const ONE_YEAR=12*ONE_MONTH;

export const isWithinDuration=(date,duration)=>{
    var today=new Date().getTime();
     var thatDay=new Date(date).getTime();
     return((Math.abs(today-thatDay)) <duration)
}
