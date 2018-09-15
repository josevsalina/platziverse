'use strict'

const debug = require('debug')('platziverse-db:setup')
const inquirer = require('inquirer')
const chalk = require('chalk')
const config = require('./config-db')()
const db = require('./')

const prompt = inquirer.createPromptModule()

async function setup () {
  const answer = await prompt([
    {
      type: 'confirm',
      name: 'setup',
      message: 'Esto va a destruir la BD, estas seguro??'
    }
  ])

  if (!answer.setup) {
    return console.log('No pasa nada :)')
  }

  await db(config).catch(handleFatalError)
  console.log('Setup DB Success')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
