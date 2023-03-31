# this-is-jeopardy

## API 
[http://jservice.io/](http://jservice.io/)

*  [/api/clues](http://jservice.io/api/clues)
* Options
     - value(int): the value of the clue in dollars category(int): the id of the category you want to return
     - min_date(date): earliest date to show, based on original air date
     - max_date(date): latest date to show, based on original air date
     - offset(int): offsets the returned clues. Useful in pagination
*  [/api/random](http://jservice.io/api/random)
* Options 
     - count(int): amount of clues to return, limited to 100 at a time

*  [/api/final](http://jservice.io/api/final)
*  [/api/clues](http://jservice.io/api/clues)
*  [/api/categories](http://jservice.io/api/categories)
* [another category](https://jservice.io/categories)
* Options:
   - count(int): amount of categories to return, limited to 100 at a time
   - offset(int): offsets the starting id of categories returned. Useful in pagination.

   ```js
   http://jservice.io/api/categories?count=6
   ```

*  [/api/category](http://jservice.io/api/category)
* Options:
     - id(int): Required the ID of the category to return.