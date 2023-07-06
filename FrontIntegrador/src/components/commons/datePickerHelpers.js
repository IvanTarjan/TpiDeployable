export const getDaysArray = function (start, end) {
    for (var arr = [], date = new Date(start); date <= new Date(end); date.setDate(date.getDate() + 1)) {
        let tempDate = new Date(date)
        arr.push(`${tempDate.getFullYear()}/${tempDate.getMonth() + 1}/${tempDate.getDate()}`);
    }
    return arr;
};

export const hasOverlappingDays = (selectedDates, disabledDates) => {
    let bool = false;
    selectedDates.forEach(day => {
        if (disabledDates.includes(day.format("YYYY/M/D"))) {
            bool= true;
        }
    })
    return bool
}
