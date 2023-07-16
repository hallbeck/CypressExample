/// <reference types="cypress" />
import config from './api_config.json'
import { faker } from '@faker-js/faker'
describe('API Testing ', function () {
   //let att1
   //let att2  

   it('API - GET details', () => {
       cy.request({
           method: 'GET',
           url: `${config.JSON_POSTS_URL+100}`,//post 100
           failOnStatusCode: false,
       }).as('details')
       //Validate status code
       cy.get('@details').its('status').should('eq', 200)
       cy.get('@details').its('body.title').should('eq', 'at nam consequatur ea labore ea harum')
       cy.get('@details').then((response)=> {
           cy.log(JSON.stringify(response.body.title))
          })
   })

    it('API - POST Request', () => {
       cy.request({
           method: 'POST',
           url: `${config.JSON_POSTS_URL}`,
           failOnStatusCode: false,
           Headers: {
            'Content-type': 'application/json; charset=UTF-8',
           },
           body: {'title':faker.word.sample(),
           'body':faker.animal.cat(),
           'userId':faker.number.int(),}
       }).as('details')
       //Validate status code
       cy.get('@details').its('status').should('eq', 201)
       cy.get('@details').then((response) => {
           cy.log(JSON.stringify(response.body))
       })
          
   })


  /*  it('API - PUT Request', () => {
       cy.request({
           method: 'PUT',
           url: `${config.JSON_POSTS_URL100}`,
           failOnStatusCode: false,
           Headers: {
            'Content-type': 'application/json; charset=UTF-8',
           }}.then((response) => {
           cy.log(JSON.stringify(response.status))
       }))
})

   it('API - DELETE Request', () => {
       cy.request({
           method: 'DELETE',
           url: `${config.JSON_POSTS_URL}`,
           failOnStatusCode: false,
           Headers: {
            'Content-type': 'application/json; charset=UTF-8',
           }}.then((response) => {
           cy.log(JSON.stringify(response.status))
       }))
   }) */ }) 
