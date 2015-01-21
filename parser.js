var parse_courses = function()
{
	d3.csv("http://broratheon.github.io/Comp98/Data/CourseLocations.csv", function(courses)
		{
			console.log("courses:", courses)
		})
}