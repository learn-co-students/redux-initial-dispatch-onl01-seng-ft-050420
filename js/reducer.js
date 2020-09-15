//let state = {count: 0};
let state;//state is undefined at this point

function changeState(state = {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
    //to access our state's value in the key value pair we need to use 
    //state.count
    //state returns {count: 0}
    //state.count returns 0
}

function render(){
  //debugger
    document.body.textContent = state.count
}
//javascript gives us a chance to pass default arguments into functions so we can
//give our changestate function reducer a default value

//render() // if you call this at the bottom the original state of 0 will show up
dispatch({ type: '@@INIT' })
//the switch will return whatever state that was passed into the changeState() function
//then rebder will be called