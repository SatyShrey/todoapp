var inputButton=document.getElementById('inputButton');
var notes=[];
var id;
var inputValue;
var notesContainer;
inputButton.addEventListener('click',()=>{
    inputValue=document.getElementById('inputBox');
    if(inputValue.value===''){
        alert('Enter note inside the textbox.');
    }else{
        if(inputButton.textContent==='Add'){
            var newNote={
                Text:inputValue.value,
                Date:new Date().toLocaleDateString(),
                Time:new Date().toLocaleTimeString(),
                id:Date.now()
            }
            notes.push(newNote);
            notesContainer=document.getElementById('notes');
            notesContainer.textContent=''

            notes.forEach(note=>{
                var div=document.createElement('div');
                div.setAttribute('class','noteCard');
                div.innerHTML=`<p class='note'>${note.Text}</p>
                <p class="time">Created on:${note.Date},${note.Time}</p>
                <button class='delete' onclick='Delete(${note.id})'>❌</button>
                <button class='edit' onclick="Edit(${note.id})">🖋️</button>
                `;
               notesContainer.appendChild(div);
            })
            inputValue.value='';
        }else if(inputButton.textContent==='Update'){
            for(var x in notes){
                if(notes[x].id===id){
                    notes[x].Text=inputValue.value;
                    inputButton.textContent='Add';
                    notesContainer.textContent=''
                    notes.forEach(note=>{
                        var div=document.createElement('div');
                        div.setAttribute('class','noteCard');
                        div.innerHTML=`<p class='note'>${note.Text}</p>
                        <p class="time">Created on:${note.Date},${note.Time}</p>
                        <button class='delete' onclick='Delete(${note.id})'>❌</button>
                        <button class='edit' onclick="Edit(${note.id})">🖋️</button>
                        `;
                       notesContainer.appendChild(div);
                    })
                    inputValue.value='';
                }
            }
        }
    }
});

function Delete(a){
    var condition=confirm('Are you sure to delete?');
    if(condition===true){
        for(var x in notes){
            if(notes[x].id===a){
                notes.splice(x,1);
                notesContainer.textContent=''
                notes.forEach(note=>{
                    var div=document.createElement('div');
                    div.setAttribute('class','noteCard');
                    div.innerHTML=`<p class='note'>${note.Text}</p>
                    <p class="time">Created on:${note.Date},${note.Time}</p>
                    <button class='delete' onclick='Delete(${note.id})'>❌</button>
                    <button class='edit' onclick="Edit(${note.id})">🖋️</button>
                    `;
                   notesContainer.appendChild(div);
                })
            }
        }
    }
}

function Edit(a){
    id=a;
    for(var x in notes){
        if(notes[x].id===a){
            inputValue.value=notes[x].Text;
            inputValue.focus();
            inputButton.textContent='Update';
        }
    }
}