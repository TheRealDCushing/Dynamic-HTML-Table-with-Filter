### Summary
Given a list of JSON objects, I was tasked with displaying the relevant information on an HTML table
filtering for specific values within the table. (In this case, I chose to filter by state and date/time)

First I created an HTML template that included a space wherein a table could be dynamically generated
and altered following the press of a button. I added class="filter" to li tags containing my filter
options. This made it easy to reference and understand at a glance.

On the javascript end, I used d3 to select the specific area of interest in the HTML doc, in this case,
"tbody", where I would insert the body of my table by appending rows ("tr"). I used an event listener
to wait for a button click on the submit button, and that would initialize a whatever functions were
necessary to populate the table. 
