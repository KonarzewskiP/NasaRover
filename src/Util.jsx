import moment from 'moment';

export const calculateFinalTime = (lunchDate, endDate) => {
    let end = new Date(endDate).getTime();
    let start = new Date(lunchDate).getTime();
    if (endDate === '') {
        end = moment();
    }

    let duration = end - start;
    let seconds = moment.duration(duration).seconds();
    let minutes = moment.duration(duration).minutes();
    let hours = moment.duration(duration).hours();
    let days = moment.duration(duration).days();
    let months = moment.duration(duration).months();
    let years = moment.duration(duration).years();

    return `${years}years 
    ${months < 10 ? "0" + months : months}months 
    ${days < 10 ? "0" + days : days}days 
    ${hours < 10 ? "0" + hours : hours}h 
    ${minutes < 10 ? "0" + minutes : minutes}min 
    ${seconds < 10 ? "0" + seconds : seconds}s`;
}

export const convertDate = (date) => {

    let seconds = moment(date).seconds();
    let minutes = moment(date).minutes();
    let hours = moment(date).hours();
    let days = moment(date).days();
    let months = moment(date).month();
    let years = moment(date).year();

    return `${years}/${months < 10 ? "0" + months : months}/${days < 10 ? "0" + days : days} 
    ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

export const calculateMaxSols = (maxSol) => {
    if (maxSol === '') {
        let start = new Date("2011-11-26T15:02:00").getTime();
        return moment().diff(start, 'days');
    }
    return maxSol;
}
