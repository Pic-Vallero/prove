$(function() {

    $("#jsGrid").jsGrid({
        height: "70%",
        width: "100%",
        filtering: true,
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 10,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete client?",
        
        data: clients,

        fields: [
            { name: "ID", type: "number", width: 50, filtering: false },
            { name: "Nome", type: "text", width: 150 },
            { name: "Cognome", type: "text", width: 150 },
            { name: "Indirizzo", type: "text", width: 200 },
            { type: "control" }
        ]
    });
    
});