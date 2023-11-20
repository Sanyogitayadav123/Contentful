export function formatDate(dateString, options) {
  const inputDate = new Date(dateString)
  if (isNaN(inputDate.getTime())) {
    // Handle invalid date input
    console.error('Invalid date string:', dateString)
    return 'Invalid Date'
  }

  const { format } = new Intl.DateTimeFormat('en-IN', options)
  return format(inputDate)
}
