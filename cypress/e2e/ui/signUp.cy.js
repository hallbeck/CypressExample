/// <reference types="cypress" />
import config from '../../fixtures/signUp.json'
import { faker } from '@faker-js/faker'

const username = config.username + faker.number.int();
const email = config.emailPrefix + '+' + faker.number.int() + config.emailSuffix;
const password = config.password;
const invalidPassword = config.invalidPassword;

context('SignUp', () => {
  beforeEach(() => {
  })

  it('new user can create an account', () => {
    cy.visit('https://mastodon.social')

    cy.get('.button').contains('Create account').click()
    //verify the ground rules (come back to this)
    //verify what happens when you cancel (come back to this)
    cy.get('.button').contains('Accept').click()
    //verify the copy on this page (come back to this)
    //type in the username, email address, password and confirm password
    cy.get('[aria-label="Username"]').type(username, { delay: 100 })
    cy.get('[aria-label="E-mail address"]').type(email, { delay: 100 })
    cy.get('[aria-label="Password"]').type(password, { delay: 100 })//only requires 8 characters
    cy.get('[aria-label="Confirm password"]').type(password, { delay: 100 })
    //test incorrect password (come back to this)
    //test invalid username
    //test you cannot signup without clicking the agree to policy checkbox
    cy.get('input[type=checkbox]').check()
    cy.get('.btn').contains('Sign up').click()
    //verify you are on a logged in page
    //could do this with cookies I think (get back to this. for now just verify you are on a logged in page.)
    cy.get('.flash-message')
      .should('have.text', '\nWelcome! You have signed up successfully.\n')
    // should check the rest of the page text (come back to this)
    //should check resend confirmation link (come back to this)
    //should verify that the email shown in the paragraph is the email entered above

  })

  it('validate their email', () => {
    //user verifys email.....
    //verify page in mastadon
    //verify I am human checkbox (CAPTCHA) and page contents
    //click continue 
    //verify the login page for a first time just confirmed user:
    // only ahppens after you click the confirm button in the email...
    //cy.get('.flash-message notice')
    //.should('have.text', 'Your email address has been successfully confirmed.')
    //you are now on a login page. (only if you click the email in a different browser than where you signed up 
    //(I clicked the validate email in safari but had made the account for mastadon in chrome))
    //if you are in the same browser you get a page where it says "you made it"
    //cy.get('h3').should('have.text', 'You\'ve made it!')
  })

  it('sign in', () => {
    cy.visit('https://mastodon.social/')

    cy.get('.button').contains('Login').click()
    cy.get('[aria-label="E-mail address"]').type(email, { delay: 50 })
    cy.get('[aria-label="Password"]').type(password, { delay: 50 })//only requires 8 characters
    cy.get('.btn').contains('Log in').click()

  })

  it('publish the message "I\'m now a Mastodonian" to the world', () => {
    cy.visit('https://mastodon.social/')
    cy.get('.button').contains('Login').click()
    cy.get('[aria-label="E-mail address"]').type(email, { delay: 50 })
    cy.get('[aria-label="Password"]').type(password, { delay: 50 })//only requires 8 characters
    cy.get('.btn').contains('Log in').click()
    cy.get('a').contains('Back to Mastadon').click()

    cy.get('.autosuggest-textarea__textarea').type('I\'m now a Mastodonian')
    cy.get('.button').contains('Publish!').click()

    //verify it gets published



  })


})
