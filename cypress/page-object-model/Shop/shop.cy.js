export const getStartShopping = () => cy.get('a[class="btn btn-success btn-large"]')

export const getStuffedFrog = () => cy.get('[id=product-2]').children().contains('Buy')
export const getFluffyBunny = () => cy.get('[id=product-4]').children().contains('Buy')
export const getValentineBear = () => cy.get('[id=product-7]').children().contains('Buy')

export const getAddToCart = () => cy.get('a[href="#/cart"]')

export const getStuffedFrogPrice = () => cy.get('[class="cart-item ng-scope"]').eq(0).find('[class="ng-binding"]').eq(1)
export const getFluffyBunnyPrice = () => cy.get('[class="cart-item ng-scope"]').eq(1).find('[class="ng-binding"]').eq(1)
export const getValentineBearPrice = () => cy.get('[class="cart-item ng-scope"]').eq(2).find('[class="ng-binding"]').eq(1)

export const getStuffedFrogSubtotal = () => cy.get('[class="cart-item ng-scope"]').eq(0).find('[class="ng-binding"]').eq(2)
export const getFluffyBunnySubtotal = () => cy.get('[class="cart-item ng-scope"]').eq(1).find('[class="ng-binding"]').eq(2)
export const getValentineBearSubtotal = () => cy.get('[class="cart-item ng-scope"]').eq(2).find('[class="ng-binding"]').eq(2)

export const getTotal = () => cy.get('[class="total ng-binding"]')