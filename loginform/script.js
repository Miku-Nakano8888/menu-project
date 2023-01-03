let logplate = document.querySelector(".logplate");
let login = document.querySelector(".login");
let foreror = document.querySelector(".foreror"); //con for errors
let inputs = document.querySelectorAll("input[data-rule]"); //нахождение всех input'ов с 'data-rule'
console.log(inputs);

let users = [
  //массив уже созданных пользователей
  { username: "admin", userpass: "swjat1kgod" },
  { username: "swjat", userpass: "onpr0st0krut" },
  { username: "annja", userpass: "t1ml1d1k" },
  { username: "j", userpass: "hzctoet0" },
];

class NewUser {
  //класс создающий новых пользователей
  constructor() {
    alert("создан новый юзер");
    this.username = inputs[0].value;
    this.userpass = inputs[1].value;
  }
}

//*variables for validation
let cl = false;
let cp = false;
let checklog;
let checkpass;
let value;
let alreadyСreatedUser = 0;
let qw;

//* testi na sowpadenia
let testnasowpadenia = () => {
  console.log("идет проверка на совпадения ников");
  for (let j = 0; j < users.length; j++) {
    if (users[j].username == inputs[0].value) {
      console.log(users[j]);
      alreadyСreatedUser++;
      return false; //нахождение совпадение среди уже существующих ников
    }
  }
};

let testnasowpadenia2 = () => {
  console.log("идет проверка на совпадения паролей");
  for (let j = 0; j < users.length; j++) {
    if (users[j].userpass == inputs[1].value) {
      console.log(users[j]);
      alreadyСreatedUser++;
      return false; //нахождение совпадение среди уже существующих паролей
    }
  }
};

//* functions for error bye validation
let errtext2;
let err = () => {
  //* if password is wrong
  if (cp == false) {
    errtext2 = document.createElement("span");
    errtext2.classList.add("errtext2");
    errtext2.innerText =
      "Пароль должен содержать минимум восемь символов,где есть минимум одна буква и одна цифра.";
    foreror.append(errtext2);
    cp = true;
  } else cp = true;
  //   return errtext2;
};

let errtext;
let err2 = () => {
  //* if login is wrong
  if (cl == false) {
    errtext = document.createElement("span");
    errtext.classList.add("errtext");
    errtext.innerText =
      "Логин должен состоять хотя бы из 1 символа и не повторять другой логин.";
    foreror.append(errtext);
    cl = true;
  } else cl = true;
  //   return errtext;
};

for (let input of inputs) {
  input.addEventListener("blur", () => {
    //при unfocus'e на input
    let ruls = input.dataset.rule; //получение правила 'password' or 'login'
    console.log(ruls);
    value = input.value;
    let length = value.length;
    switch (ruls) {
      case "login":
        if (testnasowpadenia() == false) {
          //найдено совпадение среди уже существующих ников
          if (testnasowpadenia2() == false) {
            alert("вы вернулись!");
          } else {
            checklog = false;
            err2();
            break;
          }
        } else {
          if (/^[A-Za-z0-9_]{1,24}$/g.test(value) == false) {
            checklog = false;
          }
          if (/^[A-Za-z0-9_]{1,24}$/g.test(value) == true) checklog = true;
          console.log(checklog);
          break;
        }
      case "password":
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(value) == false) {
          checkpass = false;
        }
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(value) == true)
          checkpass = true;
        console.log(checkpass);
        break;
    }
    if (checkpass == false) {
      err();
    }
    if (checklog == false) {
      err2();
    }
    if (checklog == true && cl == true) {
      errtext.innerText = "";
    }
    if (checkpass == true && cp == true) {
      errtext2.innerText = "";
    }
    if (
      checkpass == true &&
      checklog == true &&
      alreadyСreatedUser != 2 &&
      qw != 1
    ) {
      login.addEventListener("click", final);
    }
  });
}
let final = () => {
  alert("вы зарегались");
  users.push(new NewUser());
  login.removeEventListener("click", final);
  qw = 1;
  //TODO переход в личный кабинет
};
