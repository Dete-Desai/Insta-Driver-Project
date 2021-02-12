export const handleFilterErrors = (string, array) => {
    return array.filter((s) => new RegExp(string, "ig").test(s)).reduce((acc,err)=> {
      acc[string]=err
      console.log("acc err ",acc);
      return acc
    },{});
  };
  