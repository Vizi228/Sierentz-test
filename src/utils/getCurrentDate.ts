export const getCurrentDate = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    return `${currentYear}-${currentMonth}-${currentDay}`
}
export const getDate = (date: Date | null) => {
    if (date) {
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth() + 1;
        const currentDay = date.getDate();
        return `${currentYear}-${currentMonth}-${currentDay}`
    }
}