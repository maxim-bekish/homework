const parse = new DOMParser();
const xmlString = `<list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>`;

const dom = parse.parseFromString(xmlString, "text/xml");

const list = dom.querySelector("list");
const lang = dom.querySelectorAll("name");
const prof = dom.querySelectorAll("prof");
const age = dom.querySelectorAll("age");
const first = dom.querySelectorAll("first");
const second = dom.querySelectorAll("second");

const result = {
  list: [
    {
      name: `${first.item(0).innerHTML} ${second.item(0).innerHTML}`,
      age: age.item(0).innerHTML,
      prof: prof.item(0).innerHTML,
      lang: lang.item(0).attributes.item(0).nodeValue,
    },
    {
      name: `${first.item(1).innerHTML} ${second.item(1).innerHTML}`,
      age: age.item(1).innerHTML,
      prof: prof.item(1).innerHTML,
      lang: lang.item(1).attributes.item(0).nodeValue,
    },
  ],
};
//  я уверен, что тут есть решение лучше, а не вот это вот все)