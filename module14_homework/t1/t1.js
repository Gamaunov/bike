const parser = new DOMParser();
const xmlStringOne = `
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
`
const xmlStringTwo = `
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
`;

const xmlDOMOne = parser.parseFromString(xmlStringOne, "text/xml");
const xmlDOMTwo = parser.parseFromString(xmlStringTwo, "text/xml");

const studentOneNode = xmlDOMOne.querySelector("student");
const nameOneNode = studentOneNode.querySelector("name");
const firstOneNode = studentOneNode.querySelector("first");
const secondOneNode = studentOneNode.querySelector("second");
const ageOneNode = studentOneNode.querySelector("age");
const profOneNode = studentOneNode.querySelector("prof");

const studentTwoNode = xmlDOMTwo.querySelector("student");
const nameTwoNode = studentTwoNode.querySelector("name");
const firstTwoNode = studentTwoNode.querySelector("first");
const secondTwoNode = studentTwoNode.querySelector("second");
const ageTwoNode = studentTwoNode.querySelector("age");
const profTwoNode = studentTwoNode.querySelector("prof");


const langAttrOne = nameOneNode.getAttribute('lang');
const langAttrTwo = nameTwoNode.getAttribute('lang');

const result = {
  list: [
    { name: `${firstOneNode.textContent} ${secondOneNode.textContent}`,
      age: Number(ageOneNode.textContent),
      prof: profOneNode.textContent,
      lang: langAttrOne
    },
    { name: `${firstTwoNode.textContent} ${secondTwoNode.textContent}`,
      age: Number(ageTwoNode.textContent),
      prof: profTwoNode.textContent,
      lang: langAttrTwo
    },

  ]
}
console.log(result);



