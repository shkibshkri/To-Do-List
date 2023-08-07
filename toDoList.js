function addRow()
{
    let table = document.getElementById("table");
    let newRow = table.insertRow(1);
    let newCell = newRow.insertCell(0);
    newCell.colSpan = "2";

    let item = inputTask();

    if(item.length > 16)
    {
        if(confirm("Warning: Your task is too long. It might not work well!") === true)
        {
            newCellDetail(newCell, item);
        } else 
        {   
            document.getElementById("task").value = "";
        }
    } else if(item.length <= 16)
    {
        newCellDetail(newCell, item);
    }
} 

function inputTask()
{
    let task = document.getElementById("task").value;
    return task;
}

function newCellDetail(newCell, item)
{
    newCell.innerHTML = `<input type="checkbox" class="checkboxStyle" onclick="lineThrough(this)">
                            <img src="images/trash.svg" class="trashStyle" onclick="deleteTask(this)">
                            <img src="images/pencil-svgrepo-com.svg" class="pencilStyle" onclick="editTask(this)">
                            <div>${item}</div>
                        </input>`                 
    
    document.getElementById("task").value = "";
}

function lineThrough(line)
{
    let i = line.parentNode.parentNode;
    (i.style.textDecoration === "line-through") ? (i.style.textDecoration = "none") : (i.style.textDecoration = "line-through");
    i.classList.toggle("lineThroughStyle");
}

function deleteTask(row)
{
    let i = row.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}

function editTask(task)
{
    let newTask = prompt("Please enter your new task: ");
    let i = task.nextSibling.nextSibling;

    if(newTask === null)
    {
        return;
    } else 
    {
        i.innerHTML = newTask;
    }
} 