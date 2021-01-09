# plotly-challenge
Name
Plot.ly Homework - Belly Button Biodiversity

Overview
This assignment required building an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Approach & Methodology
The project called for using JavaScript, D3 and other tools to build interactive dashboards. 

Step 1: Using JavaScript, D3 and Plotly
1.	Read in the `samples.json` database
2.	Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
o	Used `sample_values` as the values for the bar chart.
o	Used `otu_ids` as the labels for the bar chart.
o	Used `otu_labels` as the hovertext for the chart.
3.	Create a bubble chart that displays each sample.
o	Used `otu_ids` for the x values.
o	Used `sample_values` for the y values.
o	Used `sample_values` for the marker size.
o	Used `otu_ids` for the marker colors.
o	Used `otu_labels` for the text values.
4.	Displayed the selected sample metadata in a demographics display box
5.	Display each key-value pair from the metadata JSON object somewhere on the page.
6.	Dashboard updates all of the plots any time that a new sample is selected.

Step 2: The interactive dashboard was deployed to git pages.

Key Takeaways
Learned how to manage through two dimensional arrays.

Repository Summary & Deliverables Locator
The project repository is located at: https://github.com/rodgerskent/plotly-challenge
The HTML dashboard is available at: https://rodgerskent.github.io/plotly-challenge/

Support
Appreciate the course instructors, TA’s and the tutor program

Roadmap
Not applicable

Contributing
This project was complete on an individual basis

License
Not applicable

Project status
Project is complete
