const str =
    `template-creator <command>

Create template

Commands:
  template-creator microservice  Create microservice template
  template-creator dictionary  Create dictionary template
  template-creator model  Create model template

Options:
  -h, --help     Show help  [boolean]
  -V, --version  Show version number  [boolean]
  -v, --verbose  Verbose output information  [boolean] [default: false]
`
/**
 * 
 * @param {String} help 
 * @returns {String[]}
 */
const getCommands = help => {
    const cliName = help.match(/(.*)\s<command>/)[1]
    const comReg = new RegExp(`${cliName}\\s(.*?)\\s`, 'g')
    const commands = help.match(comReg).slice(1).map(str => str.concat('--help'))
    return commands
}

const commands = getCommands(str);
console.log(commands);