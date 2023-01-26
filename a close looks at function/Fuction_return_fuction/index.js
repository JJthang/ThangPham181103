//! Functions Returning Functions
const helloGus = (MyName) => {
  return (HisName) => console.log(`${MyName} and his name is ${HisName}`);
};
//todo :  we have two solution
//! 1 :
const Person1 = helloGus("Pham thang");
Person1("Pham Tai");

//! 2 :
helloGus("Thang Pham")("Tai Pham");
