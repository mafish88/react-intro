function SingleCoffee(props){
    return (
        <p>{props.title} --- {props.description}</p>
        
    )
}






function CoffeeComponent() {
    const coffeesArray = [
        {title: 'American', description: 'dark tasty yummy coffee'},
        {title: 'pewpewpew', description: 'w00f woof w000fers'},
        {title: 'pewpew', description: 'meow mrrrow meooworrowww'}
       
    ]
    
    coffeesArray.map(() => {})
    
    
    return (
        <div>

        <h2> Coffees component here </h2>
        {coffeesArray.map((oneCoffee) => {
            console.log(oneCoffee)
            
        })}
        <p> each coffee title Americao </p>
        <p> each coffee title pewpewpew </p>
        <p>each coffee title pewpew</p>

        </div>
    )
}

export default CoffeeComponent