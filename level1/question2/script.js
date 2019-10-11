//get json API
(async function () {
let todos = []

    try {
        todos = await fetch('https://jsonplaceholder.typicode.com/todos')

            .then(function (res) {
                return res.json();
            })

        console.log(todos);
    } catch (err) {
        console.log(err);
    }

    document.getElementById('jsonListFalse').innerHTML = loopThroughResults(todos, false);
    document.getElementById('jsonListTrue').innerHTML = loopThroughResults(todos, true);
}());


function loopThroughResults(todos, condition) {

    //filtering the json file

    let filtered = todos.filter(todo => todo.completed === condition)

    //empty string to enter future elements
    let output = '';

    //looping the results
    for (const todo of filtered){

        output += `
        <div class="col-4">
            <div class="card mx-2 my-2">
                <div class="card-body">
                    <h5 class="card-title">${todo.title}</h5>
                    <p class="card-text">Assigned to: ${todo.userId}</p>
                </div>
            </div>
        </div>
        `
        
    }
    return output;
};