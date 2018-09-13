'use strict'

const debug = require('debug')('platziverse:db:setup')
const inquirer = require('inquirer')
const chalk = require('chalk')
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
  const config = {
    database: process.env.DB_NAME || 'platziverse',
    username: process.env.DB_USER || 'desarrollador',
    password: process.env.DB_PASSWORD || '1234560',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    setup: true,
    logging: s => debug(s)
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
