// udent> db.student.find()
// [
//   {
//     _id: ObjectId('65f96b101ceb9c47dd8bf202'),
//     srn: 110,
//     sname: 'Rahul',
//     degree: 'BCA',
//     sem: 6,
//     CGPA: 7.9,
//     studentId: 101
//   },
//   {
//     _id: ObjectId('65f96b101ceb9c47dd8bf203'),
//     srn: 111,
//     sname: 'Amal',
//     degree: 'BCOM',
//     sem: 5,
//     CGPA: 8,
//     studentId: 102
//   },
//   {
//     _id: ObjectId('65f96b101ceb9c47dd8bf204'),
//     srn: 112,
//     sname: 'Reshin',
//     degree: 'BCA',
//     sem: 6,
//     CGPA: 7,
//     studentId: 103
//   },
//   {
//     _id: ObjectId('65f96b101ceb9c47dd8bf205'),
//     srn: 113,
//     sname: 'Athul',
//     degree: 'BTECH',
//     sem: 6,
//     CGPA: 7.5,
//     studentId: 104
//   },
//   {
//     _id: ObjectId('65f96b101ceb9c47dd8bf206'),
//     srn: 114,
//     sname: 'Amaya',
//     degree: 'BSC',
//     sem: 3,
//     CGPA: 9,
//     studentId: 105
//   },
//   {
//     _id: ObjectId('65f96b101ceb9c47dd8bf207'),
//     srn: 115,
//     sname: 'Haarin',
//     degree: 'BSC',
//     sem: 8,
//     CGPA: 5,
//     studentId: 106
//   },
//   {
//     _id: ObjectId('65f96b101ceb9c47dd8bf208'),
//     srn: 116,
//     sname: 'Aneesha',
//     degree: 'BCA',
//     sem: 7,
//     CGPA: 9,
//     studentId: 107
//   },
//   {
//     _id: ObjectId('65f96b101ceb9c47dd8bf209'),
//     srn: 117,
//     sname: 'Nithin',
//     degree: 'BCOM',
//     sem: 6,
//     CGPA: 7,
//     studentId: 108
//   },
//   {
//     _id: ObjectId('65f96b101ceb9c47dd8bf20a'),
//     srn: 118,
//     sname: 'Navya',
//     degree: 'MBBS',
//     sem: 5,
//     CGPA: 8,
//     studentId: 109
//   },
//   {
//     _id: ObjectId('65f96b101ceb9c47dd8bf20b'),
//     srn: 119,
//     sname: 'Amrutha',
//     degree: 'BTECH',
//     sem: 3,
//     CGPA: 8.000000000000002,
//     date: ISODate('2024-04-23T12:54:22.737Z'),
//     studentId: 110
//   }
// ]
// student>

// 1.Write an aggregation query to calculate the average CGPA for students in each degree.
// student> db.student.aggregate([{$group:{_id:"$degree",average:{$avg:"$CGPA"}}}])

// 2. Using the $project stage, write a query to display sname, degree, and a new field called CGPA_Percentage, which is CGPA multiplied by 10.
// student> db.student.aggregate([{$project:{sname:1,degree:1,_id:0,CGPA_Percentage:{$multiply:["$CGPA",10]}}}])

// 3.Write a query to filter out students whose CGPA is less than 8 and sort the result by their sem in descending order.
// student> db.student.aggregate([{$match:{CGPA:{$lt:8}}},{$sort:{sname:-1}}])

// 4.Write an aggregation query to find the student with the highest CGPA.
// student> db.student.aggregate([{$sort:{CGPA:-1}},{$limit:1}])

// 5.Write a query to find students who are in the BCA degree or have a CGPA greater than 8.
// student> db.student.find({$or:[{"degree":"BCA"},{"CGPA":{$gt:8}}]})

// 6.Write a query to find all students whose names start with "N".
// student> db.student.find({sname:{$regex:'^N',$options:'i'}})
// endwith a
// student> db.student.find({sname:{$regex:'A$',$options:'i'}})


// 7.Write a query to update all students in the BCOM degree to have a sem of 7.
// student> db.student.updateMany({degree:"BCOM"},{$set:{sem:7}})

// 8.Write a query to delete a student whose studentId is 108.
// student> db.student.deleteOne({studentId:110})
// { acknowledged: true, deletedCount: 1 }


// 9.Write a query to find students whose date field exists in the document.

// student> db.student.find({date:{$exists:true}})

// 10.Insert a new student with today's ISODate. Then, write a query to find students who were added in the last 30 days.
// student> db.student.find({date:{$gte:new Date(new Date().setDate(new Date().getDate()-30))}})

