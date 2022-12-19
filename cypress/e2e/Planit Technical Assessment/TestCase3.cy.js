import { 
  getStartShopping,
  getStuffedFrog,
  getFluffyBunny,
  getValentineBear,
  getAddToCart,
  getStuffedFrogPrice,
  getFluffyBunnyPrice,
  getValentineBearPrice,
  getStuffedFrogSubtotal,
  getFluffyBunnySubtotal,
  getValentineBearSubtotal,
  getTotal,
} from "../../page-object-model/Shop/shop.cy"

describe('Test Case 3', () => {
  // Initialize Variables
    let stuffedFrogPrice = 0.0, fluffyBunnyPrice = 0.0, valentineBearPrice = 0.0
    let stuffedFrogQty = 0, fluffyBunnyQty = 0, valentineBearQty = 0

    beforeEach(() => {
        cy.fixture('shop').then(function (shop) {
          stuffedFrogPrice = shop.stuffedFrog.price
          stuffedFrogQty = shop.stuffedFrog.quantity
          
          fluffyBunnyPrice = shop.fluffyBunny.price
          fluffyBunnyQty = shop.fluffyBunny.quantity
          
          valentineBearPrice = shop.valentineBear.price
          valentineBearQty = shop.valentineBear.quantity
        })
    })

    it('Verify Products Added to Cart', () => {
        // Visit "Jupiter Toys" Home Page
        cy.visit('http://jupiter.cloud.planittesting.com/')

        // Click "Start Shopping"
        getStartShopping().contains("Start Shopping").click()

        // Buy 2 "Stuffed Frog"
        for (let i = 1; i<=stuffedFrogQty; i++) {
          getStuffedFrog().click()
        }

        // Buy 5 "Fluffy Bunny"
        for (let i = 1; i<=fluffyBunnyQty; i++) {
          getFluffyBunny().click()
        }

        // Buy 3 "Valentine Bear"
        for (let i = 1; i<=valentineBearQty; i++) {
          getValentineBear().click()
        }

        // Go to "Cart" Page
        getAddToCart().click()

        // Calculate
        const stuffedFrogSubTotal = stuffedFrogPrice * stuffedFrogQty
        const fluffyBunnySubTotal = fluffyBunnyPrice * fluffyBunnyQty
        const valentineBearSubTotal = valentineBearPrice * valentineBearQty
        const total = stuffedFrogSubTotal + fluffyBunnySubTotal + valentineBearSubTotal

        // Verify Price for Each Product
        getStuffedFrogPrice().should('contains.text', '$' + stuffedFrogPrice)
        getFluffyBunnyPrice().should('contains.text', '$' + fluffyBunnyPrice)
        getValentineBearPrice().should('contains.text', '$' + valentineBearPrice)

        // Verify Subtotal for Each Product
        getStuffedFrogSubtotal().should('contains.text', '$' + stuffedFrogSubTotal)
        getFluffyBunnySubtotal().should('contains.text', '$' + fluffyBunnySubTotal)
        getValentineBearSubtotal().should('contains.text', '$' + valentineBearSubTotal)

        // Verify Total
        getTotal().should('contains.text', 'Total: ' + total)
  })
})