

// Event Object kya hota hai?
//  Jab bhi koi event hota hai (click, submit, keypress, etc),
//  browser ek object (data ka bundle) banata hai us object ko kehte hain event object
form.addEventListener("submit", function(event){
   console.log(event)
});
// Yaha pr event hi event object ha


// event.target → kis element pe event laga

// event.type → kaunsa event (click, submit)

// event.preventDefault() → default behavior rokta hai yani page ko reload krna se rokta ha
form.addEventListener("submit", function(dets){
   dets.preventDefault();
});

