const links = [
    {
      label: "Week1 notes",
      url: "week01/index.html"
    },

    {
      label: "Week2 notes",
      url: "week02/index.html"
    },

    {
      label: "Week3 notes",
      url: "week03/index.html"
    },

    {
      label: "Week4 notes",
      url: "week04/index.html"
    },

    {
      label: "Week5 notes",
      url: "week05/index.html"
    },

    {
      label: "Midterm"
    },

    {
      label: "Week7 notes",
      url: "week07/index.html"
    },

    {
      label: "Week8 notes",
      url: "week08/index.html"
    }


  ]

const name1 = document.getElementById("weeks")

for (let i=0 ; i < links.length; i++){
    var ttt = document.createElement("li");
    var aaa = document.createElement("a");

    aaa.textContent=links[i].label;
    aaa.setAttribute("href", links[i].url);

    ttt.appendChild(aaa);
    name1.append(ttt);

}

const toDo = [
  {
    label: "Todo list",
    url: "week06/index.html"
  }
]

const name2 = document.getElementById("toodo")

for (let i=0 ; i < toDo.length; i++){
  var link = document.createElement("li");
  var anchor = document.createElement("a");

  anchor.textContent = toDo[i].label;
  anchor.setAttribute("href", toDo[i].url);

  link.appendChild(anchor);
  name2.append(link);

}


