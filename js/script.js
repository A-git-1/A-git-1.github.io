var name;
var tel;
var email;
var block;

function checkName(id)
{
    name = document.getElementById(id).value;
    let regex = /^[а-яА-Я\s]{2,15}$/;

    let spanId = id + "_check";

    if (regex.test(name))
    {
        document.getElementById(spanId).style.color = "green";
        document.getElementById(id).style.backgroundColor = "green";
        document.getElementById(spanId).innerHTML = "ввод верный!";
        return true;
    }
    else
    {
        document.getElementById(spanId).style.color = "red";
        document.getElementById(id).style.backgroundColor = "red";
        document.getElementById(spanId).innerHTML = "имя должно быть от 2 до 15 символов на русском языке";
        return false;
    }
}

function checkPhone(id) 
{
    tel = document.getElementById(id).value;
    let regex = /^\d{3}-(\d{3})-(\d{2})-\d{2}$/;

    let spanId = id + "_check";

    if (regex.test(tel))
        {
            document.getElementById(spanId).style.color = "green";
            document.getElementById(id).style.backgroundColor = "green";
            document.getElementById(spanId).innerHTML = "ввод верный!";

            return true;
        }
        else
        {
            document.getElementById(spanId).style.color = "red";
            document.getElementById(id).style.backgroundColor = "red";
            document.getElementById(spanId).innerHTML = "не соответствие формату xxx-xxх-xx-xx";
            return false;
        }
}

function checkEmail(id)
{
    email = document.getElementById(id).value;
    let regex = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/;

    let spanId = id + "_check";

    if (regex.test(email))
    {
        document.getElementById(spanId).style.color = "green";
        document.getElementById(id).style.backgroundColor = "green";
        document.getElementById(spanId).innerHTML = "ввод верный!";
        return true;
    }
    else
    {
        document.getElementById(spanId).style.color = "red";
        document.getElementById(id).style.backgroundColor = "red";
        document.getElementById(spanId).innerHTML = "ввод не является электронной почтой!";
        return false;
    }
}

function checkBlock(id)
{
    block = document.getElementById(id).value;

    let spanId = id + "_check";

    if(block == "Первый блок" || block == "Второй блок" || block == "Третий блок")
    {
        document.getElementById(spanId).style.color = "green";
        document.getElementById(id).style.backgroundColor = "green";
        document.getElementById(spanId).innerHTML = "ввод верный!";
        return true;
    }
    else
    {
        document.getElementById(spanId).style.color = "red";
        document.getElementById(id).style.backgroundColor = "red";
        document.getElementById(spanId).innerHTML = "такого блока не существует!";
        return false;
    }
}

function sendForm(id)
{
    let string = String(name) + "\n" + String(tel) + "\n" + String(email) + "\n" + String(block) + "\n" + String(document.getElementById("txt1").value) + "\n" + String(document.getElementById("txt").value);

    alert(string);
}

document.querySelector("#btn1").addEventListener("mouseenter", function()
{
    this.style.backgroundColor = "chartreuse";
});

document.querySelector("#btn1").addEventListener("mouseleave", function()
{
    this.style.backgroundColor = "orange";
});

document.querySelector("#btn2").addEventListener("mouseenter", function()
{
    this.style.backgroundColor = "chartreuse";
});

document.querySelector("#btn2").addEventListener("mouseleave", function()
{
    this.style.backgroundColor = "orange";
});
