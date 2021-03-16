let name = "k8805";
let letter =
  "Dear" +
  name +
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. \n Facere beatae, aspernatur nam omnis excepturi commodi pariatur accusantium sit adipisci eius amet iste doloremque facilis tenetur, laboriosam optio expedita recusandae. Neque.";

letter = `Dear ${name} Lorem ipsum, dolor sit amet consectetur adipisicing elit.
   Facere beatae, aspernatur nam omnis excepturi commodi pariatur accusantium sit 
   adipisci eius amet iste doloremque facilis tenetur, laboriosam optio expedita recusandae. ${
     1 + 1
   }Neque.`;
console.log(letter);
