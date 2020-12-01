//сoздание узла с помощью createElement

const titleRef = document.createElement('h3')

console.log (titleRef)

titleRef.textContent = 'i will do this fucking JS!'

console.log (titleRef)

titleRef.classList.add('site-title')
console.log (titleRef)

{/* <div>
      <h2>хуемое</h2>
      <p>Think about the size of the team you led, the number of projects you balanced, or the number of articles you wrote.</p>
      <p>Цена: 2000</p>
    </div> */}

const product = {
    name: 'хуемое',
    description: 'Think about the size of the team you led, the number of projects you balanced, or the number of articles you wrote.',
    price: 2000,
    available: true,
}

const containerRef = document.createElement('div')
containerRef.classList.add('product-card')
console.log (containerRef)

const productTitleRef = document.createElement('h4')
productTitleRef.classList.add('product-description')
productTitleRef.textContent = product.name
console.log (productTitleRef)

const descriptionRef = document.createElement ('p')
descriptionRef.textContent = 'hink about the size of the team you led, the number of projects you balanced, or the number of articles you wrote'
console.log (descriptionRef)

const priceRef = document.createElement ('p');
priceRef.textContent = ` Цена: ${product.price} кредитов`
console.log (priceRef)

//добавление элемента в другой с помощью append ()

// containerRef.appendChild(productTitleRef);
// containerRef.appendChild (descriptionRef);
// containerRef.appendChild (priceRef)

containerRef.append(productTitleRef, descriptionRef, priceRef)
console.log (containerRef);