// 11.Write an aggregation query to group students by their sem and count the number of students in each group.
// student> db.student.aggregate([{$group:{_id:"$sem",count:{$sum:1}}}])

// student> db.student.aggregate([{$group:{_id:"$sem",count:{$sum:1}}},{$project:{sem:"$_id",count:1,_id:0}}])


// 12.Write a query to add a new field called performance to each student based on their CGPA:

// Excellent if CGPA >= 9
// Good if CGPA >= 7 and CGPA < 9
// Average otherwise

// student> db.student.aggregate([{$addFields:{performance:{$cond:{if:{$gte:["$CGPA",9]},then:"Excellent",else:{$cond:{if:{$and:[{$gte:["$CGPA",7]},{$lt:["$CGPA",9]}]},then:"Good",else:"Average"}}}}}}])
// 

// 13.Using $lookup, write a query to join the student data with another collection (e.g., courses) where studentId matches studentId in the courses collection.
// student> db.student.aggregate([{$lookup:{from:"courses",localField:"studentId",foreignField:"studentId",as:"course_details"}}])

// student> db.student.aggregate([{$lookup:{from:"courses",localField:"studentId",foreignField:"studentId",as:"course_details"}},{$unwind:"$course_details"},{$project:{sname:1,"course_details.course":1,"course_details.professor":1,_id:0}}])
// [
//   {
//     sname: 'Rahul',
//     course_details: { course: 'Maths', professor: 'Aneesha' }
//   },
//   {
//     sname: 'Amal',
//     course_details: { course: 'Physics', professor: 'Johnson' }
//   },
//   { sname: 'Reshin', course_details: { professor: 'Leo' } }

// 2. Query to Find Students Who Have a Degree of BCA and CGPA Between 7 and 8, or Students Who Have BTECH and CGPA Above 8
// student> db.student.find({$or:[{degree:"BCA",CGPA:{$gte:7,$lte:7}},{degree:"BTECH",CGPA:{$gt:8}}]})



// capped collection===========================
// db.createCollection("student", {
//     capped: true,
//     size: 5242880, // 5 MB
//     max: 100       // Maximum of 100 documents
// });

// ====================bulk write=================================

// student> db.courses.bulkWrite([
//     ...   {
//     ...     updateOne: {
//     ...       filter: { studentId: 102 },
//     ...       update: { $set: { professor: 'Dr. Johnson' } }  // Updating professor name for studentId 102
//     ...     }
//     ...   },
//     ...   {
//     ...     updateOne: {
//     ...       filter: { studentId: 103 },
//     ...       update: { $set: { professor: 'Dr. Leo' } }  // Correcting typo in 'Chemistry' professor name
//     ...     }
//     ...   },
//     ...   {
//     ...     insertOne: {
//     ...       document: {
//     ...         studentId: 105,
//     ...         course: 'Biology',
//     ...         professor: 'Dr. Smith'
//     ...       }
//     ...     }
//     ...   }
//     ... ]);
//     {
//       acknowledged: true,
//       insertedCount: 1,
//       insertedIds: { '2': ObjectId('674854cbee3655161bd14a0e') },
//       matchedCount: 2,
//       modifiedCount: 2,
//       deletedCount: 0,
//       upsertedCount: 0,
//       upsertedIds: {}
//     }

db.student.aggregate([
    {
      $facet: {
        countStudent: [
          {
            $group: {
              _id: "$degree",
              count: { $sum: 1 } // Count of students per degree
            }
          }
        ],
        average: [
          {
            $group: {
              _id: "$degree",
              average: { $avg: "$srn" } // Ensure 'srn' is numeric
            }
          }
        ]
      }
    }
  ]);
  // 1.start with letter r
// student> db.student.find({sname:{$regex:'^r',$options:i}})
// last letter student> db.student.find({sname:{$regex:'n$',$options:'i'}})
// second letter student> db.student.find({sname:{$regex:'^.u',$options:'i'}})
// second last letter student> db.student.find({sname:{$regex:'i.$',$options:'i'}})

// second large srn student> db.student.find().sort({srn:-1}).skip(1).limit(1)
// second large using aggregate student> db.student.aggregate([{$sort:{srn:-1}},{$skip:1},{$limit:1}])
// multipley cgpa by 1.2 for sem gte 8 student> db.student.updateMany({sem:{$gte:8}},{$mul:{"CGPA":1.2}}) 

// create view
// student> db.createView('newView','student',[{$project:{name:1}}])
// { ok: 1 }
// student> db.newView.find()
