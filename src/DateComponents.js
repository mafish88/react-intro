function DateComponent(){
    console.log('test')
  const myDate = new Date()
  const today = myDate.getDay()
  const year = myDate.getFullYear()
  const month = myDate.getMonth()
  const weekday = myDate.getDay()
  console.log(today) // in return only JSX lives

return (
        <div>
               Today is day:{today}
        <br />
        Weekday: {weekday}

        <br />

        Year: {year}
        <br />
        {`${month}/${today}/${year}`}



        </div>
    )

}

export default DateComponent