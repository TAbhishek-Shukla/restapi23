const product = require("../models/product")

const getAllProducts= async(req,res)=>{
const {company,name,featured,sort,select}= req.query;
const queryObj={};

if(company){
  queryObj.company=company
}
if(featured){
  queryObj.featured=featured
}

 if(name){
   queryObj.name={$regex: name, $options: "i"}
}

let apiData= product.find(queryObj);

if(sort){
  let sortData= sort.split(',').join(' ');
  apiData= apiData.sort(sortData);
}
if(select){
  let sortData= select.split(',').join(' ');
  apiData= apiData.select(sortData);
}
//pagination
let page= Number(req.query.page) || 1;
let limit= Number(req.query.limit) || 4;

let skip= (page-1) * limit;

apiData= apiData.skip(skip).limit(limit);
 
  const myData= await apiData
  res.status(200).json({myData, nbHits: myData.length})
}

const getAllProductsTesting= async(req,res)=>{
  const {company,name,featured,sort,select}= req.query;
  const queryObj={};
  
  if(company){
    queryObj.company=company
  }
  if(featured){
    queryObj.featured=featured
  }
  
   if(name){
     queryObj.name={$regex: name, $options: "i"}
  }
  
  let apiData= product.find(queryObj);
  
  if(sort){
    let sortData= sort.split(',').join(' ');
    apiData= apiData.sort(sortData);
  }
  if(select){
    let sortData= select.split(',').join(' ');
    apiData= apiData.select(sortData);
  }
  //pagination
  let page= Number(req.query.page) || 1;
  let limit= Number(req.query.limit) || 4;
  
  let skip= (page-1) * limit;
  
  apiData= apiData.skip(skip).limit(limit);
   
    const myData= await apiData
    res.status(200).json({myData, nbHits: myData.length})
}
module.exports= {getAllProducts,getAllProductsTesting};