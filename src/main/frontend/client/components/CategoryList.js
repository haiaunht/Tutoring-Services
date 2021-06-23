import React, {useState, useEffect} from "react";
import CategoryTile from "./CategoryTile";

const CategoryList = props => {
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    try {
      const response = await fetch(`/api/v1/categories`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }

      const  responseBody = await response.json()
      setCategories(responseBody)
      console.log(responseBody)
    } catch (error) {
      console.log(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  const listOfCategories = categories.map( category => {
    return (
        <CategoryTile
          key={category.id}
          id={category.id}
          categoryName={category.categoryName}
          categoryDes={category.description}
          img={category.image}
        />
    )
  })

  return (
      <>
        <h3>Welcome to AStudy! Here is our Category of the Course</h3>
        {listOfCategories}
      </>
  )
}

export default CategoryList