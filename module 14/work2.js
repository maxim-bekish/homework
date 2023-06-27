const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

const data = JSON.parse(jsonString);
const obj = {
  list: [
    {
      name: data.list[0].name,
      age: data.list[0].age,
      prof: data.list[0].prof,
    },
    {
      name: data.list[1].name,
      age: data.list[1].age,
      prof: data.list[1].prof,
    },
  ],
};
console.log(data)
console.log(obj)

//  если выводить в консоль, то обект можно по сути не создовать. я протсо переписал готовый обект.
//  И obj, и data одинаково отобразятся в консоли.