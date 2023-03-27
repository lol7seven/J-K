let daysInSeconds = 86400;

function currentTime () {
    let to = new Date();
    const from = new Date(2022, 9, 24);
    let diff = to - from;
    let pMonths = document.createElement('p');
    let pDays = document.createElement('p')
    let sec = diff / 1000;

    let months = getMonthsBetween(from, to, false);
    pMonths.textContent +=  months + " Months ";

    let days = Math.floor(sec / daysInSeconds);
    pDays.textContent += (days)  + " Days ";

    document.getElementById("out").append(pMonths, pDays)
}

function getMonthsBetween(date1,date2,roundUpFractionalMonths)
{
    //Months will be calculated between start and end dates.
    //Make sure start date is less than end date.
    //But remember if the difference should be negative.
    var startDate=date1;
    var endDate=date2;
    var inverse=false;
    if(date1>date2)
    {
        startDate=date2;
        endDate=date1;
        inverse=true;
    }

    //Calculate the differences between the start and end dates
    var yearsDifference=endDate.getFullYear()-startDate.getFullYear();
    var monthsDifference=endDate.getMonth()-startDate.getMonth();
    var daysDifference=endDate.getDate()-startDate.getDate();

    daysDiff = daysDifference;

    var monthCorrection=0;
    //If roundUpFractionalMonths is true, check if an extra month needs to be added from rounding up.
    //The difference is done by ceiling (round up), e.g. 3 months and 1 day will be 4 months.
    if(roundUpFractionalMonths===true && daysDifference>0)
    {
        monthCorrection=1;
    }
    //If the day difference between the 2 months is negative, the last month is not a whole month.
    else if(roundUpFractionalMonths!==true && daysDifference<0)
    {
        monthCorrection=-1;
    }

    return (inverse?-1:1)*(yearsDifference*12+monthsDifference+monthCorrection);
};

currentTime()