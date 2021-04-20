// The function the button is firing 

    const testing = () => {
        let filmUrl = "https://ghibliapi.herokuapp.com/films"
        fetch(filmUrl)
            .then(res => res.json()) 
            .then(json => {
                console.log(json)
                displayFilms(json)
    })
}

    let onClickButton = document.getElementById('button')
    onClickButton.onclick = testing

    const displayFilms = (films) => {
        const ul = document.getElementById("results-list")

        films.map((film) => {
            let li = document.createElement('li')
            li.innerText = `${film.title} ${film.release_date}`
            ul.appendChild(li)
        })
        
    }