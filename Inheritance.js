class company {
  constructor(Name , age, company) {
    this.empoly = Name
    this.age = age
    this.company = company

//    this.company =(companyName + "Redbytes software")
    console.log(Name + "Redbytes software" );

  }
  info(){
    // super.info();
    // console.log(this.empoly +" "+"is a Employee of IT company.");
   console.log(`
        Employee
        name : ${this.empoly} 
        +
        age : ${this.age}
       +        company : ${this.company}`
    )
  }
  // this is info is a prototype Method
}

// जावास्क्रिप्ट वंशानुक्रम एक तंत्र है जो हमें पहले से मौजूद classes के आधार पर नई classes बनाने की अनुमति देता है। यह child के parent class के methods और variables का पुन: उपयोग करने के लिए flexibility प्रदान करता है।

// जावास्क्रिप्ट के extends keyword  का उपयोग एक parent class के आधार पर एक child class बनाने के लिए किया जाता है। यह child class को अपने parent class के सभी गुणों और व्यवहार को प्राप्त करने की सुविधा प्रदान करता है।

class means extends company {
//     constructor(name,Positions) {
//         super()
//         console.log( "Cloud Expert software");
//         this.name = name
//         this.Positions = Positions
// }

info(){
    // let salary = 99990/-
    console.log(`
        Employee
        name : ${this.empoly} 
        +
        age : ${this.age}
       +        company : ${this.company}
  
    `)
}
}
let a = new means( "Justin" , "23" ,"Tech software" );
a.info()
console.log(a);
let c = new means( "smith" , "32" ,"Mind software" );
c.info()
console.log(c);


// console.log(a.name + "" +"Position:"+ "" +a.Positions +""+ "companyName:"+ "" + a.company);
// let b = new means("Infosys");
// console.log(b);


// याद रखने लायक पॉइंट्स
// यह IS-A relationship रखता है।
// extends कीवर्ड का उपयोग क्लास एक्सप्रेशन या क्लास डिक्लेरेशन में किया जाता है।
// extends कीवर्ड का इस्तेमाल करके हम, हम इनबिल्ट ऑब्जेक्ट के साथ-साथ custom classes के सभी गुणों और व्यवहार को प्राप्त कर सकते हैं।
// हम inheritance प्राप्त करने के लिए एक प्रोटोटाइप-आधारित दृष्टिकोण का भी उपयोग कर सकते हैं।