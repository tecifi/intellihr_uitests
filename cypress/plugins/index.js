const fs = require('fs');
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  on('task', {
    // Read file directory and check if it is empty.
    fileCheck({dirname}) {
      return new Promise((resolve, reject) => {
        fs.readdir(dirname, (err, files) => {
          if (err || files.length < 1) {
            return reject(err)
          }
          resolve(null)
        }
        )
      }
      )
    }
  }
  )
}