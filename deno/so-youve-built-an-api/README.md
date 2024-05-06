# So You've built an API?

## AI generated Description

The `index.html` file is a simple web page with a form that includes a text input field and a submit button. The form is styled with CSS, and the submit button has a click event listener attached to it.

When the submit button is clicked, the event listener function prevents the form from submitting (using `e.preventDefault()`) and then retrieves the value from the text input field. If the input value is not empty, it sends a `POST` request to http://localhost:8000 with the input value in the request body.

If the `POST` request is successful, it updates the text of a div with id "target" with the number of characters in the response. If the input field is empty, it alerts the user that their content is too short. If the input field cannot be found, it logs an error message to the console.

The main.ts file is a Deno server that listens for incoming HTTP requests.

If the request method is `POST`, it reads the request body as JSON and extracts the `inputValue` property. It then responds with a JSON object that contains the number of characters in `inputValue`. The response has a status code of 201 and includes an `Access-Control-Allow-Origin` header set to `*` to allow cross-origin requests.

If the request method is not `POST`, it responds with a status code of 400 and a body of 'not found'.
