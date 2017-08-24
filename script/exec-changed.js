#!/usr/bin/env node

const util = require('util')
const fs = require('fs')
const os = require('os')
const childProcess = require('child_process')
const { spawn } = childProcess
const exec = util.promisify(childProcess.exec)

class FileFinder {
  constructor(extensions) {
    this.extensions = extensions
  }

  async find() {
    const touched = await this.getTouched()
    const filtered = this.filterByExtension(touched)

    return filtered.filter(fs.existsSync)
  }

  async getTouched() {
    const { stdout } = await exec('git diff refs/remotes/origin/master --name-only')
    return stdout.replace(new RegExp(os.EOL, 'g'), ' ').split(' ')
  }

  filterByExtension(files) {
    if (this.extensions.length === 0) return files

    const capture = this.extensions.join('|')
    const pattern = new RegExp(`.*\\.(${capture})$`)
    return files.filter(file => pattern.test(file))
  }
}

function getArgumentOptions() {
  const options = process.argv.slice(2)
  const [extensions, command, ...args] = options
  return {
    extensions: extensions.split(','),
    command,
    args,
  }
}

;(async function() {
  try {
    const { extensions, command, args } = getArgumentOptions()

    if (!command) {
      console.error(`No command specified`)
      process.exit(1)
    }

    const files = await new FileFinder(extensions).find()

    if (files.length === 0) {
      process.exit(0)
    }

    spawn(command, [...args, ...files], { shell: true, stdio: 'inherit' })
  } catch (error) {
    process.exit(1)
  }
})()
