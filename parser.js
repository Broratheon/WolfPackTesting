var parse_courses = function()
{
	var courses_array;

	d3.csv("CourseLocations.csv", function(courses)
		{
			courses_array = courses;
		})

	return courses_array;
}