
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
  else if(text.startsWith('edit')){
    edit('text');
  }
  else if(text.startsWith('check')){
    check('text');
  }
  else if(text.startsWith('uncheck')){
    uncheck('text');
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
// add
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

// remove
function remove(task){
  let nametask = task.split(" ");
  if(Number(nametask[1])<2){
    listtasks.splice(parseInt(nametask[1]-1), 1);

  }
  else{
    console.log("does not exists")
  }
}
// edit
function edit(text){
  if(text.slice(4).trim() == ""){
    console.log("eror")
  }
  else if(parseInt(text.substring(5))<listtasks.length){
    listtasks[parseInt(text.substring(4))-1]=text.substring(6).trim()
  }
  else if(isNaN(text.substring(4))){
   listtasks.pop()
   listtasks.push(text.slice(4).trim())
  }
  }
  // new task
  var tasklist=["add","remove","commit","push"];
  var tasklist=[{task:"edit",done:true},{task:"add",done:true},{task:"remove",done:false},{task:"list",done:true}];
  // l
  function list(){
    listtasks.map((index)=>{
    console.log(`${listtasks.indexOf(index)+1}-[*]${index}`);
    })
  }
  for (let index = 0; index < listtasks.length; index++) {
    if(listtasks[index].done){
     console.log("[*]"+":"+listtasks[index].task);
    }else{
    console.log("[]"+":"+listtasks[index].task)
   }
 }
 function add(text){

  if(text.slice(3).trim() == "" ){
    console.log('error you must add a task')
  }
  else {
    listtasks.push(text.slice(3).trim())
    listtasks.push({task:text.slice(3).trim(),done:false})
    console.log("added")
    }
}
if(text.slice(4).trim()==""){
  console.log("error")
}
else if(parseInt(text.substring(5))<listtasks.length){
  listtasks[parseInt(text.substring(4))-1]=text.substring(6).trim()
  listtasks[parseInt(text.substring(4))-1].task=text.substring(6).trim()
}
else if(isNaN(text.substring(4))){
  listtasks.pop()
  listtasks.push(text.slice(4).trim())
 listtasks.push({task:text.slice(4).trim()})
}

function check(text){
  if(text.slice(5).trim()==""){
    console.log("error")
  }
  else{
    listtasks[parseInt(text.slice(6).trim())-1].done =true;}}
   
    function uncheck(text){
      if(text.slice(7).trim()==""){
        console.log("error")
      }
      else{
        listtasks[parseInt(text.slice(8).trim())-1].done =false;
      } }