export async function getCocktailList() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
  const result = await response.json()
  return result
}
