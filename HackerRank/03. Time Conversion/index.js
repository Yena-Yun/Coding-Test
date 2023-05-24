function timeConversion(s) {
  let hour = Number(s.slice(0, 2));
  const time = s.slice(0, s.length - 2);
  const pmam = s.slice(-2);

  if (pmam === 'PM' && hour > 0 && hour < 12) {
    hour += 12;
    return time.replace(time.slice(0, 2), String(hour));
  } else if (pmam === 'AM' && hour === 12) {
    hour -= 12;
    return time.replace(time.slice(0, 2), String('0' + hour));
  } else return time;
}

const s = '12:40:22AM';

console.log(timeConversion(s));