#Validation

##What is validation?

Validation is the process that ensures all data handled by your application is correct. To validate a piece of datum, you check if it satisfies certain criteria. You would use validation, for instance, to make sure a new user's password contained a certain number of characters, or that they had submitted a valid email address.

You can perform both input (headers, path parameters, query parameters, and payload data) and output validation with hapi, using the joi module.

##Why is it important?

Validation is critical for ensuring your application's __security__ and __stability__, as it allows you a greater degree of control over data input and output. 

Validating payload data is particularly crucial, given that it consists of user submitted data. Validation ensures that payload data fits within given parameters (e.g. length, type), and allows you to strip out unwanted content (e.g. script tags) through regex.

