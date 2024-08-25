const MealTable = ({ meal }) => {
    
    const ingredients = []

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`]
        const measurement = meal[`strMeasure${i}`]

        if (ingredient && ingredient.trim() !== "") {
            ingredients.push({ingredient, measurement})
            
        }
        
    }

    return (
        <div className="w-1/2 mt-5">
        <table className="table-md table-zebra">
            {/* head */}
            <thead>
            <tr className="text-center">
                <th>No</th>
                <th>Ingredients</th>
                <th>Measurements</th>
            </tr>
            </thead>
            <tbody>
                {ingredients.map((item, index) => (
                    <tr key={index} className="text-center">
                        <th>{index + 1}</th>
                        <td>{item.ingredient}</td>
                        <td>{item.measurement ? item.measurement : "-"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )

}

export default MealTable