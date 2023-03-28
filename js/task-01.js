const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.children;

console.log(`Number of categories: ${categoriesItems.length}`);

Array.from(categoriesItems).forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
});