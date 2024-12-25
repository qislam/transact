
function transact(amount, sourceNumber, targetNumber) {
  if (localStorage.getItem(sourceNumber) === null) {
    throw new Error('Source account does not exist');
  }
  if (localStorage.getItem(targetNumber) === null) {
    throw new Error('Target account does not exist');
  }
  
  if (parseFloat(localStorage.getItem(sourceNumber)) < amount) {
    throw new Error('Insufficient funds');
  }

  setAccount(sourceNumber, parseFloat(localStorage.getItem(sourceNumber)) - amount);
  setAccount(targetNumber, parseFloat(localStorage.getItem(targetNumber)) + amount);

}

function setAccount(name, balance) {
  localStorage.setItem(name, balance);
}

function getAccount(name) {
  return parseFloat(localStorage.getItem(name));
}
