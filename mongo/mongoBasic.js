// 1. alias
// it is in aggreation project we can give our own names in stead of exsiting
// eg:
// employee> db.employee.aggregate([{$project:{employeeName:"$ename",department:"$dept",_id:0}}])
// [
//   { employeeName: 'Rahul', department: 'production' }
//2. employee> db.department.find({department:{$in:['developer','software']}})
// 3.employee> db.department.find({$and:[{department:'software'},{mark:{$gte:90}}]})
// 4. employee> db.department.find({$nor:[{department:'software'},{mark:{$gt:90}}]})
// 5.employee> db.department.count({key:"secret"})
// 5.employee> db.department.countDocuments({key:"secret"})
// 6.employee> db.department.find().sort({name:1})
// 7.employee> db.department.find({},{mark:1,_id:0,name:1})
// [
//   { name: 'aneesha', mark: 99 },
//   { name: 'vini', mark: 90 },
//   { name: 'amal', mark: 92 },
//   { name: 'sajad', mark: 95 }
// employee> db.department.updateMany({},{$pull:{CGPA:{$nin:['tag1','tag2']}}})
// employee> db.department.updateMany({},{$push:{CGPA:'tag5'}})
// 9.add new array to a collection
// employee> db.department.updateMany({},{$set:{Passed:['English']}})
// employee> db.department.updateMany({},{$unset:{CGPA:""}})
// employee> db.department.updateMany({},{$push:{CGPa:{$each:['tag1','tag2']}}})

// 8.addFields
// student> db.student.aggregate([{$addFields:{total:{$multiply:['$srn',10]}}}])

