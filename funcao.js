/*alert("")
let foo = prompt('Type here');
let bar = confirm('Confirm or deny');
console.log(foo, bar);*/

var a = localStorage.getItem('a');

if(a == null){
    a = 0;
    localStorage.setItem('a',a);
}



function cadtar(){

    a = localStorage.getItem('a');

    while(true){
        
        var titulo = window.prompt("Nome da Tarefa (brigatorio):");
        
        
        if(titulo.length > 0){
            break;
        }
    }

    
    var descri = window.prompt("Descricao da Tarefa (opcional):");
    var data = window.prompt("Data de realizacao (opcional) ex: DD/MM/YYYY");

    let key1 = "titulo"+a;
    let key2 = "descri"+a;
    let key3 = "data"+a;

    localStorage.setItem(key1,titulo);
    localStorage.setItem(key2,descri);
    localStorage.setItem(key3,data);
    
    a ++;
    localStorage.removeItem('a')
    localStorage.setItem('a',a);
}

function constar(){
    a = localStorage.getItem('a');
    
    let corpo = "";

    for ( let i = 0, len = a; i < len; i++ ) {
    
        let key1 = "titulo"+i;
        let key2 = "descri"+i;
        let key3 = "data"+i;
            
        
        var valor1 = localStorage.getItem(key1);
        var valor2 = localStorage.getItem(key2);
        var valor3 = localStorage.getItem(key3);
        
        corpo+=`<tr><td>${valor1}</td><td>${valor2}</td><td>${valor3}</td></tr>`; 
        
    }
  
    valor1 = ""; 
    valor2 = ""; 
    valor3 = ""; 
    tabela.innerHTML = [
        '<table>',
        '<thead>',
        '<tr>',
        '<th>Tarefa</th>',
        '<th>Descrição</th>',
        '<th>Data</th>',
        '</tr>',
        '</thead>',
        '<tbody>',
        corpo,
        '</tbody>',
        '</table>'
    ].join("\n");
    
}

function atuatar(){
    a = localStorage.getItem('a');
    var s2 = true;
    
    let key = window.prompt("Digite o nome da Tarefa a ser atualizada:");
    


    
    
    for(let i = 0, len = a; i < len; i++){
        let key1 = "titulo"+i;
        let key2 = "descri"+i;
        let key3 = "data"+i;

        var valor1 = localStorage.getItem(key1);


        if(key == valor1){

            let bar1 = confirm('Deseja alterar o nome da tarefa ?');
            
            if(bar1){
                while(true){
        
                    var valor2 = window.prompt("Novo nome da Tarefa (brigatorio):");
                
                
                    if(valor2.length > 0){
                        break;
                    }
                }
                
            }
            else{
                var valor2 = localStorage.getItem(key1);
            }

            let bar = confirm('Deseja alterar a descrição e data ?');
            
            if(bar){
                var valor3 = window.prompt("Nova descricao da Tarefa (opcional):");
                var valor4 = window.prompt("Nova data de realizacao (opcional) DD/MM/YYYY");
            }
            else{
                var valor3 = localStorage.getItem(key2);
                var valor4 = localStorage.getItem(key3);
            }

            localStorage.removeItem(key1);
            localStorage.removeItem(key2);
            localStorage.removeItem(key3);

            localStorage.setItem(key1,valor2);
            localStorage.setItem(key2,valor3);
            localStorage.setItem(key3,valor4);

            s2 = false
            alert("Tarefa atualizada com sucesso");
        }
    }
    if(s2){
        alert("Tarefa não existe");
    }

}

function apatar(){
    a = localStorage.getItem('a');


    let key = window.prompt("Digite o nome da Tarefa a ser removida:");
    var s2 = true;
    var s = false;

    for(let i = 0, len = a; i < len; i++){
        let key1 = "titulo"+i;
        let key2 = "descri"+i;
        let key3 = "data"+i;

        var valor1 = localStorage.getItem(key1);
        var valor2 = localStorage.getItem(key2);
        var valor3 = localStorage.getItem(key3);

        if(key == valor1){

            localStorage.removeItem(key1);
            localStorage.removeItem(key2);
            localStorage.removeItem(key3);
            
            localStorage.removeItem('a');
            
            a--
            
            localStorage.setItem('a', a);

            s = true
            s2 = false
            alert("Tarefa removida com sucesso");
        }
        
        if(s){
            let c = i+1;
            key1 = "titulo"+(c);
            key2 = "descri"+(c);
            key3 = "data"+(c);
        
            valor1 = localStorage.getItem(key1);
            valor2 = localStorage.getItem(key2);
            valor3 = localStorage.getItem(key3);
            
            if(valor1 != null){
                localStorage.removeItem(key1);
                localStorage.removeItem(key2);
                localStorage.removeItem(key3);
        
                key1 = "titulo"+i;
                key2 = "descri"+i;
                key3 = "data"+i;
                
                localStorage.setItem(key1,valor1);
                localStorage.setItem(key2,valor2);
                localStorage.setItem(key3,valor3);
            }
        }
    }
    if(s2){
        alert("Tarefa não existe");
    }
}

/*  
    localStorage.clear()
    localStorage.setItem('titulo0', 'suly');
    localStorage.setItem('descri0', 'comida');
    localStorage.setItem('data0', 15);
    
    localStorage.setItem('titulo1', 'bebe');
    localStorage.setItem('descri1', 'banho');
    localStorage.setItem('data1', 16);
    
    localStorage.setItem('titulo2', 'pai');
    localStorage.setItem('descri2', 'pesca');
    localStorage.setItem('data2', 14);
    
    localStorage.setItem('titulo3', 'mãe');
    localStorage.setItem('descri3', 'remédio');
    localStorage.setItem('data3', 13);

    localStorage.removeItem('a')
    localStorage.setItem('a',4);

*/