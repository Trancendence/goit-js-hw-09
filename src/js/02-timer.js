import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datatime-picker');
const fp = flatpickr(input);
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

const btnStart = document.querySelector('.js-btnStart');
input.addEventListener('change', getDayX)

const startTime = Date.now();
console.log('startTime', startTime);

setInterval(() => {
    const currentTime = Date.now();
    const ms = selectedDates - Date.now();
    const timeComponents = convertMs(ms);
    if (timeComponents < 1000) {
        setInterval = 0;
    }
    console.log('timeComponents:', timeComponents);
}, 1000);

function getDayX() {
    const selectedDate = Date.now(input.value);
    console.log('selectedDate:', selectedDate)
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
 