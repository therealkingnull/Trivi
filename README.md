<p align="center">
  <a href="https://github.com/therealkingnull/trivi">
    <img src="assets/logo.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Trivi</h3>
  

<p align="center">The official repository for the trivia api, Trivi.</p>

 
 ## About
 
 Trivi can be used to create trivia related challenges, games, or apps to play with groups of people. You can use the api to get random questions, and you can even sort them in many different ways; making the experience better for you.
 
 ***

## Categories

The categories that are included in the API are as follows:

<li>usa</li>
<li>music</li>
<li>space</li>
<li>sports</li>

***

## Endpoints

The endpoints of the api are as follows:

### Get A Random Trivia Question Unsorted:

[https://triviapi.herokuapp.com/trivia](https://triviapi.herokuapp.com/trivia)

***

### Get A Random Trivia Question By Difficulty:

(The difficulty is rated on a scale from 1-5, with 5 being the hardest and 1 being the easiest.)

[https://triviapi.herokuapp.com/difficulty={difficulty}](https://triviapi.herokuapp.com/difficulty={difficulty})

***

### Get A Random Trivia Question By Category:

[https://triviapi.herokuapp.com/category={category}](https://triviapi.herokuapp.com/category={category})

***

### Get A Random Trivia Question By Difficulty And Category:

[https://triviapi.herokuapp.com/difficulty={difficulty}&category={category}](https://triviapi.herokuapp.com/difficulty={difficulty}&category={category})

***

## Add to the api

To add to the api, submit a pull request, and follow this format when uploading data:

### Format: 

```javascript
{
        "id": id before + 1,
        "question": "your_question",
        "difficulty": "difficulty from 1-5",
        "category": "the_category",
        "tag": "the_tag",
        "answer": "the_answer"
    }
```

***

### Example:

```javascript
{
        "id": "1",
        "question": "In what year was the United States of America discovered?",
        "difficulty": "2",
        "category": "USA",
        "tag": "Discovery",
        "answer": "1492"
    }
```

***

Thank you for checking out the api, and please enjoy using it. If you find any errors, please report them using the "Issues" tab in this repository.
