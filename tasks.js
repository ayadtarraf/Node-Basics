
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.trim().startsWith("hello ")|| text.trim()==="hello"){
    hello(text.trim()+'!');
  }
  else if(text === 'help\n'){
    help();
  }
  else if (text === 'list\n'){
    list();
  }
  else if(text.startsWith("add") ){
    let nametask =text.split(' ')[1]
    if (nametask!==undefined){
      add(text);
    }
    else {
      add('add')
    }
  } else if(text.trim().startsWith("remove")){
   remove(text);
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(input) {
  const words = input.split(" ");
  var outputString;
  if (words.length > 1){
    outputString = input.replace("hello", `${words[0]}`,1)

  }
  else{
    outputString=input;
  }
  outputString=outputString.trim();
  console.log(outputString)
}
  



/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Ayad tarraf")

//  help gives commands

function help(){
  console.log('quit or exit,exit')
  console.log('hello,for hello')
  console.log('hello name,for hello name')

}
let listtasks=['strat','command','by']
function list(){
  for(let i=0;i<listtasks.length;i++){
    console.log(`${i+1}. ${listtasks[i]}`)
  }
 
}
function add(task){
  let nametask = task.split(' ')[1];
  if(task === 'add'){
    console.log('error')
  }
  else if(nametask !== undefined){
    listtasks.push(nametask);
    console.log('added task');
  }
}


function remove(task){
  let nametask = task.split(" ");
  listtasks.splice(parseInt(nametask[1]-1), 1);
}