// const company = {
//     name: "Tech Solutions Inc.",
//     departments: {
//       IT: {
//         employees: [
//           {
//             id: 101,
//             name: "Alice",
//             role: "Software Engineer",
//             projects: [
//               { projectId: "P001", name: "Website Redesign", status: "Completed" },
//               { projectId: "P002", name: "Mobile App", status: "In Progress" }
//             ],
//             personalDetails: {
//               email: "alice@techsolutions.com",
//               phone: "123-456-7890",
//               address: { city: "San Francisco", state: "CA" }
//             }
//           },
//           {
//             id: 102,
//             name: "Bob",
//             role: "DevOps Engineer",
//             projects: [
//               { projectId: "P003", name: "Server Migration", status: "Completed" }
//             ],
//             personalDetails: {
//               email: "bob@techsolutions.com",
//               phone: "987-654-3210",
//               address: { city: "New York", state: "NY" }
//             }
//           }
//         ]
//       },
//       HR: {
//         employees: [
//           {
//             id: 201,
//             name: "Eve",
//             role: "HR Manager",
//             projects: [],
//             personalDetails: {
//               email: "eve@techsolutions.com",
//               phone: "555-123-4567",
//               address: { city: "Los Angeles", state: "CA" }
//             }
//           }
//         ]
//       }
//     },
//     location: "Global",
//     founded: 2010
//   };


//   function uniqueCities(company){
//     let arr = new Set()
//     for(let dep in company.departments){
//         company.departments[dep].employees.forEach(emp => {
//             arr.add(emp.personalDetails.address.city)
//         });
//     }
//     console.log(arr)
//   }
//   uniqueCities(company)

  const library = {
    name: "City Library",
    address: "123 Library Lane",
    books: [
      { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", available: true },
      { id: 2, title: "1984", author: "George Orwell", available: false },
      { id: 3, title: "Moby Dick", author: "Herman Melville", available: true }
    ],
    staff: [
      { id: 101, name: "Alice", role: "Librarian" },
      { id: 102, name: "Bob", role: "Assistant" }
    ]
  };

let arr =[]
  for(let i=0;i<library.books.length;i++){
    arr.push(library.books[i].title)
  }
  console.log(arr)

let count = library.books.map(book=>book.title)
console.log(count)

let value =[]
let ans = library.books.forEach(book=>value.push(book.title))
console.log(value)