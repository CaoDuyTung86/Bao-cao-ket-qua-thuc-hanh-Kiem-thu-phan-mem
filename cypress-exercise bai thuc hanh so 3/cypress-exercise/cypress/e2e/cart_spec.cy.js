describe('Cart Test', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  // Kịch bản 3: Thêm sản phẩm vào giỏ
  it('Should add a product to the cart', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  // Kịch bản 4: Sắp xếp giá từ thấp đến cao
  it('Should sort products by price low to high', () => {
    cy.get('.product_sort_container').select('lohi');
    cy.get('.inventory_item_price').first().should('have.text', '$7.99');
  });

});

it('Should remove product from cart', () => {
  // Thêm sản phẩm
  cy.get('.inventory_item').first().find('.btn_inventory').click();

  // Kiểm tra đã có 1 sản phẩm
  cy.get('.shopping_cart_badge').should('have.text', '1');

  // Nhấn Remove
  cy.get('.inventory_item').first().find('.btn_inventory').click();

  // Kiểm tra badge biến mất
  cy.get('.shopping_cart_badge').should('not.exist');
});

it('Should complete checkout step one successfully', () => {

  // Thêm sản phẩm
  cy.get('.inventory_item').first().find('.btn_inventory').click();

  // Vào giỏ hàng
  cy.get('.shopping_cart_link').click();

  // Nhấn Checkout
  cy.get('#checkout').click();

  // Điền thông tin
  cy.get('#first-name').type('John');
  cy.get('#last-name').type('Doe');
  cy.get('#postal-code').type('12345');

  cy.get('#continue').click();

  // Kiểm tra chuyển sang trang step two
  cy.url().should('include', '/checkout-step-two.html');
});