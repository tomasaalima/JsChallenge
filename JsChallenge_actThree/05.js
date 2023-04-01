const calculateAge = birthday => {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  if (age < 0)
    return 0;
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const media_idade = json => Math.floor(json.map(element => calculateAge(`${element.nascimento.substring(3, 5)}-${element.nascimento.substring(0, 2)}-${element.nascimento.substring(6, 10)}`)).reduce((count, element) => count += element) / Object.keys(json).length);




