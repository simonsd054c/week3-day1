
function generateTable() {
    console.log("Hello World!")

    let books = [
        {
            name: "Book1",
            author: "Author1",
            date: 2022
        },
        {
            name: "Book2",
            author: "Author2",
            date: 2021
        },
        {
            name: "Book3",
            author: "Author3",
            date: 1957
        },
        {
            name: "Book4",
            author: "Author4",
            date: 1852
        }
    ]


    // <table>
        // <tr>
            // <th> <th> <th>
        // <tr>
            // <td> <td> <td>
        // <tr>
            // <td> <td> <td>
        // <tr>
            // <td> <td> <td>
        // <tr>
            // <td> <td> <td>

    
    let table = document.createElement("table")
    let headerRow = document.createElement("tr")

    Object.keys(books[0]).forEach((key) => {
        let tblHeader = document.createElement("th")
        tblHeader.textContent = key
        headerRow.append(tblHeader)
        tblHeader.style.border = "1px solid green"
    })
    table.append(headerRow)

    books.forEach((book) => {
        let tblRow = document.createElement("tr")

        Object.values(book).forEach((value) => {
            let tblData = document.createElement("td")
            tblData.textContent = value
            tblRow.append(tblData)
            tblData.style.border = "1px solid blue"
        })

        table.append(tblRow)
    })

    table.style.border = "1px solid red"

    document.body.append(table)

}