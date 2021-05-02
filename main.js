

async function SendRequestToApi() {
    let urlforsearch = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?'

    let name = document.getElementById('CoctailName').value.toString()

    let count = document.getElementById('CoctailsCount').value
    console.log(count)

    let alcheck = document.getElementsByName('AlcoholCheck')[0].checked
    console.log(alcheck)

    endUrl = urlforsearch + '&s=' + name
    let response = await fetch(endUrl)
    console.log(response)
    let data = await response.json()
    console.log(data['drinks'][0].strAlcoholic)
    DataView(data, name, count, alcheck)

}

async function DataView(data, name, count, alcheck) {
    let checkMain = document.getElementsByClassName('Main')
    if(checkMain[0]!=null){
      document.body.removeChild(checkMain[0]);
    }
    let main = document.createElement('div');
          main.className = "Main";
    document.body.appendChild(main);

    if(alcheck){
      alcheck = 'Alcoholic'
    }
    else {
      alcheck = 'Non alcoholic'
    }

    for(var i = 0; data['drinks'][i] != null && i < count; i++){
      //let singleData = await data['drinks'][i].json()
      //let singleData = JSON.stringify(data['drinks'][2])
      //console.log(data['drinks'][i])
      if(data['drinks'][i].strAlcoholic == alcheck){
        console.log(data['drinks'][i])
        let accbutton = document.createElement('button')
            accbutton.className = "accordion"
            //accbutton.innerHTML = "<h4>" + data['drinks'][i].strDrink + "</h4>"
            accbutton.innerHTML = data['drinks'][i].strDrink
        let div = document.createElement('div')
            div.className = "panel"
        main.appendChild(accbutton)
        main.appendChild(div)
        let x = document.createElement("IMG")
            x.className = 'CoctailImage'
            x.setAttribute("src", data['drinks'][i].strDrinkThumb)
            x.setAttribute("width", "auto")
            x.setAttribute("height", "500px")

        div.appendChild(x)
        let sectionToIngdDiv = document.createElement('div')
            sectionToIngdDiv.className = 'sections'
            sectionToIngdDiv.innerHTML = '<h2>Ingredients</h2>'
        div.appendChild(sectionToIngdDiv)
        let ingdDiv = document.createElement('div')
            ingdDiv.className = 'ingredients'
            let ingdUl = document.createElement('ul')
                ingdUl.className = 'ingdUl'
                let ingredients = []
                ingredients[0] = data['drinks'][i].strIngredient1 + ' - ' + data['drinks'][i].strMeasure1
                ingredients[1] = data['drinks'][i].strIngredient2 + ' - ' + data['drinks'][i].strMeasure2
                ingredients[2] = data['drinks'][i].strIngredient3 + ' - ' + data['drinks'][i].strMeasure3
                ingredients[3] = data['drinks'][i].strIngredient4 + ' - ' + data['drinks'][i].strMeasure4
                ingredients[4] = data['drinks'][i].strIngredient5 + ' - ' + data['drinks'][i].strMeasure5
                ingredients[5] = data['drinks'][i].strIngredient6 + ' - ' + data['drinks'][i].strMeasure6
                ingredients[6] = data['drinks'][i].strIngredient7 + ' - ' + data['drinks'][i].strMeasure7
                ingredients[7] = data['drinks'][i].strIngredient8 + ' - ' + data['drinks'][i].strMeasure8
                ingredients[8] = data['drinks'][i].strIngredient9 + ' - ' + data['drinks'][i].strMeasure9
                ingredients[9] = data['drinks'][i].strIngredient10 + ' - ' + data['drinks'][i].strMeasure10
                ingredients[10] = data['drinks'][i].strIngredient11 + ' - ' + data['drinks'][i].strMeasure11
                ingredients[11] = data['drinks'][i].strIngredient12 + ' - ' + data['drinks'][i].strMeasure12
                ingredients[12] = data['drinks'][i].strIngredient13 + ' - ' + data['drinks'][i].strMeasure13
                ingredients[13] = data['drinks'][i].strIngredient14 + ' - ' + data['drinks'][i].strMeasure14
                ingredients[14] = data['drinks'][i].strIngredient15 + ' - ' + data['drinks'][i].strMeasure15
                for(var g = 0; ingredients[g] != null && ingredients[g] != 'null - null' && ingredients[g] != ''; g++){
                  ingredients[g] = ingredients[g].replace('- null','')
                  ingdUl.innerHTML += "<li>" + ingredients[g] + "</li>"
                }
            ingdDiv.appendChild(ingdUl)
        div.appendChild(ingdDiv)
        let sectionToInstructDiv = document.createElement('div')
            sectionToInstructDiv.className = 'sections'
            sectionToInstructDiv.innerHTML = '<h2>Instructions</h2>'
        div.appendChild(sectionToInstructDiv)
        let instructDiv = document.createElement('div')
            instructDiv.className = 'instructions'
            instructDiv.innerHTML = '   ' + data['drinks'][i].strInstructions
        div.appendChild(instructDiv)
      }
      else {
        count++
      }
    }


    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
}
