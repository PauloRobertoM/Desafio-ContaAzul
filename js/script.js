var app = new function() {
    this.el = document.getElementById('carros');
    this.carros = [{firstName:"John", lastName:"Doe", age:"46"}, {firstName:"Paul", lastName:"Has", age:"16"}];
    this.Count = function(data) {
        var el   = document.getElementById('counter');
        var name = 'carro';
        if (data) {
            if (data > 1) {
                name = 'carros';
            }
            el.innerHTML = data + ' ' + name ;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };

    this.FetchAll = function() {
        var data = '';
        if (this.carros.length > 0) {
            for (i = 0; i < this.carros.length; i++) {
                data += '<tr>';
                data += '<td>' + Object.values(this.carros[i].firstName) + '</td>';
                data += '<td>' + Object.values(this.carros[i].lastName) + '</td>';
                data += '<td>' + Object.values(this.carros[i].age) + '</td>';
                data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }
        this.Count(this.carros.length);
        return this.el.innerHTML = data;
    };

    this.Add = function () {
        el = document.getElementById('add-name');
        var carro = el.value;
        if (carro) {
            this.carros.push(carro.trim());
            el.value = '';
            this.FetchAll();
        }
    };

    this.Edit = function (item) {
        var el = document.getElementById('edit-name');
        el.value = this.carros[item];
        document.getElementById('spoiler').style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function() {
            var carro = el.value;
            if (carro) {
                self.carros.splice(item, 1, carro.trim());
                self.FetchAll();
                CloseInput();
            }
        }
    };
    
    this.Delete = function (item) {
        this.carros.splice(item, 1);
        this.FetchAll();
    };
}

app.FetchAll();
function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}